---
type: Topic
title: 工作流优先于智能体
title_en: Workflows before agents
description: 对已知路径优先用预定义工作流；只有在该路径不够用时，再引入开放式智能体。
description_en: Prefer a predefined workflow for a known path, and add an open-ended agent only when that path is not enough.
tags: [agents, workflows]
sources:
  - id: building-effective-agents
    resource: https://www.anthropic.com/engineering/building-effective-agents
    title: Building effective agents
  - id: karpathy-llm-wiki
    resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
    title: LLM Wiki
  - id: mihail-eric-bcherny-stanford
    resource: https://x.com/mihail_eric/status/2113277483701395508
    title: Mihail Eric on Boris Cherny at Stanford
  - id: shao-meng-bcherny-stanford
    resource: https://x.com/shao__meng/status/2113291579750551931
    title: Meng Shao on Boris Cherny at Stanford
  - id: shao-meng-netflix-observability-ontology
    resource: https://x.com/shao__meng/status/2113925598443675835
    title: Meng Shao on Netflix observability ontology
  - id: shao-meng-fold-subagents-main-loop
    resource: https://x.com/shao__meng/status/2114164780986679331
    title: Meng Shao on when to fold sub-agents into the main loop
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:05:09+08:00
---

# 工作流优先于智能体

*Workflows before agents*

Anthropic 区分路径预定义的 workflows 与模型自行选路的 agents，并主张只有在更简单的系统不够用时才引入后者。[^building-effective-agents]

Anthropic distinguishes workflows, where the path is predefined, from agents, where the model chooses the path, and says to add the latter only when a simpler system falls short.[^building-effective-agents]

## 综合分析 / Synthesis

对本 wiki 而言，归档 Source 或 Topic 是一条工作流。读文章、写或更新一页 Source、更新已覆盖相关主张的 Topic、记录矛盾，再刷新 index 与 log。页面种类是固定的。某来源触及哪个既有 Topic，是在该清单内做的判断，不是发明新页面类型或改写不可变来源的许可。

For this wiki, filing a Source or a Topic is a workflow. Read the article, write or update one Source page, update the Topic pages that already cover the claims, record any contradiction, then refresh the index and the log. The kinds of page are fixed. Which existing Topic a source touches is a judgment made inside that checklist. It is not a license to invent new page types or to rewrite an immutable source.

本页依据的文章是 [Building effective agents](../sources/articles/anthropic-building-effective-agents.md) 与 [LLM Wiki](../sources/articles/karpathy-llm-wiki.md)。编译层如何组织见 [LLM-maintained wiki](./llm-maintained-wiki.md)。

The articles this page draws on are [Building effective agents](../sources/articles/anthropic-building-effective-agents.md) and [LLM Wiki](../sources/articles/karpathy-llm-wiki.md). How the compiled layer is organized is [LLM-maintained wiki](./llm-maintained-wiki.md).

## 矛盾与变化 / Contradictions

Anthropic 那页现在注明：它在 2024 年 12 月描述的许多工具已变，并指向 Claude Managed Agents 作为当前做法。[^building-effective-agents] 这是关于工具的观点变化。该页并未因此替换 workflow 与 agent 的区分，也未替换「从最简单方案起步」的建议；两者仍写在文中。

The Anthropic page now notes that much of the tooling it described in December 2024 has changed, and it points to Claude Managed Agents for the current approach.[^building-effective-agents] That is a viewpoint change about tools. On that page it does not replace the workflow-versus-agent distinction or the advice to start with the simplest solution. Both are still stated in the article.

Karpathy 的 gist 是另一处张力。他希望 LLM 拥有 wiki 维护，包括人类跟不上的簿记，并预期一个来源会触及许多页面。[^karpathy-llm-wiki] Anthropic 会把无界版本称作 agent，成本更高、错误会叠加，并会先问固定步骤是否够用。[^building-effective-agents] 本站 schema 是更窄的工作流：智能体可更新 wiki 页，不可改动不可变 raw 文件，也不可为已有 Topic 的想法再开第二页。

Karpathy's gist is the other tension. He wants the LLM to own wiki maintenance, including bookkeeping a human will not keep up with, and he expects one source to touch many pages.[^karpathy-llm-wiki] Anthropic would call an unbounded version of that an agent, with higher cost and compounding errors, and would ask first whether a fixed sequence of steps is enough.[^building-effective-agents] The schema for this site is the narrower workflow. The agent may update wiki pages, and it may not mutate immutable raw files or open a second Topic for an idea that already has one.

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) 与 [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) 再加第三处张力：Cherny 描述可跑数天或数周、并衍生大量智能体的写作循环，手写代码正走向打孔卡的命运。[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] 这是开放式智能体立场。Anthropic 的指引仍要求在加入这类循环前，先问预定义工作流是否够用。[^building-effective-agents] Cherny 在智能体已写代码时推荐的做法，归档在 [Agent-scaled engineering](./agent-scaled-engineering.md)。

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) and [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) add a third tension: Cherny describes writing loops that run for days or weeks and spawn many agents, with hand-typed code heading where punch cards went.[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] That is an open-ended agent stance. Anthropic's guidance still asks whether a predefined workflow is enough before adding that kind of loop.[^building-effective-agents] The practices Cherny recommends when agents already write the code are filed under [Agent-scaled engineering](./agent-scaled-engineering.md).

[邵萌谈 Netflix 可观测性本体](../sources/articles/shao-meng-netflix-observability-ontology.md) 从运维侧补强「先建模、再 Agent」：排障慢常因实体说法不一致，给 Agent 错上下文会幻觉；应先建本体与知识图谱，再喂 AutoRCA。[^shao-meng-netflix-observability-ontology] 主张归档在 [本体驱动的可观测性](./ontology-driven-observability.md)。

[Meng Shao on Netflix observability ontology](../sources/articles/shao-meng-netflix-observability-ontology.md) reinforces “model first, then Agents” from ops: slow triage often comes from inconsistent entity names, and wrong Agent context hallucinates; build an ontology and knowledge graph before feeding AutoRCA.[^shao-meng-netflix-observability-ontology] That claim is filed under [Ontology-driven observability](./ontology-driven-observability.md).

[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md) 把同一「从最简可工作形态起步」推进到 Agent 内部：默认主循环 + Skills/工具渐进披露，而不是按组织架构堆子 Agent 与编排。[^shao-meng-fold-subagents-main-loop] 切面不同——本页问要不要开放式 Agent，那页问已有 Agent 时要不要按团队拆子 Agent——主张归档在 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)。

[Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md) pushes the same “start from the simplest working shape” into the Agent interior: default to a main loop plus Skills/tool progressive disclosure, not org-chart sub-agents and orchestrators.[^shao-meng-fold-subagents-main-loop] Different cut—this page asks whether to add an open-ended agent at all; that page asks whether, once you have an agent, to split by team into sub-agents—filed under [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md).

## 相关 / Related

- 来源：[Building effective agents](../sources/articles/anthropic-building-effective-agents.md)
- 来源：[LLM Wiki](../sources/articles/karpathy-llm-wiki.md)
- 来源：[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- 来源：[Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- 来源：[邵萌谈 Netflix 可观测性本体](../sources/articles/shao-meng-netflix-observability-ontology.md)
- 来源：[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md)
- 主题：[LLM-maintained wiki](./llm-maintained-wiki.md)
- 主题：[Agent-scaled engineering](./agent-scaled-engineering.md)
- 主题：[本体驱动的可观测性](./ontology-driven-observability.md)
- 主题：[把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)

- Source: [Building effective agents](../sources/articles/anthropic-building-effective-agents.md)
- Source: [LLM Wiki](../sources/articles/karpathy-llm-wiki.md)
- Source: [Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- Source: [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- Source: [Meng Shao on Netflix observability ontology](../sources/articles/shao-meng-netflix-observability-ontology.md)
- Source: [Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md)
- Topic: [LLM-maintained wiki](./llm-maintained-wiki.md)
- Topic: [Agent-scaled engineering](./agent-scaled-engineering.md)
- Topic: [Ontology-driven observability](./ontology-driven-observability.md)
- Topic: [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md)

[^building-effective-agents]: Building effective agents
[^karpathy-llm-wiki]: LLM Wiki
[^mihail-eric-bcherny-stanford]: Mihail Eric on Boris Cherny at Stanford
[^shao-meng-bcherny-stanford]: Meng Shao on Boris Cherny at Stanford
[^shao-meng-netflix-observability-ontology]: Meng Shao on Netflix observability ontology
[^shao-meng-fold-subagents-main-loop]: Meng Shao on when to fold sub-agents into the main loop
