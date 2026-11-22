---
type: Source
title: "Parth Sharma：一年半 Agent 工程实践，核心是一个 while 循环"
title_en: "Parth Sharma: 1.5 Years of Agent Engineering, It’s All a While Loop"
description: "帖文称，Agent 工程的核心是一个 while 循环，真正决定质量的是工具设计、上下文管理与后端工程。"
description_en: "The post says the core of Agent engineering is a while loop, while system quality is determined by tool design, context management, and backend engineering."
resource: https://x.com/shao__meng/status/2124331898772361395
tags: [agents, agent-engineering, context-management, tool-design, backend-engineering]
sources:
  - id: 10383308e93479d6
    resource: https://x.com/shao__meng/status/2124331898772361395
    title: "Parth Sharma: 1.5 Years of Agent Engineering, It’s All a While Loop"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:21:07+08:00
---

# Parth Sharma：一年半 Agent 工程实践，核心是一个 while 循环

*Parth Sharma: 1.5 Years of Agent Engineering, It’s All a While Loop*

「帖文称」Parth Sharma 总结过去一年半做 Agent 工程的实践经验：理解运行框架，可以先抓住一个 while 循环；但真正影响系统质量的，则是工具设计、上下文管理，以及可靠的后端实现。该推文由 meng shao 在 X 上转发，并附上 Parth Sharma 的博客链接。[^10383308e93479d6]

The post says Parth Sharma summarizes 1.5 years of Agent engineering practice: grasp the runtime framework through a while loop, but system quality hinges on tool design, context management, and reliable backend implementation. It was reposted by meng shao on X with a link to Parth Sharma’s blog.[^10383308e93479d6]

## 摘要 / Summary

- 基本流程是将用户消息放入历史、调用模型、执行模型提出的工具调用，再把结果追加到历史并重复，直到不再调用工具或达到上限/出错。[^10383308e93479d6]
- The basic loop appends user messages to history, calls the model, executes requested tool calls, appends results, and repeats until no tool call or a limit/error occurs.[^10383308e93479d6]
- 每轮产生的内容都会进入后续输入，工具返回的信息量和保留策略直接影响后续成本与判断质量。[^10383308e93479d6]
- Every round’s output becomes part of later input, so tool result volume and retention directly affect downstream cost and judgment quality.[^10383308e93479d6]
- 作者欣赏 pydantic-ai、pi 等核心流程清晰的实现；pi 以读取、写入、编辑文件和执行 shell 命令四类工具支撑大量编码任务。[^10383308e93479d6]
- The author appreciates clear-core implementations such as pydantic-ai and pi; pi supports many coding tasks with just read/write/edit file and shell command tools.[^10383308e93479d6]
- 子 Agent 被还原为一种工具调用：启动独立会话、运行类似循环、交回结果，其价值在于隔离上下文和明确分工。[^10383308e93479d6]
- Sub-agents are reduced to tool calls: start an independent session, run a similar loop, and return results; their value is context isolation and clear division of labor.[^10383308e93479d6]
- 后端需处理流式传输、心跳、断线重连，并把取消/超时传递到 HTTP 请求和子进程；重试要幂等，可恢复的工具错误应反馈给模型。[^10383308e93479d6]
- The backend must handle streaming, heartbeats, and reconnection, propagate cancellation/timeouts to HTTP requests and subprocesses, make retries idempotent, and feed recoverable tool errors back to the model.[^10383308e93479d6]
- 作者建议先理解流式协议、Linux 命名空间、资源限制与进程隔离等基础，再看框架封装和沙箱产品。[^10383308e93479d6]
- The author suggests learning streaming protocols, Linux namespaces, resource limits, and process isolation before examining framework wrappers and sandbox products.[^10383308e93479d6]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2124331898772361395)。 / Original: [link](https://x.com/shao__meng/status/2124331898772361395).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^10383308e93479d6]: Parth Sharma: 1.5 Years of Agent Engineering, It’s All a While Loop
