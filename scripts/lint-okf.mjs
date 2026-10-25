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
import { parseFrontmatter, YamlFrontmatterError } from './lib/yaml.mjs'
import { normalizeUrl } from './lib/urls.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ISO_OFFSET = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/
const FORMAL_TYPES = new Set(['Source', 'Topic'])
const META_TYPES = new Set(['Overview', 'Concept', 'Guide', 'Graph', 'Digest'])

const CONTRADICTIONS_RE = /^## (?:矛盾与变化 \/ Contradictions|Contradictions)\s*$/m
const SUMMARY_BI_RE = /^## (?:摘要 \/ Summary|Summary)\s*$/m
const SYNTHESIS_BI_RE = /^## (?:综合分析 \/ Synthesis|Synthesis)\s*$/m
const RELATED_BI_RE = /^## (?:相关 \/ Related|Related)\s*$/m


function safeParseFrontmatter(raw, rel) {
  try {
    return { parsed: parseFrontmatter(raw), error: null }
  } catch (error) {
    if (error instanceof YamlFrontmatterError) {
      return { parsed: null, error: issue('okf', `${rel}: ${error.message}`) }
    }
    throw error
  }
}

export function lintPage(absPath, wikiRoot, options = {}) {
  const { bilingual = false } = options
  const findings = []
  const rel = path.relative(wikiRoot, absPath).replace(/\\/g, '/')
  if (!fs.existsSync(absPath)) {
    return [issue('okf', `${rel}: file not found`)]
  }
  const raw = fs.readFileSync(absPath, 'utf8')
  let parsed
  try {
    parsed = parseFrontmatter(raw)
  } catch (error) {
    if (error instanceof YamlFrontmatterError) {
      return [issue('okf', `${rel}: ${error.message}`)]
    }
    throw error
  }
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
      if (!/^## 矛盾与变化 \/ Contradictions\s*$/m.test(body)) {
        findings.push(issue('project', `${rel}: missing ## 矛盾与变化 / Contradictions (bilingual)`))
      }
    }
    if (!RELATED_BI_RE.test(body)) {
      findings.push(issue('project', `${rel}: missing ## 相关 / Related (bilingual)`))
    }
    findings.push(...lintBilingualBodyStructure(rel, body, type))
  }
  return findings
}

/**
 * Structural ZH/EN pairing only — translation quality stays Agent-reviewed.
 *
 * Convention (templates / AGENTS.md / compile prompt):
 * - Same-line pair: `中文。 / English.`
 * - Adjacent blocks: a ZH-only paragraph or bullet, then the EN translation block
 * - Shared code fences, formulas, wiki links, footnote defs, and bare URLs are ignored
 * - Product names / APIs / cite ids alone do NOT count as English translation
 */
function lintBilingualBodyStructure(rel, body, type) {
  const findings = []
  const cleaned = bodyWithoutFences(body)
  const h1 = cleaned.match(/^#\s+.+?\s*$/m)
  if (h1) {
    const after = cleaned.slice(h1.index + h1[0].length)
    const nextMeaningful = after.split(/\r?\n/).map((l) => l.trim()).find((l) => l.length > 0)
    if (!nextMeaningful || !/^\*[^*\n]+\*$/.test(nextMeaningful)) {
      findings.push(issue('project', `${rel}: missing italic English title line after # heading (bilingual body)`))
    }
  }

  const required = []
  if (type === 'Source') required.push({ name: '摘要 / Summary', re: SUMMARY_BI_RE })
  if (type === 'Topic') {
    required.push({ name: '综合分析 / Synthesis', re: SYNTHESIS_BI_RE })
    required.push({ name: '矛盾与变化 / Contradictions', re: /^## 矛盾与变化 \/ Contradictions\s*$/m })
  }
  required.push({ name: '相关 / Related', re: RELATED_BI_RE })

  for (const section of required) {
    const match = cleaned.match(section.re)
    if (!match) continue
    const sectionBody = sectionBodyAfter(cleaned, match)
    const isRelated = section.name.startsWith('相关')
    if (isRelated) {
      if (!sectionBody || (!/\[[^\]]*\]\([^)]+\.md\)/.test(sectionBody) && !sectionHasZhEnPair(sectionBody))) {
        findings.push(issue(
          'project',
          `${rel}: section ## ${section.name} needs wiki links or ZH/EN paired body (bilingual)`,
        ))
      }
      continue
    }
    if (!sectionHasZhEnPair(sectionBody)) {
      findings.push(issue(
        'project',
        `${rel}: section ## ${section.name} lacks ZH/EN paired body content (bilingual)`,
      ))
    }
  }
  return findings
}

function sectionBodyAfter(body, headingMatch) {
  const start = headingMatch.index + headingMatch[0].length
  const rest = body.slice(start)
  const next = rest.search(/\n##\s+/)
  return (next < 0 ? rest : rest.slice(0, next)).trim()
}

/** Strip material that must not count as English translation. */
function stripNonTranslation(text) {
  return String(text || '')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/https?:\/\/\S+/gi, ' ')
    .replace(/`[^`\n]+`/g, ' ')
    .replace(/\[\^[^\]]+\]:?/g, ' ')
    .replace(/\b[\w.-]+\.(?:md|json|js|ts|mjs|css|html|png|jpg)\b/gi, ' ')
}

function latinWords(text) {
  const cleaned = stripNonTranslation(text)
  return (cleaned.match(/[A-Za-z][A-Za-z'-]{1,}/g) || []).filter((w) => {
    if (w.length < 3) return false
    // All-caps short tokens (API, KV, URL, HTTP) are not a translation.
    if (/^[A-Z0-9]{2,6}$/.test(w)) return false
    return true
  })
}

function hanCount(text) {
  return (stripNonTranslation(text).match(/[\u4e00-\u9fff]/g) || []).length
}

function latinLetterCount(text) {
  return (stripNonTranslation(text).match(/[A-Za-z]/g) || []).length
}

function hasHan(text) {
  return hanCount(text) > 0
}

function hasRealEnglish(text) {
  // Need at least two Latin words after stripping URLs/code/cites/filenames.
  return latinWords(text).length >= 2
}

/**
 * Chinese prose may embed many product names (Workers, CyberArk, …).
 * English translations may quote short Chinese proper nouns.
 * A block is EN-dominant when Latin clearly outweighs Han; otherwise enough Han → ZH.
 */
function isPrimarilyEn(text) {
  const words = latinWords(text)
  if (words.length < 2) return false
  const h = hanCount(text)
  const letters = latinLetterCount(text)
  if (h === 0) return true
  const lead = stripNonTranslation(text).trim()
  // Chinese-led prose beyond a 1–2 char name is the ZH half, not EN.
  if (/^[\u4e00-\u9fff]/.test(lead) && h > 2) return false
  // Short Chinese proper nouns inside an English sentence (e.g. 航旅纵横, 乔木剪藏).
  if (h <= 8 && letters >= Math.max(24, h * 4) && words.length >= 4) return true
  return false
}

function isPrimarilyZh(text) {
  if (hanCount(text) < 4) return false
  // Prefer ZH when both signals fire (Chinese lead + embedded Latin names).
  return !isPrimarilyEn(text)
}

function isZhOnlyBlock(text) {
  return isPrimarilyZh(text)
}

function isEnOnlyBlock(text) {
  return isPrimarilyEn(text)
}

function isSameLinePair(text) {
  if (!text) return false
  if (/暂无。?\s*\/\s*None yet\.?/i.test(text)) return true
  // Prefer an explicit " / " separator with ZH left and EN right.
  const parts = String(text).split(/\s+\/\s+/)
  if (parts.length < 2) return false
  const left = parts[0]
  const right = parts.slice(1).join(' / ')
  return hanCount(left) >= 4 && isPrimarilyEn(right)
}

/** Split a section into paragraph / list-item blocks (code fences already stripped). */
function sectionBlocks(sectionBody) {
  const lines = String(sectionBody || '').split(/\r?\n/)
  const blocks = []
  let buf = []
  const flush = () => {
    const text = buf.join('\n').trim()
    if (text) blocks.push(text)
    buf = []
  }
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      flush()
      continue
    }
    if (/^[-*+]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      flush()
      blocks.push(trimmed.replace(/^[-*+]\s+/, '').replace(/^\d+\.\s+/, ''))
      continue
    }
    // Footnote definitions are shared, not translation pairs.
    if (/^\[\^[^\]]+\]:/.test(trimmed)) {
      flush()
      continue
    }
    buf.push(trimmed)
  }
  flush()
  return blocks
}

function sectionHasZhEnPair(sectionBody) {
  if (!sectionBody) return false
  // NOTE: do NOT short-circuit the whole section on a single "暂无。 / None yet."
  // That placeholder is only a valid pair for its own block; later unpaired
  // ZH/EN paragraphs/lists in the same section must still fail.

  const blocks = sectionBlocks(sectionBody)
  if (!blocks.length) return false

  let paired = 0
  let i = 0
  while (i < blocks.length) {
    const cur = blocks[i]
    if (isSameLinePair(cur)) {
      paired++
      i++
      continue
    }
    const next = blocks[i + 1]
    if (next && isZhOnlyBlock(cur) && isEnOnlyBlock(next)) {
      paired++
      i += 2
      continue
    }
    if (next && isEnOnlyBlock(cur) && isZhOnlyBlock(next)) {
      // Allow EN then ZH adjacency as well.
      paired++
      i += 2
      continue
    }
    // Unpaired primarily-ZH or primarily-EN prose fails the section.
    // Link-only / empty-after-strip blocks are ignored.
    const stripped = stripNonTranslation(cur).replace(/\s+/g, '')
    if (stripped && (isPrimarilyZh(cur) || isPrimarilyEn(cur))) {
      return false
    }
    i++
  }
  return paired > 0
}

/** Exported for unit tests. */
export function _testBilingualPairing() {
  return { sectionHasZhEnPair, stripNonTranslation, sectionBlocks, hasRealEnglish, isSameLinePair }
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
    let parsed
    try {
      parsed = parseFrontmatter(raw)
    } catch (error) {
      if (error instanceof YamlFrontmatterError) {
        findings.push(issue('okf', `index.md: ${error.message}`))
        parsed = null
      } else throw error
    }
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
    const { parsed, error } = safeParseFrontmatter(raw, rel)
    if (error) {
      findings.push(error)
      return
    }
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
  errors.push(...lintPage(abs, wikiRoot, { bilingual: true }))
  const canonical = normalizeUrl(url)
  if (!canonical) errors.push(issue('project', 'filing: article URL is not http(s)'))

  let page = null
  if (fs.existsSync(abs)) {
    try {
      page = parseFrontmatter(fs.readFileSync(abs, 'utf8'))
    } catch (error) {
      if (error instanceof YamlFrontmatterError) {
        errors.push(issue('okf', `${rel}: ${error.message}`))
        page = null
      } else throw error
    }
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
      errors.push(...lintPage(topicAbs, wikiRoot, { bilingual: true }))
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
    let parsed
    try {
      parsed = parseFrontmatter(fs.readFileSync(path.join(dir, name), 'utf8'))
    } catch {
      continue
    }
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
