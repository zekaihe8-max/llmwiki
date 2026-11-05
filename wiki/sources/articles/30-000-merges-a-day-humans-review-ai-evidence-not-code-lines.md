---
type: Source
title: "一天合并三万次，人看的是 AI 交上来的证据"
title_en: "30,000 Merges a Day: Humans Review AI Evidence, Not Code Lines"
description: "Anthropic 靠让 Claude 先像真实用户一样运行并出具录屏、截图等证据，使人无需逐行审代码，日合并量从 2500 次增至 3 万次，验证成为新瓶颈。"
description_en: "Anthropic has Claude act like a real user and produce recordings and screenshots as evidence, so humans need not review every line; daily merges rose from 2,500 to 30,000, making verification the new bottleneck."
resource: https://x.com/dotey/status/2118164405594595702
tags: [ai-coding, software-factory, agent-governance, verification]
sources:
  - id: dotey-anthropic-30k-ai-evidence
    resource: https://x.com/dotey/status/2118164405594595702
    title: "30,000 Merges a Day: Humans Review AI Evidence, Not Code Lines"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-05T20:04:06+08:00
---

# 一天合并三万次，人看的是 AI 交上来的证据

*30,000 Merges a Day: Humans Review AI Evidence, Not Code Lines*

「帖文称」Anthropic 今年 5 月每天合并约 2500 次代码变更，9 月超过 3 万次；负责 Claude Code 开发者体验的 Addy Osmani 表示，审查流程先由 Claude 像真实用户一样跑端到端测试并自动修问题，人只看 AI 交上的证据，如浏览器操作录屏和设备截图，验证已取代逐行读代码成为瓶颈。[^dotey-anthropic-30k-ai-evidence]

The post says Anthropic merged about 2,500 code changes daily in May and over 30,000 by September; Addy Osmani, responsible for Claude Code developer experience, says Claude first acts like a real user, runs end-to-end tests, and auto-fixes issues, while humans only review AI-provided evidence such as browser recordings and screenshots, making verification—not line-by-line reading—the bottleneck.[^dotey-anthropic-30k-ai-evidence]

## 摘要 / Summary

- Anthropic 每日代码合并次数从 5 月的约 2500 次增至 9 月的超过 3 万次，涨了十几倍。 / Anthropic daily code merges rose from about 2,500 in May to over 30,000 in September, more than a tenfold increase.[^dotey-anthropic-30k-ai-evidence]
- 审查流程先由 Claude 像真实用户一样跑端到端测试、打开页面、运行规范检查，发现问题后自动修改；人只查看 AI 提供的证据，如浏览器操作录屏和设备截图。 / The review process first has Claude act like a real user—running end-to-end tests, opening pages, and running lint checks—then automatically fixing issues; humans only inspect AI-provided evidence such as browser session recordings and device screenshots.[^dotey-anthropic-30k-ai-evidence]
- 团队把最佳实践和“品味”写入 CLAUDE.md、AGENTS.md 等供 AI 参考的项目说明文件，作为代码审查的依据。 / The team writes best practices and “taste” into AI-facing project files such as CLAUDE.md and AGENTS.md as the basis for code review.[^dotey-anthropic-30k-ai-evidence]
- 对谈提到的三类最常用测试包括端到端测试、属性测试和视觉验证测试，目标是获得足够信心以实现自动合并。 / The three most-used test types mentioned are end-to-end testing, property-based testing, and visual verification testing, aiming for enough confidence to auto-merge.[^dotey-anthropic-30k-ai-evidence]
- 企业对 AI 智能体最关心的是控制、权限分配和沙箱隔离，以防智能体越界访问系统或部署到生产环境。 / Enterprises are most concerned with controlling AI agents, assigning permissions, and sandbox isolation to prevent agents from overstepping system access or deploying to production.[^dotey-anthropic-30k-ai-evidence]
- Addy 认为 AI 写的 PR 应该标注出来，责任归属不变，即使是让 Claude 完成的工作，出了问题仍由人负责修复。 / Addy believes AI-written PRs should be labeled, responsibility remains unchanged, and even if Claude did the work, the person is still responsible for fixing problems.[^dotey-anthropic-30k-ai-evidence]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2118164405594595702)。 / Original: [link](https://x.com/dotey/status/2118164405594595702).
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^dotey-anthropic-30k-ai-evidence]: 30,000 Merges a Day: Humans Review AI Evidence, Not Code Lines
