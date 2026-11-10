---
type: Source
title: "实测 Claude Fable 5.2：审美与细节的绝对统治，但贵得惊人"
title_en: "Hands-on Claude Fable 5.2: Aesthetic & Detail Supremacy at a Staggering Cost"
description: "作者通宵实测 Claude Fable 5.2，展示其在视频生成、3D 建模、代码编写上的 SOTA 表现，并分享模型路由与订阅性价比心得。"
description_en: "Author stays up all night testing Claude Fable 5.2, showcasing SOTA performance in video generation, 3D modeling, and coding, plus model routing and subscription value insights."
resource: https://x.com/Khazix0918/status/2119941585538572390
tags: [claude, fable-5-2, model-routing, premium-subscription, video-generation, 3d-modeling]
sources:
  - id: khazix-claude-fable-5-2-hands-on
    resource: https://x.com/Khazix0918/status/2119941585538572390
    title: "Hands-on Claude Fable 5.2: Aesthetic & Detail Supremacy at a Staggering Cost"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:18:59+08:00
---

# 实测 Claude Fable 5.2：审美与细节的绝对统治，但贵得惊人

*Hands-on Claude Fable 5.2: Aesthetic & Detail Supremacy at a Staggering Cost*

帖文称 Anthropic 在凌晨 3 点正式发布 Claude Fable 5.2，全渠道上线。Pro 会员（$20）获一周临时体验，Ultra 会员（$200）获额度重置至 2027-03-08。模型拥有 1M 上下文、128K 输出、知识截止 2026-06，价格较 5.1 降 20%（输入 $8/M、输出 $40/M），速度提升 30%，误拦截降 55%。继承 Opus 5.5「说人话」风格，AA 指数 65 分登顶，官方跑分碾压同级。Anthropic 让其协调 1000+ 子智能体 8 天从零写出可启动的操作系统。作者用 10 个任务（视频致敬、3D 重建苹果静安店等）在 4 小时内烧掉 Ultra 额度 24%，直呼「贵是真贵」。作者给出的最优路由：Fable 5.2 做规划/诊断/指挥，Opus 5.5 做审美前端，GPT-6.2 Sol 做算法后端。[^khazix-claude-fable-5-2-hands-on]

The post reports Anthropic released Claude Fable 5.2 at 3 AM across all channels. Pro ($20) gets one-week trial; Ultra ($200) gets quota reset until 2027-03-08. Specs: 1M context, 128K output, knowledge cutoff Jun 2026. Pricing down 20% vs 5.1 ($8/M in, $40/M out), 30% faster, 55% fewer false refusals. Inherits Opus 5.5's human-like tone. AA index 65 (SOTA), official benchmarks crush peers. Anthropic had 1000+ sub-agents build a bootable OS in 8 days. Author burned ~24% Ultra quota in 4 hrs across 10 tasks (video tribute, 3D Apple store rebuild, etc.), calling it extremely expensive. Recommended routing: Fable 5.2 for planning/diagnosis/command, Opus 5.5 for aesthetic frontend, GPT-6.2 Sol for algorithmic backend.[^khazix-claude-fable-5-2-hands-on]

## 摘要 / Summary

- Fable 5.2 定价：输入 $8/M token、输出 $40/M token，较 5.1 降价 20%；上下文 1M、输出 128K、知识截止 2026-06。 / Fable 5.2 pricing: $8/M in, $40/M out (20% cheaper than 5.1); 1M context, 128K output, knowledge cutoff Jun 2026.[^khazix-claude-fable-5-2-hands-on]
- 安全护栏改进：误拦截比 5.1 降 ~55%，网络安全类降 60%，生物类降 40%。 / Safety guardrails improved: false refusals down ~55% vs 5.1, cybersecurity -60%, biology -40%.[^khazix-claude-fable-5-2-hands-on]
- Anthropic 实验：1000+ 子智能体协作 8 天从空文件夹写出可在笔记本启动的完整操作系统（内核、驱动、窗口、安装器、内置 Claude）。 / Anthropic experiment: 1000+ sub-agents built a bootable OS in 8 days from empty folder (kernel, drivers, windows, installer, embedded Claude).[^khazix-claude-fable-5-2-hands-on]
- 作者实测 10 个任务（ChatGPT 四周年视频、DeepSeek 讲解视频、Three.js 3D 场景、苹果静安店 3D 重建）耗时 ~4 小时，消耗 Ultra 额度 24%（约 50% Fable 额度）。 / Author's 10 tasks (ChatGPT 4yr video, DeepSeek explainer, Three.js 3D, Apple Jing'an 3D rebuild) took ~4 hrs, consumed 24% Ultra quota (~50% Fable allowance).[^khazix-claude-fable-5-2-hands-on]
- 作者提出的模型路由策略：Fable 5.2 做最大诊断规划/指挥型模型，Opus 5.5 负责审美与前端，GPT-6.2 Sol 负责算法与后端。 / Author's routing strategy: Fable 5.2 for high-level planning/diagnosis/command, Opus 5.5 for aesthetics/frontend, GPT-6.2 Sol for algorithms/backend.[^khazix-claude-fable-5-2-hands-on]
- Pro 会员（$20）获一周 Fable 5.2 临时权限；Ultra 会员（$200）获额度重置，有效期至 2027-03-08。 / Pro ($20) gets one-week Fable 5.2 access; Ultra ($200) gets quota reset valid until 2027-03-08.[^khazix-claude-fable-5-2-hands-on]

## 相关 / Related

- 原文：[链接](https://x.com/Khazix0918/status/2119941585538572390)。 / Original: [link](https://x.com/Khazix0918/status/2119941585538572390).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^khazix-claude-fable-5-2-hands-on]: Hands-on Claude Fable 5.2: Aesthetic & Detail Supremacy at a Staggering Cost
