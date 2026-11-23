---
type: Source
title: "Anthropic 在 Claude Academy 开设 1 小时评测入门课"
title_en: "Anthropic Launches 1-Hour Evaluation Intro Course on Claude Academy"
description: "帖文称 Anthropic 在 Claude Academy 推出免费课程「Introduction to evals」，教无评分提示词如何做离线与在线评测。"
description_en: "The post says Anthropic launched a free Claude Academy course, “Introduction to evals,” teaching how to do offline and online evaluation for prompts without scores."
resource: https://x.com/shao__meng/status/2124797332051128581
tags: [anthropic, claude, evals, ai-evaluation, course]
sources:
  - id: anthropic-claude-academy-evals-course
    resource: https://x.com/shao__meng/status/2124797332051128581
    title: "Anthropic Launches 1-Hour Evaluation Intro Course on Claude Academy"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:29:18+08:00
---

# Anthropic 在 Claude Academy 开设 1 小时评测入门课

*Anthropic Launches 1-Hour Evaluation Intro Course on Claude Academy*

帖文称，Anthropic 在官方学习站 Claude Academy 上线免费课程「Introduction to evals」，面向已有提示词但尚未配置评分的用户，课程包含 4 节正课与 1 次测验，约 1 小时，登录免费 Claude 账号可保存进度，测验达 80% 可领结业徽章。课程以虚构咨询公司 Meridian 为例，讲解如何从月度项目报告中抽取编号、进度与最大风险，并介绍上线前定门槛、改提示词，以及上线后做冒烟评测和夜间抽样的方法。[^anthropic-claude-academy-evals-course]

The post says Anthropic launched a free course, “Introduction to evals,” on its official learning site Claude Academy, aimed at users who already have prompts but no scoring. It includes four lessons and one quiz, takes about an hour, and progress can be saved with a free Claude account; a score of 80% earns a completion badge. Using a fictional consulting firm, Meridian, as an example, the course explains how to extract IDs, progress, and top risks from monthly project reports, and covers pre-launch threshold setting and prompt improvement, plus post-launch smoke testing and nightly sampling.[^anthropic-claude-academy-evals-course]

## 摘要 / Summary

- 课程名为「Introduction to evals」，约 1 小时，含 4 节正课加 1 次测验，测验达 80% 颁发结业徽章。[^anthropic-claude-academy-evals-course]
- The course “Introduction to evals” lasts about 1 hour, with 4 lessons plus 1 quiz; scoring 80% earns a completion badge.[^anthropic-claude-academy-evals-course]
- 官方建议评测集先从 20 到 50 条起步，比例接近真实流量；Meridian 示例用了 50 条（30 条常规、10 条多项目、10 条无风险部分）。[^anthropic-claude-academy-evals-course]
- Official guidance suggests starting with 20–50 eval cases in proportions close to real traffic; the Meridian example used 50 cases (30 regular, 10 multi-project, 10 with no risk section).[^anthropic-claude-academy-evals-course]
- 上线前，Meridian 以一次错答案约需 5 分钟人工复核、每月 50 份报告可消化 5 次为由，将门槛设为 90%，且三个字段全对才算任务完成。[^anthropic-claude-academy-evals-course]
- Before launch, Meridian set a 90% threshold because one wrong answer costs about 5 minutes of manual review and 50 monthly reports allow only 5 reviews; a task counts as complete only when all three fields are correct.[^anthropic-claude-academy-evals-course]
- 上线后，Meridian 从 50 条评测集中抽 10 做冒烟评测，在 Haiku 4.5 上约 1 分钟跑完，通过线为 88%，并设为拉取请求的必过检查。[^anthropic-claude-academy-evals-course]
- After launch, Meridian draws 10 cases from the 50-case set for smoke testing, which runs in about 1 minute on Haiku 4.5 with an 88% pass line, enforced as a required pull-request check.[^anthropic-claude-academy-evals-course]
- 夜间抽取 1% 到 5% 真实流量用大模型裁判打分，仅当当晚分数比近期基线低出两个标准差以上才报警。[^anthropic-claude-academy-evals-course]
- At night, 1%–5% of real traffic is sampled and scored by an LLM judge; alerts fire only when the nightly score falls more than two standard deviations below the recent baseline.[^anthropic-claude-academy-evals-course]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2124797332051128581)。 / Original: [link](https://x.com/shao__meng/status/2124797332051128581).
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^anthropic-claude-academy-evals-course]: Anthropic Launches 1-Hour Evaluation Intro Course on Claude Academy
