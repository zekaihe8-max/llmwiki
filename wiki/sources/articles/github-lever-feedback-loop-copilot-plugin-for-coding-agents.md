---
type: Source
title: "GitHub Lever：面向编程 Agent 的反馈循环 Copilot 插件"
title_en: "GitHub Lever: Feedback-loop Copilot Plugin for Coding Agents"
description: "GitHub 推出的 Copilot 插件 lever，让编程 Agent 通过循环卡片自行检查工作并持续迭代改进。"
description_en: "GitHub's Copilot plugin lever lets coding agents check their own work and iterate continuously using Loop Cards."
resource: https://github.com/github/lever
tags: [github, copilot, coding-agent, feedback-loop, plugin]
sources:
  - id: github-lever
    resource: https://github.com/github/lever
    title: "GitHub Lever: Feedback-loop Copilot Plugin for Coding Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:50:07+08:00
---

# GitHub Lever：面向编程 Agent 的反馈循环 Copilot 插件

*GitHub Lever: Feedback-loop Copilot Plugin for Coding Agents*

「帖文称」GitHub 的 lever 是一个面向编程 Agent 的 Copilot 插件，核心是建立反馈循环：Agent 先拿到一个可测量的指标和“更好”的标准，然后自主迭代数小时，无需人工粘贴截图或反复触发 CI。插件提供 /lever loop、brief、deliver、refactor、shepherd、automate 等动词，并支持 L0 到 L5 的自主权设置与 standard/high/max 三种模型消耗档位，工作以带 lever 标签的议题形式追踪。[^github-lever]

According to the post, GitHub's lever is a Copilot plugin for coding agents whose core is the feedback loop: an agent gets a measurable metric and a bar for "better", then iterates autonomously for hours without humans pasting screenshots or rerunning CI. It offers verbs such as /lever loop, brief, deliver, refactor, shepherd, and automate, supports autonomy levels L0 to L5 and model spend tiers standard/high/max, and tracks work as issues labeled with lever.[^github-lever]

## 摘要 / Summary

- lever 是 GitHub 的 Copilot 插件，可通过 copilot plugin marketplace add github/lever 安装。 / lever is a GitHub Copilot plugin installable via copilot plugin marketplace add github/lever.[^github-lever]
- 核心命令 /lever loop 会生成“循环卡片”，列出指标、测量方法、噪声程度和获胜标准，且不推送、不提交 PR、不合并。 / The core /lever loop command generates a Loop Card listing the metric, measurement method, noise level, and win criteria, without pushing, filing PRs, or merging.[^github-lever]
- 插件包含 BUILD、LOOP、RUN、YOU 四类动词，例如 brief、deliver、refactor、shepherd、automate、mirror、steer、autonomy 等。 / The plugin includes BUILD, LOOP, RUN, and YOU verb categories, such as brief, deliver, refactor, shepherd, automate, mirror, steer, and autonomy.[^github-lever]
- 自主权分为 L0 到 L5 等级，L0 仅提议，L5 可发布、发布并观察，设置保存在 ~/.copilot/lever.yml。 / Autonomy ranges from L0 to L5, where L0 only proposes and L5 lands, releases, and watches; settings are saved in ~/.copilot/lever.yml.[^github-lever]
- 模型消耗有 standard、high、max 三档，仓库可在 .github/lever.yml 中设置上限。 / Model spend has standard, high, and max tiers, and a repo can cap it in .github/lever.yml.[^github-lever]
- 所有 lever 发起的工作会以分配给用户并带有 lever 标签的议题形式追踪，可通过 /lever status 查看。 / All work started by lever is tracked as an issue assigned to the user with the lever label, listable via /lever status.[^github-lever]

## 相关 / Related

- 原文：[链接](https://github.com/github/lever)。 / Original: [link](https://github.com/github/lever).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)

[^github-lever]: GitHub Lever: Feedback-loop Copilot Plugin for Coding Agents
