---
type: Source
title: "一种能补出「没拍到的角度」的视角模型"
title_en: "Autoregressive View Model synthesizes unseen camera angles"
description: "AVM 通过自回归方式将画面切分为带空间位置标记的 token，从单张照片、多角度照片或视频中生成任意视角并补全未拍摄盲区。"
description_en: "AVM uses autoregressive spatial tokens to synthesize arbitrary camera angles and fill in unrecorded blind spots from photos or video."
resource: https://x.com/Gorden_Sun/status/2124803554187874532
tags: [autoregressive-view-model, view-synthesis, ai-video, world-model]
sources:
  - id: a103009221b96f3a
    resource: https://x.com/Gorden_Sun/status/2124803554187874532
    title: "Autoregressive View Model synthesizes unseen camera angles"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:50:36+08:00
---

# 一种能补出「没拍到的角度」的视角模型

*Autoregressive View Model synthesizes unseen camera angles*

帖文称，特斯拉 FSD v15 的实时实景视图完全由 AI 合成，实际摄像头并未拍到该角度；Autoregressive View Model（AVM）可通过一张照片、几张不同角度的随手拍或一段普通视频，实现类似游戏自由视角的任意角度画面还原，镜头拉远或转弯时自动脑补原本未拍到的盲区，且移远再移回后仍保持画面一致。其原理类似大语言模型逐词预测，按时间顺序将画面切分为带有空间位置标记的 token 进行预测，从而还原三维空间；项目地址为 autoregressive-view-model.github.io/main.html，目前未开源。[^a103009221b96f3a]

The post claims Tesla FSD v15’s Reality View is fully AI-synthesized from an angle no actual camera captured. Autoregressive View Model (AVM) can restore arbitrary angles from one photo, several casual shots from different angles, or a normal video, moving the camera like a free game camera and automatically hallucinating previously unrecorded blind spots when zooming out or turning, while remaining consistent when the view returns. It works like an LLM predicting tokens, slicing video into spatially marked tokens in time order to reconstruct 3D space. The project site is autoregressive-view-model.github.io/main.html and is not open source.[^a103009221b96f3a]

## 摘要 / Summary

- 特斯拉 FSD v15 的实时实景视图由 AI 合成，实际摄像头没有该拍摄角度。[^a103009221b96f3a]
- Tesla FSD v15’s real-time scene view is AI-synthesized; the actual cameras did not capture that angle.[^a103009221b96f3a]
- AVM 支持用一张照片、几张不同角度的随手拍或一段普通视频，实现任意角度的画面还原。[^a103009221b96f3a]
- AVM supports arbitrary-angle view restoration from one photo, several different-angle casual shots, or a normal video.[^a103009221b96f3a]
- 镜头拉远或转弯时，AVM 会自动脑补出原本没拍到的盲区画面，移远再移回后仍与之前画面保持一致。[^a103009221b96f3a]
- When the camera zooms out or turns, AVM automatically fills in previously unrecorded blind spots, and remains consistent with earlier views when moved back.[^a103009221b96f3a]
- 可通过文字生成指定角度的机位，呈现类似 FSD v15 的视觉效果。[^a103009221b96f3a]
- Users can generate a specified camera angle via text to produce FSD v15-like visual effects.[^a103009221b96f3a]
- 原理是按时间顺序把画面切分成带有空间位置标记的 token 进行预测，类似大语言模型逐词预测，从而还原三维空间。[^a103009221b96f3a]
- The principle is to slice frames into spatially marked tokens in time order and predict them like next-word LLM prediction, thereby reconstructing 3D space.[^a103009221b96f3a]
- 项目地址为 autoregressive-view-model.github.io/main.html，目前未开源。[^a103009221b96f3a]
- The project address is autoregressive-view-model.github.io/main.html; it is not open source.[^a103009221b96f3a]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2124803554187874532)。 / Original: [link](https://x.com/Gorden_Sun/status/2124803554187874532).
- Topic: [实时交互世界模型 / Real-time interactive world models](../../topics/interactive-world-models.md)
- Topic: [生图姿势参考库与质量边界 / Pose reference libraries and quality boundaries](../../topics/image-generation-pose-reference-libraries.md)
- Topic: [Vibe Gaming 模型拐点 / Vibe-gaming model inflection points](../../topics/vibe-gaming-model-inflection.md)

[^a103009221b96f3a]: Autoregressive View Model synthesizes unseen camera angles
