---
type: Source
title: "Claude 模型选型指南：Haiku、Sonnet、Opus 与 Fable 如何选择"
title_en: "Which Claude model should you build with? Fable, Opus, Sonnet, or Haiku"
description: "官方文档解读如何在 Claude Haiku、Sonnet、Opus 与 Fable 之间根据任务类型、成本与延迟选择模型。"
description_en: "An official guide to choosing among Claude Haiku, Sonnet, Opus, and Fable models based on task type, cost, and latency."
resource: https://claude.dev/blog/which-claude-model-should-you-build-with
tags: [claude, model-selection, anthropic, api, agents]
sources:
  - id: which-claude-model-should-you-build-with
    resource: https://claude.dev/blog/which-claude-model-should-you-build-with
    title: "Which Claude model should you build with? Fable, Opus, Sonnet, or Haiku"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T08:50:38+08:00
---

# Claude 模型选型指南：Haiku、Sonnet、Opus 与 Fable 如何选择

*Which Claude model should you build with? Fable, Opus, Sonnet, or Haiku*

「帖文称」当前 Claude 阵容包含四款通用模型：Claude Haiku 5.5、Claude Sonnet 5.5、Claude Opus 5.5 与 Claude Fable 5.2，Claude Mythos 5.2 则用于网络安全与生命科学研究，需通过验证计划使用。文章建议大多数编程与知识工作从 Opus 5.5 的默认中等 effort 开始，再按任务难度向下切换到 Sonnet 5.5 或 Haiku 5.5，或向上切换到 Fable 5.2 处理最困难的技术项目。[^which-claude-model-should-you-build-with]

The post says the current Claude lineup includes four generally available models—Claude Haiku 5.5, Claude Sonnet 5.5, Claude Opus 5.5, and Claude Fable 5.2—while Claude Mythos 5.2 serves cybersecurity and life sciences research through verification programs. It recommends starting most coding and knowledge work on Opus 5.5 at default medium effort, then stepping down to Sonnet 5.5 or Haiku 5.5 by task difficulty, or up to Fable 5.2 for the hardest technical projects.[^which-claude-model-should-you-build-with]

## 摘要 / Summary

- 四款通用模型均拥有 1M 令牌上下文窗口和 128K 令牌最大输出。[^which-claude-model-should-you-build-with]
- All four generally available models have a 1M-token context window and 128K-token max output.[^which-claude-model-should-you-build-with]
- API 列表价格中，Haiku 5.5 输入/输出分别为 0.10 美元/0.50 美元（每百万令牌，100K 令牌以内），Sonnet 5.5 为 2 美元/10 美元，Opus 5.5 为 4 美元/20 美元，Fable 5.2 为 8 美元/40 美元。[^which-claude-model-should-you-build-with]
- API list prices per million tokens are Haiku 5.5 $0.10 input / $0.50 output (up to 100K tokens), Sonnet 5.5 $2 / $10, Opus 5.5 $4 / $20, and Fable 5.2 $8 / $40.[^which-claude-model-should-you-build-with]
- Opus 5.5 与 Fable 5.2 提供 fast mode，可以溢价价格获得更高输出速度；Haiku 5.5 与 Sonnet 5.5 不提供。[^which-claude-model-should-you-build-with]
- Opus 5.5 and Fable 5.2 offer fast mode for higher output speed at premium pricing; Haiku 5.5 and Sonnet 5.5 do not.[^which-claude-model-should-you-build-with]
- 建议将日常工程与调试交给 Opus 5.5（中等 effort，默认），将分类、路由与高提取量工作交给 Haiku 5.5，将最困难的编程、金融与科学项目交给 Fable 5.2。[^which-claude-model-should-you-build-with]
- Everyday engineering and debugging should start on Opus 5.5 at medium effort; classification, routing, and high-volume extraction on Haiku 5.5; and the hardest coding, finance, and science projects on Fable 5.2.[^which-claude-model-should-you-build-with]
- 所有模型的 API thinking 均为自适应并默认开启，其中 Opus 5.5 与 Fable 5.2 始终开启 thinking。[^which-claude-model-should-you-build-with]
- Thinking on the API is adaptive and on by default for all models, with Opus 5.5 and Fable 5.2 always on.[^which-claude-model-should-you-build-with]

## 相关 / Related

- 原文：[链接](https://claude.dev/blog/which-claude-model-should-you-build-with)。 / Original: [link](https://claude.dev/blog/which-claude-model-should-you-build-with).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^which-claude-model-should-you-build-with]: Which Claude model should you build with? Fable, Opus, Sonnet, or Haiku
