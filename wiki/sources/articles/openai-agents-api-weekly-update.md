---
type: Source
title: "OpenAI Agents API 周更"
title_en: "OpenAI Agents API Weekly Update"
description: "OpenAI Agents API 本周推出自动审查、后台压缩、时间感知、会话工具更新及系统提示跨会话缓存等功能。"
description_en: "OpenAI Agents API this week introduced auto review, background compaction, time awareness, session tool updates, and cross-session system prompt caching."
resource: https://x.com/stevendcoffey/status/2116303789649236048
tags: [openai, agents-api, product-update]
sources:
  - id: openai-agents-api-weekly-update
    resource: https://x.com/stevendcoffey/status/2116303789649236048
    title: "OpenAI Agents API Weekly Update"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T07:59:48+08:00
---

# OpenAI Agents API 周更

*OpenAI Agents API Weekly Update*

「帖文称」OpenAI Agents API 团队本周持续发布新功能，涵盖自动审查、异步压缩、时间感知、会话工具随时更新以及系统提示自动跨会话缓存。该帖发布于 2026 年 10 月 30 日，获 10.93 万次浏览。[^openai-agents-api-weekly-update]

The post says the OpenAI Agents API team kept shipping this week, with auto review, async compaction, time awareness, updatable session tools, and automatic cross-session system prompt caching. It was posted on October 30, 2026 and received 109.3K views.[^openai-agents-api-weekly-update]

## 摘要 / Summary

- Auto Review 会在执行命令前自动评估潜在不良行为，类似 Codex。 / Auto Review evaluates commands for potential bad behavior before execution, similar to Codex.[^openai-agents-api-weekly-update]
- Async Compaction 允许压缩在后台进行，以加速会话。 / Async Compaction lets compaction happen in the background to speed up sessions.[^openai-agents-api-weekly-update]
- Time awareness 是实验性功能，让模型感知时间流逝，例如将 CI 修复限时在 10 分钟内。 / Time awareness is experimental and gives the model a sense of passing time, such as timeboxing CI fixes to 10 minutes.[^openai-agents-api-weekly-update]
- Tool Updates 允许随时更新会话的工具。 / Tool Updates allow a session’s tools to be updated at any time.[^openai-agents-api-weekly-update]
- Better prompt-cache awareness 让系统提示自动跨所有会话缓存，节省费用和时间。 / Better prompt-cache awareness automatically caches system prompts across all sessions, saving money and time.[^openai-agents-api-weekly-update]

## 相关 / Related

- 原文：[链接](https://x.com/stevendcoffey/status/2116303789649236048)。 / Original: [link](https://x.com/stevendcoffey/status/2116303789649236048).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^openai-agents-api-weekly-update]: OpenAI Agents API Weekly Update
