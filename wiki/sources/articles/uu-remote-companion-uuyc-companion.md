---
type: Source
title: "UU远程伴侣（UUyc companion）"
title_en: "UU Remote Companion (UUyc companion)"
description: "一款为 Mac 版 UU远程 提供自动虚拟屏幕与黑边消除的第三方菜单栏工具"
description_en: "A third-party menu-bar tool for Mac UU Remote that automatically creates matching virtual screens and eliminates letterboxing"
resource: https://github.com/aoyamashou/UUyc-companion
tags: [macos, remote-desktop, virtual-display, open-source]
sources:
  - id: uuyc-companion
    resource: https://github.com/aoyamashou/UUyc-companion
    title: "UU Remote Companion (UUyc companion)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:32:33+08:00
---

# UU远程伴侣（UUyc companion）

*UU Remote Companion (UUyc companion)*

帖文称，UU远程伴侣（UUyc companion）是一款非官方的 Mac 第三方工具，专为改善 Mac 版 UU远程 的远程体验而开发，能在 iPad 或手机连接时自动准备与设备同分辨率的高清虚拟屏幕，消除上下黑边，远程结束后自动恢复屏幕与窗口布局。[^uuyc-companion]

According to the post, UU Remote Companion (UUyc companion) is an unofficial third-party Mac tool developed to improve the Mac version of UU Remote; it automatically prepares a HiDPI virtual screen matching the connected device's resolution when an iPad or phone connects, eliminates letterboxing, and restores displays and window layout after the session ends.[^uuyc-companion]

## 摘要 / Summary

- 支持 macOS 14 Sonoma 或更新版本，需在被操控的 Mac 上安装 UU远程 并已登录设备。[^uuyc-companion]
- Supports macOS 14 Sonoma or later; UU Remote must be installed on the controlled Mac with devices logged in.[^uuyc-companion]
- 自动从 UU远程 导入已登录设备，为平板和手机分别填写横屏物理分辨率，改完自动保存并立即生效。[^uuyc-companion]
- Automatically imports logged-in devices from UU Remote; enter landscape physical resolution per tablet/phone, changes save automatically and take effect immediately.[^uuyc-companion]
- 可选在远程期间关闭除虚拟屏之外的所有屏幕，结束后自动恢复；快捷键 Control+Option+Command+9 可立即恢复所有屏幕。[^uuyc-companion]
- Optionally turns off all displays except the virtual screen during remote sessions and restores them afterward; Control+Option+Command+9 immediately restores all screens.[^uuyc-companion]
- 不联网、不收集任何数据，使用作者自签证书但未经过苹果公证。[^uuyc-companion]
- No network connection, no data collection; signed with the author's own certificate but not Apple-notarized.[^uuyc-companion]
- 依赖 macOS 未公开接口（CGVirtualDisplay、CGSConfigureDisplayEnabled），大版本升级后可能失效。[^uuyc-companion]
- Relies on unpublished macOS interfaces (CGVirtualDisplay, CGSConfigureDisplayEnabled) and may break after major macOS upgrades.[^uuyc-companion]
- 采用 MIT 许可证，源码托管于 GitHub，可用 Xcode 命令行工具从源码构建。[^uuyc-companion]
- Licensed under MIT, source hosted on GitHub, buildable from source with Xcode command-line tools.[^uuyc-companion]

## 相关 / Related

- 原文：[链接](https://github.com/aoyamashou/UUyc-companion)。 / Original: [link](https://github.com/aoyamashou/UUyc-companion).
- Topic: [menubar 管理工具真空 / Menubar management tool gap](../../topics/menubar-management-tool-gap.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [AI 协助的系统破解移植风潮 / AI-assisted OS crack-and-port wave](../../topics/ai-assisted-os-port-wave.md)

[^uuyc-companion]: UU Remote Companion (UUyc companion)
