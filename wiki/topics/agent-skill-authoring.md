---
type: Topic
title: Agent Skill 编写
title_en: Agent skill authoring
description: "耐用 Skills 来自真实跑通、精瘦 description、体积限制、脆弱步骤写死与 gotchas；同时官方与一线劝慎用——半衰期短，有时删 skill 更好，旧规矩会绑住新模型。"
description_en: "Durable Skills come from real runs, lean descriptions, size limits, hard-coded fragile steps, and gotchas—yet official and frontline advice also urge caution: short half-life, sometimes better after deletion, and prior-generation rules that bind new models."
tags: [agent-skills, authoring, best-practices]
sources:
  - id: voxyz-agent-skills-writing-rules
    resource: https://x.com/Voxyz_ai/status/2113374840413421906
    title: Vox on Agent Skills writing rules
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:10:00+08:00
---

# Agent Skill 编写

*Agent skill authoring*

值得分享的 Skills，是从智能体已经跑通的任务里提炼出来的，而不是凭通用知识空想。描述决定技能会不会被加载；正文保持短小，把细节推到引用文件，硬编码脆弱命令，并把每次纠正记成 gotcha。[^voxyz-agent-skills-writing-rules] 即便写法到位，Skills 仍可能半衰期很短：官方与一线工程侧都劝慎用，有时删掉 skill 输出更好，上一世代模型的规矩常会绑住新模型。[^shao-meng-felix-not-2024-claude-usage]

Skills worth sharing are distilled from tasks an agent already completed well, not invented from general knowledge. The description gates whether the skill is ever loaded; the body stays short, pushes detail into referenced files, hard-codes fragile commands, and records every correction as a gotcha.[^voxyz-agent-skills-writing-rules] Even well-authored Skills can have a short half-life: official guidance and frontline engineering both urge caution—deleting a skill sometimes improves output, and rules from a prior model generation often bind the next.[^shao-meng-felix-not-2024-claude-usage]

## 综合分析 / Synthesis

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) 在标准转入基金会治理之后，从官方技能创建指南抽出六条规则：先和智能体一起做完任务，只留下真正奏效的部分；删掉任何不改变结果的行；把描述写成「在……时使用此技能」且不超过 1,024 字符；`SKILL.md` 控制在 500 行、5,000 tokens 以内，细节放 `references/`；硬编码脆弱命令并选定一个默认值；把 gotchas 列表当作最高价值段落。同帖还附带一个 Claude Code 提示，把刚完成的重复任务做成带评估的技能。[^voxyz-agent-skills-writing-rules]

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) pulls six rules from the official skill-creation guide after the standard moved under foundation governance: do the task with the agent first and keep only what worked; drop any line that would not change the outcome; write the description as "use this skill when..." under 1,024 characters; keep `SKILL.md` under 500 lines and 5,000 tokens with `references/` for detail; hard-code fragile commands and pick one default; treat the gotchas list as the highest-value section. The same post includes a Claude Code prompt to turn a just-finished repeated task into a skill with evals.[^voxyz-agent-skills-writing-rules]

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 补上生命周期与默认态度：Skills 半衰期极短；官方与他个人都劝慎用；有时删掉 skill 输出更好。这不否定「从真实跑通提炼、写瘦 description」的写法，但把 Skills 从「默认该堆」改成「可删、须复查、勿绑死下一代模型」的资产。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) adds lifetime and default stance: Skills have a very short half-life; official guidance and his own advice say be careful; deleting a skill sometimes improves output. That does not cancel “distill from real runs, lean descriptions,” but reframes Skills from “stack by default” to assets you may delete, must revisit, and must not freeze onto the next model.[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>.

## 矛盾与变化 / Contradictions

本页主线（Vox / 官方指南）教人如何写出耐用 Skills；[邵萌转述 Felix](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 强调即便官方也劝慎用，半衰期短、旧规矩绑新模型、有时删 skill 更好。两者切面不同——前者是**怎么写**，后者是**何时保留与何时丢弃**——合在一起是「写对了仍要敢删」，而不是互相取消。[^voxyz-agent-skills-writing-rules][^shao-meng-felix-not-2024-claude-usage]

This page’s main line (Vox / official guide) teaches how to author durable Skills; [Meng Shao relaying Felix](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) stresses that even official advice urges caution—short half-life, prior-generation rules binding new models, and sometimes better output after deletion. Different cuts—**how to write** versus **when to keep or drop**—together mean “write them well and still dare to delete,” not a cancellation.[^voxyz-agent-skills-writing-rules][^shao-meng-felix-not-2024-claude-usage]

## 相关 / Related

- 来源 / Source: [Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md)
- 来源 / Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- 主题 / Topic: [Agent Skills open standard](./agent-skills-open-standard.md)
- 主题 / Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)

[^voxyz-agent-skills-writing-rules]: Vox on Agent Skills writing rules
[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
