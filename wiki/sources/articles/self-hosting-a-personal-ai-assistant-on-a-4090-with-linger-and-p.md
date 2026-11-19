---
type: Source
title: "在 4090 上自建个人 AI 助手：用 Linger 与 PolyStrata 追求零 Token 本地推理"
title_en: "Self-Hosting a Personal AI Assistant on a 4090 with Linger and PolyStrata for Zero-Token Local Inference"
description: "帖文称有人在单卡 4090 上用开源 Linger 和 PolyStrata 搭个人 AI 助手，想要模型自选、本地运行、零 Token 成本。"
description_en: "The post says someone is building a personal AI assistant on a single 4090 using open-source Linger and PolyStrata, wanting self-chosen models, local execution, and zero token cost."
resource: https://x.com/lxfater/status/2123277363769426399
tags: [agents, local-ai, gpu-4090, personal-assistant, open-source]
sources:
  - id: 4090-local-personal-agent-linger
    resource: https://x.com/lxfater/status/2123277363769426399
    title: "Self-Hosting a Personal AI Assistant on a 4090 with Linger and PolyStrata for Zero-Token Local Inference"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T20:13:29+08:00
---

# 在 4090 上自建个人 AI 助手：用 Linger 与 PolyStrata 追求零 Token 本地推理

*Self-Hosting a Personal AI Assistant on a 4090 with Linger and PolyStrata for Zero-Token Local Inference*

「帖文称」@servasyy_ai 表示已在一张 RTX 4090 上搭建自己的 Grok Bot，并因不满其运行在他人服务器、模型由他人选定以及近期限流严重，转而使用开源 Linger 及其推理引擎 PolyStrata 构建个人 AI 助手，主张模型自行选择、运行在自有显卡上、任务数量不受限且 Token 成本为零。另一用户 @lxfater 看到“黄总”用单卡 4090 跑 AI 助手并搭微信雷达后也想试试，并请求 @zhangboknight 分享「我的 Personal Agent 的一天」，展示 Linger 的日常使用、交给它的任务及其主动提前处理的事项。[^4090-local-personal-agent-linger]

The post says @servasyy_ai built their own Grok Bot on an RTX 4090, and, dissatisfied that it runs on others' servers, uses models chosen by others, and faces severe rate limiting, switched to open-source Linger and its inference engine PolyStrata to build a personal AI assistant—self-selecting models, running on their own GPU, with unlimited tasks and zero token cost. Another user, @lxfater, saw “Huang Zong” run an AI assistant on a single 4090 and build a WeChat radar and wants to try too, and asked @zhangboknight to share “A Day of My Personal Agent,” showing daily Linger usage, delegated tasks, and tasks it proactively handles in advance.[^4090-local-personal-agent-linger]

## 摘要 / Summary

- @servasyy_ai 称已在 RTX 4090 上搭建自己的 Grok Bot。[^4090-local-personal-agent-linger]
- @servasyy_ai says they built their own Grok Bot on an RTX 4090.[^4090-local-personal-agent-linger]
- 用户不满 Grok Bot 运行在他人服务器、模型由他人选定且近期限流严重，故想要自建方案。[^4090-local-personal-agent-linger]
- The user is dissatisfied that Grok Bot runs on others' servers, models are chosen by others, and rate limiting is severe, so they want a self-built solution.[^4090-local-personal-agent-linger]
- 自建方案采用开源 Linger 及其推理引擎 PolyStrata，主张模型自选、跑在自有显卡上、运行任务数量为 0 Token。[^4090-local-personal-agent-linger]
- The self-built solution uses open-source Linger and its inference engine PolyStrata, advocating self-selected models, running on one's own GPU, and zero token cost for tasks.[^4090-local-personal-agent-linger]
- @lxfater 提到看到“黄总”用一张 4090 跑 AI 助手并搭建微信雷达，表示也想试试。[^4090-local-personal-agent-linger]
- @lxfater says seeing “Huang Zong” run an AI assistant on a single 4090 and build a WeChat radar makes them want to try it too.[^4090-local-personal-agent-linger]
- @lxfater 请求 @zhangboknight 拍一期「我的 Personal Agent 的一天」，展示 Linger 的日常使用、交给它的任务及其主动提前处理的事项。[^4090-local-personal-agent-linger]
- @lxfater requests @zhangboknight to produce “A Day of My Personal Agent,” showing daily Linger usage, delegated tasks, and tasks it anticipates proactively.[^4090-local-personal-agent-linger]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2123277363769426399)。 / Original: [link](https://x.com/lxfater/status/2123277363769426399).
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [用 Grok Bot 内置额度桥接 Agent 查 X / Bridge agents to X via Grok Bot built-in quota](../../topics/grok-bot-x-api-substitute.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)

[^4090-local-personal-agent-linger]: Self-Hosting a Personal AI Assistant on a 4090 with Linger and PolyStrata for Zero-Token Local Inference
