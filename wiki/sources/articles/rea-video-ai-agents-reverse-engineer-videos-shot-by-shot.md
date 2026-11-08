---
type: Source
title: "rea-video：AI 智能体逐镜反向工程视频"
title_en: "rea-video: AI agents reverse-engineer videos shot by shot"
description: "rea-video 是面向 AI 智能体的开源视频分析工具，判断每个镜头的制作方式并给出拍摄或重制方案。"
description_en: "rea-video is an open-source agent-native video analysis tool that judges how each shot was made and provides shooting or remake plans."
resource: https://github.com/JuneYaooo/rea-video
tags: [agents, video-analysis, open-source, ai-agents]
sources:
  - id: rea-video
    resource: https://github.com/JuneYaooo/rea-video
    title: "rea-video: AI agents reverse-engineer videos shot by shot"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:08:50+08:00
---

# rea-video：AI 智能体逐镜反向工程视频

*rea-video: AI agents reverse-engineer videos shot by shot*

GitHub 仓库 rea-video 由 JuneYaooo 开发，定位为面向 AI 智能体的视频反向工程工具。它可把视频切分为镜头，判断内容是实拍、AI 生成、虚拟人、3D/动画、代码/模板、录屏还是混合剪辑，并输出每镜头的证据、提示词、摄影灯光说明与重制计划。工具需 ffmpeg 与 Python 3.10+，可手动安装，也可由 Claude Code、Codex 等智能体直接调用；接入 Gemini 或 Doubao 后可提升判断准确度。文档给出了不同数据集上的准确率，并与 Hypit 等一键重制工具做了对比。[^rea-video]

GitHub repository rea-video, developed by JuneYaooo, is positioned as a video reverse-engineering tool for AI agents. It splits videos into shots, judges whether content is live-action, AI-generated, avatar, 3D/animation, code/template, screen recording, or mixed edit, and outputs per-shot evidence, prompts, camera and lighting notes, and remake plans. The tool requires ffmpeg and Python 3.10+, can be installed manually or invoked directly by agents such as Claude Code and Codex; connecting Gemini or Doubao improves judgment accuracy. The documentation reports accuracy across datasets and compares it with one-click remake tools such as Hypit.[^rea-video]

## 摘要 / Summary

- rea-video 可将视频切分为镜头，并逐段判断是实拍、AI 生成、虚拟人、3D/动画、代码/模板、录屏还是混合剪辑。 / rea-video splits videos into shots and classifies each segment as live-action, AI-generated, avatar, 3D/animation, code/template, screen recording, or mixed edit.[^rea-video]
- 仅使用离线工具时，调优集上的制作方式判断准确率为 98.3%，留出集为 99.6% / 98.9%；加入智能体视觉复核后，重编码微信视频的准确率达 100%。 / With offline tools only, accuracy on the tuning set is 98.3%, and holdout accuracy is 99.6% / 98.9%; with agent visual review, accuracy on re-encoded WeChat videos reaches 100%.[^rea-video]
- 支持接入 Gemini 或 Doubao 等视频能力模型，以提升实拍/AI/3D 判断，并为每个镜头生成反向工程提示词。 / Supports connecting video-capable models such as Gemini or Doubao to improve live/AI/3D judgments and generate reverse-engineered prompts per shot.[^rea-video]
- 重制方案可通过 capsule-cinema 生成新版本，保留原镜头、运动、节奏与转场，仅替换选定元素。 / Remake recipes via capsule-cinema generate new versions preserving original shots, motion, pacing and transitions while swapping selected elements.[^rea-video]
- 运行需要 ffmpeg 和 Python 3.10+，可手动安装，也可由 Claude Code、Codex 等智能体直接安装 CLI 并运行整个分析流程。 / Requires ffmpeg and Python 3.10+; can be installed manually or directly by agents such as Claude Code and Codex to run the full analysis pipeline.[^rea-video]

## 相关 / Related

- 原文：[链接](https://github.com/JuneYaooo/rea-video)。 / Original: [link](https://github.com/JuneYaooo/rea-video).
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [开源工具装进 AI 助手做自然语言剪辑 / Open-source tools in AI assistants for natural-language editing](../../topics/open-source-in-ai-assistant-editing.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^rea-video]: rea-video: AI agents reverse-engineer videos shot by shot
