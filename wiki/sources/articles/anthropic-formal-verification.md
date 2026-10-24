---
type: Source
title: 用 Claude 做形式化验证
title_en: Formal verification with Claude
description: Anthropic Frontier Red Team 发文称，Claude 与 Theorem Labs 合作，在数周内对一百多个真实世界开源库形式化验证了安全属性。
description_en: Anthropic's Frontier Red Team post that Claude, with Theorem Labs, formally verified security properties across more than one hundred real-world open-source libraries in a few weeks.
resource: https://x.com/AnthropicAI/status/2113390212911083894
tags: [formal-verification, claude, security]
sources:
  - id: anthropic-formal-verification
    resource: https://x.com/AnthropicAI/status/2113390212911083894
    title: Formal verification with Claude
    author: org:anthropic
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
date: 2026-10-22
---

# 用 Claude 做形式化验证

*Formal verification with Claude*

Anthropic 的 Frontier Red Team 宣布与 Theorem Labs 合作，研究用 Claude 大规模形式化验证软件。[^anthropic-formal-verification] 帖子见 <https://x.com/AnthropicAI/status/2113390212911083894>，并指向完整文章 <https://www.anthropic.com/research/formal-verification>。

Anthropic's Frontier Red Team announces research on using Claude to formally verify software at large scale, in collaboration with Theorem Labs.[^anthropic-formal-verification] The post is at <https://x.com/AnthropicAI/status/2113390212911083894> and points to the full write-up at <https://www.anthropic.com/research/formal-verification>.

## 摘要 / Summary

形式化验证可以证明代码不存在某些类别的缺陷，但历史上只适用于小型代码库，或需要大量专家时间。[^anthropic-formal-verification]

Formal verification can prove that code is free of certain bugs, but historically it has only been feasible for small codebases or has required a lot of expert time.[^anthropic-formal-verification]

随着 AI 模型出现，这一约束开始松动。Anthropic 与 Theorem Labs 用 Claude 在数周内证明了一百多个真实世界开源库中的安全属性。[^anthropic-formal-verification]

With AI models that constraint is beginning to loosen. Anthropic and Theorem Labs used Claude to prove security properties in over one hundred real-world open-source libraries over a span of a few weeks.[^anthropic-formal-verification]

## 相关 / Related

- Topic: [LLM formal verification](../../topics/llm-formal-verification.md)

[^anthropic-formal-verification]: Formal verification with Claude
