---
type: Source
title: "Vox：Claude Code 子 Agent 状态更新费用下降 99%，附三项省额度设置"
title_en: "Vox: Claude Code background subagent status update costs cut 99%, plus three usage-limit settings"
description: "Anthropic 大幅降低 Claude Code 后台子 Agent 状态更新费用，官方文档还提供三项可调设置以进一步节省使用额度。"
description_en: "Anthropic has slashed Claude Code background subagent status update costs by 99%, and the official docs offer three more settings to further stretch usage limits."
resource: https://x.com/Voxyz_ai/status/2118387877939921361
tags: [claude-code, subagents, usage-limits, token-saving]
sources:
  - id: c60a157e14f93959
    resource: https://x.com/Voxyz_ai/status/2118387877939921361
    title: "Vox: Claude Code background subagent status update costs cut 99%, plus three usage-limit settings"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T08:05:17+08:00
---

# Vox：Claude Code 子 Agent 状态更新费用下降 99%，附三项省额度设置

*Vox: Claude Code background subagent status update costs cut 99%, plus three usage-limit settings*

「帖文称」Anthropic 已将 Claude Code 中后台子 Agent 状态更新的费用降低 99%；对于使用额度紧张的用户，官方文档还列出三项可调设置，包括让内置 Explore 子 Agent 改用 Haiku、为可独立工作的子 Agent 添加 omitClaudeMd: true，以及为简单任务设置 effort: low。[^c60a157e14f93959]

The post claims Anthropic has cut the cost of background subagent status updates in Claude Code by 99%, and for users with tight usage limits, the official docs list three adjustable settings: overriding the built-in Explore agent with a Haiku-based one, adding omitClaudeMd: true to agents that can work from task descriptions alone, and setting effort: low for simple jobs.[^c60a157e14f93959]

## 摘要 / Summary

- Anthropic 将 Claude Code 后台子 Agent 状态更新费用下调 99%。 / Anthropic has reduced Claude Code background subagent status update costs by 99%.[^c60a157e14f93959]
- 内置 Explore 默认与主会话使用同一模型；在 ~/.claude/agents 中新建名为 Explore 的子 Agent 并设置 model: haiku 可覆盖内置版本，使文件与代码搜索改用 Haiku。 / The built-in Explore uses the same model as the main session by default; creating an Explore agent in ~/.claude/agents with model: haiku overrides it so file and code search runs on Haiku.[^c60a157e14f93959]
- 子 Agent 启动时会读取所有层级的 CLAUDE.md 文件；能仅凭任务描述工作的子 Agent 可添加 omitClaudeMd: true。 / Subagents read all CLAUDE.md files at every level on startup; agents that can work from the task description alone can add omitClaudeMd: true.[^c60a157e14f93959]
- 未自行设置 /effort 的子 Agent 会遵循主会话的 /effort 设置；简单任务可为子 Agent 设置 effort: low。 / Subagents without their own effort setting follow the main session's /effort; simple jobs can be assigned effort: low.[^c60a157e14f93959]
- 帖文还提供一段可发送给 Claude Code 的提示词，用于梳理子 Agent 设置并以表格形式展示变更计划。 / The post also includes a prompt to send to Claude Code for reviewing subagent settings and presenting a change plan as a table.[^c60a157e14f93959]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2118387877939921361)。 / Original: [link](https://x.com/Voxyz_ai/status/2118387877939921361).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)

[^c60a157e14f93959]: Vox: Claude Code background subagent status update costs cut 99%, plus three usage-limit settings
