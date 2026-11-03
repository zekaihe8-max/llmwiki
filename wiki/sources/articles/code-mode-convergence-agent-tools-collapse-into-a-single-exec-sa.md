---
type: Source
title: "Code Mode 收敛：智能体工具收缩为单一执行沙箱"
title_en: "Code Mode Convergence: Agent Tools Collapse into a Single Exec Sandbox"
description: "帖文称，智能体工具调用正从多工具 JSON Schema 收敛为单一 exec(code) 的 Code Mode，中间结果大多不进入上下文。"
description_en: "The post says agent tool calling is converging from multiple JSON-schema tools to a single exec(code) Code Mode, with most intermediate results kept out of context."
resource: https://x.com/shao__meng/status/2117428427380957442
tags: [agents, code-mode, tool-calling, sandbox]
sources:
  - id: code-mode-convergence
    resource: https://x.com/shao__meng/status/2117428427380957442
    title: "Code Mode Convergence: Agent Tools Collapse into a Single Exec Sandbox"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:11:13+08:00
---

# Code Mode 收敛：智能体工具收缩为单一执行沙箱

*Code Mode Convergence: Agent Tools Collapse into a Single Exec Sandbox*

「帖文称」Philipp Schmid 发现 Agent 工具调用正从「每轮一次 JSON 动作」收敛成 Code Mode：模型只拿到一个 exec(code)，在沙箱里用 TypeScript/Python 把查、滤、改、并行全串完，中间结果大多不进上下文。整本工具目录浓缩成一个 exec，Harness 不再把几十个 JSON Schema 工具塞进模型接口，而是编成紧凑的类型声明，让模型写一小段脚本在隔离沙箱里完成依赖动作。[^code-mode-convergence]

The post says Philipp Schmid found agent tool calling converging from one JSON action per round to Code Mode: the model gets only exec(code), chains query/filter/edit/parallel in a TypeScript/Python sandbox, and keeps most intermediate results out of context. The entire tool catalog is condensed into a single exec; the harness no longer stuffs dozens of JSON-schema tools into the model interface but compiles them into compact type declarations, letting the model write a short script in an isolated sandbox to complete dependent actions.[^code-mode-convergence]

## 摘要 / Summary

- 帖文称 Philipp Schmid 发现 Agent 工具调用正从「每轮一次 JSON 动作」收敛成 Code Mode：模型只拿到一个 exec(code)，在沙箱里用 TypeScript/Python 把查、滤、改、并行全串完，中间结果大多不进上下文。 / The post says Philipp Schmid observed agent tool calling converging from one JSON action per round to Code Mode: the model receives only exec(code), chains query/filter/edit/parallel in a TypeScript/Python sandbox, and keeps most intermediate results out of context.[^code-mode-convergence]
- 实现上表面只暴露 exec(code)，可用 text()/image()/audio() 决定哪些输出进入下一轮上下文，并用 store/load 将状态放在宿主内存，避免大 JSON 每轮占用 token。 / Implementation exposes only exec(code); text()/image()/audio() choose which outputs enter the next-round context, while store/load keep state in host memory to avoid large JSON consuming tokens each round.[^code-mode-convergence]
- 文中 Linear 例子：列出项目、并行拉取 issue、滤出未指派、并行归档，沙箱内可跑几十次底层 API，回模型的往往只有一行摘要。 / The article's Linear example lists projects, pulls issues in parallel, filters unassigned ones, and archives in parallel; the sandbox may run dozens of underlying API calls, while the model often receives only a one-line summary.[^code-mode-convergence]
- 推动因素包括前沿模型大量训练代码、厂商为 Code Mode 做后训练，以及 MCP 同时提供 inputSchema 和 outputSchema，让模型在运行前知道返回类型。 / Drivers include heavy code training on frontier models, vendor post-training for Code Mode, and MCP providing both inputSchema and outputSchema so the model knows return types before execution.[^code-mode-convergence]
- Factory 将 Droid 1.0 切换到 Code Mode 后，Terminal-Bench 4 准确率约提升 3.5，模型花费约下降 15%。 / After Factory switched Droid 1.0 to Code Mode, Terminal-Bench 4 accuracy rose by about 3.5 and model spend fell by about 15%.[^code-mode-convergence]
- 作者留有余地：未必每个 Agent 真只剩一个工具，为 bash 和人类可读文本优化的 CLI、Skills 接到类型化执行上未必顺，可能要回过头清点 Agent 真正需要什么。 / The author leaves room that not every agent truly needs only one tool; CLI and Skills optimized for bash and human-readable text may not fit typed execution, requiring a reassessment of what agents actually need.[^code-mode-convergence]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2117428427380957442)。 / Original: [link](https://x.com/shao__meng/status/2117428427380957442).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [面向 Agent 的编程语言 / Languages for agents](../../topics/languages-for-agents.md)
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)

[^code-mode-convergence]: Code Mode Convergence: Agent Tools Collapse into a Single Exec Sandbox
