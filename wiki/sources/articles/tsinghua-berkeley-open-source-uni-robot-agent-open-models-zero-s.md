---
type: Source
title: "清华×伯克利开源 uni-robot-agent：开源模型零样本操作机器人"
title_en: "Tsinghua × Berkeley open-source uni-robot-agent: open models zero-shot robot operation"
description: "清华与伯克利开源的 uni-robot-agent 框架让开源模型无需仿真器真值或专门训练即可零样本操作机器人。"
description_en: "Tsinghua and Berkeley's open-source uni-robot-agent framework lets open models operate robots zero-shot without simulator ground truth or dedicated training."
resource: https://x.com/shao__meng/status/2118161321720156347
tags: [agents, robotics, open-source, embodied-ai]
sources:
  - id: uni-robot-agent
    resource: https://x.com/shao__meng/status/2118161321720156347
    title: "Tsinghua × Berkeley open-source uni-robot-agent: open models zero-shot robot operation"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-05T20:07:39+08:00
---

# 清华×伯克利开源 uni-robot-agent：开源模型零样本操作机器人

*Tsinghua × Berkeley open-source uni-robot-agent: open models zero-shot robot operation*

帖文称，清华×伯克利开源的 uni-robot-agent 是一套机器人使用智能体（RUA）统一框架，开源模型借助该框架可零样本操作机器人，无需仿真器真值、也不专门为机器人训练。在 RoboDojo 上，同一 Qwen3.8-Flash-Next 分数从 1.90 提升至 31.39；真机上 GPT-6 Astra 得 80.50 分，Qwen 得 53.50 分。[^uni-robot-agent]

The post says Tsinghua × Berkeley's open-source uni-robot-agent is a unified harness for Robot-Use Agents (RUAs), enabling open models to operate robots zero-shot without simulator ground truth or dedicated robot training. On RoboDojo, the same Qwen3.8-Flash-Next score rises from 1.90 to 31.39; on real robots, GPT-6 Astra scores 80.50 and Qwen 53.50.[^uni-robot-agent]

## 摘要 / Summary

- RoboDojo 42 个任务中，Qwen3.8-Flash-Next 用 uni-robot-agent 得 31.39 分（成功率 25.00%），加深度后为 35.89 分；DeepSeek-V4.1-Flash 得 27.11 分。 / On RoboDojo's 42 tasks, Qwen3.8-Flash-Next with uni-robot-agent scores 31.39 (25.00% success), 35.89 with depth; DeepSeek-V4.1-Flash scores 27.11.[^uni-robot-agent]
- 真机双臂机器人 19 项任务中，Astra 得 80.50 分，Qwen 得 53.50 分；两者在未见任务上均为 8/20 分。 / On 19 real dual-arm robot tasks, Astra scores 80.50 and Qwen 53.50; both score 8/20 on unseen tasks.[^uni-robot-agent]
- 框架分五层：Agent、编排、工具、服务、后端；不同机器人和环境只需写一个适配器，参数、单位和反馈格式保持一致。 / The framework has five layers: Agent, orchestration, tool, service, and backend; different robots and environments need only one adapter with consistent parameters, units, and feedback formats.[^uni-robot-agent]
- 主要实验不提供深度、CAD 模型、隐藏场景标注或联网，仅给 RGB 图像、相机标定、机器人本体状态和任务指令。 / Main experiments provide only RGB images, camera calibration, robot proprioception, and task instructions—no depth, CAD models, hidden scene annotations, or internet access.[^uni-robot-agent]
- 与通用评测相关性：ERQA 0.97，MMMU-Pro 0.93，LiveCodeBench 0.75，ScreenSpot-Pro 0.69。 / Correlations with general benchmarks: ERQA 0.97, MMMU-Pro 0.93, LiveCodeBench 0.75, ScreenSpot-Pro 0.69.[^uni-robot-agent]
- 去掉深度和标定后，Astra 降至 31.29 分，Qwen 降至 9.13 分；去掉预设技能库后 Qwen 仅从 31.39 降至 30.31 分。 / Removing depth and calibration drops Astra to 31.29 and Qwen to 9.13; removing the preset skill library drops Qwen only from 31.39 to 30.31.[^uni-robot-agent]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2118161321720156347)。 / Original: [link](https://x.com/shao__meng/status/2118161321720156347).
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^uni-robot-agent]: Tsinghua × Berkeley open-source uni-robot-agent: open models zero-shot robot operation
