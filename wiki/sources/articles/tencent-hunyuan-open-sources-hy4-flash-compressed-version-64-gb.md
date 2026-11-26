---
type: Source
title: "混元开源 Hy4 Flash 压缩版，64 GB Mac mini 能跑但不适作主力"
title_en: "Tencent Hunyuan open-sources Hy4 Flash compressed version; 64 GB Mac mini can run but is unfit as primary machine"
description: "帖文称腾讯混元开源 2240 亿参数 Hy4 Flash 压缩版，官方说 64 GB Mac mini 能跑，但当主力会很慢。"
description_en: "The post claims Tencent Hunyuan open-sourced the 224-billion-parameter Hy4 Flash compressed model; officials say a 64 GB Mac mini can run it, but it would be too slow as a primary machine."
resource: https://x.com/lxfater/status/2125511067698700773
tags: [hunyuan, hy4, open-weight, local-inference, mac-mini]
sources:
  - id: lxfater-hy4-flash-compressed-2125511067698700773
    resource: https://x.com/lxfater/status/2125511067698700773
    title: "Tencent Hunyuan open-sources Hy4 Flash compressed version; 64 GB Mac mini can run but is unfit as primary machine"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:32:25+08:00
---

# 混元开源 Hy4 Flash 压缩版，64 GB Mac mini 能跑但不适作主力

*Tencent Hunyuan open-sources Hy4 Flash compressed version; 64 GB Mac mini can run but is unfit as primary machine*

帖文称，腾讯混元今日开源 2240 亿参数的 Hy4 Flash 压缩版，最小体积为 125.7 GiB，官方宣称 64 GB Mac mini 即可运行。文中解释，Mac 内存与显存共用，可将部分内存当显存使用；约 59 GiB 查词表留在硬盘，其余 66.7 GiB 中只有约 11.5 GB 基础权重常驻内存，53.4 GB MoE 专家权重留在固态硬盘，每层 512 个专家中每次仅唤醒 16 个，由 Strata 工具按需加载。作者结论是 64 GB 内存能扛住推理，但作为主力使用太慢，不建议冲动购买。[^lxfater-hy4-flash-compressed-2125511067698700773]

The post claims Tencent Hunyuan open-sourced the 224-billion-parameter Hy4 Flash compressed model, with the smallest version at 125.7 GiB, and officials say a 64 GB Mac mini can run it. It explains that Mac memory and VRAM are shared; about 59 GiB of lookup tables stay on disk, of the remaining 66.7 GiB only ~11.5 GB base weights stay in memory, and 53.4 GB of MoE expert weights remain on SSD. Each layer has 512 experts, but only 16 are awakened per token and loaded on demand by the Strata tool. The author concludes 64 GB memory can handle inference, but it is too slow as a primary machine and advises against buying one impulsively.[^lxfater-hy4-flash-compressed-2125511067698700773]

## 摘要 / Summary

- 腾讯混元开源 2240 亿参数 Hy4 Flash 压缩版，最小需 125.7 GiB，官方称 64 GB Mac mini 能跑。[^lxfater-hy4-flash-compressed-2125511067698700773]
- Tencent Hunyuan open-sourced the 224-billion-parameter Hy4 Flash compressed model; the smallest requires 125.7 GiB, and officials claim a 64 GB Mac mini can run it.[^lxfater-hy4-flash-compressed-2125511067698700773]
- Mac 内存与显存共用，64 GB 可分出一大块当显存，但 125.7 GiB 仍远大于 64 GB，无法全装入。[^lxfater-hy4-flash-compressed-2125511067698700773]
- Mac memory and VRAM are shared; 64 GB can be partly used as VRAM, but 125.7 GiB still far exceeds 64 GB and cannot be fully loaded.[^lxfater-hy4-flash-compressed-2125511067698700773]
- 约 59 GiB 查词表留在硬盘，其余 66.7 GiB 中仅约 11.5 GB 基础权重常驻内存，53.4 GB MoE 专家权重留在固态硬盘。[^lxfater-hy4-flash-compressed-2125511067698700773]
- About 59 GiB of lookup tables stay on disk; of the remaining 66.7 GiB, only ~11.5 GB base weights stay in memory, while 53.4 GB of MoE expert weights remain on SSD.[^lxfater-hy4-flash-compressed-2125511067698700773]
- 每层 512 个专家中每次仅唤醒 16 个，Strata 工具按需读进内存缓存计算。[^lxfater-hy4-flash-compressed-2125511067698700773]
- Each layer has 512 experts, but only 16 are awakened per token; the Strata tool reads needed experts into memory cache for computation.[^lxfater-hy4-flash-compressed-2125511067698700773]
- 能跑但当主力很慢，不建议为跑本地大模型专门购买 64 GB Mac mini。[^lxfater-hy4-flash-compressed-2125511067698700773]
- It can run, but is too slow as a primary machine; not recommended to buy a 64 GB Mac mini specifically for local large models.[^lxfater-hy4-flash-compressed-2125511067698700773]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2125511067698700773)。 / Original: [link](https://x.com/lxfater/status/2125511067698700773).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)

[^lxfater-hy4-flash-compressed-2125511067698700773]: Tencent Hunyuan open-sources Hy4 Flash compressed version; 64 GB Mac mini can run but is unfit as primary machine
