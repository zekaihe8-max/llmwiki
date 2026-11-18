---
type: Source
title: "收窄工具"
title_en: "Constraining Tools"
description: "Matt Pocock 提出通过极严格 lint 规则为智能体创建受限工具集的实验，暂定名为 /constrain。"
description_en: "Matt Pocock proposes an experiment to create extremely constrained tool versions for agents using harsh lint rules, tentatively called /constrain."
resource: https://x.com/mattpocockuk/status/2122659341685694586
tags: [agents, lint-rules, tool-constraints, experiment]
sources:
  - id: matt-pocock-constrain-experiment
    resource: https://x.com/mattpocockuk/status/2122659341685694586
    title: "Constraining Tools"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T08:38:49+08:00
---

# 收窄工具

*Constraining Tools*

Matt Pocock 在 X 上发帖称，他正在尝试为智能体创建极度受限的工具版本：允许使用 React，但所有状态必须放在 Zustand 或 useReducer 中，通过极其严苛的 lint 规则剔除所有细微差别，构建“成功黑洞”，暂定名为 /constrain。[^matt-pocock-constrain-experiment]

Matt Pocock posts on X that he is experimenting with creating extremely constrained versions of tools for agents—for example, allowing React but requiring all state to be in Zustand or useReducer—stripping out nuance through harsh lint rules to create a “black hole of success,” tentatively called /constrain.[^matt-pocock-constrain-experiment]

## 摘要 / Summary

- 帖文由 Matt Pocock (@mattpocockuk) 于 2026 年 11 月 17 日发布，获得 52.2 千次浏览。[^matt-pocock-constrain-experiment]
- The post by Matt Pocock (@mattpocockuk) was published on November 17, 2026 and received 52.2K views.[^matt-pocock-constrain-experiment]
- 实验假设是：如果选择过多对智能体不利，是否可以为喜欢的工具创建极度受限的版本。[^matt-pocock-constrain-experiment]
- The experiment asks whether extremely constrained versions of liked tools can help agents if too much choice is bad for them.[^matt-pocock-constrain-experiment]
- 示例限制是：智能体可以使用 React，但所有状态必须放在 Zustand 或 useReducer 中。[^matt-pocock-constrain-experiment]
- One example constraint is allowing React while requiring all state to be in Zustand or useReducer.[^matt-pocock-constrain-experiment]
- 实施方式是通过“极其严苛的 lint 规则”剔除所有细微差别，构建“成功黑洞”。[^matt-pocock-constrain-experiment]
- The method is to strip out all nuance through incredibly harsh lint rules, creating a black hole of success.[^matt-pocock-constrain-experiment]
- 该项目暂定名为 /constrain。[^matt-pocock-constrain-experiment]
- The project is tentatively called /constrain.[^matt-pocock-constrain-experiment]

## 相关 / Related

- 原文：[链接](https://x.com/mattpocockuk/status/2122659341685694586)。 / Original: [link](https://x.com/mattpocockuk/status/2122659341685694586).
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [一次只问一个问题 / One question at a time](../../topics/one-question-at-a-time.md)

[^matt-pocock-constrain-experiment]: Constraining Tools
