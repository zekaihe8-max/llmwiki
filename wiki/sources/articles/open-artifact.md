---
type: Source
title: "开放工件（Open Artifact）"
title_en: "Open Artifact"
description: "一个面向编程 Agent 的开放、与模型无关的本地工件格式，让 Agent 生成可打开、可编辑、可评论的幻灯片、设计、表格等工件。"
description_en: "An open, model-agnostic local artifact format for coding agents that lets agents produce openable, editable, commentable artifacts such as slides, designs, and spreadsheets."
resource: https://github.com/JimLiu/open-artifact
tags: [agents, open-standard, local-daemon, mcp, artifact]
sources:
  - id: open-artifact
    resource: https://github.com/JimLiu/open-artifact
    title: "Open Artifact"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-21T19:52:46+08:00
---

# 开放工件（Open Artifact）

*Open Artifact*

「Open Artifact」是 JimLiu 在 GitHub 上的开源项目，原名 baoyu-design。它把 claude.ai 风格的 Artifact 重建为与 Agent 应用无关的开放格式：本地运行一个守护进程和页面框架，通过 /open-artifact 技能让编程 Agent 写出普通文件夹，用户在本地编辑器里修改标题、移动便签、留言并导出，再通过“发送给 Agent”把评论带回会话。项目支持幻灯片、设计、设计系统、白板、表格、数据看板、文档和动画八类工件，并为 Claude Code、Codex、Cursor、GitHub Copilot、Antigravity、ChatGPT 网页版及 DeepSeek Harness 提供插件，全部在本机运行，无需账号或上传。[^open-artifact]

"Open Artifact" is JimLiu's open-source project on GitHub, formerly baoyu-design. It rebuilds claude.ai-style Artifacts as an open, agent-agnostic format: a local daemon and page frame, with the /open-artifact skill letting coding agents write plain folders of files. Users edit titles, move sticky notes, comment, and export in a local editor, then "Send to agent" returns comments to the agent session. It supports eight artifact types—slides, design, design system, whiteboard, sheets, data, docs, and motion—and provides plugins for Claude Code, Codex, Cursor, GitHub Copilot, Antigravity, ChatGPT web, and DeepSeek Harness, running entirely on the local machine with no account or upload required.[^open-artifact]

## 摘要 / Summary

- 项目原名 baoyu-design，现重建为开放、与 Agent 无关的工件格式，核心为一个本地守护进程、一个页面框架和一个 /open-artifact 技能。[^open-artifact]
- Formerly baoyu-design, now rebuilt as an open, agent-agnostic artifact format centered on a local daemon, one page frame, and the /open-artifact skill.[^open-artifact]
- 支持幻灯片、设计、设计系统、白板、表格、数据、文档和动画共八种工件类型，每类均为自包含技能，包含 SKILL.md、文件格式说明和构建后的编辑器。[^open-artifact]
- Supports eight artifact types—slides, design, design system, whiteboard, sheets, data, docs, and motion—each a self-contained skill with SKILL.md, format reference, and built editors.[^open-artifact]
- 可作为 Claude Code、Codex、Cursor、GitHub Copilot、Antigravity、ChatGPT 网页版及 DeepSeek Harness 的插件安装，也可作为任意 Agent 的技能或单独类型运行。[^open-artifact]
- Installable as plugins for Claude Code, Codex, Cursor, GitHub Copilot, Antigravity, ChatGPT web, and DeepSeek Harness, or as a skill for any agent and per-type standalone.[^open-artifact]
- 所有内容在本机运行，无需账号、上传或特定模型厂商；Agent 通过 Artifact、ArtifactData、ArtifactComments 等 MCP 工具操作，评论可发回会话。[^open-artifact]
- Everything runs locally with no account, upload, or specific model vendor; agents use MCP tools such as Artifact, ArtifactData, and ArtifactComments, and comments can be sent back to the session.[^open-artifact]
- 仓库包含 artifact-types、skills/open-artifact、plugins 以及 daemon、shell、protocol、runtime 等包，支持从源码构建、发布 npm 包并附带端到端测试。[^open-artifact]
- The repository includes artifact-types, skills/open-artifact, plugins, and packages such as daemon, shell, protocol, and runtime, supporting source builds, npm releases, and end-to-end tests.[^open-artifact]

## 相关 / Related

- 原文：[链接](https://github.com/JimLiu/open-artifact)。 / Original: [link](https://github.com/JimLiu/open-artifact).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [Agent 对话内问题反馈 / In-conversation agent bug feedback](../../topics/agent-in-chat-bug-feedback.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^open-artifact]: Open Artifact
