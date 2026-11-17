---
type: Source
title: "Claude 代码验收三条建议：让 Agent 自测、核心逻辑人工复核、修 Bug 设限"
title_en: "Three Claude Code acceptance tips: let agents self-test, human-check core logic, cap bug-fix loops"
description: "小墨同学总结 Claude Code 官方代码验收经验，提出三条让 AI 编程更可靠的建议。"
description_en: "Xiaomovps summarizes the Claude Code team's code acceptance experience and offers three suggestions for more reliable AI programming."
resource: https://x.com/xiaomovps/status/2122642096385577102
tags: [claude-code, ai-coding, agent-verification, code-review]
sources:
  - id: 21baad06622b42e4
    resource: https://x.com/xiaomovps/status/2122642096385577102
    title: "Three Claude Code acceptance tips: let agents self-test, human-check core logic, cap bug-fix loops"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T20:04:25+08:00
---

# Claude 代码验收三条建议：让 Agent 自测、核心逻辑人工复核、修 Bug 设限

*Three Claude Code acceptance tips: let agents self-test, human-check core logic, cap bug-fix loops*

帖文称，Claude Code 官方团队分享了代码验收经验，作者小墨同学结合 Pi、DSH、Codex 的使用情况，总结了三条建议：让 Agent 自行运行项目、执行测试并提供前端截图；简单重构与文档可交给 Agent，但数据库、权限、登录等核心功能需人工检查关键逻辑及对原有功能的影响；Agent 修 Bug 应有次数限制，连续失败应停下来分析原因并换思路，避免重复修改浪费 Token。帖文还提到，研究 Harness 与 AI 搭配本质是软件工程问题，仍需要人的介入。[^21baad06622b42e4]

The post says the Claude Code team shared code acceptance experience, and author @xiaomovps distilled three suggestions based on using Pi, DSH, and Codex: let the Agent run the project, execute tests, and provide frontend screenshots; simple refactoring and docs can go to the Agent, but database, permissions, and login logic should be human-checked for impact on existing features; Agent bug-fixing should be capped, with repeated failures prompting a stop and new approach rather than token-wasting loops. It also frames Harness-plus-AI as a software engineering problem requiring human involvement.[^21baad06622b42e4]

## 摘要 / Summary

- 作者建议不要只看 Agent 是否完成任务，而应让它自己运行项目、执行测试，前端项目最好提供截图，并亲自打开页面检查。[^21baad06622b42e4]
- The author advises not only checking whether the Agent completed the task, but having it run the project, execute tests, provide frontend screenshots where possible, and personally opening the page to inspect.[^21baad06622b42e4]
- 简单重构、文档修改可多交给 Agent，但涉及数据库、权限、登录等核心功能，建议自己检查关键逻辑，尤其注意是否影响原来的功能。[^21baad06622b42e4]
- Simple refactoring and document changes can be assigned to the Agent, but for core functions such as databases, permissions, and login, the author recommends personally checking key logic and watching for impact on existing functionality.[^21baad06622b42e4]
- Agent 修 Bug 应有限度，连续尝试几次仍未解决就应停下来分析原因、换思路，而不是让它一直重复修改、白白浪费 Token。[^21baad06622b42e4]
- Agent bug fixes should have a limit; if the problem remains unsolved after several consecutive attempts, one should stop, analyze the cause, and change approach instead of letting it repeat modifications and waste tokens.[^21baad06622b42e4]
- 作者表示 Pi、DSH、Codex 均可按此思路使用，区别仅在于工具配置和工作流。[^21baad06622b42e4]
- The author says Pi, DSH, and Codex can all follow this approach, differing only in tool configuration and workflow.[^21baad06622b42e4]
- 帖文引用 ClaudeDevs/AnthropicAI 的观点：Claude 在能够验证自己的工作时写出更好的代码，测试、基准和端到端运行等曾经昂贵的检查现在变得便宜。[^21baad06622b42e4]
- The post cites ClaudeDevs/AnthropicAI: Claude writes better code when it can verify its own work, and checks that used to be expensive—tests, benchmarks, end-to-end runs—are now cheap.[^21baad06622b42e4]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2122642096385577102)。 / Original: [link](https://x.com/xiaomovps/status/2122642096385577102).
- Topic: [哪些活已放心交给 AI / Tasks confidently handed over to AI](../../topics/tasks-confidently-handed-to-ai.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)

[^21baad06622b42e4]: Three Claude Code acceptance tips: let agents self-test, human-check core logic, cap bug-fix loops
