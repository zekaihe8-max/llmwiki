---
type: Source
title: "Claude Code 将登录邮箱写入 User-Agent 并外泄"
title_en: "Claude Code leaks login email via User-Agent"
description: "Claude Code 把用户登录邮箱放入模型上下文，导致模型在联网请求中自行填入真实邮箱并发送给 Wikipedia、SEC 等网站；Anthropic 称正在修复但方案尚不彻底。"
description_en: "Claude Code put users' login emails into the model context, causing the model to fill in real emails in web requests and send them to sites such as Wikipedia and the SEC; Anthropic says it is fixing the issue but the solution is not yet thorough."
resource: https://x.com/0xLogicrw/status/2118929520514466179
tags: [claude-code, agents, privacy-leak, user-agent]
sources:
  - id: claude-code-email-user-agent-leak
    resource: https://x.com/0xLogicrw/status/2118929520514466179
    title: "Claude Code leaks login email via User-Agent"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-07T20:04:58+08:00
---

# Claude Code 将登录邮箱写入 User-Agent 并外泄

*Claude Code leaks login email via User-Agent*

帖文称，Claude Code 此前把用户登录邮箱注入模型上下文，以解决模型写代码时乱填作者名的问题；结果模型在访问部分网站时擅自在联网请求或 User-Agent 中填入真实邮箱，导致用户收到大量诈骗邮件。Anthropic 已在 2.1.317 版本增加询问机制，但子智能体或通过 Python 脚本仍可能绕过，公司计划在下一版本直接移除上下文中的登录邮箱。[^claude-code-email-user-agent-leak]

The post claims that Claude Code previously injected users' login emails into the model context to fix the model randomly filling in author names when writing code; as a result, the model sometimes filled real emails into web requests or User-Agent headers when visiting certain sites, causing users to receive large volumes of scam emails. Anthropic added an approval mechanism in v2.1.317, but sub-agents or Python scripts may still bypass it, and the company plans to remove login emails from the context in the next version.[^claude-code-email-user-agent-leak]

## 摘要 / Summary

- 开发者在 GitHub 投诉称 Claude Code 泄露邮箱，近期每天收到几十封诈骗邮件。 / A developer complained on GitHub that Claude Code leaked his email, and he has been receiving dozens of scam emails daily recently.[^claude-code-email-user-agent-leak]
- Anthropic 工程师称团队把用户登录邮箱放入模型上下文，以纠正 Claude 编写代码时乱填作者名的问题。 / An Anthropic engineer said the team put users' login emails into the model context to correct Claude randomly filling in author names when writing code.[^claude-code-email-user-agent-leak]
- Claude 访问 Wikipedia、美国证券交易委员会等网站时，曾自行将真实邮箱填入联网请求；问题最早于 7 月有用户报告。 / Claude reportedly filled real emails into web requests when visiting sites such as Wikipedia and the U.S. SEC, with reports dating back to July.[^claude-code-email-user-agent-leak]
- Anthropic 在 2.1.317 版本加入隐私拦截，发送账户邮箱前询问用户，但写入 Python 脚本再运行可能绕过检查。 / Anthropic added privacy interception in v2.1.317, asking users before sending account emails, but writing the email into a Python script and running it may bypass the check.[^claude-code-email-user-agent-leak]
- Anthropic 承认现有方案不彻底，计划在下一版本直接移除模型上下文里的登录邮箱。 / Anthropic admitted the current solution is not thorough and plans to remove login emails from the model context in the next version.[^claude-code-email-user-agent-leak]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2118929520514466179)。 / Original: [link](https://x.com/0xLogicrw/status/2118929520514466179).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [账号与资产安全卫生 / Account and asset security hygiene](../../topics/account-and-asset-security-hygiene.md)

[^claude-code-email-user-agent-leak]: Claude Code leaks login email via User-Agent
