---
type: Topic
title: 给 AI 的全栈仓图
title_en: AI-facing full-stack repo map
description: 跨多仓产研不必先揉成大仓：用统一入口 + 给 AI 的说明书（仓职责、规范、发布与联调）让一人带着同一智能体共享上下文走完各端；本地可验证、线上可读、发布可操作，审批仍可留在人。
description_en: Multi-repo product/eng need not merge into a mega-repo first—a unified entry plus AI-facing docs (repo duties, norms, release and integration) lets one person with one shared agent context finish every surface; local verify, production read, and release ops can land while approvals stay human.
tags: [manus, mono, fullstack, agents, shared-context, repo-map, ai-native]
sources:
  - id: shao-meng-manus-mono
    resource: https://x.com/shao__meng/status/2115048792483660088
    title: Meng Shao on Manus Mono — a full-stack map for AI
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:45:00+08:00
---

# 给 AI 的全栈仓图

*AI-facing full-stack repo map*

当瓶颈在前后端联调与人对齐、而不在写代码时，有用的基建未必是把多仓揉成一个大仓，而是给智能体一张可读的全栈地图：统一入口、写清各仓职责与规范，让一名构建者带着同一共享上下文走完前端、后端与移动端；本地验证、查线上与发版操作可逐步补齐，审批仍可留在人手上。[^shao-meng-manus-mono]

When the bottleneck is frontend–backend integration and human alignment—not writing code—useful infra may not be mashing multi-repos into one mega-repo, but giving agents a readable full-stack map: a unified entry and clear repo duties and norms so one builder with one shared context finishes frontend, backend, and mobile; local verify, production read, and release ops can land step by step while approvals stay human.[^shao-meng-manus-mono]

## 综合分析 / Synthesis

[邵萌谈 Manus Mono：给 AI 一张全栈地图](../sources/articles/shao-meng-manus-mono.md) 转述 Manus 联创张涛实践：Manus-mono = 统一入口 + 给 AI 的说明书，不是 monorepo 合并；对比约「5 人 + 5 个独立上下文智能体 + 人工交接」与「1 名构建者 + 1 个共享上下文智能体」；能力按瓶颈递进——看见全局（含 Git worktree 并行）、本地验证（等测环境 5–10 分钟→几秒）、查线上、走发布（审批仍在人）、端到端验证；用的人越多知识越多（如发版流程写进 Mono）。组织侧条件：探 AI 边界、不愿重复活、组织够扁。[^shao-meng-manus-mono] 原帖 <https://x.com/shao__meng/status/2115048792483660088>。

[Meng Shao on Manus Mono — a full-stack map for AI](../sources/articles/shao-meng-manus-mono.md) relays Manus co-founder Zhang Tao’s practice: Manus-mono = unified entry plus AI-facing docs, not a monorepo merge; contrasts about “five people + five separate-context agents + human handoff” with “one builder + one shared-context agent”; capabilities grew by bottleneck—see the whole (including Git worktree parallelism), local verify (5–10 min waiting on test env → seconds), read production, ship path (approvals still human), end-to-end verify; more users meant more knowledge (e.g. release flow written into Mono). Org conditions: probing AI boundaries, intolerance of repetitive work, flat enough org.[^shao-meng-manus-mono] Post: <https://x.com/shao__meng/status/2115048792483660088>.

适用边界：这是一家 AI 产品公司自述的研发组织改造切片，不是跨厂商基准；「7 人撑 2 产品 / 4 App」等数字为该文例子，不可外推为通用 SLA。本页主线是「仓图 + 共享上下文 + 人审」，不是公司级多玩家 harness 五原语，也不是有边界 L4 软件工厂定义。

Scope: this is one AI product company’s self-reported R&D org-remake slice, not a cross-vendor benchmark; figures such as “seven people covering two products / four apps” are examples in the piece and must not be generalized as SLAs. This page’s thread is “repo map + shared context + human approval,” not the company multiplayer harness five primitives, nor the bounded L4 software-factory definition.

相邻切面：[智能体规模化工程](./agent-scaled-engineering.md) 收「一人可吃多端 / 工具与工作流 > 堆 Agent」的产能证据；[把子 Agent 折进主循环](./fold-subagents-into-main-loop.md) 收「共享单一上下文 vs 按角色各开独立上下文」的编排默认同向；[软件工厂](./software-factory.md) 谈有边界 L4 与人审/证据边界——Mono 仍强调审批在人，更像压缩交付路径而非宣称 L4；[公司级 Agent Harness 五原语](./company-agent-harness.md) 谈多玩家工作面/身份/记忆/沙箱/ambient，与「跨仓说明书」不同线；[AI 原生公司](./ai-native-companies.md) 谈创立即 AI-native vs 存量改造的创业路径，不展开仓图基建。

Adjacent cuts: [Agent-scaled engineering](./agent-scaled-engineering.md) takes the throughput evidence that one person can cover many surfaces and that tools/workflows beat stacking Agents; [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md) takes the orchestration-default alignment of one shared context vs per-role separate contexts; [Software factory](./software-factory.md) covers bounded L4 and human-approval/evidence bounds—Mono still stresses human approval, closer to a compressed delivery path than an L4 claim; [Company agent harness — five primitives](./company-agent-harness.md) is multiplayer surfaces/identity/memory/sandbox/ambient, a different line from cross-repo docs; [AI-native companies](./ai-native-companies.md) is founding AI-native vs remaking incumbents, without spelling repo-map infra.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [邵萌谈 Manus Mono：给 AI 一张全栈地图](../sources/articles/shao-meng-manus-mono.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)
- Topic: [软件工厂](./software-factory.md)
- Topic: [公司级 Agent Harness 五原语](./company-agent-harness.md)
- Topic: [AI 原生公司](./ai-native-companies.md)

[^shao-meng-manus-mono]: Meng Shao on Manus Mono — a full-stack map for AI
