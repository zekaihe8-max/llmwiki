---
type: Source
title: "语言模型可重写自身权重"
title_en: "Language Models Can Rewrite Their Own Weights"
description: "一篇 arXiv 论文称，开源 27B 语言模型可在无梯度、无训练的情况下通过自身推理重写权重，并在未见问题上提升准确率。"
description_en: "An arXiv paper claims an open 27B language model can rewrite its own weights through its own reasoning without gradients or training, improving accuracy on unseen problems."
resource: https://arxiv.org/abs/2611.21885
tags: [self-rewriting, language-models, ai, recursive-self-improvement]
sources:
  - id: language-models-can-rewrite-their-own-weights
    resource: https://arxiv.org/abs/2611.21885
    title: "Language Models Can Rewrite Their Own Weights"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T19:59:41+08:00
---

# 语言模型可重写自身权重

*Language Models Can Rewrite Their Own Weights*

「帖文称」一篇 arXiv 论文展示了语言模型可由自身推理重写自身权重，无需梯度或训练即可变得更好。该研究以开源 27B 模型为例，称其在未见过的问题上准确率提升 6.6 个百分点，并在八次连续会话中准确率仅上升；模型还能在不读取原始权重的情况下修复受损副本，使其在未见图像任务上恢复超过原始准确率的 80%。论文指出这种能力随规模出现，只有最大模型能自我改进和自我修复，且全部改写仅靠前向传播，每次作答无额外成本。[^language-models-can-rewrite-their-own-weights]

The paper claims that a language model can rewrite its own weights through its own reasoning, becoming better without gradients or training. Using an open 27B model, it reportedly improves accuracy by 6.6 points on problems it never saw, with accuracy rising across eight consecutive sessions. It can also repair a damaged copy without reading the original weights, restoring over 80% of original accuracy on unseen image tasks. The authors say this ability emerges with scale, only the largest model improves and repairs itself, and all rewriting uses only forward passes at no cost per answer.[^language-models-can-rewrite-their-own-weights]

## 摘要 / Summary

- 论文提出“自我改写”，模型充当自身优化器，无梯度、无训练即可重写权重。[^language-models-can-rewrite-their-own-weights]
- The paper proposes “self-rewriting,” where the model acts as its own optimizer and rewrites weights without gradients or training.[^language-models-can-rewrite-their-own-weights]
- 开源 27B 模型在未见过的问题上，自身编辑使准确率提升 6.6 个百分点。[^language-models-can-rewrite-their-own-weights]
- An open 27B model’s own edit makes it 6.6 points more accurate on problems it never saw.[^language-models-can-rewrite-their-own-weights]
- 模型在练习题上测试编辑、只提交有效编辑，八次连续会话中准确率仅上升。[^language-models-can-rewrite-their-own-weights]
- It tests edits on practice problems and submits only what works, with accuracy rising over eight consecutive sessions.[^language-models-can-rewrite-their-own-weights]
- 在不读取原始权重的情况下，模型将受损副本在未见图像任务上的准确率恢复至原始水平的 80% 以上。[^language-models-can-rewrite-their-own-weights]
- Without reading the original weights, the model restores a damaged copy to over 80% of original accuracy on unseen image tasks.[^language-models-can-rewrite-their-own-weights]
- 自我改写能力随规模出现，同一模型族中只有最大模型能改进和修复自身，改写仅靠前向传播，每次作答无额外成本。[^language-models-can-rewrite-their-own-weights]
- Self-rewriting ability emerges with scale; only the largest model in one family improves and repairs itself, using only forward passes with no cost per answer.[^language-models-can-rewrite-their-own-weights]

## 相关 / Related

- 原文：[链接](https://arxiv.org/abs/2611.21885)。 / Original: [link](https://arxiv.org/abs/2611.21885).
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)
- Topic: [工具产品自建模型抢话语权 / Tool products building own models for discourse power](../../topics/tools-building-own-models.md)
- Topic: [前沿训练环境隔离 / Frontier training containment](../../topics/frontier-training-containment.md)

[^language-models-can-rewrite-their-own-weights]: Language Models Can Rewrite Their Own Weights
