// OKF checks for Source and Topic pages, plus the filing gate
// (one source for the URL, index entry, a single log mention, topic links).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseWikiLinks } from './build-graph.mjs'
import { parseFrontmatter } from './lib/yaml.mjs'
import { normalizeUrl } from './lib/urls.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ISO_OFFSET = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/

export function lintPage(absPath, wikiRoot) {
  const errors = []
  const rel = path.relative(wikiRoot, absPath).replace(/\\/g, '/')
  if (!fs.existsSync(absPath)) {
    return [`${rel}: file not found`]
  }
  const raw = fs.readFileSync(absPath, 'utf8')
  const parsed = parseFrontmatter(raw)
  if (!parsed) {
    return [`${rel}: missing YAML frontmatter`]
  }
  const data = parsed.data || {}
  const body = parsed.body || ''
  if (data.type !== 'Source' && data.type !== 'Topic') {
    errors.push(`${rel}: type must be Source or Topic`)
  }
  if (!text(data.title)) errors.push(`${rel}: title is required`)
  if (!text(data.description)) errors.push(`${rel}: description is required`)
  const generated = data.generated
  if (!generated || typeof generated !== 'object' || Array.isArray(generated)) {
    errors.push(`${rel}: generated must be a mapping with by and at`)
  } else {
    if (!text(generated.by)) errors.push(`${rel}: generated.by is required`)
    if (!text(generated.at) || !ISO_OFFSET.test(String(generated.at))) {
      errors.push(`${rel}: generated.at must be ISO 8601 with an explicit offset`)
    }
  }
  const headings = [...body.matchAll(/^#\s+(.+?)\s*$/gm)].map((match) => match[1].trim())
  if (headings.length !== 1) errors.push(`${rel}: body needs exactly one # heading`)
  else if (text(data.title) && headings[0] !== String(data.title).trim()) {
    errors.push(`${rel}: # heading must match title`)
  }
  if (data.type === 'Source') {
    if (!normalizeUrl(data.resource)) errors.push(`${rel}: Source resource must be an http(s) URL`)
  } else if (data.resource != null && data.resource !== '' && !normalizeUrl(data.resource)) {
    errors.push(`${rel}: Topic resource must be an http(s) URL when set`)
  }
  if (data.type === 'Topic' && !/^## Contradictions\s*$/m.test(body)) {
    errors.push(`${rel}: Topic is missing ## Contradictions`)
  }

  const sources = Array.isArray(data.sources) ? data.sources : null
  if (!sources) errors.push(`${rel}: sources must be a list`)
  const ids = []
  for (const [index, source] of (sources || []).entries()) {
    if (!source || typeof source !== 'object' || Array.isArray(source)) {
      errors.push(`${rel}: sources[${index}] must be a mapping`)
      continue
    }
    if (!source.resource) errors.push(`${rel}: sources[${index}].resource is required`)
    else if (!resourceOk(source.resource, wikiRoot, path.posix.dirname(rel))) {
      errors.push(`${rel}: sources[${index}].resource is not an https URL or a wiki path`)
    }
    if (source.id != null) {
      if (!/^[a-z0-9-]+$/.test(String(source.id))) {
        errors.push(`${rel}: sources[${index}].id must match [a-z0-9-]+`)
      } else ids.push(String(source.id))
    }
  }
  const defined = [...body.matchAll(/^\[\^([^\]]+)\]:/gm)].map((match) => match[1])
  for (const id of ids) {
    if (!defined.includes(id)) errors.push(`${rel}: missing footnote definition [^${id}]:`)
  }
  for (const id of defined) {
    if (!ids.includes(id)) errors.push(`${rel}: footnote [^${id}] has no sources[].id`)
  }

  const currentDir = path.posix.dirname(rel)
  const links = parseWikiLinks(body, currentDir === '.' ? '' : `${currentDir}/`)
  for (const link of links) {
    if (!wikiFile(wikiRoot, link)) errors.push(`${rel}: wiki link does not resolve: ${link}`)
  }
  return errors
}

export function lintFiling({ wikiRoot, sourcePath, url }) {
  const errors = []
  const rel = sourcePath.replace(/\\/g, '/')
  const abs = path.join(wikiRoot, rel)
  errors.push(...lintPage(abs, wikiRoot))
  const canonical = normalizeUrl(url)
  if (!canonical) errors.push('filing: article URL is not http(s)')

  let page = null
  if (fs.existsSync(abs)) {
    page = parseFrontmatter(fs.readFileSync(abs, 'utf8'))
    if (page && canonical && normalizeUrl(page.data?.resource) !== canonical) {
      errors.push(`${rel}: resource does not match the fetched article URL`)
    }
  }

  const matches = findSourcePages(wikiRoot, canonical)
  if (canonical && matches.length !== 1) {
    errors.push(`filing: expected one Source for ${canonical}, found ${matches.length} (${matches.join(', ') || 'none'})`)
  } else if (matches.length === 1 && matches[0] !== rel) {
    errors.push(`filing: source path ${rel} is not the page that owns ${canonical}`)
  }

  const base = path.posix.basename(rel)
  const indexPath = path.join(wikiRoot, 'index.md')
  if (!fs.existsSync(indexPath)) errors.push('filing: wiki/index.md is missing')
  else if (!fs.readFileSync(indexPath, 'utf8').includes(base)) {
    errors.push('filing: wiki/index.md does not mention the source page')
  }

  const logPath = path.join(wikiRoot, 'log.md')
  if (!fs.existsSync(logPath)) errors.push('filing: wiki/log.md is missing')
  else {
    const mentions = fs.readFileSync(logPath, 'utf8').split(/\r?\n/).filter((line) => line.includes(base))
    if (mentions.length === 0) errors.push('filing: wiki/log.md does not mention the source page')
    if (mentions.length > 1) errors.push('filing: wiki/log.md mentions the source page more than once')
  }

  if (page) {
    const currentDir = path.posix.dirname(rel)
    const links = parseWikiLinks(page.body || '', currentDir === '.' ? '' : `${currentDir}/`)
    const topics = links.filter((link) => link.replace(/\\/g, '/').includes('topics/'))
    if (topics.length === 0) errors.push(`${rel}: Source does not link a Topic page`)
    for (const link of topics) {
      const topicAbs = wikiFile(wikiRoot, link)
      if (!topicAbs) continue
      errors.push(...lintPage(topicAbs, wikiRoot))
    }
  }
  return errors
}

export function findSourcePages(wikiRoot, url) {
  const canonical = normalizeUrl(url)
  if (!canonical) return []
  const dir = path.join(wikiRoot, 'sources', 'articles')
  if (!fs.existsSync(dir)) return []
  const matches = []
  for (const name of fs.readdirSync(dir).sort()) {
    if (!name.endsWith('.md')) continue
    const rel = `sources/articles/${name}`
    const parsed = parseFrontmatter(fs.readFileSync(path.join(dir, name), 'utf8'))
    if (parsed?.data?.type === 'Source' && normalizeUrl(parsed.data.resource) === canonical) {
      matches.push(rel)
    }
  }
  return matches
}

function resourceOk(resource, wikiRoot, currentDir) {
  if (normalizeUrl(resource)) return true
  const textValue = String(resource).trim()
  if (textValue.startsWith('/')) return Boolean(wikiFile(wikiRoot, textValue.slice(1)))
  if (textValue.endsWith('.md')) {
    const resolved = path.posix.normalize(path.posix.join(currentDir, textValue))
    return Boolean(wikiFile(wikiRoot, resolved))
  }
  return false
}

function wikiFile(wikiRoot, rel) {
  const clean = String(rel).replace(/\\/g, '/').replace(/^\/+/, '').split('#')[0].split('?')[0]
  if (!clean || clean.split('/').includes('..')) return null
  const abs = path.join(wikiRoot, clean)
  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return abs
  if (fs.existsSync(`${abs}.md`) && fs.statSync(`${abs}.md`).isFile()) return `${abs}.md`
  return null
}

function text(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function printHelp() {
  console.log(`Usage: node scripts/lint-okf.mjs [--wiki wiki/] [--file path]...
       [--source sources/articles/page.md --url https://...]

With --source and --url, run the filing gate. Otherwise lint each --file,
or every page under wiki/sources/articles and wiki/topics.
`)
}

function parseArgs(argv) {
  const out = { wiki: null, files: [], source: null, url: null, help: false }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') out.help = true
    else if (arg === '--wiki') out.wiki = argv[++i]
    else if (arg === '--file') out.files.push(argv[++i])
    else if (arg === '--source') out.source = argv[++i]
    else if (arg === '--url') out.url = argv[++i]
    else if (arg.startsWith('-')) throw new Error(`Unknown flag: ${arg}`)
    else out.files.push(arg)
  }
  return out
}

function defaultPages(wikiRoot) {
  const pages = []
  for (const folder of ['sources/articles', 'topics']) {
    const dir = path.join(wikiRoot, folder)
    if (!fs.existsSync(dir)) continue
    for (const name of fs.readdirSync(dir).sort()) {
      if (name.endsWith('.md')) pages.push(path.join(dir, name))
    }
  }
  return pages
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printHelp()
    return 0
  }
  const wikiRoot = path.resolve(args.wiki || path.join(repoRoot, 'wiki'))
  let errors = []
  if (args.source || args.url) {
    if (!args.source || !args.url) throw new Error('Pass both --source and --url for the filing gate')
    errors = lintFiling({ wikiRoot, sourcePath: args.source, url: args.url })
  } else {
    const files = args.files.length ? args.files.map((file) => path.resolve(file)) : defaultPages(wikiRoot)
    for (const file of files) errors.push(...lintPage(file, wikiRoot))
  }
  for (const error of errors) console.error(error)
  if (errors.length) {
    console.error(`lint: ${errors.length} problem${errors.length === 1 ? '' : 's'}`)
    return 1
  }
  console.log('lint: ok')
  return 0
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  try {
    process.exit(main() ?? 0)
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}
