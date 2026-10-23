---
title: Adding a page
---

# Adding a page

Add a `.md` file anywhere under `wiki/`. The next site build reads the tree again and adds the page to the sidebar. A normal page does not need a route table or a config edit.

## Steps

1. Choose a folder. Use `wiki/concepts/` for a definition and `wiki/guides/` for a procedure, or add a new folder when a page starts a new section.
2. Name the file with lowercase words separated by hyphens, for example `wiki/concepts/spaced-repetition.md`.
3. Start the file with frontmatter and one `#` heading:

```md
---
title: Spaced repetition
---

# Spaced repetition

A short definition, then the rest of the page.
```

4. Link the new page from a related page, usually the [overview](../overview.md) or the [home page](../index.md), so it can be opened without relying on the sidebar.

## What stays unpublished

Files and folders whose names start with `.` or `_` are left out of the build and the sidebar. Anything that is not Markdown is left out of the sidebar too. An image or other asset can sit beside the page that uses it.

`wiki/index.md` and `wiki/overview.md` stay first. Every other page is grouped by its folder, then sorted alphabetically.

How a saved file becomes a URL is described in [Compiled pages](../concepts/compiled-pages.md).
