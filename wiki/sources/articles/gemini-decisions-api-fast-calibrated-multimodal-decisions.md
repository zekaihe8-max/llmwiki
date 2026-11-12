---
type: Source
title: "Gemini Decisions API：快速、校准的多模态决策"
title_en: "Gemini Decisions API: Fast, calibrated multimodal decisions"
description: "Google 推出由 Gemini Decision 1 驱动的 Gemini Decisions API，支持在单次多模态请求中对多达 1,000 个是/否、选择和评分问题进行快速概率决策。"
description_en: "Google launches the Gemini Decisions API, powered by Gemini Decision 1, for fast probabilistic decisions across up to 1,000 yes/no, choice, and rubric questions in a single multimodal pass."
resource: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api
tags: [gemini, decisions-api, multimodal, google-ai-studio]
sources:
  - id: gemini-decisions-api
    resource: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api
    title: "Gemini Decisions API: Fast, calibrated multimodal decisions"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T08:20:13+08:00
---

# Gemini Decisions API：快速、校准的多模态决策

*Gemini Decisions API: Fast, calibrated multimodal decisions*

「帖文称」，Gemini Decisions API 是一个新端点，由 Gemini Decision 1 模型（gemini-decision-1）驱动，可通过 Gemini API 在 Google AI Studio 中使用。它支持文本、图像、音频、视频和 PDF 输入（最多 256K 标记），并在单次前向传递中评估多达 1,000 个独立问题，返回概率和置信分，端到端延迟为 150–250 毫秒，输入标记定价为每 100 万个 0.10 美元，输出标记不计费。[^gemini-decisions-api]

The post introduces the Gemini Decisions API, a new endpoint powered by the Gemini Decision 1 model (gemini-decision-1), available via the Gemini API in Google AI Studio. It accepts multimodal inputs up to 256K tokens and evaluates up to 1,000 independent questions in one forward pass, returning probabilities and confidence scores with 150–250 ms end-to-end latency, priced at $0.10 per 1M input tokens and $0 for output tokens.[^gemini-decisions-api]

## 摘要 / Summary

- 这一决策接口由新模型 Gemini Decision 1（`gemini-decision-1`）驱动，可通过 Gemini API 在 Google AI Studio 中使用。[^gemini-decisions-api]
- The Gemini Decisions API is powered by the new Gemini Decision 1 model (gemini-decision-1) and is available via the Gemini API in Google AI Studio.[^gemini-decisions-api]
- 单次请求可传入最多 256K 个标记的多模态输入，并评估多达 1,000 个独立的是/否、多选或评分问题。[^gemini-decisions-api]
- A single request accepts multimodal input up to 256K tokens and evaluates up to 1,000 independent yes/no, multiple-choice, or rubric-scoring questions.[^gemini-decisions-api]
- 端到端延迟为 150–250 毫秒，输入标记定价为每 100 万个 0.10 美元，输出标记不计费。[^gemini-decisions-api]
- End-to-end latency is 150–250 ms, priced at $0.10 per 1M input tokens with no output-token charges.[^gemini-decisions-api]
- 支持三种决策类型：noul（是/否）、choice（2–255 个选项的多选）和 score（有序评分量规），每个答案都带 0 到 1 的置信分。[^gemini-decisions-api]
- It supports three decision types—noul (yes/no), choice (2–255 options), and score (ordered rubric)—with a confidence score from 0 to 1 for every answer.[^gemini-decisions-api]
- 文中提到的应用包括 Gemini Notebook 的模型路由、Stitch 快速画布、CC 表情符号选择以及 Google Search 中 MCP 工具的安全层。[^gemini-decisions-api]
- Cited uses include model routing in Gemini Notebook, rapid canvas in Stitch, emoji selection in CC, and a safety layer for MCP tools in Google Search.[^gemini-decisions-api]

## 相关 / Related

- 原文：[链接](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api)。 / Original: [link](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api).
- Topic: [近实时决策 API / Near real-time decisions API](../../topics/near-real-time-decisions-api.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活 / Multi-harness routing infra ≠ personal-assistant dispatch](../../topics/multi-harness-router-vs-personal-dispatch.md)

[^gemini-decisions-api]: Gemini Decisions API: Fast, calibrated multimodal decisions
