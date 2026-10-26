---
type: Topic
title: DeepSeek 自营推理相对聚合平台
title_en: DeepSeek first-party inference vs aggregators
description: 实验室自营开放模型推理量可远超多家主流聚合平台上开放模型推理之和；公开数字若标明「单集群」，总吞吐还可能更高，且依赖对各家报告的重建与官方口径。
description_en: A lab’s first-party open-model serving can exceed combined open-model inference on major aggregators; if the public figure is for a single cluster, total throughput may be higher still, and the comparison rests on reconstructed reports plus official wording.
tags: [deepseek, inference, open-models, aggregators, openrouter, fireworks, together, baseten]
sources:
  - id: natolambert-deepseek-150t-inference
    resource: https://x.com/natolambert/status/2113685620941885732
    title: Nathan Lambert on DeepSeek’s 150T tokens/day on one cluster
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:37:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# DeepSeek 自营推理相对聚合平台

*DeepSeek first-party inference vs aggregators*

开放模型的「谁在跑量」不必只看聚合平台榜：某一实验室自营推理（按日 tokens）可超过 OpenRouter、Fireworks、Together、BaseTen 等上开放模型推理之和；若数字写明「一个集群」，则全公司总吞吐可能更大，比较亦依赖对各家公开报告的重建与官方表述。[^natolambert-deepseek-150t-inference]

Who “runs the volume” on open models need not be read only from aggregator scoreboards: one lab’s first-party serving (tokens per day) can exceed combined open-model inference on OpenRouter, Fireworks, Together, and BaseTen; if the figure is for a single cluster, company-wide throughput may be larger still, and the comparison depends on reconstructed public reports plus official wording.[^natolambert-deepseek-150t-inference]

## 综合分析 / Synthesis

[Nathan Lambert 谈 DeepSeek 单集群日推 150T](../sources/articles/natolambert-deepseek-150t-inference.md) 给出一条社区重建：DeepSeek 单集群约 150T tokens/日，高于所列四家聚合平台的开放模型推理合计；作者称在拼各方推理量报告。线程里回复强调「right from the horse's mouth」、且是「a single cluster」、不知共有多少集群，并链到 DeepSeek DeepInfer 推理部署问答。[^natolambert-deepseek-150t-inference] 原帖 <https://x.com/natolambert/status/2113685620941885732>。证据停在量级对比与单集群限定，未给出各聚合商分项数字表，也未声称 DeepSeek 全公司日推总量。

[Nathan Lambert on DeepSeek’s 150T tokens/day on one cluster](../sources/articles/natolambert-deepseek-150t-inference.md) is one community reconstruction: DeepSeek ~150T tokens/day on one cluster, above combined open-model inference on the four named aggregators; the author says he reconstructed volume reports. An in-thread reply stresses “right from the horse's mouth,” “a single cluster,” unknown total clusters, and links DeepSeek DeepInfer deployment Q&A.[^natolambert-deepseek-150t-inference] Post: <https://x.com/natolambert/status/2113685620941885732>. Evidence stops at the magnitude comparison and the single-cluster bound—no per-aggregator table, and no claim of DeepSeek company-wide daily total.

适用边界：本页是「自营推理吞吐 vs 聚合平台开放推理合计」的量级叙事，不是模型质量、Pro/Flash 档位，也不是中美算力/开源格局讲座结论。与 [中国开源领先与美国算力优势](./china-open-source-lead-us-compute.md) 同属中国开放模型叙事邻域，但那页是讲座级「开源领先 + 美算力优势 + 蒸馏非关键」；本页是服务侧日 tokens 对比。与 [开放权重前沿模型](./open-weight-frontier-models.md) 同属开放权重，但那页是产品能力与发布口感；本页是谁在承载推理流量。与 [面向 Agent 的模型渠道取舍](./agent-model-channel-tradeoffs.md) 会点到 OpenRouter 等渠道，但那页是个人/团队选供应商的价格与兼容；本页是宏观吞吐对比。

Scope: this page is magnitude narrative—“first-party serving throughput vs aggregator open-inference totals”—not model quality, Pro/Flash tiers, or lecture-level China-open / US-compute claims. It neighbors [China open-source lead and US compute advantage](./china-open-source-lead-us-compute.md) in Chinese open-model discourse, but that page is lecture “open lead + US compute + distillation not key”; this page is serving-side daily tokens. It shares open weights with [Open-weight frontier models](./open-weight-frontier-models.md), but that page is product capability and launch feel; this page is who carries inference traffic. [Model provider channel tradeoffs for agents](./agent-model-channel-tradeoffs.md) may name OpenRouter-class channels, but that page is price/compatibility choice for agents; this page is macro throughput comparison.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [Nathan Lambert 谈 DeepSeek 单集群日推 150T](../sources/articles/natolambert-deepseek-150t-inference.md)
- Topic: [中国开源领先与美国算力优势](./china-open-source-lead-us-compute.md)
- Topic: [开放权重前沿模型](./open-weight-frontier-models.md)
- Topic: [面向 Agent 的模型渠道取舍](./agent-model-channel-tradeoffs.md)

[^natolambert-deepseek-150t-inference]: Nathan Lambert on DeepSeek’s 150T tokens/day on one cluster
