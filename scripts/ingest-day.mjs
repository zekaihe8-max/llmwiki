// Run ingest:batch for the daily digest files that are already in raw/digests.
// Looks up YYYY-MM-DD-frontier-ai.md and YYYY-MM-DD-cn-x.md. A missing file
// is skipped. Neither file is an error. One digest failing still runs the other.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ingestBatch } from './ingest-batch.mjs'
import { rawPaths } from './lib/store.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DATE = /^\d{4}-\d{2}-\d{2}$/

export function digestFilesForDate(rawRoot, date) {
  if (!DATE.test(String(date || ''))) throw new Error(`Date must be YYYY-MM-DD, got ${date}`)
  const dir = rawPaths(rawRoot).digests
  return [`${date}-frontier-ai.md`, `${date}-cn-x.md`]
    .map((name) => path.join(dir, name))
    .filter((file) => fs.existsSync(file) && fs.statSync(file).isFile())
}

export async function ingestDay({
  date,
  rawRoot,
  wikiRoot,
  repoRoot: cwd = repoRoot,
  limit = Infinity,
  concurrency = 1,
  retryFailed = false,
  agent = 'cursor',
  graph = true,
  graphOut,
  fetchImpl,
  spawnImpl,
  resolveImpl,
  compileImpl,
  lintImpl,
  graphImpl,
  runBatch = ingestBatch,
  now,
  log = console.log,
  err = console.error,
}) {
  const files = digestFilesForDate(rawRoot, date)
  if (files.length === 0) {
    throw new Error(
      `No digest for ${date}. Looked for raw/digests/${date}-frontier-ai.md and raw/digests/${date}-cn-x.md`,
    )
  }
  const results = []
  for (const digestPath of files) {
    log(`day ${date}: ${path.basename(digestPath)}`)
    try {
      const result = await runBatch({
        digestPath,
        rawRoot,
        wikiRoot,
        repoRoot: cwd,
        limit,
        concurrency,
        retryFailed,
        agent,
        graph,
        graphOut,
        fetchImpl,
        spawnImpl,
        resolveImpl,
        compileImpl,
        lintImpl,
        graphImpl,
        now,
        log,
        err,
      })
      results.push(result)
    } catch (error) {
      err(`day ${date}: ${path.basename(digestPath)} failed: ${error.message}`)
      results.push({ ok: false, code: 1, filename: path.basename(digestPath), error: error.message })
    }
  }
  const code = results.some((result) => result.code === 2)
    ? 2
    : (results.some((result) => result.code) ? 1 : 0)
  log(`day ${date}: ${files.length} digest${files.length === 1 ? '' : 's'}, exit ${code}`)
  return { ok: code === 0, code, date, files, results }
}

function printHelp() {
  console.log(`Usage: npm run ingest:day -- --date YYYY-MM-DD
       [--limit N] [--concurrency N] [--agent cursor|codex|auto]
       [--retry-failed] [--raw raw/] [--wiki wiki/] [--no-graph]

Run ingest:batch for each file that exists:
  raw/digests/YYYY-MM-DD-frontier-ai.md
  raw/digests/YYYY-MM-DD-cn-x.md

A missing file is skipped. If neither file is in raw/digests/, the command
fails. A failure in one digest still runs the other. Exit 2 if either batch
exits 2, otherwise exit 1 when either batch did not fully succeed.
The same flags as ingest:batch are passed through. Default --agent is cursor.
Default --concurrency is 1.

  npm run ingest:day -- --date 2026-10-23
  npm run ingest:day -- 2026-10-23 --limit 3
  npm run ingest:day -- --date 2026-10-23 --retry-failed
`)
}

function parseArgs(argv) {
  const out = {
    date: null,
    raw: null,
    wiki: null,
    agent: 'cursor',
    limit: Infinity,
    concurrency: 1,
    retryFailed: false,
    graph: true,
    help: false,
  }
  const positionals = []
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') out.help = true
    else if (arg === '--date') out.date = argv[++i]
    else if (arg === '--raw') out.raw = argv[++i]
    else if (arg === '--wiki') out.wiki = argv[++i]
    else if (arg === '--agent') out.agent = argv[++i]
    else if (arg === '--limit') out.limit = Number(argv[++i])
    else if (arg === '--concurrency') out.concurrency = Number(argv[++i])
    else if (arg === '--retry-failed') out.retryFailed = true
    else if (arg === '--no-graph') out.graph = false
    else if (arg.startsWith('-')) throw new Error(`Unknown flag: ${arg}`)
    else positionals.push(arg)
  }
  if (!out.date && positionals.length === 1) out.date = positionals[0]
  else if (positionals.length) throw new Error(`Unexpected argument: ${positionals[0]}`)
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
  if (!args.date) throw new Error('Pass a date, YYYY-MM-DD')
  const result = await ingestDay({
    date: args.date,
    rawRoot: path.resolve(args.raw || path.join(repoRoot, 'raw')),
    wikiRoot: path.resolve(args.wiki || path.join(repoRoot, 'wiki')),
    limit: args.limit,
    concurrency: args.concurrency,
    retryFailed: args.retryFailed,
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
