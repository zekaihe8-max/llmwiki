---
type: Source
title: "两条产品体验与动效优化 Prompt"
title_en: "Two Prompts for Product UX and Motion Design Optimization"
description: "分享两条用 AI 审查并修复产品用户体验与动效的 Prompt，主张复杂留给系统、动效要有来有去。"
description_en: "Share two AI prompts to audit and fix product UX and motion design, arguing that complexity stays with the system and motion should be explanatory and continuous."
resource: https://x.com/Khazix0918/status/2125110224143171669
tags: [product-design, ux, motion-design, ai-prompts]
sources:
  - id: khazix0918-ux-animation-prompts
    resource: https://x.com/Khazix0918/status/2125110224143171669
    title: "Two Prompts for Product UX and Motion Design Optimization"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T19:51:20+08:00
---

# 两条产品体验与动效优化 Prompt

*Two Prompts for Product UX and Motion Design Optimization*

「帖文称」@Khazix0918 分享了两条自己做产品时使用的 Prompt：第一条以“复杂应该留给我们系统，不要留给用户”为原则，让 Gemini 担任方案、文案、交互顾问审查整个项目并直接修好，再亲手用一遍并用 GPT 审查后合并上线；第二条要求把动效做到苹果式的细腻丝滑，按“状态变化”而非部件排查，遵循动效在解释发生了什么、全项目一套语言、克制、跟手可打断、不付性能代价、不引入新问题等标准，修完后同样让 GPT 审查并合并上线。[^khazix0918-ux-animation-prompts]

The post says @Khazix0918 shares two Prompts used in his own products: the first, under the principle that “complexity should stay with our system, not the user,” asks Gemini to act as product, copy, and interaction consultant to audit the whole project and fix it directly, then the author personally verifies it and uses GPT for review before merging; the second requires motion design to reach Apple-level delicacy and smoothness, auditing by “state changes” rather than components and following standards such as motion explaining what happened, one unified language across the project, restraint, followable and interruptible animation, no performance cost, and no new issues, then likewise having GPT review before merging.[^khazix0918-ux-animation-prompts]

## 摘要 / Summary

- 第一条 Prompt 列出八条体验原则，包括“系统能判断的，不留给用户”“此刻没用的，就不出现”“能替人做的，就直接做”“同一件事，处处一样”“按下去有回应，再按能收回”“不打断人手上的事”“常用的好做，会丢东西的难误碰”“界面自己说明自己”。[^khazix0918-ux-animation-prompts]
- The first Prompt lists eight UX principles, including “if the system can judge it, don’t leave it to the user,” “hide what is not useful right now,” “if it can be done for the person, just do it,” “the same thing is consistent everywhere,” “press to respond, press again to cancel,” “don’t interrupt what the person is doing,” “common actions easy to do, actions that lose things hard to misclick,” and “the interface explains itself.”[^khazix0918-ux-animation-prompts]
- 第二条 Prompt 建议按“状态变化”排查动效，范围包括出现、消失、移动、变大小、换内容、换图标、数值跳动、按下、悬停、加载、完成、出错，从页面切换到单个图标或数字都在内。[^khazix0918-ux-animation-prompts]
- The second Prompt suggests auditing motion by “state changes,” covering appearance, disappearance, movement, resizing, content changes, icon changes, number jumps, presses, hovers, loading, completion, and errors, from page switches down to a single icon or number.[^khazix0918-ux-animation-prompts]
- 好动效标准要求动效在解释发生了什么、全项目一套语言、快轻克制不抢戏、跟手可打断、不付性能代价、不引入抖闪重排溢出等新问题，并尊重系统“减少动态效果”设置。[^khazix0918-ux-animation-prompts]
- Good motion standards require motion to explain what happened, one unified language across the project, fast light restrained animation that doesn’t steal focus, followable and interruptible behavior, no performance cost, no new issues such as jitter, flashing, reflow, or overflow, and respect for the system’s “reduce motion” setting.[^khazix0918-ux-animation-prompts]
- 两条 Prompt 的执行流程一致：让模型审查并直接修好，作者亲手用一遍确认，再用 GPT/Gemini 做一次审查，最后直接合并上线。[^khazix0918-ux-animation-prompts]
- Both Prompts follow the same execution flow: have the model audit and fix directly, the author personally verifies by using it, then GPT/Gemini performs another review, and finally it is merged and shipped.[^khazix0918-ux-animation-prompts]
- 作者在文中提到使用 Gemini 担任方案、文案、交互顾问，并在修复后用 GPT 进行二次审查。[^khazix0918-ux-animation-prompts]
- The author mentions using Gemini as product, copy, and interaction consultant, then using GPT for a second review after fixes.[^khazix0918-ux-animation-prompts]

## 相关 / Related

- 原文：[链接](https://x.com/Khazix0918/status/2125110224143171669)。 / Original: [link](https://x.com/Khazix0918/status/2125110224143171669).
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)
- Topic: [用 Skills 组合复刻原生感 App / Compose Skills to recreate native-feel apps](../../topics/skills-stack-native-app-recreation.md)
- Topic: [Agent 对话内问题反馈 / In-conversation agent bug feedback](../../topics/agent-in-chat-bug-feedback.md)

[^khazix0918-ux-animation-prompts]: Two Prompts for Product UX and Motion Design Optimization
