---
title: Overview
---

# Overview

The Hezekai wiki is a compiled knowledge base. The Markdown files in `wiki/` are the source of truth. The published site renders those files; it does not keep a separate copy of the pages.

## How it is organized

| Path | Role |
| --- | --- |
| `wiki/index.md` | Home page |
| `wiki/overview.md` | This overview |
| `wiki/concepts/` | Definitions and durable ideas |
| `wiki/guides/` | Short procedures for working in the wiki |
| `wiki/sources/x-digest/` | Curated daily digests from X |

A folder becomes a sidebar section. A `.md` file becomes a page. `index.md` and `overview.md` stay at the top; other pages are grouped by folder and then listed alphabetically.

## What belongs here

Write a page when the idea should stay readable on its own: a concept, a decision, a procedure, or a note you expect to look up later. Cross-link with ordinary Markdown links to other `.md` files.

See [Compiled pages](./concepts/compiled-pages.md) for how paths map to URLs, and [Adding a page](./guides/adding-a-page.md) for the file to create. Daily X briefs are in [X digests](./sources/x-digest/index.md).
