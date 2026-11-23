---
type: Source
title: "DreamCoder：浏览器中的智能体平铺工作台"
title_en: "DreamCoder: Tiling Workspace for AI Agents in the Browser"
description: "在浏览器中运行的平铺窗口管理器，让数十个 AI 智能体在同一界面并行工作，支持键盘优先操作、事件图追踪、目标规划与子智能体分发。"
description_en: "A browser-based tiling window manager that runs dozens of AI agents in one interface, with keyboard-first navigation, event-graph tracing, objective planning, and sub-agent delegation."
resource: https://www.dreamcoder.ai/
tags: [agents, ide, tiling-wm, keyboard-driven, mcp, cross-platform]
sources:
  - id: dreamcoder-tiling-agent-workspace
    resource: https://www.dreamcoder.ai/
    title: "DreamCoder: Tiling Workspace for AI Agents in the Browser"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:18:44+08:00
---

# DreamCoder：浏览器中的智能体平铺工作台

*DreamCoder: Tiling Workspace for AI Agents in the Browser*

DreamCoder 是一款运行在本机、通过浏览器访问的 Web 应用，将每个 AI 智能体、终端、代码审查放入可平铺、分割、堆叠的面板中。它主打键盘优先（WASD 移动面板、Q/E 切换工作区、Alt+W 标记链接/表格/图片）、全保真渲染（LaTeX、Mermaid、Markdown）、事件图可视化追踪、嵌套目标规划、图片/文件独立面板查看、Agent Studio 自建智能体、后台子智能体并行工作、MCP 服务器即插即用，以及跨平台（macOS/Windows/Linux/Docker）与多端同步体验。[^dreamcoder-tiling-agent-workspace]

DreamCoder is a self-hosted web app that places every AI agent, terminal, and review in a tiling, splittable, stackable pane. It emphasizes keyboard-first control (WASD pane movement, Q/E workspace switching, Alt+W link/table/image tagging), full-fidelity rendering (LaTeX, Mermaid, Markdown), an event-graph for run tracing, nested objectives with checklists, per-pane image/file viewers, Agent Studio for custom agents, background sub-agents, plug-and-play MCP servers, and cross-platform (macOS/Windows/Linux/Docker) access from any browser.[^dreamcoder-tiling-agent-workspace]

## 摘要 / Summary

- 单窗口管理数十个智能体：每个智能体、终端、审查拥有独立面板，支持平铺、分割、堆叠、键盘/鼠标/触控混合操作。[^dreamcoder-tiling-agent-workspace]
- Dozens of agents in one window: each agent, terminal, and review gets its own pane with tiling, splitting, stacking, and mixed keyboard/mouse/touch control.[^dreamcoder-tiling-agent-workspace]
- 键盘优先交互：WASD 移动/交换/调整面板，Q/E 切换工作区，Alt+W 为链接/表格/按钮/图片分配字母快捷键。[^dreamcoder-tiling-agent-workspace]
- Keyboard-first interaction: WASD to move/swap/resize panes, Q/E to switch workspaces, Alt+W tags every link/table/button/image with a letter shortcut.[^dreamcoder-tiling-agent-workspace]
- 全保真渲染与事件图：聊天区实时渲染 LaTeX、Mermaid、Markdown；事件图将提示词、工具调用、结果、目标串成可缩放、可筛选的节点图。[^dreamcoder-tiling-agent-workspace]
- Full-fidelity rendering and event graph: live LaTeX, Mermaid, Markdown in chat; event graph links prompts, tool calls, results, and objectives into a zoomable, filterable node graph.[^dreamcoder-tiling-agent-workspace]
- 嵌套目标与子智能体：目标支持嵌套检查项、时间线、完成定义；可派发多个后台子智能体并行工作，汇总汇报回主智能体。[^dreamcoder-tiling-agent-workspace]
- Nested objectives and sub-agents: objectives carry nested checks, timelines, and definitions of done; spawn multiple background sub-agents that report back to the parent.[^dreamcoder-tiling-agent-workspace]
- Agent Studio 与 MCP 接入：可视化创建自定义智能体（授权工具、选模型、版本管理）；一行配置接入任意 MCP 服务器（OAuth/密钥/免登），自动把工具下发到指定项目。[^dreamcoder-tiling-agent-workspace]
- Agent Studio and MCP integration: visual custom-agent builder (grant tools, pick model, version drafts); one-line MCP server connect (OAuth/key/no-auth) with per-project tool exposure.[^dreamcoder-tiling-agent-workspace]
- 跨平台单文件分发与多端同步：提供 macOS ZIP、Windows 安装包、Linux .deb、Docker 镜像；同一实例在手机/平板/电脑浏览器无缝恢复布局。[^dreamcoder-tiling-agent-workspace]
- Cross-platform single-file distribution and multi-device sync: macOS ZIP, Windows installer, Linux .deb, Docker image; same instance resumes exact layout on phone, tablet, or desktop browsers.[^dreamcoder-tiling-agent-workspace]

## 相关 / Related

- 原文：[链接](https://www.dreamcoder.ai/)。 / Original: [link](https://www.dreamcoder.ai/).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)

[^dreamcoder-tiling-agent-workspace]: DreamCoder: Tiling Workspace for AI Agents in the Browser
