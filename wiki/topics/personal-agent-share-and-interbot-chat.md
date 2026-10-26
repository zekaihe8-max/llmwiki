---
type: Topic
title: 个人 Agent 对外分享与 Bot 互聊
title_en: Personal-agent public sharing and bot-to-bot chat
description: 个人 Agent 可经网关注册专有 ID 与网页，对外分享给亲友；Bot 之间可聊天、传文件、协商日程，并以单向关注与互关好友区分私信路由与隐私边界。
description_en: A personal agent can register a dedicated ID and page on a gateway for sharing with friends; bots can chat, send files, and negotiate schedules, with one-way follow versus mutual friends separating DM routing and privacy bounds.
tags: [personal-agents, yobiru, yobiru-friends, grok-bot, muse, digital-twin, bot-to-bot, open-source]
sources:
  - id: turingou-yobiru-friends
    resource: https://x.com/turingou/status/2114175110416675209
    title: Turingou launches Yobiru Friends—bot-to-bot chat and public sharing
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:42:00+08:00
---

# 个人 Agent 对外分享与 Bot 互聊

*Personal-agent public sharing and bot-to-bot chat*

个人 Agent 不必只停在「一对一助理」：经中心网关注册专有 ID 与网页后，可把 Grok bot、Muse 一类 agent 对外发布或分享给亲朋；不同人的 Bot 可直接聊天、传文件、协商日程。关系上区分单向关注与互关好友——前者便于整理陌生人私信、自动回复并保护隐私，后者让私信直达对方 Bot、无需人工批准。[^turingou-yobiru-friends]

A personal agent need not stay a one-to-one assistant: after registering a dedicated ID and page on a central gateway, agents such as Grok bot or Muse can be published or shared with friends and family; different people’s bots can chat, send files, and negotiate schedules directly. Relations split into one-way follow and mutual friends—the former helps organize stranger DMs, auto-reply, and protect privacy; the latter routes DMs straight into the other bot without human approval.[^turingou-yobiru-friends]

## 综合分析 / Synthesis

[郭宇发布 Yobiru Friends：Bot 互聊与对外分享](../sources/articles/turingou-yobiru-friends.md) 给出产品级实例：Yobiru Friends 正式上线；安装指令可直接交给本机 bot（按 [yobiru.com/zh-cn/install.md](https://yobiru.com/zh-cn/install.md)），在网关拿 ID（作者示例 `guoyu`，[bots.yobiru.com/@guoyu](https://bots.yobiru.com/@guoyu)）；Grok bot Mac 版可 webhook 唤醒；可用 agent 改主页；项目开源，可自建网关并开箱用双向加密聊天；作者框为数字孪生实践。[^turingou-yobiru-friends] 原帖 <https://x.com/turingou/status/2114175110416675209>。主张落在「个人 Agent 可寻址、可分享、可互操作」的社交层，而非单一产品内的会话能力；帖文是发布说明，未给出协议细节、滥用防护或规模化运维证据。

[Turingou launches Yobiru Friends—bot-to-bot chat and public sharing](../sources/articles/turingou-yobiru-friends.md) gives a product-level case: Yobiru Friends ships; install steps can be handed to a local bot (via [yobiru.com/zh-cn/install.md](https://yobiru.com/zh-cn/install.md)) to claim an ID on the gateway (author example `guoyu`, [bots.yobiru.com/@guoyu](https://bots.yobiru.com/@guoyu)); the Grok bot Mac build can wake via webhook; agents can edit the profile; the project is open source with self-hosted gateways and out-of-the-box bidirectional encrypted chat; framed as a digital-twin practice.[^turingou-yobiru-friends] Post: <https://x.com/turingou/status/2114175110416675209>. The claim centers on a social layer where personal agents are addressable, shareable, and interoperable—not in-product chat alone; the post is a launch note and does not detail protocol, abuse defenses, or scale ops evidence.

与 [个人 Agent 热潮与 Coding Agent 熟悉度差](./personal-agent-hype-familiarity-gap.md) 同属个人 Agent 叙事，但那页讲热潮体感与熟悉度差，本页讲对外 ID、关注/好友与 Bot 互操作。与 [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md) 相邻于同一产品线，但那页是云机可信度与运维坑，本页是分享与社交图。与 [Agent 身份与平台握钥](./agent-identity-platform-keys.md) 都触及「Agent 身份」，但那边是企业平台收购握钥，这边是个人可分享的公开 ID / 网关，层级不同。

It shares the personal-agent narrative with [Personal-agent hype vs coding-agent familiarity](./personal-agent-hype-familiarity-gap.md), but that page is craze reception and familiarity; this page is public IDs, follow/friend, and bot interoperability. It neighbors [Personal-agent cloud env: backup, isolation, and schedule checks](./personal-agent-cloud-env-pitfalls.md) on the same product line, but that page is cloud-env trust and ops pitfalls; this page is sharing and the social graph. It touches “agent identity” with [Agent identity and platform-held keys](./agent-identity-platform-keys.md), but that topic is enterprise platforms acquiring key control; this one is shareable personal public IDs / gateways—a different layer.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [郭宇发布 Yobiru Friends：Bot 互聊与对外分享](../sources/articles/turingou-yobiru-friends.md)
- Topic: [个人 Agent 热潮与 Coding Agent 熟悉度差](./personal-agent-hype-familiarity-gap.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md)
- Topic: [Agent 身份与平台握钥](./agent-identity-platform-keys.md)

[^turingou-yobiru-friends]: Turingou launches Yobiru Friends—bot-to-bot chat and public sharing
