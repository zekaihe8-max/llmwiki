// Build visitor home payload from wiki Markdown (generated.at, date, sources).
// Emits .vitepress/public/home-data.json for HomePage.vue.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseFrontmatter } from './lib/yaml.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const defaultWikiDir = path.join(repoRoot, 'wiki')
const defaultOutFile = path.join(repoRoot, '.vitepress', 'public', 'home-data.json')

/** Curated stable reading entries (slugs under wiki/topics/). Not random. */
export const CURATED_TOPIC_SLUGS = [
  'llm-maintained-wiki',
  'workflows-before-agents',
  'agent-scaled-engineering',
  'agent-skills-open-standard',
  'programmable-edge-compute',
  'harness-comparison-beyond-tokens',
]

export function buildHomeData({ wikiDir = defaultWikiDir } = {}) {
  const articles = listTyped(wikiDir, 'sources/articles', 'Source')
  const topics = listTyped(wikiDir, 'topics', 'Topic')
  const digests = listDigests(wikiDir)

  const recent = [...articles, ...topics]
    .sort((a, b) => String(b.wikiUpdatedAt).localeCompare(String(a.wikiUpdatedAt)))
    .slice(0, 6)
    .map((item) => ({
      kind: item.kind,
      title: item.title,
      titleEn: item.titleEn,
      description: item.description,
      href: item.href,
      wikiUpdatedAt: item.wikiUpdatedAt,
      publishedAt: item.publishedAt,
    }))

  const bySlug = new Map(topics.map((t) => [t.slug, t]))
  const topicGuide = []
  for (const slug of CURATED_TOPIC_SLUGS) {
    const topic = bySlug.get(slug)
    if (topic) topicGuide.push({
      title: topic.title,
      titleEn: topic.titleEn,
      description: topic.description,
      href: topic.href,
      sourceCount: topic.sourceCount,
    })
  }
  // Fill from most-sourced topics if a curated slug is missing.
  if (topicGuide.length < 6) {
    const extras = [...topics]
      .sort((a, b) => b.sourceCount - a.sourceCount || String(b.wikiUpdatedAt).localeCompare(String(a.wikiUpdatedAt)))
      .filter((t) => !CURATED_TOPIC_SLUGS.includes(t.slug))
    for (const t of extras) {
      if (topicGuide.length >= 6) break
      topicGuide.push({
        title: t.title,
        titleEn: t.titleEn,
        description: t.description,
        href: t.href,
        sourceCount: t.sourceCount,
      })
    }
  }

  const latestDigest = digests[0] || null

  return {
    generatedAt: new Date().toISOString(),
    site: {
      title: 'Hezekai Wiki',
      subtitle: '持续更新的 AI 与 Agent 知识库',
      subtitleEn: 'A continuously updated knowledge base on AI and agents',
      blurb: '从每日简报与公开资料中整理来源、比较观点，让零散信息逐步形成相互关联的知识。',
      blurbEn: 'Sources from daily digests and public writing, compared and linked so scattered notes compound into connected knowledge.',
    },
    recent,
    topicGuide,
    topicGuideNote: 'Curated durable entry topics (wiki/topics curated list in build-home-data.mjs); fallback fills by source count.',
    digest: latestDigest,
    digestArchiveHref: '/sources/x-digest/',
    aboutHref: '/guides/about-and-maintenance',
    counts: {
      articles: articles.length,
      topics: topics.length,
      digests: digests.length,
    },
  }
}

function listTyped(wikiDir, relDir, type) {
  const dir = path.join(wikiDir, relDir)
  if (!fs.existsSync(dir)) return []
  const out = []
  for (const name of fs.readdirSync(dir).sort()) {
    if (!name.endsWith('.md') || name === 'index.md') continue
    const abs = path.join(dir, name)
    if (!fs.statSync(abs).isFile()) continue
    const raw = fs.readFileSync(abs, 'utf8')
    let data
    try {
      data = parseFrontmatter(raw).data || {}
    } catch {
      continue
    }
    if (data.type !== type) continue
    const slug = name.replace(/\.md$/i, '')
    const href = `/${relDir}/${slug}`
    out.push({
      kind: type === 'Source' ? 'article' : 'topic',
      slug,
      title: data.title || slug,
      titleEn: data.title_en || null,
      description: data.description || data.description_en || '',
      href,
      wikiUpdatedAt: data.generated?.at || null,
      publishedAt: type === 'Source' && data.date ? String(data.date) : null,
      sourceCount: Array.isArray(data.sources) ? data.sources.length : 0,
    })
  }
  return out
}

function listDigests(wikiDir) {
  const dir = path.join(wikiDir, 'sources/x-digest')
  if (!fs.existsSync(dir)) return []
  const pages = []
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.md') || name === 'index.md') continue
    const abs = path.join(dir, name)
    if (!fs.statSync(abs).isFile()) continue
    const raw = fs.readFileSync(abs, 'utf8')
    let data = {}
    try {
      data = parseFrontmatter(raw).data || {}
    } catch {
      /* ignore */
    }
    const date = (data.date && String(data.date).slice(0, 10))
      || (name.match(/^(\d{4}-\d{2}-\d{2})/) || [])[1]
      || null
    const slug = name.replace(/\.md$/i, '')
    pages.push({
      title: data.title || slug,
      titleEn: data.title_en || null,
      description: data.description || '',
      href: `/sources/x-digest/${slug}`,
      date,
      type: data.type || null,
      wikiUpdatedAt: data.generated?.at || null,
    })
  }
  pages.sort((a, b) => {
    if (a.date !== b.date) return String(b.date).localeCompare(String(a.date))
    return b.href.localeCompare(a.href)
  })
  return pages
}

export function writeHomeData({ wikiDir = defaultWikiDir, outFile = defaultOutFile } = {}) {
  const data = buildHomeData({ wikiDir })
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, `${JSON.stringify(data, null, 2)}\n`)
  return { outFile, data }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  const { outFile, data } = writeHomeData()
  console.log(`home-data: ${data.recent.length} recent, ${data.topicGuide.length} topics, digest=${data.digest?.href || 'none'} → ${path.relative(repoRoot, outFile)}`)
}
