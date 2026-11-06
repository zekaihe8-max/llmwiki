---
type: Source
title: "介绍 Vercel Schedules"
title_en: "Introducing Vercel Schedules"
description: "Vercel Schedules 让代理和应用可通过代码在运行时创建、变更或取消一次性与重复计划，无需重新部署。"
description_en: "Vercel Schedules lets agents and applications create, change, or cancel one-time and recurring schedules through code at runtime without redeploying."
resource: https://vercel.com/blog/introducing-vercel-schedules
tags: [vercel, schedules, cron, agents, automation]
sources:
  - id: vercel-schedules
    resource: https://vercel.com/blog/introducing-vercel-schedules
    title: "Introducing Vercel Schedules"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T08:08:47+08:00
---

# 介绍 Vercel Schedules

*Introducing Vercel Schedules*

「帖文称」Vercel 推出 Schedules，使代理和应用能够通过代码创建、变更或取消一次性和重复的计划，无需重新部署。该功能建立在 Vercel Cron Jobs 的静态方式之上，支持将时序写入 vercel.json 或构建输出 API 配置，也支持通过 JS SDK、CLI 或 HTTP API 在运行时动态管理计划，并可在预览部署中测试后再投入生产。[^vercel-schedules]

The post says Vercel introduces Schedules, enabling agents and applications to create, change, or cancel one-time and recurring schedules through code without redeploying. It builds on the static approach of Vercel Cron Jobs, supports static timing in vercel.json or Build Output API configuration, and allows dynamic schedule management via JS SDK, CLI, or HTTP API at runtime, with testing available on Preview deployments before production.[^vercel-schedules]

## 摘要 / Summary

- Vercel Schedules 建立在 Vercel Cron Jobs 之上，允许用户和代理决定应用运行时应触发工作的时间和目标。 / Vercel Schedules builds on Vercel Cron Jobs, letting users and agents decide when work should happen and where it should be sent while the application is running.[^vercel-schedules]
- 静态计划将时序保存在 vercel.json 或构建输出 API 配置中，随部署同步，可调用私有函数、HTTP 路径或向队列主题发送消息。 / Static schedules keep timing in vercel.json or Build Output API configuration and sync on deploy, supporting private functions, HTTP paths, or Queue topics.[^vercel-schedules]
- 动态计划可通过 JS SDK、CLI 或 HTTP API 在运行时创建和管理，支持一次性和基于队列主题的重复工作。 / Dynamic schedules let apps create and manage schedules through the JS SDK, CLI, or HTTP API as they run, supporting one-time and recurring work via Queue topics.[^vercel-schedules]
- 可在预览部署和自定义环境中测试定时工作，再在生产环境运行。 / Scheduled work can be tested on Preview deployments and custom environments before running in Production.[^vercel-schedules]

## 相关 / Related

- 原文：[链接](https://vercel.com/blog/introducing-vercel-schedules)。 / Original: [link](https://vercel.com/blog/introducing-vercel-schedules).
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [可编程边缘计算 / Programmable edge compute](../../topics/programmable-edge-compute.md)

[^vercel-schedules]: Introducing Vercel Schedules
