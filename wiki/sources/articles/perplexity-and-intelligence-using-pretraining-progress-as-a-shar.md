---
type: Source
title: "困惑度与智能：将预训练进展作为共享安全指标"
title_en: "Perplexity and Intelligence: Using Pretraining Progress as a Shared Safety Metric"
description: "OpenAI 首席科学家主张以困惑度（交叉熵损失）衡量预训练进展，并据此建立业界共享的 AI 安全标准与开发上限。"
description_en: "OpenAI's chief scientist argues for measuring pretraining progress with perplexity (cross-entropy loss) and establishing industry-shared AI safety standards and development limits based on it."
resource: https://openai.com/index/perplexity-and-intelligence
tags: [perplexity, ai-safety, compute-scaling, benchmarking]
sources:
  - id: perplexity-and-intelligence
    resource: https://openai.com/index/perplexity-and-intelligence
    title: "Perplexity and Intelligence: Using Pretraining Progress as a Shared Safety Metric"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T08:16:26+08:00
---

# 困惑度与智能：将预训练进展作为共享安全指标

*Perplexity and Intelligence: Using Pretraining Progress as a Shared Safety Metric*

「帖文称」现代 AI 本质上是在大规模语料上训练压缩器（等价预测器），而困惑度或交叉熵损失是衡量预训练进展的核心指标；OpenAI 希望以此为共享基准，制定业界安全规范与开发上限。[^perplexity-and-intelligence]

The post argues that modern AI is essentially training a compressor (equivalently, predictor) on a large corpus, and that perplexity/cross-entropy loss is the core metric for pretraining progress; OpenAI hopes to use it as a shared basis for industry safety norms and development limits.[^perplexity-and-intelligence]

## 摘要 / Summary

- OpenAI 以保留数据集上的困惑度（即交叉熵损失的对数）作为衡量预训练进展的主要指标。[^perplexity-and-intelligence]
- OpenAI tracks log-perplexity (cross-entropy loss) on a held-out dataset as the primary measure of pretraining progress.[^perplexity-and-intelligence]
- GPT-3.5 的对数困惑度约为 0.99，GPT-4 约为 0.91，最新模型已低于 0.8。[^perplexity-and-intelligence]
- GPT-3.5 had a log-perplexity of about 0.99, GPT-4 about 0.91, and recent models are below 0.8.[^perplexity-and-intelligence]
- 当对数困惑度约为 0.76 时，模型开始产出突破性的数学研究结果。[^perplexity-and-intelligence]
- Once models reached a log-perplexity of about 0.76, they began producing groundbreaking mathematical results.[^perplexity-and-intelligence]
- OpenAI 预计在约 0.68-0.7 的对数困惑度区间会出现更多颠覆性能力。[^perplexity-and-intelligence]
- OpenAI expects further transformative capabilities as models enter the roughly 0.68-0.7 log-perplexity window.[^perplexity-and-intelligence]
- 作者提议业界建立基于困惑度的开发上限与共享安全规范，在跨越阈值前达成共识。[^perplexity-and-intelligence]
- The author proposes industry-wide perplexity-based development limits and shared safety norms to be agreed upon before crossing thresholds.[^perplexity-and-intelligence]

## 相关 / Related

- 原文：[链接](https://openai.com/index/perplexity-and-intelligence)。 / Original: [link](https://openai.com/index/perplexity-and-intelligence).
- Topic: [智能作为人类中心主义指标 / Intelligence as an anthropocentric benchmark](../../topics/intelligence-as-anthropocentric-benchmark.md)
- Topic: [前沿训练环境隔离 / Frontier training containment](../../topics/frontier-training-containment.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)

[^perplexity-and-intelligence]: Perplexity and Intelligence: Using Pretraining Progress as a Shared Safety Metric
