---
type: Source
title: "TikTok 推荐逆向笔记"
title_en: "TikTok Recommendation Reverse-Engineering Notes"
description: "帖文称 TikTok 手机端依靠 25 余个 AI 模型和 50 多项实时设备变量，在视频播放前预计算推荐分，并对可能流失的用户进行模型干预。"
description_en: "The post claims TikTok’s mobile app relies on 25+ AI models and 50+ real-time device variables to pre-calculate recommendation scores before playback and intervene with users at risk of churning."
resource: https://x.com/vista8/status/2118367210418925840
tags: [tiktok, recommendation-algorithm, reverse-engineering, mobile-app, ai-models]
sources:
  - id: tiktok-recommendation-reverse-notes
    resource: https://x.com/vista8/status/2118367210418925840
    title: "TikTok Recommendation Reverse-Engineering Notes"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T20:43:03+08:00
---

# TikTok 推荐逆向笔记

*TikTok Recommendation Reverse-Engineering Notes*

帖文称，TikTok 手机端有 25+ 个 AI 模型用于判断什么内容能让用户持续刷下去；服务器会在视频播放前预先计算“推荐分”，预测跳过、看完、点赞、打开评论、关注创作者等概率。App 每次请求新视频批次时，会带上陀螺仪/运动传感器、电量、充电、屏幕亮度、静音等 50+ 变量，甚至包括输入但未发送的消息。若模型预测用户可能流失，手机会请求“紧急批次”视频；持续跳过可能被标记为“失去专注”，最后手段是推送直播。模型还会根据多久未摸屏幕、是否躺着判断用户是否打瞌睡，并预测下次打开 App 的时间以提前后台缓存。内容来源于视频作者说法，未实测。[^tiktok-recommendation-reverse-notes]

The post claims TikTok’s mobile app uses 25+ AI models to judge what keeps users scrolling, and the server pre-calculates a “recommendation score” before playback to predict skip, watch-complete, like, comment-open, and follow probabilities. With each new video request, the app reportedly sends 50+ real-time variables including gyroscope/motion state, battery, charging, screen brightness, mute status, and even typed-but-unsent messages. If the model predicts possible churn, the phone may request an “emergency batch” of videos; continued skipping may be flagged as “lost focus,” with a live stream as the last resort. Models also allegedly judge dozing from no-touch duration and lying posture, and predict the next app open time to pre-cache videos in the background. The content comes from the video author’s claims and has not been independently tested.[^tiktok-recommendation-reverse-notes]

## 摘要 / Summary

- 帖文称 TikTok 手机端有 25+ 个 AI 模型，用来判断什么内容能让用户持续刷下去。 / The post claims TikTok mobile has 25+ AI models to judge what content keeps users scrolling.[^tiktok-recommendation-reverse-notes]
- 服务器预先给每个视频计算“推荐分”，预测用户跳过、看完、点赞、打开评论、关注创作者的概率。 / The server allegedly pre-calculates a “recommendation score” for each video, predicting skip, watch-complete, like, comment-open, and follow probabilities.[^tiktok-recommendation-reverse-notes]
- App 每次请求新视频批次时会带上 50+ 实时变量，包括陀螺仪/运动状态、电量、充电、屏幕亮度、静音，甚至输入但未发送的消息。 / The app reportedly sends 50+ real-time variables with each new video request, including gyroscope/motion state, battery, charging, screen brightness, mute status, and typed-but-unsent messages.[^tiktok-recommendation-reverse-notes]
- 若模型预测用户会跳过已加载视频，手机会请求“紧急批次”视频；持续跳过会被标记为“失去专注”，最后手段是推一条直播。 / If the model predicts the user will skip loaded videos, the phone allegedly requests an “emergency batch”; continued skipping may be flagged as “lost focus,” with a live stream as the last resort.[^tiktok-recommendation-reverse-notes]
- 模型会根据多久没摸屏幕、是否躺着判断用户是否打瞌睡，并预测下次打开 App 的时间以便提前后台缓存视频。 / Models also allegedly judge dozing from no-touch duration and lying posture, and predict next app open time to pre-cache videos in the background.[^tiktok-recommendation-reverse-notes]
- 内容来源于视频作者说法，未实测，相关主张未经独立核实。 / The content comes from the video author’s claims, has not been independently tested, and related claims are unverified.[^tiktok-recommendation-reverse-notes]

## 相关 / Related

- 原文：[链接](https://x.com/vista8/status/2118367210418925840)。 / Original: [link](https://x.com/vista8/status/2118367210418925840).
- Topic: [AI 媒体内容回灌训练语料 / AI media content looping into training corpora](../../topics/ai-media-training-corpus-loop.md)
- Topic: [近实时决策 API / Near real-time decisions API](../../topics/near-real-time-decisions-api.md)
- Topic: [技术滥用关切的连续性 / Continuity of technology-misuse concern](../../topics/tech-misuse-concern-continuity.md)
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)

[^tiktok-recommendation-reverse-notes]: TikTok Recommendation Reverse-Engineering Notes
