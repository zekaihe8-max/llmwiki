---
type: Source
title: 小墨谈 Pi Durable 持久化性能优化
title_en: Xiaomo on Pi Durable persistence performance
description: 小墨转述 Pi Durable 在 32 路并行 SQLite 测试中事务减少约 82%，并说明流式批写的崩溃丢失窗口与开发分支边界。
description_en: Xiaomo reports about 82% fewer transactions in a 32-way parallel SQLite test of Pi Durable, with a crash-loss window for batched streaming writes and a development-branch caveat.
resource: https://x.com/xiaomovps/status/2116116088236937361
tags: [agents, pi, persistence, sqlite, performance, crash-recovery]
sources:
  - id: xiaomovps-pi-durable-performance
    resource: https://x.com/xiaomovps/status/2116116088236937361
    title: Xiaomo on Pi Durable persistence performance
    author: human:xiaomovps
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:24:34+08:00
---

# 小墨谈 Pi Durable 持久化性能优化

*Xiaomo on Pi Durable persistence performance*

小墨转述 Mario Zechner 的 Pi Durable 优化：长期运行 Agent 的状态持久化需要同时考虑恢复能力、数据库写入与 CPU 成本；文中数字是所述测试结果，部分优化尚未全部进入正式版本。[^xiaomovps-pi-durable-performance]

Xiaomo relays Mario Zechner’s Pi Durable optimizations: persistence for long-running agents must balance recovery, database writes, and CPU costs; the figures are results from the reported tests, and some optimizations have yet to reach a stable release.[^xiaomovps-pi-durable-performance]

## 摘要 / Summary

- 每个执行步骤在继续前保存到数据库，一次保存对应一次 commit，约每次 Agent 运行 12 次 commit，使进程崩溃后能从最后提交恢复。[^xiaomovps-pi-durable-performance]
- Each execution step is saved to the database before proceeding, with one commit per save and about 12 commits per agent run, allowing recovery from the last commit after a process crash.[^xiaomovps-pi-durable-performance]

- 32 路并行 SQLite 测试中，事务从 562 次/秒降至 99 次/秒（约减少 82%），磁盘写入从 14.3 MB/s 降至 4.9 MB/s，单核 CPU 占用从 29% 降至 22%。[^xiaomovps-pi-durable-performance]
- In the 32-way parallel SQLite test, transactions fell from 562/s to 99/s (about 82%), disk writes from 14.3 MB/s to 4.9 MB/s, and single-core CPU usage from 29% to 22%.[^xiaomovps-pi-durable-performance]

- 流式输出先在内存更新，再合并写入数据库，界面仍实时显示；长回答测试中，事务减少约 27 倍、磁盘写入减少约 9 倍。代价是最多约一秒后落盘，突然崩溃可能丢失最近一小段输出。[^xiaomovps-pi-durable-performance]
- Streaming output updates in memory before being batched into database writes while the UI remains live; the long-answer test reports roughly 27-fold fewer transactions and ninefold less disk writing. The tradeoff is a persistence delay of up to about one second, so a sudden crash may lose the latest small segment of output.[^xiaomovps-pi-durable-performance]

- 近期还增加会话历史窗口化读取、任务失败原因记录与 afterRun 后续任务机制；作者将其视为长期 Personal Agent 稳定性与资源消耗方面的进展，但提醒不少优化仍在开发分支。[^xiaomovps-pi-durable-performance]
- Recent additions also include windowed session-history reads, task-failure reasons, and an afterRun follow-up task mechanism. The author sees progress in stability and resource use for long-running personal agents, while warning that many optimizations remain on development branches.[^xiaomovps-pi-durable-performance]

## 相关 / Related

- 原文：[小墨的 Pi Durable 优化帖](https://x.com/xiaomovps/status/2116116088236937361)。 / Original: [Xiaomo’s Pi Durable optimization post](https://x.com/xiaomovps/status/2116116088236937361).
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)

[^xiaomovps-pi-durable-performance]: Xiaomo on Pi Durable persistence performance
