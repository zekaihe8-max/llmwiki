---
type: Source
title: "疑似造假：Claude Fable 5 权重兜售实为 DeepSeek 开源模型文件"
title_en: "Suspected Fake Claude Fable 5 Weights Sale Turns Out to Be DeepSeek Open-Source Model Files"
description: "网友比对发现兜售的 Claude Fable 5 权重文件与 DeepSeek 免费开源模型字节完全一致，且多项细节自相矛盾。"
description_en: "Netizens found the alleged Claude Fable 5 weights for sale are byte-identical to DeepSeek's free open-source model files, with multiple internal inconsistencies."
resource: https://x.com/dotey/status/2116366460939386990
tags: [ai-security, model-weights, misinformation, deepseek, anthropic]
sources:
  - id: 8bf47a7b9fdd2ce0
    resource: https://x.com/dotey/status/2116366460939386990
    title: "Suspected Fake Claude Fable 5 Weights Sale Turns Out to Be DeepSeek Open-Source Model Files"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-10-31T20:09:54+08:00
---

# 疑似造假：Claude Fable 5 权重兜售实为 DeepSeek 开源模型文件

*Suspected Fake Claude Fable 5 Weights Sale Turns Out to Be DeepSeek Open-Source Model Files*

帖文称有人从与亚马逊 Bedrock 相关的配置不当 S3 存储桶中窃取并兜售 Anthropic 旗舰模型 Claude Fable 5 的权重分片，但 X 用户 toriset 指出该文件与 DeepSeek V4.1-Flash-1017 开源分片完全一致，且分片数量、区域、总容量等细节均不成立，Anthropic 与亚马逊暂未回应。[^8bf47a7b9fdd2ce0]

A post claims someone stole and is selling a shard of Anthropic's Claude Fable 5 model weights from a misconfigured Amazon Bedrock-related S3 bucket, but X user toriset says the file is byte-identical to DeepSeek V4.1-Flash-1017 open-source shards, and details such as shard count, region, and total capacity do not add up; Anthropic and Amazon have not responded.[^8bf47a7b9fdd2ce0]

## 摘要 / Summary

- 卖家“localizer”声称从与 Amazon Bedrock 相关的配置不当 S3 存储桶中获得约 7GB 的 Claude Fable 5 权重分片，称完整模型有 640 个分片、约 8TB。[^8bf47a7b9fdd2ce0]
- Seller "localizer" claims to have obtained a roughly 7 GB Claude Fable 5 weight shard from a misconfigured S3 bucket associated with Amazon Bedrock, saying the full model has 640 shards totaling about 8 TB.[^8bf47a7b9fdd2ce0]
- X 用户 toriset 指出文件大小和内容与 DeepSeek V4.1-Flash-1017 第 13 到 42 号分片完全一致，该模型已于 10 月 17 日在 Hugging Face 免费开源。[^8bf47a7b9fdd2ce0]
- X user toriset points out the file sizes and contents match DeepSeek V4.1-Flash-1017 shards 13 through 42 exactly; the model was open-sourced for free on Hugging Face on October 17.[^8bf47a7b9fdd2ce0]
- 反驳理由还包括：eu-north-1 区域不托管 Fable，640 片乘以 7.39GB 约等于 4.73TB 而非 8TB，且仅 1/640 权重无法用于模型蒸馏。[^8bf47a7b9fdd2ce0]
- Additional rebuttals: eu-north-1 does not host Fable, 640 shards times 7.39 GB equals about 4.73 TB rather than 8 TB, and only 1/640 of the weights cannot be used for model distillation.[^8bf47a7b9fdd2ce0]
- 发帖论坛账号本月才注册，Anthropic 和亚马逊截至北京时间 31 日上午均未回应，也未有主流媒体报道。[^8bf47a7b9fdd2ce0]
- The forum account that posted was registered this month, and neither Anthropic nor Amazon had responded by the morning of October 31 Beijing time, with no mainstream media coverage.[^8bf47a7b9fdd2ce0]
- 同期 Anthropic 还处理一起已证实的安全事件：Cathedral 通过 AI agent 进入内部系统，但用户聊天记录、源代码和模型权重未泄露。[^8bf47a7b9fdd2ce0]
- Around the same time, Anthropic handled a confirmed security incident in which Cathedral accessed internal systems via an AI agent, but user chat logs, source code, and model weights were not leaked.[^8bf47a7b9fdd2ce0]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2116366460939386990)。 / Original: [link](https://x.com/dotey/status/2116366460939386990).
- Topic: [对抗评审与外部证据 / Adversarial review and external evidence](../../topics/adversarial-review-external-evidence.md)
- Topic: [账号与资产安全卫生 / Account and asset security hygiene](../../topics/account-and-asset-security-hygiene.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)

[^8bf47a7b9fdd2ce0]: Suspected Fake Claude Fable 5 Weights Sale Turns Out to Be DeepSeek Open-Source Model Files
