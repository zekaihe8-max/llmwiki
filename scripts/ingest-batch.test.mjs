import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { fetchRecord } from './fetch-articles.mjs'
import { ingestBatch, selectBatch } from './ingest-batch.mjs'
import { ingestDigestFile } from './ingest-digest.mjs'
import { digestFilesForDate, ingestDay } from './ingest-day.mjs'
import { writeJson } from './lib/store.mjs'
import { slugForUrl } from './lib/urls.mjs'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const fixtureDigest = path.join(repoRoot, 'tests/fixtures/ingest/sample-digest.md')
const fixtureHtml = fs.readFileSync(path.join(repoRoot, 'tests/fixtures/ingest/article.html'), 'utf8')
const fixedNow = () => '2026-10-24T03:00:00.000Z'
const silent = () => {}
const urlA = 'https://example.com/a'
const urlB = 'https://example.com/b?id=2'
const urlC = 'https://example.com/c'

function tempDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-batch-'))
}

function htmlResponse(body, { status = 200, url = urlA, type = 'text/html; charset=utf-8' } = {}) {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 200 ? 'OK' : 'Error',
    url,
    headers: { get: (name) => (name.toLowerCase() === 'content-type' ? type : '') },
    text: async () => body,
  }
}

function recordFile(rawRoot, url) {
  return path.join(rawRoot, 'state', `${slugForUrl(url)}.json`)
}

function readRecord(rawRoot, url) {
  return JSON.parse(fs.readFileSync(recordFile(rawRoot, url), 'utf8'))
}

function fileRecord(rawRoot, url) {
  const record = readRecord(rawRoot, url)
  record.status = 'filed'
  record.filed_at = fixedNow()
  record.compile_error = null
  writeJson(recordFile(rawRoot, url), record)
  return record
}

function filingCompile(calls) {
  return async (options) => {
    calls.push(options)
    const record = readRecord(options.rawRoot, options.url)
    record.status = 'filed'
    record.filed_at = fixedNow()
    writeJson(recordFile(options.rawRoot, options.url), record)
    return { ok: true, code: 0, record }
  }
}

test('selectBatch applies limit, skips filed, and resumes fetched', () => {
  const records = [
    { slug: 'a', status: 'filed', url: urlA },
    { slug: 'b', status: 'fetched', url: urlB },
    { slug: 'c', status: 'seen', url: urlC },
    { slug: 'd', status: 'failed', url: 'https://example.com/d' },
    { slug: 'e', status: 'sourced', url: 'https://example.com/e' },
    { slug: 'f', status: 'skipped', url: 'https://example.com/f' },
  ]
  const limited = selectBatch(records, { limit: 2 })
  assert.deepEqual(limited.selected.map((record) => record.slug), ['b', 'c'])
  assert.equal(limited.filed, 1)
  assert.equal(limited.failed, 1)
  assert.equal(limited.skipped, 1)
  assert.equal(limited.deferred, 1)

  const retryLimited = selectBatch(records, { limit: 2, retryFailed: true })
  assert.deepEqual(retryLimited.selected.map((record) => record.slug), ['b', 'c'])
  assert.equal(retryLimited.failed, 0)
  assert.equal(retryLimited.deferred, 2)

  const resumed = selectBatch(records, { retryFailed: true })
  assert.deepEqual(resumed.selected.map((record) => record.slug), ['b', 'c', 'd', 'e'])
  assert.throws(() => selectBatch(records, { limit: 0 }), /--limit/)
})

test('limit registers every URL and the next run takes the next unfiled one', async () => {
  const rawRoot = tempDir()
  const wikiRoot = tempDir()
  const graphOut = path.join(wikiRoot, 'graph-data.json')
  const compiled = []
  const fetched = []
  const first = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    graphOut,
    limit: 1,
    fetchImpl: async (url) => {
      fetched.push(url)
      return htmlResponse(fixtureHtml, { url })
    },
    compileImpl: filingCompile(compiled),
    now: fixedNow,
    log: silent,
    err: silent,
  })
  assert.equal(first.code, 0)
  assert.deepEqual(first.selected, [urlA])
  assert.equal(first.deferred, 2)
  assert.deepEqual(fetched, [urlA])
  assert.deepEqual(compiled.map((call) => call.url), [urlA])
  assert.equal(compiled[0].agent, 'cursor')
  assert.equal(readRecord(rawRoot, urlA).status, 'filed')
  assert.equal(readRecord(rawRoot, urlB).status, 'seen')
  assert.equal(readRecord(rawRoot, urlC).status, 'seen')
  assert.equal(fs.existsSync(graphOut), true)
  for (const url of [urlA, urlB, urlC]) assert.equal(fs.existsSync(recordFile(rawRoot, url)), true)

  fetched.length = 0
  compiled.length = 0
  const logs = []
  const second = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    graphOut,
    limit: 1,
    fetchImpl: async (url) => {
      fetched.push(url)
      if (url === urlA) throw new Error('filed URL must not be fetched')
      return htmlResponse(fixtureHtml, { url })
    },
    compileImpl: filingCompile(compiled),
    now: fixedNow,
    log: (line) => logs.push(String(line)),
    err: silent,
  })
  assert.equal(second.code, 0)
  assert.deepEqual(fetched, [urlB])
  assert.deepEqual(compiled.map((call) => call.url), [urlB])
  assert.equal(logs.some((line) => line.includes(urlA)), false)
  assert.equal(readRecord(rawRoot, urlC).status, 'seen')
})

test('batch skips filed without logging them and resumes compile from fetched', async () => {
  const rawRoot = tempDir()
  const wikiRoot = tempDir()
  const graphOut = path.join(wikiRoot, 'graph-data.json')
  ingestDigestFile({ sourcePath: fixtureDigest, rawRoot, now: fixedNow, log: silent })
  fileRecord(rawRoot, urlA)
  await fetchRecord({
    record: readRecord(rawRoot, urlB),
    rawRoot,
    fetchImpl: async () => htmlResponse(fixtureHtml, { url: urlB }),
    now: fixedNow,
    log: silent,
  })
  assert.equal(readRecord(rawRoot, urlB).status, 'fetched')

  const fetched = []
  const compiled = []
  let lints = 0
  let graphs = 0
  const logs = []
  const first = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    graphOut,
    fetchImpl: async (url) => {
      fetched.push(url)
      if (url !== urlC) throw new Error(`unexpected fetch ${url}`)
      return htmlResponse(fixtureHtml, { url })
    },
    compileImpl: filingCompile(compiled),
    lintImpl: () => {
      lints += 1
      return []
    },
    graphImpl: () => {
      graphs += 1
      return { nodes: [], edges: [] }
    },
    now: fixedNow,
    log: (line) => logs.push(String(line)),
    err: silent,
  })
  assert.equal(first.code, 0)
  assert.deepEqual(fetched, [urlC])
  assert.deepEqual(compiled.map((call) => call.url), [urlB, urlC])
  assert.equal(compiled.every((call) => call.graph === false), true)
  assert.equal(lints, 1)
  assert.equal(graphs, 1)
  assert.equal(logs.some((line) => line.includes(urlA)), false)
  assert.equal(logs.some((line) => line.includes(urlB)), true)
  assert.equal(readRecord(rawRoot, urlB).status, 'filed')

  const againLogs = []
  const again = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    graphOut,
    fetchImpl: async () => {
      throw new Error('must not refetch')
    },
    compileImpl: async () => {
      throw new Error('must not compile')
    },
    lintImpl: () => [],
    graphImpl: () => ({ nodes: [], edges: [] }),
    now: fixedNow,
    log: (line) => againLogs.push(String(line)),
    err: silent,
  })
  assert.equal(again.code, 0)
  assert.equal(again.filed, 3)
  assert.deepEqual(again.selected, [])
  assert.equal(againLogs.some((line) => line.includes('https://example.com')), false)
})

test('fetch stays sequential unless concurrency is raised', async () => {
  async function peak(concurrency) {
    const rawRoot = tempDir()
    const wikiRoot = tempDir()
    let inFlight = 0
    let maxInFlight = 0
    await ingestBatch({
      digestPath: fixtureDigest,
      rawRoot,
      wikiRoot,
      graphOut: path.join(wikiRoot, 'graph-data.json'),
      limit: 2,
      concurrency,
      fetchImpl: async (url) => {
        inFlight += 1
        maxInFlight = Math.max(maxInFlight, inFlight)
        await new Promise((resolve) => setTimeout(resolve, 20))
        inFlight -= 1
        return htmlResponse(fixtureHtml, { url })
      },
      compileImpl: filingCompile([]),
      lintImpl: () => [],
      graphImpl: () => ({ nodes: [], edges: [] }),
      now: fixedNow,
      log: silent,
      err: silent,
    })
    return maxInFlight
  }
  assert.equal(await peak(undefined), 1)
  assert.equal(await peak(2), 2)
})

test('a fetch failure is partial success and later URLs still compile', async () => {
  const rawRoot = tempDir()
  const wikiRoot = tempDir()
  const compiled = []
  const result = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    graphOut: path.join(wikiRoot, 'graph-data.json'),
    fetchImpl: async (url) => {
      if (url === urlA) return htmlResponse('nope', { status: 503, url })
      return htmlResponse(fixtureHtml, { url })
    },
    compileImpl: filingCompile(compiled),
    lintImpl: () => [],
    graphImpl: () => ({ nodes: [], edges: [] }),
    now: fixedNow,
    log: silent,
    err: silent,
  })
  assert.equal(result.code, 1)
  assert.match(result.summary, /partial success, exit 1/)
  assert.match(result.summary, /--retry-failed/)
  assert.equal(readRecord(rawRoot, urlA).status, 'failed')
  assert.equal(fs.existsSync(path.join(rawRoot, 'articles')), true)
  assert.equal(fs.existsSync(path.join(rawRoot, readRecord(rawRoot, urlB).article_path)), true)
  assert.equal(fs.existsSync(path.join(rawRoot, `articles/${slugForUrl(urlA)}.md`)), false)
  assert.deepEqual(compiled.map((call) => call.url), [urlB, urlC])

  const retried = []
  const second = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    graphOut: path.join(wikiRoot, 'graph-data.json'),
    retryFailed: true,
    fetchImpl: async (url) => {
      retried.push(url)
      return htmlResponse(fixtureHtml, { url })
    },
    compileImpl: filingCompile(compiled),
    lintImpl: () => [],
    graphImpl: () => ({ nodes: [], edges: [] }),
    now: fixedNow,
    log: silent,
    err: silent,
  })
  assert.deepEqual(retried, [urlA])
  assert.equal(second.code, 0)
  assert.equal(readRecord(rawRoot, urlA).status, 'filed')
})

test('a failed URL keeps exit 1 until --retry-failed, without a refetch', async () => {
  const rawRoot = tempDir()
  const wikiRoot = tempDir()
  ingestDigestFile({ sourcePath: fixtureDigest, rawRoot, now: fixedNow, log: silent })
  fileRecord(rawRoot, urlA)
  fileRecord(rawRoot, urlB)
  const failed = readRecord(rawRoot, urlC)
  failed.status = 'failed'
  failed.error = 'HTTP 503'
  writeJson(recordFile(rawRoot, urlC), failed)

  const result = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    graph: false,
    fetchImpl: async () => {
      throw new Error('must not refetch failed')
    },
    compileImpl: async () => {
      throw new Error('must not compile')
    },
    lintImpl: () => [],
    now: fixedNow,
    log: silent,
    err: silent,
  })
  assert.equal(result.code, 1)
  assert.equal(result.leftFailed, 1)
  assert.deepEqual(result.selected, [])
  assert.match(result.summary, /left-failed 1/)
})

test('missing Agent CLI exits 2, writes no wiki page, and stops later compiles', async () => {
  const rawRoot = tempDir()
  const wikiRoot = tempDir()
  const graphOut = path.join(wikiRoot, 'graph-data.json')
  let spawned = 0
  const errors = []
  const result = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot,
    wikiRoot,
    graphOut,
    limit: 1,
    fetchImpl: async (url) => htmlResponse(fixtureHtml, { url }),
    resolveImpl: () => null,
    spawnImpl: async () => {
      spawned += 1
      throw new Error('must not spawn')
    },
    now: fixedNow,
    log: silent,
    err: (line) => errors.push(String(line)),
  })
  assert.equal(result.code, 2)
  assert.equal(spawned, 0)
  assert.equal(result.outcomes[0].record.status, 'fetched')
  assert.equal(readRecord(rawRoot, urlA).status, 'fetched')
  assert.equal(fs.existsSync(path.join(wikiRoot, 'sources')), false)
  assert.equal(fs.existsSync(graphOut), true)
  assert.match(errors.join('\n'), /\/home\/box\/\.local\/bin\/agent/)
  assert.match(result.summary, /partial success, exit 2/)

  const compiles = []
  const stopped = await ingestBatch({
    digestPath: fixtureDigest,
    rawRoot: tempDir(),
    wikiRoot,
    graphOut,
    limit: 2,
    fetchImpl: async (url) => htmlResponse(fixtureHtml, { url }),
    compileImpl: async (options) => {
      compiles.push(options.url)
      return { ok: false, code: 2, record: { status: 'fetched', slug: options.slug }, error: 'missing cli' }
    },
    lintImpl: () => [],
    graphImpl: () => ({ nodes: [], edges: [] }),
    now: fixedNow,
    log: silent,
    err: silent,
  })
  assert.equal(stopped.code, 2)
  assert.deepEqual(compiles, [urlA])
  assert.equal(stopped.outcomes[1].skipped, true)
  assert.equal(stopped.outcomes[1].url, urlB)
})

test('ingest:day runs each existing digest and continues after a failure', async () => {
  const rawRoot = tempDir()
  const day = '2026-10-23'
  await assert.rejects(
    () => ingestDay({
      date: day,
      rawRoot,
      runBatch: async () => {
        throw new Error('must not run')
      },
      log: silent,
      err: silent,
    }),
    /No digest for 2026-10-23/,
  )
  assert.throws(() => digestFilesForDate(rawRoot, 'yesterday'), /YYYY-MM-DD/)

  const digests = path.join(rawRoot, 'digests')
  fs.mkdirSync(digests, { recursive: true })
  fs.writeFileSync(path.join(digests, `${day}-cn-x.md`), '# cn\n')
  const onlyCn = []
  const one = await ingestDay({
    date: day,
    rawRoot,
    limit: 3,
    agent: 'codex',
    retryFailed: true,
    concurrency: 2,
    runBatch: async (options) => {
      onlyCn.push(options)
      return { ok: true, code: 0 }
    },
    log: silent,
    err: silent,
  })
  assert.equal(one.code, 0)
  assert.deepEqual(onlyCn.map((options) => path.basename(options.digestPath)), [`${day}-cn-x.md`])
  assert.equal(onlyCn[0].limit, 3)
  assert.equal(onlyCn[0].agent, 'codex')
  assert.equal(onlyCn[0].retryFailed, true)
  assert.equal(onlyCn[0].concurrency, 2)

  fs.writeFileSync(path.join(digests, `${day}-frontier-ai.md`), '# frontier\n')
  const names = []
  const both = await ingestDay({
    date: day,
    rawRoot,
    runBatch: async ({ digestPath }) => {
      names.push(path.basename(digestPath))
      return { ok: names.length !== 1, code: names.length === 1 ? 1 : 0 }
    },
    log: silent,
    err: silent,
  })
  assert.deepEqual(names, [`${day}-frontier-ai.md`, `${day}-cn-x.md`])
  assert.equal(both.code, 1)

  const missingCli = await ingestDay({
    date: day,
    rawRoot,
    runBatch: async () => ({ ok: false, code: 2 }),
    log: silent,
    err: silent,
  })
  assert.equal(missingCli.code, 2)
  assert.equal(missingCli.results.length, 2)
})

test('batch and day help document the commands a routine should call', () => {
  for (const script of ['ingest-batch.mjs', 'ingest-day.mjs']) {
    const result = spawnSync(process.execPath, [path.join(repoRoot, 'scripts', script), '--help'], { encoding: 'utf8' })
    assert.equal(result.status, 0, result.stderr || script)
    assert.match(result.stdout, /Usage:/)
  }
  const batch = spawnSync(process.execPath, [path.join(repoRoot, 'scripts', 'ingest-batch.mjs'), '--help'], { encoding: 'utf8' })
  assert.match(batch.stdout, /--digest raw\/digests\/2026-10-23-frontier-ai\.md\n/)
  assert.match(batch.stdout, /--digest raw\/digests\/2026-10-23-frontier-ai\.md --limit 3/)
  assert.match(batch.stdout, /--retry-failed/)
  const day = spawnSync(process.execPath, [path.join(repoRoot, 'scripts', 'ingest-day.mjs'), '--help'], { encoding: 'utf8' })
  assert.match(day.stdout, /ingest:day -- --date 2026-10-23/)
  assert.match(day.stdout, /2026-10-23 --limit 3/)
})
