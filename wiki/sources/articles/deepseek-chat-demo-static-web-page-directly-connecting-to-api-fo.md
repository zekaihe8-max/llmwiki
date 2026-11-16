---
type: Source
title: "DeepSeek Chat Demo：静态网页直连 API 的对话演示"
title_en: "DeepSeek Chat Demo: Static Web Page Directly Connecting to API for Chat Demonstration"
description: "一个无需后端的静态聊天演示，浏览器直接调用 DeepSeek API，支持流式回复、联网搜索、语音输入、多会话管理等功能。"
description_en: "A backend-free static chat demo where the browser calls DeepSeek API directly, supporting streaming replies, web search, voice input, multi-session management, and more."
resource: https://github.com/deepseek-ai/chat-demo
tags: [deepseek, chat-demo, static-site, api-client, web-app]
sources:
  - id: deepseek-chat-demo-static-api-client
    resource: https://github.com/deepseek-ai/chat-demo
    title: "DeepSeek Chat Demo: Static Web Page Directly Connecting to API for Chat Demonstration"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T08:27:34+08:00
---

# DeepSeek Chat Demo：静态网页直连 API 的对话演示

*DeepSeek Chat Demo: Static Web Page Directly Connecting to API for Chat Demonstration*

帖文称 DeepSeek 官方发布的 chat-demo 是一个纯静态网页应用，无需任何应用后端即可在浏览器中直接连接 DeepSeek API 进行对话。它提供在线试用与本地离线两种使用方式，内置流式输出、深度思考、智能搜索、链接阅读、引用来源、附件上传、语音输入输出、Markdown 与数学公式渲染、中英双语、明暗主题、移动端适配以及会话导入导出等完整功能。数据全部存储在浏览器本地（localStorage 与 IndexedDB），API 密钥不上传服务器。项目采用 Node.js 22+、pnpm、Rspack 构建，默认使用 deepseek-flash 模型并兼容 Anthropic Messages / Files API。[^deepseek-chat-demo-static-api-client]

The post states that DeepSeek's official chat-demo is a pure static web application that connects directly to the DeepSeek API in the browser without any application backend. It offers both online trial and local offline usage, featuring streaming output, deep thinking, smart search, link reading, source citations, attachment upload, voice I/O, Markdown and math rendering, bilingual UI, light/dark themes, mobile layouts, and conversation import/export. All data stays locally in the browser (localStorage and IndexedDB), and API keys are never sent to the demo's servers. Built with Node.js 22+, pnpm, and Rspack, it defaults to the deepseek-flash model via Anthropic-compatible Messages/Files APIs.[^deepseek-chat-demo-static-api-client]

## 摘要 / Summary

- 纯静态页面，无需后端即可在浏览器直连 DeepSeek API，支持在线试用或下载离线打开。[^deepseek-chat-demo-static-api-client]
- Pure static page; no backend needed — browser connects directly to DeepSeek API, with online trial or offline local file options.[^deepseek-chat-demo-static-api-client]
- 内置流式回复、深度思考、智能搜索、链接阅读、来源引用、附件上传、语音输入输出等高级功能。[^deepseek-chat-demo-static-api-client]
- Includes streaming replies, deep thinking, smart search, link reading, source citations, attachment upload, and voice I/O.[^deepseek-chat-demo-static-api-client]
- 支持 Markdown、语法高亮、KaTeX 数学公式、Mermaid 图表，中英双语与明暗主题自动切换。[^deepseek-chat-demo-static-api-client]
- Supports Markdown, syntax highlighting, KaTeX math, Mermaid diagrams, bilingual UI, and automatic light/dark themes.[^deepseek-chat-demo-static-api-client]
- 会话与附件存储于 IndexedDB，API 密钥与设置存储于 localStorage，数据隔离于浏览器配置文件与站点源。[^deepseek-chat-demo-static-api-client]
- Conversations and attachments in IndexedDB; API keys and settings in localStorage; data isolated by browser profile and site origin.[^deepseek-chat-demo-static-api-client]
- 提供 ZIP 格式的会话导入导出，导入会替换本地所有会话与附件，导出包含对话与本地图片但不含密钥。[^deepseek-chat-demo-static-api-client]
- ZIP-based history import/export; import replaces all local conversations and attachments; exports include conversations and local images but exclude keys.[^deepseek-chat-demo-static-api-client]
- 默认使用 deepseek-flash 模型，通过兼容 Anthropic 的 Messages / Files API 调用，构建工具链为 Node.js 22+、pnpm、Rspack。[^deepseek-chat-demo-static-api-client]
- Defaults to deepseek-flash via Anthropic-compatible Messages/Files APIs; toolchain: Node.js 22+, pnpm, Rspack.[^deepseek-chat-demo-static-api-client]

## 相关 / Related

- 原文：[链接](https://github.com/deepseek-ai/chat-demo)。 / Original: [link](https://github.com/deepseek-ai/chat-demo).
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)

[^deepseek-chat-demo-static-api-client]: DeepSeek Chat Demo: Static Web Page Directly Connecting to API for Chat Demonstration
