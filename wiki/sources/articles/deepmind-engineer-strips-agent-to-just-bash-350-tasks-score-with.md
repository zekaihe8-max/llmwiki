---
type: Source
title: "DeepMind 工程师把 agent 删到只剩 Bash：350 任务分差不足 6 分，成本近乎减半"
title_en: "DeepMind Engineer Strips Agent to Just Bash: 350+ Tasks Score Within 6 Points, Cost Nearly Halved"
description: "DeepMind 工程师 Philipp Schmid 将编程 agent 从 16 个工具精简为仅 Bash 加看图工具，系统提示词从 1.24 万 token 降至 574，350 多个任务得分差距不足 6 分，但成本差近 2.3 倍。"
description_en: "DeepMind engineer Philipp Schmid stripped his coding agent from 16 tools down to Bash plus an image viewer, cutting system prompt from 12.4k to 574 tokens; 350+ tasks scored within 6 points while costs differed by up to 2.3x."
resource: https://x.com/FinanceYF5/status/2121777669721543038
tags: [agents, deepmind, bash, token-efficiency, coding-agent, harness]
sources:
  - id: 2a12b5b85a3055bd
    resource: https://x.com/FinanceYF5/status/2121777669721543038
    title: "DeepMind Engineer Strips Agent to Just Bash: 350+ Tasks Score Within 6 Points, Cost Nearly Halved"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:19:30+08:00
---

# DeepMind 工程师把 agent 删到只剩 Bash：350 任务分差不足 6 分，成本近乎减半

*DeepMind Engineer Strips Agent to Just Bash: 350+ Tasks Score Within 6 Points, Cost Nearly Halved*

帖文称，Google DeepMind 技术员工 Philipp Schmid 在 AIE CODE 2026 上分享其每半年从零重写编程 agent 的惯例，此次把 16 个工具删到只剩 Bash 和 view_media，系统提示词加工具定义从 1.24 万 token 缩到 574 token。在约 350 个编程、终端和办公任务上，四套外壳使用同一 Gemini 4 Argon 模型，得分在 69.4% 到 74.9% 之间，差距不足 6 分；但最轻外壳每任务 2.33 美元、缓存命中率 89%，最重外壳每任务 5.33 美元、缓存命中率 72%，成本差近 2.3 倍。[^2a12b5b85a3055bd]

The post says Google DeepMind MTS Philipp Schmid shared at AIE CODE 2026 his habit of rewriting his coding agent from scratch every six months; this time he cut 16 tools down to only Bash and view_media, shrinking system prompt plus tool definitions from 12,400 to 574 tokens. On about 350 programming, terminal, and office tasks, four shells using the same Gemini 4 Argon model scored between 69.4% and 74.9%, a gap under 6 points; but the lightest shell cost $2.33 per task with 89% cache hit rate, while the heaviest cost $5.33 with 72% cache hit rate, a cost gap of nearly 2.3x.[^2a12b5b85a3055bd]

## 摘要 / Summary

- Philipp Schmid（Google DeepMind MTS，X: @_philschmid）在 AIE CODE 2026 演讲中称，他每半年从零重写一次编程 agent，此次将 16 个工具删至仅保留 Bash 和 view_media，系统提示词加工具定义从 1.24 万 token 降到 574 token。[^2a12b5b85a3055bd]
- Philipp Schmid (Google DeepMind MTS, X: @_philschmid) said at AIE CODE 2026 that he rewrites his coding agent from scratch every six months; this time he cut 16 tools down to only Bash and view_media, reducing system prompt plus tool definitions from 12,400 to 574 tokens.[^2a12b5b85a3055bd]
- 在约 350 个编程、终端和办公任务上，四套 agent 外壳使用同一 Gemini 4 Argon 模型，得分区间为 69.4% 到 74.9%，差距不足 6 分，帖文称这可能是噪声。[^2a12b5b85a3055bd]
- On about 350 programming, terminal, and office tasks, four agent shells using the same Gemini 4 Argon model scored between 69.4% and 74.9%, a gap under 6 points; the post says this may be noise.[^2a12b5b85a3055bd]
- 最轻外壳（Bash + 看图）每任务 382 万 token、2.33 美元、缓存命中率 89%；最重外壳每任务 530 万 token、5.33 美元、缓存命中率 72%，成本差近 2.3 倍。[^2a12b5b85a3055bd]
- The lightest shell (Bash + image viewer) used 3.82M tokens, $2.33, and 89% cache hit rate per task; the heaviest used 5.30M tokens, $5.33, and 72% cache hit rate, a cost gap of nearly 2.3x.[^2a12b5b85a3055bd]
- 更强模型受益更大：Gemini 4 Carbon 在只用 Bash 时比默认工具少用 1.4 到 3.0 倍 token，而半年前的 3.5 Flash 仅 0.95 到 1.7 倍；Carbon 平均每次 Bash 调用串 2.2 到 3.7 条命令，Flash 仅 1.3 到 1.8 条。[^2a12b5b85a3055bd]
- Stronger models benefit more: Gemini 4 Carbon used 1.4x to 3.0x fewer tokens with Bash only versus default tools, while older 3.5 Flash only 0.95x to 1.7x; Carbon averaged 2.2 to 3.7 commands per Bash call, Flash only 1.3 to 1.8.[^2a12b5b85a3055bd]
- 演讲建议开发者在模型替你删之前自己先删，给模型一台电脑而不是一个工具箱，并把 token 效率、调用次数、缓存命中率和美元成本与得分一并评估。[^2a12b5b85a3055bd]
- The talk advises developers to delete tools themselves before models do, give models a computer rather than a toolbox, and evaluate token efficiency, call count, cache hit rate, and dollar cost alongside scores.[^2a12b5b85a3055bd]

## 相关 / Related

- 原文：[链接](https://x.com/FinanceYF5/status/2121777669721543038)。 / Original: [link](https://x.com/FinanceYF5/status/2121777669721543038).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^2a12b5b85a3055bd]: DeepMind Engineer Strips Agent to Just Bash: 350+ Tasks Score Within 6 Points, Cost Nearly Halved
