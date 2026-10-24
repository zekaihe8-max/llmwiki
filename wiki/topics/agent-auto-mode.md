---
type: Topic
title: Agent auto mode
description: Agent sessions can default to auto permission mode, where an automated check blocks risky actions instead of asking the user to approve each step.
tags: [agents, permissions, auto-mode, claude]
sources:
  - id: claude-auto-mode-default
    resource: https://x.com/claudeai/status/2113360845409583307
    title: Claude auto mode by default
generated:
  by: auto/composer
  at: 2026-10-24T14:53:16+08:00
---

# Agent auto mode

For agentic product sessions, the default permission path can be auto mode: the system proceeds without per-step human approval, and an automated check is what blocks risky actions. Manual approval remains available as an opt-in.[^claude-auto-mode-default]

## Synthesis

[Claude auto mode by default](../sources/articles/claude-auto-mode-default.md) states that Claude web, desktop, and mobile sessions on Pro, Max, and Team plans will run in auto mode by default, with an automated check blocking risky actions and a switch back to manual at any time.[^claude-auto-mode-default] The same fetched post also carries a Claude Code note that auto mode became the default permission mode there for those plans, with a separate classifier reviewing commands and actions and, in testing, catching more dangerous commands than manual approval did.[^claude-auto-mode-default]

## Contradictions

None yet.

## Related

- Source: [Claude auto mode by default](../sources/articles/claude-auto-mode-default.md)

[^claude-auto-mode-default]: Claude auto mode by default
