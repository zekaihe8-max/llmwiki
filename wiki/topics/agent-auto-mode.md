---
type: Topic
title: 智能体自动模式
title_en: Agent auto mode
description: 智能体会话可默认自动权限模式，由检查拦截风险动作；回答后的安全自我评估只作事后标记，不能替代执行前授权检查。
description_en: Agent sessions can default to auto permission mode with automated risk blocking; safety self-assessment after responses only flags activity after the fact and cannot replace authorization checks before execution.
tags: [agents, permissions, auto-mode, claude]
sources:
  - id: claude-auto-mode-default
    resource: https://x.com/claudeai/status/2113360845409583307
    title: Claude auto mode by default
  - id: dotey-claude-self-assessment
    resource: https://x.com/dotey/status/2115923359149998490
    title: Dotey on Claude safety self-assessment after responses
  - id: shao-meng-addy-opus-overprompting
    resource: https://x.com/shao__meng/status/2115986116482613486
    title: "Meng Shao relays Addy on overprompting in the Opus 5.5 era"
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:17:41+08:00
---

# 智能体自动模式

*Agent auto mode*

对智能体产品会话而言，默认权限路径可以是自动模式：系统无需逐步人工批准即可继续，拦截风险操作的是自动化检查。手动批准仍可作为可选开启。[^claude-auto-mode-default]

For agentic product sessions, the default permission path can be auto mode: the system proceeds without per-step human approval, and an automated check is what blocks risky actions. Manual approval remains available as an opt-in.[^claude-auto-mode-default]

## 综合分析 / Synthesis

[Claude auto mode by default](../sources/articles/claude-auto-mode-default.md) 称：Pro、Max 与 Team 计划上的 Claude 网页、桌面与移动会话将默认跑在自动模式，由自动化检查拦截风险操作，并可随时切回手动。[^claude-auto-mode-default] 同一抓取帖还带有 Claude Code 说明：对这些计划，自动模式已成为默认权限模式，另有分类器审查命令与动作；测试中比手动批准拦下了更多危险命令。[^claude-auto-mode-default]

[Claude auto mode by default](../sources/articles/claude-auto-mode-default.md) states that Claude web, desktop, and mobile sessions on Pro, Max, and Team plans will run in auto mode by default, with an automated check blocking risky actions and a switch back to manual at any time.[^claude-auto-mode-default] The same fetched post also carries a Claude Code note that auto mode became the default permission mode there for those plans, with a separate classifier reviewing commands and actions and, in testing, catching more dangerous commands than manual approval did.[^claude-auto-mode-default]

自动权限模式的安全检查还需区分执行时拦截与回答后监测。[宝玉的自我评估解读](../sources/articles/dotey-claude-self-assessment.md) 转述：回答后复用 KV cache 的安全评估只作事后标记，不会当场打断对话；24 个可重试的网络攻击任务中，以它拦截仍成功 13 个，而提示式分类器为 6 个。因此，低成本覆盖与人工复查分流可补充安全体系，但不能把这类评估视为自动模式执行前的授权检查。[^dotey-claude-self-assessment]

Safety checks for auto permission mode require distinguishing blocking during execution from monitoring after a response. [Dotey’s self-assessment explanation](../sources/articles/dotey-claude-self-assessment.md) reports that safety assessment reusing KV cache after responses only flags activity after the fact and does not interrupt conversations; among 24 retryable cyberattack tasks, 13 still succeeded with it blocking, versus 6 with a prompted classifier. Low-cost coverage and triage for human review can therefore supplement safeguards, but this assessment should not be treated as an authorization check before auto-mode execution.[^dotey-claude-self-assessment]

执行前分类器的作用也应限定：文章明确自动模式不是安全保证，盲目人工全批同样不是。权限决策与结果验收须分别检查；完成汇报应出示命令与输出或截图，减少把“允许执行”误当成“任务完成”的风险。 见[邵萌转述 Addy](../sources/articles/shao-meng-addy-opus-overprompting.md)。[^shao-meng-addy-opus-overprompting]

The role of a classifier before execution also needs limits: the post explicitly says auto mode is no safety guarantee, nor is blindly approving everything manually. Permission decisions and outcome verification need separate checks; completion reports should show commands and outputs or screenshots to reduce the risk of equating permission to execute with successful completion. See [Meng Shao relaying Addy](../sources/articles/shao-meng-addy-opus-overprompting.md).[^shao-meng-addy-opus-overprompting]

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- [邵萌转述 Addy / Meng Shao relays Addy](../sources/articles/shao-meng-addy-opus-overprompting.md)

- 来源：[Claude auto mode by default](../sources/articles/claude-auto-mode-default.md)

- Source: [Claude auto mode by default](../sources/articles/claude-auto-mode-default.md)

[^claude-auto-mode-default]: Claude auto mode by default

[^dotey-claude-self-assessment]: Dotey on Claude safety self-assessment

[^shao-meng-addy-opus-overprompting]: Meng Shao relays Addy on overprompting in the Opus 5.5 era
