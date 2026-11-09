---
type: Source
title: "T3 Code：Agent 控制台与多代理管理工具"
title_en: "T3 Code: Agent Control Surface and Multi-Agent Management Tool"
description: "T3 Code 是一款免费的 Agent 控制台，支持通过移动端、网页和桌面端统一控制本地运行的 Claude Code、Codex、Cursor 等多种编程 Agent。"
description_en: "T3 Code is a free agent control surface that lets users control locally running agents such as Claude Code, Codex, and Cursor via mobile, web, and desktop apps."
resource: https://github.com/pingdotgg/t3code
tags: [agent-harness, coding-agent, control-surface, open-source]
sources:
  - id: t3-code-agent-harness
    resource: https://github.com/pingdotgg/t3code
    title: "T3 Code: Agent Control Surface and Multi-Agent Management Tool"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:32:34+08:00
---

# T3 Code：Agent 控制台与多代理管理工具

*T3 Code: Agent Control Surface and Multi-Agent Management Tool*

「帖文称」T3 Code 是一个“Agent 代理控制台”，可通过 iOS、Android 移动应用、网页应用及 Electron 桌面应用控制本机上的 Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravity 和 fx 等 Agent；文章强调该工具免费、开源，目前处于非常早期阶段，难免存在 Bug，且大多不接受外部贡献。[^t3-code-agent-harness]

The post describes T3 Code as an “agent harness control surface” that controls locally installed agents including Claude Code, Codex, Cursor, Grok Build, OpenCode, Google Antigravity, and fx through iOS, Android, web, and Electron desktop clients; it states the tool is free and open, very early with expected bugs, and mostly not accepting contributions.[^t3-code-agent-harness]

## 摘要 / Summary

- T3 Code 支持 Claude Code、Codex、Cursor、Grok Build、OpenCode、Google Antigravity 和 fx；使用前需先安装并登录至少一家提供商。 / T3 Code supports Claude Code, Codex, Cursor, Grok Build, OpenCode, Google Antigravity, and fx; users must install and authenticate at least one provider before use.[^t3-code-agent-harness]
- 桌面端与命令行工具可通过 curl、PowerShell、winget、Scoop、Homebrew、.deb、AUR 或 Nix 安装。 / The desktop app and CLI can be installed via curl, PowerShell, winget, Scoop, Homebrew, .deb, AUR, or Nix.[^t3-code-agent-harness]
- 提供 iOS 与 Android 移动应用、网页应用以及基于 Electron 的桌面应用。 / It offers iOS and Android mobile apps, a web app, and an Electron-based desktop app.[^t3-code-agent-harness]
- 项目声明目前处于非常早期阶段，预期存在 Bug，且大多不接受贡献，小修复可能会被考虑。 / The project says it is very early, expects bugs, and is mostly not accepting contributions, though small fixes may be considered.[^t3-code-agent-harness]
- 完整文档位于仓库 docs/ 目录，涵盖安装、权限模式、快捷键、远程访问及 MCP 外部代理等内容。 / Full documentation lives in the repository's docs/ directory, covering installation, permission modes, keybindings, remote access, and MCP external agents.[^t3-code-agent-harness]

## 相关 / Related

- 原文：[链接](https://github.com/pingdotgg/t3code)。 / Original: [link](https://github.com/pingdotgg/t3code).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活 / Multi-harness routing infra ≠ personal-assistant dispatch](../../topics/multi-harness-router-vs-personal-dispatch.md)

[^t3-code-agent-harness]: T3 Code: Agent Control Surface and Multi-Agent Management Tool
