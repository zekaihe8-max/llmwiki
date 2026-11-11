---
type: Source
title: "Airbnb 开源内部工作流引擎 Skipper"
title_en: "Airbnb open-sources internal workflow engine Skipper"
description: "Airbnb 开源可嵌入 Java/Kotlin 服务的工作流引擎 Skipper，支持进度持久化与故障恢复，但不保证下游操作仅执行一次。"
description_en: "Airbnb open-sources Skipper, a workflow engine embeddable in Java/Kotlin services, supporting progress persistence and fault recovery but not exactly-once downstream execution."
resource: https://x.com/shao__meng/status/2120336655093735868
tags: [airbnb, skipper, workflow, open-source, java, kotlin]
sources:
  - id: airbnb-skipper-open-source
    resource: https://x.com/shao__meng/status/2120336655093735868
    title: "Airbnb open-sources internal workflow engine Skipper"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T20:54:28+08:00
---

# Airbnb 开源内部工作流引擎 Skipper

*Airbnb open-sources internal workflow engine Skipper*

「帖文称」Airbnb 开源了内部使用的工作流引擎 Skipper，作为库嵌入现有 Java、Kotlin 服务，无需另建编排集群。执行在服务内进行，进度存入共享数据库，副本失败后可由其他副本接管；恢复时从头重放工作流方法，已持久化的动作直接返回保存结果。帖文还强调，可恢复不等于绝不重复，下游支付、发券等操作仍需开发者自行保证幂等。开源版提供 MySQL、SQLite 适配器，Postgres 与 DynamoDB 仍在规划；内部峰值每秒 1 万个工作流使用了 DynamoDB，不能直接视为开源版性能指标。[^airbnb-skipper-open-source]

The post says Airbnb has open-sourced Skipper, an internal workflow engine embedded as a library in existing Java and Kotlin services, eliminating the need for a separate orchestration cluster. Execution runs inside the service while progress is stored in a shared database, allowing other replicas to take over after a failure. Recovery replays the workflow from the start but returns saved results for already-persisted actions. The post cautions that recoverable does not mean never repeated, so idempotency remains the developer's responsibility for operations such as payments and coupon issuance. The open-source version ships with MySQL and SQLite adapters, with Postgres and DynamoDB planned; the reported internal peak of 10,000 workflows per second relied on DynamoDB and should not be treated as the open-source version's performance benchmark.[^airbnb-skipper-open-source]

## 摘要 / Summary

- Skipper 作为库嵌入现有服务，运行时和调度器随服务一起部署，不需要独立的工作流编排集群。[^airbnb-skipper-open-source]
- Skipper is embedded as a library in existing services, with runtime and scheduler deployed alongside the service, requiring no separate workflow orchestration cluster.[^airbnb-skipper-open-source]
- 多个服务副本共享数据库，用租约协调任务；某个副本失败后，其他副本可以接管。[^airbnb-skipper-open-source]
- Multiple service replicas share a database and coordinate tasks via leases; if one replica fails, others can take over.[^airbnb-skipper-open-source]
- 恢复时从头重放工作流方法，但已持久化的动作直接返回保存结果，不必重新执行。[^airbnb-skipper-open-source]
- On recovery, the workflow is replayed from the beginning, but already-persisted actions return saved results without re-execution.[^airbnb-skipper-open-source]
- Skipper 不能保证下游操作只发生一次，支付、发券等操作仍需开发者保证幂等。[^airbnb-skipper-open-source]
- Skipper cannot guarantee downstream operations occur only once; developers must ensure idempotency for operations such as payments and coupon issuance.[^airbnb-skipper-open-source]
- 开源版提供 MySQL、SQLite 适配器，多实例生产部署建议用 MySQL；Postgres、DynamoDB 仍在规划。[^airbnb-skipper-open-source]
- The open-source version provides MySQL and SQLite adapters, with MySQL recommended for multi-instance production deployment; Postgres and DynamoDB are still planned.[^airbnb-skipper-open-source]
- Airbnb 内部已覆盖 15 个以上用例，峰值达到每秒 1 万个工作流，但该峰值使用 DynamoDB，不能直接视为当前开源版的性能指标。[^airbnb-skipper-open-source]
- Airbnb internally covers more than 15 use cases with a peak of 10,000 workflows per second, but that peak used DynamoDB and cannot be directly treated as the open-source version's performance indicator.[^airbnb-skipper-open-source]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2120336655093735868)。 / Original: [link](https://x.com/shao__meng/status/2120336655093735868).
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [深后端与 JIT 前端 / Deep backends and JIT frontends](../../topics/deep-backends-and-jit-frontends.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^airbnb-skipper-open-source]: Airbnb open-sources internal workflow engine Skipper
