---
type: Source
title: "Antigravity 自定义 Agent 4 倍扣费被官方确认为故意"
title_en: "Antigravity Custom Agent 4x Billing Confirmed Intentional"
description: "帖文称 Antigravity 将自定义与插件 Agent 按 4 倍额度计费，官方关闭 issue 称这是故意设计，并建议改用默认 Agent 与 AGENTS.md/Skill 省钱。"
description_en: "The post claims Antigravity bills custom and plugin agents at 4x quota, with maintainers closing the issue as intentional and suggesting default agents plus AGENTS.md/Skill as a workaround."
resource: https://x.com/lxfater/status/2126635997047783578
tags: [antigravity, billing, coding-agent, quota, agents-md]
sources:
  - id: antigravity-custom-agent-4x-billing
    resource: https://x.com/lxfater/status/2126635997047783578
    title: "Antigravity Custom Agent 4x Billing Confirmed Intentional"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T19:59:15+08:00
---

# Antigravity 自定义 Agent 4 倍扣费被官方确认为故意

*Antigravity Custom Agent 4x Billing Confirmed Intentional*

帖文称，Antigravity 的 4 倍扣费并非 Bug：维护者关闭 #1890 并回复称，本地自定义 Agent、插件 Agent 以及它们拉起的 Subagent 都会按高倍率计费，默认 Agent 和内置 Agent 仍按标准扣费。帖文还称，1.5.18 实测同一提示词挂 --agent 会扣掉 1.81% 周额度，切回默认 Agent 只扣 0.47%，差距接近 4 倍；官方建议撤掉 --agent，把自定义指令挪进 AGENTS.md、GEMINI.md 或 Skill。另一个后台安检乱扣费 #1886 仍未修复，1.5.19 也未提及。[^antigravity-custom-agent-4x-billing]

The post claims Antigravity's 4x billing is not a bug: maintainers closed #1890 and said local custom agents, plugin agents, and their subagents are billed at a higher rate, while default and built-in agents remain standard. It says a 1.5.18 test with the same prompt consumed 1.81% of weekly quota with --agent versus 0.47% with the default agent, nearly 4x more; the suggested fix is to remove --agent and move custom instructions into AGENTS.md, GEMINI.md, or Skills. It also says billing issue #1886 remains unresolved and was not mentioned in 1.5.19.[^antigravity-custom-agent-4x-billing]

## 摘要 / Summary

- 帖文称官方关闭 #1890，并回复说 4 倍扣费是故意计费，不是待修 Bug。[^antigravity-custom-agent-4x-billing]
- The post says maintainers closed #1890 and replied that the 4x billing is intentional, not a bug to be fixed.[^antigravity-custom-agent-4x-billing]
- 高倍率扣费范围包括本地自定义 Agent、插件 Agent，以及它们拉起的 Subagent。[^antigravity-custom-agent-4x-billing]
- The higher billing rate applies to local custom agents, plugin agents, and subagents launched by them.[^antigravity-custom-agent-4x-billing]
- 默认 Agent 和内置 Agent 未被调整，仍按标准扣费。[^antigravity-custom-agent-4x-billing]
- Default agents and built-in agents were not changed and continue to be billed at the standard rate.[^antigravity-custom-agent-4x-billing]
- 帖文称 1.5.18 实测同一提示词，挂 --agent 扣 1.81% 周额度，默认 Agent 只扣 0.47%。[^antigravity-custom-agent-4x-billing]
- The post says a 1.5.18 test with the same prompt consumed 1.81% of weekly quota with --agent, while the default agent consumed only 0.47%.[^antigravity-custom-agent-4x-billing]
- 官方给出的省钱改法是撤掉 --agent，把自定义指令挪进 AGENTS.md、GEMINI.md 或 Skill，再走默认 Agent。[^antigravity-custom-agent-4x-billing]
- The suggested cost-saving change is to remove --agent, move custom instructions into AGENTS.md, GEMINI.md, or Skills, and run through the default agent.[^antigravity-custom-agent-4x-billing]
- 帖文称另一个后台安检乱扣费 #1886 仍未修复，1.5.19 更新日志也未提及该问题。[^antigravity-custom-agent-4x-billing]
- The post says another billing issue, #1886, remains unresolved and was not mentioned in the 1.5.19 release notes.[^antigravity-custom-agent-4x-billing]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2126635997047783578)。 / Original: [link](https://x.com/lxfater/status/2126635997047783578).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^antigravity-custom-agent-4x-billing]: Antigravity Custom Agent 4x Billing Confirmed Intentional
