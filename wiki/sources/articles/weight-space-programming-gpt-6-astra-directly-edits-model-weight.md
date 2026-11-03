---
type: Source
title: "权重空间编程：GPT-6 Astra 直接修改模型权重，Qwen 数学能力提升约 6 倍"
title_en: "Weight-Space Programming: GPT-6 Astra Directly Edits Model Weights, Boosting Qwen Math by ~6x"
description: "MIT CSAIL 研究者提出“权重空间编程”，无需训练或梯度即可直接修改大模型权重，Qwen3.5-0.8B 数学正确率提升约 6 倍，但结果尚未独立复现。"
description_en: "MIT CSAIL researchers propose “weight-space programming,” directly editing model weights without training or gradients, boosting Qwen3.5-0.8B math accuracy by ~6x, though results remain unreproduced independently."
resource: https://x.com/dotey/status/2117408133773705525
tags: [ai, weight-space-programming, llm, open-weights]
sources:
  - id: weight-space-programming
    resource: https://x.com/dotey/status/2117408133773705525
    title: "Weight-Space Programming: GPT-6 Astra Directly Edits Model Weights, Boosting Qwen Math by ~6x"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:01:28+08:00
---

# 权重空间编程：GPT-6 Astra 直接修改模型权重，Qwen 数学能力提升约 6 倍

*Weight-Space Programming: GPT-6 Astra Directly Edits Model Weights, Boosting Qwen Math by ~6x*

「帖文称」MIT CSAIL 四位研究者 11 月 2 日发布博客，提出“在权重空间里编程”：GPT-6 Astra 无需训练或梯度，直接读取并修改 Qwen3.5-0.8B 的权重，仅改动 0.016% 的权重即使 MATH-500 数学正确率从 7.9% 提升至 48.1%，约 6 倍。文中还称 Astra 可单凭权重识别游戏网络、修改仿真小车行为，甚至从零写出打砖块网络，但目前结果均由作者自报，尚未独立复现。[^weight-space-programming]

The post says MIT CSAIL researchers introduced “weight-space programming,” where GPT-6 Astra directly reads and edits Qwen3.5-0.8B weights without training or gradients. Changing only 0.016% of weights reportedly raised MATH-500 math accuracy from 7.9% to 48.1%, about 6x. The article also claims Astra can identify game networks from weights, fix a simulated car, and write a Breakout network from scratch, but all results are self-reported and not independently reproduced.[^weight-space-programming]

## 摘要 / Summary

- 仅修改 Qwen3.5-0.8B 0.016% 的权重，MATH-500 数学正确率从 7.9% 涨到 48.1%，约 6 倍。 / Only 0.016% of Qwen3.5-0.8B weights were changed, raising MATH-500 math accuracy from 7.9% to 48.1%, about 6x.[^weight-space-programming]
- Astra 仅凭权重识别了打砖块、乒乓、吃豆人、过马路四个结构相同的游戏网络，未给游戏名或工具。 / Astra identified four structurally identical game networks—Breakout, Pong, Pacman, and Frogger—from weights alone, without game names or tools.[^weight-space-programming]
- 一辆训练 10 亿步、256 次全失败的仿真小车，Astra 看权重和一次失败录像后改动 3.5% 权重，随后 1,024 次全部成功。 / For a simulated car trained 1 billion steps with 256 total failures, Astra changed 3.5% of weights after viewing weights and one failure video, after which 1,024 attempts all succeeded.[^weight-space-programming]
- 从零写出打砖块网络，无数据、不可试玩，一次写成得分 517.4，约是训练 5 亿步的强化学习网络（25.3）的 20 倍。 / A Breakout network written from scratch with no data or playtesting scored 517.4 in one attempt, about 20x an RL network trained 500 million steps (25.3).[^weight-space-programming]
- 结果目前仅由作者自报告，尚未有独立复现；Claude 类似实验中曾因用测试集拟合而使一项结果被判无效。 / Results are currently self-reported by the authors with no independent reproduction; in Claude’s similar experiments, one result was invalidated for fitting test data.[^weight-space-programming]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2117408133773705525)。 / Original: [link](https://x.com/dotey/status/2117408133773705525).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [面向 Agent 的编程语言 / Languages for agents](../../topics/languages-for-agents.md)

[^weight-space-programming]: Weight-Space Programming: GPT-6 Astra Directly Edits Model Weights, Boosting Qwen Math by ~6x
