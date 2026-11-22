---
type: Source
title: "联合声明：Lean 与 Mathlib 社区认证黎曼猜想 Lean 形式化证明"
title_en: "Joint Statement: Lean and Mathlib Communities Certify Lean Formal Proof of the Riemann Hypothesis"
description: "Lean 与 Mathlib 社区联合发布声明，认证 Levent Alpöge 的黎曼猜想 Lean 形式化证明正确。"
description_en: "The Lean and Mathlib communities issued a joint statement certifying that Levent Alpöge's Lean formal proof of the Riemann Hypothesis is correct."
resource: https://leanprover-community.github.io/blog/posts/riemann-hypothesis
tags: [lean, mathlib, formal-verification, riemann-hypothesis, joint-statement]
sources:
  - id: lean-mathlib-riemann-hypothesis-joint-statement
    resource: https://leanprover-community.github.io/blog/posts/riemann-hypothesis
    title: "Joint Statement: Lean and Mathlib Communities Certify Lean Formal Proof of the Riemann Hypothesis"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T19:54:37+08:00
---

# 联合声明：Lean 与 Mathlib 社区认证黎曼猜想 Lean 形式化证明

*Joint Statement: Lean and Mathlib Communities Certify Lean Formal Proof of the Riemann Hypothesis*

「帖文称」2026 年 11 月 20 日，Levent Alpöge 发布了包含 1700 万行代码的黎曼猜想 Lean 证明库；Lean 与 Mathlib 社区随即联合发声，获 Lean FRO 与 Mathlib Initiative 背书，认证该陈述与证明均正确。[^lean-mathlib-riemann-hypothesis-joint-statement]

According to the post, on November 20, 2026, Levent Alpöge released a Lean library of 17 million lines of code proving the Riemann Hypothesis; the Lean and Mathlib communities then issued a joint statement, endorsed by the Lean FRO and the Mathlib Initiative, certifying that both the statement and the proof are correct.[^lean-mathlib-riemann-hypothesis-joint-statement]

## 摘要 / Summary

- 「帖文称」2026 年 11 月 20 日，Levent Alpöge 发布了包含 1700 万行代码的黎曼猜想 Lean 证明库。[^lean-mathlib-riemann-hypothesis-joint-statement]
- According to the post, on November 20, 2026, Levent Alpöge released a Lean library of 17 million lines of code proving the Riemann Hypothesis.[^lean-mathlib-riemann-hypothesis-joint-statement]
- Lean 与 Mathlib 社区联合声明，并获 Lean FRO 与 Mathlib Initiative 背书，认证该证明的陈述与证明均正确。[^lean-mathlib-riemann-hypothesis-joint-statement]
- The Lean and Mathlib communities issued a joint statement, endorsed by the Lean FRO and the Mathlib Initiative, certifying that both the statement and the proof are correct.[^lean-mathlib-riemann-hypothesis-joint-statement]
- 该代码库仅直接依赖 Mathlib，社区已通过 Lean 官方内核、con-leche、con-ron 等多个独立检查器验证导出的原始证明。[^lean-mathlib-riemann-hypothesis-joint-statement]
- The codebase depends directly only on Mathlib, and the exported raw proof has been verified by multiple independent checkers including Lean's official kernel, con-leche, and con-ron.[^lean-mathlib-riemann-hypothesis-joint-statement]
- 社区添加了隔离文件，并使用 comparator 与 con-leche –compare 确认 Alpöge 证明的定理正是 Mathlib 中的 RiemannHypothesis 陈述。[^lean-mathlib-riemann-hypothesis-joint-statement]
- The community added an isolating file and used comparator and con-leche –compare to confirm that the theorem proved in Alpöge's library is exactly Mathlib's RiemannHypothesis statement.[^lean-mathlib-riemann-hypothesis-joint-statement]
- 声明列出四项验证标准，均已满足，包括陈述正确、代码编译、证明正确陈述、Lean 证明有效。[^lean-mathlib-riemann-hypothesis-joint-statement]
- The statement lists four verification criteria, all satisfied: correct statement, correct compilation, proof of the correct statement, and valid Lean proof.[^lean-mathlib-riemann-hypothesis-joint-statement]

## 相关 / Related

- 原文：[链接](https://leanprover-community.github.io/blog/posts/riemann-hypothesis)。 / Original: [link](https://leanprover-community.github.io/blog/posts/riemann-hypothesis).
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)
- Topic: [先复用再编写 / Reuse before write](../../topics/reuse-before-write.md)

[^lean-mathlib-riemann-hypothesis-joint-statement]: Joint Statement: Lean and Mathlib Communities Certify Lean Formal Proof of the Riemann Hypothesis
