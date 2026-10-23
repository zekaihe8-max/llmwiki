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

function titleFromMarkdown(filePath: string, fallback: string): string {
  const raw = fs.readFileSync(filePath, 'utf8')
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (frontmatter) {
    for (const line of frontmatter[1].split(/\r?\n/)) {
      const match = line.match(/^title:\s*(.*)$/)
      if (!match) continue
      const title = match[1].trim().replace(/^['"]|['"]$/g, '')
      if (title) return title
    }
  }
  const heading = raw.match(/^#\s+(.+)$/m)
  return heading ? heading[1].trim() : fallback
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
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
    ],
    sidebar: sidebarFrom(wikiDir),
    search: { provider: 'local' },
    outline: { level: [2, 3] },
  },
})
