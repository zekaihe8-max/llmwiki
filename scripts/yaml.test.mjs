import assert from 'node:assert/strict'
import test from 'node:test'
import { parseFrontmatter, parseSimpleYaml, YamlFrontmatterError } from './lib/yaml.mjs'

test('parseFrontmatter returns null without fence', () => {
  assert.equal(parseFrontmatter('# Hello\n'), null)
})

test('parseFrontmatter accepts quoted colon in description_en', () => {
  const md = `---
type: Source
title: 标题
description_en: "English summary: with colon"
generated:
  by: test
  at: 2026-10-24T03:00:00Z
---

# 标题
`
  const parsed = parseFrontmatter(md)
  assert.equal(parsed.data.description_en, 'English summary: with colon')
  assert.match(parsed.body, /# 标题/)
})

test('unquoted colon in plain scalar fails (VitePress/js-yaml parity)', () => {
  const md = `---
type: Source
description_en: English summary: with colon
---

# x
`
  assert.throws(() => parseFrontmatter(md), (err) => {
    assert.ok(err instanceof YamlFrontmatterError)
    assert.match(err.message, /invalid YAML/)
    return true
  })
})

test('unterminated flow collection fails', () => {
  assert.throws(() => parseSimpleYaml('tags: [a, b'), YamlFrontmatterError)
})

test('nested sources list parses', () => {
  const data = parseSimpleYaml(`sources:
  - id: demo
    resource: https://example.com/a
`)
  assert.deepEqual(data.sources, [{ id: 'demo', resource: 'https://example.com/a' }])
})

test('non-mapping frontmatter fails', () => {
  assert.throws(() => parseFrontmatter('---\n- just\n- a list\n---\n\n# x\n'), YamlFrontmatterError)
})
