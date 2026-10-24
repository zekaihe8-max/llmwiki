---
type: Source
title: Workers KV 正式可用
title_en: Workers KV is Generally Available
description: Cloudflare 宣布 Workers KV 进入正式可用：全球边缘上的高分布、最终一致键值存储，并带来批量写入、过期键与更大 value 上限。
description_en: Cloudflare announces Workers KV is generally available—a highly distributed, eventually consistent key-value store on the global edge—with bulk writes, expiring keys, and a larger value size limit.
resource: https://blog.cloudflare.com/workers-kv-is-ga
tags: [cloudflare, workers, workers-kv, edge, serverless, key-value, eventual-consistency]
sources:
  - id: workers-kv-ga
    resource: https://blog.cloudflare.com/workers-kv-is-ga
    title: Workers KV is Generally Available
    author: human:ashcon-partovi
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:35:00+08:00
date: 2019-05-21
---

# Workers KV 正式可用

*Workers KV is Generally Available*

[Ashcon Partovi](https://blog.cloudflare.com/author/ashcon/) 在 Cloudflare 博客宣布 [Workers KV](https://www.cloudflare.com/products/workers-kv/) 进入正式可用，可投入生产：这是跨越 Cloudflare 全球边缘的高分布、最终一致键值存储，可读数十亿键值对并以极低延迟在各地读取。[^workers-kv-ga] 原文见 <https://blog.cloudflare.com/workers-kv-is-ga>。

[Ashcon Partovi](https://blog.cloudflare.com/author/ashcon/) announces on the Cloudflare blog that [Workers KV](https://www.cloudflare.com/products/workers-kv/) is generally available for production: a highly distributed, eventually consistent key-value store across Cloudflare’s global edge, storing billions of pairs and reading them with ultra-low latency worldwide.[^workers-kv-ga] The original post is at <https://blog.cloudflare.com/workers-kv-is-ga>.

## 摘要 / Summary

- Workers 可在 175+ 数据中心跑 JavaScript，但客户很快需要持久数据；把数十亿重定向硬编码进脚本、塞进约 1 MB 并每次改动都重部署不现实，因此需要 Workers KV。[^workers-kv-ga]
- Workers can run JavaScript across 175+ data centers, but customers soon needed persistent data; hard-coding billions of redirects into a script under about 1 MB and re-deploying on every change is impractical, so Workers KV was built.[^workers-kv-ga]
- 按 CAP，Workers KV 选择可用性与分区容忍（最终一致性）：读可极快（文中称中位约 12 ms，依托缓存技术），数据在 175+ 边缘可用且可抗区域故障；同一键并发写时最后写入者最终胜出，写后立即读在短时间内也可能不一致，但全球一致可在不到 60 秒内达成，且同一位置上的写后读可期望一致。[^workers-kv-ga]
- Under CAP, Workers KV chooses availability and partition tolerance (eventual consistency): reads can be ultra-fast (the post cites a median of about 12 ms, powered by caching), data is available across 175+ edge sites and resilient to regional outages; concurrent writes to one key end with last-write-wins, and a write then read may briefly disagree, though global consistency can arrive in under 60 seconds, and same-location write-then-read can expect consistency.[^workers-kv-ga]
- 适用场景是要全球可用与超快读（大规模重定向、鉴权、翻译键、配置、跨 API 状态、边缘小文件等）；不适合对同一键频繁写且不能容忍短暂双值的场景（文中「Matthew 问题」与银行余额类比）。[^workers-kv-ga]
- It fits apps that want global availability and ultra-fast reads (mass redirects, auth, translation keys, config, cross-API state, edge small files); it is a poor fit when the same key is written often and brief dual values are unacceptable (the post’s “Matthew question” and bank-balance analogy).[^workers-kv-ga]
- 相对 beta 的正式可用能力：批量写入（单次 PUT 最多约 10,000 对、约 100 MB）、`expiration` / `expirationTtl` 过期键、value 上限从 64 kB 提到 2 MB；命名空间内键数量上限取消。[^workers-kv-ga]
- Versus beta, GA adds bulk writes (up to about 10,000 pairs / about 100 MB per PUT), `expiration` / `expirationTtl` expiring keys, and a value size limit raised from 64 kB to 2 MB; the per-namespace key cap is removed.[^workers-kv-ga]
- GA 计价（企业客户既有定价不变）：存储 $0.50/GB（含 1 GB）、读 $0.50/百万次（含 1,000 万）、写/list/delete $5/百万次（含 100 万）；正式可用限额包括每账户最多 20 个命名空间、键最长 512 字节、value 最大 2 MB、不同键无限写/秒、同键每秒一次写、每键无限读/秒。[^workers-kv-ga]
- GA pricing (Enterprise unchanged): $0.50/GB stored (1 GB included), $0.50/million reads (10 million included), $5/million write, list, and delete ops (1 million included); GA limits include up to 20 namespaces per account, keys up to 512 bytes, values up to 2 MB, unlimited writes/sec for different keys, one write/sec for the same key, and unlimited reads/sec per key.[^workers-kv-ga]

## 相关 / Related

- Topic: [可编程边缘计算](../../topics/programmable-edge-compute.md)
- Source: [介绍 Cloudflare Workers](./introducing-cloudflare-workers.md)

[^workers-kv-ga]: Workers KV is Generally Available
