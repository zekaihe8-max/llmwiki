---
type: Source
title: "T3 Code 遥测争议后，他实测 Mirasim 多 Agent 编程工作台"
title_en: "After T3 Code telemetry controversy, he hands-on tests Mirasim multi-agent programming workbench"
description: "帖文称在 T3 Code 默认遥测与关闭开关 PR 被关后，作者转而实测带本地账号 $0 启动、显式遥测关闭及协作空间的 Mirasim 工作台。"
description_en: "The post says that after T3 Code's default telemetry and closed opt-out PRs, the author hands-on tested Mirasim, a workbench with local-account $0 start, explicit telemetry off switch, and collaboration spaces."
resource: https://x.com/cgnot996/status/2125500330159071240
tags: [agents, coding-agent, telemetry, privacy]
sources:
  - id: cgnot996-mirasim-20261125
    resource: https://x.com/cgnot996/status/2125500330159071240
    title: "After T3 Code telemetry controversy, he hands-on tests Mirasim multi-agent programming workbench"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:26:44+08:00
---

# T3 Code 遥测争议后，他实测 Mirasim 多 Agent 编程工作台

*After T3 Code telemetry controversy, he hands-on tests Mirasim multi-agent programming workbench*

「帖文称」围绕 T3 Code 的遥测争议持续发酵：该工具默认每 10 秒向自建服务端上报并转发 PostHog，并读取本机 Codex、Claude 账号 ID 做安装归因，而社区加关闭开关的多个 PR 均被关闭。因此作者开始寻找替代的多 Agent 编程工作台，并上手实测了 @Mirasim_ADE 推出的 Mirasim。帖文称 Mirasim 在设置页「账号 › 数据与隐私 › 参与体验改进」提供显式关闭开关，可复用本机已登录的 Claude、Codex、Grok 等账号，$0 起步，且不改动原有配置、不向本机 CLI 写入 Hook。作者在干净测试项目上用本机 Grok 4.7 添加了深色切换与「复制 Markdown 账单表」按钮，右侧 Git 面板可实时查看红绿 Diff，内置浏览器面板刷新即可验收；随后在同一工作区切换到 Antigravity，21 秒给出 3 条 Diff 审查意见并指出 innerHTML 转义改进点。设置页还自带「设为协作空间」，会话与文件留在本机，仅走端到端加密中继通道，免费支持最多 3 人共用；官方另提供 $4.99 试用 3 天、$49/月的云端托管空间与统一 Credit 方案。下载入口和优惠码放在一楼。[^cgnot996-mirasim-20261125]

The post says the T3 Code telemetry controversy is heating up: the tool defaults to reporting every 10 seconds to a self-hosted server and forwarding to PostHog, while reading local Codex and Claude account IDs for installation attribution, and multiple community PRs to add off switches were closed. The author therefore sought an alternative multi-agent programming workbench and hands-on tested Mirasim from @Mirasim_ADE. The post claims Mirasim provides an explicit off switch under Settings > Account > Data & Privacy > Participate in experience improvement, can start at $0 by reusing locally logged-in Claude, Codex, and Grok accounts, and does not alter existing configuration or write Hooks to the local CLI. On a clean test project with local Grok 4.7, the author added a dark-mode toggle and a "Copy Markdown invoice table" button, with the right-side Git panel showing real-time red/green diffs and the built-in browser panel refreshable for acceptance. Switching to Antigravity in the same workspace yielded 3 diff review points in 21 seconds, including an innerHTML escaping improvement. Settings also include "Set as collaboration space," keeping sessions and files local and using only an end-to-end encrypted relay channel, free for up to 3 people; official cloud hosting is offered at $4.99 for a 3-day trial or $49/month with a unified Credit plan. Download entry and discount code are in the first comment.[^cgnot996-mirasim-20261125]

## 摘要 / Summary

- T3 Code 默认每 10 秒向自建服务端上报并转发 PostHog，并读取本机 Codex、Claude 账号 ID 做安装归因；多个加关闭开关的社区 PR 被关闭。[^cgnot996-mirasim-20261125]
- T3 Code defaults to reporting every 10 seconds to a self-hosted server and forwarding to PostHog, reading local Codex and Claude account IDs for installation attribution; multiple community PRs adding off switches were closed.[^cgnot996-mirasim-20261125]
- 作者转而实测 Mirasim，其设置页「账号 › 数据与隐私 › 参与体验改进」提供显式遥测关闭开关。[^cgnot996-mirasim-20261125]
- The author instead hands-on tested Mirasim, whose Settings > Account > Data & Privacy > Participate in experience improvement page provides an explicit telemetry off switch.[^cgnot996-mirasim-20261125]
- Mirasim 可复用本机已登录的 Claude、Codex、Grok 等账号，$0 起步，不改原有配置、不往本机 CLI 写 Hook。[^cgnot996-mirasim-20261125]
- Mirasim can reuse locally logged-in Claude, Codex, Grok and other accounts, starting at $0, without changing existing configuration or writing Hooks to the local CLI.[^cgnot996-mirasim-20261125]
- 实测中用本机 Grok 4.7 加深色切换和「复制 Markdown 账单表」按钮，右侧 Git 面板实时看红绿 Diff，内置浏览器面板刷新验收；切 Antigravity 21 秒给出 3 点 Diff 审查并指出 innerHTML 转义改进。[^cgnot996-mirasim-20261125]
- In testing, local Grok 4.7 added dark mode and a "Copy Markdown invoice table" button; the right Git panel showed real-time red/green diffs and the built-in browser panel could be refreshed for acceptance; switching to Antigravity produced 3 diff review points in 21 seconds, including an innerHTML escaping improvement.[^cgnot996-mirasim-20261125]
- 设置页自带「设为协作空间」，会话和文件留在本机，只走端到端加密中继通道，免费支持最多 3 人共用；云端托管 $4.99 试用 3 天、$49/月起。[^cgnot996-mirasim-20261125]
- Settings include "Set as collaboration space," keeping sessions and files local via an end-to-end encrypted relay channel, free for up to 3 people; cloud hosting starts at $4.99 for a 3-day trial or $49/month.[^cgnot996-mirasim-20261125]

## 相关 / Related

- 原文：[链接](https://x.com/cgnot996/status/2125500330159071240)。 / Original: [link](https://x.com/cgnot996/status/2125500330159071240).
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)

[^cgnot996-mirasim-20261125]: After T3 Code telemetry controversy, he hands-on tests Mirasim multi-agent programming workbench
