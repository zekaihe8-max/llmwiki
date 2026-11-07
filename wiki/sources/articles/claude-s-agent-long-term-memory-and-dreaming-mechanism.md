---
type: Source
title: "Claude 的 Agent 长期记忆与「做梦」机制"
title_en: "Claude's Agent Long-Term Memory and \"Dreaming\" Mechanism"
description: "Anthropic 研究揭示 Claude 如何通过四层记忆和任务间隙的「做梦」整理经验、纠错并建立 Wiki。"
description_en: "Anthropic research reveals how Claude organizes experience, corrects errors, and builds a Wiki through four-layer memory and \"dreaming\" between tasks."
resource: https://x.com/0xLogicrw/status/2118930575298093232
tags: [agents, memory, claude, wiki]
sources:
  - id: 06db19a10c0909dc
    resource: https://x.com/0xLogicrw/status/2118930575298093232
    title: "Claude's Agent Long-Term Memory and \"Dreaming\" Mechanism"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-07T20:04:29+08:00
---

# Claude 的 Agent 长期记忆与「做梦」机制

*Claude's Agent Long-Term Memory and "Dreaming" Mechanism*

帖文称，Anthropic 发布关于 Agent 长期记忆的研究，介绍 Claude 的「做梦」机制：Agent 在持续执行任务后积累大量对话、操作记录和笔记，通过四层记忆（完整历史记录、重要笔记、Wiki 知识库、启动索引）在任务间隙回顾历史、纠正错误并将规律整理进 Wiki，下次启动仅加载索引并按需查找知识。[^06db19a10c0909dc]

The post says Anthropic released research on Agent long-term memory, introducing Claude's "Dreaming" mechanism: after continuously executing tasks, the Agent accumulates conversations, operation records, and notes; through four memory layers (full history, important notes, Wiki knowledge base, startup index), it reviews history, corrects errors, and organizes patterns into the Wiki during task intervals, loading only the index at next startup and looking up knowledge on demand.[^06db19a10c0909dc]

## 摘要 / Summary

- 记忆分四层：完整历史记录、主动保存的重要笔记、关联分散经验的 Wiki 知识库、每次启动加载的简短索引。 / Memory is divided into four layers: complete history, actively saved important notes, Wiki knowledge base linking scattered experiences, and a short index loaded at each startup.[^06db19a10c0909dc]
- 实验使用约 35 万份 Stainless 内部文件、共 4.2 亿 Token，让 Opus 5 经过 128 轮会话阅读文件、建立 Wiki、合并重复内容并核实事实。 / The experiment used about 350,000 Stainless internal files totaling 420M tokens, having Opus 5 go through 128 rounds of sessions to read files, build a Wiki, merge duplicates, and verify facts.[^06db19a10c0909dc]
- 在 25 道问题中，单独搜索得分 53%，加入逐步完善的 Wiki 后达到 61%，每题平均节省约 2 万 Token；综合多份合同的问题中 Wiki 优势尤为明显。 / On 25 questions, search alone scored 53%, rising to 61% with a progressively refined Wiki, saving about 20k tokens per question on average; the Wiki advantage is especially clear for questions requiring synthesis across multiple contracts.[^06db19a10c0909dc]
- 《宝可梦 红》实验中，旧版 Sonnet 3.7 记录 413 份记忆文件仅获一枚徽章，新版 Fable 5 仅保留 10 份文件却拿到四枚徽章，更善于区分值得保存的策略与可随时重查的游戏状态。 / In the Pokémon Red experiment, old Sonnet 3.7 recorded 413 memory files and won only one badge, while new Fable 5 kept only 10 files yet won four badges, being better at distinguishing strategies worth saving from game states that can be rechecked anytime.[^06db19a10c0909dc]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2118930575298093232)。 / Original: [link](https://x.com/0xLogicrw/status/2118930575298093232).
- Topic: [LLM 维护的 wiki / LLM-maintained wiki](../../topics/llm-maintained-wiki.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^06db19a10c0909dc]: Claude's Agent Long-Term Memory and "Dreaming" Mechanism
