---
type: Source
title: "OpenCode Browse 接管你正在用的浏览器"
title_en: "OpenCode Browse Takes Over the Browser You're Already Using"
description: "OpenCode 发布 Browse，让 AI Agent 通过 MCP 和浏览器扩展直接操作用户已打开的 Chrome 等浏览器，复用标签页、登录态与扩展，并支持跨设备控制与反检测。"
description_en: "OpenCode launches Browse, letting AI agents directly operate browsers such as Chrome that users already have open via MCP and browser extensions, reusing tabs, logins, and extensions, with cross-device control and anti-detection support."
resource: https://x.com/0xLogicrw/status/2119069106968441222
tags: [opencode, browse, ai-agent, browser-automation, mcp]
sources:
  - id: opencode-browse
    resource: https://x.com/0xLogicrw/status/2119069106968441222
    title: "OpenCode Browse Takes Over the Browser You're Already Using"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:07:00+08:00
---

# OpenCode Browse 接管你正在用的浏览器

*OpenCode Browse Takes Over the Browser You're Already Using*

「帖文称」OpenCode 正式推出 Browse，让 AI Agent 能够直接操作用户日常使用的 Chrome 等浏览器。它通过 MCP 和浏览器扩展连接 Codex、Claude Code、OpenCode 等工具，无需为 AI 单独启动浏览器，即可复用现有标签页、登录状态和扩展程序。Agent 可在后台打开标签页，通过 Playwright 执行点击、填写表单、截图、录屏和记录网络请求，且不影响用户正常浏览；遇到登录、双重验证或付款等需人工操作的环节，控制权会交还给用户。Browse 还支持跨设备控制，例如远程服务器上的 Agent 操作已登录账号的 MacBook Chrome，且跨设备连接需借助 Tailscale 等工具加密。项目还引入 Patchright 反检测机制，模拟人类鼠标移动、打字和滚动节奏，但帖文也指出这些措施无法保证绕过网站风控，遇到验证码或反机器人拦截时会交给用户处理。项目已按 MIT 协议开源。[^opencode-browse]

According to the post, OpenCode has officially launched Browse, allowing AI agents to directly operate browsers such as Chrome that users use daily. It connects to tools like Codex, Claude Code, and OpenCode via MCP and browser extensions, reusing existing tabs, login states, and extensions without launching a separate browser for AI. The agent can open tabs in the background and use Playwright to click, fill forms, take screenshots, record screens, and log network requests without affecting normal browsing; control is returned to the user for steps requiring manual operation such as login, two-factor authentication, or payment. Browse also supports cross-device control, for example an agent running on a remote server operating a logged-in Chrome on the user's MacBook, with cross-device connections requiring encryption via tools like Tailscale. The project introduces Patchright anti-detection mechanisms and simulates human mouse movement, typing, and scrolling rhythms, but the post notes these measures cannot guarantee bypassing website risk controls; when encountering CAPTCHAs or anti-bot blocking, the steps are handed to the user. The project is open sourced under the MIT license.[^opencode-browse]

## 摘要 / Summary

- OpenCode Browse 通过 MCP 和浏览器扩展连接 Codex、Claude Code、OpenCode 等工具。 / OpenCode Browse connects to tools such as Codex, Claude Code, and OpenCode via MCP and browser extensions.[^opencode-browse]
- 可复用用户已打开的标签页、登录状态和扩展程序，无需为 AI 单独启动浏览器。 / Reuses the user's open tabs, login status, and extensions without launching a separate browser for AI.[^opencode-browse]
- Agent 可在后台通过 Playwright 点击、填写表单、截图、录屏和记录网络请求，不影响正常浏览。 / The agent can use Playwright in the background to click, fill forms, take screenshots, record screens, and log network requests without affecting normal browsing.[^opencode-browse]
- 支持跨设备控制，远程服务器上的 Agent 可操作 MacBook 上已登录的 Chrome，跨设备连接需用 Tailscale 等工具加密。 / Supports cross-device control; an agent on a remote server can operate a logged-in Chrome on the user's MacBook, with cross-device connections encrypted via tools like Tailscale.[^opencode-browse]
- 采用 Patchright 反检测机制并模拟人类鼠标移动、打字和滚动节奏，但无法保证绕过网站风控。 / Uses Patchright anti-detection and simulates human mouse movement, typing, and scrolling rhythms, but cannot guarantee bypassing website risk controls.[^opencode-browse]
- 项目已按 MIT 协议开源。 / The project is open sourced under the MIT license.[^opencode-browse]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2119069106968441222)。 / Original: [link](https://x.com/0xLogicrw/status/2119069106968441222).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)

[^opencode-browse]: OpenCode Browse Takes Over the Browser You're Already Using
