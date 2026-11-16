# Mirobody

[#mirobody](#mirobody)

Mirror your body in data.

One standard, every source, one complete picture of you — building a lasting record to understand where your health is going.

This open-source edition keeps that record on your own machine: lab reports, wearables and genetic files flow into it, and your AI agent can query it over MCP.

English · [中文](/thetahealth/mirobody/blob/main/README.zh-CN.md) · [日本語](/thetahealth/mirobody/blob/main/README.ja.md)

[https://pypi.org/project/mirobody/](https://pypi.org/project/mirobody/)
[/thetahealth/mirobody/blob/main/LICENSE](/thetahealth/mirobody/blob/main/LICENSE)
[https://github.com/thetahealth/mirobody/stargazers](https://github.com/thetahealth/mirobody/stargazers)

[▶ Live demo](https://chat.mirobody.ai/demo?ref=github-readme&lang=en) · [Try one command](#try-the-engine-with-one-command) · [Open in Codespaces](#try-the-full-app-in-codespaces) · [100% local](#run-everything-100-locally)

  [/thetahealth/mirobody/blob/main/docs/images/ask-own-demo.gif](/thetahealth/mirobody/blob/main/docs/images/ask-own-demo.gif)

Three reports, three names for the same test. One trend, with the file behind every number.

## Choose where to start

[#choose-where-to-start](#choose-where-to-start)

You want to
Start here
What you need

Standardize names and units, in a terminal or inside your AI agent

[One command](#try-the-engine-with-one-command)

uv; no model or API key

Try the full app in your browser

[GitHub Codespaces](#try-the-full-app-in-codespaces)

A GitHub account and your own model API key

Keep the app, models and records on your machine

[100% local with Docker](#run-everything-100-locally)

Docker with Compose; 16 GB memory; no API key

Keep the app and records on your machine, without Docker

[No Docker](#run-without-docker)

Debian or Ubuntu; PostgreSQL 16; Python 3.12; your own model API key

Use it on your own records with nothing to run

Try Mirobody in [Theta Web](https://dr.thetahealth.ai/?utm_source=mirobody&utm_medium=github&utm_campaign=mirobody-to-theta&utm_content=readme), or in the Theta mobile app

An account

## Try the engine with one command

[#try-the-engine-with-one-command](#try-the-engine-with-one-command)

With [uv installed](https://docs.astral.sh/uv/getting-started/installation/), paste this into your terminal:

```
uvx --python 3.12 mirobody resolve <span class="pl-s"><span class="pl-pds">"</span>LDL cholesterol<span class="pl-pds">"</span></span> 血红蛋白 ヘモグロビン <span class="pl-s"><span class="pl-pds">"</span>Total Kolesterol<span class="pl-pds">"</span></span> 血脂
```

No repository clone, Docker, model or API key. uv prepares Python and the package for you; the first run needs a network connection to download them. The resolver then works offline from the bundled vocabulary.

血红蛋白 and ヘモグロビン both resolve to 718-7. 血脂 stays unresolved: it names a category, not one test. The same engine standardizes names and units across the full app.

  [/thetahealth/mirobody/blob/main/docs/images/resolve-demo.gif](/thetahealth/mirobody/blob/main/docs/images/resolve-demo.gif)

Give the same engine to your AI agent. In Claude Code:

```
claude mcp add mirobody -- uvx --python 3.12 mirobody mcp
```

Your agent can then standardize any name, reading, unit or complaint you paste, on your machine and without a key. Reading a whole report also needs mirobody[parse] and a model key. [Other MCP clients](https://docs.mirobody.ai/en/tools/mcp-integration#local-terminology-over-stdio) take the same command.

→ [Use the engine from Python or MCP](/thetahealth/mirobody/blob/main/docs/quickstart.md#a--the-library)

## Try the full app in Codespaces

[#try-the-full-app-in-codespaces](#try-the-full-app-in-codespaces)

Run the web app in your browser with your own model API key. GitHub prepares the environment; you do not need to install Docker or Python on your computer.

[https://codespaces.new/thetahealth/mirobody?quickstart=1](https://codespaces.new/thetahealth/mirobody?quickstart=1)

- Create the codespace and wait for the automatic setup to finish in its terminal. It starts the app, Postgres, the worker and the synthetic demo data.

- Open the setup link printed in the terminal and enter your own model API key: [OpenRouter](https://openrouter.ai/keys), [OpenAI](https://platform.openai.com/api-keys), [Gemini](https://aistudio.google.com/apikey), [Anthropic](https://platform.claude.com/settings/keys), DeepSeek, DashScope, or any OpenAI-compatible gateway. The key is saved only after a real request succeeds. The forwarded app port is private by default.

- Sign in as you@mirobody.ai, code 111111, on the Email code tab. Ask "How has my cholesterol changed?" The demo holds 2,019 readings across your record and mom@mirobody.ai's, shared with you view-only.

- Upload a synthetic sample from [demo/upload/](/thetahealth/mirobody/blob/main/demo) on the Data page to see a new report join the record, or switch to mom's record and ask again.

The app and its records run in GitHub's cloud; the model service receives the documents and questions it processes. Use the included synthetic data to explore. Codespaces has [usage limits and billing](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces); model usage is billed by your model provider. Stop the codespace when you finish. For complete control on your own machine, use the local route below.

## Run everything 100% locally

[#run-everything-100-locally](#run-everything-100-locally)

The app, records and models all run on your own machine. No model API key needed. Docker with Compose starts the stack and [llama.cpp](https://github.com/ggml-org/llama.cpp), with a small answering model and a document reader:

```
git clone --depth 1 https://github.com/thetahealth/mirobody.git <span class="pl-k">&&</span> <span class="pl-c1">cd</span> mirobody
COMPOSE_PROFILES=local-cpu ./deploy.sh
```

Allow 16 GB of memory, at least 8 GB of it for Docker. No GPU is required; on Windows, run the commands in a WSL 2 terminal. The first start needs a network connection to download container images and model weights. If the registry is not reachable from your network, deploy.sh says so and retries through a mirror; DOCKER_MIRROR in .env names your own. After those downloads, document reading, standardization and answers run locally. CPU answers can take minutes; [Mac, NVIDIA and Windows options](/thetahealth/mirobody/blob/main/docs/local-models.md) explain how to use your GPU.

Open the app link the script prints. The local models are already selected; sign in with the same demo account above, ask a question or upload a sample. [Which model to choose](/thetahealth/mirobody/blob/main/docs/model-choice.md) compares the local options.

  [/thetahealth/mirobody/blob/main/docs/images/setup-demo.gif](/thetahealth/mirobody/blob/main/docs/images/setup-demo.gif)

Prefer Docker with a cloud model? Run ./deploy.sh without a local model profile, then paste your own model key into the printed setup link. The app and records stay on your host; the model service processes your documents and questions.

Chat calculations take the original queried data directly. A cloud model's
code runs as JavaScript inside the app, with nothing to set up; a model on your
own hardware computes in Python in a local Docker container when the app can
reach a Docker daemon. [Setup and data flow](/thetahealth/mirobody/blob/main/docs/python-analysis.md) cover
both. Query views provide their built-in statistics without either.

→ [Self-host guide](https://docs.mirobody.ai/en/self-host) · [Walkthrough](/thetahealth/mirobody/blob/main/docs/walkthrough.md) · [Deploy on a server](https://docs.mirobody.ai/en/deployment/production)

## Run without Docker

[#run-without-docker](#run-without-docker)

No container, and nothing pulled from a registry. On Debian or Ubuntu, PostgreSQL 16 with pgvector comes from the distribution's own packages and the app runs straight from the checkout. It is the same install the Codespaces path performs:

```
git clone --depth 1 https://github.com/thetahealth/mirobody.git <span class="pl-k">&&</span> <span class="pl-c1">cd</span> mirobody
scripts/install_native.sh   <span class="pl-c"><span class="pl-c">#</span> PostgreSQL, pgvector, the Python package, a .env</span>
scripts/start_native.sh     <span class="pl-c"><span class="pl-c">#</span> the worker and the app on port 18060</span>
```

Open the link it prints and sign in as you@mirobody.ai, code 111111: the demo record is seeded already. A model key from the printed setup link adds document extraction and answers. install_native.sh installs system packages with sudo and writes one sudoers rule for the postgres account, and says so as it runs.

The local models belong to the Docker path, so this one answers through a model service. Everything else matches the row above it in [what stays on your machine](#what-stays-on-your-machine): the records live in the PostgreSQL you just installed, and a name to a code never leaves the machine.

## What you can do

[#what-you-can-do](#what-you-can-do)

- Compare reports across labs. PDFs, phone photos and spreadsheets, 23 file types in all, land in one history. Every reading links to the page it was read from.

- Bring in everyday data. Import an Apple Health export, or connect Garmin, Oura and Whoop.

- Look after your family. Invite someone who shares their own record, or keep one for a parent who never signs in.

- Write a health journal. headache since last night, BP 150/95, no fever becomes a coded complaint and two coded readings; "no fever" is not logged as a fever.

- Explore genetic data. Upload a 23andMe, AncestryDNA or WeGene export, or a VCF, and ask by rsID, gene or region. Drug questions get the matching [CPIC](https://cpicpgx.org/) guideline coverage, never a change of medication.

- Use your own agent. Connect Claude Code, Codex or Cursor over MCP, or embed the offline engine in Python.

Mirobody does not diagnose or prescribe, and its answers are not medical advice.

## Collect · Standardize · Agent

[#collect--standardize--agent](#collect--standardize--agent)

Stage
What it does
Where

① Collect

Lab reports, devices, photos, genetic files and journal entries come in from every source; each reading keeps the file it came from.

[collect/](/thetahealth/mirobody/blob/main/mirobody/collect)

② Standardize

A1c, HbA1c and Glycated Hemoglobin resolve to one code, units to one standard, offline: readings from scattered sources land as clean rows in one table. A name it cannot place stays unresolved.

[engine/](/thetahealth/mirobody/blob/main/mirobody/engine) · [standardize/](/thetahealth/mirobody/blob/main/mirobody/standardize)

③ Agent

Answers come from tools that query that table, not from the model's memory: trends, comparisons across labs and devices, a chart. Every number traces to its file, so you can check it instead of taking it on trust.

[agent/](/thetahealth/mirobody/blob/main/mirobody/agent)

The model reads documents and reasons; the codes and units come from vocabularies bundled with the package, never from the model. [How a reading is standardized, step by step](/thetahealth/mirobody/blob/main/docs/site/standardization.md) · [How a reading moves through the pipeline](/thetahealth/mirobody/blob/main/docs/pipeline.md).

## Care for your family

[#care-for-your-family](#care-for-your-family)

Joining a care circle shares nothing by itself. Each member decides whether others may view or edit their own record. A parent who never signs in can be managed by you until they claim the record and choose what you keep. [See it in the walkthrough](/thetahealth/mirobody/blob/main/docs/walkthrough.md).

## What stays on your machine

[#what-stays-on-your-machine](#what-stays-on-your-machine)

Where the app runs and where the model runs are separate choices. Mirobody does not report usage anywhere.

Codespaces + a model key
Local Docker + a model key
100% on this machine

App and stored records

in your codespace on GitHub's cloud

on your machine

on your machine

Documents and questions sent for model processing

sent to your model vendor, under its terms

sent to your model vendor, under its terms

stay on your machine

A name to a code, a unit to UCUM (② Standardize)

in the codespace, from the bundled vocabulary

on your machine, with no network

on your machine, with no network

Model weights

managed by the model vendor

managed by the model vendor

downloaded once from Hugging Face

The command-line resolver also runs on your machine without a model or network access after its initial download.

Device vendors see data only after you link one. Before this reaches a network you do not control, read [SECURITY.md](/thetahealth/mirobody/blob/main/SECURITY.md): it lists every address the server can call.

## Build on Mirobody

[#build-on-mirobody](#build-on-mirobody)

You want
Start here

Your record in Claude Code, Codex, Cursor or Gemini CLI

In the running app, Settings → MCP link (valid for 10 days by default), then [one line per client](https://docs.mirobody.ai/en/tools/mcp-integration)

The offline engine as tools in any MCP client, with no app

uvx --python 3.12 mirobody mcp over stdio ([client setup](https://docs.mirobody.ai/en/tools/mcp-integration#local-terminology-over-stdio))

Mirobody inside DeepSeek Harness

[dsh-plugin-mirobody](https://github.com/zwbao/dsh-plugin-mirobody), a community plugin by zwbao: the offline engine and your record's read-only tools, with a Mirobody tab

Names and units resolved in your own code

pip install mirobody: offline, no key, numpy the only dependency ([library guide](/thetahealth/mirobody/blob/main/docs/quickstart.md#a--the-library))

Your coding agent taught the workflow

npx skills add thetahealth/mirobody --skill standardize-health-data ([skills](/thetahealth/mirobody/blob/main/skills/README.md))

A new device provider or tool

Drop a file into mirobody/collect/providers/ or mirobody/agent/tools/ ([CONTRIBUTING](/thetahealth/mirobody/blob/main/CONTRIBUTING.md))

Try the app without deploying

[Mirobody Web demo](https://chat.mirobody.ai/demo?ref=github-readme&lang=en), using the same [synthetic demo files](/thetahealth/mirobody/blob/main/demo/README.md)

Over MCP the stack serves tools scoped to the signed-in person: four read your record (readings, medications, genotypes, pharmacogenomics), three resolve names and units, and two search medical reference material when the deployment has a knowledge source.

The stdio server is published to the official MCP Registry as ai.thetahealth/mirobody with every release. Directories that read the registry list it too, such as [mcprush](https://mcprush.com/thetahealth/mirobody-mcp) and [AddonAudit](https://addonaudit.com/addon/ai-thetahealth-mirobody/), which runs it in a sandbox. Each picks up a new version on its own schedule, so take the install line from this README.

After pip install mirobody, use the same engine from Python:

```
<span class="pl-k">from</span> <span class="pl-s1">mirobody</span>.<span class="pl-s1">engine</span> <span class="pl-k">import</span> <span class="pl-s1">resolve</span>, <span class="pl-s1">resolve_reading</span>

<span class="pl-en">resolve</span>(<span class="pl-s">"血红蛋白"</span>).<span class="pl-c1">loinc</span>                                     <span class="pl-c"># '718-7'   any language, one code</span>
<span class="pl-en">resolve_reading</span>(<span class="pl-s">"total cholesterol"</span>, <span class="pl-s">"5.0"</span>, <span class="pl-s">"mmol/L"</span>).<span class="pl-c1">loinc</span>  <span class="pl-c"># '14647-2' the unit picks the code...</span>
<span class="pl-en">resolve_reading</span>(<span class="pl-s">"total cholesterol"</span>, <span class="pl-s">"193"</span>, <span class="pl-s">"mg/dL"</span>).<span class="pl-c1">loinc</span>   <span class="pl-c"># '2093-3'  ...mass, not moles</span>
<span class="pl-en">resolve</span>(<span class="pl-s">"中性粒细胞百分比"</span>).<span class="pl-c1">loinc</span>                               <span class="pl-c"># '26511-6' Neutrophils/Leukocytes</span>
<span class="pl-en">resolve</span>(<span class="pl-s">"血脂"</span>).<span class="pl-c1">resolved</span>                                     <span class="pl-c"># False    a category, not one test</span>
```

### Numbers you can check

[#numbers-you-can-check](#numbers-you-can-check)

Claim
Check it

347/347 on the tests an ordinary checkup prints, in English, Chinese, Japanese, Russian, Estonian and Turkish

[test_engine_coverage.py](/thetahealth/mirobody/blob/main/mirobody/tests/test_engine_coverage.py) prints the score

63,416 LOINC 2.83 codes cut by rule and 1,023,273 names pointing at them, including LOINC's own 21 languages; report spellings the index misses are added one reviewed row at a time

[fhir_loinc_bundle.NOTICE](/thetahealth/mirobody/blob/main/mirobody/res/loinc/fhir_loinc_bundle.NOTICE) · [resolver_overrides.tsv](/thetahealth/mirobody/blob/main/mirobody/res/loinc/resolver_overrides.tsv) · [How a reading is standardized](/thetahealth/mirobody/blob/main/docs/site/standardization.md)

331 UCUM units with dimensional analysis, and 902 catalogue members for device and laboratory indicators

[Standardization](/thetahealth/mirobody/blob/main/docs/standardization.md) · [Device crosswalk](/thetahealth/mirobody/blob/main/docs/device-crosswalk.md)

23andMe, AncestryDNA, WeGene, MyHeritage and FamilyTreeDNA exports and VCF on GRCh37 and GRCh38 decode to the same 13 calls across 12 genes, tested on public 1000 Genomes samples shipped in the package

[test_packaged_examples.py](/thetahealth/mirobody/blob/main/benchmarks/genomics/test_packaged_examples.py) · [Public genotype examples](/thetahealth/mirobody/blob/main/mirobody/testing/genomics/README.md)

The package names its vocabulary: mirobody.BUNDLE_VERSION is loinc-2.83+2026.10.27-126ecba69782

python -c "import mirobody; print(mirobody.BUNDLE_VERSION)"

Public health-agent benchmarks: [ESL-Bench](https://huggingface.co/datasets/mirobody/ESL-Bench), [MedHall-Bench](https://huggingface.co/datasets/mirobody/MedHall-Bench), [MedHarm-Bench](https://huggingface.co/datasets/mirobody/MedHarm-Bench)

[mirobody-eval](https://github.com/thetahealth/mirobody-eval) · [benchmarks/](/thetahealth/mirobody/blob/main/benchmarks/README.md)

Mirobody is the health data engine behind [Theta](https://www.thetahealth.ai/), a live consumer health app on the web and mobile.

## Contributing

[#contributing](#contributing)

The most useful contribution is a term the resolver gets wrong. Run mirobody resolve "<term>"; if the answer is wrong or empty, [report it](https://github.com/thetahealth/mirobody/issues/new?template=wrong-term.yml) or send a fix with a test case. That is how the vocabulary grows into new languages: Russian panel and Estonian vitamin terms arrived in [#88](https://github.com/thetahealth/mirobody/pull/88) and Turkish lab-report spellings in [#140](https://github.com/thetahealth/mirobody/pull/140), each one row of [resolver_overrides.tsv](/thetahealth/mirobody/blob/main/mirobody/res/loinc/resolver_overrides.tsv) and one test case per term. [CONTRIBUTING.md](/thetahealth/mirobody/blob/main/CONTRIBUTING.md) has the setup and the checks.

Writing about Mirobody? The recordings, diagrams and screenshots in [docs/images](/thetahealth/mirobody/blob/main/docs/images/README.md) ship under Apache-2.0 and are ready to use in an article or a post; the index says what each one shows.

Built on [HL7 FHIR](https://hl7.org/fhir/), [LOINC](https://loinc.org/) from the [Regenstrief Institute](https://www.regenstrief.org/), [UCUM](https://ucum.org/), [ICPC-3](https://icpc-3.info/) (WONCA), [CPIC](https://cpicpgx.org/), [llama.cpp](https://github.com/ggml-org/llama.cpp) and [deepagents](https://github.com/langchain-ai/deepagents), with thanks. Terminology licences: [LICENSE-3RD-PARTY](/thetahealth/mirobody/blob/main/LICENSE-3RD-PARTY).

If Mirobody helped you make sense of a report, a star helps the next person find it.

[https://www.star-history.com/#thetahealth/mirobody&Date](https://www.star-history.com/#thetahealth/mirobody&Date)

[Documentation](/thetahealth/mirobody/blob/main/docs/README.md) · [Discussions](https://github.com/thetahealth/mirobody/discussions) · [Roadmap](/thetahealth/mirobody/blob/main/docs/roadmap.md) · [Changelog](/thetahealth/mirobody/blob/main/CHANGELOG.md) · [Security](/thetahealth/mirobody/blob/main/SECURITY.md) · [AGENTS.md](/thetahealth/mirobody/blob/main/AGENTS.md)

Apache 2.0 · © 2026 [Theta Health](https://thetahealth.ai)
