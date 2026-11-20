---
type: Source
title: "App Store 合规手册"
title_en: "App Store Compliance Playbook"
description: "一个帮助开发者在提交 iOS 和 Android 应用前自动检查拒审风险的合规守护工具。"
description_en: "A compliance playbook and automated guard that checks iOS and Android apps against App Store and Google Play rejection rules before submission."
resource: https://github.com/mjmirza/app-store-compliance
tags: [app-store, compliance, mobile, ai-coding-agent, github]
sources:
  - id: app-store-compliance-playbook
    resource: https://github.com/mjmirza/app-store-compliance
    title: "App Store Compliance Playbook"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T19:55:12+08:00
---

# App Store 合规手册

*App Store Compliance Playbook*

「帖文称」App Store Compliance Playbook 是一个企业参考与自动化守护工具，旨在将 iOS 和 Android 应用被商店拒审的情况设计为可预先避免的失败模式，并提供命令行扫描与 AI 编程工具钩子集成。[^app-store-compliance-playbook]

The App Store Compliance Playbook is an enterprise reference and automated guard designed to turn App Store and Google Play rejection into a designed-out failure mode, offering command-line scanning and integration hooks for AI coding tools.[^app-store-compliance-playbook]

## 摘要 / Summary

- 该仓库提供两条命令：克隆仓库并运行守护脚本扫描 Xcode 项目或 Android 应用，输出带文件和行号的关键拒审风险。[^app-store-compliance-playbook]
- The repo provides two commands: clone the repository and run the guard script to scan an Xcode project or Android app, outputting critical rejection risks with file and line numbers.[^app-store-compliance-playbook]
- 守护脚本可集成到 Claude Code、Codex、Gemini CLI、Cursor、Copilot 等多种 AI 编程工具，在提交前自动拦截关键风险。[^app-store-compliance-playbook]
- The guard can be integrated into AI coding tools such as Claude Code, Codex, Gemini CLI, Cursor, and Copilot to automatically block critical risks before submission.[^app-store-compliance-playbook]
- 该手册强调两个最常见拒审原因：可用的演示账号与后端，以及与应用运行时实际行为（包括所有 SDK）相匹配的隐私声明。[^app-store-compliance-playbook]
- The playbook highlights the two most common rejection causes: a working demo account with live backend, and a privacy declaration matching what the app actually does at runtime, including every SDK.[^app-store-compliance-playbook]
- 扫描结果分为 BLOCKED、CLEAR、NOT CHECKED 三种状态，并给出相应的后续处理建议。[^app-store-compliance-playbook]
- Scan results are categorized as BLOCKED, CLEAR, or NOT CHECKED, with corresponding next-step guidance.[^app-store-compliance-playbook]
- 该项目声明所有准则编号和统计数据均追溯至 Apple 或 Google 官方来源，未凭空捏造。[^app-store-compliance-playbook]
- The project states that all guideline numbers and statistics trace to official Apple or Google sources, not invented.[^app-store-compliance-playbook]

## 相关 / Related

- 原文：[链接](https://github.com/mjmirza/app-store-compliance)。 / Original: [link](https://github.com/mjmirza/app-store-compliance).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^app-store-compliance-playbook]: App Store Compliance Playbook
