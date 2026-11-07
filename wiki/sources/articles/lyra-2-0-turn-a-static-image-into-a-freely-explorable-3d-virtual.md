---
type: Source
title: "Lyra 2.0：让一张静态图片变成可自由探索的3D虚拟世界"
title_en: "Lyra 2.0: Turn a Static Image into a Freely Explorable 3D Virtual World"
description: "帖文称英伟达开源基于 WAN-14B 的 Lyra 2.0，从单张 480×832 照片和相机轨迹生成可漫游的3D高斯点云场景。"
description_en: "The post says NVIDIA's open-source WAN-14B-based Lyra 2.0 generates a roamable 3D Gaussian point-cloud scene from a single 480×832 photo and camera trajectory."
resource: https://x.com/Gorden_Sun/status/2119011436030799981
tags: [nvidia, lyra-2-0, video-to-3d, open-weight, gaussian-point-cloud]
sources:
  - id: 9f26fbc4b69b43b9
    resource: https://x.com/Gorden_Sun/status/2119011436030799981
    title: "Lyra 2.0: Turn a Static Image into a Freely Explorable 3D Virtual World"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-07T20:41:32+08:00
---

# Lyra 2.0：让一张静态图片变成可自由探索的3D虚拟世界

*Lyra 2.0: Turn a Static Image into a Freely Explorable 3D Virtual World*

帖文称，英伟达开源的 Lyra 2.0 基于 WAN-14B，用户输入一张 480×832 分辨率的普通照片和指定的相机运动轨迹，模型先生成视角连贯的长视频，再把视频直接重建为包含空间坐标和色彩属性的3D高斯点云场景；最终生成的3D场景文件可放入兼容渲染引擎实时渲染，也能像开放世界游戏一样操控镜头在空间里前后穿梭，各角度物体结构保持一致。模型已在 Hugging Face 发布（huggingface.co/nvidia/Lyra-2.0）。[^9f26fbc4b69b43b9]

The post says NVIDIA's open-source Lyra 2.0, based on WAN-14B, takes a 480×832 ordinary photo and a specified camera motion trajectory, first generates a view-coherent long video, then directly reconstructs the video into a 3D Gaussian point-cloud scene containing spatial coordinates and color attributes; the resulting 3D scene file can be rendered in real time in compatible engines, and users can control the camera to travel back and forth in the generated space like an open-world game, with object structure consistent from all angles. The model is released on Hugging Face (huggingface.co/nvidia/Lyra-2.0).[^9f26fbc4b69b43b9]

## 摘要 / Summary

- 帖文称 Lyra 2.0 由英伟达开源，基于 WAN-14B 模型。 / The post says Lyra 2.0 is open-sourced by NVIDIA and based on the WAN-14B model.[^9f26fbc4b69b43b9]
- 输入为一张 480×832 分辨率的普通照片，并指定相机运动轨迹。 / Input is an ordinary photo at 480×832 resolution, plus a specified camera motion trajectory.[^9f26fbc4b69b43b9]
- 模型先生成视角连贯的长视频，再把视频直接重建为3D高斯点云场景。 / The model first generates a view-coherent long video, then directly reconstructs the video into a 3D Gaussian point-cloud scene.[^9f26fbc4b69b43b9]
- 最终输出包含空间坐标和色彩属性的3D场景文件，可放入兼容渲染引擎实时渲染。 / The final output is a 3D scene file containing spatial coordinates and color attributes, usable for real-time rendering in compatible engines.[^9f26fbc4b69b43b9]
- 用户可以像玩开放世界游戏一样，操控镜头在生成空间里前后穿梭，各角度物体结构保持一致。 / Users can control the camera to travel back and forth in the generated space like an open-world game, with object structure consistent from all angles.[^9f26fbc4b69b43b9]
- 模型权重已在 Hugging Face 发布，地址为 huggingface.co/nvidia/Lyra-2.0。 / Model weights are released on Hugging Face at huggingface.co/nvidia/Lyra-2.0.[^9f26fbc4b69b43b9]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2119011436030799981)。 / Original: [link](https://x.com/Gorden_Sun/status/2119011436030799981).
- Topic: [实时交互世界模型 / Real-time interactive world models](../../topics/interactive-world-models.md)
- Topic: [仿真就绪开放三维资产 / Simulation-ready open 3D assets](../../topics/simulation-ready-open-3d-assets.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)

[^9f26fbc4b69b43b9]: Lyra 2.0: Turn a Static Image into a Freely Explorable 3D Virtual World
