---
type: Source
title: "Lightpanda 浏览器：面向 AI Agent 的 Zig 编写头less浏览器"
title_en: "Lightpanda Browser: Zig-written headless browser for AI agents"
description: "一款从零构建、非 Chromium 分支的 Zig 语言头less浏览器，面向 AI 代理与自动化场景。"
description_en: "A from-scratch, non-Chromium headless browser written in Zig for AI agents and automation."
resource: https://github.com/lightpanda-io/browser
tags: [lightpanda, browser, ai-agents, automation, zig, headless-browser]
sources:
  - id: lightpanda-browser
    resource: https://github.com/lightpanda-io/browser
    title: "Lightpanda Browser: Zig-written headless browser for AI agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T20:12:56+08:00
---

# Lightpanda 浏览器：面向 AI Agent 的 Zig 编写头less浏览器

*Lightpanda Browser: Zig-written headless browser for AI agents*

「GitHub 帖文称」Lightpanda Browser 是一款专为 AI 代理和自动化构建的头less浏览器，使用 Zig 语言编写，并非 Chromium 分支或 WebKit 补丁。据项目自述，其峰值内存占用比 Chromium 低约 16 倍，处理 100 个页面的执行时间快约 9 倍。[^lightpanda-browser]

According to the GitHub repository, Lightpanda Browser is a headless browser built from scratch for AI agents and automation, written in Zig rather than being a Chromium fork or WebKit patch. The project claims peak memory usage is about 16x lower than Chromium and execution time for 100 pages is about 9x faster.[^lightpanda-browser]

## 摘要 / Summary

- 使用 Zig 语言从零编写，不是 Chromium 分支，也不是 WebKit 补丁。 / Written from scratch in Zig, not a Chromium fork or WebKit patch.[^lightpanda-browser]
- 处理 100 个真实网页时，峰值内存约 123MB，而无头 Chrome 约 2GB，轻约 16 倍。 / For 100 real web pages, peak memory is about 123MB versus about 2GB for headless Chrome, roughly 16x lighter.[^lightpanda-browser]
- 处理 100 个页面耗时约 5 秒，而无头 Chrome 约 46 秒，快约 9 倍。 / Processing 100 pages takes about 5 seconds versus about 46 seconds for headless Chrome, roughly 9x faster.[^lightpanda-browser]
- 支持 CDP 服务器、WebDriver BiDi 协议，并提供 Puppeteer/Playwright 兼容的自动化客户端接入。 / Supports CDP server and WebDriver BiDi protocol, with Puppeteer/Playwright-compatible automation client access.[^lightpanda-browser]
- 提供 Agent 模式，可通过自然语言或斜杠命令驱动浏览器，并输出可重放的 PandaScript。 / Provides an agent mode to drive the browser via natural language or slash commands, outputting replayable PandaScript.[^lightpanda-browser]
- 可通过 Homebrew、Arch AUR、Docker、Nix Flake 或夜间构建二进制安装，支持 Linux、macOS 和 WSL2。 / Installable via Homebrew, Arch AUR, Docker, Nix Flake, or nightly binaries, supporting Linux, macOS, and WSL2.[^lightpanda-browser]

## 相关 / Related

- 原文：[链接](https://github.com/lightpanda-io/browser)。 / Original: [link](https://github.com/lightpanda-io/browser).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)

[^lightpanda-browser]: Lightpanda Browser: Zig-written headless browser for AI agents
