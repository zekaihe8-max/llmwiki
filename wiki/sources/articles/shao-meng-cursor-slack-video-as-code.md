---
type: Source
title: 邵萌谈 Cursor 看真实 Slack 生成代码视频
title_en: Meng Shao on Cursor making video as code from real Slack
description: 邵萌转述 Matt Palmer 的 Cursor 云 Agent 演示：以真实 Slack 为视觉参考，用代码生成动效视频，在内环检查修正，并将成功流程提炼为 Skill。
description_en: 'Meng Shao relays Matt Palmer’s Cursor cloud-agent demo: use real Slack as a visual reference, generate motion video with code, check and revise in an inner loop, and distill successful workflows into Skills.'
resource: https://x.com/shao__meng/status/2115991611306086574
tags: [cursor, computer-use, video-as-code, feedback-loops, skills]
sources:
  - id: shao-meng-cursor-slack-video-as-code
    resource: https://x.com/shao__meng/status/2115991611306086574
    title: Cursor agents rebuild Slack as video from the real interface
    author: human:meng shao
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:18:56+08:00
---

# 邵萌谈 Cursor 看真实 Slack 生成代码视频

*Meng Shao on Cursor making video as code from real Slack*

邵萌整理 Matt Palmer 的演示，把 Slack 动效复刻解释为一套创造方法：聊天、Agent 与可操控电脑结合，用真实参考校验代码产物，再将跑通的过程沉淀为可复用流程。[^shao-meng-cursor-slack-video-as-code]

Meng Shao summarizes Matt Palmer’s demo as a creative method: combine chat, an agent, and a controllable computer, validate coded artifacts against a real reference, and turn successful runs into reusable workflows.[^shao-meng-cursor-slack-video-as-code]

## 摘要 / Summary

Cursor 云 Agent 在 Linux 远程桌面的 Chrome 中查看真实 Slack，以界面和视频参考提取视觉、缓动与运动模式，生成 UI 动效视频；帖文明确说没有反编译 Slack。[^shao-meng-cursor-slack-video-as-code]

The Cursor cloud agent views real Slack in Chrome on a remote Linux desktop, using the interface and video references to extract visual, easing, and motion patterns for UI motion videos; the post explicitly says Slack was not decompiled.[^shao-meng-cursor-slack-video-as-code]

视频作为代码有两类验收：能否渲染或编译，以及视觉是否符合预期。内环是 Agent 制作、对照真实参考检查、有明确失败标准时修正，直到自认完成后交人验收；外环是人提供参考、偏好和访问权限，并评价产物、截图或分析结果。[^shao-meng-cursor-slack-video-as-code]

Video as code has two acceptance dimensions: whether it renders or compiles, and whether it looks as intended. In the inner loop the agent makes, checks against real references, and revises against explicit failure criteria before handing off for human review; in the outer loop people provide references, preferences, and access, and judge artifacts, screenshots, or analytics.[^shao-meng-cursor-slack-video-as-code]

阶梯是先做一次，再编码成 Skill，再推广为抽象，最后自动化外环。失败时先定位断点，把原因编入 Skill，让后续 Agent 继承经验；不是仅靠增加提示来重试。[^shao-meng-cursor-slack-video-as-code]

The ladder is to do the task once, codify it as a Skill, generalize it into an abstraction, and eventually automate the outer loop. On failure, locate the break and encode its cause in the Skill so later agents inherit the lesson, rather than simply retrying with more prompting.[^shao-meng-cursor-slack-video-as-code]

这是对演示的转述，未给出可复现工程、量化视觉评测或普遍可靠性证明。Slack 访问需要人建 sandbox、提供凭证并登录；演示者还调侃可能触及 ToS，不能据此推断已获得平台许可。[^shao-meng-cursor-slack-video-as-code]

This is an account of a demo, without a reproducible project, quantitative visual evaluation, or proof of general reliability. Slack access requires a person to set up a sandbox, provide credentials, and log in; the presenter also jokes about possible ToS issues, which does not establish platform permission.[^shao-meng-cursor-slack-video-as-code]

## 相关 / Related

- 原文 / Original: [邵萌帖文 / Meng Shao’s post](https://x.com/shao__meng/status/2115991611306086574)
- 主题 / Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- 主题 / Topic: [Computer Use](../../topics/computer-use.md)
- 主题 / Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^shao-meng-cursor-slack-video-as-code]: Cursor agents rebuild Slack as video from the real interface
