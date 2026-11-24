---
type: Source
title: "过时的 CLAUDE.md 与 AGENTS.md 会误导编程 Agent"
title_en: "Stale CLAUDE.md and AGENTS.md Mislead Coding Agents"
description: "研究发现 Claude Code 与 Codex 会遵循过时的项目指令文件，即使与现有代码冲突；应以代码约定为准并标注不一致。"
description_en: "Research finds Claude Code and Codex follow outdated project instruction files even when they conflict with existing code; follow code conventions and flag inconsistencies."
resource: https://x.com/Voxyz_ai/status/2124880659889938848
tags: [claude-code, codex, claude-md, agents-md, stale-instructions, coding-agents]
sources:
  - id: 1d4666917d0bf9c9
    resource: https://x.com/Voxyz_ai/status/2124880659889938848
    title: "Stale CLAUDE.md and AGENTS.md Mislead Coding Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:34:24+08:00
---

# 过时的 CLAUDE.md 与 AGENTS.md 会误导编程 Agent

*Stale CLAUDE.md and AGENTS.md Mislead Coding Agents*

帖文称，研究人员发表论文指出 Claude Code 与 Codex 会受过时 CLAUDE.md 和 AGENTS.md 文件误导；在 40 个项目中，此类不一致在 80 次运行中出现 79 次，且 441 家公司仓库中 73.8% 的 AI 配置文件仅提交一次后从未更新。[^1d4666917d0bf9c9]

The post says researchers published a paper showing Claude Code and Codex keep following outdated CLAUDE.md and AGENTS.md files even when they disagree with the code; across 40 projects the mismatch occurred in 79 of 80 runs, and 73.8% of AI config files in 441 company repos were committed once and never touched again.[^1d4666917d0bf9c9]

## 摘要 / Summary

- 论文地址为 arxiv.org/abs/2610.30571，题为 Stale Instruction Files Override the Code in Coding Agents。[^1d4666917d0bf9c9]
- The paper is at arxiv.org/abs/2610.30571, titled Stale Instruction Files Override the Code in Coding Agents.[^1d4666917d0bf9c9]
- 在 40 个项目的 80 次运行中，代理因过时指令与代码不一致而出错的情况发生了 79 次。[^1d4666917d0bf9c9]
- Across 40 projects and 80 runs, agents were misled by outdated instructions in 79 runs.[^1d4666917d0bf9c9]
- 在 441 家公司仓库中，73.8% 的类似 CLAUDE.md 的 AI 配置文件仅被提交一次，之后从未修改。[^1d4666917d0bf9c9]
- In 441 company repos, 73.8% of AI config files such as CLAUDE.md were committed once and never touched again.[^1d4666917d0bf9c9]
- 论文建议的一句话是：当文档与代码不一致时，遵循现有代码的约定，并在最终回复中指出每处不一致。[^1d4666917d0bf9c9]
- The paper's recommended sentence: when documentation and code disagree, follow the conventions in the existing code and point out each inconsistency in the final reply.[^1d4666917d0bf9c9]
- 加入该句后，代理遵循现有代码的比例从 4.2% 提升到 91.4%，且所有测试通过。[^1d4666917d0bf9c9]
- After adding the sentence, agents followed existing code 91.4% of the time versus 4.2% before, and every test passed.[^1d4666917d0bf9c9]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2124880659889938848)。 / Original: [link](https://x.com/Voxyz_ai/status/2124880659889938848).
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)

[^1d4666917d0bf9c9]: Stale CLAUDE.md and AGENTS.md Mislead Coding Agents
