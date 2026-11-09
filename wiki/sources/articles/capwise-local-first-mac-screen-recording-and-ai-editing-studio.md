---
type: Source
title: "灵录 Capwise：本地优先的 Mac 录屏与 AI 剪辑工作台"
title_en: "Capwise (灵录): Local-First Mac Screen Recording and AI Editing Studio"
description: "一款基于 Cap 的开源 Mac 原生录屏剪辑工具，支持字幕、配音、封面与 AI 助手在一个窗口完成。"
description_en: "An open-source native Mac screen recording and editing tool based on Cap, supporting captions, narration, covers, and AI assistant in one window."
resource: https://github.com/joeseesun/capwise
tags: [macos, screen-recording, video-editing, ai-assistant, open-source]
sources:
  - id: capwise-linglu-mac-ai-editing
    resource: https://github.com/joeseesun/capwise
    title: "Capwise (灵录): Local-First Mac Screen Recording and AI Editing Studio"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:26:38+08:00
---

# 灵录 Capwise：本地优先的 Mac 录屏与 AI 剪辑工作台

*Capwise (灵录): Local-First Mac Screen Recording and AI Editing Studio*

灵录 Capwise 是一款面向 macOS 13.3+ Apple Silicon 的免费开源本地录屏与剪辑工作台，基于 Cap 构建，桌面界面使用 Rust + GPUI。文章介绍，用户可在一个窗口内完成录制、字幕校对与翻译、时间线编辑、音乐配音、封面生成及导出；AI 助手可提出编辑方案供审阅后应用，但生图与模型调用可能产生第三方费用（帖文称）。[^capwise-linglu-mac-ai-editing]

Capwise (灵录) is a free, open-source, local-first Mac screen recording and editing workstation for macOS 13.3+ on Apple Silicon, based on Cap with a Rust + GPUI desktop interface. The article says users can complete recording, caption proofing and translation, timeline editing, music and narration, cover generation, and export in one window; the AI assistant proposes edits for review before applying, while image generation and model calls may incur third-party provider costs (as the article states).[^capwise-linglu-mac-ai-editing]

## 摘要 / Summary

- 支持 macOS 13.3+、Apple Silicon，已进行 Developer ID 签名与 Apple 公证；Intel、Windows 和 Linux 暂未提供验证过的发布包。 / Supports macOS 13.3+ and Apple Silicon, with Developer ID signing and Apple notarization; no verified releases for Intel, Windows, or Linux yet.[^capwise-linglu-mac-ai-editing]
- 基础录制与编辑不依赖 Cap 云服务账号，项目和媒体保存在本机；AI 字幕识别、校对翻译及封面生成需配置自己的模型服务或 ACP 助手，可能产生服务商费用。 / Basic recording and editing do not require a Cap Cloud account and keep projects and media local; AI caption recognition, proofing/translation, and cover generation require configuring your own model service or ACP agent, which may incur provider charges.[^capwise-linglu-mac-ai-editing]
- 字幕工作台提供「内容 / 翻译 / 样式」分离操作，支持双语字幕、SRT/VTT 导出，以及按文字剪辑视频与普通字幕删除的区别。 / The caption workspace separates content, translation, and styling, supports bilingual subtitles and SRT/VTT export, and distinguishes ordinary caption deletion from cutting video by text.[^capwise-linglu-mac-ai-editing]
- AI 助手可生成编辑方案供审阅、应用与撤销，并可直接在工作区生成并应用封面背景；技能脚本与引用文件不会自动执行。 / The AI assistant can generate editing proposals for review, application, and undo, and can generate and apply cover backgrounds in the workspace; skill scripts and referenced files are not executed automatically.[^capwise-linglu-mac-ai-editing]
- 许可证方面，主要代码为 AGPLv3，部分录制与相机 crates 为 MIT，并保留上游 Cap 的版权与许可。 / Licensing: primarily AGPLv3 for main code, MIT for some recording and camera crates, while retaining upstream Cap's copyright and license.[^capwise-linglu-mac-ai-editing]

## 相关 / Related

- 原文：[链接](https://github.com/joeseesun/capwise)。 / Original: [link](https://github.com/joeseesun/capwise).
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [开源工具装进 AI 助手做自然语言剪辑 / Open-source tools in AI assistants for natural-language editing](../../topics/open-source-in-ai-assistant-editing.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^capwise-linglu-mac-ai-editing]: Capwise (灵录): Local-First Mac Screen Recording and AI Editing Studio
