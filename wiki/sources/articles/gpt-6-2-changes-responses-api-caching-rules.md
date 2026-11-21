---
type: Source
title: "GPT-6.2 改了 Responses API 的缓存规则"
title_en: "GPT-6.2 Changes Responses API Caching Rules"
description: "OpenAI 更新 Responses API 缓存规则，顶层 instructions 不再命中缓存，导致命中率大幅下降并按全价收费。"
description_en: "OpenAI updates Responses API caching rules so top-level instructions no longer hit cache, sharply lowering hit rates and charging full price."
resource: https://x.com/heydengai/status/2123945084177752195
tags: [openai, responses-api, api-caching, token-pricing, instruction-caching]
sources:
  - id: 14d67b2dcd612f4f
    resource: https://x.com/heydengai/status/2123945084177752195
    title: "GPT-6.2 Changes Responses API Caching Rules"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-21T20:10:14+08:00
---

# GPT-6.2 改了 Responses API 的缓存规则

*GPT-6.2 Changes Responses API Caching Rules*

帖文称，OpenAI 这波操作「绝了」，GPT-6.2 改了 Responses API 的缓存规则，顶层 instructions 不再命中缓存；实测缓存命中率从 97.4% 跌至 46.4%，每轮几万 Token 重复按全价收费，且官方文档已明确写明这是新行为。[^14d67b2dcd612f4f]

The post claims OpenAI has changed GPT-6.2 Responses API caching rules so top-level instructions no longer hit cache; real-world testing shows cache hit rate falling from 97.4% to 46.4%, with tens of thousands of tokens re-charged at full price per round, and official documentation explicitly describing this as new behavior.[^14d67b2dcd612f4f]

## 摘要 / Summary

- GPT-6.2 的 Responses API 缓存规则已变更，顶层 instructions 不再命中缓存。[^14d67b2dcd612f4f]
- GPT-6.2 Responses API caching rules changed; top-level instructions no longer hit cache.[^14d67b2dcd612f4f]
- 实测缓存命中率从 97.4% 下降到 46.4%。[^14d67b2dcd612f4f]
- Measured cache hit rate dropped from 97.4% to 46.4%.[^14d67b2dcd612f4f]
- 每轮几万 Token 重复按全价收费。[^14d67b2dcd612f4f]
- Tens of thousands of tokens are re-charged at full price per round.[^14d67b2dcd612f4f]
- 官方文档明确写明这是新行为。[^14d67b2dcd612f4f]
- Official documentation explicitly states this is new behavior.[^14d67b2dcd612f4f]
- 帖文发布于 2026 年 11 月 21 日，获得 5.52 万次浏览。[^14d67b2dcd612f4f]
- Posted on Nov 21, 2026, with 55.2K views.[^14d67b2dcd612f4f]

## 相关 / Related

- 原文：[链接](https://x.com/heydengai/status/2123945084177752195)。 / Original: [link](https://x.com/heydengai/status/2123945084177752195).
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^14d67b2dcd612f4f]: GPT-6.2 Changes Responses API Caching Rules
