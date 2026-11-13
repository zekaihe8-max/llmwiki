7 min read · Updated Nov 12, 2026

# The Home Repo Pattern

One repo for your skills, AGENTS.md and shared docs, with pointers to your other repos. A reference, with a setup prompt you can copy.

Matt Pocock

Subscribe
Copy pageCopy pageShare

On this page

A [Home Repo](/ai-coding-dictionary/home-repo) is one repository that holds your [skills](/ai-coding-dictionary/skill), your [AGENTS.md](/ai-coding-dictionary/agents-md) and your shared docs. You run your [agent](/ai-coding-dictionary/agent) in the Home Repo. Its AGENTS.md holds a navigation pointer to each of your other repos, so the agent can open or clone them as it needs to.

## [The problem it solves](#the-problem-it-solves)

When a project spans several repos, an agent started in one of them sees only that repo. Each repo ends up with its own copy of the skills and the agent setup, and planning a feature that crosses repos means working without the whole overview.

A Home Repo gives you:

- One place for your steering files and tooling

- One place to run all your agents

- Sweeping changes across multiple repos from a single [session](/ai-coding-dictionary/session)

Go deeper: [join the waitlist for Software Factories for Real Engineers](/cohorts/software-factories-for-real-engineers-xdy1m)

## [Set one up](#set-one-up)

Paste this prompt into a new session with your coding agent, started in the folder that holds your repos. The agent finds your repos and their skills itself, [grills](/ai-coding-dictionary/grilling) you about the decisions in rounds, and changes nothing until you approve its plan.

```
<div style="min-width:fit-content"><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Set up a Home Repo with me: one git repo that holds my shared skills,</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">AGENTS.md and shared docs, and points at my other repos. I'll run my agent</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">from it.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-2);font-weight:bold">## How to work</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">Look up every fact yourself (filesystem, git, gh), using subagents for</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">  <span style="color:var(--ch-4)">wide searches. Bring me only decisions.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">Put decisions to me in rounds. Number each question, give your</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">  <span style="color:var(--ch-4)">recommended answer, and word it so "yes" accepts it. A question that</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">  <span style="color:var(--ch-4)">depends on one still open waits for a later round.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">Until I approve the plan in Step 3, only read.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">Secrets stay where they are: leave .env and other secret files unread.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-2);font-weight:bold">## Step 1: Inventory the repos</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Find every git repo under my home directory, skipping dependency folders.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">For each, record its path, remote, visibility (public or private) and</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">last commit date.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">In the first round, ask:</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">which repos the Home Repo points at (recommend those with recent commits)</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">where it lives, and whether it's new or an existing repo (recommend a</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">  <span style="color:var(--ch-4)">new private repo beside the others)</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">whether it's personal or shared with a team</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">which file my harness loads at session start: AGENTS.md, CLAUDE.md or</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">  <span style="color:var(--ch-4)">both (recommend what my setup shows)</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Done when every repo found is marked in or out, and the other three</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">questions are answered.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-2);font-weight:bold">## Step 2: Inventory the shared material</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Across the chosen repos and my user-level skill folders (such as</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">~/.claude/skills), list every skill (a folder with a SKILL.md), every</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">AGENTS.md and CLAUDE.md, and every doc written for agents: coding</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">standards, glossaries, ADRs.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Sort each item into one bucket:</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">shared: true across repos</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">duplicate: the same item in several places; diff the copies and mark</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">  <span style="color:var(--ch-4)">the newest</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">repo-specific: about one repo's code, commands or domain</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">installed: from a published skills repo or marketplace</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Done when every item sits in exactly one bucket.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-2);font-weight:bold">## Step 3: Agree the plan</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Show a table of every item, where it is now, and its destination:</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">shared and duplicate: move to the Home Repo, one copy, newest version</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">repo-specific: stays in its repo</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">-</span> <span style="color:var(--ch-4)">installed: stays installed</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Under it, show the Home Repo's AGENTS.md: a short intro, then an</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">"Other Repos" section with one pointer per repo:</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">  <span style="color:var(--ch-4)"><</span><span style="color:var(--ch-6)">name</span><span style="color:var(--ch-4)">> (<</span><span style="color:var(--ch-6)">what</span> <span style="color:var(--ch-2)">it is</span><span style="color:var(--ch-4)">>): <</span><span style="color:var(--ch-6)">local</span> <span style="color:var(--ch-2)">path</span><span style="color:var(--ch-4)">>. Clone from <</span><span style="color:var(--ch-6)">remote</span><span style="color:var(--ch-4)">> if missing.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Add a hint where a repo needs one, such as "read its AGENTS.md first".</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Past about 20 repos, group the pointers into one file per area and point</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">at those files instead.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Settle open items in further rounds. Done when I approve the table and</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">the AGENTS.md.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-2);font-weight:bold">## Step 4: Apply the plan</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">1.</span> <span style="color:var(--ch-4)">Create the Home Repo and its AGENTS.md. If my harness loads a</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">   <span style="color:var(--ch-4)">different file, add that file as a one-line pointer to AGENTS.md.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">2.</span> <span style="color:var(--ch-4)">Copy each shared item in, keeping skill folders whole.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">3.</span> <span style="color:var(--ch-4)">In each child repo, on a new local branch, remove the copies that</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">   <span style="color:var(--ch-4)">moved. Repo-specific material stays.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-3)">4.</span> <span style="color:var(--ch-4)">Commit in the Home Repo. Pushing is my call.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Done when every row of the table is applied. Report each row's outcome,</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">the branches you created in each repo, and anything you skipped, with</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">the reason.</span></div></div></div>
```

## [FAQ](#faq)

### [Contents](#contents)

What goes in a Home Repo?
Skills you use across repos, AGENTS.md with its pointers, steering files, and shared docs such as coding standards, a glossary, and decisions that affect the whole system. Coding standards are the first doc worth sharing: one universal set transfers across projects. A Home Repo can also hold a small wiki of Markdown files, and tooling.

What stays in each repo?
Anything true of that repo alone: its own AGENTS.md, its build and test commands, its repo-specific docs. The Home Repo points at it. Code stays where it is, and each repo keeps its history, remote and issue tracker.

Why a repo, and not ~/.claude/skills?
The ideal end state is that everyone uses the same skills, kept in the project. A user folder is the stopgap until then. A Home Repo is a project: its skills are versioned with git, and a team can share it.

AGENTS.md or CLAUDE.md?
This guide says AGENTS.md. Put the pointers in whichever file your harness loads at the start of a session. Claude Code loads CLAUDE.md.

### [Navigation pointers](#navigation-pointers)

What does a pointer look like?
One line per repo, naming the repo and where it lives:

```
<div style="min-width:fit-content"><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">For skills, clone mattpocock/skills to ~/repos/skills.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">For Sandcastle, clone mattpocock/sandcastle to ~/repos/sandcastle</span></div></div></div>
```

Add a hint where a repo needs one:

```
<div style="min-width:fit-content"><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-2);font-weight:bold">## Other Repos</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Storefront (Next.js app): ~/repos/acme/storefront. Clone from git@github.com:acme/storefront.git if missing.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Payments API: ~/repos/acme/payments-api. Read its AGENTS.md before changing it.</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">AI Hero: ~/repos/ai/ai-hero (git pull to view latest, likely out of date)</span></div></div></div>
```

Does the agent clone the repos, or use the copies already on disk?
Both. If the repo is already at the pointer's path, the agent works there. If it isn't, the agent clones it there. Some setups clone the repos inside the Home Repo and gitignore them instead.

### [Working across repos](#working-across-repos)

Where do sessions start?
In the Home Repo, not inside a single repo. It's also the place to grill a feature that crosses repos.

How do worktrees fit in?
Each repo is cloned once. Each feature gets a worktree inside that clone, so several agents can work in one repo at the same time.

Where do issues go?
The agent can reach every repo's issue tracker, so it can make sense of them together. Letting it file each issue where it fits works fine.

Can a team share a Home Repo?
Yes. For a team, the Home Repo is the thing you share, and everyone runs their agents in it.

### [Scale and alternatives](#scale-and-alternatives)

How many repos does it handle?
About 20 repos works fine. At around 400, one pointer per repo is too many decisions for the agent. Use [progressive disclosure](/ai-coding-dictionary/progressive-disclosure) instead: point at one file per area of the business, and list that area's repos in its file.

```
<div style="min-width:fit-content"><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-2);font-weight:bold">## Other Repos</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2">
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Billing (invoices, payments, tax): see repos/billing.md</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Storefront (web and mobile apps): see repos/storefront.md</span>
</div></div><div class="flex" style="border-left:solid 2px transparent"><div class="flex-1 px-2"><span style="color:var(--ch-4)">Internal tools: see repos/internal.md</span></div></div></div>
```

At thousands of repos, the skills have so many consumers that a skills marketplace makes more sense.

Should I use git submodules?
You can. At 5-10 repos a submodules-style setup is fine. Plain pointers do the same job without submodules.

How does it relate to a monorepo?
A monorepo is a good fit when you can have one. A Home Repo replaces it when you can't, for example when you mix public and private repos, or when your team won't adopt a monorepo.

### [Tooling and CI](#tooling-and-ci)

Do I need a CLI or other tooling?
No. Pointers in AGENTS.md and the tools you already have are enough to start. Later, the Home Repo is a good place for tooling, such as a CLI that connects the agent to external services, with the environment variables it needs kept in the same repo.

Does it work in CI?
Yes. In a [software factory](/ai-coding-dictionary/software-factory), put the Home Repo in the [sandbox](/ai-coding-dictionary/sandbox), and it clones the other repos as it needs them. The code that runs the factory lives in the Home Repo, or in one of the repos it points at.
