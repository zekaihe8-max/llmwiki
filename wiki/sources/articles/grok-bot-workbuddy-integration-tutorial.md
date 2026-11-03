---
type: Source
title: "Grok Bot × WorkBuddy 打通教程"
title_en: "Grok Bot × WorkBuddy Integration Tutorial"
description: "通过私有飞书文档作为交接，把微信聊天记录转发给 WorkBuddy，再由 Grok Bot 查证并写回结果的保姆级教程。"
description_en: "A step-by-step tutorial bridging WeChat chats, WorkBuddy, and Grok Bot through a private Feishu document for fact-checking and result handoff."
resource: https://x.com/0xlangeai/status/2117582319473102854
tags: [grok-bot, workbuddy, feishu, wechat, webhook, agent-integration]
sources:
  - id: grok-bot-workbuddy-wechat-integration
    resource: https://x.com/0xlangeai/status/2117582319473102854
    title: "Grok Bot × WorkBuddy Integration Tutorial"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:08:54+08:00
---

# Grok Bot × WorkBuddy 打通教程

*Grok Bot × WorkBuddy Integration Tutorial*

帖文称，蓝哥AI发布了一篇保姆级教程，展示如何在电脑端把微信聊天记录转发给 WorkBuddy，由 Grok Bot 查公开资料并把结论写回同一篇私有飞书文档，最后由 WorkBuddy 读回链接与结论。[^grok-bot-workbuddy-wechat-integration]

The post says Lan Ge AI published a step-by-step tutorial showing how to forward a WeChat chat record from desktop to WorkBuddy, have Grok Bot verify public sources, write results into a shared private Feishu document, and read the conclusion and links back in WorkBuddy.[^grok-bot-workbuddy-wechat-integration]

## 摘要 / Summary

- 教程以电脑端微信转发一条图片消息给 WorkBuddy 为起点，由 WorkBuddy 提炼公开问题并派单给 Grok Bot。 / The tutorial starts by forwarding a WeChat image message from desktop WeChat to WorkBuddy, which extracts a public question and dispatches it to Grok Bot.[^grok-bot-workbuddy-wechat-integration]
- 两个工具通过一篇私有飞书文档交接：Grok Bot 用飞书 CLI 追加查证结果，WorkBuddy 再按任务编号读回结论和链接。 / The two tools hand off through a private Feishu document: Grok Bot appends verification results via Feishu CLI, and WorkBuddy reads back conclusions and links by task ID.[^grok-bot-workbuddy-wechat-integration]
- Grok Bot 需建立仅在收到 Webhook 请求时运行的「微信查证」例行任务，WorkBuddy 向其 Webhook 地址发送带 Bearer key 的 POST 请求。 / Grok Bot must create a "WeChat verification" routine that runs only on Webhook requests, while WorkBuddy sends a POST with Authorization Bearer key to its Webhook address.[^grok-bot-workbuddy-wechat-integration]
- 实操案例查证了 Claude Ultra 用量规则，Grok Bot 引用了官推原帖和官方帮助中心链接。 / The hands-on case verified Claude Ultra usage rules, with Grok Bot citing the official X post and official help center links.[^grok-bot-workbuddy-wechat-integration]
- 电脑版微信支持将聊天记录分享到腾讯 WorkBuddy，手机端不能使用该导出入口。 / Desktop WeChat supports sharing chat records to Tencent WorkBuddy; the mobile export entry is not available.[^grok-bot-workbuddy-wechat-integration]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2117582319473102854)。 / Original: [link](https://x.com/0xlangeai/status/2117582319473102854).
- Topic: [用 Grok Bot 内置额度桥接 Agent 查 X / Bridge agents to X via Grok Bot built-in quota](../../topics/grok-bot-x-api-substitute.md)
- Topic: [Grok Bot 管 X：情报防护不代发帖 / Grok Bot for X — intel and defense, never auto-post](../../topics/grok-bot-x-intel-defense-not-post.md)
- Topic: [Agent 产出直送 Notion 阅读 / Agent output routed to Notion for reading](../../topics/agent-output-to-notion-reading.md)

[^grok-bot-workbuddy-wechat-integration]: Grok Bot × WorkBuddy Integration Tutorial
