---
type: Source
title: "X News：X 与 AI 视频中文改写站"
title_en: "X News: Chinese Rewriting Site for X Posts and AI Videos"
description: "GitHub 仓库 joeseesun/xnews 运营 X News 站点，把海外 X 创始人长帖、X 文章和爆款 AI 视频改写为保留原媒体与原文链接的自然中文。"
description_en: "The GitHub repo joeseesun/xnews runs X News, rewriting overseas X founder long posts, X Articles, and viral AI videos into natural Chinese while keeping original media and source links."
resource: https://github.com/joeseesun/xnews
tags: [x-news, chinese-rewrite, visual-journal, static-site]
sources:
  - id: x-news-zh-rewrite
    resource: https://github.com/joeseesun/xnews
    title: "X News: Chinese Rewriting Site for X Posts and AI Videos"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:49:50+08:00
---

# X News：X 与 AI 视频中文改写站

*X News: Chinese Rewriting Site for X Posts and AI Videos*

GitHub 仓库 joeseesun/xnews 发布名为 X News 的站点，专门将海外创始人在 X 上的长帖、X 文章以及爆款 AI 视频，改写成含原始媒体与原文链接的完整自然中文。站点采用「影像刊」视觉日历界面，支持按标题、作者或话题搜索，并可筛选是否包含视频。内容存放于 content/articles/，每日更新流程包括抓取、按编辑提示改写、运行测试、提交并部署；托管使用 Nginx 静态文件，Worker 作为回退。[^x-news-zh-rewrite]

The GitHub repository joeseesun/xnews publishes X News, a site that rewrites overseas founder long posts on X, X Articles, and viral AI videos into complete, natural Chinese with original media and source links. The site uses a “visual journal” interface and supports search by title, author, or topic, plus filtering by video presence. Articles live in content/articles/, and the daily update routine covers fetching, editorial rewriting, testing, committing, and deployment; hosting uses Nginx static files with a Worker fallback.[^x-news-zh-rewrite]

## 摘要 / Summary

- 仓库地址为 https://github.com/joeseesun/xnews，线上站点为 https://xnews.qiaomu.ai，RSS 订阅为 https://xnews.qiaomu.ai/feed.xml。 / The repository is at https://github.com/joeseesun/xnews, the live site is https://xnews.qiaomu.ai, and the RSS feed is https://xnews.qiaomu.ai/feed.xml.[^x-news-zh-rewrite]
- 界面采用 D「影像刊」视觉日历，设计契约见 DESIGN.md，部署说明见 DEPLOYMENT.md。 / The UI uses the D “visual journal” visual journal; the design contract is in DESIGN.md and deployment notes in DEPLOYMENT.md.[^x-news-zh-rewrite]
- 内容位于 content/articles/，每日运行 npm test 并提交测试过的源码与 public/，获授权后再运行 npm run deploy 发布。 / Content lives in content/articles/; daily work runs npm test, commits tested source and public/, and runs npm run deploy to publish only when authorized.[^x-news-zh-rewrite]
- 托管由 Nginx 静态文件在 qiaomu-hostinger 上提供，Worker xnews 作为回退；npm run deploy:worker 仅刷新回退 Worker，不发布主站点。 / Hosting serves Nginx static files on qiaomu-hostinger, with Worker xnews as a fallback; npm run deploy:worker only refreshes the fallback Worker and does not publish the primary site.[^x-news-zh-rewrite]
- 本地 QA 可用 npm run preview -- --port 33205 启动实际站点，并访问本地 only iframe 固件 http://127.0.0.1:33205/__qa/mobile。 / Local QA serves the actual site via npm run preview -- --port 33205 and exposes a local-only iframe fixture at http://127.0.0.1:33205/__qa/mobile.[^x-news-zh-rewrite]
- 许可证为 MIT，搜索支持按标题、作者或话题，可筛选视频存在性并切换文本扫描视图，/archive 默认扫描视图。 / Licensed under MIT; search supports title, author, or topic, with filtering by video presence and a text-only scan view, and /archive defaults to scan view.[^x-news-zh-rewrite]

## 相关 / Related

- 原文：[链接](https://github.com/joeseesun/xnews)。 / Original: [link](https://github.com/joeseesun/xnews).
- Topic: [AI 辅助剪藏与媒体笔记 / AI-assisted clipping and media notes](../../topics/ai-assisted-clipping-and-notes.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [GEO 第一步：个人网站与友情链接 / GEO’s first step — personal sites and friend links](../../topics/geo-personal-website-first-step.md)

[^x-news-zh-rewrite]: X News: Chinese Rewriting Site for X Posts and AI Videos
