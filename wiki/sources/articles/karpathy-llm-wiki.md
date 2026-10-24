---
type: Source
title: LLM 维基
title_en: LLM Wiki
description: Karpathy 提出的模式：由 LLM 维护的 markdown 维基，在不可变原始来源与读者之间持续积累知识。
description_en: Karpathy's pattern for an LLM-maintained markdown wiki that compounds between immutable raw sources and the reader.
resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
tags: [llm-wiki, knowledge-base, agents]
sources:
  - id: karpathy-llm-wiki
    resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
    title: LLM Wiki
    author: human:karpathy
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
---

# LLM 维基

*LLM Wiki*

Karpathy 的 gist 描述了一种个人知识库：由 LLM 以 markdown 形式持续维护，而不是每次提问都从原始文件重新推导答案。[^karpathy-llm-wiki] 原文见 <https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f>。

Karpathy's gist describes a personal knowledge base that an LLM maintains as markdown, instead of re-deriving an answer from raw files on every question.[^karpathy-llm-wiki] The original note is at <https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f>.

## 摘要 / Summary

该 gist 将这一模式与 RAG 对照。在 RAG 中，问题之间不会留下累积结果。这里 LLM 只读一遍新来源，把学到的内容归档进相互链接的页面，并持续更新这些页面。人类负责筛选来源与提问；LLM 负责摘要、交叉引用与簿记。[^karpathy-llm-wiki]

The gist contrasts the pattern with RAG. In RAG, nothing accumulates between questions. Here the LLM reads a new source once, files what it learned into interlinked pages, and keeps those pages current. The human curates sources and asks questions. The LLM does the summarizing, cross-referencing, and bookkeeping.[^karpathy-llm-wiki]

架构分为三层。[^karpathy-llm-wiki]

The architecture has three layers.[^karpathy-llm-wiki]

- 原始来源不可变。LLM 只读它们，不修改它们。

  Raw sources are immutable. The LLM reads them and does not modify them.
- 维基是 LLM 拥有的 markdown：摘要、概念、索引与日志。

  The wiki is LLM-owned markdown: summaries, concepts, an index, and a log.
- 一份 schema 文件（`AGENTS.md` 或 `CLAUDE.md`）告诉 agent 如何入库、查询与检查。

  A schema file (`AGENTS.md` or `CLAUDE.md`) tells the agent how to ingest, query, and lint.

入库时，agent 写入摘要、更新索引、修订该来源触及的页面，并追加日志。当新材料与旧主张矛盾时，在页面上标出矛盾，而不是丢掉旧主张。[^karpathy-llm-wiki]

On ingest, the agent writes a summary, updates the index, revises the pages the source touches, and appends the log. When new material contradicts an older claim, the contradiction is flagged on the page rather than dropped.[^karpathy-llm-wiki]

## 相关 / Related

- Topic: [LLM-maintained wiki](../../topics/llm-maintained-wiki.md)
- Topic: [Workflows before agents](../../topics/workflows-before-agents.md)
- Contrast: [Building effective agents](./anthropic-building-effective-agents.md)

[^karpathy-llm-wiki]: LLM Wiki
