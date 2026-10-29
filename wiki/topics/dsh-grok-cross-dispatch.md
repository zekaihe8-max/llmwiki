---
type: Topic
title: DSH 与 Grok Bot 社区互派
title_en: Community bridges for DSH↔Grok Bot cross-dispatch
description: 社区可用编排器、CLI 与 webhook 在 DeepSeek Harness 与 Grok Bot 之间互相派活；把 Grok Bot 市场模板搬进 DSH 复用预设与 Skills，不算真正连接；尚缺原生 DSH→Grok 插件，生态仍不成熟。
description_en: Community orchestrators, CLIs, and webhooks can dispatch work between DeepSeek Harness and Grok Bot; porting Grok Bot marketplace templates into DSH to reuse presets and Skills is not a true connection; a native DSH→Grok plugin is still missing and the ecosystem remains immature.
tags: [dsh, deepseek, grok-bot, harness, orchestration, plugins, community, cross-dispatch]
sources:
  - id: xiaomovps-dsh-grok-cross-dispatch
    resource: https://x.com/xiaomovps/status/2115362688977232228
    title: Xiaomo on DSH↔Grok Bot cross-dispatch bridges
  - id: xiaomovps-dsh-claude-codex-subagent-plugins
    resource: https://x.com/xiaomovps/status/2115640890417168388
    title: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents
  - id: cgnot996-any-agent-command-grok-bot
    resource: https://x.com/cgnot996/status/2115722202712789476
    title: cgnot996 on any agent commanding Grok Bot
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:08:00+08:00
---

# DSH 与 Grok Bot 社区互派

*Community bridges for DSH↔Grok Bot cross-dispatch*

DeepSeek Harness（DSH）与 Grok Bot 之间尚无官方原生互调插件时，社区可用编排器让 Grok 负责任务理解、拆分与验收、DSH 做简单代码与文件活，或用 CLI（需本机桌面端登录）让 DSH 把活派给 Grok，也可用 webhook；把 Grok Bot 市场模板批量转成 DSH 插件只是玩法搬迁，不算真正连接。缺口是直接的 DSH→Grok 插件，社区仍不完善。[^xiaomovps-dsh-grok-cross-dispatch]

While DeepSeek Harness (DSH) and Grok Bot still lack an official native cross-call plugin, the community can use an orchestrator so Grok owns task understanding, splitting, and acceptance while DSH does simple code and file work, or a CLI (with local desktop login) so DSH dispatches to Grok, or webhooks; batch-converting Grok Bot marketplace templates into DSH plugins only ports playbooks and is not a true connection. The gap is a direct DSH→Grok plugin, and the community remains immature.[^xiaomovps-dsh-grok-cross-dispatch]

## 综合分析 / Synthesis

[小墨谈 DSH 与 Grok Bot 互通互派](../sources/articles/xiaomovps-dsh-grok-cross-dispatch.md) 给出三条 GitHub 路径并划清边界：`grokbot-dsh-orchestrator-vn`（[github.com/diginno-net/grokbot-dsh-orchestrator-vn](https://github.com/diginno-net/grokbot-dsh-orchestrator-vn)）走 Grok→DSH，并可配 OpenCode Go + DeepSeek Flash 降成本；`grok-bot-cli`（[github.com/ScriptedAlchemy/grok-bot-cli](https://github.com/ScriptedAlchemy/grok-bot-cli)）走 DSH→Grok，前提是本机安装并登录桌面端；`grok-bots-for-deepseek-harness`（[github.com/brokep/grok-bots-for-deepseek-harness](https://github.com/brokep/grok-bots-for-deepseek-harness)）把约 90 个市场模板变成 DSH 插件——作者写明「不算真正的连接」。作者想要的直接 DSH→Grok 插件仍缺，webhook 可作替代，并称社区不完善、自己或会写对接以用足额度。[^xiaomovps-dsh-grok-cross-dispatch] 原帖 <https://x.com/xiaomovps/status/2115362688977232228>。耐久主张是 **跨产品互派的社区胶水形态与「模板搬迁 ≠ 连接」**，不是某一仓库的长期维护保证或官方规格。

[Xiaomo on DSH↔Grok Bot cross-dispatch bridges](../sources/articles/xiaomovps-dsh-grok-cross-dispatch.md) lists three GitHub paths and draws the bound: `grokbot-dsh-orchestrator-vn` ([github.com/diginno-net/grokbot-dsh-orchestrator-vn](https://github.com/diginno-net/grokbot-dsh-orchestrator-vn)) is Grok→DSH and can pair OpenCode Go + DeepSeek Flash for cost; `grok-bot-cli` ([github.com/ScriptedAlchemy/grok-bot-cli](https://github.com/ScriptedAlchemy/grok-bot-cli)) is DSH→Grok if the local desktop app is installed and logged in; `grok-bots-for-deepseek-harness` ([github.com/brokep/grok-bots-for-deepseek-harness](https://github.com/brokep/grok-bots-for-deepseek-harness)) turns about 90 marketplace templates into DSH plugins—explicitly “not a true connection.” The direct DSH→Grok plugin he wants is still missing, webhooks are a fallback, and he calls the community immature and may write a bridge to use quotas more fully.[^xiaomovps-dsh-grok-cross-dispatch] Post: <https://x.com/xiaomovps/status/2115362688977232228>. The durable claim is **community glue shapes for cross-product dispatch and “template port ≠ connection”**, not long-term maintenance of any one repo or an official spec.

与 [个人 Agent 当包工头调度编程 Agent](./personal-agent-foreman-over-coding-agents.md) 同属「谁调度谁干活」：那页以 Grok 对 Codex / Claude Code 的包工头角色与订阅分层为主；本页把 **DSH 收进可被 Grok 调度的干活层**，并补上反向 DSH→Grok、模板搬迁与社区缺口。与 [多 Harness 路由基建 ≠ 个人助手派活](./multi-harness-router-vs-personal-dispatch.md) 相邻但不同层：那页划开同 API 换底座的产品基建与个人助手日常派活；本页是个人产品层上的社区互派胶水，不是 HarnessRouter 一类同 API 路由。与 [个人 Agent 对外分享与 Bot 互聊](./personal-agent-share-and-interbot-chat.md) 都谈 Bot 互操作，但那页是网关 ID、关注/好友与社交图；本页是任务派活与插件/CLI 桥。与 [精简核心与社区扩展](./minimal-core-community-extensions.md) 都触及社区补缺，但那页管精简核心 vs「万物皆插件」宿主路线与稳定性代价；本页管跨 DSH / Grok 的互派形态。

Shares “who dispatches vs who works” with [Personal agent as foreman over coding agents](./personal-agent-foreman-over-coding-agents.md): that page centers Grok’s foreman role over Codex / Claude Code and subscription layering; this page **puts DSH on the worker layer Grok can schedule** and adds reverse DSH→Grok, template ports, and community gaps. Neighbors [Multi-harness routing infra ≠ personal-assistant dispatch](./multi-harness-router-vs-personal-dispatch.md) on a different layer: that page separates same-API base-swap product infra from personal-assistant day-to-day dispatch; this page is community cross-dispatch glue on the personal-product layer, not HarnessRouter-style same-API routing. Shares bot interoperability with [Personal-agent public sharing and bot-to-bot chat](./personal-agent-share-and-interbot-chat.md), but that page is gateway IDs, follow/friend, and the social graph; this page is task dispatch and plugin/CLI bridges. Shares community gap-filling with [Minimal core and community extensions](./minimal-core-community-extensions.md), but that page owns slim-core vs “everything as a plugin” host paths and stability cost; this page owns DSH↔Grok cross-dispatch shapes.

[小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md) 补 **官方实验性** 路径：DSH 经插件页安装 Codex / Claude Code 智能体插件、登录对应 CLI 后即可派活，不必自写对接——与 Grok↔DSH 社区胶水不同轴；**直接 DSH→Grok 插件**仍可与早帖缺口并存，官方先打通 DSH→其他 Coding Agent。[^xiaomovps-dsh-claude-codex-subagent-plugins] 原帖 <https://x.com/xiaomovps/status/2115640890417168388>。

[Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md) adds an **official experimental** path: install Codex / Claude Code agent plugins from DSH’s plugin page and dispatch after CLI login—no custom bridge—on a different axis from Grok↔DSH community glue; the **direct DSH→Grok plugin** gap from the earlier post can still stand while official work lands on DSH→other coding agents first.[^xiaomovps-dsh-claude-codex-subagent-plugins] Post: <https://x.com/xiaomovps/status/2115640890417168388>.

[铁柱AGI谈任意 Agent 可指挥 Grok Bot](../sources/articles/cgnot996-any-agent-command-grok-bot.md) 补 **Coding Agent / Codex→Grok Bot** 社区路径（非 DSH 专属）：[@cgnot996](https://x.com/cgnot996) 以一个 skill + CLI 让 Codex、Claude Code 列出账号下 Grok Bot、逐 Bot 派活并回收，并写多 Bot 跨账号互派与 Claude/GPT 当总指挥——与 [小墨谈 DSH 与 Grok Bot 互通互派](../sources/articles/xiaomovps-dsh-grok-cross-dispatch.md) 里的 `grok-bot-cli`（DSH 调 CLI、需本机桌面端）同属 **外部 harness 经 CLI/Skill 调 Grok**，但接线对象是 Codex / Claude Code 且作者称 Grok 侧已可被「别的 Agent 指挥」；答疑群内测，开源未定。[^cgnot996-any-agent-command-grok-bot] 原帖 <https://x.com/cgnot996/status/2115722202712789476>。耐久主张仍是社区胶水形态，不是官方互调规格。

[cgnot996 on any agent commanding Grok Bot](../sources/articles/cgnot996-any-agent-command-grok-bot.md) adds a **coding-agent / Codex→Grok Bot** community path (not DSH-only): [@cgnot996](https://x.com/cgnot996) ships one skill plus CLI so Codex and Claude Code list Grok Bots under the account, dispatch per bot, and collect results, plus multi-bot cross-account dispatch and Claude/GPT as orchestrator—same **external harness via CLI/Skill calling Grok** family as `grok-bot-cli` in [Xiaomo on DSH↔Grok Bot cross-dispatch bridges](../sources/articles/xiaomovps-dsh-grok-cross-dispatch.md) (DSH invokes CLI with local desktop login), but wired for Codex / Claude Code and framed as Grok now “commandable by other agents”; private beta in a Q&A group, open source TBD.[^cgnot996-any-agent-command-grok-bot] Post: <https://x.com/cgnot996/status/2115722202712789476>. Still a community-glue shape, not an official cross-call spec.

## 矛盾与变化 / Contradictions

[小墨谈 DSH 与 Grok Bot 互通互派](../sources/articles/xiaomovps-dsh-grok-cross-dispatch.md) 时作者仍称缺直接 DSH→Grok 插件、社区不完善。[^xiaomovps-dsh-grok-cross-dispatch] 后续 [小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md) 显示 DSH 已有官方实验性插件可把 Claude Code / Codex 当子 Agent 调用——**互派生态在 DSH→Coding Agent 轴上前进**，不等于 DSH→Grok 缺口已填；两帖可并存。[^xiaomovps-dsh-claude-codex-subagent-plugins]

When [Xiaomo on DSH↔Grok Bot cross-dispatch bridges](../sources/articles/xiaomovps-dsh-grok-cross-dispatch.md) was filed, he still said a direct DSH→Grok plugin was missing and the community immature.[^xiaomovps-dsh-grok-cross-dispatch] Later [Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md) shows official experimental plugins can call Claude Code / Codex as sub-agents—**cross-dispatch moves on the DSH→coding-agent axis**, not the same as closing the DSH→Grok gap; both posts can stand.[^xiaomovps-dsh-claude-codex-subagent-plugins]

## 相关 / Related

- Source: [小墨谈 DSH 与 Grok Bot 互通互派](../sources/articles/xiaomovps-dsh-grok-cross-dispatch.md)
- Source: [小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md)
- Source: [铁柱AGI谈任意 Agent 可指挥 Grok Bot](../sources/articles/cgnot996-any-agent-command-grok-bot.md)
- Topic: [个人 Agent 当包工头调度编程 Agent](./personal-agent-foreman-over-coding-agents.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活](./multi-harness-router-vs-personal-dispatch.md)
- Topic: [个人 Agent 对外分享与 Bot 互聊](./personal-agent-share-and-interbot-chat.md)
- Topic: [精简核心与社区扩展](./minimal-core-community-extensions.md)

[^xiaomovps-dsh-grok-cross-dispatch]: Xiaomo on DSH↔Grok Bot cross-dispatch bridges
[^xiaomovps-dsh-claude-codex-subagent-plugins]: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents
[^cgnot996-any-agent-command-grok-bot]: cgnot996 on any agent commanding Grok Bot
