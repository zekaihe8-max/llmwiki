---
type: Source
title: "万字拆 Agent 记忆：40+ 开源系统按写路径分 9 原型"
title_en: "10,000-Word Breakdown of Agent Memory: 40+ Open Source Systems Classified into 9 Prototypes by Write Path"
description: "帖文拆解 40 多个开源 Agent 记忆系统，按写路径归为 9 种原型，并给出对比表、踩坑清单与选型决策树。"
description_en: "The post breaks down 40+ open-source Agent memory systems, classifies them into 9 prototypes by write path, and provides comparison tables, pitfall lists, and a selection decision tree."
resource: https://x.com/heydengai/status/2117114445667442858
tags: [agents, memory, open-source, architecture]
sources:
  - id: heydengai-agent-memory-prototypes
    resource: https://x.com/heydengai/status/2117114445667442858
    title: "10,000-Word Breakdown of Agent Memory: 40+ Open Source Systems Classified into 9 Prototypes by Write Path"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T20:19:16+08:00
---

# 万字拆 Agent 记忆：40+ 开源系统按写路径分 9 原型

*10,000-Word Breakdown of Agent Memory: 40+ Open Source Systems Classified into 9 Prototypes by Write Path*

帖文称，决定 Agent 记忆好不好用的不是向量库或检索跑分，而是记忆怎么写进去、旧事实怎么作废；文章按写路径将 40 多个开源记忆项目归成 9 种设计原型，并附对比表、踩坑清单和选型决策树。[^heydengai-agent-memory-prototypes]

The post argues that what makes Agent memory usable is not the vector database or retrieval score, but how memories are written and how outdated facts are invalidated; it classifies 40+ open-source memory projects into 9 design prototypes by write path, with comparison tables, pitfall lists, and a selection decision tree.[^heydengai-agent-memory-prototypes]

## 摘要 / Summary

- 文章把长期记忆分为语义记忆、情节记忆、程序记忆三类，并指出 2026 年趋势是程序记忆从提示词优化转向技能文件。 / The article divides long-term memory into semantic, episodic, and procedural memory, and notes a 2026 trend of procedural memory shifting from prompt optimization to skill files.[^heydengai-agent-memory-prototypes]
- 写路径光谱包含门控写入、只增不改、写时合并、时序作废和 Agent 自编辑五种方式，分别对应漏记、新旧事实并存、静默丢失真相、运维成本高、依赖 Agent 判断力等失败模式。 / The write-path spectrum includes gated writes, append-only, write-time merge, temporal invalidation, and Agent self-editing, corresponding to failure modes such as missed memories, coexisting old/new facts, silent truth loss, high ops cost, and reliance on Agent judgment.[^heydengai-agent-memory-prototypes]
- 文中重点介绍了 Mem0、Hindsight、SuperMemory、Memori、Hy-Memory 2.0、Graphiti/Zep、Cognee、Letta、MemOS、EverOS 和 TencentDB Agent Memory 等项目。 / The article spotlights projects including Mem0, Hindsight, SuperMemory, Memori, Hy-Memory 2.0, Graphiti/Zep, Cognee, Letta, MemOS, EverOS, and TencentDB Agent Memory.[^heydengai-agent-memory-prototypes]
- 文章强调 Agent 记忆不等于 RAG：记忆处理对话、工具调用和行动轨迹，核心难题是冲突、时效、遗忘和隔离；RAG 处理相对静态文档，核心难题是切块、多跳和全局综述。 / The article stresses Agent memory is not RAG: memory handles conversations, tool calls, and action trajectories, with core challenges of conflict, timeliness, forgetting, and isolation; RAG handles relatively static documents, with core challenges of chunking, multi-hop, and global summarization.[^heydengai-agent-memory-prototypes]
- 多租户隔离方面，文中提到 user_id、agent_id、session_id、project_id 等维度，并称 TencentDB Agent Memory 的 private/team/restricted 三级可见性是开源项目里做得较细的之一。 / For multi-tenant isolation, the article mentions dimensions such as user_id, agent_id, session_id, and project_id, and says TencentDB Agent Memory's private/team/restricted three-level visibility is among the finer implementations in open-source projects.[^heydengai-agent-memory-prototypes]
- 文中提醒，所有基准分数均为项目方自报，不同项目用的 judge 模型、提示词和子集不同，不能横向排名；Raw-RAG 论文甚至表明原始聊天记录加稠密检索和重排在多项基准上能打赢复杂记忆系统。 / The article warns that all benchmark scores are self-reported by projects, use different judge models, prompts, and subsets, and cannot be horizontally ranked; a Raw-RAG paper even indicates that raw chat logs plus dense retrieval and reranking can beat complex memory systems on multiple benchmarks.[^heydengai-agent-memory-prototypes]

## 相关 / Related

- 原文：[链接](https://x.com/heydengai/status/2117114445667442858)。 / Original: [link](https://x.com/heydengai/status/2117114445667442858).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)
- Topic: [跨 Agent 统一资源库 / Unified cross-agent resource library](../../topics/unified-agent-resource-library.md)

[^heydengai-agent-memory-prototypes]: 10,000-Word Breakdown of Agent Memory: 40+ Open Source Systems Classified into 9 Prototypes by Write Path
