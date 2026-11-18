---
type: Source
title: "外部沙箱为编程智能体提供安全执行环境"
title_en: "External sandboxes for coding agents"
description: "介绍三款可相互兼容的外部沙箱原型，让 Claude Code、Codex 与 Pi 等编程智能体在受控的 Linux 环境中运行命令。"
description_en: "Introduces three compatible external sandbox prototypes that let coding agents such as Claude Code, Codex, and Pi run commands in controlled Linux environments."
resource: https://blog.primeradiant.com/external-sandboxes-for-coding-agents
tags: [agents, sandbox, coding-agent, isolation, security]
sources:
  - id: external-sandboxes-for-coding-agents
    resource: https://blog.primeradiant.com/external-sandboxes-for-coding-agents
    title: "External sandboxes for coding agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T08:37:30+08:00
---

# 外部沙箱为编程智能体提供安全执行环境

*External sandboxes for coding agents*

Prime Radiant 团队发布外部沙箱工具，让 Claude Code、Codex 与 Pi 等编程智能体在仅能访问允许文件夹与主机的 Linux 沙箱中执行命令，并提供 v86、Apple Containers 与 Quicksand 三款兼容原型。[^external-sandboxes-for-coding-agents]

Prime Radiant releases external sandbox tools that let coding agents such as Claude Code, Codex, and Pi execute commands in Linux sandboxes restricted to allowed folders and hosts, with three compatible prototypes: v86, Apple Containers, and Quicksand.[^external-sandboxes-for-coding-agents]

## 摘要 / Summary

- 三款沙箱原型：基于 Node.js 与 WebAssembly 的 v86、基于 Apple Containers 的容器、基于微软 Quicksand 与 QEMU 的虚拟机，三者实现相同协议。[^external-sandboxes-for-coding-agents]
- Three sandbox prototypes: a Node.js/WebAssembly v86 emulator, an Apple Containers container, and a Microsoft Quicksand/QEMU virtual machine, all implementing the same protocol.[^external-sandboxes-for-coding-agents]
- 默认禁止外部网络访问，可通过 --proxy-config 指定允许的主机与 HTTP 方法，并支持凭据替换以保护 API 密钥。[^external-sandboxes-for-coding-agents]
- External network access is blocked by default; --proxy-config can allow specific hosts and HTTP methods, with credential replacement to protect API keys.[^external-sandboxes-for-coding-agents]
- Claude Code 的 Bash 工具可发送到沙箱，但原生 Read 与 Edit 工具仍在主机上运行。[^external-sandboxes-for-coding-agents]
- Claude Code's Bash tool can be sent to the sandbox, while its native Read and Edit tools still run on the host.[^external-sandboxes-for-coding-agents]
- Pi 需要 1.5 或更高版本，使用 external-sandbox-pi 扩展并关闭内置工具，以防扩展加载失败时在本机执行操作。[^external-sandboxes-for-coding-agents]
- Pi requires version 1.5 or later, uses the external-sandbox-pi extension with built-in tools disabled so nothing runs on the local machine if the extension fails.[^external-sandboxes-for-coding-agents]
- v86 服务器默认监听 8686 端口，Apple Containers 使用 8687，Quicksand 使用 8688，三者可并行运行。[^external-sandboxes-for-coding-agents]
- The v86 server listens on port 8686 by default, Apple Containers on 8687, and Quicksand on 8688, so all three can run side by side.[^external-sandboxes-for-coding-agents]

## 相关 / Related

- 原文：[链接](https://blog.primeradiant.com/external-sandboxes-for-coding-agents)。 / Original: [link](https://blog.primeradiant.com/external-sandboxes-for-coding-agents).
- Topic: [前沿训练环境隔离 / Frontier training containment](../../topics/frontier-training-containment.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)

[^external-sandboxes-for-coding-agents]: External sandboxes for coding agents
