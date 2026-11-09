---
type: Source
title: "Garry Tan 开源 g-harness-evals：同模型换 harness，比准确率与成本"
title_en: "Garry Tan open-sources g-harness-evals: same model, swap harness, compare accuracy and cost"
description: "帖文称 Garry Tan 开源 g-harness-evals，固定前沿模型仅更换 Agent harness，在模拟办公场景下对比 Claude Code、Codex、OpenClaw 等的准确率、成本与速度。"
description_en: "The post says Garry Tan open-sourced g-harness-evals, fixing the frontier model and only changing the agent harness to compare accuracy, cost, and speed of Claude Code, Codex, OpenClaw, and others in a simulated office scenario."
resource: https://x.com/shao__meng/status/2119715268393836956
tags: [agents, evals, harness, benchmarking, cost-comparison]
sources:
  - id: garry-tan-g-harness-evals
    resource: https://x.com/shao__meng/status/2119715268393836956
    title: "Garry Tan open-sources g-harness-evals: same model, swap harness, compare accuracy and cost"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:09:01+08:00
---

# Garry Tan 开源 g-harness-evals：同模型换 harness，比准确率与成本

*Garry Tan open-sources g-harness-evals: same model, swap harness, compare accuracy and cost*

「帖文称」Garry Tan 开源「g-harness-evals」，在同一前沿模型（Opus 5.5 或 GPT-6.1 Sol）和同一批任务下，只更换 Agent harness（系统提示、工具与记忆），比较谁更准、谁更省钱。测试基于虚构公司 Pemberline 的模拟 Slack 办公场景，主榜使用 v0.3 版本的 20 道公开开发集任务。帖文称各 harness 通过率区分不大，约在 71% 到 79% 之间，14 道题在所有组合下得分完全相同；真正拉开差距的是成本和速度，但这只是描述性数据，未做统计检验，且为开发集而非留出集结果。[^garry-tan-g-harness-evals]

The post says Garry Tan open-sourced g-harness-evals, keeping the same frontier model (Opus 5.5 or GPT-6.1 Sol) and same tasks while only swapping the agent harness (system prompts, tools, memory) to compare accuracy and cost. Testing is based on a simulated Slack office scenario for fictional company Pemberline, using 20 public dev-set tasks from v0.3. The post says harness pass rates are hard to distinguish, around 71% to 79%, with 14 questions scoring identically across all combinations; the real gap is cost and speed, but these are descriptive statistics without statistical testing, and they are dev-set rather than hold-out results.[^garry-tan-g-harness-evals]

## 摘要 / Summary

- 测试使用虚构公司 Pemberline 的模拟 Slack，Agent 担任团队机器人处理权限、审批及后续纠正；主榜用 v0.3 开发集的 20 道公开任务。 / The test uses a simulated Slack for fictional company Pemberline, with the agent acting as a team robot handling permissions, approvals, and later corrections; the leaderboard uses 20 public tasks from the v0.3 dev set.[^garry-tan-g-harness-evals]
- 模型固定为 Opus 5.5 或 GPT-6.1 Sol，只换 harness；Opus 侧比较 Claude Code、Hermes、OpenClaw 和 QM，Sol 侧比较 Codex、Hermes 和 OpenClaw。 / Models are fixed at Opus 5.5 or GPT-6.1 Sol with only the harness changed; the Opus side compares Claude Code, Hermes, OpenClaw, and QM, while the Sol side compares Codex, Hermes, and OpenClaw.[^garry-tan-g-harness-evals]
- 判分不看 Agent 自述，而是检查任务结束后的系统状态和事件日志，确认答案正确、无泄密、无越权读取；费用按计量代理标价，总花费除以通过题数得出每题平均成本，并报告耗时中位数。 / Scoring does not rely on the agent's own account but checks system state and event logs after the task to confirm correctness, no leaks, and no unauthorized access; cost is based on metered agent pricing, total spend divided by passed questions gives average cost per question, and median time is reported.[^garry-tan-g-harness-evals]
- 帖文称各 harness 通过率约在 71% 到 79% 之间，Hermes 配 Opus 点估计为 78.8%，20 道题中有 14 道在所有组合下得分完全相同，差距基本无法确认。 / The post says harness pass rates are around 71% to 79%, with Hermes on Opus estimated at 78.8%; 14 of 20 questions scored identically across all combinations, making differences basically unconfirmable.[^garry-tan-g-harness-evals]
- 在 Opus 上，OpenClaw 解出一题约 0.44 美元、耗时中位数约 99 秒，其余 harness 约 0.19 到 0.24 美元、Claude Code 和 QM 约 40 秒；在 Sol 上，Codex 约 0.17 美元、30 秒左右。 / On Opus, OpenClaw costs about $0.44 per solved question with a median time of about 99 seconds, while other harnesses cost about $0.19 to $0.24 and Claude Code and QM take about 40 seconds; on Sol, Codex costs about $0.17 and takes about 30 seconds.[^garry-tan-g-harness-evals]
- 作者称 OpenClaw 偏贵归因于提示更长、缓存写入更多；跨频道纠正任务所有 harness 都容易出错，且这是开发集而非留出集结果，部分组合未跑完或网络条件未对齐。 / The author attributes OpenClaw's higher cost to longer prompts and more cache writes; all harnesses are prone to errors on cross-channel correction tasks, and these are dev-set rather than hold-out results, with some combinations unfinished or network conditions unaligned.[^garry-tan-g-harness-evals]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2119715268393836956)。 / Original: [link](https://x.com/shao__meng/status/2119715268393836956).
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^garry-tan-g-harness-evals]: Garry Tan open-sources g-harness-evals: same model, swap harness, compare accuracy and cost
