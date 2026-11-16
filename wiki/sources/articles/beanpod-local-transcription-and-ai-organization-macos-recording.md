---
type: Source
title: "豆仓 BeanPod：本地转写与 AI 整理的 macOS 录音助手"
title_en: "BeanPod: Local Transcription and AI Organization macOS Recording Assistant"
description: "一款原生 macOS 开源应用，用于管理 Anker 录音豆，在本机转写录音并生成纪要、待办与知识库问答。"
description_en: "A native open-source macOS app for managing Anker recording beans, transcribing recordings locally and generating summaries, todos, and knowledge-base Q&A."
resource: https://github.com/andyhuo520/beanpod
tags: [macos, recording, transcription, ai-assistant, mcp, open-source]
sources:
  - id: beanpod-macos-recording-assistant
    resource: https://github.com/andyhuo520/beanpod
    title: "BeanPod: Local Transcription and AI Organization macOS Recording Assistant"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:06:35+08:00
---

# 豆仓 BeanPod：本地转写与 AI 整理的 macOS 录音助手

*BeanPod: Local Transcription and AI Organization macOS Recording Assistant*

豆仓（BeanPod）是一款面向 macOS 的原生开源 App，主打在电脑上管理 Anker 录音豆（soundcore D3200）及得到 AI 录音卡，把录音拉到本地并转成文字，再整理成纪要和待办，支持直接提问。文章称该项目个人出于学习、研究和测试目的开源，免费使用，不做商业用途，且转写在本机完成、录音不上传。即使没有录音硬件，也可用 Mac 自身录音、导入音频或贴播客、视频链接进行转写与整理。[^beanpod-macos-recording-assistant]

BeanPod is a native open-source macOS app for managing Anker recording beans (soundcore D3200) and GetSeed AI recording cards, pulling recordings locally for transcription and organizing them into summaries, todos, and Q&A. The article states it is an open-source personal project for learning, research, and testing, free to use without commercial purposes, with local transcription and no recording uploads. Even without recording hardware, users can record via Mac, import audio, or paste podcast/video links for transcription and organization.[^beanpod-macos-recording-assistant]

## 摘要 / Summary

- 支持连接 Anker 录音豆（D3200）与得到 AI 录音卡（GSC10），可下载录音并自动解密为通用 .ogg，蓝牙或 Wi‑Fi 同步。[^beanpod-macos-recording-assistant]
- Supports connecting Anker recording beans (D3200) and GetSeed AI recording cards (GSC10), downloading recordings and auto-decrypting to universal .ogg, syncing via Bluetooth or Wi‑Fi.[^beanpod-macos-recording-assistant]
- 默认使用 Qwen3‑ASR 0.6B 经 llama.cpp 在本机转写，未装模型时可回退系统语音识别，也可接入兼容 OpenAI /audio/transcriptions 的云端转写服务。[^beanpod-macos-recording-assistant]
- Defaults to local transcription via Qwen3‑ASR 0.6B with llama.cpp, falls back to system speech recognition if no model is installed, and supports cloud transcription services compatible with OpenAI /audio/transcriptions.[^beanpod-macos-recording-assistant]
- 可自动判断会议、访谈、销售等场景并生成标题、摘要、待办、人物，支持本机 Qwen3‑4B 或 Ollama/LM Studio，以及小米 MiMo、DeepSeek、通义千问等云端模型。[^beanpod-macos-recording-assistant]
- Can auto-detect scenarios such as meetings, interviews, and sales, and generate titles, summaries, todos, and characters; supports local Qwen3‑4B or Ollama/LM Studio, and cloud models including Xiaomi MiMo, DeepSeek, Qwen, Kimi, and others.[^beanpod-macos-recording-assistant]
- 内置 MCP 服务和命令行工具，可一键接入 Claude Code、Codex、Claude 桌面版、OpenClaw 等 AI 助手，也能在微信通过 OpenClaw 查询录音和待办。[^beanpod-macos-recording-assistant]
- Built-in MCP server and CLI tool allow one-click connection to AI assistants such as Claude Code, Codex, Claude Desktop, and OpenClaw; recordings and todos can also be queried via WeChat through OpenClaw.[^beanpod-macos-recording-assistant]
- 需要 macOS 26，首次打开需授权蓝牙、麦克风、屏幕与系统录音、辅助功能等权限，建议 Apple 芯片以获得更快的本机转写和整理速度。[^beanpod-macos-recording-assistant]
- Requires macOS 26; first launch requires Bluetooth, microphone, screen & system recording, and accessibility permissions; Apple Silicon is recommended for faster local transcription and organization.[^beanpod-macos-recording-assistant]

## 相关 / Related

- 原文：[链接](https://github.com/andyhuo520/beanpod)。 / Original: [link](https://github.com/andyhuo520/beanpod).
- Topic: [AI 辅助剪藏与媒体笔记 / AI-assisted clipping and media notes](../../topics/ai-assisted-clipping-and-notes.md)
- Topic: [播客 AI 精细转写精读 / Podcast AI fine-transcription close reads](../../topics/podcast-ai-fine-transcription-close-reads.md)
- Topic: [语音输入的口头转述与文书整理 / Oral transcript vs document polish in voice input](../../topics/voice-input-oral-vs-document-for-agents.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)

[^beanpod-macos-recording-assistant]: BeanPod: Local Transcription and AI Organization macOS Recording Assistant
