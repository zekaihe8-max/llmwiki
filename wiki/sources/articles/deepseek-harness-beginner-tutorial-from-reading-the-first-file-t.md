---
type: Source
title: "Deepseek Harness 保姆级教程：从读第一份文件，到做一个结合 Grok Bot 读评论找选题的小插件"
title_en: "DeepSeek Harness Beginner Tutorial: From Reading the First File to Building a Grok Bot Comment-Reading Topic Plugin"
description: "教你安装 DeepSeek Harness，读取本地文件并写回结果，再用 Grok Bot 筛选 X 评论并生成选题卡。"
description_en: "Learn to install DeepSeek Harness, read local files and write results back, then use Grok Bot to filter X comments and generate topic cards."
resource: https://x.com/0xlangeai/status/2120769549679386878
tags: [deepseek-harness, grok-bot, agent-skill, tutorial]
sources:
  - id: 17aeb0d3fac28605
    resource: https://x.com/0xlangeai/status/2120769549679386878
    title: "DeepSeek Harness Beginner Tutorial: From Reading the First File to Building a Grok Bot Comment-Reading Topic Plugin"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T20:08:56+08:00
---

# Deepseek Harness 保姆级教程：从读第一份文件，到做一个结合 Grok Bot 读评论找选题的小插件

*DeepSeek Harness Beginner Tutorial: From Reading the First File to Building a Grok Bot Comment-Reading Topic Plugin*

帖文称 DeepSeek Harness 很火，作者编写保姆级教程，并结合 Grok Bot 筛评论、用 DeepSeek Harness 插件分析读者疑问、生成选题卡做案例。[^17aeb0d3fac28605]

The post claims DeepSeek Harness is trending and the author wrote a beginner tutorial, combining Grok Bot to screen comments, using a DeepSeek Harness plugin to analyze reader questions, and generating topic cards as a case study.[^17aeb0d3fac28605]

## 摘要 / Summary

- 文章称 DeepSeek-V3.2 于 2025 年 12 月增加一边推理、一边调用工具的能力，DeepSeek Harness 用于连接模型与本地文件读写工具。[^17aeb0d3fac28605]
- The article says DeepSeek-V3.2 added tool-use alongside reasoning in December 2025, and DeepSeek Harness connects the model to local file read/write tools.[^17aeb0d3fac28605]
- 教程实测使用 dsh 命令行程序 0.2.2-rc.1 版本，Node.js 要求 24.9.0 或更高，Web 版默认端口为 3080。[^17aeb0d3fac28605]
- The tutorial tested dsh CLI version 0.2.2-rc.1, requires Node.js 24.9.0 or higher, and the Web version defaults to port 3080.[^17aeb0d3fac28605]
- 自建插件 comment-pitch 增加 /comment-pitch 命令，读取工作区 comments.json，输出类似 选题判断-原帖ID.md 的选题判断文件。[^17aeb0d3fac28605]
- The custom plugin comment-pitch adds the /comment-pitch command, reads comments.json from the workspace, and outputs topic judgment files named like 选题判断-OriginalPostID.md.[^17aeb0d3fac28605]
- Grok Bot 复核示例中读取 12 条直接回复，保留 3 条，5 条无新信息，4 条待复核，0 条确认为 AI 生成。[^17aeb0d3fac28605]
- In the Grok Bot example, 12 direct replies were reviewed: 3 kept, 5 marked as no new information, 4 pending, and 0 confirmed as AI-generated.[^17aeb0d3fac28605]
- 桌面版支持 Windows 64 位和 Apple 芯片 Mac，Web 版可通过 dsh web 启动，首次需登录 DeepSeek 账号或添加 API Key。[^17aeb0d3fac28605]
- The desktop version supports Windows 64-bit and Apple Silicon Mac; the Web version can be launched via dsh web, first requiring DeepSeek account login or API Key.[^17aeb0d3fac28605]
- 教程还演示安装歸藏设计插件，用 guizang-page-skill 技能将选题卡.md 排成中文网页并保存为 选题卡.html。[^17aeb0d3fac28605]
- The tutorial also demonstrates installing the Guizang Design plugin and using the guizang-page-skill skill to render 选题卡.md as a Chinese webpage saved as 选题卡.html.[^17aeb0d3fac28605]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2120769549679386878)。 / Original: [link](https://x.com/0xlangeai/status/2120769549679386878).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [DSH 与 Grok Bot 社区互派 / Community bridges for DSH↔Grok Bot cross-dispatch](../../topics/dsh-grok-cross-dispatch.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)

[^17aeb0d3fac28605]: DeepSeek Harness Beginner Tutorial: From Reading the First File to Building a Grok Bot Comment-Reading Topic Plugin
