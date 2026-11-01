---
type: Source
title: "jev-router：Claude Code 按任务复杂度自动路由模型以节省成本"
title_en: "jev-router: Automatically route Claude Code models by task complexity to save costs"
description: "jev-router 通过轻量模型判断任务复杂度，自动在 Haiku、Sonnet、Opus 之间路由，以降低 Claude Code 使用成本。"
description_en: "jev-router uses a lightweight model to assess task complexity and automatically routes among Haiku, Sonnet, and Opus to lower Claude Code usage costs."
resource: https://x.com/heydengai/status/2116824852304953788
tags: [claude-code, model-routing, cost-saving, agents]
sources:
  - id: jev-router
    resource: https://x.com/heydengai/status/2116824852304953788
    title: "jev-router: Automatically route Claude Code models by task complexity to save costs"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:16:54+08:00
---

# jev-router：Claude Code 按任务复杂度自动路由模型以节省成本

*jev-router: Automatically route Claude Code models by task complexity to save costs*

「帖文称」发现一个 Claude Code 开源省钱方案 jev-router，其核心思路是让任务决定模型，而非全程使用最贵的 Opus，通过轻量模型判断任务复杂度并自动路由到 Haiku、Sonnet、Opus。同一任务实测显示 Opus 花费 0.421 美元，智能路由 0.254 美元，Sonnet 0.205 美元，三者均通过测试，路由方案比 Opus 省约 40% 但比 Sonnet 贵。[^jev-router]

The post claims jev-router is an open-source cost-saving solution for Claude Code, letting tasks decide the model instead of always using expensive Opus. A lightweight model judges task complexity and auto-routes to Haiku, Sonnet, or Opus. For the same task, Opus cost $0.421, smart routing $0.254, and Sonnet $0.205; all three passed testing, with routing saving about 40% versus Opus but costing more than Sonnet.[^jev-router]

## 摘要 / Summary

- 同一任务实测中，Opus 花费 0.421 美元，智能路由花费 0.254 美元，Sonnet 花费 0.205 美元。 / For the same task, Opus cost $0.421, smart routing $0.254, and Sonnet $0.205.[^jev-router]
- 智能路由方案比 Opus 省约 40%，但比 Sonnet 贵，且三者均通过测试。 / The smart routing solution saves about 40% compared to Opus but costs more than Sonnet, and all three passed testing.[^jev-router]
- 系统通过轻量模型判断任务复杂度，自动将任务路由到 Haiku、Sonnet 或 Opus。 / The system uses a lightweight model to judge task complexity and automatically routes tasks to Haiku, Sonnet, or Opus.[^jev-router]
- jev-router 是面向 Claude Code 的开源省钱方案，GitHub 仓库为 gargpratyush/jev-router。 / jev-router is an open-source cost-saving solution for Claude Code, with the GitHub repository gargpratyush/jev-router.[^jev-router]

## 相关 / Related

- 原文：[链接](https://x.com/heydengai/status/2116824852304953788)。 / Original: [link](https://x.com/heydengai/status/2116824852304953788).
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^jev-router]: jev-router: Automatically route Claude Code models by task complexity to save costs
