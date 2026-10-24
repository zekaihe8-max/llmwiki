---
type: Source
title: LLM Wiki
description: Karpathy's pattern for an LLM-maintained markdown wiki that compounds between immutable raw sources and the reader.
resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
tags: [llm-wiki, knowledge-base, agents]
sources:
  - id: karpathy-llm-wiki
    resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
    title: LLM Wiki
    author: human:karpathy
generated:
  by: example-agent/scaffold
  at: 2026-10-24T10:49:00+08:00
---

# LLM Wiki

Karpathy's gist describes a personal knowledge base that an LLM maintains as markdown, instead of re-deriving an answer from raw files on every question.[^karpathy-llm-wiki] The original note is at <https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f>.

## Summary

The gist contrasts the pattern with RAG. In RAG, nothing accumulates between questions. Here the LLM reads a new source once, files what it learned into interlinked pages, and keeps those pages current. The human curates sources and asks questions. The LLM does the summarizing, cross-referencing, and bookkeeping.[^karpathy-llm-wiki]

The architecture has three layers.[^karpathy-llm-wiki]

- Raw sources are immutable. The LLM reads them and does not modify them.
- The wiki is LLM-owned markdown: summaries, concepts, an index, and a log.
- A schema file (`AGENTS.md` or `CLAUDE.md`) tells the agent how to ingest, query, and lint.

On ingest, the agent writes a summary, updates the index, revises the pages the source touches, and appends the log. When new material contradicts an older claim, the contradiction is flagged on the page rather than dropped.[^karpathy-llm-wiki]

## Related

- Topic: [LLM-maintained wiki](../../topics/llm-maintained-wiki.md)
- Topic: [Workflows before agents](../../topics/workflows-before-agents.md)
- Contrast: [Building effective agents](./anthropic-building-effective-agents.md)

[^karpathy-llm-wiki]: LLM Wiki
