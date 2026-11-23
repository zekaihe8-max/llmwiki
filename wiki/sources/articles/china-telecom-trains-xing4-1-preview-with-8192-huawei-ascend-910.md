---
type: Source
title: "中国电信用 8192 张昇腾 910C 训出 Xing4.1-Preview"
title_en: "China Telecom trains Xing4.1-Preview with 8192 Huawei Ascend 910C chips"
description: "中国电信使用 8192 张华为昇腾 910C 芯片从头训练出 2850 亿参数的开源大模型 Xing4.1-Preview，并以 Apache 2.0 协议全量开源。"
description_en: "China Telecom trained the 285-billion-parameter open-source model Xing4.1-Preview from scratch using 8192 Huawei Ascend 910C chips and released it fully under Apache 2.0."
resource: https://x.com/lxfater/status/2124828611811152226
tags: [china-telecom, ascend-910c, open-weight, mindspore, large-language-model]
sources:
  - id: x-lxfater-2124828611811152226
    resource: https://x.com/lxfater/status/2124828611811152226
    title: "China Telecom trains Xing4.1-Preview with 8192 Huawei Ascend 910C chips"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:10:32+08:00
---

# 中国电信用 8192 张昇腾 910C 训出 Xing4.1-Preview

*China Telecom trains Xing4.1-Preview with 8192 Huawei Ascend 910C chips*

帖文称，中国电信使用 8192 张华为昇腾 910C 芯片，配合 MindSpore 框架从头训练出 2850 亿参数的开源大模型 Xing4.1-Preview，支持 100 万 token 上下文，主攻代码编写与长任务，521G 完整权重已按 Apache 2.0 协议开源；报告指出模型采用专家拆分与长文本压缩等方式适配昇腾 910C 显存带宽限制，但官方自测分略低于同档混元与智谱模型，且第三方实测尚未出炉。[^x-lxfater-2124828611811152226]

The post claims China Telecom trained the 285-billion-parameter open-source model Xing4.1-Preview from scratch using 8192 Huawei Ascend 910C chips and the MindSpore framework, supporting 1 million token context and targeting coding and long tasks; the 521G full weights are released under Apache 2.0. The report says the model uses expert splitting and long-text compression to fit Ascend 910C memory bandwidth limits, but official self-test scores are slightly below comparable Hunyuan and Zhipu models, and third-party evaluations are not yet available.[^x-lxfater-2124828611811152226]

## 摘要 / Summary

- 使用 8192 张昇腾 910C 芯片训练 2850 亿参数模型。[^x-lxfater-2124828611811152226]
- Trained a 285-billion-parameter model using 8192 Huawei Ascend 910C chips.[^x-lxfater-2124828611811152226]
- 基于 MindSpore 框架从头训练，支持 100 万 token 上下文。[^x-lxfater-2124828611811152226]
- Trained from scratch with MindSpore, supporting 1 million token context.[^x-lxfater-2124828611811152226]
- 521G 完整文件按 Apache 2.0 协议全开源。[^x-lxfater-2124828611811152226]
- 521G full files fully open-sourced under Apache 2.0.[^x-lxfater-2124828611811152226]
- 模型采用小专家设计，每次仅调用约 170 亿参数以降低显存搬运。[^x-lxfater-2124828611811152226]
- Model uses small-expert design, invoking only about 17 billion parameters per pass to reduce memory movement.[^x-lxfater-2124828611811152226]
- 长文本读取最高快了 4.68 倍，但官方自测分大部分略低于同档混元和智谱模型。[^x-lxfater-2124828611811152226]
- Long-text reading up to 4.68x faster, but official self-test scores mostly slightly below comparable Hunyuan and Zhipu models.[^x-lxfater-2124828611811152226]
- GitHub 仓库尚未开放，第三方实测目前为空白。[^x-lxfater-2124828611811152226]
- GitHub repository not yet open, third-party evaluations currently blank.[^x-lxfater-2124828611811152226]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2124828611811152226)。 / Original: [link](https://x.com/lxfater/status/2124828611811152226).
- Topic: [中国开源领先与美国算力优势 / China open-source lead and US compute advantage](../../topics/china-open-source-lead-us-compute.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [工具产品自建模型抢话语权 / Tool products building own models for discourse power](../../topics/tools-building-own-models.md)

[^x-lxfater-2124828611811152226]: China Telecom trains Xing4.1-Preview with 8192 Huawei Ascend 910C chips
