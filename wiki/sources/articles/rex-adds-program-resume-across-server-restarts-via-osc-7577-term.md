---
type: Source
title: "Rex 通过 OSC 7577 终端协议支持程序跨服务器重启恢复"
title_en: "Rex Adds Program Resume Across Server Restarts via OSC 7577 Terminal Protocol"
description: "Rex 发布基于 OSC 7577 终端转义序列的新协议，支持任意程序在服务器重启后恢复，并首批内置 Claude Code 支持。"
description_en: "Rex launches a new OSC 7577 terminal escape-sequence protocol allowing any program to resume after a server restart, with initial built-in support for Claude Code."
resource: https://x.com/mitchellh/status/2125713695233970521
tags: [rex, terminal-protocol, claude-code, osc-7577, program-resume]
sources:
  - id: mitchellh-rex-osc-7577-resume
    resource: https://x.com/mitchellh/status/2125713695233970521
    title: "Rex Adds Program Resume Across Server Restarts via OSC 7577 Terminal Protocol"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T08:36:21+08:00
---

# Rex 通过 OSC 7577 终端协议支持程序跨服务器重启恢复

*Rex Adds Program Resume Across Server Restarts via OSC 7577 Terminal Protocol*

「帖文称」Mitchell Hashimoto 宣布，Rex 现已支持通过服务器重启恢复程序，依据是与 @herdrdev 合作发布的全新终端协议 OSC 7577，并经多个终端模拟器和终端程序作者审阅。该协议使用普通终端转义序列，任何程序均可实现，无需针对特定终端或带外协议进行特殊集成。Rex 首批内置对 Claude Code 的支持，并在会话启动钩子中发出 OSC 7577；出于安全考虑，程序重启在本质上不安全，Rex 提供基于 Lua 的灵活配置，可按程序名称、路径、工作目录、命令行标志等逐个程序选择加入恢复，也可用一行配置完全禁用。[^mitchellh-rex-osc-7577-resume]

Mitchell Hashimoto announced that Rex can now resume programs through a server restart using a new terminal protocol, OSC 7577, co-published with @herdrdev and reviewed by multiple terminal emulator and terminal program authors. The protocol relies on plain terminal escape sequences, so any program can implement it without special integration with a specific terminal or out-of-band protocol. Rex initially ships with built-in support for Claude Code, emitting OSC 7577 in a session start hook. Because terminal program restart is fundamentally unsafe, Rex offers a flexible Lua-based configuration to opt in on a program-by-program basis—filtering by name, path, working directory, flags, and more—or disable the feature entirely with one line.[^mitchellh-rex-osc-7577-resume]

## 摘要 / Summary

- 帖文称该功能基于与 @herdrdev 合作发布的 OSC 7577 终端协议。[^mitchellh-rex-osc-7577-resume]
- The post says the feature is based on the OSC 7577 terminal protocol co-published with @herdrdev.[^mitchellh-rex-osc-7577-resume]
- 使用普通终端转义序列，任何程序可实现，无需针对特定终端或带外协议特殊集成。[^mitchellh-rex-osc-7577-resume]
- It uses plain terminal escape sequences, so any program can implement it without special integration with a specific terminal or out-of-band protocol.[^mitchellh-rex-osc-7577-resume]
- Rex 首批内置对 Claude Code 的支持，会在会话启动钩子中发出 OSC 7577。[^mitchellh-rex-osc-7577-resume]
- Rex initially ships with built-in Claude Code support, emitting OSC 7577 in a session start hook.[^mitchellh-rex-osc-7577-resume]
- 终端程序重启本质不安全，安全依赖终端模拟器；Rex 提供 Lua 配置，可按程序名、路径、工作目录、命令行标志等逐个程序选择加入，或一行禁用。[^mitchellh-rex-osc-7577-resume]
- Terminal program restart is fundamentally unsafe and security relies on the terminal emulator; Rex provides Lua configuration to opt in per program by name, path, working directory, flags, and more, or disable it with one line.[^mitchellh-rex-osc-7577-resume]
- 帖文显示 265K 次浏览、210 条回复，并列出 346、3.7K 和 1.1K 等计数。[^mitchellh-rex-osc-7577-resume]
- The post shows 265K views, 210 replies, and lists counts of 346, 3.7K, and 1.1K.[^mitchellh-rex-osc-7577-resume]

## 相关 / Related

- 原文：[链接](https://x.com/mitchellh/status/2125713695233970521)。 / Original: [link](https://x.com/mitchellh/status/2125713695233970521).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)

[^mitchellh-rex-osc-7577-resume]: Rex Adds Program Resume Across Server Restarts via OSC 7577 Terminal Protocol
