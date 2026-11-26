---
type: Source
title: "歸藏 MAGI-2 Skill"
title_en: "Guizang MAGI-2 Skill"
description: "一个把 AI 视频生成与代码交互结合的 Agent Skill，支持视频转网页代码和代码精准控制视频生成。"
description_en: "An Agent Skill that combines AI video generation with code interaction, supporting video-to-webpage code and code-controlled precise video generation."
resource: https://github.com/op7418/guizang-magi2-skill
tags: [agent-skill, ai-video, code-to-video, video-to-code, libtv, magi-2]
sources:
  - id: guizang-magi2-skill
    resource: https://github.com/op7418/guizang-magi2-skill
    title: "Guizang MAGI-2 Skill"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:25:11+08:00
---

# 歸藏 MAGI-2 Skill

*Guizang MAGI-2 Skill*

「歸藏 MAGI-2 Skill」是一个面向 Antigravity、Claude Code 与 Codex 的 Agent Skill，主打将 LibTV 上的 MAGI-2 AI 视频生成与编程能力结合。文章称，用户可先用几毛钱生成参考视频再让 AI 写出一镜到底交互官网，也可先写代码预演动作灰盒再交给 MAGI-2 重绘成水墨或电影质感成片；仓库还提供提示词规则、LibTV MCP 修复脚本及贴纸制作工具。[^guizang-magi2-skill]

"Guizang MAGI-2 Skill" is an Agent Skill for Antigravity, Claude Code, and Codex that combines MAGI-2 AI video generation on LibTV with programming capabilities. The article states that users can first generate a reference video for a few cents and then have AI write a one-shot interactive webpage, or first write code to preview action gray boxes before having MAGI-2 redraw them into ink-wash or cinematic-quality final videos; the repository also provides prompt rules, LibTV MCP repair scripts, and sticker-making tools.[^guizang-magi2-skill]

## 摘要 / Summary

- 仓库提供两种核心玩法：Video to Code（视频转交互官网）和 Code to Video（代码预演精准控制视频生成）。[^guizang-magi2-skill]
- The repository offers two core workflows: Video to Code (video to interactive webpage) and Code to Video (code preview for precise video generation control).[^guizang-magi2-skill]
- 支持 Antigravity、Claude Code 和 Codex 三种客户端安装，并通过 LibTV MCP 服务调用 MAGI-2 与 Seedream 5.5。[^guizang-magi2-skill]
- Supports installation for Antigravity, Claude Code, and Codex clients, and calls MAGI-2 and Seedream 5.5 via the LibTV MCP service.[^guizang-magi2-skill]
- 需要准备 LibTV 账号、Node.js 18+、Python 3.9+ 及 ffmpeg，才能运行贴纸制作、灰盒预处理和对比视频合成等脚本。[^guizang-magi2-skill]
- Requires a LibTV account, Node.js 18+, Python 3.9+, and ffmpeg to run sticker creation, gray-box preprocessing, and comparison video composition scripts.[^guizang-magi2-skill]
- 仓库内置 8 条 MAGI-2 提示词实战规则与 4 套填空模板，旨在避免人物滑步、眼球发光等常见生成问题。[^guizang-magi2-skill]
- The repository includes 8 practical MAGI-2 prompt rules and 4 fill-in templates, aiming to avoid common generation issues such as character sliding and glowing eyes.[^guizang-magi2-skill]
- 开源协议为 AGPL-3.0，作者为歸藏（op7418），欢迎用户将作品发给作者查看。[^guizang-magi2-skill]
- The open-source license is AGPL-3.0, and the author is Guizang (op7418), welcoming users to share their works with the author.[^guizang-magi2-skill]

## 相关 / Related

- 原文：[链接](https://github.com/op7418/guizang-magi2-skill)。 / Original: [link](https://github.com/op7418/guizang-magi2-skill).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)
- Topic: [哪些活已放心交给 AI / Tasks confidently handed over to AI](../../topics/tasks-confidently-handed-to-ai.md)

[^guizang-magi2-skill]: Guizang MAGI-2 Skill
