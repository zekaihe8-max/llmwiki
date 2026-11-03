---
type: Source
title: "AI 写代码把 Git 写爆了"
title_en: "AI-Written Code Overwhelms Git"
description: "OpenAI 与 Anthropic 分别自研 Git 后端与新源码管理系统，以应对 AI agent 编写代码导致的版本控制瓶颈"
description_en: "OpenAI and Anthropic built custom Git backends and new source-control systems to address version-control bottlenecks caused by AI agents writing code at scale."
resource: https://x.com/dotey/status/2117484277277286623
tags: [ai-coding, git, monorepo, agents, source-control]
sources:
  - id: dotey-ai-code-git-scaling
    resource: https://x.com/dotey/status/2117484277277286623
    title: "AI-Written Code Overwhelms Git"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:01:58+08:00
---

# AI 写代码把 Git 写爆了

*AI-Written Code Overwhelms Git*

「帖文称」AI agent 写代码太快，Git 等版本控制系统成为公司开发瓶颈；OpenAI 保留 Git 客户端、换用自研 Pando 服务器后端，Anthropic 则自研 Scion 系统替换 Git，两套系统均不对外提供。[^dotey-ai-code-git-scaling]

The post says AI agents write code too fast, making version-control systems a development bottleneck; OpenAI keeps Git clients but switches to its self-built Pando server backend, while Anthropic replaces Git with its own Scion system, and neither is offered externally.[^dotey-ai-code-git-scaling]

## 摘要 / Summary

- OpenAI 推送中位等待时间缩短近 80%，每天分发近 1PB Git 数据，最高每小时发出 57TB。 / OpenAI cut push median wait time by nearly 80%, distributes nearly 1 PB of Git data daily, peaking at 57 TB per hour.[^dotey-ai-code-git-scaling]
- Anthropic 服务器 CPU 和内存占用降至原来 Git 镜像的 1/200，CI 拉代码快约 100 倍，CI 节省 25% CPU。 / Anthropic reduced server CPU and memory to 1/200 of old Git mirrors, made CI fetches about 100x faster, and saved 25% CPU on CI.[^dotey-ai-code-git-scaling]
- OpenAI 主线提交量从 2024 年第一季度基准到 2026 年第三季度近 15 倍，第四季度预计约 25 倍；Anthropic 每日合入改动从 5 月约 2500 个增至 9 月超过 3 万个。 / OpenAI mainline commits rose nearly 15x by 2026 Q3 from a 2024 Q1 baseline and are expected to reach about 25x in Q4; Anthropic daily merged changes grew from about 2,500 in May to over 30,000 in September.[^dotey-ai-code-git-scaling]
- Pando 核心设计出自一名工程师，代码主要由 Codex 驱动的 agent 写，4 月起承接生产流量；Scion 由 7 人用 5 个月完成，Claude 重写的 Git 导入程序内存降至 1/20、速度快 4 倍。 / Pando's core design came from one engineer with code mainly written by a Codex-driven agent, serving production traffic since April; Scion was built by 7 people in 5 months, and Claude's rewrite of the Git importer cut memory to 1/20 and quadrupled speed.[^dotey-ai-code-git-scaling]
- 两套系统都不对外提供；OpenAI 已将部分 Git 修复提交给官方并进入正式版，Anthropic 仅分享设计思路供开源社区吸收。 / Neither system is offered externally; OpenAI has submitted some Git fixes to the official project, with several in releases, while Anthropic shares only design concepts for the open-source community.[^dotey-ai-code-git-scaling]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2117484277277286623)。 / Original: [link](https://x.com/dotey/status/2117484277277286623).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)

[^dotey-ai-code-git-scaling]: AI-Written Code Overwhelms Git
