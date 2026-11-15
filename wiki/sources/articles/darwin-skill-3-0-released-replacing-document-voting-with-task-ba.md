---
type: Source
title: "达尔文.skill 3.0 发布：改用实战盲评替代文档投票"
title_en: "Darwin.skill 3.0 Released: Replacing Document Voting with Task-Based Blind Evaluation"
description: "达尔文.skill 3.0 重构评测方式，让两版技能各执行任务后由评委盲评产出并由脚本裁决，平局保留更短版本。"
description_en: "Darwin.skill 3.0 rebuilds evaluation by having two skill versions execute tasks, with judges blind-scoring outputs and a script adjudicating, keeping the shorter version on ties."
resource: https://x.com/AlchainHust/status/2121744774877389261
tags: [agents, skill-evaluation, darwin-skill]
sources:
  - id: darwin-skill-3-0-release
    resource: https://x.com/AlchainHust/status/2121744774877389261
    title: "Darwin.skill 3.0 Released: Replacing Document Voting with Task-Based Blind Evaluation"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T19:59:31+08:00
---

# 达尔文.skill 3.0 发布：改用实战盲评替代文档投票

*Darwin.skill 3.0 Released: Replacing Document Voting with Task-Based Blind Evaluation*

帖文称，达尔文.skill 3.0 版本已发布，结合 Fable 5.2 与今年多篇最新学术研究进行了整体重构。新版不再让评委阅读两版 SKILL.md 进行投票，而是让两版 skill 各自完成同一任务，由评委盲评产出并通过脚本裁决，打平时保留更短的那一版。作者指出，此前文档投票与真机运行结果相悖：评委曾 3 比 0 选新版，实际跑起来反而多绕了 33 次工具调用，并引用 NVIDIA 研究称读文档打分与实跑效果几乎零相关。[^darwin-skill-3-0-release]

The post states that Darwin.skill 3.0 has been released, completely rebuilt with Fable 5.2 and several recent academic studies. The new version no longer asks judges to vote by reading two SKILL.md documents; instead, both skill versions execute the same task, judges blind-score the outputs, and a script adjudicates, keeping the shorter version on ties. The author says the previous document voting contradicted real-machine results—judges once chose the new version 3–0, but it actually took 33 more tool calls—and cites NVIDIA research that document-reading scores have near-zero correlation with actual performance.[^darwin-skill-3-0-release]

## 摘要 / Summary

- 帖文称达尔文.skill 3.0 结合 Fable 5.2 和今年几篇最新学术研究，对之前版本进行了整体重构。[^darwin-skill-3-0-release]
- The post states Darwin.skill 3.0 combines Fable 5.2 and several latest academic studies this year to completely rebuild the previous version.[^darwin-skill-3-0-release]
- 之前让评委读两版 SKILL.md 投票，出现评委 3 比 0 说新版更好，但真机跑完反而多绕 33 次工具调用。[^darwin-skill-3-0-release]
- Previously judges read two SKILL.md versions and voted; judges said 3–0 the new version was better, but real-machine execution showed 33 more tool calls.[^darwin-skill-3-0-release]
- 帖文引用 NVIDIA 研究，称读文档打分与实际运行效果几乎零相关。[^darwin-skill-3-0-release]
- The post cites NVIDIA research saying scores from reading documents have almost zero correlation with actual running results.[^darwin-skill-3-0-release]
- 3.0 不评文档，让两版 skill 各干一遍活，评委盲评产出，脚本裁决，打平就留更短的那版。[^darwin-skill-3-0-release]
- 3.0 does not evaluate documents; both skill versions do the task, judges blind-score outputs, a script adjudicates, and ties go to the shorter version.[^darwin-skill-3-0-release]
- 作者附上 GitHub 链接 github.com/alchaincyf/dar…，并询问读者哪个 skill 最想拿它进化。[^darwin-skill-3-0-release]
- The author attaches a GitHub link github.com/alchaincyf/dar… and asks which skill readers most want to evolve with it.[^darwin-skill-3-0-release]
- 帖文发布于 2026 年 11 月 14 日 23:19，获得 3,777 次浏览。[^darwin-skill-3-0-release]
- The post was published at 23:19 on November 14, 2026, with 3,777 views.[^darwin-skill-3-0-release]

## 相关 / Related

- 原文：[链接](https://x.com/AlchainHust/status/2121744774877389261)。 / Original: [link](https://x.com/AlchainHust/status/2121744774877389261).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)

[^darwin-skill-3-0-release]: Darwin.skill 3.0 Released: Replacing Document Voting with Task-Based Blind Evaluation
