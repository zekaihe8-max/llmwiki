---
type: Source
title: "Apple 开源 FastFrames 实时视频生成模型"
title_en: "Apple Open-Sources FastFrames Real-Time Video Generation Model"
description: "帖文称 Apple 开源基于 Wan2.1 的 FastFrames 实时视频生成模型，支持本地硬件 480p 实时生成。"
description_en: "The post claims Apple open-sourced FastFrames, a Wan2.1-based real-time video generation model supporting local 480p generation."
resource: https://x.com/Gorden_Sun/status/2122995483652088149
tags: [apple, fastframes, video-generation, open-weight]
sources:
  - id: 067305bcdeb38801
    resource: https://x.com/Gorden_Sun/status/2122995483652088149
    title: "Apple Open-Sources FastFrames Real-Time Video Generation Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T20:09:12+08:00
---

# Apple 开源 FastFrames 实时视频生成模型

*Apple Open-Sources FastFrames Real-Time Video Generation Model*

帖文称，Apple 开源名为 FastFrames 的实时视频生成模型，提供 1.3B 与 14B 两个参数版本，可在本地硬件上实时生成 480p 分辨率视频。该模型基于 Wan2.1，采用两步自回归扩散蒸馏，单帧生成延迟压缩至 35.4 毫秒；团队同步放出优化版 LingBot 1.3B，推理速度较官方原版提升 16 倍并支持流畅镜头视角控制。模型已在 Hugging Face 发布。[^067305bcdeb38801]

The post claims Apple has open-sourced FastFrames, a real-time video generation model available in 1.3B and 14B parameter versions, capable of generating 480p video in real time on local hardware. Based on Wan2.1 with two-step autoregressive diffusion distillation, it compresses single-frame generation latency to 35.4 ms. The team also released an optimized LingBot 1.3B with 16x faster inference than the official original and support for smooth camera view control; the model is published on Hugging Face.[^067305bcdeb38801]

## 摘要 / Summary

- FastFrames 包含 1.3B 和 14B 两个参数版本。[^067305bcdeb38801]
- FastFrames includes 1.3B and 14B parameter versions.[^067305bcdeb38801]
- 模型能在本地硬件上实时生成 480p 分辨率视频。[^067305bcdeb38801]
- The model can generate 480p-resolution video in real time on local hardware.[^067305bcdeb38801]
- 基于 Wan2.1，采用两步自回归扩散蒸馏，单帧生成延迟为 35.4 毫秒。[^067305bcdeb38801]
- Based on Wan2.1 with two-step autoregressive diffusion distillation, single-frame generation latency is 35.4 ms.[^067305bcdeb38801]
- 同步发布优化版 LingBot 1.3B，推理速度比官方原版提升 16 倍，支持流畅镜头视角控制。[^067305bcdeb38801]
- An optimized LingBot 1.3B was also released, with inference speed 16x faster than the official original and support for smooth camera view control.[^067305bcdeb38801]
- 模型在 Hugging Face 上发布，原文给出了 apple/FastFrames 相关链接。[^067305bcdeb38801]
- The model is published on Hugging Face, with the post linking to an apple/FastFrames-related page.[^067305bcdeb38801]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2122995483652088149)。 / Original: [link](https://x.com/Gorden_Sun/status/2122995483652088149).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [实时交互世界模型 / Real-time interactive world models](../../topics/interactive-world-models.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)

[^067305bcdeb38801]: Apple Open-Sources FastFrames Real-Time Video Generation Model
