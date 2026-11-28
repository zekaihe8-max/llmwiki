---
type: Source
title: "他在 Reddit 看到一个把 MiniMax H3 显存门槛砍掉大半的做法"
title_en: "He saw a Reddit method that cuts MiniMax H3's VRAM threshold by more than half"
description: "帖文称有社区方案用 Qwen3-VL-4B 加岭回归投影替换 MiniMax H3 的 32B 文本编码器，把显存需求从约 15.7G 降到约 4.5G。"
description_en: "A community approach replaces MiniMax H3's 32B text encoder with Qwen3-VL-4B and ridge-regression projection, cutting VRAM use from about 15.7GB to 4.5GB."
resource: https://x.com/servasyy_ai/status/2126452802218254718
tags: [minimax-h3, qwen3-vl, vram, local-inference, comfyui]
sources:
  - id: minimax-h3-vram-cut-qwen3-vl-4b
    resource: https://x.com/servasyy_ai/status/2126452802218254718
    title: "He saw a Reddit method that cuts MiniMax H3's VRAM threshold by more than half"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:05:45+08:00
---

# 他在 Reddit 看到一个把 MiniMax H3 显存门槛砍掉大半的做法

*He saw a Reddit method that cuts MiniMax H3's VRAM threshold by more than half*

帖文称，Reddit 上有用户通过用 Qwen3-VL-4B 替换 MiniMax H3 原版截断 50 层的 Qwen3-VL-32B 文本编码器，并利用同源词表与岭回归线性投影，将文本编码阶段显存从约 15.7G 降至约 4.5G，使 3090 / 4090 等消费级显卡可运行；代价是部分冷门世界知识可能丢失。[^minimax-h3-vram-cut-qwen3-vl-4b]

The post says a Reddit user replaced MiniMax H3's truncated 50-layer Qwen3-VL-32B text encoder with Qwen3-VL-4B, using a shared tokenizer and ridge-regression projection to reduce text-encoding VRAM from about 15.7GB to 4.5GB, enabling consumer GPUs like the 3090 / 4090, at the cost of losing some obscure world knowledge.[^minimax-h3-vram-cut-qwen3-vl-4b]

## 摘要 / Summary

- 帖文称 MiniMax H3 原版使用截断 50 层的 Qwen3-VL-32B 作为文本编码器，即使采用 NVFP4 量化，编码提示词也要约 15.7G 显存。[^minimax-h3-vram-cut-qwen3-vl-4b]
- The post says the original MiniMax H3 uses a truncated 50-layer Qwen3-VL-32B as its text encoder, requiring about 15.7GB of VRAM to encode prompts even with NVFP4 quantization.[^minimax-h3-vram-cut-qwen3-vl-4b]
- 替代方案用 Qwen3-VL-4B 替换 32B 文本编码器，Qwen3-VL-4B 和 32B 共用同一套 151,936 分词器，token 位置一一对应。[^minimax-h3-vram-cut-qwen3-vl-4b]
- The alternative replaces the 32B text encoder with Qwen3-VL-4B; both share the same 151,936-token tokenizer, so token positions correspond one-to-one.[^minimax-h3-vram-cut-qwen3-vl-4b]
- 作者用岭回归拟合线性投影矩阵，把 4B 的隐藏状态逐位置映射到 H3 需要的 5120 维条件空间，零微调成本接入原模型。[^minimax-h3-vram-cut-qwen3-vl-4b]
- The author fits a linear projection matrix with ridge regression to map the 4B model's hidden states position by position into the 5120-dimensional conditioning space required by H3, with zero fine-tuning cost.[^minimax-h3-vram-cut-qwen3-vl-4b]
- 帖文称文本编码阶段显存从 15.7G 降到约 4.5G，3090 / 4090 能跑，日常提示词、结构化多镜头脚本和帧控制都能正常跑通。[^minimax-h3-vram-cut-qwen3-vl-4b]
- The post says text-encoding VRAM drops from 15.7GB to about 4.5GB, making 3090 / 4090 GPUs usable, with everyday prompts, structured multi-shot scripts, and frame control working.[^minimax-h3-vram-cut-qwen3-vl-4b]
- 代价是 32B 独有的冷门世界知识会丢失，特定名人、品牌、小众地标容易退化成通用形象。[^minimax-h3-vram-cut-qwen3-vl-4b]
- The tradeoff is that obscure world knowledge unique to the 32B model may be lost, causing specific celebrities, brands, and niche landmarks to degrade into generic appearances.[^minimax-h3-vram-cut-qwen3-vl-4b]
- 帖文称现成权重和 ComfyUI 节点已放出：HuggingFace 为 NicoLab28/ClipProj-MiniMax-H3，节点为 ComfyUI-ClipProj。[^minimax-h3-vram-cut-qwen3-vl-4b]
- The post says ready-made weights and a ComfyUI node are available: HuggingFace repo NicoLab28/ClipProj-MiniMax-H3 and node ComfyUI-ClipProj.[^minimax-h3-vram-cut-qwen3-vl-4b]

## 相关 / Related

- 原文：[链接](https://x.com/servasyy_ai/status/2126452802218254718)。 / Original: [link](https://x.com/servasyy_ai/status/2126452802218254718).
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)

[^minimax-h3-vram-cut-qwen3-vl-4b]: He saw a Reddit method that cuts MiniMax H3's VRAM threshold by more than half
