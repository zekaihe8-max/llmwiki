---
type: Source
title: 邵萌谈 DeepLearning.AI Context Engineering 新课
title_en: Meng Shao on the new DeepLearning.AI Context Engineering course
description: 邵萌介绍 DeepLearning.AI 新课：上下文工程是让复杂多步 Agent 可靠且省 token 的主线——管好看什么、怎么排、何时检索与记忆；用 Python 从零搭 harness，并以 trace 与 eval 量化改动；四模块覆盖 Context Rot、Agentic Search、剪枝/压缩/草稿本与跨会话记忆。
description_en: Meng Shao introduces DeepLearning.AI’s new course—context engineering as the main line for reliable, token-efficient multi-step agents (what the model sees, ordering, when to retrieve and remember); build a Python harness from scratch and quantify changes with traces and evals; four modules cover Context Rot, agentic search, pruning/compaction/scratchpads, and cross-session memory.
resource: https://x.com/shao__meng/status/2115627250515320947
tags: [context-engineering, deeplearning-ai, agents, harness, eval, chroma, shao-meng, context-rot]
sources:
  - id: shao-meng-deeplearning-context-engineering-course
    resource: https://x.com/shao__meng/status/2115627250515320947
    title: Meng Shao on the new DeepLearning.AI Context Engineering course
    author: human:shao__meng
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:16:00+08:00
date: 2026-10-29
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 邵萌谈 DeepLearning.AI Context Engineering 新课

*Meng Shao on the new DeepLearning.AI Context Engineering course*

[@shao__meng](https://x.com/shao__meng) 介绍 DeepLearning.AI 新推出的「Context Engineering」课程：主线不是更大上下文窗口或重写一句 prompt，而是管好给模型看什么、怎么排、何时检索与记忆，让 Agent 在复杂多步任务里更可靠、更省 token。课程用 Python 从零搭建 harness，并用 trace 与 eval 量化每次改动。[^shao-meng-deeplearning-context-engineering-course] 课程链见帖内 <https://t.co/UKFzLhFAgb>（`deeplearning.ai/courses/contex…`）；原帖 <https://x.com/shao__meng/status/2115627250515320947>。

[@shao__meng](https://x.com/shao__meng) introduces DeepLearning.AI’s new “Context Engineering” course: the main line is not a bigger context window or rewriting one prompt, but controlling what the model sees, how it is ordered, and when to retrieve and remember—so agents stay reliable and token-efficient on complex multi-step tasks. The course builds a harness from scratch in Python and uses traces and evals to quantify each change.[^shao-meng-deeplearning-context-engineering-course] Course link in post: <https://t.co/UKFzLhFAgb> (`deeplearning.ai/courses/contex…`); post: <https://x.com/shao__meng/status/2115627250515320947>.

## 摘要 / Summary

- **主讲**：Chroma CEO Jeff Huber（Chroma 已被 Replit 收购）与 CMPND CEO Drew Breunig（*Context Engineering Handbook* 作者）；Andrew Ng 与 Jeff Huber 在模块 1 对谈开场，Drew 在各模块有客座片段（约 7 / 5 / 4 / 17 分钟）。[^shao-meng-deeplearning-context-engineering-course]
- **Instructors**: Chroma CEO Jeff Huber (Chroma acquired by Replit) and CMPND CEO Drew Breunig (author of the *Context Engineering Handbook*); Andrew Ng and Jeff Huber open module 1 in conversation; Drew guest segments in each module (about 7 / 5 / 4 / 17 minutes).[^shao-meng-deeplearning-context-engineering-course]
- **动机**：Agent 跑得越久，上下文越容易塞满重复、矛盾、过时的信息；模型在长上下文上表现会变差。Jeff Huber 与 Chroma 团队把这类现象称为 **Context Rot**。更大窗口治不好，单纯改提示也治不好；要在合适时机、以合适格式放进真正相关的信息。[^shao-meng-deeplearning-context-engineering-course]
- **Why it matters**: The longer an agent runs, the easier context fills with duplicate, contradictory, or stale information; models perform worse on long context. Jeff Huber and the Chroma team call this **Context Rot**. A bigger window does not fix it; neither does tweaking the prompt alone—you fix the context itself by putting truly relevant information in at the right time and format.[^shao-meng-deeplearning-context-engineering-course]
- **三条练到的能力**：**Agentic Search**（多工具、多源取数；用 trace 改进工具选择并用评估闭环）；**Context Management**（剪枝、压缩、草稿本整理任务所需信息）；**Agentic Memory**（把用户反馈等存成可复用记忆，任务需要时取回，跨会话按变化增改）。[^shao-meng-deeplearning-context-engineering-course]
- **Three skills practiced**: **Agentic Search** (multi-tool, multi-source retrieval; traces to improve tool choice with an eval loop); **Context Management** (pruning, compaction, scratchpads to organize what the task needs); **Agentic Memory** (store user feedback and similar as reusable memory, retrieve when needed, add/update across sessions as things change).[^shao-meng-deeplearning-context-engineering-course]
- **适合谁**：做 AI Agent、希望复杂多步任务更稳、更省的人。预设中级 Python（函数与类）、熟悉 LLM 应用、工具调用与基本检索；页面建议可先刷 DeepLearning.AI 的 Agentic AI、RAG 课作热身。[^shao-meng-deeplearning-context-engineering-course]
- **Audience**: People building AI agents who want complex multi-step work steadier and cheaper in tokens. Prerequisites: intermediate Python (functions and classes), LLM apps, tool calling, and basic retrieval; the page suggests DeepLearning.AI’s Agentic AI and RAG courses as warm-up.[^shao-meng-deeplearning-context-engineering-course]
- **模块 1｜导论**：上下文由什么组成、常见失效方式、Context Rot，以及用 harness 的 hooks 与 traces 发现并预防问题；实验含上下文失效模式、拆解客服 Agent、动手塑造其上下文。[^shao-meng-deeplearning-context-engineering-course]
- **Module 1｜Introduction**: What context is made of, common failure modes, Context Rot, and using harness hooks and traces to find and prevent problems; labs cover context failure modes, dissecting a support agent, and hands-on shaping of its context.[^shao-meng-deeplearning-context-engineering-course]
- **模块 2｜Agentic Search**：以编码 Agent 为例；词法、语义、混合与结构化检索；工具描述、tool registry 按需加载；切块、代码解析、元数据改进检索，用精确率/召回率衡量；含搭建搜索系统、工具注册表等实验。[^shao-meng-deeplearning-context-engineering-course]
- **Module 2｜Agentic Search**: Coding-agent example; lexical, semantic, hybrid, and structured retrieval; tool descriptions and a tool registry for on-demand loading; chunking, code parsing, and metadata to improve retrieval, measured with precision/recall; labs include building a search system and tool registry.[^shao-meng-deeplearning-context-engineering-course]
- **模块 3｜Context Management**：以研究类 Agent 为例；先看清窗口里有什么，再练 pruning（去重、抽取、截断等 hooks）、compaction（长历史压成结构化摘要）、scratchpads（全文与任务状态挪到窗口外）；对比开关各操作前后的跑次，并做上下文管理评估。[^shao-meng-deeplearning-context-engineering-course]
- **Module 3｜Context Management**: Research-agent example; inspect what is in the window, then practice pruning (dedupe, extract, truncate hooks, etc.), compaction (compress long history into structured summaries), and scratchpads (move full text and task state outside the window); compare runs before/after toggling each technique and run context-management evals.[^shao-meng-deeplearning-context-engineering-course]
- **模块 4｜Agentic Memory**：以邮件 Agent 为例；区分事实、规则、产物等可跨会话的记忆记录；决定新信息是新增、更新还是跳过；评估记忆是否让用户少重复交代；读写记忆各有实验。[^shao-meng-deeplearning-context-engineering-course]
- **Module 4｜Agentic Memory**: Email-agent example; separate facts, rules, artifacts, and other cross-session memory records; decide whether new information is add, update, or skip; eval whether memory actually reduces repeated user explanations; separate read/write memory labs.[^shao-meng-deeplearning-context-engineering-course]
- 各模块有分级作业与可选材料；实验多为约 1 小时量级的代码练习（页面标注）。[^shao-meng-deeplearning-context-engineering-course]
- Each module has tiered assignments and optional material; labs are mostly about one hour of coding practice (as labeled on the page).[^shao-meng-deeplearning-context-engineering-course]

## 相关 / Related

- Topic: [Agent 上下文工程](../../topics/context-engineering-for-agents.md)
- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)
- Topic: [长对话默认压缩低于模型窗口](../../topics/long-conversation-default-compression.md)

[^shao-meng-deeplearning-context-engineering-course]: Meng Shao on the new DeepLearning.AI Context Engineering course
