---
type: Source
title: "AVM：以视图流生成场景"
title_en: "AVM: Generating a Scene as a Stream of Views"
description: "Meta 与牛津大学提出的 AVM 通过自回归模型以视图流方式生成场景，无需构建显式 3D 表示。"
description_en: "Meta and the University of Oxford propose AVM, which generates scenes as a stream of views via an autoregressive model without explicit 3D representations."
resource: https://autoregressive-view-model.github.io/main.html
tags: [avm, world-model, view-synthesis, generative-video, autoregressive, 3d-consistency]
sources:
  - id: avm-view-stream
    resource: https://autoregressive-view-model.github.io/main.html
    title: "AVM: Generating a Scene as a Stream of Views"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:51:18+08:00
---

# AVM：以视图流生成场景

*AVM: Generating a Scene as a Stream of Views*

「项目页」介绍了 Meta 与牛津大学联合提出的自回归视图模型（AVM），该模型将场景表示为一串视图 token，先前置空间提示，再自回归生成被查询的视图块，无需构建点云、网格或其他显式 3D 场景表示。[^avm-view-stream]

The project page introduces AVM, an autoregressive view model jointly proposed by Meta and the University of Oxford, which represents a scene as a stream of view tokens, prefills spatial prompts, and autoregressively generates queried view blocks without constructing point clouds, meshes, or other explicit 3D scene representations.[^avm-view-stream]

## 摘要 / Summary

- AVM 以“视图 token”表示场景，每个视图配对空间位置和时间戳，支持查询与交互。[^avm-view-stream]
- AVM represents scenes with “view tokens,” each paired with spatial locations and timestamps to enable querying and interaction.[^avm-view-stream]
- 模型采用 N-in-1-out 上下文学习方式，给定 N 个参考槽位（图像、视频片段或同步视频 rig）预测一个目标视频片段的流匹配速度。[^avm-view-stream]
- AVM uses an N-in-1-out in-context formulation, predicting flow-matching velocity for one target clip given N reference slots sampled from images, video clips, or synchronized video rigs.[^avm-view-stream]
- 摄像机姿态使用度量级编码，平移分量采用 RoPE，旋转通过像素对齐相机光线（APE）表示，时间戳用 SinPE 编码。[^avm-view-stream]
- Camera poses are encoded at metric scale, with translation via RoPE, rotation via pixel-aligned camera rays (APE), and timestamps via SinPE.[^avm-view-stream]
- 定量评测中，AVM WorldScore 摄像机得分为 70.67，4D 重建 PSNR 为 21.16，长时序一致性达到 28.04 PSNR。[^avm-view-stream]
- In quantitative evaluation, AVM achieves a WorldScore camera score of 70.67, 4D reconstruction PSNR of 21.16, and long-horizon consistency of 28.04 PSNR.[^avm-view-stream]
- AVM 支持自由相机控制、异构视图提示、长时序一致性生成、密集采集前置、事件提示及动态场景生成等能力。[^avm-view-stream]
- AVM supports free camera control, heterogeneous view prompts, long-horizon consistent generation, dense capture prefilling, event prompting, and dynamic scene generation.[^avm-view-stream]
- 该模型通过上下文检索与管理系统维护预填与历史视图的共享上下文池，仅保留提示沉降、检索记忆和相邻运动，从而实现有界上下文与长视频流生成。[^avm-view-stream]
- AVM maintains a shared context pool of prefill and history views via a context retrieval and management system, retaining only prompt sinks, retrieved memory, and adjacent motion for bounded-context long video stream generation.[^avm-view-stream]

## 相关 / Related

- 原文：[链接](https://autoregressive-view-model.github.io/main.html)。 / Original: [link](https://autoregressive-view-model.github.io/main.html).
- Topic: [实时交互世界模型 / Real-time interactive world models](../../topics/interactive-world-models.md)
- Topic: [仿真就绪开放三维资产 / Simulation-ready open 3D assets](../../topics/simulation-ready-open-3d-assets.md)
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)

[^avm-view-stream]: AVM: Generating a Scene as a Stream of Views
