---
type: Source
title: 介绍 Workers Durable Objects
title_en: Introducing Workers Durable Objects
description: Cloudflare 宣布 Workers Durable Objects 封闭测试：在边缘提供强一致、可协调的无服务器状态，补上整应用无需中心源站即可运行的缺口。
description_en: Cloudflare announces a closed beta of Workers Durable Objects—strongly consistent, coordinatable serverless state at the edge, the missing piece for whole apps with no centralized origin.
resource: https://blog.cloudflare.com/introducing-workers-durable-objects
tags: [cloudflare, workers, durable-objects, edge, serverless, state, websockets, coordination]
sources:
  - id: introducing-workers-durable-objects
    resource: https://blog.cloudflare.com/introducing-workers-durable-objects
    title: Introducing Workers Durable Objects
    author: human:kenton-varda
generated:
  by: cursor-agent/composer
  at: 2026-10-25T10:32:30+08:00
date: 2020-09-28
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 介绍 Workers Durable Objects

*Introducing Workers Durable Objects*

[Kenton Varda](https://blog.cloudflare.com/author/kenton-varda/) 在 Cloudflare 博客宣布 [Durable Objects](https://blog.cloudflare.com/introducing-workers-durable-objects) 封闭测试：在 Workers 边缘提供强一致存储与多客户端实时协调，使整应用可完全跑在边缘、无需中心「源站」。[^introducing-workers-durable-objects] 原文见 <https://blog.cloudflare.com/introducing-workers-durable-objects>。

[Kenton Varda](https://blog.cloudflare.com/author/kenton-varda/) announces on the Cloudflare blog a closed beta of [Durable Objects](https://blog.cloudflare.com/introducing-workers-durable-objects): strongly consistent storage and real-time multi-client coordination on the Workers edge, so whole applications can run entirely at the edge with no centralized “origin.”[^introducing-workers-durable-objects] The original post is at <https://blog.cloudflare.com/introducing-workers-durable-objects>.

## 摘要 / Summary

- Durable Object 是 OOP 意义上的对象：一段类定义加私有状态；每个对象有全球唯一 ID，同一时刻只存在于一处，世界各地知道该 ID 的 Worker 消息都会送到同一处；相对普通 JS 对象，状态可落盘持久化，闲置关闭、按需重建，并可在内存中保持一致副本以零延迟操作。[^introducing-workers-durable-objects]
- A Durable Object is an object in the OOP sense: a class definition plus private state; each has a globally unique ID and exists in only one place at a time, so messages from any Worker that knows the ID land in the same place; unlike a normal JS object, state can persist on disk, shut down when idle and recreate on demand, and safely keep a consistent in-memory copy for zero-latency work.[^introducing-workers-durable-objects]
- 两大能力：存储——每对象私有、与对象共置的持久存储，强事务一致且按逻辑单元拆分以无服务器方式扩展；协调——把同一主题的请求转到同一对象，可在不碰存储的情况下协调多客户端（聊天室、协同编辑、会议、pub/sub、对局等）。[^introducing-workers-durable-objects]
- Two primary abilities: storage—per-object private durable storage co-located with the object, strongly and transactionally consistent, split into fine-grained logical units for serverless scale; coordination—route topic-related requests to one object so clients can coordinate without touching storage (chat rooms, collaborative editing, conferencing, pub/sub, game sessions, and more).[^introducing-workers-durable-objects]
- 「Region: Earth」：Cloudflare 自动选择对象所在数据中心并可透明迁移；存储模型应对齐应用逻辑（每文档/每聊天室一对象），可创建数百万乃至数十亿对象，无需按地理「区域」建模。[^introducing-workers-durable-objects]
- “Region: Earth”: Cloudflare automatically places each object and can migrate it transparently; design storage to match the app’s logical model (one object per document or chat room), with millions or billions of objects fine and no need to think in geographic “regions.”[^introducing-workers-durable-objects]
- 杀手场景是实时协同编辑：用 WebSocket 连到同一协调点，键击可直接转发并即时解冲突，再异步写回存储；文中配原子计数器示例与开源聊天 demo（每聊天室一对象广播，另用无存储对象做按 IP 限流）。随 beta 还让 Workers 可直接做 WebSocket 端点。[^introducing-workers-durable-objects]
- The killer app is real-time collaborative editing: clients connect to one coordinator over WebSockets, keystrokes forward and conflicts resolve instantly, then storage updates asynchronously; the post includes an atomic counter example and an open-source chat demo (one object per room for broadcast, plus storage-less objects for per-IP rate limits). With the beta, Workers can also act as WebSocket endpoints directly.[^introducing-workers-durable-objects]
- 相对 [Workers KV](https://blog.cloudflare.com/workers-kv-is-ga/)：KV 最终一致、最后写入胜出，适合少变数据的低延迟全球读；Durable Objects 更偏动态状态与协调，事务与即时一致好，但事务须在单点协调，远端客户端会有光速延迟，靠自动迁移靠近使用地缓解。文末将 serverless 状态定义为把状态拆成与应用逻辑单元对齐的细粒度块（聊天室、表格、购物车）。[^introducing-workers-durable-objects]
- Versus [Workers KV](https://blog.cloudflare.com/workers-kv-is-ga/): KV is eventually consistent with last-write-wins and fits low-latency global reads of rarely changing data; Durable Objects suit dynamic state and coordination—strong on transactions and immediate consistency—but transactions need a single place, so far clients pay speed-of-light latency, mitigated by auto-migration toward use. The close frames serverless state as splitting state into fine-grained units that match app logic (chat room, spreadsheet, shopping cart).[^introducing-workers-durable-objects]

## 相关 / Related

- Topic: [可编程边缘计算](../../topics/programmable-edge-compute.md)
- Source: [介绍 Cloudflare Workers](./introducing-cloudflare-workers.md)
- Source: [Workers KV 正式可用](./workers-kv-ga.md)

[^introducing-workers-durable-objects]: Introducing Workers Durable Objects
