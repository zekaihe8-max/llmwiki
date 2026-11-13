---
type: Source
title: "Home Repo 主仓模式"
title_en: "The Home Repo Pattern"
description: "一个仓库统一托管技能、AGENTS.md 与共享文档，并通过指针关联其他仓库，让 Agent 跨仓库协作。"
description_en: "One repository unifies skills, AGENTS.md and shared docs, with pointers to other repos so agents can work across repositories."
resource: https://www.aihero.dev/the-home-repo-pattern
tags: [home-repo, agents, agents-md, skills, multi-repo]
sources:
  - id: home-repo-pattern
    resource: https://www.aihero.dev/the-home-repo-pattern
    title: "The Home Repo Pattern"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-13T08:20:09+08:00
---

# Home Repo 主仓模式

*The Home Repo Pattern*

「帖文称」Home Repo（主仓）是一个仓库，用于存放你的技能、AGENTS.md 和共享文档，并通过指针指向你的其他仓库。你在主仓中运行 Agent，其 AGENTS.md 持有每个其他仓库的导航指针，以便 Agent 按需打开或克隆它们。该模式旨在解决项目跨多个仓库时，Agent 仅看到单一仓库、技能与设置被重复、以及跨仓库功能规划缺乏全局概览的问题。[^home-repo-pattern]

A Home Repo is one repository that holds your skills, AGENTS.md and shared docs, with navigation pointers to each of your other repos. You run your agent in the Home Repo so it can open or clone other repos as needed. It addresses the problem where an agent started in one repo sees only that repo, causing duplicated skills and setup, and making cross-repo feature planning lack a full overview.[^home-repo-pattern]

## 摘要 / Summary

- 主仓提供三个核心优势：统一的转向文件与工具位置、运行所有 Agent 的单一位置、以及从单个会话中对多个仓库进行 sweeping 更改。[^home-repo-pattern]
- The Home Repo offers one place for steering files and tooling, one place to run all agents, and sweeping changes across multiple repos from a single session.[^home-repo-pattern]
- 设置包含四个步骤：仓库清点、共享素材清点、达成计划、应用计划；在获得批准前只读取，不做任何更改。[^home-repo-pattern]
- Setup includes four steps—inventory repos, inventory shared material, agree the plan, apply the plan—and before approval only reads are made, with no changes.[^home-repo-pattern]
- 主仓的 AGENTS.md 应包含简短介绍，以及“其他仓库”章节，每个仓库一个指针，格式为名称（是什么）：本地路径，缺失时从远程克隆。[^home-repo-pattern]
- The Home Repo's AGENTS.md should include a short intro and an "Other Repos" section with one pointer per repo: name (what it is): local path, clone from remote if missing.[^home-repo-pattern]
- 当仓库超过约 20 个时，应将指针按领域分组到每个领域一个文件，并指向这些文件，而不是在 AGENTS.md 中直接列出所有指针。[^home-repo-pattern]
- Past about 20 repos, group pointers into one file per area and point at those files instead of listing all pointers directly in AGENTS.md.[^home-repo-pattern]
- 共享与重复素材应移至主仓并保留最新版本，仓库特定素材保留在原仓库，已安装素材保持已安装状态。[^home-repo-pattern]
- Shared and duplicate items move to the Home Repo as one newest copy; repo-specific items stay in their repo; installed items stay installed.[^home-repo-pattern]

## 相关 / Related

- 原文：[链接](https://www.aihero.dev/the-home-repo-pattern)。 / Original: [link](https://www.aihero.dev/the-home-repo-pattern).
- Topic: [跨 Agent 统一资源库 / Unified cross-agent resource library](../../topics/unified-agent-resource-library.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)

[^home-repo-pattern]: The Home Repo Pattern
