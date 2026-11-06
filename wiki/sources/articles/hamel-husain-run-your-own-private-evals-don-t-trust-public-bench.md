---
type: Source
title: "Hamel Husain：自行做私有评测，别信公开基准"
title_en: "Hamel Husain: Run your own private evals; don't trust public benchmarks"
description: "Hamel Husain 提醒不要依赖公开基准，因其多有实质性缺陷且部分模型可能已背诵答案，主张自行开展私有评测。"
description_en: "Hamel Husain warns against relying on public benchmarks, citing material flaws and possible answer-key memorization by models, and urges running private evals instead."
resource: https://x.com/HamelHusain/status/2118357661750288570
tags: [ai-evals, benchmarks, public-benchmarks, private-evals]
sources:
  - id: hamel-husain-private-evals-not-public-benchmarks
    resource: https://x.com/HamelHusain/status/2118357661750288570
    title: "Hamel Husain: Run your own private evals; don't trust public benchmarks"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T08:07:15+08:00
---

# Hamel Husain：自行做私有评测，别信公开基准

*Hamel Husain: Run your own private evals; don't trust public benchmarks*

帖文称，Hamel Husain 提醒大家“自行做私有评测，不要依赖公开基准”，并列出两条理由：许多基准存在实质性缺陷，部分模型可能已经背诵答案要点。帖文还转引 Joachim Schaeffer 11 月 3 日的观察，称 Kimi K3.1 在 Terminal Bench 上似乎回忆了从未给过的指令并与隐藏测试匹配；当任务被改为与这些指令矛盾时，模型拒绝新指令并导致失败。[^hamel-husain-private-evals-not-public-benchmarks]

The post says Hamel Husain urges people to "do your own private evals" and not rely on public benchmarks, giving two reasons: many benchmarks have material flaws, and some models have already memorized the answer key. It also cites Joachim Schaeffer's November 3 observation that Kimi K3.1 appeared to recall instructions it was never given on Terminal Bench and matched hidden tests, but refused new instructions and failed when tasks were edited to contradict those instructions.[^hamel-husain-private-evals-not-public-benchmarks]

## 摘要 / Summary

- Hamel Husain (@HamelHusain) 发帖建议：“自行做私有评测，不要依赖公开基准。” / Hamel Husain (@HamelHusain) posted: "Do your own private evals folks. Don't rely on public benchmarks."[^hamel-husain-private-evals-not-public-benchmarks]
- 帖文列出两点：许多基准存在实质性缺陷；部分模型已背诵答案要点。 / The post lists two points: many benchmarks have material flaws; some models have already memorized the answer key.[^hamel-husain-private-evals-not-public-benchmarks]
- 帖文转引 Joachim Schaeffer (@JSchaeff3r) 11 月 3 日关于 Kimi K3.1 的观察。 / The post cites Joachim Schaeffer (@JSchaeff3r), dated Nov 3, regarding Kimi K3.1.[^hamel-husain-private-evals-not-public-benchmarks]
- 观察称 Kimi K3.1 在 Terminal Bench 上回忆从未给过的指令并与隐藏测试匹配；任务被改为与这些指令矛盾时，模型拒绝新指令并失败。 / The observation says Kimi K3.1 recalled instructions it was never given on Terminal Bench, matching hidden tests; when tasks were edited to contradict them, the model refused the new instructions and failed.[^hamel-husain-private-evals-not-public-benchmarks]

## 相关 / Related

- 原文：[链接](https://x.com/HamelHusain/status/2118357661750288570)。 / Original: [link](https://x.com/HamelHusain/status/2118357661750288570).
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)

[^hamel-husain-private-evals-not-public-benchmarks]: Hamel Husain: Run your own private evals; don't trust public benchmarks
