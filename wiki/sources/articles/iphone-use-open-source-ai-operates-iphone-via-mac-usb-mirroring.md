---
type: Source
title: "iPhone-use 开源：AI 经 Mac USB 投屏与蓝牙输入操作 iPhone"
title_en: "iPhone-use Open-Source: AI Operates iPhone via Mac USB Mirroring and Bluetooth Input"
description: "开发者 YueChen 开源 iPhone-use，通过 USB 画面传输与 Mac 蓝牙模拟输入，接入 MCP 后 AI 可查看屏幕、点击与输入，并经改造支持本地 OCR、增量差异与中文输入。"
description_en: "Developer YueChen open-sourced iPhone-use, mirroring iPhone screen to Mac over USB and simulating input via Bluetooth; after MCP integration, AI can view, click, and input, with modifications adding local OCR, incremental diffs, and Chinese input."
resource: https://x.com/0xLogicrw/status/2117564137488461958
tags: [iphone-use, ai-agent, mobile-control, open-source, mcp]
sources:
  - id: iphone-use-open-source
    resource: https://x.com/0xLogicrw/status/2117564137488461958
    title: "iPhone-use Open-Source: AI Operates iPhone via Mac USB Mirroring and Bluetooth Input"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:16:28+08:00
---

# iPhone-use 开源：AI 经 Mac USB 投屏与蓝牙输入操作 iPhone

*iPhone-use Open-Source: AI Operates iPhone via Mac USB Mirroring and Bluetooth Input*

「帖文称」开发者 YueChen 开源的 iPhone-use 无需开启 iPhone 开发者模式或安装测试程序，也不需要外置 KVM 硬件；它通过一根数据线将 iPhone 画面传到 Mac，再由 Mac 通过蓝牙模拟鼠标和键盘操作手机，接入 MCP 后 AI 即可查看屏幕、点击和输入。该项目仍处早期且存在不少 bug，发帖人对其进行了改造，包括接入 Mac 本地 OCR 实现按文字点按钮、增量差异模式将 Token 与耗时省去约 90%、补齐中文输入与剪贴板、插线无感待机，以及修复 USB 视频采集黑屏、蓝牙断线重连和指针定位等底层稳定性问题。[^iphone-use-open-source]

The post says developer YueChen open-sourced iPhone-use, which requires neither iPhone Developer Mode nor test app installation, nor external KVM hardware. It mirrors the iPhone screen to Mac over a data cable, then Mac simulates mouse and keyboard via Bluetooth to operate the phone; after MCP integration, AI can view the screen, click, and input. The project is still early-stage with many bugs, and the poster modified it to add Mac local OCR for clicking by text, an incremental diff mode saving about 90% of tokens and time, Chinese input and clipboard support, plug-and-play standby, and fixes for USB video capture black screen, Bluetooth reconnection, and pointer positioning issues.[^iphone-use-open-source]

## 摘要 / Summary

- iPhone-use 由 YueChen 开源，通过 USB 将 iPhone 画面传到 Mac，Mac 再经蓝牙模拟鼠标和键盘操作手机。 / iPhone-use, open-sourced by YueChen, mirrors iPhone screen to Mac over USB and lets Mac simulate mouse and keyboard to operate the iPhone via Bluetooth.[^iphone-use-open-source]
- 接入 MCP 后，AI 能查看屏幕、点击和输入，无需开启 iPhone 开发者模式或安装测试程序。 / After MCP integration, AI can view the screen, click, and input without enabling iPhone Developer Mode or installing test apps.[^iphone-use-open-source]
- 改造版接入 Mac 本地 OCR，支持按文字定位点按钮，画面未变化时响应可达 15 毫秒。 / The modified version integrates Mac local OCR to locate and click buttons by text, with 15 ms response when the screen is unchanged.[^iphone-use-open-source]
- 支持增量差异模式和多步连续动作，帖文称 Token 与耗时省去 90%。 / It supports incremental diff mode and multi-step continuous actions; the post claims 90% savings in tokens and time.[^iphone-use-open-source]
- 补齐中文拼音输入、自动切换中英输入法及通用剪贴板粘贴，并支持后台静默待机与 60 秒闲置自动暂停。 / It adds Chinese pinyin input, automatic Chinese-English input method switching, universal clipboard paste, background silent standby, and automatic pause after 60 seconds of idleness.[^iphone-use-open-source]
- 底层修复了 USB 视频采集启动黑屏、蓝牙断线重连、指针定位不准及 Mac 睡眠时被手机蓝牙异常唤醒等问题。 / Underlying fixes address USB video capture startup black screen, Bluetooth disconnection reconnection, inaccurate pointer positioning, and abnormal Mac wake by iPhone Bluetooth during sleep.[^iphone-use-open-source]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2117564137488461958)。 / Original: [link](https://x.com/0xLogicrw/status/2117564137488461958).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^iphone-use-open-source]: iPhone-use Open-Source: AI Operates iPhone via Mac USB Mirroring and Bluetooth Input
