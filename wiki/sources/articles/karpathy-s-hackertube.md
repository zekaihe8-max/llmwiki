---
type: Source
title: "Karpathy 的 HackerTube"
title_en: "Karpathy's HackerTube"
description: "安德烈·卡帕西用 Claude Opus 5.5 两小时基于 Hacker News 推荐构建了“净化版 YouTube”HackerTube。"
description_en: "Andrej Karpathy built HackerTube, a “clean” YouTube based on Hacker News recommendations, in two hours using Claude Opus 5.5."
resource: https://x.com/shao__meng/status/2116778454200865097
tags: [ai-coding, claude-code, youtube, hacker-news, personal-agent]
sources:
  - id: karpathy-hackertube-claude-code
    resource: https://x.com/shao__meng/status/2116778454200865097
    title: "Karpathy's HackerTube"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:02:06+08:00
---

# Karpathy 的 HackerTube

*Karpathy's HackerTube*

帖文称，Andrej Karpathy 在被 YouTube 夸张缩略图和算法垃圾刷到崩溃后，用 Claude Opus 5.5（Claude Code）从 Hacker News 评论中筛选出近二十年被推荐的 YouTube 视频，自建仿 YouTube 站点 HackerTube；约 4 万条推荐评论汇总为 6,454 条视频、150 个主题，他几乎不再亲自写代码，全程与 Claude 对话，仅手工完成 Google API 密钥、开 VPS、买域名三件事，整个过程约两小时。[^karpathy-hackertube-claude-code]

The post says Andrej Karpathy, frustrated by YouTube’s clickbait thumbnails and algorithmic spam, used Claude Opus 5.5 (Claude Code) to mine Hacker News comments for YouTube videos recommended over nearly two decades and built HackerTube, a YouTube-like site; roughly 40,000 recommendation comments were distilled into 6,454 videos across 150 topics, he hardly wrote code himself and mostly conversed with Claude, manually handling only the Google API key, VPS, and domain, with the whole process taking about two hours.[^karpathy-hackertube-claude-code]

## 摘要 / Summary

- 卡帕西用 Claude Opus 5.5（Claude Code）约两小时构建了 HackerTube。 / Karpathy built HackerTube in about two hours using Claude Opus 5.5 (Claude Code).[^karpathy-hackertube-claude-code]
- 素材来自约 4 万条 Hacker News 评论中的 YouTube 推荐，产出 6,454 条视频、150 个主题，跨度 2007–2026。 / The source was roughly 40,000 Hacker News comments recommending YouTube videos, yielding 6,454 videos and 150 topics spanning 2007–2026.[^karpathy-hackertube-claude-code]
- 他仅手工完成了 Google API 密钥、开 VPS、买域名三件事，其余全靠与 Claude 对话。 / He manually handled only three things—the Google API key, VPS, and domain—and did everything else through conversation with Claude.[^karpathy-hackertube-claude-code]
- 产品做法包括：不上传原始缩略图而用 50% 进度帧、无需登录的 For You 且状态存在浏览器本地会话、键盘快捷键、可导出站点数据。 / Product choices include using 50% progress frames instead of uploaded thumbnails, login-free For You with local session state, keyboard shortcuts, and exportable site data.[^karpathy-hackertube-claude-code]
- 他日常默认使用 Opus 5.5 Medium；VPS 起来后把 IP 交给 Claude，让它自行更新、部署、加固与优化站点。 / His daily default is Opus 5.5 Medium; after the VPS is up, he gives Claude the IP and lets it update, deploy, harden, and optimize the site.[^karpathy-hackertube-claude-code]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2116778454200865097)。 / Original: [link](https://x.com/shao__meng/status/2116778454200865097).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^karpathy-hackertube-claude-code]: Karpathy's HackerTube
