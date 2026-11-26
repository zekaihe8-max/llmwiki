---
type: Source
title: "Hex 本地语音听写工具"
title_en: "Hex Local Voice Dictation Tool"
description: "一款在 Mac、Windows 和 Linux 上运行的本地语音听写工具，按住快捷键说话后自动将转写文字粘贴到当前应用。"
description_en: "A local voice dictation tool for Mac, Windows and Linux that holds a shortcut to speak and pastes transcribed text into the current app."
resource: https://github.com/anomalyco/hex
tags: [voice-dictation, local-ai, speech-to-text, cross-platform]
sources:
  - id: hex-local-voice-dictation
    resource: https://github.com/anomalyco/hex
    title: "Hex Local Voice Dictation Tool"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:34:29+08:00
---

# Hex 本地语音听写工具

*Hex Local Voice Dictation Tool*

「Hex」是一款面向 Mac、Windows 与 Linux 的本地语音听写工具，用户按住快捷键说话、松手后即可将转写文字粘贴到当前所在应用；首次运行会下载语音模型，之后数据不离开本机，并支持历史记录、输出处理步骤、词汇表、标注录屏以及命令行转录等功能。[^hex-local-voice-dictation]

"Hex" is a local voice dictation tool for Mac, Windows and Linux: hold a shortcut to speak, release to paste transcribed text into the current app; the first run downloads a speech model and afterward nothing leaves the machine, with support for history, output processing steps, vocabulary, annotate screen recording, and CLI transcription.[^hex-local-voice-dictation]

## 摘要 / Summary

- 按住快捷键说话、松手即粘贴；亦可设置为轻点模式，按下开始与结束。[^hex-local-voice-dictation]
- Hold the shortcut to speak, release to paste; or set Shortcut mode to Tap to start and stop with a press.[^hex-local-voice-dictation]
- 首次运行下载语音模型，之后转写在本地设备上运行，数据不离开本机。[^hex-local-voice-dictation]
- The first run downloads a speech model; after that nothing leaves your machine.[^hex-local-voice-dictation]
- 历史记录默认保留 7 天并可搜索；输出可按应用或网站配置词替换、内置清理、自有脚本及可选 OpenCode 改写等步骤。[^hex-local-voice-dictation]
- History keeps dictations searchable for 7 days by default; Output runs steps such as word replacements, cleanups, scripts, and optional OpenCode rewrite, with different steps per app or website.[^hex-local-voice-dictation]
- 支持 Parakeet、Cohere Transcribe、Whisper、Qwen3-ASR、SenseVoice、Nemotron、Granite 等多种语音模型，用户亦可添加 GGUF 模型。[^hex-local-voice-dictation]
- Settings offers models including Parakeet, Cohere Transcribe, Whisper large-v3-turbo, Qwen3-ASR, SenseVoice Small, Nemotron 3.5 ASR, Granite Speech 5.0, and one-language models; users can add a GGUF model.[^hex-local-voice-dictation]
- 命令行 `hex transcribe` 可转录音频与视频文件；运行中的应用可通过 `hex status`、`hex dictation`、`hex settings` 控制。[^hex-local-voice-dictation]
- The CLI `hex transcribe` prints a recording's transcript and supports WAV, AIFF, CAF, FLAC, MP3, Ogg, WebM, and MP4/M4A/MOV; `hex status`, `hex dictation`, and `hex settings` control the running app.[^hex-local-voice-dictation]
- Annotate 在 macOS、Linux 和 Windows 上边画边说话时录屏；Meetings 为 macOS 实验室功能，可录制通话并生成转录稿。[^hex-local-voice-dictation]
- Annotate records the screen while you draw and talk on macOS, Linux and Windows; Meetings is a macOS lab that records a call and writes the transcript.[^hex-local-voice-dictation]

## 相关 / Related

- 原文：[链接](https://github.com/anomalyco/hex)。 / Original: [link](https://github.com/anomalyco/hex).
- Topic: [语音输入的口头转述与文书整理 / Oral transcript vs document polish in voice input](../../topics/voice-input-oral-vs-document-for-agents.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [启动器快捷键 AI 优于打开 Agent / Launcher shortcut AI over opening Agent](../../topics/launcher-shortcut-ai-over-agent.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)

[^hex-local-voice-dictation]: Hex Local Voice Dictation Tool
