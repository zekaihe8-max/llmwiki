---
type: Source
title: "Simular Box：面向 AI 的云端 Linux 桌面"
title_en: "Simular Box: Cloud Linux Desktop for AI"
description: "Simular Box 提供云端 Linux 桌面，通过 MCP 服务器让 AI 操作真实电脑。"
description_en: "Simular Box provides a cloud Linux desktop that lets AI operate a real computer via an MCP server."
resource: https://box.simular.ai/
tags: [simular, box, mcp, computer-use, cloud-desktop, ai-agent]
sources:
  - id: simular-box
    resource: https://box.simular.ai/
    title: "Simular Box: Cloud Linux Desktop for AI"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T21:04:03+08:00
---

# Simular Box：面向 AI 的云端 Linux 桌面

*Simular Box: Cloud Linux Desktop for AI*

「帖文称」Simular Box 是面向 AI 的云端 Linux 桌面，用户可将其作为远程 MCP 服务器接入 Claude、ChatGPT、Claude Code、Codex、Cursor、OpenCode、Hermes、OpenClaw、VS Code 或 DeepSeek Harness，让 AI 打开浏览器、点击、输入、读取屏幕并运行命令。每个账号拥有一台云端 Linux 桌面，未使用时会休眠，连续 14 天未唤醒会被删除；帖文称桌面本身免费，模型调用消耗账号每日积分。[^simular-box]

According to the post, Simular Box is a cloud Linux desktop for AI. Users can connect it as a remote MCP server to Claude, ChatGPT, Claude Code, Codex, Cursor, OpenCode, Hermes, OpenClaw, VS Code, or DeepSeek Harness, enabling AI to open browsers, click, type, read screens, and run commands. Each account has one cloud Linux desktop that sleeps when unused and is deleted after 14 consecutive days of inactivity; the post says the desktop itself is free, while model calls consume daily account credits.[^simular-box]

## 摘要 / Summary

- Box 通过托管 MCP 服务器 https://mcp.box.simular.ai/mcp 提供，首次连接需用 Simular 账号 OAuth 登录，无需粘贴密钥；无法登录的应用可用个人密钥作 Bearer 令牌。 / Box is provided via hosted MCP server https://mcp.box.simular.ai/mcp; first connection requires Simular account OAuth login with no key pasting, and apps that cannot sign in can use a personal key as Bearer token.[^simular-box]
- 运行 npx @simular-ai/box connect 可自动检测 Claude Code、Codex、Cursor、OpenCode、Hermes、OpenClaw 和 VS Code 并为其添加 Box，保留其他设置不变；Claude 桌面版会打印手动配置步骤。 / Running npx @simular-ai/box connect detects Claude Code, Codex, Cursor, OpenCode, Hermes, OpenClaw, and VS Code and adds Box to them while leaving other settings unchanged; Claude Desktop prints manual configuration steps.[^simular-box]
- 每个账号只有一台云端 Linux 桌面，无人使用时休眠，AI 连接时唤醒；连续 14 天休眠会连同文件和保存一起被删除，任意唤醒会重置计数。 / Each account has one cloud Linux desktop that sleeps when unused and wakes when AI connects; 14 consecutive days of sleep deletes it with files and saves, and any wake resets the count.[^simular-box]
- 帖文称桌面本身免费，模型调用消耗账号每日积分；DeepSeek Harness 无法登录，需在 https://box.simular.ai/access 制作个人密钥并设为 BOX_TOKEN。 / The post says the desktop itself is free while model calls consume daily account credits; DeepSeek Harness cannot sign in, so users must create a personal key at https://box.simular.ai/access and set it as BOX_TOKEN.[^simular-box]
- 官方文档包括安装指南、MCP 服务器说明、故障排除以及 llms.txt 等页面，还提供服务器卡片、AI 目录和 API 目录等 .well-known 接口。 / Official docs include installation guide, MCP server explanation, troubleshooting, and llms.txt pages, plus .well-known interfaces such as server card, AI catalog, and API catalog.[^simular-box]

## 相关 / Related

- 原文：[链接](https://box.simular.ai/)。 / Original: [link](https://box.simular.ai/).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)

[^simular-box]: Simular Box: Cloud Linux Desktop for AI
