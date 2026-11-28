---
type: Source
title: "Captae：本地媒体下载与 AI 助手管理工具"
title_en: "Captae: Local Media Download and AI Assistant Management Tool"
description: "一款 macOS、Windows、Linux 上的开源本地媒体下载和管理工具，支持 AI 助手通过 MCP 调用下载、转录和剪辑。"
description_en: "An open-source local media download and management tool for macOS, Windows, and Linux, supporting AI assistants via MCP for download, transcription, and editing."
resource: https://github.com/sol1560/Captae
tags: [media-download, local-first, mcp, ai-assistant, open-source]
sources:
  - id: captae-local-media-download-ai-assistant
    resource: https://github.com/sol1560/Captae
    title: "Captae: Local Media Download and AI Assistant Management Tool"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:14:29+08:00
---

# Captae：本地媒体下载与 AI 助手管理工具

*Captae: Local Media Download and AI Assistant Management Tool*

「仓库」Captae 是一款运行在 macOS、Windows、Linux 上的本地媒体下载和管理工具，用户可粘贴链接或通过浏览器插件下载 YouTube、B 站、X、抖音/TikTok、Instagram 等平台的视频与音频，并自动入库按标题、标签和字幕内容检索。软件内置基于 yt-dlp 的下载引擎，支持 M3U8 流、直播录制、播放列表和分 P 选择下载，并提供登录窗口与浏览器登录状态读取。素材库支持格式转换、精确剪辑、拼接、换音轨、生成和烧录字幕，并集成 faster-whisper 在本机进行语音转文字，音频不上传。Captae 还通过 MCP 协议向 Claude、Cursor 等 AI 助手暴露下载、转换、字幕、剪辑、查素材库等工具，所有文件、素材和登录状态仅保留在本机，代码采用 AGPL-3.0-or-later 许可。[^captae-local-media-download-ai-assistant]

"Repository" Captae is a local media download and management tool running on macOS, Windows, and Linux. Users can paste links or use a browser extension to download video and audio from platforms such as YouTube, Bilibili, X, Douyin/TikTok, and Instagram, with automatic library indexing searchable by title, tags, and subtitle content. It bundles a yt-dlp-based download engine supporting M3U8 streams, live recording, playlists, and selective multi-part downloads, plus login windows and browser login-state reading. The library supports format conversion, precise trimming, splicing, audio replacement, subtitle generation and burning, and integrates faster-whisper for on-device speech-to-text without uploading audio. Captae also exposes download, conversion, subtitle, editing, and library-query tools to AI assistants such as Claude and Cursor via the MCP protocol; all files, materials, and login states remain on the local machine, and the code is licensed under AGPL-3.0-or-later.[^captae-local-media-download-ai-assistant]

## 摘要 / Summary

- 支持 YouTube、B 站、X、抖音/TikTok、Instagram 等网站的视频和音频下载，底层使用 yt-dlp，覆盖上千个网站。[^captae-local-media-download-ai-assistant]
- Supports video and audio download from YouTube, Bilibili, X, Douyin/TikTok, Instagram and other sites, using yt-dlp under the hood and covering over a thousand websites.[^captae-local-media-download-ai-assistant]
- 内置素材库，可按标题、标签和字幕内容搜索，并支持 MP4/WebM/MOV/ProRes/MP3/FLAC 等格式转换、剪辑、拼接、换音轨和字幕生成烧录。[^captae-local-media-download-ai-assistant]
- Built-in media library searchable by title, tags, and subtitle content, supporting conversion to MP4/WebM/MOV/ProRes/MP3/FLAC and editing, splicing, audio replacement, and subtitle generation/burning.[^captae-local-media-download-ai-assistant]
- 集成 faster-whisper 在本机进行语音转文字，音频不上传，适用于没有字幕的视频。[^captae-local-media-download-ai-assistant]
- Integrates faster-whisper for on-device speech-to-text with no audio upload, for videos without subtitles.[^captae-local-media-download-ai-assistant]
- 通过 MCP 协议接入 Claude、Cursor 等 AI 助手，提供下载、转换、字幕、剪辑、查素材库等工具，且 AI 助手看不到登录 Cookie。[^captae-local-media-download-ai-assistant]
- Connects to AI assistants such as Claude and Cursor via MCP, providing download, conversion, subtitle, editing, and library-query tools; AI assistants cannot see login cookies.[^captae-local-media-download-ai-assistant]
- 提供浏览器插件，在网页视频旁显示下载按钮和清晰度菜单，支持带上浏览器登录状态下载，但不支持 Firefox、Safari。[^captae-local-media-download-ai-assistant]
- Provides a browser extension showing download buttons and quality menus beside web videos, supporting downloads with browser login state; Firefox and Safari are not supported.[^captae-local-media-download-ai-assistant]
- 代码采用 AGPL-3.0-or-later 许可，附带 yt-dlp、FFmpeg、aria2 等独立程序保留各自原有许可证。[^captae-local-media-download-ai-assistant]
- Code is licensed under AGPL-3.0-or-later; bundled yt-dlp, FFmpeg, and aria2 retain their own original licenses.[^captae-local-media-download-ai-assistant]

## 相关 / Related

- 原文：[链接](https://github.com/sol1560/Captae)。 / Original: [link](https://github.com/sol1560/Captae).
- Topic: [AI 辅助剪藏与媒体笔记 / AI-assisted clipping and media notes](../../topics/ai-assisted-clipping-and-notes.md)
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [开源工具装进 AI 助手做自然语言剪辑 / Open-source tools in AI assistants for natural-language editing](../../topics/open-source-in-ai-assistant-editing.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^captae-local-media-download-ai-assistant]: Captae: Local Media Download and AI Assistant Management Tool
