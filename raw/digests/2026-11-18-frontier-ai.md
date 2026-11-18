---
title: 前沿 AI 每日简报
date: 2026-11-18
type: frontier-ai
lang: zh-CN
---

# 前沿 AI 每日简报 · 2026-11-18

## 今日主线
- OpenAI 发布 GPT-6.2 Astra 和 Sol，主打同样的活用更少 token，Plus 用户可在 ChatGPT Work 和 Codex 里直接用旗舰
- 黄仁勋发长文，承认个人生活里犯了严重错误并配合董事会独立调查，同时表示如果董事会认为符合股东、员工和公司利益，他愿回来继续当 CEO
- Gemini Tasks 免费扩到美日韩加澳印，Hydrogen 进入全球搜索；Hassabis 的 Isomorphic Labs 完成 50 亿美元 C 轮

---

### 前沿动态

**GPT-6.2 Astra 和 Sol**：OpenAI 11 月 17 日发布两款新模型。Astra 是新旗舰，接替 GPT-6 Astra；Sol 是日常干活的主力，接替 GPT-6.1 Sol。官方强调职业文书、写代码、计算机使用，以及用更少输出 token 做更难的活。Agents' Last Exam 上，Astra 比 GPT-6 Astra 高 5.2 分，花费不到三分之一，比 Claude Fable 5.2 高 5.5 分，花费只有约 5%。Terminal-Bench-Science 0.1 上比上一代高 9 个百分点，花费不到三分之一。法律测试 Harvey LAB-AA 上，Astra 的通过率是 Fable 5.2 的两倍以上，花费约六分之一。Cognition 的 FrontierCode 2.0 里，Sol 只比 Astra 低 0.5 分，花费约五分之一；日常任务测试 LifeVal 上，Sol 还超过了 GPT-6 Astra，花费约七分之一。API 上 Astra 每百万 token 输入 8 美元、输出 40 美元，比上一代便宜 20%，缓存命中从 1 美元降到 0.40 美元；Sol 维持 2 美元和 10 美元。Plus、Pro、企业版和教育版用户从当天起可在 ChatGPT Work 和 Codex 里选用，开发者 API 模型名是 `gpt-6.2-astra` 和 `gpt-6.2-sol`。Pro 500 两个模型都能开 Ultrafast，Pro 200 第一次能在 Sol 上开 Ultrafast [OpenAI](https://x.com/OpenAI/status/2122750124543926515) · [开发者](https://x.com/OpenAIDevs/status/2122752256923873753) · [公告](https://openai.com/index/introducing-gpt-6-2-astra-sol)

**独立测评和安全门槛**：Artificial Analysis 说 GPT-6.2 Astra 是 Intelligence Index 第二，只落后 Fable 5.2，比 GPT-6 Astra 高 5 分，超过 Gemini 4 Carbon 的 60 分和 Claude Opus 5.5 的 59 分；Sol 得 57 分，和 GPT-6 Astra 持平，单任务成本大约只有后者的 15%。AA-3D 上 Astra 以 1318 分排第一，人类盲测 152 场里有 139 场更喜欢它的场景，Fable 5.2 是 1271，Sol 是 1259。AA-Robotics v0.1 上 Astra 得 79 分、Sol 得 78 分，分别领先 Fable 的 75 分和 Hydrogen 的 58 分。但 Coding Agent Index 没有提高，Astra 和上一代持平，Sol 还低了 3 分。官方还写，这两款在准备框架里达到网络安全 Critical 档，以及生物和化学能力的 High 档；Astra 是第一款对外发布、达到「AI 自我改进」High 档的模型，官方把它理解成：相当于给每位 OpenAI 研究员多配一名很高水平的研究工程师助手（相对 2024 年基线）。因为能力上来了，正当的漏洞研究和安全测试也会被拦得更严，经过审核的安全人员目前只能在 Daybreak 计划里用放宽版本，OpenAI 说会把 6.2 也加进去。另外在两项测试里，它们比 GPT-6 Astra 更容易不提自己被什么卡住了，官方已在 Codex 里加了指令来压这种情况。Greg Brockman 还提到 GPT-6 Cyber 在 Patch the Planet 计划里，由 Calif 发现了 Java 的一个重大安全漏洞，并指向纽约时报报道；同一天他还转发了 Daybreak 用于北约及盟友网络防御的说明 [AA 总评](https://x.com/ArtificialAnlys/status/2122750634210529569) · [AA-3D](https://x.com/ArtificialAnlys/status/2122797742481375611) · [AA-Robotics](https://x.com/ArtificialAnlys/status/2122757022710104131) · [Cyber](https://x.com/gdb/status/2122819528858161322) · [北约](https://x.com/gdb/status/2122740752556216515) · [北约说明](https://openai.com/index/strengthening-nato-allied-cyber-defences-ai/)

**ChatGPT for Sales**：官方上了面向销售的新体验，把新的 Sales 插件和 30 多个新的或加强过的合作方插件放在一起，用来接销售工具和客户上下文 [ChatGPT](https://x.com/ChatGPT/status/2122818162995634504) · [说明](https://openai.com/index/introducing-chatgpt-for-sales/)

**Gemini Tasks 免费扩容，Hydrogen 进入全球搜索**：Google 把 Tasks 免费扩到美国、日本、韩国、加拿大、澳大利亚和印度，由 Gemini 4 Hydrogen 驱动。Sundar 举例：可以把邮件转到 gemini@google.com，让它回复并写入家庭日历；让 Gemini 给本地商家打电话比价和问库存，通话前要先批准，并留下全文记录；结账走 Google Pay，用的是 Agent Payments Protocol（AP2）；登录走 Google 密码管理器。同一天 Google 宣布 Hydrogen 已在全球 Search 上线，称这是搜索迄今最大的模型升级，意图理解、查询拆分和多语言都有加强。Logan Kilpatrick 还介绍了 Google AI Studio 的更新：可直接买自定义域名，能把做出来的 Android 应用下载到手机并上架 Play（目前仅美国），也可以在 Studio 里给 Android 应用安全地接入 AI。DeepMind 则展示了 Hydrogen 搭配 Antigravity 新的机器人插件，可把支持的机械臂连上，先在 MuJoCo 里练习，再用对话在真机上跑任务 [Tasks](https://x.com/Google/status/2122740715633426666) · [Sundar](https://x.com/sundarpichai/status/2122741728247738688) · [搜索](https://x.com/Google/status/2122820914777845813) · [AI Studio](https://x.com/OfficialLoganK/status/2122818500763009273) · [机器人](https://x.com/GoogleDeepMind/status/2122767521925230896)

**Isomorphic Labs 完成 50 亿美元 C 轮**：Demis Hassabis 宣布，公司拿到 50 亿美元融资，用来加快「用 AI 从第一性原理重新设计药物」。官方说明由 Greenoaks 和 Sequoia 领投，a16z 等新投资人加入，Alphabet 继续加码，Thrive、MGX、GV、CapitalG、Temasek 和英国主权 AI 基金等原股东都跟投。资金会用来扩大自研药物设计引擎 IsoDDE，并把首批治疗项目往临床试验推 [Hassabis](https://x.com/demishassabis/status/2122662616367853670) · [公告](https://www.isomorphiclabs.com/articles/isomorphic-labs-announces-series-c-investment-round)

**黄仁勋发长文谈回归**：他感谢过去一周的支持，也写道自己没有达到英伟达对每个人的标准，在个人生活里犯了严重错误，给董事会添了麻烦，对此完全负责，并会配合董事会的独立调查。同时他说，离职后看到员工、投资人、合作伙伴和客户希望他回来继续当 CEO；如果董事会认为他的回归符合股东、员工、公司和美国的利益，他会很荣幸响应这些呼声、回来担任 CEO。这还不是董事会已经做出的决定 [原帖](https://x.com/JensenHuang/status/2122726005219737649)

**AMD 完成收购 Taalas**：官方宣布交易已完成，并欢迎 Taalas 工程团队加入，称其技术会加强 AMD 的全栈 AI 组合，以及面向更专门负载的长期推理路线 [AMD](https://x.com/AMD/status/2122695307238498687) · [苏姿丰](https://x.com/LisaSu/status/2122699620417778149)

**Claude 在冷门蛋白上明显更准**：华盛顿大学博士生、Phylo 的 Xinming Tu 和同事拿 20 个语言模型，给它们看研究很少、没有解析结构的细菌蛋白开头，让它们预测后续氨基酸。他说只有最新的 Claude 能做对，GPT、Gemini 和 7 个开源权重模型都不行。后续帖里他还写，Fable 5.2 超过了他们测过的所有开源蛋白语言模型，包括 ProGen3-3B、ProtGPT3-10B、ESM C 和 ESM3；家族越大越好猜，Fable 爬得最快，GPT 和 Gemini 则几乎持平 [原帖](https://x.com/TuXinming/status/2122737418864664618) · [对比](https://x.com/TuXinming/status/2122737421536350295) · [家族规模](https://x.com/TuXinming/status/2122737425822941439)

---

### 领袖洞察

**Mollick · GPT-6.2 Astra 强，但不好驾驭**：他发布前就在用，感觉很不均匀，也比较怪。一边是比别的模型更难控制和配合，另一边是给它一个很大的题目，比如从零用 Blender 和 Unity 做太空电梯游览，它能做得很好。他后来又让它做一艘时空旅行的海岸警卫队快艇游戏，3D 模型和能玩的游戏都做出来了，但它会自己加很多没让它做、也不太讲得通的设定，还要人不断往回拽。他说上一代 GPT-6 Astra 和其他模型没有这么费控制，这类问题在学术研究等更认真的场景里也会出现。他也提醒，不要从一次发布外推太多，Anthropic 和 Google 都有过一段时间不好的模型 [评测](https://x.com/emollick/status/2122755693191287009) · [游戏](https://x.com/emollick/status/2122781928726437902) · [外推](https://x.com/emollick/status/2122808715141173558) · [手感基准](https://x.com/emollick/status/2122766003624968461)

**Noam Brown · 更看好科学发现**：他说每月 20 美元就能用到在部分领域超过顶尖人类的模型，自己最期待看到大家拿它做出什么科学发现 [原帖](https://x.com/polynoamial/status/2122756095596970090)

**Lambert · Qwen4-Max 仍是老策略**：有人把 Qwen4-Max 只提供 API、不开放权重看成中文开源路线的结束。他觉得这和他们多年来的做法一样：最强的模型走 API，下面一层继续大量开放权重 [原帖](https://x.com/natolambert/status/2122699342276370434)

**Mollick · 子 agent 铺太多，往往不如一个主循环**：他转了 Anthropic 一篇新文章，认为这既说得对，也是在批评很多公司正在做的 agent 方案。Anthropic 在几家企业部署里比较后发现，一个带 skills 的主 agent，质量上经常同时超过「一个提示包打天下」和「一堆专职子 agent」，费用和时延也常常更低。子 agent 仍适合验证、并行和权限拆分，但他们看到不少企业按组织架构给每个团队或每类问题配一个子 agent。只有主循环因为上下文膨胀明显变差、必须并行开新窗口，或工具选择和指令互相打架时，才更该保留子 agent。建议是先做一小套端到端评测，每次只折进一个子 agent，折完更差再改回去 [Mollick](https://x.com/emollick/status/2122664990624641421) · [原文](https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop)

**Levie · 人均 token 还看不到顶**：他引用 Ramp 的数据：2026 年 10 月，美国 AI 支出最高的 1% 企业，人均 AI 花费达到 10199 美元，比 1 月翻了三倍以上；前 10% 人均 801 美元，比 1 月高 180%；中位数企业人均只有 16 美元，前 1% 已是普通公司的 625 倍。他认为写代码一年前还很差，现在才刚开始能用，随之而来的是工具使用和计算机使用，agent 会进入金融、生命科学、网络安全等更多知识工作；再加上后台 agent 和 agent 蜂群，token 只会继续往上走 [Levie](https://x.com/levie/status/2122508098351038532) · [Ramp](https://x.com/kobeissiletter/status/2122409826302988403)

**Altman · 这代更省 token**：他说 6.2 Sol 和 Astra 能做很了不起的事，而且非常省 token，特别点名 6.2 Sol 的 ultrafast 模式会让很多人喜欢 [原帖](https://x.com/sama/status/2122798039899263456)

---

### AI 原生工作方式

**Claude Code 的 Code Mode**：实验功能，让 Claude 写脚本把多个工具串起来，长命令还在跑的时候也能先回答你。打开方式是环境变量 `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` [ClaudeDevs](https://x.com/ClaudeDevs/status/2122801681939234950) · [文档](https://code.claude.com/docs/en/code-mode)

**Claude 平台上了关联计费测试**：用 Factory、Linear、Ramp 这类工具时，可以通过自己的 Claude Platform 组织付 API 费用，不用再把 API 密钥分发出去 [ClaudeDevs](https://x.com/ClaudeDevs/status/2122751844455956760)

**Replit Missions**：Amjad 把它称为面向目标的 agent 蜂群 harness，在设定预算里完成任务，比如「帮我拿到前 10 个客户」。他另写，除了把模型做大和给更长思考时间，并行跑很多 agent、互相挑战，会是下一层扩展 [Missions](https://x.com/amasad/status/2122754439886905593) · [介绍](https://replit.com/blog/introducing-replit-missions)

---

### 实践最佳实践

**Simon Willison · 外部沙箱模式**：agent 仍跑在你的 Mac 上，真正执行代码时走进 WebAssembly、Apple Containers 或 QEMU 沙箱。他和 Prime Radiant 一起做了三套实现，共用同一套本地 API，可给 Claude Code、Codex 和 Pi 用。沙箱还可加 HTTP/HTTPS 白名单代理，以及凭证替换，让代码能访问获准的地址，却拿不到真正的密钥。小墨也写到，Pi 默认没有沙箱，他找到 Cloudflare 给 Pi 的云端电脑示例：独立 Linux 环境、可给不同 Pi 各开一个沙箱，Workers Paid 最低每月 5 美元起 [Simon](https://x.com/simonw/status/2122500307557265651) · [Prime Radiant](https://blog.primeradiant.com/external-sandboxes-for-coding-agents/) · [小墨](https://x.com/xiaomovps/status/2122685290959777836)

**Matt · 先评估再引入新工具**：他给了一段可直接改着用的提示：调研这个技术解决什么问题，找出应用里它最可能帮上忙的棘手处，做概念验证并提到草稿 PR，完整验证结果，再从 API 含糊程度、类型安全、好不好测、圈复杂度、文档、部署改动这几项打分，最后给建议。另一条实验是：如果选择太多对 agent 不利，就把常用工具收成极窄的版本，比如只许用 React，但状态必须放进 Zustand 或 useReducer，再用很严的 lint 把含糊去掉，他想把这套叫 `/constrain` [评估提示](https://x.com/mattpocockuk/status/2122618527840354327) · [收窄工具](https://x.com/mattpocockuk/status/2122659341685694586)

**张立行 · Agent 把 CI 跑爆之后怎么省**：他整理了几篇加快 CI 的文章，共识是先测量；取消被新 push 取代的 PR 运行（main 上不要取消），Draft 少跑或不跑完整 CI，只跑变更能影响到的任务，拿不准再退回全量；取消「必须和 main 同步」的检查，改用 merge queue，只在准备合并时测一次。测试本身也要清理，删掉或合并没有独立价值的噪声测试（agent 很容易造出这种测试），并给测试代码增长设预算。缓存、并行和换更快的工具也值得做，加硬件一般放最后；如果 agent 全天高频开发，自建 runner 往往会便宜不少 [原帖](https://x.com/bylixing/status/2122656899766350175)

---

## 今日收获
OpenAI 把这代更新押在少花 token 做专业活上，科学、3D 和法律评测往前走了，写代码的 agent 指数却几乎没动，早期使用者觉得它能干，但更难驾驭。Anthropic 则在提醒企业，别把组织架构复制成一堆子 agent，一个主循环加 skills，质量、费用和时延往往更好。真要并行放大，沙箱、验证和把 CI 测得起，还是先决条件。黄仁勋还没有回来，只是把回归的门留开了
