---
type: Source
title: 小墨介绍 DSH-Android 开源版
title_en: Xiaomo introduces open-source DSH-Android
description: 小墨介绍 DSH-Android 开源版：在 Android 本机运行 DSH 引擎，经无障碍服务操作 App，配合 Shizuku 后台执行，并保留人工接管与插件限制。
description_en: "Xiaomo introduces open-source DSH-Android: an on-device DSH engine operates apps through accessibility, supports background work with Shizuku, and retains human handoff and plugin limits."
resource: https://x.com/xiaomovps/status/2116096229272637527
tags: [deepseek-harness, android, computer-use, accessibility, shizuku]
sources:
  - id: xiaomovps-dsh-android
    resource: https://x.com/xiaomovps/status/2116096229272637527
    title: Xiaomo introduces DSH-Android
    author: human:xiaomovps
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:24:06+08:00
---

# 小墨介绍 DSH-Android 开源版

*Xiaomo introduces open-source DSH-Android*

小墨介绍由卡比卡比（@jakevin7）制作的 DSH-Android 开源版，称其将 DeepSeek Harness 引擎直接放进 Android 手机。以下为帖文报告的能力与限制，未独立验证。[^xiaomovps-dsh-android]

Xiaomo introduces open-source DSH-Android by 卡比卡比 (@jakevin7), describing a DeepSeek Harness engine running directly on Android phones. The capabilities and limits below are reported by the post and have not been independently verified.[^xiaomovps-dsh-android]

## 摘要 / Summary

- 本机运行：APK 打包 Node.js 24 与 DSH 引擎，无需 Root、Termux 或额外部署服务器；支持 Android 10 及以上的 ARM64 设备。[^xiaomovps-dsh-android]
- On-device runtime: the APK bundles Node.js 24 and the DSH engine, requiring no root, Termux, or separately deployed server; it supports ARM64 devices on Android 10 and above.[^xiaomovps-dsh-android]

- 操作能力：通过无障碍服务读取屏幕、点击、滑动、输入和打开 App；文中举例包括整理文件、读取 PDF 与 Office 文档及操作常用软件。[^xiaomovps-dsh-android]
- App operation: accessibility services enable screen reading, taps, swipes, text input, and app launching; examples include organizing files, reading PDF and Office documents, and operating everyday software.[^xiaomovps-dsh-android]

- 后台与接管：配合 Shizuku 可在后台屏幕操作其他 App，让用户继续使用手机；登录、验证码或付款等步骤交由人接管。[^xiaomovps-dsh-android]
- Background work and handoff: with Shizuku, the agent can operate other apps on a background screen while the user continues using the phone; login, verification codes, and payments are handed back to a person.[^xiaomovps-dsh-android]

- 自动化：除定时任务外，可按 Wi-Fi 连接、通知、充电或位置条件触发；也可控制亮度、音量、蓝牙和勿扰模式。[^xiaomovps-dsh-android]
- Automation: besides scheduled tasks, triggers can include Wi-Fi connections, notifications, charging, or location; system controls include brightness, volume, Bluetooth, and Do Not Disturb.[^xiaomovps-dsh-android]

- 模型与扩展边界：可配置其他模型服务 API，并提供手机操作、编程和只聊天模式；暂不能像桌面版一样自由安装第三方插件，作者已将其列入计划。本机运行引擎不等于模型推理也在本机。[^xiaomovps-dsh-android]
- Model and extension scope: users can configure APIs for other model services and choose phone-operation, coding, or chat-only modes; freely installing third-party plugins as on desktop is not yet supported and is planned. An on-device engine does not establish on-device model inference.[^xiaomovps-dsh-android]

## 相关 / Related

- 原帖 / Original post: [DSH-Android](https://x.com/xiaomovps/status/2116096229272637527)
- 帖中项目链接 / Project link in the post: [GitHub](https://t.co/4iDIhZHegC)
- Topic: [Computer Use](../../topics/computer-use.md)

[^xiaomovps-dsh-android]: Xiaomo introduces DSH-Android
