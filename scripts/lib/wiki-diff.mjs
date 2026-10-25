/** Snapshot and diff wiki Markdown files for ingest-record accuracy. */
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

/**
 * Walk wikiRoot for .md files (skip _* / .* segments). Return Map of wiki-relative path → sha256(content).
 * @param {string} wikiRoot
 * @returns {Map<string, string>}
 */
export function snapshotWikiFiles(wikiRoot) {
  /** @type {Map<string, string>} */
  const map = new Map()
  if (!fs.existsSync(wikiRoot)) return map
  walk(wikiRoot, '', map)
  return map
}

function walk(dir, rel, map) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue
    const childRel = rel ? `${rel}/${entry.name}` : entry.name
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(abs, childRel, map)
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      const buf = fs.readFileSync(abs)
      map.set(childRel.replace(/\\/g, '/'), crypto.createHash('sha256').update(buf).digest('hex'))
    }
  }
}

/**
 * @param {Map<string, string>} before
 * @param {Map<string, string>} after
 * @returns {{ created: string[], updated: string[], deleted: string[], unchanged: string[] }}
 */
export function diffWikiSnapshots(before, after) {
  const created = []
  const updated = []
  const deleted = []
  const unchanged = []
  for (const [rel, hash] of after) {
    if (!before.has(rel)) created.push(rel)
    else if (before.get(rel) !== hash) updated.push(rel)
    else unchanged.push(rel)
  }
  for (const rel of before.keys()) {
    if (!after.has(rel)) deleted.push(rel)
  }
  created.sort()
  updated.sort()
  deleted.sort()
  unchanged.sort()
  return { created, updated, deleted, unchanged }
}

/** Map disk diff class → allowed Agent action names. */
const UPDATE_LIKE = new Set(['update', 'add_evidence', 'change_conclusion', 'record_contradiction'])
const UNCHANGED_LIKE = new Set(['unchanged', 'no_change'])
const CREATE_LIKE = new Set(['create', 'create_needed'])

/**
 * Disk-derived action for a path.
 * @param {{ created: string[], updated: string[], deleted: string[], unchanged: string[] }} diff
 * @param {string} topicPath
 */
export function diskActionForPath(diff, topicPath) {
  if (diff.created.includes(topicPath)) return 'create'
  if (diff.updated.includes(topicPath)) return 'update'
  if (diff.deleted.includes(topicPath)) return 'delete'
  return 'unchanged'
}

/**
 * True when Agent-claimed action is compatible with disk truth.
 * @param {string} diskAction
 * @param {string|undefined} claimed
 */
export function claimCompatibleWithDisk(diskAction, claimed) {
  if (!claimed) return false
  const c = String(claimed)
  if (diskAction === 'create') return CREATE_LIKE.has(c)
  if (diskAction === 'update') return UPDATE_LIKE.has(c)
  if (diskAction === 'delete') return c === 'delete'
  if (diskAction === 'unchanged') return UNCHANGED_LIKE.has(c)
  return false
}

/**
 * Derive Source/Topic actions and files_changed from a real diff.
 * Disk is authoritative for create/update/delete/unchanged.
 * Agent claims that disagree with disk produce claimErrors (must fail validation — never silently rewrite to succeed).
 * Reasons are NEVER auto-filled; missing Agent reasons stay empty for validation to reject.
 *
 * @param {{ created: string[], updated: string[], deleted: string[], unchanged: string[] }} diff
 * @param {{ sourcePath: string|null, topicsConsulted?: string[], agentTopicActions?: object[] }} opts
 */
export function deriveActionsFromDiff(diff, { sourcePath = null, topicsConsulted = [], agentTopicActions = [] } = {}) {
  const changed = new Set([...diff.created, ...diff.updated, ...diff.deleted])
  const filesChanged = [...diff.created, ...diff.updated, ...diff.deleted].sort()

  let sourceAction = 'unknown'
  if (sourcePath) {
    const norm = sourcePath.replace(/\\/g, '/')
    if (diff.created.includes(norm)) sourceAction = 'create'
    else if (diff.updated.includes(norm)) sourceAction = 'update'
    else if (diff.deleted.includes(norm)) sourceAction = 'delete'
    else if (diff.unchanged.includes(norm) || !changed.has(norm)) sourceAction = 'unchanged'
  }

  const agentByPath = new Map()
  for (const entry of agentTopicActions || []) {
    if (entry?.path) agentByPath.set(String(entry.path).replace(/\\/g, '/'), entry)
  }

  const topicPaths = new Set([
    ...(topicsConsulted || []).map((p) => String(p).replace(/\\/g, '/')),
    ...agentByPath.keys(),
  ])

  /** @type {string[]} */
  const claimErrors = []
  const topicActions = []
  for (const topicPath of [...topicPaths].sort()) {
    const agent = agentByPath.get(topicPath) || {}
    const diskAction = diskActionForPath(diff, topicPath)

    // Record uses disk-derived action class (update-like subtype kept only when compatible).
    let action = diskAction
    if (diskAction === 'update' && agent.action && UPDATE_LIKE.has(String(agent.action))) {
      action = agent.action
    }

    if (agent.action) {
      if (!claimCompatibleWithDisk(diskAction, agent.action)) {
        claimErrors.push(
          `topic ${topicPath}: Agent claimed ${agent.action} but disk shows ${diskAction} (reject; do not rewrite)`,
        )
      }
    }

    // Never invent a reason — empty reason must fail validation later.
    const reason = typeof agent.reason === 'string' && agent.reason.trim() ? agent.reason.trim() : undefined
    topicActions.push({ path: topicPath, action, ...(reason ? { reason } : {}) })
  }

  return {
    sourceAction,
    topicActions,
    filesChanged,
    changedPaths: [...changed].sort(),
    claimErrors,
  }
}
