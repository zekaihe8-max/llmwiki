---
type: Source
title: "有人为 Pi 专门训了一个模型 Qwen3.8-27B-pi-adapted"
title_en: "Qwen3.8-27B-pi-adapted: A Model Specially Trained for the Pi Coding Agent"
description: "有人基于 Qwen3.8-27B 通过强化学习和 LoRA 为 Pi 编程 Agent 专门训练了适配模型，SWE-bench Pro 通过率显著提升。"
description_en: "Someone trained a Pi-agent-adapted Qwen3.8-27B model using reinforcement learning and LoRA, significantly boosting SWE-bench Pro pass rate."
resource: https://x.com/xiaomovps/status/2122997925446127660
tags: [agents, qwen, pi-agent, rl-lora]
sources:
  - id: qwen3-8-27b-pi-adapted
    resource: https://x.com/xiaomovps/status/2122997925446127660
    title: "Qwen3.8-27B-pi-adapted: A Model Specially Trained for the Pi Coding Agent"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T20:02:29+08:00
---

# 有人为 Pi 专门训了一个模型 Qwen3.8-27B-pi-adapted

*Qwen3.8-27B-pi-adapted: A Model Specially Trained for the Pi Coding Agent*

帖文称，有人专门为 Pi Agent 训练了模型 Qwen3.8-27B-pi-adapted，并未从零训练，而是在国产基座 Qwen3.8-27B 上通过强化学习和 LoRA 做针对性优化，旨在让模型直接适配 Pi 的工具与操作习惯，用更少步骤完成真实编程任务。[^qwen3-8-27b-pi-adapted]

The post claims that a model called Qwen3.8-27B-pi-adapted was specially trained for the Pi Agent, not from scratch but by applying reinforcement learning and LoRA to the domestic base model Qwen3.8-27B, so it can directly adapt to Pi's tools and habits and complete real programming tasks in fewer steps.[^qwen3-8-27b-pi-adapted]

## 摘要 / Summary

- 模型名为 Qwen3.8-27B-pi-adapted，基于国产 Qwen3.8-27B，专为 Pi 编程 Agent 训练。[^qwen3-8-27b-pi-adapted]
- The model Qwen3.8-27B-pi-adapted is based on the domestic Qwen3.8-27B and trained specifically for the Pi coding agent.[^qwen3-8-27b-pi-adapted]
- 训练采用强化学习和 LoRA 适配器，在原版 Qwen 上针对性优化，而非从零训练。[^qwen3-8-27b-pi-adapted]
- Training uses reinforcement learning and a LoRA adapter to optimize the original Qwen rather than training from scratch.[^qwen3-8-27b-pi-adapted]
- 帖文称 SWE-bench Pro 通过率从 29.4% 提升到 62.7%，Terminal-Bench 2.1 从 39.5% 提升到 55.8%。[^qwen3-8-27b-pi-adapted]
- The post claims SWE-bench Pro pass rate rose from 29.4% to 62.7%, and Terminal-Bench 2.1 from 39.5% to 55.8%.[^qwen3-8-27b-pi-adapted]
- 工具调用次数减少了 55% 至 62%。[^qwen3-8-27b-pi-adapted]
- Tool call count dropped by 55% to 62%.[^qwen3-8-27b-pi-adapted]
- 模型权重已公开并可本地部署，但成绩仅为特定测试环境下的结果，不代表所有任务都有同样提升。[^qwen3-8-27b-pi-adapted]
- Model weights are public and can be deployed locally, but results are specific to certain test environments and do not imply equal gains across all tasks.[^qwen3-8-27b-pi-adapted]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2122997925446127660)。 / Original: [link](https://x.com/xiaomovps/status/2122997925446127660).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^qwen3-8-27b-pi-adapted]: Qwen3.8-27B-pi-adapted: A Model Specially Trained for the Pi Coding Agent
