---
type: Source
title: "grow-me · 让需求长成方案"
title_en: "grow-me · Let Requirements Grow into Plans"
description: "本地运行的 AI 需求澄清工具，通过逐轮对话把需求长成开发方案。"
description_en: "A locally run AI requirement clarification tool that grows requirements into development plans through iterative dialogue."
resource: https://github.com/Trunks820/grow-me
tags: [grow-me, ai-coding-assistant, requirement-clarification, local-web, nodejs]
sources:
  - id: grow-me
    resource: https://github.com/Trunks820/grow-me
    title: "grow-me · Let Requirements Grow into Plans"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:02:05+08:00
---

# grow-me · 让需求长成方案

*grow-me · Let Requirements Grow into Plans*

《grow-me · 让需求长成方案》是一篇关于 MIT 开源本地需求澄清工具的说明，当前版本 v0.3.0 采用 v2 访谈协议，依赖 Node.js 22+ 与能读取 SKILL.md 并运行终端命令的 AI 编码助手，保存方案不再需要 Python。文章称，小精灵「圆麻薯」在本机网页逐题提问，答完后答案送给 AI，追问沿依赖长出新枝，保存后每个话题结成果子并对应方案章节，同时生成 task.manifest.json 交接清单；服务仅监听 127.0.0.1，原始访谈、答案、聊天记录和本机日志都不在仓库里。[^grow-me]

This article describes grow-me, an MIT-licensed local requirement clarification tool at v0.3.0 using the v2 interview protocol. It requires Node.js 22+ and an AI coding assistant that can read SKILL.md and run terminal commands; saving plans no longer requires Python. The article says the mascot "Yuan Mahotu" asks questions one by one on a local web page, answers are sent to AI after each round, and follow-ups grow along dependencies; after saving, each topic becomes a fruit opening the corresponding plan chapter, and a task.manifest.json handoff list is generated. The service listens only on 127.0.0.1, and original interviews, answers, chat logs, and local logs are not in the repository.[^grow-me]

## 摘要 / Summary

- v0.3.0 为 MIT 开源，使用 v2 访谈协议，v0.2 答了一半的访谈可以直接接着答，旧 v1 访谈只读。[^grow-me]
- v0.3.0 is MIT-licensed and uses the v2 interview protocol; half-finished v0.2 interviews can be continued, while old v1 interviews are read-only.[^grow-me]
- 需要 Node.js 22+，以及一个能读取 SKILL.md、运行终端命令的 AI 编码助手；保存方案不再需要 Python。[^grow-me]
- Requires Node.js 22+ and an AI coding assistant able to read SKILL.md and run terminal commands; saving plans no longer requires Python.[^grow-me]
- 服务只监听 127.0.0.1，不是托管网站；本机服务不带模型、不需要 API Key，答案只交给正在使用的 AI 助手。[^grow-me]
- The service listens only on 127.0.0.1 and is not a hosted site; the local service brings no model and needs no API key, and answers go only to the AI assistant in use.[^grow-me]
- 保存后生成方案网页和 task.manifest.json 交接清单，清单格式与 grow-loop 一致，包含依赖、验收标准、待定问题及用户拍板原话。[^grow-me]
- Saving generates a plan webpage and a task.manifest.json handoff list consistent with grow-loop, containing dependencies, acceptance criteria, deferred questions, and the user's original decisions.[^grow-me]
- 自动测试和全部浏览器测试通过，自带模拟用户可在真浏览器中答题，已在 Codex、Antigravity、Grok Bot、Muse Spark、dot 等工具上跑通完整访谈。[^grow-me]
- Automated tests and all browser tests pass; a built-in simulated user can answer in a real browser, and full interviews have been run on tools including Codex, Antigravity, Grok Bot, Muse Spark, and dot.[^grow-me]

## 相关 / Related

- 原文：[链接](https://github.com/Trunks820/grow-me)。 / Original: [link](https://github.com/Trunks820/grow-me).
- Topic: [一次只问一个问题 / One question at a time](../../topics/one-question-at-a-time.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^grow-me]: grow-me · Let Requirements Grow into Plans
