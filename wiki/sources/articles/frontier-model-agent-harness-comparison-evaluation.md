---
type: Source
title: "前沿模型 Agent Harness 对比评测"
title_en: "Frontier Model Agent Harness Comparison Evaluation"
description: "帖文称，在模型与任务固定、仅更换 Agent Harness 的条件下，对比多款编排的通过率、每解决一题成本与耗时。"
description_en: "The post reports comparing multiple agent harnesses on pass rate, cost per solved task, and time, holding the model and tasks fixed while swapping only the harness."
resource: https://github.com/garrytan/g-harness-evals
tags: [agents, harness, evaluation, ai-agents, benchmarking]
sources:
  - id: garrytan-g-harness-evals
    resource: https://github.com/garrytan/g-harness-evals
    title: "Frontier Model Agent Harness Comparison Evaluation"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:10:12+08:00
---

# 前沿模型 Agent Harness 对比评测

*Frontier Model Agent Harness Comparison Evaluation*

「帖文称」Garry Tan 的 g-harness-evals 仓库发布了对多款 AI Agent Harness 的评测，在 Opus 5.5 或 GPT-6.1 Sol 模型与 20 个公开多用户任务固定的前提下，仅更换系统提示词、工具与记忆等编排，测量通过率、每解决一题成本和时间。结果显示各 Harness 通过率在统计上难以区分，排名主要依据成本与速度；Claude Code、Codex、Hermes Agent、OpenClaw 与 QM 均并列第 1 位，但成本与耗时存在差异。文中还披露了与作者相关项目（gbrain、gstack、QM、OpenClaw）的利益关联，并提示结果为开发版本、非留出确认。[^garrytan-g-harness-evals]

The post reports Garry Tan's g-harness-evals repository evaluating multiple AI agent harnesses, holding Opus 5.5 or GPT-6.1 Sol and 20 public multi-user tasks fixed while swapping only system prompts, tools, and memory, measuring pass rate, cost per solved task, and time. It reports that harness pass rates were statistically indistinguishable, so rankings rest on cost and speed; Claude Code, Codex, Hermes Agent, OpenClaw, and QM all share rank 1 but differ in cost and duration. The post also discloses affiliations with related projects (gbrain, gstack, QM, OpenClaw) and cautions that results are dev results, not held-out confirmation.[^garrytan-g-harness-evals]

## 摘要 / Summary

- Opus 5.5 上，QM、Claude Code、Hermes Agent、OpenClaw 并列第 1，通过率区间重叠；每解决一题成本分别约 $0.19、$0.22、$0.24、$0.44，中位耗时 40.1s、40.1s、64.6s、99.4s。 / On Opus 5.5, QM, Claude Code, Hermes Agent, and OpenClaw share rank 1 with overlapping pass-rate intervals; cost per solved task is about $0.19, $0.22, $0.24, and $0.44, with median times of 40.1s, 40.1s, 64.6s, and 99.4s.[^garrytan-g-harness-evals]
- GPT-6.1 Sol 上，Codex、Hermes Agent、OpenClaw 并列第 1；Codex 成本点估计最低约 $0.17 且最快 30.1s，Hermes 为 $0.19/81.5s，OpenClaw 为 $0.22/83.6s。 / On GPT-6.1 Sol, Codex, Hermes Agent, and OpenClaw share rank 1; Codex has the lowest point estimate at about $0.17 and is fastest at 30.1s, versus Hermes at $0.19/81.5s and OpenClaw at $0.22/83.6s.[^garrytan-g-harness-evals]
- 成本差异为描述性结果，未经统计检验；QM 在默认 Docker 网桥下运行，网络未固定，其比较未经测试。 / Cost differences are descriptive with no statistical test; QM ran on the default Docker bridge with network not held fixed, so its comparisons are untested.[^garrytan-g-harness-evals]
- 规则位置实验显示，把“先查 gbrain”规则放在每轮可见位置（如 per-turn hook、系统提示词或启动文件），在 Claude Code 与 Codex 上分别达 30/30 轮遵循，无规则时仅 18/30 或 6/30（帖文称，描述性）。 / Rule-placement experiments show that placing the "check gbrain first" rule where it is visible every turn (per-turn hook, system prompt, or startup file) reached 30/30 turns followed on Claude Code and Codex, versus 18/30 or 6/30 with no rule (the post says this is descriptive).[^garrytan-g-harness-evals]
- gbrain 访问控制：单一机器人令牌下，51 次试验中有 33、20、17、9 次读取到请求者无权看到的记录；改为按成员访问规则后，四个单元均为 0/51。 / gbrain access control: with a single bot-wide token, 33, 20, 17, and 9 of 51 trials returned records the asker could not read; with per-member access rules, all four cells were 0 of 51.[^garrytan-g-harness-evals]
- 利益披露：QM 为 Y Combinator 项目；Y Combinator 是 Hermes 投资者；OpenClaw 创始人 Peter Steinberger 任职 OpenAI，且 OpenAI 为其关键资助方；作者 Garry Tan 运营 Y Combinator。 / Disclosures: QM is a Y Combinator project; Y Combinator is an investor in Hermes; OpenClaw's creator Peter Steinberger works for OpenAI, and OpenAI is its key benefactor; author Garry Tan runs Y Combinator.[^garrytan-g-harness-evals]

## 相关 / Related

- 原文：[链接](https://github.com/garrytan/g-harness-evals)。 / Original: [link](https://github.com/garrytan/g-harness-evals).
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^garrytan-g-harness-evals]: Frontier Model Agent Harness Comparison Evaluation
