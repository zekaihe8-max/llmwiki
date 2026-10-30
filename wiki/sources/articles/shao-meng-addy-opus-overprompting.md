---
type: Source
title: "邵萌转述 Addy：Opus 5.5 时代少堆提示"
title_en: "Meng Shao relays Addy on overprompting in the Opus 5.5 era"
description: "邵萌转述 Addy 的 Claude Code 用法：明确目标与验收，删减旧提示，并按独立任务与核验需要使用子 Agent、云会话和自动评审。"
description_en: "Meng Shao relays Addy’s Claude Code advice: define goals and verification, prune stale prompts, and use subagents, cloud sessions, and automated review for independent work and verification."
resource: https://x.com/shao__meng/status/2115986116482613486
tags: [claude-code, prompting, verification, subagents]
sources:
  - id: shao-meng-addy-opus-overprompting
    resource: https://x.com/shao__meng/status/2115986116482613486
    title: "Meng Shao relays Addy on overprompting in the Opus 5.5 era"
    author: human:shao__meng
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:17:41+08:00
---

# 邵萌转述 Addy：Opus 5.5 时代少堆提示

*Meng Shao relays Addy on overprompting in the Opus 5.5 era*

邵萌的[原帖](https://x.com/shao__meng/status/2115986116482613486)转述 Addy Osmani 的 Claude Code 建议；以下产品行为与效果均按该帖表述归档。[^shao-meng-addy-opus-overprompting]

Meng Shao’s [post](https://x.com/shao__meng/status/2115986116482613486) relays Addy Osmani’s Claude Code advice; product behavior and effectiveness below are recorded as claims in that post. [^shao-meng-addy-opus-overprompting]

## 摘要 / Summary

文章将 Claude 5 系列的使用重心从手把手拆任务转向清楚说明目标与验收方式；建议 Opus 5.5 从 /effort medium 起调。目标不清时先让 Claude 采访并形成规格，再用新会话实现。[^shao-meng-addy-opus-overprompting]

The post shifts Claude 5-series usage from prescribing each step to specifying goals and verification; it recommends starting Opus 5.5 at /effort medium. If the goal is unclear, have Claude interview the user and produce a specification, then implement it in a fresh session.[^shao-meng-addy-opus-overprompting]

验收应有可执行的过/不过条件或数字目标，并提供模型可读的报告；长任务可用 /goal 设条件，由另一模型逐轮检查。完成汇报应附命令与输出或截图。[^shao-meng-addy-opus-overprompting]

Verification should use executable pass/fail conditions or numeric targets and model-readable reports; long tasks can use /goal conditions checked each round by another model. Completion reports should include commands and outputs or screenshots.[^shao-meng-addy-opus-overprompting]

文中称 Claude Opus 5、Claude Fable 5 的 Claude Code 系统提示删去八成以上后，编程评测未见明显下降；建议新模型上线后先删旧指令，只加回实际漏掉的内容，并定期用 /doctor 的 prompt-audit 审计。这是文章转述的经验，抓取正文未提供评测方法与数据。[^shao-meng-addy-opus-overprompting]

The post reports that removing over 80% of the Claude Code system prompt for Claude Opus 5 and Claude Fable 5 caused no noticeable coding-evaluation decline. It recommends removing old instructions after model upgrades, restoring only observed omissions, and periodically using /doctor prompt-audit. This is the post’s reported experience; the fetched body provides no evaluation methods or data.[^shao-meng-addy-opus-overprompting]

文中称交互式终端近期默认 auto mode，以分类器检查动作，且明确这不是安全保证。子 Agent 多数可由 Claude 自行委派；长审计、迁移等独立大任务适合主动要求并行，琐碎拆分则增加成本和延迟，子 Agent 不默认提高质量。[^shao-meng-addy-opus-overprompting]

The post says interactive terminals recently default to auto mode, using a classifier to inspect actions, and explicitly says this is no safety guarantee. Claude can usually delegate subagents itself; large independent audits or migrations can justify explicitly requesting parallelism, while trivial splits increase cost and latency and subagents do not inherently improve quality.[^shao-meng-addy-opus-overprompting]

云会话使用独立虚拟机与新克隆仓库，启动前应推送本地提交；依赖本机独有资源的任务保留本地。并行应以单会话能自主完成为前提；文中介绍 Projects 的统一指令、任务线程与 Overview。[^shao-meng-addy-opus-overprompting]

Cloud sessions use separate virtual machines and fresh repository clones, so local commits should be pushed first; tasks depending on resources unique to the local machine should stay local. Parallelism presupposes that one session can finish autonomously; the post describes Projects with shared instructions, task threads, and an Overview.[^shao-meng-addy-opus-overprompting]

评审仍需保留：文章称 Claude Code 团队多数变更先经 Claude 至少审修一轮，再交人审；可用 Code Review、/code-review，或在未见实现对话的新会话中给规格、审 diff，并忽略风格问题。[^shao-meng-addy-opus-overprompting]

Review remains necessary: the post says most changes on the Claude Code team receive at least one Claude review-and-fix pass before human review. Options include Code Review, /code-review, or giving the specification to a fresh session that has not seen the implementation conversation to review the diff while ignoring style issues.[^shao-meng-addy-opus-overprompting]

## 相关 / Related

- [校准对 AI 的过度与不足引导 / Calibrating AI guidance](../../topics/calibrating-ai-guidance.md)
- [把子 Agent 折进主循环 / Fold subagents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^shao-meng-addy-opus-overprompting]: Meng Shao relays Addy on overprompting in the Opus 5.5 era
