---
type: Source
title: "Antigravity Link：手机浏览器实时镜像与本地操控 Antigravity 会话的 VS Code 插件"
title_en: "Antigravity Link: VS Code extension for live mobile mirroring and local control of Antigravity sessions"
description: "Antigravity Link 通过二维码让手机浏览器实时镜像 Antigravity 对话，支持发消息、上传文件、语音输入和停止生成，并提供本地 HTTP API 与 MCP 服务器。"
description_en: "Antigravity Link lets a phone browser mirror Antigravity chats in real time via QR code, supporting messages, file uploads, voice input, and stop generation, plus a local HTTP API and MCP server."
resource: https://github.com/cafeTechne/antigravity-link-extension
tags: [antigravity-link, vscode-extension, mobile-mirror, local-api, mcp-server]
sources:
  - id: antigravity-link-extension
    resource: https://github.com/cafeTechne/antigravity-link-extension
    title: "Antigravity Link: VS Code extension for live mobile mirroring and local control of Antigravity sessions"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T19:59:28+08:00
---

# Antigravity Link：手机浏览器实时镜像与本地操控 Antigravity 会话的 VS Code 插件

*Antigravity Link: VS Code extension for live mobile mirroring and local control of Antigravity sessions*

「Antigravity Link」是面向 Antigravity IDE 的 VS Code 扩展，扫码后手机浏览器即可成为当前对话的实时镜像，支持读取流式回复、发送消息、上传文件、语音输入、停止生成及多窗口切换，并暴露本地 HTTP API 与 MCP 服务器供 Agent 集成，所有数据仅在局域网内传输。[^antigravity-link-extension]

Antigravity Link is a VS Code extension for Antigravity IDE; after scanning a QR code, a phone browser becomes a live mirror of the current chat, supporting streaming replies, messages, file uploads, voice input, stop generation, and multi-window switching, and exposes a local HTTP API and MCP server for Agent integration, with all data staying on the local network.[^antigravity-link-extension]

## 摘要 / Summary

- 扫码后手机可在局域网内实时查看 Antigravity 对话，并支持发送消息、上传文件、语音输入与停止生成。[^antigravity-link-extension]
- After scanning the QR code, a phone can view Antigravity conversations in real time over LAN and send messages, upload files, use voice input, and stop generation.[^antigravity-link-extension]
- 扩展通过 Chrome DevTools Protocol 发现 Antigravity 目标，启动 Antigravity IDE 时需加入 --remote-debugging-port=9000。[^antigravity-link-extension]
- The extension discovers Antigravity targets via Chrome DevTools Protocol and requires launching Antigravity IDE with --remote-debugging-port=9000.[^antigravity-link-extension]
- 提供本地 HTTP API 和 MCP 服务器，Agent 与外部工具可通过 /snapshot、/send、/stop 等端点以编程方式驱动会话。[^antigravity-link-extension]
- A local HTTP API and MCP server are provided; Agents and external tools can drive sessions programmatically via endpoints such as /snapshot, /send, and /stop.[^antigravity-link-extension]
- 服务器运行在本机，仅与手机局域网连接、Antigravity 调试端口和本地语言服务器通信，不向 Google 或第三方服务发送数据。[^antigravity-link-extension]
- The server runs locally and communicates only with the phone on LAN, Antigravity's debug port, and the local Language Server, sending no data to Google or third-party services.[^antigravity-link-extension]
- 移动界面支持 16 种语言自动检测，包括中文、日文、阿拉伯语等，并提供 RTL 支持。[^antigravity-link-extension]
- The mobile UI supports 16 languages with automatic detection, including Chinese, Japanese, and Arabic, with RTL support.[^antigravity-link-extension]
- v1.0.20 移除了 child_process 依赖，调试端点需鉴权，所有 LS RPC 调用均加 localhost 守护。[^antigravity-link-extension]
- v1.0.20 removed the child_process dependency, debug endpoints now require authentication, and all LS RPC calls are guarded by localhost.[^antigravity-link-extension]

## 相关 / Related

- 原文：[链接](https://github.com/cafeTechne/antigravity-link-extension)。 / Original: [link](https://github.com/cafeTechne/antigravity-link-extension).
- Topic: [手机连自有服务器操控 Agent 工作台 / Phone + own server as a mobile agent workbench](../../topics/phone-own-server-agent-workbench.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [账号与资产安全卫生 / Account and asset security hygiene](../../topics/account-and-asset-security-hygiene.md)

[^antigravity-link-extension]: Antigravity Link: VS Code extension for live mobile mirroring and local control of Antigravity sessions
