---
type: Source
title: 小墨谈 DSH 0.2.1：自研搜索与 Agent 写插件
title_en: Xiaomo on DSH 0.2.1 — first-party search and Agent-authored plugins
description: 小墨梳理 DeepSeek Harness 0.2.1：接入 DeepSeek Search/Fetch、Agent 可直接创建插件、实验性兼容 Claude Code/Codex、pi-ai 升到 1.0.2 与极简模式补强；并对比 Pi 精简自加与 DSH「万物皆插件」路线，关心灵活性与复杂度、Token 消耗能否兼顾。
description_en: Xiaomo walks DeepSeek Harness 0.2.1—DeepSeek Search/Fetch, Agent-authored plugins, experimental Claude Code/Codex compatibility, pi-ai 1.0.2 and minimal-mode fixes—and contrasts Pi’s slim DIY path with DSH’s everything-as-plugin bet, watching whether flexibility can coexist with controlled complexity and Token spend.
resource: https://x.com/xiaomovps/status/2115102099226935462
tags: [agents, harness, deepseek, dsh, plugins, search, pi, tokens]
sources:
  - id: xiaomovps-dsh-021-search-agent-plugins
    resource: https://x.com/xiaomovps/status/2115102099226935462
    title: 小墨 on DSH 0.2.1 search and Agent-authored plugins
    author: human:xiaomovps
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:56:15+08:00
date: 2026-10-28
---

# 小墨谈 DSH 0.2.1：自研搜索与 Agent 写插件

*Xiaomo on DSH 0.2.1 — first-party search and Agent-authored plugins*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）梳理 DeepSeek Harness（DSH）0.2.1 系列：接入自研搜索、插件管理里让 Agent 直接开发插件、实验性兼容 Claude Code / Codex、pi-ai 升到 1.0.2 且极简模式补图片与上下文压缩；并对照自己刚研究过的 Pi——Pi 够简单、要什么自己加，DSH 则想把插件、模型、工具与运行体系组合起来——他更想看「万物皆插件」能否在保持灵活性的同时控制复杂度与 Token 消耗，强调功能越多不代表 Agent 越好用，更关心实际执行效率。[^xiaomovps-dsh-021-search-agent-plugins] 原帖见 <https://x.com/xiaomovps/status/2115102099226935462>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) walks DeepSeek Harness (DSH) 0.2.1: first-party search, Agent-authored plugins from the plugin manager, experimental Claude Code / Codex compatibility, pi-ai at 1.0.2 with minimal-mode image and context-compression fixes; he contrasts the Pi path he had just studied—simple enough to add what you need yourself—with DSH’s bid to compose plugins, models, tools, and runtime, and wants to see whether “everything as a plugin” can keep flexibility while controlling complexity and Token spend, stressing that more features do not mean a better Agent and that real execution efficiency matters more.[^xiaomovps-dsh-021-search-agent-plugins] Post: <https://x.com/xiaomovps/status/2115102099226935462>.

## 摘要 / Summary

- Agent 可在插件管理页入口直接按需求开发插件，并支持第三方插件源、依赖管理与热重载；侧边即可选择创建。[^xiaomovps-dsh-021-search-agent-plugins]
- Agents can author plugins from a plugin-manager entry by stating the needed feature, with third-party plugin sources, dependency management, and hot reload; creation is available from the side panel.[^xiaomovps-dsh-021-search-agent-plugins]
- 官方新增 Claude Code 与 Codex 插件组合包，以及实验性 Claude Code Mods 兼容层；作者称尚非完全兼容，更多是在验证两套插件机制能否互通。[^xiaomovps-dsh-021-search-agent-plugins]
- Official Claude Code and Codex plugin bundles land, plus an experimental Claude Code Mods compatibility layer; the author says it is not full compatibility yet—more a check whether the two plugin mechanisms can interoperate.[^xiaomovps-dsh-021-search-agent-plugins]
- 所用 pi-ai 升到 1.0.2（模型目录与适配器更新）；极简模式支持图片、长对话自动压缩，并可用 `/compact` 手动整理上下文；作者此前测极简模式易提示或卡死，称已做优化、拟再测。[^xiaomovps-dsh-021-search-agent-plugins]
- Underlying pi-ai moves to 1.0.2 (model catalog and adapter updates); minimal mode gains images, automatic long-chat compression, and manual `/compact` context tidy-up; the author had earlier seen prompts or freezes in minimal mode, says it was improved, and plans to retest.[^xiaomovps-dsh-021-search-agent-plugins]
- 新增 DeepSeek Search 与 Fetch API，可在网页搜索设置中开启；并适配 DeepSeek-V4.1-Flash-1017；另有实验性 Git Worktrees 插件、子代理能力调整、SDK 会话恢复等。GitHub 最新 Release 为 0.2.1-rc.3，仍属预发布。[^xiaomovps-dsh-021-search-agent-plugins]
- DeepSeek Search and Fetch API arrive and can be enabled in web-search settings; DeepSeek-V4.1-Flash-1017 is adapted; experimental Git Worktrees plugin, subagent tweaks, and SDK session resume are also noted. Latest GitHub Release is 0.2.1-rc.3, still a prerelease.[^xiaomovps-dsh-021-search-agent-plugins]
- 路线对照：作者爱 Pi 的简单自加；DSH 则不止扩展 Agent，还想组合插件、模型、工具与运行体系。开放问题是插件生态完善后，「万物皆插件」能否兼顾灵活性与复杂度、Token 消耗——功能多不等于好用，执行效率更要紧。[^xiaomovps-dsh-021-search-agent-plugins]
- Path contrast: the author likes Pi’s simple DIY; DSH aims not only to extend the Agent but to compose plugins, models, tools, and runtime. The open question is whether, as the plugin ecosystem matures, “everything as a plugin” can keep flexibility while controlling complexity and Token spend—more features ≠ better Agent; execution efficiency matters more.[^xiaomovps-dsh-021-search-agent-plugins]

## 相关 / Related

- Topic: [精简核心与社区扩展](../../topics/minimal-core-community-extensions.md)
- Topic: [超越 token 数的 Harness 对比](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [面向 Agent 的联网搜索重做](../../topics/agent-native-web-search.md)
- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)
- Topic: [插件样式不一使 Harness 界面碎片化](../../topics/harness-plugin-style-fragmentation.md)

[^xiaomovps-dsh-021-search-agent-plugins]: 小墨 on DSH 0.2.1 search and Agent-authored plugins
