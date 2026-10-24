---
type: Source
title: 邵萌谈 Agentic SDLC 不等于软件工厂
title_en: Meng Shao on Agentic SDLC ≠ software factory
description: 邵萌转述 Qodo 创始人观点：各阶段有 Agent 还不等于软件工厂；务实目标是有边界的 L4——授权生命周期能自主走完、产出可检验证据、失败能安全兜底；团队须自建并拥有边界、证据、权限与反馈。
description_en: meng shao relays the Qodo founder's view that agents across the SDLC are not yet a software factory; the practical goal is bounded L4—authorized lifecycles completed with inspectable evidence and safe failure containment—and teams must build and own the boundaries, evidence, permissions, and feedback.
resource: https://x.com/shao__meng/status/2113923043936612792
tags: [agents, software-factory, sdlc, l4, ownership, harness, shao-meng]
sources:
  - id: shao-meng-agentic-sdlc-not-factory
    resource: https://x.com/shao__meng/status/2113923043936612792
    title: Meng Shao on Agentic SDLC ≠ software factory
    author: human:shao__meng
generated:
  by: cursor-agent/composer
  at: 2026-10-24T20:58:48+08:00
date: 2026-10-24
---

# 邵萌谈 Agentic SDLC 不等于软件工厂

*Meng Shao on Agentic SDLC ≠ software factory*

[@shao__meng](https://x.com/shao__meng) 转述 [@QodoAI](https://x.com/QodoAI) 创始人 [@itamar_mar](https://x.com/itamar_mar) 的观点：各阶段都有 Agent 还不等于已有软件工厂；工厂的目标是有边界的 L4——在界定工作类上能自主走完授权生命周期、产出可检验证据，并在失败时安全兜底，而不依赖工程师每次救场。团队优势在于自建并拥有这套系统（边界、证据、权限、反馈），而非堆模型或买黑盒。[^shao-meng-agentic-sdlc-not-factory] 帖文见 <https://x.com/shao__meng/status/2113923043936612792>。

[@shao__meng](https://x.com/shao__meng) relays [@QodoAI](https://x.com/QodoAI) founder [@itamar_mar](https://x.com/itamar_mar): agents in every SDLC stage are not yet a software factory; the factory goal is bounded L4—completing authorized lifecycles for defined work classes with inspectable evidence and safe failure containment, without engineers rescuing every run. The team's edge is building and owning that system (boundaries, evidence, permissions, feedback), not stacking models or buying a black box.[^shao-meng-agentic-sdlc-not-factory] The post is at <https://x.com/shao__meng/status/2113923043936612792>.

## 摘要 / Summary

- Agentic SDLC：Agent 参与规划/实现/评审/测试等阶段，代码几乎全由 Agent 写，但仍靠人串阶段、补判断。Software Factory：围绕交付的生产系统（输入、上下文、执行环境、验证、权限、发布、反馈），问系统能否在授权范围内把一类变更走完，而不反复要人补「缺的判断」。[^shao-meng-agentic-sdlc-not-factory]
- Agentic SDLC: agents join planning, implementation, review, and test; agents may write nearly all code, but people still stitch stages and supply judgment. Software factory: a production system around delivery (inputs, context, execution environment, verification, permissions, release, feedback)—can the system finish a class of change inside authorized bounds without people repeatedly filling missing judgment?[^shao-meng-agentic-sdlc-not-factory]
- 优先级口号：System > Agents > LLMs。更强模型能改善系统，但不能替组织决定可接受风险。[^shao-meng-agentic-sdlc-not-factory]
- Priority slogan: System > Agents > LLMs. Stronger models can improve the system, but cannot decide acceptable risk for the organization.[^shao-meng-agentic-sdlc-not-factory]
- 实现变便宜后，瓶颈常在该不该改、架构约束、下游影响与对用户是否成立；工厂把「从想法到可发布、可观测、高质量软件」整条链工程化，改进一次可惠及成千上万次变更。[^shao-meng-agentic-sdlc-not-factory]
- Once implementation is cheap, bottlenecks often sit in whether to change, architecture constraints, downstream impact, and whether the change holds for users; the factory engineers the whole path from idea to releasable, observable, high-quality software so one improvement can pay off across thousands of changes.[^shao-meng-agentic-sdlc-not-factory]
- 借鉴自动驾驶自拟 L0–L5：L3 是 agentic-SDLC（限定条件下可跑交付流，人仍是必需批准或救援依赖）；L4 是 lights-on factory（对有界变更类可完成授权生命周期，含验证、允许的发布动作与安全回退，不依赖及时人工介入遏制失败）；L5 是 dark factory。L4 ≠ 无所不能；运行边界本身就是能力的一部分。[^shao-meng-agentic-sdlc-not-factory]
- An author-framed L0–L5 ladder borrowed from autonomy: L3 is agentic-SDLC (delivery can run under limits, but people remain required approvers or rescue); L4 is a lights-on factory (for bounded change classes, complete the authorized lifecycle—verification, allowed release actions, safe rollback—without relying on timely human intervention to contain failure); L5 is a dark factory. L4 is not omnipotence; the operating boundary is part of the capability.[^shao-meng-agentic-sdlc-not-factory]
- 迈向 L4 要工程化边界：界定工作与不合格标准；可评估成功（架构决策、事故史、客户承诺等须可取用）；经得起生成激励的验证（独立权威的验收，防 Agent 改考试条件；第二个 Agent 叫 reviewer ≠ 独立）；证据大于自信；安全回退。[^shao-meng-agentic-sdlc-not-factory]
- Moving toward L4 means engineering boundaries: define work and failure criteria; make success evaluable (architecture decisions, incident history, customer commitments must be reachable); verification that survives generation incentives (independent acceptance authority so agents cannot rewrite the exam; a second agent labeled reviewer is not independence); evidence over confidence; safe fallbacks.[^shao-meng-agentic-sdlc-not-factory]
- Ownership > Implementation：拥有即控制工厂产出什么、何时可接受；能诊断失败并改「产生失败的系统」。买平台可以，但架构、串联、应用逻辑与运营仍归工程组织。落地先选一类清楚的工作，用有边界的 L4 作务实目标，而非空想 L5。[^shao-meng-agentic-sdlc-not-factory]
- Ownership > Implementation: ownership means controlling what the factory produces and when it is acceptable, and diagnosing failure by changing the system that produced it. Buying platforms is fine, but architecture, wiring, application logic, and operations stay with the engineering org. Start with one clear work class and treat bounded L4 as the practical goal, not imagined L5.[^shao-meng-agentic-sdlc-not-factory]

## 相关 / Related

- Topic: [软件工厂](../../topics/software-factory.md)
- Topic: [智能体规模化工程](../../topics/agent-scaled-engineering.md)

[^shao-meng-agentic-sdlc-not-factory]: Meng Shao on Agentic SDLC ≠ software factory
