---
type: Source
title: "智能体端到端评测构建指南"
title_en: "Agent End-to-End Eval Construction Guide"
description: "本文介绍如何为智能体构建端到端评测，包括测试金字塔、成功率与 Pass@k/Pass^k 指标及任务集设计。"
description_en: "This article explains how to build end-to-end agent evals, covering the testing pyramid, success rate and Pass@k/Pass^k metrics, and task set design."
resource: https://vercel.com/blog/agent-evals
tags: [agents, evals, testing, llm]
sources:
  - id: vercel-agent-evals
    resource: https://vercel.com/blog/agent-evals
    title: "Agent End-to-End Eval Construction Guide"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T08:23:45+08:00
---

# 智能体端到端评测构建指南

*Agent End-to-End Eval Construction Guide*

「帖文称」智能体已成为软件的使用者，评测可衡量其完成工作的效果；文章以咖啡 API 下单为例，介绍了从设定目标、定义指标到设计任务集的端到端评测流程。[^vercel-agent-evals]

The post says agents are now users of software, and evals measure how well that work gets done; using a coffee API ordering example, it describes the end-to-end eval process from goal-setting to metric definition and task design.[^vercel-agent-evals]

## 摘要 / Summary

- 文章将智能体测试分为确定性测试（0 次 LLM 调用）、单轮评测（1 次）和端到端评测（2+ 次），构成“智能体测试金字塔”。[^vercel-agent-evals]
- The article divides agent testing into deterministic tests (0 LLM calls), one-turn evals (1), and E2E evals (2+), forming the agentic testing pyramid.[^vercel-agent-evals]
- 端到端评测让智能体在环境中完成整个任务，再检查最终结果是否满足用户需求，如 SWE-bench 和 Terminal-Bench 属于此类。[^vercel-agent-evals]
- E2E evals let the agent work through a whole task in an environment, then check whether the final result meets user requirements; SWE-bench and Terminal-Bench are examples.[^vercel-agent-evals]
- 常用指标包括成功率、Pass@k（至少一次通过）和 Pass^k（全部 k 次通过），效率指标仅在成功试算中计算步数、时间和成本。[^vercel-agent-evals]
- Common metrics include success rate, Pass@k (at least one pass in k trials), and Pass^k (all k trials pass); efficiency metrics count steps, time, and cost only on successful trials.[^vercel-agent-evals]
- 任务集应包含常见情况、边缘情况以及至少一个“不应行动”的请求，每个任务需定义指令、环境、验证器和可选的已知良好解法。[^vercel-agent-evals]
- A task set should cover common cases, edge cases, and at least one do-not-act request; each task needs an instruction, environment, verifier, and optional known-good solution.[^vercel-agent-evals]
- 示例中，Claude Code + Opus 5.5 在五次试算中成功率为 60%，Pass@5 约 99%，Pass^5 约 8%。[^vercel-agent-evals]
- In the example, Claude Code + Opus 5.5 had a 60% success rate over five trials, Pass@5 around 99%, and Pass^5 around 8%.[^vercel-agent-evals]

## 相关 / Related

- 原文：[链接](https://vercel.com/blog/agent-evals)。 / Original: [link](https://vercel.com/blog/agent-evals).
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^vercel-agent-evals]: Agent End-to-End Eval Construction Guide
