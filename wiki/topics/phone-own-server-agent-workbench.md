---
type: Topic
title: 手机连自有服务器操控 Agent 工作台
title_en: Phone + own server as a mobile agent workbench
description: 用手机客户端连自己的服务器，即可随时访问与操控桌面侧的多款编程 / harness Agent 与本地模型，并把多 Agent 协作、任务交接与已有订阅一并带上——把电脑上的 Agent 工作台装进手机。
description_en: A phone client connected to your own server can remotely access and control desktop-side coding/harness agents and local models—carrying multi-agent collaboration, task handoff, and existing subscriptions along—putting the desktop agent workbench into the phone.
tags: [openbot, iphone, app-store, self-hosted, personal-agents, coding-agents, mobile]
sources:
  - id: heydengai-openbot-app-store
    resource: https://x.com/heydengai/status/2115367414368202876
    title: Heydengai on OpenBot shipping on the App Store
  - id: xiaomovps-five-grok-bot-alternatives
    resource: https://x.com/xiaomovps/status/2116040504425255099
    title: Xiaomo on five open-source alternatives to Grok Bot
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:21:47+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 手机连自有服务器操控 Agent 工作台

*Phone + own server as a mobile agent workbench*

当 Agent 工作台已落在自有（或自管）服务器上时，可用手机客户端连过去：随时随地访问与操控 Claude Code、Codex、Cursor 等编程 / harness Agent，以及 Ollama、LM Studio 一类本地模型；产品侧还可宣称多 Agent 协作、任务交接，并复用已有 AI 订阅——把「电脑上的工作台」收成手机入口，正式上架后可告别 TestFlight。[^heydengai-openbot-app-store] 适用边界：这是上架与能力清单叙事，不是安全审计或跨产品评测；未规定服务器规格、鉴权与网络拓扑，也不等于手机本地跑重模型。

When the agent workbench already sits on a self-owned (or self-managed) server, a phone client can connect to it: access and control coding/harness agents such as Claude Code, Codex, and Cursor—and local models via Ollama or LM Studio—anytime; products may also claim multi-agent collaboration, task handoff, and reuse of existing AI subscriptions—shrinking the “desktop workbench” into a phone front door, with App Store shipping ending TestFlight.[^heydengai-openbot-app-store] Scope: a ship-and-capability-list narrative, not a security audit or cross-product review; it does not fix server specs, auth, or network topology, and is not the same as running heavy models on-device.

## 综合分析 / Synthesis

手机入口与服务器执行应分开评估：[小墨的替代项目整理](../sources/articles/xiaomovps-five-grok-bot-alternatives.md) 称，基于 Pi 的 Rakazo 已有 iPhone、Android、桌面与 Web 客户端，并支持 Docker 部署到自有 VPS，扩展了本页控制面模式的产品证据。多端可访问并不能证明鉴权、Bot 隔离或长期运行可靠性；同帖对 OpenBot 的开发预览、高默认权限与非商业许可证提醒说明，自托管可控性仍须与成熟度、权限和使用许可分别判断。[^xiaomovps-five-grok-bot-alternatives]

Phone access and server execution should be assessed separately: [Xiaomo’s alternatives survey](../sources/articles/xiaomovps-five-grok-bot-alternatives.md) describes Pi-based Rakazo with iPhone, Android, desktop, and web clients plus Docker deployment on a self-managed VPS, adding product evidence for this control-surface pattern. Multiple clients do not establish authentication quality, bot isolation, or long-running reliability; the same post’s warnings about OpenBot’s preview status, broad default permissions, and noncommercial license show that self-hosting control still needs separate assessment of maturity, permissions, and usage rights.[^xiaomovps-five-grok-bot-alternatives]

[小邓同学谈 OpenBot 上架 App Store](../sources/articles/heydengai-openbot-app-store.md) 给出可复述产品切面：OpenBot 上架苹果 App Store；连自己的服务器后用 iPhone 操控列出的多款 Agent 与本地模型；支持多 Agent 协作与任务交接，并可直接用已有订阅；作者比喻是把电脑上的 AI Agent 工作台装进手机；官方补充「No more TestFlight」。[^heydengai-openbot-app-store] 原帖 <https://x.com/heydengai/status/2115367414368202876>；站点 <https://openbot.run/>。耐久点是「手机客户端 ↔ 自有服务器上的 Agent 工作台」控制面，而不是某一家 App 的功能表 alone。

[Heydengai on OpenBot shipping on the App Store](../sources/articles/heydengai-openbot-app-store.md) gives a retellable product cut: OpenBot on the Apple App Store; after connecting your own server, control the listed agents and local models from an iPhone; multi-agent collaboration and task handoff, plus direct use of existing subscriptions; the author metaphor is putting the desktop AI-agent workbench into the phone; the official account adds “No more TestFlight.”[^heydengai-openbot-app-store] Post: <https://x.com/heydengai/status/2115367414368202876>; site <https://openbot.run/>. The durable point is the “phone client ↔ agent workbench on your own server” control surface, not one app’s feature list alone.

与 [手机端 Agent 全链路开发](./mobile-agent-dev-full-chain.md) 同属「人不在重机旁仍用手机推进 Agent 工作」，但那页是 Grok Bot → Cursor Cloud → GitHub PR/CI 的云端拼装链与人侧三件事；本页是连自有服务器、把桌面多 Agent 工作台收成手机入口，不绑定 Cursor Cloud 或 PR 发布。与 [手机变轻与 Mac 专供 Agent](./lighter-phone-macs-for-agents.md) 同属「手机变轻入口、重活在他处机器」，但那页讲购机预算与设备角色；本页讲产品客户端形态，证据不重叠，可并存。与 [远程 AI Coding 时笔记本只需轻与续航](./laptop-light-battery-remote-ai-coding.md) 同属「便携端连回远端干活」，但那页是外出笔记本硬件需求收缩；本页是 iPhone App ↔ 自有服务器。与 [个人 Agent 当包工头调度编程 Agent](./personal-agent-foreman-over-coding-agents.md) 都触及多 Agent / 调度语汇，但那页是 Grok 当包工头的角色与订阅分层；本页是手机控制面产品，不规定谁当包工头。与 [精简核心与社区扩展](./minimal-core-community-extensions.md) 中 Pi Pocket「移动端远程 Session」相邻于移动远程访问，但那页拥有精简核心 + 社区分化架构主张；本页不绑定某一 harness 核心或社区分支名单。

It shares “keep agent work moving from the phone without sitting at the heavy box” with [Mobile-first agent full-chain development](./mobile-agent-dev-full-chain.md), but that page is Grok Bot → Cursor Cloud → GitHub PR/CI assembly and the human’s three jobs; this page is connect-your-own-server and shrink a multi-agent desktop workbench into a phone front door, unbound to Cursor Cloud or PR release. It shares “phone lightens; heavy work elsewhere” with [Lighter phones and Macs dedicated to agents](./lighter-phone-macs-for-agents.md), but that page is purchase budget and device roles; this page is the client product shape—evidence does not overlap and can coexist. It shares “portable side connects back to remote work” with [Laptops need only lightness and battery when AI coding is remote](./laptop-light-battery-remote-ai-coding.md), but that page is travel-laptop hardware-need shrinkage; this page is iPhone app ↔ own server. It shares multi-agent / dispatch wording with [Personal agent as foreman over coding agents](./personal-agent-foreman-over-coding-agents.md), but that page is Grok-as-foreman roles and subscription layering; this page is a phone control-surface product and does not name who is foreman. It neighbors Pi Pocket “mobile remote Sessions” in [Minimal core and community extensions](./minimal-core-community-extensions.md), but that page owns slim-core + community-divergence architecture; this page is not tied to one harness trunk or branch roster.

## 矛盾与变化 / Contradictions

[小邓的 OpenBot 上架帖](../sources/articles/heydengai-openbot-app-store.md) 称已正式上架 App Store；[小墨的替代项目帖](../sources/articles/xiaomovps-five-grok-bot-alternatives.md) 则将其所列 OpenBot 称为开发预览。两帖未建立所指仓库与版本的一一对应，不能确认是同一项目状态变化，也不能据此撤回旧的上架记录。[^heydengai-openbot-app-store][^xiaomovps-five-grok-bot-alternatives]

[Heydengai’s OpenBot post](../sources/articles/heydengai-openbot-app-store.md) reports an App Store release, while [Xiaomo’s alternatives post](../sources/articles/xiaomovps-five-grok-bot-alternatives.md) calls its listed OpenBot a development preview. The posts do not establish a repository and version mapping, so this cannot be confirmed as a status change in the same project or used to withdraw the earlier release record.[^heydengai-openbot-app-store][^xiaomovps-five-grok-bot-alternatives]

## 相关 / Related

- Source: [小墨整理五个 Grok Bot 开源替代项目 / Xiaomo on five open-source alternatives to Grok Bot](../sources/articles/xiaomovps-five-grok-bot-alternatives.md)

- Source: [小邓同学谈 OpenBot 上架 App Store](../sources/articles/heydengai-openbot-app-store.md)
- Topic: [手机端 Agent 全链路开发](./mobile-agent-dev-full-chain.md)
- Topic: [手机变轻与 Mac 专供 Agent](./lighter-phone-macs-for-agents.md)
- Topic: [远程 AI Coding 时笔记本只需轻与续航](./laptop-light-battery-remote-ai-coding.md)
- Topic: [个人 Agent 当包工头调度编程 Agent](./personal-agent-foreman-over-coding-agents.md)
- Topic: [精简核心与社区扩展](./minimal-core-community-extensions.md)

[^heydengai-openbot-app-store]: Heydengai on OpenBot shipping on the App Store

[^xiaomovps-five-grok-bot-alternatives]: Xiaomo on five Grok Bot alternatives
