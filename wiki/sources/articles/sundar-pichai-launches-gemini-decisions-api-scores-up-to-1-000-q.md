---
type: Source
title: "Sundar Pichai 发布 Gemini Decisions API：单轮评分最高 1000 个问题，输出 Token 免费"
title_en: "Sundar Pichai Launches Gemini Decisions API: Scores Up to 1,000 Questions in One Pass, Output Tokens Free"
description: "Sundar Pichai 宣布 Google 推出 Gemini Decisions API，支持文本、图像、音频、视频和 PDF 的闭集选择评分，输入 Token 0.10 美元/百万且输出 Token 不计费。"
description_en: "Sundar Pichai announces Google's Gemini Decisions API for closed-set choice scoring across text, images, audio, video, and PDFs, priced at $0.10 per 1M input tokens with free output tokens."
resource: https://x.com/sundarpichai/status/2120581155078729728
tags: [gemini, decisions-api, google-ai, benchmark-evals]
sources:
  - id: sundar-gemini-decisions-api
    resource: https://x.com/sundarpichai/status/2120581155078729728
    title: "Sundar Pichai Launches Gemini Decisions API: Scores Up to 1,000 Questions in One Pass, Output Tokens Free"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T08:00:49+08:00
---

# Sundar Pichai 发布 Gemini Decisions API：单轮评分最高 1000 个问题，输出 Token 免费

*Sundar Pichai Launches Gemini Decisions API: Scores Up to 1,000 Questions in One Pass, Output Tokens Free*

「帖文称」Sundar Pichai 在 X 上宣布，Google 在 Google AI Studio 推出由全新 Gemini Decision 1 模型驱动的 Gemini Decisions API。该 API 不再按 token 逐个生成文本，而是专为闭集选择评分设计，可在单次传递中对最多 1000 个跨文本、图像、音频、视频及 PDF 的问题进行评分。帖文还列出三种决策类型、定价及基准测试表现等细节。[^sundar-gemini-decisions-api]

According to the post, Sundar Pichai announced on X that Google is launching the Gemini Decisions API, powered by the new Gemini Decision 1 model in Google AI Studio. Instead of generating text token by token, it is built for closed-set choice scoring of up to 1,000 questions across text, images, audio, video, and PDFs in a single pass. The post also details decision types, pricing, and benchmark performance.[^sundar-gemini-decisions-api]

## 摘要 / Summary

- 三种决策类型：是/否、多选（最多 255 选项）和评分标准打分。[^sundar-gemini-decisions-api]
- Three decision types: yes/no, multiple choice (up to 255 options), and rubric scoring.[^sundar-gemini-decisions-api]
- 定价为每 100 万输入 Token 0.10 美元，输出 Token 不计费，约比 Flash-Lite 便宜 5 倍。[^sundar-gemini-decisions-api]
- Priced at $0.10 per 1M input tokens with $0 billed for output tokens, about 5x cheaper than Flash-Lite.[^sundar-gemini-decisions-api]
- 帖文称该模型在多项基准测试中领先，且校准误差最低。[^sundar-gemini-decisions-api]
- The post says it leads several benchmark evals with the lowest calibration error.[^sundar-gemini-decisions-api]
- 支持在单次传递中对最多 1000 个跨文本、图像、音频、视频及 PDF 的问题进行评分。[^sundar-gemini-decisions-api]
- Scores up to 1,000 questions across text, images, audio, video, and PDFs in a single pass.[^sundar-gemini-decisions-api]
- Google 团队已在使用，例如 Stitch Rapid 可在秒级设计完整产品流程（1x 速度）。[^sundar-gemini-decisions-api]
- Google teams are already building with it, including Stitch Rapid designing a full product flow in seconds at 1x speed.[^sundar-gemini-decisions-api]
- 该帖发布于 2026 年 11 月 11 日，获得 38.08 万次浏览。[^sundar-gemini-decisions-api]
- The post was published on Nov 11, 2026, with 380.8K views.[^sundar-gemini-decisions-api]

## 相关 / Related

- 原文：[链接](https://x.com/sundarpichai/status/2120581155078729728)。 / Original: [link](https://x.com/sundarpichai/status/2120581155078729728).
- Topic: [近实时决策 API / Near real-time decisions API](../../topics/near-real-time-decisions-api.md)
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^sundar-gemini-decisions-api]: Sundar Pichai Launches Gemini Decisions API: Scores Up to 1,000 Questions in One Pass, Output Tokens Free
