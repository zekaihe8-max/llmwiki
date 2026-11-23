---
type: Source
title: "介绍 MedChemBench：AI 能否帮助科学家识别有前景的药物候选物"
title_en: "Introducing MedChemBench: Can AI Help Scientists Identify Promising Drug Candidates?"
description: "OpenAI 发布 MedChemBench，通过 99 个药物化学问题评估 AI 模型读取分子结构、解读实验结果并选择化合物的能力。"
description_en: "OpenAI introduces MedChemBench, evaluating AI models on reading molecular structures, interpreting experimental results, and selecting compounds through 99 medicinal chemistry problems."
resource: https://openai.com/index/introducing-medchembench
tags: [ai, benchmark, medicinal-chemistry, research]
sources:
  - id: introducing-medchembench
    resource: https://openai.com/index/introducing-medchembench
    title: "Introducing MedChemBench: Can AI Help Scientists Identify Promising Drug Candidates?"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T08:19:05+08:00
---

# 介绍 MedChemBench：AI 能否帮助科学家识别有前景的药物候选物

*Introducing MedChemBench: Can AI Help Scientists Identify Promising Drug Candidates?*

「帖文称」OpenAI 推出 MedChemBench 基准，用于测试 AI 模型读取分子结构、解读实验结果并决定下一步测试哪些化合物的能力；该基准包含 99 个问题，来源于 117 篇论文和专利，涵盖 761 个不同分子结构。[^introducing-medchembench]

The post says OpenAI has launched MedChemBench, a benchmark testing whether AI models can read molecular structures, interpret experimental results, and decide which compounds to test next; it contains 99 problems drawn from 117 papers and patents covering 761 distinct molecular structures.[^introducing-medchembench]

## 摘要 / Summary

- MedChemBench 包含 99 个问题，来源于 117 篇论文和专利，涉及 761 个不同分子结构。[^introducing-medchembench]
- MedChemBench contains 99 problems drawn from 117 papers and patents, involving 761 distinct molecular structures.[^introducing-medchembench]
- 基准测试四个能力：分子结构重建、科学推理、化合物排名与选择、数值属性预测。[^introducing-medchembench]
- The benchmark evaluates four abilities: molecular structure reconstruction, scientific reasoning, compound ranking and selection, and numerical property prediction.[^introducing-medchembench]
- 在 xhigh 推理设置下，GPT‑6.2 Astra 获得 84.5% 可用学分，GPT‑6 Astra 为 83.3%，GPT‑5.6 Sol 为 58.2%。[^introducing-medchembench]
- At the xhigh reasoning setting, GPT‑6.2 Astra earned 84.5% of available credit, GPT‑6 Astra 83.3%, and GPT‑5.6 Sol 58.2%.[^introducing-medchembench]
- Astra 在分子结构重建上获 95.4% 学分，但在化合物选择和数值属性预测上仅获约一半学分。[^introducing-medchembench]
- Astra earned 95.4% of structure credit but only about half the credit for compound selection and numerical property prediction.[^introducing-medchembench]
- 评估中未使用工具、反馈或新实验，且无法排除模型此前接触过发表来源的可能性。[^introducing-medchembench]
- The evaluation used no tools, feedback, or new experiments, and prior model exposure to published sources cannot be ruled out.[^introducing-medchembench]

## 相关 / Related

- 原文：[链接](https://openai.com/index/introducing-medchembench)。 / Original: [link](https://openai.com/index/introducing-medchembench).
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^introducing-medchembench]: Introducing MedChemBench: Can AI Help Scientists Identify Promising Drug Candidates?
