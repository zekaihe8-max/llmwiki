---
type: Guide
title: 添加页面
title_en: Adding a page
description: 在 wiki/ 下新增 .md 文件；下次构建会自动进侧栏。
description_en: Add a .md file under wiki/; the next site build lists it in the sidebar.
---

# 添加页面

*Adding a page*

在 `wiki/` 任意位置新增 `.md` 文件。下次站点构建会重新读树并把该页加入侧栏。普通页面不需要路由表或改配置。

Add a `.md` file anywhere under `wiki/`. The next site build reads the tree again and adds the page to the sidebar. A normal page does not need a route table or a config edit.

## 步骤 / Steps

1. 选文件夹。定义用 `wiki/concepts/`，步骤用 `wiki/guides/`；新栏目可新建文件夹。 / Choose a folder. Use `wiki/concepts/` for a definition and `wiki/guides/` for a procedure, or add a new folder when a page starts a new section.
2. 文件名用小写单词加连字符，例如 `wiki/concepts/spaced-repetition.md`。 / Name the file with lowercase words separated by hyphens, for example `wiki/concepts/spaced-repetition.md`.
3. 文件以 frontmatter 与一个 `#` 标题开头： / Start the file with frontmatter and one `#` heading:

```md
---
title: 间隔重复
title_en: Spaced repetition
---

# 间隔重复

*Spaced repetition*

一段短定义，然后是正文其余部分。 / A short definition, then the rest of the page.
```

4. 从相关页（通常是 [概览](../overview.md) 或 [首页](../index.md)）链过来，这样不依赖侧栏也能打开。 / Link the new page from a related page, usually the [overview](../overview.md) or the [home page](../index.md), so it can be opened without relying on the sidebar.

## 不发布的内容 / What stays unpublished

名称以 `.` 或 `_` 开头的文件与文件夹不进构建与侧栏。非 Markdown 也不进侧栏。图片等资源可放在使用它的页面旁。模板骨架放在仓库根目录 `templates/`，不在 `wiki/` 内。

Files and folders whose names start with `.` or `_` are left out of the build and the sidebar. Anything that is not Markdown is left out of the sidebar too. An image or other asset can sit beside the page that uses it. Copy-ready skeletons live at repo-root `templates/`, outside `wiki/`.

`wiki/index.md` 与 `wiki/overview.md` 固定靠前；其余按文件夹分组再按字母排序。

`wiki/index.md` and `wiki/overview.md` stay first. Every other page is grouped by its folder, then sorted alphabetically.

已保存文件如何变成 URL 见 [编译页面](../concepts/compiled-pages.md)。

How a saved file becomes a URL is described in [Compiled pages](../concepts/compiled-pages.md).
