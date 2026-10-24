---
type: Source
title: 小墨谈 Pi 与 DeepSeek Harness 的轮次与成本
title_en: Xiaomo on Pi vs DeepSeek Harness rounds and cost
description: 小墨在同一 DeepSeek V4 Flash 任务下对比 Pi 与 DeepSeek Harness——约 3 轮对 28 轮、累计输入 tokens 约 18 倍，但因缓存命中成本仅约 2 倍——并主张 harness 对比应看轮次、缓存率、耗时与质量，而非仅看 token 总量。
description_en: Xiaomo compares the same DeepSeek V4 Flash task under Pi and DeepSeek Harness—about 3 vs 28 rounds and roughly 18× cumulative input tokens, yet only about 2× cost thanks to cache hits—and argues harness comparisons need rounds, cache rate, time, and quality, not token totals alone.
resource: https://x.com/xiaomovps/status/2113283228467622362
tags: [agents, harness, pi, deepseek, tokens, cache, evaluation]
sources:
  - id: xiaomovps-pi-vs-deepseek-harness
    resource: https://x.com/xiaomovps/status/2113283228467622362
    title: 小墨 on Pi vs DeepSeek Harness rounds and cost
    author: human:xiaomovps
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
date: 2026-10-22
---

# 小墨谈 Pi 与 DeepSeek Harness 的轮次与成本

*Xiaomo on Pi vs DeepSeek Harness rounds and cost*

[@xiaomovps](https://x.com/xiaomovps) 在自行车上的鹈鹕 HTML 测试后续中，打开同一模型、同一提示与同一 thinking 级别下 Pi 与 DeepSeek Harness 的完整上下文：初始上下文相近，但 Pi 约三轮结束，而 DeepSeek Harness 约二十八轮（含大量截图自检），因此累计输入 tokens 差距很大，缓存命中却让成本接近得多；对比 harness 应看轮次、缓存率、耗时与最终质量——而不是只看 token 数。[^xiaomovps-pi-vs-deepseek-harness] 原文见 <https://x.com/xiaomovps/status/2113283228467622362>。

[@xiaomovps](https://x.com/xiaomovps) follows up a pelican-on-a-bike HTML test by opening the full context of Pi versus DeepSeek Harness on the same model, prompt, and thinking level: initial context is similar, but Pi finishes in about three rounds while DeepSeek Harness runs about twenty-eight (including many screenshot self-checks), so cumulative input tokens diverge sharply while cache hits keep cost much closer, and harness comparisons should weigh rounds, cache rate, time, and final quality—not token count alone.[^xiaomovps-pi-vs-deepseek-harness] The post is at <https://x.com/xiaomovps/status/2113283228467622362>.

## 摘要 / Summary

- 双方均为 DeepSeek V4 Flash、High thinking、同一提示；首轮输入约 11.5K tokens（Pi）对约 9K（DeepSeek Harness），工具更丰富并不等于起始上下文更大。[^xiaomovps-pi-vs-deepseek-harness]
- Both sides used DeepSeek V4 Flash at High thinking with the same prompt; first-round input was about 11.5K tokens for Pi and about 9K for DeepSeek Harness, so richer tooling did not mean a larger starting context.[^xiaomovps-pi-vs-deepseek-harness]
- Pi 约三轮完成 HTML；DeepSeek Harness 约二十八轮，约十次截图自检，累计输入约 64K 对约 1.147M tokens（约 18×）——是跨轮累计，不是单次请求上下文。[^xiaomovps-pi-vs-deepseek-harness]
- Pi finished the HTML in about three rounds; DeepSeek Harness took about twenty-eight rounds with roughly ten screenshot self-checks, yielding about 64K versus about 1.147M cumulative input tokens (~18×)—cumulative across rounds, not a single request context.[^xiaomovps-pi-vs-deepseek-harness]
- 缓存命中率约 58%（Pi，约 $0.0266）对约 98.9%（DeepSeek Harness，同单价约 $0.057），因此尽管 token 差距很大，成本仅升约 2×。[^xiaomovps-pi-vs-deepseek-harness]
- Cache hit rate was about 58% for Pi (~$0.0266) versus about 98.9% for DeepSeek Harness (~$0.057 at the same unit price), so cost rose only about 2× despite the large token gap.[^xiaomovps-pi-vs-deepseek-harness]
- Harness 选择是速度与质量的权衡：只要快速可跑的 HTML 就够时 Pi 更好；DeepSeek Harness 的截图循环可能有助于 UI 工作，但质量收益仍须撑起额外 tokens 与时间。[^xiaomovps-pi-vs-deepseek-harness]
- Harness choice is a speed-versus-quality tradeoff: Pi is better when a quick runnable HTML is enough; DeepSeek Harness’s screenshot loop may help UI work, but the quality gain still has to justify the extra tokens and time.[^xiaomovps-pi-vs-deepseek-harness]
- 对比 harness 应综合执行轮次、缓存命中、任务耗时与最终结果——不要只看 token 总量；系统提示迭代（DeepSeek Harness 多次调整对 Pi 一次）也会拉大差距。[^xiaomovps-pi-vs-deepseek-harness]
- Compare harnesses on execution rounds, cache hits, task duration, and final result together—not token totals alone; system-prompt iteration (many DeepSeek Harness tweaks versus one for Pi) also shapes the gap.[^xiaomovps-pi-vs-deepseek-harness]

## 相关 / Related

- Topic: [Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)

[^xiaomovps-pi-vs-deepseek-harness]: 小墨 on Pi vs DeepSeek Harness rounds and cost
