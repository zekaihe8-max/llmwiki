---
type: Source
title: "Pi 1.5.1 四条使用差异：缓存保温、登录与对话线程变更"
title_en: "Pi 1.5.1 Four Usage Differences: Cache Warming, Login, and Message Threads Changes"
description: "Pi 1.5.1 更新调整了缓存保温默认策略、登录流程、Anthropic 对话线程及终端界面模式。"
description_en: "Pi 1.5.1 updates default cache warming strategy, login flow, Anthropic message threads, and terminal UI mode."
resource: https://x.com/xiaomovps/status/2120051114200711252
tags: [pi-cli, anthropic, coding-agent, terminal-ui]
sources:
  - id: pi-1-5-1-usage-differences
    resource: https://x.com/xiaomovps/status/2120051114200711252
    title: "Pi 1.5.1 Four Usage Differences: Cache Warming, Login, and Message Threads Changes"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:05:00+08:00
---

# Pi 1.5.1 四条使用差异：缓存保温、登录与对话线程变更

*Pi 1.5.1 Four Usage Differences: Cache Warming, Login, and Message Threads Changes*

帖文称 Pi 1.5.1 更新后，缓存保温默认策略由 streaming 改为 idle，空闲时最长可保温 30 分钟并可能产生费用；登录 Anthropic 可直接在终端执行 pi auth login，无需先进入 Pi 会话；Anthropic 官方 API 默认启用 Message Threads，连续对话仅发送新增消息；终端界面从 1.5.0 起默认 fullscreen，可切回 regular。[^pi-1-5-1-usage-differences]

The post says Pi 1.5.1 changes default cache warming from streaming to idle, may warm cache in the background for up to 30 minutes and incur costs; Anthropic login can be done directly via pi auth login without starting a Pi session; Anthropic official API enables Message Threads by default, sending only new messages in continuous conversation; terminal UI defaults to fullscreen since 1.5.0 and can be switched to regular.[^pi-1-5-1-usage-differences]

## 摘要 / Summary

- 缓存保温默认由 streaming 改为 idle，Pi 空闲时可自动保温最长 30 分钟，可用 /session 查看状态，旧版行为可通过 settings.json 中 "cacheWarming": "streaming" 恢复，或设为 "off" 关闭。 / Cache warming default changed from streaming to idle; Pi can auto-warm cache for up to 30 minutes when idle, check status via /session, restore old behavior with "cacheWarming": "streaming" in settings.json, or set to "off" to disable.[^pi-1-5-1-usage-differences]
- 登录 Anthropic 不再需要先启动 Pi 会话，直接在终端执行 pi auth login anthropic；无浏览器服务器可加 --no-browser，退出用 pi auth logout anthropic。 / Anthropic login no longer requires starting a Pi session first; run pi auth login anthropic directly in terminal; add --no-browser on headless servers; use pi auth logout anthropic to log out.[^pi-1-5-1-usage-differences]
- Anthropic 官方 API 默认启用 Message Threads，连续对话只发新增消息；上下文压缩或工具列表变化时仍会回退到完整请求；第三方网关不支持 thread 字段可在 models.json compat 里设置 "supportsMessageThreads": false。 / Anthropic official API enables Message Threads by default, sending only new messages in continuous conversation; falls back to full request on context compression or tool list changes; third-party gateways not supporting thread field can set "supportsMessageThreads": false in models.json compat.[^pi-1-5-1-usage-differences]
- 终端界面从 1.5.0 起默认 fullscreen，偏好旧版滚动方式可执行 pi --tui-mode regular，或在 settings.json 设置 "tuiMode": "regular"。 / Terminal UI defaults to fullscreen since 1.5.0; prefer old scroll mode via pi --tui-mode regular, or set "tuiMode": "regular" in settings.json.[^pi-1-5-1-usage-differences]
- pi update --extensions 更实用，可直接看到插件更新前后的 npm 版本或 Git commit 变化。 / pi update --extensions is more practical, showing npm version or Git commit changes before and after plugin updates.[^pi-1-5-1-usage-differences]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2120051114200711252)。 / Original: [link](https://x.com/xiaomovps/status/2120051114200711252).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)

[^pi-1-5-1-usage-differences]: Pi 1.5.1 Four Usage Differences: Cache Warming, Login, and Message Threads Changes
