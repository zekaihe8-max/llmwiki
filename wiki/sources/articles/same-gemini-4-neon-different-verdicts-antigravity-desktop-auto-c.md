---
type: Source
title: "同一款 Gemini 4 Neon 评价两极，帖文认为锅在 Antigravity 桌面端自动压缩"
title_en: "Same Gemini 4 Neon, Different Verdicts: Antigravity Desktop Auto-Compaction Takes the Blame"
description: "帖文称 Gemini 4 Neon 评价分化主要因 Antigravity 桌面端自动压缩阈值过低，并给出 CLI 三项配置建议。"
description_en: "The post attributes Gemini 4 Neon's mixed reception to Antigravity desktop's low auto-compaction threshold and suggests three CLI configuration changes."
resource: https://x.com/lxfater/status/2126529577371504703
tags: [gemini-4-neon, antigravity, context-compaction, cli-configuration, coding-agent]
sources:
  - id: e48be06cd3ef3c5e
    resource: https://x.com/lxfater/status/2126529577371504703
    title: "Same Gemini 4 Neon, Different Verdicts: Antigravity Desktop Auto-Compaction Takes the Blame"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T19:59:04+08:00
---

# 同一款 Gemini 4 Neon 评价两极，帖文认为锅在 Antigravity 桌面端自动压缩

*Same Gemini 4 Neon, Different Verdicts: Antigravity Desktop Auto-Compaction Takes the Blame*

帖文称，同一款 Gemini 4 Neon 在不同人手里评价两极，作者认为问题多半出在 Antigravity 桌面端上下文自动压缩阈值过低：对话稍长就触发压缩，先前看过的代码和改过的文件被压丢，模型因此瞎编。[^e48be06cd3ef3c5e]

The post says the same Gemini 4 Neon model draws both praise and accusations of fabrication, and the author attributes the issue mainly to Antigravity desktop's overly low context auto-compaction threshold, which can drop earlier code and file changes during longer chats.[^e48be06cd3ef3c5e]

## 摘要 / Summary

- 帖文称，Antigravity 桌面端在对话稍长时会触发上下文自动压缩，导致此前看过的代码和修改过的文件被压丢，模型缺少上下文后可能瞎编。[^e48be06cd3ef3c5e]
- The post says Antigravity desktop triggers context auto-compaction once a conversation gets a bit long, dropping previously seen code and modified files, leaving the model to fabricate without context.[^e48be06cd3ef3c5e]
- 帖文称，Antigravity CLI 今晨连发 6 版更新到 v1.5.18，包含 34 项改进和 65 个修复，并放开几个核心配置。[^e48be06cd3ef3c5e]
- The post says Antigravity CLI shipped six releases this morning up to v1.5.18, with 34 improvements and 65 fixes, and exposed several core configurations.[^e48be06cd3ef3c5e]
- 可通过环境变量 AGY_CLI_AUTO_COMPACT_OVERRIDE 设为 80% 或 800K 来手动拉高自动压缩阈值，并用 /context 查看阈值是否生效。[^e48be06cd3ef3c5e]
- The auto-compaction threshold can be raised manually by setting AGY_CLI_AUTO_COMPACT_OVERRIDE to 80% or 800K, and /context can show whether the threshold took effect.[^e48be06cd3ef3c5e]
- 在 /model 的 Orchestrator 中可分别选择计划和执行模型并调整思考强度；两边选成相同模型会跳过两步编排，直接单模型执行。[^e48be06cd3ef3c5e]
- In /model's Orchestrator, users can separately choose planning and execution models and adjust thinking strength; selecting the same model on both sides skips the two-step orchestration and runs a single model directly.[^e48be06cd3ef3c5e]
- 新版 CLI 支持 /thinking 实时查看模型思考，长任务超过一分钟时 /usage 会定时刷新额度和恢复倒计时。[^e48be06cd3ef3c5e]
- The new CLI supports /thinking for real-time visibility into model reasoning, and for tasks longer than a minute /usage periodically refreshes quota and recovery countdown.[^e48be06cd3ef3c5e]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2126529577371504703)。 / Original: [link](https://x.com/lxfater/status/2126529577371504703).
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)

[^e48be06cd3ef3c5e]: Same Gemini 4 Neon, Different Verdicts: Antigravity Desktop Auto-Compaction Takes the Blame
