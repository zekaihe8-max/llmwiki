---
type: Topic
title: 可编程边缘计算
title_en: Programmable edge compute
description: 边缘网络应通过沙箱化 JavaScript 变为可编程，并配以最终一致的边缘 KV、强一致可协调的 Durable Objects，以及面向 Workers 的 SQL 数据库（D1），才能支撑整应用在边缘运行，而不是无限叠加固定功能。
description_en: Edge networks should become programmable via sandboxed JavaScript and pair that with eventually consistent edge KV, strongly consistent coordinatable Durable Objects, and a Workers-oriented SQL database (D1) so whole apps can run at the edge—not by stacking fixed features forever.
tags: [edge, serverless, cloudflare-workers, workers-kv, durable-objects, d1, sql, sqlite, javascript, service-workers, v8, key-value, coordination]
sources:
  - id: introducing-cloudflare-workers
    resource: https://blog.cloudflare.com/introducing-cloudflare-workers
    title: Introducing Cloudflare Workers
  - id: workers-kv-ga
    resource: https://blog.cloudflare.com/workers-kv-is-ga
    title: Workers KV is Generally Available
  - id: introducing-workers-durable-objects
    resource: https://blog.cloudflare.com/introducing-workers-durable-objects
    title: Introducing Workers Durable Objects
  - id: introducing-d1
    resource: https://blog.cloudflare.com/introducing-d1
    title: "Introducing D1: our first SQL database"
  - id: xiaomovps-cloudflare-ai-free-tier
    resource: https://x.com/xiaomovps/status/2115683808033001567
    title: Xiaomo on Cloudflare AI free tiers and usage
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:38:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 可编程边缘计算

*Programmable edge compute*

当边缘只提供固定协议与产品能力时，自定义缓存、负载均衡、安全规则等需求永远盖不全。把边缘做成可编程平台——在靠近用户的节点上安全执行租户代码——才能覆盖开放用例；这要求运行时足够轻、启动够快，并能在同一主机上隔离多方代码。[^introducing-cloudflare-workers] 有状态生产应用还需要全球分布的持久存储：最终一致的边缘键值层可在极低延迟下读数十亿对，并接受短暂不一致换取可用性与分区容忍。[^workers-kv-ga] 强一致与多客户端实时协调则需要另一原语：按应用逻辑单元（文档、聊天室、购物车）拆分的 Durable Objects，使整应用可完全跑在边缘、无需中心源站。[^introducing-workers-durable-objects] 关系型查询与跨全库任意 SQL 则需要再一原语：面向 Workers 的 SQL 数据库 D1（基于 SQLite），用自动读副本、批处理与邻近计算把应用状态放在一处仍可全球读。[^introducing-d1]

When the edge only ships fixed protocols and product features, custom caching, load balancing, security rules, and similar needs never fully cover the open case space. Making the edge a programmable platform—safely running tenant code near users—requires a runtime light enough, fast enough to start, and able to isolate many parties on one host.[^introducing-cloudflare-workers] Stateful production apps also need globally distributed persistent storage: an eventually consistent edge key-value layer can read billions of pairs at ultra-low latency, trading brief inconsistency for availability and partition tolerance.[^workers-kv-ga] Strong consistency and real-time multi-client coordination need another primitive: Durable Objects split by app-logical units (document, chat room, shopping cart), so whole applications can run entirely at the edge with no centralized origin.[^introducing-workers-durable-objects] Relational queries and arbitrary SQL across the full dataset need yet another: D1, a Workers-oriented SQL database built on SQLite, using automatic read replicas, batching, and embedded compute so app state can live in one place while still serving global reads.[^introducing-d1]

## 综合分析 / Synthesis

[介绍 Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md)（[原文](https://blog.cloudflare.com/introducing-cloudflare-workers)）把这一转向比作 GPU 从固定管线到可编程着色：Cloudflare 选择在边缘跑接近 [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) 的 JavaScript，用 V8 做多租户沙箱，并明确不以 Node.js、虚拟机或容器作为主路径。编程模型是单一异步请求处理器（可子请求、可直接响应、可操作 Cache API），而不是请求/响应与缓存前后的多钩子。产品名上，Worker 泛指边缘 JS；当时落地的是面向 HTTP 的 Service Worker 一类。[^introducing-cloudflare-workers]

[Introducing Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md) ([original](https://blog.cloudflare.com/introducing-cloudflare-workers)) likens the shift to GPUs moving from fixed pipelines to programmable shaders: Cloudflare chose near-[Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) JavaScript at the edge, V8 for multi-tenant sandboxing, and explicitly not Node.js, VMs, or containers as the main path. The programming model is a single async request handler (subrequests, direct responses, Cache API)—not multiple hooks around request/response and cache. In product naming, Worker means edge JS in general; what shipped then was the HTTP Service Worker flavor.[^introducing-cloudflare-workers]

[Workers KV 正式可用](../sources/articles/workers-kv-ga.md)（[原文](https://blog.cloudflare.com/workers-kv-is-ga)）补上可编程边缘所需的持久层：[Workers KV](https://www.cloudflare.com/products/workers-kv/) 是跨越全球边缘的最终一致键值存储，避免把海量数据硬编码进 Workers 脚本。它按 CAP 选择可用性与分区容忍，强调超快读与区域容错，并用「Matthew 问题」划出边界——适合重定向、翻译键、配置等读多写少场景，不适合银行余额一类强一致写。正式可用还带来批量写入、过期键、更大 value（至 2 MB）与明确计价/限额。[^workers-kv-ga]

[Workers KV is Generally Available](../sources/articles/workers-kv-ga.md) ([original](https://blog.cloudflare.com/workers-kv-is-ga)) supplies the persistence layer the programmable edge needs: [Workers KV](https://www.cloudflare.com/products/workers-kv/) is an eventually consistent key-value store across the global edge, so huge datasets need not be hard-coded into Workers scripts. Under CAP it chooses availability and partition tolerance, stressing ultra-fast reads and regional resilience, and uses the “Matthew question” to bound fit—good for redirects, translation keys, config, and similar read-heavy cases, not for bank-balance-style strong consistency. GA also adds bulk writes, expiring keys, larger values (up to 2 MB), and explicit pricing and limits.[^workers-kv-ga]

[介绍 Workers Durable Objects](../sources/articles/introducing-workers-durable-objects.md)（[原文](https://blog.cloudflare.com/introducing-workers-durable-objects)）补上强一致状态与实时协调：每个 Durable Object 是带全球唯一 ID 的类实例，同一时刻只在一处，私有存储与对象共置并可事务一致；也可纯作协调点（如限流）而不落盘。Cloudflare 自动选址与迁移（「Region: Earth」），存储模型对齐聊天室/文档等逻辑单元。随 beta 还让 Workers 可直接做 WebSocket 端点，支撑协同编辑与聊天等「杀手」场景。文中将 serverless 状态定义为把状态拆成与应用逻辑对齐的细粒度块，并展望以 Object 为 chunk 构建真正的边缘数据库。[^introducing-workers-durable-objects]

[Introducing Workers Durable Objects](../sources/articles/introducing-workers-durable-objects.md) ([original](https://blog.cloudflare.com/introducing-workers-durable-objects)) supplies strongly consistent state and real-time coordination: each Durable Object is a class instance with a globally unique ID, living in one place at a time, with private co-located storage that can be transactionally consistent—or used as a pure coordinator (e.g. rate limits) with no disk. Cloudflare auto-places and migrates objects (“Region: Earth”), matching storage to logical units such as chat rooms or documents. The beta also lets Workers speak WebSocket directly, enabling collaborative-editing and chat “killer” apps. The post frames serverless state as fine-grained units aligned with app logic, and looks toward edge databases that store each chunk as an Object.[^introducing-workers-durable-objects]

[介绍 D1：首个 SQL 数据库](../sources/articles/introducing-d1.md)（[原文](https://blog.cloudflare.com/introducing-d1)）在 KV、Durable Objects 与 R2 之后宣布面向 Workers 的首个 SQL 数据库 [D1](https://blog.cloudflare.com/introducing-d1)，基于 SQLite。目标是把整应用状态放在一处、仍可对全库做任意关系查询；与「读写都回流单实例」的传统中心化库不同，D1 预告自动在靠近用户处建只读副本并持续同步，并提供批处理（一次往返多条 SQL，适合原子事务）、把 Worker 代码跑在库旁的嵌入式计算、定期快照到 R2 与一键恢复，且建立在 Durable Objects 冗余存储上以实现自愈。开发侧强调控制台创建、Wrangler binding（`env.DB`）与无出站费、按存储与操作计费的意向。[^introducing-d1]

[Introducing D1: our first SQL database](../sources/articles/introducing-d1.md) ([original](https://blog.cloudflare.com/introducing-d1)) announces [D1](https://blog.cloudflare.com/introducing-d1)—the first SQL database for Workers, built on SQLite—after KV, Durable Objects, and R2. The goal is to keep whole-app state in one place while still running arbitrary relational queries across the full set; unlike traditional centralized databases where reads and writes funnel to a single instance, D1 previews automatic read-only clones near users kept in sync, plus batching (many SQL statements in one round-trip for atomic transactions), embedded compute that runs Worker code next to the database, regular R2 snapshots with one-click restore, and self-healing on Durable Objects’ redundant storage. On the DX side it stresses console creation, Wrangler bindings (`env.DB`), and pricing intent with no egress and charges for storage plus operations.[^introducing-d1]

[小墨谈 Cloudflare AI 免费额度与玩法](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md) 从**社区 2026 用法侧**补同一可编程边缘上的 AI 层：在 Workers / **Durable Objects** 栈上，免费账户可试 **Browser Run**、**AI Search**、**Workers AI**（日 1 万 Neurons 等）与 **AI Gateway** 分析/缓存/限流，并把 **PiHarness** 上的 Pi Durable 部署到 DO——与上文官方博客的 KV/DO/D1 原语叙事衔接，但是**产品免费额度清单**而非架构宣言；帖提醒 AI Search 自 11 月 1 日起超额计费、Gateway 不免第三方模型费用。[^xiaomovps-cloudflare-ai-free-tier] 原帖 <https://x.com/xiaomovps/status/2115683808033001567>。

[Xiaomo on Cloudflare AI free tiers and usage](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md) adds a **2026 community usage** slice on the same programmable edge: on Workers / **Durable Objects**, free accounts can try **Browser Run**, **AI Search**, **Workers AI** (10k Neurons/day among other quotas), and **AI Gateway** analytics/cache/limits, plus **PiHarness** Pi Durable on DO—continuing the KV/DO/D1 primitive story above but as a **product free-tier roundup**, not an architecture post; it warns AI Search overage from November 1 and that Gateway does not free third-party model calls.[^xiaomovps-cloudflare-ai-free-tier] Post: <https://x.com/xiaomovps/status/2115683808033001567>.

## 矛盾与变化 / Contradictions

- [介绍 Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md) 强调用边缘代码与 Cache API 改写请求、直接响应，尚未讨论脚本体积之外的大规模持久状态。[^introducing-cloudflare-workers] [Workers KV 正式可用](../sources/articles/workers-kv-ga.md) 则写明：仅靠硬编码与约 1 MB 脚本上限无法支撑数十亿键级用例，需要独立的最终一致 KV；并明确最终一致性不适合对同一键频繁写且不能容忍短暂双值的工作负载。[^workers-kv-ga]
- [Introducing Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md) stresses rewriting requests and responding directly with edge code and the Cache API, without addressing large-scale durable state beyond script size.[^introducing-cloudflare-workers] [Workers KV is Generally Available](../sources/articles/workers-kv-ga.md) states that hard-coding under an about 1 MB script limit cannot support billions of keys, so a separate eventually consistent KV is required—and that eventual consistency is a poor fit when the same key is written often and brief dual values are unacceptable.[^workers-kv-ga]
- [Workers KV 正式可用](../sources/articles/workers-kv-ga.md) 把最终一致、最后写入胜出的全球 KV 定为读多写少状态的解法。[^workers-kv-ga] [介绍 Workers Durable Objects](../sources/articles/introducing-workers-durable-objects.md) 则称：此前无法在边缘做强一致状态或多客户端实时协调，这些部分仍须托管别处；Durable Objects 坐在与 KV 相对的光谱一端——事务与即时一致，适合动态状态与协调，而 KV 仍最适合静态内容、配置等少变数据；并说明单点事务会带来远端光速延迟，靠自动迁移缓解。[^introducing-workers-durable-objects]
- [Workers KV is Generally Available](../sources/articles/workers-kv-ga.md) treats eventually consistent, last-write-wins global KV as the answer for read-heavy state.[^workers-kv-ga] [Introducing Workers Durable Objects](../sources/articles/introducing-workers-durable-objects.md) says that until then strong consistency and real-time multi-client coordination were not possible entirely on the edge, so those parts still had to be hosted elsewhere; Durable Objects sit at the opposite end of the spectrum from KV—transactional and immediately consistent, better for dynamic state and coordination—while KV remains best for static content, config, and other rarely changing data; single-place transactions also imply speed-of-light latency for far clients, mitigated by auto-migration.[^introducing-workers-durable-objects]
- [介绍 Workers Durable Objects](../sources/articles/introducing-workers-durable-objects.md) 展望以 Object 为 chunk 构建真正的边缘数据库。[^introducing-workers-durable-objects] [介绍 D1：首个 SQL 数据库](../sources/articles/introducing-d1.md) 则落地首个面向 Workers 的 SQL 数据库（SQLite），强调对全库任意查询与自动读副本，并把备份/自愈建立在 Durable Objects 冗余存储与 R2 快照上——关系库形态与「每 chunk 一 Object」的展望并存，而非互相替代叙述。[^introducing-d1]
- [Introducing Workers Durable Objects](../sources/articles/introducing-workers-durable-objects.md) looks toward edge databases that store each chunk as an Object.[^introducing-workers-durable-objects] [Introducing D1: our first SQL database](../sources/articles/introducing-d1.md) ships the first Workers-oriented SQL database (SQLite), stressing arbitrary full-dataset queries and automatic read replicas, with backup/self-healing on Durable Objects’ redundant storage and R2 snapshots—a relational shape that sits beside the “one Object per chunk” outlook rather than replacing that story.[^introducing-d1]

## 相关 / Related

- Source: [介绍 Cloudflare Workers](../sources/articles/introducing-cloudflare-workers.md)
- Source: [Workers KV 正式可用](../sources/articles/workers-kv-ga.md)
- Source: [介绍 Workers Durable Objects](../sources/articles/introducing-workers-durable-objects.md)
- Source: [介绍 D1：首个 SQL 数据库](../sources/articles/introducing-d1.md)
- Source: [小墨谈 Cloudflare AI 免费额度与玩法](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md)

[^introducing-cloudflare-workers]: Introducing Cloudflare Workers
[^workers-kv-ga]: Workers KV is Generally Available
[^introducing-workers-durable-objects]: Introducing Workers Durable Objects
[^introducing-d1]: Introducing D1: our first SQL database
[^xiaomovps-cloudflare-ai-free-tier]: Xiaomo on Cloudflare AI free tiers and usage
