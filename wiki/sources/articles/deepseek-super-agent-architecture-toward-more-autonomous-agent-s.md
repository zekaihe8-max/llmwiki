---
type: Source
title: "DeepSeek Super-agent 架构：迈向更自主的 Agent 系统"
title_en: "DeepSeek Super-agent Architecture: Toward More Autonomous Agent Systems"
description: "DeepSeek Harness 团队提出双层 Router/Worker、事件驱动与异步 ReAct 的 Super-agent 架构，将 Session 降为实现细节。"
description_en: "DeepSeek Harness team proposes a Super-agent architecture with dual-layer Router/Worker, event-driven triggers, and async ReAct, demoting Sessions to implementation details."
resource: https://x.com/shao__meng/status/2116541149443698968
tags: [agents, design, deepseek, harness, multi-agent]
sources:
  - id: deepseek-super-agent-architecture
    resource: https://x.com/shao__meng/status/2116541149443698968
    title: "DeepSeek Super-agent Architecture: Toward More Autonomous Agent Systems"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:01:00+08:00
---

# DeepSeek Super-agent 架构：迈向更自主的 Agent 系统

*DeepSeek Super-agent Architecture: Toward More Autonomous Agent Systems*

帖文称，DeepSeek Harness 团队探索 Super-agent 设计，主张把 Agent 做成跨信道连续、可并行多任务、事件驱动主动干活、云端持久在线的实体；架构以 Router/Worker 双层、事件过滤与直通、异步 ReAct、存算分离加端侧 daemon、外部 Watchdog 为核心，Session 成为实现细节，人只做高层决策与验收。[^deepseek-super-agent-architecture]

The post says DeepSeek Harness team explores Super-agent design, advocating Agents as cross-channel continuous, parallel multi-task, event-driven proactive, cloud-persistent entities; the architecture centers on dual-layer Router/Worker, event filtering and pass-through, async ReAct, storage-compute separation plus client-side daemon, and external Watchdog, with Sessions as implementation details and humans only making high-level decisions and acceptance.[^deepseek-super-agent-architecture]

## 摘要 / Summary

- 架构采用常驻 Router 层承担全局协调与任务分派，Worker 层上下文隔离并专执单任务，Router 对外统一回复。 / The architecture uses a resident Router layer for global coordination and task dispatch, with isolated Worker layers executing single tasks; the Router replies externally on behalf of workers.[^deepseek-super-agent-architecture]
- 事件驱动支持群聊、邮件、日程、Code Review、CI 等半结构化 Trigger，并设快速/慢速两级过滤。 / Event-driven triggers support semi-structured sources such as group chats, email, calendars, Code Review, and CI, with fast/slow two-level filtering.[^deepseek-super-agent-architecture]
- 异步 ReAct 将耗时工具改为 start()/stop() 立即返回 Started，结果事后以事件形式投回。 / Async ReAct changes long-running tools to start()/stop() returning Started immediately, with results delivered later as events.[^deepseek-super-agent-architecture]
- 计算与状态分离：Loop 放云端无状态容器，Session 状态进数据库，端侧仅运行无会话状态的轻量 daemon。 / Compute and state are separated: the Loop runs in stateless cloud containers, Session state goes to a database, and the client runs only a stateless lightweight daemon.[^deepseek-super-agent-architecture]
- 外部 Watchdog Session 定时检查基础设施并用模型判断 Worker 是否有实质进展或跑偏。 / An external Watchdog Session periodically checks infrastructure and uses a model to judge whether Workers are making substantive progress or going off track.[^deepseek-super-agent-architecture]
- 压测显示在约 300 条消息、20 条工作请求的合成负载下，Super-agent p50/p95 任务完成时间约 12.4/15.7 分钟，优于单 Session + Subagent 方案。 / Load testing with about 300 messages and 20 work requests showed Super-agent p50/p95 task completion times of about 12.4/15.7 minutes, better than single Session + Subagent.[^deepseek-super-agent-architecture]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2116541149443698968)。 / Original: [link](https://x.com/shao__meng/status/2116541149443698968).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)

[^deepseek-super-agent-architecture]: DeepSeek Super-agent Architecture: Toward More Autonomous Agent Systems
