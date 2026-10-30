---
type: Source
title: WquGuru 的 Muse 白模线稿量产提示词
title_en: WquGuru’s Muse prompt for batch mannequin line art
description: WquGuru 分享先生成真实场景、再用固定模板转线稿的两阶段白模姿势库方案及具体提示词。
description_en: WquGuru shares a two-stage mannequin pose-library workflow that generates realistic scenes then converts them to line art with a fixed template, including the prompt.
resource: https://x.com/wquguru/status/2115976473295347989
tags: [muse, image-generation, pose-reference, prompts]
sources:
  - id: muse-line-art-prompt
    resource: https://x.com/wquguru/status/2115976473295347989
    title: Muse 白模线稿提示词
    author: human:WquGuru
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:38:36+08:00
---

# WquGuru 的 Muse 白模线稿量产提示词

*WquGuru’s Muse prompt for batch mannequin line art*

## 摘要 / Summary

WquGuru 提议把 Muse 的 token 用于量产白模姿势库，采用两阶段方案：先生成真实场景，再用固定模板转成线稿。这里的“真实场景”是生成环节，不应据此理解为实拍照片。[^muse-line-art-prompt]

WquGuru proposes using Muse tokens to batch-produce a mannequin pose library in two stages: generate realistic scenes, then convert them to line art with a fixed template. “Realistic scenes” refers to a generation stage and should not be read as photographs of real scenes.[^muse-line-art-prompt]

作者给出的原始提示词如下，其中 `[具体姿势描述]` 是待替换的姿势占位符。[^muse-line-art-prompt]

The author's original prompt follows; `[具体姿势描述]` is a placeholder for the desired pose description.[^muse-line-art-prompt]

```text
faceless mannequin, pose reference, line art, black line only, monochrome, white background, no face, no hair, no clothes, joint circles, clear body structure, [具体姿势描述], full body, 3:4
```

中文译意：无脸白模、姿势参考、线稿、仅黑色线条、单色、白色背景、无脸、无头发、无衣物、关节圆圈、清晰身体结构、指定姿势、全身、3:4。提示词规定输出外观与构图；短帖未提供成功率、token 节省量或批量质量验证。[^muse-line-art-prompt]

In meaning, the prompt asks for a faceless mannequin pose reference in black-only monochrome line art on white, without face, hair, or clothes, with joint circles and clear body structure, the specified pose, a full-body composition, and a 3:4 ratio. These are appearance and composition constraints; the short post provides no success rate, token savings, or batch-quality validation.[^muse-line-art-prompt]

帖子指向另篇长文介绍完整做法；该长文已有独立 Source，本页仅归档这条短帖与提示词。[^muse-line-art-prompt]

The post points to a separate long article for the full method. That article has its own Source; this page files only the short post and its prompt.[^muse-line-art-prompt]

## 相关 / Related

- [原帖 / Original post](https://x.com/wquguru/status/2115976473295347989)
- [生图姿势参考库与质量边界 / Pose reference libraries and quality boundaries](../../topics/image-generation-pose-reference-libraries.md)
- [Shisei 开发经历 / Shisei development account](./wquguru-everos-shisei-pose-library.md)

[^muse-line-art-prompt]: Muse 白模线稿提示词 / Muse mannequin line-art prompt
