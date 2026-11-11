---
type: Source
title: "30 名工程师 12 周重建 Shopify 商家 App，Agent 编写大部分代码"
title_en: "30 Engineers Rebuild Shopify Merchant App in 12 Weeks, Agents Write Most of the Code"
description: "Shopify 团队用 30 名工程师和编程 Agent 在 12 周内将 300 多页面的商家 App 从 React Native 重建为 Swift 和 Kotlin 原生应用，重点投入验证与审查流程。"
description_en: "Shopify's team used 30 engineers and coding agents to rebuild its 300+ screen merchant app from React Native to Swift and Kotlin in 12 weeks, focusing on verification and review processes."
resource: https://x.com/shao__meng/status/2120335490524365241
tags: [agents, shopify, native-app, ai-coding, engineering]
sources:
  - id: shopify-agent-rebuild-12-weeks
    resource: https://x.com/shao__meng/status/2120335490524365241
    title: "30 Engineers Rebuild Shopify Merchant App in 12 Weeks, Agents Write Most of the Code"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T20:53:48+08:00
---

# 30 名工程师 12 周重建 Shopify 商家 App，Agent 编写大部分代码

*30 Engineers Rebuild Shopify Merchant App in 12 Weeks, Agents Write Most of the Code*

「帖文称」Shopify 面向商家的 App 由 30 名工程师在 12 周内从 React Native 重建为 iOS（Swift）和 Android（Kotlin）原生应用，覆盖 300 多个页面；Agent 编写了大部分代码，团队将精力转向如何快速、可靠地检查代码是否正确，包括重新设计架构、工具和流程。[^shopify-agent-rebuild-12-weeks]

According to the post, Shopify's merchant app was rebuilt by 30 engineers in 12 weeks from React Native to native iOS (Swift) and Android (Kotlin), covering 300+ screens; agents wrote most of the code, and the team focused on how to quickly and reliably verify code correctness, redesigning architecture, tools, and processes.[^shopify-agent-rebuild-12-weeks]

## 摘要 / Summary

- 团队动手前为 Agent 准备了内部架构 Reflex、无需手机或模拟器即可运行业务逻辑的命令行工具，以及偏离规范就会报错的仓库规则。[^shopify-agent-rebuild-12-weeks]
- Before starting, the team prepared an internal architecture called Reflex for cross-platform consistency, a CLI tool to run business logic without a phone or emulator, and repository rules that error on spec deviation.[^shopify-agent-rebuild-12-weeks]
- 工程师放弃先写详细规格，转而以运行中的旧版 App 作为参照，借助内部工具 Helix 将迁移拆成便于审查的小步骤。[^shopify-agent-rebuild-12-weeks]
- Engineers abandoned detailed upfront specs and instead used the running legacy app as a reference, using the internal Helix tool to break migration into small, reviewable steps.[^shopify-agent-rebuild-12-weeks]
- 约 30 人按两人一组负责不同产品区域，每人指挥多个 Agent，每个 PR 必须由人审查，但无需逐行阅读整个页面的大改动。[^shopify-agent-rebuild-12-weeks]
- About 30 people worked in pairs across product areas, each directing multiple agents; every PR required human review, but not line-by-line reading of entire page changes.[^shopify-agent-rebuild-12-weeks]
- Android 启动时间中位数从 1.71 秒降至 0.87 秒，安装包从 80.4MB 降至 47.6MB，内存中位数从 470MB 降至 200MB；iOS 峰值内存中位数从 730MB 降至 190MB。[^shopify-agent-rebuild-12-weeks]
- Android median launch time dropped from 1.71s to 0.87s, install size from 80.4MB to 47.6MB, and median memory from 470MB to 200MB; iOS peak median memory fell from 730MB to 190MB.[^shopify-agent-rebuild-12-weeks]
- Android 无崩溃会话比例从 99.66% 升至 99.98%，崩溃监测每 15 分钟运行一次，内部 Agent 可复现问题并直接提交修复 PR。[^shopify-agent-rebuild-12-weeks]
- Android crash-free sessions rose from 99.66% to 99.98%; crash monitoring runs every 15 minutes, and an internal Slack agent can reproduce issues and submit fix PRs directly.[^shopify-agent-rebuild-12-weeks]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2120335490524365241)。 / Original: [link](https://x.com/shao__meng/status/2120335490524365241).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)
- Topic: [约束重构 PR 的确定性自动合入 / Deterministic automerge for constrained refactor PRs](../../topics/deterministic-refactor-automerge.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^shopify-agent-rebuild-12-weeks]: 30 Engineers Rebuild Shopify Merchant App in 12 Weeks, Agents Write Most of the Code
