---
type: Source
title: "官方模型表"
title_en: "Official Model Table"
description: "Antigravity 官方模型选型、思维等级与计划可用性说明"
description_en: "Antigravity official model selection, reasoning levels, and plan availability guide"
resource: https://antigravity.google/docs/models
tags: [antigravity, models, google-ai, orchestrator]
sources:
  - id: antigravity-official-model-table
    resource: https://antigravity.google/docs/models
    title: "Official Model Table"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:04:19+08:00
---

# 官方模型表

*Official Model Table*

「帖文称」Antigravity 面向 Google AI 免费/Plus、Pro 试用/付费、Ultra 及 Enterprise 计划提供多种前沿推理模型，用户可在模型选择器中切换模型并设置低、中、高或额外思维等级，还可选择 Orchestrator 让规划模型与执行模型协作。[^antigravity-official-model-table]

The post says Antigravity offers multiple frontier reasoning models across Google AI Free/Plus, Pro trial/paid, Ultra, and Enterprise plans, letting users switch models and set Low, Medium, High, or Extra thinking levels, or choose Orchestrator to pair a planner model with a faster executor.[^antigravity-official-model-table]

## 摘要 / Summary

- Gemini 4 Neon、Gemini 4 Carbon、Gemini 4 Argon 仅在付费 Google AI Pro（或符合条件的高端设备试用）、Google AI Ultra 及 Enterprise 可用；Gemini 4 Hydrogen 面向所有计划开放。[^antigravity-official-model-table]
- Gemini 4 Neon, Carbon, and Argon are available only on paid Google AI Pro (or eligible premium-device trials), Google AI Ultra, and Enterprise; Gemini 4 Hydrogen is available on all plans.[^antigravity-official-model-table]
- Orchestrator 可在 Google AI Ultra、Google AI Pro 付费或试用及 Enterprise 中使用，默认规划模型为 Gemini 4 Neon，执行模型为 Gemini 4 Hydrogen；Enterprise 中 Orchestrator 仅运行 Gemini 4 Carbon（高）配对 Gemini 4 Hydrogen（高）。[^antigravity-official-model-table]
- Orchestrator is available on Google AI Ultra, paid/trial Google AI Pro, and Enterprise, with Gemini 4 Neon as default planner and Gemini 4 Hydrogen as executor; in Enterprise it only pairs Gemini 4 Carbon (High) with Gemini 4 Hydrogen (High).[^antigravity-official-model-table]
- 大多数可调 Gemini 模型提供低、中（默认）、高思维等级，Gemini 4 Neon 与 Gemini 4 Hydrogen 还增加“额外”等级（CLI 中为 xhigh）。[^antigravity-official-model-table]
- Most adjustable Gemini models offer Low, Medium (default), and High thinking levels; Gemini 4 Neon and Gemini 4 Hydrogen add an Extra level (xhigh in the CLI).[^antigravity-official-model-table]
- Gemini 4 Argon、Gemini 3.8 Flash、GPT-OSS-120b 及 Claude 4.6 模型将于 2026 年 11 月 30 日移除。[^antigravity-official-model-table]
- Gemini 4 Argon, Gemini 3.8 Flash, GPT-OSS-120b, and Claude 4.6 models will be removed on November 30, 2026.[^antigravity-official-model-table]
- 更改推理模型后，当前运行中的 Agent 会在完成本轮步骤（或取消执行）前继续使用先前选定的模型。[^antigravity-official-model-table]
- Changing the reasoning model does not affect an in-progress Agent turn; it continues with the previously selected model until the turn completes or is canceled.[^antigravity-official-model-table]

## 相关 / Related

- 原文：[链接](https://antigravity.google/docs/models)。 / Original: [link](https://antigravity.google/docs/models).
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [用量上限 A/B 测试 / Usage limit A/B tests](../../topics/usage-limit-ab-tests.md)

[^antigravity-official-model-table]: Official Model Table
