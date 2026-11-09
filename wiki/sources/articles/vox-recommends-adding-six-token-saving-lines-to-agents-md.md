---
type: Source
title: "Vox 发文推荐 AGENTS.md 加入六条省 Token 准则"
title_en: "Vox recommends adding six token-saving lines to AGENTS.md"
description: "帖文称在 AGENTS.md 中加入六条准则，可避免 Claude Code 浪费 Token。"
description_en: "The post recommends adding six rules to AGENTS.md to prevent Claude Code from burning through tokens."
resource: https://x.com/Voxyz_ai/status/2119535433969500172
tags: [agents, agents-md, token-efficiency, claude-code]
sources:
  - id: voxyz-ai-agents-md-six-lines
    resource: https://x.com/Voxyz_ai/status/2119535433969500172
    title: "Vox recommends adding six token-saving lines to AGENTS.md"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T08:14:37+08:00
---

# Vox 发文推荐 AGENTS.md 加入六条省 Token 准则

*Vox recommends adding six token-saving lines to AGENTS.md*

帖文称，Vox (@Voxyz_ai) 建议在 AGENTS.md 中加入六行内容，以避免 Claude Code 浪费 Token，包括先 grep 再读文件、用子代理带回项目摘要、只展示 diff、不重复已决定内容、切换任务时建议 /compact 或新会话，以及默认简短作答。[^voxyz-ai-agents-md-six-lines]

The post says Vox (@Voxyz_ai) recommends adding six lines to AGENTS.md to avoid Claude Code burning through tokens, including grepping before reading files, using subagents for project summaries, showing diffs only, not restating decided items, suggesting /compact or new sessions on task switches, and keeping answers short by default.[^voxyz-ai-agents-md-six-lines]

## 摘要 / Summary

- 帖文称，读取整个文件前应先 grep，只读取需要的部分。 / The post says to grep before reading a whole file and only read the parts needed.[^voxyz-ai-agents-md-six-lines]
- 帖文建议派出子代理了解整个项目，只带回摘要。 / The post suggests sending a subagent to understand the whole project and bring back only a summary.[^voxyz-ai-agents-md-six-lines]
- 帖文称应展示 diff，而不是整个文件。 / The post says to show the diff, not the whole file.[^voxyz-ai-agents-md-six-lines]
- 帖文称不要重复本次会话已决定的内容。 / The post says not to restate anything already decided in the session.[^voxyz-ai-agents-md-six-lines]
- 帖文称切换任务时应建议使用 /compact 或开启新会话。 / The post suggests /compact or a new session when switching tasks.[^voxyz-ai-agents-md-six-lines]
- 帖文称默认保持回答简短。 / The post says to keep answers short by default.[^voxyz-ai-agents-md-six-lines]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2119535433969500172)。 / Original: [link](https://x.com/Voxyz_ai/status/2119535433969500172).
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^voxyz-ai-agents-md-six-lines]: Vox recommends adding six token-saving lines to AGENTS.md
