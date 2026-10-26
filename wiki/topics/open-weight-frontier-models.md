---
type: Topic
title: 开放权重前沿模型
title_en: Open-weight frontier models
description: 实验室可发布接近闭源前沿的开放权重 MoE 模型：长上下文、代码与金融对标，完整权重可下载，但本地硬件门槛高，且部分基准仍落后；社区亦有「能力强但太贵」的体感，以及「榜强但真用更偏 miss」的判断。
description_en: Labs can ship open-weight MoE models that track closed frontier coding and finance scores with long context and downloadable weights, though local hardware bars are high and some benchmarks still lag; community takes also call them strong but too expensive, or strong on the board while real usability leans toward a miss.
tags: [open-weights, moe, frontier-models, kimi, moonshot, aa]
sources:
  - id: dotey-kimi-k3-1-pro
    resource: https://x.com/dotey/status/2113689823311524225
    title: Dotey on Kimi K3.1 Pro
  - id: shao-meng-pro-models-underwhelm
    resource: https://x.com/shao__meng/status/2113891829586579946
    title: Meng Shao asks if Pro models are underwhelming
  - id: gorden-sun-kimi-k3-1-pro-pricey
    resource: https://x.com/Gorden_Sun/status/2113858192375734780
    title: Gorden Sun on Kimi K3.1 Pro—strong but pricey
  - id: natolambert-real-world-over-aa
    resource: https://x.com/natolambert/status/2113967445727932676
    title: Nathan Lambert on real-world usability over AA scores
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:39:00+08:00
---

# 开放权重前沿模型

*Open-weight frontier models*

开放权重模型可以在结构不变的前提下，靠继续训练与强化学习逼近闭源前沿的代码与金融成绩，并以更低 API 价提供百万级上下文；完整权重计划公开下载，但万亿级参数对个人硬件仍不可及，且科学等基准仍可能明显落后。社区实测口感也可能肯定能力，同时抱怨「太贵」；另有声音称榜分上的抬升不等于真用兑现。[^dotey-kimi-k3-1-pro][^gorden-sun-kimi-k3-1-pro-pricey][^natolambert-real-world-over-aa]

Open-weight models can, without a structure change, keep training and reinforce until they track closed-frontier coding and finance scores, offer million-token context at lower API prices, and plan full weight downloads—while trillion-scale params stay out of personal hardware reach and science-style benchmarks may still lag sharply. Community takes can also affirm capability while calling the price too high; another voice says a leaderboard climb need not convert into real usability.[^dotey-kimi-k3-1-pro][^gorden-sun-kimi-k3-1-pro-pricey][^natolambert-real-world-over-aa]

## 综合分析 / Synthesis

[宝玉拆解 Kimi K3.1 Pro](../sources/articles/dotey-kimi-k3-1-pro.md) 记录月之暗面 Kimi K3.1 Pro：2.8T / 104B 激活 MoE、100 万上下文、多模态；官方表上写代码接近 Claude Opus 5.5、SWE-Marathon 与 OfficeQA 自称第一，科学计算与 BenchCAD 仍逊；API 约 Opus 一半价，完整权重预告开放，但约 1.4TB 4-bit 内存需求排除个人自托管。[^dotey-kimi-k3-1-pro] 原帖 <https://x.com/dotey/status/2113689823311524225>。

[Dotey on Kimi K3.1 Pro](../sources/articles/dotey-kimi-k3-1-pro.md) records Moonshot's Kimi K3.1 Pro: 2.8T / 104B-active MoE, 1M context, multimodal; on Moonshot's table coding near Claude Opus 5.5, SWE-Marathon and OfficeQA claimed first, science and BenchCAD still behind; API about half Opus price, full weights promised open, but ~1.4TB at 4-bit rules out personal self-hosting.[^dotey-kimi-k3-1-pro] Post: <https://x.com/dotey/status/2113689823311524225>.

[Gorden Sun 评 Kimi K3.1 Pro 强但贵](../sources/articles/gorden-sun-kimi-k3-1-pro-pricey.md) 用一句社区体感补强：能力很强、「蒸的很不错」，抱怨落在「就是太贵了」，并转引官方 3T 级开放权重、百万上下文与写代码/CAD 卖点。[^gorden-sun-kimi-k3-1-pro-pricey] 原帖 <https://x.com/Gorden_Sun/status/2113858192375734780>。这不是基准表，而是能力肯定加价格不满。

[Gorden Sun on Kimi K3.1 Pro—strong but pricey](../sources/articles/gorden-sun-kimi-k3-1-pro-pricey.md) adds a one-line community take: capability is strong—“steamed quite well”—with the complaint on “just too expensive,” quoting the official 3T-class open-weight, 1M-context, and coding/CAD pitch.[^gorden-sun-kimi-k3-1-pro-pricey] Post: <https://x.com/Gorden_Sun/status/2113858192375734780>. Not a benchmark table—capability praise plus price dissatisfaction.

[Nathan Lambert 谈顶档模型真用重于 AA 分数](../sources/articles/natolambert-real-world-over-aa.md) 不拆开放权重规格，而压低 AA 榜位对真用的指示：顶档上真用重于 ±2 分；AA 是潜力，3.1 更偏 miss。[^natolambert-real-world-over-aa] 原帖 <https://x.com/natolambert/status/2113967445727932676>。与官方表/「蒸的很不错」的能力叙事并读时，强调榜分抬升不等于手感兑现。

[Nathan Lambert on real-world usability over AA scores](../sources/articles/natolambert-real-world-over-aa.md) does not unpack open-weight specs; it down-weights AA standings as a usability signal: at the top end, real use outweighs ±2 points; AA is potential, and 3.1 leans miss.[^natolambert-real-world-over-aa] Post: <https://x.com/natolambert/status/2113967445727932676>. Read next to the official table / “steamed quite well” capability takes, it stresses that a board climb need not mean a feel conversion.

## 矛盾与变化 / Contradictions

[宝玉拆解 Kimi K3.1 Pro](../sources/articles/dotey-kimi-k3-1-pro.md) 按官方表把 Kimi K3.1 Pro 写成接近闭源前沿的开放权重旗舰（代码近 Opus 5.5、多项自报第一）。[^dotey-kimi-k3-1-pro] [邵萌问 Pro 模型是否集体拉胯](../sources/articles/shao-meng-pro-models-underwhelm.md) 则把同一款 Kimi K3.1 Pro 与 DeepSeek V4 Pro、胎死腹中的 Gemini 3.5 Pro 并列，质疑近期 Pro 后缀是否都不太达预期，并问 Flash 是否才是多数团队正路。[^shao-meng-pro-models-underwhelm] [Gorden Sun 评 Kimi K3.1 Pro 强但贵](../sources/articles/gorden-sun-kimi-k3-1-pro-pricey.md) 又站在能力肯定一侧，只把问题落在「太贵」。[^gorden-sun-kimi-k3-1-pro-pricey] [Nathan Lambert 谈顶档模型真用重于 AA 分数](../sources/articles/natolambert-real-world-over-aa.md) 在 AA 抬升语境下仍判 3.1 真用更偏 miss，与发布侧旗舰叙事及「强但贵」冲突，与「拉胯」同向但证据是潜力/兑现而非 Pro/Flash 路线。[^natolambert-real-world-over-aa] 发布侧能力叙事、社区「拉胯 / miss」质疑与「强但贵」体感并存，尚未用同一套实测消解。

[Dotey on Kimi K3.1 Pro](../sources/articles/dotey-kimi-k3-1-pro.md) reads Moonshot’s table as an open-weight flagship near the closed frontier (coding near Opus 5.5, several claimed firsts).[^dotey-kimi-k3-1-pro] [Meng Shao asks if Pro models are underwhelming](../sources/articles/shao-meng-pro-models-underwhelm.md) groups that same Kimi K3.1 Pro with DeepSeek V4 Pro and the aborted Gemini 3.5 Pro, questioning whether recent Pro-suffixed models mostly missed expectations and whether Flash is the right path for most teams.[^shao-meng-pro-models-underwhelm] [Gorden Sun on Kimi K3.1 Pro—strong but pricey](../sources/articles/gorden-sun-kimi-k3-1-pro-pricey.md) lands on the capability-affirming side and puts the problem on price alone.[^gorden-sun-kimi-k3-1-pro-pricey] [Nathan Lambert on real-world usability over AA scores](../sources/articles/natolambert-real-world-over-aa.md) still judges 3.1’s real use closer to miss amid an AA climb—tensions with launch-side flagship narrative and “strong but pricey,” aligns with “underwhelming,” via potential/conversion rather than a Pro/Flash path question.[^natolambert-real-world-over-aa] Launch-side capability narrative, community “underwhelming / miss” doubt, and “strong but pricey” coexist—not yet resolved by a shared eval.

## 相关 / Related

- Source: [宝玉拆解 Kimi K3.1 Pro](../sources/articles/dotey-kimi-k3-1-pro.md)
- Source: [邵萌问 Pro 模型是否集体拉胯](../sources/articles/shao-meng-pro-models-underwhelm.md)
- Source: [Gorden Sun 评 Kimi K3.1 Pro 强但贵](../sources/articles/gorden-sun-kimi-k3-1-pro-pricey.md)
- Source: [Nathan Lambert 谈顶档模型真用重于 AA 分数](../sources/articles/natolambert-real-world-over-aa.md)
- Topic: [Open models and cyber defense](./open-models-cyber-defense.md)
- Topic: [Pro 与 Flash 模型策略](./pro-vs-flash-model-strategy.md)
- Topic: [社区实测对抗刷分碰瓷](./community-evals-vs-score-hype.md)

[^dotey-kimi-k3-1-pro]: Dotey on Kimi K3.1 Pro
[^shao-meng-pro-models-underwhelm]: Meng Shao asks if Pro models are underwhelming
[^gorden-sun-kimi-k3-1-pro-pricey]: Gorden Sun on Kimi K3.1 Pro—strong but pricey
[^natolambert-real-world-over-aa]: Nathan Lambert on real-world usability over AA scores
