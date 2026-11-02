---
type: Source
title: "用不带上下文的子 Agent 回读设计文档，先修文档再写代码"
title_en: "Re-read design docs with a context-free subagent; fix the doc before coding"
description: "帖文称，在 Claude Code 写功能前应派生不 fork 的子 Agent，仅凭 design.md 复述方案，找出含糊处与未定义术语后再修改文档并写代码。"
description_en: "The post says that before coding in Claude Code, spawn a non-forked subagent to restate the plan from design.md alone, catch vague spots and undefined terms, then fix the doc and write code."
resource: https://x.com/Voxyz_ai/status/2116908120765047223
tags: [agents, design, claude-code, documentation]
sources:
  - id: 7d244ea665b085c6
    resource: https://x.com/Voxyz_ai/status/2116908120765047223
    title: "Re-read design docs with a context-free subagent; fix the doc before coding"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T08:05:45+08:00
---

# 用不带上下文的子 Agent 回读设计文档，先修文档再写代码

*Re-read design docs with a context-free subagent; fix the doc before coding*

帖文称，当你让 Claude Code 构建功能时，往往先写设计文档，但你和模型都已知晓意图，难以察觉文档哪里含糊。文中提到一家大厂的工程师会派生一个一无所知的子 Agent，只给它设计文档，让它把计划复述一遍，复述错了的地方就是文档含糊之处。帖文还提醒，Claude Code 默认开启 fork 模式，fork 出的子 Agent 会携带整段对话，因而能完美复述，让人误以为文档没问题。建议在写代码前发送一段只读提示词，要求子 Agent 用自己的话说明提议内容与现有系统、标出阻塞项、列出未定义术语与隐含设置步骤，再与已商定计划对比，不一致处先修文档。[^7d244ea665b085c6]

The post says that when Claude Code builds a feature, people usually write a design doc first, but since both you and the model already know what you mean, neither can see where the doc is vague. It describes the practice at one big tech company of spawning a subagent that has seen nothing, giving it only the doc, and having it explain the plan back; wherever it gets the plan wrong, the doc is vague. The post also warns that Claude Code has fork mode on by default, and a forked subagent carries the whole conversation, so it explains the plan perfectly and you walk away thinking the doc is fine. It recommends sending a read-only prompt before any code is written, asking the subagent to restate the proposal and the existing system in its own words, mark explainable gaps as blockers, list undefined project-specific terms and assumed setup steps, then compare with the agreed plan and fix the doc first.[^7d244ea665b085c6]

## 摘要 / Summary

- 帖文称，Claude Code 默认开启 fork 模式，子 Agent 会继承整段对话，导致它能完美复述方案，掩盖设计文档的含糊之处。 / The post says Claude Code enables fork mode by default, so a forked subagent inherits the whole conversation and can restate the plan perfectly, masking vagueness in the design doc.[^7d244ea665b085c6]
- 建议在写任何代码前，派生一个不 fork 的新子 Agent，只把 design.md 路径给它，不附任何总结，且只读不改文件。 / Before writing code, spawn a new non-forked subagent, give it only the path to design.md with no summary, and make it read-only with no file changes.[^7d244ea665b085c6]
- 让子 Agent 用自己的话写两段：一段说明文档提议什么，一段说明文档中现有系统如何工作；把解释不清的部分标记为阻塞项。 / Have the subagent write two paragraphs in its own words—what the doc proposes and how the existing system works per the doc—and mark anything it cannot explain as a blocker.[^7d244ea665b085c6]
- 子 Agent 还应列出文档未定义或未链接的项目专用术语，以及文档假设读者已知但未写下的设置步骤。 / The subagent should also list project-specific terms the doc never defines or links to, and setup steps it assumes the reader knows but never writes down.[^7d244ea665b085c6]
- 将子 Agent 的复述与已商定的计划对比，不一致处先修文档，再写代码。 / Compare the subagent's restatement with the agreed plan; fix the doc wherever they differ, then write code.[^7d244ea665b085c6]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2116908120765047223)。 / Original: [link](https://x.com/Voxyz_ai/status/2116908120765047223).
- Topic: [发散任务先人审设计 / Human design gate for divergent tasks](../../topics/divergent-tasks-human-design-gate.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)

[^7d244ea665b085c6]: Re-read design docs with a context-free subagent; fix the doc before coding
