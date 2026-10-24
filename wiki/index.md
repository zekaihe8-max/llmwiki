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
- [Boris Cherny on Agent Skills to AAIF](./sources/articles/bcherny-agent-skills-aaif.md) — Boris Cherny says Agent Skills began as a Claude Code experiment and that Anthropic is donating it to the Agentic AI Foundation next to MCP after broad industry adoption.
- [AAIF four new projects](./sources/articles/aaif-four-new-projects.md) — Agentic AI Foundation welcomes Agent Skills, Open Responses, OpenEnv, and OpenSandbox, bringing AAIF to ten hosted projects in its first year.

- [OpenAI Decisions API generally available](./sources/articles/openai-decisions-api-ga.md) — OpenAIDevs announces the Decisions API is generally available for near real-time classify, evaluate, and next-step choices in apps and agents without a full model response.
- [OpenAI METR embedded evaluation](./sources/articles/openai-metr-embedded-eval.md) — OpenAI announces that METR and Redwood Research spent three weeks on site piloting an embedded evaluation of OpenAI's internal monitoring for agent misalignment.
- [Google Cloud Agent Compute Engine](./sources/articles/google-cloud-agent-compute-engine.md) — Google Cloud announces Agent Compute Engine and expanded Gemini for business agent governance at AGNTCon + MCPCon for running, governing, and scaling agents.
- [Anthropic usage limits A/B test](./sources/articles/semianalysis-anthropic-usage-limits-ab.md) — SemiAnalysis reports that Anthropic is A/B testing usage limits that cut monthly API-value by about 20% while raising five-hour limits by about 20% for some accounts.
- [Dotey on Anthropic usage limits A/B](./sources/articles/dotey-anthropic-usage-limits-ab.md) — 宝玉 relays SemiAnalysis that Anthropic is A/B testing Claude limits, with about 20% less monthly API-value and about 20% more five-hour quota for some accounts.
- [Mihail Eric on Boris Cherny at Stanford](./sources/articles/mihail-eric-bcherny-stanford.md) — Mihail Eric reports Boris Cherny's Stanford talk takeaways on automating bottlenecks, building for the next model, small teams, agent loops, and domain-specific builders.
- [Meng Shao on Boris Cherny at Stanford](./sources/articles/shao-meng-bcherny-stanford.md) — meng shao relays Boris Cherny's five Stanford talk principles—automate bottlenecks, build for the next model, stay small, think in loops, and domain experts win—with near-full Claude-written code and about 10x output per engineer.
- [Rauch on deep backends and JIT frontends](./sources/articles/rauchg-deep-backends-jit-frontends.md) — Guillermo Rauch says agents pull software into deep backends and just-in-time frontends, with tmp.now deploys removing signup friction so agents can ship live URLs.
- [Paul Graham on AI-native companies](./sources/articles/paulg-ai-native-companies.md) — Paul Graham says established firms will at best adapt to AI, new startups will be AI-native from the start, and Podium is a rare middle case that remade itself as AI-native.
- [Alex Albert on AI for local businesses](./sources/articles/alexalbert-ai-local-businesses.md) — Alex Albert says running local small businesses with AI help, via products like Claude Duet, could matter more for those businesses than Square or Google Maps did.
- [Ethan Mollick on AI task horizon growth](./sources/articles/emollick-ai-task-horizon.md) — Ethan Mollick tracks AI capability from about four minutes of human work in 2024 to seventeen hours when he turned in Co-Existence, then seventeen weeks when the book published.
- [Aaron Levie on AI cybersecurity jobs](./sources/articles/levie-ai-cybersecurity-jobs.md) — Aaron Levie says cybersecurity shows the jobs AI will create, because more agentic security work still needs people to aim agents, review findings, patch systems, and respond to incidents.
- [Nathan Lambert on open models and cyber defense](./sources/articles/natolambert-open-models-cyber-defense.md) — Nathan Lambert argues open models help cyber defense more than AI-doom discourse credits, even though open weights will also be used in attacks, and that open models matter for holding cyber together over the next year.
- [François Chollet on millenarian death-cult signs](./sources/articles/fchollet-millenarian-death-cult.md) — François Chollet says axiomatic near-term Apocalypse belief, sign-watching, mixed fear and excitement, and a closed circle of shared beliefs are common signs of an insane millenarian death cult.
- [Vox on AGENTS.md UX/DX/AX rules](./sources/articles/voxyz-agents-md-ux-dx-ax.md) — Vox asks vibecoders to put two rules in AGENTS.md—cut taglines and helper text that prop up weak layouts, and always raise UX, DX, and AX together without breaking anything.
- [Vox on Agent Skills writing rules](./sources/articles/voxyz-agent-skills-writing-rules.md) — Vox summarizes six Agent Skills authoring rules from the foundation guide—author from real runs, cut filler, lean pushy descriptions, size limits, hard-coded fragile steps, and a gotchas list—plus a Claude Code prompt to save a finished task as a skill.
- [Vox on Ponytail 5](./sources/articles/voxyz-ponytail-5.md) — Vox relays Ponytail 5, a rewrite that makes the agent ask whether code is needed and whether the repo, stdlib, browser, OS, or a dependency already covers it before writing—maker-benchmarked as less code, time, and cost with more tested risky logic.
- [Matt Pocock on code over the spec](./sources/articles/mattpocock-code-not-spec.md) — Matt Pocock says the code, not the spec, should be the center of your universe.
- [Matt Pocock on /grill-me](./sources/articles/mattpocock-grill-me.md) — Matt Pocock says he still uses /grill-me, one question at a time, when the problem is hugely underspecified and a single Q&A round could send the work in massively different directions.
- [Matt Pocock on /software-factory](./sources/articles/mattpocock-software-factory.md) — Matt Pocock shares a prompt-of-the-day that runs /grill-me on how a /software-factory might help, to decide whether factory-style infra is worth it and what you need to set it up.
- [小墨 on Pi vs DeepSeek Harness rounds and cost](./sources/articles/xiaomovps-pi-vs-deepseek-harness.md) — 小墨 compares the same DeepSeek V4 Flash task under Pi and DeepSeek Harness—about 3 vs 28 rounds and roughly 18× cumulative input tokens, yet only about 2× cost thanks to cache hits—and argues harness comparisons need rounds, cache rate, time, and quality, not token totals alone.
- [介绍 Cloudflare Workers](./sources/articles/introducing-cloudflare-workers.md) — Cloudflare 宣布将在边缘运行接近 Service Worker API 的 JavaScript，用 V8 多租户沙箱让全球节点可编程，而不是无限叠加固定功能。
- [LLM-maintained wiki](./topics/llm-maintained-wiki.md) — a compiled markdown wiki that an agent keeps current over immutable sources, instead of re-deriving answers from raw files on every question.




- [Workflows before agents](./topics/workflows-before-agents.md) — prefer a predefined workflow for a known path, and add an open-ended agent only when that path is not enough.
- [Agent-scaled engineering](./topics/agent-scaled-engineering.md) — When agents write most of the code, teams win by automating new bottlenecks, running long agent loops, staying small, and building for models months ahead.

- [LLM formal verification](./topics/llm-formal-verification.md) — large language models can make formal software verification practical on real-world codebases that were previously too large or too costly for expert-only proof work.
- [Agent auto mode](./topics/agent-auto-mode.md) — agent sessions can default to auto permission mode, where an automated check blocks risky actions instead of asking the user to approve each step.
- [Claude on Google Cloud](./topics/claude-on-google-cloud.md) — Anthropic-managed Claude models can run on Google Cloud with Claude Platform features and native Google Cloud IAM, billing, and commitment retirement.
- [Agent Skills open standard](./topics/agent-skills-open-standard.md) — Agent Skills are moving under the Agentic AI Foundation alongside MCP, as a cross-platform standard already adopted by dozens of agent products.
- [Agent skill authoring](./topics/agent-skill-authoring.md) — Durable Agent Skills come from real agent runs, lean pushy descriptions that decide activation, tight SKILL.md size limits with references on the side, hard-coded fragile steps, and an explicit gotchas list.
- [Agentic AI Foundation](./topics/agentic-ai-foundation.md) — The Agentic AI Foundation is a neutral home for shared agent infrastructure projects spanning skills, cross-provider work, training environments, and sandboxed runtimes.
- [Near real-time decisions API](./topics/near-real-time-decisions-api.md) — Apps and agents can call a dedicated decisions API to classify, evaluate, and choose the next step in near real time without generating a full model response.
- [Embedded third-party evals](./topics/embedded-third-party-evals.md) — Frontier labs can host third-party researchers on premises to evaluate internal monitoring for agent misalignment, then use the findings to harden safeguards and plan later collaborations.
- [Agent compute and governance](./topics/agent-compute-and-governance.md) — Cloud platforms can pair dedicated agent compute with expanded governance controls so teams can run, govern, and scale agents.
- [Usage limit A/B tests](./topics/usage-limit-ab-tests.md) — Frontier providers can A/B test subscription usage caps, trading monthly allotment against short-window limits for a subset of accounts.
- [Deep backends and JIT frontends](./topics/deep-backends-and-jit-frontends.md) — Agents pull software toward deep backends and just-in-time frontends, with frictionless ephemeral deploys so agents can ship live URLs without signup.
- [AI-native companies](./topics/ai-native-companies.md) — Established firms will at best adapt to AI, new startups are AI-native from founding, and remaking an existing company as AI-native is a rare hard middle path.
- [AI-assisted local businesses](./topics/ai-assisted-local-businesses.md) — AI products that help run local small businesses, such as Claude Duet, may matter more for those firms than earlier platforms like Square or Google Maps.
- [AI task horizon growth](./topics/ai-task-horizon-growth.md) — The length of human work AI can complete at a given success rate has grown from minutes to hours to weeks within about thirty months.
- [AI cybersecurity jobs](./topics/ai-cybersecurity-jobs.md) — AI makes cybersecurity more agentic, but that raises demand for people who aim agents, review findings, patch systems, and respond to incidents.
- [Open models and cyber defense](./topics/open-models-cyber-defense.md) — Open weights will be used in attacks, but they also help cyber defense, and a credible cyber view is that open models help hold the line over the next year more than doom discourse credits.
- [Millenarian apocalypse discourse](./topics/millenarian-apocalypse-discourse.md) — Axiomatic near-term Apocalypse belief, sign-watching, mixed fear and excitement, and a closed circle of shared beliefs mark millenarian cult dynamics, used here as a critique of radical doom discourse.
- [UX, DX, and AX](./topics/ux-dx-and-ax.md) — Product and agent guidance should raise user, developer, and agent experience together, and screens should not rely on taglines or helper text to be understandable.
- [Code over the spec](./topics/code-over-spec.md) — The running code, not the written specification, should be the center of engineering attention.
- [One question at a time](./topics/one-question-at-a-time.md) — When a problem is hugely underspecified, clarify with one question at a time instead of a single Q&A round that could send the work in massively different directions.
- [Software factory](./topics/software-factory.md) — A software-factory skill or prompt can grill whether factory-style agent infra is worth adopting and what you need to set it up.
- [Harness comparison beyond tokens](./topics/harness-comparison-beyond-tokens.md) — Compare agent harnesses on the same model by rounds, cache hits, latency, and output quality—not cumulative token totals alone, because high cache hit rates can keep cost near parity when token volume diverges.
- [Reuse before write](./topics/reuse-before-write.md) — Before an agent writes code, it should ask whether the change is needed and whether the repo, standard library, browser, OS, or an installed dependency already covers it, then ship the smallest working version with a test for risky logic.
- [可编程边缘计算](./topics/programmable-edge-compute.md) — 边缘网络应通过沙箱化 JavaScript（如 Service Worker API）变为可编程，而不是无限叠加固定功能；轻量多租户运行时才能把代码铺到全球节点。



