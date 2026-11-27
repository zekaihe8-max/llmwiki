---
type: Source
title: "Lean 4 形式化验证黎曼假设与广义黎曼假设简短证明"
title_en: "Verification files for the shorter Lean proof of RH and GRH for Dirichlet L-functions"
description: "MIT 使用 Lean 4 形式化验证黎曼假设及狄利克莱 L-函数广义黎曼假设的简短证明文件。"
description_en: "MIT uses Lean 4 to formally verify a shorter proof of the Riemann Hypothesis and GRH for Dirichlet L-functions."
resource: https://math.mit.edu/~drew/shortgrh
tags: [lean, formal-verification, mathematics, riemann-hypothesis]
sources:
  - id: lean-rh-grh-verification
    resource: https://math.mit.edu/~drew/shortgrh
    title: "Verification files for the shorter Lean proof of RH and GRH for Dirichlet L-functions"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T08:31:00+08:00
---

# Lean 4 形式化验证黎曼假设与广义黎曼假设简短证明

*Verification files for the shorter Lean proof of RH and GRH for Dirichlet L-functions*

本帖文称，MIT 的 Andrew Sutherland 与 Claude Code 合作，在 github.com/lsernau/grh-lean 的 commit 72fead10 中提供了两个 Lean 4 项目（“可读版”与“紧凑版”），分别包含约 30 万行和 7.6 万行代码，用于形式化证明黎曼假设及四个关于黎曼 ζ 函数和狄利克莱 L-函数零点的陈述。所有模块均通过 Lean 内核重放，五个定理仅依赖 propext、Classical.choice 和 Quot.sound 三个公理，并通过 nanoda、con-leche、con-ron 等多个独立检查器验证。此外，Schoenfeld 关于切比雪夫函数的显式界也被形式化为等价于黎曼假设的 Lean 定理。[^lean-rh-grh-verification]

This post states that MIT's Andrew Sutherland, working with Claude Code, provided two Lean 4 projects ("readable" and "compact") at github.com/lsernau/grh-lean commit 72fead10, containing about 300,000 and 76,000 lines of code respectively, to formally prove the Riemann Hypothesis and four statements about zeros of the Riemann zeta function and Dirichlet L-functions. All modules were replayed through the Lean kernel; the five theorems depend only on propext, Classical.choice, and Quot.sound, and were accepted by independent checkers including nanoda, con-leche, and con-ron. Schoenfeld's explicit bound for the Chebyshev function was also formalized as equivalent to the Riemann Hypothesis.[^lean-rh-grh-verification]

## 摘要 / Summary

- 仓库包含两个 Lean 4 项目：可读版 803 个文件约 30 万行，紧凑版 794 个文件约 7.6 万行，均使用 Lean v4.35.0 和 Mathlib commit 56a00585。[^lean-rh-grh-verification]
- The repository contains two Lean 4 projects: a readable edition with 803 files and about 300,000 lines, and a compact edition with 794 files and about 76,000 lines, both using Lean v4.35.0 and Mathlib at commit 56a00585.[^lean-rh-grh-verification]
- 两个版本的五个定理均仅依赖 propext、Classical.choice 和 Quot.sound 公理，并在两台机器上导出字节相同，被 nanoda、con-leche 和 con-ron 接受。[^lean-rh-grh-verification]
- Both editions' five theorems depend only on propext, Classical.choice, and Quot.sound; exports from two machines are byte-identical and accepted by nanoda, con-leche, and con-ron.[^lean-rh-grh-verification]
- lake comparator --paranoid 在沙箱中运行，对紧凑版通过所有检查器；可读版因 lean4lean 需要 332 GB 内存，在 128 GB 机器上未完成，但其他阶段均通过。[^lean-rh-grh-verification]
- lake comparator --paranoid ran sandboxed; the compact edition passed all checkers, while the readable edition could not finish on a 128 GB machine because lean4lean needs 332 GB, though all other stages passed.[^lean-rh-grh-verification]
- Schoenfeld 显式界 |ψ(x) − x| < √x log²x / (8π)（x ≥ 73.2）与黎曼假设等价，已在 schoenfeld-rh-lean 中形式化并通过 lake comparator --paranoid 验证。[^lean-rh-grh-verification]
- Schoenfeld's explicit bound |ψ(x) − x| < √x log²x / (8π) for x ≥ 73.2 is equivalent to the Riemann Hypothesis and has been formalized in schoenfeld-rh-lean and verified with lake comparator --paranoid.[^lean-rh-grh-verification]

## 相关 / Related

- 原文：[链接](https://math.mit.edu/~drew/shortgrh)。 / Original: [link](https://math.mit.edu/~drew/shortgrh).
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^lean-rh-grh-verification]: Verification files for the shorter Lean proof of RH and GRH for Dirichlet L-functions
