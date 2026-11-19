---
type: Source
title: "Mitchell · Rex 加上需要人点一下的界面"
title_en: "Mitchell · Rex Adds UI Requiring a Human Click"
description: "Mitchell 宣布 Rex 的 Lua 脚本新增 rex.ui，支持构建需要用户点击交互的自动化，并处理多客户端竞争、忙碌与无用户附加等情况。"
description_en: "Mitchell announces that Rex's Lua scripting adds rex.ui to support automations requiring user click interaction, handling multi-client competition, busy, and no-user-attached cases."
resource: https://x.com/mitchellh/status/2123167959686496690
tags: [rex, lua, ui, user-interaction, automation]
sources:
  - id: mitchell-rex-ui-human-click
    resource: https://x.com/mitchellh/status/2123167959686496690
    title: "Mitchell · Rex Adds UI Requiring a Human Click"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T08:35:23+08:00
---

# Mitchell · Rex 加上需要人点一下的界面

*Mitchell · Rex Adds UI Requiring a Human Click*

帖文称，Mitchell Hashimoto 宣布 Rex 的 Lua 脚本新增 rex.ui 模块，用于构建需要用户交互的自动化；多个附加客户端会同时收到选择提示，先响应的客户端获胜并向其余客户端隐藏提示。若有客户端已显示提示，则返回“忙碌”错误码，交由 Lua 脚本决定休眠、重试或强制执行；若无客户端附加，则返回无用户附加的错误码。[^mitchell-rex-ui-human-click]

The post states that Mitchell Hashimoto announced Rex's Lua scripting gains a rex.ui module for building automations requiring user interaction; all attached clients receive the choice prompt, and the first client to respond wins while the prompt is hidden from the rest. If a client is already showing a prompt, a “busy” error code is returned for the Lua script to handle via sleep, retry, or force; if no clients exist, a no-user-attached error code is returned.[^mitchell-rex-ui-human-click]

## 摘要 / Summary

- Rex 通过 rex.ui 扩展了 Lua 脚本，用于构建需要用户交互的自动化。[^mitchell-rex-ui-human-click]
- Rex expanded its Lua scripting with rex.ui to build automations that require user interaction.[^mitchell-rex-ui-human-click]
- 选择提示会弹出到所有附加客户端，先响应的客户端获胜，并向其余客户端隐藏提示。[^mitchell-rex-ui-human-click]
- The choice prompt pops up on all attached clients; the first client to respond wins and hides the prompt from the rest.[^mitchell-rex-ui-human-click]
- 若有客户端已显示提示，系统返回“忙碌”错误码，由 Lua 脚本决定后续操作，如休眠、重试或强制。[^mitchell-rex-ui-human-click]
- If a client is already showing a prompt, the system returns a “busy” error code and lets the Lua script decide, such as sleep, try again, or force it.[^mitchell-rex-ui-human-click]
- 若不存在客户端，系统返回另一错误码表明未附加用户，Lua 可检测并自行决定处理方式。[^mitchell-rex-ui-human-click]
- If no clients exist, another error code notes that no user is attached, which Lua can detect and handle.[^mitchell-rex-ui-human-click]
- almonk 在 Rex Discord 表示，rex.ui 原语提供在 Rex 内构建需要用户交互的交互式脚本的简单而强大的方法。[^mitchell-rex-ui-human-click]
- almonk posted in the Rex Discord that rex.ui primitives provide simple but powerful methods to build interactive scripts within Rex that require user interaction.[^mitchell-rex-ui-human-click]

## 相关 / Related

- 原文：[链接](https://x.com/mitchellh/status/2123167959686496690)。 / Original: [link](https://x.com/mitchellh/status/2123167959686496690).
- Topic: [一次只问一个问题 / One question at a time](../../topics/one-question-at-a-time.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^mitchell-rex-ui-human-click]: Mitchell · Rex Adds UI Requiring a Human Click
