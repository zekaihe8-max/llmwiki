// One article, end to end: register the digest, fetch that URL, compile, lint,
// rebuild the graph. Compile shells out to Codex or Cursor Agent.
// Status "filed" short-circuits. Status "fetched" resumes at compile.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { compileArticle } from './compile-article.mjs'
import { fetchRecord, requireRecord } from './fetch-articles.mjs'
import { ingestDigestFile } from './ingest-digest.mjs'
import { readJson, rawPaths } from './lib/store.mjs'
import { extractUrls, normalizeUrl } from './lib/urls.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

export function selectFromDigest(markdown, { url = null, pick = null } = {}) {
  const extracted = extractUrls(markdown)
  if (url) {
    const canonical = normalizeUrl(url)
    if (!canonical) throw new Error(`Not an http(s) URL: ${url}`)
    const chosen = extracted.find((item) => item.url === canonical)
    if (!chosen) throw new Error(`URL is not in this digest: ${canonical}`)
    return { extracted, chosen }
  }
  const index = Number(pick)
  if (!Number.isInteger(index) || index < 1 || index > extracted.length) {
    throw new Error(`--pick ${pick} is outside 1..${extracted.length || 0}`)
  }
  return { extracted, chosen: extracted[index - 1] }
}

export async function ingestOne({
  digestPath,
  rawRoot,
  wikiRoot,
  repoRoot: cwd = repoRoot,
  url = null,
  pick = null,
  retryFailed = false,
  force = false,
  refresh = false,
  skipCompile = false,
  graph = true,
  graphOut,
  agent = 'auto',
  fetchImpl,
  spawnImpl,
  resolveImpl,
  now = () => new Date().toISOString(),
  log = console.log,
}) {
  if (!digestPath) throw new Error('Pass --digest')
  const ingested = ingestDigestFile({ sourcePath: digestPath, rawRoot, now, log })
  const digestAbs = path.join(rawPaths(rawRoot).digests, ingested.filename)
  const { extracted, chosen } = selectFromDigest(fs.readFileSync(digestAbs, 'utf8'), { url, pick })
  log(`select ${chosen.url} (${extracted.length} urls in ${ingested.filename})`)

  let record = requireRecord(rawRoot, { url: chosen.url })
  const recheck = force || refresh
  const fetchable = record.status === 'seen'
    || ((record.status === 'failed') && (retryFailed || recheck))
    || (recheck && record.status !== 'skipped')
  let snapshotChanged = false
  if (fetchable) {
    const fetched = await fetchRecord({
      record,
      rawRoot,
      retryFailed: retryFailed || record.status === 'failed',
      force,
      refresh,
      fetchImpl,
      now,
      log,
    })
    snapshotChanged = Boolean(fetched.ok && !fetched.skipped)
    record = readJson(rawPaths(rawRoot).record(record.slug), record)
    if (!fetched.ok) return { ok: false, code: 1, stage: 'fetch', record, error: fetched.error, ingested }
  } else {
    log(`fetch ${record.slug}: ${record.status}, skipped`)
  }

  if (record.status === 'failed') {
    return { ok: false, code: 1, stage: 'fetch', record, error: record.error, ingested }
  }
  if (skipCompile || record.status === 'skipped') {
    return { ok: true, code: 0, stage: record.status, record, ingested }
  }
  // Without --refresh, filed is a cheap no-op. With --refresh, unchanged body
  // keeps status filed and we still skip the agent; a new snapshot resets to fetched.
  if (record.status === 'filed' && !snapshotChanged) {
    // Resume via compileArticle so a prior graph failure can rebuild without Agent.
    const compiled = await compileArticle({
      rawRoot,
      wikiRoot,
      repoRoot: cwd,
      slug: record.slug,
      agent,
      spawnImpl,
      resolveImpl,
      now,
      graph,
      graphOut,
      log,
    })
    return {
      ok: compiled.ok,
      code: compiled.code ?? (compiled.ok ? 0 : 1),
      stage: compiled.ok ? 'filed' : (compiled.graphOk === false ? 'graph' : 'filed'),
      skipped: true,
      record: compiled.record,
      error: compiled.error,
      ingested,
      graphOk: compiled.graphOk,
    }
  }

  const compiled = await compileArticle({
    rawRoot,
    wikiRoot,
    repoRoot: cwd,
    slug: record.slug,
    agent,
    spawnImpl,
    resolveImpl,
    now,
    graph,
    graphOut,
    log,
  })
  return {
    ok: compiled.ok,
    code: compiled.code ?? (compiled.ok ? 0 : 1),
    stage: compiled.record?.status || 'compile',
    skipped: compiled.skipped,
    record: compiled.record,
    error: compiled.error,
    ingested,
  }
}

function printHelp() {
  console.log(`Usage: npm run ingest:one -- --digest <file.md> (--url <article> | --pick N)
       [--raw raw/] [--wiki wiki/] [--agent codex|cursor|auto]
       [--retry-failed] [--force] [--refresh] [--skip-compile] [--no-graph]

Registers every URL in the digest, fetches the selected article into raw/,
then shells out to Codex or Cursor Agent to file Source and Topic pages.
Lint must pass before status becomes "filed". The graph is rebuilt after that.

Without --refresh, a filed article is a cheap no-op (no fetch, no agent, no log).
With --refresh, the URL is re-fetched: same body → skip silently; different
body → new snapshot, status fetched, then compile again via the Agent.
If fetch succeeded and compile did not, the next run resumes at compile.
Exit 2 means the Agent CLI is not on this machine.
`)
}

function parseArgs(argv) {
  const out = {
    digest: null,
    url: null,
    pick: null,
    raw: null,
    wiki: null,
    agent: 'auto',
    retryFailed: false,
    force: false,
    refresh: false,
    skipCompile: false,
    graph: true,
    help: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') out.help = true
    else if (arg === '--digest') out.digest = argv[++i]
    else if (arg === '--url') out.url = argv[++i]
    else if (arg === '--pick') out.pick = argv[++i]
    else if (arg === '--raw') out.raw = argv[++i]
    else if (arg === '--wiki') out.wiki = argv[++i]
    else if (arg === '--agent') out.agent = argv[++i]
    else if (arg === '--retry-failed') out.retryFailed = true
    else if (arg === '--force') out.force = true
    else if (arg === '--refresh') out.refresh = true
    else if (arg === '--skip-compile') out.skipCompile = true
    else if (arg === '--no-graph') out.graph = false
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
  if (!args.digest) throw new Error('Pass --digest')
  if (!args.url && args.pick == null) throw new Error('Pass --url or --pick N')
  const result = await ingestOne({
    digestPath: args.digest,
    rawRoot: path.resolve(args.raw || path.join(repoRoot, 'raw')),
    wikiRoot: path.resolve(args.wiki || path.join(repoRoot, 'wiki')),
    url: args.url,
    pick: args.pick,
    retryFailed: args.retryFailed,
    force: args.force,
    refresh: args.refresh,
    skipCompile: args.skipCompile,
    graph: args.graph,
    agent: args.agent,
  })
  if (!result.ok && result.error) console.error(result.error)
  return result.code ?? (result.ok ? 0 : 1)
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  main().then((code) => process.exit(code ?? 0)).catch((error) => {
    console.error(error.message)
    process.exit(1)
  })
}
