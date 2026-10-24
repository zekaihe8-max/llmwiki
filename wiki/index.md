---
title: Home
okf_version: "0.2"
---

# Hezekai Wiki

This is a public wiki compiled from Markdown. Each page is a file under `wiki/`, and the sidebar follows that folder tree.

## Start here

- [Overview](./overview.md) — what the wiki holds and how the pages are arranged.
- [Compiled pages](./concepts/compiled-pages.md) — how a Markdown file becomes a published page.
- [Adding a page](./guides/adding-a-page.md) — where a new page goes so the next build lists it.
- [X digests](./sources/x-digest/index.md) — curated daily briefs from X, with each item linked to the original post.

## Example sources and topics

Scaffold pages for the Source and Topic schema. They are not part of the X digests. The [log](./log.md) records when they were filed.

- [LLM Wiki](./sources/articles/karpathy-llm-wiki.md) — Karpathy's pattern for an LLM-maintained markdown wiki that compounds between immutable raw sources and the reader.
- [Building effective agents](./sources/articles/anthropic-building-effective-agents.md) — Anthropic's December 2024 engineering note that successful systems stay simple and add open-ended agents only when a workflow is not enough.
- [Formal verification with Claude](./sources/articles/anthropic-formal-verification.md) — Anthropic's Frontier Red Team post that Claude, with Theorem Labs, formally verified security properties across more than one hundred real-world open-source libraries in a few weeks.
- [LLM-maintained wiki](./topics/llm-maintained-wiki.md) — a compiled markdown wiki that an agent keeps current over immutable sources, instead of re-deriving answers from raw files on every question.
- [Workflows before agents](./topics/workflows-before-agents.md) — prefer a predefined workflow for a known path, and add an open-ended agent only when that path is not enough.
- [LLM formal verification](./topics/llm-formal-verification.md) — large language models can make formal software verification practical on real-world codebases that were previously too large or too costly for expert-only proof work.
