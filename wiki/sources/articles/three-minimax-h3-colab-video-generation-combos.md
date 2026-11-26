---
type: Source
title: "MiniMax H3 与 Colab 算力的 3 套生视频落地组合"
title_en: "Three MiniMax H3 + Colab Video Generation Combos"
description: "利用 Google AI 会员赠送的 Colab 算力点，搭建三套不同门槛的 MiniMax H3 开源权重生视频流水线。"
description_en: "Build three MiniMax H3 open-weight video pipelines using Google Colab compute units gifted with AI subscriptions."
resource: https://x.com/xiaomovps/status/2125549307445317935
tags: [minimax-h3, colab, video-generation, ai-workflow]
sources:
  - id: 8a57c0a82a2290f2
    resource: https://x.com/xiaomovps/status/2125549307445317935
    title: "Three MiniMax H3 + Colab Video Generation Combos"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:47:35+08:00
---

# MiniMax H3 与 Colab 算力的 3 套生视频落地组合

*Three MiniMax H3 + Colab Video Generation Combos*

「帖文称」小墨同学介绍了三套基于 MiniMax H3 开源权重和 Google Colab 算力的生视频组合，涵盖 agy CLI + ComfyUI + SeedVR2、WanGP + Showrunner、以及 MoneyPrinterTurbo + API 三种方案，并提醒权重应拷至 Colab 本地盘、部分地区需填写授权豁免表。[^8a57c0a82a2290f2]

The post presents three MiniMax H3 open-weight video generation combinations on Google Colab: agy CLI with ComfyUI and SeedVR2, WanGP with Showrunner, and MoneyPrinterTurbo with the MiniMax H3 API, plus tips on local disk caching and regional authorization forms.[^8a57c0a82a2290f2]

## 摘要 / Summary

- 方案一：agy CLI + Colab A100/G4 + ComfyUI + MiniMax H3 + SeedVR2，适合 Agent 自动环境配置与批量出片，官方量化工作流显存压至 42.5GB，SeedVR2 补齐 2K 超分，成片存入 Google Drive。[^8a57c0a82a2290f2]
- Option 1: agy CLI + Colab A100/G4 + ComfyUI + MiniMax H3 + SeedVR2, suited for Agent-driven environment setup and batch rendering; official quantized workflow uses 42.5GB VRAM, SeedVR2 adds 2K upscaling, and finished videos are saved to Google Drive.[^8a57c0a82a2290f2]
- 方案二：Colab L4/A100 + WanGP + MiniMax H3 + Showrunner，面向新手，一个界面打通 Qwen-Image 首帧、MiniMax H3 视频、Showrunner 多镜头连贯、配乐与超分，支持分块模式降低显存门槛。[^8a57c0a82a2290f2]
- Option 2: Colab L4/A100 + WanGP + MiniMax H3 + Showrunner, beginner-friendly with one interface for Qwen-Image first frame, MiniMax H3 video, Showrunner multi-shot coherence, music, and upscaling; chunked mode lowers VRAM requirements.[^8a57c0a82a2290f2]
- 方案三：Colab 免费/T4 轻实例 + MoneyPrinterTurbo + MiniMax H3 API，适合仅 200 算力点用户，MoneyPrinterTurbo 负责文案、faster-whisper 字幕、配音和剪辑，视频生成外包给按秒计费的 MiniMax H3 API，适合稳定批量 9:16 短视频。[^8a57c0a82a2290f2]
- Option 3: Colab free/T4 light instance + MoneyPrinterTurbo + MiniMax H3 API, for users with only 200 compute points; MoneyPrinterTurbo handles copy, faster-whisper subtitles, voiceover, and editing, while video generation is outsourced to per-second billed MiniMax H3 API for stable 9:16 short video batches.[^8a57c0a82a2290f2]
- 省钱提示：本地权重运行时应将成片目录挂 Google Drive，但大模型权重先拷到 Colab 本地盘再加载，避免读盘白烧算力点；算力点归零会立即断掉 WebUI。[^8a57c0a82a2290f2]
- Cost tip: when running local weights, mount output to Google Drive but copy large model weights to Colab local disk first to avoid burning compute on disk reads; WebUI disconnects immediately when compute points reach zero.[^8a57c0a82a2290f2]
- 区域提示：美、欧、英、韩地区运行 MiniMax H3 开源权重需先在官网填写免费授权豁免表。[^8a57c0a82a2290f2]
- Regional note: users in the US, Europe, UK, and Korea must fill out a free authorization exemption form on the official site before running MiniMax H3 open weights.[^8a57c0a82a2290f2]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2125549307445317935)。 / Original: [link](https://x.com/xiaomovps/status/2125549307445317935).
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)

[^8a57c0a82a2290f2]: Three MiniMax H3 + Colab Video Generation Combos
