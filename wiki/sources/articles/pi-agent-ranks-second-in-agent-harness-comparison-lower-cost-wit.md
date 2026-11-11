---
type: Source
title: "Pi Agent 在 Agent Harness 横评中暂居第二，搭配 DeepSeek 成本更低"
title_en: "Pi Agent Ranks Second in Agent Harness Comparison, Lower Cost with DeepSeek"
description: "帖文称 Pi Agent 在 21 组 Agent Harness 横评中暂居第二，搭配 DeepSeek 模型通过率更高且每题成本更低。"
description_en: "The post claims Pi Agent ranks second in 21 Agent Harness comparisons, with higher pass rate and lower cost per question when paired with DeepSeek."
resource: https://x.com/xiaomovps/status/2120427969688825909
tags: [agents, harness, evaluation, deepseek, token-efficiency]
sources:
  - id: pi-agent-frontierharness-deepseek
    resource: https://x.com/xiaomovps/status/2120427969688825909
    title: "Pi Agent Ranks Second in Agent Harness Comparison, Lower Cost with DeepSeek"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T20:03:11+08:00
---

# Pi Agent 在 Agent Harness 横评中暂居第二，搭配 DeepSeek 成本更低

*Pi Agent Ranks Second in Agent Harness Comparison, Lower Cost with DeepSeek*

帖文称，Pi Agent 在 FrontierHarness v1.1 的 21 组 Agent Harness 横评中以 72.8% 综合通过率暂居第二，仅次于 Codex CLI，超越 Claude Code 和 DeepSeek Harness 的四种模式；搭配 DeepSeek 时，Pi 的通过率达 80.3%，每成功一题成本约 0.057 美元，显著优于 DSH Minimal + DeepSeek 的 73.3% 通过率和 0.183 美元成本。作者强调模型能力与 Agent Harness 选型同样影响最终效果与使用成本，且 Pi 默认仅四个基础工具，仍保持较高准确率和 Token 效率。[^pi-agent-frontierharness-deepseek]

The post claims Pi Agent ranks second with a 72.8% comprehensive pass rate in FrontierHarness v1.1's 21 Agent Harness comparisons, behind only Codex CLI and ahead of Claude Code and four DeepSeek Harness modes. Paired with DeepSeek, Pi achieves 80.3% pass rate at about $0.057 per successful question, versus DSH Minimal + DeepSeek's 73.3% pass rate and $0.183 cost. The author argues that model capability and Agent Harness selection both affect final results and cost, and Pi's minimal four-tool default still maintains accuracy and token efficiency.[^pi-agent-frontierharness-deepseek]

## 摘要 / Summary

- 帖文称 Pi Agent 综合通过率 72.8%，在 21 组 Agent Harness 横评中暂居第二，仅次于 Codex CLI，超越 Claude Code 和 DeepSeek Harness 四种模式。[^pi-agent-frontierharness-deepseek]
- The post claims Pi Agent has a 72.8% comprehensive pass rate, ranking second among 21 Agent Harness comparisons, behind only Codex CLI and ahead of Claude Code and four DeepSeek Harness modes.[^pi-agent-frontierharness-deepseek]
- 搭配 DeepSeek 时，Pi 通过率 80.3%，每成功一题成本 0.057 美元；DSH Minimal + DeepSeek 通过率 73.3%，成本 0.183 美元。[^pi-agent-frontierharness-deepseek]
- Paired with DeepSeek, Pi's pass rate is 80.3% at $0.057 per successful question; DSH Minimal + DeepSeek is 73.3% at $0.183.[^pi-agent-frontierharness-deepseek]
- 作者称 Pi 默认仅四个基础工具，但实际任务中仍保持不错准确率和 Token 效率。[^pi-agent-frontierharness-deepseek]
- The author says Pi defaults to only four basic tools but still maintains decent accuracy and token efficiency in actual tasks.[^pi-agent-frontierharness-deepseek]
- FrontierHarness v1.1 涉及 21 个 Harness、5 个开源模型、62 个任务，测试尚未全部完成，排名可能变化。[^pi-agent-frontierharness-deepseek]
- FrontierHarness v1.1 covers 21 harnesses, 5 open-source models, and 62 tasks; testing is incomplete and rankings may change.[^pi-agent-frontierharness-deepseek]
- 引用 Guanlan Dai 的推文称，该评测在 26,040 次 Agent 运行中消耗多达 100B 个 Token。[^pi-agent-frontierharness-deepseek]
- A quoted post by Guanlan Dai says the evaluation used up to 100B tokens across 26,040 agent runs.[^pi-agent-frontierharness-deepseek]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2120427969688825909)。 / Original: [link](https://x.com/xiaomovps/status/2120427969688825909).
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^pi-agent-frontierharness-deepseek]: Pi Agent Ranks Second in Agent Harness Comparison, Lower Cost with DeepSeek
