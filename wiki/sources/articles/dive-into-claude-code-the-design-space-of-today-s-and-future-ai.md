---
type: Source
title: "深入 Claude Code：当下与未来 AI Agent 系统的设计空间"
title_en: "Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems"
description: "论文通过分析 Claude Code 源码并对比 OpenClaw 与 Hermes Agent，揭示 AI Agent 系统的核心架构、五大价值驱动、十三条设计原则及六大未来设计方向。"
description_en: "The paper analyzes Claude Code's source code and compares it with OpenClaw and Hermes Agent, revealing core architecture, five value drivers, thirteen design principles, and six future design directions for AI agent systems."
resource: https://arxiv.org/abs/2604.14228v3
tags: [agents, architecture, design-principles, claude-code, comparative-analysis]
sources:
  - id: dive-into-claude-code-design-space
    resource: https://arxiv.org/abs/2604.14228v3
    title: "Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:20:13+08:00
---

# 深入 Claude Code：当下与未来 AI Agent 系统的设计空间

*Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems*

帖文称，该技术报告通过逆向工程 Claude Code 的公开源码，并将其与两个开源 Agent 系统 OpenClaw 与 Hermes Agent 进行对比，系统梳理了当前 AI Agent 系统的设计空间。研究识别出五大人类价值驱动——人类决策权、安全/隐私、可靠执行、能力放大、上下文适应性——并将其追溯至十三条设计原则与具体实现选择。核心运行时仅是一个简单的 while-loop（调用模型→运行工具→循环），但绝大多数代码集中在围绕循环的系统：七模式权限系统+ML 分类器、五层压缩管线、四种扩展机制（MCP/插件/技能/钩子）、子 Agent 委派编排、追加式会话存储。对比显示，相同设计问题在三种部署语境下给出不同答案：Claude Code 强调逐动作安全，OpenClaw 强调边界级访问，Hermes 在多表面渲染逐动作审批。论文最后基于实证、架构与政策文献提出六大开放设计方向。[^dive-into-claude-code-design-space]

The tech report reverse-engineers Claude Code's public source code and compares it with two open-source agent systems, OpenClaw and Hermes Agent, systematically mapping the design space of today's AI agent systems. It identifies five human-value drivers—human decision authority, safety/privacy, reliable execution, capability amplification, and contextual adaptability—and traces them through thirteen design principles to implementation choices. The core runtime is a simple while-loop (call model → run tools → repeat), but most code lives in surrounding systems: a seven-mode permission system with ML classifier, five-layer compaction pipeline, four extensibility mechanisms (MCP, plugins, skills, hooks), subagent delegation/orchestration, and append-oriented session storage. Comparisons show the same design questions yield different answers across three deployment contexts: Claude Code emphasizes per-action safety, OpenClaw perimeter-level access, and Hermes renders per-action approvals across many surfaces. The paper concludes with six open design directions grounded in empirical, architectural, and policy literature.[^dive-into-claude-code-design-space]

## 摘要 / Summary

- 核心运行时仅为简单的 while-loop：调用模型 → 运行工具 → 重复；绝大多数代码在围绕循环的支撑系统中。[^dive-into-claude-code-design-space]
- The core runtime is a simple while-loop: call model → run tools → repeat; the vast majority of code lives in supporting systems around the loop.[^dive-into-claude-code-design-space]
- 识别五大人类价值驱动：人类决策权、安全/隐私、可靠执行、能力放大、上下文适应性，追溯至 13 条设计原则。[^dive-into-claude-code-design-space]
- Identifies five human-value drivers—human decision authority, safety/privacy, reliable execution, capability amplification, contextual adaptability—traced to 13 design principles.[^dive-into-claude-code-design-space]
- 关键子系统：七模式权限系统+ML 分类器、五层上下文压缩管线、四扩展机制（MCP/插件/技能/钩子）、子 Agent 委派编排、追加式会话存储。[^dive-into-claude-code-design-space]
- Key subsystems: seven-mode permission system with ML classifier, five-layer context compaction pipeline, four extensibility mechanisms (MCP, plugins, skills, hooks), subagent delegation/orchestration, append-oriented session storage.[^dive-into-claude-code-design-space]
- 三系统对比揭示相同设计问题在不同部署语境下的不同答案：Claude Code 逐动作安全、OpenClaw 边界级访问、Hermes 多表面逐动作审批。[^dive-into-claude-code-design-space]
- Three-system comparison reveals different answers to the same design questions across deployment contexts: Claude Code per-action safety, OpenClaw perimeter-level access, Hermes per-action approvals across many surfaces.[^dive-into-claude-code-design-space]
- 运行时层差异：Claude Code 单 CLI 循环、OpenClaw 网关控制平面内嵌运行时、Hermes 单进程由入口点决定角色。[^dive-into-claude-code-design-space]
- Runtime layer differences: Claude Code single CLI loop, OpenClaw runtime embedded in gateway control plane, Hermes single process whose role is set by its entry point.[^dive-into-claude-code-design-space]
- 基于实证、架构与政策文献提出六大面向未来的开放设计方向。[^dive-into-claude-code-design-space]
- Proposes six open design directions for future agent systems grounded in empirical, architectural, and policy literature.[^dive-into-claude-code-design-space]

## 相关 / Related

- 原文：[链接](https://arxiv.org/abs/2604.14228v3)。 / Original: [link](https://arxiv.org/abs/2604.14228v3).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)

[^dive-into-claude-code-design-space]: Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems
