---
type: Source
title: "课程：Claude 提示词评测入门"
title_en: "Course: Introduction to Evals"
description: "通过四节课与虚构咨询公司案例，学习如何为自己的提示词构建并运行评测（eval）。"
description_en: "Learn how to build and run an eval for your own prompt through four lessons and a fictional consultancy case study."
resource: https://academy.claude.com/courses/introduction-to-evals
tags: [claude, evals, prompt-engineering, course]
sources:
  - id: 43674b7b939a03ac
    resource: https://academy.claude.com/courses/introduction-to-evals
    title: "Course: Introduction to Evals"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:30:33+08:00
---

# 课程：Claude 提示词评测入门

*Course: Introduction to Evals*

这篇「帖文称」Claude Academy 的《Introduction to Evals》课程包含四节主课，每节先播放短片，再跟随虚构工程咨询公司 Meridian 为一个提示词构建评测，学员需自行在代码、提示词或工作流文件中找出完成各项工作的那一行，课程不提供可下载脚本，最终要求学员独立搭建自己的评测并通过评测 quiz 获得完成徽章；课程仅覆盖以单次 Messages API 调用运行的提示词，不涉及智能体评测或延迟测量，先修要求是修完 Claude Platform 101 或能够调用 Messages API 并读取响应，代码使用 Python，且“生产环境中的评测”一节还涉及 GitHub Actions YAML，实践需要 Claude Console 账号、API 密钥以及带预期答案的真实输入。[^43674b7b939a03ac]

This post claims Claude Academy's "Introduction to Evals" course contains four main lessons, each starting with a short video then following fictional engineering consultancy Meridian to build an eval for one prompt; learners must identify the line of code, prompt, or workflow file that performs each task, no downloadable script is provided, and finally they must build their own eval and pass a graded quiz to earn a completion badge; the course only covers prompts that make a single call to the Messages API and does not cover agent evaluation or latency measurement; prerequisites are Claude Platform 101 or ability to call the Messages API and read responses, code is Python plus one GitHub Actions YAML workflow in the production evals lesson, and practice requires a Claude Console account, API key, and real inputs with expected answers.[^43674b7b939a03ac]

## 摘要 / Summary

- 课程共四节主课，每节包含短视频和 Meridian 虚构咨询公司的案例。[^43674b7b939a03ac]
- The course has four main lessons, each with a short video and a case study from fictional consultancy Meridian.[^43674b7b939a03ac]
- 学员需在代码、提示词或工作流文件中定位完成每项工作的那一行，课程不提供下载脚本。[^43674b7b939a03ac]
- Learners must locate the line in code, prompt, or workflow file that performs each task; no downloadable script is provided.[^43674b7b939a03ac]
- 课程只讲 Messages API 单次调用的提示词，不涵盖智能体评测或延迟测量。[^43674b7b939a03ac]
- The course covers only single-call Messages API prompts and does not cover agent evaluation or latency measurement.[^43674b7b939a03ac]
- 先修要求是修完 Claude Platform 101，或已会调用 Messages API 并读取响应；代码为 Python，生产环境课还涉 GitHub Actions YAML。[^43674b7b939a03ac]
- Prerequisite is Claude Platform 101 or ability to call Messages API and read responses; code is Python, and the production lesson also involves GitHub Actions YAML.[^43674b7b939a03ac]
- 实践需要 Claude Console 账号、API 密钥以及带预期答案的真实输入，通过评测 quiz 可获完成徽章。[^43674b7b939a03ac]
- Practice requires a Claude Console account, API key, and real inputs with expected answers; passing the graded quiz earns a completion badge.[^43674b7b939a03ac]

## 相关 / Related

- 原文：[链接](https://academy.claude.com/courses/introduction-to-evals)。 / Original: [link](https://academy.claude.com/courses/introduction-to-evals).
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)

[^43674b7b939a03ac]: Course: Introduction to Evals
