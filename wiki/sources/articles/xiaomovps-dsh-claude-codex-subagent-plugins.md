---
type: Source
title: 小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent
title_en: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents
description: 小墨实测 DeepSeek Harness 实验性官方插件：在插件页安装并启用 Codex / Claude Code 智能体插件、事先装好并登录对应 CLI 后，即可把任务派给它们当子 Agent，无需自写对接；最新 Codex CLI 与 GPT-6.1-SOL 仍有兼容失败，可改配置或回退版本，作者还希望官方出 Pi Agent 插件。
description_en: Xiaomo hands-on tests DeepSeek Harness experimental first-party plugins—install and enable the Codex / Claude Code agent plugins from the plugin page, pre-install and log into the matching CLIs, then dispatch tasks as sub-agents without a custom bridge; latest Codex CLI with GPT-6.1-SOL still fails on compatibility and may need config tweaks or version rollback, and he hopes for an official Pi Agent plugin next.
resource: https://x.com/xiaomovps/status/2115640890417168388
tags: [dsh, deepseek, harness, claude-code, codex, subagents, plugins, xiaomovps, experimental]
sources:
  - id: xiaomovps-dsh-claude-codex-subagent-plugins
    resource: https://x.com/xiaomovps/status/2115640890417168388
    title: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents
    author: human:xiaomovps
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:36:00+08:00
date: 2026-10-29
---

# 小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent

*Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）称 DeepSeek Harness（DSH）现已可直接调用 Claude Code 与 Codex 作为自己的子 Agent 执行任务，而且是官方自带实验性插件，不必自己开发对接方案。他实测流程很简单：在 DSH 插件页打开实验性插件，向下滑找到 Codex 智能体与 Claude Code 智能体，安装并启用；使用前先把对应 CLI 装好并登录，之后即可让 DSH 调用 Claude Code 或 Codex 处理被指派的任务。实测仍有兼容问题——他用最新版 Codex CLI、模型 GPT-6.1-SOL 时调用一直失败；在社区与 GitHub 上找到类似反馈，问题可能出在 DSH 插件与新版 Codex 模型之间；目前可尝试改配置文件或回退到兼容版本。整体他觉得不错，因为可直接让 DSH 调其他 Coding Agent；但仍是实验性功能，兼容性待官方后续优化。他还希望官方以后出调用 Pi Agent 的插件，以便把任务指派给 Pi，并能把几个 Agent 组合使用。[^xiaomovps-dsh-claude-codex-subagent-plugins] 原帖 <https://x.com/xiaomovps/status/2115640890417168388>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) says DeepSeek Harness (DSH) can now call Claude Code and Codex directly as its own sub-agents to execute tasks, via official built-in experimental plugins rather than a DIY integration. His hands-on flow: open experimental plugins on the DSH plugin page, scroll to the Codex agent and Claude Code agent entries, install and enable them; before use, install and log into the matching CLIs, then DSH can invoke Claude Code or Codex for assigned work. He still hit compatibility issues—latest Codex CLI with model GPT-6.1-SOL kept failing; similar reports on GitHub suggest friction between the DSH plugin and newer Codex models; config edits or rolling back to a compatible version may help. Overall he likes not having to wire other coding agents himself, but it remains experimental and compatibility needs official follow-up. He also wants an official Pi Agent plugin later so he can dispatch to Pi and combine several agents.[^xiaomovps-dsh-claude-codex-subagent-plugins] Post: <https://x.com/xiaomovps/status/2115640890417168388>.

## 摘要 / Summary

- 官方路径：实验性插件页提供 Codex / Claude Code 智能体插件，安装启用后 DSH 可把任务派给它们当子 Agent，无需自写对接。[^xiaomovps-dsh-claude-codex-subagent-plugins]
- Official path: experimental plugin entries for Codex / Claude Code agents let DSH dispatch tasks as sub-agents after install/enable—no custom bridge required.[^xiaomovps-dsh-claude-codex-subagent-plugins]
- 前置条件：使用前需安装并登录对应 CLI，之后 DSH 才能调用。[^xiaomovps-dsh-claude-codex-subagent-plugins]
- Prerequisite: install and log into the matching CLI before DSH can call them.[^xiaomovps-dsh-claude-codex-subagent-plugins]
- 兼容风险：作者用最新 Codex CLI + GPT-6.1-SOL 反复失败；社区/GitHub 有类似反馈，疑为 DSH 插件与新版 Codex 模型不兼容；可试改配置或回退版本。[^xiaomovps-dsh-claude-codex-subagent-plugins]
- Compatibility risk: latest Codex CLI + GPT-6.1-SOL failed repeatedly for the author; community/GitHub echo the issue, likely DSH plugin vs newer Codex models; config tweaks or version rollback may help.[^xiaomovps-dsh-claude-codex-subagent-plugins]
- 展望：功能仍实验性；作者希望官方后续出 Pi Agent 插件以便组合多 Agent。[^xiaomovps-dsh-claude-codex-subagent-plugins]
- Outlook: still experimental; he hopes for an official Pi Agent plugin to combine multiple agents.[^xiaomovps-dsh-claude-codex-subagent-plugins]

## 相关 / Related

- Source: [小墨谈 DSH 0.2.1：自研搜索与 Agent 写插件](./xiaomovps-dsh-021-search-agent-plugins.md)
- Source: [小墨谈 DSH 与 Grok Bot 互通互派](./xiaomovps-dsh-grok-cross-dispatch.md)
- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)
- Topic: [个人 Agent 当包工头调度编程 Agent](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [DSH 与 Grok Bot 社区互派](../../topics/dsh-grok-cross-dispatch.md)
- Topic: [精简核心与社区扩展](../../topics/minimal-core-community-extensions.md)

[^xiaomovps-dsh-claude-codex-subagent-plugins]: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents
