---
type: Source
title: "Paradev：面向 Claude Code 与 Codex 的开源并行编程 Agent 工作区"
title_en: "Paradev: Open-source parallel coding agent workspace for Claude Code and Codex"
description: "Paradev 是一个开源工作区，可并行运行 Claude Code、Codex 等编程 Agent，每个 Agent 独立使用 Git worktree 和分支。"
description_en: "Paradev is an open-source workspace that runs Claude Code, Codex, and other coding agents in parallel, with each agent using its own Git worktree and branch."
resource: https://github.com/ParadevAI/Paradev
tags: [agents, coding-agent, parallel-workspaces, desktop-app, open-source]
sources:
  - id: paradev
    resource: https://github.com/ParadevAI/Paradev
    title: "Paradev: Open-source parallel coding agent workspace for Claude Code and Codex"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:32:55+08:00
---

# Paradev：面向 Claude Code 与 Codex 的开源并行编程 Agent 工作区

*Paradev: Open-source parallel coding agent workspace for Claude Code and Codex*

Paradev 是面向 Claude Code、Codex 及任意编程 Agent 的开源工作区，支持在本地、云端或远程机器上并行运行 Agent，每个任务分配独立的 Git worktree、分支与终端，并提供桌面端、移动端、CLI、SDK 与 MCP 服务。[^paradev]

Paradev is an open-source workspace for Claude Code, Codex, and any coding agent, supporting parallel agent execution on local, cloud, or remote machines, with each task getting its own Git worktree, branch, and terminal, plus desktop, mobile, CLI, SDK, and MCP server support.[^paradev]

## 摘要 / Summary

- Paradev 为每个 Agent 分配独立的 Git worktree 和分支，文件互不干扰，合并时仍可能出现冲突。[^paradev]
- Paradev assigns each agent its own Git worktree and branch, keeping working files separate, though changes can still conflict when merged.[^paradev]
- 支持 macOS 桌面应用，提供实验性 Linux AppImage，暂不提供 Windows 版本。[^paradev]
- Supports the macOS desktop app, provides an experimental Linux AppImage, and does not yet offer a Windows version.[^paradev]
- 免费计划覆盖本地工作空间与 CLI，付费计划增加自动化和云工作空间等功能，软件采用 MIT 许可证开源。[^paradev]
- The Free plan covers local workspaces and the CLI, paid plans add features such as automations and cloud workspaces, and the software is open source under the MIT License.[^paradev]
- 内置支持 Claude Code、Codex、OpenCode、Cursor Agent、Gemini CLI 等，用户可自行添加任意 CLI Agent，并使用自己的订阅与 API 密钥。[^paradev]
- Built-in support includes Claude Code, Codex, OpenCode, Cursor Agent, and Gemini CLI, and users can add any other CLI agent while using their own subscriptions and API keys.[^paradev]
- 提供 iOS 与 Android 移动应用，可启动 Agent、实时跟进并审阅差异，移动端功能包含在 Paradev Pro 计划中。[^paradev]
- Provides iOS and Android mobile apps to start agents, follow them live, and review diffs, with mobile access included in the Paradev Pro plan.[^paradev]

## 相关 / Related

- 原文：[链接](https://github.com/ParadevAI/Paradev)。 / Original: [link](https://github.com/ParadevAI/Paradev).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [AGENTS.md 要求 worktree 完成即删 / AGENTS.md rules for no leftover worktrees](../../topics/agent-worktree-cleanup.md)

[^paradev]: Paradev: Open-source parallel coding agent workspace for Claude Code and Codex
