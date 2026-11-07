---
type: Source
title: "Dreaming：记忆要能纠错"
title_en: "Dreaming: Memory Must Be Correctable"
description: "Anthropic 的“dreaming”机制让 Claude 在任务之外通过离线计算回顾经历、纠正错误并重组外部记忆，而非更新模型权重。"
description_en: "Anthropic's 'dreaming' mechanism lets Claude review experiences, correct errors, and reorganize external memory outside tasks via offline computation, without updating model weights."
resource: https://x.com/shao__meng/status/2118977740690841862
tags: [agents, memory, anthropic, wiki, context-engineering]
sources:
  - id: anthropic-dreaming-memory-correction
    resource: https://x.com/shao__meng/status/2118977740690841862
    title: "Dreaming: Memory Must Be Correctable"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-07T20:06:35+08:00
---

# Dreaming：记忆要能纠错

*Dreaming: Memory Must Be Correctable*

帖文称，Anthropic 系统分享了名为“dreaming”的机制：利用离线计算，让 Claude 在任务之外回顾经历、纠正错误、形成新记忆并重新组织知识，学习发生在外部记忆中，不是更新模型权重。帖文还提到，错误笔记一旦保存会反复影响后续行动，后台整理可重新核对会话记录并修正笔记；在内部文档实验中，wiki 配合搜索的覆盖率高于单独搜索，并能节省 token，但节省量未扣除预先建 wiki 的成本。[^anthropic-dreaming-memory-correction]

The post reports that Anthropic shared a mechanism called 'dreaming': using offline computation to let Claude review experiences, correct errors, form new memories, and reorganize knowledge outside tasks, with learning occurring in external memory rather than model weight updates. The post also says erroneous notes, once saved, can repeatedly affect later actions, and background review can re-check session records and correct notes; in an internal document experiment, wiki plus search achieved higher coverage than search alone and saved tokens, though savings did not deduct the cost of pre-building the wiki.[^anthropic-dreaming-memory-correction]

## 摘要 / Summary

- “dreaming”利用离线计算回顾经历、纠正错误、形成新记忆并重组知识，学习发生在外部记忆而非模型权重更新。 / 'Dreaming' uses offline computation to review experiences, correct errors, form new memories, and reorganize knowledge; learning occurs in external memory rather than model weight updates.[^anthropic-dreaming-memory-correction]
- 错误笔记一旦保存会反复影响后续行动，后台整理可重新核对会话记录并修正笔记。 / Erroneous notes, once saved, can repeatedly affect subsequent actions; background review can re-check session records and correct the notes.[^anthropic-dreaming-memory-correction]
- 整理后的记忆不仅回答“当时发生了什么”，还能帮助回答“下次遇到这类问题该查什么、怎么做”。 / Organized memory not only answers 'what happened then' but also helps answer 'what to check and what to do next time this type of problem arises.'[^anthropic-dreaming-memory-correction]
- 帖文称，Anthropic 内部文档实验中，单独搜索覆盖率 53%，wiki 配合搜索达 61%，每题少用约两万 token，且节省量未扣除预先建 wiki 的成本。 / The post reports that in Anthropic's internal document experiment, search alone achieved 53% coverage, while wiki plus search reached 61%, saving about 20,000 tokens per question; the savings do not deduct the cost of pre-building the wiki.[^anthropic-dreaming-memory-correction]
- 重要索引可提前加载，详细资料按需检索，以保留经验并减少无关笔记干扰。 / Important indexes can be pre-loaded while detailed materials are retrieved on demand, preserving experience and reducing interference from irrelevant notes.[^anthropic-dreaming-memory-correction]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2118977740690841862)。 / Original: [link](https://x.com/shao__meng/status/2118977740690841862).
- Topic: [LLM 维护的 wiki / LLM-maintained wiki](../../topics/llm-maintained-wiki.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [Vibe Coding 的记忆悖论 / Vibe-coding memory paradox](../../topics/vibe-coding-memory-paradox.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^anthropic-dreaming-memory-correction]: Dreaming: Memory Must Be Correctable
