---
type: Source
title: "常驻 Agent 系列（一）：无人值守时的权限边界"
title_en: "Always-on Agent Series (1): Permission Boundaries When Unattended"
description: "常驻 Agent 如何在凭证代理、自动审核与延期调用之间建立可恢复的权限边界。"
description_en: "How always-on agents establish recoverable permission boundaries among credential proxying, automatic auditing, and deferred calls."
resource: https://x.com/shao__meng/status/2124437881569554634
tags: [agents, permissions, always-on, anthropic, credential-proxy, human-in-the-loop]
sources:
  - id: shao-meng-always-on-agent-permissions-2124437881
    resource: https://x.com/shao__meng/status/2124437881569554634
    title: "Always-on Agent Series (1): Permission Boundaries When Unattended"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:20:37+08:00
---

# 常驻 Agent 系列（一）：无人值守时的权限边界

*Always-on Agent Series (1): Permission Boundaries When Unattended*

「帖文称」Anthropic 发布的《Building always-on agents》介绍了搭建常驻 Agent 的关键组件，咱们分四篇讨论，第一篇先看权限。文章提出将凭证代理放在 Agent 运行环境之外，避免模型直接接触密码、API 密钥或访问令牌；同时区分凭证保护与行动授权，并借用 Claude Code 自动模式的思路，用分类器审查高风险动作，最重要的决定仍交给人工。当需要批准时，系统保存会话、结束当前运行，将请求放入收件箱，用户答复后再恢复会话继续执行。凭证代理、自动审核和延期调用三种机制分别处理不同问题，不能互相替代。[^shao-meng-always-on-agent-permissions-2124437881]

The post says Anthropic's "Building always-on agents" introduces key components for building always-on agents, discussed in four parts, with the first part focusing on permissions. It proposes placing a credential proxy outside the agent runtime so the model never directly touches passwords, API keys, or access tokens; it distinguishes credential protection from action authorization, and borrows Claude Code's auto-mode approach to use a classifier to review high-risk actions, with the most important decisions still left to humans. When approval is needed, the system saves the session, ends the current run, puts the request in an inbox, and resumes the session after the user replies. Credential proxying, automatic auditing, and deferred calls handle different problems and cannot substitute for each other.[^shao-meng-always-on-agent-permissions-2124437881]

## 摘要 / Summary

- 凭证代理：Agent 发起请求时不携带真实凭证，由代理在转发前注入，模型和执行环境不直接接触凭证内容。[^shao-meng-always-on-agent-permissions-2124437881]
- Credential proxy: the agent does not carry real credentials when making requests; the proxy injects them before forwarding, so the model and execution environment never directly touch credential content.[^shao-meng-always-on-agent-permissions-2124437881]
- 凭证保护与行动授权分开：即使凭证未泄露，经过认证的请求仍可能产生错误后果，因此需要动作层面的检查。[^shao-meng-always-on-agent-permissions-2124437881]
- Credential protection and action authorization are separate: even without credential leakage, an authenticated request can still cause harmful consequences, so action-level checks are still needed.[^shao-meng-always-on-agent-permissions-2124437881]
- 自动审核：用分类器审查风险较高的动作，拦截危险操作并让模型尝试更稳妥路径，最重要决定仍需人工参与。[^shao-meng-always-on-agent-permissions-2124437881]
- Automatic auditing: a classifier reviews higher-risk actions, blocks dangerous operations and prompts the model to try safer paths, while the most important decisions still require human involvement.[^shao-meng-always-on-agent-permissions-2124437881]
- 延期工具调用：遇到需要批准的调用时，保存停在途中会话、结束当前运行，用户答复作为新事件进入收件箱后恢复会话。[^shao-meng-always-on-agent-permissions-2124437881]
- Deferred tool calls: when approval is needed, the in-progress session is saved and the current run ended; the user's reply enters the inbox as a new event to resume the session.[^shao-meng-always-on-agent-permissions-2124437881]
- 三种机制配合：凭证代理减少敏感信息暴露，自动审核识别危险动作并减少重复确认，延期调用让关键决定交给人并保留执行状态。[^shao-meng-always-on-agent-permissions-2124437881]
- Three mechanisms work together: credential proxy reduces sensitive information exposure, automatic auditing identifies dangerous actions and reduces repeated confirmations, and deferred calls hand key decisions to humans while preserving execution state.[^shao-meng-always-on-agent-permissions-2124437881]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2124437881569554634)。 / Original: [link](https://x.com/shao__meng/status/2124437881569554634).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Agent 进收件箱 / Agents in the inbox](../../topics/agent-in-inbox.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [Agent 身份与平台握钥 / Agent identity and platform-held keys](../../topics/agent-identity-platform-keys.md)

[^shao-meng-always-on-agent-permissions-2124437881]: Always-on Agent Series (1): Permission Boundaries When Unattended
