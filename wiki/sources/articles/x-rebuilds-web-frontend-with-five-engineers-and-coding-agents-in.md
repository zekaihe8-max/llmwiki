---
type: Source
title: "X 用 5 个工程师半年重做 Web 端"
title_en: "X Rebuilds Web Frontend with Five Engineers and Coding Agents in Six Months"
description: "X 靠约 5 名工程师配合编程 Agent，半年重建 Web 端、合并三套旧服务，并使加载速度提升 12.8 倍。"
description_en: "X rebuilt its Web frontend with about five engineers and coding agents in six months, merging three legacy services and improving load speed 12.8x."
resource: https://x.com/wquguru/status/2121562681069211693
tags: [x, ai-coding-agents, frontend-refactor, engineering-efficiency]
sources:
  - id: x-web-rebuild-five-engineers-agents
    resource: https://x.com/wquguru/status/2121562681069211693
    title: "X Rebuilds Web Frontend with Five Engineers and Coding Agents in Six Months"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:14:21+08:00
---

# X 用 5 个工程师半年重做 Web 端

*X Rebuilds Web Frontend with Five Engineers and Coding Agents in Six Months*

「帖文称」X 用大约 5 个工程师配合 coding agent，不到 6 个月做出了新 Web 端第一版，并把三套旧服务合并成一套；每个数据中心省了一半机器，旧 rweb SSR 关停并删掉近 36,000 行代码，在慢网络加 4 倍 CPU 降速的实验室测试里，打开时间从 25 秒缩到 1.7 秒，快了 12.8 倍。帖文还列出了 AGENTS.md 规约、25 个以上内置 skill、针对 AI 坏习惯的静态检查插件，以及以旧系统为可运行规格并做 parity 比对的做法。[^x-web-rebuild-five-engineers-agents]

The post claims that X used about five engineers working with a coding agent to ship the first version of a new Web frontend in under six months, merging three legacy services into one; each datacenter halved its machines, the old rweb SSR was shut down with nearly 36,000 lines deleted, and lab tests with slow network and 4x CPU slowdown showed load time falling from 25 seconds to 1.7 seconds, 12.8x faster. It also describes AGENTS.md conventions, over 25 built-in skills, static-check plugins targeting AI bad habits, and parity testing against the old system.[^x-web-rebuild-five-engineers-agents]

## 摘要 / Summary

- 约 5 名工程师配合 coding agent，不到 6 个月完成 X 新 Web 端首个版本，并将三套旧服务合并为一套。[^x-web-rebuild-five-engineers-agents]
- About five engineers working with a coding agent completed the first version of X's new Web frontend in under six months, merging three legacy services into one.[^x-web-rebuild-five-engineers-agents]
- 每个数据中心机器减半，旧 rweb SSR 被关停并删除近 36,000 行代码。[^x-web-rebuild-five-engineers-agents]
- Each datacenter halved its machine count; the old rweb SSR was shut down and nearly 36,000 lines of code deleted.[^x-web-rebuild-five-engineers-agents]
- 慢网络配 4 倍 CPU 降速的实验室测试中，打开时间从 25 秒缩短至 1.7 秒，提速 12.8 倍。[^x-web-rebuild-five-engineers-agents]
- In lab tests with slow network and 4x CPU slowdown, page load time dropped from 25 seconds to 1.7 seconds, a 12.8x speedup.[^x-web-rebuild-five-engineers-agents]
- 仓库根目录设 AGENTS.md 定规矩，并内置 25 个以上 skill 覆盖提交、PR、代码审查、CI 跟踪、依赖、翻译、Relay 与路由等标准动作。[^x-web-rebuild-five-engineers-agents]
- The repo root has an AGENTS.md setting rules, and more than 25 built-in skills cover commits, PRs, code review, CI tracking, dependencies, translations, Relay, and routing.[^x-web-rebuild-five-engineers-agents]
- 用 oxlint 自定义插件和 anti-slop 插件在语法树层面拒绝 AI 偷懒写法，pre-commit 跑格式化、lint、类型检查，pre-push 检查引用方包。[^x-web-rebuild-five-engineers-agents]
- Custom oxlint and anti-slop plugins reject AI shortcuts at the AST level; pre-commit runs format, lint, and type checks, while pre-push checks dependent packages.[^x-web-rebuild-five-engineers-agents]
- 以旧系统为可运行规格，并用伪装成已验证 Googlebot 的 parity 脚本自动比对新旧系统的状态码、重定向、标题、OG 卡片和结构化数据。[^x-web-rebuild-five-engineers-agents]
- The old system serves as a runnable spec, and parity scripts impersonating verified Googlebot automatically compare status codes, redirects, titles, OG cards, and structured data between new and old systems.[^x-web-rebuild-five-engineers-agents]

## 相关 / Related

- 原文：[链接](https://x.com/wquguru/status/2121562681069211693)。 / Original: [link](https://x.com/wquguru/status/2121562681069211693).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^x-web-rebuild-five-engineers-agents]: X Rebuilds Web Frontend with Five Engineers and Coding Agents in Six Months
