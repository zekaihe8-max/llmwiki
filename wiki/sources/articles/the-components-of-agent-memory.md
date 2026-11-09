---
type: Source
title: "智能体记忆的组成部分"
title_en: "The components of agent memory"
description: "Anthropic 探讨 AI 智能体如何通过记忆笔记、离线“梦境”整理与对未来需求的预测，在会话间保留并校正经验知识。"
description_en: "Anthropic explores how AI agents retain and correct experiential knowledge across sessions through memory notes, offline “dreaming” consolidation, and predictions of future needs."
resource: https://www.anthropic.com/research/components-of-agent-memory
tags: [agents, agent-memory, context-engineering]
sources:
  - id: anthropic-components-of-agent-memory
    resource: https://www.anthropic.com/research/components-of-agent-memory
    title: "The components of agent memory"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T08:00:25+08:00
---

# 智能体记忆的组成部分

*The components of agent memory*

「帖文称」Anthropic 将智能体记忆定义为 Claude 从经验中获得、保存于可读上下文并在会话间保留的知识，明确排除模型权重更新、单次对话内学习和上下文压缩。文章把记忆比作人脑海马体与新皮层的分工，并介绍了“梦境”（dreaming）等离线整理机制，以及在 CL-Bench 数据库任务和《宝可梦红》游戏中的评估，说明模型如何判断什么值得记住、如何修正错误记忆。[^anthropic-components-of-agent-memory]

The post defines agent memory as experiential knowledge Claude retains across sessions as readable context, excluding weight updates, in-context learning, and context compaction. It likens memory to the hippocampal–neocortical division in human brains, introduces dream-like offline consolidation, and evaluates memory through CL-Bench database tasks and Pokémon Red gameplay, showing how models judge salience and correct mistaken notes.[^anthropic-components-of-agent-memory]

## 摘要 / Summary

- 文章将智能体记忆定义为 Claude 从用户交互和任务中获得、保存于可读上下文并在会话间保留的知识，明确排除权重变更、情境内学习和上下文压缩。 / The article defines agent memory as knowledge Claude gains from user interactions and tasks, saved as readable context retained between sessions, explicitly excluding weight changes, in-context learning, and context compaction.[^anthropic-components-of-agent-memory]
- 人脑中海马体负责即时编码，新皮层存储长期知识；智能体记忆可类似分工，在会话间通过日志、记忆笔记和“梦境”离线整理来组织记忆。 / Like the human brain where the hippocampus encodes experiences immediately and the neocortex stores long-term knowledge, agent memory can organize records through session logs, memory notes, and offline “dreaming” between sessions.[^anthropic-components-of-agent-memory]
- 在 CL-Bench 1.0 数据库任务中，Claude Opus 5 等模型通过记忆目录将失败转化为已验证规则并闭环学习，而较弱模型如 Sonnet 4.6 往往只产生未经验证的猜测。 / In CL-Bench 1.0 database tasks, models such as Claude Opus 5 turned failures into validated rules and closed the learning loop via a persistent memory directory, while weaker models like Sonnet 4.6 often produced only untested guesses.[^anthropic-components-of-agent-memory]
- 《宝可梦红》测试显示，Claude Fable 5 只写了九个记忆文件并获得四个徽章，而 Sonnet 3.7 写了 413 个文件却只获一个徽章，说明判断显著性比盲目存档更重要。 / In Pokémon Red testing, Claude Fable 5 wrote only nine memory files and earned four badges, while Sonnet 3.7 wrote 413 files and earned one badge, showing that judging salience matters more than indiscriminate archiving.[^anthropic-components-of-agent-memory]
- “梦境”机制可让 Claude 将记忆笔记与原始会话记录核对，从而发现并修正错误，例如把 Mt. Moon 入口附近精灵中心位置记错后，通过梦境纠正重新进入洞穴。 / The “dreaming” mechanism lets Claude check memory notes against original session transcripts to detect and fix errors, such as correcting a mistaken note about the PokéCenter location near Mt. Moon’s entrance.[^anthropic-components-of-agent-memory]
- 对更强模型，只告诉其记忆文件夹可用而不设固定写入规则效果更好；对旧模型，提示其在回答前读取记忆文件可使基准分数近乎翻倍。 / For stronger models, simply noting that a memory folder is available works better than imposing fixed writing rules; for older models, prompting them to read memory files before answering nearly doubled benchmark scores.[^anthropic-components-of-agent-memory]

## 相关 / Related

- 原文：[链接](https://www.anthropic.com/research/components-of-agent-memory)。 / Original: [link](https://www.anthropic.com/research/components-of-agent-memory).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^anthropic-components-of-agent-memory]: The components of agent memory
