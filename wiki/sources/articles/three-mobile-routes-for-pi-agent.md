---
type: Source
title: "Pi 移动端三条路"
title_en: "Three Mobile Routes for Pi Agent"
description: "帖文整理了在手机和网页上使用 Pi Agent 的三种方案：直接安装手机 APP、安装 Web 插件、使用第三方 Agent 管理工具。"
description_en: "The post summarizes three schemes for using Pi Agent on mobile and web: installing mobile apps, adding a Web plugin, and using third-party Agent management tools."
resource: https://x.com/xiaomovps/status/2118998894931530101
tags: [pi-agent, mobile-agent, coding-agent, third-party-tools]
sources:
  - id: 94cf40bb5a2abe49
    resource: https://x.com/xiaomovps/status/2118998894931530101
    title: "Three Mobile Routes for Pi Agent"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-07T20:02:45+08:00
---

# Pi 移动端三条路

*Three Mobile Routes for Pi Agent*

帖文称，Pi Agent 现在也能在手机和网页上使用，作者小墨同学整理了三种移动端方案：直接安装 iOS 的 Pi: Local Agent Harness 或 Android 的 Pocket Pi；通过 `pi install npm:@kkkiio/pi-web-ui` 安装 Web 插件并在浏览器操作；或使用 Herdr、Paseo、Whip 等第三方工具管理多个 Coding Agent。作者表示个人更偏好第三种方案，因需同时管理 Claude Code、Codex 等工具，并称当前 Pi 移动端生态尚未完全成熟。[^94cf40bb5a2abe49]

The post says Pi Agent is now available on mobile and web, and the author outlines three routes: installing native mobile apps (Pi: Local Agent Harness on iOS, Pocket Pi on Android), adding the pi-web-ui Web plugin, or using third-party managers such as Herdr, Paseo, and Whip. The author prefers the third option for managing multiple coding agents alongside Claude Code and Codex, and notes the mobile ecosystem is still immature.[^94cf40bb5a2abe49]

## 摘要 / Summary

- iOS 方案：Pi: Local Agent Harness 已上架 App Store，支持在 iPhone、iPad 本地运行 Pi，并可管理文件、运行 Shell 与使用 Skills。 / iOS option: Pi: Local Agent Harness is on the App Store and supports running Pi locally on iPhone/iPad, managing files, running Shell, and using Skills.[^94cf40bb5a2abe49]
- Android 方案：Pocket Pi 将 Pi 与 Termux 打包进 APK，无需 Root，并可通过无障碍权限操作手机内其他 App；帖文称安卓版本仍较早期。 / Android option: Pocket Pi bundles Pi with Termux in an APK, requires no root, and can operate other phone apps via accessibility permissions; the post says the Android version is still early-stage.[^94cf40bb5a2abe49]
- Web 插件：执行 `pi install npm:@kkkiio/pi-web-ui` 并重启 Pi 后输入 `/webui`，即可通过浏览器查看工具调用、Thinking 和历史记录；远程访问需配置内网连接，不宜直接暴露公网。 / Web plugin: run `pi install npm:@kkkiio/pi-web-ui`, restart Pi, then enter `/webui` to access tool calls, Thinking, and history via browser; remote access requires internal network configuration and should not expose the public network directly.[^94cf40bb5a2abe49]
- 第三方管理工具：Herdr、Paseo、Whip 等可管理多个 Agent，其中 Paseo 支持 iOS、Android 和 Web，可同时管理 Pi、Claude Code、Codex；Whip 通过 SSH 连接电脑上的 Agent。 / Third-party managers: Herdr, Paseo, and Whip can manage multiple agents; Paseo supports iOS, Android, and Web and can manage Pi, Claude Code, and Codex simultaneously, while Whip connects to agents on a computer via SSH.[^94cf40bb5a2abe49]
- 作者偏好：作者更喜欢第三种方案，因为平时不仅使用 Pi，还需同时管理 Claude Code、Codex 等工具。 / Author preference: the author prefers the third option because they use not only Pi but also need to manage Claude Code, Codex, and other tools simultaneously.[^94cf40bb5a2abe49]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2118998894931530101)。 / Original: [link](https://x.com/xiaomovps/status/2118998894931530101).
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活 / Multi-harness routing infra ≠ personal-assistant dispatch](../../topics/multi-harness-router-vs-personal-dispatch.md)

[^94cf40bb5a2abe49]: Three Mobile Routes for Pi Agent
