---
type: Source
title: "MatAnyone-E：消费级显卡也能跑的超高清视频抠像算法"
title_en: "MatAnyone-E: UHD Video Matting Algorithm for Consumer GPUs"
description: "南洋理工大学等团队提出 MatAnyone-E，通过低分辨率预扫描和关键区域高精度计算，大幅提升 4K 视频抠像速度并降低显存占用。"
description_en: "NTU and collaborators propose MatAnyone-E, using low-resolution prescanning and high-precision computation only in key regions to greatly speed up 4K video matting and reduce VRAM usage."
resource: https://x.com/Gorden_Sun/status/2119390142960193998
tags: [ai-video-matting, consumer-gpu, efficient-inference, open-source]
sources:
  - id: matanyone-e-uhd-video-matting
    resource: https://x.com/Gorden_Sun/status/2119390142960193998
    title: "MatAnyone-E: UHD Video Matting Algorithm for Consumer GPUs"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:46:00+08:00
---

# MatAnyone-E：消费级显卡也能跑的超高清视频抠像算法

*MatAnyone-E: UHD Video Matting Algorithm for Consumer GPUs*

「帖文称」南洋理工大学 S-Lab 等团队开发的 MatAnyone-E 算法，可在保留发丝边缘和透明细节的前提下，将 4K 视频抠像处理速度提升至原先的 7.4 倍，显存占用降至原先的十三分之一，单张显卡跑原生 4K 视频可达每秒 28 帧以上，1080P 可达每秒 73 帧，甚至能在 RTX 3090 等消费级显卡上流畅运行；项目主页表示后续会开源。[^matanyone-e-uhd-video-matting]

The post reports that MatAnyone-E, developed by NTU S-Lab and collaborators, preserves hair edges and transparent details while boosting 4K video matting speed to 7.4× the original and cutting VRAM usage to one-thirteenth; a single card can process native 4K at over 28 fps and 1080p at over 73 fps, reportedly running smoothly on consumer GPUs such as the RTX 3090, with the project page saying it will be open-sourced later.[^matanyone-e-uhd-video-matting]

## 摘要 / Summary

- 算法先用低分辨率快速扫一遍画面，挑出发丝边缘等复杂区域，只在这些关键位置做高精度计算，其余平整背景直接复用低分辨率结果。 / The algorithm first quickly scans the frame at low resolution, identifies complex regions such as hair edges, performs high-precision computation only at those key positions, and reuses low-resolution results for flat backgrounds.[^matanyone-e-uhd-video-matting]
- 在保证发丝边缘和透明细节完整保留的前提下，4K 视频抠像处理速度提升到原先的 7.4 倍，显存占用降到原先的十三分之一。 / While preserving hair edges and transparent details, 4K video matting speed is raised to 7.4× the original and VRAM usage is reduced to one-thirteenth.[^matanyone-e-uhd-video-matting]
- 单张显卡跑原生 4K 视频能达到每秒 28 帧以上，跑 1080P 视频能达到每秒 73 帧，即使在 RTX 3090 这样的消费级显卡上也能流畅跑起来。 / A single card can run native 4K video at over 28 fps and 1080p at over 73 fps, and reportedly runs smoothly even on consumer GPUs such as the RTX 3090.[^matanyone-e-uhd-video-matting]
- 项目主页（后续会开源）通过 t.co 短链分享，由 Gorden Sun 在 X 上发布。 / The project page, which says it will be open-sourced later, is shared via a t.co short link; the post was published by Gorden Sun on X.[^matanyone-e-uhd-video-matting]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2119390142960193998)。 / Original: [link](https://x.com/Gorden_Sun/status/2119390142960193998).
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [开源工具装进 AI 助手做自然语言剪辑 / Open-source tools in AI assistants for natural-language editing](../../topics/open-source-in-ai-assistant-editing.md)

[^matanyone-e-uhd-video-matting]: MatAnyone-E: UHD Video Matting Algorithm for Consumer GPUs
