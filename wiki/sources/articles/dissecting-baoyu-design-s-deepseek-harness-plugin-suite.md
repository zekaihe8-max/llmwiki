---
type: Source
title: "拆解宝玉 baoyu-design 的 DeepSeek Harness 插件套件"
title_en: "Dissecting baoyu-design's DeepSeek Harness Plugin Suite"
description: "帖文介绍宝玉 baoyu-design 的六款 DeepSeek Harness 插件，覆盖幻灯片、网页设计、设计规范、数据看板、动画和白板。"
description_en: "The post introduces six DeepSeek Harness plugins from baoyu-design, covering slides, web design, design systems, dashboards, animation, and whiteboards."
resource: https://x.com/0xlangeai/status/2120516830607606197
tags: [deepseek-harness, plugins, design, agents]
sources:
  - id: 8ec29dcbbbc849cc
    resource: https://x.com/0xlangeai/status/2120516830607606197
    title: "Dissecting baoyu-design's DeepSeek Harness Plugin Suite"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T20:10:25+08:00
---

# 拆解宝玉 baoyu-design 的 DeepSeek Harness 插件套件

*Dissecting baoyu-design's DeepSeek Harness Plugin Suite*

「帖文称」宝玉的 baoyu-design 里有一套 DeepSeek Harness 插件，能做 PPT、网页设计、数据看板、动画等，共六个子项目并共用 dsh-claude-artifacts；安装只需在 DeepSeek Harness 桌面版的 Plugins 页面填包名并启用，无需克隆仓库或自行构建编辑器。[^8ec29dcbbbc849cc]

The post says baoyu-design offers a suite of DeepSeek Harness plugins for slides, web design, data dashboards, animation, and more, with six sub-projects sharing dsh-claude-artifacts; installation requires only entering the package name in DeepSeek Harness desktop Plugins and enabling it, with no repository cloning or editor building needed.[^8ec29dcbbbc849cc]

## 摘要 / Summary

- baoyu-design 的 DeepSeek Harness 插件包含 claude-slides、claude-design、claude-design-system、claude-dashboard、claude-motion、claude-whiteboard 六个子项目。[^8ec29dcbbbc849cc]
- The baoyu-design DeepSeek Harness plugin suite includes six sub-projects: claude-slides, claude-design, claude-design-system, claude-dashboard, claude-motion, and claude-whiteboard.[^8ec29dcbbbc849cc]
- 这些插件共用 dsh-claude-artifacts，负责左侧「作品」页，以及把编辑器里的评论交给 Agent。[^8ec29dcbbbc849cc]
- The plugins share dsh-claude-artifacts, which handles the left-side "Works" page and passes editor comments to the Agent.[^8ec29dcbbbc849cc]
- 安装方式为在 DeepSeek Harness 桌面版打开 Plugins → Add plugin，填写对应包名（如 dsh-claude-slides），安装启用后重启并新开会话即可，无需克隆仓库或自行构建编辑器。[^8ec29dcbbbc849cc]
- Installation is via DeepSeek Harness desktop Plugins → Add plugin, entering the package name (e.g., dsh-claude-slides), then installing/enabling, restarting, and starting a new session; no repository cloning or editor building is required.[^8ec29dcbbbc849cc]
- claude-slides 可把笔记、课程材料或产品需求交给 Agent 生成可编辑幻灯片，支持改字、拖动元素、全屏放映，并导出 PDF、HTML 或 PowerPoint。[^8ec29dcbbbc849cc]
- claude-slides lets the Agent generate editable slides from notes, course materials, or product requirements, supporting text edits, element dragging, full-screen presentation, and export to PDF, HTML, or PowerPoint.[^8ec29dcbbbc849cc]
- claude-design 支持在一个画布中排列多个画板（如首页、注册页、手机版），可修改文案、调整参数、播放交互原型，并导出 HTML、PDF、PNG。[^8ec29dcbbbc849cc]
- claude-design supports arranging multiple artboards on one canvas (e.g., homepage, signup page, mobile version), with text editing, parameter adjustment, interactive prototype playback, and export to HTML, PDF, or PNG.[^8ec29dcbbbc849cc]
- claude-dashboard 接受 CSV、TSV 或 JSON 数据，由 Agent 制作图表、指标和表格，页面支持筛选，且 Sources 面板可溯源数据行，换新数据后页面会重新计算。[^8ec29dcbbbc849cc]
- claude-dashboard accepts CSV, TSV, or JSON data for the Agent to create charts, metrics, and tables; the page supports filtering, the Sources panel traces numbers to original data rows, and the page recalculates when new data is swapped in.[^8ec29dcbbbc849cc]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2120516830607606197)。 / Original: [link](https://x.com/0xlangeai/status/2120516830607606197).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)
- Topic: [插件样式不一使 Harness 界面碎片化 / Harness UI fragmentation from mismatched plugin styles](../../topics/harness-plugin-style-fragmentation.md)

[^8ec29dcbbbc849cc]: Dissecting baoyu-design's DeepSeek Harness Plugin Suite
