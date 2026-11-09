---
type: Source
title: "Pinky：DIYgod 开源 AI 真机控制工具，支持 iPhone 与 Android"
title_en: "Pinky: DIYgod's open-source AI real-device control tool supporting iPhone and Android"
description: "DIYgod 开源 Pinky，让 AI Agent 通过 MCP 控制真实 iPhone 和 Android 手机，内置付款等敏感操作人工审批。"
description_en: "DIYgod open-sources Pinky, letting AI Agents control real iPhones and Android phones via MCP, with built-in manual approval for sensitive operations such as payments."
resource: https://x.com/0xLogicrw/status/2119638011763941577
tags: [agents, mobile-control, open-source, mcp, ios, android]
sources:
  - id: pinky-iphone-android-ai-agent
    resource: https://x.com/0xLogicrw/status/2119638011763941577
    title: "Pinky: DIYgod's open-source AI real-device control tool supporting iPhone and Android"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:04:00+08:00
---

# Pinky：DIYgod 开源 AI 真机控制工具，支持 iPhone 与 Android

*Pinky: DIYgod's open-source AI real-device control tool supporting iPhone and Android*

帖文称，RSSHub 作者 DIYgod 开源了 Pinky，让 Codex、Claude Code 等 AI Agent 能够直接操作真实的 iPhone 和安卓手机。该桌面工具支持 Mac、Windows、Linux，通过 MCP 接入后，AI 可查看屏幕、打开 App、点击、滑动和输入文字。安卓端基于 ADB + scrcpy，iOS 端根据系统版本使用 CoreDevice 协议或 WDA。Pinky 还内置付款、转账等敏感按钮的人工审批机制，并默认对银行、钱包和密码管理器等应用隐藏。[^pinky-iphone-android-ai-agent]

According to the post, RSSHub author DIYgod has open-sourced Pinky, enabling AI Agents such as Codex and Claude Code to directly operate real iPhones and Android phones. The desktop tool supports Mac, Windows, and Linux, and after connecting via MCP, AI can view screens, open apps, click, swipe, and input text. Android is based on ADB + scrcpy, while iOS uses the CoreDevice protocol or WDA depending on system version. Pinky also includes manual approval for sensitive buttons such as payments and transfers, and hides banking, wallet, and password manager apps from agents by default.[^pinky-iphone-android-ai-agent]

## 摘要 / Summary

- Pinky 由 RSSHub 作者 DIYgod 开源，GitHub 仓库为 github.com/DIYgod/pinky，安装包十几 MB，为原生应用。 / Pinky is open-sourced by RSSHub author DIYgod, with GitHub repo github.com/DIYgod/pinky; it is a native app with an installer of over ten MB.[^pinky-iphone-android-ai-agent]
- 支持 Mac、Windows、Linux 三桌面平台，AI Agent 通过 MCP 接入后可查看屏幕、打开 App、点击、滑动和输入文字。 / Supports Mac, Windows, and Linux; after MCP access, AI Agents can view screens, open apps, click, swipe, and input text.[^pinky-iphone-android-ai-agent]
- Android 采用 ADB + scrcpy，Android 13 及以上可创建隐藏虚拟屏幕实现后台操作；iOS 27+ 使用 CoreDevice 开发者协议，iOS 17.4 至 26 依赖 WDA 并需 Xcode 签名安装。 / Android uses ADB + scrcpy, with Android 13+ supporting hidden virtual screens for background operation; iOS 27+ uses Apple's CoreDevice developer protocol, while iOS 17.4–26 relies on WDA with Xcode signing.[^pinky-iphone-android-ai-agent]
- 识别付款、转账等敏感按钮时会暂停并等待用户手动批准，60 秒未确认则拒绝执行，批准后还会重新检查界面。 / It pauses and waits for manual user approval when recognizing sensitive buttons such as payments and transfers; execution is rejected if not confirmed within 60 seconds, and the interface is re-checked after approval.[^pinky-iphone-android-ai-agent]
- 银行、钱包、密码管理器默认对 Agent 隐藏，密码和验证码输入框禁止自动填写，用户可随时接管，每一步都有录屏并保存在本地电脑上。 / Banking, wallet, and password manager apps are hidden from agents by default; password and verification code input fields prohibit auto-fill; users can take over anytime, and every step is screen-recorded and stored locally.[^pinky-iphone-android-ai-agent]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2119638011763941577)。 / Original: [link](https://x.com/0xLogicrw/status/2119638011763941577).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)
- Topic: [账号与资产安全卫生 / Account and asset security hygiene](../../topics/account-and-asset-security-hygiene.md)

[^pinky-iphone-android-ai-agent]: Pinky: DIYgod's open-source AI real-device control tool supporting iPhone and Android
