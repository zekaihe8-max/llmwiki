---
type: Source
title: "第一轮找壁纸最高清版：个人 Agent 能力实测"
title_en: "First-Round Wallpaper Highest-Resolution Test: Personal Agent Capability Evaluation"
description: "帖文称多个个人 Agent 在壁纸寻源任务中表现不一，只有 Alma 通过超分处理获得更高清图片。"
description_en: "The post claims that multiple personal agents performed unevenly on a wallpaper sourcing task, with only Alma obtaining a higher-resolution image via super-resolution."
resource: https://x.com/yetone/status/2117193082655719908
tags: [agents, personal-agent, evaluation, x-twitter]
sources:
  - id: yetone-personal-agent-wallpaper-test
    resource: https://x.com/yetone/status/2117193082655719908
    title: "First-Round Wallpaper Highest-Resolution Test: Personal Agent Capability Evaluation"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T20:08:15+08:00
---

# 第一轮找壁纸最高清版：个人 Agent 能力实测

*First-Round Wallpaper Highest-Resolution Test: Personal Agent Capability Evaluation*

「帖文称」yetone 发起第一轮个人 Agent 大考核，将原推截图分别交给 Grok、Muse、Cue、Comma、Today 与 Alma，要求找到壁纸的最高清版本。结果显示大多数 Agent 仅找到 736×736 的推特原图或直接放弃，而非个人 Agent 的 Alma 在 deepseek-v4.1-flash 模型下不仅找到 1024×1024 的网上最清晰图片，还主动调用超分程序进一步提升清晰度，令作者震撼。[^yetone-personal-agent-wallpaper-test]

The post describes a first-round personal agent assessment in which Grok, Muse, Cue, Comma, Today, and Alma were asked to find the highest-resolution version of a wallpaper from a screenshot. Most agents returned only the 736×736 Twitter original or gave up, while Alma—using deepseek-v4.1-flash—located the clearest 1024×1024 web image and applied super-resolution to produce an even clearer result.[^yetone-personal-agent-wallpaper-test]

## 摘要 / Summary

- Grok bot 用最快速度找到推特原图，但大小仅 736×736，直接返回并结束任务。 / Grok bot found the Twitter original fastest, but at only 736×736, then returned and ended the task.[^yetone-personal-agent-wallpaper-test]
- Muse 搜索很久并确认多个权限后，仍只返回 736×736 图片，并称知道网上有 1024×1024 版本但下载不下来。 / Muse searched for a long time and confirmed multiple permissions, yet still returned only the 736×736 image, saying it knew a 1024×1024 version existed online but could not download it.[^yetone-personal-agent-wallpaper-test]
- Cue 直接没找到并放弃，甚至怪用户没有裁剪掉截图中其他软件的图标。 / Cue failed to find the wallpaper and gave up, even blaming the user for not cropping out other app icons from the screenshot.[^yetone-personal-agent-wallpaper-test]
- Alma 不是 personal agent，但在 deepseek-v4.1-flash 下找到 1024×1024 最清晰网图，并调用超分程序处理后提供多张供选择。 / Alma is not a personal agent, but under deepseek-v4.1-flash it found the clearest 1024×1024 web image and applied super-resolution, providing multiple images for the user to choose.[^yetone-personal-agent-wallpaper-test]

## 相关 / Related

- 原文：[链接](https://x.com/yetone/status/2117193082655719908)。 / Original: [link](https://x.com/yetone/status/2117193082655719908).
- Topic: [个人 Agent 热潮与 Coding Agent 熟悉度差 / Personal-agent hype vs coding-agent familiarity](../../topics/personal-agent-hype-familiarity-gap.md)
- Topic: [个人 Agent 对外分享与 Bot 互聊 / Personal-agent public sharing and bot-to-bot chat](../../topics/personal-agent-share-and-interbot-chat.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)

[^yetone-personal-agent-wallpaper-test]: First-Round Wallpaper Highest-Resolution Test: Personal Agent Capability Evaluation
