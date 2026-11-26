---
type: Source
title: "ShellBench：面向真实世界任务的智能体基准"
title_en: "Introducing ShellBench, the benchmark for real-world tasks"
description: "OpenClaw 等机构推出 ShellBench 基准，用 100 个真实世界任务和 53,100 次运行评测 12 款模型与 5 种 Agent 框架，揭示最强智能体在日常工作中的不足。"
description_en: "OpenClaw and collaborators introduce ShellBench, evaluating 12 models and 5 agent frameworks across 100 real-world tasks and 53,100 runs, revealing gaps in today's strongest agents for everyday work."
resource: https://openclaw.ai/blog/shellbench
tags: [shellbench, agents, benchmark, ai-eval, harness]
sources:
  - id: shellbench-benchmark-real-world-tasks
    resource: https://openclaw.ai/blog/shellbench
    title: "Introducing ShellBench, the benchmark for real-world tasks"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T09:29:07+08:00
---

# ShellBench：面向真实世界任务的智能体基准

*Introducing ShellBench, the benchmark for real-world tasks*

「帖文称」ShellBench 是由 OpenClaw 基金会与 Parsewave、Hugging Face、Red Hat、UC Berkeley 等合作开发的智能体基准，基于超 1000 万条匿名真实 AI 交互设计，包含 100 个日常工作任务和 53,100 次评测运行，用于衡量模型在真实杂乱工作中的表现。[^shellbench-benchmark-real-world-tasks]

The post says ShellBench is an agent benchmark developed by the OpenClaw Foundation with Parsewave, Hugging Face, Red Hat, UC Berkeley and others, built from over 10 million anonymized real AI interactions, with 100 everyday work tasks and 53,100 evaluation runs to measure model performance in messy real-world work.[^shellbench-benchmark-real-world-tasks]

## 摘要 / Summary

- ShellBench 评测了 12 款模型和 5 种 Agent 框架，共 100 个任务、53,100 次评分运行；其中 90 个任务按 721 条评分标准（含 381 条安全标准）评分，10 个任务代码测试。[^shellbench-benchmark-real-world-tasks]
- ShellBench evaluated 12 models and 5 agent frameworks across 100 tasks and 53,100 graded runs; 90 tasks are rubric-graded against 721 criteria including 381 safety criteria, and 10 are code-tested.[^shellbench-benchmark-real-world-tasks]
- 平均成绩最高的模型仅完成约六成任务：GPT-6 Astra 62.5%、Claude Fable 5.2 61.9%、GPT-6.1 Sol 61.4%，前三名相差仅 1.1 个百分点。[^shellbench-benchmark-real-world-tasks]
- The top models completed only about six in ten tasks on average: GPT-6 Astra at 62.5%, Claude Fable 5.2 at 61.9%, and GPT-6.1 Sol at 61.4%, separated by just 1.1 percentage points.[^shellbench-benchmark-real-world-tasks]
- 在 77 个任务的 87 条引用文件标准中，许多智能体找对了餐厅却未在答案中标注支撑预算或时间的文件，导致仅 152 次尝试满足全部要求。[^shellbench-benchmark-real-world-tasks]
- Across 77 tasks, 87 criteria require naming source files; in one dinner-planning task, 522 of 531 attempts picked the right restaurant but only 152 met every requirement because many failed to cite supporting files.[^shellbench-benchmark-real-world-tasks]
- 可靠性方面，GPT-6 Astra 在三次尝试中至少成功一次的比例为 75.1%，但三次全部成功的比例仅 48.8%。[^shellbench-benchmark-real-world-tasks]
- Reliability: GPT-6 Astra succeeded at least once across three attempts on 75.1% of tasks, but succeeded on all three attempts for only 48.8%.[^shellbench-benchmark-real-world-tasks]
- 安全方面，全部 53,100 次运行中有 15.7% 至少未通过一项安全检查；即使在满足全部正确性标准的 26,151 次运行中，仍有 2,589 次（9.9%）未通过安全要求。[^shellbench-benchmark-real-world-tasks]
- Safety: 15.7% of all 53,100 runs failed at least one safety check; among 26,151 runs meeting all correctness criteria, 2,589 (9.9%) still failed a safety requirement.[^shellbench-benchmark-real-world-tasks]
- 模型选择对成绩影响大于框架选择：同一框架内最高与最低模型中位差距 45.7 个百分点，同一模型切换框架的中位差距仅 6.2 个百分点；开源框架 OpenClaw、Pi、Hermes、Codex CLI 与专有的 Claude Code 成绩接近，分布在 42.87% 至 45.23% 之间。[^shellbench-benchmark-real-world-tasks]
- Model choice matters more than harness: median gap between best and worst models within a harness is 45.7 points versus 6.2 points for switching harnesses; open-source harnesses OpenClaw, Pi, Hermes, Codex CLI and proprietary Claude Code cluster between 42.87% and 45.23%.[^shellbench-benchmark-real-world-tasks]

## 相关 / Related

- 原文：[链接](https://openclaw.ai/blog/shellbench)。 / Original: [link](https://openclaw.ai/blog/shellbench).
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^shellbench-benchmark-real-world-tasks]: Introducing ShellBench, the benchmark for real-world tasks
