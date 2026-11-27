---
type: Source
title: "Coucou 等五个 AI Agent 开源项目值得关注"
title_en: "Coucou and Five AI Agent Open-Source Projects Worth Watching"
description: "帖文推荐 GitHub 上五个热度高的 AI Agent 开源项目，涵盖编程 Agent 远程审批、全网讨论抓取、汇编大模型运行、性能优化流程和轻量 PostgreSQL 启动。"
description_en: "The post recommends five trending AI Agent open-source projects on GitHub, covering coding-agent remote approval, whole-web discussion scraping, assembly-model execution, performance-optimization workflow, and lightweight PostgreSQL startup."
resource: https://x.com/xiaomovps/status/2126196718253527532
tags: [ai-agents, open-source, github, coding-agent, agent-skill, assembly, postgresql]
sources:
  - id: 20c07b3dd678ff0f
    resource: https://x.com/xiaomovps/status/2126196718253527532
    title: "Coucou and Five AI Agent Open-Source Projects Worth Watching"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T20:13:30+08:00
---

# Coucou 等五个 AI Agent 开源项目值得关注

*Coucou and Five AI Agent Open-Source Projects Worth Watching*

「帖文称」本周 GitHub 上最值得看的 5 个 AI Agent 开源项目包括 Coucou、last30days-skill、llm.asm、AgenticAlgorithmEngineering 和 minipg，方向从编程 Agent 远程审批到纯汇编跑大模型各不相同。Coucou 已有 7500 多 Star，支持在 Mac 刘海屏和 iPhone 锁屏查看代码改动与额度，并通过私有 iCloud 实现面容 ID 远程审批；last30days-skill 拥有 7.5 万多 Star，可抓取 Reddit、Hacker News、X、YouTube 字幕、GitHub、arXiv 等平台的真实讨论；llm.asm 用 1.7 万行纯汇编实现 24KB 裸机系统，可在无硬盘虚拟机上跑 Qwen3-0.6B；AgenticAlgorithmEngineering 来自海德堡大学，强制 Agent 先做性能剖析和可证伪假设再改代码；minipg 是单个可执行文件，800 毫秒拉起 PostgreSQL 18，无需 Docker。[^20c07b3dd678ff0f]

The post says this week's five most worthwhile AI Agent open-source projects on GitHub are Coucou, last30days-skill, llm.asm, AgenticAlgorithmEngineering, and minipg, spanning coding-agent remote approval, whole-web discussion scraping, assembly-based model execution, performance-optimization workflow, and lightweight PostgreSQL startup. Coucou has over 7,500 stars and supports viewing code changes and quota on Mac notch screens and iPhone lock screens, with Face ID remote approval via private iCloud; last30days-skill has over 75,000 stars and scrapes real discussions from Reddit, Hacker News, X, YouTube captions, GitHub, arXiv, and more; llm.asm uses 17,000 lines of pure assembly to build a 24KB bare-metal system that can run Qwen3-0.6B on diskless VMs; AgenticAlgorithmEngineering from Heidelberg University forces agents to profile performance and propose falsifiable hypotheses before editing code; minipg is a single executable that starts PostgreSQL 18 in 800ms without Docker.[^20c07b3dd678ff0f]

## 摘要 / Summary

- Coucou 支持 Claude Code、Codex、Cursor、Antigravity 和 Hermes，在 Mac 刘海屏显示实时代码改动和剩余额度，锁屏后通过私有 iCloud 同步到 iPhone 灵动岛和锁屏，用面容 ID 远程审批。[^20c07b3dd678ff0f]
- Coucou supports Claude Code, Codex, Cursor, Antigravity, and Hermes; shows real-time code changes and remaining quota on Mac notch screens, syncs to iPhone Dynamic Island and lock screen via private iCloud after locking, and approves remotely with Face ID.[^20c07b3dd678ff0f]
- last30days-skill 目前 7.5 万多 Star，能同时搜 Reddit、Hacker News、X、YouTube 字幕、GitHub、arXiv 甚至预测市场，按真实互动量打分筛掉 SEO 水文，一行 npx 命令装进 Claude Code、Codex 或 Gemini CLI。[^20c07b3dd678ff0f]
- last30days-skill has over 75,000 stars; searches Reddit, Hacker News, X, YouTube captions, GitHub, arXiv, and prediction markets simultaneously, scoring by real engagement to filter SEO spam; installs into Claude Code, Codex, or Gemini CLI with one npx command.[^20c07b3dd678ff0f]
- llm.asm 刚开源两天冲上 HN 首页前十，零 C、零 Rust、零系统依赖，纯 x86-64 汇编手搓推理引擎和 24KB 可引导内核，无硬盘 Proxmox 或 KVM 虚拟机不到 100 毫秒启动跟 Qwen3-0.6B 对话。[^20c07b3dd678ff0f]
- llm.asm reached HN front-page top ten within two days of open-sourcing; zero C, zero Rust, zero system dependencies; pure x86-64 assembly inference engine and 24KB bootable kernel; starts and chats with Qwen3-0.6B in under 100ms on diskless Proxmox or KVM VMs.[^20c07b3dd678ff0f]
- AgenticAlgorithmEngineering 由海德堡大学算法工程组开源，强制 Claude Code 和 Codex 走性能剖析、提出可证伪提速假设、跑基准测试和断言才保留 Git 补丁，生成实验报告需本地配 Python 3 和 LaTeX。[^20c07b3dd678ff0f]
- AgenticAlgorithmEngineering is open-sourced by Heidelberg University's algorithm engineering group; forces Claude Code and Codex to profile performance, propose falsifiable speedup hypotheses, run benchmarks and assertions before keeping Git patches; generating experiment reports requires local Python 3 and LaTeX.[^20c07b3dd678ff0f]
- minipg 是单个可执行文件，800 毫秒拉起 PostgreSQL 18，底层调系统自带虚拟化能力，无需 Docker 桌面端或镜像，整个数据库是一个便携 .pgdb 文件夹，目前早期原型仅适合本地开发环境。[^20c07b3dd678ff0f]
- minipg is a single executable that starts PostgreSQL 18 in 800ms; uses system-built-in virtualization, no Docker Desktop or images; the whole database is a portable .pgdb folder; early prototype suitable only for local development, not production.[^20c07b3dd678ff0f]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2126196718253527532)。 / Original: [link](https://x.com/xiaomovps/status/2126196718253527532).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [面向 Agent 的编程语言 / Languages for agents](../../topics/languages-for-agents.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)

[^20c07b3dd678ff0f]: Coucou and Five AI Agent Open-Source Projects Worth Watching
