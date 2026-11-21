---
type: Source
title: "腾讯团队开源 LoopForge，五个定时 Agent 维护自家仓库"
title_en: "Tencent team open-sources LoopForge, five timed Agents maintain their own repository"
description: "腾讯团队开源 LoopForge，通过五个错峰定时 Agent 和严格约束自动维护自有代码仓库。"
description_en: "Tencent team open-sources LoopForge, using five staggered timed Agents and strict constraints to automatically maintain their own code repository."
resource: https://x.com/shao__meng/status/2123977246494818582
tags: [tencent, loopforge, ai-agents, scheduled-tasks, repository-maintenance]
sources:
  - id: tencent-loopforge-five-timed-agents
    resource: https://x.com/shao__meng/status/2123977246494818582
    title: "Tencent team open-sources LoopForge, five timed Agents maintain their own repository"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-21T20:02:23+08:00
---

# 腾讯团队开源 LoopForge，五个定时 Agent 维护自家仓库

*Tencent team open-sources LoopForge, five timed Agents maintain their own repository*

帖文称，腾讯团队开源了可自托管的工作台 LoopForge，把 Coding Agent 对准自家仓库，人只在“做什么”以及“哪条 PR 可以合并”两处做判断。系统先在对话与沙箱中试探任务，再将跑通的做法冻成固定流水线，最后交给五个错开排班的后台定时任务，涵盖每日调研、整点评审、半点 CI 巡检、每日凌晨补测试和周一分层违规检查。提示中写死不可逆操作红线：不合并、不关闭、不直接推主分支、不动同事的分支；架构类未合并 PR 达到 10 条即停止。团队称一次夜间运行把某核心包覆盖从 83.3% 提到 86.0%，整套设置花了数周调校，多数时间在写约束。[^tencent-loopforge-five-timed-agents]

The post says a Tencent team open-sourced LoopForge, a self-hosted workbench that points coding agents at their own repositories, with humans only judging what to do and which PRs can be merged. The system first probes tasks in conversation and sandbox, then freezes working methods into fixed pipelines, and finally hands daily maintenance to five staggered timed tasks covering research, hourly review, half-hour CI patrol, overnight test supplementation, and Monday layer-violation checks. The prompt hard-codes irreversible red lines: no merge, no close, no direct push to main, no touching colleagues' branches; it stops when unmerged architecture PRs reach 10. The team claims one overnight run raised a core package's coverage from 83.3% to 86.0%, and the setup took weeks to tune, mostly writing constraints.[^tencent-loopforge-five-timed-agents]

## 摘要 / Summary

- LoopForge 是腾讯团队开源的可自托管工作台，旨在让编程 Agent 处理日常仓库维护，人只在“做什么”和“哪条 PR 可合并”两处判断。[^tencent-loopforge-five-timed-agents]
- LoopForge is a self-hosted workbench open-sourced by a Tencent team, designed to let coding agents handle daily repository maintenance, with humans only judging what to do and which PRs can be merged.[^tencent-loopforge-five-timed-agents]
- 系统分三步运行：先在对话和沙箱中试探任务，再将跑通的做法冻成固定流水线，最后交给按固定节奏跑的后台定时任务。[^tencent-loopforge-five-timed-agents]
- The system runs in three steps: first probe tasks in conversation and sandbox, then freeze working methods into fixed pipelines, finally hand over to background timed tasks running at fixed rhythms.[^tencent-loopforge-five-timed-agents]
- 五个错开排班的定时任务包括每日 09:00 调研（只读、最多提 3 个需求单）、整点评审（禁止空泛 LGTM、合并按钮留在人手里）、半点 CI 巡检、每日 02:00 补测试、周一 03:00 分层违规检查。[^tencent-loopforge-five-timed-agents]
- Five staggered timed tasks include daily 09:00 research (read-only, max 3 requirement tickets), hourly review (no vague LGTM, merge button stays with humans), half-hour CI patrol, daily 02:00 test supplementation, and Monday 03:00 layer violation checks.[^tencent-loopforge-five-timed-agents]
- 提示中写死不可逆操作红线：不合并、不关闭、不直接推主分支、不动同事的分支；架构类未合并 PR 达到 10 条时停止运行。[^tencent-loopforge-five-timed-agents]
- The prompt hard-codes irreversible operation red lines: no merge, no close, no direct push to main, no touching colleagues' branches; stops when unmerged architecture PRs reach 10.[^tencent-loopforge-five-timed-agents]
- 团队称一次夜间运行将某核心包覆盖从 83.3% 提到 86.0%，且该套设置花了数周调校，多数时间在写约束。[^tencent-loopforge-five-timed-agents]
- The team claims one overnight run raised a core package's coverage from 83.3% to 86.0%, and the setup took weeks to tune, mostly writing constraints.[^tencent-loopforge-five-timed-agents]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2123977246494818582)。 / Original: [link](https://x.com/shao__meng/status/2123977246494818582).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^tencent-loopforge-five-timed-agents]: Tencent team open-sources LoopForge, five timed Agents maintain their own repository
