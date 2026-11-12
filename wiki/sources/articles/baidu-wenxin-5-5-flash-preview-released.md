---
type: Source
title: "百度文心 5.5 Flash Preview 发布"
title_en: "Baidu Wenxin 5.5 Flash Preview Released"
description: "百度发布开源的文心 5.5 Flash Preview 大模型，主打 280B 总参数、14B 激活参数、1M 长上下文及 Apache 2.0 协议。"
description_en: "Baidu releases the open-source Wenxin 5.5 Flash Preview foundation model, featuring 280B total parameters, 14B activated parameters, 1M long context, and the Apache 2.0 license."
resource: https://x.com/vista8/status/2120503932548260273
tags: [baidu, wenxin-5-5, open-weight, flash-preview]
sources:
  - id: wenxin-5-5-flash-preview
    resource: https://x.com/vista8/status/2120503932548260273
    title: "Baidu Wenxin 5.5 Flash Preview Released"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T20:16:57+08:00
---

# 百度文心 5.5 Flash Preview 发布

*Baidu Wenxin 5.5 Flash Preview Released*

「帖文称」百度文心 5.5 Flash Preview 今日发布，总参数 280B、每次推理仅激活 14B，支持 1M 长上下文，千帆 API 单用户推理速度 200+ tokens/s，并以 Apache 2.0 协议开源，支持 SGLang 和 vLLM 部署。帖文还称其在编程、3D 仿真、视频编排及知识工作等方面能力提升，可自主规划任务并调用 MCP 工具与 Skill 交付文档、表格和报告。[^wenxin-5-5-flash-preview]

The post says Baidu's Wenxin 5.5 Flash Preview is released today, with 280B total parameters, 14B activated per inference, 1M long context, 200+ tokens/s single-user inference speed on Qianfan API, Apache 2.0 open-source license, and support for SGLang and vLLM deployment. It also claims improved coding, 3D simulation, video orchestration, and knowledge work capabilities, with autonomous task planning and MCP tool/Skill invocation to deliver documents, tables, and reports.[^wenxin-5-5-flash-preview]

## 摘要 / Summary

- 总参数 280B，每次推理仅激活 14B，支持 1M 长上下文。[^wenxin-5-5-flash-preview]
- 280B total parameters, 14B activated per inference, supports 1M long context.[^wenxin-5-5-flash-preview]
- 千帆 API 单用户推理速度 200+ tokens/s，Apache 2.0 协议开源，支持 SGLang 和 vLLM 部署。[^wenxin-5-5-flash-preview]
- Qianfan API single-user inference speed 200+ tokens/s, Apache 2.0 open source, supports SGLang and vLLM deployment.[^wenxin-5-5-flash-preview]
- 帖文称训练数据用了超过 1400 万个可执行代码任务，加上多 Agent 框架真实执行轨迹，编程能力提升显著。[^wenxin-5-5-flash-preview]
- The post claims training data used over 14 million executable code tasks plus multi-Agent framework real execution trajectories, with significantly improved coding ability.[^wenxin-5-5-flash-preview]
- 模型可自主规划任务、调 MCP 工具和 Skill，直接交付可用的表格、文档和报告，后训练覆盖金融、法律等专业领域。[^wenxin-5-5-flash-preview]
- The model can autonomously plan tasks, call MCP tools and Skills, directly deliver usable tables, documents, and reports; post-training covers finance, legal, and other professional domains.[^wenxin-5-5-flash-preview]
- 架构包括混合稀疏注意力、多路由器 MoE 加 ECHO 多 Token 预测，FP4 专家权重和草稿头针对 Agent 任务提速。[^wenxin-5-5-flash-preview]
- Architecture includes hybrid sparse attention, multi-router MoE plus ECHO multi-token prediction, and FP4 expert weights plus draft heads to speed up Agent tasks.[^wenxin-5-5-flash-preview]
- 帖文称百度自动研究系统 ERNIE Evolve 已参与文心 5.5 Flash 推理优化，涵盖低时延、确定性吞吐和极致解码速度。[^wenxin-5-5-flash-preview]
- The post claims Baidu's automatic research system ERNIE Evolve has participated in Wenxin 5.5 Flash inference optimization, covering low latency, deterministic throughput, and extreme decoding speed.[^wenxin-5-5-flash-preview]

## 相关 / Related

- 原文：[链接](https://x.com/vista8/status/2120503932548260273)。 / Original: [link](https://x.com/vista8/status/2120503932548260273).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [大厂推理成本效率被低估 / Big-lab inference cost efficiency is underestimated](../../topics/lab-inference-serving-cost-efficiency.md)

[^wenxin-5-5-flash-preview]: Baidu Wenxin 5.5 Flash Preview Released
