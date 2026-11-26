---
type: Source
title: "Eugene Yan 拆解 12 项 AI Evals：分数之外如何判断 Agent 真能交付"
title_en: "Eugene Yan Breaks Down 12 AI Evals: Beyond Scores, How to Tell If Agents Truly Deliver"
description: "帖文称 Eugene Yan 拆解 12 项公开 AI 评估，揭示评分器误拒、幻觉与可靠性问题，主张把人工返工与追问能力纳入评估。"
description_en: "The post says Eugene Yan breaks down 12 public AI evals, revealing scorer false rejections, hallucinations, and reliability issues, and argues human rework and clarification ability should be included in evaluation."
resource: https://x.com/shao__meng/status/2125446049284472994
tags: [ai-evals, agents, benchmarking, anthropic]
sources:
  - id: shao-meng-eugene-yan-12-ai-evals
    resource: https://x.com/shao__meng/status/2125446049284472994
    title: "Eugene Yan Breaks Down 12 AI Evals: Beyond Scores, How to Tell If Agents Truly Deliver"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:38:21+08:00
---

# Eugene Yan 拆解 12 项 AI Evals：分数之外如何判断 Agent 真能交付

*Eugene Yan Breaks Down 12 AI Evals: Beyond Scores, How to Tell If Agents Truly Deliver*

「帖文称」Anthropic 团队成员 Eugene Yan 深度拆解了 12 项公开 AI Evals，覆盖编程、科学、知识工作、浏览与电脑操作，追问任务怎样构建、评分哪里失真，以及生产环境真正该测什么。文中提到 8 项评估存在评分器误拒有效成果的问题，DeepSWE v1.1 审计发现至少 23 项假阴性，Harvey 法律任务中超过 60% 通过全部评分条件的结果仍含实质性幻觉；作者还建议用 pass^k 衡量可靠性，并把人工返工、追问与真实运行框架纳入评估。[^shao-meng-eugene-yan-12-ai-evals]

The post says Anthropic team member Eugene Yan breaks down 12 public AI evals covering programming, science, knowledge work, browsing, and computer operation, asking how tasks are constructed, where scoring fails, and what production environments should really test. It mentions 8 evals have scorer false-rejection issues, DeepSWE v1.1 audit found at least 23 false negatives, and over 60% of Harvey legal-task results passing all scoring conditions still contained substantive hallucinations; the author also suggests using pass^k to measure reliability and including human rework, clarification, and real runtime frameworks in evaluation.[^shao-meng-eugene-yan-12-ai-evals]

## 摘要 / Summary

- 12 项公开评估中有 8 项存在评分器误拒有效成果的审计或问题报告。[^shao-meng-eugene-yan-12-ai-evals]
- 8 of the 12 public evals had auditor or issue reports of scorers falsely rejecting valid outputs.[^shao-meng-eugene-yan-12-ai-evals]
- Epoch AI 对 DeepSWE v1.1 审查：113 项任务中至少 23 项存在假阴性，其中 18 项涉及 Agent 测试与隐藏测试冲突。[^shao-meng-eugene-yan-12-ai-evals]
- Epoch AI's review of DeepSWE v1.1 found at least 23 false negatives among 113 tasks, 18 involving Agent tests conflicting with hidden tests.[^shao-meng-eugene-yan-12-ai-evals]
- Harvey 法律任务实验中，原本通过全部评分条件的结果里，超过 60% 仍含实质性幻觉。[^shao-meng-eugene-yan-12-ai-evals]
- In Artificial Analysis's Harvey legal-task experiment, over 60% of results passing all scoring conditions still contained substantive hallucinations.[^shao-meng-eugene-yan-12-ai-evals]
- τ-bench 推广的 pass^k 要求同一任务重复 k 次次次通过；假设每次独立且成功率 70%，五次全对仅约 17%（假设例子，非实测）。[^shao-meng-eugene-yan-12-ai-evals]
- τ-bench's pass^k requires the same task to pass every one of k repeats; with independent 70% per-run success, five consecutive passes are only about 17% (hypothetical example, not measured).[^shao-meng-eugene-yan-12-ai-evals]
- AutomationBench 分析显示，在失败案例中，模型仍宣称成功的比例达到 72%—91%。[^shao-meng-eugene-yan-12-ai-evals]
- AutomationBench analysis shows that in failure cases, models still claimed success 72%–91% of the time.[^shao-meng-eugene-yan-12-ai-evals]
- 分数受系统提示、工具、上下文压缩和重试预算影响，代表模型与运行框架的组合。[^shao-meng-eugene-yan-12-ai-evals]
- Scores are affected by system prompt, tools, context compression, and retry budget, representing the model-plus-runtime-framework combination.[^shao-meng-eugene-yan-12-ai-evals]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2125446049284472994)。 / Original: [link](https://x.com/shao__meng/status/2125446049284472994).
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)

[^shao-meng-eugene-yan-12-ai-evals]: Eugene Yan Breaks Down 12 AI Evals: Beyond Scores, How to Tell If Agents Truly Deliver
