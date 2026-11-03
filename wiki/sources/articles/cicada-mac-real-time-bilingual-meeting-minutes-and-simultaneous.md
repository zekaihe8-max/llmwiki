---
type: Source
title: "知了 · Cicada：Mac 实时双语会议纪要与同声传译工具"
title_en: "Cicada (知了): Mac Real-time Bilingual Meeting Minutes and Simultaneous Interpretation Tool"
description: "一款仅在 Mac 上运行的开源实时会议工具，提供双语字幕、结构化纪要与同声传译，声音处理主要在本机完成。"
description_en: "An open-source Mac-only real-time meeting tool offering bilingual subtitles, structured minutes, and simultaneous interpretation, with audio processing done mostly on-device."
resource: https://github.com/wquguru/cicada
tags: [macos, transcription, meeting-notes, simultaneous-interpretation, open-source, privacy]
sources:
  - id: cicada-mac-bilingual-meeting-tool
    resource: https://github.com/wquguru/cicada
    title: "Cicada (知了): Mac Real-time Bilingual Meeting Minutes and Simultaneous Interpretation Tool"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:20:02+08:00
---

# 知了 · Cicada：Mac 实时双语会议纪要与同声传译工具

*Cicada (知了): Mac Real-time Bilingual Meeting Minutes and Simultaneous Interpretation Tool*

「GitHub 帖文」介绍了知了（Cicada），一款面向 Apple Silicon Mac 的开源实时会议助手。帖文称它可在 Zoom、飞书、腾讯会议、X Spaces 和 YouTube 直播等场景中提供双语字幕、结构化纪要与同声传译，声音采集、识别和录音均在本机完成，仅将识别出的文字发送到翻译和纪要生成服务。未填 Ling API key 时依赖 Apple 本机模型与 Google 翻译；填入 key 后可使用 Ling 和 Ming 模型，并支持声音克隆。项目采用 Apache-2.0 协议，需 macOS 26 或更新版本。[^cicada-mac-bilingual-meeting-tool]

The GitHub post introduces Cicada (知了), an open-source real-time meeting assistant for Apple Silicon Mac. The post claims it provides bilingual subtitles, structured minutes, and simultaneous interpretation for Zoom, Feishu, Tencent Meeting, X Spaces, and YouTube livestreams, with audio capture, recognition, and recording performed locally and only recognized text sent to translation and summarization services. Without a Ling API key it relies on Apple on-device models and Google Translate; with a key it can use Ling and Ming models and supports voice cloning. The project is licensed under Apache-2.0 and requires macOS 26 or later.[^cicada-mac-bilingual-meeting-tool]

## 摘要 / Summary

- 支持 Zoom、飞书、腾讯会议、X Spaces 和 YouTube 直播的实时双语字幕与结构化纪要。 / Supports real-time bilingual subtitles and structured minutes for Zoom, Feishu, Tencent Meeting, X Spaces, and YouTube livestreams.[^cicada-mac-bilingual-meeting-tool]
- 声音采集、语音识别和会议录音全部在本机完成，仅识别出的文字会离开电脑用于翻译与纪要生成。 / Audio capture, speech recognition, and meeting recording are performed entirely on-device; only recognized text leaves the computer for translation and minute generation.[^cicada-mac-bilingual-meeting-tool]
- 未填 Ling API key 时使用 Apple 本机模型与 Google 翻译，填入 key 后可使用 Ling Ling-3.1-flash 和 Ming 模型，并支持声音克隆。 / Without a Ling API key it uses Apple on-device models and Google Translate; with a key it can use Ling Ling-3.1-flash and Ming models and supports voice cloning.[^cicada-mac-bilingual-meeting-tool]
- 需 macOS 26 或更新版本及 Apple 芯片 Mac，界面支持中文、英文、日文和韩文，采用 Apache-2.0 开源协议。 / Requires macOS 26 or later and an Apple Silicon Mac; interface supports Chinese, English, Japanese, and Korean; licensed under Apache-2.0.[^cicada-mac-bilingual-meeting-tool]
- 同声传译时按住右侧 ⌥ 键说话，对方可在会议软件中直接听到翻译后的语音，系统麦克风会切换到虚拟驱动 BlackHole 2ch。 / For simultaneous interpretation, hold the right ⌥ key to speak, and others in the meeting software can hear the translated voice directly; the system microphone switches to the BlackHole 2ch virtual driver.[^cicada-mac-bilingual-meeting-tool]
- 会议记录、录音和纪要保存在 ~/Library/Application Support/LiveSubs，项目无统计和自建服务器，诊断数据仅记在本机。 / Meeting records, recordings, and minutes are stored in ~/Library/Application Support/LiveSubs; the project has no analytics or self-hosted servers, and diagnostic data is only recorded locally.[^cicada-mac-bilingual-meeting-tool]

## 相关 / Related

- 原文：[链接](https://github.com/wquguru/cicada)。 / Original: [link](https://github.com/wquguru/cicada).
- Topic: [播客 AI 精细转写精读 / Podcast AI fine-transcription close reads](../../topics/podcast-ai-fine-transcription-close-reads.md)
- Topic: [语音输入的口头转述与文书整理 / Oral transcript vs document polish in voice input](../../topics/voice-input-oral-vs-document-for-agents.md)
- Topic: [AI 辅助剪藏与媒体笔记 / AI-assisted clipping and media notes](../../topics/ai-assisted-clipping-and-notes.md)

[^cicada-mac-bilingual-meeting-tool]: Cicada (知了): Mac Real-time Bilingual Meeting Minutes and Simultaneous Interpretation Tool
