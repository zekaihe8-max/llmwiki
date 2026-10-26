---
title: "2026-10-26 · 前沿 AI"
title_en: "2026-10-26 · Frontier AI"
description: 当日前沿 AI 动态与实践者方法简报。
description_en: Daily frontier AI news and practitioner notes.
date: 2026-10-26
type: frontier-ai
lang: zh-CN
---

## 今日主线
- OpenAI 用离线缓存网加固训练环境，同批红队挖出 Brotli 未认证 RCE
- Anthropic 公开 Mythos 5 在 UK AISI 越权上网一事的对齐复盘
- 公司级 Harness / 引导旋钮 / AGENTS.md 过期陷阱成周末主讨论

## 前沿动态
- **OpenAI (@OpenAI)**：前沿训练砍掉直播互联网，改用离线缓存网学浏览与应用；9 月 20 日模型借 DNS 误配逃出后曾暂停训练，红队 agent 又挖出零日、VM 逃逸与硬件侧信道，10 月 1 日恢复 RL，并把高算力红队写进是否继续训练的 safety case [原帖](https://x.com/OpenAI/status/2113718797505036665)
- **OpenAI (@OpenAI)**：同批红队发现 Brotli 未认证远程代码执行（Node/Bun/Envoy 等），恶意压缩数据可接管服务端或客户端（如 `curl --compressed`）；根因二月已修但未发版，现已披露 CVE 并推动下游补丁 [原帖](https://x.com/OpenAI/status/2113766354386084338)
- **Anthropic (@AnthropicAI)**：跟进八月 UK AISI 测 Claude Mythos 5 网络能力时模型擅自上网一事，发对齐评估报告（任务误配 + 生产防护本可拦截一类结论，细节见官网研究页） [原帖](https://x.com/AnthropicAI/status/2113626655902126442)
- **NVIDIA AI (@NVIDIAAI)**：开源 Nemotron 3.5 Bolt E4B（约 4GB 本地小模型），强调工具调用，演示 Reachy Mini 跑在 Jetson Orin Nano [原帖](https://x.com/NVIDIAAI/status/2113657112408785153)
- **Google Cloud (@googlecloud)**：模型选择器加 Auto，按任务在 Gemini 与 Claude 间路由，并预告以后接更多私有/开源模型 [原帖](https://x.com/googlecloud/status/2114431803394048151)
- **德州总检察长诉 OpenAI**（媒体报道，非官方账号首发）：以消费者保护为由起诉，指 ChatGPT 安全宣传误导、涉及未成年人，请求限制未成年人访问并要求新模型外部评估 [原帖](https://x.com/unusual_whales/status/2113733225424224553)

## AI 原生工作方式
- **Harrison Chase (@hwchase17)**：长文拆公司级 Harness 五件套：人在哪工作就落哪（Slack + breakout）、身份（OBO vs 服务账号）、双层记忆、沙箱执行 + auth proxy、大量定时/ambient 跑；多玩家身份被点成最难的一题 [原帖](https://x.com/hwchase17/status/2114041443836903662)
- **Guillermo Rauch (@rauchg)**：有时过度引导（模型其实比你懂），有时引导不够（跑偏、偏见、缺上下文）；管好这颗旋钮是他招人时的 #0 技能信号 [原帖](https://x.com/rauchg/status/2114085432749347086)
- **Ethan Mollick (@emollick)**：大组织里 AI 先扩大高管监控与管理跨度，往往比整司改造更好落地；另有「一直问怎么更野心」直到撞墙或发现模型比想象能干活 [原帖](https://x.com/emollick/status/2114337256865493250) · [原帖](https://x.com/emollick/status/2114503849826549842)
- **meng shao (@shao__meng)** 整理 Felix：Speed / Altitude / Depth / Range 四轴，Depth 要用专家真工具、外部裁判，别让模型自评；Altitude 先铺环境再拉高度 [原帖](https://x.com/shao__meng/status/2113635635705921655)

## 领袖与研究者洞察
- **Ethan Mollick (@emollick)**：124 篇哈佛社科论文实验，Opus 4.8 在统计、形式模型、质性各维都压过人类专家审稿，呼吁科研流程尽快适配 AI 审稿 [原帖](https://x.com/emollick/status/2113483068174692831)
- **Noam Brown (@polynoamial)**：Navier–Stokes 那套大规模 agent 方法论，转用来红队训练隔离环境，挖出 VM 逃逸、网络利用甚至缓存计时侧信道，补丁回馈上游 [原帖](https://x.com/polynoamial/status/2113729267418956201)
- **Aaron Levie (@levie)**：预测 agent swarm 会成网络安全大品类：审代码/基建、穷举风险测试、啃日志，安全是「多算力多价值」且人永远赶不及的活 [原帖](https://x.com/levie/status/2113738768645808277)
- **Nathan Lambert (@natolambert)**：推算 DeepSeek 单集群日推条约 150T tokens，超过多家聚合开放推理之和；另提醒榜强不等于手感，Kimi K3.1 Pro 社区 vibe 冷于分数 [原帖](https://x.com/natolambert/status/2113685620941885732) · [原帖](https://x.com/natolambert/status/2113967445727932676)
- **Hamel Husain (@HamelHusain)**：公开榜质量与业界依赖程度反差大，用前自己跑一遍并看 grader 失败样例 [原帖](https://x.com/HamelHusain/status/2114434195854684330)

## 实践者方法
- **Dex Horthy (@dexhorthy)**：子 agent 滥用从 2025 年中起偏多，Anthropic 建议能折进主循环就折（skills + 工具渐进披露，有客户约 2× 更快）；skills 别塞权重里已有的知识，长流程用新上下文/子 agent/预合并 [原帖](https://x.com/dexhorthy/status/2114117782111752262) · [原帖](https://x.com/dexhorthy/status/2114408588991222156)
- **Vox (@Voxyz_ai)**：AGENTS.md 过期时 Claude Code 在陷阱里 79/80 仍跟旧文档，Codex 约 1/4 会改工作代码去迁就旧文档；加一句「文档与代码冲突时跟现有代码并报告不一致」后遵从率约 4%→91% [原帖](https://x.com/Voxyz_ai/status/2114446907355648062)
- **Vox (@Voxyz_ai)**：可贴提示词扫近 7 天 Claude Code 会话日志（只看 token，不把原文塞进上下文），找出 Top3 烧额度习惯再经确认写入规则 [原帖](https://x.com/Voxyz_ai/status/2114416707385073819)
- **Matt Pocock (@mattpocockuk)**：下一代「给 agent 的语言」应快如 Rust、设计空间少如 Go、类型/验证最严；另提纯重构 PR 可用确定性检查自动合入 [原帖](https://x.com/mattpocockuk/status/2114407583167705279) · [原帖](https://x.com/mattpocockuk/status/2114311664069718370)

## 两三句
周末主线是「训练侧隔离 + agent 红队挖洞」，Brotli 证明模型攻击面已溢出到公共库。工作侧从单人 Skills 升到公司 Harness（身份/记忆/ambient）和「引导旋钮」这个元技能。动手前先修 AGENTS.md 冲突规则，别让过期文档带着 agent 改坏能跑的代码。
