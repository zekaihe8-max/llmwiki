---
type: Source
title: "「牛马经纪人」把找工作反着做"
title_en: "\"Ox-Horse Broker\" Reverses Job Hunting"
description: "DeepSeek Harness 开源插件“牛马经纪人”通过自动提取工作成果、监控大厂官网岗位并对照简历评分，主动反向辅助求职。"
description_en: "The open-source DeepSeek Harness plugin \"Ox-Horse Broker\" assists job hunting in reverse by auto-extracting work achievements, monitoring big-company official openings, and scoring them against resumes."
resource: https://x.com/lxfater/status/2124963792647753747
tags: [deepseek-harness, agent-plugin, job-hunting, resume, open-source]
sources:
  - id: c2d8b3e4adbed7e4
    resource: https://x.com/lxfater/status/2124963792647753747
    title: "\"Ox-Horse Broker\" Reverses Job Hunting"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:05:29+08:00
---

# 「牛马经纪人」把找工作反着做

*"Ox-Horse Broker" Reverses Job Hunting*

帖文称，DeepSeek 开源智能体工具 DeepSeek Harness 中出现名为“牛马经纪人”的 MIT 开源插件（版本 0.1.1，36 个自动化测试全跑通），主张简历不重要，应平时自动攒成果、盯大厂官网岗位并用真实招聘信息测市场水温；数据存在本地，但 AI 分析会将内容发给配置的模型接口，提醒勿将签保密协议的公司目录勾选进去。[^c2d8b3e4adbed7e4]

The post says an MIT-licensed DeepSeek Harness plugin called "Ox-Horse Broker" (v0.1.1, 36 automated tests passing) argues resumes matter less than routinely auto-accumulating achievements, tracking big-company official job pages, and gauging market demand from real listings; data stays local, but AI analysis sends content to the configured model interface, with a warning not to include NDA-bound company directories.[^c2d8b3e4adbed7e4]

## 摘要 / Summary

- 插件名为“牛马经纪人”，装在 DeepSeek 开源的智能体工具 DeepSeek Harness 内，MIT 开源，今日刚发 0.1.1 版，36 个自动化测试全跑通。[^c2d8b3e4adbed7e4]
- The plugin "Ox-Horse Broker" sits inside DeepSeek's open-source agent tool DeepSeek Harness, is MIT-licensed, just released v0.1.1, and has all 36 automated tests passing.[^c2d8b3e4adbed7e4]
- 它只读用户授权的工作区对话，把能写进简历的项目数据和复盘摘出，先放待核对列表，用户确认后才入库，绝不瞎编数字。[^c2d8b3e4adbed7e4]
- It reads only authorized workspace conversations, extracts resume-worthy project data and reviews into a pending-verification list, and enters them only after user confirmation, never fabricating numbers.[^c2d8b3e4adbed7e4]
- 支持订阅字节、腾讯、美团、小红书等大厂及海外招聘板，定时拉新岗位，对照简历打分挑硬伤，并把风险点写成可带去面试的反问话术。[^c2d8b3e4adbed7e4]
- It supports subscribing to job boards at ByteDance, Tencent, Meituan, Xiaohongshu and overseas sites, regularly pulls new openings, scores them against the resume to flag weaknesses, and turns risk points into interview counter-questions.[^c2d8b3e4adbed7e4]
- 源码和安装说明在 GitHub 仓库，安装方式包括把仓库链接丢给软件里的 AI，或在插件页填 dsh-niuma-broker。[^c2d8b3e4adbed7e4]
- Source and install instructions are on GitHub; installation can be done by pasting the repo link into the software's AI or entering dsh-niuma-broker on the plugin page.[^c2d8b3e4adbed7e4]
- 数据全存在用户电脑上，但跑 AI 分析时会把内容发给配置的模型接口，提醒不要把签了保密协议的公司目录勾进去。[^c2d8b3e4adbed7e4]
- Data is stored entirely on the user's computer, but AI analysis sends content to the configured model interface, with a reminder not to include directories of companies under NDAs.[^c2d8b3e4adbed7e4]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2124963792647753747)。 / Original: [link](https://x.com/lxfater/status/2124963792647753747).
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [插件样式不一使 Harness 界面碎片化 / Harness UI fragmentation from mismatched plugin styles](../../topics/harness-plugin-style-fragmentation.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^c2d8b3e4adbed7e4]: "Ox-Horse Broker" Reverses Job Hunting
