---
type: Source
title: "Grok Bot 3D 智能体校园控制中心（演示版）"
title_en: "Grok Bot Control Center (demo)"
description: "一个基于 Grok Bot 构建的 3D AI 智能体公司“任务指挥中心”演示，用于查看团队工作、审批任务和监控每周使用量。"
description_en: "A Grok Bot-built 3D “mission control” demo for an AI-agent company, showing team work, pending approvals, and weekly usage monitoring."
resource: https://github.com/sarbarshem/grok-bot-3d-campus
tags: [grok-bot, ai-agents, 3d, dashboard, vercel]
sources:
  - id: grok-bot-3d-campus-demo
    resource: https://github.com/sarbarshem/grok-bot-3d-campus
    title: "Grok Bot Control Center (demo)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:05:55+08:00
---

# Grok Bot 3D 智能体校园控制中心（演示版）

*Grok Bot Control Center (demo)*

帖文称，Grok Bot 控制中心（演示版）是一个 3D“任务指挥中心”，为 AI 智能体公司中的每个团队提供校园房间，可查看谁在做什么、等待审批的事项、下一个运行的定时任务以及每周使用量，并支持一键发送指令。该仓库为演示版，所有团队、智能体、任务、审批和数据均为虚构，按钮不联系任何真实系统。[^grok-bot-3d-campus-demo]

The post describes Grok Bot Control Center (demo) as a 3D “mission control” giving every team in an AI-agent company a campus room, showing who is working on what, pending approvals, upcoming scheduled tasks, and weekly usage, with one-click commands. The repo is a demo with invented teams, agents, tasks, approvals, and numbers; no button contacts anything.[^grok-bot-3d-campus-demo]

## 摘要 / Summary

- 3D 校园基于 three.js，每个团队一个房间，围绕广场布置 6 个房间，侧翼有冻结团队，额外团队会自动生成房间；支持轨道/缩放、迷你地图、键盘快捷键，WebGL 缺失时回退为 SVG。 / The 3D campus is built with three.js, one room per team, six rooms around the plaza and frozen teams in a side wing; extra teams get generated rooms, with orbit/zoom, minimap, keyboard shortcuts, and SVG fallback when WebGL is missing.[^grok-bot-3d-campus-demo]
- 安全模式为只读：主机器人只读取自身团队聊天和其他机器人转录，从不创建、修改或删除机器人或团队；上网的仅为一份由机器人写入的 JSON，不包含完整聊天或文件。 / The safety model is read-only: the main bot reads only its own team chats and other bots’ transcripts, never creating, changing, or deleting bots or teams; the only file written online is one JSON with team/bot names, work, tasks, approvals, schedules, and usage, no full chats or files.[^grok-bot-3d-campus-demo]
- 访问通过私有随机令牌链接，其他均返回 404，搜索引擎被要求不索引，可免费叠加 Vercel 登录；按钮请求需用仅用户粘贴的密钥签名，发布、支出、删除或审批等操作需在聊天中先获得用户确认。 / Access is via a private random-token link; everything else returns 404 and search engines are told not to index it, with optional free Vercel login. Button requests are signed with a key only the user pastes, and actions that publish, spend, delete, or approve require user confirmation in chat first.[^grok-bot-3d-campus-demo]
- 演示使用 lib/demo-data.ts 生成相对当前时间的虚构数据，按钮仅在浏览器中模拟；真实版推送 JSON 到私有 Vercel Blob，按钮通过 webhook 发送到主机器人，刷新最多每 5 分钟一次。 / The demo uses lib/demo-data.ts to generate now-relative invented data and simulates buttons in the browser; the real app pushes JSON to a private Vercel Blob, sends buttons via webhook to the main bot, and refreshes at most once every 5 minutes.[^grok-bot-3d-campus-demo]
- 查看页面和轮询 JSON 不占用 Grok Bot 用量；Vercel 免费计划内私有 Blob 存储可做到 0 美元托管；完整刷新约占 Super 每周限额的 0.4%。 / Viewing the page and polling JSON use 0% Grok Bot usage; hosting can be $0 within Vercel free plan and private Blob allowances; a full refresh costs roughly 0.4% of a Super weekly limit.[^grok-bot-3d-campus-demo]

## 相关 / Related

- 原文：[链接](https://github.com/sarbarshem/grok-bot-3d-campus)。 / Original: [link](https://github.com/sarbarshem/grok-bot-3d-campus).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [AI 原生公司 / AI-native companies](../../topics/ai-native-companies.md)

[^grok-bot-3d-campus-demo]: Grok Bot Control Center (demo)
