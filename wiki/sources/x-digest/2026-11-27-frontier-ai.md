---
title: "2026-11-27 · 前沿 AI"
title_en: "2026-11-27 · Frontier AI"
description: "当日前沿 AI 动态与实践者方法简报。"
description_en: "Daily frontier AI news and practitioner notes."
date: 2026-11-27
type: frontier-ai
lang: zh-CN
---

## 今日主线
- OpenAI 把 Private Inference 推进小范围客户测试，用机密计算管住模型处理过程中的提示和回复
- Codex 负责人 Tibo 承认 GPT-6.2 上线时计费算错，修完后同样的活 Astra 会快 40%、Sol 会快 25% 撞上限
- Karpathy 用 Opus 5.5 花 7 小时把美国真实数据铺进一张文明风格地图，4.5 万行代码，已上线可玩

## 前沿动态
- **Private Inference 进入测试**：Sam Altman 25 日晚说，OpenAI Private Intelligence 里的 Private Inference 已开始和一小批客户测试。Greg Brockman 26 日转发时概括为机密计算，并在模型处理过程中对提示和回复施加严格控制。官网把它标成 Alpha 和 API Preview，和零数据保留（ZDR）分开：ZDR 管的是处理之后不留数据，这项管的是处理当中。Altman 还写，ZDR 配上 Private Safety Processing，可以自动做安全审查，同时不让 OpenAI 人员看到内容本身。有意向可联系 @shekar4x。以上进度与产品划分均摘自官方口径 [Altman](https://x.com/sama/status/2125638790593274259) · [Brockman](https://x.com/gdb/status/2125824585027272727) · [说明](https://openai.com/business/private-intelligence/)
- **GPT-6.2 计费算错了**：Codex 和 ChatGPT 的工程负责人 Tibo 26 日说，GPT-6.2 上线时的计费错误，让大多数人的 Astra 和 Sol 用量被少算了。现在修好了，同样的活会多占套餐额度，和上周比，Astra 会快 40% 撞上限，Sol 会快 25%。他同时写，这两个模型用起来仍应比 GPT-6 Astra 和 GPT-6.1 Sol 更经用，其他模型没受影响，以前少算的部分也不会补扣。作为道歉，Go、Plus、Pro 和 Business 用户会各加一次预存重置（banked reset），稍后他确认已经上线。以上比例与补偿安排均摘自官方口径 [Tibo](https://x.com/thsottiaux/status/2125784147889393806) · [重置已上线](https://x.com/thsottiaux/status/2125853628250599730)
- **Qwen-Audio-3.1 补上多语言和方言**：阿里官方给 Qwen-Audio-3.1 系列加了多语言能力，并重点补中文方言。听写覆盖 59 种语言和 8 种中文方言，语音合成 65 种语言和 6 种方言，实时对话 53 种语言和 6 种方言，现已可在 Qwen Cloud 上试用。以上语种与方言数量均摘自官方口径 [Qwen](https://x.com/Alibaba_Qwen/status/2125798914490249411) · [ASR](https://www.qwencloud.com/models/qwen-audio-3.1-asr-flash) · [TTS](https://www.qwencloud.com/models/qwen-audio-3.1-tts-flash) · [Realtime](https://www.qwencloud.com/models/qwen-audio-3.1-realtime-flash)
- **黎曼证明的精简版过了独立检查**：11 月 23 日简报已写过 Alpöge 与 Claude 合作、约 1700 万行 Lean 证明一事。25 日 GitHub 仓库 lsernau/grh-lean 发布了更短的重写版，可读版约 30 万行、803 个文件，压缩版约 7.6 万行、794 个文件，证明的仍是原来那五条定理。MIT 的 Andrew Sutherland 在独立页面记录了检查，两个版本都能编译通过，五条定理只依赖 Lean 的三条标准公理，外部检查器也接受，他写到 26 日 20:46 UTC 时全部检查已经跑完。以上行数、文件数与检查结果均摘自仓库与检查页口径 [说明](https://math.mit.edu/~drew/shortgrh/) · [仓库](https://github.com/lsernau/grh-lean)

## 领袖与研究者洞察
- **Paul Graham · 先假定 AI 真的在想**：他写，不论 AI 是不是「真的」在思考，做关于未来的预测时都该假定它们在想，因为它们会带来和真的在想一样的效果 [Paul Graham](https://x.com/paulg/status/2126066121333715109)
- **Ethan Mollick · 型号和数字越来越说明不了能力**：他写，现在靠名字和编号判断模型能力，比以往任何时候都没用。一方面名字更乱，比如 Neon 和 Carbon，另一方面编号也不再能说明家族或进步，比如 Astra 6.2 对 6，Opus 5.5 对 5 [Mollick](https://x.com/emollick/status/2125812805534183923)

## AI 原生工作方式
- **Karpathy 用真实数据铺了一张美国文明地图**：他让 Claude 把美国公共数据填进一张类似《文明》的地图。Opus 5.5 下载并解析了大量公开数据，花了 7 小时、写了 4.5 万行代码后能跑起来。一共 31 个真实数据源，包括人口普查、经济分析局、劳工统计、能源、气象、地质、国防部、国家公园、航空、应急和疾控等，全部对齐到 25 公里六边形网格。金矿产量对应 GDP，城市区块按真实产业来，圣何塞的市民里每 4 人就有 1 人是工程师、程序员或科学家，全国是每 14 人里 1 人。还有 19 种透镜、524 个都会区的城市视图，以及可以把 3100 多个县的任一列做成表和散点图的 Explorer。他用的是 Claude Code 桌面版，Opus 5.5 的 medium，并打开了 ultracode。地图已部署，问号里有源码链接。他自己说每周额度还剩一半，后面得别人接着做。以上耗时、代码量和数据规模均摘自作者口径。简报里的地图页是 `https://karpathy.ai/usaciv/`，本次管线两次官方抓取都返回 HTTP 200，但静态页是画布应用外壳、抽不出文章正文，因此未入库该页 [Karpathy](https://x.com/karpathy/status/2125779541952246039) · [地图](https://karpathy.ai/usaciv/)
- **Levie · 写代码是在提前看知识工作**：Box 的 Aaron Levie 写，大多数工作会先从自己做调研、打字和创造，变成去协调 agent 干活；再往后，协调本身也会变成瓶颈，人会改成给目标，让 agent 自己去解更大的问题。很多今天看起来不像写代码的工作，包括制造、建筑、生命科学、材料、网络安全，可能都会往「跟写代码相近」靠。一大障碍是大量工作仍然没法自动验收，人会比写代码时更深地留在回路里，但能交出的部分会越来越大。另帖里他写，现在正好适合把服务公司按 agent 来重建或改造，领域理解仍然关键，但交付能力会有大约 10 倍的放大。以上倍数摘自作者口径 [Levie](https://x.com/levie/status/2125837181398950233) · [服务公司](https://x.com/levie/status/2125983542475894821)

## 实践者方法
- **Skill 描述被砍成光名字，它就不会自己选用**：Voxyz 写，Claude Code 技能装多了以后，会悄悄把技能描述砍到只剩名字，之后再也不会主动选用。他给了一段可直接粘贴的提示：先审计所有技能，标出只有名字的，打开 `~/.claude/settings.json`，把 `skillListingBudgetFraction` 设成 0.02，100 万上下文的模型可设 0.03，并把每条描述的触发条件写到第一行，再列出从未用过的技能，删除前先问人 [Voxyz](https://x.com/Voxyz_ai/status/2125952719676756047)
- **终端重启后，让程序自己说怎么恢复**：Mitchell Hashimoto 25 日晚发布新的终端协议 OSC 7577（Program Resume Protocol），和 Herdr 合作，并请多个终端和程序作者看过。思路是任何程序都可用普通终端转义序列，告诉终端重启后该跑哪条命令把自己拉回来，不必跟某一款终端做私有对接。Rex 先给 Claude Code 做了内置支持，并强调程序恢复本质上不安全，安全最终落在终端模拟器上，Rex 里可用 Lua 按程序名、路径、工作目录和命令行参数逐项选择是否恢复。小墨观察到，大约一小时后这个协议就已经合进 Pi [Mitchell](https://x.com/mitchellh/status/2125713695233970521) · [说明](https://www.superlogical.com/rex/docs/build/program-resume) · [小墨](https://x.com/xiaomovps/status/2125869563992797620)
- **Antigravity 省额度的用法**：小墨写，不必装第三方插件，先把自带设置和习惯调对。他转述官方实测，用 Orchestrator 做规划、交给 Hydrogen 执行，比单跑 Carbon 大约省 24% 额度，还快大约 19%。明确的小任务切到 Hydrogen，思考档位用 Low 或 Medium，Claude 5.5 在 Pro 里额度很小，留给攻坚。子任务做完就 `/compact`，换任务开 `/new`，旁支问题用 `/btw` 走只读分支。日常少开 `/swarm` 和 `/boost`，权限别开 Turbo，超额扣费设成 Never。`AGENTS.md` 和 `GEMINI.md` 每轮都会注入，只留核心规范。以上省额度和速度比例均摘自作者转述的官方口径 [小墨](https://x.com/xiaomovps/status/2125972525108830317)

## 小工具
- **Private Inference**：OpenAI 面向企业的机密计算推理，官网标成 Alpha 和 API Preview [说明](https://openai.com/business/private-intelligence/)
- **Qwen-Audio-3.1**：阿里云上的多语言听写、语音合成和实时对话模型 [ASR](https://www.qwencloud.com/models/qwen-audio-3.1-asr-flash) · [TTS](https://www.qwencloud.com/models/qwen-audio-3.1-tts-flash) · [Realtime](https://www.qwencloud.com/models/qwen-audio-3.1-realtime-flash)
- **美国文明地图**：Karpathy 用公开数据做成的可玩地图 [地图](https://karpathy.ai/usaciv/)
- **OSC 7577 Program Resume Protocol**：让程序用终端转义序列声明重启后如何恢复 [说明](https://www.superlogical.com/rex/docs/build/program-resume)

## 两三句
今天没有新的大模型发布，更实际的是计费和隐私这两头：一边是用量突然变紧，一边是企业终于能在推理过程里把内容锁住。黎曼这边，机器已经能把一份很长的证明重写成短很多的版本，并再让另一台机器验一遍。Graham 这句话短，但很硬：争论它有没有意识，不如先按它已经能产生那些后果来做计划。型号名则更像营销分层，不能当能力标尺。一个人加一个模型，七小时就能把几十个联邦数据源对齐成能玩的地图。技能要用起来，先保证模型还能看见完整描述。会话要扛得住重启，最好让程序自己告诉终端怎么把自己拉回来。额度不够时，先减少重发上下文和并行打转，比再开一个账号更管用。
