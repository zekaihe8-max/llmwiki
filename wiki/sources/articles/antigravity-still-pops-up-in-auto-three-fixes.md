---
type: Source
title: "Antigravity 开 Auto 仍弹窗？三招搞定"
title_en: "Antigravity Still Pops Up in Auto? Three Fixes"
description: "帖文给出 Antigravity 自动模式频繁授权弹窗的三类处理：黑白名单、审查插件与微虚拟机隔离。"
description_en: "The post offers three ways to reduce Antigravity Auto-mode approval popups: allow/deny lists, vetting plugins, and micro-VM isolation."
resource: https://x.com/xiaomovps/status/2126488236235329939
tags: [agents, antigravity, auto-mode, permissions, sandbox, plugins]
sources:
  - id: antigravity-auto-popup-759005df5563ab69
    resource: https://x.com/xiaomovps/status/2126488236235329939
    title: "Antigravity Still Pops Up in Auto? Three Fixes"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:17:25+08:00
---

# Antigravity 开 Auto 仍弹窗？三招搞定

*Antigravity Still Pops Up in Auto? Three Fixes*

帖文称，Antigravity 在 Auto 模式下跑长任务仍会频繁弹出授权，原因包括默认沙箱禁外网、MCP 与读网页每次必问、子任务不继承权限；作者给出三招：官方黑白名单、带语法审查的拦截插件、Docker 或 Leash 微虚拟机隔离。[^antigravity-auto-popup-759005df5563ab69]

The post says Antigravity can still prompt frequently in Auto mode during long tasks because the default sandbox blocks external network access, MCP and web reads require repeated approval, and spawned subtasks often do not inherit permissions; it suggests allow/deny lists, syntax-reviewing interceptor plugins, and Docker or Leash micro-VM isolation.[^antigravity-auto-popup-759005df5563ab69]

## 摘要 / Summary

- 作者建议保持 Auto 预设，不裸开 Turbo；在全局权限的 Allow 中加入只读 MCP、github.com 域名和常用测试命令，在 Deny 中封禁 rm -rf、sudo、.git 和 .ssh，并强调黑名单优先级最高，不能只写在 GEMINI.md 里。[^antigravity-auto-popup-759005df5563ab69]
- The author recommends keeping the Auto preset instead of enabling Turbo directly; add read-only MCP, the github.com domain, and common test commands to Allow, deny rm -rf, sudo, .git, and .ssh, and notes that deny rules have highest priority and should not live only in GEMINI.md.[^antigravity-auto-popup-759005df5563ab69]
- 若装拦截插件，帖文称要避开市场里 36 万下载的 pesosz 版，因为它不审命令内容；桌面端可选 kaushiksaravanan 版做静态扫描并发送 Ctrl+C，手机远程急停可选 yazanbaker94 版，终端党可用 agy-auto 原生钩子防拼接绕过。[^antigravity-auto-popup-759005df5563ab69]
- For interceptor plugins, the post says to avoid the 360,000-download pesosz version because it does not inspect command content; the desktop kaushiksaravanan version statically scans scripts and sends Ctrl+C, the yazanbaker94 version supports remote phone emergency stops, and terminal users can use agy-auto native hooks to prevent concatenation bypasses.[^antigravity-auto-popup-759005df5563ab69]
- 想通宵拉满 Turbo，帖文建议套一层 Docker 沙箱或 Leash，把运行环境关进独立微虚拟机，并且只挂载当前项目文件夹，不要挂载整个用户主目录。[^antigravity-auto-popup-759005df5563ab69]
- To run Turbo at full capacity overnight, the post suggests wrapping the environment in a Docker sandbox or Leash micro-VM and mounting only the current project folder, not the entire user home directory.[^antigravity-auto-popup-759005df5563ab69]
- 日常编码作者认为先配好黑白名单就够用；不会写规则时，可把常用命令交给 AI 按官方格式生成配置，官方权限文档见 antigravity.google/docs/permissio…。[^antigravity-auto-popup-759005df5563ab69]
- For everyday coding, the author says configuring the allow/deny lists is enough; if unsure how to write rules, one can ask AI to generate configuration in the official format, with the official permissions doc at antigravity.google/docs/permissio….[^antigravity-auto-popup-759005df5563ab69]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2126488236235329939)。 / Original: [link](https://x.com/xiaomovps/status/2126488236235329939).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [账号与资产安全卫生 / Account and asset security hygiene](../../topics/account-and-asset-security-hygiene.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)

[^antigravity-auto-popup-759005df5563ab69]: Antigravity Still Pops Up in Auto? Three Fixes
