---
type: Topic
title: LLM 维护的 wiki
title_en: LLM-maintained wiki
description: 一份由智能体在不可变来源之上持续维护的编译型 Markdown wiki，而不是每次提问都从原始文件重新推导答案。
description_en: A compiled markdown wiki that an agent keeps current over immutable sources, instead of re-deriving answers from raw files on every question.
tags: [llm-wiki, knowledge-base]
sources:
  - id: karpathy-llm-wiki
    resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
    title: LLM Wiki
  - id: building-effective-agents
    resource: https://www.anthropic.com/engineering/building-effective-agents
    title: Building effective agents
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
---

# LLM 维护的 wiki

*LLM-maintained wiki*

本 wiki 是 Karpathy 三层模式中的编译层：不可变的原始输入、由智能体撰写的 Markdown wiki，以及约束智能体如何更新的 schema。[^karpathy-llm-wiki]

This wiki is the compiled layer in Karpathy's three-layer pattern: immutable raw inputs, an agent-written markdown wiki, and a schema that constrains how the agent updates it.[^karpathy-llm-wiki]

## 综合分析 / Synthesis

`wiki/` 是 OKF bundle。文章级 Source 放在 `wiki/sources/articles/`。耐久想法放在 `wiki/topics/`。每日 X 简报留在 `wiki/sources/x-digest/`，归档文章 Source 时不重写它们。页面引用原文 URL 或其他 wiki 页。

`wiki/` is the OKF bundle. Article-level sources live under `wiki/sources/articles/`. Durable ideas live under `wiki/topics/`. Daily X briefs stay in `wiki/sources/x-digest/` and are not rewritten when an article source is filed. Pages cite the original URL or another wiki page.

智能体创建并编辑 wiki 页。一旦写入，它不编辑原始 digest 或文章。当新来源触及已有 Topic 所覆盖的想法时，智能体更新该页，而不是为同一想法再开一页。支撑本页的两个示例来源是 [LLM Wiki](../sources/articles/karpathy-llm-wiki.md) 与 [Building effective agents](../sources/articles/anthropic-building-effective-agents.md)。

The agent creates and edits wiki pages. It does not edit raw digests or articles once they have been written. When a new source bears on an idea that already has a Topic page, the agent updates that page instead of adding a second page for the same idea. The two example sources behind this page are [LLM Wiki](../sources/articles/karpathy-llm-wiki.md) and [Building effective agents](../sources/articles/anthropic-building-effective-agents.md).

## 矛盾与变化 / Contradictions

Karpathy 把 wiki 层交给 LLM，包括一次入库应改动哪些已有页面。[^karpathy-llm-wiki] Anthropic 的智能体文章把这类开放式控制称作 agent，并建议只要路径能事先固定，就用预定义步骤的 workflow。[^building-effective-agents] 两说拉开了距离。一方描述的是自行决定如何归档的维护者；另一方主张在固定路径够用之前，不要交出控制权。

Karpathy assigns the wiki layer to the LLM, including which existing pages an ingest should touch.[^karpathy-llm-wiki] Anthropic's agent post treats that kind of open-ended control as an agent, and recommends a workflow — predefined steps — whenever the path can be fixed in advance.[^building-effective-agents] Those claims pull apart. One describes a maintainer that decides its own filing. The other says not to hand over that control until a fixed path is not enough.

本仓库两边都保留。智能体仍写 wiki，这是 Karpathy 的分层。它可为 Source 与 Topic 采取的步骤列在仓库根目录的 `AGENTS.md` 中，这正是 Anthropic 意义上的 workflow。来源之间的分歧追加在既有 Topic 的本标题下，不以删除旧主张来消解。

This repository keeps both. The agent still writes the wiki, which is Karpathy's split. The steps it may take for Source and Topic pages are listed in the repo-root `AGENTS.md`, which is a workflow in Anthropic's sense. Disagreements between sources are appended under this heading on the existing Topic. They are not resolved by deleting the older claim.

配套页是 [Workflows before agents](./workflows-before-agents.md)。

The companion page is [Workflows before agents](./workflows-before-agents.md).

## 相关 / Related

- 来源：[LLM Wiki](../sources/articles/karpathy-llm-wiki.md)
- 来源：[Building effective agents](../sources/articles/anthropic-building-effective-agents.md)

- Source: [LLM Wiki](../sources/articles/karpathy-llm-wiki.md)
- Source: [Building effective agents](../sources/articles/anthropic-building-effective-agents.md)

[^karpathy-llm-wiki]: LLM Wiki
[^building-effective-agents]: Building effective agents
