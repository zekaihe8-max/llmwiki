---
type: Topic
title: 智能体视频剪辑
title_en: Agentic video editing
description: 前沿模型可把视频剪辑当代码问题自主完成到可替初级剪辑师；中间 Skill/插件层易被吃掉，Agent 侧界面宜极简预览与标记，人的杠杆转向品味、反馈与风格一致性。
description_en: Frontier models can treat video editing as a coding problem well enough to replace junior editors; mid-layer Skills/plugins get eaten, agent-facing UIs should stay simple previews and markers, and human leverage shifts to taste, feedback, and style consistency.
tags: [agentic-video-editing, opus, skills, video, creative-tools]
sources:
  - id: dotey-opus-55-agent-video-editing
    resource: https://x.com/dotey/status/2115282464935473225
    title: Dotey on agent video editing after Opus 5.5
  - id: shao-meng-langchain-content-studio
    resource: https://x.com/shao__meng/status/2115345069570212202
    title: Meng Shao on four months of LangChain Content Studio
  - id: xiaomovps-grok-bot-three-video-bots
    resource: https://x.com/xiaomovps/status/2115314460340748454
    title: Xiaomo recommends three practical Grok Bot video bots
  - id: suno-mcp-beta-announcement
    resource: https://x.com/suno/status/2115506373001634206
    title: Suno announces Suno MCP Beta
  - id: op7418-suno-mcp
    resource: https://x.com/op7418/status/2115622019429781887
    title: 歸藏 on Suno shipping MCP
  - id: dingyi-grok-flatkey-bilibili-mv
    resource: https://x.com/dingyi/status/2115639108819456052
    title: Ding on a three-step Grok Bot + flatkey path for Bilibili-style MV remixes
  - id: 0xlangeai-kid-question-explainer-video
    resource: https://x.com/0xlangeai/status/2115626860226982157
    title: 0xlangeai on kid-question-driven science explainer video
  - id: cgnot996-grok-bot-v0781-shopping-vault-pages
    resource: https://x.com/cgnot996/status/2115752949276123606
    title: cgnot996 on Grok Bot v0.78.1 shopping cards, logistics, Pages, and Vault
  - id: op7418-malfoy-desktop
    resource: https://github.com/op7418/malfoy-desktop
    title: Malfoy Desktop open-source repository
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:30:00+08:00
---

# 智能体视频剪辑

*Agentic video editing*

当模型具备足够的编程与工具调用能力后，视频剪辑可走编程走过的路：用 HTML/CSS、SVG、浏览器渲染等手段「写」出片子，Agent 已能替代初级剪辑师——且当下往往仍是能力最差的阶段。补能力的中间 Skill / MCP / 插件层会被通用模型吃掉；面向 Agent 的界面应极简（预览与标记），初剪交给现有专业软件，而不是重造 NLE 时间线。人的价值从操作转向品味、反馈与品牌/风格一致性。[^dotey-opus-55-agent-video-editing]

Once models have enough coding and tool-calling ability, video editing can follow the path coding already took: “write” cuts via HTML/CSS, SVG, browser rendering, and peers, with agents able to replace junior editors—and the present often still the worst the capability will be. Mid-layer Skills / MCP / plugins that patched ability get eaten by the general model; agent-facing UIs should stay minimal (preview and markers), hand rough cuts to existing pro software, and avoid rebuilding NLE timelines. Human value shifts from operation to taste, feedback, and brand/style consistency.[^dotey-opus-55-agent-video-editing]

## 综合分析 / Synthesis

[宝玉谈 Opus 5.5 后 Agent 剪辑像 Claude Code 刚出](../sources/articles/dotey-opus-55-agent-video-editing.md) 把 Opus 5.5 框成剪辑侧的 Claude Code 时刻：已能替初级剪辑师，却仍刚开始。宝玉自测同片只给 ASR/TTS、不用 Skill 反而更好，并因此把此前剪辑 Skill 与 BaoCut 时间线编辑器退居二线——默认简单预览即可，类比 Codex 不需要 VSCode 式编辑器；Sabba 建议勿重造专业时间线、做好初剪再交出现有软件，与此同向。[^dotey-opus-55-agent-video-editing] 原帖 <https://x.com/dotey/status/2115282464935473225>。

[Dotey on agent video editing after Opus 5.5](../sources/articles/dotey-opus-55-agent-video-editing.md) frames Opus 5.5 as a Claude Code moment for editing: junior editors replaceable, yet only the start. His same-clip ASR/TTS-only, no-Skill run beat the Skill run, so prior editing Skills and BaoCut’s timeline editor move to the back seat—default a simple preview, akin to Codex not needing a VSCode-like editor; Sabba’s “don’t rebuild a pro timeline; nail the rough cut then hand off” lands the same way.[^dotey-opus-55-agent-video-editing] Post: <https://x.com/dotey/status/2115282464935473225>.

同帖整理的 Alex Cooper 侧给出产量与训练闭环：资深剪辑师同等质量日产出约 5×；按风格拆小 Skill，用参考片与资深重剪点评把隐性知识录进 Skill，推广者搭环境、最强剪辑师教 AI。Sabba 侧给出市场：基础剪辑成本或从几美元降到几美分；不会一家通吃（类比 Cursor 上企业、Lovable 服务非技术用户）；差异化靠更深工作流、垂类与手机端；剪辑变易后瓶颈或转向拍摄。[^dotey-opus-55-agent-video-editing]

The same post’s Alex Cooper cut supplies throughput and a training loop: seniors ~5× edits/day at equal quality; split small Skills by style, train with references and senior re-cut critique, record tacit judgment into Skills—champions scaffold, best editors teach the AI. Sabba’s cut supplies market shape: basic edit cost may fall from dollars to cents; no single winner (Cursor upmarket vs Lovable for non-technical users); differentiate on deeper workflow, verticals, and mobile; after editing gets easy, shooting may bottleneck.[^dotey-opus-55-agent-video-editing]

与 [开源工具装进 AI 助手做自然语言剪辑](./open-source-in-ai-assistant-editing.md) 同属「用 AI/Agent 降低剪辑操作门槛」，但本页管的是模型跃迁后的能力形态、中间层与 UI/市场策略；彼页管的是把开源剪辑器装进助手、一句话出成片的产品拼法。

Shares the “lower editing operation bar with AI/agents” family with [Open-source tools in AI assistants for natural-language editing](./open-source-in-ai-assistant-editing.md), but this page owns post–model-leap capability shape, mid-layers, and UI/market strategy; that page owns the product pattern of plugging an open-source editor into an assistant for one-sentence cuts.

Skills 在剪辑场景「模型变强后大半可弃」与「按风格仍可训练」的张力，见 [Agent Skill 编写](./agent-skill-authoring.md)。

For the tension between “most Skills drop after the model leap” and “style Skills can still be trained,” see [Agent skill authoring](./agent-skill-authoring.md).

[邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md) 把「剪辑当代码」落到开源公司 harness：产出尽量是幻灯片 HTML / 动画时间线，改时间点可重渲；剪辑用 HyperFrames（片子当网页 + GSAP），原创动画用 motion-studio；规格强制故事板 → animatic → 量产。人的杠杆写成创意总监——定方向、审稿、把反馈推理写入 skill——与本页「操作→品味」同向；协作画布用 Paper 点选改坐标，而不是全程自然语言描述位置，介于「纯对话做完」与「重造 NLE」之间。公司 harness 切面见 [公司级 Agent Harness 五原语](./company-agent-harness.md)。[^shao-meng-langchain-content-studio] 原帖 <https://x.com/shao__meng/status/2115345069570212202>。

[Meng Shao on four months of LangChain Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) lands “editing as code” in an open company harness: outputs prefer deck HTML / animation timelines so time-point edits re-render; editing uses HyperFrames (video as web + GSAP) and original motion uses motion-studio; order is code-forced storyboard → animatic → production. Human leverage is written as creative director—direction, review, feedback reasoning into skills—same as this page’s operation→taste shift; the Paper canvas lets people click to change coordinates instead of narrating positions in natural language the whole way—between “finish in pure chat” and “rebuild an NLE.” Company-harness cut: [Company agent harness — five primitives](./company-agent-harness.md).[^shao-meng-langchain-content-studio] Post: <https://x.com/shao__meng/status/2115345069570212202>.

[小墨推荐三个实用 Grok Bot 视频 Bot](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) 补上个人 Agent 市场侧的分发面：Grok Bot 不止整理 X，还可做视频与图片；作者称路由到 Opus 5.5。三条可导入路径——Video Studio（文生视频 / 多镜头 / 宣传片与自动分镜剪辑）、文章转视频（AI 主持人、旁白、引用来源）、Video Editor（真人口播自动选片、字幕、B-roll、配乐，底层 FFmpeg / Whisper / Remotion）——把「剪辑当代码」落到可试用的 Bot，而不是公司 harness 或自写 Skill。小墨主张生态变富后，许多以前要自写 Skill、搭工作流的功能可先导入他人做好的 Bot 再试；他最关心文章转视频与口播自动剪两条。开源工具栈切面见 [开源工具装进 AI 助手做自然语言剪辑](./open-source-in-ai-assistant-editing.md)。[^xiaomovps-grok-bot-three-video-bots] 原帖 <https://x.com/xiaomovps/status/2115314460340748454>。

[Xiaomo recommends three practical Grok Bot video bots](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) adds the personal-agent marketplace distribution cut: Grok Bot can do video and images beyond X collation; the author attributes routing to Opus 5.5. Three importable paths—Video Studio (text-to-video / multi-shot / promos with auto storyboard-edit), article→video (AI host, narration, citations), and Video Editor (talking-head auto clip/caption/B-roll/music on FFmpeg / Whisper / Remotion)—land “editing as code” as tryable bots, not a company harness or self-authored Skills. Xiaomo argues that as the ecosystem thickens, many jobs that once needed self-written Skills or workflows can start by importing someone else’s bot; he cares most about article→video and talking-head auto-edit. Open-source tool-stack cut: [Open-source tools in AI assistants for natural-language editing](./open-source-in-ai-assistant-editing.md).[^xiaomovps-grok-bot-three-video-bots] Post: <https://x.com/xiaomovps/status/2115314460340748454>.

[Suno 宣布 Suno MCP Beta](../sources/articles/suno-mcp-beta-announcement.md) 给出**官方** MCP Beta 文案：灵感处开写、免 tab 切换（“Create songs from wherever you get inspired. No tab-switching needed.”），早期访问走 Typeform 报名；抓取正文未列 MCP 工具、额度或订阅绑定。[^suno-mcp-beta-announcement] 原帖 <https://x.com/suno/status/2115506373001634206>。[歸藏谈 Suno 出 MCP](../sources/articles/op7418-suno-mcp.md) 在同公告上补 Agent 用例：Claude 做视频要配乐时 in-session 调 Suno，去掉「自己开 Suno 生成再回传模型」的手工——耐久点落在**编排相邻媒体服务**，不是把剪辑能力写进 Skill 去补模型。[^op7418-suno-mcp] 原帖 <https://x.com/op7418/status/2115622019429781887>。

[Suno announces Suno MCP Beta](../sources/articles/suno-mcp-beta-announcement.md) supplies the **official** MCP Beta copy—create where inspired, no tab-switching (“Create songs from wherever you get inspired. No tab-switching needed.”), early access via Typeform; the fetched body lists no MCP tools, quotas, or subscription coupling.[^suno-mcp-beta-announcement] Post: <https://x.com/suno/status/2115506373001634206>. [歸藏 on Suno shipping MCP](../sources/articles/op7418-suno-mcp.md) adds the agent use case on the same launch: Claude building video calls Suno in-session for a soundtrack, dropping the manual open-Suno → generate → hand-back leg—the durable point is **orchestrating adjacent media services**, not stuffing editing capability into Skills to patch the model.[^op7418-suno-mcp] Post: <https://x.com/op7418/status/2115622019429781887>.

[Ding 谈 Grok Bot + flatkey 三步做 B 站风 MV](../sources/articles/dingyi-grok-flatkey-bilibili-mv.md) 补上**个人操作者 + 统一视频 API CLI** 的一例：Ding 做 B 站流行的 MV 二创，称原以为麻烦、实际三步很丝滑——Grok Bot 按文档装 flatkey CLI、在控制台发 API key 给 Bot、再喂原片让它参考风格与人物生成；生成侧选 **MiniMax-H3**（单段 15 秒、多段拼接），避开 **seedance-2.5** 对人像审核过严；并称赞 flatkey 一 API 通多模型、MiniMax-H3 约 $0.08/秒、几美元一条。与 [小墨的三个视频 Bot](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) 的「导入市场 Bot」不同轴，这里是 **Bot 装 CLI + 按量 API** 跑二创模板流；抓取正文未逐步展示剪辑指令或成片。[^dingyi-grok-flatkey-bilibili-mv] 原帖 <https://x.com/dingyi/status/2115639108819456052>。

[Ding on a three-step Grok Bot + flatkey path for Bilibili-style MV remixes](../sources/articles/dingyi-grok-flatkey-bilibili-mv.md) adds a **personal operator + unified video API CLI** case: Ding tried Bilibili-style MV remixes, expected friction, and reports a smooth three-step path—Grok Bot installs flatkey CLI from docs, an API key from the console goes to the bot, then a source clip sets style and characters; generation uses **MiniMax-H3** (15 s per clip, stitch many) and avoids **seedance-2.5**’s stricter human moderation; he praises flatkey’s one-API multi-model access with MiniMax-H3 at about $0.08/s for a few dollars per piece. A different axis from [Xiaomo’s three video bots](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) “import marketplace bots”—here **bot-installed CLI + metered API** runs a remix template flow; the fetched body does not show edit commands or the finished cut step-by-step.[^dingyi-grok-flatkey-bilibili-mv] Post: <https://x.com/dingyi/status/2115639108819456052>.

[蓝哥AI谈孩子提问驱动的科普短片工作流](../sources/articles/0xlangeai-kid-question-explainer-video.md) 补上**家庭场景 + Codex 编排**的一例：娃的「纸对折有多厚」触发家长查资料，因大数难想象而做尺度递进动画；作者称用 Codex 与 Renoise MCP、借助 vibe-knowledge 整理脚本与分镜，再产出画面、旁白与配乐，并区分数学推演与真实可折性——人的杠杆在选题、科学边界与分镜意图（从杯子到地月），不是 NLE 时间线操作。与 [小墨文章转视频 Bot](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) 的「导入市场 Bot」、Content Studio 公司 harness 不同轴；抓取正文未写 Renoise 工具面或逐步 prompt。[^0xlangeai-kid-question-explainer-video] 原帖 <https://x.com/0xlangeai/status/2115626860226982157>。

[0xlangeai on kid-question-driven science explainer video](../sources/articles/0xlangeai-kid-question-explainer-video.md) adds a **family trigger + Codex orchestration** case: a child’s paper-folding thickness question sends the parent to research, then to scale-step animation when big numbers lack intuition; the author cites Codex plus Renoise MCP with vibe-knowledge for script/storyboard, then visuals, narration, and music, with math-vs-physics fold limits stated—human leverage sits in topic choice, scientific framing, and storyboard intent (cup to Earth–Moon), not NLE timeline ops. A different axis from [Xiaomo’s article→video bots](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) marketplace imports or Content Studio’s company harness; the fetched body does not document Renoise’s tool surface or step-by-step prompts.[^0xlangeai-kid-question-explainer-video] Post: <https://x.com/0xlangeai/status/2115626860226982157>.

[铁柱AGI谈 Grok Bot v0.78.1 购物卡与 Vault](../sources/articles/cgnot996-grok-bot-v0781-shopping-vault-pages.md) 补 **Grok Bot 主线产品内置文/参考图生成视频**（非导入市场 Bot）：[@cgnot996](https://x.com/cgnot996) 在 **v0.78.1** 发布说明中写支持按文字描述或参考图直接生成视频——与 [小墨三个视频 Bot](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) 的导入路径、[Ding flatkey CLI](../sources/articles/dingyi-grok-flatkey-bilibili-mv.md) 的按量 API 不同轴，但是「助手面里出片」同族；抓取正文**未**写模型路由、时长上限或与 Remotion/FFmpeg 栈关系。[^cgnot996-grok-bot-v0781-shopping-vault-pages] 原帖 <https://x.com/cgnot996/status/2115752949276123606>。

[cgnot996 on Grok Bot v0.78.1 shopping cards, logistics, Pages, and Vault](../sources/articles/cgnot996-grok-bot-v0781-shopping-vault-pages.md) adds **first-party Grok Bot text/reference-image video generation** (not marketplace import): [@cgnot996](https://x.com/cgnot996) lists in **v0.78.1** release notes video from text or a reference image—a different axis from [Xiaomo’s three video bots](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) imports or [Ding’s flatkey CLI](../sources/articles/dingyi-grok-flatkey-bilibili-mv.md) metered API, but the same “make video inside the assistant surface” family; the fetched body does **not** name model routing, duration caps, or ties to Remotion/FFmpeg stacks.[^cgnot996-grok-bot-v0781-shopping-vault-pages] Post: <https://x.com/cgnot996/status/2115752949276123606>.

[马尔福桌面开源仓库](../sources/articles/op7418-malfoy-desktop.md) 给出 **生成媒体 + 剪辑当代码 + 桌面交付** 的一体化同人范例（非 Agent 对话内剪片）：即梦生成画面、角色与对白配音，Suno 生成主题曲与 BGM（README 点名 *Say Nothing Tonight*、*Clockwork Hush*、*Hush, Piano Alone*），正片与宣传片走 **HyperFrames** 工程，魔法转场在共享 `lib/magic.js`（Three.js + GSAP）；母带脚本 `-15 LUFS / -1 dBTP`。GitHub 只开源代码与工程，成片素材随安装包分发——人的杠杆在选题、分支剧情与桌面互动设计，而不是 NLE 时间线操作；与 [歸藏 Suno MCP 用例](../sources/articles/op7418-suno-mcp.md) 同作者线但此处是**直接调用 Suno 产物**，不是 MCP 编排。[^op7418-malfoy-desktop] 仓库 <https://github.com/op7418/malfoy-desktop>。

[Malfoy Desktop open-source repository](../sources/articles/op7418-malfoy-desktop.md) shows an integrated **generated media + editing-as-code + desktop ship** fan-work case (not in-chat agent editing): Jimeng for footage, characters, and voiced dialogue; Suno for theme and BGM (README names *Say Nothing Tonight*, *Clockwork Hush*, *Hush, Piano Alone*); film and trailer in **HyperFrames** projects; magic transitions in shared `lib/magic.js` (Three.js + GSAP); loudness mastering at **-15 LUFS / -1 dBTP**. GitHub open-sources code and projects while finished media ships in installers—human leverage sits in story branches and desktop interaction design, not NLE timeline ops; same author line as [歸藏 on Suno MCP](../sources/articles/op7418-suno-mcp.md) but here **Suno output is wired directly**, not MCP orchestration.[^op7418-malfoy-desktop] Repository: <https://github.com/op7418/malfoy-desktop>.

## 矛盾与变化 / Contradictions

同帖转述的 Alex 与 Sabba 已分歧：Alex 认为大量广告可全程在 Claude 对话里 agentic 完成；Sabba 认为时间轴与画面空间位置需要更复杂界面，并担忧品牌一致性与可重复性。宝玉将其归因于场景（短广告量产）与生意（卖工具）不同，并指出 Alex 的「按风格拆 Skill + 反馈」本身是在用户侧解决可重复性。[^dotey-opus-55-agent-video-editing]

Alex and Sabba, as relayed in the same post, already split: Alex holds that most ads can finish agentically inside Claude chat; Sabba holds that timeline and on-canvas spatial work need richer UI and worries about brand consistency and repeatability. Dotey ties the split to scene (short-ad volume) versus business (selling tools), and notes Alex’s “style-split Skills + feedback” is itself a user-side fix for repeatability.[^dotey-opus-55-agent-video-editing]

[Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) 不取消上述分歧，但给出第三条落点：主交互仍在 Slack 线程，空间微调走 Paper 点选 + 代码时间线重渲，品牌一致性靠 skills / wiki / gate——更靠近 Alex 的「对话里 agentic 量产」，又承认 Sabba 所忧的空间与可重复性需要一点非纯自然语言界面，而不是重造专业 NLE。[^shao-meng-langchain-content-studio]

[Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) does not cancel that split, but adds a third landing: primary interaction stays in Slack threads, spatial tweaks go through Paper clicks plus code-timeline re-renders, and brand consistency rides skills / wiki / gate—closer to Alex’s “agentic volume inside chat,” while conceding Sabba’s spatial/repeatability worry needs a little non–natural-language UI without rebuilding a pro NLE.[^shao-meng-langchain-content-studio]

[小墨的三个视频 Bot](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) 不取消上述分歧，但给出第四条产品落点：在 Grok Bot 市场导入现成 Bot，覆盖生成、文章讲解片与口播自动剪——更靠近「对话/助手面里直接做片」，工具栈（含 Remotion 等）藏在 Bot 后，而不是用户自建 NLE 或公司 Slack harness。与宝玉「多数补能力 Skill 可弃」同向的是「先导入别人做好的 Bot」；与 Alex「按风格训练 Skill」不同轴——小墨谈的是分发与试用入口，不是品味训练环。作者把质量归因于 Opus 5.5 路由，与同作者指纹测为 Sonnet 的对照见 [行为指纹置信度 ≠ 确认底层模型](./model-fingerprint-confidence-not-confirmation.md)。[^xiaomovps-grok-bot-three-video-bots]

[Xiaomo’s three video bots](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) do not cancel that split, but add a fourth product landing: import ready Grok Bot marketplace bots covering generation, article explainers, and talking-head auto-edit—closer to “make the cut inside the assistant surface,” with the tool stack (including Remotion and peers) behind the bot rather than a user-built NLE or company Slack harness. Aligned with Dotey’s “most capability-patch Skills can go” is “import someone else’s bot first”; a different axis from Alex’s “train style Skills”—Xiaomo is about distribution and try-before-build, not a taste-training loop. He attributes quality to Opus 5.5 routing; contrast with the same author’s Sonnet fingerprint probe on [Behavioral fingerprint confidence ≠ confirmed backend model](./model-fingerprint-confidence-not-confirmation.md).[^xiaomovps-grok-bot-three-video-bots]

本页开篇把「补剪辑能力的中间 Skill / MCP / 插件」与会被通用模型吃掉同列；[Suno 官方 MCP Beta](../sources/articles/suno-mcp-beta-announcement.md) 与 [歸藏用例帖](../sources/articles/op7418-suno-mcp.md) 则是 **Suno 音乐 SaaS 经 MCP 进 Agent 编排**——官方强调免 tab 切换开写，歸藏举例是 Claude 做片时 in-session 配乐，不是用 MCP 教模型「会剪」。二者可并存：剪辑域里补丁式中间层可弃，专用生成服务的工具调用仍值得接，以免用户 tab 切换与文件回传。[^dotey-opus-55-agent-video-editing][^suno-mcp-beta-announcement][^op7418-suno-mcp]

This page’s lead bundles “mid-layer Skills / MCP / plugins that patched editing ability” with getting eaten by the general model; [Suno’s official MCP Beta](../sources/articles/suno-mcp-beta-announcement.md) plus [歸藏’s use-case post](../sources/articles/op7418-suno-mcp.md) are **Suno music SaaS entering agent orchestration via MCP**—official copy stresses no tab-switching creation, 歸藏’s example is in-session scoring while Claude builds video, not MCP teaching the model to edit. Both can hold: capability-patch mid-layers in editing may drop, while tool calls to specialized generators still repay wiring to avoid user tab-switching and file handoffs.[^dotey-opus-55-agent-video-editing][^suno-mcp-beta-announcement][^op7418-suno-mcp]

[Ding 的 flatkey 二创帖](../sources/articles/dingyi-grok-flatkey-bilibili-mv.md) 在同一「助手面里做片」家族里补**模型选型张力**：为人像过审选 MiniMax-H3、放弃 seedance-2.5，代价是 15 秒上限与多段拼接——与宝玉侧「Skill 可弃、默认简单预览」不冲突，但是**生成 API + 平台审核**约束，不是 NLE 界面争论；亦未与 [小墨视频 Bot](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) 的 Opus 5.5 路由主张对证。[^dingyi-grok-flatkey-bilibili-mv][^xiaomovps-grok-bot-three-video-bots]

[Ding’s flatkey remix post](../sources/articles/dingyi-grok-flatkey-bilibili-mv.md) adds **model-choice tension** inside the same “make cuts inside the assistant surface” family: pick MiniMax-H3 for portrait moderation pass, drop seedance-2.5, pay with a 15 s cap and multi-clip stitching—compatible with Dotey’s “Skills can go, default simple preview,” but the bind is **generation API + platform moderation**, not the NLE UI debate; it also does not verify [Xiaomo’s video bots](../sources/articles/xiaomovps-grok-bot-three-video-bots.md) Opus 5.5 routing claim.[^dingyi-grok-flatkey-bilibili-mv][^xiaomovps-grok-bot-three-video-bots]

## 相关 / Related

- Source: [宝玉谈 Opus 5.5 后 Agent 剪辑像 Claude Code 刚出](../sources/articles/dotey-opus-55-agent-video-editing.md)
- Source: [邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md)
- Source: [小墨推荐三个实用 Grok Bot 视频 Bot](../sources/articles/xiaomovps-grok-bot-three-video-bots.md)
- Source: [Suno 宣布 Suno MCP Beta](../sources/articles/suno-mcp-beta-announcement.md)
- Source: [歸藏谈 Suno 出 MCP](../sources/articles/op7418-suno-mcp.md)
- Source: [Ding 谈 Grok Bot + flatkey 三步做 B 站风 MV](../sources/articles/dingyi-grok-flatkey-bilibili-mv.md)
- Source: [蓝哥AI谈孩子提问驱动的科普短片工作流](../sources/articles/0xlangeai-kid-question-explainer-video.md)
- Source: [铁柱AGI谈 Grok Bot v0.78.1 购物卡与 Vault](../sources/articles/cgnot996-grok-bot-v0781-shopping-vault-pages.md)
- Source: [马尔福桌面开源仓库](../sources/articles/op7418-malfoy-desktop.md)
- Topic: [开源工具装进 AI 助手做自然语言剪辑](./open-source-in-ai-assistant-editing.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [公司级 Agent Harness 五原语](./company-agent-harness.md)
- Topic: [行为指纹置信度 ≠ 确认底层模型](./model-fingerprint-confidence-not-confirmation.md)

[^dotey-opus-55-agent-video-editing]: Dotey on agent video editing after Opus 5.5
[^shao-meng-langchain-content-studio]: Meng Shao on four months of LangChain Content Studio
[^xiaomovps-grok-bot-three-video-bots]: Xiaomo recommends three practical Grok Bot video bots
[^suno-mcp-beta-announcement]: Suno announces Suno MCP Beta
[^op7418-suno-mcp]: 歸藏 on Suno shipping MCP
[^dingyi-grok-flatkey-bilibili-mv]: Ding on a three-step Grok Bot + flatkey path for Bilibili-style MV remixes
[^0xlangeai-kid-question-explainer-video]: 0xlangeai on kid-question-driven science explainer video
[^cgnot996-grok-bot-v0781-shopping-vault-pages]: cgnot996 on Grok Bot v0.78.1 shopping cards, logistics, Pages, and Vault
[^op7418-malfoy-desktop]: Malfoy Desktop open-source repository
