// Graph construction adapted from lucasastorian/llmwiki (Apache-2.0):
// api/services/references.py (parse_wiki_links, extract_references, parse_citation_filename)
// and api/services/graph.py (node and edge shapes).
//
// Static VitePress build: walk wiki/**/*.md and emit /graph-data.json.
// No edges are invented — a link or citation becomes an edge only when it
// resolves to another wiki file.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const defaultWikiDir = path.join(repoRoot, 'wiki')
const defaultOutFile = path.join(repoRoot, '.vitepress', 'public', 'graph-data.json')

const WIKI_LINK_RE = /(?<!!)\[(?:[^\]]*)\]\(([^)]+)\)/g
const CITATION_RE = /\[\^[^\]]+\]:\s*(.+)$/gm
const IMAGE_RE = /\.(png|jpg|jpeg|gif|webp|svg)$/i
const EXT_RE = /\.(pdf|docx?|pptx?|xlsx?|csv|html?|md|txt)$/i

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

function cleanHref(raw) {
  let href = raw.trim().replace(/\r$/, '')
  if (href.startsWith('<') && href.endsWith('>')) href = href.slice(1, -1).trim()
  const titled = href.match(/^(.*?)\s+(?:"[^"]*"|'[^']*')\s*$/)
  if (titled) href = titled[1].trim()
  return href
}

/**
 * Internal wiki link paths, resolved relative to currentDir (trailing slash or "").
 * Mirrors parse_wiki_links: skip http / mailto / hash / data / images.
 * Hash and query are stripped after that skip so `page.md#section` still resolves.
 */
export function parseWikiLinks(content, currentDir) {
  const paths = []
  for (const match of content.matchAll(WIKI_LINK_RE)) {
    let href = cleanHref(match[1])
    if (!href) continue
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('data:')) {
      continue
    }
    href = href.split('#')[0].split('?')[0].trim()
    if (!href || IMAGE_RE.test(href)) continue

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
    if (resolved) paths.push(resolved)
  }
  return paths
}

/** Mirrors parse_citation_filename: 'paper.pdf, p.3' → { filename, page }. */
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

function stemOf(filename) {
  return filename.replace(EXT_RE, '')
}

function readFrontmatter(raw) {
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  /** @type {Record<string, string | string[]>} */
  const fields = {}
  if (!frontmatter) return fields
  const lines = frontmatter[1].split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!match) continue
    const key = match[1]
    const inline = match[2].trim()
    if (inline === '' || inline === '|' || inline === '>') {
      const items = []
      while (i + 1 < lines.length && /^\s+-\s+/.test(lines[i + 1])) {
        i++
        items.push(lines[i].replace(/^\s+-\s+/, '').trim().replace(/^['"]|['"]$/g, ''))
      }
      fields[key] = items.filter(Boolean)
      continue
    }
    if (inline.startsWith('[') && inline.endsWith(']')) {
      fields[key] = inline
        .slice(1, -1)
        .split(',')
        .map((part) => part.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
      continue
    }
    fields[key] = inline.replace(/^['"]|['"]$/g, '')
  }
  return fields
}

function stripFrontmatter(raw) {
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
}

function firstHeading(raw) {
  let fence = false
  for (const line of stripFrontmatter(raw).split(/\r?\n/)) {
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

// Every Markdown page is wiki content, including wiki/sources/** digests.
// source_kind 'source' is reserved for non-md assets, which this site does not have.

/**
 * @param {string} wikiDir
 * @returns {{ nodes: object[], edges: object[] }}
 */
export function buildGraph(wikiDir) {
  // wiki/graph.md is the viewer itself, not a page in the graph.
  const files = walkMarkdown(wikiDir).filter((file) => file.rel.replace(/\\/g, '/') !== 'graph.md')
  const nodes = files.map(({ abs, rel }) => {
    const raw = fs.readFileSync(abs, 'utf8')
    const fields = readFrontmatter(raw)
    const filename = path.posix.basename(rel)
    const stem = filename.replace(/\.md$/i, '')
    const titleField = typeof fields.title === 'string' ? fields.title.trim() : ''
    const title = titleField || firstHeading(raw) || stem
    const description = typeof fields.description === 'string' && fields.description.trim()
      ? fields.description.trim()
      : null
    const tags = Array.isArray(fields.tags) ? fields.tags : []
    const id = nodeIdFromRel(rel)
    return {
      id,
      title,
      description,
      path: id,
      file_type: 'md',
      source_kind: 'wiki',
      tags,
      // Keep metadata pages in the data; the viewer hides them by default.
      is_meta: /^(index|log)\.md$/i.test(filename),
      // lookup-only; stripped before emit
      _rel: rel.replace(/\\/g, '/'),
      _filename: filename,
      _raw: raw,
    }
  })

  /** @type {Map<string, object>} */
  const byPath = new Map()
  /** @type {Map<string, object | null>} */
  const byFilename = new Map()
  /** @type {Map<string, object | null>} */
  const byStem = new Map()

  const addUnique = (map, key, node) => {
    const k = key.toLowerCase()
    if (!k) return
    if (!map.has(k)) map.set(k, node)
    else if (map.get(k) !== node) map.set(k, null)
  }

  for (const node of nodes) {
    byPath.set(node._rel.toLowerCase(), node)
    const withoutExt = node._rel.replace(/\.md$/i, '').toLowerCase()
    if (!byPath.has(withoutExt)) byPath.set(withoutExt, node)
    if (!byPath.has(node.id.toLowerCase())) byPath.set(node.id.toLowerCase(), node)
    addUnique(byFilename, node._filename, node)
    addUnique(byStem, stemOf(node._filename), node)
  }

  /** @type {Map<string, object>} */
  const edges = new Map()

  for (const node of nodes) {
    const seen = new Set()
    const currentDir = currentDirFor(node._rel)

    for (const match of node._raw.matchAll(CITATION_RE)) {
      const { filename, page } = parseCitationFilename(match[1])
      const fn = filename.toLowerCase()
      let target = byFilename.get(fn)
      if (target === undefined) {
        const stem = stemOf(fn)
        target = byStem.get(stem)
      }
      if (!target || target.id === node.id) continue
      const key = `${target.id}\0cites`
      if (seen.has(key)) continue
      seen.add(key)
      edges.set(`${node.id}\0${target.id}\0cites`, {
        source: node.id,
        target: target.id,
        type: 'cites',
        page,
      })
    }

    for (const linkPath of parseWikiLinks(node._raw, currentDir)) {
      const keyPath = linkPath.toLowerCase()
      let target = byPath.get(keyPath) || byPath.get(`${keyPath}.md`)
      if (!target) {
        const base = keyPath.split('/').pop()
        const fromName = byFilename.get(base)
        const fromStem = byStem.get(stemOf(base))
        target = fromName || fromStem || null
      }
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
    .map(({ _rel, _filename, _raw, ...node }) => node)
    .sort((a, b) => a.id.localeCompare(b.id))

  const publicEdges = [...edges.values()].sort((a, b) =>
    a.source.localeCompare(b.source)
    || a.target.localeCompare(b.target)
    || a.type.localeCompare(b.type),
  )

  return { nodes: publicNodes, edges: publicEdges }
}

export function writeGraphData(wikiDir = defaultWikiDir, outFile = defaultOutFile) {
  const graph = buildGraph(wikiDir)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, `${JSON.stringify(graph, null, 2)}\n`)
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
