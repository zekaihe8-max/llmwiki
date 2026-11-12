---
type: Source
title: "A2UI 1.0：构建愉悦、快速、可靠的智能体体验"
title_en: "A2UI 1.0: Build delightful, fast, reliable, agentic experiences"
description: "Google 发布 A2UI 1.0，首个稳定版生成式 UI 开放协议，让 AI 智能体能以交互界面而非纯文本回复用户。"
description_en: "Google releases A2UI 1.0, the first stable open protocol for generative UI, enabling AI agents to reply with interactive interfaces instead of plain text."
resource: https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences
tags: [a2ui, agents, generative-ui, announcement]
sources:
  - id: a2ui-1-0-agentic-ui
    resource: https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences
    title: "A2UI 1.0: Build delightful, fast, reliable, agentic experiences"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T08:20:13+08:00
---

# A2UI 1.0：构建愉悦、快速、可靠的智能体体验

*A2UI 1.0: Build delightful, fast, reliable, agentic experiences*

「帖文称」，Google 于 2026 年 11 月 11 日发布 A2UI 1.0，这是首个稳定版的生成式 UI 开放协议，可让 AI 智能体以表单、图表等交互界面回答用户，而非传统的文本墙。开发者可使用 Web、Android、iOS 的开源渲染器 SDK，以及 Python、TypeScript、Dart 的 Agent SDK；Atlassian、Alation、Bloomberg 和 ByteDance 等公司已在构建基于 A2UI 的体验。[^a2ui-1-0-agentic-ui]

The post says Google released A2UI 1.0 on November 11, 2026, the first stable version of its open protocol for generative UI, letting AI agents answer with interactive screens such as forms and charts instead of walls of text. Developers can use open-source renderer SDKs for the web, Android, and iOS and agent SDKs for Python, TypeScript, and Dart; companies including Atlassian, Alation, Bloomberg, and ByteDance are already building with it.[^a2ui-1-0-agentic-ui]

## 摘要 / Summary

- A2UI 1.0 是首个稳定版的生成式 UI 开放协议，新增双向函数调用、无障碍访问支持以及任意元数据扩展。[^a2ui-1-0-agentic-ui]
- A2UI 1.0 is the first stable version of the open generative UI protocol, adding bidirectional function calls, accessibility support, and metadata extensions.[^a2ui-1-0-agentic-ui]
- 开发者可使用 Web（React、Angular、Lit）、Flutter、SwiftUI 和 Jetpack Compose 的开源渲染器，以及 Python、TypeScript 和 Dart 的 Agent SDK。[^a2ui-1-0-agentic-ui]
- Developers can use open-source renderers for React, Angular, and Lit on the web; Flutter for mobile, web, and desktop; SwiftUI on iOS; and Jetpack Compose on Android, plus Agent SDKs for Python, TypeScript, and Dart.[^a2ui-1-0-agentic-ui]
- Atlassian、Alation、Bloomberg 和 ByteDance 等公司已在使用 A2UI 构建体验，例如 Atlassian 在 Jira 中让智能体通过交互卡片请求团队跟进。[^a2ui-1-0-agentic-ui]
- Companies including Atlassian, Alation, Bloomberg, and ByteDance are building with A2UI; Atlassian, for example, lets agents request follow-ups via interactive cards in Jira work items.[^a2ui-1-0-agentic-ui]
- A2UI 让智能体描述要展示的内容，由各应用使用自身原生组件绘制界面，敏感数据在服务端绑定，不会发送给模型。[^a2ui-1-0-agentic-ui]
- A2UI lets agents describe what to show while each app renders the UI with its own native components, and sensitive values never reach the model because A2UI binds data on the server.[^a2ui-1-0-agentic-ui]
- 谷歌内部产品如 Gemini Notebook 已采用该协议的卡片，企业级智能体也可使用，对 Jetpack Compose 的 1.0 支持即将推出。[^a2ui-1-0-agentic-ui]
- Google-internal products such as Gemini Notebook already use A2UI cards, Gemini Enterprise agents can use A2UI, and Jetpack Compose support for version 1.0 is coming soon.[^a2ui-1-0-agentic-ui]

## 相关 / Related

- 原文：[链接](https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences)。 / Original: [link](https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences).
- Topic: [Agentic AI Foundation / Agentic AI Foundation](../../topics/agentic-ai-foundation.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)

[^a2ui-1-0-agentic-ui]: A2UI 1.0: Build delightful, fast, reliable, agentic experiences
