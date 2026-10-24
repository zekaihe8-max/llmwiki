---
type: Concept
title: 编译页面
title_en: Compiled pages
description: Markdown 文件经静态站点渲染即为发布页；改文件即改页。
description_en: A compiled page is a Markdown file the static site renders; editing the file changes the page.
---

# 编译页面

*Compiled pages*

编译页面是静态站点直接渲染的 Markdown 文件。编辑该文件就改变页面。站点应用里不再另存一份正文。

A compiled page is a Markdown file the static site renders. Editing the file changes the page. There is no second body of content stored in the site app.

## 从文件到 URL / From file to URL

`wiki/` 下的路径即公开路径；站点去掉 `.md` 后缀。

The path under `wiki/` is the public path. The site drops the `.md` extension.

| File | URL |
| --- | --- |
| `wiki/index.md` | `/` |
| `wiki/overview.md` | `/overview` |
| `wiki/concepts/compiled-pages.md` | `/concepts/compiled-pages` |

侧栏标签与文件名不同时，用 frontmatter 的 `title`：

Use frontmatter when the sidebar label should differ from the file name:

```yaml
---
title: 编译页面
title_en: Compiled pages
---
```

若省略 `title`，侧栏依次尝试第一个 `#` 标题，再回退到文件名。

If `title` is omitted, the sidebar uses the first `#` heading, then the file name.

## 链接 / Links

链到其他页面时用相对 Markdown 链接，并保留 `.md` 后缀：

Link to another page with a relative Markdown link that keeps the `.md` extension:

```md
See the [overview](../overview.md).
```

发布 URL 不含 `.md`。标题、列表、表格与围栏代码按原文渲染。

The published URL does not include `.md`. Headings, lists, tables, and fenced code are rendered as written.

返回 [概览](../overview.md)，或阅读 [添加页面](../guides/adding-a-page.md)。

Return to the [overview](../overview.md) or read [Adding a page](../guides/adding-a-page.md).
