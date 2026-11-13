---
title: "2026-11-13 · 前沿 AI"
title_en: "2026-11-13 · Frontier AI"
description: "当日前沿 AI 动态与实践者方法简报。"
description_en: "Daily frontier AI news and practitioner notes."
date: 2026-11-13
type: frontier-ai
lang: zh-CN
---

## 今日主线
- Google 发布 Gemini 4 Hydrogen，补齐 Gemini 4 的快档，跑分超过 Argon，每百万 Token 输入 $1.50 输出 $7.50
- Claude 能进 Google Meet 开会了，边聊边写文档画白板；OpenAI 在 Cyber at the Frontier 上推出 Daybreak 两款安全产品
- 黄仁勋辞去英伟达 CEO，CFO Colette Kress 临时接任；实践侧 Matt Pocock 的 Home Repo 把多仓库 agent 配置收进一个仓库

## 前沿动态
- **Gemini 4 Hydrogen**：继 Carbon、Argon 之后的快速主力档，接替 3.8 Flash。官方说同类任务快 2.5 倍，Terminal-Bench 4.1 从 18.2% 提到 57%，编造内容少了 5 倍以上，Artificial Analysis 智能指数默认 high 档 51，超过 Argon 的 50，新的 xhigh 档到 54。1M 上下文内统一定价，输入每百万 Token $1.50，输出 $7.50，有 low、medium、high、xhigh 四档思考，开发者免费层可用，Gemini App、搜索也同步上。Antigravity 新增 Orchestrator，同一会话里在 Carbon 和 Hydrogen 之间自动切换，官方称在 Terminal-Bench 4.0 上接近 Carbon 的成功率，额度少用 24%，快 19%；并行场景建议 Carbon 当协调者，Hydrogen 做 worker 和验证者 [Sundar](https://x.com/sundarpichai/status/2120940236805169182) · [Logan](https://x.com/OfficialLoganK/status/2120940951292268640) · [DeepMind](https://x.com/GoogleDeepMind/status/2120940338869055788) · [公告](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
- **Levie 实测 Hydrogen**：Box 的复杂工作评测里，Hydrogen 比 3.8 Flash 准确率高 5 个百分点，用时不到一半，典型任务 Token 少约 12%，很快上 Box AI Studio。宝玉的中文整理里点明 Google 拿它对标 Claude Sonnet 5.5 和 GPT-6.1 Terra，快档模型现在开始抢主力位了 [Levie](https://x.com/levie/status/2120947988143198302) · [宝玉](https://x.com/dotey/status/2120945309714919886)
- **Claude Meetings 测试版**：把 Claude 拉进视频会议，它以可见参与者身份入会，口头或聊天提问都行，会上直接起草文档、画白板，会后笔记、待办、转录和产出都在该会议的页面里。先支持 Google Meet，Team 和 Enterprise 逐步开放；默认有外部人员入会就不进或中途退出，只存转录和摘要不存音频，测试期笔记和转录免费，会中产出免费到 2027 年 2 月 10 日。Alex Albert 说现在用好 Claude 的关键就是找出它缺的那块上下文，会议是最后一块 [Claude](https://x.com/claudeai/status/2120973994191094179) · [说明](https://claude.com/resources/articles/claude-meetings) · [Alex Albert](https://x.com/alexalbert__/status/2120983722182988206)
- **OpenAI Daybreak**：Cyber at the Frontier 发布会上推出 Defense Factory 和 Red Team。Defense Factory 把安全扫描结果交给 agent 逐条追查、写补丁，工程师审过再合并，可接 Codex 一起调补丁，也能对新提交持续扫描；Red Team 负责进攻测试。不少人原本等 GPT-6.2，结果是安全专场 [Greg Brockman](https://x.com/gdb/status/2121004237413142656) · [Defense Factory](https://openai.com/daybreak/defense-factory/)
- **ChatGPT dots 更新与重置卡**：dots 回复更快、少术语、执行更到位，还能在线程里给它立规矩，比如发邮件前先给草稿。Tibo 同时确认之前说的 banked reset 已激活，会陆续到账 [ChatGPT](https://x.com/ChatGPT/status/2120970988796170275) · [Tibo](https://x.com/thsottiaux/status/2120999993079451919)
- **英伟达换帅**：英伟达官方宣布 CEO 交接，黄仁勋辞去总裁、CEO 和董事职务立即生效，CFO Colette Kress 兼任临时 CEO，董事会内外找接班人，公司首次设董事长。外媒报道起因是董事会对他私人关系的调查。Nathan Lambert 认同老黄离任对美国开源模型很不利，并给 Nemotron 和 Hugging Face 的朋友打气；Amjad 则质疑时机，属个人猜测 [英伟达](https://x.com/nvidianewsroom/status/2120876571829662014) · [宝玉](https://x.com/dotey/status/2120902632550060478) · [Lambert](https://x.com/natolambert/status/2120880836488913049) · [Lambert 打气](https://x.com/natolambert/status/2120890682743443481) · [Amjad](https://x.com/amasad/status/2120671838909194695)
- **其他**：Vercel 开源 UI SDK，Rauch 的说法是把可访问性、性能这些行为打包成给 agent 用的底层指令集，不再让高层框架限制 agent 能生成的界面 [Vercel](https://x.com/vercel/status/2120950020249895314) · [Rauch](https://x.com/rauchg/status/2120966768483262648)；Replit Agent 可以替你的业务买东西、投 Google 广告 [Amjad](https://x.com/amasad/status/2121018020520931712)；百度世界发布「词元所」，定位模型交易所，邵猛直言没看懂和普通 Token 中转站有什么区别 [meng shao](https://x.com/shao__meng/status/2120810839456600433)；Anthropic 发布 IPO 正式页面 [Anthropic](https://x.com/AnthropicAI/status/2120841731302154708)

## 领袖与研究者洞察
- **Mollick · 动力织机**：不必爱动力织机也不必恨手工织布，也能认出动力织机。很多原本只能靠手艺的脑力活，可能很快要服从工业化的逻辑 [原帖](https://x.com/emollick/status/2120706817584234858)
- **Mollick · Primer 开源**：沃顿生成式 AI 实验室发布 Primer，老师口头讲清一堂课，系统先访谈、出设计文档，老师批准后才由多个 agent 搭出可玩的教学模拟，导师、练习、反馈三个角色各管一段。论文、提示词和代码全开放，还附了一段让 agent 自己复刻 Primer 的提示词 [原帖](https://x.com/emollick/status/2121001056637431873) · [项目页](https://gail.wharton.upenn.edu/primer/)
- **Chollet · 教育别只给答案**：对话式 AI 会改变教育，但多数工具优化错了目标，作业的意义不是产出，而是学会思考 [原帖](https://x.com/fchollet/status/2120673529951813985)
- **宝玉转译 · 软件工程师现在该怎么办**：Scott Bolinger 认为纯技术技能随每个新模型贬值，给模型写用户故事常比严谨技术方案好用。他的应对是把格局放到更大的问题上，补产品定位、心理学、营销这些没有标准答案的人的问题 [宝玉](https://x.com/dotey/status/2120961974519398535) · [原文](https://x.com/scottbolinger/status/2120897438001283512)

## AI 原生工作方式
- **常驻 agent 占 AI 开销 45%**：Harrison Chase 转引 SemiAnalysis 的 Dylan Patel，他们的 AI 支出里常驻 agent 已占 45%，主要用 Perplexity Computer，并直说 Claude Tags 和 OpenAI 的 Slack agent 不好用。这是第一方说法，但只代表一家 [原帖](https://x.com/hwchase17/status/2121023221516599528)
- **Lenny · 用户研究员去哪了**：2024 到 2025 年换工作的 2779 名美国用户研究员里，49% 继续做研究，17% 转设计，9% 离开这行，约 2% 当了 PM；继续做研究的近一半去了科技以外，金融保险吸收了约七分之一 [原帖](https://x.com/lennysan/status/2120953935498482103)
- **Peter Steinberger · 小心收钱的好评**：本周有个新 agent 要发布，营销方正在花大价钱买 X 上的好话，留意真实评测 [原帖](https://x.com/steipete/status/2121009372470067544)

## 实践者方法
- **Matt · Home Repo 模式**：跨多个仓库用 agent 时，skills、AGENTS.md 和共享文档各仓库一份很难维护。他的做法是建一个 Home Repo 专门放这些东西，agent 永远在这里启动，AGENTS.md 里给每个子仓库写一行指针，写明本地路径和缺失时从哪克隆。共享和重复的配置搬进来，只关乎单个仓库的命令和文档留在原处；每个仓库只克隆一次，每个功能开一个 worktree 并行跑。约 20 个仓库直接列指针，几百个就按业务域分文件渐进披露。文章附了一段可直接跑的设置提示词：agent 自己盘点仓库和 skills，分轮次带推荐答案向你提问，你批准前只读不改，也不碰 .env [原帖](https://x.com/mattpocockuk/status/2120838662254420341) · [文章](https://www.aihero.dev/the-home-repo-pattern)
- **Vox · 删注释**：agent 爱照抄代码库里已有的东西，留一条临时绕过的注释，它就当成这里可以绕过。建议让 Claude Code 或 Codex 找出没用的注释，保留浏览器怪癖这类该留的，再给计划区分哪些绕过该重构、哪些直接删 [原帖](https://x.com/Voxyz_ai/status/2120984983330578472)
- **Vox · 清理理想路径债**：agent 按演示环境写，一切顺利才好用。可以让它找出所有只在数据加载快、不出错、列表不空、文字短、屏幕宽时才正常的界面，逐个组件补齐缺失状态和布局问题，不改设计，按文件总结前后差别 [原帖](https://x.com/Voxyz_ai/status/2120864199324889469)
- **Vox · 提前压缩上下文**：1M 上下文的 Fable 5.2 和 Opus 5.5 默认要到约 967K 才自动压缩，一个会话开一整天，每问一句都在为整段对话付费。用 `/autocompact 400k` 把压缩点调低，按模型保存，`/autocompact auto` 可还原 [原帖](https://x.com/Voxyz_ai/status/2120924596178190707)

## 小工具
- **Gemini 4 Hydrogen**：Gemini 4 的快速主力档，接替 3.8 Flash，1M 上下文内输入每百万 Token $1.50、输出 $7.50 [Sundar](https://x.com/sundarpichai/status/2120940236805169182) · [公告](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
- **Antigravity Orchestrator**：同一会话里在 Carbon 和 Hydrogen 之间自动切换，并行场景建议 Carbon 当协调者、Hydrogen 做 worker 和验证者 [Sundar](https://x.com/sundarpichai/status/2120940236805169182) · [公告](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
- **Claude Meetings**：把 Claude 拉进视频会议，先支持 Google Meet，会上可起草文档、画白板 [Claude](https://x.com/claudeai/status/2120973994191094179) · [说明](https://claude.com/resources/articles/claude-meetings)
- **Daybreak Defense Factory 与 Red Team**：OpenAI 在 Cyber at the Frontier 上推出的两款安全产品，Defense Factory 把扫描结果交给 agent 追查并写补丁，Red Team 负责进攻测试 [Greg Brockman](https://x.com/gdb/status/2121004237413142656) · [Defense Factory](https://openai.com/daybreak/defense-factory/)
- **ChatGPT dots 与 banked reset**：dots 回复更快、少术语，可在线程里立规矩；banked reset 已激活，会陆续到账 [ChatGPT](https://x.com/ChatGPT/status/2120970988796170275) · [Tibo](https://x.com/thsottiaux/status/2120999993079451919)
- **Vercel UI SDK**：把可访问性、性能这些行为打包成给 agent 用的底层指令集 [Vercel](https://x.com/vercel/status/2120950020249895314) · [Rauch](https://x.com/rauchg/status/2120966768483262648)
- **Primer**：沃顿生成式 AI 实验室发布，老师讲清一堂课后由多个 agent 搭出教学模拟，论文、提示词和代码全开放 [原帖](https://x.com/emollick/status/2121001056637431873) · [项目页](https://gail.wharton.upenn.edu/primer/)
- **Home Repo**：把多仓库的 skills、AGENTS.md 和共享文档收进一个仓库，agent 从这里启动 [原帖](https://x.com/mattpocockuk/status/2120838662254420341) · [文章](https://www.aihero.dev/the-home-repo-pattern)
- **`/autocompact 400k`**：把长会话的自动压缩点调低，按模型保存，`/autocompact auto` 可还原 [原帖](https://x.com/Voxyz_ai/status/2120924596178190707)

## 两三句
快档模型在升级成主力：Hydrogen 便宜、快，跑分还压过上一代旗舰，Google 直接给出强模型协调、快模型干活和验证的分工，跟大家手工按任务挑模型是一个思路。会议、安全修复这些原本靠人串起来的环节，正在被做成 agent 的入口。实践上，Matt 的 Home Repo 和 Vox 删注释说的是同一件事：agent 会照着环境学，环境里留什么，它就学什么
