---
type: Source
title: "卡兹克飞书事件中台：一年 Agent 自动化实践"
title_en: "Khazix Feishu Event Middle Platform: One Year of Agent Automation Practice"
description: "帖文称卡兹克历时近一年构建以飞书事件为触发的 Agent 自动化中台，支撑 AIHOT 与公司中台迭代。"
description_en: "The post says Khazix spent nearly a year building a Feishu-event-triggered Agent automation middle platform supporting AIHOT and company middle-platform iteration."
resource: https://x.com/0xlangeai/status/2117064397793206553
tags: [agents, automation, feishu, ci-cd]
sources:
  - id: khazix-feishu-event-middle-platform
    resource: https://x.com/0xlangeai/status/2117064397793206553
    title: "Khazix Feishu Event Middle Platform: One Year of Agent Automation Practice"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T20:15:58+08:00
---

# 卡兹克飞书事件中台：一年 Agent 自动化实践

*Khazix Feishu Event Middle Platform: One Year of Agent Automation Practice*

「帖文称」蓝哥AI分享了数字生命卡兹克（Khazix）历时近一年打造的 Agent 自动化系统：把飞书、邮件、告警与定时任务统一成事件，经 rules.json 唤醒对应 Agent，仅在必须人工拍板时推飞书卡片；执行侧由 Claude Opus 5.5、GPT-6.1 Sol/Terra 与 Skill 分工，并配套自建 CI 中台，两周四项目产出 298 个 PR，中位 2–3 分钟上线。帖文还提及成本约为 200 美元 Claude 加 100 美元 GPT，GitHub CI 超额后拟迁至家用 M4 Mac Mini，且该设计师出身者一年前仍不懂开发，现该系统撑起百万月活、900 star 的开源产品 AIHOT，公司中台亦用同一思路五天迭代一轮。[^khazix-feishu-event-middle-platform]

The post says Blue Brother AI shared Digital Life Khazix's nearly one-year Agent automation system: unifying Feishu, email, alerts and scheduled tasks into events, waking corresponding Agents via rules.json, and pushing Feishu cards only when human sign-off is required; execution is split among Claude Opus 5.5, GPT-6.1 Sol/Terra and Skill, with a self-built CI middle platform producing 298 PRs across four projects in two weeks and a median 2–3 minute release time. The post also cites costs of about $200 for Claude plus $100 for GPT, plans to move to a home M4 Mac Mini after GitHub CI overages, and notes the former designer now supports the million-MAU, 900-star open-source product AIHOT, with the company middle platform iterating in five days using the same approach.[^khazix-feishu-event-middle-platform]

## 摘要 / Summary

- 自动化中台将飞书、邮件、告警、定时任务统一成事件，按 rules.json 唤醒 Agent，去重后仅在需人工拍板时推飞书卡片。 / The automation middle platform unifies Feishu, email, alerts and scheduled tasks into events, wakes Agents via rules.json, deduplicates, and pushes Feishu cards only when human sign-off is needed.[^khazix-feishu-event-middle-platform]
- 执行侧分工为 Claude Opus 5.5 处理复杂开发与决策，GPT-6.1 Sol 管运维审查，GPT-6.1 Terra 管浏览器，Skill 作为每条流水线 SOP。 / Execution divides labor among Claude Opus 5.5 for complex development and decisions, GPT-6.1 Sol for operations and review, GPT-6.1 Terra for browser tasks, and Skill as each pipeline's SOP.[^khazix-feishu-event-middle-platform]
- 自建 CI 中台走“审查→检查→合并→发布→核实”，近两周四项目产出 298 个 PR，Codex 报 333 条问题、306 条合前修掉，中位 2–3 分钟上线。 / The self-built CI middle platform follows review→check→merge→publish→verify; four projects produced 298 PRs in two weeks, Codex flagged 333 issues with 306 fixed pre-merge, and median release time is 2–3 minutes.[^khazix-feishu-event-middle-platform]
- 费用约为 200 美元 Claude 加 100 美元 GPT，GitHub CI 按量超额超 50 美元/月，计划改用家里 M4 Mac Mini。 / Costs are about $200 for Claude plus $100 for GPT; metered GitHub CI overruns exceed $50/month, so the author plans to switch to a home M4 Mac Mini.[^khazix-feishu-event-middle-platform]
- 作者自称一年前仍是不懂开发的设计师，现该系统支撑百万月活、900 star 的开源产品 AIHOT，公司中台也用同一思路五天改过一轮。 / The author says they were a designer who did not know development a year ago; the system now supports the million-MAU, 900-star open-source product AIHOT, and the company middle platform used the same approach to iterate in five days.[^khazix-feishu-event-middle-platform]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2117064397793206553)。 / Original: [link](https://x.com/0xlangeai/status/2117064397793206553).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)

[^khazix-feishu-event-middle-platform]: Khazix Feishu Event Middle Platform: One Year of Agent Automation Practice
