---
type: Source
title: "AI 购物智能体的选择为何复杂且依赖上下文"
title_en: "Agentic Shopping is Complicated and Contingent"
description: "沃顿商学院 GAIL 技术报告发现，AI 购物代理的购买选择更多取决于先接触的评论、顺序和记忆等上下文，而非商品本身。"
description_en: "A Wharton GAIL technical report finds AI shopping agent purchases depend more on prior context such as reviews, order, and memory than on the products themselves."
resource: https://gail.wharton.upenn.edu/research-and-insights/technical-report-agentic-shopping
tags: [agents, shopping, context, ai-agents]
sources:
  - id: agentic-shopping-complicated-contingent
    resource: https://gail.wharton.upenn.edu/research-and-insights/technical-report-agentic-shopping
    title: "Agentic Shopping is Complicated and Contingent"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:29:30+08:00
---

# AI 购物智能体的选择为何复杂且依赖上下文

*Agentic Shopping is Complicated and Contingent*

「帖文称」沃顿商学院 GAIL 发布技术报告《Agentic Shopping is Complicated and Contingent》，通过约 26,000 次测试考察六款前沿模型在健身手表购物场景中的选择。报告指出，仅展示商品网格时各模型偏好稳定，但加入单一来源截图、多来源顺序、注入的用户“记忆”或工具调用交付方式后，代理的购买决策会发生显著偏移，部分模型受单一来源影响高达 99 个百分点。[^agentic-shopping-complicated-contingent]

The post claims Wharton GAIL released the technical report “Agentic Shopping is Complicated and Contingent,” testing six frontier models across roughly 26,000 runs in a fitness-watch shopping scenario. It finds that preferences were stable on a bare product grid, but adding a single source screenshot, source order, injected user “memory,” or tool-call delivery format significantly shifted purchases, with some models moving up to 99 percentage points based on one source.[^agentic-shopping-complicated-contingent]

## 摘要 / Summary

- 研究使用 ACES 代理电商模拟器，让六款前沿模型在温度 1.0 下各运行 200 次，共约 26,000 次测试，任务为为无明确需求的用户挑选健身手表。[^agentic-shopping-complicated-contingent]
- The study used the ACES Agentic e-Commerce Simulator, running six frontier models 200 times each at temperature 1.0 for roughly 26,000 tests to pick a fitness watch for a user with no stated requirements.[^agentic-shopping-complicated-contingent]
- 仅展示单一来源截图往往能覆盖默认偏好；Gemini 3.5 Flash 几乎每次都选择 Wirecutter 推荐的产品，较基准偏移 99 个百分点。[^agentic-shopping-complicated-contingent]
- A single source screenshot often overrode default preferences; Gemini 3.5 Flash chose Wirecutter’s pick in essentially every run, a shift of +99 percentage points.[^agentic-shopping-complicated-contingent]
- 多个来源并不会让模型取平均值，而是一个来源胜出，且胜出者随模型而异；来源展示顺序也会改变部分模型的选择。[^agentic-shopping-complicated-contingent]
- Multiple sources did not lead to averaging; one source won outright depending on the model, and shuffling source order changed outcomes for some models.[^agentic-shopping-complicated-contingent]
- 注入一句用户“记忆”（如“我喜欢徒步”）足以让多数模型放弃客观最优产品，只有 Gemini 3.5 Flash 在基准和注入条件下都保持选择客观最优商品。[^agentic-shopping-complicated-contingent]
- Injecting one sentence of user “memory” redirected most models even when one product was objectively best; only Gemini 3.5 Flash kept picking the objectively best product at baseline and after injection.[^agentic-shopping-complicated-contingent]
- 工具调用交付形式本身也会影响购买：GPT-5.5 在来源以捆绑工具调用送达时向 Wirecutter 推荐产品显著偏移 53 个百分点。[^agentic-shopping-complicated-contingent]
- Tool-call delivery format alone changed purchases; GPT-5.5 shifted substantially toward Wirecutter’s pick (+53 percentage points) when sources arrived bundled versus one by one.[^agentic-shopping-complicated-contingent]

## 相关 / Related

- 原文：[链接](https://gail.wharton.upenn.edu/research-and-insights/technical-report-agentic-shopping)。 / Original: [link](https://gail.wharton.upenn.edu/research-and-insights/technical-report-agentic-shopping).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)

[^agentic-shopping-complicated-contingent]: Agentic Shopping is Complicated and Contingent
