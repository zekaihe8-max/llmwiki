---
type: Source
title: 宝玉转述 Lesse：上千 Agent 仍缺四道基建题
title_en: Dotey relays Lesse—four infra gaps for thousand-agent systems
description: 宝玉译介 Anthropic 平台工程负责人 Katelyn Lesse：解锁大规模多智能体，仍缺调度、身份授权、隔离与可观测急停四道基建；工程师正因此更有事做。
description_en: Dotey relays Anthropic platform eng lead Katelyn Lesse—unlocking large multiagent systems still needs scheduling, identity/authz, isolation, and observability/kill-switch infra; that makes now a compelling time to be an engineer.
resource: https://x.com/dotey/status/2115229306490126432
tags: [multiagent, infrastructure, anthropic, katelyn-lesse, agent-substrate, identity, sandbox, observability, dotey]
sources:
  - id: dotey-lesse-multiagent-four-infra
    resource: https://x.com/dotey/status/2115229306490126432
    title: Dotey relays Lesse—four infra gaps for thousand-agent systems
    author: human:dotey
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:15:00+08:00
date: 2026-10-28
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 宝玉转述 Lesse：上千 Agent 仍缺四道基建题

*Dotey relays Lesse—four infra gaps for thousand-agent systems*

[@dotey](https://x.com/dotey) 译介 Anthropic 平台工程负责人 Katelyn Lesse 的文章：许多人因 AI 会写代码而怀疑手艺贬值，她看到的相反——接下来一两年，AI 想做成大事，得先靠程序员解决一批新问题；现在是当工程师最有意思的时候之一。Lesse 据 Kleiner Perkins 访谈介绍，团队约 200 人，此前在 Stripe 与 Betterment 带过工程；文发在她个人博客与 X，X 阅读量约 61 万。原文博客 <https://www.katelynlesse.com/blog/new-problems-for-engineers-to-solve>。[^dotey-lesse-multiagent-four-infra] 原帖 <https://x.com/dotey/status/2115229306490126432>。

[@dotey](https://x.com/dotey) relays Anthropic platform engineering lead Katelyn Lesse’s essay: many engineers fear AI coding devalues their craft; she sees the opposite—over the next year or two, AI’s big wins still need programmers to solve a new set of problems, and now is one of the most interesting times to be an engineer. Per a Kleiner Perkins interview she cites, her team is about 200 people after leading engineering at Stripe and Betterment; the piece ran on her blog and X (~610k reads). Blog: <https://www.katelynlesse.com/blog/new-problems-for-engineers-to-solve>.[^dotey-lesse-multiagent-four-infra] Post: <https://x.com/dotey/status/2115229306490126432>.

## 摘要 / Summary

- 背景：智能体从聊天框 → 云端长跑 → 多智能体（总管拆任务、助手执行、另有打分/建议）；已有人搭成千上万智能体连续跑科研、发现与硬件设计，规模一上来冒出四类新问题。[^dotey-lesse-multiagent-four-infra]
- Context: agents moved from chat → long cloud runs → multiagent (orchestrator splits work, helpers execute, scorers/advisors); people already run thousands of continuous agents for research, discovery, and hardware design—and scale surfaces four new problem classes.[^dotey-lesse-multiagent-four-infra]
- 难题一·调度：Kubernetes 擅长管同质副本；智能体相反——各自有状态、大量时间空闲等待模型/工具/同伴/人，忙时又可能一下冒出几千个。Google 开源 Agent Substrate 让闲置智能体休眠、需时约半秒唤醒；Lesse 称这块仍大量未解。官方介绍 <https://cloud.google.com/blog/products/containers-kubernetes/agent-substrate-available-on-gke>。[^dotey-lesse-multiagent-four-infra]
- Problem 1 · scheduling: Kubernetes fits identical replicas; agents are the opposite—unique state, long idle waits on models/tools/peers/humans, then thousands can appear at once. Google’s open-source Agent Substrate can sleep idle agents and wake them in about half a second; Lesse says much remains unsolved. Official: <https://cloud.google.com/blog/products/containers-kubernetes/agent-substrate-available-on-gke>.[^dotey-lesse-multiagent-four-infra]
- 难题二·身份与授权：许多智能体用人的账号与权限，须分清人做还是 AI 代做；更难的是事先划清连干几周能做什么、智能体互派活时凭什么互信。身份可借用短时临时凭证；授权基本仍是空白。[^dotey-lesse-multiagent-four-infra]
- Problem 2 · identity and authz: many agents use human accounts/permissions, so systems must tell human vs AI-on-behalf actions apart; harder still is stating weeks-ahead what an agent may do, and how agents trust each other when delegating. Identity can reuse short-lived credentials; authorization is still largely blank.[^dotey-lesse-multiagent-four-infra]
- 难题三·隔离：核心依赖软件漏洞冒出速度快过修补（文中举本月 PHP、GitLab、Node.js）；上千智能体写不明代码、读不明网页，风险更大。多智能体还有传染：一个被网页恶意指令骗后可转给同伴或写入共享记忆。建议每智能体严格沙箱隔离。[^dotey-lesse-multiagent-four-infra]
- Problem 3 · isolation: core-dependency vulns appear faster than patches (PHP, GitLab, Node.js cited that month); thousands of agents writing opaque code and reading opaque pages raise the stakes. Multiagent adds contagion—one prompt-injected agent can forward instructions or write shared memory. Advice: strict per-agent sandboxes.[^dotey-lesse-multiagent-four-infra]
- 难题四·可观测与急停：须记下每个智能体做了什么且记录不可被任一智能体篡改；并要有总闸，发现问题可一次停全系统、收回权限。最难的是判断是否跑偏——反复访问非白名单站点可能是破坏，也可能只是太想做完任务。[^dotey-lesse-multiagent-four-infra]
- Problem 4 · observability and kill switch: log what each agent did in a way no agent can alter; plus a master switch to stop the whole system and revoke permissions when monitoring trips. Hardest is judging drift—repeated off-allowlist site access may be sabotage or just over-eager task completion.[^dotey-lesse-multiagent-four-infra]
- 收束：这些领域大多还没有现成答案，值得钻进去学、形成自己的判断。[^dotey-lesse-multiagent-four-infra]
- Close: most of these areas still lack ready answers—worth diving in and forming one’s own judgment.[^dotey-lesse-multiagent-four-infra]

## 相关 / Related

- Topic: [多智能体四道基建题](../../topics/multiagent-infra-four-problems.md)
- Topic: [公司级 Agent Harness 五原语](../../topics/company-agent-harness.md)
- Topic: [智能体规模化工程](../../topics/agent-scaled-engineering.md)
- Topic: [智能体算力与治理](../../topics/agent-compute-and-governance.md)
- Topic: [Agent 身份与平台握钥](../../topics/agent-identity-platform-keys.md)
- Topic: [软件工厂](../../topics/software-factory.md)

[^dotey-lesse-multiagent-four-infra]: Dotey relays Lesse—four infra gaps for thousand-agent systems
