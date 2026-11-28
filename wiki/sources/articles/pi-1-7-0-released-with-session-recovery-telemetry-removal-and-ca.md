---
type: Source
title: "Pi 1.7.0 发布：会话恢复、移除遥测并保住缓存"
title_en: "Pi 1.7.0 released with session recovery, telemetry removal, and cache preservation"
description: "帖文称 Pi 1.7.0 主要改进终端会话恢复、移除遥测、保住 Prompt Cache，并更新生图与默认模型。"
description_en: "The post says Pi 1.7.0 mainly improves terminal session recovery, removes telemetry, preserves prompt caches, and updates image generation and default models."
resource: https://x.com/xiaomovps/status/2126501833757667824
tags: [pi, coding-agent, session-recovery, telemetry, prompt-cache, model-routing]
sources:
  - id: b4f55d35034ec21a
    resource: https://x.com/xiaomovps/status/2126501833757667824
    title: "Pi 1.7.0 released with session recovery, telemetry removal, and cache preservation"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:01:39+08:00
---

# Pi 1.7.0 发布：会话恢复、移除遥测并保住缓存

*Pi 1.7.0 released with session recovery, telemetry removal, and cache preservation*

帖文称，Pi 1.7.0 已发布，重点包括终端会话恢复、移除安装与升级遥测、在 GitHub Copilot 等渠道保住 Prompt Cache，以及 Codemode 生图和多平台默认模型更新。[^b4f55d35034ec21a]

According to the post, Pi 1.7.0 introduces terminal session recovery, removes install/update telemetry, preserves prompt caches, and updates image generation and default models.[^b4f55d35034ec21a]

## 摘要 / Summary

- 终端会话恢复正式落地，支持 OSC 7577 的终端重启后可自动拉起原会话，并新增 --agent-dir（PI_CODING_AGENT_DIR）及启动限制参数保护。[^b4f55d35034ec21a]
- Terminal session recovery is officially available: terminals supporting OSC 7577 can restore the previous session after restart, with --agent-dir (PI_CODING_AGENT_DIR) and startup restriction parameters for protection.[^b4f55d35034ec21a]
- 安装和升级遥测被移除，包括 /api/report-install 上报、enableInstallTelemetry 配置项和 PI_TELEMETRY 环境变量。[^b4f55d35034ec21a]
- Install and upgrade telemetry was removed, including the /api/report-install report, the enableInstallTelemetry setting, and the PI_TELEMETRY environment variable.[^b4f55d35034ec21a]
- GitHub Copilot 在支持的 Claude 5.x 和 GPT-6 模型上中途调整思考强度，或在 Claude 5.x 上增减工具时，可保住 Prompt Cache。[^b4f55d35034ec21a]
- With GitHub Copilot, changing thinking strength mid-session on supported Claude 5.x and GPT-6 models, or adding/removing tools on Claude 5.x, can preserve the prompt cache.[^b4f55d35034ec21a]
- Codemode 支持 Radius 生图，调用 OpenRouter 生图模型时可给 models.generateImages() 传 aspectRatio 和 size。[^b4f55d35034ec21a]
- Codemode supports Radius image generation, and OpenRouter image models can receive aspectRatio and size via models.generateImages().[^b4f55d35034ec21a]
- 多家平台默认模型更新：Cloudflare Workers AI 和 AI Gateway 换成 GLM-5.3，千问个人 Token Plan 切到 qwen4-max，百灵默认模型换成 Ling-3.1-flash。[^b4f55d35034ec21a]
- Default models were updated across platforms: Cloudflare Workers AI and AI Gateway switched to GLM-5.3, Qwen personal Token Plan moved to qwen4-max, and Bailian’s default became Ling-3.1-flash.[^b4f55d35034ec21a]
- 其他修复包括双感叹号命令输出不再计入上下文预估、models.json 字段错误会有明确警告，以及 Bedrock 上 Kimi K3.1 和 GLM 5.3 思考档位失效问题被修复。[^b4f55d35034ec21a]
- Other fixes include excluding double-exclamation command output from context estimation, adding clear warnings for malformed models.json fields, and fixing broken thinking tiers for Kimi K3.1 and GLM 5.3 on Bedrock.[^b4f55d35034ec21a]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2126501833757667824)。 / Original: [link](https://x.com/xiaomovps/status/2126501833757667824).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)

[^b4f55d35034ec21a]: Pi 1.7.0 released with session recovery, telemetry removal, and cache preservation
