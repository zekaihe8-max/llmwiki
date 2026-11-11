---
type: Source
title: "dsh-market：DeepSeek Harness 内置插件市场"
title_en: "dsh-market: the plugin market inside DeepSeek Harness"
description: "GitHub 仓库 dsh-market 介绍它是 DeepSeek Harness 内的插件市场，可浏览、搜索并一键安装，在较新版本里作为插件页上的标签页出现。"
description_en: "The dsh-market GitHub repo describes a plugin market inside DeepSeek Harness, with browse, search, and one-click install, appearing as a tab on the Plugins page in newer hosts."
resource: https://github.com/dsh-market/dsh-market
tags: [x-digest, cn-x, dsh, harness, plugins]
sources:
  - id: dsh-market-repo
    resource: https://github.com/dsh-market/dsh-market
    title: "dsh-market: the plugin market inside DeepSeek Harness"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T21:06:00+08:00
---

# dsh-market：DeepSeek Harness 内置插件市场

*dsh-market: the plugin market inside DeepSeek Harness*

GitHub 仓库 dsh-market/dsh-market 的说明写道，这是 DeepSeek Harness 内的插件市场。在 dsh 0.2.1 及以上，它出现在插件页里、紧挨「已安装」的标签页中；更旧的宿主则要打开设置里的插件市场。页面强调可以浏览、搜索并一键安装，同一份目录也可以作为插件市场索引源来添加。[^dsh-market-repo]

The GitHub repository dsh-market/dsh-market describes itself as the plugin market inside DeepSeek Harness. On dsh 0.2.1 and newer it is a tab on the Plugins page next to Installed; on older hosts it is opened from Settings → Plugin Market. The README highlights browse, search, and one-click install, and says the same catalog can also be added as a plugin-market index source.[^dsh-market-repo]

## 摘要 / Summary

- 仓库说明这是 DeepSeek Harness 内的插件市场，支持浏览、搜索和一键安装。[^dsh-market-repo]
- The repo says this is the plugin market inside DeepSeek Harness, with browse, search, and one-click install.[^dsh-market-repo]
- 在 dsh 0.2.1 及以上，入口是插件页上挨着「已安装」的标签；更旧版本则走设置中的插件市场。[^dsh-market-repo]
- On dsh 0.2.1 and later, the entry is a tab next to Installed on the Plugins page; older versions use Settings → Plugin Market.[^dsh-market-repo]
- README 还称可浏览社区目录，文中写有 4200 余个插件，并提供分类筛选、Star 数和中英简介。[^dsh-market-repo]
- The README also says the community catalog can be browsed, citing 4,200+ plugins, with category filters, star counts, and bilingual descriptions.[^dsh-market-repo]
- 官方 DSH Desktop 可在应用的设置插件里搜索 dshmarket 安装；普通 dsh web 则用命令行添加插件后再重启。[^dsh-market-repo]
- Official DSH Desktop can install dshmarket from Settings → Plugins in the app; regular dsh web adds the plugin from the command line and then restarts.[^dsh-market-repo]
- 同一目录也可作为索引源添加，README 给出了 npm CDN 地址，并提醒部分 GitHub Pages 镜像可能超时。[^dsh-market-repo]
- The same catalog can also be added as an index source; the README gives an npm CDN URL and warns that some GitHub Pages mirrors may time out.[^dsh-market-repo]

## 相关 / Related

- 原文：[链接](https://github.com/dsh-market/dsh-market)。 / Original: [link](https://github.com/dsh-market/dsh-market).
- Topic: [插件样式不一使 Harness 界面碎片化 / Harness UI fragmentation from mismatched plugin styles](../../topics/harness-plugin-style-fragmentation.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)

[^dsh-market-repo]: dsh-market: the plugin market inside DeepSeek Harness
