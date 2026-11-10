---
type: Source
title: "《Goodbye Claude, Hello Pi》在 HN 引发热议：为何开发者弃用 Claude Code 转投 Pi"
title_en: "HN Discussion on \"Goodbye Claude, Hello Pi\": Why Developers Are Leaving Claude Code for Pi"
description: "作者因 Claude Code 频繁变更、IDE 集成缺陷与 Token 开销大，转向开源轻量化 Harness Pi，并在 HN 引发讨论。"
description_en: "The author switches from Claude Code to the open-source lightweight harness Pi due to frequent changes, IDE integration flaws, and high token overhead, sparking discussion on HN."
resource: https://caleb.software/posts/claude-to-pi.html
tags: [claude-code, pi, coding-agent, harness, open-source]
sources:
  - id: goodbye-claude-hello-pi-hn
    resource: https://caleb.software/posts/claude-to-pi.html
    title: "HN Discussion on \"Goodbye Claude, Hello Pi\": Why Developers Are Leaving Claude Code for Pi"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:11:48+08:00
---

# 《Goodbye Claude, Hello Pi》在 HN 引发热议：为何开发者弃用 Claude Code 转投 Pi

*HN Discussion on "Goodbye Claude, Hello Pi": Why Developers Are Leaving Claude Code for Pi*

帖文称作者 Caleb 在 2026 年 9 月 21 日发文宣布放弃长期使用的 Claude Code，改用开源编程 Harness Pi。文章详细列举了 Claude Code 的多项痛点：VSCode 多标签页无法共享上下文、GUI 扩展功能缺失、一年 244 次发布导致系统提示词频繁变更、默认 Bash 工具描述高达 3000 Token 等。相比之下，Pi 以精简核心、极致可定制、社区扩展友好著称，作者仅用 20 分钟编写扩展即解决多标签上下文同步问题。该文在 Hacker News、Twitter、Mastodon 与 Bluesky 均引发讨论。[^goodbye-claude-hello-pi-hn]

Author Caleb announced on 21 Sep 2026 that he is abandoning longtime tool Claude Code in favor of the open-source coding harness Pi. The post details pain points: VSCode multi-tab context sharing broken, GUI extension missing features, 244 releases in a year causing system prompt churn, and a 3,000-token default Bash tool description. By contrast, Pi offers a minimal core, deep customizability, and community extensions; the author built a multi-tab context sync extension in ~20 minutes. The piece sparked discussion on Hacker News, Twitter, Mastodon, and Bluesky.[^goodbye-claude-hello-pi-hn]

## 摘要 / Summary

- 作者曾是 Claude Code 长期用户，因累积挫败感决定迁移到 Pi。 / The author was a longtime Claude Code user but decided to migrate to Pi after accumulated frustrations.[^goodbye-claude-hello-pi-hn]
- Claude Code VSCode 集成仅支持单会话接收 IDE 文本选择，多标签页无法工作，问题自 2025 年 12 月被报告仍未修复。 / Claude Code's VSCode integration only supports one active session for IDE text selection; multi-tab context sharing has been reported since Dec 2025 but remains unfixed.[^goodbye-claude-hello-pi-hn]
- Claude Code 今年已发布 244 个版本，超 3/4 修改了系统提示词或工具描述，导致模型行为频繁漂移。 / Claude Code has shipped 244 releases this year, over 75% of which changed the system prompt or tool descriptions, causing frequent model behavior drift.[^goodbye-claude-hello-pi-hn]
- 默认 Bash 工具描述近 3000 Token，作者认为这是不必要的开销，Pi 则极度精简。 / The default Bash tool description is nearly 3,000 tokens, which the author calls unnecessary overhead; Pi is extremely minimal by comparison.[^goodbye-claude-hello-pi-hn]
- Pi 采用精简核心 + 社区扩展架构，作者 20 分钟内编写扩展实现多标签上下文同步。 / Pi uses a minimal-core + community-extensions architecture; the author built a multi-tab context sync extension in about 20 minutes.[^goodbye-claude-hello-pi-hn]
- 文章在 Hacker News、Twitter、Mastodon、Bluesky 同步发布并引发社区讨论。 / The post was cross-posted to Hacker News, Twitter, Mastodon, and Bluesky, sparking community discussion.[^goodbye-claude-hello-pi-hn]

## 相关 / Related

- 原文：[链接](https://caleb.software/posts/claude-to-pi.html)。 / Original: [link](https://caleb.software/posts/claude-to-pi.html).
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^goodbye-claude-hello-pi-hn]: HN Discussion on "Goodbye Claude, Hello Pi": Why Developers Are Leaving Claude Code for Pi
