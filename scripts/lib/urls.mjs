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
 * Canonical http(s) URL. Drops fragments, default ports, tracking params,
 * and a trailing slash on a non-root path. Returns null for anything else.
 */
export function normalizeUrl(raw) {
  if (raw == null) return null
  let text = String(raw).trim()
  if (!text) return null
  if (text.startsWith('<') && text.endsWith('>')) text = text.slice(1, -1).trim()
  const titled = text.match(/^(\S+)\s+(?:"[^"]*"|'[^']*')\s*$/)
  if (titled) text = titled[1]
  text = text.replace(/[),.;:!?，。、；：！？》」』]+$/u, '')
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
 * http(s) URLs in first-seen order. Duplicates inside the file collapse.
 * `title` is markdown link text, or the line's bold lead when the link text
 * is a generic label such as 原帖.
 */
export function extractUrls(markdown) {
  const text = String(markdown).replace(/^\uFEFF/, '')
  const found = []
  const seen = new Set()

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
    add(match[2], titleFrom(match[1], lineAt(text, match.index)))
  }
  const bareRe = /https?:\/\/[^\s<>[\]"'`]+/gi
  for (const match of text.matchAll(bareRe)) {
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
