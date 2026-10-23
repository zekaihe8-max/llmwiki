---
title: "2026-10-23 08:10 · 前沿 AI"
date: 2026-10-23
type: frontier-ai
lang: zh-CN
---

## 今日主线
- Agent Skills 捐给 Agentic AI Foundation，与 MCP 同属开放标准阵营
- Claude 用形式化验证扫过上百个开源库；付费端下周默认 auto mode
- Decisions API 转正式可用；中文圈在拆 Harness 缓存与 Skills 写法

## 前沿动态
- **Anthropic (@AnthropicAI)**：与 Theorem Labs 用 Claude 对数百个真实开源库做形式化安全证明，几周量级完成（历史上多只能啃小库或靠专家堆时间）[原帖](https://x.com/AnthropicAI/status/2113390212911083894)
- **Claude (@claudeai)**：下周起 Pro/Max/Team 在网页、桌面、手机默认 auto mode，风险动作由分类器拦，可随时切回手动；另宣布 Claude 在 Google Cloud（Anthropic 托管）正式可用 [原帖](https://x.com/claudeai/status/2113360845409583307) · [原帖](https://x.com/claudeai/status/2113380122468454765)
- **ClaudeDevs / AAIF**：Agent Skills 捐给 @AgenticAIFdn（同 MCP 去处），已有 70+ 平台接入（ChatGPT、Cursor、Copilot、VS Code 等）；同期入驻还有 Open Responses、OpenEnv、OpenSandbox，AAIF 托管项目到 10 个 [原帖](https://x.com/ClaudeDevs/status/2113328526413996100) · [原帖](https://x.com/AgenticAIFdn/status/2113299854138945588)
- **OpenAIDevs (@OpenAIDevs)**：Decisions API 正式可用，近实时分类文本/图片、选下一步，不必整段生成完整回复 [原帖](https://x.com/OpenAIDevs/status/2113346642787086538)
- **OpenAI (@OpenAI)**：今夏请 METR 与 Redwood 进驻三周，评估内部 agent 错位监控，结果已用来加固防护并规划后续第三方评估 [原帖](https://x.com/OpenAI/status/2113298833392496746)
- **Google Cloud (@googlecloud)**：AGNTCon 上推 Agent Compute Engine，并扩大 Gemini for business 的 agent 治理能力 [原帖](https://x.com/googlecloud/status/2113285915258794378)
- **SemiAnalysis (@SemiAnalysis_)**（宝玉转述）：部分 Claude 账号在做额度 A/B，月总量折合 API 价值约少两成，5 小时额度约多两成，并非全员 [原帖](https://x.com/SemiAnalysis_/status/2113383965784502444) · [原帖](https://x.com/dotey/status/2113425021158699384)

## AI 原生工作方式
- **Boris Cherny (@bcherny)**：Skills 从 Claude Code 实验做成行业标准后捐出；斯坦福课上 Mihail 问他现在跑多少 Claude agent，答「几千个」 [原帖](https://x.com/bcherny/status/2113333859907747871) · [原帖](https://x.com/mihail_eric/status/2113277483701395508)
- **meng shao (@shao__meng)** 整理 Boris 五条：自动化真正瓶颈、为六个月后模型建、小团队更快、用循环思考、懂领域的人会赢；团队去年 11 月起代码近乎全由 Claude 写，人均约 10× [原帖](https://x.com/shao__meng/status/2113291579750551931)
- **Guillermo Rauch (@rauchg)**：Agent 把软件拉向两极：深后端 + 即时前端；tmp.now 让 agent 零注册也能丢出可访问 URL [原帖](https://x.com/rauchg/status/2113357674989650307)
- **Paul Graham (@paulg)**：老公司最多适应 AI，新公司天生 AI-native；中间态是 Podium 那种硬把自己重做成 AI-native（二次冲到 $150M AI ARR） [原帖](https://x.com/paulg/status/2113284574172135639)
- **Alex Albert (@alexalbert__)**：用 Claude Duet 一类产品帮本地小生意跑日常，可能比当年 Square / Google Maps 影响更大（观点帖，非产品官宣） [原帖](https://x.com/alexalbert__/status/2113386454907007444)

## 领袖与研究者洞察
- **Ethan Mollick (@emollick)**：2024 年首本书时 AI 约能做 4 分钟人类活（50% 成功）；交 Co-Existence 初稿时约 17 小时；书两天前出版时约 17 周 [原帖](https://x.com/emollick/status/2113323645284344215)
- **Aaron Levie (@levie)**：看 AI 会造哪些岗位，先看网络安全；越 agent 化越要人定目标、审发现、打补丁、应急 [原帖](https://x.com/levie/status/2113137032633757773)
- **Nathan Lambert (@natolambert)**：开源权重也会被攻用，但未来一年里开源对网防「托底」的作用常被 doom 叙事低估 [原帖](https://x.com/natolambert/status/2113231789321838934)
- **François Chollet (@fchollet)**：若公理式坚信几月内末日且又怕又兴奋、圈子全同款叙事，更像千禧年邪教征兆（对激进末日叙事的吐槽） [原帖](https://x.com/fchollet/status/2113195600829182199)

## 实践者方法
- **Vox (@Voxyz_ai)**：建议 AGENTS.md 加两行：砍掉靠文案才能看懂的界面；决策同时抬 UX/DX/AX [原帖](https://x.com/Voxyz_ai/status/2113254050170843418)
- **Vox**：Skills 捐出后提炼六条写法（先实干再固化、每行问「没有会不会错」、description 决定是否被唤起、SKILL.md 控体积、脆弱步骤写死命令、gotchas 最值钱） [原帖](https://x.com/Voxyz_ai/status/2113374840413421906)
- **Matt Pocock (@mattpocockuk)**：「代码不是 spec 才是宇宙中心」；问题极模糊时用 `/grill-me` 一次一问；另有 `/software-factory` 提示词帮判断要不要上工厂式基建 [原帖](https://x.com/mattpocockuk/status/2113264229453033684) · [原帖](https://x.com/mattpocockuk/status/2113278944594325761) · [原帖](https://x.com/mattpocockuk/status/2113196247964074322)
- **小墨 (@xiaomovps)**：同模型同题，Pi 约 3 轮 vs DeepSeek Harness 约 28 轮（含多次截图自检）；累计输入可差约 18×，但高缓存命中后费用大约只差一倍级，比 Harness 别只盯 token 数 [原帖](https://x.com/xiaomovps/status/2113283228467622362)
- **Vox 转述 Ponytail 5**（作者自测，非第三方评测）：先问「要不要写 / 仓库有没有 / 标准库够不够」再落笔；自测 39 题少写约 53% 代码、时间约 -41%、费用约 -26%，风险逻辑带测比例升到约 98% [原帖](https://x.com/Voxyz_ai/status/2113344640959250912)

## 两三句
标准层继续收敛（Skills 跟 MCP 进同一基金会），产品层在推「少点确认」和「形式化证明」两条安全路径。工作侧重点从「会不会写 prompt」转向「瓶颈自动化、循环、领域 alpha」。看 Harness / Skills 时把缓存命中、轮次和最终质量一起算，别被裸 token 吓到。
