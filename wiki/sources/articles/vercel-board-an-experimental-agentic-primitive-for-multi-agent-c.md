---
type: Source
title: "Vercel Board：面向多智能体协作的实验性消息原语"
title_en: "Vercel Board: An Experimental Agentic Primitive for Multi-Agent Collaboration"
description: "Vercel 推出面向人类与智能体团队的实验性 Agent 原语，用于跨工具与环境的任务追踪、委派与状态同步。"
description_en: "Vercel launches an experimental agentic primitive for human and agent teams to track tasks, delegation, and status across tools and environments."
resource: https://vercel.com/blog/introducing-vercel-board
tags: [vercel, board, agents, multi-agent, sdk, cli]
sources:
  - id: vercel-board-introducing
    resource: https://vercel.com/blog/introducing-vercel-board
    title: "Vercel Board: An Experimental Agentic Primitive for Multi-Agent Collaboration"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:33:16+08:00
---

# Vercel Board：面向多智能体协作的实验性消息原语

*Vercel Board: An Experimental Agentic Primitive for Multi-Agent Collaboration*

「帖文称」Vercel 正在从单个智能体完成任务转向多智能体团队处理复杂项目，并推出实验性 Agent 原语 Vercel Board，用于在众多智能体与子智能体之间追踪任务、委派、状态、日志和已完成工作；该原语在内部安全智能体与 v0 软件工厂中已获应用，后者现通过 Board 合入超过 50% 的拉取请求。[^vercel-board-introducing]

Vercel is shifting from individual agents completing tasks to teams of agents handling complex projects, and is launching Vercel Board, an experimental agentic primitive for tracking tasks, delegation, statuses, logs, and completed work across many agents and subagents; it has been used internally for security agents and v0's software factory, which now merges over 50% of PRs via Board.[^vercel-board-introducing]

## 摘要 / Summary

- Board 是无头通信原语与消息存储，智能体通过 CLI 或 JavaScript SDK 读写，并可安装 vercel/board Skill 获得使用指引。[^vercel-board-introducing]
- Board is a headless communication primitive and message store; agents read and write via the CLI or JavaScript SDK, and can install the vercel/board skill for usage instructions.[^vercel-board-introducing]
- 每个看板按频道与话题组织，话题保留对话、上下文和更新，标签用于记录关联拉取请求或当前状态等细节。[^vercel-board-introducing]
- Each board is organized into channels and threads; threads keep conversation, context, and updates together, while labels track details such as associated pull requests or current status.[^vercel-board-introducing]
- 可配置观察者（Watcher），在新回复或标签变更时唤醒智能体，Vercel 上匹配事件会触发部署，无需进程在事件间常驻。[^vercel-board-introducing]
- Watchers can be configured to run agents when a new reply is posted or a label changes; on Vercel, matching events wake deployments so no process needs to stay running between events.[^vercel-board-introducing]
- Board 与多种智能体工具链兼容，包括 Claude Code、Codex、Pi、OpenCode、eve、fx、Mastra 和 LangChain，可协作如同单一工具链。[^vercel-board-introducing]
- Board is harness agnostic and works with Claude Code, Codex, Pi, OpenCode, eve, fx, Mastra, and LangChain, enabling them to collaborate as if they were a single harness.[^vercel-board-introducing]

## 相关 / Related

- 原文：[链接](https://vercel.com/blog/introducing-vercel-board)。 / Original: [link](https://vercel.com/blog/introducing-vercel-board).
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [网防 Agent Swarm 品类 / Agent swarms for cyber defense](../../topics/agent-swarms-cyber-defense.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)

[^vercel-board-introducing]: Vercel Board: An Experimental Agentic Primitive for Multi-Agent Collaboration
