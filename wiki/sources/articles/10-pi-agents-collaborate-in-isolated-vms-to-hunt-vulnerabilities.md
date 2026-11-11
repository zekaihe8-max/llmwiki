---
type: Source
title: "10 个 Pi Agent 在隔离虚拟机里协同找漏洞"
title_en: "10 Pi Agents Collaborate in Isolated VMs to Hunt Vulnerabilities"
description: "开发者借助 pi-intercom 插件，让 10 个搭配 DeepSeek V4.1 的 Pi Agent 在隔离虚拟机中互相通信、分工协作，共同寻找可复现漏洞。"
description_en: "A developer uses the pi-intercom plugin to let 10 DeepSeek V4.1-powered Pi Agents communicate and collaborate to jointly hunt for reproducible vulnerabilities in isolated VMs."
resource: https://x.com/xiaomovps/status/2120461819433353576
tags: [agents, multi-agent, deepseek, pi-agent, vulnerability-research]
sources:
  - id: pi-intercom-ten-agents-deepseek
    resource: https://x.com/xiaomovps/status/2120461819433353576
    title: "10 Pi Agents Collaborate in Isolated VMs to Hunt Vulnerabilities"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T20:04:47+08:00
---

# 10 个 Pi Agent 在隔离虚拟机里协同找漏洞

*10 Pi Agents Collaborate in Isolated VMs to Hunt Vulnerabilities*

「帖文称」开发者在隔离虚拟机中同时运行 10 个 Pi Agent，全部搭配 DeepSeek V4.1，让它们互相交流、分享发现并一起寻找项目中可复现的漏洞。关键在于 pi-intercom 插件，它解决不同 Pi 会话间的通信问题，支持会话互通、任务协作和通过 /handover 进行任务交接。帖文还提到，Pi Agent 在 21 组 Agent Harness 横评中暂居第二，搭配 DeepSeek 表现尤为突出。[^pi-intercom-ten-agents-deepseek]

The post says a developer ran 10 Pi Agents simultaneously in isolated virtual machines, all paired with DeepSeek V4.1, to communicate, share findings, and jointly hunt for reproducible vulnerabilities. The key enabler is the pi-intercom plugin, which provides session interop, task collaboration, and /handover task handoffs. The post also notes Pi Agent ranked second among 21 Agent Harness evaluations, performing especially well with DeepSeek.[^pi-intercom-ten-agents-deepseek]

## 摘要 / Summary

- 10 个 Pi Agent 同时运行，全部搭配 DeepSeek V4.1[^pi-intercom-ten-agents-deepseek]
- 10 Pi Agents run simultaneously, all paired with DeepSeek V4.1[^pi-intercom-ten-agents-deepseek]
- pi-intercom 插件实现不同 Pi 会话间的发现、消息发送与上下文共享[^pi-intercom-ten-agents-deepseek]
- The pi-intercom plugin enables discovery, messaging, and context sharing across different Pi sessions[^pi-intercom-ten-agents-deepseek]
- 支持通过 /handover 命令将任务进度和上下文交给另一个 Pi 继续处理[^pi-intercom-ten-agents-deepseek]
- Supports /handover to transfer task progress and context to another Pi for continued processing[^pi-intercom-ten-agents-deepseek]
- 多个 Pi 仍需分别启动和安排任务，插件主要负责通信而非调度[^pi-intercom-ten-agents-deepseek]
- Multiple Pi still need separate startup and task arrangement; the plugin handles communication rather than scheduling[^pi-intercom-ten-agents-deepseek]
- 帖文称 Pi Agent 在 21 组 Agent Harness 横评中暂居第二，搭配 DeepSeek 表现出色[^pi-intercom-ten-agents-deepseek]
- The post says Pi Agent ranked second in 21 Agent Harness evaluations, performing especially well with DeepSeek[^pi-intercom-ten-agents-deepseek]
- 作者认为多独立 Agent 组队方式优于单主 Agent 调度多个 Subagent 的模式[^pi-intercom-ten-agents-deepseek]
- The author considers multi-independent-agent teaming preferable to a single main agent scheduling multiple subagents[^pi-intercom-ten-agents-deepseek]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2120461819433353576)。 / Original: [link](https://x.com/xiaomovps/status/2120461819433353576).
- Topic: [网防 Agent Swarm 品类 / Agent swarms for cyber defense](../../topics/agent-swarms-cyber-defense.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)

[^pi-intercom-ten-agents-deepseek]: 10 Pi Agents Collaborate in Isolated VMs to Hunt Vulnerabilities
