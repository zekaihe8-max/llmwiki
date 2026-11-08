---
type: Source
title: "MatAnyone-E：基于稀疏内存传播的高效高分辨率视频抠图"
title_en: "MatAnyone-E: Sparse Memory Propagation for Efficient High-Resolution Video Matting"
description: "帖文称 MatAnyone-E 在单张 H200 上以 28.6 FPS 处理原生 4K 视频抠图，显存仅 3.1 GB，质量与 MatAnyone 2 相当。"
description_en: "The post claims MatAnyone-E processes native 4K video matting at 28.6 FPS on a single H200 with only 3.1 GB GPU memory, with quality comparable to MatAnyone 2."
resource: https://shuyun-wang.github.io/projects/MatAnyone-E
tags: [video-matting, efficient-inference, gpu-compute, computer-vision]
sources:
  - id: matanyone-e
    resource: https://shuyun-wang.github.io/projects/MatAnyone-E
    title: "MatAnyone-E: Sparse Memory Propagation for Efficient High-Resolution Video Matting"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:47:00+08:00
---

# MatAnyone-E：基于稀疏内存传播的高效高分辨率视频抠图

*MatAnyone-E: Sparse Memory Propagation for Efficient High-Resolution Video Matting*

帖文称，MatAnyone-E 是 MatAnyone 2 的高效扩展，先用低分辨率传播找出不确定区域和相关内存候选，再仅对这些区域做高分辨率匹配，其余复用低分辨率读出；配合经延迟分析设计、特征蒸馏训练的轻量解码器，在单张 H200 上实现原生 4K 28.62 FPS、1080p 73.07 FPS，峰值显存降至 MatAnyone 2 的 7.6%，抠图质量基本持平。[^matanyone-e]

The post claims MatAnyone-E is an efficient extension of MatAnyone 2 that first uses low-resolution propagation to identify uncertain regions and relevant memory candidates, then runs high-resolution matching only on those regions while reusing low-resolution readout elsewhere; combined with a lightweight decoder designed from latency profiling and trained via feature distillation, it achieves native 4K at 28.62 FPS and 1080p at 73.07 FPS on a single H200, reducing peak GPU memory to 7.6% of MatAnyone 2 while maintaining comparable matting quality.[^matanyone-e]

## 摘要 / Summary

- MatAnyone-E 在单张 H200 上原生 4K 达到 28.62 FPS，1080p 达到 73.07 FPS（启用 torch.compile）。 / MatAnyone-E reaches 28.62 FPS at native 4K and 73.07 FPS at 1080p on a single H200 with torch.compile enabled.[^matanyone-e]
- 峰值 GPU 显存仅 3.1 GB，约为 MatAnyone 2 的 7.6%（13.1× 更少）。 / Peak GPU memory is only 3.1 GB, about 7.6% of MatAnyone 2 (13.1× less).[^matanyone-e]
- 摘要估计推理速度比 MatAnyone 2 快 7.4×，MAD 抠图误差在三组数据集上与 MatAnyone 2 基本持平。 / The abstract estimates 7.4× faster inference than MatAnyone 2, with MAD matting error roughly unchanged across three datasets.[^matanyone-e]
- 稀疏内存传播先做低分辨率通路，通过不确定性选取查询位置、通过亲和度选取内存，高分辨率匹配仅在选定查询-内存对上进行。 / Sparse memory propagation first runs a low-resolution pass, selecting query locations by uncertainty and memory by affinity, with high-resolution matching only on selected query-memory pairs.[^matanyone-e]
- 轻量解码器基于逐阶段延迟分析设计，并用特征蒸馏从原始解码器学习表示。 / The lightweight decoder is designed from stage-wise latency profiling and trained with feature distillation from the original decoder.[^matanyone-e]

## 相关 / Related

- 原文：[链接](https://shuyun-wang.github.io/projects/MatAnyone-E)。 / Original: [link](https://shuyun-wang.github.io/projects/MatAnyone-E).
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [大厂推理成本效率被低估 / Big-lab inference cost efficiency is underestimated](../../topics/lab-inference-serving-cost-efficiency.md)
- Topic: [AI 媒体内容回灌训练语料 / AI media content looping into training corpora](../../topics/ai-media-training-corpus-loop.md)

[^matanyone-e]: MatAnyone-E: Sparse Memory Propagation for Efficient High-Resolution Video Matting
