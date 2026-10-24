---
type: Source
title: 介绍 Cloudflare Workers
description: Cloudflare 宣布将在边缘运行接近 Service Worker API 的 JavaScript，用 V8 多租户沙箱让全球节点可编程，而不是无限叠加固定功能。
resource: https://blog.cloudflare.com/introducing-cloudflare-workers
tags: [cloudflare, workers, edge, serverless, javascript, service-workers, v8]
sources:
  - id: introducing-cloudflare-workers
    resource: https://blog.cloudflare.com/introducing-cloudflare-workers
    title: Introducing Cloudflare Workers
    author: human:kenton-varda
generated:
  by: auto/composer
  at: 2026-10-24T18:52:00+08:00
date: 2017-09-29
---

# 介绍 Cloudflare Workers

[Kenton Varda](https://blog.cloudflare.com/author/kenton-varda/) 在 Cloudflare 博客宣布即将推出 Cloudflare Workers：在全球边缘用 V8 运行 JavaScript，API 接近浏览器 [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)，从而把边缘网络变成可编程平台，而不是继续堆叠固定功能。[^introducing-cloudflare-workers] 原文见 <https://blog.cloudflare.com/introducing-cloudflare-workers>。

## Summary

- 边缘若只提供固定 HTTP 缓存与产品能力，永远盖不住自定义亲和负载均衡、缓存命中策略、WAF 规则等用例；正确方向是让开发者在 Cloudflare 边缘写代码。[^introducing-cloudflare-workers]
- Workers 选用 JavaScript 与 V8：安全上可复用 Chrome 多年审视过的沙箱（并叠加自有层），普及上 Web 开发者本就需要 JS；文中对比并否决了 Lua、虚拟机、容器与 Vx32 作为主路径，并说明不基于 Node.js，因其 `vm` 模块不是安全沙箱。[^introducing-cloudflare-workers]
- 编程模型采用 Service Worker 式单一异步 `fetch` 处理器，而非「请求/响应、缓存前/后」多钩子；可改写请求、直接响应、并行子请求、组合结果，并经由 Cache API 控制缓存。[^introducing-cloudflare-workers]
- 示例包括：有 Cookie 则跳过缓存、全文替换、以及用 `{{URL}}` 在边缘做类 ESI 的内容拼装；并可在 [cloudflareworkers.com](https://cloudflareworkers.com) playground 试用。[^introducing-cloudflare-workers]
- 「Cloudflare Worker」泛指跑在边缘的 JS；当时已实现的是处理 HTTP、面向 Service Worker API 的一类，未来或有其他类型。文末说明将缓慢放量，并指向 [Workers 文档](https://developers.cloudflare.com/workers/)。[^introducing-cloudflare-workers]

## Related

- Topic: [可编程边缘计算](../../topics/programmable-edge-compute.md)

[^introducing-cloudflare-workers]: Introducing Cloudflare Workers
