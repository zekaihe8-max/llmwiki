---
type: Source
title: "Fable 5.2 代码审查实测：high 档位优于 xhigh"
title_en: "Fable 5.2 Code Review Real-World Test: high Effort Beats xhigh"
description: "帖文称 Fable 5.2 在 Claude Code 中以 high 动力审代码效果最优，xhigh 虽更耗 token 却发现更少问题。"
description_en: "The post claims Fable 5.2 reviews code best on Claude Code's high effort setting, while xhigh burns more tokens yet finds fewer issues."
resource: https://x.com/Voxyz_ai/status/2120562255632781662
tags: [fable-5-2, claude-code, code-review, effort-setting, ai-model-comparison]
sources:
  - id: 5bf1e2b41b4c0ed3
    resource: https://x.com/Voxyz_ai/status/2120562255632781662
    title: "Fable 5.2 Code Review Real-World Test: high Effort Beats xhigh"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T08:15:09+08:00
---

# Fable 5.2 代码审查实测：high 档位优于 xhigh

*Fable 5.2 Code Review Real-World Test: high Effort Beats xhigh*

「帖文称」Voxyz_ai 在 X 上发布实测，表示 Fable 5.2 在 Claude Code 中以 `/effort high` 审查代码效果最佳：两个真实 PR 下，high 档位发现 12 个真问题，xhigh 仅发现 10 且多烧 27% 代币，六次审查均无误报；即使为了省钱也不应切换到 Opus 5.5，其 xhigh 档位仅发现 5 个问题。建议在 Claude Code 中一次性设置 `/effort high`，使后续 Fable 5.2 会话均采用 high 档位。[^5bf1e2b41b4c0ed3]

The post by Voxyz_ai on X claims that Fable 5.2 reviews code best on Claude Code's `/effort high` setting: across two real PRs, high found 12 real issues while xhigh found only 10 and burned 27% more tokens, with zero false positives across six reviews. It advises against switching to Opus 5.5 to save money, since Opus 5.5 on xhigh found just 5 issues, and recommends setting `/effort high` once so all new Fable 5.2 sessions use high.[^5bf1e2b41b4c0ed3]

## 摘要 / Summary

- 发帖人为 X 上的 Voxyz_ai（@Voxyz_ai）。[^5bf1e2b41b4c0ed3]
- The poster is Voxyz_ai (@Voxyz_ai) on X.[^5bf1e2b41b4c0ed3]
- 实测两个真实 PR：high 档位发现 12 个真问题，xhigh 仅发现 10 个，且多消耗 27% 代币。[^5bf1e2b41b4c0ed3]
- Testing two real PRs: high found 12 real issues, xhigh found only 10, and burned 27% more tokens.[^5bf1e2b41b4c0ed3]
- 六次审查中零误报。[^5bf1e2b41b4c0ed3]
- Zero false positives across all six reviews.[^5bf1e2b41b4c0ed3]
- 不应为省钱切换到 Opus 5.5，其 xhigh 档位仅发现 5 个问题。[^5bf1e2b41b4c0ed3]
- Do not switch to Opus 5.5 to save money; its xhigh setting found just 5 issues.[^5bf1e2b41b4c0ed3]
- 在 Claude Code 输入 `/effort high` 并一次性设置，此后每个新的 Fable 5.2 会话均使用 high 档位。[^5bf1e2b41b4c0ed3]
- Type `/effort high` in Claude Code and set it once; every new Fable 5.2 session then runs on high.[^5bf1e2b41b4c0ed3]
- 另一条帖文称 Fable 5.2 代币消耗快，但通过特定提示词让其专注规划仍可接受使用。[^5bf1e2b41b4c0ed3]
- Another post says Fable 5.2 burns tokens fast, but remains workable with a prompt directing it to focus on planning.[^5bf1e2b41b4c0ed3]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2120562255632781662)。 / Original: [link](https://x.com/Voxyz_ai/status/2120562255632781662).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^5bf1e2b41b4c0ed3]: Fable 5.2 Code Review Real-World Test: high Effort Beats xhigh
