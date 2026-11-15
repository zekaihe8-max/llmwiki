---
type: Source
title: "本地部署 MiniMax H3 与四款武打 LoRA 生成海贼王打戏"
title_en: "Locally Deployed MiniMax H3 with Four Combat LoRAs for One Piece Fight Scenes"
description: "本地部署 MiniMax H3 并串联四个 LoRA，攻克 AI 武打视频的变形、穿模与慢动作问题。"
description_en: "Locally deploy MiniMax H3 and chain four LoRAs to solve deformation, clipping and slow-motion issues in AI fight videos."
resource: https://x.com/servasyy_ai/status/2121775554429104299
tags: [ai-video, local-ai, lora, minimax-h3, combat-video]
sources:
  - id: servasyy-ai-minimax-h3-wuda-lora
    resource: https://x.com/servasyy_ai/status/2121775554429104299
    title: "Locally Deployed MiniMax H3 with Four Combat LoRAs for One Piece Fight Scenes"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:29:18+08:00
---

# 本地部署 MiniMax H3 与四款武打 LoRA 生成海贼王打戏

*Locally Deployed MiniMax H3 with Four Combat LoRAs for One Piece Fight Scenes*

「帖文称」用户又用本地部署 MiniMax H3 加武打 skill 做了一集海贼王，底模为 minimax_h3_hybrid_fl2va_ref2va_b25-49-int8，并串联 minimax_h3_turbo_v4_step600_ema_pruned、bunny_H3_Combat_V2、bunny_Fight_Flow_V1 与 bunny_Motion_Repair_V1 四个 LoRA，分别压缩采样步数、强化肉搏感、衔接动作流与修复高速运动变形；作者表示评论区回复足够多则开源该管线。[^servasyy-ai-minimax-h3-wuda-lora]

The post claims the user made a One Piece episode using locally deployed MiniMax H3 plus a combat skill, based on minimax_h3_hybrid_fl2va_ref2va_b25-49-int8 and chained with four LoRAs—minimax_h3_turbo_v4_step600_ema_pruned, bunny_H3_Combat_V2, bunny_Fight_Flow_V1 and bunny_Motion_Repair_V1—to cut sampling steps, enhance combat feel, smooth action transitions and repair high-speed motion deformation; the author said they may open-source the pipeline if comment replies are numerous.[^servasyy-ai-minimax-h3-wuda-lora]

## 摘要 / Summary

- 帖文称，基于本地部署的 MiniMax H3 底模 minimax_h3_hybrid_fl2va_ref2va_b25-49-int8，串联四个核心 LoRA 制作海贼王武打集。[^servasyy-ai-minimax-h3-wuda-lora]
- The post claims a locally deployed MiniMax H3 base model (minimax_h3_hybrid_fl2va_ref2va_b25-49-int8) was chained with four core LoRAs to produce a One Piece fight episode.[^servasyy-ai-minimax-h3-wuda-lora]
- minimax_h3_turbo_v4_step600_ema_pruned LoRA 将采样步数从几十步降至 8 步，支持本地显卡 8 步出片。[^servasyy-ai-minimax-h3-wuda-lora]
- The minimax_h3_turbo_v4_step600_ema_pruned LoRA cuts sampling steps from dozens to 8, enabling local GPUs to output video in 8 steps.[^servasyy-ai-minimax-h3-wuda-lora]
- bunny_H3_Combat_V2 用于拳脚刀剑的真实肉搏感，bunny_Fight_Flow_V1 用于出招、闪避与连招的顺滑衔接。[^servasyy-ai-minimax-h3-wuda-lora]
- bunny_H3_Combat_V2 provides realistic hand-to-hand combat feel for fists, feet, swords and knives, while bunny_Fight_Flow_V1 enables smooth transitions between strikes, dodges and combos.[^servasyy-ai-minimax-h3-wuda-lora]
- bunny_Motion_Repair_V1 压制高速运动下的肢体变形与穿模，稳住对打时的人体结构。[^servasyy-ai-minimax-h3-wuda-lora]
- bunny_Motion_Repair_V1 suppresses limb deformation and clipping during high-speed motion, stabilizing body structure during fights.[^servasyy-ai-minimax-h3-wuda-lora]
- 作者表示若评论区回复人数较多，将把该管线开源。[^servasyy-ai-minimax-h3-wuda-lora]
- The author said they may open-source the pipeline if enough people reply in the comments.[^servasyy-ai-minimax-h3-wuda-lora]

## 相关 / Related

- 原文：[链接](https://x.com/servasyy_ai/status/2121775554429104299)。 / Original: [link](https://x.com/servasyy_ai/status/2121775554429104299).
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)

[^servasyy-ai-minimax-h3-wuda-lora]: Locally Deployed MiniMax H3 with Four Combat LoRAs for One Piece Fight Scenes
