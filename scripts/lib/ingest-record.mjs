/** Per-article ingest result records. Live under raw/state/ — never under wiki/. */
import fs from 'node:fs'
import path from 'node:path'
import { parseWikiLinks } from '../build-graph.mjs'
import { deriveActionsFromDiff, diffWikiSnapshots, snapshotWikiFiles } from './wiki-diff.mjs'
import { parseFrontmatter } from './yaml.mjs'
import { rawPaths, writeJson } from './store.mjs'

/**
 * @typedef {{
 *   action: 'create' | 'update' | 'delete' | 'unchanged' | 'create_needed' | 'no_change' | 'add_evidence' | 'change_conclusion' | 'record_contradiction',
 *   path?: string,
 *   reason?: string,
 * }} TopicAction
 */

export { snapshotWikiFiles, diffWikiSnapshots, deriveActionsFromDiff }

/**
 * Build a record from before/after wiki snapshots + optional Agent notes.
 * Program verifies file diffs; Agent notes are claims about why (not proof of understanding).
 * Missing selection / new-topic reasons → validation failure (never auto-fill).
 * Fake action claims that disagree with disk → validation failure (never silently rewrite to succeed).
 */
export function buildIngestRecordFromDiff({
  rawRoot,
  wikiRoot,
  record,
  before,
  after,
  topicsConsulted = [],
  agentNotes = null,
  now = () => new Date().toISOString(),
}) {
  const diff = diffWikiSnapshots(before, after)
  const agentTopicActions = Array.isArray(agentNotes?.topics) ? agentNotes.topics : []
  const consulted = [
    ...topicsConsulted,
    ...(Array.isArray(agentNotes?.topics_consulted) ? agentNotes.topics_consulted : []),
  ].map((p) => String(p).replace(/\\/g, '/'))

  const derived = deriveActionsFromDiff(diff, {
    sourcePath: record.source_path,
    topicsConsulted: consulted,
    agentTopicActions,
  })

  const selectionReasons = normalizeReasonMap(agentNotes?.selection_reasons)
  const newTopicReasons = normalizeReasonMap(agentNotes?.new_topic_reasons)

  return writeIngestRecord({
    rawRoot,
    wikiRoot,
    record,
    sourceAction: derived.sourceAction,
    topicsConsulted: [...new Set(consulted)],
    topicActions: derived.topicActions,
    filesChanged: derived.filesChanged,
    newTopicReasons,
    selectionReasons,
    claimErrors: derived.claimErrors || [],
    agentNotes: {
      claimed_consulted: agentNotes?.topics_consulted || topicsConsulted,
      selection_reasons: Object.keys(selectionReasons).length ? selectionReasons : null,
      notes: agentNotes?.notes || null,
      // Explicit: disk diff is authoritative for create/update/unchanged.
      program_verifiable: {
        source_action: derived.sourceAction,
        files_changed: derived.filesChanged,
      },
    },
    before,
    after,
    now,
    strict: true,
  })
}

function normalizeReasonMap(raw) {
  /** @type {Record<string, string>} */
  const out = {}
  if (!raw || typeof raw !== 'object') return out
  for (const [k, v] of Object.entries(raw)) {
    const key = String(k).replace(/\\/g, '/')
    if (typeof v === 'string' && v.trim()) out[key] = v.trim()
  }
  return out
}

/**
 * Build and persist a structured ingest record after compile/filing.
 * Semantic correctness of reasons is Agent-reviewed; this validates paths/links/diffs.
 *
 * When `strict` is true (default for filing), validation failure throws and does not write.
 */
export function writeIngestRecord({
  rawRoot,
  wikiRoot,
  record,
  sourceAction = 'unknown',
  topicsConsulted = [],
  topicActions = [],
  filesChanged = [],
  newTopicReasons = {},
  selectionReasons = {},
  claimErrors = [],
  agentNotes = null,
  before = null,
  after = null,
  now = () => new Date().toISOString(),
  strict = true,
}) {
  const stamp = now()
  const slug = record.slug
  const validation = validateIngestRecordShape({
    wikiRoot,
    sourcePath: record.source_path,
    sourceAction,
    topicActions,
    filesChanged,
    before,
    after,
    newTopicReasons,
    selectionReasons,
    claimErrors,
  })

  const payload = {
    schema: 'wiki-hezekai-ingest-record/v1',
    at: stamp,
    url: record.url,
    slug,
    content_hash: record.content_hash || null,
    source: {
      path: record.source_path || null,
      action: sourceAction,
    },
    topics_consulted: topicsConsulted,
    topics: topicActions,
    new_topic_reasons: newTopicReasons,
    selection_reasons: selectionReasons,
    files_changed: filesChanged,
    agent_notes: agentNotes,
    validation,
  }

  if (strict && !validation.ok) {
    const err = new Error(`ingest-record validation failed: ${validation.errors.join('; ')}`)
    err.validation = validation
    err.payload = payload
    throw err
  }

  const dir = path.join(rawPaths(rawRoot).state, 'ingest-records')
  fs.mkdirSync(dir, { recursive: true })
  const safeStamp = stamp.replace(/[:.]/g, '-')
  const file = path.join(dir, `${slug}--${safeStamp}.json`)
  writeJson(file, payload)
  writeJson(path.join(dir, `${slug}.latest.json`), payload)
  return { path: file, record: payload }
}

export function validateIngestRecordShape({
  wikiRoot,
  sourcePath,
  sourceAction = null,
  topicActions = [],
  filesChanged = [],
  before = null,
  after = null,
  newTopicReasons = {},
  selectionReasons = {},
  claimErrors = [],
}) {
  const errors = []
  const changedSet = new Set((filesChanged || []).map((p) => String(p).replace(/\\/g, '/')))
  const reasons = normalizeReasonMap(selectionReasons)
  const newReasons = normalizeReasonMap(newTopicReasons)

  for (const msg of claimErrors || []) {
    if (msg) errors.push(String(msg))
  }

  if (sourcePath) {
    const abs = path.join(wikiRoot, sourcePath)
    const norm = sourcePath.replace(/\\/g, '/')
    if (!fs.existsSync(abs)) errors.push(`source path missing: ${sourcePath}`)
    else {
      try {
        const parsed = parseFrontmatter(fs.readFileSync(abs, 'utf8'))
        if (parsed?.data?.type !== 'Source') errors.push(`source path is not type Source: ${sourcePath}`)
        const dir = path.posix.dirname(sourcePath)
        parseWikiLinks(parsed?.body || '', dir === '.' ? '' : `${dir}/`)
      } catch (error) {
        errors.push(`source parse failed: ${error.message}`)
      }
    }

    if (sourceAction === 'create' || sourceAction === 'update') {
      if (!changedSet.has(norm)) {
        errors.push(`sourceAction ${sourceAction} but ${norm} not in files_changed`)
      }
    }
    if (sourceAction === 'unchanged' && changedSet.has(norm)) {
      errors.push(`sourceAction unchanged but ${norm} is in files_changed`)
    }
    if (sourceAction === 'create' && before instanceof Map && before.has(norm)) {
      errors.push(`sourceAction create but ${norm} existed before Agent run`)
    }
    if (sourceAction === 'create' && after instanceof Map && !after.has(norm)) {
      errors.push(`sourceAction create but ${norm} missing after Agent run`)
    }
    if ((sourceAction === 'update' || sourceAction === 'unchanged') && before instanceof Map && !before.has(norm) && after instanceof Map && after.has(norm)) {
      errors.push(`sourceAction ${sourceAction} but ${norm} was newly created (use create)`)
    }
  }

  for (const action of topicActions || []) {
    if (!action?.path) {
      errors.push('topic action missing path')
      continue
    }
    const norm = String(action.path).replace(/\\/g, '/')
    const topicAbs = path.join(wikiRoot, norm)
    if (action.action !== 'delete' && !fs.existsSync(topicAbs)) {
      errors.push(`topic path missing: ${norm}`)
    }
    if ((action.action === 'create' || action.action === 'update'
      || action.action === 'add_evidence' || action.action === 'change_conclusion'
      || action.action === 'record_contradiction') && !changedSet.has(norm)) {
      errors.push(`topic ${norm} action ${action.action} but not in files_changed (linked ≠ modified)`)
    }
    if ((action.action === 'unchanged' || action.action === 'no_change') && changedSet.has(norm)) {
      errors.push(`topic ${norm} marked unchanged but present in files_changed`)
    }

    // Selection reason required for every Topic the Agent touched/consulted.
    // Do NOT auto-fill — missing declaration must fail.
    const selection = reasons[norm] || (typeof action.reason === 'string' ? action.reason.trim() : '')
    if (!selection) {
      errors.push(`topic ${norm}: missing selection reason (Agent must declare why this Topic was chosen; no auto-fill)`)
    }

    // Unchanged still needs an explicit Agent reason (why not modified).
    if ((action.action === 'unchanged' || action.action === 'no_change') && !action.reason) {
      errors.push(`topic ${norm} unchanged requires a reason`)
    }

    if (action.action === 'create' || action.action === 'create_needed') {
      // Necessity must be in new_topic_reasons — do not accept a generic action.reason as a substitute.
      if (!newReasons[norm]) {
        errors.push(`new topic ${norm} requires new_topic_reasons (Agent must declare necessity; no auto-fill)`)
      }
    }
    if (before instanceof Map && after instanceof Map) {
      const was = before.has(norm)
      const nowHas = after.has(norm)
      const contentChanged = was && nowHas && before.get(norm) !== after.get(norm)
      if (action.action === 'create' && was) errors.push(`topic ${norm}: action create but file existed before`)
      if ((action.action === 'update' || action.action === 'add_evidence'
        || action.action === 'change_conclusion' || action.action === 'record_contradiction')
        && !contentChanged) {
        errors.push(`topic ${norm}: action ${action.action} but content unchanged on disk`)
      }
      if ((action.action === 'unchanged' || action.action === 'no_change') && contentChanged) {
        errors.push(`topic ${norm}: action unchanged but content changed on disk`)
      }
    }
  }

  for (const rel of filesChanged || []) {
    const norm = String(rel).replace(/\\/g, '/')
    if (norm.startsWith('raw/')) {
      errors.push(`files_changed must not include raw/ paths: ${rel}`)
      continue
    }
    if (before instanceof Map && after instanceof Map) {
      const was = before.has(norm)
      const nowHas = after.has(norm)
      const contentChanged = was && nowHas && before.get(norm) !== after.get(norm)
      if (!(!was && nowHas) && !(was && !nowHas) && !contentChanged) {
        errors.push(`files_changed lists ${norm} but content did not change (fake files_changed)`)
      }
    } else {
      const abs = path.join(wikiRoot, norm)
      // Without snapshots, only check existence for non-delete claims.
      if (!fs.existsSync(abs) && !norm.includes('..')) {
        // Allow missing only if we cannot know — soft skip when no snapshot.
      }
    }
  }

  return { ok: errors.length === 0, errors }
}

export function collectTouchedTopics(wikiRoot, sourcePath) {
  if (!sourcePath) return []
  const abs = path.join(wikiRoot, sourcePath)
  if (!fs.existsSync(abs)) return []
  let parsed
  try {
    parsed = parseFrontmatter(fs.readFileSync(abs, 'utf8'))
  } catch {
    return []
  }
  const dir = path.posix.dirname(sourcePath)
  const links = parseWikiLinks(parsed?.body || '', dir === '.' ? '' : `${dir}/`)
  return [...new Set(links.filter((link) => link.replace(/\\/g, '/').includes('topics/'))
    .map((link) => {
      const n = link.replace(/\\/g, '/')
      if (n.startsWith('topics/')) return n.endsWith('.md') ? n : `${n}.md`
      const idx = n.indexOf('topics/')
      if (idx >= 0) {
        const rest = n.slice(idx)
        return rest.endsWith('.md') ? rest : `${rest}.md`
      }
      return n
    }))]
}

/** Read optional Agent sidecar notes written during compile. */
export function readAgentIngestNotes(rawRoot, slug) {
  const file = path.join(rawPaths(rawRoot).state, 'ingest-notes', `${slug}.json`)
  if (!fs.existsSync(file)) return null
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch {
    return null
  }
}

/** Compile-run lock so concurrent Agent jobs cannot mix wiki diffs. */
export function acquireCompileLock(rawRoot, slug, { now = () => new Date().toISOString() } = {}) {
  const state = rawPaths(rawRoot).state
  fs.mkdirSync(state, { recursive: true })
  const lockPath = path.join(state, 'compile.lock')
  if (fs.existsSync(lockPath)) {
    let existing = null
    try { existing = JSON.parse(fs.readFileSync(lockPath, 'utf8')) } catch { /* ignore */ }
    const err = new Error(
      `compile isolation: another run holds ${lockPath}`
      + (existing?.slug ? ` (slug=${existing.slug}, at=${existing.at})` : ''),
    )
    err.lockPath = lockPath
    err.existing = existing
    throw err
  }
  const payload = { slug, at: now(), pid: process.pid }
  fs.writeFileSync(lockPath, `${JSON.stringify(payload, null, 2)}\n`, { flag: 'wx' })
  return {
    path: lockPath,
    release() {
      try {
        if (fs.existsSync(lockPath)) {
          const cur = JSON.parse(fs.readFileSync(lockPath, 'utf8'))
          if (cur?.slug === slug && cur?.pid === process.pid) fs.unlinkSync(lockPath)
        }
      } catch {
        try { fs.unlinkSync(lockPath) } catch { /* ignore */ }
      }
    },
  }
}
