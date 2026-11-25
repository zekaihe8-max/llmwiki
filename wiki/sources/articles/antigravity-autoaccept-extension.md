---
type: Source
title: "Antigravity AutoAccept 自动接受扩展"
title_en: "AntiGravity AutoAccept Extension"
description: "为 Google Antigravity AI 编程助手自动接受代理步骤、终端命令、文件编辑与权限提示的 VS Code 扩展。"
description_en: "A VS Code extension that automatically accepts agent steps, terminal commands, file edits, and permission prompts for Google's Antigravity AI coding assistant."
resource: https://github.com/yazanbaker94/AntiGravity-AutoAccept
tags: [antigravity, auto-accept, coding-agent, vscode-extension, cdp]
sources:
  - id: antigravity-autoaccept
    resource: https://github.com/yazanbaker94/AntiGravity-AutoAccept
    title: "AntiGravity AutoAccept Extension"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T19:58:37+08:00
---

# Antigravity AutoAccept 自动接受扩展

*AntiGravity AutoAccept Extension*

「帖文称」AntiGravity AutoAccept 是面向 Google Antigravity AI 编程助手的 VS Code 扩展，能自动接受代理步骤、终端命令、文件编辑和权限提示，无需逐个手动点击。扩展结合 VS Code 命令轮询与基于 Chrome DevTools Protocol（CDP）的 MutationObserver，并提供 Swarm Mode Pro 多代理后台自动接受、Telegram 远程控制以及命令阻断/允许列表等安全机制。[^antigravity-autoaccept]

AntiGravity AutoAccept is a VS Code extension for Google's Antigravity AI coding assistant that automatically accepts agent steps, terminal commands, file edits, and permission prompts without manual clicking. It combines VS Code command polling with a CDP-based MutationObserver, and provides Swarm Mode Pro multi-agent background auto-accept, Telegram remote control, and blocked/allowed command lists for safety.[^antigravity-autoaccept]

## 摘要 / Summary

- 自动接受策略：使用 VS Code 原生命令（500ms 轮询）处理代理步骤与终端命令，并通过 CDP + MutationObserver 事件驱动处理运行、接受、始终允许等按钮。[^antigravity-autoaccept]
- Uses VS Code native commands at 500ms polling for agent steps and terminal commands, and CDP + MutationObserver event-driven handling for Run, Accept, Always Allow, and similar buttons.[^antigravity-autoaccept]
- 调试端口要求：需以 --remote-debugging-port=9333 启动 Antigravity，以避免与内置浏览器控制的 9222 端口冲突。[^antigravity-autoaccept]
- Requires launching Antigravity with --remote-debugging-port=9333 to avoid conflicts with the built-in browser control on port 9222.[^antigravity-autoaccept]
- 按钮检测优先级：按 Run、Accept、Always Allow、Allow this conversation、Allow、Retry、Continue 的优先级匹配按钮文本，并使用词边界检查防止误触。[^antigravity-autoaccept]
- Button detection prioritizes Run, Accept, Always Allow, Allow this conversation, Allow, Retry, and Continue with word-boundary checks to prevent false positives.[^antigravity-autoaccept]
- 命令安全过滤：支持 blockedCommands 与 allowedCommands 列表，默认面板提供 50 多条破坏性命令安全预设，如 rm -rf、磁盘格式化、数据库删除与 git push --force。[^antigravity-autoaccept]
- Supports blockedCommands and allowedCommands lists, with a dashboard preset of 50+ destructive command patterns including rm -rf, disk formatting, database drops, and git push --force.[^antigravity-autoaccept]
- 多代理限制与变通：Antigravity 代理管理器仅渲染当前活跃对话，后台代理未挂载；可通过“重复工作区”打开第二个窗口，让扩展同时自动点击多个对话。[^antigravity-autoaccept]
- Antigravity's Agent Manager only renders the active conversation; background agents are unmounted. The workaround is to duplicate the workspace into a second window so the extension can auto-click across multiple conversations simultaneously.[^antigravity-autoaccept]
- 自愈机制：v3.2.0 引入每 10 秒心跳自愈，自动检测并重新注册失效的 CDP 会话与 MutationObserver，修复运行约一小时后停止点击的问题。[^antigravity-autoaccept]
- v3.2.0 adds a 10-second heartbeat self-healing mechanism that detects and re-injects dead CDP sessions and MutationObservers, fixing the issue where clicking stops after about an hour.[^antigravity-autoaccept]

## 相关 / Related

- 原文：[链接](https://github.com/yazanbaker94/AntiGravity-AutoAccept)。 / Original: [link](https://github.com/yazanbaker94/AntiGravity-AutoAccept).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^antigravity-autoaccept]: AntiGravity AutoAccept Extension
