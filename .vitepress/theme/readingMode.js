/**
 * Structure-aware bilingual reading mode for same-file ZH+EN wiki pages.
 *
 * Conventions (see AGENTS.md / about page):
 * - Headings: `## 中文 / English` → split label by mode
 * - Body: Chinese block (p/li) followed by English counterpart
 * - Shared: pre, code, math, footnotes, bare URL lines, markdown links stay visible
 *
 * Fails open to 对照 (both) when pairing is ambiguous — never silently deletes.
 */

export const READING_MODES = ['zh', 'en', 'both']
export const STORAGE_KEY = 'hezekai-reading-mode'

const SHARED_SELECTOR = [
  'pre',
  'code',
  '.vp-code-group',
  '.math',
  '.katex',
  '.katex-display',
  '.footnote-item',
  '.footnotes',
  'table',
  'hr',
  'img',
  'video',
  'iframe',
].join(',')

const CJK_RE = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/
const LATIN_RE = /[A-Za-z]/

export function loadReadingMode() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (READING_MODES.includes(stored)) return stored
  } catch {
    /* ignore */
  }
  return 'both'
}

export function saveReadingMode(mode) {
  try {
    localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    /* ignore */
  }
}

export function applyReadingMode(root, mode) {
  if (!root) return
  // Always (re)mark structure so heading labels and pair classes stay correct
  // when toggling; then set mode for CSS hide rules.
  markDoc(root)
  root.dataset.readingMode = mode
  for (const el of root.querySelectorAll('.rw-heading-bilingual')) {
    const both = el.dataset.rwBoth
    const zh = el.dataset.rwZh
    const en = el.dataset.rwEn
    if (!both) continue
    if (mode === 'zh' && zh) el.textContent = zh
    else if (mode === 'en' && en) el.textContent = en
    else el.textContent = both
  }
}

function clearMarks(root) {
  root.querySelectorAll('.rw-zh, .rw-en, .rw-shared, .rw-ambiguous, .rw-heading-bilingual').forEach((el) => {
    if (el.classList.contains('rw-heading-bilingual') && el.dataset.rwBoth) {
      el.textContent = el.dataset.rwBoth
    }
    el.classList.remove('rw-zh', 'rw-en', 'rw-shared', 'rw-ambiguous', 'rw-heading-bilingual')
  })
  delete root.dataset.readingMode
}

function markDoc(root) {
  clearMarks(root)
  const children = [...root.children]
  for (const el of children) {
    if (el.matches(SHARED_SELECTOR) || el.querySelector?.(SHARED_SELECTOR) && isMostlyShared(el)) {
      el.classList.add('rw-shared')
      continue
    }
    if (/^H[1-6]$/.test(el.tagName)) {
      markHeading(el)
      continue
    }
    if (el.tagName === 'UL' || el.tagName === 'OL') {
      markList(el)
      continue
    }
    if (el.tagName === 'P' || el.tagName === 'BLOCKQUOTE') {
      // paired below
      continue
    }
    el.classList.add('rw-shared')
  }

  // Pair adjacent paragraph / blockquote siblings.
  for (let i = 0; i < children.length; i++) {
    const a = children[i]
    if (!(a.tagName === 'P' || a.tagName === 'BLOCKQUOTE')) continue
    if (a.classList.contains('rw-zh') || a.classList.contains('rw-en') || a.classList.contains('rw-shared')) continue
    const b = children[i + 1]
    if (b && (b.tagName === 'P' || b.tagName === 'BLOCKQUOTE') && !b.classList.contains('rw-shared')) {
      const langA = detectLang(a.textContent)
      const langB = detectLang(b.textContent)
      if (langA === 'zh' && langB === 'en') {
        a.classList.add('rw-zh')
        b.classList.add('rw-en')
        i++
        continue
      }
      if (langA === 'en' && langB === 'zh') {
        a.classList.add('rw-en')
        b.classList.add('rw-zh')
        i++
        continue
      }
    }
    // Ambiguous single block — fail open (show in all modes).
    a.classList.add('rw-shared', 'rw-ambiguous')
  }
}

function markHeading(el) {
  const text = el.textContent || ''
  if (text.includes(' / ')) {
    const [zh, ...rest] = text.split(' / ')
    const en = rest.join(' / ')
    el.dataset.rwZh = zh.trim()
    el.dataset.rwEn = en.trim()
    el.dataset.rwBoth = text.trim()
    el.classList.add('rw-heading-bilingual')
    // Label swap is CSS/content via data attrs in reading.css
  }
  el.classList.add('rw-shared')
}

function markList(list) {
  const items = [...list.children].filter((el) => el.tagName === 'LI')
  if (items.length === 0) {
    list.classList.add('rw-shared')
    return
  }
  // Nested EN under ZH (common Source pattern): li contains p+p or text + nested block.
  let paired = 0
  for (let i = 0; i < items.length; i++) {
    const li = items[i]
    const blocks = [...li.children].filter((c) => c.tagName === 'P')
    if (blocks.length >= 2) {
      const lang0 = detectLang(blocks[0].textContent)
      const lang1 = detectLang(blocks[1].textContent)
      if (lang0 === 'zh' && lang1 === 'en') {
        blocks[0].classList.add('rw-zh')
        blocks[1].classList.add('rw-en')
        for (let k = 2; k < blocks.length; k++) blocks[k].classList.add('rw-shared')
        paired++
        continue
      }
    }
    // Adjacent ZH li then EN li
    const next = items[i + 1]
    if (next) {
      const langA = detectLang(li.textContent)
      const langB = detectLang(next.textContent)
      if (langA === 'zh' && langB === 'en' && !li.querySelector('ul,ol') && !next.querySelector('ul,ol')) {
        li.classList.add('rw-zh')
        next.classList.add('rw-en')
        paired++
        i++
        continue
      }
    }
    li.classList.add('rw-shared', 'rw-ambiguous')
  }
  if (paired === 0) list.classList.add('rw-shared')
}

function isMostlyShared(el) {
  // Footnote paragraphs etc.
  if (el.classList?.contains('footnote-item')) return true
  if (el.id?.startsWith('user-content-fn')) return true
  return false
}

function detectLang(text) {
  const t = String(text || '').replace(/https?:\/\/\S+/g, '').replace(/\[[^\]]*\]\([^)]*\)/g, '')
  const cjk = (t.match(CJK_RE) || []).length
  const latin = (t.match(LATIN_RE) || []).length
  if (cjk === 0 && latin === 0) return 'shared'
  if (cjk > 0 && latin === 0) return 'zh'
  if (latin > 0 && cjk === 0) return 'en'
  // Mixed: prefer majority; close calls → shared (fail open).
  if (cjk >= latin * 2) return 'zh'
  if (latin >= cjk * 2) return 'en'
  return 'shared'
}
