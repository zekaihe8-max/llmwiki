---
type: Topic
title: 软件工厂
title_en: Software factory
description: 软件工厂是有边界的 L4 交付生产系统——授权生命周期能自主走完、产出可检验证据、失败能安全兜底；各阶段有 Agent 的 Agentic SDLC 还不等于工厂，团队须自建并拥有边界与反馈；可用技能/提示拷问是否值得上工厂式基建。 交付基建还须考虑数据库状态，但相关转述未给出实现或比较验证。
description_en: A software factory is a bounded L4 delivery production system—authorized lifecycles completed with inspectable evidence and safe failure containment; agents across the SDLC are not yet a factory, and teams must build and own boundaries and feedback; skills or prompts can also grill whether factory-style infra is worth adopting. Delivery infrastructure must also account for database state, though the relayed remarks provide no implementation or comparative validation.
tags: [agents, software-factory, infrastructure, skills, l4, ownership]
sources:
  - id: mattpocock-software-factory
    resource: https://x.com/mattpocockuk/status/2113196247964074322
    title: Matt Pocock on /software-factory
  - id: shao-meng-agentic-sdlc-not-factory
    resource: https://x.com/shao__meng/status/2113923043936612792
    title: Meng Shao on Agentic SDLC ≠ software factory
  - id: financeyf5-shamgunov-ai-factory
    resource: https://x.com/FinanceYF5/status/2115997177038471255
    title: AI Will relays Nikita Shamgunov on AI software factories
generated:
  by: codex/gpt-6
  at: 2026-10-30T21:01:04+08:00
---

# 软件工厂

*Software factory*

软件工厂不是「每个 SDLC 阶段都有 Agent」，而是围绕交付的生产系统：在界定工作类上能自主走完授权生命周期、产出可检验证据，并在失败时安全兜底。务实目标是有边界的 L4，而非空想全覆盖的 L5；团队须自建并拥有边界、证据、权限与反馈。[^shao-meng-agentic-sdlc-not-factory] 在决定是否上工厂式基建时，专用的 `/software-factory` 技能或提示词可追问是否有帮助、需要什么基建。[^mattpocock-software-factory]

A software factory is not “agents in every SDLC stage,” but a production system around delivery: for defined work classes it completes authorized lifecycles with inspectable evidence and safe failure containment. The practical goal is bounded L4, not imagined full-coverage L5; teams must build and own boundaries, evidence, permissions, and feedback.[^shao-meng-agentic-sdlc-not-factory] When deciding whether to adopt factory-style infra, a dedicated `/software-factory` skill or prompt can grill whether that pattern helps and what you need to set it up.[^mattpocock-software-factory]

## 综合分析 / Synthesis

[邵萌谈 Agentic SDLC 不等于软件工厂](../sources/articles/shao-meng-agentic-sdlc-not-factory.md) 转述 Qodo 创始人 Itamar Friedman：Agentic SDLC（Agent 参与规划/实现/评审/测试，代码几乎全由 Agent 写，但仍靠人串阶段、补判断）不等于 Software Factory（输入、上下文、执行环境、验证、权限、发布、反馈一体的生产系统）。口号是 System > Agents > LLMs；更强模型不能替组织决定可接受风险。借鉴自动驾驶的自拟阶梯：L3 仍依赖人批准或救援；L4（lights-on factory）对有界变更类可完成验证、允许的发布与安全回退，不依赖及时人工介入遏制失败；L4 ≠ 无所不能，运行边界本身就是能力。迈向 L4 要工程化工作边界、可评估成功、经得起生成激励的独立验证、证据与安全回退；Ownership > Implementation——买平台可以，但架构与运营仍归工程组织。[^shao-meng-agentic-sdlc-not-factory]

[Meng Shao on Agentic SDLC ≠ software factory](../sources/articles/shao-meng-agentic-sdlc-not-factory.md) relays Qodo founder Itamar Friedman: Agentic SDLC (agents in planning, implementation, review, and test; agents may write nearly all code, but people still stitch stages and supply judgment) is not a software factory (a production system of inputs, context, execution environment, verification, permissions, release, and feedback). The slogan is System > Agents > LLMs; stronger models cannot decide acceptable risk for the organization. An autonomy-inspired ladder: L3 still needs human approval or rescue; L4 (lights-on factory) completes verification, allowed release, and safe rollback for bounded change classes without relying on timely human intervention to contain failure; L4 is not omnipotence—the operating boundary is part of the capability. Moving to L4 means engineering work boundaries, evaluable success, independent verification that survives generation incentives, evidence, and safe fallbacks; Ownership > Implementation—buying platforms is fine, but architecture and operations stay with the engineering org.[^shao-meng-agentic-sdlc-not-factory]

[Matt Pocock on /software-factory](../sources/articles/mattpocock-software-factory.md) 把 `/grill-me on how a /software-factory might help us` 当作当日提示词：判断软件工厂能否帮忙，并 brainstorm 搭建基建；背后有一份设计工厂的 glossary skill PR。[^mattpocock-software-factory] 这种追问风格与 [一次只问一个问题](./one-question-at-a-time.md) 重叠，后者讲清何时顺序式 `/grill-me` 才是合适的澄清模式。与 Itamar/邵萌的定义合在一起：先弄清「工厂」指有边界的 L4 生产系统，再用技能/提示拷问本团队是否值得建设、缺什么。

[Matt Pocock on /software-factory](../sources/articles/mattpocock-software-factory.md) offers `/grill-me on how a /software-factory might help us` as a prompt of the day: it decides whether a software factory can help and brainstorms setup infra, backed by a glossary skill PR for designing a factory.[^mattpocock-software-factory] That grilling style overlaps [One question at a time](./one-question-at-a-time.md), which covers when sequential `/grill-me` is the right clarification mode. Together with Itamar/Shao's definition: first treat “factory” as a bounded L4 production system, then use the skill/prompt to ask whether this team should build one and what is missing.

实现变便宜后的瓶颈转移，与 [智能体规模化工程](./agent-scaled-engineering.md) 同向：稀缺工作从写代码转向系统边界、验证、所有权与领域判断。

The bottleneck shift once implementation is cheap aligns with [Agent-scaled engineering](./agent-scaled-engineering.md): scarce work moves from writing code to system boundaries, verification, ownership, and domain judgment.

交付工厂还须处理软件实际运行的基础设施与状态。[AI Will 转述 Nikita Shamgunov](../sources/articles/financeyf5-shamgunov-ai-software-factory-infrastructure.md) 将从辅助生成代码到工厂式交付的转变，与 Agent 基础设施及数据库状态的难题联系起来。这补充了前述生产系统定义的运行约束：设计边界、验证和回退时，应纳入状态处理，而不能只看生成的代码。帖文未说明具体状态机制，也未证明 Agent 基础设施优于其他方案；此处是综合出的设计关注点，不是经过验证的实现配方。[^financeyf5-shamgunov-ai-factory]

The delivery factory must also address the infrastructure and state on which software actually runs. [AI Will’s account of Nikita Shamgunov](../sources/articles/financeyf5-shamgunov-ai-software-factory-infrastructure.md) connects the shift from assisted code generation to factory-style delivery with agent infrastructure and the difficulty of database state. This adds an operating constraint to the production-system definition above: boundaries, verification, and rollback should account for state handling alongside generated code. The post specifies no state mechanism and does not demonstrate that agent infrastructure outperforms alternatives; this is a synthesized design consideration, not a validated implementation recipe.[^financeyf5-shamgunov-ai-factory]

## 矛盾与变化 / Contradictions

- 较早入库的 [Matt Pocock on /software-factory](../sources/articles/mattpocock-software-factory.md) 把「软件工厂」主要当作待评估的工厂式基建与 glossary 技能；后来的 [邵萌谈 Agentic SDLC 不等于软件工厂](../sources/articles/shao-meng-agentic-sdlc-not-factory.md) 给出更硬的定义——工厂 = 有边界的 L4 生产系统，且明确区分于「各阶段有 Agent」的 Agentic SDLC。二者互补多于冲突：前者是采纳前的追问工具，后者是目标形态与所有权主张。[^mattpocock-software-factory][^shao-meng-agentic-sdlc-not-factory]
- Earlier [Matt Pocock on /software-factory](../sources/articles/mattpocock-software-factory.md) treats “software factory” mainly as factory-style infra and a glossary skill to evaluate; later [Meng Shao on Agentic SDLC ≠ software factory](../sources/articles/shao-meng-agentic-sdlc-not-factory.md) gives a harder definition—factory = bounded L4 production system, explicitly distinct from Agentic SDLC with agents in each stage. They complement more than conflict: the former is a pre-adoption grilling tool; the latter is the target shape and ownership claim.[^mattpocock-software-factory][^shao-meng-agentic-sdlc-not-factory]

AI Will 转述的未来平台方向，与邵萌转述的有边界 L4 定义并不直接冲突，但前者没有自主等级或验证标准，不能用来证明该定义已实现。[^financeyf5-shamgunov-ai-factory][^shao-meng-agentic-sdlc-not-factory]

The future platform direction relayed by AI Will does not directly conflict with the bounded L4 definition relayed by Meng Shao, but supplies no autonomy level or verification criteria and cannot establish that the definition has been realized.[^financeyf5-shamgunov-ai-factory][^shao-meng-agentic-sdlc-not-factory]

## 相关 / Related

- 来源 / Source: [AI Will 转述 AI 软件工厂基建 / AI Will on AI software factory infrastructure](../sources/articles/financeyf5-shamgunov-ai-software-factory-infrastructure.md)

- Source: [邵萌谈 Agentic SDLC 不等于软件工厂](../sources/articles/shao-meng-agentic-sdlc-not-factory.md)
- Source: [Matt Pocock on /software-factory](../sources/articles/mattpocock-software-factory.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [一次只问一个问题](./one-question-at-a-time.md)

[^mattpocock-software-factory]: Matt Pocock on /software-factory
[^shao-meng-agentic-sdlc-not-factory]: Meng Shao on Agentic SDLC ≠ software factory

[^financeyf5-shamgunov-ai-factory]: AI Will relays Nikita Shamgunov on AI software factories
