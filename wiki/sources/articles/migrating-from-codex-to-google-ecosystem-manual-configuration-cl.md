---
type: Source
title: "从 Codex 迁到谷歌生态：手动整理配置与模型分工建议"
title_en: "Migrating from Codex to Google Ecosystem: Manual Configuration Cleanup and Model Division of Labor"
description: "小墨分享从 OpenAI Codex 迁移到 Google Gemini/AGY 的经验，建议手动梳理配置、按场景拆分工具，并保留可迁移的 Skill 以避免平台锁定。"
description_en: "Xiao Mo shares experience migrating from OpenAI Codex to Google Gemini/AGY, recommending manual configuration cleanup, scenario-based tool separation, and retaining portable Skills to avoid platform lock-in."
resource: https://x.com/xiaomovps/status/2125445661617533265
tags: [codex-migration, google-ecosystem, agent-workflow, model-routing]
sources:
  - id: xiaomovps-codex-to-google-29c6c0e6
    resource: https://x.com/xiaomovps/status/2125445661617533265
    title: "Migrating from Codex to Google Ecosystem: Manual Configuration Cleanup and Model Division of Labor"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:48:10+08:00
---

# 从 Codex 迁到谷歌生态：手动整理配置与模型分工建议

*Migrating from Codex to Google Ecosystem: Manual Configuration Cleanup and Model Division of Labor*

「帖文称」准备把工作流从 Codex 切到谷歌生态的朋友可选官方一键迁移，也可手动拆开配置逐项重理；作者本人选了后者，因为谷歌与 OpenAI 工作逻辑不同，一股脑搬过去容易“打架”。文中还给出了 Gemini 与 AGY 的场景分工、Neon 与 Carbon 的省额度用法，以及谷歌会员附带权益的提醒，并建议用户自己维护工作流与常用 Skill，避免核心逻辑被锁在单一平台黑盒里。[^xiaomovps-codex-to-google-29c6c0e6]

The post says users moving workflows from Codex to the Google ecosystem can choose official one-click migration or manually unpacking and reconfiguring items; the author chose the latter because Google and OpenAI have different work logic and bulk migration may cause conflicts. It also covers Gemini versus AGY scenario division, Neon versus Carbon quota-saving usage, Google membership benefits, and advises users to maintain their own workflows and commonly used Skills to avoid locking core logic into a single-platform black box.[^xiaomovps-codex-to-google-29c6c0e6]

## 摘要 / Summary

- 迁移有两条路：官方软件自带一键迁移，或手动拆开配置逐项重理；作者选了手动迁移。[^xiaomovps-codex-to-google-29c6c0e6]
- There are two migration paths: official one-click migration, or manually unpacking and reconfiguring items one by one; the author chose manual migration.[^xiaomovps-codex-to-google-29c6c0e6]
- 谷歌把日常和写代码拆成 Gemini 和 AGY 两个软件，两边数据不互通；建议写东西理思路用 Gemini，写代码再切 AGY。[^xiaomovps-codex-to-google-29c6c0e6]
- Google splits daily tasks and coding into Gemini and AGY with non-interoperable data; it is recommended to use Gemini for writing and thinking, and switch to AGY for coding.[^xiaomovps-codex-to-google-29c6c0e6]
- 日常文案和辅助剪视频用 Neon 顶着，额度耐用；复杂大工程才切 Carbon 规划方案，再交回 Neon 自动落地。[^xiaomovps-codex-to-google-29c6c0e6]
- Use Neon for daily copywriting and video-editing assistance to save quota; switch to Carbon only for complex project planning, then hand back to Neon for execution.[^xiaomovps-codex-to-google-29c6c0e6]
- 谷歌全家桶登一个号打通授权，会员附带大容量网盘、谷歌云体验金和 2000 个计算单元等权益。[^xiaomovps-codex-to-google-29c6c0e6]
- One Google account authorizes the whole suite; membership benefits include large cloud storage, Google Cloud credits, and 2,000 compute units.[^xiaomovps-codex-to-google-29c6c0e6]
- 作者提醒要养成自己维护工作流和常用 Skill 的习惯，把核心逻辑握在自己手里，避免全锁死在平台黑盒里。[^xiaomovps-codex-to-google-29c6c0e6]
- The author reminds users to maintain their own workflows and commonly used Skills, keeping core logic in their own hands instead of locking into a platform black box.[^xiaomovps-codex-to-google-29c6c0e6]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2125445661617533265)。 / Original: [link](https://x.com/xiaomovps/status/2125445661617533265).
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)

[^xiaomovps-codex-to-google-29c6c0e6]: Migrating from Codex to Google Ecosystem: Manual Configuration Cleanup and Model Division of Labor
