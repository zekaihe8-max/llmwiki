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
  - id: turingou-grok-bot-x-subscriber-community
    resource: https://x.com/turingou/status/2115681632166486340
    title: Turingou automates an X subscriber fan group with Grok Bot
  - id: turingou-yobiru-friends-grok-bot-still-works
    resource: https://x.com/turingou/status/2115676372677042384
    title: Turingou says Yobiru still works on Grok Bot
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:43:00+08:00
---

# 个人 Agent 对外分享与 Bot 互聊

*Personal-agent public sharing and bot-to-bot chat*

个人 Agent 不必只停在「一对一助理」：经中心网关注册专有 ID 与网页后，可把 Grok bot、Muse 一类 agent 对外发布或分享给亲朋；不同人的 Bot 可直接聊天、传文件、协商日程。关系上区分单向关注与互关好友——前者便于整理陌生人私信、自动回复并保护隐私，后者让私信直达对方 Bot、无需人工批准。[^turingou-yobiru-friends]

A personal agent need not stay a one-to-one assistant: after registering a dedicated ID and page on a central gateway, agents such as Grok bot or Muse can be published or shared with friends and family; different people’s bots can chat, send files, and negotiate schedules directly. Relations split into one-way follow and mutual friends—the former helps organize stranger DMs, auto-reply, and protect privacy; the latter routes DMs straight into the other bot without human approval.[^turingou-yobiru-friends]

## 综合分析 / Synthesis

[郭宇发布 Yobiru Friends：Bot 互聊与对外分享](../sources/articles/turingou-yobiru-friends.md) 给出产品级实例：Yobiru Friends 正式上线；安装指令可直接交给本机 bot（按 [yobiru.com/zh-cn/install.md](https://yobiru.com/zh-cn/install.md)），在网关拿 ID（作者示例 `guoyu`，[bots.yobiru.com/@guoyu](https://bots.yobiru.com/@guoyu)）；Grok bot Mac 版可 webhook 唤醒；可用 agent 改主页；项目开源，可自建网关并开箱用双向加密聊天；作者框为数字孪生实践。[^turingou-yobiru-friends] 原帖 <https://x.com/turingou/status/2114175110416675209>。主张落在「个人 Agent 可寻址、可分享、可互操作」的社交层，而非单一产品内的会话能力；帖文是发布说明，未给出协议细节、滥用防护或规模化运维证据。

[Turingou launches Yobiru Friends—bot-to-bot chat and public sharing](../sources/articles/turingou-yobiru-friends.md) gives a product-level case: Yobiru Friends ships; install steps can be handed to a local bot (via [yobiru.com/zh-cn/install.md](https://yobiru.com/zh-cn/install.md)) to claim an ID on the gateway (author example `guoyu`, [bots.yobiru.com/@guoyu](https://bots.yobiru.com/@guoyu)); the Grok bot Mac build can wake via webhook; agents can edit the profile; the project is open source with self-hosted gateways and out-of-the-box bidirectional encrypted chat; framed as a digital-twin practice.[^turingou-yobiru-friends] Post: <https://x.com/turingou/status/2114175110416675209>. The claim centers on a social layer where personal agents are addressable, shareable, and interoperable—not in-product chat alone; the post is a launch note and does not detail protocol, abuse defenses, or scale ops evidence.

[郭宇称 Yobiru 在 Grok Bot 仍可用](../sources/articles/turingou-yobiru-friends-grok-bot-still-works.md) 补 **运行面** 澄清（非新功能）：[@turingou](https://x.com/turingou) 回 [@G_Z_Y](https://x.com/G_Z_Y) 称 yobiru 在 Grok Bot 上仍可用；Yobiru Friends 的默认路径是**公开网关加 webhook**，本就不依赖 Tailscale。若仍想用 Tailscale，可直接**明确要求 Grok Bot 重建 Tailscale 登录**——作者称前一日也遇到该问题，坚持要求后 Bot 仍会去做。[^turingou-yobiru-friends-grok-bot-still-works] 原帖 <https://x.com/turingou/status/2115676372677042384>。与发布帖相比，这里强调平台侧变动后 Friends 主路径未断，且 Tailscale 为可选而非默认依赖；帖文是个人排障 anecdote，未定义「平台变更」具体指何。

[Turingou says Yobiru still works on Grok Bot](../sources/articles/turingou-yobiru-friends-grok-bot-still-works.md) adds an **operations** clarification (not a new feature): [@turingou](https://x.com/turingou) tells [@G_Z_Y](https://x.com/G_Z_Y) yobiru still works on Grok Bot; Yobiru Friends’ default path is a **public gateway plus webhooks** and never depended on Tailscale. For a Tailscale-style setup, **explicitly ask Grok Bot to rebuild Tailscale login**—he had the same issue the day before and says insisting still works.[^turingou-yobiru-friends-grok-bot-still-works] Post: <https://x.com/turingou/status/2115676372677042384>. Versus the launch post, this stresses the Friends main path stayed up through platform-side churn and Tailscale is optional, not the default dependency; it is personal troubleshooting anecdote and does not define which “platform change” was meant.

[郭宇用 Grok Bot 自动化管理 X 订阅粉丝群](../sources/articles/turingou-grok-bot-x-subscriber-community.md) 给出同一作者「数字分身」在 **X 平台侧** 的另一面：[@turingou](https://x.com/turingou) 称 X 订阅粉丝群可用 Grok Bot 自动化管理——每条消息及时提醒、群友可在群内提问；数字分身 Agent 草拟建议回复，但**逐条**亲自批准后再发。[^turingou-grok-bot-x-subscriber-community] 原帖 <https://x.com/turingou/status/2115681632166486340>。与 Yobiru 网关 ID / Bot 互聊不同轴（平台内置付费粉丝群 vs 自建网关社交图），但都落在「个人 Agent 对外可达、可代劳草拟」；出站批准边界见 [Grok Bot 管 X：情报防护不代发帖](./grok-bot-x-intel-defense-not-post.md)。

[Turingou automates an X subscriber fan group with Grok Bot](../sources/articles/turingou-grok-bot-x-subscriber-community.md) adds the same author’s **digital twin on X**: [@turingou](https://x.com/turingou) says X subscriber fan groups can be managed via Grok Bot—each message alerts him in time and members can ask in-group; his digital-twin agent drafts suggested replies, but he **approves each one** before send.[^turingou-grok-bot-x-subscriber-community] Post: <https://x.com/turingou/status/2115681632166486340>. Different axis from Yobiru gateway IDs and bot-to-bot chat (platform paid fan group vs self-hosted social graph), but both sit on “personal agents reachable outward and able to draft”; outbound approval bounds live on [Grok Bot for X — intel and defense, never auto-post](./grok-bot-x-intel-defense-not-post.md).

与 [个人 Agent 热潮与 Coding Agent 熟悉度差](./personal-agent-hype-familiarity-gap.md) 同属个人 Agent 叙事，但那页讲热潮体感与熟悉度差，本页讲对外 ID、关注/好友与 Bot 互操作。与 [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md) 相邻于同一产品线，但那页是云机可信度与运维坑，本页是分享与社交图。与 [Agent 身份与平台握钥](./agent-identity-platform-keys.md) 都触及「Agent 身份」，但那边是企业平台收购握钥，这边是个人可分享的公开 ID / 网关，层级不同。

It shares the personal-agent narrative with [Personal-agent hype vs coding-agent familiarity](./personal-agent-hype-familiarity-gap.md), but that page is craze reception and familiarity; this page is public IDs, follow/friend, and bot interoperability. It neighbors [Personal-agent cloud env: backup, isolation, and schedule checks](./personal-agent-cloud-env-pitfalls.md) on the same product line, but that page is cloud-env trust and ops pitfalls; this page is sharing and the social graph. It touches “agent identity” with [Agent identity and platform-held keys](./agent-identity-platform-keys.md), but that topic is enterprise platforms acquiring key control; this one is shareable personal public IDs / gateways—a different layer.

## 矛盾与变化 / Contradictions

[郭宇发布 Yobiru Friends：Bot 互聊与对外分享](../sources/articles/turingou-yobiru-friends.md) 写明互关好友时私信可**直达对方 Bot、无需人工批准**；同作者后来的 [郭宇用 Grok Bot 自动化管理 X 订阅粉丝群](../sources/articles/turingou-grok-bot-x-subscriber-community.md) 则强调 X 粉丝群回复须**逐条亲自批准后再发**——不是互相取消，而是不同产品面（Yobiru 社交图 vs X 付费粉丝群）上出站门禁不同；本页「关注/好友路由」描述仍以前者为准，后者补 X 侧批准式数字分身，不泛化为所有对外 Bot 都须批准。

[Turingou launches Yobiru Friends](../sources/articles/turingou-yobiru-friends.md) states that with mutual friends, DMs can route **straight into the other bot without human approval**; the same author’s later [Turingou automates an X subscriber fan group with Grok Bot](../sources/articles/turingou-grok-bot-x-subscriber-community.md) insists every fan-group reply needs **personal approval before send**—not a cancellation, but different outbound gates on different surfaces (Yobiru social graph vs X paid fan group); this page’s follow/friend routing still follows the former, while the latter adds approval-gated digital twin on X, not “every outward bot must approve.”

## 相关 / Related

- Source: [郭宇发布 Yobiru Friends：Bot 互聊与对外分享](../sources/articles/turingou-yobiru-friends.md)
- Source: [郭宇称 Yobiru 在 Grok Bot 仍可用](../sources/articles/turingou-yobiru-friends-grok-bot-still-works.md)
- Source: [郭宇用 Grok Bot 自动化管理 X 订阅粉丝群](../sources/articles/turingou-grok-bot-x-subscriber-community.md)
- Topic: [个人 Agent 热潮与 Coding Agent 熟悉度差](./personal-agent-hype-familiarity-gap.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md)
- Topic: [Grok Bot 管 X：情报防护不代发帖](./grok-bot-x-intel-defense-not-post.md)
- Topic: [Agent 身份与平台握钥](./agent-identity-platform-keys.md)

[^turingou-yobiru-friends]: Turingou launches Yobiru Friends—bot-to-bot chat and public sharing
[^turingou-yobiru-friends-grok-bot-still-works]: Turingou says Yobiru still works on Grok Bot
[^turingou-grok-bot-x-subscriber-community]: Turingou automates an X subscriber fan group with Grok Bot
