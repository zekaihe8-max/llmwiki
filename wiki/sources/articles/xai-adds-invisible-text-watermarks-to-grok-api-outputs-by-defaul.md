---
type: Source
title: "xAI 为 Grok API 输出默认加隐形文字水印"
title_en: "xAI Adds Invisible Text Watermarks to Grok API Outputs by Default"
description: "xAI 宣布从 11 月 7 日起为多款 Grok 模型 API 输出默认加入隐形文字水印，以响应欧盟 AI 法案透明度要求。"
description_en: "xAI announces default invisible text watermarking for multiple Grok model API outputs from November 7 to meet EU AI Act transparency requirements."
resource: https://x.com/0xLogicrw/status/2116739860127944730
tags: [ai-watermark, grok, eu-ai-act, api]
sources:
  - id: xai-grok-api-watermark
    resource: https://x.com/0xLogicrw/status/2116739860127944730
    title: "xAI Adds Invisible Text Watermarks to Grok API Outputs by Default"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:13:32+08:00
---

# xAI 为 Grok API 输出默认加隐形文字水印

*xAI Adds Invisible Text Watermarks to Grok API Outputs by Default*

帖文称，xAI 更新开发者文档，宣布从 11 月 7 日起为 Grok 4.7、4.6、4.5、4.3 及三款 Grok 4.20 模型的 API 输出默认加入隐形文字水印，覆盖全球及区域 API，并延及结构化输出与工具调用参数；水印通过微调选词概率植入统计规律，直接复制粘贴难以消除，但缩短或大幅改写会降低检测可靠性。该举措背后是欧盟《AI 法案》透明度要求，开发者可按模型关闭水印，但需自行确认法律豁免并承担标记与披露责任。Google、Anthropic 与 OpenAI 均已在各自模型中推进类似水印部署。[^xai-grok-api-watermark]

The post says xAI updated developer documentation to add invisible text watermarks by default to API outputs for Grok 4.7, 4.6, 4.5, 4.3 and three Grok 4.20 models starting November 7, covering global and regional APIs including structured output and tool-calling parameters. The watermark embeds statistical patterns by slightly adjusting word-choice probabilities; direct copy-paste cannot remove it, but shortening or heavy rewriting reduces detection reliability. The move follows EU AI Act transparency requirements, and developers may disable watermarks per model only after confirming legal exemptions and assuming marking and disclosure responsibility. Google, Anthropic, and OpenAI have also rolled out similar watermarking for their models.[^xai-grok-api-watermark]

## 摘要 / Summary

- xAI 从 11 月 7 日起为 Grok 4.7、4.6、4.5、4.3 及三款 Grok 4.20 模型 API 输出默认加隐形文字水印。 / xAI adds invisible text watermarks by default to API outputs for Grok 4.7, 4.6, 4.5, 4.3 and three Grok 4.20 models starting November 7.[^xai-grok-api-watermark]
- 水印覆盖全球及区域 API，连结构化输出和工具调用参数也会被标记；Grok 网页版和 X 内置聊天是否同步启用尚不明确。 / Watermarks cover global and regional APIs, including structured output and tool-calling parameters; whether Grok web and X built-in chat will enable them simultaneously remains unclear.[^xai-grok-api-watermark]
- 水印通过在生成文本时轻微调整选词概率，留下可识别统计规律；直接复制粘贴不会消除，但缩短文本或大幅改写会降低检测可靠性。 / Watermarks leave identifiable statistical patterns by slightly adjusting word-choice probabilities during generation; direct copy-paste does not remove them, but shortening text or major rewriting reduces detection reliability.[^xai-grok-api-watermark]
- 该举措回应欧盟《AI 法案》透明度要求，规定已于 8 月 2 日开始适用；xAI 未签署欧盟自愿性透明准则，但仍须遵守法律义务。 / The move responds to EU AI Act transparency requirements applicable since August 2; xAI did not sign the EU voluntary transparency code but must still comply with legal obligations.[^xai-grok-api-watermark]
- 开发者团队可按模型关闭水印，但必须确认符合相关法律豁免，并自行承担标记和披露责任。 / Developer teams may disable watermarks per model, but must confirm applicable legal exemptions and independently assume marking and disclosure responsibility.[^xai-grok-api-watermark]
- Google 2024 年已为 Gemini 用 SynthID 文字水印，Anthropic 8 月起为 Claude 新模型全球启用水印，OpenAI 10 月宣布为欧盟 ChatGPT 和 Codex 逐步加水印，全球 API 用户可主动开启但默认关闭。 / Google used SynthID text watermarks for Gemini in 2024; Anthropic enabled watermarks globally for new Claude models in August; OpenAI announced in October gradual watermarking for EU ChatGPT and Codex, with global API users able to opt in while default remains off.[^xai-grok-api-watermark]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2116739860127944730)。 / Original: [link](https://x.com/0xLogicrw/status/2116739860127944730).
- Topic: [行为指纹置信度 ≠ 确认底层模型 / Behavioral fingerprint confidence ≠ confirmed backend model](../../topics/model-fingerprint-confidence-not-confirmation.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [技术滥用关切的连续性 / Continuity of technology-misuse concern](../../topics/tech-misuse-concern-continuity.md)

[^xai-grok-api-watermark]: xAI Adds Invisible Text Watermarks to Grok API Outputs by Default
