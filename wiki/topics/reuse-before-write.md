---
type: Topic
title: 先复用再编写
title_en: Reuse before write
description: Agent 写代码前应先问：是否需要改、仓库/标准库/浏览器/操作系统或已装依赖是否已覆盖；再交付最小可工作版本，并为有风险逻辑配测试。
description_en: Before an agent writes code, it should ask whether the change is needed and whether the repo, standard library, browser, OS, or an installed dependency already covers it, then ship the smallest working version with a test for risky logic.
tags: [agents, reuse, minimal-code, skills, practice]
sources:
  - id: voxyz-ponytail-5
    resource: https://x.com/Voxyz_ai/status/2113344640959250912
    title: Vox on Ponytail 5
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
---

# 先复用再编写

*Reuse before write*

Agent 应优先找已有能力，而不是生成大片新表面。清单在第一次编辑前跑完：是否需要、仓库、标准库、平台、依赖、一行解，再落最小可工作改动——有风险逻辑配测试，且不丢掉校验、错误处理、安全或无障碍。[^voxyz-ponytail-5]

Agents should prefer finding what already exists over generating large new surfaces. The checklist runs before the first edit: need, repo, stdlib, platform, dependency, one-liners, then the smallest working change—with tests for risky logic, and without dropping validation, error handling, security, or accessibility.[^voxyz-ponytail-5]

## 综合分析 / Synthesis

[Vox on Ponytail 5](../sources/articles/voxyz-ponytail-5.md) 转述 Ponytail 5 技能重写与作者自测 Claude Code 基准：同一请求，当 agent 复用仓库组件与平台能力时代码少很多；39 题上代码更少、时间更短、费用更低，有风险逻辑带测比例更高。同帖还涵盖在 diff 之外读代码的审查与审计命令，以及费用、token、复用与测试状态的提示栏。[^voxyz-ponytail-5]

[Vox on Ponytail 5](../sources/articles/voxyz-ponytail-5.md) relays the Ponytail 5 skill rewrite and the maker's own Claude Code benchmarks: same request, far less code when the agent reuses repo components and platform features; across 39 tasks, less code, time, and cost, and a higher share of risky logic shipping with a test. The same post covers review and audit commands that read code outside the diff, plus a prompt bar for cost, tokens, reuse, and test status.[^voxyz-ponytail-5]

## 矛盾与变化 / Contradictions

暂无。所报数字是作者自测，非第三方评测。[^voxyz-ponytail-5]

None yet. The reported numbers are the maker's own benchmark, not a third-party evaluation.[^voxyz-ponytail-5]

## 相关 / Related

- Source: [Vox on Ponytail 5](../sources/articles/voxyz-ponytail-5.md)

[^voxyz-ponytail-5]: Vox on Ponytail 5
