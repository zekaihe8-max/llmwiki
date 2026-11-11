---
type: Source
title: "进度板：长任务前先部署仅构建仪表盘的子 Agent"
title_en: "Progress Dashboard: Deploy a Dashboard-Only Subagent Before Long Tasks"
description: "主张在长任务前先让专用子 Agent 构建自刷新 HTML 进度看板，再由主会话继续编码。"
description_en: "The post urges launching a dedicated subagent to build a self-refreshing HTML progress dashboard before long tasks, while the main session keeps coding."
resource: https://x.com/Voxyz_ai/status/2120141188304965959
tags: [agents, subagent, claude-code, dashboard]
sources:
  - id: voxyz-ai-dashboard-builder-subagent
    resource: https://x.com/Voxyz_ai/status/2120141188304965959
    title: "Progress Dashboard: Deploy a Dashboard-Only Subagent Before Long Tasks"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T08:25:01+08:00
---

# 进度板：长任务前先部署仅构建仪表盘的子 Agent

*Progress Dashboard: Deploy a Dashboard-Only Subagent Before Long Tasks*

「帖文称」用户应在让 Fable 5.2 执行长任务前，先让它 vibe-code 一个 HTML 仪表盘，再部署名为 dashboard-builder 的子 Agent（Opus 5.5，中等努力）专门构建仪表盘。该子 Agent 首次会询问风格偏好并写入记忆，之后每个仪表盘都符合用户口味与任务。仪表盘展示任务进度、卡点、等待用户的问题及默认后续动作，以单 HTML 文件形式每 10 秒自刷新。帖文还给出了写入 ~/.claude/agents 与 ~/.claude/CLAUDE.md 的完整提示词，并要求在确认前不写入任何文件。[^voxyz-ai-dashboard-builder-subagent]

The post says users should have Fable 5.2 vibe-code an HTML dashboard before long tasks, then deploy a dashboard-builder subagent (Opus 5.5, medium effort) that only builds dashboards. It asks for style preferences once, saves them to memory, and thereafter produces dashboards matched to the user's taste and task. The single-file HTML dashboard shows task progress, stuck items, pending questions with default actions, and refreshes every 10 seconds. The post includes a full prompt for ~/.claude/agents and a CLAUDE.md rule, and explicitly says not to write anything until confirmed.[^voxyz-ai-dashboard-builder-subagent]

## 摘要 / Summary

- 仪表盘展示四项内容：任务进度、卡住的事项、等待用户回答的问题、以及用户不回答时的默认动作。[^voxyz-ai-dashboard-builder-subagent]
- The dashboard shows four things: task progress, what's stuck, questions waiting on you, and what it'll do by default if you don't answer.[^voxyz-ai-dashboard-builder-subagent]
- 子 Agent 名为 dashboard-builder，使用 Opus 5.5、中等努力，具备用户记忆，只能读写 .dashboard/ 文件夹及自身记忆。[^voxyz-ai-dashboard-builder-subagent]
- The subagent is named dashboard-builder, runs on Opus 5.5 at medium effort with user memory, and can only read and write the .dashboard/ folder and its own memory.[^voxyz-ai-dashboard-builder-subagent]
- 仪表盘为单个 HTML 文件，双击打开，每 10 秒自刷新，使用真实时钟。[^voxyz-ai-dashboard-builder-subagent]
- The dashboard is one HTML file, opens with a double-click, refreshes itself every 10 seconds, and uses the real clock for every time.[^voxyz-ai-dashboard-builder-subagent]
- CLAUDE.md 规则：超过 5 步或预计超 30 分钟的任务，需在开始前建仪表盘、每步后更新；删除或发布等不可撤销操作需等待用户回答。[^voxyz-ai-dashboard-builder-subagent]
- The CLAUDE.md rule says tasks with more than 5 steps or longer than 30 minutes must have the dashboard set up before starting and updated after every step; anything that can't be undone, like deleting or publishing, waits for the user's answer.[^voxyz-ai-dashboard-builder-subagent]
- 首次运行会询问风格（深色/浅色、密集/宽松、一种强调色）并保存到记忆，之后沿用。[^voxyz-ai-dashboard-builder-subagent]
- The first time, it asks what style you like: dark or light, dense or airy, and one accent color, then saves the answer to memory.[^voxyz-ai-dashboard-builder-subagent]
- 提示词明确要求：在用户确认前不写入任何内容。[^voxyz-ai-dashboard-builder-subagent]
- The prompt explicitly says: Don't write anything until I confirm.[^voxyz-ai-dashboard-builder-subagent]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2120141188304965959)。 / Original: [link](https://x.com/Voxyz_ai/status/2120141188304965959).
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)

[^voxyz-ai-dashboard-builder-subagent]: Progress Dashboard: Deploy a Dashboard-Only Subagent Before Long Tasks
