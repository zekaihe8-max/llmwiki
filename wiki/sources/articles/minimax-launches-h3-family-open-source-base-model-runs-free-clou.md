---
type: Source
title: "MiniMax 发布 H3 全家桶：开源基础版免费跑，云端旗舰版按秒收费"
title_en: "MiniMax Launches H3 Family: Open-Source Base Model Runs Free, Cloud Tiers Charged Per Second"
description: "帖文称 MiniMax 发布 H3 视频模型全家桶，仅基础版开源，旗舰、高速、轻量云端版按秒计费，最低 0.16 元/秒。"
description_en: "The post says MiniMax released the H3 video model family; only the base version is open source, while flagship, high-speed, and lite cloud versions are charged per second, starting at 0.16 yuan."
resource: https://x.com/lxfater/status/2125134836918575282
tags: [minimax, h3, video-generation, open-weight, cloud-pricing]
sources:
  - id: minimax-h3-family
    resource: https://x.com/lxfater/status/2125134836918575282
    title: "MiniMax Launches H3 Family: Open-Source Base Model Runs Free, Cloud Tiers Charged Per Second"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:03:11+08:00
---

# MiniMax 发布 H3 全家桶：开源基础版免费跑，云端旗舰版按秒收费

*MiniMax Launches H3 Family: Open-Source Base Model Runs Free, Cloud Tiers Charged Per Second*

帖文称 MiniMax 今早发布 H3 全家桶，云端按秒收费，最便宜 1 毛 6 一秒；昨日有创作者在 X 上实测，利用谷歌 AI Ultra 会员每月赠送的 2000 份云端算力额度，在 Colab 96G 显卡上跑开源版 H3，生成 45 秒 1080p 带声视频仅扣 4.2 份额度，理论上一个月可生成 470 多条，但生成加拉清需等 22 分钟，且需搭环境、下载 44G 模型。帖文还称 HuggingFace 仓库中只有基础版 H3 开源，提速版和轻量版仅云端提供；官方云端三档分别为 H3 旗舰（0.5 元/秒起，最高 2K）、H3-Highspeed（0.26 元/秒起，最长 30 秒）和 H3-Lite（0.16 元/秒起）。[^minimax-h3-family]

The post says MiniMax released the H3 family this morning with cloud pay-per-second pricing, cheapest at 0.16 yuan per second. It cites a creator's X test showing that using Google AI Ultra's monthly 2,000 free cloud compute quotas on a 96G Colab GPU, the open-source H3 generated a 45-second 1080p video with sound for only 4.2 quotas—enough for over 470 videos a month in theory—but generation plus upscaling took 22 minutes, plus environment setup and a 44G model download. The post claims only the base H3 is open on HuggingFace, while Highspeed and Lite are cloud-only; official cloud tiers are H3 flagship (from 0.5 yuan/sec, up to 2K), H3-Highspeed (from 0.26 yuan/sec, max 30 seconds), and H3-Lite (from 0.16 yuan/sec).[^minimax-h3-family]

## 摘要 / Summary

- 帖文称 MiniMax H3 云端按秒收费，最便宜为 H3-Lite 的 0.16 元/秒，旗舰版起价 0.5 元/秒，高速版起价 0.26 元/秒。[^minimax-h3-family]
- The post says MiniMax H3 cloud pricing is per second, cheapest at 0.16 yuan/sec for H3-Lite, flagship from 0.5 yuan/sec, high-speed from 0.26 yuan/sec.[^minimax-h3-family]
- 帖文引述实测显示，在谷歌 Colab 96G 显卡上运行开源版 H3，生成 45 秒 1080p 带声视频仅消耗 4.2 份谷歌 AI Ultra 算力额度，理论上每月可生成 470 多条。[^minimax-h3-family]
- The post cites a test showing that running open-source H3 on a 96G Colab GPU consumed only 4.2 Google AI Ultra compute quotas for a 45-second 1080p video with sound, theoretically allowing over 470 videos per month.[^minimax-h3-family]
- 帖文称该开源视频生成加拉清共耗时 22 分钟，且事前需搭建 ComfyUI 环境并下载 44G 模型文件。[^minimax-h3-family]
- The post says generation plus upscaling took 22 minutes, and users must set up ComfyUI and download a 44G model file beforehand.[^minimax-h3-family]
- 帖文称 HuggingFace 仓库中只有基础版 H3 开源，H3-Highspeed 和 H3-Lite 未开源，仅在云端按秒计费。[^minimax-h3-family]
- The post says only the base H3 is open-sourced on HuggingFace; H3-Highspeed and H3-Lite are not open-sourced and are available only via cloud pay-per-second.[^minimax-h3-family]
- 帖文给出的选择建议是：缺钱且有谷歌会员额度可用开源版省钱，缺时间或需批量测素材可付费购买云端时间。[^minimax-h3-family]
- The post suggests using the free open-source version if short on money and having Google member quotas, while paying for cloud tiers if short on time or batch-testing materials.[^minimax-h3-family]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2125134836918575282)。 / Original: [link](https://x.com/lxfater/status/2125134836918575282).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)

[^minimax-h3-family]: MiniMax Launches H3 Family: Open-Source Base Model Runs Free, Cloud Tiers Charged Per Second
