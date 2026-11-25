---
type: Source
title: "grow-me 和 grow-loop：把需求沟通和进度搬出聊天框"
title_en: "grow-me and grow-loop: Moving requirement communication and progress out of the chat box"
description: "帖文介绍两个 MIT 开源的 AI Skill，grow-me 用本地网页树状澄清需求，grow-loop 用本地脚本控制代码生成并设置人工审核门槛。"
description_en: "The post introduces two MIT-licensed AI Skills: grow-me uses a local webpage tree to clarify requirements, and grow-loop uses a local script to control code generation with human review gates."
resource: https://x.com/lxfater/status/2125133630133404031
tags: [agents, ai-skill, requirements-engineering, coding-agent, open-source]
sources:
  - id: lxfater-grow-me-grow-loop-2125133630133404031
    resource: https://x.com/lxfater/status/2125133630133404031
    title: "grow-me and grow-loop: Moving requirement communication and progress out of the chat box"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:01:10+08:00
---

# grow-me 和 grow-loop：把需求沟通和进度搬出聊天框

*grow-me and grow-loop: Moving requirement communication and progress out of the chat box*

「帖文称」很多人学大牛用 grill-me 让 AI 动手前先追问需求，结果聊了三四轮人脑先看晕了，需求沟通彻底走过场；有开发者开源了两个给 AI 用的 Skill，叫 grow-me 和 grow-loop，直接把需求沟通和干活进度搬出聊天框。grow-me 在本地起个网页，把问答画成一棵生长树，答完一题开花，追问顺着依赖长出新枝，中途改前面决定会让受影响的下游题自动变黄叶，逼着逐题重认；答完保存直接出白话方案和验收表，把拍板原话和任务包打成清单交给下一步。grow-loop 用本地小脚本，每个任务包先派常规模型写代码跑测试，修满 2 轮不过自动升档换强模型，强模型再修 2 轮还是不过立刻刹车问人，绝不死循环烧干额度；跑通后换另一个模型只读挑刺，最多审 2 轮，推代码、改线上这类高风险动作也硬拦下来等你批。两套都是 MIT 开源，不另收接口费，直接接本地 Claude Code 或 Codex 跑，进度存本地，半路换工具也能接着干。[^lxfater-grow-me-grow-loop-2125133630133404031]

The post says many people tried having AI ask clarifying questions before coding, but after three or four rounds humans got confused first and requirement communication became a formality. A developer open-sourced two AI Skills, grow-me and grow-loop, to move requirement communication and work progress out of the chat box. grow-me starts a local webpage that draws Q&A as a growth tree—answering one question blooms, follow-ups branch along dependencies, and changing a prior decision turns affected downstream questions yellow leaves, forcing question-by-question re-confirmation; after saving, it outputs a plain-language proposal and acceptance table, and turns finalized words and task packages into a checklist for the next step. grow-loop uses a local script to send a regular model to write code and run tests per task package; after two failed rounds it automatically upgrades to a stronger model, and after two more failed rounds it brakes to ask a human, never dead-looping to burn quota. After code passes, another model is switched in for read-only review at most two rounds, and high-risk actions such as pushing code or changing production are hard-blocked pending approval. Both are MIT open source with no extra interface fees, connect directly to local Claude Code or Codex, store progress locally, and allow switching tools midway.[^lxfater-grow-me-grow-loop-2125133630133404031]

## 摘要 / Summary

- grow-me 在本地启动网页，将需求问答呈现为生长树，改动前面决定会导致受影响的下游题目变黄叶，提示逐题重认。[^lxfater-grow-me-grow-loop-2125133630133404031]
- grow-me starts a local webpage that presents requirement Q&A as a growth tree; changing a prior decision turns affected downstream questions yellow leaves, prompting question-by-question re-confirmation.[^lxfater-grow-me-grow-loop-2125133630133404031]
- grow-me 答完保存后直接生成白话方案和验收表，并把拍板原话和任务包打成清单交给下一步。[^lxfater-grow-me-grow-loop-2125133630133404031]
- After saving, grow-me directly generates a plain-language proposal and acceptance table, and turns finalized words and task packages into a checklist for the next step.[^lxfater-grow-me-grow-loop-2125133630133404031]
- grow-loop 先派常规模型写代码跑测试，修满 2 轮不过自动升档换强模型；强模型再修 2 轮还是不过立刻刹车问人，避免死循环烧额度。[^lxfater-grow-me-grow-loop-2125133630133404031]
- grow-loop first sends a regular model to write code and run tests; after two failed rounds it automatically upgrades to a stronger model, and after two more failed rounds it brakes to ask a human, avoiding quota-burning dead loops.[^lxfater-grow-me-grow-loop-2125133630133404031]
- 代码跑通后换另一个模型只读挑刺，最多审 2 轮；推代码、改线上等高风险动作硬拦下来等用户批准。[^lxfater-grow-me-grow-loop-2125133630133404031]
- After code passes, another model is switched in for read-only review at most two rounds; high-risk actions such as pushing code or changing production are hard-blocked pending user approval.[^lxfater-grow-me-grow-loop-2125133630133404031]
- 两套工具均为 MIT 开源，不另收接口费，可直接接本地 Claude Code 或 Codex 运行，进度存本地，半路换工具也能接着干。[^lxfater-grow-me-grow-loop-2125133630133404031]
- Both tools are MIT open source with no extra interface fees, can connect directly to local Claude Code or Codex, store progress locally, and allow switching tools midway.[^lxfater-grow-me-grow-loop-2125133630133404031]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2125133630133404031)。 / Original: [link](https://x.com/lxfater/status/2125133630133404031).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [一次只问一个问题 / One question at a time](../../topics/one-question-at-a-time.md)
- Topic: [发散任务先人审设计 / Human design gate for divergent tasks](../../topics/divergent-tasks-human-design-gate.md)

[^lxfater-grow-me-grow-loop-2125133630133404031]: grow-me and grow-loop: Moving requirement communication and progress out of the chat box
