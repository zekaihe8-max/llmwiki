---
type: Source
title: "Conductor 弃用 Tauri 换回 Electron，启动快 4.6 倍"
title_en: "Conductor Drops Tauri for Electron, Startup 4.6x Faster"
description: "AI 编程桌面应用 Conductor 将前端壳从 Tauri 迁回 Electron，启动与打开工作区更快且内存更低"
description_en: "AI coding desktop app Conductor migrates its frontend shell from Tauri back to Electron, achieving faster startup and workspace opening with lower memory usage"
resource: https://x.com/lxfater/status/2125528682127147196
tags: [electron, tauri, desktop-app, conductor, rust]
sources:
  - id: f6e1798b28f1d702
    resource: https://x.com/lxfater/status/2125528682127147196
    title: "Conductor Drops Tauri for Electron, Startup 4.6x Faster"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:31:41+08:00
---

# Conductor 弃用 Tauri 换回 Electron，启动快 4.6 倍

*Conductor Drops Tauri for Electron, Startup 4.6x Faster*

「帖文称」AI 编程软件 Conductor 放弃 Tauri、换回 Electron，官方公布启动快 4.6 倍、打开工作区快 71%、内存降 35%；该软件保留 Rust 本地后台，仅更换界面壳，创始人 Charlie Holtz 证实提升主要来自 Chrome 内核而非 WebKit。[^f6e1798b28f1d702]

The post says AI coding software Conductor abandoned Tauri and returned to Electron, with official claims of 4.6x faster startup, 71% faster workspace opening, and 35% lower memory usage; the app keeps its Rust local backend and only replaces the UI shell, with founder Charlie Holtz attributing the gains to Chrome's engine rather than WebKit.[^f6e1798b28f1d702]

## 摘要 / Summary

- Conductor 是面向 Mac 的 AI 编程桌面软件，可同时开多个 AI 写代码窗口[^f6e1798b28f1d702]
- Conductor is a Mac desktop app for AI coding that can open multiple AI code-writing windows simultaneously[^f6e1798b28f1d702]
- 迁移仅更换前端壳，底层文件处理与 AI 调用仍由 Rust 本地后台承担[^f6e1798b28f1d702]
- The migration only replaced the frontend shell; underlying file handling and AI calls remain handled by the Rust local backend[^f6e1798b28f1d702]
- Tauri 借用 Mac 自带 WebKit 内核，Electron 自带 Chrome 内核[^f6e1798b28f1d702]
- Tauri borrows macOS's built-in WebKit engine, while Electron bundles Chrome's engine[^f6e1798b28f1d702]
- 官方数据：启动到渲染快 4.6 倍，打开工作区快 71%，内存占用降 35%[^f6e1798b28f1d702]
- Official figures: startup to render 4.6x faster, workspace opening 71% faster, RAM usage down 35%[^f6e1798b28f1d702]
- 创始人 Charlie Holtz 确认已迁移 Electron，并称提速大头来自内核更换[^f6e1798b28f1d702]
- Founder Charlie Holtz confirmed the Electron migration and said the main speedup comes from the engine switch[^f6e1798b28f1d702]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2125528682127147196)。 / Original: [link](https://x.com/lxfater/status/2125528682127147196).
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [用 Skills 组合复刻原生感 App / Compose Skills to recreate native-feel apps](../../topics/skills-stack-native-app-recreation.md)

[^f6e1798b28f1d702]: Conductor Drops Tauri for Electron, Startup 4.6x Faster
