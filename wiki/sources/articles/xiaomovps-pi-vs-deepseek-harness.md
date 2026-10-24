---
type: Source
title: 小墨 on Pi vs DeepSeek Harness rounds and cost
description: 小墨 compares the same DeepSeek V4 Flash task under Pi and DeepSeek Harness—about 3 vs 28 rounds and roughly 18× cumulative input tokens, yet only about 2× cost thanks to cache hits—and argues harness comparisons need rounds, cache rate, time, and quality, not token totals alone.
resource: https://x.com/xiaomovps/status/2113283228467622362
tags: [agents, harness, pi, deepseek, tokens, cache, evaluation]
sources:
  - id: xiaomovps-pi-vs-deepseek-harness
    resource: https://x.com/xiaomovps/status/2113283228467622362
    title: 小墨 on Pi vs DeepSeek Harness rounds and cost
    author: human:xiaomovps
generated:
  by: auto/composer
  at: 2026-10-24T15:47:09+08:00
date: 2026-10-22
---

# 小墨 on Pi vs DeepSeek Harness rounds and cost

[@xiaomovps](https://x.com/xiaomovps) follows up a pelican-on-a-bike HTML test by opening the full context of Pi versus DeepSeek Harness on the same model, prompt, and thinking level: initial context is similar, but Pi finishes in about three rounds while DeepSeek Harness runs about twenty-eight (including many screenshot self-checks), so cumulative input tokens diverge sharply while cache hits keep cost much closer, and harness comparisons should weigh rounds, cache rate, time, and final quality—not token count alone.[^xiaomovps-pi-vs-deepseek-harness] The post is at <https://x.com/xiaomovps/status/2113283228467622362>.

## Summary

- Both sides used DeepSeek V4 Flash at High thinking with the same prompt; first-round input was about 11.5K tokens for Pi and about 9K for DeepSeek Harness, so richer tooling did not mean a larger starting context.[^xiaomovps-pi-vs-deepseek-harness]
- Pi finished the HTML in about three rounds; DeepSeek Harness took about twenty-eight rounds with roughly ten screenshot self-checks, yielding about 64K versus about 1.147M cumulative input tokens (~18×)—cumulative across rounds, not a single request context.[^xiaomovps-pi-vs-deepseek-harness]
- Cache hit rate was about 58% for Pi (~$0.0266) versus about 98.9% for DeepSeek Harness (~$0.057 at the same unit price), so cost rose only about 2× despite the large token gap.[^xiaomovps-pi-vs-deepseek-harness]
- Harness choice is a speed-versus-quality tradeoff: Pi is better when a quick runnable HTML is enough; DeepSeek Harness’s screenshot loop may help UI work, but the quality gain still has to justify the extra tokens and time.[^xiaomovps-pi-vs-deepseek-harness]
- Compare harnesses on execution rounds, cache hits, task duration, and final result together—not token totals alone; system-prompt iteration (many DeepSeek Harness tweaks versus one for Pi) also shapes the gap.[^xiaomovps-pi-vs-deepseek-harness]

## Related

- Topic: [Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)

[^xiaomovps-pi-vs-deepseek-harness]: 小墨 on Pi vs DeepSeek Harness rounds and cost
