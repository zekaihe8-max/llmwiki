import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { validateIngestRecordShape, writeIngestRecord } from './lib/ingest-record.mjs'

test('writeIngestRecord stores outside wiki/ and validates paths', () => {
  const rawRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'raw-ir-'))
  const wikiRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-ir-'))
  fs.mkdirSync(path.join(wikiRoot, 'sources/articles'), { recursive: true })
  fs.mkdirSync(path.join(wikiRoot, 'topics'), { recursive: true })
  fs.writeFileSync(path.join(wikiRoot, 'sources/articles/demo.md'), `---
type: Source
title: 演示
title_en: Demo
description: d
description_en: d
resource: https://example.com/a
sources:
  - id: demo
    resource: https://example.com/a
generated:
  by: t
  at: 2026-10-24T03:00:00Z
---

# 演示

*Demo*

## 摘要 / Summary

- 中文。 / English.

## 相关 / Related

- [主题](../../topics/demo.md)

[^demo]: Demo
`)
  fs.writeFileSync(path.join(wikiRoot, 'topics/demo.md'), `---
type: Topic
title: 主题
title_en: Topic
description: d
description_en: d
sources:
  - id: demo
    resource: https://example.com/a
generated:
  by: t
  at: 2026-10-24T03:00:00Z
---

# 主题

*Topic*

## 综合分析 / Synthesis

中文。 / English.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- [演示](../sources/articles/demo.md)
`)

  const out = writeIngestRecord({
    rawRoot,
    wikiRoot,
    record: {
      slug: 'example-com-a',
      url: 'https://example.com/a',
      source_path: 'sources/articles/demo.md',
      content_hash: 'abc',
    },
    sourceAction: 'create',
    topicsConsulted: ['topics/demo.md'],
    topicActions: [{ path: 'topics/demo.md', action: 'add_evidence', reason: 'new claim' }],
    filesChanged: ['sources/articles/demo.md', 'topics/demo.md'],
    now: () => '2026-10-25T02:00:00.000Z',
  })
  assert.ok(out.path.includes(`${path.sep}state${path.sep}ingest-records${path.sep}`))
  assert.equal(out.record.validation.ok, true)
  assert.ok(!out.path.includes(`${path.sep}wiki${path.sep}`))
  assert.ok(fs.existsSync(path.join(rawRoot, 'state/ingest-records/example-com-a.latest.json')))
})

test('validateIngestRecordShape rejects raw/ in files_changed', () => {
  const wikiRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-ir2-'))
  const result = validateIngestRecordShape({
    wikiRoot,
    sourcePath: null,
    topicActions: [],
    filesChanged: ['raw/articles/x.md'],
  })
  assert.equal(result.ok, false)
  assert.ok(result.errors.some((e) => e.includes('raw/')))
})
