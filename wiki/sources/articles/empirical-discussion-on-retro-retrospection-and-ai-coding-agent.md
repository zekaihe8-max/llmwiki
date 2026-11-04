---
type: Source
title: "AI 编程 Agent 的 /retro 复盘与技能自我进化实证讨论"
title_en: "Empirical Discussion on /retro Retrospection and AI Coding Agent Skill Self-Evolution"
description: "实证研究发现，AI 编程 Agent 任务后复盘并修改技能文件，仅少数改动能彻底消除问题，部分改动还会增加工作量。"
description_en: "Empirical study finds that post-task retrospection and skill-file edits by AI coding agents eliminate the target problem in only a few cases, and some changes increase workload."
resource: https://x.com/dotey/status/2117706197797114009
tags: [agents, retro, skill-authoring, self-evolution]
sources:
  - id: 68cc129ac46fe2e1
    resource: https://x.com/dotey/status/2117706197797114009
    title: "Empirical Discussion on /retro Retrospection and AI Coding Agent Skill Self-Evolution"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T08:08:49+08:00
---

# AI 编程 Agent 的 /retro 复盘与技能自我进化实证讨论

*Empirical Discussion on /retro Retrospection and AI Coding Agent Skill Self-Evolution*

「帖文称」宝玉在 X 上发文讨论 /retro 技能，即 AI 编程任务结束后复盘工作并列出修改建议，由人决定是否采纳，期望仅修改技能文件即可实现自我进化，无需重新训练模型。帖文引用了新加坡管理大学 Christoph Treude 与德国海德堡大学 Sebastian Baltes 的 arXiv 论文，该研究在 SWE-bench Verified 的 30 个真实代码修复问题上，用 Claude Code（Opus 5.5）测试了“任务后复盘、修改工作手册”的做法。[^68cc129ac46fe2e1]

The post discusses the /retro skill, where an AI coding agent reviews completed programming work and proposes modifications to its skill file for human approval, aiming at self-evolution without model retraining. It cites an arXiv paper by Christoph Treude (Singapore Management University) and Sebastian Baltes (University of Heidelberg) that empirically tests this “retrospective adaptation” approach on 30 real code-fix issues from SWE-bench Verified using Claude Code (Opus 5.5).[^68cc129ac46fe2e1]

## 摘要 / Summary

- 论文于 10 月 26 日发布在 arXiv，作者分别来自新加坡管理大学和德国海德堡大学。 / The paper was released on arXiv on October 26, with authors from Singapore Management University and the University of Heidelberg.[^68cc129ac46fe2e1]
- 研究从 SWE-bench Verified 选取 30 个问题（10 个随机，20 个来自曾出现环境问题的项目），Claude Code 每修完一个问题运行一次 /retro，共得到 125 条建议。 / The study selected 30 issues from SWE-bench Verified (10 random, 20 from projects with prior environment problems); Claude Code ran /retro after each fix, yielding 125 suggestions.[^68cc129ac46fe2e1]
- 作者落实 24 条建议，其中 11 项可测试加上 1 项对照共 12 项，在同一项目另找会重现问题的任务，分别用原设置和改过设置各跑 5 次比较。 / The authors implemented 24 suggestions; 11 testable items plus 1 control (12 total) were evaluated on another task in the same project that would reproduce the issue, running 5 times with the original setup and 5 times with the modified setup.[^68cc129ac46fe2e1]
- 13 次测试中只有 7 次在原设置下真正遇到目标问题，这 7 次里只有 2 项改动彻底消除了问题，例如 SymPy 改用 bin/test 后从 5 次/5 次失败降至 0 次，Astropy 增加“本来就会失败的测试清单”后对比检查从 3 次/5 次降至 0 次。 / Of 13 tests, only 7 actually hit the target problem under the original setup, and only 2 changes eliminated it completely: SymPy switching to bin/test dropped failures from 5/5 to 0/5, and Astropy’s list of pre-existing failing tests reduced comparison checks from 3/5 to 0/5.[^68cc129ac46fe2e1]
- Sphinx 的失败清单导致在不相关任务上 5 次中有 4 次额外做对比检查，用时中位数从 82 秒涨到 245 秒；CLAUDE.md 增加“完成前运行格式检查”后，用时中位数从 88 秒涨到 156 秒；各组 5 次里成功次数最多只差 1 次，未看出成功率提高。 / Sphinx’s failure list caused extra comparison checks in 4 of 5 unrelated runs, raising median time from 82s to 245s; adding “run format check before completion” to CLAUDE.md raised median time from 88s to 156s; success counts differed by at most 1 out of 5, showing no clear success-rate improvement.[^68cc129ac46fe2e1]
- 作者结论：全项目通用信息（如测试命令）记下来一直有用；某环境下哪些测试会失败这类信息换任务可能对不上；研究局限包括每种设置仅跑 5 次、只测一个 AI 工具和一个 /retro 版本、仅涉及环境类问题。 / The authors conclude that project-wide information such as test commands remains useful when recorded, while environment-specific failing-test lists may not transfer to other tasks; limitations include only 5 runs per setting, one AI tool and one /retro version, and environment-type issues only.[^68cc129ac46fe2e1]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2117706197797114009)。 / Original: [link](https://x.com/dotey/status/2117706197797114009).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^68cc129ac46fe2e1]: Empirical Discussion on /retro Retrospection and AI Coding Agent Skill Self-Evolution
