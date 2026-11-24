---
type: Source
title: "Matt Pocock · 给人和 agent 一块共用的看板，多数团队应该自己做"
title_en: "Matt Pocock · A shared board for humans and agents; most teams should build it themselves"
description: "马特·波科克认为 Vercel Board 式的人机共用协作看板是好主意，但多数团队应自行构建私有 Slack 工作区来连接人类与智能体。"
description_en: "Matt Pocock argues that a Vercel Board-style shared human-agent collaboration board is a great idea, but most teams should build their own private Slack workspace to connect people and agents."
resource: https://x.com/mattpocockuk/status/2124797717834543167
tags: [agents, human-agent-collaboration, slack-workspace, vercel-board]
sources:
  - id: matt-pocock-vercel-board-agent-human-workspace
    resource: https://x.com/mattpocockuk/status/2124797717834543167
    title: "Matt Pocock · A shared board for humans and agents; most teams should build it themselves"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:32:51+08:00
---

# Matt Pocock · 给人和 agent 一块共用的看板，多数团队应该自己做

*Matt Pocock · A shared board for humans and agents; most teams should build it themselves*

「帖文称」Vercel Board 点燃了 Matt Pocock 的灵感，本质上是一个供智能体与开发者共用的私有 Slack 工作区，甚至可同步到 Slack 频道以提升可观测性。帖文称，该看板让每个本地运行的智能体和每个人类都拥有独立身份，支持智能体互相 ping 或 ping 人类；未读消息可构成队列，供远程智能体与本地智能体在唤醒后对接；还可将定时任务简化为向智能体发送重复消息，并支持多厂商设施与确定性工作流以 /command 形式注册。作者认为这个点子很妙，但大多数团队应当从零自行构建。[^matt-pocock-vercel-board-agent-human-workspace]

Matt Pocock says Vercel Board has been inspiring him, describing it essentially as a private Slack workspace shared by agents and developers, optionally syncing to Slack channels for observability. The post claims every locally running agent and every human gets its own identity on the board, enabling agents to ping humans or other agents; unread messages could form a queue for remote and local agents to connect when they wake up; scheduling becomes a repeating message to an agent; and the concept extends to multi-vendor setups and deterministic workflows as /commands. Pocock thinks the idea is brilliant but believes most teams should build it from scratch.[^matt-pocock-vercel-board-agent-human-workspace]

## 摘要 / Summary

- 帖文将 Vercel Board 描述为智能体与开发者共用的私有 Slack 工作区，并可同步到 Slack 频道。[^matt-pocock-vercel-board-agent-human-workspace]
- The post describes Vercel Board as a private Slack workspace shared by agents and developers, optionally syncing to Slack channels.[^matt-pocock-vercel-board-agent-human-workspace]
- 每个本地运行的智能体和每个人类在看板上都拥有独立身份。[^matt-pocock-vercel-board-agent-human-workspace]
- Each locally running agent and every human has its own identity on the board.[^matt-pocock-vercel-board-agent-human-workspace]
- 智能体可以 ping 人类或其他智能体，未读消息可作为队列供本地智能体唤醒后处理。[^matt-pocock-vercel-board-agent-human-workspace]
- Agents can ping humans or other agents, and unread messages could form a queue for local agents to pick up when they wake up.[^matt-pocock-vercel-board-agent-human-workspace]
- 定时任务可简化为向智能体发送重复消息。[^matt-pocock-vercel-board-agent-human-workspace]
- Scheduling a cron can be modeled as triggering a repeating message to an agent.[^matt-pocock-vercel-board-agent-human-workspace]
- 该构想支持多厂商环境，并允许将确定性工作流注册为 /command。[^matt-pocock-vercel-board-agent-human-workspace]
- The concept supports multi-vendor setups and allows deterministic workflows to be registered as /commands.[^matt-pocock-vercel-board-agent-human-workspace]
- Matt Pocock 认为大多数团队应当从零自行构建，而非直接采用 Vercel 的实现。[^matt-pocock-vercel-board-agent-human-workspace]
- Matt Pocock believes most teams should build this from scratch rather than adopting Vercel's implementation.[^matt-pocock-vercel-board-agent-human-workspace]

## 相关 / Related

- 原文：[链接](https://x.com/mattpocockuk/status/2124797717834543167)。 / Original: [link](https://x.com/mattpocockuk/status/2124797717834543167).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [Agent 进收件箱 / Agents in the inbox](../../topics/agent-in-inbox.md)
- Topic: [Agent 身份与平台握钥 / Agent identity and platform-held keys](../../topics/agent-identity-platform-keys.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^matt-pocock-vercel-board-agent-human-workspace]: Matt Pocock · A shared board for humans and agents; most teams should build it themselves
