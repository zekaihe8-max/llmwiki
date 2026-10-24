---
type: Source
title: "<Title>"
description: "<One sentence summarizing the article.>"
resource: https://example.com/article
tags: [<tag>]
sources:
  - id: <source-id>
    resource: https://example.com/article
    title: "<Title>"
    author: human:<name>
generated:
  by: <agent>/<model>
  at: <YYYY-MM-DDThh:mm:ssZ>
date: <YYYY-MM-DD>
---

# <Title>

<One-paragraph summary of the article.>[^<source-id>]

## Summary

- <Claim, attributed with a footnote whose label matches `sources[].id`.>[^<source-id>]

## Related

- Topic: [<Topic title>](../../topics/<topic-slug>.md)

[^<source-id>]: <Short title of the source>
