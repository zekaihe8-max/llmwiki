import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { lintFiling, lintPage } from './lint-okf.mjs'

function tempWiki() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-bi-'))
  fs.mkdirSync(path.join(root, 'sources/articles'), { recursive: true })
  fs.mkdirSync(path.join(root, 'topics'), { recursive: true })
  return root
}

const goodSource = (url = 'https://example.com/a') => `---
type: Source
title: 演示
title_en: Demo
description: 中文概述。
description_en: English summary.
resource: ${url}
sources:
  - id: demo
    resource: ${url}
generated:
  by: test
  at: 2026-10-24T03:00:00Z
---

# 演示

*Demo*

中文导语。[^demo]

English lead.[^demo]

## 摘要 / Summary

- 中文要点。[^demo]
- English point.[^demo]

## 相关 / Related

- Topic: [主题](../../topics/demo.md)

[^demo]: Demo
`

const goodTopic = (url = 'https://example.com/a') => `---
type: Topic
title: 主题
title_en: Topic
description: 中文。
description_en: English.
sources:
  - id: demo
    resource: ${url}
generated:
  by: test
  at: 2026-10-24T03:00:00Z
---

# 主题

*Topic*

## 综合分析 / Synthesis

中文综合。 / English synthesis.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- [演示](../sources/articles/demo.md)

[^demo]: Demo
`

test('bilingual body structure passes for paired Source/Topic', () => {
  const wiki = tempWiki()
  fs.writeFileSync(path.join(wiki, 'sources/articles/demo.md'), goodSource())
  fs.writeFileSync(path.join(wiki, 'topics/demo.md'), goodTopic())
  const src = lintPage(path.join(wiki, 'sources/articles/demo.md'), wiki, { bilingual: true })
  const topic = lintPage(path.join(wiki, 'topics/demo.md'), wiki, { bilingual: true })
  assert.deepEqual(src.filter((line) => line.includes('bilingual')), [])
  assert.deepEqual(topic.filter((line) => line.includes('bilingual')), [])
})

test('Summary with only Chinese fails paired-body check', () => {
  const wiki = tempWiki()
  const onlyZh = `---
type: Source
title: 演示
title_en: Demo
description: 中文概述。
description_en: English summary.
resource: https://example.com/a
sources:
  - id: a1
    resource: https://example.com/a
generated:
  by: test
  at: 2026-10-24T03:00:00Z
---

# 演示

*Demo*

## 摘要 / Summary

只有中文要点，没有对应英文。

## 相关 / Related

- [主题](../../topics/demo.md)

[^a1]: A
`
  fs.writeFileSync(path.join(wiki, 'sources/articles/demo.md'), onlyZh)
  fs.writeFileSync(path.join(wiki, 'topics/demo.md'), goodTopic())
  const findings = lintPage(path.join(wiki, 'sources/articles/demo.md'), wiki, { bilingual: true })
  assert.ok(findings.some((line) => line.includes('摘要 / Summary') && line.includes('lacks ZH/EN')))
})

test('missing italic English title fails bilingual body check', () => {
  const wiki = tempWiki()
  const noItalic = goodSource().replace('*Demo*\n\n', '')
  fs.writeFileSync(path.join(wiki, 'sources/articles/demo.md'), noItalic)
  fs.writeFileSync(path.join(wiki, 'topics/demo.md'), goodTopic())
  const findings = lintPage(path.join(wiki, 'sources/articles/demo.md'), wiki, { bilingual: true })
  assert.ok(findings.some((line) => line.includes('italic English title')))
})

test('illegal YAML frontmatter is an okf finding, not a crash', () => {
  const wiki = tempWiki()
  const bad = `---
type: Source
title: 演示
description_en: English summary: with colon
---

# 演示
`
  fs.writeFileSync(path.join(wiki, 'sources/articles/bad.md'), bad)
  const findings = lintPage(path.join(wiki, 'sources/articles/bad.md'), wiki, { bilingual: false })
  assert.ok(findings.some((line) => line.startsWith('[okf]') && line.includes('invalid YAML')))
})

test('lintFiling requires bilingual on Source and linked Topics', () => {
  const wiki = tempWiki()
  fs.writeFileSync(path.join(wiki, 'sources/articles/demo.md'), goodSource())
  fs.writeFileSync(path.join(wiki, 'topics/demo.md'), goodTopic())
  fs.writeFileSync(path.join(wiki, 'index.md'), '---\nokf_version: "0.2"\n---\n\n# Home\n\n- [demo](./sources/articles/demo.md)\n')
  fs.writeFileSync(path.join(wiki, 'log.md'), '## 2026-10-24\n\n* **创建 / Creation**: demo.md\n')
  const errors = lintFiling({
    wikiRoot: wiki,
    sourcePath: 'sources/articles/demo.md',
    url: 'https://example.com/a',
  })
  assert.equal(errors.length, 0, errors.join('\n'))
})

test('Chinese-only body with Cloudflare/API/URL must not pass as bilingual', () => {
  const wiki = tempWiki()
  const fakeEn = `---
type: Source
title: 演示
title_en: Demo
description: 中文概述。
description_en: English summary.
resource: https://example.com/a
sources:
  - id: demo
    resource: https://example.com/a
generated:
  by: test
  at: 2026-10-24T03:00:00Z
---

# 演示

*Demo*

## 摘要 / Summary

只有中文，顺便提到 Cloudflare Workers API 和 https://developers.cloudflare.com/workers/ 。[^demo]

## 相关 / Related

- [主题](../../topics/demo.md)

[^demo]: Demo
`
  fs.writeFileSync(path.join(wiki, 'sources/articles/demo.md'), fakeEn)
  fs.writeFileSync(path.join(wiki, 'topics/demo.md'), goodTopic())
  const findings = lintPage(path.join(wiki, 'sources/articles/demo.md'), wiki, { bilingual: true })
  assert.ok(
    findings.some((line) => line.includes('摘要 / Summary') && line.includes('lacks ZH/EN')),
    findings.join('\n'),
  )
})

test('correct paired body with shared code block passes', () => {
  const wiki = tempWiki()
  const withCode = `---
type: Source
title: 演示
title_en: Demo
description: 中文概述。
description_en: English summary.
resource: https://example.com/a
sources:
  - id: demo
    resource: https://example.com/a
generated:
  by: test
  at: 2026-10-24T03:00:00Z
---

# 演示

*Demo*

## 摘要 / Summary

使用 Workers 绑定对象。[^demo]

Use Workers to bind the object.[^demo]

\`\`\`js
export class Counter { }
\`\`\`

## 相关 / Related

- [主题](../../topics/demo.md)

[^demo]: Demo
`
  fs.writeFileSync(path.join(wiki, 'sources/articles/demo.md'), withCode)
  fs.writeFileSync(path.join(wiki, 'topics/demo.md'), goodTopic())
  const findings = lintPage(path.join(wiki, 'sources/articles/demo.md'), wiki, { bilingual: true })
  assert.deepEqual(findings.filter((line) => line.includes('bilingual')), [], findings.join('\n'))
})
