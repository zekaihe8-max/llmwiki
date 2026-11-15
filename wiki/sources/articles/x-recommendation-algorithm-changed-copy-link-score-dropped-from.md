---
type: Source
title: "X 推荐算法改了，复制链接从 20 分变 0 分"
title_en: "X Recommendation Algorithm Changed: Copy Link Score Dropped from 20 to 0"
description: "X 开源推荐算法将复制链接打分从 20 降至 0，小账号不再靠复制链接获站内推荐"
description_en: "X's open-source recommendation algorithm cut the copy-link score from 20 to 0, so small accounts can no longer boost in-platform recommendations via link copies."
resource: https://x.com/0xlangeai/status/2121803184352194569
tags: [x, recommendation-algorithm, social-media, algorithm-scoring]
sources:
  - id: b92a3363ff5693a9
    resource: https://x.com/0xlangeai/status/2121803184352194569
    title: "X Recommendation Algorithm Changed: Copy Link Score Dropped from 20 to 0"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:05:45+08:00
---

# X 推荐算法改了，复制链接从 20 分变 0 分

*X Recommendation Algorithm Changed: Copy Link Score Dropped from 20 to 0*

帖文称，X 开源推荐算法在 11 月 13 日版本中将“复制链接”打分从 20 分降至 0 分，原为系统内最高分，约等于一次回复的 4 倍；X 仍会预估谁会复制链接，只是把该预估乘以 0，官方未作解释。代码中还出现“copy link bait”垃圾检查，但作者表示不确定是否已上线。[^b92a3363ff5693a9]

The post claims that X's open-source recommendation algorithm, in the November 13 version, reduced the "copy link" score from 20 to 0 points—formerly the system's highest score, about four times a reply—and that X still predicts who will copy links but multiplies that prediction by 0, with no official explanation. The code also contains a "copy link bait" spam check, though the author says it is unclear whether it is live.[^b92a3363ff5693a9]

## 摘要 / Summary

- 复制链接打分从 20 变 0，曾是系统最高分，约等于 4 次回复。[^b92a3363ff5693a9]
- Copy-link score dropped from 20 to 0, formerly the system's highest score, about four times a reply.[^b92a3363ff5693a9]
- X 仍会预估谁会复制链接，但将该预估乘以 0，官方未解释。[^b92a3363ff5693a9]
- X still predicts who will copy links, but multiplies that prediction by 0; no official explanation given.[^b92a3363ff5693a9]
- 代码中出现“copy link bait”垃圾检查，打标后帖子不易进入陌生人时间线，但仅出现在测试中，是否上线不明。[^b92a3363ff5693a9]
- The code contains a "copy link bait" spam check; tagged posts are less likely to enter strangers' timelines, but it appears only in tests and may not be live.[^b92a3363ff5693a9]
- 仍在计分的包括：赞 0.708、回复 5、私信转发 5、互关来回 20、停留超 10 秒加 0.385。[^b92a3363ff5693a9]
- Still-scored actions include likes 0.708, replies 5, DM forwards 5, mutual-follow exchanges 20, and over 10 seconds dwell time adding 0.385.[^b92a3363ff5693a9]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2121803184352194569)。 / Original: [link](https://x.com/0xlangeai/status/2121803184352194569).
- Topic: [用 Grok Bot 内置额度桥接 Agent 查 X / Bridge agents to X via Grok Bot built-in quota](../../topics/grok-bot-x-api-substitute.md)
- Topic: [Grok Bot 管 X：情报防护不代发帖 / Grok Bot for X — intel and defense, never auto-post](../../topics/grok-bot-x-intel-defense-not-post.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^b92a3363ff5693a9]: X Recommendation Algorithm Changed: Copy Link Score Dropped from 20 to 0
