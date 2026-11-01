---
type: Source
title: "读 Super-agent：DeepSeek 持久化智能体架构设计"
title_en: "Reading Super-agent: DeepSeek Persistent Agent Architecture Design"
description: "帖文称 DeepSeek Harness 团队开源 Super-agent 研究原型，通过 Ticket 机制、Router/Worker 分离、事件驱动和任务恢复，支持 Agent 长期运行并尽量减少人工干预。"
description_en: "The post says DeepSeek Harness open-sourced a Super-agent research prototype, using Ticket mechanism, Router/Worker separation, event-driven triggers, and task recovery to support long-running agents with minimal human intervention."
resource: https://x.com/xiaomovps/status/2116806492179608039
tags: [deepseek, super-agent, agent-architecture, persistent-agent]
sources:
  - id: deepseek-super-agent
    resource: https://x.com/xiaomovps/status/2116806492179608039
    title: "Reading Super-agent: DeepSeek Persistent Agent Architecture Design"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:03:35+08:00
---

# 读 Super-agent：DeepSeek 持久化智能体架构设计

*Reading Super-agent: DeepSeek Persistent Agent Architecture Design*

「帖文称」DeepSeek Harness 团队放出 Super-agent 架构设计并开源研究原型，核心目标是让 Agent 长期运行、主动接活、持续跟进并尽量减少人工干预。文章列出五点工程价值：任务不再依赖单个 Session、Router 与 Worker 分离、从被动聊天转为事件驱动、任务中断后可恢复，以及尽量降低对人的打扰。[^deepseek-super-agent]

The post says the DeepSeek Harness team released a Super-agent architecture design and open-sourced a research prototype, aiming to let agents run long-term, pick up tasks proactively, follow up continuously, and minimize human intervention. It lists five engineering values: tasks no longer depend on a single session, Router and Worker separation, shift from passive chat to event-driven, recovery after task interruption, and minimizing disturbance to humans.[^deepseek-super-agent]

## 摘要 / Summary

- Super-agent 引入 Ticket 机制，每个任务拥有独立状态、授权范围和执行记录，支持根据原任务继续处理后续反馈，如 PR 修改意见。 / Super-agent introduces a Ticket mechanism where each task has independent state, authorization scope, and execution records, supporting continued handling of follow-up feedback such as PR review comments based on the original task.[^deepseek-super-agent]
- 架构将 Router 与 Worker 分离，Router 负责接收消息、判断任务和分配工作，Worker 独立执行并拥有自己的 Session 和工作目录，可并行处理。 / The architecture separates Router and Worker; the Router receives messages, judges tasks, and distributes work, while Workers execute independently with their own Session and working directory, supporting parallel processing.[^deepseek-super-agent]
- 原型支持监听 GitHub 和飞书消息，新 Issue、PR 评论或 CI 结果可作为触发事件，系统会先按授权和规则判断，符合条件才创建任务，并可开启观察模式仅记录不执行。 / The prototype supports listening to GitHub and Feishu messages; new Issues, PR comments, or CI results can serve as trigger events, and the system first checks authorization and rules before creating a task, with an observation mode that records but does not execute.[^deepseek-super-agent]
- Worker 执行中遇到网络错误、模型请求失败或服务重启时，系统会保留任务状态并通过重试和恢复机制继续处理，而非将单次模型调用失败视为任务结束。 / When a Worker encounters network errors, model request failures, or service restarts during execution, the system retains task state and continues via retry and recovery mechanisms, rather than treating a single model call failure as task termination.[^deepseek-super-agent]
- 设计理念强调只在需要人工决定、遇到问题或有结果交付时通知用户，尽量减少 Agent 对人类注意力的消耗。 / The design philosophy emphasizes notifying users only when human decisions are needed, problems arise, or results are delivered, minimizing consumption of human attention.[^deepseek-super-agent]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2116806492179608039)。 / Original: [link](https://x.com/xiaomovps/status/2116806492179608039).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^deepseek-super-agent]: Reading Super-agent: DeepSeek Persistent Agent Architecture Design
