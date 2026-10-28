---
type: Source
title: 宝玉谈 Opus 5.5 后 Agent 剪辑像 Claude Code 刚出
title_en: Dotey on agent video editing after Opus 5.5 feeling like Claude Code’s launch
description: 宝玉：Opus 5.5 后 AI Agent 剪辑已能替初级剪辑师，类比 Claude Code 刚出；多数剪辑 Skill 可弃，界面宜极简预览，并整理 Alex / Sabba 对产量、市场与品味的争论。
description_en: Dotey says that after Opus 5.5, AI agent video editing can replace junior editors—like Claude Code at launch; most editing Skills can go, UIs should stay simple previews, and he synthesizes Alex vs Sabba on throughput, markets, and taste.
resource: https://x.com/dotey/status/2115282464935473225
tags: [opus-5.5, agentic-video-editing, skills, claude-code, bao-cut, dotey]
sources:
  - id: dotey-opus-55-agent-video-editing
    resource: https://x.com/dotey/status/2115282464935473225
    title: Dotey on agent video editing after Opus 5.5
    author: human:dotey
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:05:00+08:00
date: 2026-10-28
---

# 宝玉谈 Opus 5.5 后 Agent 剪辑像 Claude Code 刚出

*Dotey on agent video editing after Opus 5.5 feeling like Claude Code’s launch*

[@dotey](https://x.com/dotey) 称 Opus 5.5 发布后，AI Agent 剪辑视频已能替代初级剪辑师，体感接近 Claude Code 刚发布、模型开始自主完成复杂编程任务——且仍只是开端。Anthropic 专训 Coding 却意外覆盖更多问题，连剪辑也能用 HTML、JavaScript 剪视频、生成动画。他在模型前做的剪辑 Skill 与工具，发布后大半不再需要；同片实验里只给 ASR 与 TTS、不用任何 Skill，Opus 5.5 反而比有 Skill 更好。他赞同 Sabba「勿重造专业时间线、做好初剪再交给现有软件」，并把 BaoCut 时间线编辑器退居二线，默认只要简单预览与可标记改点——类比 Codex 不需要 VSCode 式编辑器。帖内还并读 Alex Cooper（广告剪辑团队）与 Sabba Keynejad（VEED）对 agentic 剪辑的经验与市场判断。[^dotey-opus-55-agent-video-editing] 原帖 <https://x.com/dotey/status/2115282464935473225>。

[@dotey](https://x.com/dotey) says that after Opus 5.5, AI agent video editing can already replace junior editors—feeling like Claude Code at launch, when models began finishing complex coding jobs on their own—and that this is only the start. Anthropic’s coding-focused training unexpectedly covered more problems, including editing and animating video via HTML and JavaScript. Most editing Skills and tools he built before the model became unnecessary; on the same clip with only ASR and TTS and no Skills, Opus 5.5 beat the Skill-using run. He agrees with Sabba’s “don’t rebuild a pro timeline—nail the rough cut, then hand off to existing software,” demoted BaoCut’s timeline editor, and defaults to a simple preview plus markers so the agent knows what to change—akin to Codex not needing a VSCode-like editor. The post also synthesizes Alex Cooper (ad editing team) and Sabba Keynejad (VEED) on agentic editing practice and market shape.[^dotey-opus-55-agent-video-editing] Post: <https://x.com/dotey/status/2115282464935473225>.

## 摘要 / Summary

- 能力节点：Opus 5.5 后 Agent 剪辑已能替初级剪辑师，类比 Claude Code 刚出；视频可当代码，用 HTML/CSS、SVG、浏览器渲染、OpenCV 等「写」出来。[^dotey-opus-55-agent-video-editing]
- Capability node: after Opus 5.5, agent editing can replace junior editors—like Claude Code at launch; video is treated as a coding problem via HTML/CSS, SVG, browser rendering, OpenCV, and peers.[^dotey-opus-55-agent-video-editing]
- 中间层萎缩：通用模型变强后，补剪辑能力的 Skill / MCP / 插件层被吃掉一大块；宝玉自测无 Skill 优于有 Skill。[^dotey-opus-55-agent-video-editing]
- Middleware shrinks: as the general model strengthens, Skill / MCP / plugin layers that patched editing ability get eaten; Dotey’s own no-Skill run beat the Skill run.[^dotey-opus-55-agent-video-editing]
- 界面：勿重造专业 NLE 时间线；Agent 侧编辑器越简单越好——预览、标记、把初剪交给专业软件；Codex 不需要 VSCode 式编辑器同理。[^dotey-opus-55-agent-video-editing]
- UI: don’t rebuild a pro NLE timeline; agent-facing editors should stay simple—preview, markers, hand rough cuts to pro tools; same logic as Codex not needing a VSCode-like editor.[^dotey-opus-55-agent-video-editing]
- Alex 做法：按风格拆小 Skill；用参考片与资深剪辑师重剪反馈训练；把隐性判断录屏口述进 Skill；人的价值转向品味，推广者搭环境、最强剪辑师教 AI。[^dotey-opus-55-agent-video-editing]
- Alex’s playbook: split small Skills by style; train with references and senior-editor re-cut feedback; record tacit judgment into Skills; human value shifts to taste—champions scaffold, best editors teach the AI.[^dotey-opus-55-agent-video-editing]
- Sabba 市场：一年内基础剪辑成本或从几美元降到几美分；不会一家通吃；差异化靠工作流、垂类与手机端；剪辑变易后瓶颈或转向拍摄。[^dotey-opus-55-agent-video-editing]
- Sabba’s market: basic edit cost may fall from dollars to cents within a year; no single winner; differentiate on workflow, verticals, and mobile; after editing gets easy, shooting may become the bottleneck.[^dotey-opus-55-agent-video-editing]
- 分歧：Alex 可全程在 Claude 对话里完成广告向短片；Sabba 认为时间轴与画面空间需要更复杂界面，并担忧品牌一致性——立场分别来自广告量产与卖工具。[^dotey-opus-55-agent-video-editing]
- Split: Alex finishes short ad cuts entirely in Claude chat; Sabba argues timeline and on-canvas spatial work need richer UI and worries about brand consistency—stances map to ad volume production versus selling tools.[^dotey-opus-55-agent-video-editing]

## 相关 / Related

- Topic: [智能体视频剪辑](../../topics/agentic-video-editing.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Topic: [开源工具装进 AI 助手做自然语言剪辑](../../topics/open-source-in-ai-assistant-editing.md)

[^dotey-opus-55-agent-video-editing]: Dotey on agent video editing after Opus 5.5
