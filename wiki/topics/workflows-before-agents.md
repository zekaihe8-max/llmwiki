---
type: Topic
title: Workflows before agents
description: Prefer a predefined workflow for a known path, and add an open-ended agent only when that path is not enough.
tags: [agents, workflows]
sources:
  - id: building-effective-agents
    resource: https://www.anthropic.com/engineering/building-effective-agents
    title: Building effective agents
  - id: karpathy-llm-wiki
    resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
    title: LLM Wiki
  - id: mihail-eric-bcherny-stanford
    resource: https://x.com/mihail_eric/status/2113277483701395508
    title: Mihail Eric on Boris Cherny at Stanford
  - id: shao-meng-bcherny-stanford
    resource: https://x.com/shao__meng/status/2113291579750551931
    title: Meng Shao on Boris Cherny at Stanford
generated:
  by: auto/composer
  at: 2026-10-24T15:30:38+08:00
---


# Workflows before agents

Anthropic distinguishes workflows, where the path is predefined, from agents, where the model chooses the path, and says to add the latter only when a simpler system falls short.[^building-effective-agents]

## Synthesis

For this wiki, filing a Source or a Topic is a workflow. Read the article, write or update one Source page, update the Topic pages that already cover the claims, record any contradiction, then refresh the index and the log. The kinds of page are fixed. Which existing Topic a source touches is a judgment made inside that checklist. It is not a license to invent new page types or to rewrite an immutable source.

The articles this page draws on are [Building effective agents](../sources/articles/anthropic-building-effective-agents.md) and [LLM Wiki](../sources/articles/karpathy-llm-wiki.md). How the compiled layer is organized is [LLM-maintained wiki](./llm-maintained-wiki.md).

## Contradictions

The Anthropic page now notes that much of the tooling it described in December 2024 has changed, and it points to Claude Managed Agents for the current approach.[^building-effective-agents] That is a viewpoint change about tools. On that page it does not replace the workflow-versus-agent distinction or the advice to start with the simplest solution. Both are still stated in the article.

Karpathy's gist is the other tension. He wants the LLM to own wiki maintenance, including bookkeeping a human will not keep up with, and he expects one source to touch many pages.[^karpathy-llm-wiki] Anthropic would call an unbounded version of that an agent, with higher cost and compounding errors, and would ask first whether a fixed sequence of steps is enough.[^building-effective-agents] The schema for this site is the narrower workflow. The agent may update wiki pages, and it may not mutate immutable raw files or open a second Topic for an idea that already has one.

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) and [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) add a third tension: Cherny describes writing loops that run for days or weeks and spawn many agents, with hand-typed code heading where punch cards went.[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] That is an open-ended agent stance. Anthropic's guidance still asks whether a predefined workflow is enough before adding that kind of loop.[^building-effective-agents] The practices Cherny recommends when agents already write the code are filed under [Agent-scaled engineering](./agent-scaled-engineering.md).

## Related

- Source: [Building effective agents](../sources/articles/anthropic-building-effective-agents.md)
- Source: [LLM Wiki](../sources/articles/karpathy-llm-wiki.md)
- Source: [Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- Source: [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- Topic: [LLM-maintained wiki](./llm-maintained-wiki.md)
- Topic: [Agent-scaled engineering](./agent-scaled-engineering.md)

[^building-effective-agents]: Building effective agents
[^karpathy-llm-wiki]: LLM Wiki
[^mihail-eric-bcherny-stanford]: Mihail Eric on Boris Cherny at Stanford
[^shao-meng-bcherny-stanford]: Meng Shao on Boris Cherny at Stanford
