// One digest, end to end: register every URL, fetch with a small pool,
// compile each fetched or sourced article, lint once, rebuild the graph once.
// Filed URLs are skipped with no per-URL log. This script does not write wiki
// pages itself. Compile shells out through compile-article.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { writeGraphData } from './build-graph.mjs'
import { compileArticle } from './compile-article.mjs'
import { fetchRecord, requireRecord } from './fetch-articles.mjs'
import { ingestDigestFile } from './ingest-digest.mjs'
import { rawPaths, readJson } from './lib/store.mjs'
import { extractUrls } from './lib/urls.mjs'
import { lintWiki } from './lint-okf.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const defaultGraphOut = path.join(repoRoot, '.vitepress', 'public', 'graph-data.json')
const AGENTS = new Set(['cursor', 'codex', 'auto'])

export function selectBatch(records, { limit = Infinity, retryFailed = false, refresh = false } = {}) {
  const cap = limit == null ? Infinity : limit
  if (cap !== Infinity && (!Number.isInteger(cap) || cap < 1)) {
    throw new Error('--limit expects a positive integer')
  }
  const selected = []
  const counts = { filed: 0, skipped: 0, failed: 0, deferred: 0 }
  for (const record of records) {
    // Without --refresh, filed is a cheap daily skip. With --refresh, re-fetch
    // and recompile only when the original body changed.
    if (record.status === 'filed' && !refresh) {
      counts.filed++
      continue
    }
    if (record.status === 'skipped') {
      counts.skipped++
      continue
    }
    if (record.status === 'failed' && !retryFailed && !refresh) {
      counts.failed++
      continue
    }
    const actionable = record.status === 'seen'
      || record.status === 'failed'
      || record.status === 'fetched'
      || record.status === 'sourced'
      || (refresh && record.status === 'filed')
    if (!actionable) {
      counts.skipped++
      continue
    }
    if (selected.length >= cap) {
      counts.deferred++
      continue
    }
    selected.push(record)
  }
  return { selected, ...counts }
}

export async function ingestBatch({
  digestPath,
  rawRoot,
  wikiRoot,
  repoRoot: cwd = repoRoot,
  limit = Infinity,
  concurrency = 1,
  retryFailed = false,
  refresh = false,
  agent = 'cursor',
  graph = true,
  graphOut = defaultGraphOut,
  fetchImpl,
  spawnImpl,
  resolveImpl,
  compileImpl = (options) => compileArticle(options),
  lintImpl = lintWiki,
  graphImpl = writeGraphData,
  now = () => new Date().toISOString(),
  log = console.log,
  err = console.error,
}) {
  if (!digestPath) throw new Error('Pass --digest')
  if (!AGENTS.has(String(agent || '').toLowerCase())) {
    throw new Error(`Unknown --agent ${agent}. Use cursor, codex, or auto.`)
  }
  const width = Number(concurrency)
  if (!Number.isInteger(width) || width < 1) throw new Error('--concurrency expects a positive integer')

  const ingested = ingestDigestFile({ sourcePath: digestPath, rawRoot, now, log })
  const digestAbs = path.join(rawPaths(rawRoot).digests, ingested.filename)
  const extracted = extractUrls(fs.readFileSync(digestAbs, 'utf8'))
  const records = extracted.map((item) => requireRecord(rawRoot, { url: item.url }))
  const selection = selectBatch(records, { limit, retryFailed, refresh })
  const { selected } = selection
  log(`batch ${ingested.filename}: ${extracted.length} urls, ${selected.length} to process, ${selection.filed} already filed`)

  selected.forEach((record, index) => {
    const needsFetch = record.status === 'seen'
      || record.status === 'failed'
      || (refresh && (record.status === 'filed' || record.status === 'sourced' || record.status === 'fetched'))
    const next = needsFetch ? 'fetch, compile' : 'compile'
    log(`batch ${index + 1}/${selected.length} ${record.url} (${record.status} → ${next})`)
  })

  const toFetch = selected.filter((record) =>
    record.status === 'seen'
    || record.status === 'failed'
    || (refresh && (record.status === 'filed' || record.status === 'sourced' || record.status === 'fetched')))
  const fetchResults = await mapPool(toFetch, width, async (record) => {
    try {
      return await fetchRecord({
        record,
        rawRoot,
        retryFailed: retryFailed || record.status === 'failed',
        refresh,
        fetchImpl,
        now,
        log,
      })
    } catch (error) {
      return { ok: false, attempted: true, record, error: error.message }
    }
  })
  const fetchBySlug = new Map(toFetch.map((record, index) => [record.slug, fetchResults[index]]))

  const outcomes = []
  let stopCompile = false
  let printedMissingAgent = false
  for (const original of selected) {
    const fresh = readJson(rawPaths(rawRoot).record(original.slug), original)
    const fetched = fetchBySlug.get(original.slug)
    if (fetched && !fetched.ok) {
      outcomes.push({
        ok: false,
        code: 1,
        stage: 'fetch',
        url: fresh.url,
        slug: fresh.slug,
        record: fresh,
        error: fetched.error || fresh.error,
      })
      continue
    }
    // --refresh with unchanged body leaves filed status; treat as successful skip.
    if (fresh.status === 'filed') {
      outcomes.push({
        ok: true,
        code: 0,
        stage: 'filed',
        skipped: true,
        url: fresh.url,
        slug: fresh.slug,
        record: fresh,
      })
      continue
    }
    if (fresh.status !== 'fetched' && fresh.status !== 'sourced') {
      outcomes.push({
        ok: false,
        code: 1,
        stage: 'fetch',
        url: fresh.url,
        slug: fresh.slug,
        record: fresh,
        error: fresh.error || `status ${fresh.status}`,
      })
      continue
    }
    if (stopCompile) {
      outcomes.push({
        ok: false,
        code: 2,
        stage: 'compile',
        skipped: true,
        url: fresh.url,
        slug: fresh.slug,
        record: fresh,
        error: 'agent CLI missing',
      })
      continue
    }
    let compiled
    try {
      compiled = await compileImpl({
        rawRoot,
        wikiRoot,
        repoRoot: cwd,
        slug: fresh.slug,
        url: fresh.url,
        agent,
        spawnImpl,
        resolveImpl,
        now,
        graph: false,
        graphOut,
        log,
      })
    } catch (error) {
      compiled = { ok: false, code: 1, record: fresh, error: error.message }
    }
    const code = compiled.code ?? (compiled.ok ? 0 : 1)
    if (code === 2) {
      stopCompile = true
      if (!printedMissingAgent) {
        printedMissingAgent = true
        err(compiled.error || 'compile: no Codex or Cursor Agent CLI on this machine.')
      }
    }
    outcomes.push({
      ...compiled,
      ok: Boolean(compiled.ok),
      code,
      stage: 'compile',
      url: fresh.url,
      slug: fresh.slug,
    })
  }

  let lintErrors = []
  try {
    lintErrors = lintImpl(wikiRoot) || []
  } catch (error) {
    lintErrors = [`lint: ${error.message}`]
  }
  if (lintErrors.length) {
    for (const error of lintErrors) err(error)
    log(`lint: ${lintErrors.length} problem${lintErrors.length === 1 ? '' : 's'}`)
  } else {
    log('lint: ok')
  }

  let graphOk = true
  if (graph) {
    try {
      const built = graphImpl(wikiRoot, graphOut)
      const nodes = built?.nodes?.length ?? 0
      const edges = built?.edges?.length ?? 0
      log(`graph: ${nodes} nodes, ${edges} edges`)
    } catch (error) {
      graphOk = false
      err(`graph: ${error.message}`)
    }
  } else {
    log('graph: skipped')
  }

  const endRecords = extracted.map((item) => requireRecord(rawRoot, { url: item.url }))
  const leftFailed = endRecords.filter((record) => record.status === 'failed').length
  const succeeded = outcomes.filter((outcome) => outcome.ok && !outcome.skipped).length
  const skippedNow = outcomes.filter((outcome) => outcome.ok && outcome.skipped).length
  const failedNow = outcomes.filter((outcome) => !outcome.ok && !outcome.skipped).length
  let code = 0
  if (failedNow || lintErrors.length || !graphOk || leftFailed) code = 1
  if (outcomes.some((outcome) => outcome.code === 2)) code = 2

  const summary = code === 0
    ? `batch ${ingested.filename}: processed ${selected.length}, filed/succeeded ${succeeded}, skipped ${skippedNow}, failed 0, already-filed ${selection.filed}, left-failed 0, deferred ${selection.deferred}`
    : `batch ${ingested.filename}: partial success, exit ${code}. Processed ${selected.length}, succeeded ${succeeded}, skipped ${skippedNow}, failed ${failedNow}, already-filed ${selection.filed}, left-failed ${leftFailed}, deferred ${selection.deferred}. Re-run the same command to resume fetched and sourced articles. Pass --retry-failed to fetch status failed. Pass --refresh to re-check filed originals.`
  log(summary)
  if (code === 2) {
    log('batch: exit 2 means the Agent CLI is missing. Snapshots already fetched are kept.')
  }

  return {
    ok: code === 0,
    code,
    filename: ingested.filename,
    ingested,
    selected: selected.map((record) => record.url),
    outcomes,
    filed: selection.filed,
    deferred: selection.deferred,
    skipped: skippedNow,
    leftFailed,
    lintErrors,
    summary,
  }
}

async function mapPool(items, concurrency, fn) {
  const results = new Array(items.length)
  if (items.length === 0) return results
  let cursor = 0
  const width = Math.min(concurrency, items.length)
  async function worker() {
    while (cursor < items.length) {
      const index = cursor
      cursor += 1
      results[index] = await fn(items[index], index)
    }
  }
  await Promise.all(Array.from({ length: width }, () => worker()))
  return results
}

function printHelp() {
  console.log(`Usage: npm run ingest:batch -- --digest <file.md>
       [--raw raw/] [--wiki wiki/] [--agent cursor|codex|auto]
       [--limit N] [--concurrency N] [--retry-failed] [--refresh] [--no-graph]

Register every URL in one digest, fetch pages that are still seen (and
failed when --retry-failed is set), then compile each fetched or sourced
article with the Agent CLI. Without --refresh, filed URLs are skipped with
no per-URL log. With --refresh, filed/sourced/fetched are re-fetched: same
body → skip silently; different body → new snapshot and recompile.
This command does not write wiki pages itself.

--limit N caps how many URLs are fetched or compiled. Already filed URLs
do not count (unless --refresh), so the same limit resumes the next N.
--concurrency defaults to 1 and applies to fetch only. Compile stays one
article at a time. Default --agent is cursor (the agent binary on PATH, or
/home/box/.local/bin/agent on the shared box).

After those compiles, OKF lint runs once and the graph is rebuilt once.
Exit 0 means no URL in this digest is failed and this run's compiles, lint,
and graph succeeded. Exit 1 is partial success: articles that filed stay
filed, and the same command resumes the rest. Exit 2 means the Agent CLI
is missing. Fetch snapshots are kept.

  npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md
  npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md --limit 3
  npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md --retry-failed
  npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md --refresh
`)
}

function parseArgs(argv) {
  const out = {
    digest: null,
    raw: null,
    wiki: null,
    agent: 'cursor',
    limit: Infinity,
    concurrency: 1,
    retryFailed: false,
    refresh: false,
    graph: true,
    help: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') out.help = true
    else if (arg === '--digest') out.digest = argv[++i]
    else if (arg === '--raw') out.raw = argv[++i]
    else if (arg === '--wiki') out.wiki = argv[++i]
    else if (arg === '--agent') out.agent = argv[++i]
    else if (arg === '--limit') out.limit = Number(argv[++i])
    else if (arg === '--concurrency') out.concurrency = Number(argv[++i])
    else if (arg === '--retry-failed') out.retryFailed = true
    else if (arg === '--refresh') out.refresh = true
    else if (arg === '--no-graph') out.graph = false
    else if (arg.startsWith('-')) throw new Error(`Unknown flag: ${arg}`)
    else throw new Error(`Unexpected argument: ${arg}`)
  }
  if (out.limit !== Infinity && (!Number.isInteger(out.limit) || out.limit < 1)) {
    throw new Error('--limit expects a positive integer')
  }
  if (!Number.isInteger(out.concurrency) || out.concurrency < 1) {
    throw new Error('--concurrency expects a positive integer')
  }
  return out
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printHelp()
    return 0
  }
  if (!args.digest) throw new Error('Pass --digest')
  const result = await ingestBatch({
    digestPath: args.digest,
    rawRoot: path.resolve(args.raw || path.join(repoRoot, 'raw')),
    wikiRoot: path.resolve(args.wiki || path.join(repoRoot, 'wiki')),
    limit: args.limit,
    concurrency: args.concurrency,
    retryFailed: args.retryFailed,
    refresh: args.refresh,
    agent: args.agent,
    graph: args.graph,
  })
  return result.code ?? (result.ok ? 0 : 1)
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  main().then((code) => process.exit(code ?? 0)).catch((error) => {
    console.error(error.message)
    process.exit(1)
  })
}
