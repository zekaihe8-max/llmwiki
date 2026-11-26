---
type: Source
title: "Herdr：编程 Agent 的终端运行时"
title_en: "Herdr: Terminal Runtime for Coding Agents"
description: "一个用 Rust 编写的终端运行时，让编程 Agent 在后台持续运行，支持多机会话、窗格状态标记、CLI/Socket API 驱动及插件扩展。"
description_en: "A Rust-based terminal runtime that keeps coding agents running in the background, supports multi-machine sessions, pane status marking, CLI/Socket API driving, and plugin extensions."
resource: https://github.com/herdrdev/herdr
tags: [herdr, coding-agent, terminal-runtime, rust, plugins]
sources:
  - id: herdr-terminal-runtime
    resource: https://github.com/herdrdev/herdr
    title: "Herdr: Terminal Runtime for Coding Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:31:03+08:00
---

# Herdr：编程 Agent 的终端运行时

*Herdr: Terminal Runtime for Coding Agents*

「帖文称」Herdr 是编程 Agent 运行在其中的终端运行时，支持在关闭客户端或断开 SSH 后将终端保留在后台服务器，重启后恢复保存布局并可恢复受支持的 Agent 会话；它不包装或替换 Claude Code、Codex、Cursor、OpenCode、Grok 等工具，而是拥有它们的终端，并通过 CLI 与 Socket API 供 Agent 驱动。[^herdr-terminal-runtime]

Herdr is the terminal runtime your coding agents live on. It keeps terminals running in a background server when you close the client or lose SSH, restores the saved layout after a server or machine restart, and can resume supported agent sessions without wrapping or replacing tools like Claude Code, Codex, Cursor, OpenCode, or Grok. Agents drive Herdr through the CLI and Socket API.[^herdr-terminal-runtime]

## 摘要 / Summary

- Herdr 可在关闭客户端或丢失 SSH 连接后让终端在后台服务器继续运行，重启后恢复保存的布局并可恢复受支持的 Agent 会话。[^herdr-terminal-runtime]
- Herdr keeps terminals running in a background server when the client closes or SSH is lost, and restores the saved layout after a server or machine restart.[^herdr-terminal-runtime]
- 它支持将本地工作与多台 SSH 机器放在同一窗口中，并提供合并的 Agent 列表与独立重连。[^herdr-terminal-runtime]
- It keeps local work and saved SSH machines together in one window, with a combined agent list and independent reconnects.[^herdr-terminal-runtime]
- 每个窗格都标记为工作中、受阻或空闲，Agent 停止并需要回答时，Herdr 会提示。[^herdr-terminal-runtime]
- Every pane is marked working, blocked, or idle, and Herdr indicates when an agent stops and needs an answer.[^herdr-terminal-runtime]
- Herdr 是单一 Rust 二进制文件，不依赖 Electron，可在任意终端中运行；支持插件市场扩展窗格和工作流。[^herdr-terminal-runtime]
- Herdr is a single Rust binary with no Electron, runs in any terminal, and offers a plugin marketplace to extend panes and workflows.[^herdr-terminal-runtime]

## 相关 / Related

- 原文：[链接](https://github.com/herdrdev/herdr)。 / Original: [link](https://github.com/herdrdev/herdr).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)
- Topic: [先复用再编写 / Reuse before write](../../topics/reuse-before-write.md)

[^herdr-terminal-runtime]: Herdr: Terminal Runtime for Coding Agents
