---
type: Source
title: yetone 谈 Alma iOS 集成 Herdr 原生客户端
title_en: yetone on Alma iOS integrating a native Herdr client
description: yetone 称日常用 Herdr Vibe Coding，外出曾用手机 uu 远程控家里电脑但体验不够 mobile native；他在 Alma iOS App 内集成完整 Herdr 客户端（现仅适配 Claude Code）、端到端加密 relay 与远程桌面，同局域网自动走内网，并计划开源 Alma relay。
description_en: yetone says he uses Herdr for vibe coding daily and previously used phone app uu to remote-control his home PC, but zoom, text/image I/O, and viewing image output felt painful and not mobile native; he integrated a full Herdr client into the Alma iOS app (Claude Code adapter only for now), plus Alma’s end-to-end encrypted relay and remote desktop, auto-switching to LAN when on the same network, and plans to open-source the Alma relay server.
resource: https://x.com/yetone/status/2115516478254624914
tags: [yetone, alma, herdr, ios, mobile, claude-code, relay, remote-desktop, vibe-coding]
sources:
  - id: yetone-alma-ios-herdr-native-client
    resource: https://x.com/yetone/status/2115516478254624914
    title: yetone on Alma iOS integrating a native Herdr client
    author: human:yetone
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:40:00+08:00
date: 2026-10-28
---

# yetone 谈 Alma iOS 集成 Herdr 原生客户端

*yetone on Alma iOS integrating a native Herdr client*

[@yetone](https://x.com/yetone) 称可能大家都知道，他平时都用 Herdr 进行 Vibe Coding；出门在外会在手机上用 uu 远程控制家里的电脑。但通过远程控制电脑里的 Herdr，需要不停放大缩小，文字与图片输入以及查看图片输出都颇痛苦，整个操作体验不够 mobile native，于是一直想做手机端 Herdr 客户端并做出来——目前只适配了 Claude Code。[^yetone-alma-ios-herdr-native-client]

外出要打通内网需要 relay server；他想到 Alma 一直自带端到端加密的 relay server，于是把该能力合并进 Alma iOS App。也就是说，Alma iOS App 内部集成了完整功能的 Herdr 客户端，甚至还有远程桌面功能；会自动判断是否在同一局域网，是则自动切换到内网连接以更快更丝滑；relay server 也是端到端加密的。他以后有时间打算把 Alma relay server 开源，让大家自建 relay。[^yetone-alma-ios-herdr-native-client] 原帖 <https://x.com/yetone/status/2115516478254624914>。

[@yetone](https://x.com/yetone) says he daily uses Herdr for vibe coding and, when away, used phone app uu to remote-control his home PC. Remote-controlling Herdr on the PC meant constant zoom in/out, painful text and image input, and painful viewing of image output—the experience was not mobile native—so he built a mobile Herdr client, currently only adapted for Claude Code.[^yetone-alma-ios-herdr-native-client]

Outbound access needs a relay server; Alma already ships an end-to-end encrypted relay, so he merged that into the Alma iOS app. The Alma iOS app now embeds a full Herdr client plus remote desktop; it auto-detects same-LAN and switches to a local connection for speed; the relay is also end-to-end encrypted. He plans to open-source the Alma relay server when he has time so people can self-host.[^yetone-alma-ios-herdr-native-client] Post: <https://x.com/yetone/status/2115516478254624914>.

## 摘要 / Summary

- **动机**：远程桌面控家里 Herdr 在手机上摩擦大（缩放、图文 I/O、看图输出），不够 mobile native。[^yetone-alma-ios-herdr-native-client]
- **Motivation**: remote-desktop control of home Herdr on phone is high-friction (zoom, text/image I/O, image output)—not mobile native.[^yetone-alma-ios-herdr-native-client]
- **产物**：自研手机端 Herdr 客户端并入 Alma iOS；现仅 Claude Code 适配；含远程桌面。[^yetone-alma-ios-herdr-native-client]
- **Deliverable**: native mobile Herdr client merged into Alma iOS; Claude Code adapter only for now; includes remote desktop.[^yetone-alma-ios-herdr-native-client]
- **联网**：外出依赖 relay；复用 Alma 自带 E2E 加密 relay 并集成进 App；同 LAN 自动切内网；计划开源 Alma relay 供自建。[^yetone-alma-ios-herdr-native-client]
- **Connectivity**: outbound needs relay; reuses Alma’s built-in E2E relay inside the app; auto LAN when co-located; plans to open-source Alma relay for self-host.[^yetone-alma-ios-herdr-native-client]
- **边界**：作者个案与产品自述；未给出 App 下载方式、relay 协议细节或除 Claude Code 外的适配时间表。[^yetone-alma-ios-herdr-native-client]
- **Scope**: author’s personal product narrative; no app distribution link, relay protocol detail, or timeline for adapters beyond Claude Code.[^yetone-alma-ios-herdr-native-client]

## 相关 / Related

- Topic: [手机端 Agent 全链路开发](../../topics/mobile-agent-dev-full-chain.md)
- Topic: [精简核心与社区扩展](../../topics/minimal-core-community-extensions.md)
- Source: [小墨谈 Grok Bot + Cursor 手机全链路开发](./xiaomovps-grok-cursor-mobile-full-chain.md)

[^yetone-alma-ios-herdr-native-client]: yetone on Alma iOS integrating a native Herdr client
