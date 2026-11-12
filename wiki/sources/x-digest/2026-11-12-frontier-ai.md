---
title: "2026-11-12 · 前沿 AI"
title_en: "2026-11-12 · Frontier AI"
description: "当日前沿 AI 动态与实践者方法简报。"
description_en: "Daily frontier AI news and practitioner notes."
date: 2026-11-12
type: frontier-ai
lang: zh-CN
---

## 今日主线
- Google 推出 Gemini Decisions API：不为写回答，只做封闭选择，一次最多判 1000 题，输入每百万 Token $0.10，输出不收费
- DeepMind 发布 AlphaGenome 2，把基因变异的效应预测下沉到具体细胞类型；A2UI 1.0 成为稳定的生成式界面协议
- 工作方式上，Lenny 补充说岗位增长主要来自硬件和数据中心，不在软件；Harrison Chase 把下一课从上下文、harness 改口叫 goal engineering

## 前沿动态
- **Sundar Pichai (@sundarpichai)**：宣布 Gemini Decisions API 在 AI Studio 和 Gemini API 开放，配套新模型 Gemini Decision 1（`gemini-decision-1`）。它不按 Token 往外写字，只对封闭选项打分，一份输入最多挂 1000 道彼此独立的题，覆盖文字、图片、音频、视频和 PDF，上下文 256K。题型只有三种：是非、单选（最多 255 项）和按你写的档位打分，每道题都带 0 到 1 的校准置信度，代码可以设门槛再决定自动执行还是转人工。定价是输入每百万 Token $0.10，输出不收费，官方称比用 Gemini 3.5 Flash-Lite 生成答案便宜近 5 倍；输入在 1.6 万 Token 以内时，端到端延迟 150 到 250 毫秒，问 1 题和问 100 题耗时差不多。Google 内部已经在用：Gemini Notebook 拿它给每个提问挑模型和思考深度，日常问题延迟最多降了 40%；Stitch Rapid 用它在几秒内画出可玩的产品流程。有免费试用层，OpenRouter、LangChain、Vercel 等正在接入，Google Cloud 上的 Gemini 要稍后才支持 [Sundar](https://x.com/sundarpichai/status/2120581155078729728) · [Logan](https://x.com/OfficialLoganK/status/2120581433639198885) · [AI Studio](https://x.com/GoogleAIStudio/status/2120581284690801060) · [公告](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/)
- **宝玉 (@dotey)**：对照 OpenAI 同名的 Decisions API——已在 10 月 22 日正式开放，用 GPT-6 Luna，定价一样，一次最多 400 题，只收文字、图片和 JSON，但支持缓存和对话历史。宝玉按 Google 自己的评测表转述：9 项测试里 Gemini Decision 1 有 7 项第一，校准误差 0.025，Luna 是 0.072；网页操作和「该不该调用工具」两项输给更便宜的 TypeSafe Jev 1.14。这类接口适合路由、审核和打分，不必再让大模型写一段话再解析 [宝玉](https://x.com/dotey/status/2120647659388031454)
- **Demis Hassabis (@demishassabis)**：与 DeepMind 发布下一代 DNA 序列模型 AlphaGenome 2，专门预测同一段基因变异在不同细胞类型里会怎样起作用，用来找疾病在哪些细胞里被驱动。官方称它在超过 1 亿个单细胞图谱、68 种组织上训练，能找出的、会改变基因表达的变异大约是上一代的两倍，也能对没见过的细胞状态做预测，并补全缺失的实验模态。非商业研究即日起可通过 API 使用，商业研究还在小范围预览，明确只供科研、未获临床批准 [Demis](https://x.com/demishassabis/status/2120565316619284734) · [Sundar](https://x.com/sundarpichai/status/2120553080232329324) · [DeepMind](https://x.com/GoogleDeepMind/status/2120532824465805749) · [公告](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/)
- **Google Cloud Tech (@GoogleCloudTech)**：A2UI 1.0 把生成式界面协议做成首个稳定版，agent 只描述要出示的界面，应用用自己的原生组件来画，覆盖网页、Android、iOS，也可到穿戴设备和电视。1.0 加了双向函数调用，界面可以当场查库存或确认航班。已有 React、Angular、Lit、Flutter 等开源渲染库，以及 Python、TypeScript、Dart 的 agent SDK；官方点名 Atlassian、Alation、Bloomberg、ByteDance 已在用 [原帖](https://x.com/GoogleCloudTech/status/2120563165557571629) · [公告](https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences/)
- **Gemini for healthcare**：Google Cloud 11 月 10 日宣布的医疗行业方案，昨天早报未覆盖。它把通用 Gemini agent 接到病历、理赔和行政系统上，做病历汇总、就诊前准备、事前授权和保险政策核对，美国预览，面向 Gemini Enterprise Standard / Plus。Epic 和 Oracle Health 的连接是只读，不回写病历，号称支持 HIPAA；早期伙伴包括 HCA、Highmark、Northwell、Optum [公告](https://cloud.google.com/blog/products/ai-machine-learning/gemini-for-healthcare)
- **Google AI Studio (@GoogleAIStudio)**：在 Gemini API 上用 Managed Agents 的人，现在可以把自托管环境当作沙箱接进去 [AI Studio](https://x.com/GoogleAIStudio/status/2120610219235660183)

## AI 原生工作方式
- **Lenny Rachitsky (@lennysan)**：作为昨天那份 2026 就业报告的补充，他指出科技公司开放岗位超过 28.1 万，同比增 17%，比 2023 年 3 月低点高 73%，但产品、工程和设计岗合计只增了 2%，设计降 28%，用户研究降 45%。增长主要来自硬件工程（翻倍）、商务运营、供应链（增 63%）以及数据中心技师、安装和现场服务这些体力岗。他还列出过去一年开放岗变化：前端降 51%，iOS / Android 降 46%，前线部署工程师约 4.6 倍，AI 工程师增 46%，安全工程师增 34%。招聘专员开放岗则创历史新高，较 2023 年增 300%。结论是：AI 繁荣在盖机房和做芯片，不在招更多写软件的人 [增长结构](https://x.com/lennysan/status/2120574811038691488) · [岗位涨跌](https://x.com/lennysan/status/2120640209779884381)
- **Aaron Levie (@levie)**：聊天让人快一点，但仍被人来人往限速；单个 agent 能把按小时、按天的任务压到几分钟；下一跳是一群会自己找路、直到把项目做完的 agent，在自洽的数字环境里，产出不再有明显上限。他点名游戏、编程、交易、生命科学、IT 自动化、安全、数学和动画，并认为给这些 agent 搭 harness 和基础设施会变成新的前线部署工作 [原帖](https://x.com/levie/status/2120385739342897469)
- **Harrison Chase (@hwchase17)**：把先前流行的 context engineering、harness engineering 划掉，改写成 goal engineering，意思是下一层该把目标本身写清楚 [原帖](https://x.com/hwchase17/status/2120330156325867529)
- **Guillermo Rauch (@rauchg)**：做出好产品仍然需要大量人类的专注、努力、动机和爱，以及足够的注意力跨度。另一则里他谈到，Rust 很好，但那是 agent 编程出现之前的生态，有了 agent 之后会冒出按场景定制的新语言，必要时也可以直接下到 C、LLVM IR 甚至汇编，不必再守着一种万能语言 [专注](https://x.com/rauchg/status/2120601000176439478) · [语言](https://x.com/rauchg/status/2120337388178379178)

## 领袖与研究者洞察
- **Sam Altman**：韩国《金融新闻》11 月 11 日独家披露他 10 月 31 日在龙仁与约 50 位三星社长的问答材料。谈到短期波动时，他说市场存在需求被重复计算的情况，真正把需求大幅推高的主要是 OpenAI 和 Anthropic 两家，因此可能出现供应冲击和一段不稳。长期他仍看好用量会暴涨，并说 2020 年初用量最高的用户每月大约 10 万 Token，今年初最重的用户每月已到 1000 亿。未来几年最大约束仍是芯片供应链和数据中心。这是记者获得的会议材料，不是他本人发帖 [报道](https://en.fnnews.com/news/202611111610393909)
- **Ethan Mollick (@emollick)**：他认为「AI 进入职业要很久」的反例就是编程，能用的编程 agent 出现还不到一年，这个职业的改造已经全面铺开，比他按历史上技术采纳速度预想的更快 [原帖](https://x.com/emollick/status/2120641914206892424)
- **Jim Fan (@DrJimFan)**：接着昨天的 GR00T 2，他放出第一集未剪辑、1 倍速的真机视频，灵巧手在化学实验台上做完整实验并自己收拾，强调角标里不会再出现 4 倍、8 倍加速 [原帖](https://x.com/DrJimFan/status/2120540201994846253)

## 实践者方法
- **Matt Pocock (@mattpocockuk)**：他的课上最让人吃惊的不是 agent 套路，而是领域驱动设计：先建一套大家共用的领域语言，拿去跟 agent 说话，再把代码重构到这套语言上。另则补充说，只要你能把业务流程写清楚、写一致，自动化所需的软件其实已经做了一半 [领域语言](https://x.com/mattpocockuk/status/2120503390333768170) · [流程即软件](https://x.com/mattpocockuk/status/2120606575819956439)
- **Vox (@Voxyz_ai)**：Anthropic 刚公布 Fable 5.2 提示词指南。指南自己的测试里，上下文中有十几条旧笔记，其中一条「不要重试」就把工具忙碌后的重试，从几乎每次都发生降到大约十次里四次。Vox 给了一段可直接转交的提示词：让 Fable 对照官方指南审查项目里的 `CLAUDE.md`、`AGENTS.md`、skills、子代理和记忆文件，找出过时的委派、少想、文风限制、「永远不要」和含糊的审批规则，先给建议、先别改文件。另一则实测两份真实 PR：官方图上 xhigh 看起来最强，但 high 找出 12 个真问题，xhigh 只找出 10 个，还多耗了 27% Token [清规则](https://x.com/Voxyz_ai/status/2120501801313267818) · [审查档位](https://x.com/Voxyz_ai/status/2120562255632781662)
- **Geoffrey Huntley (@GeoffreyHuntley)**：纽约演讲稿上线，标题是「AI 的答案是工程」。他说攻击方已经在自动扫描并利用新提交，公开代码比以前更不安全，防守要准备比攻击方更多的推理算力，这笔费用大多数公司还没算进运营预算。他只保留内核、DNS、加密这类受信核心，其上的库让 agent 现写或直接搬进来；用 Nix 把笔记本、CI、agent 沙箱和生产镜像写成同一份环境，出一个不能 force-push 的 git 补丁就能铺到所有机器。他认为阻止模型做坏事，最好的办法是从底层系统拿掉这个能力，而不是再写一条提示词；补丁可以在 `AGENTS.md` 里写「七天后删掉」，下一个 agent 读到就会收尾。硬规矩是：永远不要给 agent 生产环境的 root，也不让它连生产数据库 [原帖](https://x.com/GeoffreyHuntley/status/2120602355066659231) · [讲稿](https://ghuntley.com/answer/)
- **小墨 (@xiaomovps)**：开源项目 PiClaw 没有重写一套 agent，而是把 Pi 当作内核，加上网页聊天、文件、编辑器和终端，再补上定时任务、长期记忆和 Dream 整理旧对话，可用 Docker 自托管。他认为更值得看的是这种做法：把精简的编程 agent 改造成可长期用的个人助手。另则对比三条路线：Pi 是极简核心加扩展，DeepSeek Harness 是连循环都能替换的插件化，Qwen Code 1.0 则把 Qoder 的能力收成一套偏完整的事件驱动框架，他仍更倾向 Pi 这条细的路线 [PiClaw](https://x.com/xiaomovps/status/2120541856857817154) · [三条路线](https://x.com/xiaomovps/status/2120524176650043410)

## 小工具
- **Gemini Decisions API**：不为写回答、只做封闭选择的接口，配套 Gemini Decision 1，一次最多 1000 题，官方定价输入每百万 Token $0.10、输出不收费 [Sundar](https://x.com/sundarpichai/status/2120581155078729728) · [公告](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/)
- **AlphaGenome 2**：下一代 DNA 序列模型，预测同一段基因变异在不同细胞类型里如何起作用，非商业研究可通过 API 使用，明确只供科研、未获临床批准 [Demis](https://x.com/demishassabis/status/2120565316619284734) · [公告](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/)
- **A2UI 1.0**：首个稳定版生成式界面协议，agent 描述界面、应用用原生组件来画，并加了双向函数调用 [原帖](https://x.com/GoogleCloudTech/status/2120563165557571629) · [公告](https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences/)
- **Gemini for healthcare**：把通用 Gemini agent 接到病历、理赔和行政系统，美国预览；Epic 和 Oracle Health 连接只读、不回写病历 [公告](https://cloud.google.com/blog/products/ai-machine-learning/gemini-for-healthcare)
- **自建沙箱**：在 Gemini API 上用 Managed Agents 的人，现在可以把自托管环境当作沙箱接进去 [AI Studio](https://x.com/GoogleAIStudio/status/2120610219235660183)
- **PiClaw**：以开源 Pi 为内核的个人助手，加上网页聊天、文件、编辑器和终端，以及定时任务、长期记忆和 Dream，可用 Docker 自托管 [PiClaw](https://x.com/xiaomovps/status/2120541856857817154)

## 两三句
判断正在变成一类独立的模型产品：OpenAI 先做了 Decisions API，Google 用原生多模态和一次 1000 题把它做成低延迟控制平面，路由、审核和打分不必再让大模型写一段话再解析。工作侧，招聘增长在盖机房和做硬件，软件岗几乎没涨，Levie 的蜂群和 Chase 的 goal engineering 说的是同一件事：人把目标写清楚，执行交给成群的 agent。实践上，Matt 的领域语言、Vox 清掉过时规则、Huntley 用系统能力而不是提示词来约束 agent，都在把控制权从提示词挪到结构和环境里
