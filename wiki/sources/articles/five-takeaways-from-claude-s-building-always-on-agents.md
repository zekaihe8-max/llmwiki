---
type: Source
title: "读 Claude「Building always-on agents」的五个要点"
title_en: "Five takeaways from Claude's \"Building always-on agents\""
description: "帖文梳理了 Anthropic 始终在线 Agent 架构的五个要点：收件箱、计时器、记忆、权限与发件箱，并指出始终在线是体验而非一直开机。"
description_en: "The post distills five takeaways from Anthropic's always-on agent architecture—inbox, timers, memory, permissions, and outbox—and stresses that always-on is an experience, not constant uptime."
resource: https://x.com/shao__meng/status/2121852475053359340
tags: [agents, always-on, anthropic, architecture]
sources:
  - id: claude-always-on-agents-five-points
    resource: https://x.com/shao__meng/status/2121852475053359340
    title: "Five takeaways from Claude's \"Building always-on agents\""
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T19:56:02+08:00
---

# 读 Claude「Building always-on agents」的五个要点

*Five takeaways from Claude's "Building always-on agents"*

帖文称，读完 Claude「Building always-on agents」后提炼出五个要点：始终在线是一种使用体验，而非让模型一直挂在线上；事件收件箱是整个系统的事实来源，所有事件先入库再由 worker 领取；计时器让 Agent 显得主动，到期后向收件箱投事件；记忆只存下次查不到的四类内容，外部信息仅存指针；权限是最大风险，凭证置于 Agent 环境外，高风险动作需分类器审查或人工决定，发件箱节奏上先少发再争取注意力。[^claude-always-on-agents-five-points]

The post says that after reading Claude's "Building always-on agents," it distills five takeaways: always-on is a user experience rather than keeping the model online; the event inbox is the system source of truth, with all events written to storage first and then claimed by workers; timers make the agent proactive by posting events to the inbox when due; memory stores only four categories that cannot be re-queried, with external information kept as pointers; permissions are the biggest risk, credentials stay outside the agent environment, high-risk actions need classifier review or human decisions, and the outbox starts by sending less before earning attention.[^claude-always-on-agents-five-points]

## 摘要 / Summary

- 始终在线是体验而非一直开机：Agent 大部分时间休眠，收到事件或到点才短暂运行，完成后存状态再休眠，单次运行很短但循环一直在转。[^claude-always-on-agents-five-points]
- "Always-on" is an experience, not constant uptime: the agent mostly sleeps, wakes briefly on events or schedule, saves state, then sleeps again; each run is short but the loop keeps turning.[^claude-always-on-agents-five-points]
- 事件收件箱是事实来源：用户消息、webhook、定时任务先写入持久化表，再由 worker 领取，同一收件箱同一时间只有一个活跃 worker，并按来源唯一标识去重、合并连发消息。[^claude-always-on-agents-five-points]
- The event inbox is the source of truth: user messages, webhooks, and cron events are written to a persistent table first, then claimed by a worker; one inbox has only one active worker at a time, deduplicated by source ID and merged for consecutive messages.[^claude-always-on-agents-five-points]
- 计时器分两类：Agent 自设跟进时间与固定节奏任务，到期后向收件箱投事件而非直接启动运行，走同一套流程。[^claude-always-on-agents-five-points]
- Timers come in two types: agent-set follow-ups and fixed-rhythm tasks; when due, they post an event to the inbox rather than starting a run directly, following the same flow.[^claude-always-on-agents-five-points]
- 记忆只存下次查不到的四类内容：行为指令、用户笔记、已对用户说的话、任务进度；外部系统里查得到的信息只存一个指针。[^claude-always-on-agents-five-points]
- Memory stores only four categories that cannot be re-queried: behavior instructions, user notes, things already said to the user, and task progress; external information is stored only as a pointer.[^claude-always-on-agents-five-points]
- 权限是最大风险：凭证置于 Agent 环境外由代理注入，高风险动作交给分类器审查，关键决定由人做；需审批时延期工具调用并结束运行，等用户回复作为事件返回，Agent 不会卡住。[^claude-always-on-agents-five-points]
- Permissions are the biggest risk: credentials are kept outside the agent environment and injected by a proxy; high-risk actions are reviewed by a classifier, critical decisions remain with humans, and pending approval defers the tool call and ends the run until the user reply returns as an event, so the agent does not block.[^claude-always-on-agents-five-points]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2121852475053359340)。 / Original: [link](https://x.com/shao__meng/status/2121852475053359340).
- Topic: [Agent 进收件箱 / Agents in the inbox](../../topics/agent-in-inbox.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^claude-always-on-agents-five-points]: Five takeaways from Claude's "Building always-on agents"
