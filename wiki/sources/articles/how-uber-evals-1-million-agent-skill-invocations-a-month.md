---
type: Source
title: "Uber Agent Skills 治理实战"
title_en: "How Uber Evals 1 Million Agent Skill Invocations a Month"
description: "Uber 通过分层技能市场、技能工作室与评测体系，对企业级 Agent Skill 的分发、质量与成本进行治理。"
description_en: "Uber governs enterprise Agent Skill distribution, quality, and cost through a tiered marketplace, Skill Workshop, and evaluation systems."
resource: https://www.uber.com/us/en/blog/optimizing-ubers-agent-skills
tags: [uber, agent-skills, governance, evals, ai-agents]
sources:
  - id: uber-agent-skills-governance
    resource: https://www.uber.com/us/en/blog/optimizing-ubers-agent-skills
    title: "How Uber Evals 1 Million Agent Skill Invocations a Month"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:30:41+08:00
---

# Uber Agent Skills 治理实战

*How Uber Evals 1 Million Agent Skill Invocations a Month*

「帖文称」Uber 的共享技能市场从 2025 年 10 月的 1 个技能增长到一年内超过 5,000 个，单月 Agent 技能调用超过 100 万次。文章介绍了 Uber 如何通过 Git 仓库统一分发技能，将技能划分为域、核心和常开三个层级，并借助 aifx CLI 在不同 Agent 之间统一安装；同时通过 Skill Workshop、技能气味 Linter 与分层评测体系保障质量，并测量与优化每次技能调用的成本。[^uber-agent-skills-governance]

Uber's shared skills marketplace grew from 1 skill in October 2025 to more than 5,000 in one year, with agents invoking skills over 1 million times in a single month. The article explains how Uber distributes skills through a Git repository, organizes them into domain, core, and always-on tiers, and uses the aifx CLI to unify installation across agents. It also describes Skill Workshop, a skill smell linter, and layered evals to ensure quality while measuring and optimizing the cost per skill invocation.[^uber-agent-skills-governance]

## 摘要 / Summary

- 技能按域（Domain）、核心（Core）、常开（Always-on）三层组织，毕业需通过评测系统与质量、实用性检查。[^uber-agent-skills-governance]
- Skills are organized into Domain, Core, and Always-on tiers, and graduation requires the eval system plus quality and usefulness checks.[^uber-agent-skills-governance]
- Skill Workshop 包含技能气味 Linter，要求步骤编号且每步有一个目标与软验证方式，并设错误恢复表。[^uber-agent-skills-governance]
- Skill Workshop includes a linter requiring numbered steps with one objective and a soft verification method, plus an error recovery table.[^uber-agent-skills-governance]
- 评测套件建议约 5% 黄金案例、80% 真实提示词按轨迹评分、15% 由作者评判。[^uber-agent-skills-governance]
- Eval suites are guided to about 5% golden cases, 80% real prompts graded on trajectory, and 15% author-judged cases.[^uber-agent-skills-governance]
- 仓库查询技能的消融测显示，未使用技能的会话多出 13% 工具调用、6 倍工具错误、耗时长 31%，技能答案在 87% 比较中获胜。[^uber-agent-skills-governance]
- Ablation tests of a warehouse query skill showed sessions without it made 13% more tool calls, had 6x tool errors, took 31% longer, and the skill's answer won 87% of comparisons.[^uber-agent-skills-governance]
- 通过在加载时运行脚本、用更便宜模型运行 Worker 等手段，追踪技能单次调用成本下降 46%。[^uber-agent-skills-governance]
- Running scripts at load and dispatching to cheaper worker models reduced a tracing skill's cost per invocation by 46%.[^uber-agent-skills-governance]
- 使用 OpenTelemetry 钩子采集技能使用事件，事件不包含提示词文本或文件内容，每技能计算 12 项指标。[^uber-agent-skills-governance]
- OpenTelemetry hooks collect skill usage events without prompt text or file contents, computing 12 measures per skill.[^uber-agent-skills-governance]

## 相关 / Related

- 原文：[链接](https://www.uber.com/us/en/blog/optimizing-ubers-agent-skills)。 / Original: [link](https://www.uber.com/us/en/blog/optimizing-ubers-agent-skills).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^uber-agent-skills-governance]: How Uber Evals 1 Million Agent Skill Invocations a Month
