---
type: Source
title: "Devin Bots：交给它的不是工单，是一项职责"
title_en: "Devin Bots: What You Hand Over Is Not a Ticket, but a Responsibility"
description: "Cognition 推出 Devin Bots，让 AI 智能体持续负责工程目标，而非仅完成单次任务。"
description_en: "Cognition launches Devin Bots, letting AI agents continuously own engineering goals rather than just complete one-off tasks."
resource: https://x.com/shao__meng/status/2122992266637955157
tags: [devin, agents, ai-engineering, continuous-responsibility]
sources:
  - id: bcd288a6f247c7c9
    resource: https://x.com/shao__meng/status/2122992266637955157
    title: "Devin Bots: What You Hand Over Is Not a Ticket, but a Responsibility"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T20:01:25+08:00
---

# Devin Bots：交给它的不是工单，是一项职责

*Devin Bots: What You Hand Over Is Not a Ticket, but a Responsibility*

帖文称，Cognition 推出 Devin Bots，区别于一次请求对应一次执行的 Devin 会话，Bot 是持续存在的工程队友：拥有独立身份、记忆和工具权限，能拆解目标，启动多个 Devin 会话并行工作，再跟进测试、代码审查和后续改进。[^bcd288a6f247c7c9]

The post says Cognition has launched Devin Bots. Unlike a Devin session where one request maps to one execution, a Bot is a persistent engineering teammate with its own identity, memory, and tool permissions, able to break down goals, launch multiple Devin sessions in parallel, and follow up with testing, code review, and continuous improvement.[^bcd288a6f247c7c9]

## 摘要 / Summary

- Devin Bots 可按日程运行，或由 Slack 客户问题、每晚 CI、Linear 阻塞事项等事件触发，创建时可从 QA、产品开发、性能优化等模板起步。[^bcd288a6f247c7c9]
- Devin Bots can run on schedule or be triggered by events such as Slack customer issues, nightly CI checks, or Linear blockers, and can start from QA, product development, or performance optimization templates.[^bcd288a6f247c7c9]
- Cognition 的 Android Bot 在 44 天内合并 1134 个 PR、关闭 1217 张工单，编写约 34.5 万行 Kotlin，负责人共发送 183 条消息，约每合并 6 个 PR 才发一条。[^bcd288a6f247c7c9]
- Cognition's Android Bot merged 1,134 PRs, closed 1,217 tickets, and wrote about 345,000 lines of Kotlin in 44 days, with the owner sending only 183 messages, roughly one per six merged PRs.[^bcd288a6f247c7c9]
- Layout Bot 每三小时构建主分支最新代码并修复布局跳动，三周内合并 159 个相关 PR，团队称卡顿降低了 70%。[^bcd288a6f247c7c9]
- Layout Bot builds the latest main branch every three hours to find and fix layout jumps; in three weeks it merged 159 related PRs, and the team says stutter dropped by 70%.[^bcd288a6f247c7c9]
- Bot 之间可派活，例如 QA Bot 发现问题后交给 Developer Bot 修复，再回来验证，人主要处理目标调整和关键判断。[^bcd288a6f247c7c9]
- Bots can hand work to each other; for example, a QA Bot hands issues to a Developer Bot for fixes and returns to verify, while humans focus on goal adjustments and key judgments.[^bcd288a6f247c7c9]
- 需要批准、选择方案或审查的事项会集中到 Needs You，Bot 不会因为某个人给它发消息就自动继承对方权限。[^bcd288a6f247c7c9]
- Items needing approval, decisions, or review are centralized in Needs You; a Bot does not automatically inherit someone's permissions just because they messaged it.[^bcd288a6f247c7c9]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122992266637955157)。 / Original: [link](https://x.com/shao__meng/status/2122992266637955157).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)

[^bcd288a6f247c7c9]: Devin Bots: What You Hand Over Is Not a Ticket, but a Responsibility
