---
type: Source
title: "Claude Code 省额度修复"
title_en: "Claude Code Quota Saving Fix"
description: "Anthropic 修复 Claude Code 后台子 Agent 因重复读取对话而浪费额度的问题，单次状态更新成本降约 99%。"
description_en: "Anthropic fixed a Claude Code issue where background sub-agents wasted quota by re-reading conversations, cutting per-update cost by about 99%."
resource: https://x.com/0xLogicrw/status/2118298492578021660
tags: [claude-code, subagent, token-saving, quota]
sources:
  - id: claude-code-subagent-quota-fix
    resource: https://x.com/0xLogicrw/status/2118298492578021660
    title: "Claude Code Quota Saving Fix"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-05T20:14:54+08:00
---

# Claude Code 省额度修复

*Claude Code Quota Saving Fix*

「帖文称」Anthropic 修复了 Claude Code 一项浪费额度的问题：后台子 Agent 约每 30 秒更新一次状态，此前每次更新都要重新读取整个对话记录，导致任务运行越久重复消耗越多 Token。有开发者发现，团队一周内约 16.4% 的模型费用花在了这些状态更新上。现在 Claude Code 改用更便宜的 Haiku 5.5，根据简短笔记生成状态提示，不再反复读取完整对话。官方称单次状态更新成本降低约 99%，使用后台子 Agent 的会话整体节省约 5% 额度，相当于同样额度能多发约 6% 的请求。这项优化仅针对 Claude Code 命令行版本，不涉及桌面应用，需更新至 v2.1.316 或更高，目前已向大部分 Pro、Max、Ultra 用户及全部 Team、Enterprise 用户开放。[^claude-code-subagent-quota-fix]

The post says Anthropic fixed a quota-wasting issue in Claude Code: background sub-agents update status about every 30 seconds, and previously each update re-read the whole conversation, causing heavier repeated token consumption the longer a task ran. One developer reported that about 16.4% of the team's weekly model spend went to these status updates. Claude Code now uses cheaper Haiku 5.5 to generate status prompts from short notes instead of re-reading the full conversation. Anthropic claims per-update cost is down about 99%, sessions using background sub-agents save about 5% of quota overall, equivalent to roughly 6% more requests for the same quota. The optimization applies only to the Claude Code CLI, not the desktop app, requires v2.1.316 or higher, and is open to most Pro, Max, and Ultra users and all Team and Enterprise users.[^claude-code-subagent-quota-fix]

## 摘要 / Summary

- 后台子 Agent 约每 30 秒更新一次状态，此前每次更新都要重新读取整个对话记录。 / Background sub-agents update status about every 30 seconds, and previously each update re-read the whole conversation.[^claude-code-subagent-quota-fix]
- 有开发者发现，团队一周内约 16.4% 的模型费用花在了这些状态更新上。 / One developer reported that roughly 16.4% of the team's weekly model spend went to status updates.[^claude-code-subagent-quota-fix]
- 现改用 Haiku 5.5 根据简短笔记生成状态提示，不再反复读取完整对话。 / It now uses Haiku 5.5 to generate status prompts from short notes instead of repeatedly reading the full conversation.[^claude-code-subagent-quota-fix]
- 官方称单次状态更新成本降低约 99%，后台子 Agent 会话整体节省约 5% 额度。 / Anthropic claims per-update cost is down about 99%, with sessions using background sub-agents saving about 5% of quota overall.[^claude-code-subagent-quota-fix]
- 仅针对 Claude Code 命令行版本，不涉及桌面应用，需更新至 v2.1.316 或更高。 / Applies only to the Claude Code CLI, not the desktop app, and requires v2.1.316 or higher.[^claude-code-subagent-quota-fix]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2118298492578021660)。 / Original: [link](https://x.com/0xLogicrw/status/2118298492578021660).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^claude-code-subagent-quota-fix]: Claude Code Quota Saving Fix
