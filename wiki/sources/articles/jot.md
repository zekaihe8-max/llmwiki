---
type: Source
title: "乔木闪记 · Jot"
title_en: "Jot (乔木闪记)"
description: "macOS 菜单栏常驻工具，通过全局快捷键将想法、选中文字、截图和文件快速收录到 Obsidian 今日日记或任意 Markdown 文件夹。"
description_en: "A macOS menu bar app that captures thoughts, selections, screenshots and files into Obsidian daily notes or any Markdown folder via global shortcuts."
resource: https://github.com/joeseesun/qiaomu-jot
tags: [macos, obsidian, note-capture, menu-bar, markdown, local-first]
sources:
  - id: qiaomu-jot
    resource: https://github.com/joeseesun/qiaomu-jot
    title: "Jot (乔木闪记)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T20:17:13+08:00
---

# 乔木闪记 · Jot

*Jot (乔木闪记)*

本文介绍 GitHub 仓库 joeseesun/qiaomu-jot 的中英文说明，即「乔木闪记 · Jot」。它是一款面向 macOS 的菜单栏小工具，主打 ⌘⇧J 随手记与 ⌘⇧K 一键收录两个快捷键，可将文字、截图、剪贴板及文件原样写入 Obsidian 日记或普通 Markdown 文件夹，并标注来源；文中还列出本机 OCR、场景快捷键、全库搜索、自动更新及本地隐私边界等功能，并说明仅支持 macOS 13 以上、需辅助功能权限。[^qiaomu-jot]

This article presents the bilingual README for GitHub repo joeseesun/qiaomu-jot, i.e. Jot (乔木闪记). It is a macOS menu bar tool built around two global shortcuts—⌘⇧J for quick notes and ⌘⇧K for capturing selections—that writes text, screenshots, clipboard contents and files verbatim into Obsidian daily notes or any Markdown folder with source attribution. The text also covers on-device OCR, scene shortcuts, vault-wide search, auto-updates, local-only privacy limits, and requirements such as macOS 13+ and Accessibility permission.[^qiaomu-jot]

## 摘要 / Summary

- 提供 ⌘⇧J 弹出输入框随手记和 ⌘⇧K 一键收录选中内容/剪贴板/截图，快捷键可自定义并最多添加 6 个场景。 / Offers ⌘⇧J to open a floating editor for quick notes and ⌘⇧K to capture selections, clipboard or screenshots without a window; shortcuts are customizable and up to six scenes can be added.[^qiaomu-jot]
- 内容原样保存，自动带网页标题链接、PDF 页码、代码语言等来源信息，支持列表、引用、Callout 或自定义模板。 / Content is saved verbatim with source info such as page title links, PDF page numbers and code language; presets include plain, list, quote, callout or custom templates.[^qiaomu-jot]
- 本机识别截图中的中英文文字，写入默认折叠的块中，日后可搜索。 / On-device OCR recognizes Chinese and English text in screenshots and writes it into a folded block for later search.[^qiaomu-jot]
- 无需 Obsidian 也能使用，普通文件夹采用标准 Markdown 链接与附件目录，Typora、VS Code、iA Writer 均可打开。 / Works without Obsidian; plain folders use standard Markdown links and an attachments directory, openable by Typora, VS Code and iA Writer.[^qiaomu-jot]
- 全部在本机完成，不上传也不统计数据，密码框和密码管理器内容不收录；仅在粘贴裸链接换标题时访问网页，且可关闭。 / Everything runs locally with no upload or tracking; password fields and password managers are never captured, and the only network fetch for page titles can be disabled.[^qiaomu-jot]

## 相关 / Related

- 原文：[链接](https://github.com/joeseesun/qiaomu-jot)。 / Original: [link](https://github.com/joeseesun/qiaomu-jot).
- Topic: [AI 辅助剪藏与媒体笔记 / AI-assisted clipping and media notes](../../topics/ai-assisted-clipping-and-notes.md)
- Topic: [menubar 管理工具真空 / Menubar management tool gap](../../topics/menubar-management-tool-gap.md)
- Topic: [启动器快捷键 AI 优于打开 Agent / Launcher shortcut AI over opening Agent](../../topics/launcher-shortcut-ai-over-agent.md)

[^qiaomu-jot]: 乔木闪记（Jot）GitHub README
