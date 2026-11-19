---
type: Source
title: "Vox · Opus 调度，Sol 干活，Astra 看关键 PR"
title_en: "Vox · Opus Coordinates, Sol Builds, Astra Reviews Key PRs"
description: "帖文称 Opus 5.5 担任协调器，GPT-6.2 Sol 与 Astra 分别承担后端开发、批量发布及涉资金、隐私或登录 PR 的预合并评审。"
description_en: "The post says Opus 5.5 serves as coordinator while GPT-6.2 Sol and Astra handle backend development, batch shipping, and pre-merge review of PRs touching money, privacy, or login."
resource: https://x.com/Voxyz_ai/status/2123098923346936067
tags: [agents, ai-coding, model-routing, coordinator]
sources:
  - id: voxyz-opus-sol-astra-coordinator
    resource: https://x.com/Voxyz_ai/status/2123098923346936067
    title: "Vox · Opus Coordinates, Sol Builds, Astra Reviews Key PRs"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T08:38:55+08:00
---

# Vox · Opus 调度，Sol 干活，Astra 看关键 PR

*Vox · Opus Coordinates, Sol Builds, Astra Reviews Key PRs*

Voxyz_ai 发帖称，其更新后的协调器设置以 Opus 5.5 为协调员、GPT-6.2 执行具体工作，并称这是“实际的金矿”。帖子称各模型只负责自己最擅长的部分：Opus 5.5 拆解任务、撰写简报、检查工作但不写代码；6.2 Sol 负责后端及涉及资金的难题；6.2 Astra 仅对触碰资金、隐私或登录的 PR 进行高强度评审，上次支付上线前仍捕获 3 个 Bug。[^voxyz-opus-sol-astra-coordinator]

Voxyz_ai posted that its updated coordinator setup uses Opus 5.5 as coordinator and GPT-6.2 for execution, calling it an “actual goldmine.” The post says each model handles only what it does best: Opus 5.5 splits tasks, writes briefs, and checks work without writing code; 6.2 Sol handles backend and money-critical hard problems; 6.2 Astra reviews only PRs touching money, privacy, or login, catching 3 bugs before a payments release.[^voxyz-opus-sol-astra-coordinator]

## 摘要 / Summary

- 协调器为 Opus 5.5（xhigh），负责拆分任务、撰写简报、检查工作，且不编写任何代码。[^voxyz-opus-sol-astra-coordinator]
- Coordinator is Opus 5.5 (xhigh), responsible for splitting tasks, writing briefs, and checking work without writing any code.[^voxyz-opus-sol-astra-coordinator]
- 后端由 6.2 Sol（high，难题及涉资金事项用 xhigh）承担，每个 worker 分配独立 worktree 与分支。[^voxyz-opus-sol-astra-coordinator]
- Back end is handled by 6.2 Sol (high; xhigh for hard problems and anything touching money), with each worker getting its own worktree and branch.[^voxyz-opus-sol-astra-coordinator]
- 批量测试与发布由 6.2 Sol（medium）处理，耗时较长但属机械性工作。[^voxyz-opus-sol-astra-coordinator]
- Batch tests and shipping are handled by 6.2 Sol (medium), which is slow but mechanical.[^voxyz-opus-sol-astra-coordinator]
- 预合并评审由 6.2 Astra（xhigh）仅对触碰资金、隐私或登录的 PR 进行；上次支付发布前其捕获了 3 个即将上线的 Bug。[^voxyz-opus-sol-astra-coordinator]
- Pre-merge review is performed by 6.2 Astra (xhigh) only on PRs touching money, privacy, or login; it caught 3 bugs before the last payments release.[^voxyz-opus-sol-astra-coordinator]
- 帖文引用此前一次运行称，约 160 个 PR 在 3 天内完成，产出 107 份任务简报，仅用一个会话。[^voxyz-opus-sol-astra-coordinator]
- The post quotes a prior run of about 160 PRs in 3 days, 107 task briefs, and a single session.[^voxyz-opus-sol-astra-coordinator]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2123098923346936067)。 / Original: [link](https://x.com/Voxyz_ai/status/2123098923346936067).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^voxyz-opus-sol-astra-coordinator]: Vox · Opus Coordinates, Sol Builds, Astra Reviews Key PRs
