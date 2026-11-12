---
type: Source
title: "Google 推出 Gemini Decisions API：不生成文字只做判断，单次最多 1000 个问题"
title_en: "Google Launches Gemini Decisions API: Judgment-Only, Up to 1,000 Questions Per Request"
description: "Google 推出仅输出判断与置信度的 Gemini Decisions API，输入按量计费、输出免费，单次支持最多 1000 个问题。"
description_en: "Google launches Gemini Decisions API, outputting only judgments and confidence scores; input is metered, output is free, supporting up to 1,000 questions per request."
resource: https://x.com/dotey/status/2120647659388031454
tags: [google, gemini, decisions-api, ai-api, model-routing]
sources:
  - id: gemini-decisions-api-google
    resource: https://x.com/dotey/status/2120647659388031454
    title: "Google Launches Gemini Decisions API: Judgment-Only, Up to 1,000 Questions Per Request"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T08:02:47+08:00
---

# Google 推出 Gemini Decisions API：不生成文字只做判断，单次最多 1000 个问题

*Google Launches Gemini Decisions API: Judgment-Only, Up to 1,000 Questions Per Request*

帖文称，Google 在 Gemini API 中上线 Decisions API 及新模型 Gemini Decision 1，不生成文字，只对给定输入回答是非题、单选题或打分题，并返回 0 到 1 的置信度；单次请求最多 256K Token 输入和 1000 个问题，输入每百万 Token 0.1 美元、输出不收费，可在 Google AI Studio 通过 API Key 调用。[^gemini-decisions-api-google]

The post says Google launched the Decisions API and Gemini Decision 1 model within the Gemini API; it does not generate text, only answers yes/no, multiple-choice, or scoring questions for a given input and returns a confidence score from 0 to 1; a single request supports up to 256K input tokens and 1,000 questions, input costs $0.1 per million tokens while output is free, and it is callable via API Key in Google AI Studio.[^gemini-decisions-api-google]

## 摘要 / Summary

- Decisions API 只有三种题型：是非题、2 到 255 个选项的单选题、按档位打分题，每个答案带 0 到 1 的置信度。[^gemini-decisions-api-google]
- The Decisions API has only three question types: yes/no, multiple choice with 2 to 255 options, and scoring by tier; every answer carries a confidence score from 0 to 1.[^gemini-decisions-api-google]
- 单次请求输入上限 256K Token，支持文字、JSON、图片、音频、视频和 PDF 混合，同一份输入可挂最多 1000 个问题，输入只计一次费。[^gemini-decisions-api-google]
- A single request accepts up to 256K input tokens and mixed text, JSON, images, audio, video, and PDF; up to 1,000 questions can be attached to one input, and input is billed only once.[^gemini-decisions-api-google]
- Google 称输入在 1.6 万 Token 以内时端到端延迟 150 到 250 毫秒，问 1 个和问 100 个问题耗时差不多，且比 Gemini 3.5 Flash-Lite 生成答案便宜近 5 倍。[^gemini-decisions-api-google]
- Google claims end-to-end latency of 150 to 250 ms for inputs under 16K tokens, with similar duration for 1 or 100 questions, and says it costs nearly 5 times less than generating answers with Gemini 3.5 Flash-Lite.[^gemini-decisions-api-google]
- 可在 Google AI Studio 拿 API Key 调用，模型名 gemini-decision-1，走 v1beta 接口；免费层每分钟 200 次、每天 1 万次，付费层数据不会被 Google 用来改进产品。[^gemini-decisions-api-google]
- Callable via API Key from Google AI Studio under model name gemini-decision-1 on the v1beta interface; the free tier allows 200 requests per minute and 10,000 per day, while paid-tier data is not used by Google to improve products.[^gemini-decisions-api-google]
- OpenAI 早一个月推出同名 Decisions API，用 GPT-6 Luna，单次最多 400 个问题，只收文字、图片和 JSON，但支持缓存；TypeSafe Jev 1.14 在 OpenRouter 上每百万输入 Token 0.042 美元。[^gemini-decisions-api-google]
- OpenAI launched a same-named Decisions API a month earlier using GPT-6 Luna, limited to 400 questions per request and text, image, and JSON only, but with caching support; startup TypeSafe's Jev 1.14 charges $0.042 per million input tokens on OpenRouter.[^gemini-decisions-api-google]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2120647659388031454)。 / Original: [link](https://x.com/dotey/status/2120647659388031454).
- Topic: [近实时决策 API / Near real-time decisions API](../../topics/near-real-time-decisions-api.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)

[^gemini-decisions-api-google]: Google Launches Gemini Decisions API: Judgment-Only, Up to 1,000 Questions Per Request
