---
type: Source
title: "卡帕蒂周末用 Claude Code 做出 HackerTube，绕过 YouTube 推荐"
title_en: "Karpathy builds HackerTube over a weekend with Claude Code, bypassing YouTube recommendations"
description: "安德烈·卡帕蒂利用 Claude Code 和 Opus 5.5 在周末开发 HackerTube，通过分析 Hacker News 评论筛选视频，绕过 YouTube 推荐算法。"
description_en: "Andrej Karpathy used Claude Code and Opus 5.5 to build HackerTube over a weekend, filtering videos via Hacker News comment analysis to bypass YouTube's recommendation algorithm."
resource: https://x.com/karpathy/status/2116957135661945283
tags: [claude-code, ai-coding, youtube, recommendation, weekend-hack]
sources:
  - id: 87dac1624013add0
    resource: https://x.com/karpathy/status/2116957135661945283
    title: "Karpathy builds HackerTube over a weekend with Claude Code, bypassing YouTube recommendations"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T08:02:01+08:00
---

# 卡帕蒂周末用 Claude Code 做出 HackerTube，绕过 YouTube 推荐

*Karpathy builds HackerTube over a weekend with Claude Code, bypassing YouTube recommendations*

帖文称，安德烈·卡帕蒂（Andrej Karpathy）因不满 YouTube 推荐，周末开发了 HackerTube：让 Claude 从 20 年 Hacker News 的 4300 万条评论中筛选出 6,454 个反复被推荐的视频，耗时约两小时、使用 Opus 5.5。他只与 Claude 对话并让其完成全部工作，仅在浏览器中协助完成 Google Cloud API 密钥创建、VPS 启动和域名购买，拿到 IP 后交由 Claude 进行更新、加固、部署与优化。[^87dac1624013add0]

The post says Andrej Karpathy, dissatisfied with YouTube recommendations, built HackerTube over a weekend: he had Claude filter 43 million comments from 20 years of Hacker News down to 6,454 repeatedly recommended videos, taking about two hours with Opus 5.5. He only conversed with Claude and let it do all the work, manually assisting only with creating a Google Cloud API key, starting a VPS, and buying a domain; after receiving the IP, Claude updated, secured, hardened, deployed, and optimized the code.[^87dac1624013add0]

## 摘要 / Summary

- 项目名为 HackerTube，是卡帕蒂的周末黑客项目，旨在替代 YouTube 的推荐体验。 / The project is called HackerTube, a weekend hack by Karpathy intended to replace the YouTube recommendation experience.[^87dac1624013add0]
- 底层数据来自 20 年 Hacker News 的 4300 万条评论，Claude 将其筛选为 6,454 个反复被推荐的视频。 / Underlying data comes from 43 million comments over 20 years of Hacker News, which Claude filtered into 6,454 repeatedly recommended videos.[^87dac1624013add0]
- 使用 Claude Opus 5.5，耗时约两小时；不需要登录，状态保存在本地浏览器会话中。 / Uses Claude Opus 5.5 and took about two hours; no login required, with state kept in the local browser session.[^87dac1624013add0]
- 缩略图使用视频中间帧，而非用户上传的 A/B 测试优化图；评论分析数据以 zip 文件形式提供。 / Thumbnails use a representative middle frame from the video rather than user-uploaded A/B-test-optimized images; comment analysis data is provided as a zip file.[^87dac1624013add0]
- 人工仅完成三步：在 Google Cloud 创建 API 密钥、启动 VPS、购买域名；其余由 Claude Code 完成更新、加固、部署与优化。 / Manual work was limited to three steps: creating a Google Cloud API key, starting a VPS, and buying a domain; everything else—updating, securing, hardening, deploying, and optimizing—was done by Claude Code.[^87dac1624013add0]

## 相关 / Related

- 原文：[链接](https://x.com/karpathy/status/2116957135661945283)。 / Original: [link](https://x.com/karpathy/status/2116957135661945283).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [Vibe Coding 的记忆悖论 / Vibe-coding memory paradox](../../topics/vibe-coding-memory-paradox.md)

[^87dac1624013add0]: Karpathy builds HackerTube over a weekend with Claude Code, bypassing YouTube recommendations
