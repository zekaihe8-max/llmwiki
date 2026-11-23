---
type: Source
title: "多 Agent 到底怎么用才对"
title_en: "How to Use Multi-Agent Systems Correctly"
description: "帖文引用 Cognition《Don't Build Multi-Agents》，主张共享完整执行轨迹、避免并行决策冲突，优先单线程上下文连续性而非硬上多 Agent。"
description_en: "The post cites Cognition's “Don't Build Multi-Agents,” advocating full execution-trace sharing, avoiding parallel decision conflicts, and preferring single-threaded context continuity over forcing multi-agent."
resource: https://x.com/xiaomovps/status/2124820080215441660
tags: [agents, multi-agent, context-engineering, workflow]
sources:
  - id: xiaomovps-multi-agent-usage
    resource: https://x.com/xiaomovps/status/2124820080215441660
    title: "How to Use Multi-Agent Systems Correctly"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:19:46+08:00
---

# 多 Agent 到底怎么用才对

*How to Use Multi-Agent Systems Correctly*

「帖文称」当下很多时候都在推崇多 Agent 去干活，但实际完成效果常常一般甚至不堪入目。作者转发了 Devin 团队（Cognition）的《Don't Build Multi-Agents》，并认同其三个核心观点：共享上下文必须共享完整执行轨迹而不只是几句消息；每个动作都隐含决策，并行干活极易互相打架；宁可用单线程保持上下文连续，也别硬上多 Agent。文中还提到 Claude Code 的子 Agent 用法很克制，只用来查资料回答问题，绝不并行写代码；作者认为现阶段 Agent 还没有找到比较好的多 Agent 处理方案。[^xiaomovps-multi-agent-usage]

The post says multi-agent is widely promoted but often delivers mediocre or unacceptable results. The author endorses Cognition's “Don't Build Multi-Agents”: shared context must include full execution traces, not just messages; every action implies decisions, so parallel work easily conflicts; and single-threaded context continuity is preferable to forcing multi-agent. It also notes Claude Code uses sub-agents only for lookup/QA, never parallel coding, and concludes that agents have not yet found a good multi-agent solution.[^xiaomovps-multi-agent-usage]

## 摘要 / Summary

- 「帖文称」当下很多时候都在推崇多 Agent 去干活，但实际完成的效果会很一般，甚至是不堪入目。[^xiaomovps-multi-agent-usage]
- The post says multi-agent is widely promoted for getting work done, but actual results are often mediocre or unacceptable.[^xiaomovps-multi-agent-usage]
- Cognition《Don't Build Multi-Agents》提出共享上下文必须共享完整的执行轨迹，而不只是几句消息，否则子 Agent 理解跑偏。[^xiaomovps-multi-agent-usage]
- Cognition's “Don't Build Multi-Agents” argues shared context must include full execution traces, not just a few messages, otherwise sub-agents diverge in understanding.[^xiaomovps-multi-agent-usage]
- 每个动作都隐含决策，并行干活极易互相打架；拆分 Flappy Bird 做背景和小鸟会导致画风和逻辑全是冲突。[^xiaomovps-multi-agent-usage]
- Every action implies decisions, so parallel work easily conflicts; splitting Flappy Bird into background and bird agents causes style and logic clashes.[^xiaomovps-multi-agent-usage]
- 宁可用单线程保持上下文连续，上下文撑爆了再专门做历史压缩；Claude Code 子 Agent 只用来查资料回答问题，绝不并行写代码。[^xiaomovps-multi-agent-usage]
- Prefer single-threaded context continuity and compress history only when context overflows; Claude Code sub-agents are used only for lookup/QA, never parallel coding.[^xiaomovps-multi-agent-usage]
- 作者认为现阶段 Agent 还没有找到比较好的多 Agent 处理方案。[^xiaomovps-multi-agent-usage]
- The author believes agents have not yet found a good multi-agent processing solution.[^xiaomovps-multi-agent-usage]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2124820080215441660)。 / Original: [link](https://x.com/xiaomovps/status/2124820080215441660).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^xiaomovps-multi-agent-usage]: How to Use Multi-Agent Systems Correctly
