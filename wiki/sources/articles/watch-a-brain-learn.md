---
type: Source
title: "观察大脑如何学习"
title_en: "Watch a Brain Learn"
description: "用一个只有四个神经元的数字生物“火花”，直观展示强化学习如何通过奖励与惩罚让大脑自行重塑连接。"
description_en: "A visual explanation of reinforcement learning using a four-neuron digital creature called a spark, showing how brains rewire themselves through reward and punishment."
resource: https://aatishb.com/myriad/how-brains-learn
tags: [reinforcement-learning, neuroscience, interactive-explanation, myriad]
sources:
  - id: aatishb-watch-a-brain-learn
    resource: https://aatishb.com/myriad/how-brains-learn
    title: "Watch a Brain Learn"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:48:48+08:00
---

# 观察大脑如何学习

*Watch a Brain Learn*

本文「Watch a Brain Learn」通过一个名为“火花”的四神经元数字生物，直观演示强化学习：火花在随机布线的初始状态下，通过试错、奖励与惩罚，逐渐学会寻找光源、逃避危险或高速冲撞，文中还将此机制与婴儿鸣禽通过多巴胺反馈学习鸣叫的生物学过程作类比，并指出人类大脑虽拥有约860亿神经元和上百万亿连接，但底层学习原理相通。[^aatishb-watch-a-brain-learn]

The article "Watch a Brain Learn" visually demonstrates reinforcement learning using a four-neuron digital creature called a spark. Starting from random wiring, the spark learns to seek light, flee danger, or charge at high speed through trial, error, reward, and punishment. The piece draws parallels to baby songbirds learning songs via dopamine feedback and notes that while human brains have around 86 billion neurons and over 100 trillion connections, the underlying learning principle is the same.[^aatishb-watch-a-brain-learn]

## 摘要 / Summary

- 火花大脑仅含四个神经元（两只“眼睛”、两个控制鳍肢的神经元），其连线由三个参数决定：直连强度、交叉连接强度和驱动速度。[^aatishb-watch-a-brain-learn]
- The spark's brain has only four neurons—two eyes and two flipper-controlling neurons—with wiring determined by three parameters: straight connection strength, crossed connection strength, and drive.[^aatishb-watch-a-brain-learn]
- 学习采用1992年Ronald Williams提出的REINFORCE算法变体，每次试验随机扰动参数，若得分高于近期平均则沿扰动方向调整，否则反向调整。[^aatishb-watch-a-brain-learn]
- Learning uses a variant of the REINFORCE algorithm proposed by Ronald Williams in 1992; each trial randomly perturbs parameters, adjusting along the perturbation direction if the score beats the recent average, and in the opposite direction otherwise.[^aatishb-watch-a-brain-learn]
- 经过足够次数试验，不同初始布线的火花都能收敛到寻光行为，且学习路径并非直线，会出现挫折与回退。[^aatishb-watch-a-brain-learn]
- After enough trials, sparks with different initial wirings all converge to light-seeking behavior, and learning paths are not straight lines, involving setbacks and wrong turns.[^aatishb-watch-a-brain-learn]
- 根据奖励规则不同，同一学习机制可让火花学会寻光（Love）、逃避或冻结（Flee/Freeze），以及高速冲向光源（Fight）。[^aatishb-watch-a-brain-learn]
- Depending on the reward rule, the same learning mechanism can teach the spark to seek light (Love), flee or freeze (Flee/Freeze), and charge at the light at high speed (Fight).[^aatishb-watch-a-brain-learn]
- 文中将机制与婴儿鸣禽通过随机变换鸣叫并获得多巴胺奖励来学习成鸟歌曲的生物学过程类比，并指出人脑约有860亿神经元和超过100万亿个连接。[^aatishb-watch-a-brain-learn]
- The article analogizes the mechanism to baby songbirds learning adult songs through random variations and dopamine rewards, and notes the human brain has about 86 billion neurons and over 100 trillion connections.[^aatishb-watch-a-brain-learn]
- 该文是Myriad系列第二章，由神经科学家Arkarup Banerjee与物理出身科学记者Aatish Bhatia合作，灵感来源于神经科学家Valentino Braitenberg的工作。[^aatishb-watch-a-brain-learn]
- This is chapter two of the Myriad series, a collaboration between neuroscientist Arkarup Banerjee and physicist-turned-science-journalist Aatish Bhatia, inspired by the work of neuroscientist Valentino Braitenberg.[^aatishb-watch-a-brain-learn]

## 相关 / Related

- 原文：[链接](https://aatishb.com/myriad/how-brains-learn)。 / Original: [link](https://aatishb.com/myriad/how-brains-learn).
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)
- Topic: [实时交互世界模型 / Real-time interactive world models](../../topics/interactive-world-models.md)
- Topic: [脑机接口辅助表达 / Brain-computer interfaces for assisted speech](../../topics/brain-computer-assisted-speech.md)
- Topic: [AI 媒体内容回灌训练语料 / AI media content looping into training corpora](../../topics/ai-media-training-corpus-loop.md)

[^aatishb-watch-a-brain-learn]: Watch a Brain Learn
