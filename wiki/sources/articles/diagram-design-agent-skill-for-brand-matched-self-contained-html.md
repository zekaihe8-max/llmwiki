---
type: Source
title: "Diagram Design：Agent 绘图技能，生成自带品牌风格的单文件 SVG 图表"
title_en: "Diagram Design: Agent skill for brand-matched self-contained HTML+SVG diagrams"
description: "一个可被多种 AI 代理宿主安装的 Agent Skill，用自然语言生成 52 种类型的自包含 HTML + SVG 图表，并匹配站点品牌风格。"
description_en: "An Agent Skill installable across multiple AI agent hosts that generates 52 types of self-contained HTML + SVG diagrams from natural language and matches them to your brand."
resource: https://github.com/cathrynlavery/diagram-design
tags: [agents, agent-skill, diagram, design, svg]
sources:
  - id: diagram-design
    resource: https://github.com/cathrynlavery/diagram-design
    title: "Diagram Design: Agent skill for brand-matched self-contained HTML+SVG diagrams"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:25:37+08:00
---

# Diagram Design：Agent 绘图技能，生成自带品牌风格的单文件 SVG 图表

*Diagram Design: Agent skill for brand-matched self-contained HTML+SVG diagrams*

Diagram Design 是一个 Agent 技能，用自然语言描述即可生成图表，输出为可直接双击打开的单个 HTML 文件，内含 inline SVG。仓库宣称包含 52 种图表类型，提供极简浅色、极简深色和完整编辑三种静态变体，无构建步骤、无 JavaScript、无外部图片依赖。它支持从 draw.io、Mermaid、Excalidraw 或 PlantUML 导入，并可导出为 PNG 或 SVG，还能拉取站点调色板和字体以匹配品牌风格。该技能可通过技能 CLI 在 Cursor、Claude Code、Codex、GitHub Copilot 等多个 Agent 宿主中安装。[^diagram-design]

Diagram Design is an Agent skill that generates diagrams from natural language descriptions and outputs a single self-contained HTML file with inline SVG that can be opened by double-clicking. The repository claims 52 diagram types in three static variants—minimal light, minimal dark, and full-editorial—with no build step, JavaScript, or external image dependency. It supports importing from draw.io, Mermaid, Excalidraw, or PlantUML and exporting to PNG or SVG, and can pull a site's palette and fonts to match brand style. The skill can be installed via the skills CLI across multiple Agent hosts including Cursor, Claude Code, Codex, and GitHub Copilot.[^diagram-design]

## 摘要 / Summary

- 支持 52 种图表类型，每种提供极简浅色、极简深色和完整编辑三种静态变体。[^diagram-design]
- Supports 52 diagram types, each available in three static variants: minimal light, minimal dark, and full-editorial.[^diagram-design]
- 输出为单个自包含 HTML + SVG 文件，无构建步骤、无 JavaScript、无外部图片依赖。[^diagram-design]
- Outputs a single self-contained HTML + SVG file with no build step, JavaScript, or external image dependency.[^diagram-design]
- 可从 draw.io、Mermaid、Excalidraw 或 PlantUML 导入，并导出为 PNG 或 SVG。[^diagram-design]
- Supports importing from draw.io, Mermaid, Excalidraw, or PlantUML and exporting to PNG or SVG.[^diagram-design]
- 可通过技能 CLI 在 Cursor、Claude Code、Codex、GitHub Copilot 等多个 Agent 宿主中安装。[^diagram-design]
- Installable via the skills CLI across multiple Agent hosts including Cursor, Claude Code, Codex, and GitHub Copilot.[^diagram-design]
- 支持拉取站点调色板和字体，使生成的图表匹配品牌风格。[^diagram-design]
- Supports pulling a site's palette and fonts so generated diagrams match brand style.[^diagram-design]

## 相关 / Related

- 原文：[链接](https://github.com/cathrynlavery/diagram-design)。 / Original: [link](https://github.com/cathrynlavery/diagram-design).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^diagram-design]: Diagram Design: Agent skill for brand-matched self-contained HTML+SVG diagrams
