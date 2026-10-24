---
type: Topic
title: 本体驱动的可观测性
title_en: Ontology-driven observability
description: 排障慢常因实体说法不一致、关系只在人脑；用本体与知识图谱把非确定性匹配收成可查询事实，再喂排障 Agent，而不是先堆看板或直接上 Agent。
description_en: Slow triage often comes from inconsistent entity names and relationships that live only in heads; an ontology and knowledge graph turn non-deterministic matches into queryable facts that feed triage agents—rather than stacking dashboards or jumping straight to Agents.
tags: [observability, ontology, knowledge-graph, rca, agents]
sources:
  - id: shao-meng-netflix-observability-ontology
    resource: https://x.com/shao__meng/status/2113925598443675835
    title: Meng Shao on Netflix observability ontology
generated:
  by: cursor-agent/composer
  at: 2026-10-24T21:01:11+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 本体驱动的可观测性

*Ontology-driven observability*

跨工具排障的瓶颈往往不是缺日志、指标、trace 或告警，而是「应用 / 服务 / 集群」等实体没有机器可读的统一约定，关系只存在人脑子里；先建本体与知识图谱，把 LLM 与模糊匹配等非确定性输出收成可查询的确定性事实，再交给 AutoRCA 一类 Agent，才能吃掉拼关系的时间。[^shao-meng-netflix-observability-ontology]

Cross-tool triage is often bottlenecked not by missing logs, metrics, traces, or alerts, but by lacking a machine-readable contract for entities like application / service / cluster, with relationships living only in people’s heads; build an ontology and knowledge graph first so non-deterministic LLM and fuzzy-match outputs become queryable facts, then feed AutoRCA-style agents to cut relationship-stitching time.[^shao-meng-netflix-observability-ontology]

## 综合分析 / Synthesis

[邵萌谈 Netflix 可观测性本体](../sources/articles/shao-meng-netflix-observability-ontology.md) 转述 Netflix 的 Ontology-driven observability 实践：Observability Ontology + RDF 图谱（QuipuDB）、类型约束与目录门控的 Application、Enricher 管线、Correlation Engine，以及以本体为共同词汇的 AutoRCA 专科 Agent 协作。[^shao-meng-netflix-observability-ontology] 帖文明确反对「多看板」或「直接上 Agent」——给 Agent 错上下文会幻觉，on-call 更危险；本质是数据建模。[^shao-meng-netflix-observability-ontology] 原帖 <https://x.com/shao__meng/status/2113925598443675835>；Netflix 原文 <https://netflixtechblog.com/ontology-driven-observability-building-an-end-to-end-knowledge-graph-at-netflix-scale-421392cf5adf>。

[Meng Shao on Netflix observability ontology](../sources/articles/shao-meng-netflix-observability-ontology.md) relays Netflix’s ontology-driven observability practice: Observability Ontology plus RDF graph (QuipuDB), type constraints and catalog-gated Application, Enricher pipelines, a Correlation Engine, and AutoRCA specialist Agents that share the ontology as vocabulary.[^shao-meng-netflix-observability-ontology] The post explicitly rejects “more dashboards” or “just Agents”—wrong context makes Agents hallucinate, worse on-call; the core is data modeling.[^shao-meng-netflix-observability-ontology] Post: <https://x.com/shao__meng/status/2113925598443675835>; Netflix original: <https://netflixtechblog.com/ontology-driven-observability-building-an-end-to-end-knowledge-graph-at-netflix-scale-421392cf5adf>.

与「先有预定义路径、再开放式 Agent」同向的主张，记在 [工作流优先于智能体](./workflows-before-agents.md)。

The claim that aligns with “predefined path before open-ended Agents” is recorded under [Workflows before agents](./workflows-before-agents.md).

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [邵萌谈 Netflix 可观测性本体](../sources/articles/shao-meng-netflix-observability-ontology.md)
- Topic: [工作流优先于智能体](./workflows-before-agents.md)

[^shao-meng-netflix-observability-ontology]: Meng Shao on Netflix observability ontology
