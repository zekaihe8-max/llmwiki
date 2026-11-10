---
type: Source
title: "在代码上线前捕获缺陷：JiTTesting 人机环环相扣的全规模方法"
title_en: "Catching Bugs Before They Land: JiTTesting’s Human-on-the-Loop Approach at Full Scale"
description: "Meta 利用大语言模型生成即时测试，在代码变更上线前发现严重隐私与安全缺陷，并通过人机环环相扣机制降低工程师审核负担。"
description_en: "Meta uses LLMs to generate just-in-time tests that catch serious privacy and security bugs before code lands, while reducing engineer review load through a human-on-the-loop mechanism."
resource: https://engineering.fb.com/2026/10/29/security/catching-bugs-before-they-land-jittestings-human-on-the-loop-approach-at-full-scale
tags: [meta-engineering, ai-testing, llm, security, privacy, human-on-the-loop]
sources:
  - id: catching-bugs-before-they-land-jittesting-human-
    resource: https://engineering.fb.com/2026/10/29/security/catching-bugs-before-they-land-jittestings-human-on-the-loop-approach-at-full-scale
    title: "Catching Bugs Before They Land: JiTTesting’s Human-on-the-Loop Approach at Full Scale"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:52:50+08:00
---

# 在代码上线前捕获缺陷：JiTTesting 人机环环相扣的全规模方法

*Catching Bugs Before They Land: JiTTesting’s Human-on-the-Loop Approach at Full Scale*

「帖文称」Meta 已将基于大语言模型的 Catching JiTTesting 从研究原型部署为基础设施，在代码变更上线前自动生成可执行测试以暴露行为差异。系统通过“意图感知”与“可疑代码差异”两条工作流生成候选测试，再经 LLM-as-Judge 集群与基于规则的 RubFake 评估器筛选误报，最后仅在高排名候选项上触达人类工程师。帖文称，2026 年上半年该系统在上线前拦截了 74 个严重隐私缺陷，使隐私严重事件整体发生率下降了 20%；589 名工程师参与互动，真阳性率达 60%。[^catching-bugs-before-they-land-jittesting-human-]

The post says Meta has deployed its LLM-based Catching JiTTesting from research prototype to infrastructure, automatically generating executable tests before code changes land to expose behavioral differences. The system uses “intent-aware” and “dodgy diff” workflows to generate candidate tests, then filters false positives via an LLM-as-Judge ensemble and the rule-based RubFake assessor, reaching out to human engineers only for highly ranked candidates. The post says that in the first half of 2026 the system intercepted 74 serious privacy bugs before production, reducing overall privacy SEVs by 20%; 589 engineers engaged with it, with a 60% true-positive rate.[^catching-bugs-before-they-land-jittesting-human-]

## 摘要 / Summary

- 系统在 Meta 每晚运行，针对前一天提交的被判定为“风险”代码差异生成测试，使用类似 Diff Risk Score (DRS) 的机制。 / The system runs nightly on spare capacity, targeting risky diffs submitted the previous day using a mechanism similar to Diff Risk Score (DRS).[^catching-bugs-before-they-land-jittesting-human-]
- 采用两条并行工作流：“意图感知”推断变更意图与风险并生成针对性测试；“可疑代码差异”把每个差异当作变异体，生成暴露行为差异的测试。 / Two parallel workflows: “intent-aware” infers change intent and risks to generate targeted tests; “dodgy diff” treats every diff as a mutant and generates tests exposing behavioral differences.[^catching-bugs-before-they-land-jittesting-human-]
- 弱捕获候选项先经 LLM-as-Judge 集群判断，再经基于规则的 RubFake 评估器确定性验证，两者共同排序后决定是否触达工程师。 / Weak-catch candidates are first judged by an LLM-as-Judge ensemble, then verified deterministically by the rule-based RubFake assessor; combined ranking decides whether to reach out to engineers.[^catching-bugs-before-they-land-jittesting-human-]
- 采用“人机环环相扣”而非“人在环中”：工程师设定标准并聚合层面审视结果，而非逐条监督每个输出。 / Uses “human-on-the-loop” rather than “human-in-the-loop”: engineers set criteria and review outcomes at aggregate level instead of supervising every output.[^catching-bugs-before-they-land-jittesting-human-]
- 2026 年上半年，Catching JiTTesting 在上线前拦截 74 个严重隐私缺陷，隐私严重事件整体发生率下降 20%。 / In the first half of 2026, Catching JiTTests intercepted 74 serious privacy bugs before production, lowering overall privacy SEV occurrence by 20%.[^catching-bugs-before-they-land-jittesting-human-]
- 589 名 Meta 工程师（占外联对象的 64%）参与互动，报告的真阳性率为 60%。 / 589 Meta engineers (64% of outreach) engaged with the system, reporting a 60% true-positive rate.[^catching-bugs-before-they-land-jittesting-human-]

## 相关 / Related

- 原文：[链接](https://engineering.fb.com/2026/10/29/security/catching-bugs-before-they-land-jittestings-human-on-the-loop-approach-at-full-scale)。 / Original: [link](https://engineering.fb.com/2026/10/29/security/catching-bugs-before-they-land-jittestings-human-on-the-loop-approach-at-full-scale).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^catching-bugs-before-they-land-jittesting-human-]: Catching Bugs Before They Land: JiTTesting’s Human-on-the-Loop Approach at Full Scale
