---
type: Topic
title: 代码重于规格
title_en: Code over the spec
description: 工程注意力应以实际运行的代码为中心，而不是描述它的书面规格；AGENTS.md 等项目文档过期时亦应跟代码并报告不一致。
description_en: The running code, not the written specification, should be the center of engineering attention; when project docs such as AGENTS.md go stale, agents should follow the code and report inconsistencies.
tags: [code, spec, engineering, practice, agents-md]
sources:
  - id: mattpocock-code-not-spec
    resource: https://x.com/mattpocockuk/status/2113264229453033684
    title: Matt Pocock on code over the spec
  - id: wquguru-divergent-tasks-human-design-gate
    resource: https://x.com/wquguru/status/2114162927926383065
    title: WquGuru on human design gates for divergent tasks
  - id: voxyz-agents-md-code-over-docs
    resource: https://x.com/Voxyz_ai/status/2114446907355648062
    title: Vox on following code when AGENTS.md is stale
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:51:11+08:00
---

# 代码重于规格

*Code over the spec*

工程注意力应以实际运行的代码为中心，而不是描述它的书面规格。[^mattpocock-code-not-spec] 当 `AGENTS.md` 一类项目文档过期时，coding agent 默认仍易跟旧文档甚至改坏能跑的代码；显式要求「冲突时跟现有代码并指出不一致」可大幅抬高跟代码率。[^voxyz-agents-md-code-over-docs]

Engineering attention should center on the code that actually runs, not on the written specification that describes it.[^mattpocock-code-not-spec] When project docs such as `AGENTS.md` go stale, coding agents still tend to follow the old docs and can even rewrite working code; an explicit “on conflict, follow existing code and report inconsistencies” rule sharply raises code-following.[^voxyz-agents-md-code-over-docs]

## 综合分析 / Synthesis

[Matt Pocock on code over the spec](../sources/articles/mattpocock-code-not-spec.md) 用一句话陈述主张：代码，而不是规格，才应是你宇宙的中心。[^mattpocock-code-not-spec]

[Matt Pocock on code over the spec](../sources/articles/mattpocock-code-not-spec.md) states the claim in one line: the code, not the spec, should be the center of your universe.[^mattpocock-code-not-spec]

[Vox 谈 AGENTS.md 过期时跟代码不跟旧文档](../sources/articles/voxyz-agents-md-code-over-docs.md) 把同一优先级落到 coding agent 与 `AGENTS.md`：文档过期时 Claude Code 在 80 次陷阱里有 79 次仍跟旧文档，Codex 约四分之一的运行会改写工作代码迁就过时文档；写入「文档与现有代码冲突时跟代码约定，并在最终回复中指出每一处不一致」后，两款 agent 跟代码约从 4% 升到 91%。[^voxyz-agents-md-code-over-docs] 原文 <https://x.com/Voxyz_ai/status/2114446907355648062>。这是口号之外的可测失败模式与可写进项目指令的补丁，与 [项目指令与 Token 效率](./agents-md-token-efficiency.md) 同属「往 `AGENTS.md` 写执行约束」，但本页关心的是文档–代码冲突时的优先级，不是省 Token 或人设。

[Vox on following code when AGENTS.md is stale](../sources/articles/voxyz-agents-md-code-over-docs.md) lands the same priority on coding agents and `AGENTS.md`: when docs are stale, Claude Code still followed old docs in 79 of 80 trap runs, and Codex rewrote working code to match outdated docs in about 1 of 4 runs; adding “when docs and existing code disagree, follow the code’s conventions and point out each inconsistency in the final reply” raised code-following for both agents from about 4% to 91%.[^voxyz-agents-md-code-over-docs] Original at <https://x.com/Voxyz_ai/status/2114446907355648062>. That is a measurable failure mode plus a project-instruction patch beyond the slogan—same family as [Project instructions and token efficiency](./agents-md-token-efficiency.md) for writing constraints into `AGENTS.md`, but this page’s cut is doc–code conflict priority, not token savings or personas.

## 矛盾与变化 / Contradictions

[WquGuru 谈发散任务先人类把关设计](../sources/articles/wquguru-divergent-tasks-human-design-gate.md) 对界面设计一类强发散任务主张人先把关设计稿再实现。[^wquguru-divergent-tasks-human-design-gate] 与本页「代码而非规格才是宇宙中心」[^mattpocock-code-not-spec] 切面不同：本页反对书面规格取代运行代码成为注意力中心；那条主张是在发散设计域把设计稿门禁放在实现之前。合在一起是「交付仍以代码为中心，但强发散时设计方向宜先收束」，而不是互相取消。主张归档在 [发散任务先人审设计](./divergent-tasks-human-design-gate.md)。

[WquGuru on human design gates for divergent tasks](../sources/articles/wquguru-divergent-tasks-human-design-gate.md) argues that for highly divergent UI design, humans should gate the design draft before implementation.[^wquguru-divergent-tasks-human-design-gate] Different cut from this page’s “code, not the spec, is the center of your universe”[^mattpocock-code-not-spec]: this page rejects the written spec replacing running code as the focus of attention; that claim puts a design-draft gate before implementation in divergent design work. Together: delivery still centers on code, but highly divergent design direction should be narrowed first—not a cancellation. Filed under [Human design gate for divergent tasks](./divergent-tasks-human-design-gate.md).

## 相关 / Related

- Source: [Matt Pocock on code over the spec](../sources/articles/mattpocock-code-not-spec.md)
- Source: [Vox 谈 AGENTS.md 过期时跟代码不跟旧文档](../sources/articles/voxyz-agents-md-code-over-docs.md)
- Source: [WquGuru 谈发散任务先人类把关设计](../sources/articles/wquguru-divergent-tasks-human-design-gate.md)
- Topic: [发散任务先人审设计](./divergent-tasks-human-design-gate.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)

[^mattpocock-code-not-spec]: Matt Pocock on code over the spec
[^wquguru-divergent-tasks-human-design-gate]: WquGuru on human design gates for divergent tasks
[^voxyz-agents-md-code-over-docs]: Vox on following code when AGENTS.md is stale
