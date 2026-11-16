---
type: Source
title: "构建强大的 AI 安全评测"
title_en: "Building strong safety evaluations"
description: "Anthropic 发布博文，分享构建可靠 AI 安全评测的建议，涵盖团队技能、安全运行、设计匹配、效度与泛化等关键要点。"
description_en: "Anthropic shares recommendations for building reliable AI safety evaluations, covering team skills, safe execution, design alignment, validity, and generalization."
resource: https://www.anthropic.com/research/building-strong-safety-evaluations
tags: [ai-safety, evaluations, anthropic, research]
sources:
  - id: anthropic-building-strong-safety-evaluations
    resource: https://www.anthropic.com/research/building-strong-safety-evaluations
    title: "Building strong safety evaluations"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T08:30:34+08:00
---

# 构建强大的 AI 安全评测

*Building strong safety evaluations*

「帖文称」安全评测决定模型是否可部署、随附哪些防护措施以及下一轮安全训练应聚焦何处，但任何安全主张都只和其背后的评测一样可靠。Anthropic 借鉴心理学复制危机的改革经验，提出从组建跨学科团队、在沙箱中安全运行评测，到匹配设计问题、衡量真正构念并确保结果泛化的一系列建议。[^anthropic-building-strong-safety-evaluations]

The post states that safety evaluations decide whether a model is ready to deploy, which safeguards ship, and where safety research should focus, but any safety claim is only as sound as the eval behind it. Drawing on psychology's replication reforms, Anthropic offers recommendations spanning cross-disciplinary team building, sandboxed eval execution, design-to-question alignment, construct validity, and real-world generalization.[^anthropic-building-strong-safety-evaluations]

## 摘要 / Summary

- 安全评测衡量模型造成或助长伤害的倾向，核心问题是“给定特定输入，模型是否做了正确的事”，而非测量具体能力。[^anthropic-building-strong-safety-evaluations]
- Safety evals measure a model's propensity to cause or contribute to harm, asking whether the model did the right thing given a specific input, rather than measuring specific capabilities.[^anthropic-building-strong-safety-evaluations]
- 强安全评测需要学科专家与方法专家共同参与；缺少任一视角会导致评测要么技术严谨但不贴合危害场景，要么专业深刻但只覆盖行为子集。[^anthropic-building-strong-safety-evaluations]
- Strong safety evals require both subject-matter and methods experts; missing either perspective risks technically rigorous but irrelevant evals, or deep but narrow behavior coverage.[^anthropic-building-strong-safety-evaluations]
- 评测应在无互联网的沙箱中运行并实时监控，以便模型可能造成现实世界危害时立即停止运行。[^anthropic-building-strong-safety-evaluations]
- Evals should run in a sandbox with no internet access and real-time monitoring so a run can be stopped immediately if the model might cause real-world harm.[^anthropic-building-strong-safety-evaluations]
- 观察性设计只能比较不同模型的得分；因果主张需要同一模型在有无特定干预下对比，例如改变系统提示词是否影响安全响应。[^anthropic-building-strong-safety-evaluations]
- Observational designs compare scores across models, while causal claims require varying one variable at a time, such as testing the same model with and without a specific intervention.[^anthropic-building-strong-safety-evaluations]
- 对自杀与自伤场景，单纯拒绝往往是错误的构念；Anthropic 改用多轮适当响应率，由领域专家为每个风险区域制定评分标准。[^anthropic-building-strong-safety-evaluations]
- For suicide and self-harm, refusal is often the wrong construct; Anthropic uses multi-turn appropriate response rates graded against risk-area rubrics developed by domain experts.[^anthropic-building-strong-safety-evaluations]
- 在生物与网络安全等双重用途领域，适当响应是帮助合法请求的同时保留可能助长伤害的操作细节，且需将有害请求与良性请求在同一领域内配对测试。[^anthropic-building-strong-safety-evaluations]
- In dual-use domains such as biology and cybersecurity, appropriate responses help with the legitimate request while withholding operational specifics that enable harm, with harmful and benign prompts paired in the same domain.[^anthropic-building-strong-safety-evaluations]

## 相关 / Related

- 原文：[链接](https://www.anthropic.com/research/building-strong-safety-evaluations)。 / Original: [link](https://www.anthropic.com/research/building-strong-safety-evaluations).
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [网络能力测评越权事件的对齐评估 / Alignment assessment after cyber-eval incidents](../../topics/cyber-eval-incident-alignment.md)

[^anthropic-building-strong-safety-evaluations]: Building strong safety evaluations
