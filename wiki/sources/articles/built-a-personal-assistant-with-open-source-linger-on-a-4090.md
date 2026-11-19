---
type: Source
title: "用开源 Linger 在 4090 上搭了自己的助手"
title_en: "Built a personal assistant with open-source Linger on a 4090"
description: "用户在本地 4090 显卡上部署开源 Linger 与 PolyStrata，搭建自有 AI 助手并接入邮件、日历、知识库与推特等外部应用。"
description_en: "User deployed open-source Linger and PolyStrata on a local 4090 GPU to build a self-hosted AI assistant connected to email, calendar, knowledge base, and Twitter."
resource: https://x.com/servasyy_ai/status/2123245663182106812
tags: [local-ai, personal-assistant, consumer-gpu, open-source]
sources:
  - id: linger-4090-personal-assistant
    resource: https://x.com/servasyy_ai/status/2123245663182106812
    title: "Built a personal assistant with open-source Linger on a 4090"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T20:12:40+08:00
---

# 用开源 Linger 在 4090 上搭了自己的助手

*Built a personal assistant with open-source Linger on a 4090*

「帖文称」作者在本地 4090 显卡上用开源 Linger 及其推理引擎 PolyStrata 搭出了自己的 Grok Bot，模型自选、运行在自有显卡上、任务 Token 费用为零。[^linger-4090-personal-assistant]

The post says the author built their own Grok Bot on a local 4090 GPU using open-source Linger and its PolyStrata inference engine, with self-selected models running on their own graphics card and zero token costs for tasks.[^linger-4090-personal-assistant]

## 摘要 / Summary

- 帖文称，作者在本地 4090 显卡上使用开源 Linger 及其推理引擎 PolyStrata 搭建了自己的 Grok Bot 替代方案。[^linger-4090-personal-assistant]
- The post says the author built a personal Grok Bot alternative on a local 4090 GPU using open-source Linger and its inference engine PolyStrata.[^linger-4090-personal-assistant]
- PolyStrata 支持 Qwen、DeepSeek、GLM、Gemma 等 12 款模型，可在运行中切换，并宣称同配置下跑大模型比 llama.cpp 最高快 5 倍。[^linger-4090-personal-assistant]
- PolyStrata supports 12 models including Qwen, DeepSeek, GLM, and Gemma, switchable at runtime, and claims up to 5x faster large-model inference than llama.cpp at the same configuration.[^linger-4090-personal-assistant]
- 作者将 Linger 装在 Mac 上，接本地 4090 显卡部署的 Gemma4，并连接邮件、日历、知识库与只读推特账号。[^linger-4090-personal-assistant]
- The author installed Linger on a Mac, connected it to Gemma4 running locally on a 4090 GPU, and linked email, calendar, a knowledge base, and a read-only Twitter account.[^linger-4090-personal-assistant]
- 另一台 V100 上，作者用同一 PolyStrata 引擎跑千问，并搭建扫描 190 个微信群、积累二十多万条消息的微信雷达。[^linger-4090-personal-assistant]
- On another V100, the author ran Qwen with the same PolyStrata engine and built a WeChat radar scanning 190 groups and accumulating over 200,000 messages.[^linger-4090-personal-assistant]
- 两个项目已开源，作者称 GitHub 地址放在评论区。[^linger-4090-personal-assistant]
- Both projects are open source, and the post says GitHub links are in the comments.[^linger-4090-personal-assistant]

## 相关 / Related

- 原文：[链接](https://x.com/servasyy_ai/status/2123245663182106812)。 / Original: [link](https://x.com/servasyy_ai/status/2123245663182106812).
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^linger-4090-personal-assistant]: Built a personal assistant with open-source Linger on a 4090
