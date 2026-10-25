import fs from 'node:fs'
import path from 'node:path'

export function rawPaths(rawRoot) {
  return {
    root: rawRoot,
    digests: path.join(rawRoot, 'digests'),
    articles: path.join(rawRoot, 'articles'),
    state: path.join(rawRoot, 'state'),
    urls: path.join(rawRoot, 'state', 'urls.json'),
    digestsIndex: path.join(rawRoot, 'state', 'digests.json'),
    record: (slug) => path.join(rawRoot, 'state', `${slug}.json`),
  }
}

export function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback
  const text = fs.readFileSync(file, 'utf8')
  try {
    return JSON.parse(text)
  } catch (error) {
    throw new Error(`Could not parse ${file}: ${error.message}`)
  }
}

export function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  const tmp = `${file}.${process.pid}.tmp`
  fs.writeFileSync(tmp, `${JSON.stringify(data, null, 2)}\n`)
  fs.renameSync(tmp, file)
}

export function blankRecord({ slug, url, title, digest, hash, now }) {
  return {
    slug,
    url,
    title: title ?? null,
    digest,
    status: 'seen',
    hash,
    first_seen: now,
    last_seen: now,
    fetched_at: null,
    content_hash: null,
    article_path: null,
    fetched_url: null,
    source_path: null,
    error: null,
    compile_error: null,
    compile_agent: null,
    attempts: [],
    filed_at: null,
    skipped_at: null,
  }
}

export function listRecords(rawRoot) {
  const dir = rawPaths(rawRoot).state
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith('.json') && name !== 'urls.json' && name !== 'digests.json' && !name.endsWith('.latest.json'))
    .sort()
    .map((name) => readJson(path.join(dir, name), null))
    .filter(Boolean)
}

export function articleAbs(rawRoot, record) {
  if (!record.article_path) return null
  return path.join(rawRoot, record.article_path)
}
