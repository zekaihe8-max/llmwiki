import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { compileArticle, invocationArgs, missingAgentMessage } from './compile-article.mjs'
import { fetchRecord } from './fetch-articles.mjs'
import { htmlToMarkdown } from './lib/html-to-markdown.mjs'
import { sha256, slugForUrl } from './lib/urls.mjs'
import { parseFrontmatter } from './lib/yaml.mjs'
import { ingestDigestFile } from './ingest-digest.mjs'
import { ingestOne } from './ingest-one.mjs'
import { extractUrls } from './lib/urls.mjs'
import { lintFiling, lintPage } from './lint-okf.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const fixtureDigest = path.join(repoRoot, 'tests/fixtures/ingest/sample-digest.md')
const fixtureHtml = fs.readFileSync(path.join(repoRoot, 'tests/fixtures/ingest/article.html'), 'utf8')
const realDigest = path.join(repoRoot, 'wiki/sources/x-digest/2026-10-23-frontier-ai.md')
const fixedNow = () => '2026-10-24T03:00:00.000Z'
const silent = () => {}

function tempRaw() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-ingest-'))
}

function treeHashes(dir) {
  const out = {}
  const walk = (current) => {
    if (!fs.existsSync(current)) return
    for (const name of fs.readdirSync(current).sort()) {
      const abs = path.join(current, name)
      if (fs.statSync(abs).isDirectory()) walk(abs)
      else out[path.relative(dir, abs)] = sha256(fs.readFileSync(abs))
    }
  }
  walk(dir)
  return out
}

function htmlResponse(body, { status = 200, url = 'https://example.com/a', type = 'text/html; charset=utf-8' } = {}) {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 200 ? 'OK' : 'Error',
    url,
    headers: { get: (name) => (name.toLowerCase() === 'content-type' ? type : '') },
    text: async () => body,
  }
}

function writeCompiledWiki(wikiRoot, url = 'https://example.com/a') {
  const source = `---
type: Source
title: Demo Article
description: A short public note used to prove the ingest loop.
resource: ${url}
tags: [demo]
sources:
  - id: demo-article
    resource: ${url}
    title: Demo Article
generated:
  by: test-agent/mock
  at: 2026-10-24T03:00:00Z
---

# Demo Article

The original claim is in the fetched body.[^demo-article]

## Related

- Topic: [Demo topic](../../topics/demo-topic.md)

[^demo-article]: Demo Article
`
  const topic = `---
type: Topic
title: Demo topic
description: The idea the demo article is about.
tags: [demo]
sources:
  - id: demo-article
    resource: ${url}
    title: Demo Article
generated:
  by: test-agent/mock
  at: 2026-10-24T03:00:00Z
---

# Demo topic

The demo article states one claim.[^demo-article]

## Contradictions

None yet.

## Related

- Source: [Demo Article](../sources/articles/demo-article.md)

[^demo-article]: Demo Article
`
  const write = (rel, body) => {
    const abs = path.join(wikiRoot, rel)
    fs.mkdirSync(path.dirname(abs), { recursive: true })
    fs.writeFileSync(abs, body)
  }
  write('sources/articles/demo-article.md', source)
  write('topics/demo-topic.md', topic)
  write('index.md', '# Home\n\n- [Demo Article](./sources/articles/demo-article.md) — A short public note used to prove the ingest loop.\n')
  write('log.md', '# Log\n\n## 2026-10-24\n\n* **Creation**: Filed [Demo Article](./sources/articles/demo-article.md).\n')
}

test('extractUrls normalizes and drops duplicates inside a digest', () => {
  const urls = extractUrls(fs.readFileSync(fixtureDigest, 'utf8'))
  assert.deepEqual(urls, [
    { url: 'https://example.com/a', title: 'Alpha Post' },
    { url: 'https://example.com/b?id=2', title: 'the writeup' },
    { url: 'https://example.com/c', title: 'Gamma note' },
  ])
})

test('a real frontier digest yields unique http(s) post URLs', () => {
  const urls = extractUrls(fs.readFileSync(realDigest, 'utf8'))
  assert.ok(urls.length > 10)
  assert.equal(new Set(urls.map((item) => item.url)).size, urls.length)
  assert.ok(urls.every((item) => item.url.startsWith('https://')))
  assert.ok(urls.some((item) => item.url === 'https://x.com/AnthropicAI/status/2113390212911083894'))
})

test('ingest is idempotent and refuses a changed digest with the same filename', () => {
  const rawRoot = tempRaw()
  const first = ingestDigestFile({ sourcePath: fixtureDigest, rawRoot, now: fixedNow, log: silent })
  assert.equal(first.skipped, false)
  assert.equal(first.created, 3)
  const slug = slugForUrl('https://example.com/a')
  const record = JSON.parse(fs.readFileSync(path.join(rawRoot, 'state', `${slug}.json`), 'utf8'))
  assert.equal(record.status, 'seen')
  assert.equal(record.url, 'https://example.com/a')
  assert.equal(record.title, 'Alpha Post')
  assert.equal(fs.existsSync(path.join(rawRoot, 'articles')), false)
  const before = treeHashes(rawRoot)

  const second = ingestDigestFile({ sourcePath: fixtureDigest, rawRoot, now: () => '2099-01-01T00:00:00.000Z', log: silent })
  assert.equal(second.skipped, true)
  assert.deepEqual(treeHashes(rawRoot), before)

  const named = path.join(rawRoot, 'sample-digest.md')
  fs.writeFileSync(named, `${fs.readFileSync(fixtureDigest, 'utf8')}\nExtra line.\n`)
  assert.throws(
    () => ingestDigestFile({ sourcePath: named, rawRoot, now: fixedNow, log: silent }),
    /different content hash/,
  )
  assert.equal(
    fs.readFileSync(path.join(rawRoot, 'digests', 'sample-digest.md'), 'utf8'),
    fs.readFileSync(fixtureDigest, 'utf8'),
  )
})

test('fetch stores the original page, and a failure leaves no article file', async () => {
  const rawRoot = tempRaw()
  ingestDigestFile({ sourcePath: fixtureDigest, rawRoot, now: fixedNow, log: silent })
  const slug = slugForUrl('https://example.com/a')
  const recordPath = path.join(rawRoot, 'state', `${slug}.json`)
  let record = JSON.parse(fs.readFileSync(recordPath, 'utf8'))

  const failed = await fetchRecord({
    record,
    rawRoot,
    fetchImpl: async () => htmlResponse('nope', { status: 503, type: 'text/html' }),
    now: fixedNow,
    log: silent,
  })
  assert.equal(failed.ok, false)
  record = JSON.parse(fs.readFileSync(recordPath, 'utf8'))
  assert.equal(record.status, 'failed')
  assert.match(record.error, /HTTP 503/)
  assert.equal(fs.existsSync(path.join(rawRoot, 'articles')), false)
  assert.equal(JSON.stringify(record).includes('DIGEST ONLY SENTENCE'), false)

  const empty = await fetchRecord({
    record,
    rawRoot,
    retryFailed: true,
    fetchImpl: async () => htmlResponse('<html><body><p>Hi</p></body></html>'),
    now: fixedNow,
    log: silent,
  })
  assert.equal(empty.ok, false)
  record = JSON.parse(fs.readFileSync(recordPath, 'utf8'))
  assert.equal(record.status, 'failed')
  assert.match(record.error, /no article body/)
  assert.equal(record.attempts.length, 2)

  const fetched = await fetchRecord({
    record,
    rawRoot,
    retryFailed: true,
    fetchImpl: async () => htmlResponse(fixtureHtml),
    now: fixedNow,
    log: silent,
  })
  assert.equal(fetched.ok, true)
  record = JSON.parse(fs.readFileSync(recordPath, 'utf8'))
  assert.equal(record.status, 'fetched')
  assert.equal(record.fetched_at, '2026-10-24T03:00:00.000Z')
  assert.equal(record.content_hash, sha256(fs.readFileSync(path.join(rawRoot, record.article_path))))
  const body = fs.readFileSync(path.join(rawRoot, record.article_path), 'utf8')
  assert.match(body, /original claim/)
  assert.equal(body.includes('DIGEST ONLY SENTENCE'), false)
  assert.equal(body.includes('not-the-article'), false)
  assert.equal(body.includes('Home navigation'), false)

  const again = await fetchRecord({
    record,
    rawRoot,
    fetchImpl: async () => {
      throw new Error('must not refetch a fetched article')
    },
    now: fixedNow,
    log: silent,
  })
  assert.equal(again.skipped, true)
  assert.equal(again.record.status, 'fetched')
})

test('a successful snapshot is not overwritten unless --force writes a new file', async () => {
  const rawRoot = tempRaw()
  ingestDigestFile({ sourcePath: fixtureDigest, rawRoot, now: fixedNow, log: silent })
  const slug = slugForUrl('https://example.com/a')
  const recordPath = path.join(rawRoot, 'state', `${slug}.json`)
  let record = JSON.parse(fs.readFileSync(recordPath, 'utf8'))
  const firstBody = `<article><h1>One</h1><p>${'alpha '.repeat(40)}</p></article>`
  const secondBody = `<article><h1>Two</h1><p>${'beta '.repeat(40)}</p></article>`
  await fetchRecord({
    record,
    rawRoot,
    fetchImpl: async () => htmlResponse(firstBody),
    now: fixedNow,
    log: silent,
  })
  record = JSON.parse(fs.readFileSync(recordPath, 'utf8'))
  const originalPath = record.article_path
  const original = fs.readFileSync(path.join(rawRoot, originalPath), 'utf8')

  const skipped = await fetchRecord({
    record,
    rawRoot,
    fetchImpl: async () => {
      throw new Error('must not refetch')
    },
    now: fixedNow,
    log: silent,
  })
  assert.equal(skipped.skipped, true)
  assert.equal(fs.readFileSync(path.join(rawRoot, originalPath), 'utf8'), original)

  record.status = 'seen'
  const blocked = await fetchRecord({
    record,
    rawRoot,
    fetchImpl: async () => htmlResponse(secondBody),
    now: fixedNow,
    log: silent,
  })
  assert.equal(blocked.ok, false)
  assert.match(blocked.error, /refusing to overwrite/)
  assert.equal(fs.readFileSync(path.join(rawRoot, originalPath), 'utf8'), original)

  const forced = await fetchRecord({
    record: JSON.parse(fs.readFileSync(recordPath, 'utf8')),
    rawRoot,
    force: true,
    fetchImpl: async () => htmlResponse(secondBody),
    now: fixedNow,
    log: silent,
  })
  assert.equal(forced.ok, true)
  assert.notEqual(forced.record.article_path, originalPath)
  assert.match(fs.readFileSync(path.join(rawRoot, originalPath), 'utf8'), /alpha/)
  assert.match(fs.readFileSync(path.join(rawRoot, forced.record.article_path), 'utf8'), /beta/)
})

test('htmlToMarkdown keeps the article and drops script, nav, and footer', () => {
  const { title, markdown } = htmlToMarkdown(fixtureHtml)
  assert.equal(title, 'Example Article')
  assert.match(markdown, /^# Example Article/m)
  assert.match(markdown, /\[the note\]\(https:\/\/example\.com\/more\)/)
  assert.match(markdown, /^- First point/m)
  assert.match(markdown, /```\nnpm test\n```/)
  assert.equal(markdown.includes('not-the-article'), false)
  assert.equal(markdown.includes('Home navigation'), false)
  assert.equal(markdown.includes('copyright footer'), false)
})

test('published Source and Topic pages pass OKF lint', () => {
  const wiki = path.join(repoRoot, 'wiki')
  for (const rel of [
    'sources/articles/karpathy-llm-wiki.md',
    'sources/articles/anthropic-building-effective-agents.md',
    'topics/llm-maintained-wiki.md',
    'topics/workflows-before-agents.md',
  ]) {
    const errors = lintPage(path.join(wiki, rel), wiki)
    assert.deepEqual(errors, [], rel)
  }
  const karpathy = parseFrontmatter(fs.readFileSync(path.join(wiki, 'sources/articles/karpathy-llm-wiki.md'), 'utf8'))
  assert.equal(karpathy.data.sources[0].id, 'karpathy-llm-wiki')
  assert.equal(karpathy.data.generated.at, '2026-10-24T10:49:00+08:00')
  assert.deepEqual(
    lintFiling({
      wikiRoot: wiki,
      sourcePath: 'sources/articles/karpathy-llm-wiki.md',
      url: 'https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f',
    }),
    [],
  )
})

test('filing gate rejects a duplicate log line and a missing footnote', () => {
  const wikiRoot = tempRaw()
  writeCompiledWiki(wikiRoot)
  fs.appendFileSync(
    path.join(wikiRoot, 'log.md'),
    '* **Update**: Mentioned [Demo Article](./sources/articles/demo-article.md) again.\n',
  )
  const duplicate = lintFiling({
    wikiRoot,
    sourcePath: 'sources/articles/demo-article.md',
    url: 'https://example.com/a',
  })
  assert.ok(duplicate.some((error) => error.includes('more than once')))

  const source = path.join(wikiRoot, 'sources/articles/demo-article.md')
  fs.writeFileSync(source, fs.readFileSync(source, 'utf8').replace('[^demo-article]: Demo Article\n', ''))
  const missing = lintPage(source, wikiRoot)
  assert.ok(missing.some((error) => error.includes('missing footnote')))
})

test('ingest:one fetches one URL, resumes compile, then stays idempotent', async () => {
  const rawRoot = tempRaw()
  const wikiRoot = tempRaw()
  fs.writeFileSync(path.join(wikiRoot, 'index.md'), '# Home\n')
  fs.writeFileSync(path.join(wikiRoot, 'log.md'), '# Log\n')
  const graphOut = path.join(wikiRoot, 'graph-data.json')
  let fetches = 0
  const fetchImpl = async () => {
    fetches++
    return htmlResponse(fixtureHtml)
  }

  const missing = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    url: 'https://example.com/a/',
    fetchImpl,
    resolveImpl: () => null,
    graph: false,
    now: fixedNow,
    log: silent,
  })
  assert.equal(missing.code, 2)
  assert.match(missing.error, /\/home\/box\/\.local\/bin\/codex/)
  assert.match(missingAgentMessage(), /agent -p --trust -f/)
  assert.equal(missing.record.status, 'fetched')
  assert.equal(fetches, 1)
  assert.equal(fs.existsSync(path.join(wikiRoot, 'sources/articles/demo-article.md')), false)

  const picked = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot: tempRaw(),
    wikiRoot,
    pick: 2,
    skipCompile: true,
    fetchImpl: async (target) => {
      assert.equal(target, 'https://example.com/b?id=2')
      return htmlResponse(`<article><p>${'beta article '.repeat(20)}</p></article>`, { url: target })
    },
    now: fixedNow,
    log: silent,
  })
  assert.equal(picked.record.url, 'https://example.com/b?id=2')
  assert.equal(picked.record.status, 'fetched')

  let spawned = 0
  let args = []
  const filed = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    pick: 1,
    fetchImpl: async () => {
      throw new Error('must resume from compile without refetching')
    },
    resolveImpl: () => ({ kind: 'codex', bin: '/home/box/.local/bin/codex' }),
    spawnImpl: async (invocation) => {
      spawned++
      args = invocation.args
      writeCompiledWiki(wikiRoot)
      return { code: 0, stdout: '', stderr: '' }
    },
    graph: true,
    graphOut,
    now: fixedNow,
    log: silent,
  })
  assert.equal(filed.ok, true)
  assert.equal(filed.record.status, 'filed')
  assert.equal(filed.record.source_path, 'sources/articles/demo-article.md')
  assert.equal(spawned, 1)
  assert.deepEqual(args.slice(0, -1), [
    'exec',
    '--sandbox',
    'workspace-write',
  ])
  assert.match(args.at(-1), /https:\/\/example\.com\/a/)
  assert.match(args.at(-1), /do not edit/i)
  const graph = JSON.parse(fs.readFileSync(graphOut, 'utf8'))
  const ids = graph.nodes.map((node) => node.id).sort()
  assert.ok(ids.includes('sources/articles/demo-article'))
  assert.ok(ids.includes('topics/demo-topic'))

  const logBefore = fs.readFileSync(path.join(wikiRoot, 'log.md'), 'utf8')
  const stateBefore = treeHashes(rawRoot)
  const again = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    url: 'https://example.com/a',
    fetchImpl: async () => {
      throw new Error('must not refetch')
    },
    spawnImpl: async () => {
      throw new Error('must not compile twice')
    },
    graph: false,
    now: () => '2099-01-01T00:00:00.000Z',
    log: silent,
  })
  assert.equal(again.skipped, true)
  assert.equal(again.record.status, 'filed')
  assert.equal(fs.readFileSync(path.join(wikiRoot, 'log.md'), 'utf8'), logBefore)
  assert.deepEqual(treeHashes(rawRoot), stateBefore)
})

test('cursor invocation uses --trust and -f, and lint failure does not file', async () => {
  assert.deepEqual(invocationArgs({ kind: 'cursor' }, 'PROMPT').slice(0, -1), ['-p', '--trust', '-f'])
  const rawRoot = tempRaw()
  const wikiRoot = tempRaw()
  fs.writeFileSync(path.join(wikiRoot, 'index.md'), '# Home\n')
  fs.writeFileSync(path.join(wikiRoot, 'log.md'), '# Log\n')
  const result = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    pick: 1,
    fetchImpl: async () => htmlResponse(fixtureHtml),
    resolveImpl: () => ({ kind: 'cursor', bin: '/home/box/.local/bin/agent' }),
    spawnImpl: async (invocation) => {
      assert.equal(invocation.bin, '/home/box/.local/bin/agent')
      assert.deepEqual(invocation.args.slice(0, 3), ['-p', '--trust', '-f'])
      writeCompiledWiki(wikiRoot)
      fs.writeFileSync(path.join(wikiRoot, 'log.md'), '# Log\n\n## 2026-10-24\n')
      return { code: 0, stdout: '', stderr: '' }
    },
    graph: false,
    now: fixedNow,
    log: silent,
  })
  assert.equal(result.ok, false)
  assert.equal(result.record.status, 'sourced')
  assert.match(result.error, /log\.md does not mention/)
})

test('cli help exits 0', () => {
  for (const script of ['ingest-digest.mjs', 'fetch-articles.mjs', 'compile-article.mjs', 'lint-okf.mjs', 'ingest-one.mjs', 'ingest-batch.mjs', 'ingest-day.mjs']) {
    const result = spawnSync(process.execPath, [path.join(repoRoot, 'scripts', script), '--help'], { encoding: 'utf8' })
    assert.equal(result.status, 0, result.stderr || script)
    assert.match(result.stdout, /Usage:/)
  }
})

test('compileArticle does not spawn or write wiki pages when the CLI is missing', async () => {
  const rawRoot = tempRaw()
  const wikiRoot = tempRaw()
  ingestDigestFile({ sourcePath: fixtureDigest, rawRoot, now: fixedNow, log: silent })
  const record = JSON.parse(fs.readFileSync(
    path.join(rawRoot, 'state', `${slugForUrl('https://example.com/a')}.json`),
    'utf8',
  ))
  await fetchRecord({
    record,
    rawRoot,
    fetchImpl: async () => htmlResponse(fixtureHtml),
    now: fixedNow,
    log: silent,
  })
  const result = await compileArticle({
    rawRoot,
    wikiRoot,
    slug: record.slug,
    resolveImpl: () => null,
    spawnImpl: async () => {
      throw new Error('must not spawn')
    },
    graph: false,
    log: silent,
  })
  assert.equal(result.code, 2)
  assert.equal(result.record.status, 'fetched')
  assert.deepEqual(fs.readdirSync(wikiRoot), [])
})

test('--refresh with unchanged body skips silently; changed body recompiles', async () => {
  const rawRoot = tempRaw()
  const wikiRoot = tempRaw()
  fs.writeFileSync(path.join(wikiRoot, 'index.md'), '# Home\n')
  fs.writeFileSync(path.join(wikiRoot, 'log.md'), '# Log\n')
  const firstBody = `<article><h1>One</h1><p>${'alpha '.repeat(40)}</p></article>`
  const secondBody = `<article><h1>Two</h1><p>${'beta '.repeat(40)}</p></article>`
  let fetches = 0
  let spawned = 0

  const filed = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    url: 'https://example.com/a',
    fetchImpl: async () => {
      fetches++
      return htmlResponse(firstBody)
    },
    resolveImpl: () => ({ kind: 'cursor', bin: '/home/box/.local/bin/agent' }),
    spawnImpl: async () => {
      spawned++
      writeCompiledWiki(wikiRoot)
      return { code: 0, stdout: '', stderr: '' }
    },
    graph: false,
    now: fixedNow,
    log: silent,
  })
  assert.equal(filed.ok, true)
  assert.equal(filed.record.status, 'filed')
  assert.equal(fetches, 1)
  assert.equal(spawned, 1)
  const originalPath = filed.record.article_path
  const logBefore = fs.readFileSync(path.join(wikiRoot, 'log.md'), 'utf8')

  const unchanged = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    url: 'https://example.com/a',
    refresh: true,
    fetchImpl: async () => {
      fetches++
      return htmlResponse(firstBody)
    },
    spawnImpl: async () => {
      throw new Error('must not spawn on unchanged refresh')
    },
    graph: false,
    now: () => '2099-01-01T00:00:00.000Z',
    log: silent,
  })
  assert.equal(unchanged.ok, true)
  assert.equal(unchanged.skipped, true)
  assert.equal(unchanged.record.status, 'filed')
  assert.equal(unchanged.record.article_path, originalPath)
  assert.equal(fs.readFileSync(path.join(wikiRoot, 'log.md'), 'utf8'), logBefore)
  assert.equal(fetches, 2)
  assert.equal(spawned, 1)

  const changed = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    url: 'https://example.com/a',
    refresh: true,
    fetchImpl: async () => {
      fetches++
      return htmlResponse(secondBody)
    },
    resolveImpl: () => ({ kind: 'cursor', bin: '/home/box/.local/bin/agent' }),
    spawnImpl: async () => {
      spawned++
      writeCompiledWiki(wikiRoot)
      return { code: 0, stdout: '', stderr: '' }
    },
    graph: false,
    now: () => '2099-01-02T00:00:00.000Z',
    log: silent,
  })
  assert.equal(changed.ok, true)
  assert.equal(changed.skipped, false)
  assert.equal(changed.record.status, 'filed')
  assert.notEqual(changed.record.article_path, originalPath)
  assert.match(changed.record.article_path, /--/)
  assert.equal(fs.existsSync(path.join(rawRoot, originalPath)), true)
  assert.equal(fetches, 3)
  assert.equal(spawned, 2)
})

test('compile failure keeps the snapshot and leaves status fetched or sourced', async () => {
  const rawRoot = tempRaw()
  const wikiRoot = tempRaw()
  fs.writeFileSync(path.join(wikiRoot, 'index.md'), '# Home\n')
  fs.writeFileSync(path.join(wikiRoot, 'log.md'), '# Log\n')
  const result = await ingestOne({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    url: 'https://example.com/a',
    fetchImpl: async () => htmlResponse(fixtureHtml),
    resolveImpl: () => ({ kind: 'cursor', bin: '/home/box/.local/bin/agent' }),
    spawnImpl: async () => ({ code: 1, stdout: '', stderr: 'agent boom' }),
    graph: false,
    now: fixedNow,
    log: silent,
  })
  assert.equal(result.ok, false)
  assert.equal(result.record.status, 'fetched')
  assert.ok(result.record.article_path)
  assert.equal(fs.existsSync(path.join(rawRoot, result.record.article_path)), true)
  assert.match(result.record.compile_error, /agent exited 1/)
})
