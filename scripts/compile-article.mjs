// Compile one fetched article by shelling out to Codex or Cursor Agent.
// This script does not write wiki pages itself. After the CLI exits it lints,
// and only then moves status from fetched/sourced to filed.
// A missing CLI is exit code 2. Re-running a filed article does not spawn.

import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { writeGraphData } from './build-graph.mjs'
import { requireRecord } from './fetch-articles.mjs'
import { findSourcePages, lintFiling } from './lint-okf.mjs'
import { collectTouchedTopics, writeIngestRecord } from './lib/ingest-record.mjs'
import { rawPaths, writeJson } from './lib/store.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const defaultGraphOut = path.join(repoRoot, '.vitepress', 'public', 'graph-data.json')

export function buildCompilePrompt({ articlePath, url, digest, slug, title }) {
  const lines = [
    'File one wiki Source for a fetched article. Follow AGENTS.md at the repo root exactly.',
    '',
    'Article URL. Use this exact string as the Source resource and as sources[].resource:',
    url,
    '',
    `Fetched body (immutable, do not edit): ${articlePath}`,
    `Raw slug: ${slug}`,
    `Digest file: ${digest || 'unknown'}`,
  ]
  if (title) lines.push(`Digest title hint: ${title}`)
  lines.push(
    'Read the fetched article, wiki/index.md, wiki/log.md, wiki/topics/, and wiki/sources/articles/ before writing.',
    '',
    'Do this:',
    '1. Write or update exactly one Source page under wiki/sources/articles/{human-slug}.md. One article, one Source. If a Source with this resource URL already exists, update that file in place. Do not create a second Source for the same URL.',
    '2. Topic integration: read wiki/index.md and wiki/topics/ first. Prefer reuse; one article may touch many Topics; create a Topic only when no page owns the concept. Integrate evidence/conclusions/scope/contradictions — never mechanically append a per-article summary. Leaving a Topic unchanged with a clear reason is OK. Keep ## 矛盾与变化 / Contradictions (bilingual). Maintain ZH and EN together.',
    '3. Cite the fetched article. Footnote labels must match sources[].id. Wiki links are relative and end in .md. Do not link to raw/. Do not save or cite the digest summary as the article body.',
    '4. Update the matching bullets in wiki/index.md so each bullet still carries the page description (bilingual when the page has both).',
    '5. Append wiki/log.md only when that Source filename is not already mentioned. If it is already there, leave the log unchanged.',
    '6. Do not edit, reformat, or delete anything under raw/. Do not edit wiki/sources/x-digest/.',
    '',
    'Language (same-file bilingual, project default): every Source/Topic must have title + title_en, description + description_en.',
    'Body: # heading matches title; italic English title line; sections ## 摘要 / Summary, ## 综合分析 / Synthesis (topics), ## 矛盾与变化 / Contradictions (topics), ## 相关 / Related.',
    'Write ZH then EN pairs for paragraphs and bullets. Shared sources[].id and footnotes across both languages.',
    'Proper nouns, product names, APIs, commands, and resource URLs stay in their common form. Do not invent facts; translate faithfully.',
    'On re-ingest of unchanged content, never append a duplicate translation block.',
    'Set generated.by to the agent you are and generated.at to an ISO 8601 datetime with an explicit UTC offset.',
  )
  return lines.join('\n')
}

export function resolveAgent(preference = 'auto', env = process.env) {
  const want = String(preference || env.INGEST_AGENT || 'auto').toLowerCase()
  const codex = findCodex(env)
  const cursor = findCursor(env)
  if (want === 'codex') return codex
  if (want === 'cursor') return cursor
  if (want !== 'auto') throw new Error(`Unknown --agent ${preference}. Use codex, cursor, or auto.`)
  return codex || cursor
}

export function invocationArgs(resolved, prompt) {
  if (resolved.kind === 'codex') {
    return ['exec', '--sandbox', 'workspace-write', prompt]
  }
  if (resolved.kind === 'cursor') return ['-p', '--trust', '-f', prompt]
  return ['agent', '-p', '--trust', '-f', prompt]
}

export function missingAgentMessage() {
  return [
    'compile: no Codex or Cursor Agent CLI on this machine.',
    '',
    'Live compile has to run on the shared box, where both are installed and logged in:',
    '  Codex:  /home/box/.local/bin/codex   (codex-cli 0.162.1, ChatGPT login)',
    '  Cursor: /home/box/.local/bin/agent   (logged in as zekaihe8@gmail.com; needs --trust and -f)',
    '',
    'After the article is fetched, run one of:',
    '  npm run compile:article -- --url <article-url>',
    '  npm run ingest:one -- --digest raw/digests/<file>.md --url <article-url>',
    '',
    'The compile script shells out. It does not write wiki pages itself:',
    '  codex exec --sandbox workspace-write "<prompt>"',
    '  agent -p --trust -f "<prompt>"',
    '',
    'Fetch state is unchanged. Re-run the same command on the box to resume from compile.',
  ].join('\n')
}

export async function compileArticle({
  rawRoot,
  wikiRoot,
  repoRoot: cwd = repoRoot,
  url = null,
  slug = null,
  agent = 'auto',
  env = process.env,
  spawnImpl = defaultSpawn,
  resolveImpl = resolveAgent,
  now = () => new Date().toISOString(),
  graph = false,
  graphOut = defaultGraphOut,
  skip = false,
  log = console.log,
}) {
  const record = requireRecord(rawRoot, { url, slug })
  if (record.status === 'filed') {
    log(`compile ${record.slug}: already filed, skipped`)
    return { ok: true, skipped: true, code: 0, record }
  }
  if (record.status === 'skipped') {
    return { ok: false, skipped: true, code: 1, record, error: 'record is skipped' }
  }
  if (record.status === 'seen' || record.status === 'failed' || !record.article_path) {
    const error = record.status === 'failed'
      ? 'fetch failed; retry with --retry-failed before compile'
      : 'article is not fetched yet'
    return { ok: false, skipped: false, code: 1, record, error }
  }
  if (skip) {
    record.status = 'skipped'
    record.skipped_at = now()
    record.compile_error = null
    writeJson(rawPaths(rawRoot).record(record.slug), record)
    log(`compile ${record.slug}: marked skipped`)
    return { ok: true, skipped: false, code: 0, record }
  }

  const resolved = resolveImpl(agent, env)
  if (!resolved) {
    return { ok: false, skipped: false, code: 2, record, error: missingAgentMessage() }
  }

  const articlePath = path.relative(cwd, path.join(rawRoot, record.article_path)).replace(/\\/g, '/')
  const prompt = buildCompilePrompt({
    articlePath,
    url: record.url,
    digest: record.digest,
    slug: record.slug,
    title: record.title,
  })
  const args = invocationArgs(resolved, prompt)
  record.compile_agent = resolved.kind === 'cursor-bin' ? 'cursor' : resolved.kind
  writeJson(rawPaths(rawRoot).record(record.slug), record)
  log(`compile ${record.slug}: ${resolved.bin} ${args.slice(0, -1).join(' ')}`)

  const spawned = await spawnImpl({ bin: resolved.bin, args, cwd, prompt })
  const code = spawned?.code ?? 1
  const stderr = String(spawned?.stderr || '').slice(-2000)
  if (code !== 0) {
    record.compile_error = `agent exited ${code}${stderr ? `: ${stderr}` : ''}`
    const matches = findSourcePages(wikiRoot, record.url)
    if (matches.length === 1) {
      record.status = 'sourced'
      record.source_path = matches[0]
    }
    writeJson(rawPaths(rawRoot).record(record.slug), record)
    log(`compile ${record.slug}: agent failed, status ${record.status}`)
    return { ok: false, skipped: false, code, record, error: record.compile_error }
  }

  const matches = findSourcePages(wikiRoot, record.url)
  if (matches.length !== 1) {
    record.compile_error = matches.length === 0
      ? 'agent exited without a Source page whose resource is the article URL'
      : `multiple Source pages for this URL: ${matches.join(', ')}`
    if (matches.length > 1) {
      record.status = 'sourced'
      record.source_path = matches[0]
    }
    writeJson(rawPaths(rawRoot).record(record.slug), record)
    log(`compile ${record.slug}: ${record.compile_error}`)
    return { ok: false, skipped: false, code: 1, record, error: record.compile_error }
  }

  record.status = 'sourced'
  record.source_path = matches[0]
  record.compile_error = null
  writeJson(rawPaths(rawRoot).record(record.slug), record)

  const errors = lintFiling({ wikiRoot, sourcePath: matches[0], url: record.url })
  if (errors.length) {
    record.compile_error = errors.join('\n')
    writeJson(rawPaths(rawRoot).record(record.slug), record)
    log(`compile ${record.slug}: lint failed, status sourced`)
    return { ok: false, skipped: false, code: 1, record, error: record.compile_error, errors }
  }

  record.status = 'filed'
  record.filed_at = now()
  record.compile_error = null
  record.error = null
  writeJson(rawPaths(rawRoot).record(record.slug), record)
  log(`compile ${record.slug}: filed ${record.source_path}`)

  const topics = collectTouchedTopics(wikiRoot, record.source_path)
  let ingestRecord = null
  try {
    ingestRecord = writeIngestRecord({
      rawRoot,
      wikiRoot,
      record,
      sourceAction: 'update',
      topicsConsulted: topics,
      topicActions: topics.map((p) => ({ path: p, action: 'update', reason: 'linked from Source; Agent maintains semantics' })),
      filesChanged: [record.source_path, ...topics, 'index.md', 'log.md'].filter(Boolean),
      now,
    })
    if (!ingestRecord.record.validation.ok) {
      log(`ingest-record: validation warnings: ${ingestRecord.record.validation.errors.join('; ')}`)
    } else {
      log(`ingest-record: ${path.relative(rawRoot, ingestRecord.path)}`)
    }
  } catch (error) {
    log(`ingest-record: skipped (${error.message})`)
  }

  if (graph) {
    const built = writeGraphData(wikiRoot, graphOut)
    log(`graph: ${built.nodes.length} nodes, ${built.edges.length} edges`)
    const orphans = (built.nodes || []).filter((n) => n.page_type === 'Source' || n.page_type === 'Topic')
    // Orphan hint computed in build-graph; log if present
    if (built.orphanHints?.length) {
      for (const hint of built.orphanHints.slice(0, 20)) log(`graph orphan: ${hint}`)
    }
  }
  return { ok: true, skipped: false, code: 0, record, ingestRecord }
}

export function defaultSpawn({ bin, args, cwd }) {
  return new Promise((resolve) => {
    const child = spawn(bin, args, { cwd, stdio: ['ignore', 'pipe', 'pipe'] })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', (chunk) => {
      stdout += chunk
      process.stdout.write(chunk)
    })
    child.stderr.on('data', (chunk) => {
      stderr += chunk
      process.stderr.write(chunk)
    })
    child.on('error', (error) => {
      resolve({ code: 127, stdout, stderr: `${stderr}${error.message}` })
    })
    child.on('close', (code) => {
      resolve({ code: code ?? 1, stdout, stderr })
    })
  })
}

function findCodex(env) {
  const bin = firstExecutable(['codex', '/home/box/.local/bin/codex'], env.PATH)
  return bin ? { kind: 'codex', bin } : null
}

function findCursor(env) {
  const agent = firstExecutable(['agent', '/home/box/.local/bin/agent'], env.PATH)
  if (agent) return { kind: 'cursor', bin: agent }
  const cursor = firstExecutable(['cursor'], env.PATH)
  if (cursor) return { kind: 'cursor-bin', bin: cursor }
  return null
}

function firstExecutable(candidates, pathEnv) {
  for (const candidate of candidates) {
    if (candidate.includes('/') || candidate.includes('\\')) {
      if (isExecutable(candidate)) return candidate
      continue
    }
    const found = which(candidate, pathEnv)
    if (found) return found
  }
  return null
}

function which(name, pathEnv) {
  const parts = String(pathEnv || '').split(path.delimiter).filter(Boolean)
  for (const dir of parts) {
    const full = path.join(dir, name)
    if (isExecutable(full)) return full
  }
  return null
}

function isExecutable(file) {
  try {
    fs.accessSync(file, fs.constants.X_OK)
    return true
  } catch {
    return false
  }
}

function printHelp() {
  console.log(`Usage: node scripts/compile-article.mjs --url URL | --slug SLUG
       [--raw raw/] [--wiki wiki/] [--agent codex|cursor|auto] [--graph] [--skip]

Shell out to Codex (\`codex exec --sandbox workspace-write\`)
or Cursor Agent (\`agent -p --trust -f\`). Lint must pass before status becomes
"filed". A filed record is not sent to the agent again. Exit 2 means the CLI
is not installed here; run the same command on the shared box.
`)
}

function parseArgs(argv) {
  const out = {
    raw: null,
    wiki: null,
    url: null,
    slug: null,
    agent: 'auto',
    graph: true,
    skip: false,
    help: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') out.help = true
    else if (arg === '--raw') out.raw = argv[++i]
    else if (arg === '--wiki') out.wiki = argv[++i]
    else if (arg === '--url') out.url = argv[++i]
    else if (arg === '--slug') out.slug = argv[++i]
    else if (arg === '--agent') out.agent = argv[++i]
    else if (arg === '--graph') out.graph = true
    else if (arg === '--no-graph') out.graph = false
    else if (arg === '--skip') out.skip = true
    else if (arg.startsWith('-')) throw new Error(`Unknown flag: ${arg}`)
    else throw new Error(`Unexpected argument: ${arg}`)
  }
  return out
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printHelp()
    return 0
  }
  if (!args.url && !args.slug) throw new Error('Pass --url or --slug')
  const result = await compileArticle({
    rawRoot: path.resolve(args.raw || path.join(repoRoot, 'raw')),
    wikiRoot: path.resolve(args.wiki || path.join(repoRoot, 'wiki')),
    repoRoot,
    url: args.url,
    slug: args.slug,
    agent: args.agent,
    graph: args.graph,
    skip: args.skip,
  })
  if (!result.ok) console.error(result.error)
  return result.code ?? (result.ok ? 0 : 1)
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  main().then((code) => process.exit(code ?? 0)).catch((error) => {
    console.error(error.message)
    process.exit(1)
  })
}
