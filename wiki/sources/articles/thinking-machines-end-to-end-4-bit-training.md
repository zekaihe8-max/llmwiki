---
type: Source
title: "Thinking Machines 的端到端 4 位训练"
title_en: "Thinking Machines' End-to-End 4-Bit Training"
description: "Thinking Machines Lab 在 GB300 上用 NVFP4 前向/MXFP8 反向的端到端 4 位训练，将 Inkling 2 Small 预训练缩短至 68 小时。"
description_en: "Thinking Machines Lab uses end-to-end 4-bit training with NVFP4 forward and MXFP8 backward on GB300, cutting Inkling 2 Small pretraining to 68 hours."
resource: https://x.com/Gorden_Sun/status/2121594565857878212
tags: [thinking-machines, end-to-end-4-bit-training, nvfp4, mxfp8, gb300]
sources:
  - id: a2dd49c3d3210ac7
    resource: https://x.com/Gorden_Sun/status/2121594565857878212
    title: "Thinking Machines' End-to-End 4-Bit Training"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:08:34+08:00
---

# Thinking Machines 的端到端 4 位训练

*Thinking Machines' End-to-End 4-Bit Training*

「帖文称」Thinking Machines Lab 在英伟达 GB300 平台上开发了名为 BBBK 的专用底层加速程序，实现端到端 4 位训练：前向推理使用 NVFP4，反向参数更新切回 MXFP8，并同步进行旋转压缩与随机舍入修正。该方案用于 Inkling 2 Small 全流程训练，声称在 GB300 机柜上仅用 68 小时完成预训练，相比全 8 位训练预训练节省 8%、强化学习提速 20%，且模型回答准确率几乎不受影响。[^a2dd49c3d3210ac7]

The post claims Thinking Machines Lab developed a BBBK kernel on NVIDIA GB300 for end-to-end 4-bit training, using NVFP4 for forward inference and MXFP8 for backward updates with rotation compression and stochastic rounding. Applied to Inkling 2 Small, it reportedly completes pretraining in 68 hours on a GB300 rack, saving 8% pretraining time and 20% RL speedup versus full 8-bit training, with nearly unchanged answer accuracy.[^a2dd49c3d3210ac7]

## 摘要 / Summary

- Thinking Machines Lab 在 NVIDIA GB300 上开发了名为 BBBK 的专用底层加速程序。[^a2dd49c3d3210ac7]
- Thinking Machines Lab developed a dedicated low-level acceleration kernel called BBBK on NVIDIA GB300.[^a2dd49c3d3210ac7]
- 前向计算使用高速 4 位 NVFP4 格式，反向参数更新切回较精细的 8 位 MXFP8 格式。[^a2dd49c3d3210ac7]
- Forward computation uses fast 4-bit NVFP4, while backward parameter updates switch to finer 8-bit MXFP8.[^a2dd49c3d3210ac7]
- 传输时进行旋转压缩与随机舍入修正，省去训练后单独低精度校准步骤。[^a2dd49c3d3210ac7]
- Transmission includes rotation compression and stochastic rounding correction, eliminating separate post-training low-precision calibration.[^a2dd49c3d3210ac7]
- 方案应用于 Inkling 2 Small 全流程训练，GPU 运算管道和传输带宽同时跑满，无卡顿。[^a2dd49c3d3210ac7]
- Applied to full Inkling 2 Small training, GPU compute pipeline and transmission bandwidth run saturated without stalls.[^a2dd49c3d3210ac7]
- 原本需数周的同体量模型在 GB300 机柜上仅用 68 小时完成预训练；对比全 8 位训练，预训练节省 8%，强化学习提速 20%，准确率几乎不受影响。[^a2dd49c3d3210ac7]
- A same-size model that originally took weeks completes pretraining in 68 hours on a GB300 rack; versus full 8-bit training, pretraining saves 8% time, RL speeds up 20%, and answer accuracy is nearly unaffected.[^a2dd49c3d3210ac7]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2121594565857878212)。 / Original: [link](https://x.com/Gorden_Sun/status/2121594565857878212).
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [前沿训练环境隔离 / Frontier training containment](../../topics/frontier-training-containment.md)
- Topic: [工具产品自建模型抢话语权 / Tool products building own models for discourse power](../../topics/tools-building-own-models.md)

[^a2dd49c3d3210ac7]: Thinking Machines' End-to-End 4-Bit Training
