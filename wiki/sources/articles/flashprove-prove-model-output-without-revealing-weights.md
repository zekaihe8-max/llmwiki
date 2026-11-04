---
type: Source
title: "FlashProve：无需泄露权重即证明模型输出"
title_en: "FlashProve: Prove model output without revealing weights"
description: "Anthropics 的 FlashProve 让 AI 提供商能在不泄露模型权重的情况下，证明回复来自承诺的模型。"
description_en: "Anthropics' FlashProve lets AI providers prove a reply came from the committed model without revealing model weights."
resource: https://github.com/anthropics/FlashProve
tags: [flashprove, ai-provenance, formal-verification, confidential-ai, agent-runnable]
sources:
  - id: flashprove-anthropics-model-proof
    resource: https://github.com/anthropics/FlashProve
    title: "FlashProve: Prove model output without revealing weights"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T08:04:28+08:00
---

# FlashProve：无需泄露权重即证明模型输出

*FlashProve: Prove model output without revealing weights*

「帖文称」Anthropics 发布的 FlashProve 是一个研究性代码 artifact，版本 0.16.0，采用 Apache 2.0 许可，并明确标注为未维护、不接受贡献。它允许 AI 提供商发布承诺 ID 并将其绑定到一组权重，而权重本身保密；GPU 为每条回复生成证明，任何人都可在普通 CPU 上用 cp_verify 秒级验证。该系统运行 Llama 4 Maverick 全尺寸模型，声明在单卡 H100 上约 110 tokens/秒 prefill，协议可靠性在 Lean 4 中形式化证明，伪造被捕获概率约为 q/2^124 + 2^-101。项目设计为由编程 Agent 在仓库根目录下以普通用户身份构建和运行。[^flashprove-anthropics-model-proof]

Anthropics' FlashProve is a research artifact at version 0.16.0 under Apache 2.0, explicitly unmaintained and not accepting contributions. It lets AI providers publish a commitment ID bound to a set of weights while keeping the weights secret; the GPU produces a proof per reply, and anyone can verify it in seconds on an ordinary CPU with cp_verify. The system runs Llama 4 Maverick at full size, claiming about 110 tokens/second prefill on a single H100, with protocol soundness formally proved in Lean 4 and forgery caught except with probability about q/2^124 + 2^-101. The project is designed to be built and run by a coding agent from the repository root as an ordinary user.[^flashprove-anthropics-model-proof]

## 摘要 / Summary

- FlashProve 版本 0.16.0，Apache 2.0 许可，声明为研究性 artifact，不维护且不接受贡献。 / FlashProve version 0.16.0, Apache 2.0 licensed, described as a research artifact, unmaintained and not accepting contributions.[^flashprove-anthropics-model-proof]
- 提供商发布承诺 ID 绑定权重集，权重保密，仅公开声明的不隐藏列表；GPU 生成证明，cp_verify 在普通 CPU 上秒级验证。 / Provider publishes a commitment ID bound to weights while keeping weights secret, with only a declared not-hidden list published; GPU generates proofs and cp_verify verifies them in seconds on an ordinary CPU.[^flashprove-anthropics-model-proof]
- 运行 Llama 4 Maverick 全尺寸模型，上下文窗口 1,024 标记，单卡 NVIDIA H100，prefill 约 110 tokens/秒，批次 24 请求。 / Runs Llama 4 Maverick full size with 1,024-token context on a single NVIDIA H100, about 110 tokens/second prefill at 24 requests per batch.[^flashprove-anthropics-model-proof]
- 协议可靠性在 Lean 4 中形式化证明，伪造模型输出被捕获，失败概率约为 q/2^124 + 2^-101（q 为哈希查询数）。 / Protocol soundness is formally proved in Lean 4; passing off non-committed output is caught except with probability about q/2^124 + 2^-101 after q hash queries.[^flashprove-anthropics-model-proof]
- 项目面向编程 Agent 构建，要求从仓库根目录以普通用户运行，禁止用 sudo、chmod、chown、rm 绕过错误，需先构建 cp_verify 并检查存证示例。 / Designed for coding agents; run from repository root as ordinary user, never bypass errors with sudo/chmod/chown/rm; build cp_verify and check the stored example proof first.[^flashprove-anthropics-model-proof]

## 相关 / Related

- 原文：[链接](https://github.com/anthropics/FlashProve)。 / Original: [link](https://github.com/anthropics/FlashProve).
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [机密计算与云端 AI / Confidential computing for cloud AI](../../topics/confidential-computing-cloud-ai.md)

[^flashprove-anthropics-model-proof]: FlashProve: Prove model output without revealing weights
