---
type: Source
title: "baoyu-design：将 Claude Artifact 类型带到本地智能体的技能集合"
title_en: "baoyu-design: Skills Bringing Claude Artifact Types to Local Agents"
description: "一个 GitHub 仓库提供 7 个技能，让本地编程智能体能创建可编辑的幻灯片、设计画布、设计系统、数据仪表板和动态影片，并在本地编辑器中协作。"
description_en: "A GitHub repo providing 7 skills that let local coding agents create editable slide decks, design canvases, design systems, data dashboards, and motion films, with local editors for collaboration."
resource: https://github.com/JimLiu/baoyu-design
tags: [agents, design, local-first, skills, collaboration]
sources:
  - id: baoyu-design-local-agent-skills
    resource: https://github.com/JimLiu/baoyu-design
    title: "baoyu-design: Skills Bringing Claude Artifact Types to Local Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T20:02:51+08:00
---

# baoyu-design：将 Claude Artifact 类型带到本地智能体的技能集合

*baoyu-design: Skills Bringing Claude Artifact Types to Local Agents*

帖文称 baoyu-design 是一个将 claude.ai 的 Artifact 类型（幻灯片、设计画布、设计系统、数据仪表板、动态影片）移植到本地智能体的技能集合。它包含 7 个技能：claude-slides、claude-design、claude-design-system、claude-dashboard、claude-motion、motion-director 和 dataviz。每个技能将制品写入本地文件夹，并启动本地服务器提供编辑器，支持实时预览、导出（PDF、HTML、PPTX、MP4 等）、局域网共享协作（编辑者/评论者/查看者角色）、评论系统、版本历史与冲突合并。无需网站、订阅或上传，所有制品留在本地仓库。原版 baoyu-design 技能已归档。[^baoyu-design-local-agent-skills]

The post describes baoyu-design as a skill set that brings claude.ai's Artifact types—slide decks, design canvases, design systems, data dashboards, and motion films—to local agents like Cursor, Claude Code, and Claude Desktop. It includes 7 skills: claude-slides, claude-design, claude-design-system, claude-dashboard, claude-motion, motion-director, and dataviz. Each skill writes artifacts to a local folder and serves a local editor with live preview, export (PDF, HTML, PPTX, MP4, etc.), LAN sharing with role-based access (editor/commenter/viewer), commenting, version history, and conflict merging. No website, subscription, or upload required; all artifacts stay in the local repo. The original baoyu-design skill has been archived.[^baoyu-design-local-agent-skills]

## 摘要 / Summary

- 提供 7 个技能：claude-slides、claude-design、claude-design-system、claude-dashboard、claude-motion、motion-director、dataviz / Provides 7 skills: claude-slides, claude-design, claude-design-system, claude-dashboard, claude-motion, motion-director, dataviz[^baoyu-design-local-agent-skills]
- 每个技能在本地文件夹写入制品文件并启动本地编辑器服务器，支持实时预览与多格式导出 / Each skill writes artifact files to a local folder and starts a local editor server with live preview and multi-format export[^baoyu-design-local-agent-skills]
- 支持局域网共享协作：编辑者/评论者/查看者三角色，评论存入本地 comments.json，版本历史含冲突合并与恢复 / Supports LAN sharing collaboration: editor/commenter/viewer roles, comments stored in local comments.json, version history with conflict merge and restore[^baoyu-design-local-agent-skills]
- 无需网站、订阅或上传步骤，所有制品保留在本地仓库，原版 baoyu-design 技能已归档至 archive/baoyu-design/ / No website, subscription, or upload required; all artifacts stay in local repo; original baoyu-design skill archived to archive/baoyu-design/[^baoyu-design-local-agent-skills]
- motion-director 负责影片导演：寻找切入点、撰写旁白、配音、按字幕计时场景、检查帧画面，需配合 claude-motion 使用 / motion-director directs films: finds the point, writes narration, voices it, times scenes to words, checks frames; requires claude-motion[^baoyu-design-local-agent-skills]
- dataviz 技能为任何媒介提供更好的图表指导：选型、配色、标记、图例、工具提示，并附带调色板验证脚本 / dataviz skill provides better chart guidance for any medium: chart selection, colors, marks, legends, tooltips, with a palette validator script[^baoyu-design-local-agent-skills]

## 相关 / Related

- 原文：[链接](https://github.com/JimLiu/baoyu-design)。 / Original: [link](https://github.com/JimLiu/baoyu-design).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [用 Skills 组合复刻原生感 App / Compose Skills to recreate native-feel apps](../../topics/skills-stack-native-app-recreation.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)

[^baoyu-design-local-agent-skills]: baoyu-design: Skills Bringing Claude Artifact Types to Local Agents
