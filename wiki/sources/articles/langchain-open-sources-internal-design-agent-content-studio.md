---
type: Source
title: "LangChain 开源内部设计 Agent「Content Studio」"
title_en: "LangChain Open-Sources Internal Design Agent \"Content Studio\""
description: "LangChain 将内部使用的设计 Agent「Content Studio」开源，基于 Deep Agents 部署到 Slack，可生成品牌合规的平面、演示文稿和影片。"
description_en: "LangChain open-sources its internal Design Agent \"Content Studio,\" built on Deep Agents and deployed to Slack to generate brand-compliant graphics, presentations, and videos."
resource: https://x.com/shao__meng/status/2123600235079586247
tags: [agents, design, open-source, slack]
sources:
  - id: langchain-content-studio-design-agent
    resource: https://x.com/shao__meng/status/2123600235079586247
    title: "LangChain Open-Sources Internal Design Agent \"Content Studio\""
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T20:15:42+08:00
---

# LangChain 开源内部设计 Agent「Content Studio」

*LangChain Open-Sources Internal Design Agent "Content Studio"*

帖文称，LangChain 已将公司内部在用的设计 Agent「Content Studio」开源，基于 Deep Agents 构建，通过 Managed Deep Agents 部署到团队 Slack；用户在线程中说明需求并附上文件，即可拿回符合品牌规范的平面、多尺寸广告、演示文稿、图表、分镜和影片。自 8 月起它已为公司交出 3000 多件物料，演示文稿超过 80 份，单次请求的模型费用中位数大约是 0.5 美元。[^langchain-content-studio-design-agent]

The post says LangChain has open-sourced its internal Design Agent "Content Studio," built on Deep Agents and deployed to team Slack via Managed Deep Agents; users describe needs and attach files in a thread to receive brand-compliant graphics, multi-size ads, presentations, charts, storyboards, and videos. Since August it has delivered over 3,000 assets and more than 80 presentations, with median model cost per request around $0.50.[^langchain-content-studio-design-agent]

## 摘要 / Summary

- 默认模型为 Claude Opus 5.5，也支持 OpenAI、Google 和 LangSmith Gateway；Managed Deep Agents 在 LangSmith Cloud 上仍是公开测试，代码免费，模型和托管另付费。[^langchain-content-studio-design-agent]
- The default model is Claude Opus 5.5, with OpenAI, Google, and LangSmith Gateway also supported; Managed Deep Agents remains in public beta on LangSmith Cloud, with code free but models and hosting charged separately.[^langchain-content-studio-design-agent]
- 每条 Slack 线程分配一台 LangSmith 沙箱，内含 Chrome、FFmpeg、HeyGen HyperFrames、D2 和团队字体，密钥不进入沙箱且默认没有外网。[^langchain-content-studio-design-agent]
- Each Slack thread gets a LangSmith sandbox containing Chrome, FFmpeg, HeyGen HyperFrames, D2, and team fonts; secrets do not enter the sandbox and there is no external network by default.[^langchain-content-studio-design-agent]
- 系统包含 35 项可路由的技能，通过 Context Hub 按需加载，渲染后会用代码检查颜色、字体、对比、尺寸和图表计算。[^langchain-content-studio-design-agent]
- The system includes 35 routable skills loaded on demand via Context Hub, and post-render checks use code to verify color, font, contrast, size, and chart calculations.[^langchain-content-studio-design-agent]
- 带这些视觉的帖文在 X 上大约有 450 万次浏览，四分之三的需求来自市场部门以外。[^langchain-content-studio-design-agent]
- Posts featuring these visuals have roughly 4.5 million impressions on X, and three-quarters of requests come from outside the marketing department.[^langchain-content-studio-design-agent]
- 早期曾建 115 个可复用界面组件以弥补模型短板，Claude Opus 5.5 发布后大部分硬编码规则已被删除，仅保留设计原则和高层指引。[^langchain-content-studio-design-agent]
- Early on the team built 115 reusable UI components to compensate for model limitations; after Claude Opus 5.5, most hardcoded rules were removed, leaving design principles and high-level guidance.[^langchain-content-studio-design-agent]
- 大任务由主 Agent 拆开，在同一沙箱里后台启动子 Agent，做完、失败或卡住时 MDA 会叫醒主 Agent。[^langchain-content-studio-design-agent]
- Large tasks are decomposed by the main agent, which launches sub-agents in the same sandbox; MDA wakes the main agent when sub-agents finish, fail, or get stuck.[^langchain-content-studio-design-agent]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2123600235079586247)。 / Original: [link](https://x.com/shao__meng/status/2123600235079586247).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^langchain-content-studio-design-agent]: LangChain Open-Sources Internal Design Agent "Content Studio"
