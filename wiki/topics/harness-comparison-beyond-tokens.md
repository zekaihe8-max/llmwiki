---
type: Topic
title: Harness comparison beyond tokens
description: Compare agent harnesses on the same model by rounds, cache hits, latency, and output quality—not cumulative token totals alone, because high cache hit rates can keep cost near parity when token volume diverges.
tags: [agents, harness, tokens, cache, evaluation]
sources:
  - id: xiaomovps-pi-vs-deepseek-harness
    resource: https://x.com/xiaomovps/status/2113283228467622362
    title: 小墨 on Pi vs DeepSeek Harness rounds and cost
generated:
  by: auto/composer
  at: 2026-10-24T15:47:09+08:00
---

# Harness comparison beyond tokens

The same model and prompt under different agent harnesses can produce very different round counts and cumulative input tokens while cost moves much less, because repeated context often hits cache. Judging harnesses by token totals alone misreads both expense and the speed-versus-quality tradeoff.[^xiaomovps-pi-vs-deepseek-harness]

## Synthesis

[小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md) reports a controlled pelican-on-a-bike HTML run on DeepSeek V4 Flash: initial context was similar (Pi slightly higher on the first round), but Pi finished in about three rounds while DeepSeek Harness ran about twenty-eight with many screenshot self-checks. Cumulative input was roughly 18× apart; estimated cost was only about 2× apart once DeepSeek Harness’s ~98.9% cache hit rate is counted. The durable claim is methodological—pair rounds, cache hit rate, wall time, and final quality when comparing harnesses—and practical: prefer a fast finish when runnable output is enough, and accept iterative visual self-check when UI quality is the goal and the extra cost is justified.[^xiaomovps-pi-vs-deepseek-harness]

## Contradictions

None yet.

## Related

- Source: [小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md)

[^xiaomovps-pi-vs-deepseek-harness]: 小墨 on Pi vs DeepSeek Harness rounds and cost
