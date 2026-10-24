---
title: Home
okf_version: "0.2"
---

# Hezekai Wiki

This is a public wiki compiled from Markdown. Each page is a file under `wiki/`, and the sidebar follows that folder tree.

## Start here

- [Overview](./overview.md) — what the wiki holds and how the pages are arranged.
- [Compiled pages](./concepts/compiled-pages.md) — how a Markdown file becomes a published page.
- [Adding a page](./guides/adding-a-page.md) — where a new page goes so the next build lists it.
- [X digests](./sources/x-digest/index.md) — curated daily briefs from X, with each item linked to the original post.

## Example sources and topics

Scaffold pages for the Source and Topic schema. They are not part of the X digests. The [log](./log.md) records when they were filed.

- [LLM Wiki](./sources/articles/karpathy-llm-wiki.md) — Karpathy's pattern for an LLM-maintained markdown wiki that compounds between immutable raw sources and the reader.
- [Building effective agents](./sources/articles/anthropic-building-effective-agents.md) — Anthropic's December 2024 engineering note that successful systems stay simple and add open-ended agents only when a workflow is not enough.
- [Formal verification with Claude](./sources/articles/anthropic-formal-verification.md) — Anthropic's Frontier Red Team post that Claude, with Theorem Labs, formally verified security properties across more than one hundred real-world open-source libraries in a few weeks.
- [Claude auto mode by default](./sources/articles/claude-auto-mode-default.md) — Claude announces that Pro, Max, and Team sessions on web, desktop, and mobile will default to auto mode, with an automated check blocking risky actions instead of per-step approval.
- [Claude Models on Google Cloud](./sources/articles/claude-models-google-cloud.md) — Claude announces that Anthropic-managed Claude models are generally available on Google Cloud, with Claude Platform features plus Google Cloud IAM, billing, and commitment retirement.
- [Claude Agent Skills to AAIF](./sources/articles/claude-agent-skills-aaif.md) — ClaudeDevs announces donating Agent Skills to the Agentic AI Foundation, the same home as MCP, with 70+ platforms already integrating the standard.
- [LLM-maintained wiki](./topics/llm-maintained-wiki.md) — a compiled markdown wiki that an agent keeps current over immutable sources, instead of re-deriving answers from raw files on every question.
- [Workflows before agents](./topics/workflows-before-agents.md) — prefer a predefined workflow for a known path, and add an open-ended agent only when that path is not enough.
- [LLM formal verification](./topics/llm-formal-verification.md) — large language models can make formal software verification practical on real-world codebases that were previously too large or too costly for expert-only proof work.
- [Agent auto mode](./topics/agent-auto-mode.md) — agent sessions can default to auto permission mode, where an automated check blocks risky actions instead of asking the user to approve each step.
- [Claude on Google Cloud](./topics/claude-on-google-cloud.md) — Anthropic-managed Claude models can run on Google Cloud with Claude Platform features and native Google Cloud IAM, billing, and commitment retirement.
- [Agent Skills open standard](./topics/agent-skills-open-standard.md) — Agent Skills are moving under the Agentic AI Foundation alongside MCP, as a cross-platform standard already adopted by dozens of agent products.

