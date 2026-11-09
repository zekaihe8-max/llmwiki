---
type: Source
title: "Swipt：自动化跑在 iPhone 本机"
title_en: "Swipt: Automation Runs Natively on iPhone"
description: "开源项目 Swipt 让 iPhone 本地运行自动化脚本，读取界面并操控其他 App，并通过 MCP 接受 AI Agent 指令。"
description_en: "Open-source project Swipt lets iPhone run automation scripts locally, read interfaces and control other apps, and accept AI Agent instructions via MCP."
resource: https://x.com/0xLogicrw/status/2119750796476829832
tags: [iphone-automation, mobile-agent, mcp, ios, open-source]
sources:
  - id: swipt-iphone-native-automation
    resource: https://x.com/0xLogicrw/status/2119750796476829832
    title: "Swipt: Automation Runs Natively on iPhone"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:05:00+08:00
---

# Swipt：自动化跑在 iPhone 本机

*Swipt: Automation Runs Natively on iPhone*

帖文称，开源项目 Swipt 可在 iPhone 上自行运行自动化脚本，读取其他 App 界面、点击按钮、输入文字，并通过 MCP 接受 Claude Code 等 AI Agent 指令，无需电脑常驻；它利用苹果 CoreDevice 开发者协议、设备配对与本机环回 VPN 读取无障碍控件树并发送点击、滑动、输入等指令，内置 JavaScript 运行环境并支持 TypeScript 编写的 Swiplet 插件，官方已推出类似「李跳跳」的开屏广告跳过插件，目前优先支持 iOS 27，iOS 17.4 至 26 也在兼容范围内，安装需开发者模式、侧载签名、设备配对和环回 VPN，免费 Apple 账号签名通常每 7 天续期。[^swipt-iphone-native-automation]

The post says open-source project Swipt can run automation scripts natively on iPhone, read other apps' interfaces, click buttons and input text, and accept instructions from AI agents such as Claude Code via MCP without a computer running constantly; it uses Apple's CoreDevice developer protocol, device pairing and local loopback VPN to read the accessibility control tree and send click, swipe and input commands, has a built-in JavaScript runtime and supports TypeScript-written Swiplet plugins, and the official has released a "Li Tiao Tiao"-like splash ad skip plugin; it currently prioritizes iOS 27 with iOS 17.4 to 26 also compatible, installation requires developer mode, sideload signing, device pairing and loopback VPN, and free Apple account signing usually needs renewal every 7 days.[^swipt-iphone-native-automation]

## 摘要 / Summary

- Swipt 直接在 iPhone 上运行自动化服务，安装配置后无需 Mac 常驻，区别于需通过蓝牙、WDA 或开发者接口由电脑控制手机的多数 iPhone Use 项目。 / Swipt runs the automation service directly on iPhone; after setup no Mac needs to stay on, unlike most iPhone Use projects that require a computer to control the phone via Bluetooth, WDA or developer interfaces.[^swipt-iphone-native-automation]
- 它利用苹果 CoreDevice 开发者协议，通过设备配对和本机环回 VPN 读取系统无障碍控件树，获取按钮文字和位置，再发送点击、滑动、输入、双指缩放等指令。 / It uses Apple's CoreDevice developer protocol, device pairing and a local loopback VPN to read the system accessibility control tree, obtain button text and position, then send click, swipe, input and double-tap zoom commands.[^swipt-iphone-native-automation]
- Swipt 内置 JavaScript 运行环境，外部 Agent 可通过 MCP 提交脚本在手机上连续执行多个操作，无需每点一下都重新发起远程控制请求。 / Swipt has a built-in JavaScript runtime; external agents can submit scripts via MCP to execute multiple operations continuously on the phone without launching a new remote-control request for every click.[^swipt-iphone-native-automation]
- 支持用 TypeScript 编写的 Swiplet 自动化插件，可添加独立界面、快捷指令和持续运行的后台任务；官方已做类似「李跳跳」的开屏广告跳过插件。 / It supports Swiplet automation plugins written in TypeScript, adding independent interfaces, shortcuts and continuously running background tasks; the official has made a "Li Tiao Tiao"-like splash ad skip plugin.[^swipt-iphone-native-automation]
- 目前优先支持 iOS 27，iOS 17.4 至 26 也在兼容范围内；安装需要开发者模式、侧载签名、设备配对和环回 VPN，免费 Apple 账号签名通常每 7 天续期，后台服务无法保证始终运行。 / It currently prioritizes iOS 27, with iOS 17.4 to 26 also in the compatibility range; installation requires developer mode, sideload signing, device pairing and loopback VPN, and free Apple account signing usually needs renewal every 7 days, with the background service unable to guarantee always running.[^swipt-iphone-native-automation]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2119750796476829832)。 / Original: [link](https://x.com/0xLogicrw/status/2119750796476829832).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [AI 协助的系统破解移植风潮 / AI-assisted OS crack-and-port wave](../../topics/ai-assisted-os-port-wave.md)

[^swipt-iphone-native-automation]: Swipt: Automation Runs Natively on iPhone
