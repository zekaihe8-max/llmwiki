---
type: Source
title: "智能体蜂群做性能工程：协作拓扑比模型强弱更决定加速比"
title_en: "Agent Swarms for Performance Engineering: Coordination Topology Decides Speedups More Than Model Strength"
description: "帖文称，在性能工程任务中，智能体蜂群的协作拓扑比单体模型能力更决定加速比，32 个 Opus 5.5 代理在 NumPy 上达 18.9×，而最强单体模型 GPT-6.2 Astra 的蜂群随规模扩大反而下降。"
description_en: "The post says that in performance engineering tasks, agent swarm coordination topology matters more than solo model strength; 32 Opus 5.5 agents reached 18.9× on NumPy, while the strongest solo model GPT-6.2 Astra's swarms declined as they scaled."
resource: https://frontier.replit.com/throwing-headcount-at-the-problem
tags: [agents, swarms, performance-engineering, coordination]
sources:
  - id: agent-swarms-performance-engineering
    resource: https://frontier.replit.com/throwing-headcount-at-the-problem
    title: "Agent Swarms for Performance Engineering: Coordination Topology Decides Speedups More Than Model Strength"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:31:02+08:00
---

# 智能体蜂群做性能工程：协作拓扑比模型强弱更决定加速比

*Agent Swarms for Performance Engineering: Coordination Topology Decides Speedups More Than Model Strength*

开篇段落。帖文称，Brooks 定律在智能体蜂群中依然成立：盲目增加代理会因协调成本拖慢进度，但 Replit 在性能工程任务上测试了今日模型，发现 Claude Opus 5.5 蜂群在 NumPy 上从单代理 3.7× 提升至 32 代理 18.9×，而最强单代理 GPT-6.2 Astra 的蜂群随规模扩大反而下降；关键差异在于协作拓扑，表现好的蜂群将信息留在公共看板并让工人认领独立工作，表现差的则把所有消息经协调员转发。[^agent-swarms-performance-engineering]

Opening paragraph. The post says Brooks's law still applies to agent swarms: blindly adding agents slows progress through coordination costs, but Replit tested today's models on performance engineering and found Claude Opus 5.5 swarms rose from 3.7× solo to 18.9× with 32 agents on NumPy, while the strongest solo model GPT-6.2 Astra's swarms declined as they scaled; the deciding factor was collaboration topology, with good swarms keeping information on a public board and workers claiming independent work, while poor swarms routed everything through the coordinator.[^agent-swarms-performance-engineering]

## 摘要 / Summary

- 在 NumPy 上，单个 Claude Opus 5.5 代理两小时内实现 3.7× 加速，32 代理蜂群在同等时间内达到 18.9×。[^agent-swarms-performance-engineering]
- On NumPy, one Claude Opus 5.5 agent achieved 3.7× speedup in two hours, while a 32-agent swarm reached 18.9× in the same window.[^agent-swarms-performance-engineering]
- GPT-6.2 Astra 是测试中最强的单代理，但其蜂群在 8 代理时达到峰值，32 代理时在 NumPy、SQLGlot 和 Git 上均低于单代理得分。[^agent-swarms-performance-engineering]
- GPT-6.2 Astra was the strongest solo agent tested, but its swarms peaked at 8 agents and fell below solo scores on NumPy, SQLGlot, and Git at 32 agents.[^agent-swarms-performance-engineering]
- Opus 5.5 约 82% 的消息发布到共享看板，工人向协调员发 1.4 条直接消息；GPT-6 Astra 工人平均向协调员发 22 条直接消息。[^agent-swarms-performance-engineering]
- Opus 5.5 sent about 82% of messages to the shared board, with workers sending 1.4 direct messages to the coordinator; GPT-6 Astra workers averaged 22 direct messages to the coordinator.[^agent-swarms-performance-engineering]
- Optimization-Bench 初版聚焦 14 个开源库，文中详细分析 NumPy（13 个工作负载）、SQLite（12 个）、SQLGlot（4 个）和 Git（7 个，全部限制在 15 个文件的 diff 库中）。[^agent-swarms-performance-engineering]
- Optimization-Bench's initial prerelease focuses on 14 open-source libraries, with detailed analysis of NumPy (13 workloads), SQLite (12), SQLGlot (4), and Git (7, all confined to a 15-file diff library).[^agent-swarms-performance-engineering]
- Opus 蜂群将 NumPy 的 searchsorted 改为每次处理 256 个键并跳过不含 NaN 的慢速比较，使 float64 输入在大量键下提速 8.7–13.1×，结果保持一致。[^agent-swarms-performance-engineering]
- The Opus swarm changed NumPy's searchsorted to process 256 keys at a time and skip NaN-safe comparison when absent, achieving 8.7–13.1× speedup on float64 inputs with many keys with identical results.[^agent-swarms-performance-engineering]
- Opus 5.5 和 Sonnet 5.5 蜂群在每次测试中都优于单代理，16 和 32 代理时中位数提升 1.30×；GPT-6 Astra 和 GPT-6.1 Sol 蜂群大多不如单独工作。[^agent-swarms-performance-engineering]
- Opus 5.5 and Sonnet 5.5 swarms beat solo runs every time, with a median 1.30× improvement at 16 and 32 agents; GPT-6 Astra and GPT-6.1 Sol swarms were mostly no better than working alone.[^agent-swarms-performance-engineering]

## 相关 / Related

- 原文：[链接](https://frontier.replit.com/throwing-headcount-at-the-problem)。 / Original: [link](https://frontier.replit.com/throwing-headcount-at-the-problem).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)

[^agent-swarms-performance-engineering]: Agent Swarms for Performance Engineering: Coordination Topology Decides Speedups More Than Model Strength
