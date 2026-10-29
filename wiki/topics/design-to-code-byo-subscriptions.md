---
type: Topic
title: 设计↔代码与自带 Claude/Codex 订阅
title_en: Design-to-code tools with bring-your-own Claude/Codex subscriptions
description: 设计工具可把设计与代码做成往返闭环（连本地代码、屏幕变图层、画布直发），并宣传可用用户已有的 Claude / Codex 订阅；旁观者亦会以 Paper 一类同行为品味对照。
description_en: Design tools can close a design↔code loop (connect local code, screens as layers, ship from canvas) and pitch using the user’s existing Claude / Codex subscription; onlookers may also foil peers such as Paper on taste.
tags: [wonder, paper, design, design-to-code, claude, codex, byo-subscription]
sources:
  - id: dingyi-wonder-vs-paper
    resource: https://x.com/dingyi/status/2115276770509557827
    title: Ding on Wonder design software beating Paper in many places
  - id: dotey-baoyu-design-v2-opensource
    resource: https://x.com/dotey/status/2115667965328977920
    title: Dotey announces baoyu-design v2 open source
  - id: jimliu-baoyu-design
    resource: https://github.com/jimliu/baoyu-design
    title: baoyu-design open-source repository
  - id: logicrw-google-android-summit-claude-codex-cli
    resource: https://x.com/0xLogicrw/status/2115763543194902801
    title: Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:20:00+08:00
---

# 设计↔代码与自带 Claude/Codex 订阅

*Design-to-code tools with bring-your-own Claude/Codex subscriptions*

一类设计产品把卖点写成设计与代码的往返——连上代码、本地跑应用、把屏幕变成可编辑图层、从画布发版——并强调可用用户自己的 Claude 与 Codex 订阅，而不是另开一套模型账单；旁观者也可在同品类里用 Paper 等产品做「很多地方更好」的品味对照。[^dingyi-wonder-vs-paper]

One class of design product pitches a design↔code round-trip—connect code, run the app locally, turn screens into editable layers, ship from the canvas—and stresses using the user’s own Claude and Codex subscription instead of a separate model bill; onlookers may also foil peers such as Paper with a “better in many places” taste judgment.[^dingyi-wonder-vs-paper]

## 综合分析 / Synthesis

[Ding 谈 Wonder 设计软件优于 Paper](../sources/articles/dingyi-wonder-vs-paper.md) 给出一例：Ding 很喜欢该设计软件，称很多地方比 Paper 更好；所引 Wonder 新版主张设计到代码再回来、连代码与本地运行、屏幕变可编辑图层、画布直发，并称终于可用自己的 Claude 与 Codex 订阅。[^dingyi-wonder-vs-paper] 原帖 <https://x.com/dingyi/status/2115276770509557827>。本页只收「设计↔代码闭环 + 自带编程订阅 + 相对 Paper 的品味对照」观察层；不展开 Wonder/Paper 功能评测表，也不写订阅接入步骤。

[Ding on Wonder design software beating Paper in many places](../sources/articles/dingyi-wonder-vs-paper.md) is one case: Ding really likes the design software and says many places beat Paper; the quoted Wonder relaunch claims design-to-code-and-back, connect code and run locally, screens as editable layers, ship from canvas, and finally using your own Claude and Codex subscription.[^dingyi-wonder-vs-paper] Post: <https://x.com/dingyi/status/2115276770509557827>. This page keeps the observation layer—**design↔code loop + BYO coding-agent subs + taste foil vs Paper**—not a Wonder/Paper feature bake-off or subscription setup how-to.

[宝玉发布 baoyu-design v2 开源](../sources/articles/dotey-baoyu-design-v2-opensource.md) 补另一条设计 Agent 形态轴：**不绑 Claude Artifacts、不绑单一网页**，把 Claude Design / Slides / Dashboard 移植成开源 Skills 包，宣称任意 Agent 与模型可跑、体验接近原版（无评论）。这与 Wonder 的「自带 Claude/Codex 订阅」不同——这里是**脱离厂商 Artifact 面 + 跨宿主 Skills 分发**，而不是在设计产品里接用户已有编程订阅。[^dotey-baoyu-design-v2-opensource] 原帖 <https://x.com/dotey/status/2115667965328977920>。Skills 标准与跨宿主安装见 [Agent Skills 开放标准](./agent-skills-open-standard.md)。

[Dotey announces baoyu-design v2 open source](../sources/articles/dotey-baoyu-design-v2-opensource.md) adds another design-agent shape: **not tied to Claude Artifacts or a single web surface**—port Claude Design / Slides / Dashboard as an open Skills pack, claiming any agent and model with near-original UX (no comments). Unlike Wonder’s “use your Claude/Codex subscription,” this is **off the vendor Artifact surface + cross-host Skills distribution**, not plugging the user’s coding subscription inside a design product.[^dotey-baoyu-design-v2-opensource] Post: <https://x.com/dotey/status/2115667965328977920>. Skills standard and cross-host installs: [Agent Skills open standard](./agent-skills-open-standard.md).

[baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md) 把该轴写具体：**不必** claude.ai/design 网站或 Artifact 上传；用的是你已在用的本地编程 Agent（及该 Agent 背后的模型订阅/额度），README 称「无单独订阅、无上传步骤」。编辑闭环是 localhost HTML + 浏览器预览 **指元素改稿**（Cursor Browser / Claude Preview / Codex Browser），Artifact 四类则编辑器与人/Agent **双向写回同一文件**——接近 Wonder「屏幕变图层、画布直发」的往返，但形态是 **Skills + 仓库内文件**，不是 Wonder 式「在设计产品里接 Claude/Codex 订阅」。[^jimliu-baoyu-design]

[baoyu-design open-source repository](../sources/articles/jimliu-baoyu-design.md) grounds that axis: **no** claude.ai/design site or Artifact upload—you use the local coding agent you already run (and whatever model subscription or quota backs it); the README says no separate subscription and no upload step. The edit loop is localhost HTML plus browser preview **point-at-element** edits (Cursor Browser / Claude Preview / Codex Browser), while the four Artifact types use editors that **write back** to the same files for you and the agent—close to Wonder’s editable layers and ship-from-canvas round-trip, but as **Skills plus repo files**, not Wonder’s in-product Claude/Codex subscription hook.[^jimliu-baoyu-design]

[思维怪怪谈 Google Android 峰会：Claude Code / Codex 官方 Android CLI 插件](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md) 再补 **IDE 内自带 Claude/Codex 订阅** 的官方路径：[@0xLogicrw](https://x.com/0xLogicrw) 转述 Google 在 **Android Studio** 向 **Claude**、**Codex** 等 **40+** 编程 Agent 敞开**编译器、模拟器与调试器**，并为 Claude Code / Codex 推出官方 **Android CLI** 插件（编译、查 UI、模拟点击、测、远程设备实验室真机）。形态是 **Google 官方 IDE + 用户已有编程 Agent 订阅**，不是 Wonder 式设计↔代码画布，但与「用你自己的 Claude/Codex 额度写 Android」同轴；抓取正文**无**订阅接入步骤或与 Wonder/baoyu-design 的功能对照。[^logicrw-google-android-summit-claude-codex-cli] 原帖 <https://x.com/0xLogicrw/status/2115763543194902801>。

[Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md) adds an **official BYO Claude/Codex inside the IDE** lane: [@0xLogicrw](https://x.com/0xLogicrw) relays Google opening **Android Studio** to **Claude**, **Codex**, and **40+** coding agents for **compiler, emulator, and debugger**, plus official **Android CLI** plugins for Claude Code / Codex (compile, UI inspect, simulated taps, tests, remote device-lab phones). The shape is **Google’s official IDE + the user’s existing coding-agent subscription**, not Wonder’s design↔code canvas, but on the same axis as “use your Claude/Codex quota for Android work”; the fetched body has **no** subscription hook-up steps or feature foil vs Wonder/baoyu-design.[^logicrw-google-android-summit-claude-codex-cli] Post: <https://x.com/0xLogicrw/status/2115763543194902801>.

相邻但不同轴：[工具产品自建模型抢话语权](./tools-building-own-models.md) 谈工具自研模型抢叙事；本页是设计工具接用户已有 Claude/Codex 订阅（自带额度），不是自建模型。[应用内模型合作伙伴](./in-app-model-partnerships.md) 谈正式合作伙伴牌；本页是「用你自己的订阅」，不是厂商联名绑定。[发散任务先人审设计](./divergent-tasks-human-design-gate.md) 谈人在强发散设计上的门禁时点；本页是设计工具产品形态与订阅接入。[智能体视频剪辑](./agentic-video-editing.md) 里出现的 Paper 是 Content Studio 协作画布点选坐标，与本页「设计软件同行对照」不是同一用法。

Adjacent but different axes: [Tool products building own models for discourse power](./tools-building-own-models.md) is tools shipping their own models for narrative; this page is design tools plugging the user’s existing Claude/Codex subscription (BYO quota), not owned models. [In-app model partnerships](./in-app-model-partnerships.md) is formal partner branding; this page is “use your own subscription,” not co-branded binding. [Human design gate for divergent tasks](./divergent-tasks-human-design-gate.md) is when humans gate divergent design; this page is design-tool product shape and subscription hook. The Paper that appears in [Agentic video editing](./agentic-video-editing.md) is a Content Studio collaboration canvas for clicking coordinates—not the same “design-software peer foil” usage here.

## 矛盾与变化 / Contradictions

- 评论功能：[宝玉发布 baoyu-design v2 开源](../sources/articles/dotey-baoyu-design-v2-opensource.md) 称相对原版**缺评论**；[baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md) README **未**把评论列为已知差距——对外「接近原版」的例外只在 X 帖出现，仓库自述未对齐该点。[^dotey-baoyu-design-v2-opensource][^jimliu-baoyu-design]

- Comments feature: [Dotey announces baoyu-design v2 open source](../sources/articles/dotey-baoyu-design-v2-opensource.md) lists **missing comments** vs the originals; [baoyu-design open-source repository](../sources/articles/jimliu-baoyu-design.md) README **does not** name comments as a known gap—the “near-original” exception appears only on X, not in the repo’s own parity claims.[^dotey-baoyu-design-v2-opensource][^jimliu-baoyu-design]

## 相关 / Related

- Source: [Ding 谈 Wonder 设计软件优于 Paper](../sources/articles/dingyi-wonder-vs-paper.md)
- Source: [宝玉发布 baoyu-design v2 开源](../sources/articles/dotey-baoyu-design-v2-opensource.md)
- Source: [baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md)
- Source: [思维怪怪谈 Google Android 峰会：Claude Code / Codex 官方 Android CLI 插件](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md)
- Topic: [工具产品自建模型抢话语权](./tools-building-own-models.md)
- Topic: [应用内模型合作伙伴](./in-app-model-partnerships.md)
- Topic: [发散任务先人审设计](./divergent-tasks-human-design-gate.md)

[^dingyi-wonder-vs-paper]: Ding on Wonder design software beating Paper in many places
[^dotey-baoyu-design-v2-opensource]: Dotey announces baoyu-design v2 open source
[^jimliu-baoyu-design]: baoyu-design open-source repository
[^logicrw-google-android-summit-claude-codex-cli]: Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins
