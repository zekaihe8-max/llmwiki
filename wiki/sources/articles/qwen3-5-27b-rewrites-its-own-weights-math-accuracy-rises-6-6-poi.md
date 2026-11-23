---
type: Source
title: "Qwen3.5 27B 自修权重，数学准确率提升 6.6 个百分点"
title_en: "Qwen3.5 27B Rewrites Its Own Weights, Math Accuracy Rises 6.6 Points"
description: "开源模型在无需重新训练的情况下自行修改权重，使数学题准确率从 57.2% 提升至 63.8%。"
description_en: "An open-weight model revises its own weights without retraining, lifting math accuracy from 57.2% to 63.8%."
resource: https://x.com/dotey/status/2124775538648633370
tags: [qwen3-5, open-weight, self-modification, arxiv, math-accuracy]
sources:
  - id: qwen3-5-27b-self-edits-weights-math-accuracy
    resource: https://x.com/dotey/status/2124775538648633370
    title: "Qwen3.5 27B Rewrites Its Own Weights, Math Accuracy Rises 6.6 Points"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T19:58:58+08:00
---

# Qwen3.5 27B 自修权重，数学准确率提升 6.6 个百分点

*Qwen3.5 27B Rewrites Its Own Weights, Math Accuracy Rises 6.6 Points*

「帖文称」开源模型 Qwen3.5 27B 在不经重新训练的情况下，自行编写 Python 修改自身权重，使数学题准确率从 57.2% 提升到 63.8%。该研究由 UIUC、CMU、普林斯顿、斯坦福、耶鲁等校 11 位研究者于 11 月 18 日发布在 arXiv，尚未经过同行评审。[^qwen3-5-27b-self-edits-weights-math-accuracy]

The post claims that open-weight model Qwen3.5 27B rewrote its own weights via Python without retraining, raising math accuracy from 57.2% to 63.8%. The work by 11 researchers from UIUC, CMU, Princeton, Stanford, Yale and others was posted to arXiv on Nov 18 and is not yet peer-reviewed.[^qwen3-5-27b-self-edits-weights-math-accuracy]

## 摘要 / Summary

- 论文由 UIUC、CMU、普林斯顿、斯坦福、耶鲁等校 11 位研究者于 11 月 18 日在 arXiv 发布，目前仍为预印本，未经过同行评审。[^qwen3-5-27b-self-edits-weights-math-accuracy]
- The paper by 11 researchers from UIUC, CMU, Princeton, Stanford, Yale and others was posted to arXiv on Nov 18 and remains a preprint without peer review.[^qwen3-5-27b-self-edits-weights-math-accuracy]
- Qwen3.5 27B 在 490 道未见过的数学题上，准确率从 57.2% 提升到 63.8%，未答完率从 33.6% 降至 26.1%。[^qwen3-5-27b-self-edits-weights-math-accuracy]
- On 490 unseen math problems, Qwen3.5 27B accuracy rose from 57.2% to 63.8%, while the unanswered rate fell from 33.6% to 26.1%.[^qwen3-5-27b-self-edits-weights-math-accuracy]
- 模型未使用梯度或重新训练，仅用单块 GPU 运行几小时，通过编写 Python 直接修改自身 48 层的权重参数。[^qwen3-5-27b-self-edits-weights-math-accuracy]
- Without gradients or retraining, and using a single GPU for a few hours, the model wrote Python to directly modify parameters across all 48 of its own layers.[^qwen3-5-27b-self-edits-weights-math-accuracy]
- 研究者还测试了受损副本：将第 30 层一个矩阵的 8 行替换为高达正常值 200 倍的随机噪声后，模型自行定位并压平异常极值，视觉测试从 7.3% 恢复到 70.2%。[^qwen3-5-27b-self-edits-weights-math-accuracy]
- Researchers also tested a damaged copy: after replacing 8 rows of a layer-30 matrix with random noise up to 200× normal magnitude, the model located and flattened the extreme values, restoring visual-test performance from 7.3% to 70.2%.[^qwen3-5-27b-self-edits-weights-math-accuracy]
- 较小模型无法完成此任务：2B 声称自己只是文本模型无法改权重，9B 通过加噪声把准确率从 47.5% 降至 0 分。[^qwen3-5-27b-self-edits-weights-math-accuracy]
- Smaller models could not do this: 2B claimed it was only a text model that could not change weights, and 9B dropped accuracy from 47.5% to 0 by adding noise.[^qwen3-5-27b-self-edits-weights-math-accuracy]
- 这不是递归自我进化：8 轮实验每次都从原版重新开始，模型撤回了 5 次失败改动、仅提交 3 次成功改动。[^qwen3-5-27b-self-edits-weights-math-accuracy]
- This is not recursive self-improvement: all 8 rounds restarted from the original model, with 5 failed edits reverted and only 3 successful edits submitted.[^qwen3-5-27b-self-edits-weights-math-accuracy]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2124775538648633370)。 / Original: [link](https://x.com/dotey/status/2124775538648633370).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [前沿训练环境隔离 / Frontier training containment](../../topics/frontier-training-containment.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^qwen3-5-27b-self-edits-weights-math-accuracy]: Qwen3.5 27B Rewrites Its Own Weights, Math Accuracy Rises 6.6 Points
