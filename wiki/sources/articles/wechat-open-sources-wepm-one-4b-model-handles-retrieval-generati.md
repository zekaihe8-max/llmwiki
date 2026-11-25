---
type: Source
title: "微信开源 WePM：一个 4B 模型同时做检索、生成和决策"
title_en: "WeChat Open-Sources WePM: One 4B Model Handles Retrieval, Generation, and Decision-Making"
description: "微信 AI 开源 WePM，用单一 4B 模型整合多模态嵌入、文本生成与结构化决策，权重内存约 8GB"
description_en: "WeChat AI open-sources WePM, integrating multimodal embedding, text generation, and structured decision-making in a single 4B model with about 8GB weight memory."
resource: https://x.com/shao__meng/status/2125168042548273450
tags: [wechat, wepm, open-weight, local-ai, multimodal, small-model]
sources:
  - id: wechat-wepm-4b-unified-model
    resource: https://x.com/shao__meng/status/2125168042548273450
    title: "WeChat Open-Sources WePM: One 4B Model Handles Retrieval, Generation, and Decision-Making"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:10:13+08:00
---

# 微信开源 WePM：一个 4B 模型同时做检索、生成和决策

*WeChat Open-Sources WePM: One 4B Model Handles Retrieval, Generation, and Decision-Making*

「帖文称」微信 AI 开源 WePocketModel (WePM) 1.0，提供 2B 与 4B 两个规格，代码和权重采用 Apache 2.0 许可，将多模态嵌入、文本生成与结构化决策合进同一套 Qwen3.5 初始化的模型骨干，官方演示支持在 M5 Mac 上完全本地运行。[^wechat-wepm-4b-unified-model]

The post says WeChat AI open-sourced WePocketModel (WePM) 1.0 in 2B and 4B sizes under Apache 2.0, merging multimodal embedding, text generation, and structured decision-making into one Qwen3.5-initialized backbone, with an official demo supporting fully local operation on an M5 Mac.[^wechat-wepm-4b-unified-model]

## 摘要 / Summary

- WePM-4B 在 30 项嵌入、39 项生成、7 项决策基准上的平均分分别为 72.86、62.41、61.11。[^wechat-wepm-4b-unified-model]
- WePM-4B averages 72.86 on 30 embedding benchmarks, 62.41 on 39 generation benchmarks, and 61.11 on 7 decision benchmarks.[^wechat-wepm-4b-unified-model]
- 六组独立三模型组合需要 21–43GB BF16 权重内存，WePM-4B 约为 8GB，权重内存减少 61.9%，HCD 提升至 2.64 倍。[^wechat-wepm-4b-unified-model]
- Six independent three-model combinations require 21–43GB BF16 weight memory, while WePM-4B uses about 8GB, cutting weight memory by 61.9% and raising HCD to 2.64×.[^wechat-wepm-4b-unified-model]
- 仓库另提供 GGUF，4B 的 Q4_K_M 与共享多模态权重合计约 3.19GiB。[^wechat-wepm-4b-unified-model]
- The repository also provides GGUF; the 4B Q4_K_M plus shared multimodal weights total about 3.19 GiB.[^wechat-wepm-4b-unified-model]
- 训练采用 MGVB 多粒度视觉预算、ULKD 统一列表式知识蒸馏和 SEMO 联合优化机制。[^wechat-wepm-4b-unified-model]
- Training uses MGVB multi-granularity visual budgeting, ULKD unified list-style knowledge distillation, and the SEMO joint optimization mechanism.[^wechat-wepm-4b-unified-model]
- 这些数字只统计权重，不包含 KV 缓存、激活与框架开销。[^wechat-wepm-4b-unified-model]
- These figures count weights only and exclude KV cache, activations, and framework overhead.[^wechat-wepm-4b-unified-model]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2125168042548273450)。 / Original: [link](https://x.com/shao__meng/status/2125168042548273450).
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)

[^wechat-wepm-4b-unified-model]: WeChat Open-Sources WePM: One 4B Model Handles Retrieval, Generation, and Decision-Making
