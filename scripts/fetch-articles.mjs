// Fetch original pages for raw records in status "seen" (and "failed" with
// --retry-failed). Success freezes a markdown snapshot and moves the record
// to "fetched". Failure records the error and writes no article file.
// A successful snapshot is never replaced in place. --force writes a new file.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { htmlToMarkdown } from './lib/html-to-markdown.mjs'
import { articleAbs, listRecords, rawPaths, readJson, writeJson } from './lib/store.mjs'
import { aliasCanonical, normalizeUrl, sha256, slugForUrl } from './lib/urls.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const USER_AGENT = 'wiki-hezekai-ingest/0.1'
export const MIN_ARTICLE_CHARS = 80
const MAX_ARTICLE_CHARS = 2_000_000

export async function fetchArticles({
  rawRoot,
  url = null,
  slug = null,
  limit = Infinity,
  retryFailed = false,
  force = false,
  refresh = false,
  fetchImpl = globalThis.fetch,
  now = () => new Date().toISOString(),
  log = console.log,
}) {
  const selected = selectRecords(rawRoot, { url, slug, retryFailed, force, refresh })
  const results = []
  let attempted = 0
  for (const record of selected) {
    if (attempted >= limit) break
    const outcome = await fetchRecord({
      record,
      rawRoot,
      retryFailed,
      force,
      refresh,
      fetchImpl,
      now,
      log,
    })
    results.push(outcome)
    if (outcome.attempted) attempted++
  }
  const ok = results.every((result) => result.ok)
  return { ok, results }
}

export function selectRecords(rawRoot, {
  url = null,
  slug = null,
  retryFailed = false,
  force = false,
  refresh = false,
} = {}) {
  if (url || slug) {
    const record = requireRecord(rawRoot, { url, slug })
    return [record]
  }
  const recheck = force || refresh
  const records = listRecords(rawRoot)
  const byCanonical = new Map()
  for (const record of records) {
    const canonical = normalizeUrl(record.url)
    if (!canonical) continue
    const existing = byCanonical.get(canonical)
    if (!existing) {
      byCanonical.set(canonical, record)
      continue
    }
    // Prefer a terminal/clean record over a dirty alias when both share a canonical.
    const rank = (r) => (['filed', 'sourced', 'fetched'].includes(r.status) ? 3
      : r.status === 'seen' ? 2
        : r.status === 'failed' ? 1
          : 0)
    if (rank(record) > rank(existing)) byCanonical.set(canonical, record)
  }
  return records
    .filter((record) => {
      if (record.status === 'skipped') return false
      if (record.duplicate_of || record.alias_of) return false
      const canonical = normalizeUrl(record.url)
      if (!canonical) return false
      // Dirty key whose clean form is owned by another slug — never retry.
      const aliased = aliasCanonical(record.url)
      if (aliased && slugForUrl(aliased) !== record.slug) return false
      const owner = byCanonical.get(canonical)
      if (owner && owner.slug !== record.slug) return false
      if (record.status === 'seen') return true
      if (record.status === 'failed' && (retryFailed || recheck)) return true
      if (recheck && record.status !== 'skipped') return true
      return false
    })
    .sort((a, b) => String(a.first_seen).localeCompare(String(b.first_seen)) || a.slug.localeCompare(b.slug))
}

export function requireRecord(rawRoot, { url = null, slug = null }) {
  if (slug) {
    const record = readJson(rawPaths(rawRoot).record(slug), null)
    if (!record) throw new Error(`No raw state for slug ${slug}`)
    return record
  }
  const canonical = normalizeUrl(url)
  if (!canonical) throw new Error(`Not an http(s) URL: ${url}`)
  const urls = readJson(rawPaths(rawRoot).urls, {})
  const entry = urls[canonical]
  if (!entry) throw new Error(`URL is not registered in raw/state/urls.json: ${canonical}`)
  const record = readJson(rawPaths(rawRoot).record(entry.slug), null)
  if (!record) throw new Error(`Missing state record for ${canonical}`)
  return record
}

export async function fetchRecord({
  record,
  rawRoot,
  retryFailed = false,
  force = false,
  refresh = false,
  fetchImpl = globalThis.fetch,
  now = () => new Date().toISOString(),
  log = () => {},
}) {
  // --refresh re-fetches filed/sourced/fetched like --force, then compares hashes.
  // Same body → silent skip (status unchanged). Different body → new snapshot.
  const recheck = force || refresh
  const terminal = record.status === 'fetched' || record.status === 'sourced' || record.status === 'filed'
  if (record.status === 'skipped' || (terminal && !recheck)) {
    log(`fetch ${record.slug}: ${record.status}, skipped`)
    return { ok: true, skipped: true, attempted: false, record }
  }
  if (record.status === 'failed' && !retryFailed && !recheck) {
    return { ok: false, skipped: true, attempted: false, record, error: record.error }
  }

  const prior = {
    status: record.status,
    error: record.error,
    content_hash: record.content_hash,
    article_path: record.article_path,
    fetched_at: record.fetched_at,
    filed_at: record.filed_at,
  }
  if (record.status === 'failed' && (retryFailed || recheck)) {
    record.status = 'seen'
    record.error = null
    record.last_fetch_error = null
    record.last_fetch_failed_at = null
  }

  const stamp = now()
  let response
  try {
    response = await fetchImpl(record.url, {
      redirect: 'follow',
      headers: {
        accept: 'text/html,application/xhtml+xml,text/plain;q=0.9,text/markdown;q=0.8,*/*;q=0.1',
        'user-agent': USER_AGENT,
      },
      signal: AbortSignal.timeout(20_000),
    })
  } catch (error) {
    return failFetch(record, prior, rawRoot, `fetch failed: ${error.message}`, stamp, log)
  }

  if (!response || response.ok === false) {
    const status = response?.status ?? 'no response'
    const statusText = response?.statusText ? ` ${response.statusText}` : ''
    return failFetch(record, prior, rawRoot, `HTTP ${status}${statusText}`, stamp, log)
  }

  let body
  try {
    body = typeof response.text === 'function' ? await response.text() : String(response.body ?? '')
  } catch (error) {
    return failFetch(record, prior, rawRoot, `body read failed: ${error.message}`, stamp, log)
  }
  if (body.length > MAX_ARTICLE_CHARS) {
    return failFetch(record, prior, rawRoot, `response exceeded ${MAX_ARTICLE_CHARS} characters`, stamp, log)
  }
  const contentType = header(response, 'content-type')
  let markdown = ''
  let pageTitle = null
  if (/text\/html|application\/xhtml\+xml/i.test(contentType) || /^\s*</.test(body)) {
    const converted = htmlToMarkdown(body)
    markdown = converted.markdown
    pageTitle = converted.title
  } else if (/text\/plain|text\/markdown/i.test(contentType)) {
    markdown = body.trim()
  } else {
    return failFetch(record, prior, rawRoot, `unsupported content type: ${contentType || 'unknown'}`, stamp, log)
  }

  if (markdown.replace(/\s+/g, ' ').trim().length < MIN_ARTICLE_CHARS) {
    return failFetch(record, prior, rawRoot, 'fetched page had no article body', stamp, log)
  }
  if (!markdown.endsWith('\n')) markdown += '\n'

  const contentHash = sha256(markdown)
  const existingAbs = articleAbs(rawRoot, record)
  if (existingAbs && fs.existsSync(existingAbs)) {
    const existingHash = sha256(fs.readFileSync(existingAbs))
    if (existingHash === contentHash) {
      record.content_hash = contentHash
      record.fetched_at = record.fetched_at || stamp
      record.fetched_url = response.url || record.fetched_url || record.url
      record.error = null
      record.last_fetch_error = null
      record.last_fetch_failed_at = null
      if (record.status === 'seen' || record.status === 'failed') record.status = 'fetched'
      if (!record.title && pageTitle) record.title = pageTitle
      writeJson(rawPaths(rawRoot).record(record.slug), record)
      log(`fetch ${record.slug}: body unchanged`)
      return { ok: true, skipped: true, attempted: true, record }
    }
    if (!recheck) {
      record.status = prior.status
      record.error = prior.error
      writeJson(rawPaths(rawRoot).record(record.slug), record)
      const message = 'article snapshot already exists with a different body; refusing to overwrite (pass --force or --refresh)'
      log(`fetch ${record.slug}: ${message}`)
      return { ok: false, skipped: false, attempted: true, record, error: message }
    }
    const rel = `articles/${record.slug}--${contentHash.slice(0, 12)}.md`
    writeArticle(rawRoot, rel, markdown)
    record.article_path = rel
    record.content_hash = contentHash
    record.fetched_at = stamp
    record.fetched_url = response.url || record.url
    record.error = null
    record.last_fetch_error = null
    record.last_fetch_failed_at = null
    record.compile_error = null
    record.status = 'fetched'
    record.filed_at = null
    if (!record.title && pageTitle) record.title = pageTitle
    writeJson(rawPaths(rawRoot).record(record.slug), record)
    log(`fetch ${record.slug}: new snapshot ${rel}`)
    return { ok: true, skipped: false, attempted: true, record, refreshed: true }
  }

  const rel = record.article_path || `articles/${record.slug}.md`
  writeArticle(rawRoot, rel, markdown)
  record.article_path = rel
  record.content_hash = contentHash
  record.fetched_at = stamp
  record.fetched_url = response.url || record.url
  record.status = 'fetched'
  record.error = null
  record.last_fetch_error = null
  record.last_fetch_failed_at = null
  if (!record.title && pageTitle) record.title = pageTitle
  writeJson(rawPaths(rawRoot).record(record.slug), record)
  log(`fetch ${record.slug}: fetched ${rel}`)
  return { ok: true, skipped: false, attempted: true, record }
}

function failFetch(record, prior, rawRoot, message, stamp, log) {
  const kept = prior.content_hash && prior.article_path && articleAbs(rawRoot, prior) && fs.existsSync(articleAbs(rawRoot, prior))
    && prior.status !== 'seen' && prior.status !== 'failed'
  record.attempts = [...(record.attempts || []), { at: stamp, stage: 'fetch', error: message }]
  // Always record the refresh/fetch failure. Keeping an old snapshot must NOT
  // be counted as success — callers treat ok:false as partial failure.
  record.last_fetch_error = message
  record.last_fetch_failed_at = stamp
  if (kept) {
    record.status = prior.status
    record.error = prior.error
    record.content_hash = prior.content_hash
    record.article_path = prior.article_path
    record.fetched_at = prior.fetched_at
    record.filed_at = prior.filed_at
    log(`fetch ${record.slug}: ${message}; kept existing snapshot (refresh/fetch failed)`)
  } else {
    record.status = 'failed'
    record.error = message
    log(`fetch ${record.slug}: failed: ${message}`)
  }
  writeJson(rawPaths(rawRoot).record(record.slug), record)
  return {
    ok: false,
    skipped: false,
    attempted: true,
    record,
    error: message,
    keptSnapshot: Boolean(kept),
    refreshFailed: Boolean(kept),
  }
}

function writeArticle(rawRoot, rel, markdown) {
  const abs = path.join(rawRoot, rel)
  fs.mkdirSync(path.dirname(abs), { recursive: true })
  const tmp = `${abs}.${process.pid}.tmp`
  fs.writeFileSync(tmp, markdown)
  fs.renameSync(tmp, abs)
}

function header(response, name) {
  const headers = response?.headers
  if (!headers) return ''
  if (typeof headers.get === 'function') return headers.get(name) || ''
  return headers[name] || headers[name.toLowerCase()] || ''
}

function printHelp() {
  console.log(`Usage: node scripts/fetch-articles.mjs [--raw raw/] [--url URL | --slug SLUG]
       [--limit N] [--retry-failed] [--force] [--refresh]

Fetch original pages for status "seen". --retry-failed returns "failed"
records to "seen" and tries again. A successful raw/articles/{slug}.md
snapshot is kept. --force / --refresh re-check filed/sourced/fetched:
same body → skip; different body → new immutable snapshot (slug--hash.md)
and status back to fetched (clears filed_at / compile_error).
`)
}

function parseArgs(argv) {
  const out = {
    raw: null,
    url: null,
    slug: null,
    limit: Infinity,
    retryFailed: false,
    force: false,
    refresh: false,
    help: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') out.help = true
    else if (arg === '--raw') out.raw = argv[++i]
    else if (arg === '--url') out.url = argv[++i]
    else if (arg === '--slug') out.slug = argv[++i]
    else if (arg === '--limit') out.limit = Number(argv[++i])
    else if (arg === '--retry-failed') out.retryFailed = true
    else if (arg === '--force') out.force = true
    else if (arg === '--refresh') out.refresh = true
    else if (arg.startsWith('-')) throw new Error(`Unknown flag: ${arg}`)
    else throw new Error(`Unexpected argument: ${arg}`)
  }
  if (out.limit !== Infinity && (!Number.isInteger(out.limit) || out.limit < 1)) {
    throw new Error('--limit expects a positive integer')
  }
  return out
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printHelp()
    return 0
  }
  const rawRoot = path.resolve(args.raw || path.join(repoRoot, 'raw'))
  const result = await fetchArticles({
    rawRoot,
    url: args.url,
    slug: args.slug,
    limit: args.limit,
    retryFailed: args.retryFailed,
    force: args.force,
    refresh: args.refresh,
  })
  return result.ok ? 0 : 1
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  main().then((code) => process.exit(code ?? 0)).catch((error) => {
    console.error(error.message)
    process.exit(1)
  })
}
