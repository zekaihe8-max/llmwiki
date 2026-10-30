---
type: Source
title: WquGuru 用 EverOS 协作构建 Shisei 白模姿势库
title_en: WquGuru builds the Shisei mannequin pose library with EverOS
description: WquGuru 自述用共享记忆串联 Grok Bot、Muse 与 Claude Code，21 小时构建 Shisei，并总结生图约束与专项肢体质检。
description_en: WquGuru reports linking Grok Bot, Muse, and Claude Code through shared memory to build Shisei in 21 hours, detailing generation constraints and targeted limb checks.
resource: https://x.com/wquguru/status/2115972037403713688
tags: [agents, memory, everos, image-generation, quality-control, shisei]
sources:
  - id: wquguru-everos-shisei-pose-library
    resource: https://x.com/wquguru/status/2115972037403713688
    title: "1000+ 开源白模如何炼成：EverOS 终极实战"
    author: human:WquGuru
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:35:53+08:00
date: 2026-10-30
---

# WquGuru 用 EverOS 协作构建 Shisei 白模姿势库

*WquGuru builds the Shisei mannequin pose library with EverOS*

## 摘要 / Summary

作者称因旧姿势库禁止再分发，转而从零制作 Shisei，耗时 21 小时；文章报告 1133+ 张质检线稿、89+ 张实拍对照，覆盖 288 个姿势、五类机位，支持中日韩英四语，并称图片和数据采用 CC0、图片压缩至约 50 MB。这些是作者报告的规模与许可表述，不能把 288 × 5 当成已完成线稿数。[^wquguru-everos-shisei-pose-library]

The author says an earlier pose library prohibited redistribution, prompting a rebuild from scratch as Shisei in 21 hours. The article reports 1,133+ checked line drawings, 89+ photographic comparisons, 288 poses and five camera-view categories, Chinese/Japanese/Korean/English support, CC0 images and data, and images compressed to about 50 MB. These are the author's reported scale and licensing claims; 288 × 5 should not be treated as the completed drawing count.[^wquguru-everos-shisei-pose-library]

Grok Bot 调研版权、压缩与生图路线并写入 EverOS；Muse 在新窗口读取一分钟前的记忆，Claude Code 随后接入。同账号的托管 EverOS MCP 提供共享记忆，使用 `add_memory` 写入、`search_memory` 检索；收工后再写回流程、参数与经验并提炼 skill。[^wquguru-everos-shisei-pose-library]

Grok Bot researched licensing, compression, and generation routes and wrote findings to EverOS; Muse retrieved minute-old memory in a new window, followed by Claude Code. Hosted EverOS MCP under the same account supplied shared memory through `add_memory` and `search_memory`; the workflow, parameters, and lessons were written back and distilled into a skill afterward.[^wquguru-everos-shisei-pose-library]

Muse 负责主力线稿，最终因照片转素体频繁被拒绝而改用文字直接生成；Claude Code 在 RTX 4090 上用 ComfyUI、Qwen-Image-Edit-2511 fp8 与 Lightning 四步 LoRA 补缺。补缺管线先锁定基准体型，再改姿势、转机位、用双图参考转线稿；作者称裁剪画风参考图能减少照抄站姿，逐机位写清透视比笼统要求保持机位更有效。这些调整属于该管线的实测经验。[^wquguru-everos-shisei-pose-library]

Muse produced the main line drawings, ultimately switching to direct text generation after repeated refusals when converting photos to unclothed mannequins. Claude Code filled gaps using ComfyUI, Qwen-Image-Edit-2511 fp8, and a four-step Lightning LoRA on an RTX 4090. That pipeline fixed a reference body, changed poses and views, then converted to line art with two reference images. The author reports that cropping the style reference reduced copying of its standing pose, and explicit perspective instructions per view worked better than a generic request to preserve the camera angle. These adjustments are observations from this pipeline.[^wquguru-everos-shisei-pose-library]

常规质检后，作者肉眼发现一张三只手的图，遂让并行 Sonnet 子代理沿肩膀与髋部追踪四肢，再找未连接的多余肢体；单人要求手臂、手、腿、脚各两只，双人各四只，追加检查又拦下 41 张。此例说明专项验收标准可补常规审图漏检，但未提供对照实验来证明多 Agent 的净收益或最终零缺陷。[^wquguru-everos-shisei-pose-library]

After routine checks, the author spotted a three-handed figure and asked parallel Sonnet subagents to trace limbs from shoulders and hips, then look for unmatched extras. Checks required two each of arms, hands, legs, and feet per figure, or four each for two figures, and reportedly caught another 41 images. The case shows how targeted acceptance criteria can address routine review misses, but supplies no controlled comparison establishing the net benefit of multiple agents or a defect-free final library.[^wquguru-everos-shisei-pose-library]

## 相关 / Related

- [原文 / Original article](https://x.com/wquguru/status/2115972037403713688)
- [Shisei 图库 / Shisei library](https://shisei.indaloop.app/)
- [代码与数据仓库 / Code and data repository](https://github.com/wquguru/shisei)
- [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^wquguru-everos-shisei-pose-library]: WquGuru on EverOS and Shisei
