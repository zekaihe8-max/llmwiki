---
type: Source
title: "DeepSeek V1 作者开源本地 Personal Agent Linger"
title_en: "DeepSeek V1 Author Open-Sources Local Personal Agent Linger"
description: "前 DeepSeek V1 作者张博开源本地运行的 Personal Agent Linger，主打本地推理省 Token、PolyStrata 显存分层调度，支持挂载现有云端订阅。"
description_en: "Former DeepSeek V1 author Zhang Bo open-sources Linger, a local Personal Agent emphasizing on-device inference, PolyStrata memory-tier scheduling, and optional cloud subscription fallback."
resource: https://x.com/xiaomovps/status/2124444730746642699
tags: [agents, local-llm, personal-agent, deepseek, open-source]
sources:
  - id: xiaomovps-linger-personal-agent
    resource: https://x.com/xiaomovps/status/2124444730746642699
    title: "DeepSeek V1 Author Open-Sources Local Personal Agent Linger"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:11:19+08:00
---

# DeepSeek V1 作者开源本地 Personal Agent Linger

*DeepSeek V1 Author Open-Sources Local Personal Agent Linger*

帖文称前 DeepSeek V1 作者张博开源了 Personal Agent 项目 Linger，该项目直接驻留在用户电脑上，能操作已登录的浏览器、邮箱和日历，自动整理本地记忆库并主动提醒。核心亮点是自研 PolyStrata 引擎实现显存与内存分层调度，官方宣称 12GB 显存配 64GB 内存即可跑起 125B 参数模型；架构为开源中间层，轻任务走本地模型，重任务可接入 Claude Code、Codex 或 Pi 等现有订阅。但目前处于早期版本，GitHub Issues 反映 Windows 安装报错、CUDA 检测卡住、界面纯英文等问题，125B 推理速度仍为官方数据，挂云端订阅时数据也不完全不出本机。作者表示等安装包稳定后将实测对比 OpenClaw、Hermes 等同类产品。[^xiaomovps-linger-personal-agent]

The post reports that former DeepSeek V1 author Zhang Bo open-sourced Linger, a local Personal Agent that resides on the user's machine, drives already-logged-in browser, email, and calendar, and builds a local memory store with proactive reminders. Its PolyStrata engine tiers VRAM and system RAM, claiming a 12 GB GPU + 64 GB RAM can run a 125B model. The open middleware routes light tasks to local models and heavy tasks to existing Claude Code, Codex, or Pi subscriptions. Early-stage issues include Windows install failures, CUDA detection hangs, English-only UI, and unverified 125B speed claims; cloud fallback still sends data off-device. The author plans hands-on comparison with OpenClaw and Hermes once packaging stabilizes.[^xiaomovps-linger-personal-agent]

## 摘要 / Summary

- 项目名为 Linger，由前 DeepSeek V1 作者张博开源，定位为本地运行的 Personal Agent。[^xiaomovps-linger-personal-agent]
- Project named Linger, open-sourced by former DeepSeek V1 author Zhang Bo, positioned as a locally-run Personal Agent.[^xiaomovps-linger-personal-agent]
- 可直接操作已登录的浏览器、邮箱、日历，自动构建本地记忆库并主动提醒，免去反复配置凭据。[^xiaomovps-linger-personal-agent]
- Drives logged-in browser, email, and calendar directly, builds local memory store and proactive reminders, avoiding repeated credential setup.[^xiaomovps-linger-personal-agent]
- 自研 PolyStrata 引擎实现显存与内存分层调度，官方称 12GB 显存 + 64GB 内存可运行 125B 模型。[^xiaomovps-linger-personal-agent]
- Custom PolyStrata engine tiers VRAM and RAM; official claim: 12 GB VRAM + 64 GB RAM runs 125B model.[^xiaomovps-linger-personal-agent]
- 采用开源中间层架构：轻量任务走本地模型，复杂任务可接入 Claude Code、Codex、Pi 等现有订阅。[^xiaomovps-linger-personal-agent]
- Open middleware architecture: light tasks use local models, heavy tasks can plug into existing Claude Code, Codex, or Pi subscriptions.[^xiaomovps-linger-personal-agent]
- 早期版本存在 Windows 安装报错、CUDA 检测卡住、界面纯英文等问题，125B 推理速度为官方未验证数据。[^xiaomovps-linger-personal-agent]
- Early version shows Windows install errors, CUDA detection hangs, English-only UI; 125B speed remains unverified official data.[^xiaomovps-linger-personal-agent]
- 作者计划待安装包稳定后实测，并对比 OpenClaw、Hermes 等同类本地 Agent 产品。[^xiaomovps-linger-personal-agent]
- Author plans hands-on testing once packaging stabilizes, comparing with OpenClaw, Hermes, and similar local agents.[^xiaomovps-linger-personal-agent]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2124444730746642699)。 / Original: [link](https://x.com/xiaomovps/status/2124444730746642699).
- Topic: [个人 Agent 热潮与 Coding Agent 熟悉度差 / Personal-agent hype vs coding-agent familiarity](../../topics/personal-agent-hype-familiarity-gap.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)

[^xiaomovps-linger-personal-agent]: DeepSeek V1 Author Open-Sources Local Personal Agent Linger
