---
type: Source
title: "jbhuang「AI Training and Inference」9 集训推系列：从单卡显存到万卡并行与推理服务"
title_en: "jbhuang 'AI Training and Inference' 9-episode training and inference series: from single-GPU memory to ten-thousand-card parallelism and inference serving"
description: "帖文梳理 jbhuang 的 9 集、230 分钟 LLM 训练与推理系列，涵盖显存、五维并行、LoRA、投机解码、蒸馏、GRPO、优化器与推理服务。"
description_en: "The post summarizes jbhuang's 9-episode, 230-minute LLM training and inference series, covering memory, five-dimensional parallelism, LoRA, speculative decoding, distillation, GRPO, optimizers, and inference serving."
resource: https://x.com/shao__meng/status/2116335089546035522
tags: [ai-training, llm-inference, deep-learning, video-course]
sources:
  - id: jbhuang-ai-training-inference-series
    resource: https://x.com/shao__meng/status/2116335089546035522
    title: "jbhuang 'AI Training and Inference' 9-episode training and inference series: from single-GPU memory to ten-thousand-card parallelism and inference serving"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-10-31T20:15:43+08:00
---

# jbhuang「AI Training and Inference」9 集训推系列：从单卡显存到万卡并行与推理服务

*jbhuang 'AI Training and Inference' 9-episode training and inference series: from single-GPU memory to ten-thousand-card parallelism and inference serving*

帖文称，@jbhuang0604 的「AI Training and Inference」共 9 集、230 分钟，由 @shao__meng 在 X 上串联介绍，覆盖从单卡显存到千卡并行、便宜微调、推理加速、小模型蒸馏、推理 RL 与优化器（AdamW→Muon）的完整训推架构；第 9 集 LLM Serving 为会员内容。[^jbhuang-ai-training-inference-series]

The post states that @jbhuang0604's 'AI Training and Inference' comprises 9 episodes totaling 230 minutes, compiled by @shao__meng on X, covering the full training-inference architecture from single-GPU memory to thousand-card parallelism, cheap fine-tuning, inference acceleration, small-model distillation, inference RL, and optimizers (AdamW→Muon); Episode 9 on LLM Serving is member-only content.[^jbhuang-ai-training-inference-series]

## 摘要 / Summary

- 该系列共 9 集、约 230 分钟，由 @jbhuang0604 制作，由 @shao__meng 在 X 上串联介绍。[^jbhuang-ai-training-inference-series]
- The series has 9 episodes totaling about 230 minutes, produced by @jbhuang0604 and compiled by @shao__meng on X.[^jbhuang-ai-training-inference-series]
- 第 1 集讲 ZeRO & FSDP（约 23 分钟），第 2 集讲五维并行（约 40 分钟），以 Llama 3 的 16384 GPU 布局为例。[^jbhuang-ai-training-inference-series]
- Episode 1 covers ZeRO & FSDP (~23 min); Episode 2 covers five-dimensional parallelism (~40 min), using Llama 3's 16384-GPU layout as an example.[^jbhuang-ai-training-inference-series]
- 第 3 集讲 LoRA 与变体（约 21 分钟），包括 QLoRA、VeRA、DoRA；字幕称可在单卡 48GB 上微调 70B 量级模型，为讲者表述。[^jbhuang-ai-training-inference-series]
- Episode 3 covers LoRA and variants (~21 min), including QLoRA, VeRA, and DoRA; subtitles claim 70B-scale models can be fine-tuned on a single 48GB card, stated as the speaker's claim.[^jbhuang-ai-training-inference-series]
- 第 6 集从 PPO 推到 GRPO，并与 DeepSeek-R1 类推理训练挂钩；Dr. GRPO 去掉长度归一与标准差除法。[^jbhuang-ai-training-inference-series]
- Episode 6 progresses from PPO to GRPO, linking to DeepSeek-R1-style reasoning training; Dr. GRPO removes length normalization and standard-deviation division.[^jbhuang-ai-training-inference-series]
- 第 9 集为会员内容，涉及 LLM Serving（KV cache、调度等），约 42 分钟。[^jbhuang-ai-training-inference-series]
- Episode 9 is member-only content on LLM Serving (KV cache, scheduling, etc.), about 42 minutes.[^jbhuang-ai-training-inference-series]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2116335089546035522)。 / Original: [link](https://x.com/shao__meng/status/2116335089546035522).
- Topic: [大厂推理成本效率被低估 / Big-lab inference cost efficiency is underestimated](../../topics/lab-inference-serving-cost-efficiency.md)
- Topic: [DeepSeek 自营推理相对聚合平台 / DeepSeek first-party inference vs aggregators](../../topics/deepseek-inference-vs-aggregators.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [AI 媒体内容回灌训练语料 / AI media content looping into training corpora](../../topics/ai-media-training-corpus-loop.md)

[^jbhuang-ai-training-inference-series]: jbhuang 'AI Training and Inference' 9-episode training and inference series: from single-GPU memory to ten-thousand-card parallelism and inference serving
