---
type: Source
title: "Barret李靖分享六款提升 DSH 自主性与可调试性的插件"
title_en: "Barret Li Jing Shares Six Plugins to Boost DSH Autonomy and Debuggability"
description: "Barret李靖推荐六款 DeepSeek Harness 插件，覆盖插件市场、上下文可视化、工具优化、多 Agent 协作、长期记忆与自我改进，并呼吁开发任务管理插件。"
description_en: "Barret Li Jing recommends six DeepSeek Harness plugins covering plugin marketplace, context visualization, tool optimization, multi-agent collaboration, long-term memory, and self-improvement, while calling for a task management plugin."
resource: https://x.com/Barret_China/status/2121949262942720331
tags: [agents, deepseek-harness, plugins, multi-agent, context-engineering, autonomy]
sources:
  - id: barret-dsh-plugins-autonomy-debuggability
    resource: https://x.com/Barret_China/status/2121949262942720331
    title: "Barret Li Jing Shares Six Plugins to Boost DSH Autonomy and Debuggability"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:31:01+08:00
---

# Barret李靖分享六款提升 DSH 自主性与可调试性的插件

*Barret Li Jing Shares Six Plugins to Boost DSH Autonomy and Debuggability*

帖文称 Barret李靖近期研究 DeepSeek Harness（DSH），精选六款能显著提升 Agent 自主性与可调试性的插件：dsh-market 提供插件市场；dsh-context 可视化 Context 变化与 Token 消耗，推动 Decision Profiling；dsh-ops 优化 Shell 与工具调用降低开销；dsh-agent-teams 支持多 Agent 协作与异常接管；Hindsight 提供 Retain/Recall/Reflect 三类长期记忆能力；Ouroboros 通过 MCP 接入 DSH 实现目标-执行-评测迭代，探索 RSI。作者认为仍缺成熟任务管理插件，正在自研整合任务管理、主动调度、分级自主执行与人工接管。[^barret-dsh-plugins-autonomy-debuggability]

The post states Barret Li Jing recently researched DeepSeek Harness (DSH) and selected six plugins that significantly boost agent autonomy and debuggability: dsh-market for plugin marketplace; dsh-context visualizes context changes and token usage, advancing decision profiling; dsh-ops optimizes shell and tool calls to reduce overhead; dsh-agent-teams enables multi-agent collaboration with exception handling; Hindsight provides retain/recall/reflect long-term memory; Ouroboros connects via MCP for goal-execution-eval iteration, exploring RSI. The author notes a lack of mature task management plugins and is building one integrating task management, proactive scheduling, tiered autonomous execution, and human-in-the-loop.[^barret-dsh-plugins-autonomy-debuggability]

## 摘要 / Summary

- dsh-market 是 DSH 的插件市场，支持插件搜索、安装与更新，建议优先安装。[^barret-dsh-plugins-autonomy-debuggability]
- dsh-market is the DSH plugin marketplace supporting search, install, and update; recommended as first install.[^barret-dsh-plugins-autonomy-debuggability]
- dsh-context 可直观查看 Context 变化、Token 消耗与多 Agent 运行状态，助力长任务决策偏差分析，推动从 Function Profiling 向 Decision Profiling 转变。[^barret-dsh-plugins-autonomy-debuggability]
- dsh-context visualizes context changes, token consumption, and multi-agent runtime states, helping analyze decision drift in long tasks, shifting from function profiling to decision profiling.[^barret-dsh-plugins-autonomy-debuggability]
- dsh-ops 优化 Shell、文件操作与工具调用，减少 Token 消耗与执行开销，指出 Agent 性能优化需从工具接口与执行路径入手。[^barret-dsh-plugins-autonomy-debuggability]
- dsh-ops optimizes shell, file ops, and tool calls to cut token usage and execution overhead, noting agent performance tuning must start at tool interfaces and execution paths.[^barret-dsh-plugins-autonomy-debuggability]
- dsh-agent-teams 支持多 Agent 协作、任务依赖与状态持久化，其任务调度与异常接管机制值得研究，多 Agent 高效协作仍具挑战。[^barret-dsh-plugins-autonomy-debuggability]
- dsh-agent-teams supports multi-agent collaboration, task dependencies, and state persistence; its scheduling and exception takeover mechanisms merit study, as efficient multi-agent collaboration remains challenging.[^barret-dsh-plugins-autonomy-debuggability]
- Hindsight 提供 Retain、Recall、Reflect 三类能力，让 Agent 积累复用历史经验；billion-context 侧重超长会话分层压缩与历史找回，适合长程任务。[^barret-dsh-plugins-autonomy-debuggability]
- Hindsight offers retain, recall, reflect capabilities for accumulating and reusing historical experience; billion-context focuses on hierarchical compression and history retrieval for ultra-long sessions, suited for long-horizon tasks.[^barret-dsh-plugins-autonomy-debuggability]
- Ouroboros 通过 MCP 接入 DSH，围绕目标-执行-评测持续迭代，尝试让 Agent 根据反馈调整执行方式，向更深层次的 RSI（递归自我改进）探索。[^barret-dsh-plugins-autonomy-debuggability]
- Ouroboros connects via MCP to DSH for continuous goal-execution-eval iteration, attempting to let agents adjust execution based on feedback, exploring deeper RSI (recursive self-improvement).[^barret-dsh-plugins-autonomy-debuggability]

## 相关 / Related

- 原文：[链接](https://x.com/Barret_China/status/2121949262942720331)。 / Original: [link](https://x.com/Barret_China/status/2121949262942720331).
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^barret-dsh-plugins-autonomy-debuggability]: Barret Li Jing Shares Six Plugins to Boost DSH Autonomy and Debuggability
