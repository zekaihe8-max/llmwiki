---
type: Topic
title: 可编程边缘计算
description: 边缘网络应通过沙箱化 JavaScript（如 Service Worker API）变为可编程，而不是无限叠加固定功能；轻量多租户运行时才能把代码铺到全球节点。
tags: [edge, serverless, cloudflare-workers, javascript, service-workers, v8]
sources:
  - id: introducing-cloudflare-workers
    resource: https://blog.cloudflare.com/introducing-cloudflare-workers
    title: Introducing Cloudflare Workers
generated:
  by: auto/composer
  at: 2026-10-24T18:52:00+08:00
---

# 可编程边缘计算

当边缘只提供固定协议与产品能力时，自定义缓存、负载均衡、安全规则等需求永远盖不全。把边缘做成可编程平台——在靠近用户的节点上安全执行租户代码——才能覆盖开放用例；这要求运行时足够轻、启动够快，并能在同一主机上隔离多方代码。[^introducing-cloudflare-workers]

## Synthesis

[介绍 Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md)（[原文](https://blog.cloudflare.com/introducing-cloudflare-workers)）把这一转向比作 GPU 从固定管线到可编程着色：Cloudflare 选择在边缘跑接近 [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) 的 JavaScript，用 V8 做多租户沙箱，并明确不以 Node.js、虚拟机或容器作为主路径。编程模型是单一异步请求处理器（可子请求、可直接响应、可操作 Cache API），而不是请求/响应与缓存前后的多钩子。产品名上，Worker 泛指边缘 JS；当时落地的是面向 HTTP 的 Service Worker 一类。[^introducing-cloudflare-workers]

## Contradictions

None yet.

## Related

- Source: [介绍 Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md)

[^introducing-cloudflare-workers]: Introducing Cloudflare Workers
