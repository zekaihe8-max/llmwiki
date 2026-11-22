---
type: Source
title: "Antigravity Flow：Google Flow AI 电影制作插件"
title_en: "Antigravity Flow: Google Flow AI Filmmaking Plugin"
description: "Antigravity Flow 是一款将 Google Flow 封装为模块化 AI 电影制作与创意工具工作流的 Antigravity 插件，无需外部 MCP 服务器或本地 Playwright 守护进程。"
description_en: "Antigravity Flow is an Antigravity plugin that packages Google Flow as a modular AI filmmaking and creative-tools workflow, requiring no external MCP servers or local Playwright daemons."
resource: https://github.com/wezzard/antigravity-flow
tags: [antigravity, google-flow, ai-filmmaking, browser-agent, plugin]
sources:
  - id: antigravity-flow
    resource: https://github.com/wezzard/antigravity-flow
    title: "Antigravity Flow: Google Flow AI Filmmaking Plugin"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:31:15+08:00
---

# Antigravity Flow：Google Flow AI 电影制作插件

*Antigravity Flow: Google Flow AI Filmmaking Plugin*

「帖文称」Antigravity Flow 是一款 Antigravity 插件，将 Google Flow（flow.google.com）封装为模块化 AI 电影制作和创意工具工作流，依赖 Antigravity 内置的浏览器子代理，无需外部 MCP 服务器或本地 Playwright 守护进程。插件包含 flow-director、flow-ingredients、flow-generate、flow-scene-builder、flow-tools 和 flow-sync 等技能，并支持检查点模式与全自动模式，在 Google 登录、验证码或配额付费墙处强制暂停。[^antigravity-flow]

The post says Antigravity Flow is an Antigravity plugin that packages Google Flow (flow.google.com) as a modular AI filmmaking and creative-tools workflow, relying on Antigravity's built-in browser subagent with no external MCP servers or local Playwright daemons required. It includes skills such as flow-director, flow-ingredients, flow-generate, flow-scene-builder, flow-tools, and flow-sync, and supports Checkpoint Mode and Full-Auto Mode, with hard safety pauses for Google sign-in, CAPTCHA, and quota/payment walls.[^antigravity-flow]

## 摘要 / Summary

- 插件可通过 `agy plugin install https://github.com/WeZZard/antigravity-flow` 从 GitHub 安装，也可通过本地符号链接进行开发。[^antigravity-flow]
- The plugin can be installed from GitHub via `agy plugin install https://github.com/WeZZard/antigravity-flow` or developed locally via symlink.[^antigravity-flow]
- 内置六项技能，包括分镜创建、素材管理、视频生成、场景编排、探索工具和只读审计（flow-sync）。[^antigravity-flow]
- It includes six built-in skills: storyboard creation, ingredient management, video generation, scene assembly, Explore tools, and a read-only audit skill (flow-sync).[^antigravity-flow]
- 默认使用检查点模式，在点击开始生成或选择 4K 超清前报告确切信用点数成本；全自动模式可通过提示词触发，但在登录、验证码或付费墙处仍会暂停。[^antigravity-flow]
- Checkpoint Mode is default and reports exact credit cost before generation or 4K upscale; Full-Auto Mode can be triggered by prompt cues but still pauses for sign-in, CAPTCHA, or payment intervention.[^antigravity-flow]
- 插件直接打开 https://flow.google.com/，并通过 Antigravity 内置浏览器子代理（模型：flash）复用同一标签页/会话执行界面操作。[^antigravity-flow]
- It opens https://flow.google.com/ directly and delegates Flow UI operations to Antigravity's built-in browser subagent (model: flash), reusing the same tab/session.[^antigravity-flow]
- 支持本地文件暂存（browser_sandbox/uploads/ 和 browser_sandbox/references/），并针对 Google 登录、验证码及配额/付费墙设置强制安全暂停。[^antigravity-flow]
- It supports local file staging under browser_sandbox/uploads/ and browser_sandbox/references/, and enforces hard safety pauses for Google sign-in, CAPTCHA, and quota/payment walls.[^antigravity-flow]

## 相关 / Related

- 原文：[链接](https://github.com/wezzard/antigravity-flow)。 / Original: [link](https://github.com/wezzard/antigravity-flow).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)

[^antigravity-flow]: Antigravity Flow: Google Flow AI Filmmaking Plugin
