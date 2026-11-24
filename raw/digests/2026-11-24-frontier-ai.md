---
title: 前沿 AI 每日简报
date: 2026-11-24
type: frontier-ai
lang: zh-CN
---

# 前沿 AI 每日简报 · 2026-11-24

## 今日主线
- Anthropic 推出 Claude Ship，把审 PR、修检查和按团队规则批准收成一套
- OpenAI 和 Cisco 开源 Linux 运行时 Shirudo，让 agent 在不停机时给系统加上临时盾
- DeepMind 用多组 Gemini 4 agent 在 Lean 里验证更快的量子线路，科学模拟成本最高大约降到十分之一

---

### 前沿动态

**Claude Ship 进入测试**：Anthropic 发布 Claude Ship（beta），面向 Team 和 Enterprise。它把三件事放在一起：Code Review 给 PR 写按 Important、Nit、Pre-existing 分级的行内意见；PR Steward 在 CI 失败、合并冲突和评审意见出现时跟进修改，但按设计不会批准或合并，每次推送后会说明改了什么、怎么撤回，也可以用 `@claude` 改方向或 `@claude stop` 让它停下；Claude Approvals 读仓库里的批准策略，像更聪明的 CODEOWNERS，官方建议先开只观察模式。开发者也可以在 Claude Code 里用 `/ship`，自己推分支、开 PR、再处理反馈。Claude Code 负责人 Boris Cherny 说，一年前 Opus 4.5 是第一个能写出他全部代码的模型，但合并 PR 的速度没跟上，他现在整天都在用 Ship。同日，Connectors 和 Skills 收成 Plugins，Free、Pro、Max、Ultra 已可用，官方写可浏览 10,000 多个插件；零数据留存加上 Enterprise Frontier Safeguards 也对合格企业进入公开测试，用来看跨请求的滥用，日志放在客户自己的云和密钥下，和 100 多家客户一起做出来，其中有四分之一的财富 100 强。桌面版 Claude Code 的侧栏改成了标签页，文件、改动和终端可以并排或弹成独立窗口，先在 Mac 上线 [Ship](https://x.com/ClaudeDevs/status/2124959436640858475) · [Cherny](https://x.com/bcherny/status/2124961485801836573) · [说明](https://claude.com/resources/articles/introducing-claude-ship) · [Plugins](https://x.com/claudeai/status/2124970294523945328) · [ZDR](https://x.com/claudeai/status/2124929944530587712) · [文章](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards) · [侧栏](https://x.com/ClaudeDevs/status/2124978802006851961)

**Shirudo 开源**：OpenAI 和 Cisco 一起发布这个开源 Linux 运行时，名字在日语里是「盾」。它用 eBPF 写可动态加载的防护，用来挡住正在被利用的路径，同时让正常请求继续，服务不用重启，给团队留出测试和发布正式补丁的时间。防护要签名后才能加载，并用 TPM 留下可验证记录。受控测试里，Codex 生成的盾在不停 Elasticsearch 的情况下挡住了一次 Java4Shell 利用。许可证是 BSD 2-Clause，BPF 程序同时用 BSD 和 GPL。官方把这看成自我防护基础设施的第一步，目标是人和 agent 一起找受影响的系统、测试并共享这些盾，再部署上去 [OpenAI](https://x.com/OpenAI/status/2124980590717911527) · [说明](https://openai.com/index/introducing-shirudo/)

**Gemini 4 agent 做出经 Lean 验证的更快量子线路**：DeepMind 说，多组 Gemini 4 agent 并行探索，每四小时开一次会交换和辩论想法，再用 Lean 证明线路正确、成本成立。官方帖写，未来科学模拟的成本最高大约降到原来的十分之一。博客里写得更细：惯性约束聚变相关线路的时空成本降了 11.8 倍，纠错量子比特从 5,650 降到 4,338；一种常见光敏分子的模拟便宜了 8 倍；药物代谢相关的细胞色素 P450 改进了 2.5 倍，内存从 481 降到 333 量子比特；某一个 Grover 实现快了 2.57 倍；被很多算法用来装数的 arcsin 例程快了 290 倍。他们也写，这些模拟仍然超出第一代纠错量子计算机大概能提供的资源。验证过的解和 Lean 库已开源 [DeepMind](https://x.com/GoogleDeepMind/status/2124911073266413634) · [续帖](https://x.com/GoogleDeepMind/status/2124911075875258776) · [博客](https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/)

**Gemini API 可以只看文件的一部分**：现在可以直接上传 PDF、Office 和 OpenDocument，以及音频视频，并指定只要哪些页、哪些表格单元格、哪一段媒体和哪些层，只对模型实际查看的部分计费。面向所有 Gemini 4 模型。官方建议先低成本浏览文本或低分辨率预览，再对关键图表和帧花高分辨率 token。Logan Kilpatrick 说，这样既省 token，也更准 [Logan](https://x.com/OfficialLoganK/status/2124938672399384681) · [说明](https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/)

**ChatGPT 日常对话换上优化过的 GPT-6.2 Sol，GPT-5.6 将下线**：Chat 标签里开始向 Plus、Pro、Business 和 Enterprise 推送更适合日常对话的 GPT-6.2 Sol，官方写它更擅长处理细节很多的复杂请求，以及上网找信息，比如看清照片上的文字、按价格或地点缩小选项、判断要不要提醒降价。同时宣布 12 月 23 日起，Chat 里的 GPT-5.6 Sol，以及 Work 和 Codex 里的 GPT-5.6 Sol 和 Terra 将停用。另外，Gemini 4 Neon 已通过 Gemini 应用向 Google Workspace 客户放开 [Sol](https://x.com/ChatGPT/status/2124942186425069836) · [停用](https://x.com/ChatGPT/status/2124981905380569283) · [Workspace](https://x.com/OfficialLoganK/status/2125018427790344654)

今天不是新的旗舰模型，而是把「写得出来」往「能合进去、能防住、能只看需要的那一段」再推一步。量子这边最有方法意义的是，agent 的新想法先被 Lean 卡住，再谈快了多少。

---

### 领袖洞察

**Chollet · 智能系统只有两套适应时间尺度**：一套是当场给当前情境建模，人叫流体智力，现在的 AI 靠推理链或写程序来做；另一套是离线从大量经验里挖出可复用的抽象，人叫长期可塑性，AI 里就是预训练和后训练。他说，直到 2024 年底，AI 其实只有后一套，没有流体智力，只是在取回训练时见过的模式。他随后又评论 DeepMind 的量子结果：模拟成本降 10 倍，本质上是用软件完成了一次硬件级的跨越，agent 研究会加速所有软件能够碰到的领域 [原帖](https://x.com/fchollet/status/2124942035841151448) · [评论](https://x.com/fchollet/status/2124926345948148042)

**Nathan Lambert · 可被读懂的思维链迟早会被优化掉**：他认为这是优化的必然方向，思维链能被人读懂，是因为推理时计算最早是从上下文学习这条路上发现的，本身是一种低效。循环架构是往这个方向走的第一步 [原帖](https://x.com/natolambert/status/2124855489846485045)

**Mollick · 沃尔玛在拥抱购物 agent，但 agent 的偏好并不稳**：他写沃尔玛不想再把电商那次错误犯在 agent 购物上，亚马逊还在挡 agent，沃尔玛则反过来欢迎。Stripe 的新数据也显示这种购物可能已经开始，而且有粘性。不过他们自己的研究写，只要改一下 agent 看到网站的顺序、先聊一轮、或改一个标题，推荐结果就会变 [沃尔玛](https://x.com/emollick/status/2124895744775667767) · [研究](https://x.com/emollick/status/2124970360445796544) · [报告](https://gail.wharton.upenn.edu/research-and-insights/technical-report-agentic-shopping/)

Chollet 把「当场推理」和「离线学习」分开，Lambert 则提醒，现在还能盯着看的思维链，未必是稳态。购物这边更现实的问题可能不是开不开放入口，而是推荐结果太容易被排列和措辞带动。

---

### AI 原生工作方式

**Replit · 加 agent 不等于变强，组织方式更重要**：Amjad Masad 发了他们关于 agent 群体的缩放研究。在固定两小时窗口里，Claude Opus 5.5 做 NumPy 优化，1 个 agent 加速 3.7 倍，32 个到达 18.9 倍。GPT-6.2 Astra 单兵最强，但超过 8 个后出现负缩放。模型会自发形成不同的组织，去中心化的群体比依赖中心协调的更好扩。任务本身能不能并行，对成绩的预测很强；单个模型更聪明，并不能很好预测集体智力。他们同时开源了 Optimization-Bench [Amjad](https://x.com/amasad/status/2124969305674748175) · [文章](https://frontier.replit.com/throwing-headcount-at-the-problem/)

**Lenny 和 Atlassian · 全员变成「AI builder」一个月后，大家还是回到了旧岗位**：Atlassian 试过取消产品经理和设计师角色，只留 builder。前几周有人说从没这么快过，一个月后全都回到原来的工作。一位产品经理的解释是：吞吐不是问题，方向才是。Sherif Mansour 还说，很多公司因为 AI 能做初级工作而不再招新人，Atlassian 相反，因为现在难的是让老人忘掉旧方法；新人看不出 AI 糟粕，老人一英里外就能认出来，两者要搭配。角色并没有合并，只是每个人的圈子变大了，AI 做原型会放大长处，也会放大对技艺不够的地方 [全员试法](https://x.com/lennysan/status/2124880663149002996) · [要点](https://x.com/lennysan/status/2125018080837525695)

**Matt Pocock · 给人和 agent 一块共用的看板，多数团队应该自己做**：他被 Vercel Board 启发，但认为多数团队该从零做一块自己的，不必绑死供应商。核心就是人和 agent 都有身份的私有工作区，必要时再同步到 Slack。他举了几类用法：和 agent 一起追问时，可以让它去 ping 某个人或对方的 agent；本地 agent 用未读消息当队列，远程的人也能留言；定时任务就是给 agent 发重复消息；还可以把审查、实现这类确定流程注册成命令，让 agent 自己去触发并回来汇报 [原帖](https://x.com/mattpocockuk/status/2124797717834543167) · [Vercel 说明](https://vercel.com/blog/introducing-vercel-board)

这几条都在说同一件事：多 agent 不是加人数就好，要看任务能不能并行、怎么协调；团队也不是取消岗位就更快，缺的往往是方向和共享上下文。看板这类东西，价值在人和 agent 能互相找到对方，而不在又多一个工单系统。

---

### 实践最佳实践

**过期的 CLAUDE.md 和 AGENTS.md 会压过代码本身**：一篇论文做了 40 个 Python 项目，指令文件写一种约定，代码里已经是另一种，比如还在要求用 print，代码早就改成 logging。Claude Code 和 Codex CLI 一共跑了 320 次。不加干预时，90.1% 的选择跟着过期文件走。Claude Code 在 80 次里有 79 次自己指出了冲突，但仍然按文件做；Codex CLI 有 20 次改写了现有代码去迁就文件，其中 17 次把项目测试弄失败。作者在用户级指令里加了一句「以现有代码为准」之后，按代码走的比例从 4.2% 升到 91.4%，改写停止，测试通过率从 89.4% 升到 100%。他们的判断是：指令文件是作为指令进模型的，代码只是工具输出，模型被训练成更听前者。这篇由 Voxyz 今天转到实践圈 [论文](https://arxiv.org/abs/2610.30571) · [Voxyz](https://x.com/Voxyz_ai/status/2124880659889938848)

项目说明文件不是写完就结束。它比代码更像「命令」，过期了会系统地把 agent 带偏，而且模型即使看出来，也还是可能照做。
