---
type: Topic
title: 生图姿势参考库与质量边界
title_en: Pose reference libraries and quality boundaries
description: 生图姿势库通过多视角白模复用构图约束，但须区分设计覆盖、质检后可用图、生成效果与不同资产的许可范围。
description_en: Pose libraries reuse composition constraints through multi-view mannequins, while distinguishing intended coverage, checked images, generation outcomes, and asset-specific licensing scopes.
tags: [image-generation, pose-reference, quality-control, open-assets]
sources:
  - id: shisei-repo
    resource: https://github.com/wquguru/shisei
    title: Shisei README
  - id: wquguru-everos-shisei-pose-library
    resource: /sources/articles/wquguru-everos-shisei-pose-library.md
    title: WquGuru on EverOS and Shisei
  - id: muse-line-art-prompt
    resource: /sources/articles/wquguru-muse-mannequin-line-art-prompt.md
    title: Muse mannequin line-art prompt
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:38:36+08:00
---

# 生图姿势参考库与质量边界

*Pose reference libraries and quality boundaries*

## 摘要 / Summary

多视角白模可以把姿势与机位作为可复用输入，让脸、服装与场景另行指定；库的可靠性应以逐视角可用性衡量，而非姿势数乘机位数。Shisei README 给出这种资源组织方式，但没有证明所有生图工具都能保持跨镜头人物一致。[^shisei-repo]

Multi-view mannequins can make poses and camera angles reusable inputs while faces, clothing, and scenes are specified separately. Library reliability should be measured by usable individual views rather than pose count multiplied by camera angles. The Shisei README illustrates this organization without establishing that every image tool maintains character consistency across shots.[^shisei-repo]

## 综合分析 / Synthesis

生成流程可以把姿势内容与线稿外观分开约束。[Muse 提示词短帖](../sources/articles/wquguru-muse-mannequin-line-art-prompt.md)提出先生成真实场景、再套固定模板转线稿，并把无脸、无发、无衣物、关节圆圈、白底黑线、全身和 3:4 写进提示词。这提供了可复用的外观规格，但不证明批量姿势正确或节省 token；仍需沿用逐图、逐视角验收。[^muse-line-art-prompt]

A generation workflow can constrain pose content separately from line-art appearance. The [Muse prompt post](../sources/articles/wquguru-muse-mannequin-line-art-prompt.md) proposes generating realistic scenes before converting them with a fixed template, specifying no face, hair, or clothes, joint circles, black lines on white, a full body, and a 3:4 ratio. This supplies reusable appearance specifications without establishing batch pose accuracy or token savings; per-image and per-view acceptance checks remain necessary.[^muse-line-art-prompt]

质量控制需要把“检查过”与“没有缺陷”分开。[开发经历](../sources/articles/wquguru-everos-shisei-pose-library.md)报告常规审图后仍发现多余肢体，专项追踪检查又剔除 41 张；[仓库 README](../sources/articles/shisei-pose-reference-library.md)则将失败视角删除、空缺原因入目录，并对稀疏或错姿势组整组重绘。两者共同支持的结论是：专项解剖检查、视角检查与可追溯空缺比笼统合格标签更有用，但不构成零缺陷保证。[^wquguru-everos-shisei-pose-library][^shisei-repo]

Quality control must distinguish “reviewed” from “defect-free.” The [development account](../sources/articles/wquguru-everos-shisei-pose-library.md) reports extra limbs surviving routine review and another 41 images caught by targeted tracing. The [repository README](../sources/articles/shisei-pose-reference-library.md) removes failed views, records reasons for gaps, and redraws sparse or misposed sets in full. Together they support targeted anatomical and view checks with traceable gaps over a generic approval label, without guaranteeing zero defects.[^wquguru-everos-shisei-pose-library][^shisei-repo]

复用还须区分图像、代码和目录的权利边界。Shisei 的图片与项目自有数据标为 CC0，代码文档为 Apache 2.0，但上游姿势清单不受二者覆盖；因此不能把“开源姿势库”泛化成所有组成部分都采用同一许可。本页关注二维参考资产的选用与验收，不覆盖三维仿真资产或跨 Agent 共享记忆机制。[^shisei-repo]

Reuse also requires separating rights for images, code, and catalogs. Shisei labels images and project-owned data CC0 and code/documentation Apache 2.0, while neither covers the upstream pose list. Thus “open pose library” does not imply one license for every component. This page concerns selecting and accepting 2D reference assets, rather than 3D simulation assets or cross-agent shared-memory mechanisms.[^shisei-repo]

## 矛盾与变化 / Contradictions

[Muse 短帖](../sources/articles/wquguru-muse-mannequin-line-art-prompt.md)推荐“真实场景生成→转线稿”的两阶段方案；[开发经历](../sources/articles/wquguru-everos-shisei-pose-library.md)却报告 Muse 因照片转素体频繁被拒绝而最终改为文字直接生成。两者保留为方案推荐与实际执行路径的差异，材料不足以确定先后变化，也不能把转图方案视为在 Muse 上始终可行。[^muse-line-art-prompt][^wquguru-everos-shisei-pose-library]

The [Muse short post](../sources/articles/wquguru-muse-mannequin-line-art-prompt.md) recommends a two-stage realistic-scene-to-line-art workflow; the [development account](../sources/articles/wquguru-everos-shisei-pose-library.md) reports Muse ultimately switching to direct text generation after repeated refusals of photo-to-mannequin conversion. Retain this difference between the recommended workflow and the reported execution path. The sources do not establish a chronology of changes or that image conversion always works in Muse.[^muse-line-art-prompt][^wquguru-everos-shisei-pose-library]

[开发经历](../sources/articles/wquguru-everos-shisei-pose-library.md)称覆盖 288 个姿势、图片约 50 MB；[v0.3.0 README](../sources/articles/shisei-pose-reference-library.md)列出展示 280 个姿势、仓库 web 三档约 63 MB、w900 全系列包 34.1 MB，并明确 89 张照片式图像为 AI 生成成人渲染。两份材料的姿势口径与文件集合不同，不能据此推断资源缩水、实拍真人或确定的版本先后；开发经历的旧数字保留，选下载内容时按具体版本和档位核对。[^wquguru-everos-shisei-pose-library][^shisei-repo]

The [development account](../sources/articles/wquguru-everos-shisei-pose-library.md) reports 288 poses and about 50 MB of images; the [v0.3.0 README](../sources/articles/shisei-pose-reference-library.md) lists 280 displayed poses, about 63 MB for three repository web tiers, and 34.1 MB for the all-series w900 archive, explicitly describing the 89 photographic images as renders of AI-generated adults. The pose measures and file collections differ, so these figures do not establish shrinking coverage, photographs of real people, or a definite version chronology. Retain the account's figures and check the specific release and tier when selecting downloads.[^wquguru-everos-shisei-pose-library][^shisei-repo]

## 相关 / Related

- [Muse 白模提示词 / Muse mannequin prompt](../sources/articles/wquguru-muse-mannequin-line-art-prompt.md)

- [Shisei 仓库 / Shisei repository](../sources/articles/shisei-pose-reference-library.md)
- [Shisei 开发经历 / Shisei development account](../sources/articles/wquguru-everos-shisei-pose-library.md)
- [仿真就绪开放三维资产 / Simulation-ready open 3D assets](./simulation-ready-open-3d-assets.md)
- [Agent 上下文工程 / Context engineering for agents](./context-engineering-for-agents.md)

[^shisei-repo]: Shisei README
[^wquguru-everos-shisei-pose-library]: WquGuru on EverOS and Shisei

[^muse-line-art-prompt]: Muse mannequin line-art prompt
