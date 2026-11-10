---
type: Source
title: "Rauch：MCP Events 补齐跨会话回调，Vercel MCP 支持部署事件订阅"
title_en: "Rauch on MCP Events: Cross-Session Callbacks and Vercel MCP Deployment Event Subscriptions"
description: "Vercel 联合创始人宣布 MCP Events 支持，Agent 可订阅部署成功/失败事件并通过 Webhook 接收通知，无需轮询。"
description_en: "Vercel's co-founder announces MCP Events support, letting agents subscribe to deployment success/error events via webhooks without polling."
resource: https://x.com/rauchg/status/2119891138450755670
tags: [mcp, agents, vercel, events, webhooks]
sources:
  - id: 57a0599966c870df
    resource: https://x.com/rauchg/status/2119891138450755670
    title: "Rauch on MCP Events: Cross-Session Callbacks and Vercel MCP Deployment Event Subscriptions"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T08:17:55+08:00
---

# Rauch：MCP Events 补齐跨会话回调，Vercel MCP 支持部署事件订阅

*Rauch on MCP Events: Cross-Session Callbacks and Vercel MCP Deployment Event Subscriptions*

帖文称，Guillermo Rauch 对模型上下文协议（MCP）持看好态度，认为其效用远超“M”本身，有望成为让所有系统通过一个通用开放协议通信的文明级成就。他指出 MCP 此前只能读写，无法在稍后告知“此事件已发生”，MCP Events 填补了这一缺口。Vercel 正在其 MCP 中增加支持，Agent 可订阅 deployment.succeeded 等事件，而非轮询；借助 Vercel Queues 与 Workflows，编写 MCP 后端机制变得简单。[^57a0599966c870df]

The post says Guillermo Rauch is bullish on the Model Context Protocol (MCP), arguing its utility goes beyond the “M” and could become a civilization-scale accomplishment if all systems communicate through one universal open protocol. He notes MCP previously supported read/write but could not notify subscribers later that an event occurred; MCP Events addresses this gap. Vercel is adding support in its own MCP, allowing agents to subscribe to events such as deployment.succeeded instead of polling, with Vercel Queues and Workflows simplifying backend implementation.[^57a0599966c870df]

## 摘要 / Summary

- 帖文称 MCP 的效用超越“M”部分，可作为系统间通信的通用开放协议。 / The post says MCP's utility exceeds the “M” and can serve as a universal open protocol for system communication.[^57a0599966c870df]
- MCP Events 补齐了跨会话任意回调的缺失，可在事件发生后通知订阅者。 / MCP Events fills the missing ability to send arbitrary callbacks across sessions and notify subscribers after an event occurs.[^57a0599966c870df]
- Vercel MCP 现支持发布事件，Agent 可订阅 deployment.succeeded 与 deployment.error，并通过 Webhook 接收通知。 / Vercel MCP now publishes events; agents can subscribe to deployment.succeeded and deployment.error and receive webhook notifications.[^57a0599966c870df]
- 订阅事件可替代轮询，例如 Agent 发起部署后无需轮询即可得知部署完成。 / Subscribing to events replaces polling, so an agent that triggers a deployment can learn of completion without polling.[^57a0599966c870df]
- 帖文称，借助 Vercel Queues 与 Workflows，为自有 MCP 编写事件后端机制变得简单。 / The post says Vercel Queues and Workflows make it easy to build backend event machinery for your own MCP.[^57a0599966c870df]

## 相关 / Related

- 原文：[链接](https://x.com/rauchg/status/2119891138450755670)。 / Original: [link](https://x.com/rauchg/status/2119891138450755670).
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^57a0599966c870df]: Rauch on MCP Events: Cross-Session Callbacks and Vercel MCP Deployment Event Subscriptions
