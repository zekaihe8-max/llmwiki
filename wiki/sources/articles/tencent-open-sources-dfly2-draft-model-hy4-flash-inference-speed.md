---
type: Source
title: "腾讯开源 DFly2 草稿模型，Hy4 Flash 推理提速超 3 倍"
title_en: "Tencent open-sources DFly2 draft model, Hy4 Flash inference speeds up over 3x"
description: "腾讯发布约 8.5 亿参数的 DFly2 草稿模型开源方案，并通过 AngelSlim 将 Hy4 Flash 压缩至 135GB，显著提升推理速度。"
description_en: "Tencent releases the open-source DFly2 draft model of about 850 million parameters and compresses Hy4 Flash to 135GB via AngelSlim, significantly boosting inference speed."
resource: https://x.com/0xLogicrw/status/2125875584584827154
tags: [tencent, dfly2, speculative-decoding, open-weights, inference-efficiency]
sources:
  - id: x-0xlogicrw-2125875584584827154
    resource: https://x.com/0xLogicrw/status/2125875584584827154
    title: "Tencent open-sources DFly2 draft model, Hy4 Flash inference speeds up over 3x"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:37:49+08:00
---

# 腾讯开源 DFly2 草稿模型，Hy4 Flash 推理提速超 3 倍

*Tencent open-sources DFly2 draft model, Hy4 Flash inference speeds up over 3x*

「帖文称」腾讯正式发布 DFly2 完整开源方案，包括模型权重、训练代码和技术论文；该约 8.5 亿参数草稿模型内置于 Hy4 Flash，复用主模型 KV 缓存及最多 2048 个关键位置，在四项智能体任务中平均提速约 3.2 倍、最高 4.2 倍，并已适配 DeepSeek-V4.1-Flash 与 GLM-5.3-Flash，代码集成至 AngelSpec。同一文章还提到，通过 AngelSlim 压缩后 Hy4 Flash 从 440GB 缩至约 135GB，可在 64GB 内存 Mac mini 上运行。[^x-0xlogicrw-2125875584584827154]

The post says Tencent has officially released the full DFly2 open-source package, including model weights, training code, and technical paper; the roughly 850-million-parameter draft model is built into Hy4 Flash, reuses the main model's KV cache and up to 2,048 key positions, and achieves an average 3.2x speedup (up to 4.2x) across four agent tasks. It has been adapted for DeepSeek-V4.1-Flash and GLM-5.3-Flash, with training code integrated into AngelSpec. The same post also notes that after AngelSlim compression, Hy4 Flash shrinks from 440GB to about 135GB and can run on a 64GB-memory Mac mini.[^x-0xlogicrw-2125875584584827154]

## 摘要 / Summary

- DFly2 是约 8.5 亿参数的草稿模型，内置于 Hy4 Flash，专门加快生成速度。[^x-0xlogicrw-2125875584584827154]
- DFly2 is an approximately 850-million-parameter draft model built into Hy4 Flash, dedicated to speeding up generation.[^x-0xlogicrw-2125875584584827154]
- 腾讯开源 DFly2 模型权重、训练代码和技术论文，支持为类似稀疏注意力架构的大模型训练专属草稿模型。[^x-0xlogicrw-2125875584584827154]
- Tencent open-sources DFly2 model weights, training code, and technical paper, supporting training dedicated draft models for large models with similar sparse attention architectures.[^x-0xlogicrw-2125875584584827154]
- DFly2 复用主模型 KV 缓存及最多 2048 个关键位置，无需单独维护缓存，注意力计算量不随上下文长度增加。[^x-0xlogicrw-2125875584584827154]
- DFly2 reuses the main model's KV cache and up to 2,048 key positions, requiring no separate cache maintenance, with attention compute not increasing with context length.[^x-0xlogicrw-2125875584584827154]
- 在 Hy4 Flash 四项智能体任务中，DFly2 平均提速约 3.2 倍、最高 4.2 倍，比 DSpark 高约 25%。[^x-0xlogicrw-2125875584584827154]
- Across four Hy4 Flash agent tasks, DFly2 averages about 3.2x speedup and up to 4.2x, about 25% higher than DSpark.[^x-0xlogicrw-2125875584584827154]
- 通过 AngelSlim 压缩，Hy4 Flash 从 440GB 缩至约 135GB（减少 69%），可在 64GB 内存 Mac mini 上运行。[^x-0xlogicrw-2125875584584827154]
- Via AngelSlim compression, Hy4 Flash shrinks from 440GB to about 135GB (69% reduction) and can run on a 64GB-memory Mac mini.[^x-0xlogicrw-2125875584584827154]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2125875584584827154)。 / Original: [link](https://x.com/0xLogicrw/status/2125875584584827154).
- Topic: [大厂推理成本效率被低估 / Big-lab inference cost efficiency is underestimated](../../topics/lab-inference-serving-cost-efficiency.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)

[^x-0xlogicrw-2125875584584827154]: Tencent open-sources DFly2 draft model, Hy4 Flash inference speeds up over 3x
