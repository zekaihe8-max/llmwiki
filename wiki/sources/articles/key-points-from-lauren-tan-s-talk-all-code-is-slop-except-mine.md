---
type: Source
title: "Lauren Tan「All Code Is Slop (Except Mine)」演讲要点"
title_en: "Key points from Lauren Tan's talk \"All Code Is Slop (Except Mine)\""
description: "来自 SpaceXAI Grok Bot 团队的 AI 编程工程实践总结，涵盖 lint 规则、代码库卫生、注释管控、AI 自查与形式化验证等。"
description_en: "Summary of AI programming engineering practices from SpaceXAI's Grok Bot team, covering lint rules, codebase hygiene, comment control, AI self-checking, and formal verification."
resource: https://x.com/dotey/status/2121835140850602200
tags: [ai-engineering, code-quality, lint, formal-verification, grok-bot]
sources:
  - id: c1dee8667d1c9c6f
    resource: https://x.com/dotey/status/2121835140850602200
    title: "Key points from Lauren Tan's talk \"All Code Is Slop (Except Mine)\""
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T19:53:50+08:00
---

# Lauren Tan「All Code Is Slop (Except Mine)」演讲要点

*Key points from Lauren Tan's talk "All Code Is Slop (Except Mine)"*

帖文称，Lauren Tan 在 AI Engineer 大会上分享《All Code Is Slop (Except Mine)》要点，她在 SpaceXAI 负责 Grok Bot 桌面版，总结了团队在 AI 编程中的八条工程实践，包括将 AI 纠正转化为 lint 规则、保持代码库干净、禁用易错功能与大部分注释、让 AI 自查并录屏、使用形式化验证等，团队上月合并 1.1 万个 PR 且约 0.5% 被撤回。[^c1dee8667d1c9c6f]

The post says Lauren Tan shared key points from her talk "All Code Is Slop (Except Mine)" at the AI Engineer conference. She leads Grok Bot desktop at SpaceXAI and summarized eight engineering practices for AI programming, including converting AI corrections into lint rules, keeping the codebase clean, banning error-prone features and most comments, letting AI self-check with recordings, and using formal verification. The team merged about 11,000 PRs last month with roughly 0.5% reverted.[^c1dee8667d1c9c6f]

## 摘要 / Summary

- 每纠正 AI 一次，就把纠正写成 lint 等自动检查规则，而不是只在 agents.md 等说明文档里补充文字。[^c1dee8667d1c9c6f]
- Every time the AI is corrected, the correction should be turned into an automated check such as a lint rule, rather than only adding text to documents like agents.md.[^c1dee8667d1c9c6f]
- 代码库是 AI 最主要的学习材料，坏写法和临时补丁会被后续 AI 照抄，因此要保持代码库干净。[^c1dee8667d1c9c6f]
- The codebase is the AI's primary learning material; bad patterns and temporary patches get copied by later AIs, so the codebase must be kept clean.[^c1dee8667d1c9c6f]
- 容易用错的功能直接禁掉，例如 React 中某个常被误用的功能在产品代码中已被禁止。[^c1dee8667d1c9c6f]
- Features that are easily misused are banned outright; for example, a commonly misused React feature is prohibited in product code.[^c1dee8667d1c9c6f]
- 禁掉 99% 的代码注释，防止 AI 在注释里为捷径找理由并被后续 AI 模仿。[^c1dee8667d1c9c6f]
- Ban 99% of code comments to prevent AI from justifying shortcuts in comments and having later AIs imitate them.[^c1dee8667d1c9c6f]
- 让 AI 自己运行程序并像用户一样操作，交出录屏和截图供人审查，团队大部分 Token 花在这一步。[^c1dee8667d1c9c6f]
- Have the AI run the program and operate it like a user, then submit recordings and screenshots for human review; most of the team's tokens are spent on this step.[^c1dee8667d1c9c6f]
- 团队上月合并约 1.1 万个 PR，被撤回约 0.5%，应用比刚发布时更快。[^c1dee8667d1c9c6f]
- The team merged about 11,000 PRs last month, with roughly 0.5% reverted, and the app is faster than at launch.[^c1dee8667d1c9c6f]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2121835140850602200)。 / Original: [link](https://x.com/dotey/status/2121835140850602200).
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)

[^c1dee8667d1c9c6f]: Key points from Lauren Tan's talk "All Code Is Slop (Except Mine)"
