---
type: Source
title: "Meta AI 自我改进记忆：让模型自发现记忆策略并蒸馏进权重"
title_en: "Meta AI Self-Improving Memory: Models Discover Memory Strategies and Distill Them into Weights"
description: "Meta AI RAM 团队提出自我改进记忆，让模型自动优化记忆提示并将增益蒸馏进模型权重。"
description_en: "Meta AI's RAM team proposes self-improving memory, letting models automatically optimize memory prompts and distill gains into model weights."
resource: https://x.com/shao__meng/status/2122961408262635560
tags: [meta-ai, memory, agents, continual-learning, distillation]
sources:
  - id: e30fbb8eb1b81b95
    resource: https://x.com/shao__meng/status/2122961408262635560
    title: "Meta AI Self-Improving Memory: Models Discover Memory Strategies and Distill Them into Weights"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T08:36:03+08:00
---

# Meta AI 自我改进记忆：让模型自发现记忆策略并蒸馏进权重

*Meta AI Self-Improving Memory: Models Discover Memory Strategies and Distill Them into Weights*

「帖文称」Meta AI RAM 团队提出 Self-Improving Memory，让语言模型在持续任务中越做越好，核心是学会如何写记忆、如何组织以及何时再读回来，而非把全部历史塞进上下文。[^e30fbb8eb1b81b95]

The post says Meta AI's RAM team proposes Self-Improving Memory, enabling language models to improve continually on tasks by learning how to write, organize, and retrieve memory rather than stuffing all history into context.[^e30fbb8eb1b81b95]

## 摘要 / Summary

- 方法分两步：先用元 agent 优化 LOAD/OFFLOAD 提示，再将最佳提示的轨迹蒸馏进模型权重。[^e30fbb8eb1b81b95]
- The method has two steps: first use a meta agent to optimize LOAD/OFFLOAD prompts, then distill the best prompt's trajectories into model weights.[^e30fbb8eb1b81b95]
- 在 Database、Codebase 和 Spectrum 三项任务上，自动优化提示平均分 56.0，比最佳手写提示高 11.4 分，比通用提示高 19.9 分。[^e30fbb8eb1b81b95]
- On Database, Codebase, and Spectrum tasks, auto-optimized prompts averaged 56.0, 11.4 points above the best hand-written prompts and 19.9 above generic prompts.[^e30fbb8eb1b81b95]
- 微调后模型仅用通用提示测试均分 43.1，高于在通用轨迹上微调的 37.6，提升 5.5 分。[^e30fbb8eb1b81b95]
- After fine-tuning, the model scored 43.1 on tests using only generic prompts, 5.5 points above 37.6 from fine-tuning on generic trajectories.[^e30fbb8eb1b81b95]
- 搜索中 44 次提示修订有 37 次未能超过此前最好成绩，说明优化需依赖评估筛选。[^e30fbb8eb1b81b95]
- Of 44 prompt revisions in the search, 37 failed to beat the previous best, showing optimization relies on evaluation screening.[^e30fbb8eb1b81b95]
- 每个子任务从空白上下文开始，仅靠一个持续存在的记忆目录跨任务传递信息，模型自行决定读写策略。[^e30fbb8eb1b81b95]
- Each subtask starts from a blank context, with only a persistent memory directory carrying information across tasks; the model decides its own read/write strategy.[^e30fbb8eb1b81b95]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122961408262635560)。 / Original: [link](https://x.com/shao__meng/status/2122961408262635560).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^e30fbb8eb1b81b95]: Meta AI Self-Improving Memory: Models Discover Memory Strategies and Distill Them into Weights
