import { createHash } from 'node:crypto'

const TRACKING_PARAMS = new Set([
  'fbclid',
  'gclid',
  'igshid',
  'mc_cid',
  'mc_eid',
  'ref_src',
  'utm_campaign',
  'utm_content',
  'utm_id',
  'utm_medium',
  'utm_source',
  'utm_term',
])

const GENERIC_TITLES = new Set([
  'here',
  'link',
  'post',
  'source',
  'status',
  'tweet',
  'url',
  '原帖',
  '原文',
  '来源',
  '链接',
])

/** Leading wrappers often glued onto a bare URL in digests. */
const LEADING_WRAP = /^[\s<（(\[【「『《“"']+/u

/**
 * Trailing punctuation / closers that are never part of a URL path.
 * ASCII `)` is handled separately via paren balance — Wikipedia paths keep
 * balanced `_(bar)` while markdown leftovers strip unmatched `)`.
 */
const TRAILING_JUNK = /[.,;:!?，。、；：！？》）】」』…]+$/u

/** Percent-encoded trailing CJK junk left on historical dirty keys. */
const ENCODED_TRAILING_JUNK =
  /(?:\)?%EF%BC%89|%EF%BC%8C|%E3%80%81|%E3%80%82|%EF%BC%9B|%EF%BC%9A|%E2%80%A6)+(?:[A-Za-z0-9%._~\-!$&'()*+,;=:@/?]*)*$/i

export function sha256(value) {
  const hash = createHash('sha256')
  if (Buffer.isBuffer(value)) hash.update(value)
  else hash.update(String(value), 'utf8')
  return hash.digest('hex')
}

/** Stable raw id: first 16 hex chars of sha256(canonical URL). */
export function slugForUrl(canonicalUrl) {
  return sha256(canonicalUrl).slice(0, 16)
}

/**
 * Strip wrapping / trailing CJK + ASCII junk from a raw URL candidate
 * before `new URL`. Keeps balanced parentheses inside the path.
 */
export function cleanExtractedUrl(raw) {
  if (raw == null) return null
  let text = String(raw).trim()
  if (!text) return null
  if (text.startsWith('<') && text.endsWith('>')) text = text.slice(1, -1).trim()
  const titled = text.match(/^(\S+)\s+(?:"[^"]*"|'[^']*')\s*$/)
  if (titled) text = titled[1]
  text = text.replace(LEADING_WRAP, '')
  // Historical dirty keys already went through URL() and store junk encoded.
  text = text.replace(ENCODED_TRAILING_JUNK, '')
  // Bare scans glue CJK prose onto the URL (`…/x），见下文`). Truncate at the
  // first raw CJK / fullwidth punctuation; legitimate non-ASCII path segments
  // are percent-encoded by then and survive.
  text = text.replace(/[（）【】「」『』《》，。、；：！？…￥][\s\S]*$/u, '')
  text = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff][\s\S]*$/u, '')
  // Peel trailing junk repeatedly: CJK closers, then unmatched ASCII closers.
  let prev = ''
  while (text !== prev) {
    prev = text
    text = text.replace(TRAILING_JUNK, '')
    text = stripUnmatchedTrailingClosers(text)
  }
  return text || null
}

function stripUnmatchedTrailingClosers(text) {
  let out = text
  while (out.length > 0) {
    const last = out.slice(-1)
    if (last === ')') {
      const open = (out.match(/\(/g) || []).length
      const close = (out.match(/\)/g) || []).length
      if (close <= open) break
      out = out.slice(0, -1)
      continue
    }
    if (last === '>' || last === ']' || last === '}' || last === "'" || last === '"' || last === '”' || last === '’') {
      out = out.slice(0, -1)
      continue
    }
    break
  }
  return out
}

/**
 * Canonical http(s) URL. Drops fragments, default ports, tracking params,
 * and a trailing slash on a non-root path. Returns null for anything else.
 */
export function normalizeUrl(raw) {
  const text = cleanExtractedUrl(raw)
  if (!text) return null
  if (!/^https?:\/\//i.test(text)) return null
  let url
  try {
    url = new URL(text)
  } catch {
    return null
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
  url.hash = ''
  url.hostname = url.hostname.toLowerCase()
  if ((url.protocol === 'https:' && url.port === '443') || (url.protocol === 'http:' && url.port === '80')) {
    url.port = ''
  }
  if (url.pathname.length > 1) url.pathname = url.pathname.replace(/\/+$/, '')
  const kept = []
  for (const [key, value] of url.searchParams.entries()) {
    if (TRACKING_PARAMS.has(key.toLowerCase())) continue
    kept.push([key, value])
  }
  kept.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]))
  url.search = ''
  for (const [key, value] of kept) url.searchParams.append(key, value)
  return url.href
}

/**
 * If `raw` normalizes to a different canonical than the raw string itself
 * (dirty historical key → clean URL), return that clean canonical.
 * Returns null when raw is already clean or cannot be normalized.
 */
export function aliasCanonical(raw) {
  if (raw == null) return null
  const asIs = String(raw).trim()
  if (!asIs) return null
  const cleaned = normalizeUrl(asIs)
  if (!cleaned) return null
  // Compare against a "literal" parse that does not strip junk — if the
  // stored key still contains encoded CJK trailing junk, treat as alias.
  if (/\%EF%BC%|[\u3000-\u303F\uFF00-\uFFEF）】」』]/.test(asIs) && cleaned !== asIs) {
    return cleaned
  }
  if (asIs !== cleaned && /\)%EF%BC/i.test(asIs)) return cleaned
  // Bare dirty vs clean: same host/path after cleaning means alias.
  if (asIs !== cleaned && cleanExtractedUrl(asIs) !== asIs) return cleaned
  return null
}

/**
 * http(s) URLs in first-seen order. Duplicates inside the file collapse.
 * `title` is markdown link text, or the line's bold lead when the link text
 * is a generic label such as 原帖.
 *
 * Markdown link destinations are collected first; bare-URL scans skip any
 * range already covered by a markdown destination so trailing `)` from
 * `[t](url)` is never re-extracted as a dirty variant.
 */
export function extractUrls(markdown) {
  const text = String(markdown).replace(/^\uFEFF/, '')
  const found = []
  const seen = new Set()
  const covered = []

  const add = (raw, title) => {
    const url = normalizeUrl(raw)
    if (!url) return
    const cleaned = title || null
    if (seen.has(url)) {
      if (cleaned) {
        const existing = found.find((item) => item.url === url)
        if (existing && !existing.title) existing.title = cleaned
      }
      return
    }
    seen.add(url)
    found.push({ url, title: cleaned })
  }

  const linkRe = /\[([^\]]*)\]\(([^)\s]+)(?:\s+(?:"[^"]*"|'[^']*'))?\)/g
  for (const match of text.matchAll(linkRe)) {
    const dest = match[2]
    const start = match.index + match[0].indexOf(dest)
    const end = start + dest.length
    covered.push([start, end])
    add(dest, titleFrom(match[1], lineAt(text, match.index)))
  }

  const bareRe = /https?:\/\/[^\s<>[\]"'`]+/gi
  for (const match of text.matchAll(bareRe)) {
    const start = match.index
    const end = start + match[0].length
    if (covered.some(([a, b]) => start < b && end > a)) continue
    add(match[0], titleFrom('', lineAt(text, match.index)))
  }
  return found
}

function lineAt(text, index) {
  const start = text.lastIndexOf('\n', Math.max(0, index) - 1) + 1
  const end = text.indexOf('\n', index)
  return text.slice(start, end === -1 ? text.length : end)
}

function titleFrom(linkText, line) {
  const linked = cleanTitle(linkText)
  if (linked && !GENERIC_TITLES.has(linked.toLowerCase())) return linked
  const bold = line.match(/\*\*([^*]+)\*\*/)
  if (!bold) return null
  const value = cleanTitle(bold[1])
  if (!value || GENERIC_TITLES.has(value.toLowerCase())) return null
  return value
}

function cleanTitle(value) {
  const text = String(value || '').replace(/\s+/g, ' ').trim()
  return text || null
}
