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

/**
 * Derive Source/Topic actions and files_changed from a real diff.
 * Linked/consulted topics that did not change → unchanged (not update).
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

  const topicActions = []
  for (const topicPath of [...topicPaths].sort()) {
    const agent = agentByPath.get(topicPath) || {}
    let action = 'unchanged'
    if (diff.created.includes(topicPath)) action = 'create'
    else if (diff.updated.includes(topicPath)) {
      action = agent.action && agent.action !== 'unchanged' && agent.action !== 'no_change'
        ? agent.action
        : 'update'
    } else if (diff.deleted.includes(topicPath)) action = 'delete'
    else action = 'unchanged'

    const reason = agent.reason
      || (action === 'unchanged' ? 'consulted; content unchanged on disk' : `detected ${action} from wiki content diff`)
    topicActions.push({ path: topicPath, action, reason })
  }

  return { sourceAction, topicActions, filesChanged, changedPaths: [...changed].sort() }
}
