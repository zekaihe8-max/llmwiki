---
type: Source
title: "铁柱按 Qwen3.8-Flash-Next 路线推测 Qwen4 架构方向"
title_en: "Tie Zhu speculates on Qwen4 architecture from the Qwen3.8-Flash-Next roadmap"
description: "铁柱AGI 发帖称 Qwen4 官方详细参数尚未公布，他根据此前 Qwen3.8-Flash-Next 技术路线，对注意力、残差、Embedding 和训练体系做了个人推测。"
description_en: "Tie Zhu (铁柱AGI) says detailed official Qwen4 specs are not out yet and offers personal guesses on attention, residuals, embeddings, and training, based on the earlier Qwen3.8-Flash-Next roadmap."
resource: https://x.com/cgnot996/status/2120348651608559988
tags: [x-digest, cn-x, qwen, architecture]
sources:
  - id: qwen4-arch-speculation
    resource: https://x.com/cgnot996/status/2120348651608559988
    title: "Tie Zhu speculates on Qwen4 architecture from the Qwen3.8-Flash-Next roadmap"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T21:06:00+08:00
---

# 铁柱按 Qwen3.8-Flash-Next 路线推测 Qwen4 架构方向

*Tie Zhu speculates on Qwen4 architecture from the Qwen3.8-Flash-Next roadmap*

铁柱AGI（@cgnot996）在 2026 年 11 月 11 日发帖说「Qwen4 来了」，并写明官方详细参数还没公布。他表示，只能根据此前发布的 Qwen3.8-Flash-Next 技术路线提前看几个方向，并强调这些是基于早期技术预览的推测，最终还要等 Qwen4 Max 正式揭晓。以下架构要点均应视为作者个人判断，而不是官方已公布规格。[^qwen4-arch-speculation]

On 11 Nov 2026, Tie Zhu (铁柱AGI, @cgnot996) posted that “Qwen4 is here,” while stating that detailed official parameters had not been published. He said several directions can be glimpsed from the earlier Qwen3.8-Flash-Next technical roadmap, and stressed that this is speculation from an early technical preview, pending an official Qwen4 Max reveal. The architecture points below should be read as the author’s view, not as confirmed official specs.[^qwen4-arch-speculation]

## 摘要 / Summary

- 作者明确写了官方详细参数尚未公布，并称下面只是基于早期技术预览的推测。[^qwen4-arch-speculation]
- The author explicitly says detailed official parameters are not yet published and calls what follows speculation from an early technical preview.[^qwen4-arch-speculation]
- 他推测注意力机制会引入 QSA 稀疏注意力，用来降低长上下文成本。[^qwen4-arch-speculation]
- He guesses that the attention mechanism will introduce QSA sparse attention to lower long-context cost.[^qwen4-arch-speculation]
- 他推测残差结构会升级为四分支门控残差，Embedding 会引入 N-gram 以增加模型容量。[^qwen4-arch-speculation]
- He guesses the residual design will become a four-branch gated residual, and that embeddings will add N-grams to increase model capacity.[^qwen4-arch-speculation]
- 他还推测训练体系会引入 Muon 优化器，以提升训练效率。[^qwen4-arch-speculation]
- He also guesses the training stack will introduce the Muon optimizer to improve training efficiency.[^qwen4-arch-speculation]
- 帖文末尾还提到，除了鹈鹕测试，他用 Qwen4 Max 预览版做了一个可点击的三合一演示。[^qwen4-arch-speculation]
- At the end he also mentions that, besides a pelican test, he made a clickable three-in-one demo with the Qwen4 Max preview.[^qwen4-arch-speculation]

## 相关 / Related

- 原文：[链接](https://x.com/cgnot996/status/2120348651608559988)。 / Original: [link](https://x.com/cgnot996/status/2120348651608559988).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)

[^qwen4-arch-speculation]: Tie Zhu speculates on Qwen4 architecture from the Qwen3.8-Flash-Next roadmap
