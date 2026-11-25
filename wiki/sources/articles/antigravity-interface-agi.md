---
type: Source
title: "反重力接口 (Antigravity Interface, AGI)"
title_en: "Antigravity Interface (AGI)"
description: "一款为 Antigravity 提供代理接口的 VS Code 扩展，通过 SSH 反向隧道将远程 Linux 服务器流量路由至本地代理。"
description_en: "A VS Code extension providing a proxy interface for Antigravity, routing remote Linux server traffic through local proxies via SSH reverse tunnels."
resource: https://github.com/wang-muhan/antigravity-interface
tags: [antigravity, proxy, ssh, vscode-extension, linux]
sources:
  - id: antigravity-interface
    resource: https://github.com/wang-muhan/antigravity-interface
    title: "Antigravity Interface (AGI)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:00:19+08:00
---

# 反重力接口 (Antigravity Interface, AGI)

*Antigravity Interface (AGI)*

「Antigravity Interface (AGI)」是 Antigravity 的代理接口扩展，旨在绕过服务器防火墙，将远程流量安全地路由到本地或指定网关。该版本仅支持 Linux 远程服务器。[^antigravity-interface]

Antigravity Interface (AGI) is a proxy interface extension for Antigravity designed to bypass server firewalls by securely routing remote traffic through local or designated gateways. This version supports Linux remote servers only.[^antigravity-interface]

## 摘要 / Summary

- 自动代理设置：自动部署 mgraftcp 并配置代理。[^antigravity-interface]
- Automated Proxy Setup: Deploys mgraftcp and configures proxies automatically.[^antigravity-interface]
- SSH 反向隧道：通过 SSH 端口转发将流量路由至本地代理。[^antigravity-interface]
- SSH Reverse Tunnel: Routes traffic through your local proxy via SSH port forwarding.[^antigravity-interface]
- 进程重定向：自动拦截并重定向语言服务器进程。[^antigravity-interface]
- Process Redirection: Automatically intercepts and redirects language server processes.[^antigravity-interface]
- 要求包括 SSH 访问权限、Linux 远程服务器（x86_64 或 arm64）以及本地运行的代理（如 Clash、V2Ray）。[^antigravity-interface]
- Requirements include SSH access, a Linux remote server (x86_64 or arm64), and a local proxy such as Clash or V2Ray.[^antigravity-interface]
- 该扩展的设置包括 enableLocalForwarding、localProxyPort、remoteProxyHost 和 remoteProxyPort。[^antigravity-interface]
- Settings include enableLocalForwarding, localProxyPort, remoteProxyHost, and remoteProxyPort.[^antigravity-interface]

## 相关 / Related

- 原文：[链接](https://github.com/wang-muhan/antigravity-interface)。 / Original: [link](https://github.com/wang-muhan/antigravity-interface).
- Topic: [托管优于自建代理节点 / Prefer managed over self-hosted proxy nodes](../../topics/managed-over-selfhosted-proxy-nodes.md)
- Topic: [远程 AI Coding 时笔记本只需轻与续航 / Laptops need only lightness and battery when AI coding is remote](../../topics/laptop-light-battery-remote-ai-coding.md)
- Topic: [手机连自有服务器操控 Agent 工作台 / Phone + own server as a mobile agent workbench](../../topics/phone-own-server-agent-workbench.md)

[^antigravity-interface]: Antigravity Interface (AGI)
