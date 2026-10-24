// Register a digest markdown file into raw/digests and record every
// http(s) URL as status "seen". Same filename + same content hash is a no-op.
// A different hash for an existing filename is refused. Article bodies are
// not written here.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { blankRecord, rawPaths, readJson, writeJson } from './lib/store.mjs'
import { extractUrls, sha256, slugForUrl } from './lib/urls.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

export function ingestDigestFile({ sourcePath, rawRoot, now = () => new Date().toISOString(), log = () => {} }) {
  const abs = path.resolve(sourcePath)
  if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
    throw new Error(`Digest file not found: ${sourcePath}`)
  }
  const filename = path.basename(abs)
  if (!filename.toLowerCase().endsWith('.md') || filename.toLowerCase() === 'readme.md') {
    throw new Error(`Refusing to ingest ${filename}. Pass a digest .md file.`)
  }

  const bytes = fs.readFileSync(abs)
  const contentHash = sha256(bytes)
  const paths = rawPaths(rawRoot)
  const dest = path.join(paths.digests, filename)
  const registry = readJson(paths.digestsIndex, {})
  const recorded = registry[filename]

  if (recorded?.content_hash === contentHash && fs.existsSync(dest) && sha256(fs.readFileSync(dest)) === contentHash) {
    log(`ingest ${filename}: unchanged, skipped`)
    return {
      ok: true,
      skipped: true,
      filename,
      contentHash,
      urlCount: recorded.urls ?? 0,
      created: 0,
    }
  }

  if (fs.existsSync(dest)) {
    const onDisk = sha256(fs.readFileSync(dest))
    if (onDisk !== contentHash) {
      throw new Error(
        `raw/digests/${filename} already exists with a different content hash. `
        + 'Digests are write-once. Add a new filename instead of replacing this file.',
      )
    }
  } else if (path.resolve(abs) !== path.resolve(dest)) {
    fs.mkdirSync(paths.digests, { recursive: true })
    fs.copyFileSync(abs, dest)
  }

  const extracted = extractUrls(bytes.toString('utf8'))
  const urls = readJson(paths.urls, {})
  const stamp = now()
  let created = 0
  for (const item of extracted) {
    const slug = slugForUrl(item.url)
    const hash = sha256(item.url)
    const known = urls[item.url]
    if (!known) {
      urls[item.url] = {
        hash,
        slug,
        first_seen: stamp,
        last_seen: stamp,
        digest: filename,
        title: item.title,
      }
      const recordPath = paths.record(slug)
      if (!fs.existsSync(recordPath)) {
        writeJson(recordPath, blankRecord({
          slug,
          url: item.url,
          title: item.title,
          digest: filename,
          hash,
          now: stamp,
        }))
        created++
      }
      continue
    }
    known.last_seen = stamp
    known.digest = filename
    if (!known.title && item.title) known.title = item.title
    const recordPath = paths.record(known.slug)
    if (fs.existsSync(recordPath)) {
      const record = readJson(recordPath, null)
      if (record) {
        record.last_seen = stamp
        record.digest = filename
        if (!record.title && item.title) record.title = item.title
        writeJson(recordPath, record)
      }
    }
  }

  registry[filename] = {
    content_hash: contentHash,
    ingested_at: recorded?.ingested_at && recorded.content_hash === contentHash ? recorded.ingested_at : stamp,
    urls: extracted.length,
  }
  writeJson(paths.urls, urls)
  writeJson(paths.digestsIndex, registry)
  log(`ingest ${filename}: ${extracted.length} urls, ${created} new`)
  return {
    ok: true,
    skipped: false,
    filename,
    contentHash,
    urlCount: extracted.length,
    created,
    urls: extracted,
  }
}

export function ingestDigests({ inputs, rawRoot, now, log = console.log }) {
  const files = collectDigestFiles(inputs, rawRoot)
  if (files.length === 0) {
    log('ingest: no digest markdown files')
    return []
  }
  return files.map((file) => ingestDigestFile({ sourcePath: file, rawRoot, now, log }))
}

export function collectDigestFiles(inputs, rawRoot) {
  const list = inputs?.length ? inputs : [rawPaths(rawRoot).digests]
  const files = []
  for (const input of list) {
    if (!fs.existsSync(input)) {
      throw new Error(`Path not found: ${input}`)
    }
    const stat = fs.statSync(input)
    if (stat.isDirectory()) {
      for (const name of fs.readdirSync(input).sort()) {
        if (!name.toLowerCase().endsWith('.md')) continue
        if (name.toLowerCase() === 'readme.md') continue
        const abs = path.join(input, name)
        if (fs.statSync(abs).isFile()) files.push(abs)
      }
      continue
    }
    if (stat.isFile()) files.push(path.resolve(input))
  }
  return files
}

function printHelp() {
  console.log(`Usage: node scripts/ingest-digest.mjs [digest.md | directory] [--raw raw/]

Copy a digest into raw/digests (skip when the filename and content hash match)
and register each http(s) URL in raw/state/urls.json plus raw/state/{slug}.json
with status "seen". No article body is written.

Default input directory: raw/digests/
`)
}

function parseArgs(argv) {
  const out = { inputs: [], raw: null, help: false }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') out.help = true
    else if (arg === '--raw') out.raw = argv[++i]
    else if (arg.startsWith('--raw=')) out.raw = arg.slice('--raw='.length)
    else if (arg.startsWith('-')) throw new Error(`Unknown flag: ${arg}`)
    else out.inputs.push(arg)
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
  ingestDigests({ inputs: args.inputs, rawRoot })
  return 0
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  main().then((code) => process.exit(code ?? 0)).catch((error) => {
    console.error(error.message)
    process.exit(1)
  })
}
