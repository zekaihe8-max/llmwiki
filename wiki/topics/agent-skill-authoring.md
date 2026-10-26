---
type: Topic
title: Agent Skill 编写
title_en: Agent skill authoring
description: "耐用 Skills 来自真实跑通、精瘦 description、体积限制、脆弱步骤写死与 gotchas；勿塞权重已有知识；同会话叠 Skills 要看是否需叠加与内容类型；同时官方与一线劝慎用——半衰期短，有时删 skill 更好，旧规矩会绑住新模型。"
description_en: "Durable Skills come from real runs, lean descriptions, size limits, hard-coded fragile steps, and gotchas—omit weight-already-known material; stacking skills in one session depends on whether they must stack and on content type—yet official and frontline advice also urge caution: short half-life, sometimes better after deletion, and prior-generation rules that bind new models."
tags: [agent-skills, authoring, best-practices, context]
sources:
  - id: voxyz-agent-skills-writing-rules
    resource: https://x.com/Voxyz_ai/status/2113374840413421906
    title: Vox on Agent Skills writing rules
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
  - id: dexhorthy-skills-session-context
    resource: https://x.com/dexhorthy/status/2114408588991222156
    title: Dex Horthy on stacking skills in one session and context dirtying
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:50:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# Agent Skill 编写

*Agent skill authoring*

值得分享的 Skills，是从智能体已经跑通的任务里提炼出来的，而不是凭通用知识空想。描述决定技能会不会被加载；正文保持短小，把细节推到引用文件，硬编码脆弱命令，并把每次纠正记成 gotcha。[^voxyz-agent-skills-writing-rules] 不要把权重里已经有的东西写进 Skills——浪费时间，还会锁死可能次优的具体行为。[^dexhorthy-skills-session-context] 即便写法到位，Skills 仍可能半衰期很短：官方与一线工程侧都劝慎用，有时删掉 skill 输出更好，上一世代模型的规矩常会绑住新模型。[^shao-meng-felix-not-2024-claude-usage]

Skills worth sharing are distilled from tasks an agent already completed well, not invented from general knowledge. The description gates whether the skill is ever loaded; the body stays short, pushes detail into referenced files, hard-codes fragile commands, and records every correction as a gotcha.[^voxyz-agent-skills-writing-rules] Do not put material already in the weights into Skills—you waste time and lock in a specific, potentially suboptimal behavior.[^dexhorthy-skills-session-context] Even well-authored Skills can have a short half-life: official guidance and frontline engineering both urge caution—deleting a skill sometimes improves output, and rules from a prior model generation often bind the next.[^shao-meng-felix-not-2024-claude-usage]

## 综合分析 / Synthesis

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) 在标准转入基金会治理之后，从官方技能创建指南抽出六条规则：先和智能体一起做完任务，只留下真正奏效的部分；删掉任何不改变结果的行；把描述写成「在……时使用此技能」且不超过 1,024 字符；`SKILL.md` 控制在 500 行、5,000 tokens 以内，细节放 `references/`；硬编码脆弱命令并选定一个默认值；把 gotchas 列表当作最高价值段落。同帖还附带一个 Claude Code 提示，把刚完成的重复任务做成带评估的技能。[^voxyz-agent-skills-writing-rules]

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) pulls six rules from the official skill-creation guide after the standard moved under foundation governance: do the task with the agent first and keep only what worked; drop any line that would not change the outcome; write the description as "use this skill when..." under 1,024 characters; keep `SKILL.md` under 500 lines and 5,000 tokens with `references/` for detail; hard-code fragile commands and pick one default; treat the gotchas list as the highest-value section. The same post includes a Claude Code prompt to turn a just-finished repeated task into a skill with evals.[^voxyz-agent-skills-writing-rules]

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 补上生命周期与默认态度：Skills 半衰期极短；官方与他个人都劝慎用；有时删掉 skill 输出更好。这不否定「从真实跑通提炼、写瘦 description」的写法，但把 Skills 从「默认该堆」改成「可删、须复查、勿绑死下一代模型」的资产。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) adds lifetime and default stance: Skills have a very short half-life; official guidance and his own advice say be careful; deleting a skill sometimes improves output. That does not cancel “distill from real runs, lean descriptions,” but reframes Skills from “stack by default” to assets you may delete, must revisit, and must not freeze onto the next model.[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>.

[Dex Horthy 谈同会话叠 Skills 与上下文污染](../sources/articles/dexhorthy-skills-session-context.md) 从会话与注意力侧补「写什么、怎么加载」：好的 skills 常混合权重外信息、流程步骤与一般转向/行为——偏流程宜串开，偏信息大概可合并进一条用户消息，行为规则在长会话会衰减，重要者应跨步骤重复或用 hooks。约五步同会话通常够用；需 skills **叠加**或约 200 个独立 skills 同时活跃时，才换新鲜上下文、子 Agent 或预合并（并点出把 memory snippets 做成 skills 在当今 harness 里多半是反模式）。他恳求勿塞权重已有内容。[^dexhorthy-skills-session-context] 原帖 <https://x.com/dexhorthy/status/2114408588991222156>。何时用子 Agent / 新鲜窗与主循环默认的衔接见 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)。

[Dex Horthy on stacking skills in one session and context dirtying](../sources/articles/dexhorthy-skills-session-context.md) adds the session-and-attention cut on what to write and how to load: good skills often mix out-of-weight information, process steps, and general steering/behavior—string process out, information can often merge into one user message, and behavior adherence decays over long sessions so important rules want repetition across steps or hooks. About five steps in one session are usually fine; only when skills must **stack** or ~200 separate skills stay active at once do you want fresh context, subagents, or precombine (and framing memory snippets as skills is probably an antipattern in today’s harnesses). He begs people not to stuff weight-already-known material in.[^dexhorthy-skills-session-context] Post: <https://x.com/dexhorthy/status/2114408588991222156>. For how that meets the main-loop default on subagents / fresh windows, see [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md).

## 矛盾与变化 / Contradictions

本页主线（Vox / 官方指南）教人如何写出耐用 Skills；[邵萌转述 Felix](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 强调即便官方也劝慎用，半衰期短、旧规矩绑新模型、有时删 skill 更好。两者切面不同——前者是**怎么写**，后者是**何时保留与何时丢弃**——合在一起是「写对了仍要敢删」，而不是互相取消。[^voxyz-agent-skills-writing-rules][^shao-meng-felix-not-2024-claude-usage]

This page’s main line (Vox / official guide) teaches how to author durable Skills; [Meng Shao relaying Felix](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) stresses that even official advice urges caution—short half-life, prior-generation rules binding new models, and sometimes better output after deletion. Different cuts—**how to write** versus **when to keep or drop**—together mean “write them well and still dare to delete,” not a cancellation.[^voxyz-agent-skills-writing-rules][^shao-meng-felix-not-2024-claude-usage]

[Dex Horthy](../sources/articles/dexhorthy-skills-session-context.md) 的「勿塞权重已有知识」与「旧规矩会绑住新模型」同向：把模型已会的东西固化进 skill，既浪费上下文，也锁死可能次优行为；与「可删、须复查」一致，而不是另开一套写法。[^dexhorthy-skills-session-context][^shao-meng-felix-not-2024-claude-usage]

[Dex Horthy](../sources/articles/dexhorthy-skills-session-context.md)’s “don’t put weight-already-known material in” aligns with “prior-generation rules bind new models”: freezing what the model already knows into a skill wastes context and locks potentially suboptimal behavior—consistent with “delete and revisit,” not a rival authoring school.[^dexhorthy-skills-session-context][^shao-meng-felix-not-2024-claude-usage]

## 相关 / Related

- 来源 / Source: [Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md)
- 来源 / Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- 来源 / Source: [Dex Horthy 谈同会话叠 Skills 与上下文污染](../sources/articles/dexhorthy-skills-session-context.md)
- 主题 / Topic: [Agent Skills open standard](./agent-skills-open-standard.md)
- 主题 / Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)

[^voxyz-agent-skills-writing-rules]: Vox on Agent Skills writing rules
[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
[^dexhorthy-skills-session-context]: Dex Horthy on stacking skills in one session and context dirtying
