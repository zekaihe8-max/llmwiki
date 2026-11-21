---
type: Source
title: "大项目里人和 AI 都只能理解一部分"
title_en: "In large projects, both humans and AI can only understand part"
description: "大型软件项目中人与 AI 均只能部分理解代码库，需依赖自动化测试、代码评审及 Agent 截图证据等手段保证修改质量"
description_en: "In large software projects, both humans and AI can only partially understand the codebase; quality relies on automated testing, code review, and Agent screenshot evidence."
resource: https://x.com/dotey/status/2123936278056165393
tags: [agents, software-engineering, code-review, automated-testing]
sources:
  - id: dotey-2123936278056165393
    resource: https://x.com/dotey/status/2123936278056165393
    title: "In large projects, both humans and AI can only understand part"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-21T19:53:34+08:00
---

# 大项目里人和 AI 都只能理解一部分

*In large projects, both humans and AI can only understand part*

帖文称，在大型软件项目里，程序员只理解自己负责的那一部分代码是正常的，而且这已经是能做到的最好状态；作者将此引申到 AI Agent，认为 Agent 也无法在会话上下文中完整理解整个项目，但这不妨碍它修改运行程序，只要通过自动化测试、代码评审和让 Agent 自身提供截图等证据来兜底。[^dotey-2123936278056165393]

The post says that in large software projects, programmers normally only understand the code they are responsible for, and this is the best achievable state; the author extends this to AI Agents, arguing that Agents likewise cannot fully understand an entire project within a session context, but this does not prevent them from modifying running programs if backed by automated testing, code review, and evidence such as screenshots provided by the Agent itself.[^dotey-2123936278056165393]

## 摘要 / Summary

- 帖文称，大型软件项目中程序员只理解自己负责的一小部分代码是常态，也是能做到的最好状态。[^dotey-2123936278056165393]
- The post says that in large software projects, programmers understanding only a small part of the code they own is normal and the best achievable state.[^dotey-2123936278056165393]
- 作者指出 AI 同样无法在会话上下文中完整理解整个项目，但这不妨碍 Agent 修改运行程序。[^dotey-2123936278056165393]
- The author notes that AI likewise cannot fully understand an entire project within a session context, but this does not prevent Agents from modifying running programs.[^dotey-2123936278056165393]
- 为保证质量，需要充分的自动化测试覆盖作为兜底，但不能过度依赖，因为测试本身可能有问题。[^dotey-2123936278056165393]
- To ensure quality, sufficient automated test coverage is needed as a safety net, but over-reliance is unsafe because tests themselves may be flawed.[^dotey-2123936278056165393]
- 代码量过大时人难以完成 Code Review，建议让 AI Review 大部分代码，人只 Review 最重要的部分。[^dotey-2123936278056165393]
- When code volume is too large for human review, it is suggested that AI review most code while humans review only the most important parts.[^dotey-2123936278056165393]
- 有效手段是让 Agent 自身提供证据，例如新功能开发时提供截图，Bug 修改时提供改前改后截图对比。[^dotey-2123936278056165393]
- An effective approach is to require Agents to provide evidence themselves, such as screenshots for new features and before/after screenshot comparisons for bug fixes.[^dotey-2123936278056165393]
- 帖文还提到 Agent 可以模拟 API 响应数据，动态生成不同场景的截图，无需服务端配合。[^dotey-2123936278056165393]
- The post also mentions that Agents can simulate API response data and dynamically generate screenshots for different scenarios without server cooperation.[^dotey-2123936278056165393]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2123936278056165393)。 / Original: [link](https://x.com/dotey/status/2123936278056165393).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [Agent 对话内问题反馈 / In-conversation agent bug feedback](../../topics/agent-in-chat-bug-feedback.md)

[^dotey-2123936278056165393]: In large projects, both humans and AI can only understand part
