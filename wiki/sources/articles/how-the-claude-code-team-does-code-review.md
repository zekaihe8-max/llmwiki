---
type: Source
title: "宝玉整理 Claude Code 团队怎么做代码审查"
title_en: "How the Claude Code team does code review"
description: "Anthropic Claude Code 团队通过多层自动化审查与按风险分级的人工审批，在合并量翻倍的同时将回滚率降低超 40%。"
description_en: "Anthropic's Claude Code team uses layered automated review and risk-tiered human approval to cut revert rates by over 40% while merged PRs more than doubled."
resource: https://claude.dev/blog/solving-code-review-at-anthropic
tags: [claude-code, code-review, anthropic, ai-engineering]
sources:
  - id: 6d6f8ad0753534aa
    resource: https://claude.dev/blog/solving-code-review-at-anthropic
    title: "How the Claude Code team does code review"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T08:25:35+08:00
---

# 宝玉整理 Claude Code 团队怎么做代码审查

*How the Claude Code team does code review*

帖文称，Claude 代笔了 Claude Code 约 90% 的代码，因此该团队把代码审查从事后人工把关改成持续的机器优先流程：在 PR 出现前由 Claude 自查并运行测试，每个 PR 都先过 AI 审查与安全审查，再按低中高风险分级决定是否需要人工批准。6 月至 9 月间，合并的拉取请求翻了一倍多，而回滚份额下降超 40%。[^6d6f8ad0753534aa]

The post says Claude writes about 90% of Claude Code's own code, so the team shifted code review from a final human gate to a continuous, machine-first flow: Claude self-checks and runs tests before a PR exists, every PR passes AI and security review first, then human approval is scaled by risk tier. From June to September, merged pull requests more than doubled while the revert share fell by over 40%.[^6d6f8ad0753534aa]

## 摘要 / Summary

- 6 月至 9 月，Claude Code 代码库合并的拉取请求超过翻倍，需回滚的份额下降超 40%。[^6d6f8ad0753534aa]
- From June to September, merged pull requests to Claude Code's codebase more than doubled while the share reverted fell by over 40%.[^6d6f8ad0753534aa]
- 帖文称 Claude 编写了 Claude Code 约 90% 的代码，人工审查时间被保留给只有人类能解决的问题。[^6d6f8ad0753534aa]
- The post says Claude writes about 90% of Claude Code's own code, preserving human time for issues only humans can solve.[^6d6f8ad0753534aa]
- 每个拉取请求在人工查看前都会先接受 Claude 审查，发现的问题须由其他代理验证并经投票同意后才会发布为内联评论。[^6d6f8ad0753534aa]
- Every pull request receives a Claude review before a person looks; findings are verified by other agents and posted as inline comments only if enough voters agree they are real.[^6d6f8ad0753534aa]
- 人工审批按变更风险分级：低风险无需人工，中风险需一人，高风险需两人；变更本身设定层级，而非作者。[^6d6f8ad0753534aa]
- Human approval is tiered by change risk: low risk needs none, medium needs one person, high needs two; the change sets the tier, not the author.[^6d6f8ad0753534aa]
- 只要错误审查或安全审查仍有未解决的发现，拉取请求就不能合并；修复后发现会自动清除。[^6d6f8ad0753534aa]
- A PR cannot merge while any bug or security finding remains open; fixes clear findings automatically.[^6d6f8ad0753534aa]
- 审查轮次上限为三轮，超过后审查者要求作者退一步重新考虑方案，并按发现类别一次性修复所有实例。[^6d6f8ad0753534aa]
- Review is capped at three rounds; beyond that the reviewer asks the author to reconsider the approach, and bug classes are flagged so every instance is fixed.[^6d6f8ad0753534aa]

## 相关 / Related

- 原文：[链接](https://claude.dev/blog/solving-code-review-at-anthropic)。 / Original: [link](https://claude.dev/blog/solving-code-review-at-anthropic).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^6d6f8ad0753534aa]: How the Claude Code team does code review
