---
type: Source
title: "Trina AX：团队共享 AI 服务器"
title_en: "Trina AX: Team-Shared AI Server"
description: "Trina AX 是面向团队的开源 AI 平台，支持共享会话、团队文件盘、技能与应用集成，并按人员、群组或团队设置 Token 限额。"
description_en: "Trina AX is an open-source team AI platform supporting shared sessions, team file storage, skills and app integrations, with token limits per person, group or team."
resource: https://github.com/trina-app/trina-ax
tags: [agents, team-ai, self-hosted, open-source]
sources:
  - id: trina-ax
    resource: https://github.com/trina-app/trina-ax
    title: "Trina AX: Team-Shared AI Server"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:52:30+08:00
---

# Trina AX：团队共享 AI 服务器

*Trina AX: Team-Shared AI Server*

「Trina AX」帖文称，该平台将团队的文件、技能与工具放在一台服务器上，所有人的 AI 会话可互相接续，且每次文件访问均按提问者的权限进行校验。它支持连接 Claude 或 OpenAI API Key，并提供 Mac、Windows、Linux、iPhone、Android 及浏览器客户端，自称基于 AGPL-3.0 开源且可免费自托管。[^trina-ax]

The Trina AX README says the platform puts a team's files, skills and tools on one server, lets everyone pick up a teammate's AI session where they left off, and checks every file access against the person who asked. It supports connecting a Claude or OpenAI API key and offers clients for Mac, Windows, Linux, iPhone, Android and browsers, describing itself as open source under AGPL-3.0 and free to self-host.[^trina-ax]

## 摘要 / Summary

- 一人设置，全团队使用：连接一个 Claude 或 OpenAI API Key，即可为全团队提供 AI 服务，并可按人员、群组或团队设置 Token 限额。[^trina-ax]
- One person sets up for the whole team: connect one Claude or OpenAI API key to serve everyone, with token limits per person, group or team.[^trina-ax]
- 共享会话与权限隔离：可在团队项目中打开队友的 AI 会话并继续，新回答以提问者身份运行；AI 只能打开该人员有权访问的文件夹。[^trina-ax]
- Shared sessions with permission isolation: open a teammate's AI session in a team project and continue; new answers run with the access of the person who asked, and the AI can only open folders that person may open.[^trina-ax]
- 技能与应用集成：支持编写 SKILL.md 或导入 .claude/.codex 文件夹中的技能，并可接入 Notion、Linear、Figma 等应用或任意 MCP 服务器。[^trina-ax]
- Skills and app integration: supports writing SKILL.md or importing skills from .claude/.codex folders, and connecting apps such as Notion, Linear and Figma or any MCP server by address.[^trina-ax]
- 自托管与多平台：提供 Linux (.deb/AppImage) 和 Docker 自托管方式，桌面端与移动端覆盖 Mac、Windows、Linux、iPhone、Android，界面支持六种语言。[^trina-ax]
- Self-hosting and multi-platform: offers Linux .deb/AppImage and Docker self-hosting, desktop and mobile clients for Mac, Windows, Linux, iPhone and Android, with UI in six languages.[^trina-ax]

## 相关 / Related

- 原文：[链接](https://github.com/trina-app/trina-ax)。 / Original: [link](https://github.com/trina-app/trina-ax).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)

[^trina-ax]: Trina AX: Team-Shared AI Server
