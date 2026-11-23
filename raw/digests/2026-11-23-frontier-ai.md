---
title: 前沿 AI 每日简报
date: 2026-11-23
type: frontier-ai
lang: zh-CN
---

# 前沿 AI 每日简报 · 2026-11-23

## 今日主线
- 黎曼猜想：Alpöge 与 Claude 合作的证明，被 Lean 与 Mathlib 社区联合声明确认形式化正确
- OpenAI 首席科学家 Pachocki 公开内部预训练困惑度，并提议各实验室按这一指标设立共同上限
- Thinking Machines 开源 Inkling 2 Mini，26.4B 的循环 Transformer，可在笔记本上运行，AA 指数 20.1

---

### 前沿动态

**黎曼猜想的 Lean 验证通过**：11 月 20 日，Levent Alpöge 放出一份 1700 万行的 Lean 库，并在自己的说明里写，他相信与 Claude 一起发现了黎曼猜想的证明，方法还容易推广到广义黎曼猜想。他写自己先把方向引到一个玩具模型的类比上，关键技术步骤上 Claude 在冲刺阶段远超他，并写下那句「我在进展里看到的，让我相信这是科学里某个更大事物的一次黎明」。11 月 21 日，Lean 与 Mathlib 社区发表联合声明，并得到 Lean FRO 和 Mathlib Initiative 背书，写他们对证明正确有充分信心，命题和证明都已确认正确。四条标准都满足：命题就是 Mathlib 里经专家审过的 `RiemannHypothesis`；数十人独立编译通过，导出文件一致，没有报错；两套比对工具确认，证到的就是这条原命题；Lean 官方内核，以及 `con-leche`、`con-ron` 和多种语言的独立检查器都通过，后两者还有「不会接受错误证明」的形式化保证，检查是在无法执行源码的导出上做的。声明也说，接下来要靠数学界把新想法讲清楚。形式化过关，不等于人已经读懂，也不等于千禧年大奖的流程走完 [Alpöge 说明](https://alpo.ge/remark.pdf) · [Lean 声明](https://x.com/leanprover/status/2124159121645801562) · [全文](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) · [Mollick](https://x.com/emollick/status/2123800664845500602)

**OpenAI 公开预训练进度，并提议共同上限**：首席科学家 Jakub Pachocki 发表《Perplexity and Intelligence》，把公司内部的困惑度曲线公开。按他们主要评估集的对数困惑度，GPT-3.5 约 0.99，GPT-4 约 0.91，现在已经低于 0.8，并写在这个区间里出现了网络安全和数学上的变革性能力。他还写，模型到约 0.76 时开始在数学开放问题上给出突破性结果，并估计 2027 年预训练算法研究也可能出现类似井喷，但对齐和监控的进步多半跟不上预训练可能达到的全部加速。他提议实验室共同用困惑度等指标设第一道上限，在监控能力达到明确里程碑（例如接替 CoT 监控的方案）之前不要越过，并预期约 0.68 到 0.7 的窗口还会出现今天未必在测的新能力。Sam Altman 说这是 OpenAI 一段时间以来最重要的一篇，Greg Brockman 也跟进，强调要先定一个能跨实验室跟踪的指标，以及越过它之前必须达到的退出条件 [Pachocki](https://x.com/merettm/status/2124549218995949967) · [文章](https://openai.com/index/perplexity-and-intelligence) · [Altman](https://x.com/sama/status/2124551594691932405) · [Brockman](https://x.com/gdb/status/2124582684840399311)

**对抗蒸馏的防护**：OpenAI 写，未经授权的蒸馏可能把前沿能力学走，却带不走原来的安全护栏，完整推理轨迹比摘要和最终回答更容易把网络相关能力传给新模型。他们对 GPT-6.2 Astra 和 Sol 加强了受保护推理的防护，内部自适应评估里，从先前问题中提取这些推理的平均攻击成功率，从 GPT-6 Astra 原防护下的 54.0% 降到 GPT-6.2 Astra 更新后的 0.2%。做法包括对抗训练、对输入输出和工具参数的分类器，以及把推理绑在产生它的对话历史上，改了更早的消息就会丢掉后面的推理，也禁止更老、防护更弱的模型家族读取 6.2 的受保护推理 [OpenAI](https://x.com/OpenAI/status/2123862344422088794) · [说明](https://openai.com/index/combatting-adversarial-distillation/)

**MedChemBench**：OpenAI 发布一套药化推理基准，从 117 篇论文和专利里抽出 99 道题、761 个分子结构，分别看结构重建、科学解释、化合物选择和数值性质预测。在共享的 xhigh 推理档上，GPT-6.2 Astra 拿到 84.5% 的可用分数，GPT-6 Astra 是 83.3%，GPT-6.1 Sol 是 82.0%，GPT-5.6 Sol 是 58.2%。结构一项上，GPT-6 Astra 在 xhigh 拿到 95.4%，选择和数值预测大约只有一半。官方也写，这不能证明模型能发现新药，或改善实验室决策 [OpenAI](https://x.com/OpenAI/status/2123856316187975756) · [说明](https://openai.com/index/introducing-medchembench/)

**Inkling 2 Mini 开源权重**：Thinking Machines 发布这款循环 Transformer，总共 26.4B 参数，激活 3.4B，中间 12 层每枚 token 循环三遍，按权重激活计约 5.4B，约 20GB，可在 32GB 内存的 Mac 和 DGX Spark 上跑。官方称它在 DeepSWE v1.1 上 48.2%、Vals Index v2.2 上 46.5%，领跑总参数低于 100B 的开源权重模型，AA 指数 20.1，许可证是 Apache 2.0，上下文 100 万 token。他们还另发了一个可变循环次数的研究模型，写无 CoT 的时间跨度从 1 遍的 16 秒升到 3 遍的 37 秒，思维链变短但仍然可读，监控性没有明显变差 [官方](https://x.com/thinkymachines/status/2123871643797995872) · [说明](https://thinkingmachines.ai/news/inkling-2-mini/)

**ChatGPT Space 对 Plus 开放**：可以把互动页面、幻灯片和站点做成能多人一起改的空间，ChatGPT 还能按连接的工具自动更新，并支持在手机上编辑 [ChatGPT](https://x.com/ChatGPT/status/2123850912867471807)

这三天几乎没有新的旗舰模型发布。真正把周末撑起来的，是一件能被机器验死的数学结果，以及 OpenAI 第一次把预训练指标拿出来谈共同刹车。

---

### 领袖洞察

**Sundar · 欧拉、高斯和黎曼今天也会惊叹**：他在 Alpöge 的结果传开后写下这句，把这次证明放进了古典数论的谱系里 [原帖](https://x.com/sundarpichai/status/2123869629164786137)

**Levie · 更强的模型，更适合拿来解你自己也说不清的问题**：他说今年能力上有一次明显的跳跃，以前必须把产品和实现路径讲得很清楚，agent 才有机会做成，现在反而常常能在你想不到的方案空间里连出更好的实现。他判断这会先改工程，也会进入金融、法律、生命科学和网络安全这些没有人能把全部行业知识装进脑子里的领域。接下来更重要的不是把步骤说死，而是给目标和足够的自由度 [原帖](https://x.com/levie/status/2123686350410912145)

**Chollet · 眼下的难题是怎样让许多 agent 顺畅协作**：一种正在被采用的做法是模仿人类组织，给 agent 起研究者、产品经理、测试之类的角色，各自守住自己的上下文，全天在云端跑，也可以从 Slack 下达指令 [原帖](https://x.com/fchollet/status/2123814042372538852)

Pachocki 这篇的要点不是再晒一份榜，而是担心监控跟不上预训练可能出现的算法井喷。黎曼这件事则把两层分开了：机器可以先确认「证的就是原命题，且形式化没有洞」，人要把新想法读懂，还在后面。

---

### AI 原生工作方式

**Claude Code 的 Code Mode 在周末继续发酵**：官方实验开关是 `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1`，让 Claude 写脚本来把工具串起来，长命令还在跑时也可以先回答你。Addy Osmani 随后写得更具体：它用 JavaScript 一次编排多步，可并行跑、把输出过滤后再交给下一步，而不必把大段检索结果或几十个文件的重复重构一轮轮塞进上下文，需要看生成的脚本时用 Ctrl+O 展开 [ClaudeDevs](https://x.com/ClaudeDevs/status/2122801681939234950) · [Addy](https://x.com/addyosmani/status/2124229492248019362)

**小墨 · 先把 Skill 做好，MCP 只在真要接外部系统时再用**：他写很多人本能地先装十几个 MCP，上下文还没开工就被工具说明占掉一块，Skill 却是用到再读 `SKILL.md`。MCP 更适合查库、调线上接口，日常步骤和规范用 Skill 加本地命令更顺手，插件太多还会让模型挑错工具，排错比干活还久 [原帖](https://x.com/xiaomovps/status/2124510881468064157)

Code Mode 和「Skill 优先」其实在做同一件事：少把用不上的说明常驻上下文，把多步编排从一轮轮工具调用里拿出来。Levie 说的下一阶段，则是问题本身说不清时，把目标和自由度交给 agent。

---

### 实践最佳实践

**Matt Pocock · 先清理注释，再给非开发者一套委派步骤，并把 ADR 写清楚**：他给了一段长提示词，让 agent 把代码注释分成「只是重复代码里已能看见的东西」「为临时做法找借口」等类型，再决定该删还是该改，这条帖子收藏过 8000。他还在做给非开发者用的 `/vector`，六步走完如何把任务交给 AI，并让流程可复用、可改进。另外他展示了一条来自对质会的 ADR：「缩略图不是图」，用来钉死命名和数据关系，不然 agent 会自己补假设 [注释提示词](https://x.com/mattpocockuk/status/2123798388227403983) · [/vector](https://x.com/mattpocockuk/status/2123810087361810663) · [ADR](https://x.com/mattpocockuk/status/2124058139477594142)

**铁锤人 · 那句「你是这套代码的长期维护者」能让模型更敢重构，但不要挂在全局**：他对照 Anthropic 给 Claude Fable 5.2 的官方指南，官方在小型编程任务里测过，不提归属或让它觉得是别人的代码时，主动合并重复代码的比例不到 10%，加上「你是这个代码库的所有者和长期维护者，它的设计由你决定」之后，这一比例升到约 75%，也更愿意补测试和改文档。但输出 token 会多 70% 到 80%，有时会改掉正常功能，变更总结还常漏掉小改，即使写了别顺手重构，一半以上运行里仍会合并。他的建议是，平时修小问题不要挂这句，真要清理旧代码时，单独开一个新对话再贴 [原帖](https://x.com/lxfater/status/2124504433195171902)

Matt 这几条的共同点，是先把人的判断写成 agent 能反复用的资产。官方那句归属提示很强，也很容易管太宽，只适合单开一场清理，不适合写进全局规则。
