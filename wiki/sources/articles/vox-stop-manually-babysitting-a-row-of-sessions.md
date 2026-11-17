---
type: Source
title: "Vox · 不要再手动盯一排会话"
title_en: "Vox · Stop Manually Babysitting a Row of Sessions"
description: "Voxyz_ai 发布协调员 Skill，让单个会话通过分车道、进度看板和人工关卡批量管理多个编程 Agent。"
description_en: "Voxyz_ai shares a coordinator Skill that lets one session manage multiple coding agents via lanes, a progress board, and human gates."
resource: https://x.com/Voxyz_ai/status/2122434536822673761
tags: [agents, coordinator, claude-code, coding-agent, automation]
sources:
  - id: voxyz-ai-coordinator-skill
    resource: https://x.com/Voxyz_ai/status/2122434536822673761
    title: "Vox · Stop Manually Babysitting a Row of Sessions"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T08:26:35+08:00
---

# Vox · 不要再手动盯一排会话

*Vox · Stop Manually Babysitting a Row of Sessions*

帖文称，Voxyz_ai 正在分享其日夜使用的协调员 Skill：一次可让约 160 个 PR 在 3 天内完成、107 份任务简报由一个会话统筹。通过 `npx skills@latest add --skill coordinator --skill parallel-goal-fleet` 安装技能，并指定 Claude Code、Codex 或 Claude 桌面应用为协调员，用户可在 Herdr 侧边终端观察每个工人并接管任务。系统按任务拆分车道，前端交由 Opus 5.5、后端与发布交由 Codex Sol，涉及资金或登录的 PR 先由 Codex Astra 审核，Gemini 4 Argon 可对设计与文案二次评审；进度面板每 20 秒刷新，工人写入 READY 后才唤醒协调员；就绪 PR 合并为一次推送，此前 main 分支曾在 32 小时内推送 136 次，每次都是付费构建；仅涉及发布、数据库变更、资金或删除数据时才会暂停并询问用户；夜间可在设定的额度线处停止，醒来后查看等待确认的事项。帖文还建议先只启动一个 Claude 工人和一个 Codex 工人做单行任务，避免一次性开启所有工人压垮机器与额度。[^voxyz-ai-coordinator-skill]

The post says Voxyz_ai is sharing a coordinator Skill used day and night: ~160 PRs in 3 days, 107 task briefs coordinated by one session. After installing `npx skills@latest add --skill coordinator --skill parallel-goal-fleet`, users can designate Claude Code, Codex, or the Claude desktop app as coordinator and watch or take over workers via a Herdr side terminal. Tasks are split into lanes—frontend to Opus 5.5, backend and shipping to Codex Sol, money/login PRs reviewed first by Codex Astra, Gemini 4 Argon for design/copy second opinions. A progress board refreshes every 20 seconds; workers write READY when done to wake the coordinator. Ready PRs are tested together and ship in one push; previously main saw 136 pushes in 32 hours, each a paid build. It pauses only for shipping, database changes, money, or data deletion, and can stop overnight at a user-set quota line. The post recommends starting with just one Claude worker and one Codex worker on one-line tasks.[^voxyz-ai-coordinator-skill]

## 摘要 / Summary

- 帖文称该协调员 Skill 曾让约 160 个 PR 在 3 天内完成，使用 107 份任务简报，由一个会话统筹全局。[^voxyz-ai-coordinator-skill]
- The post claims the coordinator Skill handled ~160 PRs in 3 days using 107 task briefs, all run by one session.[^voxyz-ai-coordinator-skill]
- 安装命令为 `npx skills@latest add --skill coordinator --skill parallel-goal-fleet`，支持 Claude Code、Codex 或 Claude 桌面应用。[^voxyz-ai-coordinator-skill]
- Installation is `npx skills@latest add --skill coordinator --skill parallel-goal-fleet`, supporting Claude Code, Codex, or the Claude desktop app.[^voxyz-ai-coordinator-skill]
- 进度面板每 20 秒刷新一次，工人完成后只写一行 READY，才会唤醒协调员。[^voxyz-ai-coordinator-skill]
- The progress board refreshes every 20 seconds; a worker writes one READY line when done, and only that wakes the coordinator.[^voxyz-ai-coordinator-skill]
- 此前 main 分支在 32 小时内推送了 136 次，每次都是付费构建；现在就绪 PR 会一起测试并以一次推送交付。[^voxyz-ai-coordinator-skill]
- Previously main took 136 pushes in 32 hours, each a paid build; now ready PRs are tested together and ship with one push.[^voxyz-ai-coordinator-skill]
- 只有发布、数据库变更、涉及资金或删除数据时才会停止并询问用户；夜间可在设定的额度线处停止。[^voxyz-ai-coordinator-skill]
- It stops and asks only for shipping, database changes, money, or data deletion, and can stop overnight at a user-set quota line.[^voxyz-ai-coordinator-skill]
- 帖文建议先启动一个 Claude 工人和一个 Codex 工人做单行任务，不要一次性开启所有工人。[^voxyz-ai-coordinator-skill]
- The post recommends starting with one Claude worker and one Codex worker on one-line tasks, not firing up every worker at once.[^voxyz-ai-coordinator-skill]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2122434536822673761)。 / Original: [link](https://x.com/Voxyz_ai/status/2122434536822673761).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^voxyz-ai-coordinator-skill]: Vox · Stop Manually Babysitting a Row of Sessions
