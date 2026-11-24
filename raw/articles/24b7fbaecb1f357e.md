Technical Report

# Agentic Shopping is Complicated and Contingent

August 27th, 2026 •︎ Anushka Kumar, Lennart Meincke, Dan Shapiro, Lilach Mollick, Stefano Puntoni, and Ethan Mollick

What an AI shopping agent buys depends less on the products than on what it saw first.

We tested the stability of AI shopping recommendations by adding additional influences into the shopping process beyond the models themselves. Across roughly 26,000 tests, AI agents made consistent recommendations when shown only the product page. Adding context, whether it was a screenshot of a single review, competing sources, their ordering, an injected user “memory,” or even how the agent retrieves recommendations, shifted what agents bought. While each model responded differently, one pattern held: the more context we added, the less predictable the final choice became.

[Download full report](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7355899)

Cite as:

Kumar, Anushka and Meincke, Lennart and Shapiro, Dan and Mollick, Lilach and Puntoni, Stefano and Mollick, Ethan R., Prompting Science Report 6: Agentic Shopping is Complicated and Contingent (August 27, 2026). Available at SSRN: [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7355899](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7355899)

## Why Process Matters for AI Shopping Agents

AI shopping agents will search, browse, and buy on a user’s behalf. Real shopping is rarely just a clean comparison of products on one page, though. People consult reviews, recommendations, ads, and wrestle with their prior beliefs first. Agents will too, and companies will have little ability to see or influence that context.

So instead of treating the agent as a fixed decision-maker evaluating products in isolation, we added realistic layers of prior information one at a time and watched how each layer changed the choice.

## How We Tested AI Shopping Agents

- The agent acted as a personal shopping assistant picking a fitness watch for a user with no stated requirements, using ACES, the Agentic e-CommercE Simulator (Allouah et al., 2025).

- All stimuli were image-based: the agent saw a screenshot of an eight-product grid and, depending on the study, screenshots of prior sources, then elicited a choice.

- We tested six frontier models (Claude Haiku 4.5 and Claude Opus 4.8, GPT-5 Mini and GPT-5.5, Gemini 3.1 Flash Lite and Gemini 3.5 Flash), 200 runs per condition at temperature 1.0. Study 5 tested a four-model subset with no Anthropic models.

## What We Manipulated

Three source screenshots each pointed to a different product: Reddit (Garmin Forerunner 55), Wirecutter (Fitbit Inspire 3), and The Strategist (WHOOP 5.0).

We layered these in five ways:

                description

### A single source

                library_books

### Multiple sources

                swap_vert

### Different source orders

                psychology

### Injected user &ldquo;memory&rdquo;

                call_split

### Split vs. bundled tool calls

## Results

### A Single Source Can Override the Default

With only the grid, each model settled into a stable favorite, and the favorites differed even within the same model family: Claude Opus 4.8 usually picked the Garmin Forerunner 55, GPT-5.5 the Garmin Vivoactive 5, Gemini 3.5 Flash the Fitbit Versa 4.

A single source screenshot was often enough to override that default. Gemini 3.5 Flash chose Wirecutter’s pick (the Fitbit Inspire 3) in essentially every run, showing a shift of +99 percentage points. Most models moved nearly as far. The exception was GPT-5 Mini. The same screenshot moved some models completely and others hardly at all.

## Figure 1. Product Selection by Source Condition

Note. This figure shows how product selection changed when agents saw a single prior source before the shopping grid. Each bar shows 200 runs per condition and model. The error bars show 95% confidence intervals for individual proportions.

### Multiple Sources Don’t Simply Average

When agents saw multiple sources pointing at different products, they didn’t split the difference. One source won outright, and which one won depended on the model: Wirecutter dominated for both Claude models, Reddit held the most sway over GPT-5.5, and each Gemini model responded most to a different pairing. The clearest evidence of Wirecutter’s pull is the one combination that excluded it: Reddit + Strategist moved no model anywhere.

### Order Changes the Outcome

We then showed all three sources but shuffled their order. In principle, the same content should produce the same choice. It didn’t. Both Claude models recommended the Fitbit Inspire 3 no matter the order, and GPT-5.5 stayed loyal to the Garmin Vivoactive 5, but Gemini 3.1 Flash Lite’s choice hinged on which source it saw first: when Wirecutter led, it almost never switched to Wirecutter’s pick; when Reddit led, it switched in more than half of runs.

### Injected “User Memory” Can Redirect Choices

For this study we ensured that one product was objectively best: the Smart Watch with Alexa cost $29.99 with a perfect 5.0 rating, while everything else cost at least $359 with worse reviews. Then we planted a single sentence of user “memory” in the prompt.

That one sentence was enough to redirect most models. With “I love hiking!” injected, Claude Opus 4.8 abandoned its usual pick for the hiking-friendly Garmin Vivoactive 5 in three-quarters of runs, and GPT-5.5 and Gemini 3.1 Flash Lite shifted the same direction. GPT-5 Mini worked in reverse: the positive memory didn’t move it, but “I don’t like hiking!” did. Only Gemini 3.5 Flash both picked the objectively best product at baseline and kept picking it regardless of what we injected (p = .784) — the lone model that behaved the way a rational shopper would hope.

## Figure 2. Product Selection by Injected Personal Context

Note. This figure shows how product selection changed when agents' context contained a memory when seeing the shopping grid with an objectively best product. Each bar shows 200 runs per condition and model. The error bars show 95% confidence intervals for individual proportions.

### Even Tool-Call Design Matters

Finally, we varied something no shopper ever sees: whether the three sources reached the agent in one bundled tool call or three separate ones. Delivery format alone changed what agents bought, in the four models tested (Anthropic models were not in this study). Bundled delivery consistently pushed agents more strongly toward Wirecutter’s pick. The starkest case was GPT-5.5, which shifted substantially when the sources arrived bundled (+53 percentage points) but barely at all when they arrived one by one. An implementation detail most users will never see impacted the purchase.

## Key Takeaways

#### Buyers and deployers can’t judge an agent from a clean page.

Choices were stable on the bare grid; the added layers made them unpredictable. Benchmarks that test only the purchase interface underestimate real-world susceptibility.

#### A single source can flip the decision.

Sometimes by nearly 100 percentage points.

#### More information didn’t mean more predictable choices.

Agents don’t average competing sources, and order matters for some models.

#### Injected “user memory” is an attack surface.

A planted sentence redirected most models even when one product was objectively best.

#### Susceptibility varies by model, even within model families.

Gemini 3.5 Flash ignored the memory injection but was still swayed by source screenshots, and its sibling Gemini 3.1 Flash Lite shifted +36 pp on the same injection.

#### Test agents in realistic information environments.

That means including adversarial prior content and injected user context in your robustness testing.

[Download full report](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7355899)
