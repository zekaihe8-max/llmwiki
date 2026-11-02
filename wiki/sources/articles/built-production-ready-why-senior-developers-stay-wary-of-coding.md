---
type: Source
title: "做出来≠上生产：资深开发者为何对 Coding Agent 保持警惕"
title_en: "Built ≠ Production-Ready: Why Senior Developers Stay Wary of Coding Agents"
description: "资深开发者并非拒绝 AI 编程助手，而是担忧 agent 生成的代码能否安全、稳定地运行在生产环境并持续演进。"
description_en: "Senior developers are not rejecting AI coding assistants, but worry whether agent-generated code can run safely and stably in production and keep evolving."
resource: https://x.com/shao__meng/status/2117092563329179702
tags: [agents, coding-agents, production-readiness, continuous-delivery]
sources:
  - id: shao-meng-coding-agent-production-caution
    resource: https://x.com/shao__meng/status/2117092563329179702
    title: "Built ≠ Production-Ready: Why Senior Developers Stay Wary of Coding Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T20:18:45+08:00
---

# 做出来≠上生产：资深开发者为何对 Coding Agent 保持警惕

*Built ≠ Production-Ready: Why Senior Developers Stay Wary of Coding Agents*

帖文称，好开发者对 Coding Agent 保持警惕，核心在于「做出来」不等于「能上生产」。文中引用 Rachel Laycock 的分享指出，资深开发者的谨慎并非单纯爱写代码或担心失业，而是担心行为、边界、可演进性与失败处理等问题，且 agent 构建的系统缺乏长期生产经验。一次一周的全 agent 编码实验显示，人大多时间在白板做领域与边界设计，构建却经常变红，CI 确定性受损；DORA 2025 亦被提及，AI 采用与更高吞吐但更低交付稳定性相关。作者认为这些担忧正是新工作方式所需的警惕，而非抗拒变化。[^shao-meng-coding-agent-production-caution]

The post says good developers remain wary of coding agents because "built" does not mean "production-ready." Citing Rachel Laycock, it argues senior developers' caution is not simply about loving coding or fearing job loss, but concerns over behavior, boundaries, evolvability, and failure handling, with agent-built systems lacking long-term production experience. A one-week all-agent coding experiment showed humans spent most time whiteboarding domains and boundaries while builds frequently turned red, undermining CI certainty; DORA 2025 is also cited, linking AI adoption to higher throughput but lower delivery stability. The author frames this caution as necessary vigilance for new ways of working, not resistance to change.[^shao-meng-coding-agent-production-caution]

## 摘要 / Summary

- 帖文引用 Rachel Laycock 表示，资深开发者对 agentic development 谨慎，不能简单归因为爱写代码或怕失业，背后是对「做出来」与「安全跑起来」之间鸿沟的担忧。 / The post cites Rachel Laycock saying senior developers are cautious about agentic development, not simply due to loving coding or fearing job loss, but because of the gap between "built" and "safely running."[^shao-meng-coding-agent-production-caution]
- 欧洲区域 CTO Giles Alexander 带队做了一周实验，人不写代码全部交给 agent，约完成八成航空类应用；人约 2/3 时间在白板理清领域与边界，1/3 时间在 harness。 / Giles Alexander, Europe regional CTO, led a one-week experiment where humans wrote no code and handed everything to agents, completing about 80% of an aviation app; humans spent roughly two-thirds of time whiteboarding domains and boundaries, and one-third on the harness.[^shao-meng-coding-agent-production-caution]
- 实验中应用能跑，但构建经常红，「在我机器上能跑」问题回归，红色告警被麻木、绿色构建也无法让人安心。 / In the experiment the app could run but builds were often red, bringing back the "works on my machine" problem, numbing red alerts while green builds no longer inspire confidence.[^shao-meng-coding-agent-production-caution]
- 帖文提及 DORA 2025：AI 采用与更高吞吐相关，却与更低交付稳定性相关。 / The post cites DORA 2025: AI adoption correlates with higher throughput but lower delivery stability.[^shao-meng-coding-agent-production-caution]
- 作者认为持续交付/DevOps 需在 agent 时代重审，TDD、验收、契约与边界检查等旧实践需要重新评估，领导不应以「agent 产出多少代码」作为成功标准。 / The author says continuous delivery/DevOps should be re-examined in the agent era, old practices such as TDD, acceptance, contracts, and boundary checks need reassessment, and leaders should not use "how much code the agent produced" as a success metric.[^shao-meng-coding-agent-production-caution]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2117092563329179702)。 / Original: [link](https://x.com/shao__meng/status/2117092563329179702).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [发散任务先人审设计 / Human design gate for divergent tasks](../../topics/divergent-tasks-human-design-gate.md)

[^shao-meng-coding-agent-production-caution]: Built ≠ Production-Ready: Why Senior Developers Stay Wary of Coding Agents
