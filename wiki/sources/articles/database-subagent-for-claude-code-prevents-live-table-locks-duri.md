---
type: Source
title: "Claude Code 数据库子 Agent 防止大表迁移锁表"
title_en: "Database subagent for Claude Code prevents live-table locks during migrations"
description: "为 Claude Code 安装仅处理数据库的子 Agent，在执行大表迁移前审阅 schema、标记锁表风险并先在临时数据库验证。"
description_en: "Install a database-only subagent for Claude Code to review schema, flag lock risks, and validate migrations on a temporary database before touching live tables."
resource: https://x.com/Voxyz_ai/status/2122313740645507315
tags: [claude-code, database, subagent, migration, agents]
sources:
  - id: database-subagent
    resource: https://x.com/Voxyz_ai/status/2122313740645507315
    title: "Database subagent for Claude Code prevents live-table locks during migrations"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T08:27:17+08:00
---

# Claude Code 数据库子 Agent 防止大表迁移锁表

*Database subagent for Claude Code prevents live-table locks during migrations*

「帖文称」Claude Code 用户为数千万行表添加列或建立索引时，整表会被锁定并导致线上应用冻结；安装仅处理数据库的子 Agent 可在变更前读取现有 schema 与历史迁移、标记会锁表或破坏线上应用的改动、将其改写为不加锁的版本，并先在临时数据库运行迁移再交回。帖文声称在 8000 万行表、部署前 10 分钟的测试中，未使用该子 Agent 得分 6/10，使用后为 10/10，且 8 次测试中 Claude 都会自主调用它；安装命令为 `npx claude-code-templates@latest --agent database/database-architect`。[^database-subagent]

The post warns that asking Claude Code to add a column or build an index on a table with tens of millions of rows can lock the whole table and freeze the live app. It recommends installing a database-only subagent that reads existing schema and past migrations, flags lock-inducing or breaking changes, rewrites them to avoid locks, and runs migrations on a temporary database first. The post claims an 80M-row table test scored 6/10 without the subagent and 10/10 with it, and Claude invoked it autonomously in all 8 tests; install via `npx claude-code-templates@latest --agent database/database-architect`.[^database-subagent]

## 摘要 / Summary

- 要求 Claude Code 为千万级行表添加列或建立索引，可能锁定整表并导致线上应用冻结。[^database-subagent]
- Asking Claude Code to add a column or build an index on a table with tens of millions of rows can lock the whole table and freeze the live app.[^database-subagent]
- 数据库子 Agent 在任何数据库变更前会先读取现有 schema 与历史迁移。[^database-subagent]
- The database subagent reads existing schema and past migrations before any database change.[^database-subagent]
- 它会标记会导致表锁或破坏线上应用的变更，并将其改写为不加锁的版本。[^database-subagent]
- It flags changes that would lock tables or break the live app and rewrites them to avoid locks.[^database-subagent]
- 它会先在临时数据库上运行迁移，再交还给用户。[^database-subagent]
- It runs the migration on a temporary database before handing it back.[^database-subagent]
- 在部署前 10 分钟对 8000 万行表的测试中，未使用该子 Agent 得分 6/10，使用后为 10/10；8 次测试中 Claude 都自主调用了它。[^database-subagent]
- In an 80M-row table test 10 minutes before deploy, it scored 6/10 without the subagent and 10/10 with it; Claude invoked it autonomously in all 8 tests.[^database-subagent]
- 安装命令：`npx claude-code-templates@latest --agent database/database-architect`。[^database-subagent]
- Install command: `npx claude-code-templates@latest --agent database/database-architect`.[^database-subagent]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2122313740645507315)。 / Original: [link](https://x.com/Voxyz_ai/status/2122313740645507315).
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^database-subagent]: Database subagent for Claude Code prevents live-table locks during migrations
