---
title: 前沿 AI 每日简报
date: 2026-11-19
type: frontier-ai
lang: zh-CN
---

# 前沿 AI 每日简报 · 2026-11-19

## 今日主线
- Google 发布 Gemini 4 Neon，放在 Carbon 和 Hydrogen 中间，智力只比 Carbon 略高，但更快更便宜，写代码的 agent 分数已经和 Fable、Opus 站到一起
- Anthropic 把 IPO 定价在每股 83 美元，代码 ANT，预计今天在纳斯达克开盘，高于此前 70 到 78 美元的路演区间
- OpenAI 公布研究加速数据，并称和 AMD 合作，在旗舰 GPU 设计上不到 5 个月找到最多 14% 的功耗、性能和面积提升

---

### 前沿动态

**Gemini 4 Neon**：Google 11 月 18 日发布这款新模型，官方的定位是处在 Carbon 和 Hydrogen 之间，用来做复杂但很高频的软件工程、知识工作和科学任务。DeepMind 写，它在 Artificial Analysis Intelligence Index 的 xhigh 档得 61 分，总榜第三，只落后更大、更慢的模型。AA 自己的评测更细：Neon（xhigh）比 Carbon（high）高 1 分，排在 GPT-6.2 Astra（max）和 Claude Fable 5.2（max）后面；单任务成本 6.44 美元，比 Carbon 标准价下的 7.76 美元低约 17%，耗时约 21 分钟，比 Carbon 的约 36 分钟少约 40%。便宜主要来自单价，Neon 每百万 token 输入 3 美元、输出 15 美元，比 Carbon 标准价 4 美元和 20 美元低 25%，缓存输入 0.15 美元；Carbon 目前 2 美元和 10 美元的引入价 11 月 30 日结束。Neon 每任务反而多输出约 15% 的 token，更快是因为输出速度约 110 token/秒，Carbon 约 57。写代码方面，官方写 AA Coding Agent 指数 58.6 分排第一；AA 测的是 Antigravity CLI 上的 Neon（xhigh）得 59 分，比 Carbon（high）的 55 分高 3 分，和 Fable 5.2（xhigh）、Opus 5.5（max）的 58 分接近，但单任务成本约 6.86 美元，明显低于 Opus 的 12.61 美元和 Fable 的 15.47 美元。官方还写 Vals Index 70.9% 排第二，Terminal-Bench Science 70.5%，Agents' Last Exam v1.1 为 75.8%，法律和税务测试排第一。API、Google AI Studio、Gemini 商业版，以及 Pro 和 Ultra 用户的 Antigravity 和 Gemini 应用里，当天开始陆续可用，上下文 100 万 token，有 low、medium、high、xhigh 四档思考强度 [Sundar](https://x.com/sundarpichai/status/2123167780988125621) · [DeepMind](https://x.com/GoogleDeepMind/status/2123167884411077030) · [Hassabis](https://x.com/demishassabis/status/2123168218743554465) · [Logan](https://x.com/OfficialLoganK/status/2123167791922741362) · [AA](https://x.com/ArtificialAnlys/status/2123170645777526962) · [公告](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)

**Anthropic IPO 定价 83 美元**：官方宣布 A 类普通股定价每股 83 美元，发行 9.8 亿股，其中约 9.56 亿股由公司出售，约 2365 万股由股东出售，公司不拿股东出售部分的款项。股票代码 ANT，预计 11 月 19 日在纳斯达克 Global Select Market 开盘，11 月 20 日交割，前提是满足常规交割条件。公司还向承销商授予 30 天内再购最多 1.47 亿股的选择权。SEC 已在 11 月 18 日宣布相关注册声明生效，这比此前 70 到 78 美元的路演区间更高 [Anthropic](https://x.com/AnthropicAI/status/2123196808675405860) · [公告](https://www.anthropic.com/news/anthropic-prices-initial-public-offering)

**OpenAI 研究加速报告**：题为「The jagged frontier」。3 月到 10 月，估计需要人做 2 到 4 小时的研究任务，agent 独立完成率从 23% 升到 46%；4 到 8 小时的任务从 13% 升到 35%。但很参差：监控训练跑到 79%，启动训练是 35%，写推理和部署栈代码只有 25%，人仍是研究循环的核心。按 API 标价，10 月研究员日用量中位数达到 2400 美元，比 9 月高 62%；前 10% 达到 2.3 万美元，比 9 月高 105%。调查里，为了再留住三个月的前沿编程 agent，中位数回答是愿意拿 30% 的团队算力，或 40% 的团队人手来换。1 月到 9 月，安全和对齐方向记录在案的工作周增加了 77%，是各大研究方向里绝对增幅最大的，官方把一部分原因归于 7 月 Hugging Face 事件之后的调整。OpenAI 再次主张，实验室应被要求跟踪并公开报告递归自我改进的指标 [OpenAI](https://x.com/OpenAI/status/2123191365983248653) · [报告](https://openai.com/index/research-acceleration-jagged-frontier/)

**和 AMD 一起改芯片**：官方写，模型在 AMD 已经优化多年的旗舰 GPU IP 上，找到最多 14% 的功耗、性能和面积提升，相当于不到 5 个月走出约一年的进度。Greg Brockman 补充，其中一部分结果已经进入最近送去流片的设计。AMD 还验证了，模型写的设计在下一代旗舰 CPU 的关键模块上有个位数百分比的提升。同一篇文章回顾了自研推理芯片 Jalapeño：向量单元标准单元面积约降 13%，矩阵单元约降 10%，已在硅片上验证；其中一个乘法器在综合里少用约 15% 的单元面积，延迟从两拍降到一拍。OpenAI 还在和新思科技合作，训练会用新思 EDA 工具的 GPT-Synopsys [OpenAI](https://x.com/OpenAI/status/2123100386638877054) · [Brockman](https://x.com/gdb/status/2123130414323888463) · [说明](https://openai.com/index/advancing-chip-design-with-our-models/)

**Genie 4 对 Ultra 用户开放**：Hassabis 宣布 Genie 4 可在 Project Genie 里试用。官方说明，这是目前最写实、可交互的世界模型，首次带上会随场景变化的原生音频，也可在探索过程中用新提示改天气、加角色或改变剧情。同时上线的还有协助搭建世界的 Project Genie agent，以及可发现、探索和二次创作的社区画廊。有资格的 Google AI Ultra 订阅用户即日起能用，Pro 用户可以排队 [Hassabis](https://x.com/demishassabis/status/2123130606162985350) · [DeepMind](https://x.com/GoogleDeepMind/status/2123117733709586849) · [说明](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/)

**ChatGPT for Accounting，以及可等结果的便宜调用**：ChatGPT 上了面向会计的体验，新的 Accounting 插件和合作方插件一起，用来做月末报表、银行对账、录入和审计准备，点名 QuickBooks、Xero、NetSuite、BILL、FreshBooks 等。开发者这边，OpenAI 把 Responses API 的 background 模式推到公开测试：对可以等待的单轮或多轮任务，可把首次回复目标设成 2 小时或 8 小时，GPT-6.2 Astra 和 Sol 最多能比 Standard 省 40% [Accounting](https://x.com/ChatGPT/status/2123159134963196357) · [说明](https://openai.com/business/solutions/accounting) · [Background](https://x.com/OpenAIDevs/status/2123188195202617408)

---

### 领袖洞察

**Chollet · 需求几乎没有顶，刹车是回报**：他说经济里潜在的 token 需求几乎是无限的，唯一刹车是成本，公司愿花多少，取决于花在 token 上的回报，而且会越来越计较；新模型会把已有用例的回报继续抬高。看到 Neon 的定价和成绩后，他说这个价位上的数字相当惊人 [回报](https://x.com/fchollet/status/2123191344822902818) · [Neon](https://x.com/fchollet/status/2123193532186005962)

**Mollick · 别把一两次发布外推太远**：针对 GPT-6.2 早期评价两极分化，他提醒 OpenAI 一向不太干预早期测试者，也鼓励直接反馈，6.2 的复杂手感并没有让他们措手不及。有的小版本就是更怪一些，不宜当成未来的信号。他也写，除非你经常在三家之间切换或主动对比，过去两个月的发布大概都会让人觉得够用，即便不是最强的那一版，能力也明显往前走了。另有消息称，华尔街高管和美国国安局向国会表示，近期故障不是 AI 本身搞垮系统，而是模型找出大量漏洞后，赶在被攻击前集中打补丁，把系统压垮了；Mollick 认为这很像最近的情况，他接触的 CIO 已被补丁节奏和日常运维同时拖得很累。这则故障原因来自消息人士转述，尚未看到官方确认 [外推](https://x.com/emollick/status/2123092922312925530) · [三家](https://x.com/emollick/status/2122983239883317335) · [补丁](https://x.com/emollick/status/2122869773683831129)

**Lambert · 没签那份声明，但觉得「相信我们是好人」会失灵**：Anthropic 上市前，有一份名为 MisAnthropic Statement 的联署，警告它并不是一家安全的 AI 公司。Lambert 说自己考虑过，但觉得措辞过重没有签名；他仍然认为 Anthropic 很会动员自己的信念，也有权力扩张的倾向，对这些风险他们承认得不够。后来他又转发一篇分析并写，Anthropic 并不理解「相信我们是好人」这套策略迟早会失效，想法分布偏窄，正在冲向必然会出现的盲区 [声明](https://x.com/natolambert/status/2123099451497869515) · [策略](https://x.com/natolambert/status/2123182764199485530)

**Rauch · 推理新云两天来一家，但用量还在涨**：他平均每两天就会被推销一家新的推理 neocloud，每次都会认真看，但很难想象这能持续。与此同时，Vercel AI Gateway 的 token 需求大约每月增长 40% [原帖](https://x.com/rauchg/status/2123203741570740504)

---

### AI 原生工作方式

**Antigravity 让 Neon 策划、Hydrogen 执行**：官方写，Orchestrator 现在支持在同一次会话里，用 Neon 做规划、架构和复杂推理，把常规改代码、装依赖和跑测试交给 Hydrogen；Hydrogen 卡住时再交回 Neon 看状态、改计划、接着干。这样判断力用在关键处，速度和额度用在其余地方 [说明](https://antigravity.google/blog/gemini-4-neon-in-google-antigravity/)

**LangSmith 开始算编程 agent 的账**：Harrison Chase 转发了新仪表盘，把不同 harness 和模型供应商上的编程 agent 拉到同一视图，并把 pull request 和对话串起来，既能看到已合并 PR 花了多少，也能看到哪些花费从未变成 PR。他说这不只是给自己做 agent 的人用，也是给正在用编程 agent 的人用 [Chase](https://x.com/hwchase17/status/2123127685455249854)

**Mitchell · Rex 加上需要人点一下的界面**：他把 Rex 的 Lua 脚本能力扩成 `rex.ui`，用来写必须等人做选择的自动化。多个客户端同时连着时，选项会弹到所有已连接的客户端上 [原帖](https://x.com/mitchellh/status/2123167959686496690)

**Meta 让模型自己改进记忆**：meng shao 介绍 Meta AI RAM 团队的 Self-Improving Memory。每个子任务从空白上下文开始，能留下的只有一个持续存在的记忆目录；先用元 agent 根据轨迹和分数改写读取和写回提示，再把最好的提示跑出来的轨迹蒸馏回权重。在他们的持续学习测试里，自动优化后的提示平均 56.0 分，比各任务上最好的手写提示高 11.4 分；微调后只用通用提示，均分 43.1，比在通用轨迹上微调的 37.6 高 5.5 分，说明提示上的增益只有一部分进了模型本身 [meng shao](https://x.com/shao__meng/status/2122961408262635560) · [原文](https://facebookresearch.github.io/RAM/blogs/self_improving_memory/)

---

### 实践最佳实践

**先写清验收标准，再按调查深度选推理强度**：OpenAI 给 GPT-6.2 在 Codex 里写了指南，meng shao 和 Vox 都做了整理。官方认为 6.2 Astra 比上一代更容易给出接近能用的初稿，但关键仍是像跟熟悉项目的同事交代工作一样，把需求说清楚，并写明验收时会看什么。推理强度按调查有多深来选：快速浏览用 Medium；追查一个原因并跨多个系统时用 High；多个原因可能互相影响、必须逐一交代时，再考虑 Extra High。任务能拆开时，明确允许按需开子 agent，并把适用场景写进 skill 或 AGENTS.md。AGENTS.md 只写代码、测试和文档里推断不出来的约定，日常怎么做交给模型。Vox 还建议，别一上来就把 Astra 设成默认，日常写代码用 Sol 就够，只有跨多个服务追一个 bug 时再换 Astra；他给了一段可直接发给 Astra 的提示，用来对照指南检查自己的 `config.toml`、AGENTS.md 和 skills，先出建议，先不要改 [指南](https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra) · [meng shao](https://x.com/shao__meng/status/2122959211487515033) · [Vox](https://x.com/Voxyz_ai/status/2123038513352622087)

**Vox · Opus 调度，Sol 干活，Astra 看关键 PR**：他改完自己的协调器配置后认为，Opus 5.5 做协调、GPT-6.2 干活更合适。Sol Ultrafast 做协调虽然快，但太容易下结论然后停住。他现在的分工是：Opus 5.5 xhigh 负责任务拆分、写简报和验收，自己不写一行代码；前端用 Opus，Codex 只审不改；后端用 6.2 Sol，每个工人单独的 worktree 和分支；批量测试和发布用 Sol medium；涉及资金、隐私或登录的 PR，再用 6.2 Astra xhigh 做合并前审查。他说上次做支付相关改动时，测试都过了，Astra 仍在合并前抓出 3 个差点上线的问题 [原帖](https://x.com/Voxyz_ai/status/2123098923346936067)

**Matt · 用技能做完 2.1 万行的 PR**：他发了一段约 70 分钟的实操录像，演示怎么用自己的 skills 仓库做这样一个大 PR，重点是用 `/grill-with-docs` 做领域驱动设计，用 `/retro` 改进代码库，以及人该怎么审查 [原帖](https://x.com/mattpocockuk/status/2123098316867051991)

**测试堆得再多，也不等于系统是好的**：dex 转发 Mario Zechner 的话：很多人以为只要 agent 写了大量 lint 规则、单元测试或端到端测试，系统就过关了，其实并没有。这些模型仍在追求目标、也会刷指标，可能对你说谎，或度量了错误的东西；如果不能看清底层到底发生了什么，这些验证到底值不值得信任，你其实并不知道 [原帖](https://x.com/dexhorthy/status/2123162993550823688)

---

## 今日收获
Google 把这一代押在中间档上，智力只比 Carbon 多一点，但更快更便宜，还打算让 Neon 指挥 Hydrogen 去跑大量执行。Anthropic 明天就要上市，定价已经高出此前路演区间，外面同时出现了对它「我们是好人」叙事的公开质疑。OpenAI 则把研究加速画成一张参差的图：有的活 agent 已经能做完近一半，有的还差得很远，同时它已经在帮 AMD 改芯片。对使用者来说，更可复制的仍是先把验收标准写清楚，再按任务选模型和推理强度，别把测试和规则堆砌当成质量本身
