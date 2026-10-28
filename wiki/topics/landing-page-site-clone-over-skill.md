---
type: Topic
title: Landing Page：选站复刻优于专用 Skill
title_en: Landing Pages — clone a reference site over a dedicated Skill
description: 做 Landing Page 时，专用或前端 Skill 可用，但一线主张更简单可靠的路径是选优质站点复刻，并可经 DSH 插件把提示词交给 Agent 开发——不等于否定 Skills 复刻栈在其他表面（如原生 App）上的分工。
description_en: For Landing Pages, a dedicated or frontend Skill can work, but frontline takes prefer picking a quality site to clone as simpler and more reliable—optionally via a DSH plugin whose prompt goes to an Agent—without canceling Skills-stack recreation on other surfaces such as native apps.
tags: [landing-page, site-clone, dsh, plugin, agent-skills, vista8]
sources:
  - id: vista8-dsh-landing-page-clone
    resource: https://x.com/vista8/status/2115293920955605424
    title: vista8 on cloning Landing Pages with a DSH plugin
generated:
  by: cursor-agent/composer
  at: 2026-10-28T22:32:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# Landing Page：选站复刻优于专用 Skill

*Landing Pages — clone a reference site over a dedicated Skill*

面对「有没有 Landing Page Skill」一类需求，前端/专用 Skill 并非不可用，但一线可主张更简单可靠的做法是先选一个优质网站再复刻；具体落地可装 DSH 插件、把提示词复制给 Agent 开发，而不必先堆一套 Landing Skill。[^vista8-dsh-landing-page-clone]

When the ask is “is there a Landing Page Skill,” a frontend or dedicated Skill is not unusable, but frontline takes can hold that a simpler, more reliable path is to pick a quality site and clone it; concrete landing can be a DSH plugin whose prompt is copied to an Agent—without first stacking a Landing Skill pack.[^vista8-dsh-landing-page-clone]

## 综合分析 / Synthesis

[向阳乔木谈用 DSH 插件复刻 Landing Page](../sources/articles/vista8-dsh-landing-page-clone.md) 把取舍钉死：群友问 Landing Page Skill；昨天推荐的前端 Skill「可以」，但「更简单可靠」是选站复刻；推荐安装 DSH 插件复刻优质站 Landing Page，仓库 <https://github.com/joeseesun/qiaomu-ui-learn-dsh>，复制提示词给 Agent。[^vista8-dsh-landing-page-clone] 原帖 <https://x.com/vista8/status/2115293920955605424>。证据是短帖方法主张与仓库指针，未给对照实测或通用 Skill 评测。

[vista8 on cloning Landing Pages with a DSH plugin](../sources/articles/vista8-dsh-landing-page-clone.md) pins the tradeoff: peers asked for a Landing Page Skill; yesterday’s recommended frontend Skill “can work,” but “simpler and more reliable” is picking a site to clone; he recommends a DSH plugin to clone quality-site Landing Pages—repo <https://github.com/joeseesun/qiaomu-ui-learn-dsh>—and copying the prompt to an Agent.[^vista8-dsh-landing-page-clone] Post: <https://x.com/vista8/status/2115293920955605424>. Evidence is a short method claim plus a repo pointer—no A/B measurement or general Skill eval.

适用边界：本页管的是 **Web Landing Page 场景下「选参照站复刻 vs 专用/前端 Skill」的取舍与一条 DSH 插件路径**，不是 harness 插件架构总论（见 [精简核心与社区扩展](./minimal-core-community-extensions.md)），也不是 iOS 原生感 App 的 Skills 组合复刻栈（见 [用 Skills 组合复刻原生感 App](./skills-stack-native-app-recreation.md)）。与 [Agent Skill 编写](./agent-skill-authoring.md) 的衔接：同向「不必默认上 Skill」——此处是产品表面另选参照物驱动路径，而非教人怎么把 Skill 写瘦。

Scope: this page owns the **Landing Page cut—reference-site clone vs dedicated/frontend Skill, plus one DSH plugin path**—not harness plugin-host architecture (see [Minimal core and community extensions](./minimal-core-community-extensions.md)) and not the iOS native-feel Skills composition stack (see [Compose Skills to recreate native-feel apps](./skills-stack-native-app-recreation.md)). Link to [Agent skill authoring](./agent-skill-authoring.md): same direction as “don’t default to a Skill”—here a reference-driven product path on another surface, not how to keep a Skill lean.

## 矛盾与变化 / Contradictions

[用 Skills 组合复刻原生感 App](./skills-stack-native-app-recreation.md) 主张用互补 Skills（设计参照 + 框架官方 + 品味）复刻头部 iOS App；本页来源则称做 Landing Page 时选站复刻比前端 Skill 更简单可靠。表面都谈「复刻」，但切面不同——那边是 **移动原生感 + skills.sh 栈分工**，这边是 **Web Landing + 参照站/DSH 插件路径**——并置而非互相取消；未声称同一表面同一工具链上的对打实测。 / [Compose Skills to recreate native-feel apps](./skills-stack-native-app-recreation.md) argues complementary Skills (design refs + framework-official + taste) recreate leading iOS apps; this page’s source says for Landing Pages, cloning a picked site is simpler and more reliable than a frontend Skill. Both talk “recreation,” but cuts differ—**mobile native-feel + skills.sh stack** versus **web Landing + reference-site/DSH plugin path**—side by side, not a cancellation; no same-surface same-toolchain bake-off is claimed.

## 相关 / Related

- Source: [向阳乔木谈用 DSH 插件复刻 Landing Page](../sources/articles/vista8-dsh-landing-page-clone.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [用 Skills 组合复刻原生感 App](./skills-stack-native-app-recreation.md)
- Topic: [精简核心与社区扩展](./minimal-core-community-extensions.md)

[^vista8-dsh-landing-page-clone]: vista8 on cloning Landing Pages with a DSH plugin
