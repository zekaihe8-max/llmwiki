---
type: Source
title: "教 AI 构建科学模型"
title_en: "Teaching AI to build scientific models"
description: "Anthropic 客座文章介绍 AI 如何通过“建模—约束—解释”三步走，协助科学家构建并理解神经元等科学模型。"
description_en: "Anthropic guest post explains how AI helps scientists build and understand scientific models such as neuronal models through a build-constrain-interpret three-step process."
resource: https://www.anthropic.com/research/teaching-ai-to-build-scientific-models
tags: [ai-for-science, scientific-modeling, agents, simulation-based-inference]
sources:
  - id: teaching-ai-to-build-scientific-models
    resource: https://www.anthropic.com/research/teaching-ai-to-build-scientific-models
    title: "Teaching AI to build scientific models"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T08:02:23+08:00
---

# 教 AI 构建科学模型

*Teaching AI to build scientific models*

本文为 Anthropic 研究博客客座帖文，作者系 ELLIS 图宾根研究所与图宾根大学的 Jakob Macke、Daniel Gedon 和 Stefan Wahl。帖文称，AI 正在改变科学建模，并以霍奇金—赫胥勒（Hodgkin-Huxley）神经元模型为例，阐述建模、约束参数、解释模型三个步骤，以及模拟推理（SBI）和 AI 智能体如何在其中发挥作用。[^teaching-ai-to-build-scientific-models]

This Anthropic research blog guest post is by Jakob Macke, Daniel Gedon, and Stefan Wahl of ELLIS Institute Tübingen and the University of Tübingen. It argues that AI is changing scientific modeling, using the Hodgkin-Huxley neuron model to illustrate model building, parameter constraining, and interpretation, and describing how simulation-based inference and AI agents can assist.[^teaching-ai-to-build-scientific-models]

## 摘要 / Summary

- 1951 年，霍奇金与赫胥勒因剑桥大学计算机故障，用手摇机械计算器花了三周多时间求解描述乌贼神经细胞动作电位的方程。 / In 1951, Hodgkin and Huxley spent over three weeks solving equations for squid nerve cell action potentials on a hand-cranked mechanical calculator after Cambridge's computer broke down.[^teaching-ai-to-build-scientific-models]
- 文章提出科学建模的三步：建立模型、用实测数据约束参数、解释模型对真实系统的含义，并在拟合失败或解释不通时反复修订。 / The article describes three steps of scientific modeling: build the model, constrain its parameters with real measurements, and interpret what it says about the real system, revising repeatedly when fits or interpretations fail.[^teaching-ai-to-build-scientific-models]
- 模拟推理（SBI）通过反复随机采样参数、运行模拟器并训练神经网络，从观测数据反推可能的参数分布，无需直接计算似然。 / Simulation-based inference (SBI) repeatedly samples parameters, runs a simulator, and trains a neural network to infer the distribution of parameters that could produce observed data, without directly computing likelihoods.[^teaching-ai-to-build-scientific-models]
- AI 智能体可根据数据和自然语言描述提出多个候选模型，按数据支持度加权，输出可信模型分布而非单一最优解，从而揭示证据薄弱处。 / AI agents can propose multiple candidate models from data and natural-language descriptions, weight them by evidential support, and output a distribution of plausible models rather than a single best fit, revealing where evidence is thin.[^teaching-ai-to-build-scientific-models]
- SBI 已应用于神经元模型（包括霍奇金—赫胥勒模型）、中子星碰撞定位、宇宙学、结构生物学和地球物理等领域。 / SBI has been applied to neuron models including Hodgkin-Huxley, neutron star collision localization, cosmology, structural biology, and geophysics.[^teaching-ai-to-build-scientific-models]
- 霍奇金—赫胥勒模型中变量四次方的经验猜测，数十年后被解释为钾通道蛋白具有四个围绕中心孔的相同片段。 / The empirical fourth-power guess in Hodgkin-Huxley was later explained by the discovery that potassium channel proteins have four identical pieces around a central pore.[^teaching-ai-to-build-scientific-models]

## 相关 / Related

- 原文：[链接](https://www.anthropic.com/research/teaching-ai-to-build-scientific-models)。 / Original: [link](https://www.anthropic.com/research/teaching-ai-to-build-scientific-models).
- Topic: [AI 审稿与科研实践适配 / AI peer review and adapting science practice](../../topics/ai-peer-review-science-adaptation.md)
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)
- Topic: [实时交互世界模型 / Real-time interactive world models](../../topics/interactive-world-models.md)

[^teaching-ai-to-build-scientific-models]: Teaching AI to build scientific models
