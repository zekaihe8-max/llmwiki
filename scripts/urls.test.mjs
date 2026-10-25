import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { selectRecords } from './fetch-articles.mjs'
import { remediateDirtyUrlAliases } from './ingest-digest.mjs'
import { blankRecord, rawPaths, writeJson } from './lib/store.mjs'
import {
  aliasCanonical,
  cleanExtractedUrl,
  extractUrls,
  normalizeUrl,
  sha256,
  slugForUrl,
} from './lib/urls.mjs'

test('fullwidth parens around a bare URL strip cleanly', () => {
  const urls = extractUrls('参考（https://x.com/a/status/1）')
  assert.deepEqual(urls, [{ url: 'https://x.com/a/status/1', title: null }])
  assert.equal(normalizeUrl('（https://x.com/a/status/1）'), 'https://x.com/a/status/1')
})

test('CJK trailing prose after a URL is stripped', () => {
  const urls = extractUrls('参考（https://example.com/x），见下文')
  assert.deepEqual(urls, [{ url: 'https://example.com/x', title: null }])
  assert.ok(!urls[0].url.includes('%EF%BC'))
  assert.ok(!urls[0].url.includes('见'))
})

test('markdown link alone yields one clean URL without trailing )', () => {
  const urls = extractUrls('[text](https://example.com/y)')
  assert.deepEqual(urls, [{ url: 'https://example.com/y', title: 'text' }])
})

test('balanced parentheses inside a path are preserved', () => {
  const raw = 'https://en.wikipedia.org/wiki/Foo_(bar)'
  assert.equal(normalizeUrl(raw), raw)
  assert.deepEqual(extractUrls(raw), [{ url: raw, title: null }])
  assert.equal(cleanExtractedUrl(`${raw})`), raw)
})

test('markdown link plus same bare URL collapses to one entry', () => {
  const urls = extractUrls('见 [t](https://example.com/path) 与 https://example.com/path')
  assert.deepEqual(urls, [{ url: 'https://example.com/path', title: 't' }])
})

test('fullwidth-wrapped markdown link does not emit a dirty bare variant', () => {
  const md = '（[小墨](https://x.com/xiaomovps/status/2114285431324057857)）'
  const urls = extractUrls(md)
  assert.equal(urls.length, 1)
  assert.equal(urls[0].url, 'https://x.com/xiaomovps/status/2114285431324057857')
  assert.ok(!urls[0].url.includes('%EF%BC'))
})

test('aliasCanonical maps historical dirty keys to the clean URL', () => {
  const dirty = 'https://x.com/xiaomovps/status/2114285431324057857)%EF%BC%89'
  assert.equal(aliasCanonical(dirty), 'https://x.com/xiaomovps/status/2114285431324057857')
  assert.equal(normalizeUrl(dirty), 'https://x.com/xiaomovps/status/2114285431324057857')
  assert.equal(aliasCanonical('https://x.com/a/status/1'), null)
})

test('dirty failed + clean filed → dirty not retried', () => {
  const rawRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-url-alias-'))
  const paths = rawPaths(rawRoot)
  fs.mkdirSync(paths.state, { recursive: true })

  const clean = 'https://x.com/example/status/99'
  const dirty = `${clean})%EF%BC%89`
  const cleanSlug = slugForUrl(clean)
  const dirtySlug = slugForUrl(dirty)
  const stamp = '2026-10-25T12:00:00.000Z'

  writeJson(paths.urls, {
    [dirty]: {
      hash: sha256(dirty),
      slug: dirtySlug,
      first_seen: stamp,
      last_seen: stamp,
      digest: 'demo.md',
      title: null,
    },
    [clean]: {
      hash: sha256(clean),
      slug: cleanSlug,
      first_seen: stamp,
      last_seen: stamp,
      digest: 'demo.md',
      title: 'Demo',
    },
  })
  writeJson(paths.record(dirtySlug), {
    ...blankRecord({ slug: dirtySlug, url: dirty, title: null, digest: 'demo.md', hash: sha256(dirty), now: stamp }),
    status: 'failed',
    error: 'HTTP 404',
  })
  writeJson(paths.record(cleanSlug), {
    ...blankRecord({ slug: cleanSlug, url: clean, title: 'Demo', digest: 'demo.md', hash: sha256(clean), now: stamp }),
    status: 'filed',
    source_path: 'sources/articles/demo.md',
    filed_at: stamp,
  })

  const fixed = remediateDirtyUrlAliases({ rawRoot, now: stamp })
  assert.ok(fixed >= 1)

  const dirtyRec = JSON.parse(fs.readFileSync(paths.record(dirtySlug), 'utf8'))
  assert.equal(dirtyRec.status, 'skipped')
  assert.equal(dirtyRec.duplicate_of, cleanSlug)
  assert.equal(dirtyRec.alias_of, clean)

  const urls = JSON.parse(fs.readFileSync(paths.urls, 'utf8'))
  assert.equal(urls[dirty].alias_of, clean)
  assert.equal(urls[dirty].slug, cleanSlug)

  const selected = selectRecords(rawRoot, { retryFailed: true })
  assert.equal(selected.some((r) => r.slug === dirtySlug), false)
  assert.equal(selected.some((r) => r.url === dirty), false)
})
