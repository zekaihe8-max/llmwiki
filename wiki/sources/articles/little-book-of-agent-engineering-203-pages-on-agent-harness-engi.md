---
type: Source
title: "《Little Book of Agent Engineering》：203 页拆解模型之外的 Agent Harness 工程"
title_en: "\"Little Book of Agent Engineering\": 203 Pages on Agent Harness Engineering Beyond the Model"
description: "帖文称这本 203 页、11 章的《Little Book of Agent Engineering》把 Agent 工程聚焦在模型之外的 Harness 系统，涵盖循环、工具、上下文、检索记忆、多 Agent、安全与评估。"
description_en: "The post says this 203-page, 11-chapter book reframes agent engineering around the model-external harness system, covering loops, tools, context, retrieval and memory, multi-agent, safety, and evaluation."
resource: https://x.com/shao__meng/status/2125124722216276171
tags: [agents, agent-engineering, harness, evaluation, safety, multi-agent, context-management]
sources:
  - id: little-book-agent-engineering-harness
    resource: https://x.com/shao__meng/status/2125124722216276171
    title: "\"Little Book of Agent Engineering\": 203 Pages on Agent Harness Engineering Beyond the Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:09:29+08:00
---

# 《Little Book of Agent Engineering》：203 页拆解模型之外的 Agent Harness 工程

*"Little Book of Agent Engineering": 203 Pages on Agent Harness Engineering Beyond the Model*

帖文称，@__paleologo 与 Gappy + Agents 撰写的 203 页《Little Book of Agent Engineering》用 11 章把模型之外的运行与控制系统（Harness）讲清楚，并配套约 400 行 Python 的 miniagent 教学实现。文章从 Agent 循环、自主性阶梯、长任务错误修复、工具接口、上下文预算、检索与记忆、进度交付、多 Agent 上下文隔离、安全边界到评估指标，逐章拆解研发团队可改进的工程环节。[^little-book-agent-engineering-harness]

The post says @__paleologo and Gappy + Agents wrote the 203-page "Little Book of Agent Engineering" in 11 chapters to explain the model-external run and control system (Harness), with a ~400-line Python miniagent teaching implementation. It walks through the Agent loop, autonomy ladder, long-task error repair, tool interfaces, context budget, retrieval and memory, progress handoff, multi-agent context isolation, safety boundaries, and evaluation metrics, chapter by chapter, dissecting engineering parts that R&D teams can improve.[^little-book-agent-engineering-harness]

## 摘要 / Summary

- 书中将 Agent 定义为模型反复选择行动、程序执行并返回观察，直到结束或预算耗尽；单次模型调用不算 Agent，预先固定步骤的调用链属于工作流。[^little-book-agent-engineering-harness]
- The post defines an Agent as a model repeatedly choosing actions while a program executes them and returns observations, until the task ends or budget is exhausted; a single model call is not an Agent, and a pre-fixed call chain is a workflow.[^little-book-agent-engineering-harness]
- 全书 11 章覆盖模型接口、Agent 循环、工具、上下文、检索与记忆、长任务、多 Agent、安全和评估，并配套约 400 行 Python 的 miniagent 教学实现。[^little-book-agent-engineering-harness]
- The 11 chapters cover model interface, Agent loop, tools, context, retrieval and memory, long tasks, multi-agent, safety, and evaluation, with a ~400-line Python miniagent teaching implementation.[^little-book-agent-engineering-harness]
- 长任务成功率近似为 r^T；若引入错误发现率 d 并假设被发现错误可修复，则每步致命概率降为 (1-r)(1-d)，整体近似为 [1-(1-r)(1-d)]^T。[^little-book-agent-engineering-harness]
- Long-task success rate is approximated as r^T; with error detection rate d and assumed repair of detected errors, per-step fatal probability drops to (1-r)(1-d), and overall success approximates [1-(1-r)(1-d)]^T.[^little-book-agent-engineering-harness]
- 上下文压缩方法分为 Bound、Elide、Offload、Compact 四类；未压缩历史下，c₀=5000、Δ=2000、T=50 时累计输入约 280 万 tokens。[^little-book-agent-engineering-harness]
- Context compression methods are Bound, Elide, Offload, and Compact; with c₀=5,000, Δ=2,000, T=50, unpruned history totals about 2.8 million input tokens.[^little-book-agent-engineering-harness]
- 评估中 pass@k 与 pass^k 不同：单次成功率 70% 时，k=3 下 pass@k 约 97.3%，pass^k 约 34.3%。[^little-book-agent-engineering-harness]
- In evaluation, pass@k and pass^k differ; at 70% single-run success and k=3, pass@k is about 97.3% while pass^k is about 34.3%.[^little-book-agent-engineering-harness]
- 安全防御建议分层：只暴露所需工具、代码逐次检查操作、沙箱限制文件网络进程凭据、高影响操作确认、不可篡改审计记录。[^little-book-agent-engineering-harness]
- Safety defense recommends layers: expose only needed tools, check operations in code, sandbox files/network/process/credentials, confirm high-impact actions, and keep tamper-resistant audit records.[^little-book-agent-engineering-harness]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2125124722216276171)。 / Original: [link](https://x.com/shao__meng/status/2125124722216276171).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^little-book-agent-engineering-harness]: "Little Book of Agent Engineering": 203 Pages on Agent Harness Engineering Beyond the Model
