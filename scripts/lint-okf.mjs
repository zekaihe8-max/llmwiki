// Full-pack OKF v0.2 lint for the wiki/ bundle, plus this repo's project rules.
//
// Severity labels:
//   [okf]     — required by Open Knowledge Format v0.2
//   [project] — stricter rules for this repo (Source/Topic schema, bilingual option)
//   [suggest] — optional / advisory
//
// Modes:
//   default          full-pack OKF + project structural rules (not bilingual)
//   --bilingual      project bilingual completeness only (title_en, description_en,
//                    bilingual section headings). Exit code separate from OKF.
//   --source + --url filing gate for one article ingest
//
// Do not treat Source/Topic-only lint as "full-pack compliant".

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseWikiLinks } from './build-graph.mjs'
import { parseFrontmatter } from './lib/yaml.mjs'
import { normalizeUrl } from './lib/urls.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ISO_OFFSET = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/
const FORMAL_TYPES = new Set(['Source', 'Topic'])
const META_TYPES = new Set(['Overview', 'Concept', 'Guide', 'Graph', 'Digest'])

const CONTRADICTIONS_RE = /^## (?:矛盾与变化 \/ Contradictions|Contradictions)\s*$/m
const SUMMARY_BI_RE = /^## (?:摘要 \/ Summary|Summary)\s*$/m
const SYNTHESIS_BI_RE = /^## (?:综合分析 \/ Synthesis|Synthesis)\s*$/m
const RELATED_BI_RE = /^## (?:相关 \/ Related|Related)\s*$/m

export function lintPage(absPath, wikiRoot, options = {}) {
  const { bilingual = false } = options
  const findings = []
  const rel = path.relative(wikiRoot, absPath).replace(/\\/g, '/')
  if (!fs.existsSync(absPath)) {
    return [issue('okf', `${rel}: file not found`)]
  }
  const raw = fs.readFileSync(absPath, 'utf8')
  const parsed = parseFrontmatter(raw)
  if (!parsed) {
    return [issue('okf', `${rel}: missing YAML frontmatter`)]
  }
  const data = parsed.data || {}
  const body = parsed.body || ''

  if (!text(data.type)) {
    findings.push(issue('okf', `${rel}: type is required`))
  } else if (!FORMAL_TYPES.has(data.type) && !META_TYPES.has(data.type) && !isDigestType(data.type)) {
    findings.push(issue('suggest', `${rel}: type "${data.type}" is not a known Source/Topic/meta type`))
  }

  if (FORMAL_TYPES.has(data.type) || bilingual) {
    findings.push(...lintFormalPage(rel, data, body, wikiRoot, { bilingual, requireFormal: FORMAL_TYPES.has(data.type) }))
  } else {
    if (!text(data.title)) findings.push(issue('project', `${rel}: title is required`))
    const headings = h1Headings(body)
    if (headings.length !== 1) findings.push(issue('project', `${rel}: body needs exactly one # heading`))
    else if (text(data.title) && headings[0] !== String(data.title).trim()) {
      findings.push(issue('project', `${rel}: # heading must match title`))
    }
    if (bilingual) findings.push(...lintBilingualFields(rel, data, body, data.type))
    findings.push(...lintWikiLinkTargets(rel, body, wikiRoot))
  }

  return findings
}

function lintFormalPage(rel, data, body, wikiRoot, { bilingual, requireFormal }) {
  const findings = []
  if (requireFormal && data.type !== 'Source' && data.type !== 'Topic') {
    findings.push(issue('okf', `${rel}: type must be Source or Topic`))
  }
  if (!text(data.title)) findings.push(issue('okf', `${rel}: title is required`))
  if (!text(data.description)) findings.push(issue('project', `${rel}: description is required`))

  const generated = data.generated
  if (!generated || typeof generated !== 'object' || Array.isArray(generated)) {
    findings.push(issue('okf', `${rel}: generated must be a mapping with by and at`))
  } else {
    if (!text(generated.by)) findings.push(issue('okf', `${rel}: generated.by is required`))
    if (!text(generated.at) || !ISO_OFFSET.test(String(generated.at))) {
      findings.push(issue('okf', `${rel}: generated.at must be ISO 8601 with an explicit offset`))
    }
  }

  const headings = h1Headings(body)
  if (headings.length !== 1) findings.push(issue('okf', `${rel}: body needs exactly one # heading`))
  else if (text(data.title) && headings[0] !== String(data.title).trim()) {
    findings.push(issue('okf', `${rel}: # heading must match title`))
  }

  if (data.type === 'Source') {
    if (!normalizeUrl(data.resource)) findings.push(issue('okf', `${rel}: Source resource must be an http(s) URL`))
  } else if (data.resource != null && data.resource !== '' && !normalizeUrl(data.resource)) {
    findings.push(issue('okf', `${rel}: Topic resource must be an http(s) URL when set`))
  }

  if (data.type === 'Topic' && !CONTRADICTIONS_RE.test(body)) {
    findings.push(issue('project', `${rel}: Topic is missing ## 矛盾与变化 / Contradictions (or ## Contradictions)`))
  }

  const sources = Array.isArray(data.sources) ? data.sources : null
  if (!sources) findings.push(issue('okf', `${rel}: sources must be a list`))
  const ids = []
  for (const [index, source] of (sources || []).entries()) {
    if (!source || typeof source !== 'object' || Array.isArray(source)) {
      findings.push(issue('okf', `${rel}: sources[${index}] must be a mapping`))
      continue
    }
    if (!source.resource) findings.push(issue('okf', `${rel}: sources[${index}].resource is required`))
    else if (!resourceOk(source.resource, wikiRoot, path.posix.dirname(rel))) {
      findings.push(issue('okf', `${rel}: sources[${index}].resource is not an https URL or a wiki path`))
    }
    if (source.id != null) {
      if (!/^[a-z0-9-]+$/.test(String(source.id))) {
        findings.push(issue('okf', `${rel}: sources[${index}].id must match [a-z0-9-]+`))
      } else ids.push(String(source.id))
    }
  }
  const defined = [...body.matchAll(/^\[\^([^\]]+)\]:/gm)].map((match) => match[1])
  for (const id of ids) {
    if (!defined.includes(id)) findings.push(issue('okf', `${rel}: missing footnote definition [^${id}]:`))
  }
  for (const id of defined) {
    if (!ids.includes(id)) findings.push(issue('okf', `${rel}: footnote [^${id}] has no sources[].id`))
  }

  findings.push(...lintWikiLinkTargets(rel, body, wikiRoot))
  if (bilingual) findings.push(...lintBilingualFields(rel, data, body, data.type))
  return findings
}

function lintBilingualFields(rel, data, body, type) {
  const findings = []
  if (!text(data.title_en)) findings.push(issue('project', `${rel}: title_en is required (bilingual)`))
  if (!text(data.description_en) && (type === 'Source' || type === 'Topic')) {
    findings.push(issue('project', `${rel}: description_en is required (bilingual)`))
  }
  if (type === 'Source' || type === 'Topic') {
    if (!SUMMARY_BI_RE.test(body) && type === 'Source') {
      findings.push(issue('project', `${rel}: missing ## 摘要 / Summary (bilingual)`))
    }
    if (type === 'Topic') {
      if (!SYNTHESIS_BI_RE.test(body)) {
        findings.push(issue('project', `${rel}: missing ## 综合分析 / Synthesis (bilingual)`))
      }
      if (!CONTRADICTIONS_RE.test(body) || !/^## 矛盾与变化 \/ Contradictions\s*$/m.test(body)) {
        // Accept English-only Contradictions for OKF/project structure, but bilingual mode wants the paired heading.
        if (!/^## 矛盾与变化 \/ Contradictions\s*$/m.test(body)) {
          findings.push(issue('project', `${rel}: missing ## 矛盾与变化 / Contradictions (bilingual)`))
        }
      }
    }
    if (!RELATED_BI_RE.test(body)) {
      findings.push(issue('project', `${rel}: missing ## 相关 / Related (bilingual)`))
    }
  }
  return findings
}

function lintWikiLinkTargets(rel, body, wikiRoot) {
  const findings = []
  const currentDir = path.posix.dirname(rel)
  const links = parseWikiLinks(body, currentDir === '.' ? '' : `${currentDir}/`)
  for (const link of links) {
    if (!wikiFile(wikiRoot, link)) findings.push(issue('okf', `${rel}: wiki link does not resolve: ${link}`))
  }
  return findings
}

export function lintPack(wikiRoot, options = {}) {
  const { bilingual = false } = options
  const findings = []

  // No templates inside the pack.
  walkMd(wikiRoot, (abs, rel) => {
    if (rel.split('/').some((part) => part.startsWith('_'))) {
      findings.push(issue('okf', `${rel}: files/folders starting with _ must not live under wiki/ (move templates outside the pack)`))
    }
  })

  // Root index: only okf_version.
  const rootIndex = path.join(wikiRoot, 'index.md')
  if (!fs.existsSync(rootIndex)) {
    findings.push(issue('okf', 'index.md: bundle-root index.md is missing'))
  } else {
    const raw = fs.readFileSync(rootIndex, 'utf8')
    const parsed = parseFrontmatter(raw)
    if (!parsed) {
      findings.push(issue('okf', 'index.md: missing YAML frontmatter with okf_version'))
    } else {
      const keys = Object.keys(parsed.data || {})
      for (const key of keys) {
        if (key !== 'okf_version') {
          findings.push(issue('okf', `index.md: root index frontmatter may only contain okf_version (found ${key})`))
        }
      }
      if (!text(parsed.data?.okf_version)) {
        findings.push(issue('okf', 'index.md: okf_version is required'))
      }
    }
    findings.push(...lintWikiLinkTargets('index.md', parsed?.body || raw, wikiRoot))
    if (bilingual) {
      if (!/\/\s*Home\b|Home\s*\//.test(raw) && !/\btitle_en\b/.test(raw) && !(/中文|Hezekai/.test(raw) && /English|Home|Catalog/.test(raw))) {
        // Soft check: catalog body should carry ZH/EN pairs.
        if (!/开始|Start here|目录|Catalog/.test(raw) || !(/[\u4e00-\u9fff]/.test(raw) && /[A-Za-z]{3,}/.test(raw))) {
          findings.push(issue('project', 'index.md: catalog should be bilingual (ZH/EN)'))
        }
      }
    }
  }

  // log.md: no frontmatter.
  const logPath = path.join(wikiRoot, 'log.md')
  if (fs.existsSync(logPath)) {
    const raw = fs.readFileSync(logPath, 'utf8')
    if (/^---\r?\n/.test(raw)) {
      findings.push(issue('okf', 'log.md: must not have YAML frontmatter'))
    }
    findings.push(...lintWikiLinkTargets('log.md', raw, wikiRoot))
  }

  // Subdirectory index.md: no frontmatter.
  walkMd(wikiRoot, (abs, rel) => {
    if (rel === 'index.md') return
    if (path.posix.basename(rel) !== 'index.md') return
    const raw = fs.readFileSync(abs, 'utf8')
    if (/^---\r?\n/.test(raw)) {
      findings.push(issue('okf', `${rel}: subdirectory index.md must not have frontmatter`))
    }
    findings.push(...lintWikiLinkTargets(rel, raw, wikiRoot))
  })

  // Every non-index, non-log concept page needs type (OKF).
  walkMd(wikiRoot, (abs, rel) => {
    const base = path.posix.basename(rel)
    if (base === 'index.md' || base === 'log.md') return
    if (rel.split('/').some((part) => part.startsWith('_'))) return

    const raw = fs.readFileSync(abs, 'utf8')
    const parsed = parseFrontmatter(raw)
    if (!parsed) {
      findings.push(issue('okf', `${rel}: missing YAML frontmatter`))
      return
    }
    if (!text(parsed.data?.type)) {
      findings.push(issue('okf', `${rel}: type is required`))
    }

      const pageType = parsed.data?.type
    if (pageType === 'Source' || pageType === 'Topic') {
      findings.push(...lintFormalPage(rel, parsed.data || {}, parsed.body || '', wikiRoot, { bilingual, requireFormal: true }))
    } else {
      // Meta / digest pages: title required. Single H1 for Overview/Concept/Guide.
      // Graph may be component-only. Daily x-digest dumps use ## sections only.
      if (!text(parsed.data?.title)) findings.push(issue('project', `${rel}: title is required`))
      const headings = h1Headings(parsed.body || '')
      const skipH1 = pageType === 'Graph' || isDigestType(pageType) || rel.startsWith('sources/x-digest/')
      if (!skipH1) {
        if (headings.length !== 1) findings.push(issue('project', `${rel}: body needs exactly one # heading`))
        else if (text(parsed.data?.title) && headings[0] !== String(parsed.data.title).trim()) {
          findings.push(issue('project', `${rel}: # heading must match title`))
        }
      }
      if (bilingual && (pageType === 'Overview' || pageType === 'Concept' || pageType === 'Guide' || pageType === 'Graph')) {
        if (!text(parsed.data?.title_en)) findings.push(issue('project', `${rel}: title_en is required (bilingual)`))
      }
      if (bilingual && rel.startsWith('sources/x-digest/') && path.posix.basename(rel) !== 'index.md') {
        if (!text(parsed.data?.title_en)) findings.push(issue('project', `${rel}: title_en is required (bilingual)`))
      }
      findings.push(...lintWikiLinkTargets(rel, parsed.body || '', wikiRoot))
    }
  })

  return findings
}

function isDigestType(type) {
  return typeof type === 'string' && (type === 'Digest' || type === 'frontier-ai' || type === 'cn-x')
}

export function lintFiling({ wikiRoot, sourcePath, url }) {
  const errors = []
  const rel = sourcePath.replace(/\\/g, '/')
  const abs = path.join(wikiRoot, rel)
  errors.push(...lintPage(abs, wikiRoot, { bilingual: false }))
  const canonical = normalizeUrl(url)
  if (!canonical) errors.push(issue('project', 'filing: article URL is not http(s)'))

  let page = null
  if (fs.existsSync(abs)) {
    page = parseFrontmatter(fs.readFileSync(abs, 'utf8'))
    if (page && canonical && normalizeUrl(page.data?.resource) !== canonical) {
      errors.push(issue('project', `${rel}: resource does not match the fetched article URL`))
    }
  }

  const matches = findSourcePages(wikiRoot, canonical)
  if (canonical && matches.length !== 1) {
    errors.push(issue('project', `filing: expected one Source for ${canonical}, found ${matches.length} (${matches.join(', ') || 'none'})`))
  } else if (matches.length === 1 && matches[0] !== rel) {
    errors.push(issue('project', `filing: source path ${rel} is not the page that owns ${canonical}`))
  }

  const base = path.posix.basename(rel)
  const indexPath = path.join(wikiRoot, 'index.md')
  if (!fs.existsSync(indexPath)) errors.push(issue('okf', 'filing: wiki/index.md is missing'))
  else if (!fs.readFileSync(indexPath, 'utf8').includes(base)) {
    errors.push(issue('project', 'filing: wiki/index.md does not mention the source page'))
  }

  const logPath = path.join(wikiRoot, 'log.md')
  if (!fs.existsSync(logPath)) errors.push(issue('okf', 'filing: wiki/log.md is missing'))
  else {
    const mentions = fs.readFileSync(logPath, 'utf8').split(/\r?\n/).filter((line) => line.includes(base))
    if (mentions.length === 0) errors.push(issue('project', 'filing: wiki/log.md does not mention the source page'))
    if (mentions.length > 1) errors.push(issue('project', 'filing: wiki/log.md mentions the source page more than once'))
  }

  if (page) {
    const currentDir = path.posix.dirname(rel)
    const links = parseWikiLinks(page.body || '', currentDir === '.' ? '' : `${currentDir}/`)
    const topics = links.filter((link) => link.replace(/\\/g, '/').includes('topics/'))
    if (topics.length === 0) errors.push(issue('project', `${rel}: Source does not link a Topic page`))
    for (const link of topics) {
      const topicAbs = wikiFile(wikiRoot, link)
      if (!topicAbs) continue
      errors.push(...lintPage(topicAbs, wikiRoot, { bilingual: false }))
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

/** Strip fenced code blocks so example `#` lines inside them do not count as page headings. */
function bodyWithoutFences(body) {
  return String(body || '').replace(/```[\s\S]*?```/g, '')
}

function h1Headings(body) {
  return [...bodyWithoutFences(body).matchAll(/^#\s+(.+?)\s*$/gm)].map((match) => match[1].trim())
}

function issue(severity, message) {
  return `[${severity}] ${message}`
}

function walkMd(wikiRoot, fn) {
  function walk(dir, prefix = '') {
    if (!fs.existsSync(dir)) return
    for (const name of fs.readdirSync(dir).sort()) {
      const abs = path.join(dir, name)
      const rel = prefix ? `${prefix}/${name}` : name
      const stat = fs.statSync(abs)
      if (stat.isDirectory()) walk(abs, rel)
      else if (name.endsWith('.md')) fn(abs, rel.replace(/\\/g, '/'))
    }
  }
  walk(wikiRoot)
}

function printHelp() {
  console.log(`Usage: node scripts/lint-okf.mjs [--wiki wiki/] [--file path]...
       [--bilingual] [--source sources/articles/page.md --url https://...]

Default: full-pack OKF v0.2 + project structural rules across wiki/
(overview, concepts, guides, graph, index, log, sources, topics).

  --bilingual   also (or only, when passed alone with no --file) check
                same-file ZH/EN completeness as a project rule.
  --source/--url  run the filing gate for one article.

Findings are labeled [okf], [project], or [suggest].
`)
}

function parseArgs(argv) {
  const out = { wiki: null, files: [], source: null, url: null, help: false, bilingual: false }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') out.help = true
    else if (arg === '--wiki') out.wiki = argv[++i]
    else if (arg === '--file') out.files.push(argv[++i])
    else if (arg === '--source') out.source = argv[++i]
    else if (arg === '--url') out.url = argv[++i]
    else if (arg === '--bilingual') out.bilingual = true
    else if (arg.startsWith('-')) throw new Error(`Unknown flag: ${arg}`)
    else out.files.push(arg)
  }
  return out
}

function formalPages(wikiRoot) {
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

/**
 * Source/Topic-only lint used by ingest post-checks.
 * Full-pack compliance is `lintPack` / `npm run lint:okf` (CLI default).
 */
export function lintWiki(wikiRoot, files = null, options = {}) {
  const pages = files == null ? formalPages(wikiRoot) : files
  const errors = []
  for (const file of pages) errors.push(...lintPage(file, wikiRoot, options))
  return errors
}

function summarize(findings) {
  const counts = { okf: 0, project: 0, suggest: 0, other: 0 }
  for (const line of findings) {
    const match = String(line).match(/^\[(okf|project|suggest)\]/)
    if (match) counts[match[1]]++
    else counts.other++
  }
  return counts
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printHelp()
    return 0
  }
  const wikiRoot = path.resolve(args.wiki || path.join(repoRoot, 'wiki'))
  let findings = []
  if (args.source || args.url) {
    if (!args.source || !args.url) throw new Error('Pass both --source and --url for the filing gate')
    findings = lintFiling({ wikiRoot, sourcePath: args.source, url: args.url })
  } else if (args.files.length) {
    findings = args.files.flatMap((file) => lintPage(path.resolve(file), wikiRoot, { bilingual: args.bilingual }))
  } else {
    findings = lintPack(wikiRoot, { bilingual: args.bilingual })
  }

  // Default exit: fail on okf + project (not suggest). Bilingual-only run fails on project bilingual gaps.
  const blocking = findings.filter((line) => {
    if (args.bilingual && !args.files.length && !args.source) {
      // Full bilingual mode: report all, fail on project+okf.
      return /^\[(okf|project)\]/.test(line)
    }
    // Structural full-pack: ignore bilingual-only messages that somehow appear; fail okf+project.
    return /^\[(okf|project)\]/.test(line)
  })

  for (const line of findings) console.error(line)
  const counts = summarize(findings)
  if (blocking.length) {
    console.error(
      `lint: ${blocking.length} problem${blocking.length === 1 ? '' : 's'} ` +
        `(okf=${counts.okf}, project=${counts.project}, suggest=${counts.suggest})`,
    )
    return 1
  }
  console.log(
    `lint: ok (okf=${counts.okf}, project=${counts.project}, suggest=${counts.suggest}` +
      `${args.bilingual ? ', bilingual checked' : ''})`,
  )
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
