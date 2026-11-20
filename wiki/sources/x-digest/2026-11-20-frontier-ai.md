---
title: "2026-11-20 · 前沿 AI"
title_en: "2026-11-20 · Frontier AI"
description: "当日前沿 AI 动态与实践者方法简报。"
description_en: "Daily frontier AI news and practitioner notes."
date: 2026-11-20
type: frontier-ai
lang: zh-CN
---

## 今日主线
- Anthropic 股票 ANT 今天开盘 111.50 美元，收盘 97.17 美元，较 83 美元的发行价上涨 17%，CNBC 写按完全稀释口径收盘市值约 1.8 万亿美元
- OpenAI 公布 Performance Factory，用 Codex 自动追查性能回退，三个多月跟踪超过 1700 次调查，定位超过 600 个根因
- Google 把 Tool Retrieval 和 Genie 4 放进 Gemini API，并给美区 Mac 上的 Gemini 应用加上电脑操作

## 前沿动态
- **Anthropic 上市首日**：ANT 在纳斯达克开盘 111.50 美元，比发行价高约 34%，盘中估值一度到约 2 万亿美元，随后回落，收在 97.17 美元，仍比 83 美元高 17%。CNBC 写，按完全稀释口径收盘市值约 1.8 万亿美元，排在苹果、微软、英伟达、Alphabet、亚马逊和 SpaceX 之后，是美国第七大市值公司，当天成交约 8.46 亿股，超过 SpaceX 开盘日的 5.22 亿股。公司此前按 83 美元发行 9.8 亿股，募资 813 亿美元。以上开盘价、收盘价、市值和成交量均摘自 CNBC 或纳斯达克新闻室口径。Dario Amodei 在开盘致辞里写，足够强的 AI 和人一起工作，有望把一个世纪的科学和医学进步压缩到十年，同时也说风险是真实的，但可以避免，并明确会按需要放缓训练和部署，以确信系统安全并处于人的控制之下，不会向商业或政治压力让步 [开盘致辞](https://x.com/AnthropicAI/status/2123461658890686863) · [Bloomberg](https://x.com/business/status/2123524934018154763) · [CNBC](https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html) · [Nasdaq](https://www.nasdaq.com/newsroom/anthropic-marks-ipo-at-nasdaq)
- **GPT-Live-1.1 进 API**：OpenAI 宣布这款全双工语音模型已在 API 可用，口音更自然也更稳定，跨语言表现更好，任务完成更可靠，并新加了 standby，空闲时把推理停掉以降成本。文档里，进行中的会话按每分钟 0.05 美元计，standby 是每分钟 0.02 美元，后台模型和工具另计。系统卡还写，ChatGPT、Codex 和 Dots 里，Plus 及以上默认用 GPT-Live-1.1，其他档默认用更小的 Quip。以上定价和默认档位均摘自官方口径（官方文档页本次抓取失败，见简报转述及官方帖） [OpenAIDevs](https://x.com/OpenAIDevs/status/2123506733524136446) · [文档](https://developers.openai.com/api/docs/models/gpt-live-1.1)
- **Gemini API 上的 Tool Retrieval，以及 Genie 4 对开发者开放**：Tool Retrieval 在 Interactions API 里进入预览，工具很多时不必每次都把完整参数说明塞进上下文，只要加上 `tool_search`，再给暂时不用的工具设 `defer_loading: true`，模型先只看到名称和描述，真正要用时再在同一次请求里加载参数。官方写这没有单独收费，适用于 Gemini 3.6 及之后的模型，包括 Gemini 4。同一天，Genie 4 也进了 Gemini API 和 AI Studio，开发者可以用文字或参考图生成可连续互动的 720p、24 帧世界，并带同步原生音频，付费档输入每百万 token 1.50 美元，视频输出 17.50 美元，约合每秒 0.10 美元。以上收费和功能说明均摘自官方口径 [Tool Retrieval](https://x.com/GoogleAIStudio/status/2123489911684866251) · [说明](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/) · [Logan](https://x.com/OfficialLoganK/status/2123467449257623770) · [Genie 4 API](https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/)
- **美区 Mac 上的 Gemini 可以操作用户的电脑**：Gemini 应用能在独立的后台窗口里点击、滚动和输入，把任务做到本地文件夹、桌面应用和网页上，主屏幕和光标仍留给用户，关键动作要先批准，也能指定它能进哪些应用。目前只对美国、英语、年满 18 岁的个人账号开放，需要搭载 Apple 芯片、系统为 macOS Sequoia 15.0 及以上的电脑，以及 Google AI Plus、Pro 或 Ultra [Gemini](https://x.com/GeminiApp/status/2123513203745538423) · [说明](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/)

## 领袖与研究者洞察
- **Dario · 把节奏权写进上市承诺**：他用父亲去世后不久那种病才可治愈作开头，说现在的智能还太少，科学家和时间都不够，而 Claude 已经在蛋白质折叠、药物设计和临床试验管理上帮人把研究时间缩短。他同时列出误用、经济冲击和系统失控这些真实风险，并写避免这些风险取决于造 AI 的人怎么选，Anthropic 会为确认安全、并让系统保持在人的控制之下，按需要放慢训练和部署 [原帖](https://x.com/AnthropicAI/status/2123461658890686863)
- **Mollick · 公司挡用户自己的 agent，吓不了太久**：有报道称，苹果自己在做电脑操作 agent 的同时，把 macOS 里给第三方（例如 ChatGPT）打开电脑操作的步骤从 4 步加到了 14 步，理由是安全，也有用户看成排挤竞争。Mollick 认为，公司如果告诉客户不能用自己的 AI agent 来管自己的账号或电脑，短期靠吓唬也许有用，但不会一直有效 [原帖](https://x.com/emollick/status/2123541572490817605)
- **Rauch · 会做事的工程师现在是 1000 倍，抠细节却看不见全局的是负 10 倍**：他用 Vercel 上创业公司和企业的 token 用量来支撑这个判断，普通知识工作者大约变成 2 倍工程师，而工程师和软件工厂会吃掉指数增长的 token。他说 Anthropic 的成功也说明，写代码仍是 AI 的第一杀手级应用。上述倍数是作者对其平台用量的判断 [原帖](https://x.com/rauchg/status/2123505400591106113)
- **Artificial Analysis · GPT-6.2 更短、更先给答案，也更少承认不确定**：和上代相比，Astra 平均回复从 352 个词降到 210，Sol 从 337 降到 223；组织性指数 Astra 从 70 降到 11，Sol 从 86 降到 27，但先给答案的比例明显上升；承认不确定方面，Astra 从 96 降到 24，Sol 从 98 降到 51，听起来更自然，证据充分度则要开到更高推理强度才会上去。以上指数和词数均摘自 Artificial Analysis 口径 [原帖](https://x.com/ArtificialAnlys/status/2123236464003588136)

## AI 原生工作方式
- **OpenAI 的 Performance Factory**：官方说，传统性能工程已经跟不上 agent 写代码的速度，他们做了一套云端系统，由工程师写好可重复的工作流和给 Codex 的说明，再让 agent 去执行。回归工作流在性能告警响起时建任务，一个 agent 调查并写出修复建议，等人审过并上线后，另一个 agent 再检查性能有没有回到基线。任务状态和发现记在任务记录里，不绑在某一个 agent 的上下文中，agent 能用到指标、日志、追踪、CPU 和内存快照。三个多月里，这套流程跟踪了超过 1700 次调查，定位超过 600 个根因，大约每天 17 次。团队还把调查方法收进名为 `perf-forensics` 的技能。他们写，眼下的瓶颈往往是等工程师审查和合并，已经在考虑要不要让 agent 自己做这一步。以上调查次数和根因数量均摘自官方口径（官方说明页本次抓取失败，见简报转述及官方帖） [OpenAIDevs](https://x.com/OpenAIDevs/status/2123471880292299171) · [说明](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast/)
- **Levie · 下一阶段是给目标，让 agent 自己设计、试、上线再继续改**：他说很快就会从「你在一组任务里调度 agent」，变成「你给一组目标，它们去设计方案，按执行结果持续改进」。这会先发生在工程里，因为每个新阶段的方法几乎都是从这里先出现，但也可以用到客户开通、降风险和持续改善安全态势上。他强调，这样做出的结果是人以前做不到的 [原帖](https://x.com/levie/status/2123278949749059756)
- **Responses API 里的推理开始绑住上文**：OpenAI 说，从最新的前沿模型开始，GPT-6.2 在 Responses API 里可以接着前面的推理往下做，用更少 token、更多缓存命中。代价是每条推理都绑在它之前的对话历史上，如果改了更早的消息，后面的推理会被丢掉 [OpenAIDevs](https://x.com/OpenAIDevs/status/2123566018866151579)

## 实践者方法
- **Vox · Neon 并不只是便宜**：他自己测了两个仓库里 105 个埋好的缺陷，Neon（xhigh）得 63 分，GPT-6.2 Astra（max）62.7 分，Fable 5.2（max）58 分。他还觉得 Neon 是眼下写得最像人的模型，给几张参考图时，动效也明显好过 Opus 5.5，同一个 HTML 项目两者结果几乎一样。他建议日常功能、修缺陷和重构用 Antigravity 的 Orchestrator，由 Neon 做计划和审查，Hydrogen 写代码；要逐步深挖的竞态或多仓库迁移，再把 Neon 开到 Extra；升级依赖、单测和文档用 Hydrogen 就够。他提醒，Gemini 应用的默认设置只是一般，真正该放进 Antigravity，并转述 Google 自己的 SWE-sweep：最简单的 harness 上是 12.8%，Antigravity 里是 39.0%。以上分数和 SWE-sweep 数字均摘自作者转述或自测口径 [原帖](https://x.com/Voxyz_ai/status/2123461311833022837)
- **Vox · Claude Code 用 Opus 主会话，Fable 当顾问，并让另一个 agent 验收**：他给的配置是主会话 Opus 5.5、推理开 high，旁边三个中等强度的子 agent 分别读代码、改代码并跑测试、查文档，Fable 5.2 只在旁边做顾问。他让人先检查 `~/.claude/agents` 里现成的子 agent，把主会话默认推理写进 `settings.json`，并加一条规则：大计划拍板前、同一错误第二次出现时、以及长任务收工前，先问顾问。另一个建议是，上线前用一个没写过这些代码的测试 agent，按五条规则验收：用白话或需求说明让它自己写测试，每个 PR 都在真实浏览器里跑，期望结果只能人改、失败的检查不能被悄悄改成通过，每次失败都要录像、失败步骤和期望与实际对照，通过的测试都留下并在每次改动后全量重跑 [配置](https://x.com/Voxyz_ai/status/2123534531366154356) · [验收](https://x.com/Voxyz_ai/status/2123504574476468492)
- **宝玉整理 Claude Code 团队怎么做代码审查**：原文 10 月 15 日就发表了，他今天做了详细翻译。官方写，6 月到 9 月，Claude Code 仓库合并的 PR 翻了一倍以上，被回滚的比例下降超过 40%，目标是大多数 PR 最多只需一个人看（可以是作者自己），同时回滚和事故不能变多。宝玉归纳的六层是：写代码的同一会话里先自己跑测试，再派一个上下文干净的子 agent 复查；提交后由托管的 Code Review 做深审；再过安全审查和常规 CI；按风险决定要不要人批；最后再合并。风险分级不再只按文件路径：改安装说明里的错别字可以直接过，普通改动由作者负责，账单、发布流程这类高风险改动要第二个人签字，机器人的批准不能代替必须由人做的批准。上述合并量和回滚降幅摘自官方口径 [宝玉](https://x.com/dotey/status/2123555597387813050) · [原文](https://claude.dev/blog/solving-code-review-at-anthropic/)
- **一个小设置**：Claude Code 默认会在 30 天后清掉终端会话，之后 `/resume` 也找不回来。Vox 建议在 `~/.claude/settings.json` 里把 `cleanupPeriodDays` 设成 36500 [原帖](https://x.com/Voxyz_ai/status/2123431117634367675)

## 小工具
- **GPT-Live-1.1**：官方称全双工语音模型已在 API 可用，并新增 standby；文档中的会话与 standby 按分钟计费数字摘自官方口径 [OpenAIDevs](https://x.com/OpenAIDevs/status/2123506733524136446) · [文档](https://developers.openai.com/api/docs/models/gpt-live-1.1)
- **Gemini API Tool Retrieval**：Interactions API 预览，用 `tool_search` 和 `defer_loading: true` 按需加载工具参数；官方写没有单独收费 [说明](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/)
- **Genie 4 进入 Gemini API**：开发者可用文字或参考图生成可连续互动的 720p、24 帧世界，并带同步原生音频 [Genie 4 API](https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/)
- **Gemini 应用电脑操作（美区 Mac）**：在独立后台窗口里点击、滚动和输入；限美国、英语、年满 18 岁的个人账号，需 Apple 芯片和 macOS Sequoia 15.0 及以上，以及 Google AI Plus、Pro 或 Ultra [说明](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/)
- **Responses API 推理接上文**：官方称 GPT-6.2 可接着前面的推理往下做；改了更早的消息，后面的推理会被丢掉 [OpenAIDevs](https://x.com/OpenAIDevs/status/2123566018866151579)
- **`cleanupPeriodDays`**：Vox 建议在 `~/.claude/settings.json` 里把 Claude Code 会话清理周期从默认 30 天改成 36500 [原帖](https://x.com/Voxyz_ai/status/2123431117634367675)

## 两三句
Anthropic 开盘冲到约 2 万亿美元后回落，收盘仍比定价高 17%，市场买的是已经做出来的模型和一套安全叙事，Dario 同时把放缓训练的权利写进了公开承诺。OpenAI 把 Codex 从加速写代码，扩到自己保养 ChatGPT 的速度，Google 则把按需加载工具、世界模型和电脑操作一起补进产品。对使用者更可复制的是：别让写代码的同一个 agent 既干活又判卷，按风险决定要几个人看，中间档模型只要放对 harness，成绩可以接近更贵的旗舰
