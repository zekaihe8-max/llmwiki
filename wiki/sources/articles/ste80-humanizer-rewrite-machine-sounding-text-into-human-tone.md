---
type: Source
title: "把机器味重的文字改回人写的语气"
title_en: "ste80-humanizer: Rewrite machine-sounding text into human tone"
description: "两遍改写：先清除机器写作习惯，再按受控英语重搭句子，让文本更像人写。"
description_en: "Two-pass rewriting: first remove machine-writing habits, then rebuild sentences with controlled English to make text sound human."
resource: https://colaskill.com/zh/ste80-humanizer
tags: [ai-writing, humanizer, controlled-english, open-source, rewriting]
sources:
  - id: ste80-humanizer
    resource: https://colaskill.com/zh/ste80-humanizer
    title: "ste80-humanizer: Rewrite machine-sounding text into human tone"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:17:42+08:00
---

# 把机器味重的文字改回人写的语气

*ste80-humanizer: Rewrite machine-sounding text into human tone*

「帖文称」ste80-humanizer 是由 Dodaios 开发、MIT 许可开源的工具，GitHub 获得 1.1K 颗星，旨在把机器味重的文字改回人写语气。它采用两遍改写：先清掉模型写作习惯，再按受控英语重搭句子，改完按类别列出改动，适用于文档、说明、邮件和帖子。[^ste80-humanizer]

The post presents ste80-humanizer, an MIT-licensed open-source tool by Dodaios with 1.1K GitHub stars, that rewrites machine-sounding text into a human tone. It uses two passes: first removing AI writing habits, then rebuilding sentences with controlled English, and lists changes by category for documents, instructions, emails, and posts.[^ste80-humanizer]

## 摘要 / Summary

- 作者为 Dodaios，项目采用 MIT 许可，GitHub 获得 1.1K 颗星。[^ste80-humanizer]
- The author is Dodaios, the project is MIT-licensed, and its GitHub repository has 1.1K stars.[^ste80-humanizer]
- 第一遍对照公开的机器写作特征清单，删除诸如“非甲即乙”句式、段末总结、硬凑三连排比、满屏破折号、空洞大词、过度承诺和客服式开场白等习惯。[^ste80-humanizer]
- The first pass compares text against a public list of machine-writing features and removes habits such as “not A but B” patterns, end-of-paragraph summaries, forced triple parallelism, excessive em-dashes, empty buzzwords, over-promising, and customer-service-style openings.[^ste80-humanizer]
- 第二遍按受控技术英语结构重搭句子：一句一个意思、句子短、主动语态、简单时态、常见词。[^ste80-humanizer]
- The second pass rebuilds sentences using controlled technical English: one meaning per sentence, short sentences, active voice, simple tenses, and common words.[^ste80-humanizer]
- 改完后会按类别列出改动，方便用户核对，适合文档、说明、邮件、帖子等场景。[^ste80-humanizer]
- After editing, changes are listed by category for verification, and the tool suits documents, instructions, emails, posts, and other scenarios.[^ste80-humanizer]
- 示例指令包括让模型把明显的 AI 文案改得自然、去掉邮件套话与夸张承诺、拆长句并首次出现术语时解释。[^ste80-humanizer]
- Example instructions include making obvious AI copy sound natural, removing email clichés and exaggerated promises, splitting long sentences, and explaining terms on first use.[^ste80-humanizer]

## 相关 / Related

- 原文：[链接](https://colaskill.com/zh/ste80-humanizer)。 / Original: [link](https://colaskill.com/zh/ste80-humanizer).
- Topic: [开源工具装进 AI 助手做自然语言剪辑 / Open-source tools in AI assistants for natural-language editing](../../topics/open-source-in-ai-assistant-editing.md)
- Topic: [校准对 AI 的过度与不足引导 / Calibrating over- and under-guidance of AI](../../topics/calibrating-ai-guidance.md)
- Topic: [一次只问一个问题 / One question at a time](../../topics/one-question-at-a-time.md)

[^ste80-humanizer]: ste80-humanizer: Rewrite machine-sounding text into human tone
