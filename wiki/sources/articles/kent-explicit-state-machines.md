---
type: Source
title: "Kent · 显式状态机"
title_en: "Kent · Explicit State Machines"
description: "Kent C. Dodds 转发一段提示词，主张找出应用中的隐式状态机并将其显式化，以兼顾用户体验、开发者体验与智能体体验。"
description_en: "Kent C. Dodds shares a prompt urging developers to find implicit state machines in their apps and make them explicit while balancing UX, DX, and AX."
resource: https://x.com/kentcdodds/status/2119812466037428392
tags: [state-machine, ux-dx-ax, agents, prompt]
sources:
  - id: kentcdodds-explicit-state-machines
    resource: https://x.com/kentcdodds/status/2119812466037428392
    title: "Kent · Explicit State Machines"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T08:30:58+08:00
---

# Kent · 显式状态机

*Kent · Explicit State Machines*

「帖文称」Kent C. Dodds 分享了一段经微调的提示词，建议开发者找出应用中大量存在的隐式状态机，在不破坏现有功能的前提下，始终做出能提升用户体验（UX）、开发者体验（DX）和智能体体验（AX）的决策，并将状态机显式化。该帖文还引用了 David K 关于“何为隐式状态机”的解释：应用中充斥着“在此状态下、发生此事件时，转入下一状态”的逻辑（given-when-then），有时已通过 switch 语句等方式清晰映射。[^kentcdodds-explicit-state-machines]

Kent C. Dodds shares an adjusted prompt urging developers to identify the many implicit state machines in their apps, make decisions that always elevate user experience (UX), developer experience (DX), and agent experience (AX) without breaking anything, and make state machines explicit. The post also quotes David K explaining that apps are full of “given-when-then” logic—“in this state, when this event happens, go to that state”—sometimes already clearly mapped via switch statements.[^kentcdodds-explicit-state-machines]

## 摘要 / Summary

- 帖文引用的提示词建议寻找应用中的隐式状态机，并将其显式化。 / The quoted prompt urges finding implicit state machines in apps and making them explicit.[^kentcdodds-explicit-state-machines]
- 决策准则是同时提升用户体验（UX）、开发者体验（DX）和智能体体验（AX），且不得破坏现有功能。 / The decision criterion is to always improve UX, DX, and AX without breaking anything.[^kentcdodds-explicit-state-machines]
- 隐式状态机被描述为“在此状态、发生此事件、转入该状态”的 given-when-then 逻辑。 / Implicit state machines are described as given-when-then logic: in a state, on an event, transition to another state.[^kentcdodds-explicit-state-machines]
- 部分状态机已通过 switch 语句等方式清晰映射。 / Some state machines are already clearly mapped using switch statements and similar constructs.[^kentcdodds-explicit-state-machines]
- 该提示词最初来自 @steveruizok，经 Kent C. Dodds 略作调整后分享。 / The prompt originated from @steveruizok and was slightly adjusted by Kent C. Dodds before sharing.[^kentcdodds-explicit-state-machines]

## 相关 / Related

- 原文：[链接](https://x.com/kentcdodds/status/2119812466037428392)。 / Original: [link](https://x.com/kentcdodds/status/2119812466037428392).
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^kentcdodds-explicit-state-machines]: Kent · Explicit State Machines
