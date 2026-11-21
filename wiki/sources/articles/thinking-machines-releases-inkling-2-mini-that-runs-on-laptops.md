---
type: Source
title: "Thinking Machines 推出可在笔记本运行的 Inkling 2 Mini"
title_en: "Thinking Machines Releases Inkling 2 Mini That Runs on Laptops"
description: "Thinking Machines 开源 264 亿参数的循环 Transformer 模型，激活参数仅 34 亿，可在 16-32GB 内存设备上离线运行，AA 综合评分 20.1 与 Qwen3.8-27B 持平但成本更低。"
description_en: "Thinking Machines open-sources a 26B-parameter looped transformer with 3.4B active params, runnable on 16-32GB devices offline, scoring 20.1 on AA Index — on par with Qwen3.8-27B at a fraction of cost."
resource: https://x.com/0xLogicrw/status/2123982609189671073
tags: [open-weight, local-llm, looped-transformer, thinking-machines, benchmark]
sources:
  - id: thinking-machines-inkling-2-mini
    resource: https://x.com/0xLogicrw/status/2123982609189671073
    title: "Thinking Machines Releases Inkling 2 Mini That Runs on Laptops"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-21T20:09:35+08:00
---

# Thinking Machines 推出可在笔记本运行的 Inkling 2 Mini

*Thinking Machines Releases Inkling 2 Mini That Runs on Laptops*

帖文称 Thinking Machines 针对 Inkling 2 Small（5940 亿参数、需 500GB 显存）过大的反馈，推出 Inkling 2 Mini：总参数 264 亿、激活参数 34 亿，采用与 GPT-6 Astra 同类的循环 Transformer 架构（24 层、中间 12 层重复 3 次，相当于 48 层计算）。Artificial Analysis 综合评分 20.1 分，与 Qwen3.8-27B 持平，但评测成本约为后者 1/6、耗时 1/4。DeepSWE v1.1 编程通过率 48.2% 超过 Qwen 的 42.2%，AutomationBench-AA 办公自动化 41.8% 略低于 Qwen 的 48.2%。循环架构让模型内部完成更多推理，Thinking Machines 训练可调循环次数的研究模型发现：循环越多、越不依赖显式思维链也能解决复杂任务，但暂未发现可监控性显著下降。模型已开放完整权重（Apache 2.0），官方版约 20GB 可在 32GB Mac 离线运行，Unsloth 量化版 16GB 设备即可跑通。[^thinking-machines-inkling-2-mini]

The post says Thinking Machines responded to complaints that Inkling 2 Small (594B params, 500GB VRAM) was too large by releasing Inkling 2 Mini: 26B total / 3.4B active params, using a looped transformer architecture like GPT-6 Astra (24 layers, middle 12 repeated 3× = 48-layer compute per token). It scores 20.1 on Artificial Analysis, matching Qwen3.8-27B at ~1/6 eval cost and ~1/4 time. DeepSWE v1.1 pass@1 reaches 48.2% vs Qwen's 42.2%; AutomationBench-AA scores 41.8% vs Qwen's 48.2%. The loop architecture enables more internal reasoning; a research model with adjustable loops shows more loops solve harder tasks without explicit CoT, with no significant drop in monitorability yet. Weights are open (Apache 2.0): official ~20GB runs offline on 32GB Mac; Unsloth quantized version runs on 16GB devices.[^thinking-machines-inkling-2-mini]

## 摘要 / Summary

- Inkling 2 Mini 总参数 264 亿，激活参数 34 亿，采用 24 层循环 Transformer（中间 12 层重复 3 次），相当于每 token 48 层计算。[^thinking-machines-inkling-2-mini]
- Inkling 2 Mini has 26B total / 3.4B active params, using a 24-layer looped transformer (middle 12 layers repeated 3×) for 48-layer compute per token.[^thinking-machines-inkling-2-mini]
- Artificial Analysis 综合评分 20.1，与 Qwen3.8-27B 持平，但单项评测成本约为后者 1/6、耗时约为 1/4。[^thinking-machines-inkling-2-mini]
- AA Index score 20.1, on par with Qwen3.8-27B, but per-eval cost ~1/6 and time ~1/4 of Qwen.[^thinking-machines-inkling-2-mini]
- DeepSWE v1.1 编程任务通过率 48.2% 超过 Qwen 的 42.2%；AutomationBench-AA 办公自动化得分 41.8% 低于 Qwen 的 48.2%。[^thinking-machines-inkling-2-mini]
- DeepSWE v1.1 pass rate 48.2% beats Qwen's 42.2%; AutomationBench-AA scores 41.8% vs Qwen's 48.2%.[^thinking-machines-inkling-2-mini]
- 循环架构让模型内部完成更多推理；可调循环次数的实验显示：循环越多、越不依赖显式思维链也能解决复杂任务，暂未发现可监控性显著下降。[^thinking-machines-inkling-2-mini]
- Loops enable more internal reasoning; adjustable-loop experiments show more loops solve harder tasks without explicit CoT, with no significant monitorability drop yet.[^thinking-machines-inkling-2-mini]
- 模型采用 Apache 2.0 许可证开放权重：官方版约 20GB 可在 32GB Mac 离线运行，Unsloth 低比特量化版 16GB 内存设备即可运行。[^thinking-machines-inkling-2-mini]
- Weights open under Apache 2.0: official ~20GB runs offline on 32GB Mac; Unsloth quantized version runs on 16GB devices.[^thinking-machines-inkling-2-mini]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2123982609189671073)。 / Original: [link](https://x.com/0xLogicrw/status/2123982609189671073).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^thinking-machines-inkling-2-mini]: Thinking Machines Releases Inkling 2 Mini That Runs on Laptops
