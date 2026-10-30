---
type: Source
title: Shisei 白模姿势参考库
title_en: Shisei mannequin pose reference library
description: Shisei v0.3.0 README 介绍 280 个姿势的多视角参考库、逐图质检、下载目录与分层许可边界。
description_en: The Shisei v0.3.0 README describes a multi-view reference library of 280 poses, per-image quality checks, downloads, and distinct licensing scopes.
resource: https://github.com/wquguru/shisei
tags: [shisei, image-generation, pose-reference, quality-control, open-assets]
sources:
  - id: shisei-repo
    resource: https://github.com/wquguru/shisei
    title: Shisei README
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:36:24+08:00
---

# Shisei 白模姿势参考库

*Shisei mannequin pose reference library*

## 摘要 / Summary

[Shisei 仓库](https://github.com/wquguru/shisei)的抓取 README 描述 v0.3.0：四系列共展示 280 个姿势，设计机位为正面、四分之三侧面、侧面、俯视和仰视，供 Nano Banana、ChatGPT、ComfyUI、Midjourney 等工具作为姿势或构图参考。名称和分类提供日中英韩四语；脸、服装与背景由提示词或其他参考图决定。[^shisei-repo]

The fetched [Shisei repository](https://github.com/wquguru/shisei) README describes v0.3.0: 280 displayed poses across four series, with front, three-quarter, side, above, and below as intended camera views, for pose or composition references in tools such as Nano Banana, ChatGPT, ComfyUI, and Midjourney. Names and categories come in Japanese, Chinese, English, and Korean; prompts or other references supply faces, clothing, and backgrounds.[^shisei-repo]

逐视角质检后，标准全身、上半身、性感全身和双人系列分别保留 287、337、323 和 186 张线稿，合计 1133 张；另有 89 张 AI 生成成人照片式渲染，下载包共 1222 张图。缺失或不合格视角保持空缺；43 组曾整组重绘，不混用两种生成器的视角。P038、P052 因姿势与名称不符仍隐藏，因此不能把 280 × 5 当成可用图片数。[^shisei-repo]

After per-view quality checks, the standard full-body, upper-body, sexy full-body, and duo series retain 287, 337, 323, and 186 line drawings respectively, totaling 1,133; another 89 photographic renders of AI-generated adults bring downloads to 1,222 images. Missing or rejected views stay empty; 43 sets were redrawn as complete sets without mixing generators across views. P038 and P052 remain hidden because their drawings do not match their names, so 280 × 5 is not the available image count.[^shisei-repo]

目录提供 JSON/CSV，包含分类、评级、四语名称、各视角文件及空缺原因；仓库有 w300、w600、w900 三档，原图与打包下载在 Releases，v0.3.0 全系列 w900 包标为 34.1 MB。图库默认模糊暗示性姿势，并限制它们出现在预览与搜索页面。以上为 README 的发布说明，本次未独立运行校验器、审图或测试生图效果。[^shisei-repo]

The JSON/CSV catalog includes categories, ratings, names in four languages, files per view, and reasons for empty views. The repository holds w300, w600, and w900 tiers; Releases supplies originals and archives, with the v0.3.0 all-series w900 archive listed as 34.1 MB. The gallery blurs suggestive poses by default and restricts their appearance in previews and search pages. These are README release statements; this filing did not independently run the verifier, inspect images, or test generation results.[^shisei-repo]

README 将图片和项目自有数据声明为 CC0 1.0，代码和文档为 Apache 2.0；来自 ai-pose-gallery 的姿势选择、编号、名称和分类仅署名，两种许可均不覆盖该目录来源。README 说明参考图片不对生成结果附加条件，同时提出不要用于描绘真实人物、未成年人或露骨内容的使用要求。[^shisei-repo]

The README declares images and project-owned data CC0 1.0, and code and documentation Apache 2.0. The pose selection, numbering, names, and categories from ai-pose-gallery are credited but covered by neither license. It says using reference images places no conditions on generated outputs, while also requesting that they not be used to depict real people, minors, or explicit content.[^shisei-repo]

## 相关 / Related

- [原文 / Original README](https://github.com/wquguru/shisei)
- [在线图库 / Online gallery](https://shisei.indaloop.app/en/)
- [生图姿势参考库与质量边界 / Pose reference libraries and quality boundaries](../../topics/image-generation-pose-reference-libraries.md)
- [Shisei 开发经历 / Shisei development account](./wquguru-everos-shisei-pose-library.md)

[^shisei-repo]: Shisei README
