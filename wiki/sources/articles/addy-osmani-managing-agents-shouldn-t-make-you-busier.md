---
type: Source
title: "Addy Osmani：管 Agent 不该让你更忙"
title_en: "Addy Osmani: Managing Agents Shouldn't Make You Busier"
description: "编程 Agent 让人变成管理者，但应通过自验证与明确交付条件减少人工负担，而非增加忙碌。"
description_en: "Coding agents make you a manager, but self-verification and clear delivery conditions should reduce human burden, not increase busyness."
resource: https://x.com/shao__meng/status/2119356506932125856
tags: [agents, coding-agent, management, self-verification]
sources:
  - id: addy-osmani-managing-agents
    resource: https://x.com/shao__meng/status/2119356506932125856
    title: "Addy Osmani: Managing Agents Shouldn't Make You Busier"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:07:33+08:00
---

# Addy Osmani：管 Agent 不该让你更忙

*Addy Osmani: Managing Agents Shouldn't Make You Busier*

「帖文称」使用编程 Agent 时人已在“管理”Agent：挑任务、交代背景、委派工作、验收结果。核心主张是应让 Agent 先自行检查、修正并带证据交付，而非让人充当测试系统；任务说明应补充代码看不到的业务约束与成功标准；并行上限往往是人的注意力，产品取舍与发布判断仍由人负责。[^addy-osmani-managing-agents]

The post says that using coding agents makes you a manager—picking tasks, providing context, delegating work, and accepting results. The core claim is that agents should self-check, self-correct, and deliver with evidence rather than making humans act as the test system; task briefs should add business constraints and success criteria not visible in code; the parallel limit is often human attention, and product tradeoffs and release judgments remain human responsibilities.[^addy-osmani-managing-agents]

## 摘要 / Summary

- 「帖文称」每项任务应提供可执行检查，如测试、构建、类型检查，界面改动可用截图验证；Agent 应先执行、检查、修正失败后再提交结果与证据。 / The post says every task should provide executable checks such as tests, builds, and type checks, with UI changes verifiable via screenshots; the agent should execute, check, fix failures, then submit results with evidence.[^addy-osmani-managing-agents]
- 任务说明不必重复代码已有内容，更应说明为什么做、业务约束、哪些事不要做，以及怎样才算成功。 / Task briefs need not repeat what code already contains; they should explain why, business constraints, what not to do, and what counts as success.[^addy-osmani-managing-agents]
- 重复纠错可沉淀为共享规则或技能，但规则不是越多越好，模型升级后需清理旧约束，安全要求应用强制执行机制而非仅写成指导。 / Repeated corrections can be consolidated into shared rules or skills, but more rules are not better; old constraints should be cleaned after model upgrades, and safety requirements should be enforced rather than merely guided.[^addy-osmani-managing-agents]
- 无人值守任务开始前需明确完成条件、验证方式、权限、运行上限、交付产物和审批人，新流程应先小范围试跑再扩大。 / Before unattended tasks begin, completion conditions, verification methods, permissions, run limits, deliverables, and approvers must be defined; new processes should pilot small before scaling.[^addy-osmani-managing-agents]
- 即使测试全绿，功能也未必值得做；产品取舍、安全边界与发布判断仍由人负责，成效应看交付周期、返工和回退，而非 Agent 写了多少代码。 / Even with all tests green, a feature may not be worth doing; product tradeoffs, safety boundaries, and release judgments remain human responsibilities, and effectiveness should be measured by delivery cycle, rework, and rollbacks rather than how much code the agent wrote.[^addy-osmani-managing-agents]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2119356506932125856)。 / Original: [link](https://x.com/shao__meng/status/2119356506932125856).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^addy-osmani-managing-agents]: Addy Osmani: Managing Agents Shouldn't Make You Busier
