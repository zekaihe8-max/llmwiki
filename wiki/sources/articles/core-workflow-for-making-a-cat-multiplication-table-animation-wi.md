---
type: Source
title: "用 gflow-cli 制作小猫讲乘法口诀动画的核心流程"
title_en: "Core workflow for making a cat multiplication-table animation with gflow-cli"
description: "帖文介绍用 gflow-cli 先锁首帧、再图生视频、最后用 Edge TTS 修音拼接的小猫乘法口诀动画制作流程。"
description_en: "The post introduces a gflow-cli workflow for a cat multiplication-table animation: lock the first frame, generate video from image, then dub and splice with Edge TTS."
resource: https://x.com/0xlangeai/status/2125538291219132686
tags: [gflow-cli, ai-video, workflow, edge-tts, google-flow]
sources:
  - id: gflow-cli-cat-multiplication-animation
    resource: https://x.com/0xlangeai/status/2125538291219132686
    title: "Core workflow for making a cat multiplication-table animation with gflow-cli"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:38:54+08:00
---

# 用 gflow-cli 制作小猫讲乘法口诀动画的核心流程

*Core workflow for making a cat multiplication-table animation with gflow-cli*

帖文称，用 gflow-cli 制作小猫讲乘法口诀动画的核心流程是：先用 nano-pro（image t2i）抽第 1 幕锚点图，后续分镜用 image i2i --ref 引用第 1 幕且只换黑板算式和小鱼干，再用 veo-fast 跑 video i2v，最后用免费 Edge TTS 合成标准童声并用 ffmpeg 对齐混音拼接。[^gflow-cli-cat-multiplication-animation]

The post says the core gflow-cli workflow for a cat multiplication-table animation is: draw the first-scene anchor image with nano-pro (image t2i), reference the first scene for all subsequent shots via image i2i --ref while changing only the blackboard equations and dried fish, run video i2v with veo-fast, then synthesize standard child voice with free Edge TTS and align/mix/splice with ffmpeg.[^gflow-cli-cat-multiplication-animation]

## 摘要 / Summary

- 安装与登录：使用 `uv tool install gflow-cli`，在浏览器登录 Google Flow 并复用账号积分。[^gflow-cli-cat-multiplication-animation]
- Install and log in: install gflow-cli via `uv tool install`, log in to Google Flow in the browser and reuse account credits.[^gflow-cli-cat-multiplication-animation]
- 锁首帧：先用 nano-pro（image t2i）抽第 1 幕锚点图，后续所有分镜用 image i2i --ref 引用第 1 幕，只换黑板算式和小鱼干，核对无错字再进下一步。[^gflow-cli-cat-multiplication-animation]
- Lock the first frame: use nano-pro (image t2i) to draw the first-scene anchor image; all subsequent shots use image i2i --ref referencing the first scene, changing only the blackboard equations and dried fish, and verify no typos before proceeding.[^gflow-cli-cat-multiplication-animation]
- 转视频：用 veo-fast 跑 video i2v（--initial-frame 传本地图片路径），提示词必须写死「黑板文字与简笔画保持完全静止清晰」，且不要写 childlike voice 以免触发音频审核拦截。[^gflow-cli-cat-multiplication-animation]
- Convert to video: run video i2v with veo-fast (--initial-frame passes the local image path); the prompt must hardcode "blackboard text and simple drawings remain completely still and clear" and must not include "childlike voice" to avoid triggering audio review blocking.[^gflow-cli-cat-multiplication-animation]
- 修音拼接：Veo 原生中文偶发偏音，用免费 Edge TTS 合成标准童声，按每段时长用 ffmpeg 对齐混音拼接成片。[^gflow-cli-cat-multiplication-animation]
- Voice dubbing and splicing: Veo's native Chinese occasionally mispronounces, so use free Edge TTS to synthesize standard child voice and use ffmpeg to align, mix, and splice into the final video by segment duration.[^gflow-cli-cat-multiplication-animation]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2125538291219132686)。 / Original: [link](https://x.com/0xlangeai/status/2125538291219132686).
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [开源工具装进 AI 助手做自然语言剪辑 / Open-source tools in AI assistants for natural-language editing](../../topics/open-source-in-ai-assistant-editing.md)
- Topic: [AI 辅助剪藏与媒体笔记 / AI-assisted clipping and media notes](../../topics/ai-assisted-clipping-and-notes.md)

[^gflow-cli-cat-multiplication-animation]: Core workflow for making a cat multiplication-table animation with gflow-cli
