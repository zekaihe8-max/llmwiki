---
type: Source
title: "Pi 没停更，在改底层"
title_en: "Pi Hasn't Stopped Updating, It's Reworking the Underlying Architecture"
description: "Pi 近期发版放缓但未停止更新，正在推进 p2 原型、Chord v2 底层重构及 Anthropic 消息线程，并修复主线稳定性问题。"
description_en: "Pi has slowed releases but continues advancing p2 prototypes, Chord v2 architecture rework, and Anthropic Message Threads, while fixing mainline stability issues."
resource: https://x.com/xiaomovps/status/2118579001325126118
tags: [pi, agents, infrastructure, anthropic-message-threads]
sources:
  - id: 6e5478dc0440d42f
    resource: https://x.com/xiaomovps/status/2118579001325126118
    title: "Pi Hasn't Stopped Updating, It's Reworking the Underlying Architecture"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T20:05:31+08:00
---

# Pi 没停更，在改底层

*Pi Hasn't Stopped Updating, It's Reworking the Underlying Architecture*

帖文称，Pi 近期在 X 上内容变少，并非开发放缓，而是发版频率降低，更新内容未减。作者在 GitHub PR 分支中发现，官方正在基于 Pi Durable 和 Chord 开发名为 p2 的新 Web 与 TUI 实验性原型，涉及远程设备管理、会话管理和沙箱；同时重构 Chord v2 底层，侧重插件运行时、跨设备通信与存储复制，并增加代码热重载以支持 Agent 长时间运行。此外，Anthropic Message Threads 已进入开发分支，旨在服务端延续会话、减少重复传输历史消息，但帖文称 Token 计费不会直接减少。主线近期也修复了大文件读取内存占用、MCP OAuth 登录卡住、Tool Search 异常等问题，并新增 pi auth login/logout 命令。[^6e5478dc0440d42f]

The post says Pi has not slowed development despite fewer updates on X; release frequency has dropped while content updates continue. The author found in GitHub PR branches that officials are developing a new experimental Web and TUI prototype called p2 based on Pi Durable and Chord, covering remote device management, session management, and sandbox; Chord v2 is being reworked with focus on plugin runtime, cross-device communication, and storage replication, plus code hot reload to support long-running Agents. Anthropic Message Threads has entered the dev branch to continue sessions server-side and reduce repeated history transmission, though the post says token billing will not directly decrease. Mainline also fixed large-file memory usage, MCP OAuth login stuck, Tool Search exceptions, and added pi auth login/logout commands.[^6e5478dc0440d42f]

## 摘要 / Summary

- p2 是基于 Pi Durable 和 Chord 的新 Web 与 TUI 实验性原型，包含远程设备管理、会话管理和沙箱功能，帖文称其后将被替换，非正式产品。 / p2 is a new experimental Web and TUI prototype based on Pi Durable and Chord, including remote device management, session management, and sandbox; the post says it will be replaced later and is not a formal product.[^6e5478dc0440d42f]
- Chord v2 重构底层架构，重点在插件运行时、跨设备通信和存储复制，并增加代码热重载机制，让旧任务在旧代码版本上完成后再切换新实现。 / Chord v2 reworks the underlying architecture, focusing on plugin runtime, cross-device communication, and storage replication, and adds code hot reload so old tasks finish on the old code version before switching to the new implementation.[^6e5478dc0440d42f]
- Anthropic Message Threads 已进入开发分支，通过服务端延续之前会话，减少每轮请求重复传输大量历史消息，但帖文称 Token 计费不会因此直接减少。 / Anthropic Message Threads has entered the development branch, using server-side session continuation to reduce repeated transmission of large history messages per request; the post says token billing will not directly decrease as a result.[^6e5478dc0440d42f]
- Pi 主线近期修复了大文件读取占用内存、MCP OAuth 登录卡住、Tool Search 搜索异常和插件界面残留等问题，并新增 pi auth login 和 pi auth logout 命令。 / Pi mainline recently fixed issues including high memory usage for large file reads, MCP OAuth login getting stuck, Tool Search exceptions, and plugin interface residue, and added pi auth login and pi auth logout commands.[^6e5478dc0440d42f]
- 作者甚至期待 Pi 推出官方桌面端或手机端，以便更方便使用并交由官方维护。 / The author even looks forward to an official Pi desktop or mobile client for easier use and official maintenance.[^6e5478dc0440d42f]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2118579001325126118)。 / Original: [link](https://x.com/xiaomovps/status/2118579001325126118).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)

[^6e5478dc0440d42f]: Pi Hasn't Stopped Updating, It's Reworking the Underlying Architecture
