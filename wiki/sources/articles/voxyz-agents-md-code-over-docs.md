---
type: Source
title: Vox 谈 AGENTS.md 过期时跟代码不跟旧文档
title_en: Vox on following code when AGENTS.md is stale
description: Vox：AGENTS.md 过期时 Claude Code 在陷阱里 79/80 仍跟旧文档，Codex 约 1/4 会改工作代码迁就旧文档；加一句「文档与代码冲突时跟现有代码并报告不一致」后遵从率约 4%→91%。
description_en: Vox says that when AGENTS.md goes stale, Claude Code still followed old docs in 79 of 80 trap runs and Codex rewrote working code to match outdated docs in about 1 of 4 runs; adding a line to follow existing code conventions and report doc–code inconsistencies raised code-following from about 4% to 91%.
resource: https://x.com/Voxyz_ai/status/2114446907355648062
tags: [agents, agents-md, code, docs, claude-code, codex]
sources:
  - id: voxyz-agents-md-code-over-docs
    resource: https://x.com/Voxyz_ai/status/2114446907355648062
    title: Vox on following code when AGENTS.md is stale
    author: human:Voxyz_ai
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:51:11+08:00
date: 2026-10-25
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# Vox 谈 AGENTS.md 过期时跟代码不跟旧文档

*Vox on following code when AGENTS.md is stale*

[@Voxyz_ai](https://x.com/Voxyz_ai) 指出：一旦 `AGENTS.md` 过期，Claude Code 仍能看出文档与代码不符，却仍按旧文档行事；研究者设陷阱跑了 80 次，有 79 次中招。Codex 更糟：约四分之一的运行会把本可工作的代码改写成迁就过时文档。在 `AGENTS.md` 加一句「仓库文档与现有代码冲突时，遵循现有代码的约定，并在最终回复中指出文档与代码的每一处不一致」后，两款 agent 跟代码的比例约从 4% 升到 91%。[^voxyz-agents-md-code-over-docs] 原文见 <https://x.com/Voxyz_ai/status/2114446907355648062>。

[@Voxyz_ai](https://x.com/Voxyz_ai) notes that once `AGENTS.md` goes stale, Claude Code can see the docs no longer match the code and still follows the old docs; researchers set a trap and ran it 80 times, and it got caught in 79. Codex is worse: in about 1 run out of 4 it rewrote working code to match the outdated docs. Adding this line to `AGENTS.md`—“When a repository's documentation and its existing code disagree, follow the conventions used in the existing code, and in your final reply point out each inconsistency you found between the documentation and the code.”—raised code-following for both agents from about 4% to 91%.[^voxyz-agents-md-code-over-docs] The post is at <https://x.com/Voxyz_ai/status/2114446907355648062>.

## 摘要 / Summary

- `AGENTS.md` 过期时，Claude Code 在 80 次陷阱里有 79 次仍跟旧文档；Codex 约四分之一的运行会改写工作代码去迁就过时文档。[^voxyz-agents-md-code-over-docs]
- When `AGENTS.md` is stale, Claude Code still followed old docs in 79 of 80 trap runs; Codex rewrote working code to match outdated docs in about 1 of 4 runs.[^voxyz-agents-md-code-over-docs]
- 建议写入冲突规则：文档与现有代码不一致时跟代码约定，并在最终回复中指出每一处不一致；据称遵从率约 4%→91%。[^voxyz-agents-md-code-over-docs]
- Recommended conflict rule: when docs and existing code disagree, follow the code’s conventions and point out each inconsistency in the final reply; reported code-following rose from about 4% to 91%.[^voxyz-agents-md-code-over-docs]

## 相关 / Related

- Topic: [代码重于规格](../../topics/code-over-spec.md)

[^voxyz-agents-md-code-over-docs]: Vox on following code when AGENTS.md is stale
