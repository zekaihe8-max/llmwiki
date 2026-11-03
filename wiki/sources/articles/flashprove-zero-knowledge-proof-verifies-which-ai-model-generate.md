---
type: Source
title: "FlashProve：零知识证明验证 AI 回答来源模型"
title_en: "FlashProve: Zero-knowledge proof verifies which AI model generated an answer"
description: "Anthropic 开源 FlashProve，利用零知识证明与 Lean 4 形式化验证，让用户在不获取模型权重的情况下确认 AI 回答来自指定模型。"
description_en: "Anthropic open-sources FlashProve, using zero-knowledge proofs and Lean 4 formal verification to let users confirm AI answers come from a specified model without accessing model weights."
resource: https://x.com/Gorden_Sun/status/2117527237457240113
tags: [ai-verification, zero-knowledge-proof, llm, anthropic, flashprove]
sources:
  - id: c241794ebce2ccbf
    resource: https://x.com/Gorden_Sun/status/2117527237457240113
    title: "FlashProve: Zero-knowledge proof verifies which AI model generated an answer"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:20:22+08:00
---

# FlashProve：零知识证明验证 AI 回答来源模型

*FlashProve: Zero-knowledge proof verifies which AI model generated an answer*

帖文称，Anthropic 开源了名为 FlashProve 的研究原型，通过零知识证明技术结合 Lean 4 形式化数学验证，证明 AI 回答究竟来自哪款模型，解决普通用户无法确认中转站或服务商是否偷偷替换为低成本劣质模型的问题。[^c241794ebce2ccbf]

The post claims Anthropic open-sourced a research prototype called FlashProve, combining zero-knowledge proofs with Lean 4 formal mathematical verification to prove which model generated an AI answer, addressing users' inability to confirm whether intermediaries secretly substituted lower-quality models.[^c241794ebce2ccbf]

## 摘要 / Summary

- Anthropic 开源 FlashProve 研究原型，采用零知识证明结合 Lean 4 形式化数学验证。 / Anthropic open-sourced the FlashProve research prototype, using zero-knowledge proofs combined with Lean 4 formal mathematical verification.[^c241794ebce2ccbf]
- 用户无需获取模型权重，仅用普通家用电脑 CPU 即可在几秒钟内验证回答是否来自指定正版模型。 / Users do not need model weights; an ordinary home PC CPU can verify within seconds whether an answer came from the specified genuine model.[^c241794ebce2ccbf]
- 厂商核心参数完全隐藏，商业机密不外泄，同时支持 Llama 4 级别大模型，可在单张英伟达 H100 显卡上跑完全部证明流程。 / Vendor core parameters remain fully hidden and trade secrets are not leaked; the system supports Llama 4-level models and can complete the full proof process on a single NVIDIA H100 GPU.[^c241794ebce2ccbf]
- 普通用户尤其在使用中转站时，无法确认回答是否被服务商偷偷换成劣质模型或遭遇中间人篡改。 / Ordinary users, especially when using intermediaries, cannot confirm whether answers were secretly replaced by inferior models or tampered with by man-in-the-middle attacks.[^c241794ebce2ccbf]
- 厂商在提供服务前公开特征码，生成回答时显卡附带生成计算凭据，用户在本地运行验证程序即可核对。 / Vendors publish a binding feature code before service; the GPU attaches a computation credential during answer generation, and users verify locally with a verification program.[^c241794ebce2ccbf]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2117527237457240113)。 / Original: [link](https://x.com/Gorden_Sun/status/2117527237457240113).
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [行为指纹置信度 ≠ 确认底层模型 / Behavioral fingerprint confidence ≠ confirmed backend model](../../topics/model-fingerprint-confidence-not-confirmation.md)
- Topic: [机密计算与云端 AI / Confidential computing for cloud AI](../../topics/confidential-computing-cloud-ai.md)
- Topic: [DeepSeek 自营推理相对聚合平台 / DeepSeek first-party inference vs aggregators](../../topics/deepseek-inference-vs-aggregators.md)

[^c241794ebce2ccbf]: FlashProve: Zero-knowledge proof verifies which AI model generated an answer
