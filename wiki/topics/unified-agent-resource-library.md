---
type: Topic
title: 跨 Agent 统一资源库
title_en: Unified cross-agent resource library
description: Agent/AI 工具可把 skills、MCP、hooks、subagents 与指令收进自有「资源库」文件夹，按行勾选目标 agent 并以各 agent 格式写出，再把已散落配置导入统一管——而不是在每个 agent 目录里各抄一份。
description_en: Agent/AI tools can keep skills, MCP, hooks, subagents, and instructions in a product-owned “resource library” folder, assign agents per row and write each agent’s format, then import already-scattered configs for unified management—instead of hand-copying into every agent directory.
tags: [magpie, skills, mcp, hooks, subagents, resource-library, agents]
sources:
  - id: yetone-magpie-resource-library
    resource: https://x.com/yetone/status/2114222419376529755
    title: yetone on Magpie’s resource library for skills, MCP, and hooks
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:40:00+08:00
---

# 跨 Agent 统一资源库

*Unified cross-agent resource library*

多 agent 并存时，skills、MCP、hooks、subagents 与指令容易散落在各 agent 目录、格式不一、难同步。一层产品侧「资源库」可把这些资源收进自有文件夹，按行决定下发给谁，并按各 agent 格式写出；已散落的配置也可导入，从「各管一份」变成「一处管、多处写」。[^yetone-magpie-resource-library]

When several agents coexist, skills, MCP, hooks, subagents, and instructions tend to scatter across agent directories in mismatched formats and drift out of sync. A product-side “resource library” can hold those assets in its own folder, choose per row which agents receive them, and write each agent’s format; already-scattered configs can be imported—so management moves from “one copy per agent” to “one place to manage, many places to write.”[^yetone-magpie-resource-library]

## 综合分析 / Synthesis

[yetone 谈 Magpie 资源库统一管 skills / MCP / hooks](../sources/articles/yetone-magpie-resource-library.md) 给出 Magpie 作者侧一例：[@yetone](https://x.com/yetone) 称 magpie「资源库」已经统一管理 skills、MCP、hooks、subagents 和指令，都存在 magpie 自己的文件夹里；每行勾选给哪些 agent，magpie 按各 agent 的格式写进去；已散落在各 agent 里的，在「Agent 中已有」一栏点「导入」或「全部导入」就收进来统一管。[^yetone-magpie-resource-library] 原帖 <https://x.com/yetone/status/2114222419376529755>。证据覆盖资源类型范围、存储位置、按行勾选、格式适配写出，以及导入路径——未展开支持哪些具体 agent、冲突合并规则或插件生态。

[yetone on Magpie’s resource library for skills, MCP, and hooks](../sources/articles/yetone-magpie-resource-library.md) is one Magpie-author case: [@yetone](https://x.com/yetone) says magpie’s “resource library” already unifies skills, MCP, hooks, subagents, and instructions in magpie’s own folder; each row checks which agents get the item and magpie writes each agent’s format; what’s already scattered can be pulled in via Import or Import all under “Already in agents.”[^yetone-magpie-resource-library] Post: <https://x.com/yetone/status/2114222419376529755>. Evidence covers resource types, storage location, per-row assignment, format-aware writes, and the import path—not which concrete agents are supported, merge/conflict rules, or a plugin ecosystem.

与 [项目指令与 Token 效率](./agents-md-token-efficiency.md) 切面不同：那页谈 AGENTS.md / CLAUDE.md 如何写成执行约束以省 Token；本页谈的是跨 agent 配置资产的统一存放与分发。与 [Agent Skill 编写](./agent-skill-authoring.md) 也不同：那页谈 Skills 怎么写、何时慎用；本页不规定写法，只谈如何把已有 skills（及 MCP/hooks 等）收进一处再写出。

Different cut from [Project instructions and token efficiency](./agents-md-token-efficiency.md), which is about writing AGENTS.md / CLAUDE.md as execution constraints to save tokens; this page is about unified storage and distribution of cross-agent config assets. Also different from [Agent skill authoring](./agent-skill-authoring.md), which is about how to write Skills and when to use them sparingly; this page does not prescribe authoring rules—only how existing skills (plus MCP/hooks and the rest) are collected and written out.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [yetone 谈 Magpie 资源库统一管 skills / MCP / hooks](../sources/articles/yetone-magpie-resource-library.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准](./agent-skills-open-standard.md)

[^yetone-magpie-resource-library]: yetone on Magpie’s resource library for skills, MCP, and hooks
