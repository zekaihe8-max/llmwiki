// Graph construction adapted from lucasastorian/llmwiki (Apache-2.0):
// api/services/references.py (parse_wiki_links, extract_references, parse_citation_filename)
// and api/services/graph.py (node and edge shapes).
//
// Static VitePress build: walk wiki/**/*.md and emit /graph-data.json.
// No edges are invented — a link or citation becomes an edge only when it
// resolves to another wiki file (exact path for links_to; OKF sources[].id
// + sources[].resource for cites). Code fences and inline code are ignored.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { normalizeUrl } from './lib/urls.mjs'
import { parseFrontmatter, YamlFrontmatterError } from './lib/yaml.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const defaultWikiDir = path.join(repoRoot, 'wiki')
const defaultOutFile = path.join(repoRoot, '.vitepress', 'public', 'graph-data.json')

const WIKI_LINK_RE = /(?<!!)\[(?:[^\]]*)\]\(([^)]+)\)/g
const FOOTNOTE_DEF_RE = /^\[\^([^\]]+)\]:\s*(.*)$/gm
const IMAGE_RE = /\.(png|jpg|jpeg|gif|webp|svg)$/i

/** Stable id: wiki-relative path, no leading slash, no .md. Root index stays "index". */
export function nodeIdFromRel(relMd) {
  const rel = relMd.replace(/\\/g, '/').replace(/\.md$/i, '')
  if (rel !== 'index' && rel.endsWith('/index')) return rel.slice(0, -'/index'.length)
  return rel
}

export function currentDirFor(relMd) {
  const dir = path.posix.dirname(relMd.replace(/\\/g, '/'))
  return dir === '.' ? '' : `${dir}/`
}

/**
 * Drop fenced code blocks and inline code so example links/footnotes never
 * become graph edges. Lightweight; no markdown AST dependency.
 */
export function stripCode(content) {
  const lines = String(content).split(/\r?\n/)
  const kept = []
  let fence = null
  for (const line of lines) {
    const open = line.match(/^(```|~~~)/)
    if (fence) {
      if (line.startsWith(fence)) fence = null
      continue
    }
    if (open) {
      fence = open[1]
      continue
    }
    kept.push(line.replace(/`[^`\n]*`/g, ''))
  }
  return kept.join('\n')
}

function cleanHref(raw) {
  let href = raw.trim().replace(/\r$/, '')
  if (href.startsWith('<') && href.endsWith('>')) href = href.slice(1, -1).trim()
  const titled = href.match(/^(.*?)\s+(?:"[^"]*"|'[^']*')\s*$/)
  if (titled) href = titled[1].trim()
  return href
}

/**
 * Resolve a wiki href to a path relative to the wiki root (may still include .md).
 * Mirrors parse_wiki_links: skip http / mailto / hash / data / images.
 */
export function resolveWikiHref(rawHref, currentDir) {
  let href = cleanHref(rawHref)
  if (!href) return null
  if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('data:')) {
    return null
  }
  href = href.split('#')[0].split('?')[0].trim()
  if (!href || IMAGE_RE.test(href)) return null

  let resolved
  if (href.startsWith('/wiki/')) {
    resolved = href.replace(/^\/wiki\//, '')
  } else if (href.startsWith('./')) {
    resolved = `${currentDir}${href.slice(2)}`
  } else if (href.startsWith('../')) {
    const parts = `${currentDir.replace(/\/$/, '')}/${href}`.split('/')
    const resolvedParts = []
    for (const part of parts) {
      if (part === '..') {
        if (resolvedParts.length) resolvedParts.pop()
      } else if (part && part !== '.') {
        resolvedParts.push(part)
      }
    }
    resolved = resolvedParts.join('/')
  } else if (href.startsWith('/')) {
    resolved = href.replace(/^\/+/, '')
  } else if (!href.includes('/')) {
    resolved = currentDir ? `${currentDir}${href}` : href
  } else {
    resolved = href
  }
  return resolved || null
}

/**
 * Internal wiki link paths, resolved relative to currentDir (trailing slash or "").
 * Hash and query are stripped after that skip so `page.md#section` still resolves.
 */
export function parseWikiLinks(content, currentDir) {
  const paths = []
  for (const match of stripCode(content).matchAll(WIKI_LINK_RE)) {
    const resolved = resolveWikiHref(match[1], currentDir)
    if (resolved) paths.push(resolved)
  }
  return paths
}

/** Mirrors parse_citation_filename: 'paper.pdf, p.3' → { filename, page }. Kept for tests/helpers. */
export function parseCitationFilename(raw) {
  let text = String(raw).trim().replace(/\r$/, '')
  text = text.replace(/^\*+/, '').replace(/\*+$/, '')
  const linkMatch = text.match(/^\[([^\]]+)\]\([^)]*\)(.*)$/)
  if (linkMatch) text = `${linkMatch[1]}${linkMatch[2]}`
  const splitAt = text.search(/\s+[-–—]\s+/)
  if (splitAt !== -1) text = text.slice(0, splitAt)
  text = text.trim()
  const pageMatch = text.match(/,\s*p\.?\s*(\d+)\b/)
  if (pageMatch && pageMatch.index != null) {
    return {
      filename: text.slice(0, pageMatch.index).trim(),
      page: Number(pageMatch[1]),
    }
  }
  return { filename: text, page: null }
}

function firstHeading(body) {
  let fence = false
  for (const line of String(body || '').split(/\r?\n/)) {
    if (/^(```|~~~)/.test(line)) {
      fence = !fence
      continue
    }
    if (fence) continue
    const match = line.match(/^#\s+(.+?)\s*#*\s*$/)
    if (match) return match[1].trim()
  }
  return ''
}

function walkMarkdown(dir, rel = '') {
  if (!fs.existsSync(dir)) return []
  /** @type {{ abs: string, rel: string }[]} */
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue
    const relPath = rel ? `${rel}/${entry.name}` : entry.name
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walkMarkdown(abs, relPath))
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) files.push({ abs, rel: relPath })
  }
  return files
}

function pageTypeOf(fields) {
  const type = typeof fields.type === 'string' ? fields.type.trim() : ''
  if (type === 'Source' || type === 'Topic') return type
  return null
}

function stringOrNull(value) {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed || null
}

function dateOrNull(value) {
  const text = stringOrNull(value)
  if (!text) return null
  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : null
}

function sourcesList(fields) {
  return Array.isArray(fields.sources) ? fields.sources.filter((entry) => entry && typeof entry === 'object') : []
}

function lookupByPath(byPath, keyPath) {
  const key = String(keyPath || '').replace(/\\/g, '/').toLowerCase()
  if (!key) return null
  return byPath.get(key) || byPath.get(`${key}.md`) || null
}

/**
 * @param {string} wikiDir
 * @returns {{ nodes: object[], edges: object[] }}
 */
export function buildGraph(wikiDir) {
  // wiki/graph.md is the viewer itself, not a page in the graph.
  const files = walkMarkdown(wikiDir).filter((file) => file.rel.replace(/\\/g, '/') !== 'graph.md')
  const nodes = files.map(({ abs, rel }) => {
    const raw = fs.readFileSync(abs, 'utf8')
    let parsed
    try {
      parsed = parseFrontmatter(raw)
    } catch (error) {
      if (error instanceof YamlFrontmatterError) {
        throw new Error(`${rel}: ${error.message}`)
      }
      throw error
    }
    const fields = parsed?.data || {}
    const body = parsed?.body ?? raw
    const filename = path.posix.basename(rel)
    const stem = filename.replace(/\.md$/i, '')
    const titleField = stringOrNull(fields.title)
    const title = titleField || firstHeading(body) || stem
    const description = stringOrNull(fields.description)
    const tags = Array.isArray(fields.tags) ? fields.tags.map(String) : []
    const id = nodeIdFromRel(rel)
    const generatedAt = fields.generated && typeof fields.generated === 'object' && !Array.isArray(fields.generated)
      ? stringOrNull(fields.generated.at)
      : null
    const resource = stringOrNull(fields.resource)
    return {
      id,
      title,
      description,
      path: id,
      file_type: 'md',
      source_kind: 'wiki',
      tags,
      page_type: pageTypeOf(fields),
      resource,
      date: dateOrNull(fields.date),
      generated_at: generatedAt,
      // Keep metadata pages in the data; the viewer hides them by default.
      is_meta: /^(index|log)\.md$/i.test(filename),
      // lookup-only; stripped before emit
      _rel: rel.replace(/\\/g, '/'),
      _filename: filename,
      _body: body,
      _sources: sourcesList(fields),
    }
  })

  /** @type {Map<string, object>} */
  const byPath = new Map()
  /** @type {Map<string, object>} */
  const byResource = new Map()

  for (const node of nodes) {
    byPath.set(node._rel.toLowerCase(), node)
    const withoutExt = node._rel.replace(/\.md$/i, '').toLowerCase()
    if (!byPath.has(withoutExt)) byPath.set(withoutExt, node)
    if (!byPath.has(node.id.toLowerCase())) byPath.set(node.id.toLowerCase(), node)
    const canonical = normalizeUrl(node.resource)
    if (canonical && node.page_type === 'Source' && !byResource.has(canonical)) {
      byResource.set(canonical, node)
    }
  }

  /** @type {Map<string, object>} */
  const edges = new Map()

  for (const node of nodes) {
    const seen = new Set()
    const currentDir = currentDirFor(node._rel)
    const prose = stripCode(node._body)
    const sourcesById = new Map()
    for (const entry of node._sources) {
      if (entry.id == null) continue
      const id = String(entry.id)
      if (/^[a-z0-9-]+$/.test(id) && !sourcesById.has(id)) sourcesById.set(id, entry)
    }

    for (const match of prose.matchAll(FOOTNOTE_DEF_RE)) {
      const citeId = match[1]
      const entry = sourcesById.get(citeId)
      if (!entry?.resource) continue
      const resource = String(entry.resource).trim()
      let target = null
      const asUrl = normalizeUrl(resource)
      if (asUrl) {
        target = byResource.get(asUrl) || null
      } else {
        const resolved = resolveWikiHref(resource, currentDir)
        if (resolved) target = lookupByPath(byPath, resolved)
      }
      if (!target || target.id === node.id) continue
      const key = `${target.id}\0cites`
      if (seen.has(key)) continue
      seen.add(key)
      edges.set(`${node.id}\0${target.id}\0cites`, {
        source: node.id,
        target: target.id,
        type: 'cites',
        page: null,
      })
    }

    for (const linkPath of parseWikiLinks(node._body, currentDir)) {
      const target = lookupByPath(byPath, linkPath)
      // No basename/stem fallback: unresolved paths simply produce no edge.
      if (!target || target.id === node.id) continue
      const key = `${target.id}\0links_to`
      if (seen.has(key)) continue
      seen.add(key)
      edges.set(`${node.id}\0${target.id}\0links_to`, {
        source: node.id,
        target: target.id,
        type: 'links_to',
        page: null,
      })
    }
  }

  const publicNodes = nodes
    .map(({ _rel, _filename, _body, _sources, ...node }) => node)
    .sort((a, b) => a.id.localeCompare(b.id))

  const publicEdges = [...edges.values()].sort((a, b) =>
    a.source.localeCompare(b.source)
    || a.target.localeCompare(b.target)
    || a.type.localeCompare(b.type),
  )

  const degree = new Map()
  for (const node of publicNodes) degree.set(node.id, 0)
  for (const edge of publicEdges) {
    degree.set(edge.source, (degree.get(edge.source) || 0) + 1)
    degree.set(edge.target, (degree.get(edge.target) || 0) + 1)
  }
  // Hint only — never invent edges to clear orphans.
  const orphanHints = publicNodes
    .filter((node) => (node.page_type === 'Source' || node.page_type === 'Topic') && (degree.get(node.id) || 0) === 0)
    .map((node) => `${node.id} (${node.page_type}) has no wiki links or citations`)

  return { nodes: publicNodes, edges: publicEdges, orphanHints }
}

export function writeGraphData(wikiDir = defaultWikiDir, outFile = defaultOutFile) {
  const graph = buildGraph(wikiDir)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  // Temp file then rename: failed write must not clobber a previous valid graph-data.
  const tmp = `${outFile}.${process.pid}.${Date.now()}.tmp`
  try {
    fs.writeFileSync(tmp, `${JSON.stringify(graph, null, 2)}\n`)
    fs.renameSync(tmp, outFile)
  } catch (error) {
    try { if (fs.existsSync(tmp)) fs.unlinkSync(tmp) } catch { /* ignore */ }
    throw error
  }
  return graph
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  const graph = writeGraphData()
  const cites = graph.edges.filter((edge) => edge.type === 'cites').length
  const links = graph.edges.filter((edge) => edge.type === 'links_to').length
  console.log(
    `graph-data.json: ${graph.nodes.length} nodes, ${links} links_to, ${cites} cites → ${path.relative(repoRoot, defaultOutFile)}`,
  )
}
