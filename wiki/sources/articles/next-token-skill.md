---
type: Source
title: "Next Token Skill / 让你的 AI Agent 听过每一期 Next Token"
title_en: "Next Token Skill"
description: "一个让 AI Agent 检索 Next Token 播客逐字稿并附带视频时间戳的本地技能"
description_en: "A local skill that lets AI Agents search Next Token podcast transcripts and return video timestamp links"
resource: https://github.com/next-token-tv/next-token-skill
tags: [next-token, podcast, agent-skill, transcription]
sources:
  - id: next-token-skill
    resource: https://github.com/next-token-tv/next-token-skill
    title: "Next Token Skill"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:49:54+08:00
---

# Next Token Skill / 让你的 AI Agent 听过每一期 Next Token

*Next Token Skill*

「Next Token Skill」是一个面向 AI Agent 的本地技能，它将 Next Token 播客的全部逐字稿和文章同步到本机，支持按关键词检索、按时间线梳理观点，并从官网文字稿页面提取 B 站/YouTube 时间戳链接，让 Agent 回答时能直接引用四位主理人在节目里的原话并跳转到对应视频位置。[^next-token-skill]

"Next Token Skill" is a local skill for AI Agents that syncs all Next Token podcast transcripts and articles to the local machine, supports keyword search and chronological review of viewpoints, and extracts Bilibili/YouTube timestamp links from the official transcript pages, enabling Agents to quote the four hosts' original words and jump to the corresponding video positions when answering.[^next-token-skill]

## 摘要 / Summary

- 脚本仅使用 Python 标准库，零依赖，无需 API Key，内容同步后全部在本地检索。[^next-token-skill]
- The script uses only the Python standard library, has zero dependencies, requires no API Key, and all retrieval is local after content sync.[^next-token-skill]
- 支持 search、brief、related、timeline、episodes、read 等命令，可按主理人、期号、章节过滤。[^next-token-skill]
- Supports commands such as search, brief, related, timeline, episodes, and read, with filtering by speaker, episode, and chapter.[^next-token-skill]
- 首次运行自动同步全部节目逐字稿和博客文章，之后每次运行检查新一期，10 分钟内不重复检查，博客文章每天最多刷新一次。[^next-token-skill]
- On first run it syncs all episode transcripts and blog articles; afterward it checks for new episodes on each run, with no repeat checks within 10 minutes and blog articles refreshed at most once per day.[^next-token-skill]
- 所有时间戳链接均从 nexttoken.tv 文字稿页面原样取得，Agent 不会自行拼接；部分早期段落无独立时间戳，输出会标注“约”。[^next-token-skill]
- All timestamp links are taken verbatim from nexttoken.tv transcript pages and are not assembled by the Agent; some early segments lack independent timestamps and are marked "约" in the output.[^next-token-skill]
- 代码采用 Apache License 2.0，节目内容（逐字稿、文章、音视频、品牌）版权归 Next Token 及主理人所有，不包含在仓库中，运行时从官网获取。[^next-token-skill]
- Code is licensed under Apache License 2.0; program content (transcripts, articles, audio/video, brand) is copyrighted by Next Token and the hosts, is not included in the repository, and is fetched from the official website at runtime.[^next-token-skill]

## 相关 / Related

- 原文：[链接](https://github.com/next-token-tv/next-token-skill)。 / Original: [link](https://github.com/next-token-tv/next-token-skill).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [播客 AI 精细转写精读 / Podcast AI fine-transcription close reads](../../topics/podcast-ai-fine-transcription-close-reads.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)

[^next-token-skill]: Next Token Skill
