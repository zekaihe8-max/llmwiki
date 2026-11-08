---
type: Source
title: "微信聊天记录直通 Grok Bot，开源工具 Grok Bot Anywhere 发布"
title_en: "WeChat Chat Records Connect Directly to Grok Bot, Open-Source Tool Grok Bot Anywhere Released"
description: "开源工具 Grok Bot Anywhere 支持将微信聊天记录及附件直接转发给 Grok Bot，MIT 协议，macOS 优先支持。"
description_en: "Open-source tool Grok Bot Anywhere supports forwarding WeChat chat records and attachments directly to Grok Bot, MIT licensed, macOS-first support."
resource: https://x.com/cgnot996/status/2119298485803794467
tags: [grok-bot, wechat, open-source, ai-agent, desktop-app, macos, windows]
sources:
  - id: 92b8f308a213abe9
    resource: https://x.com/cgnot996/status/2119298485803794467
    title: "WeChat Chat Records Connect Directly to Grok Bot, Open-Source Tool Grok Bot Anywhere Released"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:10:28+08:00
---

# 微信聊天记录直通 Grok Bot，开源工具 Grok Bot Anywhere 发布

*WeChat Chat Records Connect Directly to Grok Bot, Open-Source Tool Grok Bot Anywhere Released*

帖文称，开源项目 Grok Bot Anywhere 已经打通微信聊天记录到 Grok Bot 的直达通道，用户可在微信内直接转发聊天记录和文件，免去手动复制粘贴；项目采用 MIT 协议开源，当前重点支持 macOS 14 以上系统，Windows 仅提供未签名源码与压缩包，Linux 暂不支持，且作者声明该项目与 xAI 无任何合作或授权关系。[^92b8f308a213abe9]

The post claims that open-source project Grok Bot Anywhere has opened a direct channel from WeChat chat records to Grok Bot, allowing users to forward chat records and files directly within WeChat without manual copy-pasting; the project is MIT-licensed, currently focused on macOS 14+, while Windows offers only unsigned source and packages, Linux is unsupported, and the author states the project has no cooperation or authorization from xAI.[^92b8f308a213abe9]

## 摘要 / Summary

- 工具名为 Grok Bot Anywhere，版本 0.1.4，代码托管在 GitHub 仓库 RongleCat/grok-bot-anywhere，采用 MIT 协议开源。 / The tool is named Grok Bot Anywhere, version 0.1.4, hosted at GitHub repository RongleCat/grok-bot-anywhere, and released under the MIT license.[^92b8f308a213abe9]
- 支持在微信中选中聊天记录后通过“转发 → 其他应用”直接发给 Bot，导出的压缩包包含文字和附件，未在本地加载的文件不会进入压缩包。 / Supports selecting chat records in WeChat and forwarding them directly to the Bot via “Forward → Other apps”; the exported zip contains text and attachments, while files not loaded locally will not be included.[^92b8f308a213abe9]
- 桌面端优先支持 macOS 14 以上并提供签名公证安装包；Windows 代码公开但仅提供未签名压缩包，可能被 SmartScreen 拦截且尚未在实机完整验证；Linux 暂不支持。 / Desktop support prioritizes macOS 14+ with signed and notarized installers; Windows code is public but only unsigned zip packages are provided, which may be blocked by SmartScreen and have not been fully verified on real machines; Linux is not supported.[^92b8f308a213abe9]
- 软件不破解微信、不读取数据库，走的是微信官方开放的合并转发出口；本地保存后排队发送，发送结果不明确时会暂停等待用户核对，不擅自自动重发。 / The software does not crack WeChat or read its database, using WeChat's official merged-forwarding export; content is saved locally and queued for sending, and if the send result is unclear it pauses for user verification instead of automatically resending.[^92b8f308a213abe9]
- 除微信转发外，还支持命令行工具注册 grok-bot skill、Touch Bar 唤醒、Bot 设置复制与头像编辑，并可让 Claude Code 等本地 Agent 指挥云端 Bot 协同工作。 / Besides WeChat forwarding, it supports CLI registration of the grok-bot skill, Touch Bar wake-up, Bot settings copying and avatar editing, and allows local agents such as Claude Code to direct cloud-based bots for collaborative work.[^92b8f308a213abe9]
- 作者明确称这是个人非官方项目，与 xAI 没有合作、授权或背书关系；Windows 用户需自行签名或解除锁定才能运行未签名包。 / The author explicitly states this is a personal unofficial project with no cooperation, authorization, or endorsement from xAI; Windows users must sign or unlock the unsigned package themselves to run it.[^92b8f308a213abe9]

## 相关 / Related

- 原文：[链接](https://x.com/cgnot996/status/2119298485803794467)。 / Original: [link](https://x.com/cgnot996/status/2119298485803794467).
- Topic: [用 Grok Bot 内置额度桥接 Agent 查 X / Bridge agents to X via Grok Bot built-in quota](../../topics/grok-bot-x-api-substitute.md)
- Topic: [Grok Bot 管 X：情报防护不代发帖 / Grok Bot for X — intel and defense, never auto-post](../../topics/grok-bot-x-intel-defense-not-post.md)
- Topic: [个人 Agent 对外分享与 Bot 互聊 / Personal-agent public sharing and bot-to-bot chat](../../topics/personal-agent-share-and-interbot-chat.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^92b8f308a213abe9]: WeChat Chat Records Connect Directly to Grok Bot, Open-Source Tool Grok Bot Anywhere Released
