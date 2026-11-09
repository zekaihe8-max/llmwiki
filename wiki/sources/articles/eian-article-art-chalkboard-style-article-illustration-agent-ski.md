---
type: Source
title: "eian-article-art：为文章生成粉笔风格配图的 Agent Skill"
title_en: "eian-article-art: Chalkboard-style article illustration Agent Skill"
description: "一个在 macOS 上为 Codex 和 Claude Code 编写的 Agent Skill，按需为文章选点并生成粉笔风格封面与插图。"
description_en: "A macOS Agent Skill for Codex and Claude Code that selects image spots in articles and generates chalkboard-style covers and illustrations."
resource: https://github.com/YIAN6557/eian-article-art
tags: [agents, agent-skill, codex, image-generation, illustration]
sources:
  - id: eian-article-art
    resource: https://github.com/YIAN6557/eian-article-art
    title: "eian-article-art: Chalkboard-style article illustration Agent Skill"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:47:11+08:00
---

# eian-article-art：为文章生成粉笔风格配图的 Agent Skill

*eian-article-art: Chalkboard-style article illustration Agent Skill*

GitHub 仓库 eian-article-art 提供一套针对 Codex 与 Claude Code 的 Agent Skill，在 macOS 环境下为中英文文章自动选点并绘制粉笔风格封面与插图，生成前会先列出图位建议并附一张样图，等待用户批准后再作图，最终输出 PNG 与插图版 Markdown。[^eian-article-art]

GitHub repository eian-article-art provides an Agent Skill for Codex and Claude Code that, on macOS, automatically selects image spots in Chinese and English articles and draws chalkboard-style covers and illustrations; it proposes image locations with one sample image and awaits user approval before drawing, then outputs PNGs and an illustrated Markdown file.[^eian-article-art]

## 摘要 / Summary

- 风格为纯黑背景、无脸圆头小人物与白色粉笔手写体，仅工具图标和刻度线使用彩色。 / Style uses pure black background, faceless round-headed figures and white chalk handwriting, with color only for tool icons and measurement marks.[^eian-article-art]
- 大约每 2000 个中文字符（或 1000 个英文单词）选一个图位，且不为代码、表格或轶事插图。 / About one image spot per 2,000 Chinese characters (or 1,000 English words), and no illustrations for code, tables, or anecdotes.[^eian-article-art]
- 作图前先停止并展示图位列表与一张样图，用户批准后才绘制其余图片。 / Before drawing, it stops and shows the image-location list plus one sample image; remaining images are drawn only after user approval.[^eian-article-art]
- 文字不由 AI 绘制，而是以 HTML 添加后用 Chrome 渲染为 PNG，封面 2000×800、插图 1672×941。 / Text is not drawn by AI; it is added in HTML and rendered to PNG via Chrome, with covers at 2000×800 and illustrations at 1672×941.[^eian-article-art]
- 需要 macOS 自带字体 Hannotate SC、Google Chrome，以及已登录 ChatGPT 账号的 Codex。 / Requires macOS font Hannotate SC, Google Chrome, and Codex signed in with a ChatGPT account.[^eian-article-art]
- 代码采用 MIT 许可，资源目录包含参考图、HTML 模板、渲染脚本与已批准示例。 / Code is MIT licensed, and the asset directory includes reference images, HTML templates, rendering scripts, and approved examples.[^eian-article-art]

## 相关 / Related

- 原文：[链接](https://github.com/YIAN6557/eian-article-art)。 / Original: [link](https://github.com/YIAN6557/eian-article-art).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)

[^eian-article-art]: eian-article-art: Chalkboard-style article illustration Agent Skill
