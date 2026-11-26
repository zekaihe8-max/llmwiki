---
type: Source
title: "Mole：原生 Mac 清理、软件管理与状态监控工具"
title_en: "Mole: Native Mac Cleanup, Software Management, and Status Monitoring Utility"
description: "一款原生 macOS 实用工具，整合缓存清理、应用卸载与更新、磁盘分析与实时系统状态监控。"
description_en: "A native macOS utility integrating cache cleanup, app uninstall and updates, disk analysis, and live system status monitoring."
resource: https://mole.fit/
tags: [macos, system-utility, cleanup, menu-bar, agent-skill]
sources:
  - id: mole-fit-native-mac-utility
    resource: https://mole.fit/
    title: "Mole: Native Mac Cleanup, Software Management, and Status Monitoring Utility"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:38:51+08:00
---

# Mole：原生 Mac 清理、软件管理与状态监控工具

*Mole: Native Mac Cleanup, Software Management, and Status Monitoring Utility*

「帖文称」Mole 是一款原生 macOS 实用工具，售价 19 美元一次性授权两台 Mac，免费更新，覆盖缓存清理、应用完全卸载、跨渠道软件更新、安全维护、磁盘占用分析与实时系统状态监控；官方还提供免费开源的 `mo` 命令行工具（GPL-3.0），并为 AI 编程 Agent 发布了 `tw93/Mole` 技能，支持在 macOS 与 Windows 上执行磁盘分析、状态快照、历史记录与应用卸载等终端操作。[^mole-fit-native-mac-utility]

The post describes Mole as a native macOS utility priced at $19 for a one-time license on two Macs with free updates, covering cache cleanup, complete app removal, cross-channel software updates, safe maintenance, disk usage analysis, and live system status monitoring; it also offers the free open-source `mo` CLI (GPL-3.0) and publishes the `tw93/Mole` agent skill for AI coding agents to run disk analysis, status snapshots, history, and app uninstall operations on macOS and Windows.[^mole-fit-native-mac-utility]

## 摘要 / Summary

- Mac 应用需 macOS 14+，支持 Apple Silicon 与 Intel，定价 19 美元一次性授权两台 Mac，含免费更新，非订阅制。[^mole-fit-native-mac-utility]
- The Mac app requires macOS 14+, supports Apple Silicon and Intel, costs $19 one-time for two Macs with free updates, and is not a subscription.[^mole-fit-native-mac-utility]
- 免费开源的 `mo` CLI 可在 macOS 12+ 与 Windows 10/11 上运行，提供 `mo analyze --json`、`mo status --json`、`mo history --json` 等机器可读输出，破坏性命令默认支持 `--dry-run`。[^mole-fit-native-mac-utility]
- The free open-source `mo` CLI runs on macOS 12+ and Windows 10/11, provides machine-readable output such as `mo analyze --json`, `mo status --json`, and `mo history --json`, and destructive commands support `--dry-run` by default.[^mole-fit-native-mac-utility]
- 内置 Clean、Software、Optimize、Analyze 与 Status 五大功能模块，分别对应缓存清理、应用与更新管理、系统维护、磁盘可视化与实时状态监控。[^mole-fit-native-mac-utility]
- It includes five functional modules—Clean, Software, Optimize, Analyze, and Status—covering cache cleanup, app and update management, system maintenance, disk visualization, and real-time status monitoring.[^mole-fit-native-mac-utility]
- AI Cleanup & Care 页面可识别 AI 命令行工具的旧版本、缓存、会话与 worktree，默认不勾选会话与工具，需用户确认后才清理，且最近 24 小时内使用的会话不会列出。[^mole-fit-native-mac-utility]
- The AI Cleanup & Care page detects old versions, caches, sessions, and worktrees of AI CLI tools; sessions and tools are unchecked by default and require user confirmation before cleanup, and sessions used within the last 24 hours are never listed.[^mole-fit-native-mac-utility]
- Mole 为 AI 编程 Agent 提供官方技能 `tw93/Mole`，可通过 `npx skills add tw93/Mole` 安装，或作为 Claude Code、Codex 插件使用，官方域名仅为 mole.fit。[^mole-fit-native-mac-utility]
- Mole provides the official agent skill `tw93/Mole` for AI coding agents, installable via `npx skills add tw93/Mole` or as a Claude Code/Codex plugin; the official domain is mole.fit only.[^mole-fit-native-mac-utility]

## 相关 / Related

- 原文：[链接](https://mole.fit/)。 / Original: [link](https://mole.fit/).
- Topic: [menubar 管理工具真空 / Menubar management tool gap](../../topics/menubar-management-tool-gap.md)
- Topic: [AGENTS.md 要求 worktree 完成即删 / AGENTS.md rules for no leftover worktrees](../../topics/agent-worktree-cleanup.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)

[^mole-fit-native-mac-utility]: Mole: Native Mac Cleanup, Software Management, and Status Monitoring Utility
