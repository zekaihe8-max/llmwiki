---
type: Source
title: "uni-robot-agent：开源AI模型直接控制机器人的统一框架"
title_en: "uni-robot-agent: A unified framework for open-source AI models to directly control robots"
description: "清华大学和 UC Berkeley 开发的 uni-robot-agent 框架，让开源 AI 模型能直接控制机器人，并在成本、速度与任务得分上超越闭源模型。"
description_en: "Tsinghua and UC Berkeley's uni-robot-agent framework lets open-source AI models directly control robots, outperforming closed-source models on cost, speed, and task scores."
resource: https://x.com/Gorden_Sun/status/2118292548561371463
tags: [agents, robotics, open-source-ai, unified-framework]
sources:
  - id: uni-robot-agent
    resource: https://x.com/Gorden_Sun/status/2118292548561371463
    title: "uni-robot-agent: A unified framework for open-source AI models to directly control robots"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-05T20:26:28+08:00
---

# uni-robot-agent：开源AI模型直接控制机器人的统一框架

*uni-robot-agent: A unified framework for open-source AI models to directly control robots*

「帖文称」清华大学和加州大学伯克利分校的研究团队开发了 uni-robot-agent 框架，旨在让开源 AI 模型直接控制机器人，解决闭源模型调用费用高、无法自行训练，以及开源模型缺乏空间感和动作反馈导致任务失败的问题。[^uni-robot-agent]

The post claims that researchers from Tsinghua University and UC Berkeley developed uni-robot-agent, a unified framework enabling open-source AI models to directly control robots, addressing high closed-source API costs and open-source models' lack of spatial awareness and motion feedback.[^uni-robot-agent]

## 摘要 / Summary

- 框架以 Codex 和 Claude Code 作为运行环境，接入 Qwen3.8-Flash-Next、DeepSeek-V4.1-Flash 和 GPT-6 Astra 等模型，并结合 SAM3 图像分割模型与 Intel RealSense D405 深度相机。 / The framework uses Codex and Claude Code as the runtime, connects Qwen3.8-Flash-Next, DeepSeek-V4.1-Flash, and GPT-6 Astra models, and combines SAM3 image segmentation with the Intel RealSense D405 depth camera.[^uni-robot-agent]
- Qwen3.8-Flash-Next 在 RoboDojo 模拟测试中的得分从 1.90 提升到 31.39，超越闭源模型 GPT-6 Astra 在旧框架下的 28.97 分。 / Qwen3.8-Flash-Next's RoboDojo simulation score rose from 1.90 to 31.39, surpassing closed-source GPT-6 Astra's 28.97 under the old framework.[^uni-robot-agent]
- 在 19 项真实双臂机器人任务中，Qwen3.8-Flash-Next 无需专门训练即得 53.50 分，超过经过 10 小时数据微调的专用机器人模型 π0.5。 / On 19 real dual-arm robot tasks, Qwen3.8-Flash-Next scored 53.50 without dedicated training, exceeding the dedicated robot model π0.5 fine-tuned with 10 hours of data.[^uni-robot-agent]
- Qwen3.8-Flash-Next 单次任务 API 花费 1.09 美元，比 GPT-6 Astra 的 21.29 美元便宜近 95%。 / Qwen3.8-Flash-Next costs $1.09 per task via API, nearly 95% cheaper than GPT-6 Astra's $21.29.[^uni-robot-agent]
- 边动边想的流水线模式最多可将任务耗时缩短 73.7%。 / The think-while-moving pipeline mode can reduce task time by up to 73.7%.[^uni-robot-agent]
- 项目地址为 openrua.ai/uni-robot-agent，GitHub 仓库为 github.com/Open-RUA/uni-r…。 / Project site: openrua.ai/uni-robot-agent; GitHub: github.com/Open-RUA/uni-r….[^uni-robot-agent]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2118292548561371463)。 / Original: [link](https://x.com/Gorden_Sun/status/2118292548561371463).
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^uni-robot-agent]: uni-robot-agent: A unified framework for open-source AI models to directly control robots
