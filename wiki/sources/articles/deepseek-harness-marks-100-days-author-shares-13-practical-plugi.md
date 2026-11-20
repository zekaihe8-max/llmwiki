---
type: Source
title: "DeepSeek Harness 发布 100 天，作者分享 13 个实用插件玩法"
title_en: "DeepSeek Harness Marks 100 Days, Author Shares 13 Practical Plugin Playstyles"
description: "DeepSeek Harness 上线满 100 天，作者遴选 13 款社区插件，涵盖会话导入、上下文与费用管理、长对话压缩、桌宠皮肤、手机远程及记忆系统，并提醒按需精装以避免插件冲突与安全风险。"
description_en: "Marking DeepSeek Harness's 100th day, the author curates 13 community plugins covering session import, context and cost management, long-conversation compression, desktop pets and skins, mobile remote access, and memory systems, while advising lean installation to avoid conflicts and security risks."
resource: https://x.com/Khazix0918/status/2123627885730951241
tags: [deepseek-harness, agent-plugins, dsh-plugins, ai-assistant]
sources:
  - id: 340c422db37f5ede
    resource: https://x.com/Khazix0918/status/2123627885730951241
    title: "DeepSeek Harness Marks 100 Days, Author Shares 13 Practical Plugin Playstyles"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T19:54:43+08:00
---

# DeepSeek Harness 发布 100 天，作者分享 13 个实用插件玩法

*DeepSeek Harness Marks 100 Days, Author Shares 13 Practical Plugin Playstyles*

「帖文称」DeepSeek Harness 发布已满 100 天，GitHub 星标达 28.4 万，第三方插件约 3.5 万个；作者在 dsh-market 社区市场中遴选了 13 款通用好用的插件，包括官方会话导入、dsh-context 与 dsh-cost-meter 联动查看上下文和费用、billion-context 长对话压缩、dsh-pocket 手机远程派活、dsh-mnemon 持久记忆，以及皮肤、桌宠和开机动画等外观插件，并警示恶意插件可能远程控制电脑、插件过多会导致冲突和 Token 浪费。[^340c422db37f5ede]

The post says DeepSeek Harness has been live for 100 days with 284,000 GitHub stars and about 35,000 third-party plugins; the author selects 13 general-purpose plugins from the dsh-market community market, including official session import, dsh-context and dsh-cost-meter for context and cost visibility, billion-context for long-conversation compression, dsh-pocket for mobile remote tasking, dsh-mnemon for persistent memory, plus skins, desktop pets, and startup animations, while warning that malicious plugins may remote-control computers and too many plugins can cause conflicts and waste tokens.[^340c422db37f5ede]

## 摘要 / Summary

- DSH 可通过 https://www.deepseek.com/harness/ 安装；作者推荐先装 dshmarket 插件市场，它收录 awesome-dsh-plugin 社区列表，已近 1.2 万个插件，并展示 dsh-trust-check 扫描结果以提示恶意行为。[^340c422db37f5ede]
- DSH can be installed via https://www.deepseek.com/harness/; the author recommends installing the dshmarket plugin market first, which indexes the awesome-dsh-plugin community list of nearly 12,000 plugins and shows dsh-trust-check scan results to flag malicious behavior.[^340c422db37f5ede]
- 官方“DeepSeek 会话导入”插件可将网页版导出的压缩包导入 DSH 继续对话；dsh-context 显示上下文与 Token 统计，dsh-cost-meter 提供各维度费用明细，两者可联动。[^340c422db37f5ede]
- The official “DeepSeek Session Import” plugin imports exported web-version ZIP files so conversations can continue in DSH; dsh-context shows context and token statistics, while dsh-cost-meter provides multi-dimensional cost details, and the two can work together.[^340c422db37f5ede]
- billion-context 在长任务中把历史压缩为可恢复摘要；示例中 35 万 Token 历史压缩为 1.3 万 Token（约 3.8%），生成 116 个摘要块。[^340c422db37f5ede]
- billion-context compresses long-task history into recoverable summaries; in one example, 350,000 tokens of history were compressed to 13,000 tokens (about 3.8%), producing 116 summary blocks.[^340c422db37f5ede]
- dsh-pocket 支持同 WiFi 扫码或公网访问远程操控电脑端 DSH；dsh-mnemon 提供运行时记忆、项目档案和记忆空间三层持久记忆。[^340c422db37f5ede]
- dsh-pocket supports remote control of desktop DSH via same-WiFi QR code or public network access; dsh-mnemon provides three layers of persistent memory: runtime memory, project files, and memory space.[^340c422db37f5ede]
- 社区提供鲸鱼娘皮肤（dsh-client-ui-skin-maid-atelier）、my-cozy-dsh、dsh-pet、dsh-niulai-pet、dsh-startup-screen 等插件；用户也可在创造模式下与 DSH 对话并“存为提示词卡”自建插件。[^340c422db37f5ede]
- Community plugins include whale-maid skin (dsh-client-ui-skin-maid-atelier), my-cozy-dsh, dsh-pet, dsh-niulai-pet, and dsh-startup-screen; users can also build their own plugins in Creative Mode and save them as prompt cards for reuse.[^340c422db37f5ede]
- 作者提醒插件不是越多越好，插件之间可能打架、更新后失效或往上下文塞内容浪费 Token，且存在恶意插件远程控制电脑的安全风险，建议按需精装。[^340c422db37f5ede]
- The author warns that more plugins are not better: they may conflict, break after DSH updates, or bloat context and waste tokens, and malicious plugins can remote-control computers, so plugins should be installed lean and as needed.[^340c422db37f5ede]

## 相关 / Related

- 原文：[链接](https://x.com/Khazix0918/status/2123627885730951241)。 / Original: [link](https://x.com/Khazix0918/status/2123627885730951241).
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)
- Topic: [插件样式不一使 Harness 界面碎片化 / Harness UI fragmentation from mismatched plugin styles](../../topics/harness-plugin-style-fragmentation.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^340c422db37f5ede]: DeepSeek Harness Marks 100 Days, Author Shares 13 Practical Plugin Playstyles
