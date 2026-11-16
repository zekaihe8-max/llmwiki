---
type: Source
title: "DeepSeek 开源 chat-demo 静态前端，三天 Star 突破 3000"
title_en: "DeepSeek open-sources chat-demo static frontend, Stars surpass 3,000 in three days"
description: "DeepSeek 开源用于对齐官方 App 体验的静态前端 chat-demo，支持搜索、读链接和语音等能力。"
description_en: "DeepSeek open-sources the static frontend chat-demo to align with the official App experience, supporting search, link reading, and voice capabilities."
resource: https://x.com/shao__meng/status/2122249961077153958
tags: [deepseek, chat-demo, open-source, frontend]
sources:
  - id: deepseek-chat-demo-open-source
    resource: https://x.com/shao__meng/status/2122249961077153958
    title: "DeepSeek open-sources chat-demo static frontend, Stars surpass 3,000 in three days"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:49:33+08:00
---

# DeepSeek 开源 chat-demo 静态前端，三天 Star 突破 3000

*DeepSeek open-sources chat-demo static frontend, Stars surpass 3,000 in three days*

帖文称，DeepSeek 于 11 月 13 日在官方 API 文档中宣布开放联网搜索、文件解析、链接阅读、安全审核和语音等能力，并同时开源参考前端 chat-demo；开源三天 Star 已超过 3000。[^deepseek-chat-demo-open-source]

The post states that on November 13 DeepSeek announced via official API documentation the opening of capabilities such as web search, file parsing, link reading, safety review, and voice to developers, and simultaneously open-sourced the reference frontend chat-demo; Stars exceeded 3,000 within three days of open-sourcing.[^deepseek-chat-demo-open-source]

## 摘要 / Summary

- 默认模型在代码中写死为 deepseek-flash，聊天走 Anthropic 兼容的 Messages / Files 接口，语音使用独立的 ASR 和 TTS。[^deepseek-chat-demo-open-source]
- The default model is hardcoded as deepseek-flash; chat uses Anthropic-compatible Messages / Files interfaces, while voice uses separate ASR and TTS.[^deepseek-chat-demo-open-source]
- 客户端为无后端参考客户端，浏览器直接请求配置的 API（默认 api.deepseek.com），支持多会话、消息分支、流式回答、深度思考、搜索引用、附件和朗读。[^deepseek-chat-demo-open-source]
- The client is a backend-free reference client where the browser directly requests the configured API (default api.deepseek.com), supporting multi-session, message branching, streaming answers, deep thinking, search citations, attachments, and read-aloud.[^deepseek-chat-demo-open-source]
- 搜索和读链接在服务端完成，所有生成请求固定带 safety_check: high，系统提示固定为「该助手为 DeepSeek，由深度求索公司创造。」[^deepseek-chat-demo-open-source]
- Search and link reading are completed server-side; all generation requests are fixed with safety_check: high, and the system prompt is fixed as “This assistant is DeepSeek, created by DeepSeek company.”[^deepseek-chat-demo-open-source]
- API Key 和设置存储于 localStorage，会话和附件原件存储于 IndexedDB；历史导入导出使用 ZIP，格式版本为 export_format_version: 3。[^deepseek-chat-demo-open-source]
- API Key and settings are stored in localStorage, sessions and attachment originals in IndexedDB; history import/export uses ZIP with format version export_format_version: 3.[^deepseek-chat-demo-open-source]
- 开源三天 Star 已超过 3000，可从 Releases 下载压缩包后双击 index.html 使用，本地开发需 Node.js 22.12+ 和 pnpm。[^deepseek-chat-demo-open-source]
- Stars exceeded 3,000 within three days of open-sourcing; it can be used by downloading a package from Releases and double-clicking index.html, while local development requires Node.js 22.12+ and pnpm.[^deepseek-chat-demo-open-source]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122249961077153958)。 / Original: [link](https://x.com/shao__meng/status/2122249961077153958).
- Topic: [DeepSeek 自营推理相对聚合平台 / DeepSeek first-party inference vs aggregators](../../topics/deepseek-inference-vs-aggregators.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)

[^deepseek-chat-demo-open-source]: DeepSeek open-sources chat-demo static frontend, Stars surpass 3,000 in three days
