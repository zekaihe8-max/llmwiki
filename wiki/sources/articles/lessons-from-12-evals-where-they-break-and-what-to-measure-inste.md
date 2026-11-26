---
type: Source
title: "公开评测的十二堂课：它们在哪里失效，以及应该衡量什么"
title_en: "Lessons from 12 Evals: Where They Break and What to Measure Instead"
description: "研究12个公开评测发现，评分器常误判正确作答，且多数基准衡量的是易得之事而非真正重要的能力。"
description_en: "A study of 12 public evals finds graders often fail correct work, and most benchmarks measure what is easy rather than what matters."
resource: https://eugeneyan.com/writing/public-evals
tags: [llm, eval, benchmark, agents]
sources:
  - id: 0ada1934a0788fbd
    resource: https://eugeneyan.com/writing/public-evals
    title: "Lessons from 12 Evals: Where They Break and What to Measure Instead"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T09:31:05+08:00
---

# 公开评测的十二堂课：它们在哪里失效，以及应该衡量什么

*Lessons from 12 Evals: Where They Break and What to Measure Instead*

「帖文称」在研究的12个公开评测中，有8个存在评分器本应通过却判定失败的证据；许多基准衡量的是容易考查的内容，而非可靠性、工作速度和多轮协作等真正重要的能力。[^0ada1934a0788fbd]

The post says that in eight of twelve public evals studied, there is evidence graders failed work that should have passed, and many benchmarks measure what is easy rather than reliability, work velocity, and multi-turn collaboration.[^0ada1934a0788fbd]

## 摘要 / Summary

- 评测任务通常包含四个组件：指令、环境、评分器和可选参考答案；评分器可以是确定性代码、LLM评判者或两者混合。[^0ada1934a0788fbd]
- Eval tasks typically have four components: instruction, environment, grader, and optional reference; graders can be deterministic code, LLM judges, or a mix.[^0ada1934a0788fbd]
- 多数评测采用“全通过”评分，即只有所有测试或标准都通过才算任务通过，部分工作通常不得分。[^0ada1934a0788fbd]
- Most evals use all-pass scoring, where a task passes only if every test or criterion passes; partial work usually gets no credit.[^0ada1934a0788fbd]
- 审计发现八成评测存在评分器漏判正确作答或误判错误作答的问题，如DeepSWE至少23个任务将正确解法标记为失败。[^0ada1934a0788fbd]
- Audits found grader errors in eight of twelve evals, including DeepSWE where at least 23 tasks marked correct solutions as failures.[^0ada1934a0788fbd]
- 作者主张应衡量可靠性（pass^k）而非仅平均通过率，并指出人类注意力而非token成本才是稀缺资源。[^0ada1934a0788fbd]
- The author argues to measure reliability (pass^k) beyond average pass rate, and says human attention, not token cost, is the scarce resource.[^0ada1934a0788fbd]

## 相关 / Related

- 原文：[链接](https://eugeneyan.com/writing/public-evals)。 / Original: [link](https://eugeneyan.com/writing/public-evals).
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)

[^0ada1934a0788fbd]: Lessons from 12 Evals: Where They Break and What to Measure Instead
