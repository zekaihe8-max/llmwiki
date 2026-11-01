---
type: Source
title: "飞书驱动无人值守工作流"
title_en: "Feishu-Driven Unattended AI Relay Workflow"
description: "飞书发一句话，15 个 AI 接力跑完 14 小时无人值守任务，靠任务书与脚本保证交接。"
description_en: "One Feishu message triggers 15 AI agents to run a 14-hour unattended relay, guaranteed by task books and scripts."
resource: https://x.com/0xlangeai/status/2116848448775622866
tags: [feishu, ai-workflow, multi-agent, automation]
sources:
  - id: 103297a8719df664
    resource: https://x.com/0xlangeai/status/2116848448775622866
    title: "Feishu-Driven Unattended AI Relay Workflow"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:11:23+08:00
---

# 飞书驱动无人值守工作流

*Feishu-Driven Unattended AI Relay Workflow*

「帖文称」蓝哥AI转发 JKL 神思记的飞书驱动 AI 工作流：在手机飞书下一句指令，约 14 小时无人值守，接力 15 棒、启动 19 次，中间断棒自动重派。链路为手机飞书当遥控器、总控写任务书并审核、启动器开独立 git 工作区派活、接力脚本按 DONE/依赖/显卡锁一棒接一棒、看板留痕再回手机；人只跟总控说话，工人互不私聊。帖文强调，任务书是最值钱的一步，原话一字不改再写成可执行要求，写错一句后面全白干，能用脚本保证的交接、续跑和锁就别指望 AI 自觉。[^103297a8719df664]

The post describes a Feishu-driven AI workflow shared by JKL and reposted by 蓝哥AI: a single instruction in mobile Feishu triggers about 14 hours of unattended operation, 15 relay legs and 19 starts, with automatic re-dispatch if a leg breaks. The chain uses mobile Feishu as a remote, a controller that writes and audits the task book, a launcher that opens independent git workspaces, relay scripts that hand off based on DONE, dependencies, and GPU locks, and a kanban that leaves traces before returning to the phone; people only talk to the controller, and workers do not private-chat. The post stresses that the task book is the most valuable step—original wording unchanged but converted into executable requirements—and that scripting handover, resumption, and locks is more reliable than expecting AI to act consciously.[^103297a8719df664]

## 摘要 / Summary

- 手机飞书只当遥控器，人只跟总控说话，工人互不私聊。 / Mobile Feishu serves only as a remote; people talk only to the controller, and workers do not private-chat.[^103297a8719df664]
- 约 14 小时无人值守，接力 15 棒、启动 19 次，中间断了一棒也会自动重派接着做。 / About 14 hours unattended, 15 relay legs and 19 starts, with automatic re-dispatch if a leg breaks.[^103297a8719df664]
- 启动器开独立 git 工作区派活，接力脚本按 DONE / 依赖 / 显卡锁一棒接一棒，看板留痕再回手机。 / The launcher opens independent git workspaces to dispatch tasks; relay scripts hand off based on DONE, dependencies, and GPU locks, while the kanban leaves traces before returning to the phone.[^103297a8719df664]
- 任务书要求原话一字不改，再写成可执行要求；写错一句，后面全白干。 / The task book must preserve original wording verbatim and then convert it into executable requirements; one wrong sentence means everything downstream is wasted.[^103297a8719df664]
- 能用脚本保证的交接、续跑和锁，就别指望 AI 自觉。 / Do not count on AI to act consciously for handover, resumption, and locks that scripts can guarantee.[^103297a8719df664]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2116848448775622866)。 / Original: [link](https://x.com/0xlangeai/status/2116848448775622866).
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)

[^103297a8719df664]: Feishu-Driven Unattended AI Relay Workflow
