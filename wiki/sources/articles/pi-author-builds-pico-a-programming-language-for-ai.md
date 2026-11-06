---
type: Source
title: "Pi 作者给 AI 造了 Pico"
title_en: "Pi Author Builds Pico, a Programming Language for AI"
description: "Pi 作者 Mario 为 Codemode 开发专用编程语言 Pico，并让 Agent 自行开发与测试，最终目标是可保存执行状态的虚拟机。"
description_en: "Pi author Mario develops Pico, a dedicated programming language for Codemode, has agents develop and test it, and aims for a VM that can save execution state."
resource: https://x.com/xiaomovps/status/2118652864721817935
tags: [agents, programming-language, pico, ai]
sources:
  - id: mario-pico-ai-language
    resource: https://x.com/xiaomovps/status/2118652864721817935
    title: "Pi Author Builds Pico, a Programming Language for AI"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T20:03:38+08:00
---

# Pi 作者给 AI 造了 Pico

*Pi Author Builds Pico, a Programming Language for AI*

帖文称，Pi 作者 Mario 决定为 Codemode 专门设计一门名为 Pico 的编程语言，并直接让 Agent 开发 Pico，再通过 Pi Durable 的 Codemode 调度多个子 Agent，将其与 QuickJS、Armin 的 djs/TS 进行对比测试。Mario 的更远期目标是构建一个能将运行中状态压缩为微小快照的虚拟机，以便 Agent 任务中断后可直接恢复，而不依赖 Pi Durable 的 Replay 机制。目前 Pico 仍处于实验阶段。[^mario-pico-ai-language]

The post says Pi author Mario decided to design a dedicated programming language called Pico for Codemode, and directly had agents develop Pico, then used Pi Durable's Codemode to schedule multiple sub-agents to compare it against QuickJS and Armin's djs/TS. Mario's longer-term goal is to build a virtual machine that compresses running state into small snapshots so agent tasks can resume directly after interruption without relying on Pi Durable's Replay mechanism. Pico is currently experimental.[^mario-pico-ai-language]

## 摘要 / Summary

- Mario 为 Codemode 创建名为 Pico 的专用编程语言。 / Mario created a dedicated programming language called Pico for Codemode.[^mario-pico-ai-language]
- 他让 Agent 开发 Pico，再通过 Codemode 调度多个子 Agent 做对比测试。 / He had agents develop Pico, then scheduled multiple sub-agents via Codemode for comparative testing.[^mario-pico-ai-language]
- 对比对象包括 QuickJS 与 Armin 的 djs/TS。 / Comparison targets include QuickJS and Armin's djs/TS.[^mario-pico-ai-language]
- 最终目标是可保存执行状态并以微小快照恢复的虚拟机。 / The ultimate goal is a VM that can save execution state and restore from small snapshots.[^mario-pico-ai-language]
- 目前 Pico 仍处于实验阶段。 / Pico is currently in the experimental stage.[^mario-pico-ai-language]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2118652864721817935)。 / Original: [link](https://x.com/xiaomovps/status/2118652864721817935).
- Topic: [面向 Agent 的编程语言 / Languages for agents](../../topics/languages-for-agents.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [芯片上的 Agent Runtime / On-chip Agent runtime](../../topics/on-chip-agent-runtime.md)

[^mario-pico-ai-language]: Pi Author Builds Pico, a Programming Language for AI
