---
title: Compiled pages
---

# Compiled pages

A compiled page is a Markdown file the static site renders. Editing the file changes the page. There is no second body of content stored in the site app.

## From file to URL

The path under `wiki/` is the public path. The site drops the `.md` extension.

| File | URL |
| --- | --- |
| `wiki/index.md` | `/` |
| `wiki/overview.md` | `/overview` |
| `wiki/concepts/compiled-pages.md` | `/concepts/compiled-pages` |

Use frontmatter when the sidebar label should differ from the file name:

```yaml
---
title: Compiled pages
---
```

If `title` is omitted, the sidebar uses the first `#` heading, then the file name.

## Links

Link to another page with a relative Markdown link that keeps the `.md` extension:

```md
See the [overview](../overview.md).
```

The published URL does not include `.md`. Headings, lists, tables, and fenced code are rendered as written.

Return to the [overview](../overview.md) or read [Adding a page](../guides/adding-a-page.md).
