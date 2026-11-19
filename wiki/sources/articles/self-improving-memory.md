---
type: Source
title: "Meta 让模型自己改进记忆"
title_en: "Self-Improving Memory"
description: "Meta 通过元优化和提示蒸馏让模型自动发现并内化持续学习任务的记忆策略"
description_en: "Meta uses meta-optimization and harness distillation to let models automatically discover and internalize memory strategies for continual learning tasks"
resource: https://facebookresearch.github.io/RAM/blogs/self_improving_memory
tags: [agents, memory, continual-learning, meta-optimization]
sources:
  - id: self-improving-memory
    resource: https://facebookresearch.github.io/RAM/blogs/self_improving_memory
    title: "Self-Improving Memory"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T08:36:33+08:00
---

# Meta 让模型自己改进记忆

*Self-Improving Memory*

帖文称，Meta 的「自我改进记忆」方法让 Kimi-K2.6 既作为元代理修改持续学习任务的 LOAD/OFFLOAD 记忆提示，又作为任务代理执行这些提示，随后将优化后的轨迹替换为通用指令并微调进模型权重，从而在无需人工编写单一最佳提示的情况下提升代理在数据库、代码库和频谱三项任务上的表现。[^self-improving-memory]

The post describes Meta's Self-Improving Memory, in which Kimi-K2.6 acts as both a meta agent that revises LOAD/OFFLOAD memory prompts for continual learning tasks and a task agent that executes them, then fine-tunes on optimized trajectories rewritten with generic instructions so the model internalizes discovered memory skills without relying on a single hand-written prompt.[^self-improving-memory]

## 摘要 / Summary

- 帖文称，在持续学习基准的三个任务上，自动发现的记忆提示平均得分 56.0，优于最佳人工编写提示的 44.6，提升 11.4 分。[^self-improving-memory]
- The post says that on three Continual Learning Bench tasks, automatically discovered memory prompts average 56.0, beating the best hand-written prompts at 44.6, an 11.4-point gain.[^self-improving-memory]
- 微调后，模型仅使用通用提示即可得到 43.1 分，而基于通用提示轨迹的微调仅得 37.6 分，提升 5.5 分。[^self-improving-memory]
- After fine-tuning, the model scores 43.1 using only generic prompts, versus 37.6 when trained on its own generic-prompt runs, a 5.5-point improvement.[^self-improving-memory]
- 方法包含两个阶段：先通过元优化循环分析轨迹并修订 LOAD/OFFLOAD 指令，再将优化后轨迹中的提示替换为通用版本并对模型进行监督微调。[^self-improving-memory]
- The method has two stages: first analyze trajectories and revise LOAD/OFFLOAD instructions through a meta-optimization loop, then replace the prompts in optimized trajectories with generic versions and supervised-fine-tune the model.[^self-improving-memory]
- 通用提示把持久内存目录作为文件系统，子任务之间仅通过内存文件传递信息，上下文在每个子任务边界清空。[^self-improving-memory]
- The generic harness uses a file system as persistent memory; only memory files carry information across subtask boundaries, and the live context is cleared at each subtask boundary.[^self-improving-memory]
- 微调使用秩为 64 的 LoRA，作用于注意力投影层，并在三个任务间平均分配监督 token 权重。[^self-improving-memory]
- Fine-tuning uses LoRA with rank 64 applied to attention projection layers, with supervision-token weights averaged equally across the three tasks.[^self-improving-memory]

## 相关 / Related

- 原文：[链接](https://facebookresearch.github.io/RAM/blogs/self_improving_memory)。 / Original: [link](https://facebookresearch.github.io/RAM/blogs/self_improving_memory).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^self-improving-memory]: Self-Improving Memory
