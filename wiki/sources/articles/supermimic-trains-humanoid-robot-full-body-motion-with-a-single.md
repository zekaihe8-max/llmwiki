---
type: Source
title: "SuperMimic 用单个可微世界模型训练人形机器人全身动作"
title_en: "SuperMimic Trains Humanoid Robot Full-Body Motion with a Single Differentiable World Model"
description: "帖文称 SuperMimic 基于 mjlab 仿真环境，借鉴 DreamerV3 思路，用可微分世界模型统一训练 G1 人形机器人全身动作追踪，并支持广义坐标与最大坐标控制。"
description_en: "The post says SuperMimic, built on mjlab and inspired by DreamerV3, uses a single differentiable world model to train G1 humanoid full-body motion tracking, supporting generalized and maximal coordinate control."
resource: https://x.com/Gorden_Sun/status/2120709296904458727
tags: [robotics, world-model, humanoid, simulation, differentiable-world-model]
sources:
  - id: supermimic-differentiable-world-model
    resource: https://x.com/Gorden_Sun/status/2120709296904458727
    title: "SuperMimic Trains Humanoid Robot Full-Body Motion with a Single Differentiable World Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T20:21:33+08:00
---

# SuperMimic 用单个可微世界模型训练人形机器人全身动作

*SuperMimic Trains Humanoid Robot Full-Body Motion with a Single Differentiable World Model*

「帖文称」SuperMimic 基于 mjlab 物理仿真环境构建，借鉴 DreamerV3 等技术思路，把物理规律放进可计算预测的世界模型中统一训练，让 G1 人形机器人拥有精确的全身动作追踪能力，并支持广义坐标和最大坐标两种方式控制身体姿态。相比传统反复试错的训练方式，可微分世界模型能让机器人直接推演动作与环境的互动变化，大幅加快复杂连贯动作的学习速度；但帖文也提到，世界模型本质是神经网络拟合，遇到剧烈碰撞或脚底打滑等长尾场景时可能导致连续动作失败。[^supermimic-differentiable-world-model]

The post says SuperMimic is built on the mjlab physics simulation environment and borrows ideas from DreamerV3, placing physical laws into a computable, predictable world model for unified training. It reportedly gives the G1 humanoid robot precise full-body motion tracking, supporting both generalized and maximal coordinate control. Compared with traditional trial-and-error training, the differentiable world model lets the robot directly simulate action–environment interaction changes, greatly speeding up learning of complex continuous motions; however, the post warns that because the world model is a neural-network fit, severe collisions or foot slippage may cause continuous action failures.[^supermimic-differentiable-world-model]

## 摘要 / Summary

- SuperMimic 基于 mjlab 物理仿真环境构建，借鉴 DreamerV3 等技术思路。[^supermimic-differentiable-world-model]
- SuperMimic is built on the mjlab physics simulation environment and borrows technical ideas from DreamerV3.[^supermimic-differentiable-world-model]
- 该方法把物理规律放进可计算预测的世界模型中进行统一训练，让 G1 人形机器人拥有精确的全身动作追踪能力。[^supermimic-differentiable-world-model]
- The method places physical laws into a computable, predictable world model for unified training, reportedly giving the G1 humanoid robot precise full-body motion tracking.[^supermimic-differentiable-world-model]
- 支持广义坐标和最大坐标两种方式来精准控制身体姿态。[^supermimic-differentiable-world-model]
- It supports both generalized coordinates and maximal coordinates for precise body posture control.[^supermimic-differentiable-world-model]
- 相比传统反复试错的训练方式，可微分世界模型能大幅加快学习复杂连贯动作的速度。[^supermimic-differentiable-world-model]
- Compared with traditional trial-and-error training, the differentiable world model can greatly accelerate learning of complex continuous motions.[^supermimic-differentiable-world-model]
- 帖文提到隐患：世界模型是神经网络拟合，遇到剧烈碰撞或脚底打滑等长尾场景可能导致连续动作失败。[^supermimic-differentiable-world-model]
- The post notes a risk: since the world model is a neural-network fit, severe collisions or foot slippage may cause continuous action failures.[^supermimic-differentiable-world-model]
- Github 链接指向 HybridRobotics 组织，发帖时间为 2026 年 11 月 12 日 2:44 AM。[^supermimic-differentiable-world-model]
- The Github link points to the HybridRobotics organization, and the post was made at 2:44 AM on November 12, 2026.[^supermimic-differentiable-world-model]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2120709296904458727)。 / Original: [link](https://x.com/Gorden_Sun/status/2120709296904458727).
- Topic: [实时交互世界模型 / Real-time interactive world models](../../topics/interactive-world-models.md)
- Topic: [仿真就绪开放三维资产 / Simulation-ready open 3D assets](../../topics/simulation-ready-open-3d-assets.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)

[^supermimic-differentiable-world-model]: SuperMimic Trains Humanoid Robot Full-Body Motion with a Single Differentiable World Model
