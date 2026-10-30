---
type: Topic
title: Agent Skills 开放标准
title_en: Agent Skills open standard
description: Agent Skills 正迁入与 MCP 同属的 Agentic AI Foundation，成为已被数十个智能体产品采用的跨平台标准。
description_en: Agent Skills are moving under the Agentic AI Foundation alongside MCP, as a cross-platform standard already adopted by dozens of agent products.
tags: [agent-skills, aaif, open-standards]
sources:
  - id: claude-agent-skills-aaif
    resource: https://x.com/ClaudeDevs/status/2113328526413996100
    title: Claude Agent Skills to AAIF
  - id: aaif-four-new-projects
    resource: https://x.com/AgenticAIFdn/status/2113299854138945588
    title: AAIF four new projects
  - id: bcherny-agent-skills-aaif
    resource: https://x.com/bcherny/status/2113333859907747871
    title: Boris Cherny on Agent Skills to AAIF
  - id: voxyz-agent-skills-writing-rules
    resource: https://x.com/Voxyz_ai/status/2113374840413421906
    title: Vox on Agent Skills writing rules
  - id: dotey-baoyu-design-v2-opensource
    resource: https://x.com/dotey/status/2115667965328977920
    title: Dotey announces baoyu-design v2 open source
  - id: jimliu-baoyu-design
    resource: https://github.com/jimliu/baoyu-design
    title: baoyu-design open-source repository
  - id: shao-meng-minimax-mcode-stack
    resource: https://x.com/shao__meng/status/2115428696672866729
    title: Meng Shao on MiniMax open-sourcing the MCode Stack
  - id: minimax-mcode-stack
    resource: https://github.com/MiniMax-AI/mcode-stack
    title: MiniMax MCode Stack open-source repository
  - id: 0xlangeai-qingshang-waigua-nvc-skill
    resource: https://x.com/0xlangeai/status/2115754265180574033
    title: 0xlangeai on Ayi’s Opus 5.5 open-source EQ plug-in from an NVC Skill
  - id: ayi-qingshang-waigua
    resource: https://github.com/ayi-ai/qingshang-waigua
    title: qingshang-waigua open-source repository
  - id: logicrw-google-android-summit-claude-codex-cli
    resource: https://x.com/0xLogicrw/status/2115763543194902801
    title: Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins
  - id: op7418-quark-drive-skill
    resource: https://x.com/op7418/status/2116119701487337890
    title: Guizang on the Quark Drive Skill
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:10:58+08:00
---

# Agent Skills 开放标准

*Agent Skills open standard*

Agent Skills 是 Anthropic 正放入 Agentic AI Foundation 的智能体平台标准——与托管 MCP 的同一基金会——使该格式作为共享基础设施治理，而非仅属某一厂商的表面。[^claude-agent-skills-aaif]

Agent Skills are an agent-platform standard that Anthropic is placing under the Agentic AI Foundation, the same foundation that hosts MCP, so the format is governed as shared infrastructure rather than a vendor-only surface.[^claude-agent-skills-aaif]

## 综合分析 / Synthesis

[Claude Agent Skills to AAIF](../sources/articles/claude-agent-skills-aaif.md) 称 ClaudeDevs 将把 Agent Skills 捐赠给 AAIF，并自 2025 年 12 月起已有七十多个平台接入该标准，点名 ChatGPT、Cursor、GitHub Copilot 与 VS Code 等。[^claude-agent-skills-aaif]

[Claude Agent Skills to AAIF](../sources/articles/claude-agent-skills-aaif.md) states that ClaudeDevs is donating Agent Skills to AAIF and that, since December 2025, more than seventy platforms have integrated the standard, naming ChatGPT, Cursor, GitHub Copilot, and VS Code among them.[^claude-agent-skills-aaif]

[Boris Cherny on Agent Skills to AAIF](../sources/articles/bcherny-agent-skills-aaif.md) 补充起源：Agent Skills 始于 Claude Code 中的实验，行业采纳使其更适合捐给 AAIF、与 MCP 并列。[^bcherny-agent-skills-aaif]

[Boris Cherny on Agent Skills to AAIF](../sources/articles/bcherny-agent-skills-aaif.md) adds the origin: Agent Skills started as an experiment in Claude Code, and industry adoption made donating it to AAIF next to MCP the better fit.[^bcherny-agent-skills-aaif]

[AAIF four new projects](../sources/articles/aaif-four-new-projects.md) 确认基金会一侧的交接：Agent Skills 与 Open Responses、OpenEnv、OpenSandbox 一并成为新托管的 AAIF 项目，使基金会在首年达到十个托管项目。[^aaif-four-new-projects]

[AAIF four new projects](../sources/articles/aaif-four-new-projects.md) confirms the foundation's side of the handoff: Agent Skills joins Open Responses, OpenEnv, and OpenSandbox as newly hosted AAIF projects, bringing the foundation to ten hosted projects in its first year.[^aaif-four-new-projects]

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) 补充采纳规模——约一百万已发布 skills、近 2.8 亿次安装，覆盖七十多个平台——并指出官方 skill 创建指南随标准迁移，如何写 skill 落成共享方法。[^voxyz-agent-skills-writing-rules]

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) adds adoption scale—about one million published skills and nearly 280 million installs across those seventy-plus platforms—and notes that the official skill-creation guide moved with the standard, settling how to write a skill into a shared method.[^voxyz-agent-skills-writing-rules]

[宝玉发布 baoyu-design v2 开源](../sources/articles/dotey-baoyu-design-v2-opensource.md) 给出跨宿主落地的实例：Jim Liu（宝玉）把 claude.ai 侧的 Claude Design / Slides / Dashboard 收成可安装的 **baoyu-design v2** 开源包，宣称可在**任意 Agent、任意模型**上跑、**不再依赖 Claude Artifacts**，体验接近原版（帖文仅点出缺评论）。这与「Skills 已是多产品共享格式」同向——把原先绑在厂商 Artifact 面的设计/幻灯片/看板能力，改经 Skills 生态分发到 Claude Code、Cursor、Codex 等宿主，而不是只活在单一网页产品里。[^dotey-baoyu-design-v2-opensource] 原帖 <https://x.com/dotey/status/2115667965328977920>；仓库 <https://github.com/jimliu/baoyu-design>。写法与体积见 [Agent Skill 编写](./agent-skill-authoring.md)。

[Dotey announces baoyu-design v2 open source](../sources/articles/dotey-baoyu-design-v2-opensource.md) supplies a cross-host landing case: Jim Liu (Dotey) ships **baoyu-design v2** as an open package that ports Claude Design / Slides / Dashboard from the claude.ai side, claiming **any agent and any model**, **no Claude Artifacts dependency**, and near-original UX (the post only notes missing comments). That aligns with Skills as a shared multi-product format—moving design/slides/dashboard capability off the vendor Artifact surface into the Skills ecosystem for hosts such as Claude Code, Cursor, and Codex, not only a single web product.[^dotey-baoyu-design-v2-opensource] Post: <https://x.com/dotey/status/2115667965328977920>; repo: <https://github.com/jimliu/baoyu-design>. Authoring shape and size: [Agent skill authoring](./agent-skill-authoring.md).

[baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md) 把上述落地写进 README：**五个**可安装 Skill（`baoyu-design` 加 `claude-slides` / `claude-design` / `claude-design-system` / `claude-dashboard`），用各 Skill 内 `scripts/artifact.mjs` 与本地编辑器服务替代网页 Artifact 工具；推荐 `npx skills add JimLiu/baoyu-design`（Vercel Labs skills CLI，宣称支持 70+ Agent），产物落在 `designs/` 并可只装部分 `--skill`。这与 AAIF 侧「多产品共享 Skills 格式」一致：同一仓库经标准安装路径进 `.claude/skills/` 或 `.agents/skills/` 等宿主目录，而不是只服务 claude.ai。[^jimliu-baoyu-design]

[baoyu-design open-source repository](../sources/articles/jimliu-baoyu-design.md) documents that landing in the README: **five** installable skills (`baoyu-design` plus `claude-slides`, `claude-design`, `claude-design-system`, `claude-dashboard`), with per-skill `scripts/artifact.mjs` and local editor servers replacing web Artifact tools; install via `npx skills add JimLiu/baoyu-design` (Vercel Labs skills CLI, claiming 70+ agents), artifacts under `designs/`, and optional partial `--skill` installs. That matches the AAIF-side story of a shared Skills format across products—the same repo lands in host folders such as `.claude/skills/` or `.agents/skills/` through the standard installer, not only claude.ai.[^jimliu-baoyu-design]

[邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) 给出编码 Agent 产研侧落地：MiniMax Code 把**日常**工作流与 Skills 开源为 **MCode Stack**（`SKILL.md`、Checklist、`WORKFLOW.md`），宣称可进 MiniMax Code 与**任意支持 Skills 的 Agent**——与「Skills 已是跨宿主共享格式」同向，但内容是上下文/子 Agent/评审等 **harness 治理**而非设计 Artifact；按人分 stack（如 `stacks/ronny/` 15 skills），`community/` 与 `templates/stack-template/` 收外人贡献。[^shao-meng-minimax-mcode-stack] 原帖 <https://x.com/shao__meng/status/2115428696672866729>；仓库 <https://github.com/MiniMax-AI/mcode-stack>。

[Meng Shao on MiniMax open-sourcing the MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) supplies a coding-agent production landing: MiniMax Code open-sourced **daily** workflows and Skills as the **MCode Stack** (`SKILL.md`, checklists, `WORKFLOW.md`), claiming MiniMax Code plus **any Skills-capable agent**—aligned with Skills as a cross-host format, but the payload is **harness governance** (context, sub-agents, review) rather than design Artifacts; per-person stacks (e.g. `stacks/ronny/` with 15 skills), with `community/` and `templates/stack-template/` for outside contributions.[^shao-meng-minimax-mcode-stack] Post: <https://x.com/shao__meng/status/2115428696672866729>; repo: <https://github.com/MiniMax-AI/mcode-stack>.

[MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md) 把跨宿主安装写进 README：Claude Code / Codex 的 marketplace 与 `~/.agents/skills/`（亦读 `~/.claude/skills/`、`~/.codex/skills/`），项目内 `.minimax/skills/`、`.claude/skills/`、`.agents/skills/`；单 skill 目录含 `SKILL.md`，宣称通用格式下**多数 skill 亦适用于其他 Agent**；整 stack 同时是 MiniMax Code 插件包，marketplace 为 `MiniMax-AI/mcode-stack`。[^minimax-mcode-stack]

[MiniMax MCode Stack open-source repository](../sources/articles/minimax-mcode-stack-repo.md) documents cross-host install in the README: Claude Code / Codex marketplace plus `~/.agents/skills/` (also reads `~/.claude/skills/`, `~/.codex/skills/`), project `.minimax/skills/`, `.claude/skills/`, `.agents/skills/`; one subdirectory per skill with `SKILL.md`, claiming the common format means **most skills also work in other agents**; each stack is also a MiniMax Code plugin package via marketplace `MiniMax-AI/mcode-stack`.[^minimax-mcode-stack]

[蓝哥AI谈 Ayi 用 Opus 5.5 开源「情商外挂」](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md) 补充 **社区开源 Skill 的第二种落地**：不仅是装进 Claude Code / Cursor 的 `SKILL.md`，Ayi 的 NVC Skill（GitHub 180+ Star）还可作为 **规则源** 被 Agent 两小时编译成独立零依赖网页——与 baoyu-design / MCode Stack 的「跨宿主安装包」不同类，但同属 Skills 生态里可 fork、可 star 的公开规则资产；运行期产品不依赖 Artifacts 或单一厂商面。[^0xlangeai-qingshang-waigua-nvc-skill] 原帖 <https://x.com/0xlangeai/status/2115754265180574033>。写法见 [Agent Skill 编写](./agent-skill-authoring.md)。

[0xlangeai on Ayi’s Opus 5.5 open-source “EQ plug-in” from an NVC Skill](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md) adds a **second landing path for community open Skills**: not only `SKILL.md` inside Claude Code / Cursor—Ayi’s NVC Skill (180+ GitHub stars) can serve as **rule source** for an agent to compile in ~two hours into a standalone zero-dependency web page—a different class from baoyu-design / MCode Stack cross-host install packs, but still a forkable, starrable public rules asset in the Skills ecosystem; the runtime product does not depend on Artifacts or one vendor surface.[^0xlangeai-qingshang-waigua-nvc-skill] Post: <https://x.com/0xlangeai/status/2115754265180574033>. Authoring: [Agent skill authoring](./agent-skill-authoring.md).

[情商外挂开源仓库](../sources/articles/ayi-qingshang-waigua.md) 给出 **已发布运行产品的 canonical 形态**：规则落在 `app.py`（`WHO`/`TONE`/`SYSTEM_PROMPT`）而非 `SKILL.md` 目录结构，两文件 + 任意 OpenAI 兼容端点即可跑；用户通过设置面板或 `LLM_*` 环境变量接 DeepSeek、百炼、Kimi 等预设——与 AAIF「多宿主 Skills 安装包」不同类，但同属 **公开 fork 的规则 + 本地运行面**，不绑 Artifacts。[^ayi-qingshang-waigua] 仓库 <https://github.com/ayi-ai/qingshang-waigua>。

[qingshang-waigua open-source repository](../sources/articles/ayi-qingshang-waigua.md) documents the **canonical shipped runtime**: rules live in `app.py` (`WHO`/`TONE`/`SYSTEM_PROMPT`), not a `SKILL.md` tree—two files plus any OpenAI-compatible endpoint; users wire DeepSeek, Bailian, Kimi, and other presets via the settings panel or `LLM_*` env vars—a different class from AAIF multi-host Skill install packs, but still **public forkable rules plus a local runtime**, not Artifacts-bound.[^ayi-qingshang-waigua] Repository: <https://github.com/ayi-ai/qingshang-waigua>.

[思维怪怪谈 Google Android 峰会：Claude Code / Codex 官方 Android CLI 插件](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md) 补 **MCP 在操作系统侧的落地**：底层 **AppFunctions** 进 Beta，**Connected Apps Platform** 经 **Android MCP** 或云端 MCP 把应用功能接到 **Gemini** 与 **Google 搜索**（帖称 **50+** 关联应用）；与 AAIF 托管的跨宿主 **Agent Skills** 不同类，但同属 **MCP 工具调用面** 扩张——Claude/ChatGPT 侧已有 MCP 连第三方，Google 另握 **Android OS** 可调**本地 App 功能**（需应用适配与系统授权）。帖文亦述 **开发工具向竞品开放**、**用户端推 Gemini** 的不对称；抓取正文无 MCP 工具 schema 或授权流程细节。[^logicrw-google-android-summit-claude-codex-cli] 原帖 <https://x.com/0xLogicrw/status/2115763543194902801>。

[Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md) adds **MCP landing on the OS**: underlying **AppFunctions** hits Beta; **Connected Apps Platform** wires app functions to **Gemini** and **Google Search** via **Android MCP** or cloud MCP (**50+** linked apps per the post)—a different class from AAIF-governed cross-host **Agent Skills**, but still **MCP tool-surface** expansion; Claude/ChatGPT already reach third parties via MCP, while Google also holds **Android** to invoke **local app functions** (with app adaptation and system authorization). The post notes **open dev tools to rivals** vs **user-side Gemini push** asymmetry; the fetched body has no MCP tool schema or authorization flow detail.[^logicrw-google-android-summit-claude-codex-cli] Post: <https://x.com/0xLogicrw/status/2115763543194902801>.

Skills 的应用范围还可延伸到已有服务中的个人数据与文件操作。[歸藏谈夸克网盘 Skill](../sources/articles/op7418-quark-drive-skill.md) 描述读取图片、视频与历史信息、上传对话生成文件及自动备份，并把智能搜索与相册整理限定为会员能力。与前述设计包、工程工作流的跨宿主分发相比，这个案例补充的是服务接入用途；它未提供 Skill 文件、安装路径或兼容性测试，因此只能作为生态应用的社区描述，不能单凭名称确认采用该开放标准，也不能把「所有的 AI」当成已验证的跨平台覆盖。[^op7418-quark-drive-skill]

Skills can also extend to personal data and file operations in existing services. [Guizang on the Quark Drive Skill](../sources/articles/op7418-quark-drive-skill.md) describes reading images, videos, and historical information, uploading conversation-generated files, and automatic backup, with smart search and album organization reserved for members. Alongside the design packages and engineering workflows distributed across hosts above, this adds a service-access use case; it supplies no Skill files, installation path, or compatibility tests, so it remains a community account of ecosystem use. Its name alone does not establish adoption of the open standard, and “all AI” does not establish verified cross-platform coverage.[^op7418-quark-drive-skill]

## 矛盾与变化 / Contradictions

- 去向名称：[Claude Agent Skills to AAIF](../sources/articles/claude-agent-skills-aaif.md)、[Boris Cherny on Agent Skills to AAIF](../sources/articles/bcherny-agent-skills-aaif.md) 与 [AAIF four new projects](../sources/articles/aaif-four-new-projects.md) 将接收方称为 Agentic AI Foundation；[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) 则说是 Linux Foundation，「MCP 去的同一家」。若 AAIF 隶属 Linux Foundation，两者可同时成立，但帖文未写明该关系。[^claude-agent-skills-aaif][^voxyz-agent-skills-writing-rules]

- Destination name: [Claude Agent Skills to AAIF](../sources/articles/claude-agent-skills-aaif.md), [Boris Cherny on Agent Skills to AAIF](../sources/articles/bcherny-agent-skills-aaif.md), and [AAIF four new projects](../sources/articles/aaif-four-new-projects.md) name the Agentic AI Foundation as the recipient; [Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) says the Linux Foundation, "the same home MCP went to." Both can be true if AAIF sits under the Linux Foundation, but the posts do not spell that relationship out.[^claude-agent-skills-aaif][^voxyz-agent-skills-writing-rules]

- 范围枚举：[宝玉发布 baoyu-design v2 开源](../sources/articles/dotey-baoyu-design-v2-opensource.md) 帖文点名 **Claude Design、Claude Slides、Claude Dashboard** 三件套；[baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md) README 列 **五个** Skill，另把 **设计画布**（`claude-design`）与 **设计系统**（`claude-design-system`）与 HTML 主技能并列——不是互斥，但对外话术「三件套」与仓库完整清单不一致。[^dotey-baoyu-design-v2-opensource][^jimliu-baoyu-design]

- Scope listing: [Dotey announces baoyu-design v2 open source](../sources/articles/dotey-baoyu-design-v2-opensource.md) names **Claude Design, Claude Slides, and Claude Dashboard**; [baoyu-design open-source repository](../sources/articles/jimliu-baoyu-design.md) README lists **five** skills, also treating **design canvas** (`claude-design`) and **design system** (`claude-design-system`) alongside the HTML skill—not contradictory capability, but the public “three-pack” wording vs the repo’s full inventory diverge.[^dotey-baoyu-design-v2-opensource][^jimliu-baoyu-design]

- **Google 平台不对称**：[思维怪怪谈 Google Android 峰会](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md) 称 **Android Studio / 官方 CLI** 向 Claude、Codex 等竞品 Agent 开放，同时 **用户端** 推 **AppFunctions / Connected Apps** 经 **Android MCP** 进 **Gemini 与搜索**——与「MCP 跨宿主中立工具面」叙事并存为**平台方**在开发者侧开放、消费侧仍绑自家入口的策略张力，帖文未写 AAIF 或 Agent Skills 标准是否接入 Android MCP。[^logicrw-google-android-summit-claude-codex-cli]

- **Google platform asymmetry**: [Logicrw on the Google Android summit](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md) says **Android Studio / official CLI** opens to rival agents such as Claude and Codex while the **user side** pushes **AppFunctions / Connected Apps** into **Gemini and Search** via **Android MCP**—coexists with “neutral cross-host MCP tooling” as **platform-owner** openness on the dev side vs binding the consumer entry; the post does not say whether AAIF or Agent Skills standards hook Android MCP.[^logicrw-google-android-summit-claude-codex-cli]

## 相关 / Related

- [夸克网盘 Skill / Quark Drive Skill](../sources/articles/op7418-quark-drive-skill.md)

- 来源：[Claude Agent Skills to AAIF](../sources/articles/claude-agent-skills-aaif.md)
- 来源：[Boris Cherny on Agent Skills to AAIF](../sources/articles/bcherny-agent-skills-aaif.md)
- 来源：[AAIF four new projects](../sources/articles/aaif-four-new-projects.md)
- 来源：[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md)
- 来源：[宝玉发布 baoyu-design v2 开源](../sources/articles/dotey-baoyu-design-v2-opensource.md)
- 来源：[baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md)
- 来源：[蓝哥AI谈 Ayi 用 Opus 5.5 开源「情商外挂」](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md)
- 来源：[情商外挂开源仓库](../sources/articles/ayi-qingshang-waigua.md)
- 来源：[思维怪怪谈 Google Android 峰会：Claude Code / Codex 官方 Android CLI 插件](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md)
- 主题：[Agentic AI Foundation](./agentic-ai-foundation.md)
- 主题：[Agent skill authoring](./agent-skill-authoring.md)

- Source: [Claude Agent Skills to AAIF](../sources/articles/claude-agent-skills-aaif.md)
- Source: [Boris Cherny on Agent Skills to AAIF](../sources/articles/bcherny-agent-skills-aaif.md)
- Source: [AAIF four new projects](../sources/articles/aaif-four-new-projects.md)
- Source: [Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md)
- Source: [Dotey announces baoyu-design v2 open source](../sources/articles/dotey-baoyu-design-v2-opensource.md)
- Source: [baoyu-design open-source repository](../sources/articles/jimliu-baoyu-design.md)
- Source: [邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md)
- Source: [MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md)
- Source: [0xlangeai on Ayi’s Opus 5.5 open-source “EQ plug-in” from an NVC Skill](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md)
- Source: [qingshang-waigua open-source repository](../sources/articles/ayi-qingshang-waigua.md)
- Source: [Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md)
- Topic: [Agentic AI Foundation](./agentic-ai-foundation.md)
- Topic: [Agent skill authoring](./agent-skill-authoring.md)

[^claude-agent-skills-aaif]: Claude Agent Skills to AAIF
[^aaif-four-new-projects]: AAIF four new projects
[^bcherny-agent-skills-aaif]: Boris Cherny on Agent Skills to AAIF
[^voxyz-agent-skills-writing-rules]: Vox on Agent Skills writing rules
[^dotey-baoyu-design-v2-opensource]: Dotey announces baoyu-design v2 open source
[^jimliu-baoyu-design]: baoyu-design open-source repository
[^shao-meng-minimax-mcode-stack]: Meng Shao on MiniMax open-sourcing the MCode Stack
[^minimax-mcode-stack]: MiniMax MCode Stack open-source repository
[^0xlangeai-qingshang-waigua-nvc-skill]: 0xlangeai on Ayi’s Opus 5.5 open-source EQ plug-in from an NVC Skill
[^ayi-qingshang-waigua]: qingshang-waigua open-source repository
[^logicrw-google-android-summit-claude-codex-cli]: Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins

[^op7418-quark-drive-skill]: Guizang on the Quark Drive Skill
