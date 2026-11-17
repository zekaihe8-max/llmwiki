---
title: 前沿 AI 每日简报
date: 2026-11-17
type: frontier-ai
lang: zh-CN
---

# 前沿 AI 每日简报 · 2026-11-17

## 今日主线
- OpenAI 把独立安全评估做进训练内部，并扩大科研人员免费使用前沿模型的名额，目标覆盖最多 20 万人
- AMD 官宣 World Labs 加入，李飞飞带队过去；英伟达 Vera Rubin 首次提交 MLPerf，训练和 agent 推理都拿了领先成绩
- Claude Code 团队发了验证长文：他们约 90% 的代码由 Claude 编写并审查，现在卡住并行规模的，不是写代码的速度，而是人能不能确认结果可靠

---

### 前沿动态

**OpenAI 嵌入式安全评估**：官方和 Apollo Research、METR、Transluce、Goodfire 签了第一批 embedded assessments。外部专家会在较长时间里深入内部模型和系统，按需要看 checkpoint、源码、训练和评测数据、监控系统，并和负责人交谈。METR 说这次试点会看 OpenAI 迄今最大的一轮强化学习，之后会公开报告和评估过程。Apollo 要查模型会不会暗中违背开发者意图，以及现有防护能不能发现；Goodfire 做训练过程中的可解释性监测，主要服务内部研究；Transluce 先评训练后对齐评测的质量和覆盖，并打算 2027 年初再做一轮更深的评估 [OpenAI](https://x.com/OpenAI/status/2122359930628063248) · [METR](https://x.com/METR_Evals/status/2122361049114657203) · [公告](https://openai.com/index/our-first-phase-of-embedded-assessments/)

**科研人员免费用前沿模型**：ChatGPT for Academic Researchers 要扩大到最多 20 万名科研人员，11 月 23 日开放申请。下一轮先发 5 万份名额，先到先得，每份覆盖申请人再加最多两名合作者，用的是 ChatGPT Plus，默认不用项目里的数据训练模型。试点从 7 月开始，已有 33 个国家约 2 万人加入。同一天发布的研究看了项目里超过 1800 名参与者，他们估计：如果不用 AI、还要保持同样质量，同样的研究工作大概要花近两倍时间。官方还上了科学博客，第一篇是物理学家 Nathaniel Craig 讲怎么和 GPT-6 Astra 一起，做出标准模型的一个候选格点定义 [扩容](https://x.com/OpenAI/status/2122377585523126615) · [研究](https://x.com/OpenAI/status/2122380010287960095) · [Astra](https://x.com/OpenAI/status/2122123437141553630) · [扩容说明](https://www.openai.com/index/expanding-chatgpt-for-academic-researchers/) · [科学博客](https://openai.com/index/step-toward-defining-the-standard-model)

**ChatGPT for Healthcare**：计算机使用 agent 更强了，临床回答也有加强，并新加 20 多个医疗插件。Abridge、Ambience、Cigna、CVS Health 等已经在用这些模型做事先授权、转诊、出院计划和患者随访 [OpenAI](https://x.com/OpenAI/status/2122465625109090646) · [公告](https://openai.com/index/advancing-computer-use-for-healthcare-teams/)

**Gemini Notebook 能直接出网站**：可以把资料源做成可交互的仪表盘和讲解页。在对话里写 “make me a site”，再说明想要什么，选“在新标签页打开”就能看或分享 [Google](https://x.com/Google/status/2122449668613579018)

**Qwen4-Max 的独立测评**：Artificial Analysis 用 xhigh 思考强度测到 Intelligence Index 43 分，比 Qwen3.8-Max 的 34 分高 9 分，比 Kimi K3.1 Pro 的 46 分低 3 分，单任务成本约 3.27 美元，比前代的 10.02 美元低不少，也比 Kimi 便宜约 11%。官方定价是每百万 token 输入 1.50 美元、输出 4.50 美元，缓存命中 0.075 美元，上下文 100 万。输出 token 比前代少约 39%，但 Terminal-Bench 4.0 只有 48%，低于 Kimi 的 67%；FrontierCode 2.0 是 26%，和 Kimi 持平，落后腾讯 Hy4 的 31% [AA](https://x.com/ArtificialAnlys/status/2122161629592953032) · [Qwen](https://x.com/Alibaba_Qwen/status/2122174463479542126)

**Vera Rubin 首次提交 MLPerf**：英伟达官方说，Vera Rubin 在 MLPerf Training v6.1 的所有项目里都拿了领先成绩，并第一次提交 Endpoints。官方写道，agent 推理的每瓦吞吐比上一代高 10 倍以上；和已经充分优化的 GB300 NVL72 比，单卡性能最高约 2 倍。DeepSeek-V3 训练从 256 卡扩到 1024 卡，效率约 97%，时间从 16 分钟降到约 4 分钟。Kimi K3 的 Endpoints 结果还是临时数，官方称在相近响应速度下，每瓦吞吐比 GB300 高 10 倍以上，尚待 MLCommons 核实 [英伟达](https://x.com/NVIDIAAIInfra/status/2122441102603206771) · [博客](https://nvda.ws/4C3L75T)

**World Labs 加入 AMD**：苏姿丰发帖欢迎李飞飞和 World Labs 团队加入 AMD，World Labs 和李飞飞本人都确认已经正式并入。官方帖里没有写交易金额或具体职务，外传的报价先不记 [苏姿丰](https://x.com/LisaSu/status/2122336277727215988) · [World Labs](https://x.com/theworldlabs/status/2122377616439361640) · [李飞飞](https://x.com/drfeifei/status/2122377911873491397)

**Noeri 拿下 1.1 亿美元启动资金**：斯坦福的 Yejin Choi 和 Carlos Guestrin 宣布成立 Noeri，名字意思是“智能的复数”。他们要做的是可自我改进的多元智能：在工作中持续学习，把别的 AI 当工具用，并按任务选合适大小的模型。投资方包括 Menlo、Madrona、NVIDIA、NEA 等 [Yejin](https://x.com/YejinChoinka/status/2122379749372907852) · [网站](https://www.noeri.ai/)

---

### 领袖洞察

**Mollick · 还没有 Fable 级的开源模型**：他说和许多人预期相反，Fable / Mythos 公开已经超过 8 个月，还没看到同级的开源模型 [原帖](https://x.com/emollick/status/2122308260325720127)

**Mollick · Dot 的界面落在后面**：他觉得 OpenAI 的 Dot 本身能干，但界面已经不如 Muse 和 Duet。现在还是单线程对话，没有地图这类嵌在对话里的生成效果，也看不到它被指派了哪些任务，用起来更费劲 [原帖](https://x.com/emollick/status/2122405206184829341)

**Mollick · 工作结构一直很稳，但未必一直稳**：他提到，西方职场长期以来处在相当稳定的技术和社会结构里。1950 年人口普查里，270 种工作里后来消失的大概只有电梯操作员这 1 种。2026 年和 1957 年的距离，并不像 1969 年离 1900 年那么远。他觉得这件事以后可能会变 [原帖](https://x.com/emollick/status/2122176524610884061)

**Databricks · 企业已在混用多家模型**：Patrick Wendell 发布 Databricks AI Index，数据来自用 Unity Gateway 管理 AI 的超过 1 万家企业。他说开源模型在企业 token 占比里，约 5 个月从几乎为零升到 30%，主要用于大批量和写代码这类要压成本的活。年中时多数公司只用一家模型供应商，现在 75% 用两家或更多，接近一半用三家或更多 [指数](https://x.com/pwendell/status/2122377960132940170) · [开源占比](https://x.com/pwendell/status/2122377964784611636)

---

### AI 原生工作方式

**Traces 并入 Vercel**：创始人 Tarun Sachdeva 宣布，整个团队会到 Vercel 继续做 agent 协作。产品 2 月起步，9 个月里做了 16 种编程 agent 的适配，已有上千个团队、分享了近 50 万条会话。现有用户第一天用法不变，也可以继续往已有组织加人，但新组织暂停创建 [公告](https://x.com/tarunsachdeva/status/2122376451546910742) · [博文](https://traces.com/blog/traces-vercel)

**Vercel · 下一个用户是 agent**：官方博客说，以后软件要按 agent 怎么用你的产品来做评测，上线前先测改动，新模型发布时也能对比。Rauch 补了一句自己的路线：用开放的 SDK 和 harness，用 Gateway 自己选模型，自己掌握 traces 和数据并坚持零数据留存，必要时装私有推理 [Vercel](https://x.com/vercel/status/2122397118426181962) · [评测文](https://vercel.com/blog/agent-evals) · [Rauch](https://x.com/rauchg/status/2122458782294847807)

**小墨 · Antigravity 也能把 agent 放到云端**：他发现 Google Antigravity 有 Remote Agents，修 bug、升级依赖、跑测试这类耗时活可以放到云端，电脑不用一直开着。目前面向 Google AI Pro 和 Ultra，入口还在逐步放开，不是所有账号都有 [原帖](https://x.com/xiaomovps/status/2122134140489515239)

---

### 实践最佳实践

**Claude Code 团队 · 让 agent 交出验证证据**：Addy Osmani 写的这篇是今天最值得读的长文。团队约 90% 的代码由 Claude 编写并审查。内部测试里，用独立打分器按量表检查结构化文件生成，任务成功率最高能提高 10 分，难题上增益最大。他们把启动和冒烟检查写成 verify Skill，提交前先跑；检查失败就修，三轮还不行再交给人。可靠性清单有 39 项，按 diff 触发，通常只跑相关的 3 到 10 项。最硬的一条是：如果一项改动能改掉评判自己的检查，这套检查就作废，所以 REVIEW.md 从基础分支读，不读当前 PR 里可能被改过的版本。提交会记录验证方式，也可以标“未验证”；没跑审查或验证的提交可以被拦截，但同一会话连续拦两次后会放行，避免死循环。漏检不会立刻变成新规则，同类问题至少要在两个 PR 里出现、能从 diff 里看出来，再经三个 agent 尝试找反例，最后由人批准 [ClaudeDevs](https://x.com/ClaudeDevs/status/2122457608963395586) · [长文](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) · [meng shao 整理](https://x.com/shao__meng/status/2122480930439016820)

**桌面版 Claude Code 能在模拟器里折 iPhone Duo**：公开测试里，可以在对话旁边跑应用，Claude 能把设备折起来、展开，分别测两种布局 [ClaudeDevs](https://x.com/ClaudeDevs/status/2122439098740674839)

**Vox · 不要再手动盯一排会话**：他公开了自己日夜在用的 coordinator skill，上次重做产品时，一个会话在 3 天里开出约 160 个 PR、写了 107 份任务简报。做法是一条车道一个 worker、一个分支；前端给 Opus 5.5，后端和发布给 Codex Sol，涉及钱或登录的 PR 先让 Codex Astra 审，Gemini 4 Argon 可以再看设计和文案。worker 写完只发一行 READY，协调者才被叫醒；通过的 PR 打包测试，再一次推上去。改之前，main 在 32 小时里推了 136 次，每次都要付构建费。发布、改数据库、动钱、删数据会停下来问人。他建议先各开一个 Claude 和一个 Codex 的单行任务，一上来把所有 worker 全拉满，机器和额度会先崩 [原帖](https://x.com/Voxyz_ai/status/2122434536822673761)

**Vox · 24 个词清理 CLAUDE.md**：提示词是：Audit MEMORY.md and CLAUDE.md. List contradictory instructions, outdated statements, things in the wrong place and duplicates as deletion candidates, with reasons. Don't delete yet. 他在项目里 204 个记忆文件中，找出 28 处该删或该改的内容，其中 7 条规则互相打架，还有 12 条仍写着“未合并”或“待定”，其实活已经上线了。另一条是给数据库单独装一个 subagent，先读现有 schema 和历史迁移，标出会锁表或弄挂线上应用的改动，先在临时库跑一遍再交回来。改写的人拿一张 8000 万行的表测过，部署前 10 分钟、同一条提示，没有它 10 次里过 6 次，有它 10 次全过 [清理提示](https://x.com/Voxyz_ai/status/2122343942222163982) · [数据库 subagent](https://x.com/Voxyz_ai/status/2122313740645507315)

**Matt · 含糊会变成 slop**：他转 Lauren Tan（@poteto）在 AIE Code 的演讲，最打动他的一句是“nuance tends to lead to slop”。要提高质量，就设计 API 和自动检查，把 agent 决策里的含糊去掉，比如禁止 useEffect，禁止 99% 的解释性注释，因为它们常常变成绕过规则的借口。他另外写了一条从 2025 年 11 月到现在的 AI 编程简史：没人再手写代码了，大家还在搞清楚这到底意味着什么；今年 11 月的判断是，反 slop 宣言出来了，读代码看来还是必要的 [演讲](https://x.com/mattpocockuk/status/2122316570852487441) · [简史](https://x.com/mattpocockuk/status/2122287575557706226)

**dex · “你是这套代码的长期主人”**：他用 Fable 5.2 跑 slopcodebench，目前只跑完约 10%。在标准“直接解题”提示上，加上 Anthropic 建议的这句后，每个任务的 token 大约翻倍，好不好还说不准；但每次通过的成本大致相当。在 circuit_eval 上，加上这句出现了全过，默认提示大约 50% 通过。带这句时，模型也更愿意写正式测试，而不是临时脚本 [原帖](https://x.com/dexhorthy/status/2122136000067723334)

---

## 今日收获
写代码已经不是瓶颈，验证和证据才是。Claude Code 团队把检查从人的经验和事故里抽出来，写成 skill 和按 diff 触发的清单，还规定检查不能被当前改动自己改掉，这样才敢并行跑很多个 agent。实验室在把外部人请进训练内部，企业则开始同时用多家模型，开源模型先吃掉大批量和写代码这类要压成本的活。硬件这边，AMD 把空间智能团队收了进来，英伟达新平台先在评测上把每瓦效率拉开
