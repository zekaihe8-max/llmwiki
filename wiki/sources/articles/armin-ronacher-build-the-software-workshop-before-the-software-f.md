---
type: Source
title: "Armin Ronacher：先建好软件工作坊，再考虑软件工厂"
title_en: "Armin Ronacher: Build the software workshop before the software factory"
description: "Armin Ronacher 主张 Agent 编程应追求软件质量而非单纯产量，先建好软件工作坊再谈软件工厂。"
description_en: "Armin Ronacher argues agent coding should pursue software quality over mere output, building the software workshop before the software factory."
resource: https://x.com/shao__meng/status/2125130872546640298
tags: [agents, software-quality, ai-engineering]
sources:
  - id: shao-meng-armin-ronacher-software-workshop-first
    resource: https://x.com/shao__meng/status/2125130872546640298
    title: "Armin Ronacher: Build the software workshop before the software factory"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:11:22+08:00
---

# Armin Ronacher：先建好软件工作坊，再考虑软件工厂

*Armin Ronacher: Build the software workshop before the software factory*

帖文称，Flask 作者、Earendil（Pi Agent 团队）CTO Armin Ronacher 在 @aiDotEngineer 演讲中提出：Agent 应该帮助我们挑战更有野心、更高质量的软件，不能只用来扩大产量；先建好软件工作坊，再考虑软件工厂。[^shao-meng-armin-ronacher-software-workshop-first]

The post says Flask author and Earendil (Pi Agent team) CTO Armin Ronacher, in a talk at @aiDotEngineer, proposed that Agents should help us tackle more ambitious, higher-quality software rather than merely scaling output: build the software workshop before the software factory.[^shao-meng-armin-ronacher-software-workshop-first]

## 摘要 / Summary

- Armin Ronacher 是 Flask 作者、Earendil（Pi Agent 团队）CTO，其在 @aiDotEngineer 的演讲主张 Agent 编程更该追求软件质量，而非只扩大产量。[^shao-meng-armin-ronacher-software-workshop-first]
- Armin Ronacher is the Flask author and CTO of Earendil (Pi Agent team); his @aiDotEngineer talk argues agent coding should pursue software quality rather than merely scaling output.[^shao-meng-armin-ronacher-software-workshop-first]
- 他称 Pi 核心工具集近一年基本稳定，但模型升级后，每 100 次提示对应的纠正从 8.5 次降至 3.9 次，按 Esc 中止从 13.1 次降至 7.2 次；个人会话单次任务 P90 时长从约 2.5 分钟拉长到 14 分钟以上。[^shao-meng-armin-ronacher-software-workshop-first]
- He says his Pi core toolset stayed basically stable for about a year, but after model upgrades, corrections per 100 prompts dropped from 8.5 to 3.9 and Esc aborts from 13.1 to 7.2; personal session single-task P90 duration lengthened from about 2.5 minutes to over 14 minutes.[^shao-meng-armin-ronacher-software-workshop-first]
- 他累计启动了 141 个项目，但按月统计、当月投入至少 5 天的项目始终只有个位数到十来个；创建仓库越来越便宜，持续使用、理解和维护它们依旧消耗人的注意力。[^shao-meng-armin-ronacher-software-workshop-first]
- He has started 141 projects in total, but monthly projects with at least five days of investment in the same month remained in the single digits to low teens; creating repositories is increasingly cheap, while sustained use, understanding, and maintenance still consume human attention.[^shao-meng-armin-ronacher-software-workshop-first]
- 他的做法是在最终验证前，让 Agent 先给出简短摘要和易读的 HTML 页面，留出理解与纠偏窗口；同时强调开放协议、文件格式和上游协作仍需人与人达成共识。[^shao-meng-armin-ronacher-software-workshop-first]
- His practice is to have the Agent produce a short summary and readable HTML page before final verification, leaving a window for understanding and correction; he also stresses that open protocols, file formats, and upstream collaboration still require human consensus.[^shao-meng-armin-ronacher-software-workshop-first]
- 长任务需要支持暂停、恢复和失败后继续的运行系统，避免沙箱空转；Code Mode 让 Agent 编写 JavaScript 编排工具调用，但在持久化、小模型适配和二进制数据处理上仍有难题，远未全自动。[^shao-meng-armin-ronacher-software-workshop-first]
- Long tasks need run systems supporting pause, resume, and continuation after failure to avoid sandbox idling; Code Mode has Agents write JavaScript orchestration for tool calls, but persistence, small-model adaptation, and binary data handling remain challenging and far from fully automatic.[^shao-meng-armin-ronacher-software-workshop-first]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2125130872546640298)。 / Original: [link](https://x.com/shao__meng/status/2125130872546640298).
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [AI 任务时界增长 / AI task horizon growth](../../topics/ai-task-horizon-growth.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^shao-meng-armin-ronacher-software-workshop-first]: Armin Ronacher: Build the software workshop before the software factory
