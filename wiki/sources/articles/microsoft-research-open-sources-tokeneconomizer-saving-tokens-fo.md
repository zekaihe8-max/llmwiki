---
type: Source
title: "微软研究院开源 TokenEconomizer，不改模型，从仓库经验里给 Coding Agent 省 token"
title_en: "Microsoft Research open-sources TokenEconomizer, saving tokens for coding agents from repository experience without modifying models"
description: "微软研究院开源外部控制器 TokenEconomizer，通过学习同一仓库的历史会话来降低编程 Agent 的 Token 消费，且不改动模型或 Agent。"
description_en: "Microsoft Research open-sourced the external controller TokenEconomizer, which reduces token consumption for coding agents by learning from historical sessions in the same repository, without modifying the model or agent."
resource: https://x.com/shao__meng/status/2122507586541166850
tags: [microsoft-research, token-economizer, coding-agent, token-saving, open-source]
sources:
  - id: e3003b68b504d5df
    resource: https://x.com/shao__meng/status/2122507586541166850
    title: "Microsoft Research open-sources TokenEconomizer, saving tokens for coding agents from repository experience without modifying models"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T20:02:18+08:00
---

# 微软研究院开源 TokenEconomizer，不改模型，从仓库经验里给 Coding Agent 省 token

*Microsoft Research open-sources TokenEconomizer, saving tokens for coding agents from repository experience without modifying models*

帖文称，微软研究院联合加州大学伯克利分校和 Microsoft Security 开源了 TokenEconomizer，这是一个不修改编程 Agent 和底层模型的外部控制器，通过从同一仓库的历史会话中学习，减少重复摸索和无效调用，从而为 Coding Agent 省 token。[^e3003b68b504d5df]

The post says Microsoft Research, together with UC Berkeley and Microsoft Security, open-sourced TokenEconomizer, an external controller that does not modify coding agents or underlying models. It learns from historical sessions in the same repository to reduce repetitive exploration and invalid calls, saving tokens for coding agents.[^e3003b68b504d5df]

## 摘要 / Summary

- TokenEconomizer 由加州大学伯克利分校、微软研究院和 Microsoft Security 开源，不改动 Coding Agent 和底层模型，通过已有接口在 Agent 外围起作用。[^e3003b68b504d5df]
- TokenEconomizer is open-sourced by UC Berkeley, Microsoft Research, and Microsoft Security; it does not modify coding agents or underlying models and operates externally through existing interfaces.[^e3003b68b504d5df]
- 系统包含三种机制：把微技能写入起始上下文、裁剪长期未用的工具列表，以及在 Agent 卡住时根据历史成功轮次设置预算并干预。[^e3003b68b504d5df]
- The system includes three mechanisms: writing micro-skills into the starting context, pruning long-unused tools from the tool list, and setting budgets and intervening based on historical successful rounds when the agent gets stuck.[^e3003b68b504d5df]
- 在 SWE-Bench 的 277 个任务、6 个仓库和 5 组 Agent 与模型组合上，相对默认较强推理设置，平均费用下降 18.4% 至 30.9%，全部 30 个「仓库×组合」都变得更便宜。[^e3003b68b504d5df]
- On SWE-Bench's 277 tasks across 6 repositories and 5 agent/model combinations, average cost dropped 18.4% to 30.9% relative to default strong reasoning settings, with all 30 repository×combination pairs becoming cheaper.[^e3003b68b504d5df]
- 节省是逐渐显现的：多数仓库前几项任务可能更贵，到第 6 个任务起累计费用才转便宜；工具裁剪贡献最大，微技能次之，卡住干预更小。[^e3003b68b504d5df]
- Savings emerge gradually: most repositories may cost more for the first few tasks, and cumulative cost only becomes cheaper starting around the 6th task; tool pruning contributes the most, micro-skills second, and stuck intervention the least.[^e3003b68b504d5df]
- Web-Bench 上费用约降 16.0% 至 21.2%；跨新仓库的安全审计约降 6.4% 至 19.6%；没有仓库连续性时，微技能会被关掉。[^e3003b68b504d5df]
- On Web-Bench, costs dropped about 16.0% to 21.2%; security audits across new repositories dropped about 6.4% to 19.6%; micro-skills are turned off when there is no repository continuity.[^e3003b68b504d5df]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122507586541166850)。 / Original: [link](https://x.com/shao__meng/status/2122507586541166850).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^e3003b68b504d5df]: Microsoft Research open-sources TokenEconomizer, saving tokens for coding agents from repository experience without modifying models
