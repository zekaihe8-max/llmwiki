---
type: Source
title: "Lean 4 中狄利克雷 L-函数广义黎曼假设的形式化证明"
title_en: "GRH for Dirichlet L-functions, in Lean 4"
description: "基于 Mathlib 的 Lean 4 形式化，证明黎曼假设与狄利克雷 L-函数广义黎曼假设。"
description_en: "A Lean 4 formalization built on Mathlib proving the Riemann Hypothesis and the Generalized Riemann Hypothesis for Dirichlet L-functions."
resource: https://github.com/lsernau/grh-lean
tags: [lean-4, mathlib, formal-verification, grh, anthropic]
sources:
  - id: grh-lean-4-dirichlet-l-functions
    resource: https://github.com/lsernau/grh-lean
    title: "GRH for Dirichlet L-functions, in Lean 4"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T08:31:35+08:00
---

# Lean 4 中狄利克雷 L-函数广义黎曼假设的形式化证明

*GRH for Dirichlet L-functions, in Lean 4*

「帖文称」该 Lean 4 仓库对黎曼假设及狄利克雷 L-函数广义黎曼假设进行了形式化证明，基于 Mathlib 且仅使用 propext、Classical.choice 和 Quot.sound 三个公理；证明仅经机器检查，尚未有数学家通读，亦无配套论文。[^grh-lean-4-dirichlet-l-functions]

The post calls the repository a Lean 4 formalization of the Riemann Hypothesis and the Generalized Riemann Hypothesis for Dirichlet L-functions, built on Mathlib using only the axioms propext, Classical.choice, and Quot.sound; the proof has passed machine checks only, with no mathematician having read it through and no accompanying paper.[^grh-lean-4-dirichlet-l-functions]

## 摘要 / Summary

- 仓库包含两个版本：可读版 grh/ 约 30 万行，紧凑版 grh-compact/ 约 7.6 万行，每个都是独立的 Lake 项目。[^grh-lean-4-dirichlet-l-functions]
- The repository has two editions: a readable grh/ edition of about 300,000 lines and a compact grh-compact/ edition of about 76,000 lines, each a separate Lake project.[^grh-lean-4-dirichlet-l-functions]
- 构建需要 Lean v4.35.0 与 Mathlib 提交 56a00585，在 12 核心 24 GB 内存机器上大约需一到两小时。[^grh-lean-4-dirichlet-l-functions]
- Building requires Lean v4.35.0 and Mathlib at commit 56a00585, taking about one to two hours on a 12-core machine with 24 GB of memory.[^grh-lean-4-dirichlet-l-functions]
- 证明仅使用 propext、Classical.choice 和 Quot.sound 三个公理，并基于 Levent Alpöge 的工作，与 Anthropic 同事及 Claude 协作完成。[^grh-lean-4-dirichlet-l-functions]
- The proof uses only the axioms propext, Classical.choice, and Quot.sound, is based on Levent Alpöge's work, and was produced with colleagues at Anthropic and Claude.[^grh-lean-4-dirichlet-l-functions]
- 仓库声明不再维护且不接受贡献，许可证为 Apache 2.0，版权归 2026 年 Anthropic, PBC 所有。[^grh-lean-4-dirichlet-l-functions]
- The repository states it is not maintained and not accepting contributions, is licensed under Apache 2.0, and is copyrighted by Anthropic, PBC in 2026.[^grh-lean-4-dirichlet-l-functions]
- 状态说明指出证明仅通过机器检查，没有数学家通读，也没有随附论文。[^grh-lean-4-dirichlet-l-functions]
- The status section says the proof has passed machine checks only, with no mathematician reading it through and no paper accompanying it.[^grh-lean-4-dirichlet-l-functions]

## 相关 / Related

- 原文：[链接](https://github.com/lsernau/grh-lean)。 / Original: [link](https://github.com/lsernau/grh-lean).
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [先复用再编写 / Reuse before write](../../topics/reuse-before-write.md)
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)

[^grh-lean-4-dirichlet-l-functions]: GRH for Dirichlet L-functions, in Lean 4
