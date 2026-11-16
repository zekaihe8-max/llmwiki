---
type: Source
title: "Claude-BugHunter 漏洞猎杀技能包"
title_en: "Claude-BugHunter: Claude Code Bug Hunting & Red-Team Skill Bundle"
description: "面向 Claude Code 的自包含漏洞猎杀与外部红队技能包，含 83 项技能与 15 个斜杠命令。"
description_en: "A self-contained Claude Code skill bundle for bug hunting and external red-team work, with 83 skills and 15 slash commands."
resource: https://github.com/elementalsouls/Claude-BugHunter
tags: [claude-code, bug-bounty, red-team, agent-skills, cybersecurity]
sources:
  - id: claude-bughunter
    resource: https://github.com/elementalsouls/Claude-BugHunter
    title: "Claude-BugHunter: Claude Code Bug Hunting & Red-Team Skill Bundle"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:31:33+08:00
---

# Claude-BugHunter 漏洞猎杀技能包

*Claude-BugHunter: Claude Code Bug Hunting & Red-Team Skill Bundle*

「帖文称」Claude-BugHunter 是一个可一次性安装的 Claude Code 技能包，内置 83 项技能、15 个斜杠命令以及 681 个已披露报告模式，覆盖 24 个核心漏洞类别，支持 Web 应用、企业边界平台、云误配与报告验证等外部攻击面场景，并可在 Claude Code、OpenCode、Codex CLI、Hermes 与 Google AntiGravity 等多个 Agent 框架中加载。[^claude-bughunter]

The post describes Claude-BugHunter as a drop-in Claude Code skill bundle containing 83 skills, 15 slash commands, and 681 disclosed-report patterns across 24 core vulnerability classes, covering web apps, enterprise perimeter platforms, cloud misconfigurations, and reporting validation for external attack surfaces, loadable across Claude Code, OpenCode, Codex CLI, Hermes, and Google AntiGravity.[^claude-bughunter]

## 摘要 / Summary

- 包含 83 项技能与 15 个斜杠命令，按主题自动加载，无需按名称调用。[^claude-bughunter]
- Contains 83 skills and 15 slash commands, auto-loaded by topic with no invocation by name.[^claude-bughunter]
- 覆盖 58 个 Web 漏洞类别技能，来源于 681 个 HackerOne 披露报告，涵盖 XSS、SQLi、SSRF、IDOR 等。[^claude-bughunter]
- Covers 58 web vulnerability-class skills curated from 681 disclosed HackerOne reports, including XSS, SQLi, SSRF, and IDOR.[^claude-bughunter]
- 支持 M365/Entra、Okta、vCenter、企业 VPN 等平台的 2024–2026 CVE 链与凭证后提权。[^claude-bughunter]
- Supports 2024–2026 CVE chains and post-credential escalation for M365/Entra, Okta, vCenter, and enterprise VPN platforms.[^claude-bughunter]
- 可在 Claude Code、OpenCode、Codex CLI、Hermes 与 Google AntiGravity 等多个 Agent 框架中安装。[^claude-bughunter]
- Installable across Claude Code, OpenCode, Codex CLI, Hermes, and Google AntiGravity agent frameworks.[^claude-bughunter]
- 明确声明仅限授权资产测试，排除内部 Active Directory、C2 框架、后渗透与恶意软件开发等场景。[^claude-bughunter]
- Explicitly limited to authorized assets, excluding internal Active Directory, C2 frameworks, post-exploitation, and malware development.[^claude-bughunter]

## 相关 / Related

- 原文：[链接](https://github.com/elementalsouls/Claude-BugHunter)。 / Original: [link](https://github.com/elementalsouls/Claude-BugHunter).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [网安研究选型：少破甲的模型与 Harness / Cyber-research model picks that need little jailbreaking](../../topics/cyber-research-models-without-jailbreak.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)

[^claude-bughunter]: Claude-BugHunter: Claude Code Bug Hunting & Red-Team Skill Bundle
