---
type: Source
title: "谷歌 Neon + MAGI-2：视频与代码双向生成（Video to Code / Code to Video）"
title_en: "Google Neon + MAGI-2: Bidirectional Video-to-Code and Code-to-Video Generation"
description: "帖文介绍用谷歌 Neon、LibTV MCP 与 MAGI-2 视频模型，实现视频参考生成网页及代码生成人物动作视频的双向玩法。"
description_en: "The post describes using Google Neon, LibTV MCP, and the MAGI-2 video model for bidirectional video-to-code and code-to-video generation."
resource: https://x.com/op7418/status/2125531570622828617
tags: [google-neon, magi-2, libtv, video-to-code, code-to-video, ai-video-generation]
sources:
  - id: neon-magi-2-video-code-bidirectional
    resource: https://x.com/op7418/status/2125531570622828617
    title: "Google Neon + MAGI-2: Bidirectional Video-to-Code and Code-to-Video Generation"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:23:17+08:00
---

# 谷歌 Neon + MAGI-2：视频与代码双向生成（Video to Code / Code to Video）

*Google Neon + MAGI-2: Bidirectional Video-to-Code and Code-to-Video Generation*

「帖文称」X 用户 @op7418（歸藏/guizang.ai）发布关于谷歌 Neon、LibTV MCP 与 MAGI-2 视频模型的组合用法，将其称为“Code to Video 与 Video to Code”，并称可正向也可反向操作：一套基于视频模型的视频参考生成漂亮且动效丰富的网页；另一套让大语言模型先生成网页人物动作视频，再作为视频模型参考。关联帖文还提到在 LibTV 上试用 MAGI-2，称其生成质量基本追平第一梯队，并支持 30 秒 1080P 视频。[^neon-magi-2-video-code-bidirectional]

The post by @op7418 (歸藏/guizang.ai) describes a bidirectional workflow with Google Neon, LibTV MCP, and the MAGI-2 video model—“Code to Video” and “Video to Code”—where video references generate animated webpages, and LLMs generate character-action videos for webpage reference. A linked post says MAGI-2 on LibTV reportedly approaches top-tier quality and supports 30-second 1080P video.[^neon-magi-2-video-code-bidirectional]

## 摘要 / Summary

- 作者将该组合称为“Code to Video 与 Video to Code”，支持正向和反向两种玩法。[^neon-magi-2-video-code-bidirectional]
- The author calls the combination “Code to Video” and “Video to Code,” supporting both forward and reverse workflows.[^neon-magi-2-video-code-bidirectional]
- 一种方式是基于视频模型的视频参考，生成漂亮且动效丰富的网页。[^neon-magi-2-video-code-bidirectional]
- One approach uses video-model video references to generate attractive, animation-rich webpages.[^neon-magi-2-video-code-bidirectional]
- 另一种方式是让大语言模型生成网页人物动作视频，再交给视频模型作为参考。[^neon-magi-2-video-code-bidirectional]
- The other approach has an LLM generate webpage character-action videos, then uses them as video-model references.[^neon-magi-2-video-code-bidirectional]
- 关联帖文提到在 LibTV 上试用 MAGI-2，称其生成质量基本追平第一梯队，并支持 30 秒 1080P 视频。[^neon-magi-2-video-code-bidirectional]
- The linked post says MAGI-2 on LibTV reportedly matches top-tier generation quality and supports 30-second 1080P video.[^neon-magi-2-video-code-bidirectional]
- 该内容来自 X 用户 @op7418（歸藏/guizang.ai）的帖文及其关联文章。[^neon-magi-2-video-code-bidirectional]
- The content comes from X user @op7418 (歸藏/guizang.ai) and a linked article.[^neon-magi-2-video-code-bidirectional]

## 相关 / Related

- 原文：[链接](https://x.com/op7418/status/2125531570622828617)。 / Original: [link](https://x.com/op7418/status/2125531570622828617).
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [Landing Page：选站复刻优于专用 Skill / Landing Pages — clone a reference site over a dedicated Skill](../../topics/landing-page-site-clone-over-skill.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^neon-magi-2-video-code-bidirectional]: Google Neon + MAGI-2: Bidirectional Video-to-Code and Code-to-Video Generation
