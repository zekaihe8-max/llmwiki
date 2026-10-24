---
type: Topic
title: 超越 token 数的 Harness 对比
title_en: Harness comparison beyond tokens
description: 在同一模型上对比 agent harness 时，应看轮次、缓存命中、延迟与输出质量——不要只看累计 token；高缓存命中可使费用在 token 量差很大时仍接近。
description_en: Compare agent harnesses on the same model by rounds, cache hits, latency, and output quality—not cumulative token totals alone, because high cache hit rates can keep cost near parity when token volume diverges.
tags: [agents, harness, tokens, cache, evaluation]
sources:
  - id: xiaomovps-pi-vs-deepseek-harness
    resource: https://x.com/xiaomovps/status/2113283228467622362
    title: 小墨 on Pi vs DeepSeek Harness rounds and cost
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
---

# 超越 token 数的 Harness 对比

*Harness comparison beyond tokens*

同一模型、同一提示在不同 agent harness 下，轮次与累计输入 token 可差很多，而费用变动小得多——因为重复上下文常命中缓存。只凭 token 总量评判 harness，会误读费用与速度—质量权衡。[^xiaomovps-pi-vs-deepseek-harness]

The same model and prompt under different agent harnesses can produce very different round counts and cumulative input tokens while cost moves much less, because repeated context often hits cache. Judging harnesses by token totals alone misreads both expense and the speed-versus-quality tradeoff.[^xiaomovps-pi-vs-deepseek-harness]

## 综合分析 / Synthesis

[小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md) 报告一次受控的「自行车上的鹈鹕」HTML 跑法（DeepSeek V4 Flash）：初始上下文相近（首轮 Pi 略高），但 Pi 约三轮结束，DeepSeek Harness 约二十八轮并多次截图自检。累计输入约差 18×；计入 DeepSeek Harness 约 98.9% 缓存命中后，估计费用大约只差 2×。耐久主张是方法论——对比 harness 时要把轮次、缓存命中率、墙钟时间与最终质量放一起看——也是实践：可运行输出够用时优先快结束；UI 质量是目标且多付费用划算时，接受迭代式视觉自检。[^xiaomovps-pi-vs-deepseek-harness]

[小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md) reports a controlled pelican-on-a-bike HTML run on DeepSeek V4 Flash: initial context was similar (Pi slightly higher on the first round), but Pi finished in about three rounds while DeepSeek Harness ran about twenty-eight with many screenshot self-checks. Cumulative input was roughly 18× apart; estimated cost was only about 2× apart once DeepSeek Harness’s ~98.9% cache hit rate is counted. The durable claim is methodological—pair rounds, cache hit rate, wall time, and final quality when comparing harnesses—and practical: prefer a fast finish when runnable output is enough, and accept iterative visual self-check when UI quality is the goal and the extra cost is justified.[^xiaomovps-pi-vs-deepseek-harness]

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md)

[^xiaomovps-pi-vs-deepseek-harness]: 小墨 on Pi vs DeepSeek Harness rounds and cost
