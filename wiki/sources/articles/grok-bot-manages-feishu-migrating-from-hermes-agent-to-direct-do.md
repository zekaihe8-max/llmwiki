---
type: Source
title: "Grok Bot 管飞书：从 Hermes Agent 迁移后直接操作文档与日历"
title_en: "Grok Bot Manages Feishu: Migrating from Hermes Agent to Direct Document and Calendar Operations"
description: "帖文称，安装飞书 CLI 并扫码授权后，Grok Bot 可直接创建文档、表格并管理日历与会议。"
description_en: "The post says that after installing the Feishu CLI and authorizing via QR code, Grok Bot can directly create documents and spreadsheets and manage calendars and meetings."
resource: https://x.com/xiaomovps/status/2116789958912733574
tags: [grok-bot, feishu, lark-cli, agents, agent-skills]
sources:
  - id: grok-bot-manages-feishu
    resource: https://x.com/xiaomovps/status/2116789958912733574
    title: "Grok Bot Manages Feishu: Migrating from Hermes Agent to Direct Document and Calendar Operations"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:04:16+08:00
---

# Grok Bot 管飞书：从 Hermes Agent 迁移后直接操作文档与日历

*Grok Bot Manages Feishu: Migrating from Hermes Agent to Direct Document and Calendar Operations*

帖文称，小墨同学之前用 Hermes Agent 管理飞书，现在直接交给 Grok Bot；只需安装飞书 CLI（即 Lark CLI）、用飞书 APP 扫码或网页登录授权账号，再手动给机器人授权，即可下发创建文档、表格、管理日历和创建会议等任务，并已测试成功创建名为“Grok Bot”的测试文档。[^grok-bot-manages-feishu]

The post says @xiaomovps previously managed Feishu via Hermes Agent and has now handed it to Grok Bot; after installing the Feishu CLI (Lark CLI), authorizing via the Feishu app or web, and manually granting bot permissions, tasks such as creating documents and spreadsheets, managing calendars, and creating meetings can be issued, and a test document named “Grok Bot” was successfully created.[^grok-bot-manages-feishu]

## 摘要 / Summary

- 作者称之前用 Hermes Agent 管飞书，现已迁移到 Grok Bot，整个过程很简单。 / The author says he previously managed Feishu via Hermes Agent and has now migrated to Grok Bot, with a very simple process.[^grok-bot-manages-feishu]
- 核心步骤是安装飞书 CLI（Lark CLI），用飞书 APP 扫码或通过网页登录授权账号。 / The core step is installing the Feishu CLI (Lark CLI), then authorizing the account by scanning with the Feishu app or logging in via the web.[^grok-bot-manages-feishu]
- 需要手动给机器人授权，建议只申请必要权限，避免权限开得太大。 / The bot must be manually authorized; it is advisable to request only necessary permissions to avoid excessive privileges.[^grok-bot-manages-feishu]
- 测试中让 Grok Bot 创建名为“Grok Bot”的测试文档，直接返回了对应文档页面并正常保留。 / In testing, Grok Bot created a test document named “Grok Bot,” directly returned the corresponding document page, and the document was properly retained.[^grok-bot-manages-feishu]
- 配置好对应权限和功能后，可直接让 Grok Bot 创建文档、表格，或管理日历、创建会议。 / With corresponding permissions and functions configured, Grok Bot can directly create documents and spreadsheets, or manage calendars and create meetings.[^grok-bot-manages-feishu]
- 此前还曾给 Grok Bot 安装美团 Skill 并测试点蜜雪冰城外卖。 / Previously, he also installed a Meituan Skill for Grok Bot and tested ordering Mixue Bingcheng takeout.[^grok-bot-manages-feishu]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2116789958912733574)。 / Original: [link](https://x.com/xiaomovps/status/2116789958912733574).
- Topic: [用 Grok Bot 内置额度桥接 Agent 查 X / Bridge agents to X via Grok Bot built-in quota](../../topics/grok-bot-x-api-substitute.md)
- Topic: [Grok Bot 管 X：情报防护不代发帖 / Grok Bot for X — intel and defense, never auto-post](../../topics/grok-bot-x-intel-defense-not-post.md)
- Topic: [DSH 与 Grok Bot 社区互派 / Community bridges for DSH↔Grok Bot cross-dispatch](../../topics/dsh-grok-cross-dispatch.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^grok-bot-manages-feishu]: Grok Bot Manages Feishu: Migrating from Hermes Agent to Direct Document and Calendar Operations
