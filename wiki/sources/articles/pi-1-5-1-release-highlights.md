---
type: Source
title: "Pi 1.5.1 更新要点"
title_en: "Pi 1.5.1 Release Highlights"
description: "Pi 1.5.1 发布，主打命令行登录、缓存保温策略调整、Anthropic 消息线程及默认模型更新等体验优化。"
description_en: "Pi 1.5.1 released, focusing on CLI login, cache warming strategy adjustment, Anthropic message threads, and default model updates."
resource: https://x.com/xiaomovps/status/2119946221087539663
tags: [pi, ai-agent, cli, model-update, caching]
sources:
  - id: d1229561138174fc
    resource: https://x.com/xiaomovps/status/2119946221087539663
    title: "Pi 1.5.1 Release Highlights"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:04:25+08:00
---

# Pi 1.5.1 更新要点

*Pi 1.5.1 Release Highlights*

帖文称，Pi 1.5.1 正式发布，本次未增加大功能，主要优化日常使用体验并修复了一批问题。作者整理了 5 个值得关注的变化，包括命令行直接登录、缓存保温默认策略从 streaming 改为 idle、Anthropic 默认启用 Message Threads、多个 Provider 默认模型更新，以及两处兼容性变化。[^d1229561138174fc]

The post says Pi 1.5.1 is officially released, with no major new features but focused on daily UX improvements and bug fixes. The author highlights five changes: direct CLI login, cache warming default changed from streaming to idle, Anthropic Message Threads enabled by default, updated default models across providers, and two compatibility changes.[^d1229561138174fc]

## 摘要 / Summary

- 可直接在终端执行 `pi auth login <provider>` 登录，退出使用 `pi auth logout <provider>`，并支持 `--api-key` 和 `--no-browser` 参数。 / Log in directly via terminal with `pi auth login <provider>`, log out with `pi auth logout <provider>`, and supports `--api-key` and `--no-browser` parameters.[^d1229561138174fc]
- 缓存保温默认策略从 streaming 改为 idle，符合条件的 Prompt Cache 可在两次运行之间保温最多 30 分钟，并判断刷新是否划算。 / Cache warming default changed from streaming to idle; eligible Prompt Caches can stay warmed for up to 30 minutes between runs, with a check on whether refreshing is worthwhile.[^d1229561138174fc]
- Pi 现在默认在 Anthropic 官方 API 上启用 Message Threads，只发送新增消息而非整段历史，上下文压缩或工具列表变化时会退回完整请求。 / Pi now enables Message Threads by default on the Anthropic official API, sending only new messages instead of the full history, falling back to full requests on context compression or tool list changes.[^d1229561138174fc]
- 帖文称多个 Provider 默认模型已更新，例如 Anthropic 换成 Claude Opus 5.5、Azure 换成 GPT-6.1 Sol、Google 换成 Gemini 4 Argon。 / The post says multiple providers' default models have been updated, e.g., Anthropic to Claude Opus 5.5, Azure to GPT-6.1 Sol, Google to Gemini 4 Argon.[^d1229561138174fc]
- 两处兼容性变化：GrepOperations.readFile 不再负责读取 grep 上下文行；OpenAI 兼容请求在没有可用工具时省略 tools: [] 字段，避免部分服务返回 400。 / Two compatibility changes: GrepOperations.readFile no longer reads grep context lines; OpenAI-compatible requests omit the tools: [] field when no tools are available, avoiding 400 errors from some services.[^d1229561138174fc]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2119946221087539663)。 / Original: [link](https://x.com/xiaomovps/status/2119946221087539663).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)

[^d1229561138174fc]: Pi 1.5.1 Release Highlights
