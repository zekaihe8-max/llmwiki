---
type: Source
title: "<中文标题>"
title_en: "<English title>"
description: "<一句中文概述。>"
description_en: "<One-sentence English summary.>"
resource: https://example.com/article
tags: [<tag>]
sources:
  - id: <source-id>
    resource: https://example.com/article
    title: "<Title>"
    author: human:<name>
generated:
  by: <agent>/<model>
  at: <YYYY-MM-DDThh:mm:ss+08:00>
date: <YYYY-MM-DD>
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# <中文标题>

*<English title>*

<中文摘要段落。>[^<source-id>]

<English summary paragraph.>[^<source-id>]

## 摘要 / Summary

- <中文要点。>[^<source-id>]
- <English bullet.>[^<source-id>]

## 相关 / Related

- Topic: [<Topic title>](../../topics/<topic-slug>.md)

[^<source-id>]: <Short title of the source>
