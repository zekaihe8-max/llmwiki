---
type: Source
title: "AG Usage：Antigravity AI 模型用量追踪扩展"
title_en: "AG Usage: Antigravity AI Model Usage Tracking Extension"
description: "一款在 Visual Studio Code 中实时追踪 Antigravity AI 模型配额与使用情况的免费扩展。"
description_en: "A free Visual Studio Code extension for real-time tracking of Antigravity AI model quotas and usage."
resource: https://marketplace.visualstudio.com/items?itemName=crsx.ag-usage
tags: [vscode-extension, ai-usage-tracking, antigravity, quota-monitor]
sources:
  - id: ag-usage
    resource: https://marketplace.visualstudio.com/items?itemName=crsx.ag-usage
    title: "AG Usage: Antigravity AI Model Usage Tracking Extension"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:44:56+08:00
---

# AG Usage：Antigravity AI 模型用量追踪扩展

*AG Usage: Antigravity AI Model Usage Tracking Extension*

「AG Usage」是由 Cristian Militaru 发布的 Visual Studio Code 免费扩展，用于实时追踪 Antigravity AI 模型的配额使用。扩展通过 Webview 面板展示当前模型配额、额外积分、重置时间线、最常用模型、StatusGator 公共健康信息以及带趋势折线图的交互式使用记录，并支持在状态栏显示可配置的使用条目。文章称，使用数据默认每 60 秒自动刷新，并可通过设置调整刷新间隔、状态栏对齐、通知阈值等行为。[^ag-usage]

"AG Usage" is a free Visual Studio Code extension by Cristian Militaru for real-time tracking of Antigravity AI model quota usage. The extension displays current model quotas, extra credits, reset timelines, most-used models, StatusGator public health information, and an interactive usage history log with trend sparklines via a Webview panel, and supports configurable status bar entries. The article states that usage data auto-refreshes every 60 seconds by default and can be adjusted through settings for refresh interval, status bar alignment, notification thresholds, and other behaviors.[^ag-usage]

## 摘要 / Summary

- 扩展名为 AG Usage，发布者为 Cristian Militaru (crsx)，在 Visual Studio Code 市场免费提供，已有 494 次安装。[^ag-usage]
- The extension is named AG Usage, published by Cristian Militaru (crsx), offered free on the Visual Studio Code Marketplace, with 494 installs.[^ag-usage]
- Webview 面板展示 Gemini、Other（Claude 与 GPT）、Argon（Gemini 4 Argon 周限额，Pro）等模型类别的配额与重置倒计时。[^ag-usage]
- The webview panel shows quotas and reset countdowns for model categories including Gemini, Other (Claude and GPT), and Argon (Gemini 4 Argon weekly limit, Pro).[^ag-usage]
- 提供 ag-usage.refresh、ag-usage.openSettings、ag-usage.openPanel、ag-usage.exportHistory 四条命令，分别用于手动刷新、打开设置、打开详细面板和导出使用历史记录。[^ag-usage]
- It provides four commands: ag-usage.refresh, ag-usage.openSettings, ag-usage.openPanel, and ag-usage.exportHistory for manual refresh, opening settings, opening the detailed panel, and exporting usage history.[^ag-usage]
- 默认每 60 秒自动刷新使用数据，可通过 ag-usage.refreshInterval 设置间隔，设为 0 可禁用自动刷新。[^ag-usage]
- Usage data auto-refreshes every 60 seconds by default; the interval can be set via ag-usage.refreshInterval, or set to 0 to disable auto-refresh.[^ag-usage]
- 仅从本地 Antigravity 进程通过 localhost 读取配额数据，并可选从 StatusGator 获取公共 Antigravity 服务健康信息。[^ag-usage]
- It reads quota data only from the local Antigravity process over localhost, and optionally fetches public Antigravity service health from StatusGator.[^ag-usage]
- 文章提示服务器数据可能存在 3–5 分钟误差，且当前无法获取实际 Token 配额。[^ag-usage]
- The article notes server data may have a 3–5 minute margin of error, and actual token quota cannot currently be retrieved.[^ag-usage]

## 相关 / Related

- 原文：[链接](https://marketplace.visualstudio.com/items?itemName=crsx.ag-usage)。 / Original: [link](https://marketplace.visualstudio.com/items?itemName=crsx.ag-usage).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [用量上限 A/B 测试 / Usage limit A/B tests](../../topics/usage-limit-ab-tests.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^ag-usage]: AG Usage: Antigravity AI Model Usage Tracking Extension
