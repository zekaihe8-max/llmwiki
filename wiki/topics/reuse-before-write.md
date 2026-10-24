---
type: Topic
title: Reuse before write
description: Before an agent writes code, it should ask whether the change is needed and whether the repo, standard library, browser, OS, or an installed dependency already covers it, then ship the smallest working version with a test for risky logic.
tags: [agents, reuse, minimal-code, skills, practice]
sources:
  - id: voxyz-ponytail-5
    resource: https://x.com/Voxyz_ai/status/2113344640959250912
    title: Vox on Ponytail 5
generated:
  by: auto/composer
  at: 2026-10-24T15:48:41+08:00
---

# Reuse before write

Agents should prefer finding what already exists over generating large new surfaces. The checklist runs before the first edit: need, repo, stdlib, platform, dependency, one-liners, then the smallest working change—with tests for risky logic, and without dropping validation, error handling, security, or accessibility.[^voxyz-ponytail-5]

## Synthesis

[Vox on Ponytail 5](../sources/articles/voxyz-ponytail-5.md) relays the Ponytail 5 skill rewrite and the maker's own Claude Code benchmarks: same request, far less code when the agent reuses repo components and platform features; across 39 tasks, less code, time, and cost, and a higher share of risky logic shipping with a test. The same post covers review and audit commands that read code outside the diff, plus a prompt bar for cost, tokens, reuse, and test status.[^voxyz-ponytail-5]

## Contradictions

None yet. The reported numbers are the maker's own benchmark, not a third-party evaluation.[^voxyz-ponytail-5]

## Related

- Source: [Vox on Ponytail 5](../sources/articles/voxyz-ponytail-5.md)

[^voxyz-ponytail-5]: Vox on Ponytail 5
