---
type: Source
title: "Qwen4-Max 正式版实测：两周迭代修复长任务稳定性，3D 成功率跃升至 75%"
title_en: "Qwen4-Max Official Release Test: Two-Week Iteration Fixes Long-Task Stability, 3D Success Rate Jumps to 75%"
description: "博主用同一套题对比预览版与正式版，长报告不再截断、中文写作分数大涨、3D 场景一次打开率从三成升至七成，默认思考档位降级却更省 token。"
description_en: "The author re-ran the identical test suite against preview and official versions; long reports no longer truncate, Chinese writing scores jump, 3D scene first-open rate rises from ~30% to ~75%, while the default thinking tier drops yet token usage falls 28%."
resource: https://x.com/servasyy_ai/status/2122289929665523962
tags: [model-evaluation, long-context, 3d-generation, chinese-writing, cost-efficiency]
sources:
  - id: qwen4-max-official-two-week-eval
    resource: https://x.com/servasyy_ai/status/2122289929665523962
    title: "Qwen4-Max Official Release Test: Two-Week Iteration Fixes Long-Task Stability, 3D Success Rate Jumps to 75%"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:40:16+08:00
---

# Qwen4-Max 正式版实测：两周迭代修复长任务稳定性，3D 成功率跃升至 75%

*Qwen4-Max Official Release Test: Two-Week Iteration Fixes Long-Task Stability, 3D Success Rate Jumps to 75%*

帖文称 Qwen4-Max 正式版在两周内修复了预览版的长任务不稳定问题：2500 字长报告 6/6 全达标且 17 项指标全对；《西游记》精读 3 次全找出 11 处改动且无断尾；中文写作盲评均分从 5.7 涨至 8.7；综合基准从 93.2 升至 97.6。网页生成细节更丰富，3D 场景首次打开成功率从 ~30% 跃升至 ~75%。默认思考档位从 xhigh 降为 High，输出质量持平但耗时与 token 分别降低约 50% 与 28%，API 单价亦低于上一代。[^qwen4-max-official-two-week-eval]

The post reports that Qwen4-Max official fixed preview's long-task instability in two weeks: 6/6 long reports met length and all 17 metrics; 3/3 Journey-to-the-West close-reads found all 11 edits without truncation; Chinese writing blind-score rose from 5.7 to 8.7; comprehensive benchmark from 93.2 to 97.6. Web pages gained richer interactions; 3D first-open rate jumped from ~30% to ~75%. Default thinking tier dropped from xhigh to High with equal quality but ~50% less latency and 28% fewer tokens, while API pricing undercuts the previous generation.[^qwen4-max-official-two-week-eval]

## 摘要 / Summary

- 长报告：预览版 6 份中 3 份未达 2500 字，正式版 6 份最短 2909 字、最长 3879 字，17 个数字指标全部准确。[^qwen4-max-official-two-week-eval]
- Long reports: preview had 3/6 under 2,500 words; official 6/6 ranged 2,909–3,879 words with all 17 numeric metrics correct.[^qwen4-max-official-two-week-eval]
- 长文精读：预览版曾断尾且误报 13 处，正式版 3 次全找出 11 处改动，误报仅 1–2 处且无断尾。[^qwen4-max-official-two-week-eval]
- Close reading: preview once truncated and hallucinated 13 edits; official 3/3 found all 11 edits with only 1–2 false positives and no truncation.[^qwen4-max-official-two-week-eval]
- 中文写作盲评：分镜、口播、小红书三类题目平均分从 5.7 涨至 8.7，小红书单项从 5.5 升至 9.1，51 项硬性约束全通过。[^qwen4-max-official-two-week-eval]
- Chinese writing blind eval: storyboard, voice-over, Xiaohongshu average rose 5.7→8.7; Xiaohongshu alone 5.5→9.1; all 51 hard constraints satisfied.[^qwen4-max-official-two-week-eval]
- 3D 场景首次打开率：预览版 6 件仅 2 件可直接打开（~33%），正式版 4 件 3 件可直接打开（~75%），报错一轮即可修复。[^qwen4-max-official-two-week-eval]
- 3D first-open rate: preview 2/6 (~33%); official 3/4 (~75%); remaining errors fixed in one retry.[^qwen4-max-official-two-week-eval]
- 思考档位与成本：默认档从 xhigh 降为 High，同质量下网页任务耗时从 2–6 分钟降至 1–2 分钟，39 次测试总 token 从 82.4 万降至 59.7 万（-28%），API 单价亦低于 Qwen3.8。[^qwen4-max-official-two-week-eval]
- Thinking tier & cost: default tier xhigh→High; web tasks 2–6 min→1–2 min at same quality; 39-run token total 824k→597k (-28%); API pricing below Qwen3.8.[^qwen4-max-official-two-week-eval]
- 指令遵循：一句话需求会自加功能，给详细提示词则严格按要求实现且不丢原有功能，修改意见逐条落实并保持风格一致。[^qwen4-max-official-two-week-eval]
- Instruction following: one-liner prompts trigger feature creep; detailed prompts yield strict adherence without regression; iterative edits applied faithfully with consistent style.[^qwen4-max-official-two-week-eval]

## 相关 / Related

- 原文：[链接](https://x.com/servasyy_ai/status/2122289929665523962)。 / Original: [link](https://x.com/servasyy_ai/status/2122289929665523962).
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [哪些活已放心交给 AI / Tasks confidently handed over to AI](../../topics/tasks-confidently-handed-to-ai.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)

[^qwen4-max-official-two-week-eval]: Qwen4-Max Official Release Test: Two-Week Iteration Fixes Long-Task Stability, 3D Success Rate Jumps to 75%
