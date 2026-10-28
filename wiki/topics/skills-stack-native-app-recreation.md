---
type: Topic
title: 用 Skills 组合复刻原生感 App
title_en: Compose Skills to recreate native-feel apps
description: 「逆向顶级 iOS App」可用互补的 Agent Skills 组合完成——设计参照库学样子、框架官方工程 Skills 搭对路径、动效/品味 Skills 防廉价——载体是 skills.sh，不是 IPA 逆向工具链。
description_en: “Reverse-engineering a top iOS app” can mean composing complementary Agent Skills—a design-reference library for look, framework-official engineering Skills for the right path, and motion/taste Skills against cheapness—on skills.sh, not an IPA reverse-engineering toolchain.
tags: [agent-skills, ios, expo, design, animation, taste, react-native]
sources:
  - id: shao-meng-three-skills-top-ios
    resource: https://x.com/shao__meng/status/2115332272152826248
    title: Meng Shao on three Skills packs to recreate top iOS apps
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:50:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 用 Skills 组合复刻原生感 App

*Compose Skills to recreate native-feel apps*

复刻头部移动 App 的原生感，不必先走「拆 IPA」工具链：可用互补的 Agent Skills 分工——设计参照回答学谁、长什么样；框架官方工程 Skills 回答怎么按权威路径搭与分发；动效与 UI 品味 Skills 把易错点写成可执行规则，压住廉价感。共同载体是 skills.sh / Agent Skills。[^shao-meng-three-skills-top-ios]

Recreating the native feel of leading mobile apps need not start with an “unpack the IPA” toolchain: complementary Agent Skills can split the work—design references answer who to learn from and how it should look; framework-official engineering Skills answer how to build and ship on the authoritative path; motion and UI taste Skills turn failure modes into executable rules that suppress cheapness. The shared vehicle is skills.sh / Agent Skills.[^shao-meng-three-skills-top-ios]

## 综合分析 / Synthesis

[邵萌谈三套 Skills 复刻顶级 iOS](../sources/articles/shao-meng-three-skills-top-ios.md) 把上游「reverse engineer any ios app」叙事收成三件套：Appllama（高收入 App 设计库 + Expo/RN 原生感建造门槛，含 HIG、反 slop、导航与动画不上 JS 线程等）、Expo 官方 Skills（框架与 EAS/Update 等服务侧，文档/CLI 仍权威）、Emil Kowalski Skills（Agent 缺品味——错用 ease-in、实色边框代半透明阴影等——写成可执行规则，星标高于另两套）。分工句是：Appllama = 学谁/长什么样；Expo = 工程与分发怎么按官方做；Emil = 动效与细节怎样不廉价。[^shao-meng-three-skills-top-ios] 原帖 <https://x.com/shao__meng/status/2115332272152826248>。

[Meng Shao on three Skills packs to recreate top iOS apps](../sources/articles/shao-meng-three-skills-top-ios.md) folds the upstream “reverse engineer any ios app” framing into a three-pack: Appllama (high-earning app design library plus Expo/RN native-feel build bars—HIG, anti-slop, navigation, animations off the JS thread, and peers), Expo official Skills (framework plus EAS/Update and other services, with docs/CLI still authoritative), and Emil Kowalski Skills (agents lack taste—wrong ease-in, solid borders instead of translucent shadows—encoded as executable rules; stars exceed the other two). The division of labor: Appllama = who/look; Expo = official eng and ship; Emil = motion and detail that are not cheap.[^shao-meng-three-skills-top-ios] Post: <https://x.com/shao__meng/status/2115332272152826248>.

适用边界：这是社区转述的 Skills 组合叙事与仓库指针，不是对任一头部 App 已完成复刻的实测报告；MCP（如 Appllama）可能 Pro 计费，Expo 侧也标清付费边界；文档/CLI 仍是权威，Skills 是帮智能体少走歪路。与 [Agent Skill 编写](./agent-skill-authoring.md) 的衔接：Emil 套件是公开的「品味写成规则」样板，支撑「风格/品味类 Skill 仍值得写」；本页管的是**产品复刻栈怎么分工**，不是怎么把单条 Skill 写瘦。

Scope: this is a community-relayed Skills-composition narrative and repo pointers, not a measured recreation of any named top app; MCPs (e.g. Appllama) may be Pro-billed, and Expo marks paid boundaries; docs/CLI remain authoritative—Skills steer agents away from wrong paths. Link to [Agent skill authoring](./agent-skill-authoring.md): the Emil pack is a public “taste as rules” specimen supporting “taste/style Skills still repay writing”; this page owns **how a product-recreation stack divides labor**, not how to keep a single Skill lean.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [邵萌谈三套 Skills 复刻顶级 iOS](../sources/articles/shao-meng-three-skills-top-ios.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准](./agent-skills-open-standard.md)
- Topic: [UX、DX 与 AX](./ux-dx-and-ax.md)

[^shao-meng-three-skills-top-ios]: Meng Shao on three Skills packs to recreate top iOS apps
