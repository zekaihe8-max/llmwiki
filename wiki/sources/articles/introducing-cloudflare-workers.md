---
type: Source
title: 介绍 Cloudflare Workers
title_en: Introducing Cloudflare Workers
description: Cloudflare 宣布将在边缘运行接近 Service Worker API 的 JavaScript，用 V8 多租户沙箱让全球节点可编程，而不是无限叠加固定功能。
description_en: Cloudflare announces JavaScript at the edge with an API close to Service Workers, using V8 multi-tenant sandboxes so global nodes become programmable instead of stacking fixed features forever.
resource: https://blog.cloudflare.com/introducing-cloudflare-workers
tags: [cloudflare, workers, edge, serverless, javascript, service-workers, v8]
sources:
  - id: introducing-cloudflare-workers
    resource: https://blog.cloudflare.com/introducing-cloudflare-workers
    title: Introducing Cloudflare Workers
    author: human:kenton-varda
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
date: 2017-09-29
---

# 介绍 Cloudflare Workers

*Introducing Cloudflare Workers*

[Kenton Varda](https://blog.cloudflare.com/author/kenton-varda/) 在 Cloudflare 博客宣布即将推出 Cloudflare Workers：在全球边缘用 V8 运行 JavaScript，API 接近浏览器 [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)，从而把边缘网络变成可编程平台，而不是继续堆叠固定功能。[^introducing-cloudflare-workers] 原文见 <https://blog.cloudflare.com/introducing-cloudflare-workers>。

[Kenton Varda](https://blog.cloudflare.com/author/kenton-varda/) announces upcoming Cloudflare Workers on the Cloudflare blog: run JavaScript with V8 at the global edge, with an API close to the browser [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), turning the edge network into a programmable platform instead of stacking more fixed features.[^introducing-cloudflare-workers] The original post is at <https://blog.cloudflare.com/introducing-cloudflare-workers>.

## 摘要 / Summary

- 边缘若只提供固定 HTTP 缓存与产品能力，永远盖不住自定义亲和负载均衡、缓存命中策略、WAF 规则等用例；正确方向是让开发者在 Cloudflare 边缘写代码。[^introducing-cloudflare-workers]
- If the edge only offers fixed HTTP caching and product features, it can never cover custom affinity load balancing, cache-hit policy, WAF rules, and similar cases; the right move is to let developers write code on the Cloudflare edge.[^introducing-cloudflare-workers]
- Workers 选用 JavaScript 与 V8：安全上可复用 Chrome 多年审视过的沙箱（并叠加自有层），普及上 Web 开发者本就需要 JS；文中对比并否决了 Lua、虚拟机、容器与 Vx32 作为主路径，并说明不基于 Node.js，因其 `vm` 模块不是安全沙箱。[^introducing-cloudflare-workers]
- Workers chose JavaScript and V8: for security, reuse a sandbox Chrome has scrutinized for years (plus Cloudflare’s own layers); for reach, web developers already need JS. The post compares and rejects Lua, VMs, containers, and Vx32 as the main path, and explains it is not based on Node.js because its `vm` module is not a security sandbox.[^introducing-cloudflare-workers]
- 编程模型采用 Service Worker 式单一异步 `fetch` 处理器，而非「请求/响应、缓存前/后」多钩子；可改写请求、直接响应、并行子请求、组合结果，并经由 Cache API 控制缓存。[^introducing-cloudflare-workers]
- The programming model uses a single async Service Worker–style `fetch` handler, not separate request/response or before/after-cache hooks; you can rewrite requests, respond directly, fan out subrequests, compose results, and control caching via the Cache API.[^introducing-cloudflare-workers]
- 示例包括：有 Cookie 则跳过缓存、全文替换、以及用 `{{URL}}` 在边缘做类 ESI 的内容拼装；并可在 [cloudflareworkers.com](https://cloudflareworkers.com) playground 试用。[^introducing-cloudflare-workers]
- Examples include skipping cache when a Cookie is present, full-text replacement, and ESI-like composition at the edge with `{{URL}}`; you can try them in the [cloudflareworkers.com](https://cloudflareworkers.com) playground.[^introducing-cloudflare-workers]
- 「Cloudflare Worker」泛指跑在边缘的 JS；当时已实现的是处理 HTTP、面向 Service Worker API 的一类，未来或有其他类型。文末说明将缓慢放量，并指向 [Workers 文档](https://developers.cloudflare.com/workers/)。[^introducing-cloudflare-workers]
- “Cloudflare Worker” means JS that runs at the edge in general; what shipped then was the HTTP-handling, Service Worker API–oriented kind, with other types possible later. The post ends by noting a slow rollout and pointing to the [Workers docs](https://developers.cloudflare.com/workers/).[^introducing-cloudflare-workers]

## 相关 / Related

- Topic: [可编程边缘计算](../../topics/programmable-edge-compute.md)

[^introducing-cloudflare-workers]: Introducing Cloudflare Workers
