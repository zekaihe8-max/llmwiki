---
type: Source
title: "Paseo：面向多代理的开源代理式开发环境"
title_en: "Paseo: Open Source Agentic Development Environment for Multiple Agents"
description: "Paseo 是一个面向桌面、移动端、Web 和 CLI 的开源代理式开发环境，支持 Claude Code、Codex、Copilot 等多代理并行与编排。"
description_en: "Paseo is an open-source agentic development environment for desktop, mobile, web, and CLI, supporting parallel agents and orchestration across Claude Code, Codex, Copilot, and more."
resource: https://github.com/getpaseo/paseo
tags: [paseo, agentic-development, multi-agent, coding-agents, open-source]
sources:
  - id: paseo-agentic-dev-env
    resource: https://github.com/getpaseo/paseo
    title: "Paseo: Open Source Agentic Development Environment for Multiple Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:31:32+08:00
---

# Paseo：面向多代理的开源代理式开发环境

*Paseo: Open Source Agentic Development Environment for Multiple Agents*

「帖文称」Paseo 是一个面向桌面、移动端、Web 和 CLI 的开源代理式开发环境，用户可在一个窗口中使用代理、编辑器、终端、差异、拉取请求和浏览器，并同时运行多个代理，每个代理占用独立 worktree。该项目号称支持 Claude Code、Codex、GitHub Copilot、OpenCode、Pi、Antigravity 和 Muse Code 等多供应商代理，并提供插件、TypeScript SDK 与 Skills 编排能力，强调自托管、隐私优先且无遥测或强制登录。[^paseo-agentic-dev-env]

The post describes Paseo as an open-source agentic development environment for desktop, mobile, web, and CLI, where users can run agents, editor, terminals, diffs, pull requests, and a browser in one window and run many agents at once, each in its own worktree. It claims multi-provider support for Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity, and Muse Code, and offers plugins, a TypeScript SDK, and Skills for orchestration, emphasizing self-hosting, privacy-first design, and no telemetry or forced login.[^paseo-agentic-dev-env]

## 摘要 / Summary

- Paseo 支持并行代理，每个代理运行在独立 worktree 上，可在单机或多机上同时运行多个代理。[^paseo-agentic-dev-env]
- Paseo supports parallel agents, each running in its own worktree, allowing many agents to run simultaneously on one machine or several.[^paseo-agentic-dev-env]
- 内置编排能力让代理可创建 worktree、启动其他代理并跨供应商互相通信。[^paseo-agentic-dev-env]
- Built-in orchestration lets agents create worktrees, launch other agents, and talk to them across providers.[^paseo-agentic-dev-env]
- 支持 Claude Code、Codex、GitHub Copilot、OpenCode、Pi、Antigravity、Muse Code 等多供应商代理，并可通过 Paseo 统一接口使用。[^paseo-agentic-dev-env]
- Supports multiple providers including Claude Code, Codex, GitHub Copilot, OpenCode, Pi, Antigravity, and Muse Code through the same interface.[^paseo-agentic-dev-env]
- 提供桌面、移动端（iOS、Android）、Web 和 CLI 客户端，以及 TypeScript SDK @getpaseo/client。[^paseo-agentic-dev-env]
- Provides desktop, mobile (iOS, Android), web, and CLI clients, plus the TypeScript SDK @getpaseo/client.[^paseo-agentic-dev-env]
- 强调隐私优先：无遥测、追踪或强制登录，远程访问使用可选端到端加密中继。[^paseo-agentic-dev-env]
- Emphasizes privacy-first: no telemetry, tracking, or forced login, with optional end-to-end encrypted relay for remote access.[^paseo-agentic-dev-env]
- 采用 Apache-2.0 许可证，仓库包含 server、app、cli、desktop、relay 和 website 等 monorepo 包。[^paseo-agentic-dev-env]
- Licensed under Apache-2.0; the monorepo includes packages/server, packages/app, packages/cli, packages/desktop, packages/relay, and packages/website.[^paseo-agentic-dev-env]

## 相关 / Related

- 原文：[链接](https://github.com/getpaseo/paseo)。 / Original: [link](https://github.com/getpaseo/paseo).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^paseo-agentic-dev-env]: Paseo: Open Source Agentic Development Environment for Multiple Agents
