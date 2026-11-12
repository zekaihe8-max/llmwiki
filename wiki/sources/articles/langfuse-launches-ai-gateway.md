---
type: Source
title: "Langfuse 推出 AI 网关"
title_en: "Langfuse launches AI Gateway"
description: "Langfuse 推出公测中的开源 AI 网关，作为企业 AI 流量的统一入口，记录每次模型调用、成本与调用者，并原生接入 Langfuse 可观测性。"
description_en: "Langfuse launches an open-source AI Gateway in public beta as a unified entry point for corporate AI traffic, logging every model call, cost, and caller natively into Langfuse observability."
resource: https://langfuse.com/blog/introducing-gateway
tags: [ai-gateway, langfuse, ai-observability, ai-governance]
sources:
  - id: langfuse-ai-gateway
    resource: https://langfuse.com/blog/introducing-gateway
    title: "Langfuse launches AI Gateway"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T20:20:40+08:00
---

# Langfuse 推出 AI 网关

*Langfuse launches AI Gateway*

「帖文称」Langfuse 于 2026 年 11 月 9 日推出 AI 网关公测版，将其定位为公司内所有 AI 使用的单一开源入口，可查看每次模型调用、调用者及费用，并原生记录进 Langfuse 追踪。[^langfuse-ai-gateway]

The post says Langfuse launched the AI Gateway in public beta on November 9, 2026, positioning it as a single open-source entry point for all AI usage in a company, showing every model call, who made it, and what it cost, natively traced in Langfuse.[^langfuse-ai-gateway]

## 摘要 / Summary

- 网关处于公测阶段，核心代码采用 MIT 许可证，支持自托管或使用 Langfuse 云服务。[^langfuse-ai-gateway]
- The gateway is in public beta, MIT-licensed, and can be self-hosted or used via Langfuse Cloud.[^langfuse-ai-gateway]
- 默认仅记录元数据、用量和成本，不记录提示词内容；开启完整日志后，每次调用都会成为 Langfuse 中可检索、可评估的完整追踪。[^langfuse-ai-gateway]
- By default only metadata, usage, and cost are logged, not prompt content; with full logging enabled, every call becomes a full searchable and evaluable Langfuse trace.[^langfuse-ai-gateway]
- 网关基于 Rust 构建，追踪开启时中位延迟低于 3 毫秒，单个 2 vCPU 节点可支持 1000 多个并发流。[^langfuse-ai-gateway]
- Built in Rust, with sub-3ms median latency with tracing on and 1,000+ concurrent streams on a single 2 vCPU node.[^langfuse-ai-gateway]
- 测试版支持 OpenAI 和 Anthropic，OpenRouter、AWS、GCP、Azure 及自定义推理 API 即将跟进。[^langfuse-ai-gateway]
- Beta supports OpenAI and Anthropic, with OpenRouter, AWS, GCP, Azure, and custom inference APIs coming soon.[^langfuse-ai-gateway]
- 自托管网关免费；Langfuse 云端仅在选择记录请求时收费，未记录的请求免费。[^langfuse-ai-gateway]
- Self-hosting the gateway is free; Langfuse Cloud charges only when requests are logged, with non-logged requests free.[^langfuse-ai-gateway]
- 路线图包括按团队/用户/密钥的支出限制、供应商间故障切换、护栏与 PII 隐去、SCIM 用户配置以及更多供应商和模型路由。[^langfuse-ai-gateway]
- Roadmap includes spend limits by team/user/API key, provider fallbacks, guardrails and PII redaction, SCIM provisioning, and more providers plus model routing.[^langfuse-ai-gateway]

## 相关 / Related

- 原文：[链接](https://langfuse.com/blog/introducing-gateway)。 / Original: [link](https://langfuse.com/blog/introducing-gateway).
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [本体驱动的可观测性 / Ontology-driven observability](../../topics/ontology-driven-observability.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [托管优于自建代理节点 / Prefer managed over self-hosted proxy nodes](../../topics/managed-over-selfhosted-proxy-nodes.md)

[^langfuse-ai-gateway]: Langfuse launches AI Gateway
