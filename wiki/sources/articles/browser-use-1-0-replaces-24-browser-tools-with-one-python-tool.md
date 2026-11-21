---
type: Source
title: "browser-use 1.0 把 24 个浏览器工具砍成 1 个 Python 工具"
title_en: "browser-use 1.0 Replaces 24 Browser Tools With One Python Tool"
description: "browser-use 1.0 删除了近 13.7 万行代码，将 24 个浏览器动作替换为一个在持续窗口中运行 Python 并调用浏览器底层接口的工具，官方称同模型在 180 题测试中得分提升 14–33 分、成本降低 2.7–5.2 倍。"
description_en: "browser-use 1.0 deletes about 137,000 lines of code and replaces 24 browser actions with one Python tool that drives the browser via raw CDP in a persistent window; the official claims the same models score 14–33 points higher on 180 questions while costing 2.7–5.2x less."
resource: https://x.com/lxfater/status/2124065414359445782
tags: [browser-use, agents, computer-use, ai-automation]
sources:
  - id: browser-use-1-0-one-python-tool
    resource: https://x.com/lxfater/status/2124065414359445782
    title: "browser-use 1.0 Replaces 24 Browser Tools With One Python Tool"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-21T19:55:50+08:00
---

# browser-use 1.0 把 24 个浏览器工具砍成 1 个 Python 工具

*browser-use 1.0 Replaces 24 Browser Tools With One Python Tool*

「帖文称」，开源项目 browser-use 发布 1.0 版后，把过去两年积累的 24 个浏览器动作全部移除，并删除了近 13.7 万行代码，改为只保留一个工具：让 AI 在持续运行的窗口里直接编写 Python 代码，调用浏览器底层接口。帖文还提到，官方用同一批三个模型在 180 道题目上测试，得分提升 14 到 33 分，单任务成本降低 2.7 到 5.2 倍，速度提升 2 到 3 倍；同时警告该窗口非沙箱，以本机权限运行，不可信任务建议套 Docker 或虚拟机。[^browser-use-1-0-one-python-tool]

The post says open-source project browser-use released version 1.0, removing all 24 browser actions accumulated over two years and deleting nearly 137,000 lines of code, leaving only one tool: letting AI write Python code directly in a persistent window to call browser底层 interfaces. It also claims that, using the same three models on 180 questions, scores rose by 14–33 points, per-task cost dropped 2.7–5.2x, and speed improved 2–3x; it warns the window is not a sandbox and runs with local machine permissions, so untrusted tasks should use Docker or a VM.[^browser-use-1-0-one-python-tool]

## 摘要 / Summary

- 24 个浏览器动作被砍成 1 个 Python 工具，删除了近 13.7 万行代码。[^browser-use-1-0-one-python-tool]
- 24 browser actions reduced to one Python tool, deleting nearly 137,000 lines of code.[^browser-use-1-0-one-python-tool]
- 同 3 个模型在 180 题上测试，得分提升 14–33 分，单任务成本降低 2.7–5.2 倍，速度提升 2–3 倍。[^browser-use-1-0-one-python-tool]
- Same 3 models tested on 180 questions: scores up 14–33 points, cost down 2.7–5.2x, speed up 2–3x.[^browser-use-1-0-one-python-tool]
- 网页卡死时，AI 可自行停加载、屏蔽卡死脚本，并翻源码拉数据。[^browser-use-1-0-one-python-tool]
- When pages freeze, AI can stop loading, block stuck scripts, and read source code to pull data.[^browser-use-1-0-one-python-tool]
- 验证码场景提示词 3 次全挂，专用工具 6 次全过；够得着的让 AI 写代码，够不着的才做专用工具。[^browser-use-1-0-one-python-tool]
- CAPTCHA: prompts failed 3/3, dedicated tool passed 6/6; use code when reachable, dedicated tools only when not.[^browser-use-1-0-one-python-tool]
- 官方明确该窗口不是沙箱，直接用本机权限运行，不可信任务建议套 Docker 或虚拟机。[^browser-use-1-0-one-python-tool]
- Official says the window is not a sandbox and runs with local machine permissions; use Docker or VM for untrusted tasks.[^browser-use-1-0-one-python-tool]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2124065414359445782)。 / Original: [link](https://x.com/lxfater/status/2124065414359445782).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^browser-use-1-0-one-python-tool]: browser-use 1.0 Replaces 24 Browser Tools With One Python Tool
