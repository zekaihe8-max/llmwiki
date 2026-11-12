---
type: Source
title: "小林说视频包装 Skill"
title_en: "Xiaolin Shuo Explainer Video Packaging Agent Skill"
description: "一个基于 Remotion 的 Agent 技能，将出镜口播片段包装成小Lin说风格的讲解视频。"
description_en: "A Remotion-based agent skill that packages talking-head clips into explainer videos in the style of the Chinese finance channel Xiao Lin Shuo."
resource: https://github.com/howoneai/xiaolin-explainer-packaging
tags: [agent-skill, video-editing, remotion, design]
sources:
  - id: xiaolin-explainer-packaging
    resource: https://github.com/howoneai/xiaolin-explainer-packaging
    title: "Xiaolin Shuo Explainer Video Packaging Agent Skill"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T20:28:01+08:00
---

# 小林说视频包装 Skill

*Xiaolin Shuo Explainer Video Packaging Agent Skill*

该仓库自称是一个非官方 Agent 技能，内含 Remotion 渲染引擎，可将出镜口播片段包装成小Lin说风格的讲解视频，并声明不与小Lin说及其团队有关。[^xiaolin-explainer-packaging]

The repository describes itself as an unofficial agent skill containing a Remotion rendering engine that packages talking-head clips into explainer videos in the visual style of the Chinese finance channel Xiao Lin Shuo, and states it is not affiliated with or endorsed by the creator.[^xiaolin-explainer-packaging]

## 摘要 / Summary

- 输入为每句台词的 1920×1080 出镜 mp4 及对应朗读文本和字幕文本，输出合成后的讲解成片。[^xiaolin-explainer-packaging]
- Input is a 1920×1080 talking-head mp4 per line plus corresponding spoken and subtitle text; output is a synthesized explainer video.[^xiaolin-explainer-packaging]
- 内置 6 套主题（finance、press、blueprint、terminal、desk、editorial）和 8 种扩展版式（折线图、时间轴、饼图等）。[^xiaolin-explainer-packaging]
- Includes 6 themes and 8 extended layouts such as line charts, timelines, and pie charts.[^xiaolin-explainer-packaging]
- 仅支持 1920×1080、24 帧，国旗仅包含智利、中国、德国、法国、日本、美国 6 个。[^xiaolin-explainer-packaging]
- Supports only 1920×1080 at 24 fps; flags are limited to Chile, China, Germany, France, Japan, and the United States.[^xiaolin-explainer-packaging]
- 代码、文档、图标等采用 MIT 许可，演示照片来自 Wikimedia Commons 并遵循各自开源许可。[^xiaolin-explainer-packaging]
- Code, docs, and icons are MIT licensed; demo photos come from Wikimedia Commons under their respective open licenses.[^xiaolin-explainer-packaging]
- 不生成出镜画面，也不写口播稿；道具需使用图像生成工具按 treatment.md 提示词自行生成。[^xiaolin-explainer-packaging]
- Does not generate talking-head footage or write scripts; props must be generated separately using image generation tools per treatment.md prompts.[^xiaolin-explainer-packaging]
- 风格规则来自对小Lin说 5 期公开视频的逐帧拆解，写在 references/style-bible.md。[^xiaolin-explainer-packaging]
- Style rules are derived from frame-by-frame analysis of 5 public Xiao Lin Shuo videos and are written in references/style-bible.md.[^xiaolin-explainer-packaging]

## 相关 / Related

- 原文：[链接](https://github.com/howoneai/xiaolin-explainer-packaging)。 / Original: [link](https://github.com/howoneai/xiaolin-explainer-packaging).
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)

[^xiaolin-explainer-packaging]: Xiaolin Shuo Explainer Video Packaging Agent Skill
