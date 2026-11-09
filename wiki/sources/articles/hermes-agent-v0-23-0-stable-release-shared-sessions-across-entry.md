---
type: Source
title: "Hermes Agent v0.23.0 稳定版发布：多入口共用会话，桌面可连多台机器"
title_en: "Hermes Agent v0.23.0 Stable Release: Shared Sessions Across Entry Points, Desktop Connects to Multiple Machines"
description: "帖文称 Hermes Agent 最新稳定版 v0.23.0 支持浏览器完整工作区、多入口共用会话与任务队列、桌面连多台机器、终端看图与 /rewind 回退，以及插件批量更新和付费 MCP 费用提醒。"
description_en: "The post says Hermes Agent v0.23.0 stable supports a full browser workspace, shared sessions and task queues across entry points, desktop connections to multiple machines, terminal image viewing and /rewind rollback, plus plugin batch updates and paid MCP cost alerts."
resource: https://x.com/0xlangeai/status/2119705441974600044
tags: [agents, hermes-agent, desktop, plugins]
sources:
  - id: hermes-agent-v0-23-0
    resource: https://x.com/0xlangeai/status/2119705441974600044
    title: "Hermes Agent v0.23.0 Stable Release: Shared Sessions Across Entry Points, Desktop Connects to Multiple Machines"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:14:31+08:00
---

# Hermes Agent v0.23.0 稳定版发布：多入口共用会话，桌面可连多台机器

*Hermes Agent v0.23.0 Stable Release: Shared Sessions Across Entry Points, Desktop Connects to Multiple Machines*

帖文称，Hermes Agent 最新稳定版 v0.23.0 已于 11 月 9 日发布，后续 Canary 为预发布构建。此版本强调不同入口可接着处理同一件事：浏览器可操作完整工作区（需手动开启 Web Access）、终端与桌面及机器人共用聊天历史和任务队列、单台桌面可同时接入本机、SSH 和远程网关，且终端支持图片显示与 /rewind 对话回退；插件支持批量与自动更新，付费 MCP 工具可显示价格与累计花费并超限再次询问，官方安全审查插件 hermes-security 需单独安装，手机端仍为 Beta 候补。[^hermes-agent-v0-23-0]

The post says Hermes Agent latest stable v0.23.0 was released on November 9, with subsequent Canary builds being pre-release. This version emphasizes that different entry points can continue handling the same task: the browser can operate a full workspace (Web Access must be enabled manually), terminal, desktop and bots share chat history and task queues, one desktop can simultaneously connect to local, SSH and remote gateways, and the terminal supports image display and /rewind conversation rollback; plugins support batch and automatic updates, paid MCP tools can display price and cumulative spending and ask again when exceeding limits, the official security audit plugin hermes-security requires separate installation, and mobile remains a Beta candidate.[^hermes-agent-v0-23-0]

## 摘要 / Summary

- 浏览器可使用完整工作区，包含聊天、群聊、插件和设置，需运行 Hermes gateway 并手动开启 Web Access，默认不开。 / The browser can use a full workspace including chat, group chat, plugins and settings, requiring Hermes gateway and manually enabling Web Access, which is off by default.[^hermes-agent-v0-23-0]
- 终端、桌面和机器人共用同一聊天的历史和任务队列，桌面还能修改正在排队的指令。 / Terminal, desktop and bots share the same chat history and task queue; desktop can also modify commands currently in the queue.[^hermes-agent-v0-23-0]
- 一台桌面可同时连接本机、SSH 和远程 gateway，管理不同机器上的任务无需反复断开重连。 / One desktop can simultaneously connect to local machine, SSH and remote gateway, managing tasks on different machines without repeatedly disconnecting and reconnecting.[^hermes-agent-v0-23-0]
- 支持的终端可直接显示截图，聊天可用 /rewind 回到前面消息，修改重发或另开分支。 / Supported terminals can display screenshots directly; conversations can use /rewind to return to previous messages, modify and resend, or open a branch.[^hermes-agent-v0-23-0]
- 插件支持批量更新和自动更新，付费 MCP 工具可显示价格和累计花费，超过设定上限会再次询问。 / Plugins support batch and automatic updates; paid MCP tools can display price and cumulative spending, and will ask again when exceeding the set limit.[^hermes-agent-v0-23-0]
- 官方安全审查插件 hermes-security 需单独安装，不是升级就默认自带；手机端目前仍是 Beta 候补，非正式全量上线。 / The official security audit plugin hermes-security requires separate installation and is not included by default on upgrade; mobile is currently still a Beta candidate, not a full official launch.[^hermes-agent-v0-23-0]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2119705441974600044)。 / Original: [link](https://x.com/0xlangeai/status/2119705441974600044).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [插件样式不一使 Harness 界面碎片化 / Harness UI fragmentation from mismatched plugin styles](../../topics/harness-plugin-style-fragmentation.md)

[^hermes-agent-v0-23-0]: Hermes Agent v0.23.0 Stable Release: Shared Sessions Across Entry Points, Desktop Connects to Multiple Machines
