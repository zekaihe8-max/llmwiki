---
type: Source
title: "LLM 推理手册：免费在线阅读，交互工具算显存和成本，按负载选择批处理、缓存与部署方式"
title_en: "LLM Inference Handbook: Free Online Reading, Interactive Tools for VRAM and Cost, Choosing Batching, Caching, and Deployment by Load"
description: "介绍 Sherlock Xu 撰写的开源 LLM 推理手册，涵盖推理与服务区别、指标、部署规划、优化策略及生产运维。"
description_en: "Introduces Sherlock Xu's open-source LLM Inference Handbook, covering inference vs. serving, metrics, deployment planning, optimization strategies, and production operations."
resource: https://x.com/shao__meng/status/2123345506197995642
tags: [llm-inference, handbook, deployment, optimization, serving]
sources:
  - id: llm-inference-handbook
    resource: https://x.com/shao__meng/status/2123345506197995642
    title: "LLM Inference Handbook: Free Online Reading, Interactive Tools for VRAM and Cost, Choosing Batching, Caching, and Deployment by Load"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T20:16:46+08:00
---

# LLM 推理手册：免费在线阅读，交互工具算显存和成本，按负载选择批处理、缓存与部署方式

*LLM Inference Handbook: Free Online Reading, Interactive Tools for VRAM and Cost, Choosing Batching, Caching, and Deployment by Load*

「帖文称」meng shao (@shao__meng) 在 X 上介绍 Sherlock Xu 撰写的开源手册「LLM Inference Handbook」，由 Modular 托管在 handbook.modular.com，也可在 ChapterPal 阅读。手册面向生产环境部署、推理、扩容和运维 LLM 的工程师，分为基础概念、部署规划、模型准备、模型交互、推理优化、内核优化、基础设施与运维七个部分，并配备二十多个交互工具，用于请求生命周期走查、显存和成本估算、批处理策略比较以及 GPU 执行与显存层次观察。[^llm-inference-handbook]

A post by meng shao (@shao__meng) on X introduces Sherlock Xu's open-source "LLM Inference Handbook," hosted by Modular at handbook.modular.com and also readable on ChapterPal. Aimed at engineers deploying, inferring, scaling, and operating LLMs in production, the handbook spans seven parts—basic concepts, deployment planning, model preparation, model interaction, inference optimization, kernel optimization, and infrastructure & operations—and includes over 20 interactive tools for request lifecycle tracing, VRAM and cost estimation, batching strategy comparison, and GPU execution and memory hierarchy observation.[^llm-inference-handbook]

## 摘要 / Summary

- 手册区分推理与服务：推理是模型前向计算（prefill 和 decode 循环），服务则是将其变成可靠的生产接口，包括 HTTP/gRPC、排队调度、跨请求批处理、负载均衡、扩缩容、模型加载与版本管理、健康检查和观测。[^llm-inference-handbook]
- The handbook distinguishes inference from serving: inference is the model's forward computation (prefill and decode loop), while serving turns it into a reliable production interface, including HTTP/gRPC, queuing and scheduling, cross-request batching, load balancing, scaling, model loading and version management, health checks, and observability.[^llm-inference-handbook]
- 指标包括 TTFT、E2EL、TPOT/ITL，以及 goodput；goodput 仅计入达到延迟目标的请求，例如 95% 请求 TTFT 低于 200 毫秒。[^llm-inference-handbook]
- Metrics include TTFT, E2EL, TPOT/ITL, and goodput; goodput counts only requests meeting latency targets, e.g., 95% of requests with TTFT under 200 ms.[^llm-inference-handbook]
- 显存粗算公式为 Memory (GB) = P × (Q / 8) × (1 + Overhead)，其中 P 为十亿参数量，Q 为位宽；70 亿参数 FP16 模型权重约需 14 GB，长上下文和并发还需额外余量。[^llm-inference-handbook]
- The VRAM rough estimate is Memory (GB) = P × (Q / 8) × (1 + Overhead), where P is billions of parameters and Q is bit width; a 7-billion-parameter FP16 model's weights need about 14 GB, with long context and concurrency requiring additional headroom.[^llm-inference-handbook]
- 连续批处理按每次解码迭代调整批次，谁先结束谁就让位给新请求；chunked prefill 可把长提示切成小段与正在解码的 token 同批运行，但可能拉长首字延迟。[^llm-inference-handbook]
- Continuous batching adjusts the batch each decoding iteration, letting finished requests yield to new ones; chunked prefill can split long prompts into chunks to run alongside decoding tokens, but may lengthen TTFT.[^llm-inference-handbook]
- PagedAttention 按块分配 KV 缓存并用查找表管理，块可在输出之间共享，将显存浪费降至接近零；vLLM 率先实现，MAX 等框架随后跟进。[^llm-inference-handbook]
- PagedAttention allocates KV cache in blocks managed by a lookup table, allowing blocks to be shared across outputs and reducing memory waste to near zero; vLLM implemented it first, followed by frameworks such as MAX.[^llm-inference-handbook]
- 手册按 2026 年 10 月 AWS p5.48xlarge（8 张 H100）容量预留标价举例：美国东部约每小时 47.76 美元，全天运行一台约每月 3.49 万美元；稳定每秒 1 万 token 时每百万 token 约 1.33 美元，利用率三成则升至约 4.42 美元。[^llm-inference-handbook]
- The handbook cites October 2026 AWS p5.48xlarge (8× H100) reserved pricing: about $47.76 per hour in US East, roughly $34,900 per month running continuously; at a steady 10,000 tokens/sec, cost is about $1.33 per million tokens, rising to about $4.42 at 30% utilization.[^llm-inference-handbook]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2123345506197995642)。 / Original: [link](https://x.com/shao__meng/status/2123345506197995642).
- Topic: [大厂推理成本效率被低估 / Big-lab inference cost efficiency is underestimated](../../topics/lab-inference-serving-cost-efficiency.md)
- Topic: [DeepSeek 自营推理相对聚合平台 / DeepSeek first-party inference vs aggregators](../../topics/deepseek-inference-vs-aggregators.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)

[^llm-inference-handbook]: LLM Inference Handbook: Free Online Reading, Interactive Tools for VRAM and Cost, Choosing Batching, Caching, and Deployment by Load
