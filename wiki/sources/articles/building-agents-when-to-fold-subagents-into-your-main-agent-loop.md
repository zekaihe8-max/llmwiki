---
type: Source
title: "把子 Agent 折进主循环：主循环优先于多子 Agent 架构"
title_en: "Building agents: When to fold subagents into your main agent loop"
description: "帖文称，在 Claude Platform 上构建 Agent 时，减少子 Agent、采用渐进式上下文与工具披露，往往能提升质量并降低成本与延迟。"
description_en: "On Claude Platform, using fewer subagents with progressively disclosed context and tools can improve quality while reducing cost and latency."
resource: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop
tags: [agents, design, subagents, claude-platform]
sources:
  - id: building-agents-fold-subagents-main-loop
    resource: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop
    title: "Building agents: When to fold subagents into your main agent loop"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T08:33:20+08:00
---

# 把子 Agent 折进主循环：主循环优先于多子 Agent 架构

*Building agents: When to fold subagents into your main agent loop*

「帖文称」Anthropic Claude Platform 的应用 AI 团队发现，许多企业 Agent 部署通过将路由器、规划器和领域子 Agent 折进主 Agent 循环，获得了更好的质量、更低成本和延迟；子 Agent 仍适用于上下文膨胀、并行任务或工具选择冲突等场景，但过多子 Agent 容易复制组织架构并导致上下文丢失与延迟。[^building-agents-fold-subagents-main-loop]

Anthropic's Applied AI team found that many enterprise agent deployments benefit from folding routers, planners, and domain subagents into the main agent loop, achieving better quality, lower cost, and latency; subagents still fit context bloat, parallel tasks, or tool-selection conflicts, but too many subagents can mirror org charts and cause context loss and latency.[^building-agents-fold-subagents-main-loop]

## 摘要 / Summary

- 在多个企业部署的对比中，单 Agent 加技能（skills）的设计在质量上优于“全提示词单体”和子 Agent 设计，且通常每任务成本与延迟更低。[^building-agents-fold-subagents-main-loop]
- In several enterprise deployments, a single agent with skills frequently outperformed both the one-prompt-for-everything design and the subagent design on quality, often at lower cost and latency per task.[^building-agents-fold-subagents-main-loop]
- 保留子 Agent 的三种情形：主循环因上下文膨胀出现可衡量性能下降；多任务需要并行且可丢弃的全新上下文窗口；单 Agent 难以选择合适工具或系统提示词存在冲突指令。[^building-agents-fold-subagents-main-loop]
- Keep subagents when: a single loop degrades measurably from context bloat; multiple tasks need parallel fresh disposable context windows; or a single agent struggles to select tools or has conflicting system-prompt instructions.[^building-agents-fold-subagents-main-loop]
- 渐进式披露上下文与工具：Agent 先只看到技能和工具的简短描述，仅在需要时完整加载，可减少上下文膨胀并保留更丰富的跨步骤上下文。[^building-agents-fold-subagents-main-loop]
- Progressive disclosure: the agent sees short skill/tool descriptions first and loads them fully only when needed, reducing context bloat while preserving richer cross-step context.[^building-agents-fold-subagents-main-loop]
- 多 Agent 架构常见问题包括上下文管理、子 Agent 蔓延、团队各加一句导致的规则冲突（Frankenprompt）、未经审核的局部评测，以及延迟；一客户对比发现单循环运行时间约快 2 倍。[^building-agents-fold-subagents-main-loop]
- Multi-agent architectures introduce context management, subagent sprawl, Frankenprompt conflicts, unvetted localized evals, and latency; one customer saw roughly 2x faster runtime with a single agent loop.[^building-agents-fold-subagents-main-loop]
- 建立由中央小团队负责的端到端任务完成评测，每个技能随附更小评测集；合并子 Agent 前先构建小型端到端评测，再逐一将子 Agent 提示词转为技能、API 调用转为 MCP 工具。[^building-agents-fold-subagents-main-loop]
- Build end-to-end task-completion evals owned by a small central team, with smaller eval sets per skill; build a small end-to-end eval before merging, then fold subagents one at a time by turning prompts into skills and API calls into MCP tools.[^building-agents-fold-subagents-main-loop]
- 将子 Agent 作为工具调用可作为第一步，保留主 Agent 与用户对话；完整交接仅建议在子 Agent 需直接与用户对话时使用，否则应保留为主循环中的技能加工具。[^building-agents-fold-subagents-main-loop]
- Calling subagents as tools is a good first step while the main agent keeps the user conversation; full handoff is only recommended when the subagent must talk to the user directly.[^building-agents-fold-subagents-main-loop]

## 相关 / Related

- 原文：[链接](https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop)。 / Original: [link](https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop).
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^building-agents-fold-subagents-main-loop]: Building agents: When to fold subagents into your main agent loop
