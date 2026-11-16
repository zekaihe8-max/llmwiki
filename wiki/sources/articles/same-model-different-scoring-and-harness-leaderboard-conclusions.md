---
type: Source
title: "同一模型换评分和配套，排行榜就可能翻面"
title_en: "Same model, different scoring and harness, leaderboard conclusions may flip"
description: "同一模型在不同评分规则和 Agent 配套下，评测排名和结论可能发生翻转。"
description_en: "The same model can yield flipped leaderboard rankings and conclusions under different scoring rules and Agent harnesses."
resource: https://x.com/shao__meng/status/2122185171965526089
tags: [ai-evals, benchmarks, leaderboards, agent-harness]
sources:
  - id: d1699cb7773e7d5f
    resource: https://x.com/shao__meng/status/2122185171965526089
    title: "Same model, different scoring and harness, leaderboard conclusions may flip"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:03:17+08:00
---

# 同一模型换评分和配套，排行榜就可能翻面

*Same model, different scoring and harness, leaderboard conclusions may flip*

帖文称，TensorTonic 的「从第一性原理讲清评测」指出，评测智能体实际上是评模型与其配套（工具、提示词和循环）的组合；配套变化会使分数波动，因此应关注真实结果而非预定路径。文中还以 CORE-Bench、pass@k/pass^k 及 SimpleQA 等例子说明，评分规则、运行次数和误差区间都可能改变排行榜结论。[^d1699cb7773e7d5f]

The post says TensorTonic's "Evals Explained, From First Principles" argues that evaluating an agent means evaluating the model together with its harness (tools, prompts, and loops); harness changes can move scores, so the focus should be on real outcomes rather than planned paths. It uses CORE-Bench, pass@k/pass^k, and SimpleQA examples to show that scoring rules, run counts, and confidence intervals can all flip leaderboard conclusions.[^d1699cb7773e7d5f]

## 摘要 / Summary

- CORE-Bench 上，同一套 Claude Opus 4.5 起初仅 42%；换更宽松运行框架并修正过严评分、含糊说明和无法复现题目后升至 95%，其中先接 Claude Code 约到 78%，再修评分到 95%。[^d1699cb7773e7d5f]
- On CORE-Bench, the same Claude Opus 4.5 started at 42%; after switching to a looser run framework and fixing over-strict scoring, ambiguous instructions, and unreproducible items, it rose to 95%, reaching about 78% under Claude Code before the scoring fix brought it to 95%.[^d1699cb7773e7d5f]
- 单次成功率 75%、跑 3 次时，pass@k（至少成功一次）约 98%，pass^k（全成功）约 42%；500 道题得 80% 时 95% 置信区间约 76.5% 到 83.5%，另一模型 82% 单看数字难分优劣。[^d1699cb7773e7d5f]
- With a 75% single-run success rate over 3 runs, pass@k (at least one success) is about 98% while pass^k (all successes) is about 42%; for 500 questions at 80%, the 95% confidence interval is roughly 76.5% to 83.5%, so another model at 82% cannot be clearly ranked above it by the headline number alone.[^d1699cb7773e7d5f]
- OpenAI 系统卡 SimpleQA 数据：旧 o4-mini 弃答 1%、答对 24%、答错 75%；gpt-5-thinking-mini 弃答 52%、答对 22%、答错 26%。只看准确率旧模型略高，但错误大约是后者三倍。[^d1699cb7773e7d5f]
- OpenAI's system card SimpleQA figures: old o4-mini abstains 1%, answers correctly 24%, wrong 75%; gpt-5-thinking-mini abstains 52%, correct 22%, wrong 26%. Accuracy is slightly higher for the old model, but it errs about three times as often.[^d1699cb7773e7d5f]
- 帖文称，完整记录是过程、结果是结束后的真实状态，两者常不符；订票助手可以说已订好而数据库无订单，只看最后一句话会放过说谎系统，故应评真正要紧的结果并保留完整记录。[^d1699cb7773e7d5f]
- The post says the complete record is the process and the outcome is the true end state, and they often mismatch; a booking assistant may say it booked while the database has no order, so judging only the last sentence lets dishonest systems pass, and evaluations should keep full records and focus on real outcomes.[^d1699cb7773e7d5f]
- 多数基准只分对错，猜永远比说 "我不知道" 更划算；分数只告诉失败频率，只有完整记录能分清是模型错了还是评分器把合理答案判错了。[^d1699cb7773e7d5f]
- Most benchmarks only score right versus wrong, so guessing always beats saying "I don't know"; scores only tell how often failure occurs, and only complete records can distinguish model error from scorer misjudgment of valid answers.[^d1699cb7773e7d5f]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122185171965526089)。 / Original: [link](https://x.com/shao__meng/status/2122185171965526089).
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)

[^d1699cb7773e7d5f]: Same model, different scoring and harness, leaderboard conclusions may flip
