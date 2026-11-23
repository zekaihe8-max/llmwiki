---
type: Source
title: "Thinking Machines 发布可在笔记本上运行的 Inkling 2 Mini 开放权重模型"
title_en: "Thinking Machines Releases Inkling 2 Mini Open-Weight Model for Laptops"
description: "思维机器公司发布 Inkling 2 Mini，一款小到可在笔记本电脑上运行的循环变压器模型，主打开放权重与代理式编程能力。"
description_en: "Thinking Machines releases Inkling 2 Mini, a looped transformer small enough to run on laptops, emphasizing open weights and agentic coding capabilities."
resource: https://thinkingmachines.ai/news/inkling-2-mini
tags: [ai-models, open-weights, agents, local-inference]
sources:
  - id: bd3614c30b5d6b83
    resource: https://thinkingmachines.ai/news/inkling-2-mini
    title: "Thinking Machines Releases Inkling 2 Mini Open-Weight Model for Laptops"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T08:19:44+08:00
---

# Thinking Machines 发布可在笔记本上运行的 Inkling 2 Mini 开放权重模型

*Thinking Machines Releases Inkling 2 Mini Open-Weight Model for Laptops*

「帖文称」思维机器公司发布 Inkling 2 Mini，这是一款小到可在笔记本电脑上运行的快速强大模型，采用循环变压器架构，中间层每个 token 运行三次，总参数 264 亿、激活参数 34 亿，内存占用约 20GB，并在多个代理式编程与搜索基准上领先同规模开放权重模型。[^bd3614c30b5d6b83]

Thinking Machines has released Inkling 2 Mini, a fast and powerful model small enough to run on a laptop. It uses a looped transformer architecture that runs the middle layers three times per token, has 26.4B total parameters with 3.4B active, and a ~20GB memory footprint, leading comparable open-weights models on several agentic coding and search benchmarks.[^bd3614c30b5d6b83]

## 摘要 / Summary

- 架构与参数：24 层模型，分为四个六层区块，两个中间区块每个 token 运行三次；总参数 264 亿，激活 34 亿，每 token 权重激活 54 亿。[^bd3614c30b5d6b83]
- Architecture and parameters: 24-layer model divided into four blocks of six layers, with the two middle blocks running three times per token; 26.4B total parameters, 3.4B active, and 5.4B weight activations per token.[^bd3614c30b5d6b83]
- 基准表现：在 DeepSWE v1.1 上达到 48.2%，在 Vals Index v2.2 上达到 46.5%，领先所有参数少于 1000 亿的开放权重模型。[^bd3614c30b5d6b83]
- Benchmark performance: 48.2% on DeepSWE v1.1 and 46.5% on Vals Index v2.2, leading all open-weights models with fewer than 100B total parameters.[^bd3614c30b5d6b83]
- 部署与运行：权重多为 NVFP4，末四层为 MXFP8，总内存占用约 20GB，可在消费级笔记本和台式 AI 计算机上本地运行，文中演示了在断网 MacBook Pro 上构建飞行模拟器。[^bd3614c30b5d6b83]
- Deployment and operation: Most weights are NVFP4 with the last four layers in MXFP8, total memory footprint ~20GB, enabling local operation on consumer laptops and desktop AI computers; the article demonstrates building a flight simulator on an offline MacBook Pro.[^bd3614c30b5d6b83]
- 能力与局限：擅长长时程代理工作和代理式编程，但并非最强的小型多轮对话模型，MultiChallenge 得分 50.0%，ComplexConstraints v1.1 得分 33.4%，均落后于 Qwen3.8-27B。[^bd3614c30b5d6b83]
- Capabilities and limitations: Excels at long-horizon agentic work and agentic coding, but is not the strongest small model for multi-turn chat, scoring 50.0% on MultiChallenge and 33.4% on ComplexConstraints v1.1, both behind Qwen3.8-27B.[^bd3614c30b5d6b83]
- 研究与效率：斯坦福研究人员测得其在 NVIDIA DGX Spark 上的“每焦耳智能”得分为 0.703，显著高于 Qwen3.6-35B-A3B（0.430）等模型；随同发布的还有用于监控实验的可变循环研究模型。[^bd3614c30b5d6b83]
- Research and efficiency: Stanford researchers measured its intelligence-per-joule score at 0.703 on NVIDIA DGX Spark, significantly higher than models such as Qwen3.6-35B-A3B (0.430); a variable-loop research model is released alongside for monitorability experiments.[^bd3614c30b5d6b83]

## 相关 / Related

- 原文：[链接](https://thinkingmachines.ai/news/inkling-2-mini)。 / Original: [link](https://thinkingmachines.ai/news/inkling-2-mini).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [AI 任务时界增长 / AI task horizon growth](../../topics/ai-task-horizon-growth.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)

[^bd3614c30b5d6b83]: Thinking Machines Releases Inkling 2 Mini Open-Weight Model for Laptops
