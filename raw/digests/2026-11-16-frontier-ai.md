---
title: 前沿 AI 每日简报
date: 2026-11-16
type: frontier-ai
lang: zh-CN
---

# 前沿 AI 每日简报 · 2026-11-16

## 今日主线
- ChatGPT Wallet 让 dot 代你下单付款，美国 Pro 用户先用，卡组织只给 token，真实卡号不进 agent
- DeepSeek 把 App 里的搜索、文件、语音等能力开放成 API；LangChain 融资 3 亿美元，估值 30 亿美元
- 《金融时报》引述知情人士称，黄仁勋正在和亲信讨论重回英伟达 CEO，这是二手报道，公司尚未官方确认

---

### 前沿动态

**ChatGPT Wallet**：dot 可以代你完成购买，但每次都要你本人做安全校验，比如 Face ID 或指纹。支付走美国运通、Mastercard 和 Visa 发的 token，商家和 agent 都拿不到真实卡号，符合条件的争议仍走原来的卡权益。今天起先给美国、年满 18 岁、持合格美国发行卡的 Pro 用户，在 dots 里开放。OpenAI 同时给商家出了接入指南，包括认领商家资料、用 Web Bot Auth 避免防火墙误拦 agent，以及和风控服务商对上代付交易 [ChatGPT](https://x.com/ChatGPT/status/2121283151729496235) · [Brockman](https://x.com/gdb/status/2121295213025194172) · [公告](https://openai.com/index/introducing-chatgpt-wallet/)

**Gemini 接上 Google Wallet**：Personal Intelligence 新增 Wallet，可以按你的消费习惯回答理财问题，比如在对话里画出金流、资产配置和预算图，找出忘记的订阅和涨价，也可以问去年礼物和旅行花了多少，用来定今年的节日预算。还可以经 Plaid 把信用卡和银行账户连进 Wallet，看更深的数据 [Google](https://x.com/Google/status/2121293823837921433)

**DeepSeek App 能力进 API**：官方把 App 里的搜索、文件、链接、安全和语音开放出来，用参数就能打开内置功能，也可以单独调用 OCR、ASR、TTS。还开源了前端演示，支持导入 DeepSeek 对话记录 [DeepSeek](https://x.com/deepseek_ai/status/2121247896918253875) · [文档](https://api-docs.deepseek.com/guides/build_a_chatbot) · [代码](https://github.com/deepseek-ai/chat-demo)

**LangChain 完成 C 轮**：Harrison Chase 宣布融资 3 亿美元，估值 30 亿美元。他说 agent 会改写经济，能自己掌握智能的公司才会有壁垒，接下来会把 LangSmith 做成不绑框架的运行、改进和治理平台 [Chase](https://x.com/hwchase17/status/2121279222912352574) · [博文](https://www.langchain.com/blog/series-c)

**Anthropic 安全评测十条**：工程博客讲怎么设计、跑和汇报安全评测，强调评的是模型会不会把事情做对，不是会不会完成任务。十条里包括配齐方法和领域专家、多轮情景、预注册分析计划、用人类判断校准打分器、完整报告不确定性和负责任披露。文末说如果只能做三件事：先写清要测的构念再收集数据，打分器先和人对照，再报告不确定性 [Anthropic](https://x.com/AnthropicAI/status/2121317227618340990) · [博文](https://www.anthropic.com/research/building-strong-safety-evaluations)

**黄仁勋回归传闻（二手）**：宝玉整理《金融时报》11 月 15 日报道，多名知情人士称黄仁勋已在和亲信讨论重新出任 CEO，董事会调查尚未结束。一位盟友说正在召集硅谷高管组成“作战室”游说董事会，并争取白宫支持。Reuters 等也转述了这篇报道，Yahoo 称英伟达和黄仁勋的发言人对 FT 不予置评。与此同时，Stand with Jensen 公开信要求先让他回来、公开调查范围和时间表，Amjad 在转发这封信；宝玉转述 Moneywise 称截至 14 日上午签名超过 10 万，其中 5000 多人自称英伟达在职员工。Altimeter 的 Brad Gerstner 和 Atreides 的 Gavin Baker 公开致信董事会，希望接班的事慢一点，把回归留作选项，并没有要求马上复职 [宝玉](https://x.com/dotey/status/2122062085807030716) · [Amjad](https://x.com/amasad/status/2121377395244749097)

---

### 领袖洞察

**Mollick · SatBench**：他做了个 SatBench，看实验室自 2023 年以来引用的主要基准被“打穿”有多快。173 个基准里，63% 已经饱和，而且一年比一年快。他的判断是，模型进步比我们测量它的速度还快 [原帖](https://x.com/emollick/status/2121751565845360769)

**Mollick · agent 蜂群会把流量打满**：他让 Fable 5.2 复原奥登 1941 年的诗歌课，它在 Internet Archive 里找到一本冷门相关书，靠反复全文搜索一行一行读完。这类研究会一直跑，流量会很大。同一周他还看到宾大课堂里，一个人用 AI 做出来的项目，已经比三年前一整个团队的成品往前走了大约 10 倍；又说家里如果没有好模型当中枢，和 Siri、Alexa 一比，会越来越像短板 [复原课堂](https://x.com/emollick/status/2121641417483169934) · [学生项目](https://x.com/emollick/status/2121328191755218946) · [家用中枢](https://x.com/emollick/status/2122092065890635873)

**Lambert · 没有老黄之后的开源模型**：开放模型会先遇到两件事，一是政治上的盟友在华盛顿后退，二是少了黄仁勋这个后盾，做模型的人得更快找到能赚钱的产品。他说这会比很多人预想的更早被感觉到 [原帖](https://x.com/natolambert/status/2121581040972255257)

**Levie · 工作会往“像写代码”靠**：模型在编程、工具和电脑使用、数学上还会继续变强，能用软件或从头写代码的 agent，进步会快过其他知识工作。结果不一定是只有一小部分工作能被自动化，更可能是越来越多工作被改成 agent 擅长的形状。模型不必什么都懂，真正要会的是把软件用好或写好，再加上领域判断 [原帖](https://x.com/levie/status/2121686564078297461)

**Chollet · 年初那场 SaaS 恐慌**：他引用一组市场观察说，2026 年初那轮“SaaS 要完了”的恐慌，当时看就站不住 [原帖](https://x.com/fchollet/status/2122016531878215790)

---

### AI 原生工作方式

**OpenAI 怎么跑常驻 agent**：Peter Steinberger 转发同事 Kevin 的文章，介绍他们在公司里管理 OpenClaw 机群的做法。和一次一目标的 Codex 会话不同，常驻 agent 全天在跑，还会自己改配置、写代码。OpenAI 现在全公司都在用，已有超过 500 个会主动干活的 agent，比如根据产品反馈自动开 PR，或持续做功能实验。做法是把网关等可信逻辑和模型执行拆开，用沙箱卡住网络、工作区、进程和密钥，再用第二个模型做 Auto-review，减少人的审批疲劳，每个 agent 还有独立身份便于审计和关停。他们同时在做开源的 OpenClaw Enterprise 控制面，计划年底到 1.0 [Steinberger](https://x.com/steipete/status/2121058770767982997) · [Kevin](https://x.com/kevins8/status/2120962631788114377) · [博文](https://developers.openai.com/blog/securing-persistent-agents-like-openclaw-at-openai)

**Chase · Goal Engineering**：和 Actively AI 合写的文章，核心是：给 agent 定目标时，要让人很容易对它的工作给反馈。最难补的上下文往往不在文档里，而在专家脑子里。Actively 一开始按“一个客户一个 agent”来做，销售要在多个 agent 之间切来切去，学到的外拓和谈判经验也难复用。后来改成按销售动作切片、跨很多客户复用，客户资料由后台 agent 去收集。配套还要舍得做审阅界面，因为瓶颈常常是反馈，不是模型本身 [原帖](https://x.com/hwchase17/status/2121635683999883577) · [文章](https://x.com/i/article/2121382906820243456)

**Lenny · Muse 的来历**：今年 1 月底 Nat Friedman 让 Meta 几个人试试 OpenClaw。Mona Sarantakos 周末把环境搭在树莓派上，连上自己的邮件和日历，周一早上它已经把孩子学校那一周的安排整理好了。团队又做了七个月，才把产品做成足够安全和简单的 Muse，Lenny 转述这是有史以来增长最快的消费级 AI 产品。Mona 还谈到真正拉动激活的两个杠杆，以及团队更靠 agent 蜂群而不是仪表盘，品味成了最重要的 PM 能力 [原帖](https://x.com/lennysan/status/2121998648573837740)

**Lenny · 科技岗位在向湾区集中**：目前 15% 的在招科技岗位在湾区，大约七分之一，是有记录以来最高。产品岗更集中，四分之一的在招 PM 和设计岗、五分之一的工程岗在湾区，这三类的份额都接近或已是新高，较 2022 年几乎翻倍。远程岗位继续变少，只有 14% 的在招科技岗位还提供远程选项，也是有记录以来最低 [原帖](https://x.com/lennysan/status/2121296544041456007)

**Rauch · 强模型规划、快模型干活**：他说现在项目都是先用最强模型做规划，再交给快模型 subagent 执行，这一条写在 `~/.fx/AGENTS.md` 里就够了。另一条判断是，以后代码会这样交付：agent 写带功能开关的代码，推送时过验证和安全审查，再由 agent 盯指标，这一套用 Vercel CLI 的 flags、metrics、deploy 现在就能做 [subagent](https://x.com/rauchg/status/2121739228698886454) · [交付](https://x.com/rauchg/status/2121711321347715093)

**Mitchell · 别做 demoslop**：他代表 Superlogical 说，已经看够了像演示稿一样的软件，想重新做出打磨过的东西。他们当然用 AI，但要让人看出“没品味的提示词”和“有手艺的人被 AI 放大”不是一回事 [原帖](https://x.com/mitchellh/status/2121681502316757065)

---

### 实践最佳实践

**Addy · 先加思考再换模型**：日常用 Opus 5.5 的 medium 就很好。它卡住时，先把思考强度加高，再考虑换模型。Fable 5.2 留给真正难的活，比如大迁移和长时间无人值守。这和 Anthropic 官方的选型文章是一个方向 [原帖](https://x.com/addyosmani/status/2121732470118965298) · [官方文](https://claude.dev/blog/which-claude-model-should-you-build-with/)

**Vox · 别把最强模型当实习生用**：不要只对 Fable 5.2 说“找 bug”“做这个功能”“为什么 CI 这么慢”，帖子里附了 6 段可直接复制的提示词。他还建议在 AGENTS.md 里写清：双向门（代码、分支、PR、测试数据、开发环境）先做再给你看，单向门（生产数据、对用户发布、强推共享分支、删不是自己写的东西、发给别人的消息）先停；能跑出来的问题就自己跑，不要拿橡皮图章问题来问人 [六段提示](https://x.com/Voxyz_ai/status/2122011755240984607) · [双向门](https://x.com/Voxyz_ai/status/2121672008421568810)

**Vox · 预览链接直接开到手机上**：电脑和手机装同一个免费 Tailscale 账号，让 Claude Code 或 Codex 跑起项目后不要给 localhost，而是用 `tailscale serve` 发一条可在手机打开的链接，写进 AGENTS.md 或 CLAUDE.md，以后每次都这样 [原帖](https://x.com/Voxyz_ai/status/2121702208546967753)

**Vox · 过夜任务别卡死在一步**：用 Herdr 并排开 Opus 5.5 和 GPT-6.1 Sol，每一步都是计划、实现、验证、修复，验证通过才算完，单步最多试 3 次，失败就记下错误、标成阻塞，转去做其他独立步骤。Opus 把 diff 交给 Sol 审查，Sol 签字后这一步才结束，再用 `/goal` 写清今晚什么叫做完，然后挂起去睡觉 [原帖](https://x.com/Voxyz_ai/status/2122072146411438294)

**Matt · /animatic**：他在做两个 skill，`/setup-animatic` 负责选工具并在本地或远程机器上装好，`/animatic` 直接产出能上传的视频，用来代替大段 Markdown，也希望重要 PR 都能配一段演示录像 [原帖](https://x.com/mattpocockuk/status/2121211579098083668)

**No AI Slop Manifesto**：dex 和 AI Engineer Code Summit 的一批评委、听众一起写了这份宣言，已上 HN 首页，有 300 多人签名。他点出的几条是：AI 不能代替人的判断，只能放大判断或放大判断的缺失；意图、品味和上线后果仍由人负责；模型再强，也总有值得审的东西，哪怕以后不再通读代码，仍要审计划、设计或结果，否则你拿到的只是和别人一样的输出 [原帖](https://x.com/dexhorthy/status/2121660606256435325)

**Kent · 少亲手发那一条提示**：下次再开一个 agent 会话或补一条提示之前，先问自己：怎样事先设计，才能让我不用亲手发这一条，还能得到同样的结果？这才是在建软件工厂。另一条是，要让 agent 抱怨你的产品和代码库里让它不好干活的地方 [少发提示](https://x.com/kentcdodds/status/2122069021218750527) · [让它抱怨](https://x.com/kentcdodds/status/2122028323555651636)

---

## 今日收获
agent 开始摸到真金白银了，OpenAI 和 Google 都把钱包接进助手，但上门槛很清楚：人还要签字，卡号不给模型。日常工作上，大家越来越认同一件事，先把中档模型用好，卡住再加思考，最强模型留给难任务和审查。常驻 agent 要规模化，靠的不是放开手脚，而是沙箱、第二模型审核和独立身份。目标怎么切、环境里留下什么规则，会决定它能走多远
