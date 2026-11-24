---
type: Source
title: "介绍 Claude Ship：AI 驱动的拉取请求审查、修复与批准"
title_en: "Introducing Claude Ship: AI-Powered Pull Request Review, Fix, and Approval"
description: "Claude Ship 通过 Code Review、PR Steward 和 Claude Approvals 自动化拉取请求的审查、修复与批准流程。"
description_en: "Claude Ship automates pull request review, fixes, and approval using Code Review, PR Steward, and Claude Approvals."
resource: https://claude.com/resources/articles/introducing-claude-ship
tags: [claude-ship, code-review, pull-request, ai-agent, enterprise]
sources:
  - id: introducing-claude-ship
    resource: https://claude.com/resources/articles/introducing-claude-ship
    title: "Introducing Claude Ship: AI-Powered Pull Request Review, Fix, and Approval"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:18:03+08:00
---

# 介绍 Claude Ship：AI 驱动的拉取请求审查、修复与批准

*Introducing Claude Ship: AI-Powered Pull Request Review, Fix, and Approval*

「帖文称」Anthropic 推出 Claude Ship，可在开发者拉取请求后自动完成代码审查、修复问题并根据团队策略决定是否批准合并，旨在让代码交付速度与编写速度同步。[^introducing-claude-ship]

Anthropic has launched Claude Ship, which automatically reviews code, fixes issues, and decides whether to approve merges based on team policies after developers open pull requests, aiming to make code delivery as fast as writing code.[^introducing-claude-ship]

## 摘要 / Summary

- 官方介绍称，该功能由已普遍可用的 Code Review 和两个测试版代理组成：PR Steward 与 Claude Approvals。[^introducing-claude-ship]
- Claude Ship consists of Code Review, which is generally available, and two new beta agents: PR Steward and Claude Approvals.[^introducing-claude-ship]
- 适用于 Claude Team 和 Enterprise 计划中的 GitHub 仓库；Code Review 普遍可用，PR Steward 和 Claude Approvals 处于测试阶段。[^introducing-claude-ship]
- Available for GitHub repositories on Claude Team and Enterprise plans; Code Review is generally available, while PR Steward and Claude Approvals are in beta.[^introducing-claude-ship]
- 管理员可为每个仓库选择快速、标准或深度审查级别，并为 Code Review 与 PR Steward 设置支出上限。[^introducing-claude-ship]
- Admins can choose Quick, Standard, or Deep review levels per repository and set spend limits for Code Review and PR Steward.[^introducing-claude-ship]
- 官方写明，该功能不适用于零数据保留、HIPAA 配置或客户托管加密密钥的组织。[^introducing-claude-ship]
- Claude Ship is not available to organizations with Zero Data Retention, HIPAA configuration, or customer-managed encryption keys.[^introducing-claude-ship]
- 开发者可在 Claude Code 中使用 /ship 命令推送更改、打开拉取请求，并让 Claude 处理反馈与失败检查。[^introducing-claude-ship]
- Developers can use the /ship command in Claude Code to push changes, open pull requests, and let Claude handle feedback and failing checks.[^introducing-claude-ship]
- 符合条件的 Claude Enterprise 组织可领取至少 10,000 美元的 Claude Ship 积分，需在 2027 年 1 月 15 日前领取并在 30 天内使用。[^introducing-claude-ship]
- Eligible Claude Enterprise organizations can claim at least $10,000 in Claude Ship credits, claimable by January 15, 2027 and usable within 30 days.[^introducing-claude-ship]

## 相关 / Related

- 原文：[链接](https://claude.com/resources/articles/introducing-claude-ship)。 / Original: [link](https://claude.com/resources/articles/introducing-claude-ship).
- Topic: [约束重构 PR 的确定性自动合入 / Deterministic automerge for constrained refactor PRs](../../topics/deterministic-refactor-automerge.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^introducing-claude-ship]: Introducing Claude Ship: AI-Powered Pull Request Review, Fix, and Approval
