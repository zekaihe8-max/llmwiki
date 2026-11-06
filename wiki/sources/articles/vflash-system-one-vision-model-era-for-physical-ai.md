---
type: Source
title: "VFlash：并行视觉模型开启 System One 时代，面向物理 AI"
title_en: "VFlash: System One Vision Model Era for Physical AI"
description: "Jim Fan 发布 VFlash，通过一次性输出整体几何形状而非逐 token 解码，实现物理 AI 任务的高速并行推理。"
description_en: "Jim Fan introduces VFlash, a System One vision model that outputs entire geometric shapes in parallel instead of token-by-token decoding for fast physical AI inference."
resource: https://x.com/DrJimFan/status/2118380813498892301
tags: [physical-ai, vision-model, edge-inference, robotics]
sources:
  - id: ddddb354892699f2
    resource: https://x.com/DrJimFan/status/2118380813498892301
    title: "VFlash: System One Vision Model Era for Physical AI"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T08:02:34+08:00
---

# VFlash：并行视觉模型开启 System One 时代，面向物理 AI

*VFlash: System One Vision Model Era for Physical AI*

「帖文称」Jim Fan 发布 VFlash：System One 视觉模型时代来临，可并行解析视觉世界，面向物理 AI。该模型将物体定位、机器人轨迹规划和密集 3D 运动等具身预测任务视为固定长度浮点向量，一次性输出整体几何形状，而非逐 token 自回归解码。帖文声称在 Jetson Thor 和 DGX Spark 等边缘 GPU 上，动作解码速度最高提升 12 倍，整体机器人推理提速 5.1 倍，且 3D 轨迹误差比 VLM 骨干网络低多达 61%。论文和代码开源开放。[^ddddb354892699f2]

Jim Fan announces VFlash, marking the era of System One vision models for Physical AI. The model treats embodied prediction tasks such as object localization, robot trajectory planning, and dense 3D motion as fixed-length float vectors, outputting entire geometric shapes at once instead of decoding token by token. The post claims up to 12x faster action decoding and 5.1x overall robot inference speedup on edge GPUs such as Jetson Thor and DGX Spark, with up to 61% lower 3D trajectory error than the VLM backbone. The paper and code are open.[^ddddb354892699f2]

## 摘要 / Summary

- VFlash 是面向物理 AI 的 System One 视觉模型，主张并行解析视觉世界。 / VFlash is a System One vision model for Physical AI that parses the visual world in parallel.[^ddddb354892699f2]
- 具身预测任务（如边界框、机器人轨迹、密集 3D 运动）为固定长度浮点向量，可一次性输出整体几何形状。 / Embodied prediction tasks such as bounding boxes, robot trajectories, and dense 3D motion are fixed-length float vectors that can be output as whole geometric shapes in one go.[^ddddb354892699f2]
- 帖文称动作解码最高快 12 倍，整体机器人推理在 Jetson Thor 和 DGX Spark 等边缘 GPU 上提速 5.1 倍。 / The post claims up to 12x faster action decoding and 5.1x overall robot inference speedup on edge GPUs such as Jetson Thor and DGX Spark.[^ddddb354892699f2]
- VFlash 准确率高于 VLM 骨干网络，3D 轨迹误差最多降低 61%，避免自回归解码的级联错误。 / VFlash is more accurate than the VLM backbone, with up to 61% lower 3D trajectory error, avoiding cascading errors from autoregressive decoding.[^ddddb354892699f2]
- 论文与代码开源开放。 / The paper and code are open and open source.[^ddddb354892699f2]

## 相关 / Related

- 原文：[链接](https://x.com/DrJimFan/status/2118380813498892301)。 / Original: [link](https://x.com/DrJimFan/status/2118380813498892301).
- Topic: [实时交互世界模型 / Real-time interactive world models](../../topics/interactive-world-models.md)
- Topic: [芯片上的 Agent Runtime / On-chip Agent runtime](../../topics/on-chip-agent-runtime.md)
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)

[^ddddb354892699f2]: VFlash: System One Vision Model Era for Physical AI
