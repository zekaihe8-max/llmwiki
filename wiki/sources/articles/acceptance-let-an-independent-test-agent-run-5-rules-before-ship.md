---
type: Source
title: "验收：发布 vibe 代码前，让独立测试 Agent 按 5 条规则验收"
title_en: "Acceptance: Let an independent test agent run 5 rules before shipping vibe-coded code"
description: "Voxyz_ai 引用 Claude Code 建议，发布 vibe 代码前应由独立测试 Agent 验收，并提及 TestSprite 4.0 作为独立检查工具上线。"
description_en: "Voxyz_ai cites Claude Code advice that vibe-coded sites should be acceptance-tested by an independent test agent before shipping, and mentions TestSprite 4.0 as a live independent check."
resource: https://x.com/Voxyz_ai/status/2123504574476468492
tags: [agents, testing, vibe-coding, claude-code]
sources:
  - id: voxyz-ai-claude-code-independent-testing
    resource: https://x.com/Voxyz_ai/status/2123504574476468492
    title: "Acceptance: Let an independent test agent run 5 rules before shipping vibe-coded code"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T08:24:28+08:00
---

# 验收：发布 vibe 代码前，让独立测试 Agent 按 5 条规则验收

*Acceptance: Let an independent test agent run 5 rules before shipping vibe-coded code*

帖文称，Voxyz_ai 建议在发布 vibe 编码的网站前，由未参与编写代码的独立测试 Agent 按 5 条规则进行验收，包括让每个 PR 在真实浏览器中运行、失败检查附带录制与断点步骤及预期对比、通过的测试需保留并在每次变更后完整重跑；帖文还引用 Claude Code 团队观点，即能修改判定标准的检查就是坏检查，并介绍 TestSprite 4.0 作为独立检查工具上线。[^voxyz-ai-claude-code-independent-testing]

The post says Voxyz_ai advises that, before shipping a vibe-coded site, an independent test agent that did not write the code should acceptance-test it against five rules, including running every PR in a real browser, attaching recordings, breaking steps, and expected-vs-actual to failures, and rerunning the full passing suite after every change; it also cites the Claude Code team's view that any check the change can modify is broken, and presents TestSprite 4.0 as a live independent check.[^voxyz-ai-claude-code-independent-testing]

## 摘要 / Summary

- Voxyz_ai 发布 Claude Code 建议：发布 vibe 代码前，由独立测试 Agent 按 5 条规则验收。[^voxyz-ai-claude-code-independent-testing]
- Voxyz_ai posted Claude Code advice: before shipping vibe-coded code, an independent test agent should acceptance-test it against 5 rules.[^voxyz-ai-claude-code-independent-testing]
- 测试应由未写代码的 Agent 编写，不能由写代码的同一 Agent 编写测试。[^voxyz-ai-claude-code-independent-testing]
- Tests should be written by an agent that did not write the code, not by the same agent that wrote the code.[^voxyz-ai-claude-code-independent-testing]
- 每个 PR 需在真实浏览器中运行；失败检查须附带录制、断点步骤及预期与实际结果。[^voxyz-ai-claude-code-independent-testing]
- Every PR must run in a real browser; failing checks must include a recording, the breaking step, and expected vs actual results.[^voxyz-ai-claude-code-independent-testing]
- 通过的测试需保留，并在每次变更后完整重跑整套测试。[^voxyz-ai-claude-code-independent-testing]
- Passing tests must be kept and the full suite rerun after every change.[^voxyz-ai-claude-code-independent-testing]
- 帖文引用 Claude Code 团队观点：若变更能修改判定它的检查，则该检查已失效。[^voxyz-ai-claude-code-independent-testing]
- The post cites the Claude Code team: if a change can modify the check that judges it, the check is broken.[^voxyz-ai-claude-code-independent-testing]
- TestSprite 4.0 已上线，提供免费方案，Starter 首月免费，并号称可在 4 分钟内出结果并附失败录制与原因。[^voxyz-ai-claude-code-independent-testing]
- TestSprite 4.0 is live with a free plan and first month of Starter free, claiming results in 4 minutes with failure recordings and causes.[^voxyz-ai-claude-code-independent-testing]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2123504574476468492)。 / Original: [link](https://x.com/Voxyz_ai/status/2123504574476468492).
- Topic: [驻场第三方评估 / Embedded third-party evals](../../topics/embedded-third-party-evals.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Vibe Coding 的记忆悖论 / Vibe-coding memory paradox](../../topics/vibe-coding-memory-paradox.md)

[^voxyz-ai-claude-code-independent-testing]: Acceptance: Let an independent test agent run 5 rules before shipping vibe-coded code
