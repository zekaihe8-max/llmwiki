---
type: Source
title: 邵萌谈三套 Skills 复刻顶级 iOS
title_en: Meng Shao on three Skills packs to recreate top iOS apps
description: 邵萌转述：所谓「逆向任意顶级 iOS App」实为三套 Agent Skills——Appllama 学设计、Expo 官方工程、Emil 动效品味——共同载体是 skills.sh，不是传统逆向 IPA。
description_en: Meng Shao relays that “reverse engineer any top iOS app” is three Agent Skills packs—Appllama for design study, Expo for official engineering, Emil for motion taste—on skills.sh, not a traditional IPA reverse-engineering toolchain.
resource: https://x.com/shao__meng/status/2115332272152826248
tags: [agent-skills, ios, expo, appllama, design, animation, taste, react-native]
sources:
  - id: shao-meng-three-skills-top-ios
    resource: https://x.com/shao__meng/status/2115332272152826248
    title: Meng Shao on three Skills packs to recreate top iOS apps
    author: human:meng shao
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:50:00+08:00
date: 2026-10-28
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 邵萌谈三套 Skills 复刻顶级 iOS

*Meng Shao on three Skills packs to recreate top iOS apps*

[@shao__meng](https://x.com/shao__meng)（meng shao）转述：所谓「逆向任意顶级 iOS App 设计」并不是传统逆向 IPA，而是三套 Agent Skills——先对照头部 App 学设计、再按 Expo 官方最佳实践搭工程、最后用动效/UI 品味规则做动画——来复刻顶级 iOS App；共同载体是 skills.sh / Agent Skills。[^shao-meng-three-skills-top-ios] 原帖 <https://x.com/shao__meng/status/2115332272152826248>；所引上游帖见 [@jaimintf](https://x.com/jaimintf) <https://x.com/jaimintf/status/2114759962044060131>。

[@shao__meng](https://x.com/shao__meng) (meng shao) relays that “reverse engineer any top iOS app design” is not a traditional IPA reverse-engineering path, but three Agent Skills packs—study design against leading apps, scaffold per Expo official best practices, then apply motion/UI taste rules for animation—to recreate top iOS apps; the shared vehicle is skills.sh / Agent Skills.[^shao-meng-three-skills-top-ios] Post: <https://x.com/shao__meng/status/2115332272152826248>; upstream cited post: [@jaimintf](https://x.com/jaimintf) <https://x.com/jaimintf/status/2114759962044060131>.

## 摘要 / Summary

- Appllama Skills（设计研究 + 原生感建造标准）：Appllama 是高收入移动 App 的设计库（真实界面、流程、营收/下载语境）。两件套——`appllama-usage` 教智能体当设计总监用 Appllama MCP；`appllama-app-design-skill` 定 Expo/RN 建造门槛：HIG、语义色、原生控件、反 slop、导航（push/replace/sheet）、动效是否该有、弹簧跟手速、动画不进 JS 线程、模拟器整段流程逐帧过关。MCP（[mcp.appllama.io](http://mcp.appllama.io)）属 Pro 计费；设计技能可单独装。仓库 <https://github.com/Appllama/appllama-skills>。[^shao-meng-three-skills-top-ios]
- Appllama Skills (design research + native-feel build bar): Appllama is a design library of high-earning mobile apps (real screens, flows, revenue/download context). Two pieces—`appllama-usage` teaches the agent to use the Appllama MCP as a design director; `appllama-app-design-skill` sets Expo/RN build bars: HIG, semantic color, native controls, anti-slop, navigation (push/replace/sheet), whether motion should exist, spring tracking finger speed, animations off the JS thread, and full simulator flows reviewed frame-by-frame. The MCP ([mcp.appllama.io](http://mcp.appllama.io)) is Pro-billed; the design skill can install alone. Repo: <https://github.com/Appllama/appllama-skills>.[^shao-meng-three-skills-top-ios]

- Expo Skills（官方「怎么把 Expo 做对」）：Expo 团队出品；框架侧含项目结构、Router、动画、原生 UI、设计系统、数据拉取、Web→Native、升级等；服务侧含 EAS 上架、托管、工作流、Update、云模拟器等（标清付费边界）。文档/CLI 仍是权威，技能帮智能体少走歪路。Claude Code / Codex 可用官方插件；其他 Agent 用 skills CLI。另有 Expo MCP 做装依赖、触发构建、模拟器截图等。仓库 <https://github.com/expo/skills>。[^shao-meng-three-skills-top-ios]
- Expo Skills (official “how to do Expo right”): from the Expo team; framework side covers project structure, Router, animation, native UI, design systems, data fetching, Web→Native, upgrades, and more; services side covers EAS submit, hosting, workflows, Update, cloud simulator, and peers (with paid boundaries marked). Docs/CLI remain authoritative; skills steer agents away from wrong paths. Claude Code / Codex can use the official plugin; other agents use the skills CLI. An Expo MCP also handles install deps, trigger builds, simulator screenshots, and similar jobs. Repo: <https://github.com/expo/skills>.[^shao-meng-three-skills-top-ios]

- Emil Kowalski Skills（动效与界面品味）：开源作者有 Vercel、Linear 背景；核心论点是 Agent 缺品味（进场用错 ease-in、实色边框代替半透明阴影等），技能把易错点写成可执行规则。含总技能 `emil-design-eng`、`animate` / `animate-expo`、严格评审与改进计划、找该不该动的机会、性能、动画词汇、Apple 设计原则、Swift、选 UI 库、原型多版本、移动端「像原生」修补、用极端数据压 UI、Sonner toast 指南等。星标远高于另两个，偏跨 Web/移动的通用动效方法论。仓库 <https://github.com/emilkowalski/skills>。[^shao-meng-three-skills-top-ios]
- Emil Kowalski Skills (motion and UI taste): open-source author with Vercel and Linear background; core claim is agents lack taste (wrong ease-in on enter, solid borders instead of translucent shadows, etc.), and the skills turn failure modes into executable rules. Includes the umbrella `emil-design-eng`, `animate` / `animate-expo`, strict review and improvement plans, finding when motion should or should not happen, performance, animation vocabulary, Apple design principles, Swift, choosing UI libraries, multi-version prototypes, mobile “feel native” fixes, stress-testing UI with extreme data, Sonner toast guidance, and more. Stars far exceed the other two; oriented to cross Web/mobile motion methodology. Repo: <https://github.com/emilkowalski/skills>.[^shao-meng-three-skills-top-ios]

- 三套怎么配合：Appllama 回答「学谁、长什么样」；Expo 回答「工程与分发怎么按官方做」；Emil 回答「动效与细节怎样不廉价」。共同载体是 skills.sh / Agent Skills，不是传统「逆向 IPA」工具链。[^shao-meng-three-skills-top-ios]
- How the three fit: Appllama answers “who to learn from and what it should look like”; Expo answers “how to engineer and ship the official way”; Emil answers “how motion and detail avoid looking cheap.” The shared vehicle is skills.sh / Agent Skills, not a traditional “reverse the IPA” toolchain.[^shao-meng-three-skills-top-ios]

## 相关 / Related

- Topic: [用 Skills 组合复刻原生感 App](../../topics/skills-stack-native-app-recreation.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准](../../topics/agent-skills-open-standard.md)
- Topic: [UX、DX 与 AX](../../topics/ux-dx-and-ax.md)

[^shao-meng-three-skills-top-ios]: Meng Shao on three Skills packs to recreate top iOS apps
