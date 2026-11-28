---
type: Source
title: "吴恩达谈可靠 Agent：纪律化错误分析与评测驱动"
title_en: "Andrew Ng on Reliable Agents: Disciplined Error Analysis and Eval-Driven Development"
description: "帖文称，吴恩达在斯坦福 CS329Z 炉边对谈中强调，可靠 Agent 的关键是有纪律的错误分析、评测驱动开发，以及按阶段从快原型切换到黄金测试集。"
description_en: "The post says Andrew Ng, in a Stanford CS329Z fireside chat, stresses that reliable agents require disciplined error analysis, eval-driven development, and switching from fast prototypes to golden test sets by stage."
resource: https://x.com/shao__meng/status/2126495906296111586
tags: [agents, evaluation, error-analysis, ai-engineering, learning]
sources:
  - id: stanford-cs329z-reliable-agents
    resource: https://x.com/shao__meng/status/2126495906296111586
    title: "Andrew Ng on Reliable Agents: Disciplined Error Analysis and Eval-Driven Development"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:06:50+08:00
---

# 吴恩达谈可靠 Agent：纪律化错误分析与评测驱动

*Andrew Ng on Reliable Agents: Disciplined Error Analysis and Eval-Driven Development*

帖文称，在斯坦福大学 CS329Z Engineering AI Agents 的炉边对谈中，吴恩达与 Diyi Yang 讨论怎样把 Agent 工作流做可靠。吴恩达表示，做好与做不好这类工作流的团队，最大差别在于能否回到有纪律的错误分析，并以评测驱动开发。[^stanford-cs329z-reliable-agents]

The post says that in a Stanford CS329Z Engineering AI Agents fireside chat, Andrew Ng and Diyi Yang discussed how to make agent workflows reliable. Ng said the biggest difference between teams that do this well and those that do not is whether they return to disciplined error analysis and let evaluations drive development.[^stanford-cs329z-reliable-agents]

## 摘要 / Summary

- 吴恩达称，项目早期应做快速、粗糙的原型，后期应建立黄金测试集并做回归测试，难点是知道何时从快到严切换。[^stanford-cs329z-reliable-agents]
- Ng said early projects should use fast, rough prototypes, while later stages should build golden test sets and regression tests; the hard part is knowing when to switch from fast to strict.[^stanford-cs329z-reliable-agents]
- 帖文称，可验证任务与判断题的差距比多数人以为的更大；判断题没有唯一答案，但好答案和坏答案差很多，且评测更容易落在可验证任务上。[^stanford-cs329z-reliable-agents]
- The post says the gap between verifiable tasks and judgment tasks is larger than many realize; judgment tasks lack a single correct answer but good and bad answers differ greatly, and evaluations more easily land on verifiable tasks.[^stanford-cs329z-reliable-agents]
- 吴恩达援引宾夕法尼亚大学一项研究称，使用聊天机器人的学生闭卷数学或期末成绩低了 17%，并担心这种损失会在职场成年人身上累积。[^stanford-cs329z-reliable-agents]
- Ng cited a University of Pennsylvania study saying students who used chatbots scored 17% lower on closed-book math or final exams, and he worried such losses could accumulate among working adults.[^stanford-cs329z-reliable-agents]
- 吴恩达说自己几乎不再手写或逐行审代码，因为生成量太大会让人成为瓶颈；他靠严格测试、护栏和沙箱建立信任。[^stanford-cs329z-reliable-agents]
- Ng said he almost no longer writes code by hand or reviews line by line because the volume makes humans a bottleneck; he builds trust through strict tests, guardrails, and sandboxes.[^stanford-cs329z-reliable-agents]
- 帖文称，高风险、体量不大的代码仍应让人审查，但当智能体一次写出上万行时，人审可能慢十倍或一百倍并成为瓶颈。[^stanford-cs329z-reliable-agents]
- The post says high-risk, small-volume code should still be reviewed by humans, but when an agent writes tens of thousands of lines at once, human review can be ten or a hundred times slower and become a bottleneck.[^stanford-cs329z-reliable-agents]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2126495906296111586)。 / Original: [link](https://x.com/shao__meng/status/2126495906296111586).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^stanford-cs329z-reliable-agents]: Andrew Ng on Reliable Agents: Disciplined Error Analysis and Eval-Driven Development
