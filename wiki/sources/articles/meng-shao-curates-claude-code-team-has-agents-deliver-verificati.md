---
type: Source
title: "meng shao 整理：Claude Code 团队让 Agent 交付验证证据"
title_en: "meng shao curates: Claude Code team has agents deliver verification evidence"
description: "Claude Code 团队通过验证技能、固定评审基准和复核机制，让 AI 编程 Agent 提交可检查的证据，而不只是代码。"
description_en: "The Claude Code team uses verification skills, fixed review benchmarks, and re-check mechanisms so AI coding agents submit checkable evidence rather than code alone."
resource: https://x.com/shao__meng/status/2122480930439016820
tags: [claude-code, agent-verification, ai-engineering]
sources:
  - id: meng-shao-claude-code-verification-evidence
    resource: https://x.com/shao__meng/status/2122480930439016820
    title: "meng shao curates: Claude Code team has agents deliver verification evidence"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T08:25:35+08:00
---

# meng shao 整理：Claude Code 团队让 Agent 交付验证证据

*meng shao curates: Claude Code team has agents deliver verification evidence*

帖文称，meng shao 整理 Claude Code 团队的经验分享：团队 90% 的代码由 Claude 编写并审查，真正限制并行规模的不再是代码生成速度，而是人能否确认结果可靠；团队主张让 Agent 提交可检查的验证证据，减少人逐项核对负担。[^meng-shao-claude-code-verification-evidence]

The post, curated by meng shao, shares the Claude Code team's experience: 90% of its code is written and reviewed by Claude, and the true limit on parallel scale is no longer code generation speed but whether humans can confirm result reliability; the team advocates agents submitting checkable verification evidence to reduce human item-by-item checking.[^meng-shao-claude-code-verification-evidence]

## 摘要 / Summary

- 启动和冒烟检查被写成 verify Skill，由 Claude 在提交前执行；检查失败后尝试修复，三轮仍失败则交给人。[^meng-shao-claude-code-verification-evidence]
- Startup and smoke checks are written as a verify Skill and executed by Claude before submission; after failure it attempts repair, and if still failing after three rounds it is handed to a human.[^meng-shao-claude-code-verification-evidence]
- 一份 39 项可靠性清单根据代码改动触发，通常只检查相关的 3—10 项；检查由代码所有者编写。[^meng-shao-claude-code-verification-evidence]
- A 39-item reliability checklist is triggered by code changes, usually checking only 3–10 relevant items; checks are written by code owners.[^meng-shao-claude-code-verification-evidence]
- 代码审查规则 REVIEW.md 从基础分支读取，而非当前拉取请求中可能被修改的版本；审查针对固定提交。[^meng-shao-claude-code-verification-evidence]
- Review rules in REVIEW.md are read from the base branch rather than a potentially modified version in the current pull request; reviews target fixed commits.[^meng-shao-claude-code-verification-evidence]
- 每次提交记录验证方式，可标注“未验证”；系统可拦截未运行审查或验证的提交，但同一会话连续拦截两次后放行。[^meng-shao-claude-code-verification-evidence]
- Each commit records its verification method, possibly marked “unverified”; the system can block commits without review or verification, but releases after two consecutive blocks in the same session to avoid deadlock.[^meng-shao-claude-code-verification-evidence]
- 新规则仅在同类问题出现于至少两个拉取请求、可从差异识别、三个 Agent 尝试反例并经人批准后才增加。[^meng-shao-claude-code-verification-evidence]
- New rules are added only after the same problem appears in at least two pull requests, is identifiable from the diff, three agents attempt counterexamples, and a human approves.[^meng-shao-claude-code-verification-evidence]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122480930439016820)。 / Original: [link](https://x.com/shao__meng/status/2122480930439016820).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)

[^meng-shao-claude-code-verification-evidence]: meng shao curates: Claude Code team has agents deliver verification evidence
