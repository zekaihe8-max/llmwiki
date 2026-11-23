---
type: Source
title: "别搞多 Agent：上下文工程才是可靠智能体的关键"
title_en: "Don't Build Multi-Agents: Context Engineering Is Key to Reliable Agents"
description: "Cognition 联合创始人阐述上下文工程两大原则，指出多 Agent 架构因上下文共享不足导致决策冲突，主张单线程或压缩上下文方案。"
description_en: "Cognition co-founder lays out two Context Engineering principles, showing multi-agent architectures fail due to insufficient context sharing and conflicting implicit decisions, advocating single-threaded or compressed-context designs."
resource: https://cognition.com/blog/dont-build-multi-agents
tags: [agents, context-engineering, multi-agent, architecture, reliability]
sources:
  - id: cognition-dont-build-multi-agents-2025-06-12
    resource: https://cognition.com/blog/dont-build-multi-agents
    title: "Don't Build Multi-Agents: Context Engineering Is Key to Reliable Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:27:44+08:00
---

# 别搞多 Agent：上下文工程才是可靠智能体的关键

*Don't Build Multi-Agents: Context Engineering Is Key to Reliable Agents*

帖文称，当前主流的多 Agent 框架（如 OpenAI Swarm、Microsoft AutoGen）将任务拆分给并行子 Agent，却只传递片段上下文，导致子 Agent 基于冲突假设行动，最终产出不一致。作者提出两条「上下文工程」铁律：1) 必须共享完整 Agent 轨迹而非单条消息；2) 行动隐含决策，冲突决策必然导致坏结果。最稳妥的架构是单线程线性 Agent；若任务超长，可引入专用压缩模型把历史折叠为关键决策与事件，但这需要大量工程投入。Claude Code 的子 Agent 设计即遵循此思路：仅用于问答式调查，不并行、不写代码，避免上下文分裂。[^cognition-dont-build-multi-agents-2025-06-12]

The post argues that popular multi-agent frameworks (OpenAI Swarm, Microsoft AutoGen) split tasks among parallel sub-agents but pass only fragmented context, causing sub-agents to act on conflicting assumptions and produce inconsistent results. The author states two Context Engineering iron laws: 1) share full agent traces, not just individual messages; 2) actions carry implicit decisions, and conflicting decisions yield bad outcomes. The safest architecture is a single-threaded linear agent; for truly long tasks, a dedicated compression model can fold history into key decisions and events, though this requires heavy engineering investment. Claude Code's sub-agent design follows this logic: used only for Q&A-style investigation, never running in parallel or writing code, thus avoiding context fragmentation.[^cognition-dont-build-multi-agents-2025-06-12]

## 摘要 / Summary

- 文章提出两条上下文工程核心原则：共享完整 Agent 轨迹；行动隐含决策，冲突决策导致坏结果。[^cognition-dont-build-multi-agents-2025-06-12]
- The article proposes two core Context Engineering principles: share full agent traces; actions carry implicit decisions, and conflicting decisions cause bad results.[^cognition-dont-build-multi-agents-2025-06-12]
- 作者批评 OpenAI Swarm 与 Microsoft AutoGen 等多 Agent 库鼓励的并行子 Agent 架构脆弱，因子 Agent 间无法看到彼此行动导致风格与假设不一致。[^cognition-dont-build-multi-agents-2025-06-12]
- The author criticizes multi-agent libraries like OpenAI Swarm and Microsoft AutoGen for encouraging fragile parallel sub-agent architectures, where sub-agents cannot see each other's actions, leading to inconsistent styles and assumptions.[^cognition-dont-build-multi-agents-2025-06-12]
- 最可靠的默认架构是单线程线性 Agent，上下文天然连续；超长任务可引入专用压缩模型将历史折叠为关键决策与事件。[^cognition-dont-build-multi-agents-2025-06-12]
- The most reliable default architecture is a single-threaded linear agent with naturally continuous context; for ultra-long tasks, a dedicated compression model can fold history into key decisions and events.[^cognition-dont-build-multi-agents-2025-06-12]
- Claude Code 子 Agent 设计印证该思路：仅用于明确问答式调查，不并行、不写代码，避免上下文分裂与决策冲突。[^cognition-dont-build-multi-agents-2025-06-12]
- Claude Code's sub-agent design validates this approach: used only for well-defined Q&A investigation, never running in parallel or writing code, thus avoiding context fragmentation and decision conflicts.[^cognition-dont-build-multi-agents-2025-06-12]
- 早期编程 Agent 常用「编辑应用模型」让小模型按大模型的 Markdown 说明改写整文件，但因指令歧义常出错；现更倾向单模型一次性完成决策与应用。[^cognition-dont-build-multi-agents-2025-06-12]
- Early coding agents often used an 'edit apply model' where a small model rewrote entire files per a large model's markdown instructions, but frequent errors arose from instruction ambiguities; now a single model doing both decision and application in one step is preferred.[^cognition-dont-build-multi-agents-2025-06-12]
- 作者认为多 Agent 协作在 2025 年仍不可靠，跨 Agent 上下文传递难题短期内无专门攻关，待单线程 Agent 与人类沟通能力提升后自然解锁并行。[^cognition-dont-build-multi-agents-2025-06-12]
- The author believes multi-agent collaboration remains unreliable in 2025, with no dedicated effort solving the cross-agent context-passing problem; parallelism will unlock naturally once single-threaded agents improve at human communication.[^cognition-dont-build-multi-agents-2025-06-12]

## 相关 / Related

- 原文：[链接](https://cognition.com/blog/dont-build-multi-agents)。 / Original: [link](https://cognition.com/blog/dont-build-multi-agents).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)

[^cognition-dont-build-multi-agents-2025-06-12]: Don't Build Multi-Agents: Context Engineering Is Key to Reliable Agents
