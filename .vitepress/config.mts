import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type DefaultTheme } from 'vitepress'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const wikiDir = path.join(repoRoot, 'wiki')

const LEADING_PAGES = ['index.md', 'overview.md']

function humanize(filename: string): string {
  const base = filename.replace(/\.md$/i, '').replace(/[-_]+/g, ' ')
  return base.charAt(0).toUpperCase() + base.slice(1)
}

function readFrontmatter(raw: string): Record<string, string> {
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const fields: Record<string, string> = {}
  if (!frontmatter) return fields
  for (const line of frontmatter[1].split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!match) continue
    const value = match[2].trim().replace(/^['"]|['"]$/g, '')
    if (value) fields[match[1]] = value
  }
  return fields
}

function titleFromMarkdown(filePath: string, fallback: string): string {
  const raw = fs.readFileSync(filePath, 'utf8')
  const title = readFrontmatter(raw).title
  if (title) return title
  const heading = raw.match(/^#\s+(.+)$/m)
  return heading ? heading[1].trim() : fallback
}

// Day pages under sources/x-digest stay flat on disk. The sidebar groups
// them by ISO week (Monday–Sunday, Asia/Shanghai calendar dates) so the
// section stays scannable. Clock times used for ordering match the ingest
// defaults: frontier-ai 08:10, cn-x 20:00.
const X_DIGEST_DIR = 'sources/x-digest'
const DIGEST_CLOCK: Record<string, string> = {
  'frontier-ai': '08:10',
  'cn-x': '20:00',
}

type Ymd = { y: number; m: number; d: number }

function parseYmd(value: string): Ymd | null {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!match) return null
  const y = Number(match[1])
  const m = Number(match[2])
  const d = Number(match[3])
  const utc = new Date(Date.UTC(y, m - 1, d))
  if (utc.getUTCFullYear() !== y || utc.getUTCMonth() !== m - 1 || utc.getUTCDate() !== d) return null
  return { y, m, d }
}

function ymdNumber(ymd: Ymd): number {
  return ymd.y * 10000 + ymd.m * 100 + ymd.d
}

function pad2(n: number): string {
  return String(n).padStart(2, '0')
}

function shanghaiToday(): Ymd {
  const formatted = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
  const parsed = parseYmd(formatted)
  if (!parsed) throw new Error(`Unexpected Asia/Shanghai date: ${formatted}`)
  return parsed
}

function isoWeek(ymd: Ymd): { key: number; label: string; current: boolean } {
  const utc = new Date(Date.UTC(ymd.y, ymd.m - 1, ymd.d))
  const day = utc.getUTCDay() || 7
  const thursday = new Date(utc)
  thursday.setUTCDate(utc.getUTCDate() + 4 - day)
  const isoYear = thursday.getUTCFullYear()
  const yearStart = Date.UTC(isoYear, 0, 1)
  const diffDays = Math.round((thursday.getTime() - yearStart) / 86400000)
  const isoWeekNumber = Math.floor(diffDays / 7) + 1
  const monday = new Date(utc)
  monday.setUTCDate(utc.getUTCDate() - (day - 1))
  const sunday = new Date(monday)
  sunday.setUTCDate(monday.getUTCDate() + 6)
  const start: Ymd = { y: monday.getUTCFullYear(), m: monday.getUTCMonth() + 1, d: monday.getUTCDate() }
  const end: Ymd = { y: sunday.getUTCFullYear(), m: sunday.getUTCMonth() + 1, d: sunday.getUTCDate() }
  const today = ymdNumber(shanghaiToday())
  return {
    key: isoYear * 100 + isoWeekNumber,
    label: `${isoYear}-W${pad2(isoWeekNumber)} · ${pad2(start.m)}/${pad2(start.d)}–${pad2(end.m)}/${pad2(end.d)}`,
    current: today >= ymdNumber(start) && today <= ymdNumber(end),
  }
}

function digestDate(filename: string, fields: Record<string, string>): string | null {
  const fromField = fields.date?.match(/^(\d{4}-\d{2}-\d{2})/)?.[1]
  if (fromField && parseYmd(fromField)) return fromField
  const fromName = filename.match(/^(\d{4}-\d{2}-\d{2})/)?.[1]
  if (fromName && parseYmd(fromName)) return fromName
  return null
}

function digestClock(filename: string, fields: Record<string, string>): string {
  if (fields.type && DIGEST_CLOCK[fields.type]) return DIGEST_CLOCK[fields.type]
  if (/-frontier-ai\.md$/i.test(filename)) return DIGEST_CLOCK['frontier-ai']
  if (/-cn-x\.md$/i.test(filename)) return DIGEST_CLOCK['cn-x']
  const titled = fields.title?.match(/\b(\d{2}:\d{2})\b/)?.[1]
  return titled ?? '00:00'
}

function sidebarForXDigest(
  dir: string,
  relativeDir: string,
  entries: fs.Dirent[],
): DefaultTheme.SidebarItem[] {
  let indexItem: DefaultTheme.SidebarItem | undefined
  const loose: DefaultTheme.SidebarItem[] = []
  const pages: { date: string; clock: string; name: string; item: DefaultTheme.SidebarItem }[] = []

  for (const entry of entries) {
    const relativePath = `${relativeDir}/${entry.name}`
    const absolutePath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = sidebarFrom(absolutePath, relativePath)
      if (nested.length === 0) continue
      loose.push({
        text: humanize(entry.name),
        collapsed: false,
        items: nested,
      })
      continue
    }

    const raw = fs.readFileSync(absolutePath, 'utf8')
    const fields = readFrontmatter(raw)
    const heading = raw.match(/^#\s+(.+)$/m)
    const text = fields.title || (heading ? heading[1].trim() : humanize(entry.name))
    const item: DefaultTheme.SidebarItem = { text, link: pageLink(relativePath) }

    if (entry.name.toLowerCase() === 'index.md') {
      indexItem = item
      continue
    }

    const date = digestDate(entry.name, fields)
    if (!date) {
      loose.push(item)
      continue
    }
    pages.push({ date, clock: digestClock(entry.name, fields), name: entry.name, item })
  }

  pages.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1
    if (a.clock !== b.clock) return a.clock < b.clock ? 1 : -1
    return b.name.localeCompare(a.name, 'en')
  })

  const buckets: { key: number; label: string; current: boolean; items: DefaultTheme.SidebarItem[] }[] = []
  const byWeek = new Map<number, (typeof buckets)[number]>()
  for (const page of pages) {
    const week = isoWeek(parseYmd(page.date)!)
    let bucket = byWeek.get(week.key)
    if (!bucket) {
      bucket = { key: week.key, label: week.label, current: week.current, items: [] }
      byWeek.set(week.key, bucket)
      buckets.push(bucket)
    }
    bucket.items.push(page.item)
  }
  buckets.sort((a, b) => b.key - a.key)

  const items: DefaultTheme.SidebarItem[] = []
  if (indexItem) items.push(indexItem)
  items.push(...loose)
  for (const bucket of buckets) {
    items.push({
      text: bucket.label,
      collapsed: !bucket.current,
      items: bucket.items,
    })
  }
  return items
}

function pageLink(relativePath: string): string {
  const withoutExt = relativePath.replace(/\\/g, '/').replace(/\.md$/i, '')
  if (withoutExt === 'index' || withoutExt.endsWith('/index')) {
    const parent = withoutExt.slice(0, -'index'.length).replace(/\/$/, '')
    return parent ? `/${parent}/` : '/'
  }
  return `/${withoutExt}`
}

function sortEntries(entries: fs.Dirent[]): fs.Dirent[] {
  return [...entries].sort((a, b) => {
    const rank = (entry: fs.Dirent) => {
      const lead = LEADING_PAGES.indexOf(entry.name.toLowerCase())
      if (lead !== -1) return lead
      return LEADING_PAGES.length + (entry.isDirectory() ? 1 : 0)
    }
    const byRank = rank(a) - rank(b)
    if (byRank !== 0) return byRank
    return a.name.localeCompare(b.name, 'en')
  })
}

function sidebarFrom(dir: string, relativeDir = ''): DefaultTheme.SidebarItem[] {
  if (!fs.existsSync(dir)) return []

  const entries = sortEntries(
    fs.readdirSync(dir, { withFileTypes: true }).filter((entry) => {
      if (entry.name.startsWith('.') || entry.name.startsWith('_')) return false
      if (entry.isDirectory()) return true
      return entry.isFile() && entry.name.toLowerCase().endsWith('.md')
    }),
  )

  if (relativeDir === X_DIGEST_DIR) return sidebarForXDigest(dir, relativeDir, entries)

  const items: DefaultTheme.SidebarItem[] = []
  for (const entry of entries) {
    const relativePath = relativeDir ? `${relativeDir}/${entry.name}` : entry.name
    const absolutePath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = sidebarFrom(absolutePath, relativePath)
      if (nested.length === 0) continue
      items.push({
        text: humanize(entry.name),
        collapsed: false,
        items: nested,
      })
      continue
    }
    // /graph is the force-graph viewer, linked from the nav rather than the page tree.
    if (!relativeDir && entry.name.toLowerCase() === 'graph.md') continue
    items.push({
      text: titleFromMarkdown(absolutePath, humanize(entry.name)),
      link: pageLink(relativePath),
    })
  }
  return items
}

export default defineConfig({
  title: 'Hezekai Wiki',
  description: 'Public Markdown wiki published from the wiki/ tree.',
  lang: 'en-US',
  srcDir: 'wiki',
  outDir: '.vitepress/dist',
  // Keep the published set aligned with the sidebar: dotfiles and
  // names starting with "_" are scratch files, not wiki pages.
  srcExclude: ['**/_*.md', '**/_*/**', '**/.*'],
  cleanUrls: true,
  vite: {
    // Vite root is wiki/ (srcDir). Point public assets at .vitepress/public
    // so scripts/build-graph.mjs can emit graph-data.json for /graph-data.json.
    publicDir: path.join(repoRoot, '.vitepress/public'),
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      { text: 'Graph', link: '/graph' },
    ],
    sidebar: sidebarFrom(wikiDir),
    search: { provider: 'local' },
    outline: { level: [2, 3] },
  },
})
