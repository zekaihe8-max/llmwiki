---
type: Source
title: "MopMonk-DS-1.0-Preview 网安专用大模型仓库"
title_en: "MopMonk-DS-1.0-Preview Cybersecurity LLM Repository"
description: "帖文称 MopMonk-DS-1.0-Preview 是基于 DeepSeek V4.1 Flash 的网安专用大模型，覆盖训练流程、推理优化与攻防基准结果。"
description_en: "The post says MopMonk-DS-1.0-Preview is a cybersecurity-specialized LLM built on DeepSeek V4.1 Flash, covering its training pipeline, inference optimization, and offensive-security benchmark results."
resource: https://github.com/MopMonkAI/MopMonk-DS-1.0-Preview
tags: [cybersecurity, llm, deepseek, benchmark, training]
sources:
  - id: mopmonk-ds-10-preview
    resource: https://github.com/MopMonkAI/MopMonk-DS-1.0-Preview
    title: "MopMonk-DS-1.0-Preview Cybersecurity LLM Repository"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:16:50+08:00
---

# MopMonk-DS-1.0-Preview 网安专用大模型仓库

*MopMonk-DS-1.0-Preview Cybersecurity LLM Repository*

帖文称，MopMonk-DS-1.0-Preview 是基于 DeepSeek V4.1 Flash 的网络安全专用大语言模型，采用 40 层混合专家架构，并通过领域数据构建与后训练强化漏洞发现、漏洞分析和利用开发能力。文章还给出两阶段训练流程、面向多节点 NVIDIA Hopper GPU 的推理优化，以及 ExploitGym、Cybench、CVE-Bench 等基准对比。[^mopmonk-ds-10-preview]

The post says MopMonk-DS-1.0-Preview is a cybersecurity-specialized large language model built on DeepSeek V4.1 Flash, a 40-layer mixture-of-experts model, using domain data construction and post-training to strengthen vulnerability discovery, vulnerability analysis, and exploit development. It also describes a two-stage training pipeline, inference optimizations for multi-node NVIDIA Hopper GPUs, and benchmark comparisons including ExploitGym, Cybench, and CVE-Bench.[^mopmonk-ds-10-preview]

## 摘要 / Summary

- 帖文称该模型基于 DeepSeek V4.1 Flash，为 40 层混合专家模型，并通过领域数据构建与后训练聚焦攻击性网络能力。[^mopmonk-ds-10-preview]
- The post says the model is built on DeepSeek V4.1 Flash, a 40-layer mixture-of-experts model, and uses domain data construction and post-training to focus on offensive cyber capabilities.[^mopmonk-ds-10-preview]
- 训练流程包括两阶段：先在二进制与 Web 漏洞分析领域语料上做持续预训练，再在验证过的智能体轨迹上做监督微调。[^mopmonk-ds-10-preview]
- The training pipeline has two stages: continuous pre-training on domain corpora for binary and web vulnerability analysis, followed by supervised fine-tuning on validated agent trajectories.[^mopmonk-ds-10-preview]
- 训练系统基于 NeMo，组合 FSDP2、上下文并行、专家并行、TileLang attention 与 Transformer Engine grouped expert kernels，并称 grouped expert 集成将平均训练更新时间降低 32%。[^mopmonk-ds-10-preview]
- The training system is NeMo-based and combines FSDP2, context parallelism, expert parallelism, TileLang attention, and Transformer Engine grouped expert kernels; the post says grouped expert integration reduces mean training update time by 32%.[^mopmonk-ds-10-preview]
- 推理采用 BF16/FP32 混合精度，并通过 SM90 Rotary-Attention Fusion、Expert Projection-SwiGLU Fusion、Shape Specialization and Phase-Dependent Communication 等自定义算子优化恢复效率。[^mopmonk-ds-10-preview]
- Inference uses BF16/FP32 mixed precision and recovers efficiency through custom operator optimizations such as SM90 Rotary-Attention Fusion, Expert Projection-SwiGLU Fusion, and Shape Specialization and Phase-Dependent Communication.[^mopmonk-ds-10-preview]
- 文章列出的基准结果包括 ExploitGym 24.2% 对 15.3%、Cybench 93.8% 对 83.3%、CVE-Bench 92.5% 对 90.0%，且所有结果使用 BF16/FP32 服务与 2,500,000 输出 token 的累计会话预算。[^mopmonk-ds-10-preview]
- The article lists benchmark results including ExploitGym 24.2% vs 15.3%, Cybench 93.8% vs 83.3%, and CVE-Bench 92.5% vs 90.0%, with all results using BF16/FP32 serving and a cumulative session budget of 2,500,000 generated output tokens.[^mopmonk-ds-10-preview]
- 同检查点消融称，保留 BF16/FP32 精度可维持后训练收益；若改为 MXFP4/FP8 重量化，因果验证成功率从 49.33% 降至 42.67%。[^mopmonk-ds-10-preview]
- A same-checkpoint ablation says retaining BF16/FP32 precision preserves post-training gains; under MXFP4/FP8 requantization, causally validated success drops from 49.33% to 42.67%.[^mopmonk-ds-10-preview]

## 相关 / Related

- 原文：[链接](https://github.com/MopMonkAI/MopMonk-DS-1.0-Preview)。 / Original: [link](https://github.com/MopMonkAI/MopMonk-DS-1.0-Preview).
- Topic: [网安研究选型：少破甲的模型与 Harness / Cyber-research model picks that need little jailbreaking](../../topics/cyber-research-models-without-jailbreak.md)
- Topic: [开源模型与网络防御 / Open models and cyber defense](../../topics/open-models-cyber-defense.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)

[^mopmonk-ds-10-preview]: MopMonk-DS-1.0-Preview Cybersecurity LLM Repository
