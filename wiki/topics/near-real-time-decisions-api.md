---
type: Topic
title: 近实时决策 API
title_en: Near real-time decisions API
description: 应用与智能体可调用专用决策 API，在近实时内完成分类、评估并选择下一步，而无需生成完整模型回复。
description_en: Apps and agents can call a dedicated decisions API to classify, evaluate, and choose the next step in near real time without generating a full model response.
tags: [openai, decisions-api, agents, workflows]
sources:
  - id: openai-decisions-api-ga
    resource: https://x.com/OpenAIDevs/status/2113346642787086538
    title: OpenAI Decisions API generally available
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
---

# 近实时决策 API

*Near real-time decisions API*

对工作流与智能体应用而言，专用决策端点可以在近实时内对输入分类、评估，并选定下一个模型、工具或动作，而不必承担完整生成式回复的成本。[^openai-decisions-api-ga]

For workflow and agent apps, a dedicated decisions endpoint can classify inputs, evaluate them, and pick the next model, tool, or action in near real time, without paying the cost of a full generative response.[^openai-decisions-api-ga]

## 综合分析 / Synthesis

[OpenAI Decisions API generally available](../sources/articles/openai-decisions-api-ga.md) 称 OpenAI 的 Decisions API 已正式可用，面向工作流中的近实时决策，使应用与智能体能够对文本与图像分类、评估输入并决定下一步，而无需生成完整模型回复。[^openai-decisions-api-ga] 同一抓取帖还带有更早的公开测试说明：Decisions API 已向全体开发者开放，用于选择合适的模型、工具或动作，并声称可比经 Responses API 使用 GPT-6 Luna 快最多约 10 倍。[^openai-decisions-api-ga]

[OpenAI Decisions API generally available](../sources/articles/openai-decisions-api-ga.md) states that OpenAI's Decisions API is generally available for near real-time decisions in workflows, so apps and agents can classify text and images, evaluate inputs, and determine what happens next without generating a full model response.[^openai-decisions-api-ga] The same fetched post also carries an earlier public-beta note that Decisions API was open to all developers for choosing the right model, tool, or action, claimed up to 10x faster than GPT-6 Luna through the Responses API.[^openai-decisions-api-ga]

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- 来源 / Source: [OpenAI Decisions API generally available](../sources/articles/openai-decisions-api-ga.md)

[^openai-decisions-api-ga]: OpenAI Decisions API generally available
