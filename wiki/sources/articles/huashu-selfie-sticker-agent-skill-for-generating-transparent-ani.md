---
type: Source
title: "huashu-selfie-sticker：从自拍或任意图生成透明底动态表情包的 Agent Skill"
title_en: "huashu-selfie-sticker: Agent Skill for Generating Transparent Animated Stickers from Selfies or Any Image"
description: "一个可安装为 Agent Skill 的工具链，支持从自拍、宠物照、手绘或纯文本出发，经角色设定图与精灵图步骤，输出透明底 GIF/APNG 表情包。"
description_en: "An installable Agent Skill toolchain that turns a selfie, any image, or a text prompt into a full set of transparent-background animated stickers via character sheet and sprite sheet stages."
resource: https://github.com/alchaincyf/huashu-selfie-sticker
tags: [agents, skill, image-generation, sticker, animation]
sources:
  - id: huashu-selfie-sticker
    resource: https://github.com/alchaincyf/huashu-selfie-sticker
    title: "huashu-selfie-sticker: Agent Skill for Generating Transparent Animated Stickers from Selfies or Any Image"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:26:24+08:00
---

# huashu-selfie-sticker：从自拍或任意图生成透明底动态表情包的 Agent Skill

*huashu-selfie-sticker: Agent Skill for Generating Transparent Animated Stickers from Selfies or Any Image*

帖文称 huashu-selfie-sticker 是一个面向 Agent 的 Skill，能在对话中直接安装并使用。它把制作动态表情包拆解为四步：先接入任意生图工具（Codex image_gen、豆包、即梦等），再产出角色设定图锁定形象，接着与用户共同确定每个表情的字幕与动作，再按 16:9 或 1:1 比例生成 4×2 或 3×3 精灵图，最后由本地 Python 脚本切帧、抠绿/品红底、输出 480/240 两种尺寸的透明 GIF 与 APNG，并可生成总览 GIF。仓库附带经验文档，随用随记踩坑与提示词技巧。[^huashu-selfie-sticker]

The post introduces huashu-selfie-sticker as an Agent Skill installable via chat. It breaks sticker creation into four steps: plug in any image generator (Codex image_gen, Doubao, Jimeng, etc.), produce a character sheet to lock the look, co-decide captions and actions for each sticker, generate sprite sheets (4×2 for 16:9, 3×3 for 1:1), then run local Python scripts to slice frames, key out magenta/green backgrounds, and emit transparent GIFs at 480px and 240px plus APNG and an overview GIF. An experience log accumulates prompting tips and pitfalls.[^huashu-selfie-sticker]

## 摘要 / Summary

- 支持从自拍、宠物照、手绘、吉祥物或纯文本描述起步，自动生成 Q 版角色设定图。 / Starts from a selfie, pet photo, drawing, mascot, or pure text to auto-generate a chibi character sheet.[^huashu-selfie-sticker]
- 兼容多种生图后端：Agent 自带 image_gen、豆包、混元、即梦，或用户自备 API/本地工具。 / Works with multiple image backends: built-in agent image_gen, Doubao, Hunyuan, Jimeng, or user-supplied API/local tools.[^huashu-selfie-sticker]
- 按生图工具比例输出精灵图：16:9 对应 4×2（8 帧），1:1 对应 3×3（9 帧），每帧带相同字幕。 / Outputs sprite sheets matching generator aspect ratio: 4×2 (8 frames) for 16:9, 3×3 (9 frames) for 1:1, each frame sharing the same caption.[^huashu-selfie-sticker]
- 本地脚本自动切帧、抠除纯品红/纯绿背景，产出透明 PNG、480/240 透明 GIF、APNG 及总览 GIF。 / Local scripts auto-slice frames, key out solid magenta/green backgrounds, and emit transparent PNGs, 480/240 transparent GIFs, APNG, and an overview GIF.[^huashu-selfie-sticker]
- 作为 Skill 可在对话中一键安装，亦可手动克隆至 ~/.claude/skills 目录并 pip 安装依赖。 / Installable as a Skill via chat command or manual clone to ~/.claude/skills with pip dependencies.[^huashu-selfie-sticker]
- 经验.md 记录实测踩坑与提示词技巧，Skill 每次运行前读取、结束后追加，形成持续改进闭环。 / An experience.md logs tested pitfalls and prompting tips; the Skill reads it at start and appends new findings after each run.[^huashu-selfie-sticker]

## 相关 / Related

- 原文：[链接](https://github.com/alchaincyf/huashu-selfie-sticker)。 / Original: [link](https://github.com/alchaincyf/huashu-selfie-sticker).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [生图姿势参考库与质量边界 / Pose reference libraries and quality boundaries](../../topics/image-generation-pose-reference-libraries.md)
- Topic: [用 Skills 组合复刻原生感 App / Compose Skills to recreate native-feel apps](../../topics/skills-stack-native-app-recreation.md)

[^huashu-selfie-sticker]: huashu-selfie-sticker: Agent Skill for Generating Transparent Animated Stickers from Selfies or Any Image
