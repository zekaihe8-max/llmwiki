---
type: Source
title: "自媒体工作台：DeepSeek Harness 社区插件"
title_en: "Self-Media Workbench: A DeepSeek Harness Community Plugin"
description: "一款免费开源的 DeepSeek Harness 插件，支持灵感记录、一键生成脚本与图片、日历排期、数据复盘和风格提炼。"
description_en: "A free, open-source DeepSeek Harness plugin for inspiration capture, one-click script and image generation, calendar scheduling, data review, and style extraction."
resource: https://github.com/woniuniuniu/dsh-media-desk
tags: [deepseek-harness, plugin, self-media, ai-content-creation, open-source]
sources:
  - id: ea966830dd088d12
    resource: https://github.com/woniuniuniu/dsh-media-desk
    title: "Self-Media Workbench: A DeepSeek Harness Community Plugin"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:47:41+08:00
---

# 自媒体工作台：DeepSeek Harness 社区插件

*Self-Media Workbench: A DeepSeek Harness Community Plugin*

「自媒体工作台」是安装在 DeepSeek Harness 侧栏的社区插件，由小红书博主「蜗牛的科技笔记」开发。帖文称，它提供灵感墙、一键成稿、排期日历、复盘和风格五个页面，可生成口播脚本、标题、封面、配图和分镜，并支持小红书、抖音、B 站、公众号、TikTok、Instagram、YouTube 和 X。插件本身免费开源，模型和生图费用走用户自己的账号，内容仅存储在本机，不接云端。[^ea966830dd088d12]

"Self-Media Workbench" is a community plugin installed in the DeepSeek Harness sidebar, developed by Xiaohongshu blogger "Snail's Tech Notes". According to the post, it offers five pages—inspiration wall, one-click draft generation, scheduling calendar, review, and style—and can generate voice-over scripts, titles, covers, images, and storyboards, supporting Xiaohongshu, Douyin, Bilibili, WeChat Official Accounts, TikTok, Instagram, YouTube, and X. The plugin itself is free and open source; model and image-generation costs are borne by the user's own accounts, and content is stored locally only with no cloud backend.[^ea966830dd088d12]

## 摘要 / Summary

- 插件需 DeepSeek Harness 0.2.1-rc.5 及以上 0.2.x 版本，已在 0.2.2-rc.1 桌面版和网页版测试。 / The plugin requires DeepSeek Harness 0.2.1-rc.5 or later 0.2.x and has been tested on the 0.2.2-rc.1 desktop and web versions.[^ea966830dd088d12]
- 一键成稿可同时生成标题、脚本、视频封面、配图和六格分镜，支持边生成边修改、撤销。 / One-click draft generation produces titles, scripts, video covers, images, and six-panel storyboards simultaneously, with real-time edits and undo support.[^ea966830dd088d12]
- 复盘页可手动录入、粘贴 CSV 或导入账号，数据建议可导出为 DeepSeek Harness Skill。 / The review page supports manual entry, CSV pasting, or account import, and data-driven suggestions can be exported as a DeepSeek Harness Skill.[^ea966830dd088d12]
- 插件本身免费开源，不带密钥；生图需用户自备 API Key 或 DSH 订阅生图工具，密钥仅存在本机 settings.json。 / The plugin itself is free and open source with no bundled keys; image generation requires the user's own API key or DSH subscription image tool, with keys stored only in local settings.json.[^ea966830dd088d12]
- 内容全部保存在本机 ~/.dsh/media-desk/，没有云端和账号系统，卸载插件不会删除用户内容。 / All content is stored locally at ~/.dsh/media-desk/, with no cloud or account system; uninstalling the plugin does not delete user content.[^ea966830dd088d12]
- 导入小红书、抖音、B 站、TikTok、Instagram 和 X 账号需通过 Monid 服务，仅读取公开内容，按次计费。 / Importing accounts for Xiaohongshu, Douyin, Bilibili, TikTok, Instagram, and X requires the Monid service, reads only public content, and is charged per use.[^ea966830dd088d12]

## 相关 / Related

- 原文：[链接](https://github.com/woniuniuniu/dsh-media-desk)。 / Original: [link](https://github.com/woniuniuniu/dsh-media-desk).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)

[^ea966830dd088d12]: Self-Media Workbench: A DeepSeek Harness Community Plugin
