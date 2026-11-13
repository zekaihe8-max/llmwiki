---
type: Source
title: "Google 发布 Gemini 4 Hydrogen 主力模型"
title_en: "Google Releases Gemini 4 Hydrogen Main Model"
description: "Google 发布 Gemini 4 Hydrogen，定位快速省成本的主力模型，对标 Claude Sonnet 5.5 和 GPT-6.1 Terra，免费层开发者可用。"
description_en: "Google releases Gemini 4 Hydrogen, a fast and cost-efficient main model benchmarked against Claude Sonnet 5.5 and GPT-6.1 Terra, available to free-tier developers."
resource: https://x.com/dotey/status/2120945309714919886
tags: [google, gemini, ai-model, api-pricing, benchmark]
sources:
  - id: gemini-4-hydrogen-release
    resource: https://x.com/dotey/status/2120945309714919886
    title: "Google Releases Gemini 4 Hydrogen Main Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-13T08:06:52+08:00
---

# Google 发布 Gemini 4 Hydrogen 主力模型

*Google Releases Gemini 4 Hydrogen Main Model*

「帖文称」Google 于 2026 年 11 月 12 日发布 Gemini 4 Hydrogen，作为 Gemini 4 系列中主打快速与低成本的一档，接替 Gemini 3.8 Flash，并与 Anthropic Claude Sonnet 5.5 及 OpenAI GPT-6.1 Terra 进行对比。Gemini 4 系列分为 Carbon、Argon、Hydrogen 三档，Hydrogen 负责日常编码、Agent 工作并可辅助 Carbon。Google 称其在 10 项评测中 7 项第一，API 输入/输出单价为每百万 Token 1.5/7.5 美元，Gemini App 付费用户可手动选择，开发者免费层也可按频率限量使用。[^gemini-4-hydrogen-release]

The post says Google released Gemini 4 Hydrogen on November 12, 2026, as the speed- and cost-focused tier of the Gemini 4 series, succeeding Gemini 3.8 Flash and benchmarked against Anthropic's Claude Sonnet 5.5 and OpenAI's GPT-6.1 Terra. The series comprises Carbon, Argon, and Hydrogen, with Hydrogen handling everyday coding and agent work and assisting Carbon. Google claims Hydrogen ranked first in 7 of 10 benchmarks, with API pricing at $1.5 input / $7.5 output per million tokens; Gemini App paying users can select it manually, and developers can access it on the free tier with rate limits.[^gemini-4-hydrogen-release]

## 摘要 / Summary

- Gemini 4 Hydrogen API 单价：输入 1.5 美元/百万 Token，输出 7.5 美元/百万 Token；是 Claude Sonnet 5.5 的四分之三，比 GPT-6.1 Terra 贵一半。[^gemini-4-hydrogen-release]
- Gemini 4 Hydrogen API pricing: $1.5 input / $7.5 output per million tokens; three-quarters of Claude Sonnet 5.5 and half again more expensive than GPT-6.1 Terra.[^gemini-4-hydrogen-release]
- Google 公布 10 项评测中 Hydrogen 7 项第一，SWE-sweep 得分 13.5%，高于 Sonnet 5.5 的 3.1% 和 Terra 的 5.8%。[^gemini-4-hydrogen-release]
- Of 10 benchmarks published by Google, Hydrogen ranked first in 7; on SWE-sweep it scored 13.5%, versus 3.1% for Sonnet 5.5 and 5.8% for Terra.[^gemini-4-hydrogen-release]
- Gemini App Plus/Pro/Ultra 用户可在模型菜单手动选 Hydrogen，免费用户只能用“自动选择模型”，多数问题仍用 Flash-Lite。[^gemini-4-hydrogen-release]
- Gemini App Plus, Pro, and Ultra users can manually select Hydrogen in the model menu; free users only get automatic model selection, with most questions still handled by Flash-Lite.[^gemini-4-hydrogen-release]
- 开发者可在 AI Studio 和 Gemini API 免费层使用 Hydrogen，按调用频率限量；Argon 和 Carbon 不在免费层。[^gemini-4-hydrogen-release]
- Developers can use Hydrogen on AI Studio and Gemini API free tier subject to rate limits; Argon and Carbon are not in the free tier.[^gemini-4-hydrogen-release]
- Hydrogen 上下文窗口 100 万 Token，输入、思考和输出共用；思考档新增 xhigh，默认 high。[^gemini-4-hydrogen-release]
- Hydrogen has a 1-million-token context window shared across input, thinking, and output; thinking levels add xhigh beyond low/medium/high, defaulting to high.[^gemini-4-hydrogen-release]
- Google 建议 Carbon 与 Hydrogen 搭配：Carbon 做规划和难题，Hydrogen 改代码和跑测试；Antigravity 新增 Orchestrator 自动在两模型间切换。[^gemini-4-hydrogen-release]
- Google recommends pairing Carbon with Hydrogen: Carbon for planning and hard problems, Hydrogen for code changes and tests; Antigravity adds Orchestrator to auto-switch between the two models in one session.[^gemini-4-hydrogen-release]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2120945309714919886)。 / Original: [link](https://x.com/dotey/status/2120945309714919886).
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [大厂推理成本效率被低估 / Big-lab inference cost efficiency is underestimated](../../topics/lab-inference-serving-cost-efficiency.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^gemini-4-hydrogen-release]: Google Releases Gemini 4 Hydrogen Main Model
