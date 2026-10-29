---
type: Source
title: 小墨暴论 Grok Bot 是 Hermes Agent 上位替代
title_en: Xiaomo’s hot take that Grok Bot supersedes Hermes Agent
description: 小墨用一个月 Grok Bot 后称它更符合当初折腾 Hermes 的个人助手目标：提醒与定时、Skill/MCP 自动化与文档（如飞书 CLI）可迁移，官方已做密码与手机连接等基础能力，不必再因模型更新与记忆框架天天维护；仍承认要完全掌控底层时 Hermes 很好，并盼支付、直连与国内软件兼容改进。
description_en: After a month on Grok Bot, Xiaomo says it better matches why he tinkered with Hermes Agent—reminders and schedules, Skill/MCP automation, and docs (e.g. Feishu CLI) can migrate; official password and phone connectors cut DIY ops, without daily framework maintenance on model updates and memory refactors; he still praises Hermes for full stack control and hopes for payment, direct connectivity, and domestic-app compatibility.
resource: https://x.com/xiaomovps/status/2115743740577157595
tags: [grok-bot, grokbot, hermes-agent, xiaomovps, personal-agents, skill, mcp, feishu, migration, subscription]
sources:
  - id: xiaomovps-grok-bot-over-hermes-hot-take
    resource: https://x.com/xiaomovps/status/2115743740577157595
    title: Xiaomo’s hot take that Grok Bot supersedes Hermes Agent
    author: human:xiaomovps
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:32:00+08:00
date: 2026-10-29
---

# 小墨暴论 Grok Bot 是 Hermes Agent 上位替代

*Xiaomo’s hot take that Grok Bot supersedes Hermes Agent*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）发「暴论」：用了一个月 Grok Bot 后，觉得它是 Hermes Agent 的上位替代。他原先花大量时间折腾 Hermes Agent，目标是个人助手——打理生活与工作的琐事；需求并不复杂：简单日常提醒与定时任务、通过 Skill 或 MCP 连接软件做自动化、处理文档（例如直连飞书 CLI）。他也研究过 GPT 等生态更完整的产品，但国内常用软件（飞书、夸克网盘等）兼容性差，GPT 需单独 APP，许多国内工具没有官方应用可连，而 Notion、GitHub 等国外软件安装授权即可跨 Web/APP/桌面；要把国内软件全打通往往仍得自己用 CLI、Skill 或 MCP。于是他在 Hermes 上补全记忆管理、上下文压缩比例、模型调度与工具调用，常用工具的 Skill 与授权已就绪，效率明显改善，但发现「什么都能自己折腾」也意味着「什么都要自己维护」——模型每次更新都要重调比例与调度，记忆框架多次重构后还要重设或让 AI 质检，Hermes 自身升级有时还会让原框架出问题、连定时任务都跑不通。改用 Grok Bot 后，他认为以前在 Hermes 上的绝大部分功能可迁移：Grok Bot 本质是 Agent 加 Linux 服务器，工具、Skill、MCP 可用类似方法实现，做好授权与配置备份还原即可；且官方已做密码服务、手机应用连接等基础能力，不必再天天维护整个 Agent 框架，也不必因模型更新、记忆调整或版本升级反复折腾。一个月下来更符合当初折腾 Hermes 的目的；若喜欢完全掌控底层框架，Hermes 依然很好，但他要的是能办事的助手而非天天维护的 Agent。文末希望官方改进支付、网络直连与国内软件兼容，让普通用户少折腾就能用。[^xiaomovps-grok-bot-over-hermes-hot-take] 原帖 <https://x.com/xiaomovps/status/2115743740577157595>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) posts a “hot take”: after one month on Grok Bot, he sees it as a superior replacement for Hermes Agent. He had spent heavily on Hermes Agent to be a personal assistant for life and work chores—simple reminders and scheduled tasks, Skill or MCP hooks for automation, and document work (e.g. Feishu CLI). He also looked at GPT and other fuller ecosystems, but many domestic apps (Feishu, Quark cloud drive, etc.) fit poorly—GPT needs its own app, and many Chinese tools lack official connectors, while Notion, GitHub, and other foreign apps install and authorize across web, app, and desktop; wiring all domestic tools still often means CLI, Skill, or MCP yourself. On Hermes he filled in memory management, context-compression ratios, model scheduling, and tool calling; Skills and auth for his usual tools were ready and productivity rose, but “everything DIY” meant “everything to maintain”—each model update forced retuning ratios and schedules, memory-framework refactors needed resets or AI QA, and Hermes upgrades sometimes broke his stack, even stopping scheduled tasks. On Grok Bot he says most Hermes capabilities migrate: Grok Bot is essentially an agent plus a Linux server; tools, Skills, and MCP can be done similarly with auth plus config backup/restore; official password service and phone app connectors cut DIY plumbing, without daily framework maintenance on model updates, memory tweaks, or version bumps. After a month it matches why he tinkered with Hermes; if you want full control of the underlying framework, Hermes remains strong, but he wants an assistant that gets things done, not an agent to maintain daily. He hopes the product improves payment, direct network access, and domestic-app compatibility so ordinary users need less tinkering.[^xiaomovps-grok-bot-over-hermes-hot-take] Post: <https://x.com/xiaomovps/status/2115743740577157595>.

## 摘要 / Summary

- 选型背景：个人助手需求（提醒/定时、Skill/MCP 自动化、文档/飞书 CLI）；GPT 生态对国内常用软件不友好，Hermes 可深度自配但运维负担高。[^xiaomovps-grok-bot-over-hermes-hot-take]
- Selection context: personal-assistant needs (reminders/schedules, Skill/MCP automation, docs/Feishu CLI); GPT’s ecosystem fits domestic apps poorly; Hermes allows deep DIY but high ops burden.[^xiaomovps-grok-bot-over-hermes-hot-take]
- Hermes 痛点：模型更新重调调度与压缩比例、记忆框架重构、Agent 升级可破坏定时与既有配置——「能折腾」=「要维护」。[^xiaomovps-grok-bot-over-hermes-hot-take]
- Hermes pain: model updates retune scheduling and compression, memory refactors, agent upgrades can break schedules and prior config—“can DIY everything” = “must maintain everything.”[^xiaomovps-grok-bot-over-hermes-hot-take]
- Grok Bot 主张：Agent + Linux 云机，Skill/MCP/工具可迁移（授权 + 备份还原）；官方密码服务、手机连接等减少自建；作者一个月体验后更贴近「办事的助手」而非「天天维护框架」。[^xiaomovps-grok-bot-over-hermes-hot-take]
- Grok Bot claim: agent plus Linux host, Skills/MCP/tools migrate with auth and backup/restore; official password service and phone connectors reduce DIY; one month in, closer to “assistant that works” than “daily framework upkeep.”[^xiaomovps-grok-bot-over-hermes-hot-take]
- 边界：仍认可 Hermes 适合要完全掌控底层者；普通用户侧仍盼支付、直连与国内软件兼容。[^xiaomovps-grok-bot-over-hermes-hot-take]
- Scope: still credits Hermes for full stack control; ordinary users still want payment, direct connectivity, and domestic-app compatibility.[^xiaomovps-grok-bot-over-hermes-hot-take]

## 相关 / Related

- Topic: [个人 Agent 云环境的备份、隔离与定时检查](../../topics/personal-agent-cloud-env-pitfalls.md)
- Topic: [高端 AI 订阅价值](../../topics/premium-ai-subscription-value.md)
- Topic: [工作流优先于智能体](../../topics/workflows-before-agents.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Source: [小墨谈 Grok Bot 从 0 到 1 长文](./xiaomovps-grok-bot-zero-to-one-guide.md)

[^xiaomovps-grok-bot-over-hermes-hot-take]: Xiaomo’s hot take that Grok Bot supersedes Hermes Agent
