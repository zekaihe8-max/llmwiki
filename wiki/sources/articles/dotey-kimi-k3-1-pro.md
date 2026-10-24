---
type: Source
title: 宝玉拆解 Kimi K3.1 Pro
title_en: Dotey on Kimi K3.1 Pro
description: 宝玉长文拆解月之暗面 Kimi K3.1 Pro：2.8T MoE 开放权重、百万上下文、代码与金融对标闭源前沿，以及定价与去攻防数据的开源权衡。
description_en: 宝玉's long breakdown of Moonshot Kimi K3.1 Pro—a 2.8T MoE open-weight model with 1M context that tracks closed frontier coding and finance scores, plus pricing and cyber-data removal for open weights.
resource: https://x.com/dotey/status/2113689823311524225
tags: [kimi, moonshot, open-weights, moe, coding, finance, cyber]
sources:
  - id: dotey-kimi-k3-1-pro
    resource: https://x.com/dotey/status/2113689823311524225
    title: Dotey on Kimi K3.1 Pro
    author: human:dotey
generated:
  by: cursor-agent/composer
  at: 2026-10-24T20:48:33+08:00
date: 2026-10-24
---

# 宝玉拆解 Kimi K3.1 Pro

*Dotey on Kimi K3.1 Pro*

[@dotey](https://x.com/dotey) 拆解月之暗面 10 月 23 日发布的 Kimi K3.1 Pro：官方称其为自家最强开放权重模型，网页 / App / Kimi Work / Kimi Code / API 当天可用，完整权重计划 11 月 4 日前放出。[^dotey-kimi-k3-1-pro] 原文见 <https://x.com/dotey/status/2113689823311524225>。

[@dotey](https://x.com/dotey) breaks down Moonshot's October 23 release of Kimi K3.1 Pro: billed as their most capable open-weight model, available the same day on web, App, Kimi Work, Kimi Code, and API, with full weights planned before November 4.[^dotey-kimi-k3-1-pro] The post is at <https://x.com/dotey/status/2113689823311524225>.

## 摘要 / Summary

- K3.1 Pro 在 Kimi K3 上继续训练，结构未改，靠大量强化学习；MoE 总参约 2.8 万亿、每 token 约激活 1040 亿，上下文 100 万 token，支持图与视频。[^dotey-kimi-k3-1-pro]
- K3.1 Pro continues training from Kimi K3 without a structure change, using heavy reinforcement learning; MoE with about 2.8T total / 104B active params per token, 1M-token context, and image/video support.[^dotey-kimi-k3-1-pro]
- 官方对比表（部分对手为 Kimi 自测）：Terminal-Bench 4.0 上 65.7% 接近 Opus 5.5 的 66.4%；SWE-Marathon 51.7 分第一；OfficeQA Pro v2 64.4 分第一；科学计算 Terminal-Bench Science 38.1 远低于 GPT-6 Astra 的 68.1；BenchCAD 92.7% 略逊 Opus / GPT。[^dotey-kimi-k3-1-pro]
- On Moonshot's comparison table (some rival scores Kimi-run): Terminal-Bench 4.0 65.7% near Opus 5.5's 66.4%; SWE-Marathon 51.7 first; OfficeQA Pro v2 64.4 first; Terminal-Bench Science 38.1 far behind GPT-6 Astra's 68.1; BenchCAD 92.7% slightly behind Opus / GPT.[^dotey-kimi-k3-1-pro]
- 内部事实核查压测：K3 每 100 个事实约 23 个错，K3.1 Pro 约 8 个；同测 Opus 5.5 约 15、GPT-6 Astra 约 5.5；官方注明不代表日常出错率。[^dotey-kimi-k3-1-pro]
- Internal hard fact-check stress test: K3 about 23 wrong per 100 facts, K3.1 Pro about 8; same test Opus 5.5 about 15, GPT-6 Astra about 5.5; Moonshot notes this is not everyday error rate.[^dotey-kimi-k3-1-pro]
- API 每百万 token 输入 $2、输出 $10（约 K3 的三分之二，约为 Opus 5.5 一半价）；Highspeed 版与 Opus 同价；开放权重按 4-bit 约需 1.4TB 内存，个人机跑不动；为开源训练时删了网络攻防数据，内部漏洞利用测从 90.5% 降到 81.0%。[^dotey-kimi-k3-1-pro]
- API is $2 input / $10 output per million tokens (about two-thirds of K3, about half Opus 5.5); Highspeed matches Opus pricing; open weights need ~1.4TB at 4-bit, not runnable on a personal PC; cyber offense data was removed for open release, dropping an internal exploit test from 90.5% to 81.0%.[^dotey-kimi-k3-1-pro]

## 相关 / Related

- Topic: [Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [Open models and cyber defense](../../topics/open-models-cyber-defense.md)

[^dotey-kimi-k3-1-pro]: Dotey on Kimi K3.1 Pro
