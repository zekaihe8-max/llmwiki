---
type: Source
title: "宝玉解读：Meta 发布最小模型 Muse Ember，单价与 Claude Haiku 5.5 一样，同测试花费三分之一"
title_en: "Meta Releases Smallest Model Muse Ember, Same Unit Price as Claude Haiku 5.5, One-Third the Cost for Same Tests"
description: "帖文称 Meta 发布最小、最便宜的模型 Muse Ember，主打 AI Agent 重复杂活，单价与 Claude Haiku 5.5 相同，跑同一套测试仅花三分之一费用。"
description_en: "The post says Meta released its smallest and cheapest model Muse Ember, targeting repetitive agent tasks, with unit pricing matching Claude Haiku 5.5 and one-third the cost for the same test suite."
resource: https://x.com/dotey/status/2119868647220842659
tags: [meta, muse-ember, ai-agent, model-cost, benchmark]
sources:
  - id: dotey-muse-ember-release
    resource: https://x.com/dotey/status/2119868647220842659
    title: "Meta Releases Smallest Model Muse Ember, Same Unit Price as Claude Haiku 5.5, One-Third the Cost for Same Tests"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T08:11:29+08:00
---

# 宝玉解读：Meta 发布最小模型 Muse Ember，单价与 Claude Haiku 5.5 一样，同测试花费三分之一

*Meta Releases Smallest Model Muse Ember, Same Unit Price as Claude Haiku 5.5, One-Third the Cost for Same Tests*

帖文称，Meta 于 11 月 9 日发布迄今最小、最便宜的模型 Muse Ember，专门面向 AI Agent 重复的工具调用、编程小任务、请求分派和长文档信息提取等杂活。模型名 muse-ember-1.0，可通过 Meta Model API 或 Meta AI 编程工具 Muse Code 使用，输入每百万 Token 0.1 美元、输出 0.5 美元，命中缓存输入 0.004 美元，上下文 100 万 Token，单次最多输出 51.2 万 Token，支持文字、图片、音频和视频，但未开放权重。帖文引用第三方评测机构 Artificial Analysis 数据称，Muse Ember 智能水平接近 Muse Spark 1.3（max），综合智能指数 36 分对 37 分，跑同一套测试平均每题花费 0.14 美元对 2.39 美元，便宜约 17 倍；与 Claude Haiku 5.5 单价相同，但 Haiku 超过 10 万 Token 提示后单价涨 5 倍，综合智能指数同样 36 分，每题成本约 0.41 美元，是 Muse Ember 约 3 倍。帖文还提到 Muse Ember 是首个用完整版 Muse Wonder Full 训练的模型，Meta 建议难题交给 Muse Wonder 规划、大量执行交给 Muse Ember。[^dotey-muse-ember-release]

The post says Meta released Muse Ember on November 9, its smallest and cheapest model to date, targeting repetitive AI agent tasks such as tool calls, small programming tasks, request dispatch, and long-document information extraction. Model name muse-ember-1.0 is available via Meta Model API or Meta AI coding tool Muse Code, priced at $0.1 per million input tokens and $0.5 per million output tokens, $0.004 for cached input, with 1 million token context and up to 512k output tokens per call, supporting text, images, audio and video, but weights are not open. Citing third-party evaluator Artificial Analysis, the post says Muse Ember's intelligence is close to Muse Spark 1.3 (max), with comprehensive intelligence index 36 vs 37, and average cost per question $0.14 vs $2.39 for the same test suite, about 17x cheaper; it has the same unit price as Claude Haiku 5.5, but Haiku's prices rise 5x after 100k prompt tokens, both score 36 on the intelligence index while Haiku costs about $0.41 per question, roughly 3x Muse Ember. The post also notes Muse Ember is the first model trained using the full Muse Wonder Full, and Meta suggests hard problems go to Muse Wonder for planning while high-volume execution goes to Muse Ember.[^dotey-muse-ember-release]

## 摘要 / Summary

- 帖文称 Meta 11 月 9 日发布 Muse Ember，定位为迄今最小、最便宜的模型，专门处理 AI Agent 重复的工具调用、编程小任务、请求分派和长文档信息提取。 / The post says Meta released Muse Ember on November 9, positioning it as its smallest and cheapest model to date, dedicated to repetitive AI agent tasks such as tool calls, small programming tasks, request dispatch, and long-document information extraction.[^dotey-muse-ember-release]
- 定价为输入每百万 Token 0.1 美元、输出 0.5 美元，命中缓存输入 0.004 美元；上下文 100 万 Token，单次最多输出 51.2 万 Token，支持多模态，但未开放权重。 / Pricing is $0.1 per million input tokens, $0.5 per million output tokens, and $0.004 per million cached input tokens; 1 million token context, up to 512k output tokens per call, multimodal support, but weights are not open.[^dotey-muse-ember-release]
- 帖文引用 Artificial Analysis 数据称，Muse Ember 综合智能指数 36 分，Muse Spark 1.3（max）37 分，同一套测试平均每题 0.14 美元对 2.39 美元，约便宜 17 倍。 / Citing Artificial Analysis data, the post says Muse Ember scores 36 on the comprehensive intelligence index vs 37 for Muse Spark 1.3 (max), with average cost per question $0.14 vs $2.39 for the same test suite, about 17x cheaper.[^dotey-muse-ember-release]
- 帖文称 Muse Ember 单价与 Claude Haiku 5.5 相同，但 Haiku 超过 10 万 Token 提示后单价涨 5 倍；智能指数同为 36 分，Haiku 每题约 0.41 美元，约是 Muse Ember 3 倍。 / The post says Muse Ember has the same unit price as Claude Haiku 5.5, but Haiku's prices rise 5x after 100k prompt tokens; both score 36 on the intelligence index, while Haiku costs about $0.41 per question, roughly 3x Muse Ember.[^dotey-muse-ember-release]
- 帖文称 Muse Ember 是首个用完整版 Muse Wonder Full 训练的模型；Meta 建议难题交给 Muse Wonder 做规划，大量执行活交给 Muse Ember。 / The post says Muse Ember is the first model trained using the full Muse Wonder Full; Meta suggests hard problems go to Muse Wonder for planning while high-volume execution goes to Muse Ember.[^dotey-muse-ember-release]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2119868647220842659)。 / Original: [link](https://x.com/dotey/status/2119868647220842659).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [大厂推理成本效率被低估 / Big-lab inference cost efficiency is underestimated](../../topics/lab-inference-serving-cost-efficiency.md)

[^dotey-muse-ember-release]: Meta Releases Smallest Model Muse Ember, Same Unit Price as Claude Haiku 5.5, One-Third the Cost for Same Tests
