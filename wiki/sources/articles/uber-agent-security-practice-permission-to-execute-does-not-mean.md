---
type: Source
title: "Uber Agent 安全实践：有权限执行，不代表符合用户本意"
title_en: "Uber Agent Security Practice: Permission to Execute Does Not Mean It Matches User Intent"
description: "Uber Secure AI 通过上线前审查、运行时约束和持续测试，核对智能体动作是否真正源自用户请求，而非仅依赖传统权限，但未公布量化防护数据。"
description_en: "Uber Secure AI verifies whether agent actions truly originate from user requests through pre-deployment review, runtime constraints, and continuous testing, rather than relying solely on traditional permissions, without publishing quantitative protection data."
resource: https://x.com/shao__meng/status/2118936056548688090
tags: [uber, agent-security, ai-governance, prompt-injection]
sources:
  - id: 16a752f808d5b0bc
    resource: https://x.com/shao__meng/status/2118936056548688090
    title: "Uber Agent Security Practice: Permission to Execute Does Not Mean It Matches User Intent"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-07T20:08:38+08:00
---

# Uber Agent 安全实践：有权限执行，不代表符合用户本意

*Uber Agent Security Practice: Permission to Execute Does Not Mean It Matches User Intent*

帖文称，Uber 的内部安全体系 Secure AI 不只检查智能体有没有权限，还检查具体动作是否符合用户请求，把上线前审查、运行时约束和持续测试结合起来，但没有公布量化防护效果。[^16a752f808d5b0bc]

The post says Uber's internal Secure AI system checks not only whether agents have permissions, but whether specific actions match user requests, combining pre-deployment review, runtime constraints, and continuous testing, without publishing quantitative protection results.[^16a752f808d5b0bc]

## 摘要 / Summary

- Uber 通过 AI Registry 登记智能体用途、负责人、允许行为和风险等级，并用 Argus 分析代码、提示词与工具调用路径，对照申报用途和实际能力。 / Uber registers agent purpose, owner, allowed behaviors and risk levels via AI Registry, and uses Argus to analyze code, prompts and tool call paths against declared purpose and actual capability.[^16a752f808d5b0bc]
- 运行时组件 AI Guard 结合用户请求、角色、会话上下文和智能体用途作判断，并把高权限动作追溯到用户实际提出的请求，防止外部内容中的指令冒充授权。 / Runtime component AI Guard judges actions based on user request, role, session context and agent purpose, tracing high-privilege actions back to actual user requests to prevent instructions from external content impersonating authorization.[^16a752f808d5b0bc]
- 为控制延迟，Uber 使用本地小型专用模型，并行执行多项运行时检查。 / To control latency, Uber uses local small dedicated models to run multiple runtime checks in parallel.[^16a752f808d5b0bc]
- 上线后系统追踪动作、工具调用和防护判断，通过历史交互回放测试新规则，并结合红队测试调整策略；提示词和回复仅在必要时保存，并采取敏感信息处理、访问限制和到期删除措施。 / After launch, the system tracks actions, tool calls and protection judgments, tests new rules via historical interaction replay, and adjusts policies with red team testing; prompts and responses are saved only when necessary, with sensitive information handling, access limits and expiration deletion.[^16a752f808d5b0bc]
- Uber 采用先观察、不拦截的影子模式，并按不同智能体逐个校准，而不是依赖统一阈值。 / Uber adopts shadow mode—observe first without blocking—and calibrates per agent rather than relying on uniform thresholds.[^16a752f808d5b0bc]
- 帖文指出全文没有公开拦截率、误拦率或延迟数据，防护只能降低风险、提高攻击成本，对新型提示词注入的效果仍较难预测。 / The post notes no public interception rate, false positive rate or latency data; protection can only reduce risk and raise attack cost, with unpredictable effects on new prompt injection.[^16a752f808d5b0bc]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2118936056548688090)。 / Original: [link](https://x.com/shao__meng/status/2118936056548688090).
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^16a752f808d5b0bc]: Uber Agent Security Practice: Permission to Execute Does Not Mean It Matches User Intent
