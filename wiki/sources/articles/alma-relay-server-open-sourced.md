---
type: Source
title: "Alma Relay Server 开源"
title_en: "Alma Relay Server Open Sourced"
description: "Alma 开源自建中继服务器，支持 Cloudflare Workers 或 Docker 部署，实现端到端加密的远程桌面访问。"
description_en: "Alma open-sources its self-hosted relay server, deployable via Cloudflare Workers or Docker, enabling end-to-end encrypted remote desktop access."
resource: https://x.com/yetone/status/2116599592930488707
tags: [alma-relay, self-hosted, remote-desktop, open-source, cloudflare-workers, docker]
sources:
  - id: fa5bce00423b8cd5
    resource: https://x.com/yetone/status/2116599592930488707
    title: "Alma Relay Server Open Sourced"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:02:54+08:00
---

# Alma Relay Server 开源

*Alma Relay Server Open Sourced*

帖文称，Alma 的 Relay Server 已开源，用户可通过 Cloudflare Workers 一键部署（免费套餐即可）或用 Docker 一条命令自动 HTTPS，实现端到端加密，中继仅能看到密文；在“设置 → 远程访问 → 使用自建中继”中填入地址即可启用。[^fa5bce00423b8cd5]

The post says Alma's Relay Server is now open source, allowing one-click deployment on Cloudflare Workers (free tier sufficient) or a single Docker command with automatic HTTPS; end-to-end encryption means the relay sees only ciphertext, and users enable it under Settings → Remote Access → Use self-hosted relay by entering the address.[^fa5bce00423b8cd5]

## 摘要 / Summary

- Alma 的 Relay Server 已开源，GitHub 仓库为 yetone/alma-relay。 / Alma's Relay Server is open sourced; the GitHub repo is yetone/alma-relay.[^fa5bce00423b8cd5]
- 支持 Cloudflare Workers 一键部署，免费套餐足够使用。 / Supports one-click deployment on Cloudflare Workers; the free tier is sufficient.[^fa5bce00423b8cd5]
- 可用 Docker 一条命令部署，并自动配置 HTTPS。 / Can be deployed with a single Docker command, with automatic HTTPS.[^fa5bce00423b8cd5]
- 采用端到端加密，中继服务器只能看到密文。 / Uses end-to-end encryption; the relay can only see ciphertext.[^fa5bce00423b8cd5]
- 用户在“设置 → 远程访问 → 使用自建中继”中填入中继地址即可启用。 / Users enable it by entering the relay address under Settings → Remote Access → Use self-hosted relay.[^fa5bce00423b8cd5]

## 相关 / Related

- 原文：[链接](https://x.com/yetone/status/2116599592930488707)。 / Original: [link](https://x.com/yetone/status/2116599592930488707).
- Topic: [可编程边缘计算 / Programmable edge compute](../../topics/programmable-edge-compute.md)
- Topic: [托管优于自建代理节点 / Prefer managed over self-hosted proxy nodes](../../topics/managed-over-selfhosted-proxy-nodes.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [手机连自有服务器操控 Agent 工作台 / Phone + own server as a mobile agent workbench](../../topics/phone-own-server-agent-workbench.md)

[^fa5bce00423b8cd5]: Alma Relay Server Open Sourced
