---
type: Source
title: "编程 Agent 会被过时指令文件覆盖代码：一句话修复"
title_en: "Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix"
description: "研究发现编程 Agent 即使注意到冲突也仍遵循过时的项目指令文件，加一句赋予现有代码优先权的指令可使遵循代码的比例从 4.2% 升至 91.4%。"
description_en: "Research shows coding agents follow stale project instruction files even when they notice conflicts; adding one sentence giving existing code precedence raises code-following choices from 4.2% to 91.4%."
resource: https://arxiv.org/abs/2610.30571
tags: [coding-agents, instruction-files, software-engineering, ai-agents]
sources:
  - id: stale-instruction-files-coding-agents
    resource: https://arxiv.org/abs/2610.30571
    title: "Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:33:40+08:00
---

# 编程 Agent 会被过时指令文件覆盖代码：一句话修复

*Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix*

「帖文称」arXiv 论文《Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix》指出，编程 Agent 会遵循 CLAUDE.md 或 AGENTS.md 等项目指令文件，即使这些文件与现有代码冲突且 Agent 已注意到分歧。研究者构建 40 个 Python 项目并进行 320 次运行，发现未加修正句时 90.1% 的选择遵循过时文件；加入一句赋予现有代码优先权的指令后，遵循代码的比例从 4.2% 提升至 91.4%，测试通过率从 89.4% 提升至 100%。[^stale-instruction-files-coding-agents]

The arXiv paper "Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix" states that coding agents follow project instruction files such as CLAUDE.md or AGENTS.md even when they conflict with existing code and the agents notice the disagreement. The researchers built 40 Python projects and ran 320 trials; without the corrective sentence, 90.1% of choices followed the stale file. Adding one sentence giving existing code precedence raised code-following from 4.2% to 91.4%, stopped code rewrites, and raised the test pass rate from 89.4% to 100%.[^stale-instruction-files-coding-agents]

## 摘要 / Summary

- 40 个 Python 项目，指令文件要求一种约定而现有代码使用另一种，共进行 320 次运行。[^stale-instruction-files-coding-agents]
- 40 Python projects where the instruction file requests one convention while existing code uses another, across 320 runs.[^stale-instruction-files-coding-agents]
- 未加句子时，90.1% 的 Agent 选择遵循过时指令文件；Claude Code 在 80 次运行中有 79 次指出冲突却仍遵循文件。[^stale-instruction-files-coding-agents]
- Without the sentence, 90.1% of agent choices followed the stale file; Claude Code flagged the conflict in 79 of 80 runs but still followed the file.[^stale-instruction-files-coding-agents]
- Codex CLI 在 20 次运行中将现有代码改写为与指令文件一致，其中 17 次导致项目测试失败。[^stale-instruction-files-coding-agents]
- Codex CLI rewrote existing code to match the file in 20 of 80 runs, and the project's tests failed in 17 of them.[^stale-instruction-files-coding-agents]
- 加入赋予现有代码优先权的一句话后，遵循代码的选择比例从 4.2% 升至 91.4%，测试通过率从 89.4% 升至 100%。[^stale-instruction-files-coding-agents]
- The sentence raised code-following choices from 4.2% to 91.4% and the test pass rate from 89.4% to 100%.[^stale-instruction-files-coding-agents]

## 相关 / Related

- 原文：[链接](https://arxiv.org/abs/2610.30571)。 / Original: [link](https://arxiv.org/abs/2610.30571).
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^stale-instruction-files-coding-agents]: Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix
