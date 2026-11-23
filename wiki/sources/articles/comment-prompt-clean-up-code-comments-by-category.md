---
type: Source
title: "注释提示词：按类型清理代码注释"
title_en: "Comment Prompt: Clean Up Code Comments by Category"
description: "一个用于分类并处理代码注释的长提示词，主张删除冗余注释并建立 lint 规则与技能。"
description_en: "A long prompt for categorizing and handling code comments, advocating deletion of redundant comments and establishing lint rules and skills."
resource: https://x.com/mattpocockuk/status/2123798388227403983
tags: [comment-prompt, code-quality, agent-skill, lint]
sources:
  - id: c77b0710229b2168
    resource: https://x.com/mattpocockuk/status/2123798388227403983
    title: "Comment Prompt: Clean Up Code Comments by Category"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T08:22:36+08:00
---

# 注释提示词：按类型清理代码注释

*Comment Prompt: Clean Up Code Comments by Category*

「帖文称」Matt Pocock 发布了一条“今日提示词”，要求对代码库中的每条注释进行分类：同义反复、借口、过时、决策记录。针对不同类别，分别建议删除、删除并创建 Issue、移至 ADR；随后为该代码库创建禁止注释的 lint 规则、采用 ratchet 方式推进、添加 /delete-comment Skill，并估算删除注释后可减少的代码行数。[^c77b0710229b2168]

The post says Matt Pocock shared a “prompt of the day” that asks to categorize every code comment as Tautology, Excuse, Stale, or Decision Record, then take corresponding actions such as deleting comments, filing issues, or moving records to ADRs. It also proposes adding a comment-banning lint rule, using a ratchet approach, creating a /delete-comment skill, and estimating lines of code removed.[^c77b0710229b2168]

## 摘要 / Summary

- 提示词要求把注释分为四类：同义反复、借口、过时、决策记录。[^c77b0710229b2168]
- The prompt asks to classify each comment into Tautology, Excuse, Stale, or Decision Record.[^c77b0710229b2168]
- 同义反复和过时注释应直接删除；借口注释应删除并为 hacky 实现创建 Issue。[^c77b0710229b2168]
- Tautology and Stale comments should be deleted; Excuse comments should be deleted and an issue filed to fix the hack.[^c77b0710229b2168]
- 决策记录注释应移入架构决策记录（ADR）。[^c77b0710229b2168]
- Decision Record comments should be moved into an ADR.[^c77b0710229b2168]
- 建议为代码库创建禁止注释的 lint 规则，并采用 ratchet 方式逐步推进。[^c77b0710229b2168]
- It recommends creating a lint rule banning comments and advancing with a ratchet approach.[^c77b0710229b2168]
- 文中还提到添加 /delete-comment Skill，并估算删除所有注释后可减少的代码行数。[^c77b0710229b2168]
- It also mentions adding a /delete-comment skill and estimating how many lines of code will be shed.[^c77b0710229b2168]

## 相关 / Related

- 原文：[链接](https://x.com/mattpocockuk/status/2123798388227403983)。 / Original: [link](https://x.com/mattpocockuk/status/2123798388227403983).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)
- Topic: [AI 代码与屎山上线双标 / AI code vs messy-code shipping double standard](../../topics/ai-code-vs-messy-code-double-standard.md)

[^c77b0710229b2168]: Comment Prompt: Clean Up Code Comments by Category
