---
title: "2026-10-22 · 前沿 AI"
title_en: "2026-10-22 · Frontier AI"
description: 当日前沿 AI 动态与实践者方法简报。
description_en: Daily frontier AI news and practitioner notes.
date: 2026-10-22
type: frontier-ai
lang: zh-CN
---

## 今日主线
- Anthropic 推出 Claude Duet：会主动干活、先问再动的 Agent 预览，搭 Opus 5.5
- OpenAI 用模型挖出影响约七成网站的 PHP 高危洞，并推动两月协同披露
- 主动式个人助理一夜变赛道：Duet 与 Grok Bot / Muse / Dots 同场

## 1. 前沿动态
- **Claude Duet** 研究预览：早上简报、人走开也能继续干、行动前会问你，美区 Pro/Max 候补，底座 Opus 5.5 [原帖](https://x.com/claudeai/status/2112984664256241837) · [候补说明](https://x.com/claudeai/status/2112984669943968099)
- **OpenAI** 前沿模型与 Codex 工作流进 Google Cloud Model Garden [原帖](https://x.com/OpenAI/status/2112988118471295323) · [Google Cloud](https://x.com/googlecloud/status/2112896659608785181)
- **Patch the Planet / PHP2Shell**：GPT 协助发现多枚 PHP 关键 RCE（约 70% 网站在跑 PHP），协同披露约两月，并开了 Codex skill 帮你查站点是否中招 [原帖](https://x.com/OpenAI/status/2112907856018309586)
- **GPT-Rosalind** 跟进：对 Perry 综合征提出胆固醇转运假说，数千 agent、约 32 分钟啃小鼠脑数据（接昨天 Orchestra→Rosalind）
- **Claude Security** 企业公测：仓库连一次，先深扫再随代码变更持续扫
- **Anthropic** 发布年度公益报告；Christopher Stubbs 加入 Long-Term Benefit Trust
- **Gemini 4 Argon**：上线约 72 小时跑过约 25 万亿 tokens；DeepMind 用三个开放数据集做可交互 3D 人体解剖；Pichai 谈 Argon 与个人 Agent
- **OpenAIDevs** 拆 ChatGPT 广告栈：编排 / 检索 / 排序 / 拍卖，强调回答与广告隔离

## 2. AI 原生工作方式
- **Levie**：新形态是「垂直域自治 Agent」= 工具与电脑使用 + 垂直能力 + harness/基建，不是再套一层 LLM 壳
- **Rauch**：DeepSeek v4.1 Flash（1017）上 Vercel Token Pass，便宜且 ZDR，适合给大模型当规划用的子代理；另推 Pi on Vercel；行业协同防 php2shell，Vercel WAF 已拦 [原帖](https://x.com/rauchg/status/2112989629536440400)
- **Chase**：你记的 traces 就是训练数据，用 smithtune 微调小模型，他们任务上 9B 打过前沿
- **小墨 (@xiaomovps)**：Pi 1.4.0（compaction、Codemode 队列、分类+视觉等）；DeepSeek Harness 省 token 插件与内置市场 [原帖](https://x.com/xiaomovps/status/2113061931481489565)

## 3. 观点与洞察
- **Mollick**：AI 攻防已是非人速度 vs 人类系统；公司先被「AI 找洞带来的补丁洪峰」压住，消费者也会感到更新节奏变快；另问「哪类普通软件因 AI 写代码进步最大」，瓶颈常在别处
- **Levie**：网络安全是最深的 AI 闭环，扫描与防御侧或需要约 100 倍 token
- **steipete**：这波 PHP 大洞用 GPT‑5.6 Sol 找到；并转 php2shell 攻击量级 [原帖](https://x.com/steipete/status/2113299667320787005)
- **宝玉 (@dotey)**：Duet 中文深解（候补、定价、连接器、安全边界，对比 Muse/Dots/Grok Bot）；约两个月内四个主动 Bot 怎么选 [原帖](https://x.com/dotey/status/2112995995017421133) · [四强对比](https://x.com/dotey/status/2113014531853365681)
- **meng shao (@shao__meng)**：Duet vs Grok Bot 框架对比并链官方文 [原帖](https://x.com/shao__meng/status/2113078533841113182)
- **vista8**：用外卖比喻讲帕累托前沿，顺带点 DeepSeek v4.1-flash-1017 [原帖](https://x.com/vista8/status/2112926708533989661)
- **Huntley**：新常态是防御侧推理量要压过攻击侧，偏好只走 WireGuard、不裸奔公网的 API

## 4. 可抄作业
- **Matt**：软件三档（个人→内部→公开），没真用户前别急着公开
- **Voxyz**：发版前用 TestSprite CLI 跑 12 条真浏览器流 + 可粘贴 Claude Code 提示；慢 Mac 让 Opus 做只读体检；改代码前用 codebase-memory-mcp 建图（号称少约 29× 上下文，仍要读文件核对）
- **Hamel**：BenchmarkGate 是真的，要评你的评测本身；职业叙事转向「Trace 数据分析师」；《Evals for AI Engineers》11/12 开课
- **宝玉**：Claude Code 任务卡经 GitHub 连接器丢上云并行；儿童有声书先让 LLM 标多音字/停顿/情绪再 TTS [原帖](https://x.com/dotey/status/2113067847429632059) · [有声书](https://x.com/dotey/status/2113069735260688703)
- **vista8**：用 Opus 5.5 的 meta-prompt 挖「高杠杆小知识单元」 [原帖](https://x.com/vista8/status/2112942959167730058)
- **meng shao**：本地 Ming-3.0-tts 0.5B 做儿童朗读/配音管线，称约一周内可能开源 [原帖](https://x.com/shao__meng/status/2113076227636613349)

## 小工具 / 安全旁支（本周很吵）
- **Rauch**：行业 Slack 协同防 php2shell，Vercel WAF 已拦；另提前缓 Node.js Brotli RCE
- **宝玉汇总**：Railway secrets 泄露要轮换环境变量；GitLab CVSS 10 未授权 RCE；Node 高危 + 证书黑名单 [Railway](https://x.com/dotey/status/2113036984524423462) · [PingCAP](https://x.com/dotey/status/2113031479685005601) · [GitLab](https://x.com/dotey/status/2113011845267116172) · [Node](https://x.com/dotey/status/2113067412979433847)
- **Voxyz**：约两分钟出三种设计风格方向；把一个付费功能经 Claude Code + OpenAI Apps SDK 做成 ChatGPT 插件

## 简短判断
主动助理从「聊天框」正式挤进产品主线，Duet 把「人走开也能干、动之前先问」写进官方叙事，和中文圈已在用的 Grok Bot 类工具正面撞车。另一条主线是攻防速度：模型既在挖洞也在帮补，Mollick / Levie / Huntley 都在说人类流程跟不上。写法上可抄的仍是 traces 当训练数据、发版前真浏览器自测、子代理用便宜 Flash，比再堆提示词更管用。
