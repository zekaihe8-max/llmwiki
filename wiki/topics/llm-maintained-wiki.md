---
type: Topic
title: LLM-maintained wiki
description: A compiled markdown wiki that an agent keeps current over immutable sources, instead of re-deriving answers from raw files on every question.
tags: [llm-wiki, knowledge-base]
sources:
  - id: karpathy-llm-wiki
    resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
    title: LLM Wiki
  - id: building-effective-agents
    resource: https://www.anthropic.com/engineering/building-effective-agents
    title: Building effective agents
generated:
  by: example-agent/scaffold
  at: 2026-10-24T10:49:00+08:00
---

# LLM-maintained wiki

This wiki is the compiled layer in Karpathy's three-layer pattern: immutable raw inputs, an agent-written markdown wiki, and a schema that constrains how the agent updates it.[^karpathy-llm-wiki]

## Synthesis

`wiki/` is the OKF bundle. Article-level sources live under `wiki/sources/articles/`. Durable ideas live under `wiki/topics/`. Daily X briefs stay in `wiki/sources/x-digest/` and are not rewritten when an article source is filed. Pages cite the original URL or another wiki page.

The agent creates and edits wiki pages. It does not edit raw digests or articles once they have been written. When a new source bears on an idea that already has a Topic page, the agent updates that page instead of adding a second page for the same idea. The two example sources behind this page are [LLM Wiki](../sources/articles/karpathy-llm-wiki.md) and [Building effective agents](../sources/articles/anthropic-building-effective-agents.md).

## Contradictions

Karpathy assigns the wiki layer to the LLM, including which existing pages an ingest should touch.[^karpathy-llm-wiki] Anthropic's agent post treats that kind of open-ended control as an agent, and recommends a workflow — predefined steps — whenever the path can be fixed in advance.[^building-effective-agents] Those claims pull apart. One describes a maintainer that decides its own filing. The other says not to hand over that control until a fixed path is not enough.

This repository keeps both. The agent still writes the wiki, which is Karpathy's split. The steps it may take for Source and Topic pages are listed in the repo-root `AGENTS.md`, which is a workflow in Anthropic's sense. Disagreements between sources are appended under this heading on the existing Topic. They are not resolved by deleting the older claim.

The companion page is [Workflows before agents](./workflows-before-agents.md).

## Related

- Source: [LLM Wiki](../sources/articles/karpathy-llm-wiki.md)
- Source: [Building effective agents](../sources/articles/anthropic-building-effective-agents.md)

[^karpathy-llm-wiki]: LLM Wiki
[^building-effective-agents]: Building effective agents
