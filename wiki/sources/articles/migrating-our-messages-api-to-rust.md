---
type: Source
title: "将 Messages API 从 Python 迁移到 Rust"
title_en: "Migrating our Messages API to Rust"
description: "Anthropic 通过在生产流量上做影子对比与指纹分组，将 Messages API 从 Python 迁移到 Rust，在不停机的情况下将每请求 CPU 降低约 70%、首 token 中位延迟降低约 20%。"
description_en: "Anthropic migrated its Messages API from Python to Rust using production shadowing and fingerprint grouping, cutting CPU per request by about 70% and median time to first token by about 20% without taking the service offline."
resource: https://www.anthropic.com/research/migrating-api-to-rust
tags: [rust, migration, api, performance, claude-developer-platform]
sources:
  - id: migrating-api-to-rust
    resource: https://www.anthropic.com/research/migrating-api-to-rust
    title: "Migrating our Messages API to Rust"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T09:23:33+08:00
---

# 将 Messages API 从 Python 迁移到 Rust

*Migrating our Messages API to Rust*

「帖文称」Anthropic 从 2024 年初到 2026 年秋，Messages API 流量增长了约 1800 倍，促使团队将主要面向客户与内部应用的 API 从 Python 重写为 Rust。帖文还称，Claude 在一周内写出了核心请求路径的首个版本，且到 2026 年 5 月，Claude 撰写了 Anthropic 合并代码中超过 80%。[^migrating-api-to-rust]

The post says Anthropic's Messages API traffic grew roughly 1,800 times from early 2024 to fall 2026, motivating a rewrite of the customer- and internal-facing API from Python to Rust. It also says Claude wrote the first version of the API's core request path in about a week, and by May 2026 Claude wrote more than 80% of the code Anthropic merged.[^migrating-api-to-rust]

## 摘要 / Summary

- Messages API 于 2023 年用 Python 构建，最初只是“基本上一个请求转发器”，后来承担验证、提示构建、分词与安全分类等工作。[^migrating-api-to-rust]
- The Messages API was built in 2023 in Python, starting as “basically a request forwarder,” and later took on validation, prompt construction, tokenization, and safety classification.[^migrating-api-to-rust]
- 从 2024 年初到 2026 年秋，API 流量增长约 1800 倍，Python 服务的开销已无法支撑增长。[^migrating-api-to-rust]
- From early 2024 to fall 2026, API traffic grew roughly 1,800 times, and the Python service's overhead could no longer support the growth.[^migrating-api-to-rust]
- 迁移后 Rust API 每请求 CPU 使用量下降约 70%，首 token 中位时间缩短约 20%，且未让服务离线或冻结功能开发。[^migrating-api-to-rust]
- After migration, the Rust API uses about 70% less CPU per request and cuts median time to first token by about 20%, without taking the service offline or freezing feature development.[^migrating-api-to-rust]
- 团队通过检查点比对与指纹分组在生产流量上做影子验证，未读取客户请求内容，只记录差异的位置与大小以保护隐私。[^migrating-api-to-rust]
- The team verified parity on production traffic using checkpoint comparison and fingerprint grouping, recording only where and how large differences were without reading customer requests to protect privacy.[^migrating-api-to-rust]
- Rust API 通过约 98% 的测试，但在生产流量比对中只有约四分之一的输入匹配，凸显测试集无法覆盖生产行为。[^migrating-api-to-rust]
- The Rust API passed about 98% of its tests, yet only about a quarter of inputs matched on production traffic, showing test suites cannot cover production behavior.[^migrating-api-to-rust]

## 相关 / Related

- 原文：[链接](https://www.anthropic.com/research/migrating-api-to-rust)。 / Original: [link](https://www.anthropic.com/research/migrating-api-to-rust).
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [面向 Agent 的编程语言 / Languages for agents](../../topics/languages-for-agents.md)

[^migrating-api-to-rust]: Migrating our Messages API to Rust
