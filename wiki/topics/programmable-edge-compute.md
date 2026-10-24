---
type: Topic
title: 可编程边缘计算
title_en: Programmable edge compute
description: 边缘网络应通过沙箱化 JavaScript（如 Service Worker API）变为可编程，并配以最终一致的边缘键值存储，才能支撑有状态的生产应用，而不是无限叠加固定功能。
description_en: Edge networks should become programmable via sandboxed JavaScript (e.g. the Service Worker API) and pair that with eventually consistent edge key-value storage so stateful production apps can run—not by stacking fixed features forever.
tags: [edge, serverless, cloudflare-workers, workers-kv, javascript, service-workers, v8, key-value]
sources:
  - id: introducing-cloudflare-workers
    resource: https://blog.cloudflare.com/introducing-cloudflare-workers
    title: Introducing Cloudflare Workers
  - id: workers-kv-ga
    resource: https://blog.cloudflare.com/workers-kv-is-ga
    title: Workers KV is Generally Available
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:35:00+08:00
---

# 可编程边缘计算

*Programmable edge compute*

当边缘只提供固定协议与产品能力时，自定义缓存、负载均衡、安全规则等需求永远盖不全。把边缘做成可编程平台——在靠近用户的节点上安全执行租户代码——才能覆盖开放用例；这要求运行时足够轻、启动够快，并能在同一主机上隔离多方代码。[^introducing-cloudflare-workers] 有状态生产应用还需要全球分布的持久存储：最终一致的边缘键值层可在极低延迟下读数十亿对，并接受短暂不一致换取可用性与分区容忍。[^workers-kv-ga]

When the edge only ships fixed protocols and product features, custom caching, load balancing, security rules, and similar needs never fully cover the open case space. Making the edge a programmable platform—safely running tenant code near users—requires a runtime light enough, fast enough to start, and able to isolate many parties on one host.[^introducing-cloudflare-workers] Stateful production apps also need globally distributed persistent storage: an eventually consistent edge key-value layer can read billions of pairs at ultra-low latency, trading brief inconsistency for availability and partition tolerance.[^workers-kv-ga]

## 综合分析 / Synthesis

[介绍 Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md)（[原文](https://blog.cloudflare.com/introducing-cloudflare-workers)）把这一转向比作 GPU 从固定管线到可编程着色：Cloudflare 选择在边缘跑接近 [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) 的 JavaScript，用 V8 做多租户沙箱，并明确不以 Node.js、虚拟机或容器作为主路径。编程模型是单一异步请求处理器（可子请求、可直接响应、可操作 Cache API），而不是请求/响应与缓存前后的多钩子。产品名上，Worker 泛指边缘 JS；当时落地的是面向 HTTP 的 Service Worker 一类。[^introducing-cloudflare-workers]

[Introducing Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md) ([original](https://blog.cloudflare.com/introducing-cloudflare-workers)) likens the shift to GPUs moving from fixed pipelines to programmable shaders: Cloudflare chose near-[Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) JavaScript at the edge, V8 for multi-tenant sandboxing, and explicitly not Node.js, VMs, or containers as the main path. The programming model is a single async request handler (subrequests, direct responses, Cache API)—not multiple hooks around request/response and cache. In product naming, Worker means edge JS in general; what shipped then was the HTTP Service Worker flavor.[^introducing-cloudflare-workers]

[Workers KV 正式可用](../sources/articles/workers-kv-ga.md)（[原文](https://blog.cloudflare.com/workers-kv-is-ga)）补上可编程边缘所需的持久层：[Workers KV](https://www.cloudflare.com/products/workers-kv/) 是跨越全球边缘的最终一致键值存储，避免把海量数据硬编码进 Workers 脚本。它按 CAP 选择可用性与分区容忍，强调超快读与区域容错，并用「Matthew 问题」划出边界——适合重定向、翻译键、配置等读多写少场景，不适合银行余额一类强一致写。正式可用还带来批量写入、过期键、更大 value（至 2 MB）与明确计价/限额。[^workers-kv-ga]

[Workers KV is Generally Available](../sources/articles/workers-kv-ga.md) ([original](https://blog.cloudflare.com/workers-kv-is-ga)) supplies the persistence layer the programmable edge needs: [Workers KV](https://www.cloudflare.com/products/workers-kv/) is an eventually consistent key-value store across the global edge, so huge datasets need not be hard-coded into Workers scripts. Under CAP it chooses availability and partition tolerance, stressing ultra-fast reads and regional resilience, and uses the “Matthew question” to bound fit—good for redirects, translation keys, config, and similar read-heavy cases, not for bank-balance-style strong consistency. GA also adds bulk writes, expiring keys, larger values (up to 2 MB), and explicit pricing and limits.[^workers-kv-ga]

## 矛盾与变化 / Contradictions

- [介绍 Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md) 强调用边缘代码与 Cache API 改写请求、直接响应，尚未讨论脚本体积之外的大规模持久状态。[^introducing-cloudflare-workers] [Workers KV 正式可用](../sources/articles/workers-kv-ga.md) 则写明：仅靠硬编码与约 1 MB 脚本上限无法支撑数十亿键级用例，需要独立的最终一致 KV；并明确最终一致性不适合对同一键频繁写且不能容忍短暂双值的工作负载。[^workers-kv-ga]
- [Introducing Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md) stresses rewriting requests and responding directly with edge code and the Cache API, without addressing large-scale durable state beyond script size.[^introducing-cloudflare-workers] [Workers KV is Generally Available](../sources/articles/workers-kv-ga.md) states that hard-coding under an about 1 MB script limit cannot support billions of keys, so a separate eventually consistent KV is required—and that eventual consistency is a poor fit when the same key is written often and brief dual values are unacceptable.[^workers-kv-ga]

## 相关 / Related

- Source: [介绍 Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md)
- Source: [Workers KV 正式可用](../sources/articles/workers-kv-ga.md)

[^introducing-cloudflare-workers]: Introducing Cloudflare Workers
[^workers-kv-ga]: Workers KV is Generally Available
