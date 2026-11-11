---
title: 前沿 AI 每日简报
date: 2026-11-11
type: frontier-ai
lang: zh-CN
---

# 前沿 AI 每日简报 · 2026-11-11

## 今日主线
- Google 正式开放 Gemini 4 Carbon：留给最长最难的任务，引入价每百万 Token 输入 / 输出 $2 / $10（到 11 月 30 日），Antigravity 预览 /swarm
- Anthropic 把白板、表格和 Claude Data 推进付费套餐，同时启动 IPO 路演，拟登录纳斯达克，代码 ANT，预期定价每股 $70 至 $78
- 工作方式继续往少同步、快补救走：Mitchell 讲直接推 main，Lenny 报告工程岗首次停滞、产品经理最旺、前线部署工程师暴涨

---

### Google / Gemini 4 Carbon
**正式上线**：Sundar 宣布 Carbon 面向付费 API（AI Studio、Gemini for business）和 Ultra 订阅（Antigravity、Gemini App、搜索 AI 模式）开放。官方把它定位成最强、也更吃 Token 的长程模型，日常写代码和知识工作仍建议用四周前的 Argon，根因排查、架构、科学发现和安全审计再换 Carbon。引入价与 Argon 相同，11 月 30 日前每百万输入 / 输出 $2 / $10，12 月 1 日起翻倍到 $4 / $20。公开版带安全护栏，去掉网络安全限制的 Carbon for cyber 仍要申请 Fairwind。宝玉补充：普通用户要订 Ultra 才能在 App 里用，Pro 用不了，单价一样但 Carbon 每轮思考更多，同一任务账单会更贵 [Sundar](https://x.com/sundarpichai/status/2120185896469496180) · [DeepMind](https://x.com/GoogleDeepMind/status/2120219371473617099) · [Logan](https://x.com/OfficialLoganK/status/2120186016254624039) · [公告](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) · [宝玉解读](https://x.com/dotey/status/2120191790774960630)

**Signal 协议形式化验证**：团队用 AlphaProof Code 带着 Carbon 等模型，把 Signal 底层代码验证到已编译的设备代码，生成超过 600 万行经机器检查的 Lean 证明，把过去专家团队要几年的工作压到数周，约 1% 代码需要人工审，其余由 Lean 自动检查，结果将开源给安全社区 [Sundar](https://x.com/sundarpichai/status/2120207062655549933)

**/swarm 与演示**：Antigravity 预览 /swarm，一句话拉起可追踪的 agent 团队，Carbon 做架构、协调和审计，更快的小模型在隔离工作区并行，对抗式验证器检查每次改动。Sundar 用「构建者 + 审查者」子代理在 Blender 和 Three.js 上做出鹈鹕骑车逛 Mountain View 园区的可玩 3D；Demis 说 Carbon 一口气反编译他当年的 Theme Park，加了 DeepMind 主题游乐设施并搬到网页 [Sundar 鹈鹕](https://x.com/sundarpichai/status/2120198811297694192) · [Demis](https://x.com/demishassabis/status/2120210297948696997)

**Mollick 点评**：提前试用认为 Carbon 明显强过 Argon，思考方式与 Claude / GPT 不同，有自己的强弱项；一个好玩演示是给它一段视频，它用 Three.js 复现出来。他也觉得这次说明 Google 重新回到前沿模型的快速发布节奏里 [试用](https://x.com/emollick/status/2120198832202125322) · [回场](https://x.com/emollick/status/2120233659793854926)

---

### Anthropic
**白板、表格、Claude Data**：付费套餐测试版上线 Whiteboards 和 Sheets，10 月的 Dashboards 改名 Claude Data 并正式开放。白板可把还很乱的计划排成带时间线和负责人的板，同事实时一起改，再转成文档或幻灯片；表格能生成带公式、工作表和下拉菜单的表，改动会框出来。同日交互式连接器可在对话旁打开 Adobe、Atlassian、Box、Notion 等完整应用，人或 Claude 一起改。Team 套餐默认全开，企业版白板和表格默认关 [Claude](https://x.com/claudeai/status/2120206365759094857) · [说明](https://claude.com/resources/articles/sheets-whiteboards-data) · [宝玉](https://x.com/dotey/status/2120213189464105192)

**IPO 路演启动**：拟发行 8.25 亿股 A 类普通股（公司发行约 8.01 亿，现有股东约 2365 万），预期定价每股 $70 至 $78，申请在纳斯达克上市，代码 ANT。注册声明尚未生效，官方强调这不构成售股要约 [原帖](https://x.com/AnthropicAI/status/2120117722230968385) · [公告](https://www.anthropic.com/news/roadshow-launch)

---

### OpenAI
**Businesses in ChatGPT**：测试版上线 Business Hub，企业可认领资料、更新信息、看汇总后的曝光与点击洞察（不提供用户对话）。美国合格电商和在线服务商还可做 Business Agent，从企业资料页另开对话介绍产品，可被赞助，与模型独立回答分开标注。官方称每周约 12 亿人使用 ChatGPT [原帖](https://x.com/OpenAI/status/2120216592395174382) · [公告](https://openai.com/index/introducing-businesses-chatgpt/)

**ChatGPT Business 登录进更多工具**：同一套 Business 套餐可用 Sign in with ChatGPT 接到 Notion、v0、Amp、Kilo、Warp、Hermes、OpenClaw、OpenCode 等 [OpenAIDevs](https://x.com/OpenAIDevs/status/2120212596850663712)

**周四安全发布会**：11 月 12 日太平洋时间上午 10 点举办 Cyber at the Frontier 线上发布，Greg 将讲用前沿模型找自家漏洞后沉淀出的工具和手册 [原帖](https://x.com/OpenAI/status/2120202353907486826)

---

### 机器人
**Gemini Robotics 2.5**：DeepMind 称最新实体 AI 能学上百种日常技能，从叠衣、上点心到工厂里自动分拣汽车零件 [原帖](https://x.com/GoogleDeepMind/status/2120169787896525104)

**GR00T 2**：Jim Fan 发布目前最强的开源 System One 机器人模型，完全在机载算力上跑、不插线，权重归使用者。能把灵巧操作和全身控制串成 20 多步、5 分钟以上的长任务（如化学实验、组装模型飞机），并原生对接前沿 agent 做推理、纠错和安全监控。今天一并放出权重、agent 框架、仿真、标注引擎、硬件设计和约 10 万小时训练数据，X-Adapt 配方 12 月再给 [原帖](https://x.com/DrJimFan/status/2120186651741655428)

---

### AI 原生工作方式
**Lenny · 2026 科技就业报告**：第五次半年报，结论最意外：产品经理开放岗位近四年最多（7303 个，比 2023 年 3 月低点多 75%）；工程岗同比增长从 2024 年 29%、2025 年 15% 降到今年 2.5%，现有 65351 个还不如今年 3 月；产品设计开放岗 1924 个，创纪录新低。前线部署工程师（FDE）开放岗涨到约 4.6 倍，前端、Android、iOS 几乎腰斩。招聘启事里 LLM、Claude、Cursor 已成通用技能，设计师启事里 Claude 升到第二，仅次于 Figma。岗位继续往湾区集中，可远程比例创最低。宝玉把口径和数字拆清楚了 [Lenny](https://x.com/lennysan/status/2120211695453028770) · [宝玉](https://x.com/dotey/status/2120226054195577277)

**Mitchell · Superlogical 怎么协作**：全员被信任直接推 main，推前机器审，推后人和机器再审，几乎不开 PR（出了舒适区再开）。谁都能切发布，Slack 倒计时 15 分钟，期间任何人可暂停，不能跳过只能暂停。跨平台不同步靠快速补救而不是会前对齐，功能差距通常 24 到 48 小时内补平。他强调这只在互相托底时成立，团队还小，规模变大后做法会改 [原帖](https://x.com/mitchellh/status/2120221244478083249)

**宝玉 · 软件给 Agent 用**：瓶颈不再是把专业软件做出来，而是让 Agent 用 CLI、MCP 和代码来组合原子能力，人只负责预览、标记和微调，不必再做复杂界面。他拿视频编辑器举例，播放器加评论工具就够，不必再做一整条时间线。同一天转述 Manus 联合创始人张涛：对内已取消前后端分岗，面试改成「用 Manus 四小时解决问题，带回完整对话复盘」 [软件形态](https://x.com/dotey/status/2120237447963415014) · [Manus 招聘](https://x.com/dotey/status/2120176641603244488)

**Rauch · 一周安全审查**：Vercel Security Review 上线不到一周，标出 57897 个漏洞（其中 6029 个严重或高危），Agent 已自动修好 14665 个，任意仓库都能开，不限部署平台 [原帖](https://x.com/rauchg/status/2120188488628977819)

**Levie · Box 进 Claude**：和企业文件打交道的会是 agent，读写量会远高于今天的人。Box 与 Anthropic 打通，可在 Claude 里经 MCP 读写 Box 文件并回写更新 [原帖](https://x.com/levie/status/2120261416733036905)

---

### 领袖洞察
**Kokotajlo**：根据新的 METR 报告等证据，认为智能爆炸仍可能在 2027 年发生，且比《AI 2027》情景还早约 5 个月，自称害怕、难过、愤怒。这是预测，不是已发生的事实 [原帖](https://x.com/DKokotajlo/status/2120204075803500595)

**Lambert**：AI 红利扩到长尾知识工作，可能被严重低估了还需要多少人类专家，许多工作又人际又杂、又靠上下文，扩散会很慢。他建议数据公司把专家定位成「帮 AI 公司把工具做得更好」而不是被替换，并披露自己给 Mercor 做顾问 [原帖](https://x.com/natolambert/status/2120187153950871798)

---

### 实践最佳实践
**Simon · 「这仓库是你的」**：每次 Anthropic 发新模型都值得看更新后的提示词指南。要让 Fable 5.2 改已有代码时少缩手缩脚，告诉它 `This codebase is yours`（这套代码是你的，用途和结构由你决定，你还会继续往上盖）。这条收藏很高 [原帖](https://x.com/simonw/status/2120029347948220500)

**Matt · Home Repo**：多仓库同时跑 agent，他用一个「家」仓库放全部 skills、转向文件和 wiki，agent 就在家里跑，`AGENTS.md` 里写清其他仓库的克隆路径。好处是工具集中、入口单一，还能一次改多个仓库 [原帖](https://x.com/mattpocockuk/status/2120260969750540327)

**Vox · Fable 用法三则**：主会话留给规划和判断，实现交给 Opus 5.5 medium 子代理或闲置的 Codex 额度；动手前先当红队，把计划当成六个月后已失败的假说往回拆。不要让它「优化提示词」（它会写成小白教程），改口说「写一份可直接交给工程师的任务简报」，再新开会话交给 Opus 5.5。长任务先让专门的 dashboard-builder 子代理做一页自动刷新的 HTML 进度板，记下卡住的点和等你拍板的问题 [分工](https://x.com/Voxyz_ai/status/2120260216046727370) · [任务简报](https://x.com/Voxyz_ai/status/2120169619801710710) · [进度板](https://x.com/Voxyz_ai/status/2120141188304965959)

**小墨 · 提示词在变短**：Anthropic 称给新一代模型精简了 Claude Code 超过 80% 的系统提示词，内部编程评测没有明显下降。TokenSave 记录的初始输入从 2026 年 5 月约 36309 Token 降到 10 月约 18841。他认为模型够强之后，不必再把规则写进越来越厚的 harness，Pi 这种默认只有 read / bash / edit / write 的极简路线更值得看 [原帖](https://x.com/xiaomovps/status/2120127993561612746)

---

## 今日收获
Carbon 和昨天的 Fable 把旗舰模型拆成两档：日常用更便宜更快的（Argon / Opus），把最贵的模型留给长任务、规划和审计。Google 用 Signal 的 Lean 证明和 /swarm 表明，它想打的是能自我核验的长程工程，不只是聊天分数。工作侧，Lenny 的招聘数据、Mitchell 的直接推 main、宝玉说的「软件改给 Agent 用」，指向同一件事：人往判断和补救上收，执行和同步交给 agent 与自动化
