---
type: Source
title: "宝玉：Claude Code 团队如何用 AI 智能体做代码审查"
title_en: "Bao Yu: How the Claude Code Team Uses AI Agents for Code Review"
description: "宝玉转述 Anthropic Claude Code 团队用 AI 智能体取代大部分人工代码审查，提升问题发现率并加速 PR 合并。"
description_en: "Bao Yu recounts how Anthropic's Claude Code team replaced most manual code review with AI agents, improving issue detection and accelerating PR merges."
resource: https://x.com/dotey/status/2123555597387813050
tags: [claude-code, ai-code-review, anthropic, engineering]
sources:
  - id: claude-code-ai-code-review
    resource: https://x.com/dotey/status/2123555597387813050
    title: "Bao Yu: How the Claude Code Team Uses AI Agents for Code Review"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T08:25:00+08:00
---

# 宝玉：Claude Code 团队如何用 AI 智能体做代码审查

*Bao Yu: How the Claude Code Team Uses AI Agents for Code Review*

「帖文称」Anthropic Claude Code 团队产品经理 Morgan Lunt 分享，该团队让 AI 智能体接手绝大部分代码审查，人只在少数高风险改动上签字，目标是 90% 的 PR 合并时无需额外人工审查；自动审查后查出实质问题的 PR 比例从 16% 升至 54%，合并的 PR 数量翻倍，回滚减少 40%。[^claude-code-ai-code-review]

The post recounts Anthropic Claude Code team PM Morgan Lunt sharing that AI agents now handle most code review, with humans signing off only on high-risk changes, targeting 90% of PRs merging without extra human review; after automation, substantive issue detection rose from 16% to 54%, merged PR count doubled, and rollbacks fell 40%.[^claude-code-ai-code-review]

## 摘要 / Summary

- Anthropic Claude Code 团队目标是 90% 的 PR 合并时，除了让 Claude 工作的人，不再需要其他人审查；自动审查后查出实质问题的 PR 比例从 16% 升至 54%，合并的 PR 数量翻倍，回滚减少 40%。[^claude-code-ai-code-review]
- The Claude Code team targets 90% of PRs to merge without review by anyone other than the person who assigned Claude; after automated review, PRs with substantive issues found rose from 16% to 54%, merged PR count doubled, and rollbacks dropped 40%.[^claude-code-ai-code-review]
- 团队以 Anthropic 历史上真实线上事故和引发事故的 PR 构建评测集，衡量审查智能体的召回率与精确率，避免使用人为合成 bug 数据。[^claude-code-ai-code-review]
- The team built an eval set from real historical incidents and PRs that caused outages, measuring recall and precision of the review agent without synthetic injected bugs.[^claude-code-ai-code-review]
- 审查流程分为“发现问题”智能体与“挑刺”验证智能体，再按严重程度排序、去重后以评论形式贴到 PR 上，重要问题阻止合并，小问题不阻止。[^claude-code-ai-code-review]
- The review flow uses finder agents plus challenger/verifier agents, then sorts and deduplicates findings into PR comments; critical issues block merge while nits do not.[^claude-code-ai-code-review]
- 风险分级由机器人根据改动文件和范围决定：只改文档可直接通过，普通改动由让 Claude 工作的人负责，涉及账单、登录验证、自动更新等高风险部分需第二人签字。[^claude-code-ai-code-review]
- Risk tiering is decided by a robot based on changed files and scope: docs-only changes pass directly, normal changes are owned by the Claude operator, and high-risk areas like billing, login verification, and auto-update require a second approver.[^claude-code-ai-code-review]
- Claude Code Review 今年 3 月开放公开预览，10 月中旬正式发布，正式版按审查深度分三档，每次 5 到 25 美元。[^claude-code-ai-code-review]
- Claude Code Review entered public preview in March and launched in mid-October; the paid version has three depth tiers at $5–$25 per review.[^claude-code-ai-code-review]
- 内部经验显示 Opus 5.5 中等强度性价比最高，团队会持续评测并调整默认配置。[^claude-code-ai-code-review]
- Internal experience shows Opus 5.5 at medium effort offers the best cost-performance, and the team continues to evaluate and tune defaults.[^claude-code-ai-code-review]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2123555597387813050)。 / Original: [link](https://x.com/dotey/status/2123555597387813050).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [约束重构 PR 的确定性自动合入 / Deterministic automerge for constrained refactor PRs](../../topics/deterministic-refactor-automerge.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^claude-code-ai-code-review]: Bao Yu: How the Claude Code Team Uses AI Agents for Code Review
