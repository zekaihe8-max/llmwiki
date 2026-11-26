---
type: Source
title: "谷歌 Neon 加 MAGI-2：AI 代码与视频双向生成工作流（附 Skill）"
title_en: "Google Neon + MAGI-2: Bidirectional AI Code and Video Generation Workflow (with Skill)"
description: "结合 Google Neon 与 MAGI-2 视频模型，通过 LibTV MCP 打通 Video 2 Code 与 Code 2 Video 双向内容生产流程，并打包成可复用的 Agent Skill。"
description_en: "Combines Google Neon with the MAGI-2 video model via LibTV MCP to unlock bidirectional Video-to-Code and Code-to-Video content production workflows, packaged as a reusable Agent Skill."
resource: https://x.com/op7418/status/2125531062541635755
tags: [agents, video-generation, code-generation, mcp, skill]
sources:
  - id: google-neon-magi2-video-code-workflow
    resource: https://x.com/op7418/status/2125531062541635755
    title: "Google Neon + MAGI-2: Bidirectional AI Code and Video Generation Workflow (with Skill)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:24:10+08:00
---

# 谷歌 Neon 加 MAGI-2：AI 代码与视频双向生成工作流（附 Skill）

*Google Neon + MAGI-2: Bidirectional AI Code and Video Generation Workflow (with Skill)*

「帖文称」歸藏在 LibTV 上测试 MAGI-2 视频模型，并将其与 Google Neon 结合，跑通 Video 2 Code 与 Code 2 Video 两套内容生产流程，最后将提示词优化与 MCP 适配打包为可复用的 Skill。[^google-neon-magi2-video-code-workflow]

The post says Guizang tested the MAGI-2 video model on LibTV and combined it with Google Neon to unlock Video-to-Code and Code-to-Video content production workflows, finally packaging prompt optimization and MCP adaptation into a reusable Skill.[^google-neon-magi2-video-code-workflow]

## 摘要 / Summary

- MAGI-2 支持 30 秒 1080P 视频生成、多图多参混合参考，并可接受长达 20,000 字的超长提示词；限时特惠价为 5 分/秒，5 秒视频约两毛五。[^google-neon-magi2-video-code-workflow]
- MAGI-2 supports 30-second 1080P video generation, multi-image and multi-reference mixing, and prompts up to 20,000 Chinese characters; limited-time price is 0.5 fen per second, about 2.5 fen for a 5-second video.[^google-neon-magi2-video-code-workflow]
- Video to Code 流程中，先用 MAGI-2 生成含图形、飘带与转场的视频，再让 Neon 基于视频写出一镜到底的视差滚动网页，仅需微调字体与动画闪烁。[^google-neon-magi2-video-code-workflow]
- In the Video-to-Code flow, a MAGI-2 video with graphics, ribbons and transitions is fed to Neon to write a one-shot parallax-scroll webpage, needing only font and animation-flicker tweaks.[^google-neon-magi2-video-code-workflow]
- Code to Video 流程中，Neon 先写代码生成 2D 横版 Boss 战灰盒视频（跳跃、弹反、顿帧、特写、连招），再由 LibTV 全能参考重绘为水墨风格游戏打斗视频。[^google-neon-magi2-video-code-workflow]
- In the Code-to-Video flow, Neon first writes code to generate a 2D side-scrolling boss-fight gray-box video (jumps, parries, freeze frames, closeups, combos), then LibTV full-reference re-renders it as an ink-wash game fight video.[^google-neon-magi2-video-code-workflow]
- 作者将双向工作流与 MAGI-2 提示词优化打包为 Skill，并修复了 Antigravity 上 LibTV MCP 适配的小问题，代码托管于 github.com/op7418/guizang-magi2-skill。[^google-neon-magi2-video-code-workflow]
- The author packaged the bidirectional workflow and MAGI-2 prompt optimization into a Skill, fixed small LibTV MCP adaptation issues on Antigravity, and hosted the code at github.com/op7418/guizang-magi2-skill.[^google-neon-magi2-video-code-workflow]
- 文中提到的已知问题包括提示词润色有时有偏差，以及背景音乐与动作音效有时只能二选一，官方正在修复。[^google-neon-magi2-video-code-workflow]
- Known issues mentioned include occasional prompt-polishing deviation and background music/sound effects sometimes only outputting one of the two; the official team is fixing them.[^google-neon-magi2-video-code-workflow]

## 相关 / Related

- 原文：[链接](https://x.com/op7418/status/2125531062541635755)。 / Original: [link](https://x.com/op7418/status/2125531062541635755).
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^google-neon-magi2-video-code-workflow]: Google Neon + MAGI-2: Bidirectional AI Code and Video Generation Workflow (with Skill)
