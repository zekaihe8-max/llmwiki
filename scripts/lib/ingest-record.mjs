/** Per-article ingest result records. Live under raw/state/ — never under wiki/. */
import fs from 'node:fs'
import path from 'node:path'
import { parseWikiLinks } from '../build-graph.mjs'
import { parseFrontmatter } from './yaml.mjs'
import { rawPaths, writeJson } from './store.mjs'

/**
 * @typedef {{
 *   action: 'create' | 'update' | 'unchanged' | 'create_needed' | 'no_change' | 'add_evidence' | 'change_conclusion' | 'record_contradiction',
 *   path?: string,
 *   reason?: string,
 * }} TopicAction
 */

/**
 * Build and persist a structured ingest record after compile/filing.
 * Semantic correctness of reasons is Agent-reviewed; this validates paths/links.
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
  agentNotes = null,
  now = () => new Date().toISOString(),
}) {
  const stamp = now()
  const slug = record.slug
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
    files_changed: filesChanged,
    agent_notes: agentNotes,
    validation: validateIngestRecordShape({
      wikiRoot,
      sourcePath: record.source_path,
      topicActions,
      filesChanged,
    }),
  }

  const dir = path.join(rawPaths(rawRoot).state, 'ingest-records')
  fs.mkdirSync(dir, { recursive: true })
  const safeStamp = stamp.replace(/[:.]/g, '-')
  const file = path.join(dir, `${slug}--${safeStamp}.json`)
  writeJson(file, payload)
  // Also keep a latest pointer for the slug.
  writeJson(path.join(dir, `${slug}.latest.json`), payload)
  return { path: file, record: payload }
}

export function validateIngestRecordShape({ wikiRoot, sourcePath, topicActions, filesChanged }) {
  const errors = []
  if (sourcePath) {
    const abs = path.join(wikiRoot, sourcePath)
    if (!fs.existsSync(abs)) errors.push(`source path missing: ${sourcePath}`)
    else {
      try {
        const parsed = parseFrontmatter(fs.readFileSync(abs, 'utf8'))
        if (parsed?.data?.type !== 'Source') errors.push(`source path is not type Source: ${sourcePath}`)
        const dir = path.posix.dirname(sourcePath)
        const links = parseWikiLinks(parsed?.body || '', dir === '.' ? '' : `${dir}/`)
        const topicLinks = links.filter((link) => link.includes('topics/'))
        for (const action of topicActions || []) {
          if (!action.path) continue
          if (!topicLinks.some((link) => link.replace(/\\/g, '/').endsWith(action.path.replace(/^topics\//, '')) || link.includes(action.path))) {
            // Soft: topic may be linked from topic page back-refs only
          }
          const topicAbs = path.join(wikiRoot, action.path)
          if (!fs.existsSync(topicAbs)) errors.push(`topic path missing: ${action.path}`)
        }
      } catch (error) {
        errors.push(`source parse failed: ${error.message}`)
      }
    }
  }
  for (const rel of filesChanged || []) {
    if (String(rel).startsWith('raw/')) {
      errors.push(`files_changed must not include raw/ paths: ${rel}`)
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
  return [...new Set(links.filter((link) => link.replace(/\\/g, '/').includes('topics/')))]
}
