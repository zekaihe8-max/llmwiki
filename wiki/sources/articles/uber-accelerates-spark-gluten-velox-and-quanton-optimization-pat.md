---
type: Source
title: "Uber 加速 Spark：Gluten/Velox 与 Quanton 两条优化路线"
title_en: "Uber Accelerates Spark: Gluten/Velox and Quanton Optimization Paths"
description: "Uber Engineering 介绍 Gluten/Velox 和 Quanton 两条 Spark 加速路线，Quanton 实验室写入加速达 4.7—5.5 倍，但生产收益尚需验证。"
description_en: "Uber Engineering describes two Spark acceleration paths, Gluten/Velox and Quanton; Quanton lab write acceleration reaches 4.7–5.5x, but production gains remain to be validated."
resource: https://x.com/shao__meng/status/2118625562864275781
tags: [uber, spark, data-engineering, lakehouse]
sources:
  - id: 6d96a0fd1ab952b6
    resource: https://x.com/shao__meng/status/2118625562864275781
    title: "Uber Accelerates Spark: Gluten/Velox and Quanton Optimization Paths"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T20:16:25+08:00
---

# Uber 加速 Spark：Gluten/Velox 与 Quanton 两条优化路线

*Uber Accelerates Spark: Gluten/Velox and Quanton Optimization Paths*

帖文称，Uber Engineering 分享了两条 Spark 加速路线：Gluten/Velox 已用于部分生产任务，Quanton 进一步优化湖仓数据写入。后者在实验室测试中取得约 4.7—5.5 倍的稳态写入加速，但尚不能等同于生产收益。[^6d96a0fd1ab952b6]

The post says Uber Engineering shared two Spark acceleration paths: Gluten/Velox is already used in some production tasks, while Quanton further optimizes lakehouse data writes. The latter achieved about 4.7–5.5x steady-state write acceleration in lab tests, but this cannot be equated with production gains.[^6d96a0fd1ab952b6]

## 摘要 / Summary

- Uber 数据湖摄入 alone consumes more than 200,000 CPU cores; ETL on top consumes more. / Uber data lake ingestion alone consumes more than 200,000 CPU cores; ETL on top consumes more.[^6d96a0fd1ab952b6]
- Gluten/Velox 将 Spark SQL 算子交给原生向量化引擎，已迁移的生产负载运行速度约为原来的 3.5 倍，CPU 成本降至约 1/3.4。 / Gluten/Velox hands Spark SQL operators to a native vectorized engine; migrated production loads run about 3.5x faster and CPU costs drop to about 1/3.4.[^6d96a0fd1ab952b6]
- Quanton 是 Onehouse 的商业 Spark 引擎，Uber 本次只评测了 Hudi 写入路径，未测通用 SQL 或读取性能。 / Quanton is Onehouse's commercial Spark engine; Uber only evaluated the Hudi write path in this test, not general SQL or read performance.[^6d96a0fd1ab952b6]
- 相同计算资源配额下，Quanton 在插入为主的事实表上稳态写入轮次中位速度约为开源基线的 5.5 倍，更新为主的维表约为 4.7 倍。 / Under the same compute resource quota, Quanton's median steady-state write speed on insert-heavy fact tables is about 5.5x the open-source baseline, and about 4.7x on update-heavy dimension tables.[^6d96a0fd1ab952b6]
- 以上结果来自合成数据和受控集群，排除了周期性元数据整理轮次；包含整理的轮次加速约为 2.8 倍，生产环境正确性与故障恢复仍需进一步验证。 / The above results come from synthetic data and a controlled cluster, excluding periodic metadata compaction rounds; including compaction rounds, acceleration is about 2.8x, and production correctness and fault recovery still need further validation.[^6d96a0fd1ab952b6]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2118625562864275781)。 / Original: [link](https://x.com/shao__meng/status/2118625562864275781).
- Topic: [深后端与 JIT 前端 / Deep backends and JIT frontends](../../topics/deep-backends-and-jit-frontends.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^6d96a0fd1ab952b6]: Uber Accelerates Spark: Gluten/Velox and Quanton Optimization Paths
