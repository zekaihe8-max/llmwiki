---
type: Source
title: "主会话加 Thread，Token 其实没那么吓人"
title_en: "Main Session Plus Thread: Tokens Are Not That Scary"
description: "帖文称，通过主会话路由与子会话专用模型，配合 Prompt Caching 和上下文压缩，可降低 Agent Token 消耗。"
description_en: "The post claims that main-session routing with dedicated sub-session models, plus Prompt Caching and context compression, can reduce Agent token consumption."
resource: https://x.com/dotey/status/2122162706606121396
tags: [agents, token-efficiency, prompt-caching, model-routing, context-compression]
sources:
  - id: main-session-thread-token-efficiency
    resource: https://x.com/dotey/status/2122162706606121396
    title: "Main Session Plus Thread: Tokens Are Not That Scary"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T19:59:28+08:00
---

# 主会话加 Thread，Token 其实没那么吓人

*Main Session Plus Thread: Tokens Are Not That Scary*

「帖文称」主会话 + Thread 模式优化后 Token 消耗并不算高；主会话主要负责甄别和路由，类似公司前台，Sonnet 5.5 级别模型即可，而子任务交给 Thread 并可使用更强模型；主会话缓存过期时只发送最新几条消息并配合 Session 检索工具，Thread 则在缓存快过期时压缩上下文；此外，单主会话或过多 Session 均不够理想，缺乏对子任务细节的干预与上下文补充。[^main-session-thread-token-efficiency]

The post claims that the main-session plus Thread pattern, when optimized, does not consume excessive tokens; the main session mainly handles identification and routing, like a company front desk, and a Sonnet 5.5-level model suffices, while subtasks go to Thread and can use stronger models; when the main-session cache expires, only the latest few messages are sent together with a Session retrieval tool, and Thread compresses context before cache expiry; moreover, a single main session or too many sessions are both suboptimal because they lack intervention into subtask details and context supplementation.[^main-session-thread-token-efficiency]

## 摘要 / Summary

- 主会话主要职责是甄别和路由，Sonnet 5.5 级别模型足够，无需特别强的模型。[^main-session-thread-token-efficiency]
- The main session's main responsibility is identification and routing; a Sonnet 5.5-level model is sufficient, no need for a particularly strong model.[^main-session-thread-token-efficiency]
- 子任务由 Thread 完成，可使用相对更强的模型，或按任务难度在调度时选择合适模型。[^main-session-thread-token-efficiency]
- Subtasks are handled by Thread and can use relatively stronger models, or the appropriate model can be selected based on task difficulty during scheduling.[^main-session-thread-token-efficiency]
- 主会话缓存过期时不应发送全部历史和工具调用，只发最新几条消息并配合 Session 检索工具收集上下文。[^main-session-thread-token-efficiency]
- When the main-session cache expires, all history and tool calls should not be sent; only the latest few messages are sent, combined with a Session retrieval tool to collect context.[^main-session-thread-token-efficiency]
- Thread 类似传统会话，缓存利用率高，但缓存过期后有新消息时，应在缓存快过期（如 50 分钟）时压缩上下文。[^main-session-thread-token-efficiency]
- Thread is like a traditional session with high cache utilization, but when a new message arrives after cache expiry, context should be compressed before the cache expires (e.g., at 50 minutes for a one-hour cache).[^main-session-thread-token-efficiency]
- 单主会话或过多 Session 均不够理想，难以干预子任务细节、查看执行过程并补充上下文。[^main-session-thread-token-efficiency]
- A single main session or too many sessions are both suboptimal, making it difficult to intervene in subtask details, view execution, and supplement context.[^main-session-thread-token-efficiency]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2122162706606121396)。 / Original: [link](https://x.com/dotey/status/2122162706606121396).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)

[^main-session-thread-token-efficiency]: Main Session Plus Thread: Tokens Are Not That Scary
