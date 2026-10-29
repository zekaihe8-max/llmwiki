---
type: Source
title: baoyu-design 开源仓库
title_en: baoyu-design open-source repository
description: Jim Liu 将 claude.ai/design 背后的 Claude Design 与四种 Artifact 类型技能打包为可安装 Agent Skills，在本地编辑器产出并版本化 HTML、幻灯片、画布、设计系统与数据看板。
description_en: Jim Liu repackages the Claude Design engine behind claude.ai/design plus four Artifact-type skills as installable Agent Skills, with local editors and versioned HTML, slide decks, canvases, design systems, and data dashboards in the repo.
resource: https://github.com/jimliu/baoyu-design
tags: [baoyu-design, jimliu, agent-skills, claude-design, open-source, artifacts]
sources:
  - id: jimliu-baoyu-design
    resource: https://github.com/jimliu/baoyu-design
    title: baoyu-design open-source repository
    author: human:Jim Liu
generated:
  by: cursor-agent/composer
  at: 2026-10-29T20:10:00+08:00
---

# baoyu-design 开源仓库

*baoyu-design open-source repository*

**baoyu-design** 把 [claude.ai/design](https://claude.ai/design) 背后的 **Claude Design** 设计引擎收成可在本地运行的 **Agent Skill**；另含四个技能，把 claude.ai 的 Artifact 类型（可编辑幻灯片、设计画布、设计系统、数据看板）带到同一类本地 Agent（Cursor、Claude Code、Claude Desktop、Codex 等）。无需网站、无需单独订阅、无需上传步骤——已在机器上的 Agent 写文件，产物留在仓库里。[^jimliu-baoyu-design] 仓库 <https://github.com/jimliu/baoyu-design>；MIT 许可；README 写明这是对 Anthropic Claude Design 技能的社区再打包，**与 Anthropic 无隶属或背书**。

**baoyu-design** packages the **Claude Design** engine behind [claude.ai/design](https://claude.ai/design) as a portable **Agent Skill** you run locally, plus four skills that bring claude.ai Artifact types—editable slide decks, design canvases, design systems, and data dashboards—to the same local agents (Cursor, Claude Code, Claude Desktop, Codex, and others). No website, no separate subscription, no upload step—the agent already on your machine writes files and artifacts stay in your repo.[^jimliu-baoyu-design] Repository: <https://github.com/jimliu/baoyu-design>; MIT license; the README states this is a community repack of Anthropic’s Claude Design skill, **not affiliated with or endorsed by Anthropic**.

## 摘要 / Summary

- **五个 Skill**：`baoyu-design`（自包含 HTML  mockup/原型/线框/Landing/动效等，输出到 `designs/<project>/`）；`claude-slides`、`claude-design`、`claude-design-system`、`claude-dashboard` 各写对应 Artifact 文件格式并在本机打开专用编辑器（幻灯片、画布 artboard、设计系统、数据看板）。[^jimliu-baoyu-design]
- **Five skills**: `baoyu-design` (self-contained HTML mockups, prototypes, wireframes, landings, motion, under `designs/<project>/`); `claude-slides`, `claude-design`, `claude-design-system`, and `claude-dashboard` each write that Artifact type’s format and open a dedicated local editor (slides, artboard canvas, design system, data dashboard).[^jimliu-baoyu-design]
- **Artifact 技能协作**：Agent 写文件、编辑器即时展示；用户在编辑器中的修改写回同一文件，人与 Agent 可轮流编辑。各 Skill 内 `scripts/artifact.mjs`（Node 20+，dashboard 需 Node 22+）把原 Artifact 工具调用换成本地脚本；各 Skill 自带本地服务，编辑器预构建在 `scripts/editor/`。[^jimliu-baoyu-design]
- **Artifact skills loop**: the agent writes files and the editor reflects each write; editor edits persist to the same files so you and the agent alternate. Each skill’s `scripts/artifact.mjs` (Node 20+, dashboard Node 22+) swaps Artifact tool calls for local ones; each skill runs its own local server with prebuilt editors under `scripts/editor/`.[^jimliu-baoyu-design]
- **安装与更新**：推荐 `npx skills add JimLiu/baoyu-design`（Vercel Labs [skills](https://github.com/vercel-labs/skills) CLI，自动检测 70+ Agent）；可 `-g`、按 `--agent` 指定、或 `--skill` 只装部分；更新用 `npx skills update baoyu-design`。亦可把仓库 URL 交给 Agent 一次性拉取 `SKILL.md`。[^jimliu-baoyu-design]
- **Install and update**: recommended `npx skills add JimLiu/baoyu-design` (Vercel Labs [skills](https://github.com/vercel-labs/skills) CLI, auto-detects 70+ agents); optional `-g`, `--agent`, or `--skill` for partial installs; update via `npx skills update baoyu-design`. You can also paste the repo URL for a one-off fetch of `SKILL.md`.[^jimliu-baoyu-design]
- **本地优势（自述）**：宣称覆盖 claude.ai/design **绝大部分**能力；推荐 **Claude Opus 5.5** 作最佳搭配，其他强模型仍可用；因交付物是 localhost 上的 HTML，可配合 Cursor Browser / Claude Preview / Codex Browser **指元素改稿**；产物可版本化、导出或交付。[^jimliu-baoyu-design]
- **Local rationale (as stated)**: claims **most** of claude.ai/design’s capability; pairs best with **Claude Opus 5.5**, still works on other capable models; because deliverables are HTML on localhost, you can **point at elements** in Cursor Browser / Claude Preview / Codex Browser; output is versionable, exportable, and shippable.[^jimliu-baoyu-design]
- **baoyu-design 技能结构**：`SKILL.md` 编排流程；`system-prompt.md` 承载设计方法论与工艺标准；`references/claude.md`、`cursor.md`、`codex.md` 映射各宿主工具；`built-in-skills/` 按需加载专项提示；`starter-components/` 提供设备壳、deck stage、图表等脚手架。[^jimliu-baoyu-design]
- **baoyu-design skill layout**: `SKILL.md` orchestrates; `system-prompt.md` holds methodology and craft standards; `references/claude.md`, `cursor.md`, `codex.md` map host tools; `built-in-skills/` loads specialized prompts on demand; `starter-components/` supplies device shells, deck stages, charts, and scaffolds.[^jimliu-baoyu-design]
- **导入与导出**：内置从 **Figma .fig 离线解码**、GitHub 仓库、现有 HTML/CSS 拉设计上下文；deck 可导 **可编辑 PPTX**（本地 `gen-pptx`：Playwright 渲染 + PptxGenJS，非网页版 `gen_pptx` 工具）或截图 PPTX；另支持 PDF、HTML、PNG、视频等（见 built-in 导出技能表）。[^jimliu-baoyu-design]
- **Import and export**: built-ins import **offline Figma .fig**, GitHub repos, and existing HTML/CSS as design context; decks export **editable PPTX** via local `gen-pptx` (Playwright render + PptxGenJS—not the web `gen_pptx` tool) or screenshot PPTX; also PDF, HTML, PNG, video, and peers per the built-in export table.[^jimliu-baoyu-design]

## 相关 / Related

- Source: [宝玉发布 baoyu-design v2 开源](./dotey-baoyu-design-v2-opensource.md)
- Topic: [Agent Skills 开放标准](../../topics/agent-skills-open-standard.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅](../../topics/design-to-code-byo-subscriptions.md)

[^jimliu-baoyu-design]: baoyu-design open-source repository
