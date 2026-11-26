---
type: Source
title: "Gemini API 命令行工具 (gemini-api)"
title_en: "Gemini API CLI (gemini-api)"
description: "一个面向代理和脚本的无状态命令行工具，让代理通过 shell 调用 Gemini 模型与托管代理。"
description_en: "A stateless command-line tool for agents and scripts to call Gemini models and managed agents via shell."
resource: https://github.com/google-gemini/gemini-api-cli
tags: [gemini, cli, agent, google, api, command-line]
sources:
  - id: gemini-api-cli
    resource: https://github.com/google-gemini/gemini-api-cli
    title: "Gemini API CLI (gemini-api)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T09:59:51+08:00
---

# Gemini API 命令行工具 (gemini-api)

*Gemini API CLI (gemini-api)*

「Gemini API CLI（gemini-api）」是 Google Gemini 推出的面向代理与脚本的无状态命令行工具，通过标准 shell 命令让已有代理（如 Codex、Claude Code、Antigravity 等）调用 Gemini 模型、生成多媒体资产、分析文件或启动托管代理。该工具提供单一 Go 二进制，支持 macOS、Linux 与 Windows，并内置 --help、--usage、--schema、--dry-run 等机器友好接口，供代理自助发现命令、校验请求并以结构化输出继续多步任务。[^gemini-api-cli]

"Gemini API CLI (gemini-api)" is a stateless command-line tool from Google Gemini for agents and scripts, letting existing agents such as Codex, Claude Code, and Antigravity call Gemini models, generate media assets, analyze files, or launch managed agents through standard shell commands. It ships as a single Go binary for macOS, Linux, and Windows, and includes machine-friendly interfaces such as --help, --usage, --schema, and --dry-run so agents can discover commands, validate requests offline, and continue multi-step tasks with structured output.[^gemini-api-cli]

## 摘要 / Summary

- 支持文本/多模态生成、图像/音频/音乐/视频生成、文件分析与转写，以及托管代理的后台运行与状态查询。[^gemini-api-cli]
- Supports text/multimodal generation, image/audio/music/video generation, file analysis and transcription, and background execution and status queries for managed agents.[^gemini-api-cli]
- 提供 gemini-api generate、image、tts、music、video、analyze、transcribe、agent、files、models、voices、configure 等命令，并可通过 --schema 查看请求体结构。[^gemini-api-cli]
- Provides commands such as generate, image, tts, music, video, analyze, transcribe, agent, files, models, voices, and configure, with request body schemas available via --schema.[^gemini-api-cli]
- 通过 --dry-run 可在不发起网络请求或读取密钥串的情况下离线校验并预览解析后的 HTTP 请求，凭证会被 redacted。[^gemini-api-cli]
- --dry-run allows offline validation and preview of resolved HTTP requests without network calls or reading the OS keychain, with credentials redacted.[^gemini-api-cli]
- 输出支持结构化 JSON、紧凑 TOON 及 --jq 字段过滤，退出码区分成功（0）、运行时失败（1）、使用错误（2）与认证失败（3）。[^gemini-api-cli]
- Output supports structured JSON, compact TOON, and --jq field filtering; exit codes distinguish success (0), runtime failures (1), usage errors (2), and authentication failures (3).[^gemini-api-cli]
- 可通过 curl、PowerShell、Go install 或 GitHub Releases 预编译二进制安装，并将 gemini-api 放入 PATH 供代理调用。[^gemini-api-cli]
- Installable via curl, PowerShell, Go install, or prebuilt binaries from GitHub Releases, with gemini-api placed on PATH for agent invocation.[^gemini-api-cli]
- 代理可使用 --usage 输出 KDL 格式的完整命令树，或使用 --agent-mode / GEMINI_CLI_AGENT_MODE=1 启用结构化 JSON 错误信封与 TOON 默认输出。[^gemini-api-cli]
- Agents can output the full command tree in KDL via --usage, or enable structured JSON error envelopes and TOON default output via --agent-mode / GEMINI_CLI_AGENT_MODE=1.[^gemini-api-cli]

## 相关 / Related

- 原文：[链接](https://github.com/google-gemini/gemini-api-cli)。 / Original: [link](https://github.com/google-gemini/gemini-api-cli).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)

[^gemini-api-cli]: Gemini API CLI (gemini-api)
