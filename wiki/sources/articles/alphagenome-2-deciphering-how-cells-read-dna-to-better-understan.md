---
type: Source
title: "AlphaGenome 2：解读细胞如何读取 DNA 以更好地理解疾病"
title_en: "AlphaGenome 2: Deciphering how cells read DNA to better understand disease"
description: "DeepMind 发布下一代 DNA 序列模型 AlphaGenome 2，可预测遗传变异对数百种人类细胞类型的影响，帮助揭示疾病的细胞驱动因素。"
description_en: "DeepMind releases next-generation DNA sequence model AlphaGenome 2, predicting how genetic variants affect hundreds of human cell types to help uncover cellular drivers of disease."
resource: https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease
tags: [deepmind, alphagenome, genomics, single-cell, ai-for-science]
sources:
  - id: alphagenome-2
    resource: https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease
    title: "AlphaGenome 2: Deciphering how cells read DNA to better understand disease"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T08:05:20+08:00
---

# AlphaGenome 2：解读细胞如何读取 DNA 以更好地理解疾病

*AlphaGenome 2: Deciphering how cells read DNA to better understand disease*

DeepMind 于 2026 年 11 月 11 日发布「帖文称」AlphaGenome 2 是其下一代 DNA 序列模型，能够预测 DNA 序列及其变异对特定人类细胞类型的影响，帮助科学家揭示疾病的细胞驱动因素。该模型在人类和小鼠样本的超过 1.07 亿个单细胞概况上训练，涵盖 68 种组织，可将静态细胞图谱转化为人类遗传学的预测引擎。[^alphagenome-2]

DeepMind announced AlphaGenome 2, a next-generation DNA sequence model that predicts how DNA sequences and their variations impact specific human cell types, giving scientists a tool to uncover cellular drivers of disease. Trained on over 107 million individual cell profiles across 68 tissues, it turns static cell atlases into a predictive engine for human genetics.[^alphagenome-2]

## 摘要 / Summary

- AlphaGenome 2 是条件模型，输入特定生物学条件（组织、细胞类型或状态）与百万字母 DNA 序列，一次预测一种条件下的 DNA 效应。[^alphagenome-2]
- AlphaGenome 2 is a conditional model that takes a specific biological condition—tissue, cell type, or state—alongside a million-letter DNA sequence to predict DNA effects for one condition at a time.[^alphagenome-2]
- 在 TenK10K 数据集上，AlphaGenome 2 可靠识别出近两倍的因果变异（30% 对 16%）和方向性基因效应（43% 对 23%），优于原始 AlphaGenome 及其他专用工具。[^alphagenome-2]
- On the TenK10K dataset, AlphaGenome 2 reliably identified nearly twice as many causal variants (30% vs. 16%) and directional gene effects (43% vs. 23%) than the original AlphaGenome fine-tuned on single-cell data and other specialized tools.[^alphagenome-2]
- 模型可无需重新训练即推广到全新单细胞实验，科学家上传仅几十个细胞的单细胞 RNA-seq 快照，模型即可对未见细胞状态进行条件预测。[^alphagenome-2]
- Without retraining, the model can generalize to entirely new single-cell experiments; scientists can upload a single-cell RNA-seq snapshot from just a few dozen cells to condition the model on unseen states.[^alphagenome-2]
- AlphaGenome 2 当天通过 AlphaGenome API 面向非商业研究提供，并处于商业研究私有预览阶段，仅供研究使用，未获临床或诊断用途批准。[^alphagenome-2]
- AlphaGenome 2 is available for non-commercial research via the AlphaGenome API and in private preview for commercial research, intended for research use only and not validated for clinical or diagnostic purposes.[^alphagenome-2]

## 相关 / Related

- 原文：[链接](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease)。 / Original: [link](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease).
- Topic: [AI 审稿与科研实践适配 / AI peer review and adapting science practice](../../topics/ai-peer-review-science-adaptation.md)
- Topic: [工具产品自建模型抢话语权 / Tool products building own models for discourse power](../../topics/tools-building-own-models.md)
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^alphagenome-2]: AlphaGenome 2: Deciphering how cells read DNA to better understand disease
