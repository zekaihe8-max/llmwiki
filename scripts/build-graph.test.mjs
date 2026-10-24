import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import {
  applyGraphFilters,
  backlinksFor,
  filterMetadataNodes,
  filterTodayView,
  nodeOnShanghaiDay,
  shanghaiDay,
  todayShanghai,
} from '../.vitepress/theme/graph-filter.mjs'
import {
  buildGraph,
  currentDirFor,
  nodeIdFromRel,
  parseCitationFilename,
  parseWikiLinks,
  stripCode,
} from './build-graph.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

test('node ids drop .md and nested index, and keep the root index id', () => {
  assert.equal(nodeIdFromRel('index.md'), 'index')
  assert.equal(nodeIdFromRel('overview.md'), 'overview')
  assert.equal(nodeIdFromRel('sources/x-digest/index.md'), 'sources/x-digest')
  assert.equal(nodeIdFromRel('sources/x-digest/2026-10-23-cn-x.md'), 'sources/x-digest/2026-10-23-cn-x')
  assert.equal(currentDirFor('concepts/compiled-pages.md'), 'concepts/')
  assert.equal(currentDirFor('index.md'), '')
})

test('parseWikiLinks matches upstream resolution and skips external targets', () => {
  assert.deepEqual(parseWikiLinks('[a](/wiki/abs.md)', 'notes/'), ['abs.md'])
  assert.deepEqual(parseWikiLinks('[s](./sibling.md)', 'notes/'), ['notes/sibling.md'])
  assert.deepEqual(parseWikiLinks('[p](../parent.md)', 'concepts/deep/'), ['concepts/parent.md'])
  assert.deepEqual(parseWikiLinks('[n](name.md)', 'notes/'), ['notes/name.md'])
  assert.deepEqual(parseWikiLinks('[n](./overview.md#section)', ''), ['overview.md'])
  for (const content of [
    '[http](https://example.com/abs.md)',
    '[hash](#abs.md)',
    '[mail](mailto:abs.md)',
    '[data](data:text/plain,abs.md)',
    '![png](/wiki/diagram.png)',
    '[jpg](/wiki/abs.jpg)',
    '[svg](/wiki/abs.svg)',
  ]) {
    assert.deepEqual(parseWikiLinks(content, 'notes/'), [], content)
  }
})

test('stripCode drops fenced and inline code so example links are ignored', () => {
  const content = [
    'See [real](./real.md).',
    '',
    '```md',
    '[fake](./fake.md)',
    '```',
    '',
    'Inline `[also-fake](./also.md)` stays quiet.',
    '',
    '~~~',
    '[tilde](./tilde.md)',
    '~~~',
  ].join('\n')
  assert.deepEqual(parseWikiLinks(content, 'notes/'), ['notes/real.md'])
  assert.equal(stripCode(content).includes('fake.md'), false)
  assert.equal(stripCode(content).includes('tilde.md'), false)
})

test('parseCitationFilename keeps the page and a hyphenated stem', () => {
  assert.deepEqual(parseCitationFilename('2501.12948v2-2.pdf, p.5'), {
    filename: '2501.12948v2-2.pdf',
    page: 5,
  })
  assert.deepEqual(parseCitationFilename('[paper.pdf](https://example.com/paper), p.7'), {
    filename: 'paper.pdf',
    page: 7,
  })
  assert.deepEqual(parseCitationFilename('**paper.pdf**'), {
    filename: 'paper.pdf',
    page: null,
  })
})

test('buildGraph resolves relative links and OKF cites without inventing edges', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-graph-'))
  const write = (rel, body) => {
    const abs = path.join(dir, rel)
    fs.mkdirSync(path.dirname(abs), { recursive: true })
    fs.writeFileSync(abs, body)
  }
  write('index.md', '---\ntitle: Home\n---\n# Home\n\nSee [notes](./notes/topic.md) and [src](./sources/paper.md).\n')
  write('overview.md', '# Overview\n\n[Home](./index.md)\n')
  write('_scratch.md', '# Hidden\n\n[Home](./index.md)\n')
  write('notes/topic.md', `---
type: Topic
title: topic
description: A note
tags: [alpha, beta]
sources:
  - id: paper-src
    resource: https://example.com/paper
generated:
  by: test/agent
  at: 2026-10-24T10:00:00+08:00
---

# topic

Cited.[^paper-src]

Also [home](../index.md) and [missing](./nope.md) and [web](https://example.com).

\`\`\`
[code-only](../sources/other.md)
\`\`\`

[^paper-src]: Paper
`)
  write('sources/paper.md', `---
type: Source
title: Paper
description: The paper
resource: https://example.com/paper
sources:
  - id: paper-src
    resource: https://example.com/paper
generated:
  by: test/agent
  at: 2026-10-24T10:00:00+08:00
---

# Paper
`)
  write('sources/other.md', '# Other\n')
  write('sources/same-name.md', '# Same name elsewhere\n')
  write('notes/same-name.md', '# Wrong same-name\n\nDo not link [missing sibling](./ghost.md).\n')
  write('graph.md', '# Graph\n\n[Home](./index.md)\n')

  const graph = buildGraph(dir)
  const ids = graph.nodes.map((node) => node.id).sort()
  assert.deepEqual(ids, [
    'index',
    'notes/same-name',
    'notes/topic',
    'overview',
    'sources/other',
    'sources/paper',
    'sources/same-name',
  ])

  const topic = graph.nodes.find((node) => node.id === 'notes/topic')
  assert.equal(topic.title, 'topic')
  assert.equal(topic.description, 'A note')
  assert.deepEqual(topic.tags, ['alpha', 'beta'])
  assert.equal(topic.page_type, 'Topic')
  assert.equal(topic.generated_at, '2026-10-24T10:00:00+08:00')
  assert.equal(topic.resource, null)
  assert.equal(topic.source_kind, 'wiki')
  assert.ok(graph.nodes.every((node) => node.source_kind === 'wiki'))
  const paper = graph.nodes.find((node) => node.id === 'sources/paper')
  assert.equal(paper.page_type, 'Source')
  assert.equal(paper.resource, 'https://example.com/paper')
  assert.equal(graph.nodes.find((node) => node.id === 'index').title, 'Home')
  assert.equal(graph.nodes.find((node) => node.id === 'overview').title, 'Overview')

  const edgeKey = (edge) => `${edge.source}|${edge.target}|${edge.type}|${edge.page}`
  assert.deepEqual(graph.edges.map(edgeKey).sort(), [
    'index|notes/topic|links_to|null',
    'index|sources/paper|links_to|null',
    'notes/topic|index|links_to|null',
    'notes/topic|sources/paper|cites|null',
    'overview|index|links_to|null',
  ].sort())

  // No basename fallback: same-name.md elsewhere must not steal unresolved ghosts,
  // and code-fence link to sources/other must not appear.
  assert.equal(graph.edges.some((edge) => edge.target === 'sources/other'), false)
  assert.equal(graph.edges.some((edge) => edge.source === 'notes/same-name'), false)

  for (const edge of graph.edges) {
    assert.ok(ids.includes(edge.source), edge.source)
    assert.ok(ids.includes(edge.target), edge.target)
    assert.notEqual(edge.source, edge.target)
  }
})

test('cites resolve via sources[].resource wiki path, not bare footnote filenames', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-graph-cite-'))
  const write = (rel, body) => {
    const abs = path.join(dir, rel)
    fs.mkdirSync(path.dirname(abs), { recursive: true })
    fs.writeFileSync(abs, body)
  }
  write('topics/idea.md', `---
type: Topic
title: Idea
description: An idea
sources:
  - id: local-src
    resource: /sources/articles/demo.md
generated:
  by: test/agent
  at: 2026-10-24T12:00:00+08:00
---

# Idea

Claim.[^local-src]

[^local-src]: Demo
[^orphan]: paper.md
`)
  write('sources/articles/demo.md', `---
type: Source
title: Demo
description: Demo source
resource: https://example.com/demo
sources:
  - id: demo
    resource: https://example.com/demo
generated:
  by: test/agent
  at: 2026-10-24T12:00:00+08:00
---

# Demo
`)
  write('sources/articles/paper.md', '# Paper decoy\n')

  const graph = buildGraph(dir)
  assert.deepEqual(
    graph.edges.map((edge) => `${edge.source}|${edge.target}|${edge.type}`).sort(),
    ['topics/idea|sources/articles/demo|cites'],
  )
})

test('metadata pages are hidden with their edges by default and can be restored', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-graph-meta-'))
  const files = {
    'index.md': '# Home\n[Article](./sources/article.md)\n',
    'log.md': '# Log\n[Topic](./topics/idea.md)\n',
    'sources/index.md': '# Sources\n[Article](./article.md)\n',
    'sources/log.md': '# Source log\n[Article](./article.md)\n',
    'sources/article.md': '# Article\n[Topic](../topics/idea.md)\n',
    'topics/idea.md': '# Topic\n[Article](../sources/article.md)\n',
  }
  for (const [rel, body] of Object.entries(files)) {
    const abs = path.join(dir, rel)
    fs.mkdirSync(path.dirname(abs), { recursive: true })
    fs.writeFileSync(abs, body)
  }
  const graph = buildGraph(dir)
  assert.deepEqual(graph.nodes.filter((node) => node.is_meta).map((node) => node.id).sort(),
    ['index', 'log', 'sources', 'sources/log'])
  const visible = filterMetadataNodes(graph.nodes, graph.edges)
  assert.deepEqual(visible.nodes.map((node) => node.id), ['sources/article', 'topics/idea'])
  assert.equal(visible.edges.length, 2)
  const restored = filterMetadataNodes(graph.nodes, graph.edges, { showMetaNodes: true })
  assert.deepEqual(restored.nodes, graph.nodes)
  assert.deepEqual(restored.edges, graph.edges)
  // An explicit "Open in graph" request can still show the selected index.
  const focused = filterMetadataNodes(graph.nodes, graph.edges, { focusId: 'sources' })
  assert.ok(focused.nodes.some((node) => node.id === 'sources'))
  assert.ok(focused.nodes.every((node) => !node.is_meta || node.id === 'sources'))
})

test('today view and backlinks helpers use Asia/Shanghai dates', () => {
  assert.equal(shanghaiDay('2026-10-24'), '2026-10-24')
  assert.equal(shanghaiDay('2026-10-23T23:30:00Z'), '2026-10-24')
  assert.equal(todayShanghai(new Date('2026-10-24T01:00:00Z')), '2026-10-24')

  const nodes = [
    { id: 'sources/a', page_type: 'Source', date: '2026-10-24', generated_at: null, is_meta: false, source_kind: 'wiki' },
    { id: 'topics/t', page_type: 'Topic', date: null, generated_at: '2026-10-20T10:00:00+08:00', is_meta: false, source_kind: 'wiki' },
    { id: 'sources/old', page_type: 'Source', date: '2026-10-01', generated_at: null, is_meta: false, source_kind: 'wiki' },
    { id: 'index', page_type: null, date: null, generated_at: null, is_meta: true, source_kind: 'wiki' },
  ]
  assert.equal(nodeOnShanghaiDay(nodes[0], '2026-10-24'), true)
  const edges = [
    { source: 'sources/a', target: 'topics/t', type: 'links_to' },
    { source: 'topics/t', target: 'sources/a', type: 'cites' },
    { source: 'sources/old', target: 'topics/t', type: 'links_to' },
    { source: 'index', target: 'sources/a', type: 'links_to' },
  ]
  const today = filterTodayView(nodes, edges, { now: new Date('2026-10-24T04:00:00Z') })
  assert.ok(today)
  assert.deepEqual(today.nodes.map((node) => node.id).sort(), ['sources/a', 'topics/t'])
  assert.deepEqual(
    backlinksFor('sources/a', edges),
    [
      { id: 'index', type: 'links_to' },
      { id: 'topics/t', type: 'cites' },
    ],
  )
  const applied = applyGraphFilters(nodes, edges, {
    now: new Date('2026-10-24T04:00:00Z'),
    showSources: true,
  })
  assert.equal(applied.viewMode, 'today')
  assert.ok(applied.nodes.every((node) => !node.is_meta))
  const emptyDay = filterTodayView(nodes, edges, { now: new Date('2026-01-01T04:00:00Z') })
  assert.equal(emptyDay, null)
})

test('published wiki graph only links files that actually reference each other', () => {
  const graph = buildGraph(path.join(repoRoot, 'wiki'))
  const ids = new Set(graph.nodes.map((node) => node.id))
  assert.ok(ids.has('index'))
  assert.ok(ids.has('concepts/compiled-pages'))
  assert.ok(ids.has('sources/x-digest'))
  assert.ok(ids.has('sources/x-digest/2026-10-23-cn-x'))
  assert.ok(ids.has('sources/articles/karpathy-llm-wiki'))
  assert.ok(ids.has('sources/articles/anthropic-building-effective-agents'))
  assert.ok(ids.has('sources/articles/anthropic-formal-verification'))
  assert.ok(ids.has('topics/llm-formal-verification'))
  assert.ok(ids.has('topics/llm-maintained-wiki'))
  assert.ok(ids.has('topics/workflows-before-agents'))
  assert.ok(ids.has('log'))
  assert.equal(ids.has('graph'), false)
  assert.equal(ids.has('_templates/source'), false)
  assert.equal(ids.has('_templates/topic'), false)
  assert.ok(graph.nodes.every((node) => node.source_kind === 'wiki'))
  assert.equal(graph.nodes.find((node) => node.id === 'sources/x-digest').source_kind, 'wiki')
  assert.equal(graph.nodes.find((node) => node.id === 'sources/x-digest/2026-10-23-cn-x').source_kind, 'wiki')

  const karpathy = graph.nodes.find((node) => node.id === 'sources/articles/karpathy-llm-wiki')
  assert.equal(karpathy.page_type, 'Source')
  assert.match(karpathy.resource, /^https:\/\//)
  assert.equal(karpathy.generated_at, '2026-10-24T10:49:00+08:00')
  const topic = graph.nodes.find((node) => node.id === 'topics/llm-maintained-wiki')
  assert.equal(topic.page_type, 'Topic')

  const fromDigest = graph.edges
    .filter((edge) => edge.source === 'sources/x-digest' && edge.type === 'links_to')
    .map((edge) => edge.target)
    .sort()
  assert.deepEqual(fromDigest, [
    'sources/x-digest/2026-10-18-cn-x',
    'sources/x-digest/2026-10-21-cn-x',
    'sources/x-digest/2026-10-22-cn-x',
    'sources/x-digest/2026-10-22-frontier-ai',
    'sources/x-digest/2026-10-23-cn-x',
    'sources/x-digest/2026-10-23-frontier-ai',
  ])

  for (const edge of graph.edges) {
    assert.ok(ids.has(edge.source) && ids.has(edge.target))
    assert.ok(edge.type === 'links_to' || edge.type === 'cites')
  }

  const fromIndex = graph.edges
    .filter((edge) => edge.source === 'index' && edge.type === 'links_to')
    .map((edge) => edge.target)
    .sort()
  const scaffoldTargets = [
    'concepts/compiled-pages',
    'guides/adding-a-page',
    'log',
    'overview',
    'sources/articles/anthropic-building-effective-agents',
    'sources/articles/anthropic-formal-verification',
    'sources/articles/karpathy-llm-wiki',
    'sources/x-digest',
    'topics/llm-formal-verification',
    'topics/llm-maintained-wiki',
    'topics/workflows-before-agents',
  ]
  for (const target of scaffoldTargets) assert.ok(fromIndex.includes(target), target)

  const digest = graph.edges.filter((edge) => edge.source === 'sources/x-digest/2026-10-23-cn-x')
  assert.deepEqual(digest, [])

  const cites = graph.edges.filter((edge) => edge.type === 'cites')
  assert.ok(cites.some((edge) =>
    edge.source === 'topics/llm-maintained-wiki'
    && edge.target === 'sources/articles/karpathy-llm-wiki'))
})
