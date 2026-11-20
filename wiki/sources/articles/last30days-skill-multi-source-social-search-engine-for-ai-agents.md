---
type: Source
title: "last30days-skill：面向 AI 智能体的多源社交搜索引擎"
title_en: "last30days-skill: Multi-Source Social Search Engine for AI Agents"
description: "一个 AI 智能体技能，并行搜索 Reddit、X、YouTube 等十余平台，按真实人类互动（点赞、投票、预测市场资金）评分并综合生成简报。"
description_en: "An AI agent skill that searches 10+ platforms in parallel, scores by real human engagement (upvotes, likes, prediction-market money), and synthesizes a briefing."
resource: https://github.com/mvanhorn/last30days-skill
tags: [agents, search, skills, social-media, synthesis]
sources:
  - id: last30days-skill-multi-source-search
    resource: https://github.com/mvanhorn/last30days-skill
    title: "last30days-skill: Multi-Source Social Search Engine for AI Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T20:02:00+08:00
---

# last30days-skill：面向 AI 智能体的多源社交搜索引擎

*last30days-skill: Multi-Source Social Search Engine for AI Agents*

last30days-skill 是一个可安装到 Claude Code、Codex、Cursor 等 50 多种 Agent 宿主的技能。它零配置即可搜索 Reddit、Hacker News、GitHub、Polymarket 等源，并在用户授权后接入 X、YouTube、TikTok、arXiv、Techmeme 等需密钥平台。检索结果由 AI 智能体按「真实人类互动强度」（如 Reddit 赞数、Polymarket 资金量）而非 SEO 权重重新排序，再生成一份可引用的综合简报。v4 新增「专利秘密信号」与「招聘页秘密信号」，能从企业专利申请与招聘 JD 中推断未发布产品动向。[^last30days-skill-multi-source-search]

last30days-skill is an installable skill for Claude Code, Codex, Cursor, and 50+ agent hosts. It searches Reddit, Hacker News, GitHub, Polymarket, etc. with zero config, and adds X, YouTube, TikTok, arXiv, Techmeme, etc. when credentials are provided. Results are re-ranked by an AI agent on real human engagement (Reddit upvotes, Polymarket volume) rather than SEO, then synthesized into a cited brief. v4 adds Patent Secret Signals and Jobs Page Secret Signals to infer unannounced product moves from patent filings and job postings.[^last30days-skill-multi-source-search]

## 摘要 / Summary

- 支持 15 个以上数据源，包括 Reddit、X、YouTube、TikTok、Hacker News、Polymarket、GitHub、arXiv、Techmeme、LinkedIn 等。[^last30days-skill-multi-source-search]
- Supports 15+ sources including Reddit, X, YouTube, TikTok, Hacker News, Polymarket, GitHub, arXiv, Techmeme, LinkedIn, etc.[^last30days-skill-multi-source-search]
- 按真实人类互动（点赞数、观看量、预测市场资金量）评分，而非编辑筛选或 SEO 权重。[^last30days-skill-multi-source-search]
- Scores by real human engagement (upvotes, views, prediction-market volume) rather than editorial curation or SEO weight.[^last30days-skill-multi-source-search]
- 可通过 `/plugin marketplace add mvanhorn/last30days-skill` 或 `npx skills add mvanhorn/last30days-skill -g` 一键安装到主流 Agent 环境。[^last30days-skill-multi-source-search]
- One-click install via `/plugin marketplace add mvanhorn/last30days-skill` or `npx skills add mvanhorn/last30days-skill -g` into major agent environments.[^last30days-skill-multi-source-search]
- v4 新增「专利秘密信号」与「招聘页秘密信号」，自动从美国专利申请与企业招聘页挖掘未公开产品线索。[^last30days-skill-multi-source-search]
- v4 adds Patent Secret Signals and Jobs Page Secret Signals, automatically mining unannounced product clues from US patent filings and company career pages.[^last30days-skill-multi-source-search]
- 典型用例：会前背景调研、竞品动向追踪、热点话题发现、突发事件复盘、工具横向对比、出行规划、快速学习新技术。[^last30days-skill-multi-source-search]
- Typical use cases: pre-meeting research, competitor tracking, trend discovery, breaking-event recaps, tool comparisons, travel planning, rapid skill learning.[^last30days-skill-multi-source-search]
- 所有来源的可用性取决于凭证、本地工具链、话题类型与显式 opt-in，详见 CONFIGURATION.md#source-requirements。[^last30days-skill-multi-source-search]
- Source availability depends on credentials, local tooling, topic type, and explicit opt-ins; see CONFIGURATION.md#source-requirements.[^last30days-skill-multi-source-search]

## 相关 / Related

- 原文：[链接](https://github.com/mvanhorn/last30days-skill)。 / Original: [link](https://github.com/mvanhorn/last30days-skill).
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^last30days-skill-multi-source-search]: last30days-skill: Multi-Source Social Search Engine for AI Agents
