---
type: Topic
title: 发散任务先人审设计
title_en: Human design gate for divergent tasks
description: 与 Agent 协作时，按任务发散强弱切换人的介入点：强发散（如界面设计）宜人先把关设计稿再实现；弱发散或已有标准化 Agent Skill 可用单提示词，人审结果；模型越弱越需事前把关。
description_en: When working with agents, shift the human checkpoint by task divergence—highly divergent work (e.g. UI design) should gate design drafts before implementation; weakly divergent or standardized Agent Skill tasks can use a single prompt with result review; weaker models need more pre-gates.
tags: [agents, design, human-gate, agent-skills, model-choice]
sources:
  - id: wquguru-divergent-tasks-human-design-gate
    resource: https://x.com/wquguru/status/2114162927926383065
    title: WquGuru on human design gates for divergent tasks
  - id: mattpocock-code-not-spec
    resource: https://x.com/mattpocockuk/status/2113264229453033684
    title: Matt Pocock on code over the spec

generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:57:43+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 发散任务先人审设计

*Human design gate for divergent tasks*

与 Agent 协作不必默认「全程只审结果」或「每步都人审」：可按任务发散强弱切换介入点——界面设计一类强发散宜人先把关设计稿再实现；弱发散或已有标准化 Agent Skill 的，单提示词常够用，人做结果审核即可；模型越弱，事前把关越必要。[^wquguru-divergent-tasks-human-design-gate]

Working with agents need not default to “result review only” or “human at every step”: shift the checkpoint by divergence—highly divergent work such as UI design should gate the design draft before implementation; weakly divergent or standardized Agent Skill tasks often need only a single prompt plus result review; weaker models make pre-gates more necessary.[^wquguru-divergent-tasks-human-design-gate]

## 综合分析 / Synthesis

[WquGuru 谈发散任务先人类把关设计](../sources/articles/wquguru-divergent-tasks-human-design-gate.md) 把协作拆成两块：发散性强（例：界面设计）→ 人先审设计稿再实现；发散性弱或已有标准化 Agent Skill → 单提示词即可，人审结果。并补模型侧：越弱越需事前把关，故推荐无脑选强模型以省心。[^wquguru-divergent-tasks-human-design-gate] 原帖 <https://x.com/wquguru/status/2114162927926383065>。

[WquGuru on human design gates for divergent tasks](../sources/articles/wquguru-divergent-tasks-human-design-gate.md) splits collaboration into two blocks: high divergence (e.g. UI design) → humans gate the design draft before implementation; low divergence or a standardized Agent Skill → a single prompt often works, humans review results. It adds a model side: weaker models need more pre-gates, so default to strong models to save hassle.[^wquguru-divergent-tasks-human-design-gate] Post: <https://x.com/wquguru/status/2114162927926383065>.

与 [一次只问一个问题](./one-question-at-a-time.md) 同属「欠规格 / 强发散时先由人收束」，但切面不同：那页是顺序式一次一问澄清方向；本页是设计稿类产物门禁后再实现。与 [Agent Skill 编写](./agent-skill-authoring.md) 相接处在于：已有标准化 Skill 被当作可退回「单提示词 + 结果审核」的条件，本页不规定 Skill 怎么写。与 [工作流优先于智能体](./workflows-before-agents.md) 同向「别默认全开放」，但本页问的是人的介入时点，不是要不要开放式 Agent。

It shares “humans first when underspecified / highly divergent” with [One question at a time](./one-question-at-a-time.md), but different cuts: that page is sequential one-question clarification of direction; this page is a design-artifact gate before implementation. It meets [Agent skill authoring](./agent-skill-authoring.md) where a standardized Skill already exists as the condition for “single prompt + result review”—this page does not prescribe how to write Skills. It aligns with [Workflows before agents](./workflows-before-agents.md) on “do not default to fully open-ended,” but asks where humans intervene, not whether to add an open-ended agent.

## 矛盾与变化 / Contradictions

[代码重于规格](./code-over-spec.md) 主张工程注意力应以运行中的代码为中心，而不是书面规格。[^mattpocock-code-not-spec] 本页所据 [WquGuru 谈发散任务先人类把关设计](../sources/articles/wquguru-divergent-tasks-human-design-gate.md) 则对界面设计一类强发散任务主张人先把关设计稿再实现。[^wquguru-divergent-tasks-human-design-gate] 切面不同——前者反对规格取代代码成为宇宙中心；后者在发散设计域把设计稿门禁放在实现之前——合在一起是「代码仍是交付中心，但强发散时设计方向宜先收束」，而不是互相取消。张力另记在 [代码重于规格](./code-over-spec.md)。

[Code over the spec](./code-over-spec.md) says engineering attention should center on running code, not the written specification.[^mattpocock-code-not-spec] This page’s source [WquGuru on human design gates for divergent tasks](../sources/articles/wquguru-divergent-tasks-human-design-gate.md) argues that for highly divergent UI design, humans should gate the design draft before implementation.[^wquguru-divergent-tasks-human-design-gate] Different cuts—the former rejects the spec replacing code as the center of the universe; the latter puts a design-draft gate before implementation in divergent design work—together mean “code remains the delivery center, but highly divergent design direction should be narrowed first,” not a cancellation. The tension is also filed under [Code over the spec](./code-over-spec.md).

## 相关 / Related

- Source: [WquGuru 谈发散任务先人类把关设计](../sources/articles/wquguru-divergent-tasks-human-design-gate.md)
- Topic: [代码重于规格](./code-over-spec.md)
- Topic: [一次只问一个问题](./one-question-at-a-time.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [工作流优先于智能体](./workflows-before-agents.md)

[^wquguru-divergent-tasks-human-design-gate]: WquGuru on human design gates for divergent tasks
[^mattpocock-code-not-spec]: Matt Pocock on code over the spec
