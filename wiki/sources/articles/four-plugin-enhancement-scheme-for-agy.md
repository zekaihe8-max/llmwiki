---
type: Source
title: "AGY 四插件增强方案"
title_en: "Four-Plugin Enhancement Scheme for AGY"
description: "帖文分享四个开源插件，分别解决 AGY 额度监控、自动确认、手机端进度与语音、远程 SSH 代理四个痛点。"
description_en: "The post shares four open-source plugins addressing AGY quota monitoring, auto-confirmation, mobile progress/voice, and remote SSH proxy pain points."
resource: https://x.com/xiaomovps/status/2125142562985889888
tags: [agents, coding-agent, open-source-plugins, antigravity]
sources:
  - id: xiaomovps-agy-four-plugins
    resource: https://x.com/xiaomovps/status/2125142562985889888
    title: "Four-Plugin Enhancement Scheme for AGY"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T19:56:38+08:00
---

# AGY 四插件增强方案

*Four-Plugin Enhancement Scheme for AGY*

「帖文称」小墨同学为 Antigravity（AGY）搭建了一套仅用四个开源插件的增强配置，旨在补齐额度不透明、确认弹窗中断、离开电脑无法看进度以及远程连接断联等写代码痛点。[^xiaomovps-agy-four-plugins]

The post says user @xiaomovps built an AGY enhancement setup with just four open-source plugins to patch pain points such as opaque quotas, confirmation popups interrupting work, inability to check progress away from the computer, and remote connection drops.[^xiaomovps-agy-four-plugins]

## 摘要 / Summary

- 帖文称，antigravity-quota 插件可读取本地状态，通过 /quota 命令查看 AGY 5 小时与周额度剩余。[^xiaomovps-agy-four-plugins]
- The post says antigravity-quota reads local status and lets users check remaining 5-hour and weekly quotas via /quota.[^xiaomovps-agy-four-plugins]
- AntiGravity-AutoAccept 插件可自动点击确认弹窗，并自带危险命令黑名单以避免高危操作。[^xiaomovps-agy-four-plugins]
- AntiGravity-AutoAccept automatically clicks confirmation popups and includes a dangerous-command blocklist to prevent risky operations.[^xiaomovps-agy-four-plugins]
- Antigravity Link 插件支持手机扫码在局域网内实时查看状态、发指令，并补回语音输入。[^xiaomovps-agy-four-plugins]
- Antigravity Link supports scanning a code to view status and send commands over LAN in real time, and restores voice input.[^xiaomovps-agy-four-plugins]
- antigravity-interface 插件无需 root 权限，通过 SSH 反向隧道将远端代理转回本机，稳定远程开发连接。[^xiaomovps-agy-four-plugins]
- antigravity-interface requires no root and uses SSH reverse tunneling to route remote proxy back to the local machine for stable remote development.[^xiaomovps-agy-four-plugins]
- 作者强调这四个插件均不改 AGY 本体文件，组合使用即可补齐高频痛点。[^xiaomovps-agy-four-plugins]
- The author stresses that none of the four plugins modify AGY's core files, and together they cover frequent pain points.[^xiaomovps-agy-four-plugins]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2125142562985889888)。 / Original: [link](https://x.com/xiaomovps/status/2125142562985889888).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)

[^xiaomovps-agy-four-plugins]: Four-Plugin Enhancement Scheme for AGY
