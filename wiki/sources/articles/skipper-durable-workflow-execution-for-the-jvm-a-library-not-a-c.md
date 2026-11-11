---
type: Source
title: "Skipper：JVM 耐久工作流执行库，非集群"
title_en: "Skipper: Durable Workflow Execution for the JVM — a Library, Not a Cluster"
description: "Skipper 是 Airbnb 开源的轻量级 JVM 工作流引擎库，让业务流程以普通 Kotlin/Java 代码编写，并保证在崩溃、部署和下游故障下仍能运行到终止状态。"
description_en: "Skipper is Airbnb's open-source lightweight JVM workflow engine library that lets you write business processes as ordinary Kotlin or Java code and guarantees they run to completion despite crashes, deploys, and flaky downstreams."
resource: https://github.com/airbnb/skipper
tags: [jvm, workflow-engine, durable-execution, kotlin, java, airbnb, library]
sources:
  - id: airbnb-skipper-jvm-workflow-engine
    resource: https://github.com/airbnb/skipper
    title: "Skipper: Durable Workflow Execution for the JVM — a Library, Not a Cluster"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T20:55:07+08:00
---

# Skipper：JVM 耐久工作流执行库，非集群

*Skipper: Durable Workflow Execution for the JVM — a Library, Not a Cluster*

「帖文称」Skipper 是 Airbnb 开源的轻量级 JVM 工作流引擎，定位为类库而非集群，开发者可将业务流程写成普通 Kotlin 或 Java 代码，Skipper 负责保证流程在崩溃、部署和下游不稳定的情况下仍能运行到终止状态。工作流状态以快照形式检查点到已有数据库（如嵌入式 SQLite 或 MySQL），无需新增控制面或专门工作节点集群。[^airbnb-skipper-jvm-workflow-engine]

Skipper is an open-source lightweight JVM workflow engine from Airbnb—a library, not a cluster—that lets developers write business processes as ordinary Kotlin or Java code and guarantees they run to completion despite crashes, deploys, and flaky downstreams. Workflow state is checkpointed as snapshots to an existing database such as embedded SQLite or MySQL, with no control plane or dedicated worker fleet required.[^airbnb-skipper-jvm-workflow-engine]

## 摘要 / Summary

- Skipper 是库而非集群，服务副本自身运行调度器，通过共享存储上的租约认领工作，无需额外工作节点集群。[^airbnb-skipper-jvm-workflow-engine]
- Skipper is a library, not a cluster; every service replica runs Skipper's scheduler and claims work from the shared store by lease, with no worker fleet to deploy.[^airbnb-skipper-jvm-workflow-engine]
- 工作流即普通类：使用 Kotlin/Java 编写，通过 @WorkflowMethod 标记入口，@SignalMethod 接收外部信号，状态字段用 @StateField 标注。[^airbnb-skipper-jvm-workflow-engine]
- Workflows are ordinary classes: written in Kotlin/Java, with @WorkflowMethod as the entry point, @SignalMethod for external signals, and @StateField for state fields.[^airbnb-skipper-jvm-workflow-engine]
- 状态以快照而非事件日志形式保存，每个工作流及动作结果占一行，建议保持较小；工作流方法必须确定性，时钟、随机数和 I/O 应放在动作中。[^airbnb-skipper-jvm-workflow-engine]
- State is stored as snapshots, not event logs, with each workflow and action result in a row; workflow methods must be deterministic, with clocks, randomness, and I/O belonging in actions.[^airbnb-skipper-jvm-workflow-engine]
- 支持嵌入式 SQLite 零设置启动，也可接入 MySQL 等共享生产存储，并支持自定义存储实现；生产环境需自行应用 Flyway 迁移创建 MySQL Schema。[^airbnb-skipper-jvm-workflow-engine]
- Supports embedded SQLite for zero-setup starts, shared production stores such as MySQL, and custom storage implementations; production MySQL requires applying bundled Flyway migrations manually.[^airbnb-skipper-jvm-workflow-engine]
- 提供重试与失败分类、信号与查询、补偿（saga 模式）、版本管理、Admin UI 与可观测性、Prometheus 指标以及 skipper-testutils 测试工具等能力。[^airbnb-skipper-jvm-workflow-engine]
- Provides retries and failure classification, signals and queries, compensation (saga pattern), versioning, admin UI and observability, Prometheus metrics, and skipper-testutils for deterministic unit testing.[^airbnb-skipper-jvm-workflow-engine]
- 当前发布版本为 0.8.0，Maven Central 坐标为 com.airbnb.skipper:skipper-core，内置 Admin UI 为 JAX-RS 资源，可注册到现有 HTTP 层。[^airbnb-skipper-jvm-workflow-engine]
- Current release is 0.8.0 at Maven Central coordinate com.airbnb.skipper:skipper-core; the built-in admin UI is a JAX-RS resource registerable with an existing HTTP layer.[^airbnb-skipper-jvm-workflow-engine]

## 相关 / Related

- 原文：[链接](https://github.com/airbnb/skipper)。 / Original: [link](https://github.com/airbnb/skipper).
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [约束重构 PR 的确定性自动合入 / Deterministic automerge for constrained refactor PRs](../../topics/deterministic-refactor-automerge.md)
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)

[^airbnb-skipper-jvm-workflow-engine]: Skipper: Durable Workflow Execution for the JVM — a Library, Not a Cluster
