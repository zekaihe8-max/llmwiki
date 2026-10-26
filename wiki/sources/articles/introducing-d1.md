---
type: Source
title: "介绍 D1：首个 SQL 数据库"
title_en: "Introducing D1: our first SQL database"
description: Cloudflare 宣布 D1——面向 Workers 的首个 SQL 数据库，基于 SQLite，预告读副本、批处理、邻近计算与 R2 备份等能力。
description_en: Cloudflare announces D1, its first SQL database for Workers—built on SQLite—with previewed read replicas, batching, embedded compute, and R2-backed backups.
resource: https://blog.cloudflare.com/introducing-d1
tags: [cloudflare, workers, d1, sql, sqlite, edge, serverless, database]
sources:
  - id: introducing-d1
    resource: https://blog.cloudflare.com/introducing-d1
    title: "Introducing D1: our first SQL database"
    author: human:rita-kozlov
generated:
  by: cursor-agent/composer
  at: 2026-10-25T11:18:06+08:00
date: 2022-05-11
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 介绍 D1：首个 SQL 数据库

*Introducing D1: our first SQL database*

[Rita Kozlov](https://blog.cloudflare.com/author/rita/) 与 [Glen Maddern](https://blog.cloudflare.com/author/glen/) 在 Cloudflare 博客宣布 [D1](https://blog.cloudflare.com/introducing-d1)：面向 [Cloudflare Workers](https://blog.cloudflare.com/introducing-cloudflare-workers/) 的首个 SQL 数据库，基于 SQLite；在 KV、Durable Objects 与 R2 之后补上关系型存储。[^introducing-d1] 原文见 <https://blog.cloudflare.com/introducing-d1>。

[Rita Kozlov](https://blog.cloudflare.com/author/rita/) and [Glen Maddern](https://blog.cloudflare.com/author/glen/) announce [D1](https://blog.cloudflare.com/introducing-d1) on the Cloudflare blog: the first SQL database for [Cloudflare Workers](https://blog.cloudflare.com/introducing-cloudflare-workers/), built on SQLite, adding relational storage after KV, Durable Objects, and R2.[^introducing-d1] The original post is at <https://blog.cloudflare.com/introducing-d1>.

## 摘要 / Summary

- 文中回顾：2017 年推出 Workers 后发现多数真实应用有状态，随后交付 KV、Durable Objects 与 R2；今日宣布 D1 为首个 SQL 数据库。公开 beta 准入将尽快开始，最早约 2022 年 6 月。[^introducing-d1]
- The post recalls that after Workers in 2017, most real apps proved stateful, so Cloudflare shipped KV, Durable Objects, and R2; today it announces D1 as its first SQL database. Public beta access was expected soon, as early as June 2022.[^introducing-d1]
- D1 基于 SQLite：文中称 SQLite 是世上最普及的数据库，也曾自称「serverless」（原意是「不涉及服务器」）；Workers 跑在服务器与客户端之间，故选 SQLite 作首个数据库入口。[^introducing-d1]
- D1 is built on SQLite: the post calls SQLite the most ubiquitous database and notes it once branded itself “serverless” (literally “not involving a server”); because Workers sits between server and client, SQLite fit as the first database entry.[^introducing-d1]
- 演示为经典 Northwind Traders 样本库，线上见 [northwind.d1sql.com](https://northwind.d1sql.com/)，含查询指标面板；目标场景包括 API、电商、会计、SaaS、CRM，并可与 Cloudflare Access 组合做仅组织内可用的内部仪表盘。[^introducing-d1]
- The demo is the classic Northwind Traders sample at [northwind.d1sql.com](https://northwind.d1sql.com/), with a query-metrics dashboard; target builds include APIs, eCommerce, accounting, SaaS, and CRMs, and pairing with Cloudflare Access for org-locked internal dashboards.[^introducing-d1]
- 开发体验强调「从零到全栈」：可在控制台点击创建库与表、上传数据；Wrangler 2 将原生支持创建与管理；Worker 通过 env 上的 binding 访问数据库，示例用 `env.DB.get` 跑 SQL，也可用参数化查询。[^introducing-d1]
- Developer experience stresses going from nothing to a full-stack app: create databases and tables in a few clicks and upload data; Wrangler 2 would gain native create/manage support; Workers attach each database via a binding on `env`, with examples using `env.DB.get` for SQL and parameterized queries.[^introducing-d1]
- 计价意向：与 R2 一样无出站流量费，按基础存储加数据库操作计费，并称相对中心化方案更低成本、更好性能。[^introducing-d1]
- Pricing intent: like R2, no egress charges; charge for base storage plus database operations, with a claim of lower cost and better performance than comparable centralized solutions.[^introducing-d1]
- 预告能力：自动在靠近用户处建只读副本并持续同步；批处理 API 可一次提交多条 SQL（适合原子事务）；可把一段 Worker 代码跑在数据库旁（嵌入式计算）；定期快照备份到 R2 并一键恢复，且建立在 Durable Objects 冗余存储上以实现自愈；支持导入既有数据、本地克隆快照做开发，以及为 Pages 每个 PR 建带测试数据的库。[^introducing-d1]
- Previewed capabilities: automatic read-only clones near users kept up to date; a batching API that sends an array of SQL statements in one round-trip (fit for atomic transactions); Worker code that can run next to the database (embedded compute); regular snapshots to R2 with one-click restore, built on Durable Objects’ redundant storage for self-healing; importing existing datasets, cloning snapshots locally for development, and creating a test-data database per Pages pull request.[^introducing-d1]

## 相关 / Related

- Topic: [可编程边缘计算](../../topics/programmable-edge-compute.md)
- Source: [介绍 Cloudflare Workers](./introducing-cloudflare-workers.md)
- Source: [Workers KV 正式可用](./workers-kv-ga.md)
- Source: [介绍 Workers Durable Objects](./introducing-workers-durable-objects.md)

[^introducing-d1]: Introducing D1: our first SQL database
