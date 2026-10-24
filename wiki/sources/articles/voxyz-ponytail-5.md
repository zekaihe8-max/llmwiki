---
type: Source
title: Vox on Ponytail 5
description: Vox relays Ponytail 5, a rewrite that makes the agent ask whether code is needed and whether the repo, stdlib, browser, OS, or a dependency already covers it before writing—maker-benchmarked as less code, time, and cost with more tested risky logic.
resource: https://x.com/Voxyz_ai/status/2113344640959250912
tags: [agents, skills, ponytail, reuse, minimal-code, claude-code]
sources:
  - id: voxyz-ponytail-5
    resource: https://x.com/Voxyz_ai/status/2113344640959250912
    title: Vox on Ponytail 5
    author: human:Voxyz_ai
generated:
  by: auto/composer
  at: 2026-10-24T15:48:41+08:00
date: 2026-10-22
---

# Vox on Ponytail 5

[@Voxyz_ai](https://x.com/Voxyz_ai) relays Ponytail 5, a complete rewrite of the skill: on the same "add a date picker to the frontend" request the agent wrote 335 lines without it and 10 with it, reusing the repo's Input component and the browser calendar, and in the maker's 39-task Claude Code Opus 5.5 benchmark it wrote 53% less code, took 41% less time, cost 26% less, and shipped tests with 98% of risky logic versus 68% without.[^voxyz-ponytail-5] The post is at <https://x.com/Voxyz_ai/status/2113344640959250912>.

## Summary

- Before writing, the agent reads the parts the change touches, then asks in order and stops at the first that holds: must this be written; is it already in the repo; is the standard library enough; does the browser or OS already have it; can an installed dependency cover it; can it be one line; otherwise write the smallest version that runs, plus one small test if it has logic—without cutting input validation, error handling, security, or accessibility.[^voxyz-ponytail-5]
- `/ponytail-review` now also reads code the change touches, so a rename that breaks a file outside the diff is caught; in the maker's tests it found every out-of-diff problem versus 78% without the skill. `/ponytail-audit` runs the same checks across the repo and ranks what to fix first.[^voxyz-ponytail-5]
- 5.3 adds a bar above the Claude Code prompt for task cost, tokens, duration, how much existing code was reused, and whether tests passed (needs Claude Code 2.1.290 or later).[^voxyz-ponytail-5]
- MIT licensed; install via the DietrichGebert/ponytail marketplace plugin in Claude Code or Codex, then trust its hooks and start a new thread.[^voxyz-ponytail-5]

## Related

- Topic: [Reuse before write](../../topics/reuse-before-write.md)

[^voxyz-ponytail-5]: Vox on Ponytail 5
