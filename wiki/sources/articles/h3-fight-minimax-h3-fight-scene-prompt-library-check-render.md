---
type: Source
title: "h3-fight：MiniMax H3 打戏提示词库 + 检查 + 出片"
title_en: "h3-fight: MiniMax H3 Fight Scene Prompt Library + Check + Render"
description: "一个用于 MiniMax H3 打戏提示词编写、自动检查和 ComfyUI 出片的开源库"
description_en: "An open-source library for writing, checking, and rendering MiniMax H3 fight scene prompts via ComfyUI"
resource: https://github.com/huangserva/h3-fight
tags: [minimax-h3, prompt-library, comfyui, ai-video, agent-skill]
sources:
  - id: h3-fight-minimax-h3-prompt-library
    resource: https://github.com/huangserva/h3-fight
    title: "h3-fight: MiniMax H3 Fight Scene Prompt Library + Check + Render"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T20:11:22+08:00
---

# h3-fight：MiniMax H3 打戏提示词库 + 检查 + 出片

*h3-fight: MiniMax H3 Fight Scene Prompt Library + Check + Render*

「h3-fight」是一个面向 MiniMax H3 的打戏提示词库，提供 188 个镜头块、六段式写法、检查与查重复工具，并支持接入 Claude Code 或 Codex 作为 Skill，以及在 ComfyUI 中一键出片。[^h3-fight-minimax-h3-prompt-library]

"h3-fight" is a fight-scene prompt library for MiniMax H3, offering 188 camera blocks, a six-segment writing method, checking and deduplication tools, and integration with Claude Code or Codex as a Skill, plus one-click rendering in ComfyUI.[^h3-fight-minimax-h3-prompt-library]

## 摘要 / Summary

- 库包含 188 个镜头块、词句零件、招式表和踩坑表，采用六段式写法，提供检查.py 与查重复.py 工具。[^h3-fight-minimax-h3-prompt-library]
- The library includes 188 camera blocks, phrase components, move tables, and pitfall tables, using a six-segment writing method, with check.py and deduplication tools.[^h3-fight-minimax-h3-prompt-library]
- 可作为 Claude Code 或 Codex 的 Skill 安装，也可独立使用 Python 3.8+ 编写提示词，无需显卡即可运行检查。[^h3-fight-minimax-h3-prompt-library]
- It can be installed as a Claude Code or Codex Skill, or used independently with Python 3.8+ to write prompts without a GPU for checking.[^h3-fight-minimax-h3-prompt-library]
- 出片流程需配合 ComfyUI（实测 0.34.0）及 MiniMax H3 主模型、文本编码器、视频/音频 VAE 和多个 LoRA，支持本地或 SSH 远程提交。[^h3-fight-minimax-h3-prompt-library]
- Rendering requires ComfyUI (tested v0.34.0) with MiniMax H3 models, text encoder, video/audio VAE, and multiple LoRAs, supporting local or SSH remote submission.[^h3-fight-minimax-h3-prompt-library]
- 实测配置为 RTX 4090 48GB 改装版配 123GB 内存，1664×928、243 帧（约 10 秒）一段提交到下载约需 6–8 分钟。[^h3-fight-minimax-h3-prompt-library]
- Tested configuration is an RTX 4090 48GB modified card with 123GB memory; a 1664×928, 243-frame (about 10 seconds) segment takes about 6–8 minutes from submission to download.[^h3-fight-minimax-h3-prompt-library]
- 代码采用 MIT 许可，提示词库与演示 GIF 采用 CC BY-NC 4.0，三个打斗 LoRA 不随仓库分发，需到作者主页下载。[^h3-fight-minimax-h3-prompt-library]
- Code is MIT licensed, prompt library and demo GIFs are CC BY-NC 4.0, and three fight LoRAs are not distributed with the repo and must be downloaded from the authors' pages.[^h3-fight-minimax-h3-prompt-library]

## 相关 / Related

- 原文：[链接](https://github.com/huangserva/h3-fight)。 / Original: [link](https://github.com/huangserva/h3-fight).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [先复用再编写 / Reuse before write](../../topics/reuse-before-write.md)

[^h3-fight-minimax-h3-prompt-library]: h3-fight: MiniMax H3 Fight Scene Prompt Library + Check + Render
