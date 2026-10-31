---
type: Source
title: "Magpie v0.1.2323 自重启与平滑端口交接"
title_en: "Magpie v0.1.2323 self-restart with seamless port handover"
description: "Magpie v0.1.2323 安装新版后会让正在运行的实例自重启，macOS/Linux 上端口交接不断开，旧进程完成请求后再交接，升级代理可走 Magpie。"
description_en: "Magpie v0.1.2323 restarts a running instance after update; on macOS/Linux the port handover stays connected and in-flight requests finish in the old process, so proxy upgrades can go through Magpie."
resource: https://x.com/yetone/status/2116377295758000165
tags: [magpie, self-restart, proxy-upgrade, zero-downtime]
sources:
  - id: magpie-0-1-2323-self-restart
    resource: https://x.com/yetone/status/2116377295758000165
    title: "Magpie v0.1.2323 self-restart with seamless port handover"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-10-31T20:21:28+08:00
---

# Magpie v0.1.2323 自重启与平滑端口交接

*Magpie v0.1.2323 self-restart with seamless port handover*

帖文称，yetone 发布的 Magpie v0.1.2323 更新会让正在运行的 Magpie 自身重启；macOS/Linux 上端口交接不断开，正在跑的请求在旧进程里跑完，所以升级代理也可以走 Magpie。从旧版升到 2323 这次还要手动重启一下，之后就不用了。Windows 上不断正在跑的请求，但重启时端口会短暂关闭，还在改。[^magpie-0-1-2323-self-restart]

The post says yetone released Magpie v0.1.2323, which makes a running Magpie restart itself after the update. On macOS/Linux the port handover does not drop connections and in-flight requests finish in the old process, so proxy upgrades can go through Magpie; upgrading from an older version to 2323 still requires one manual restart, after which it is automatic. On Windows running requests are not interrupted, but the port briefly closes on restart and is still being improved.[^magpie-0-1-2323-self-restart]

## 摘要 / Summary

- Magpie v0.1.2323 已上线，安装新版后会让正在运行的 Magpie 自身重启。[^magpie-0-1-2323-self-restart]
- Magpie v0.1.2323 is live; after installing the new version, a running Magpie restarts itself.[^magpie-0-1-2323-self-restart]
- macOS/Linux 上端口交接不断开，正在跑的请求在旧进程里跑完，升级代理也可以走 Magpie。[^magpie-0-1-2323-self-restart]
- On macOS/Linux the port handover stays connected and in-flight requests finish in the old process, so proxy upgrades can go through Magpie.[^magpie-0-1-2323-self-restart]
- 从旧版升到 2323 这次还要手动重启一次，之后就不用了。[^magpie-0-1-2323-self-restart]
- Upgrading to 2323 from an older version still requires one manual restart; after that it is not needed.[^magpie-0-1-2323-self-restart]
- Windows 上不断正在跑的请求，但重启时端口会短暂关闭，还在改。[^magpie-0-1-2323-self-restart]
- On Windows running requests are not interrupted, but the port briefly closes on restart and is still being improved.[^magpie-0-1-2323-self-restart]

## 相关 / Related

- 原文：[链接](https://x.com/yetone/status/2116377295758000165)。 / Original: [link](https://x.com/yetone/status/2116377295758000165).
- Topic: [托管优于自建代理节点 / Prefer managed over self-hosted proxy nodes](../../topics/managed-over-selfhosted-proxy-nodes.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活 / Multi-harness routing infra ≠ personal-assistant dispatch](../../topics/multi-harness-router-vs-personal-dispatch.md)

[^magpie-0-1-2323-self-restart]: Magpie v0.1.2323 self-restart with seamless port handover
