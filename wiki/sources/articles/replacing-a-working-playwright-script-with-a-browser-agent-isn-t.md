---
type: Source
title: "把好好的 Playwright 脚本改成 Browser Agent，不一定更聪明"
title_en: "Replacing a working Playwright script with a Browser Agent isn't necessarily smarter"
description: "将确定性的 Playwright 自动化脚本替换为浏览器 Agent 可能导致更慢、更耗 Token 且不可靠"
description_en: "Replacing deterministic Playwright automation with a Browser Agent can be slower, more token-intensive, and less reliable"
resource: https://x.com/heydengai/status/2124804398496821254
tags: [playwright, browser-agent, automation, workflows-before-agents]
sources:
  - id: e134800fd1ded473
    resource: https://x.com/heydengai/status/2124804398496821254
    title: "Replacing a working Playwright script with a Browser Agent isn't necessarily smarter"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:49:45+08:00
---

# 把好好的 Playwright 脚本改成 Browser Agent，不一定更聪明

*Replacing a working Playwright script with a Browser Agent isn't necessarily smarter*

「帖文称」有人把原本运行良好的 Playwright 脚本全部改成了 Browser Agent，导致原本几秒钟能完成的操作需要几分钟，还在不断消耗 Token，偶尔因找不到按钮就直接宣布任务完成。[^e134800fd1ded473]

The post claims that someone replaced a working Playwright script entirely with a Browser Agent, turning operations that once took seconds into multi-minute runs that burn tokens continuously, and sometimes the agent falsely declares completion because it cannot find the button.[^e134800fd1ded473]

## 摘要 / Summary

- 原本几秒钟就能完成的操作，改用 Browser Agent 后需要跑几分钟。[^e134800fd1ded473]
- Operations that previously took seconds now take several minutes after switching to a Browser Agent.[^e134800fd1ded473]
- Browser Agent 运行需要不停烧 Token。[^e134800fd1ded473]
- Running a Browser Agent continuously consumes tokens.[^e134800fd1ded473]
- Agent 偶尔因找不到按钮，却直接宣布任务完成。[^e134800fd1ded473]
- The agent occasionally declares the task complete even though it cannot find the button.[^e134800fd1ded473]
- 该帖子由 @heydengai 于 2026 年 11 月 23 日 9:57 发布，获得 467 次浏览。[^e134800fd1ded473]
- The post was published by @heydengai at 9:57 on Nov 23, 2026, and received 467 views.[^e134800fd1ded473]

## 相关 / Related

- 原文：[链接](https://x.com/heydengai/status/2124804398496821254)。 / Original: [link](https://x.com/heydengai/status/2124804398496821254).
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^e134800fd1ded473]: Replacing a working Playwright script with a Browser Agent isn't necessarily smarter
