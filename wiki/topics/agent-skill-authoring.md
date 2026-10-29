---
type: Topic
title: Agent Skill 编写
title_en: Agent skill authoring
description: "耐用 Skills 来自真实跑通、精瘦 description、体积限制、脆弱步骤写死与 gotchas；勿塞权重已有知识；同会话叠 Skills 要看是否需叠加与内容类型；装太多时描述预算（如约占上下文 1%）超限会静默砍掉低频触发描述只留名字；同时官方与一线劝慎用——半衰期短，有时删 skill 更好，旧规矩会绑住新模型；模型跃迁后补能力的 Skill 层也可被整片吃掉，风格/品味类 Skill 仍可用专家反馈训练，公开动效/UI 品味包亦可把 Agent 易错点写成可执行规则。"
description_en: "Durable Skills come from real runs, lean descriptions, size limits, hard-coded fragile steps, and gotchas—omit weight-already-known material; stacking skills in one session depends on whether they must stack and on content type; installing too many can hit a description budget (e.g. ~1% of context) that silently strips low-frequency trigger text to names—yet official and frontline advice also urge caution: short half-life, sometimes better after deletion, and prior-generation rules that bind new models; after a model leap, capability-patching Skills can be eaten wholesale, while taste/style Skills can still be trained with expert feedback, and public motion/UI taste packs can encode agent failure modes as executable rules."
tags: [agent-skills, authoring, best-practices, context, claude-code]
sources:
  - id: voxyz-agent-skills-writing-rules
    resource: https://x.com/Voxyz_ai/status/2113374840413421906
    title: Vox on Agent Skills writing rules
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
  - id: dexhorthy-skills-session-context
    resource: https://x.com/dexhorthy/status/2114408588991222156
    title: Dex Horthy on stacking skills in one session and context dirtying
  - id: dotey-opus-55-agent-video-editing
    resource: https://x.com/dotey/status/2115282464935473225
    title: Dotey on agent video editing after Opus 5.5
  - id: shao-meng-langchain-content-studio
    resource: https://x.com/shao__meng/status/2115345069570212202
    title: Meng Shao on four months of LangChain Content Studio
  - id: shao-meng-three-skills-top-ios
    resource: https://x.com/shao__meng/status/2115332272152826248
    title: Meng Shao on three Skills packs to recreate top iOS apps
  - id: vista8-dsh-landing-page-clone
    resource: https://x.com/vista8/status/2115293920955605424
    title: vista8 on cloning Landing Pages with a DSH plugin
  - id: 0xlangeai-claude-code-three-pitfalls
    resource: https://x.com/0xlangeai/status/2115300040701096272
    title: 蓝哥AI on three silent Claude Code pitfalls
  - id: dotey-baoyu-design-v2-opensource
    resource: https://x.com/dotey/status/2115667965328977920
    title: Dotey announces baoyu-design v2 open source
  - id: jimliu-baoyu-design
    resource: https://github.com/jimliu/baoyu-design
    title: baoyu-design open-source repository
  - id: shao-meng-minimax-mcode-stack
    resource: https://x.com/shao__meng/status/2115428696672866729
    title: Meng Shao on MiniMax open-sourcing the MCode Stack
  - id: minimax-mcode-stack
    resource: https://github.com/MiniMax-AI/mcode-stack
    title: MiniMax MCode Stack open-source repository
  - id: xiaomovps-grok-bot-zero-to-one-guide
    resource: https://x.com/xiaomovps/status/2115738442181333337
    title: Xiaomo’s Grok Bot zero-to-one guide
  - id: xiaomovps-grok-bot-over-hermes-hot-take
    resource: https://x.com/xiaomovps/status/2115743740577157595
    title: Xiaomo’s hot take that Grok Bot supersedes Hermes Agent
  - id: 0xlangeai-qingshang-waigua-nvc-skill
    resource: https://x.com/0xlangeai/status/2115754265180574033
    title: 0xlangeai on Ayi’s Opus 5.5 open-source EQ plug-in from an NVC Skill
  - id: ayi-qingshang-waigua
    resource: https://github.com/ayi-ai/qingshang-waigua
    title: qingshang-waigua open-source repository
  - id: cgnot996-any-agent-command-grok-bot
    resource: https://x.com/cgnot996/status/2115722202712789476
    title: cgnot996 on any agent commanding Grok Bot
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:08:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# Agent Skill 编写

*Agent skill authoring*

值得分享的 Skills，是从智能体已经跑通的任务里提炼出来的，而不是凭通用知识空想。描述决定技能会不会被加载；正文保持短小，把细节推到引用文件，硬编码脆弱命令，并把每次纠正记成 gotcha。[^voxyz-agent-skills-writing-rules] 不要把权重里已经有的东西写进 Skills——浪费时间，还会锁死可能次优的具体行为。[^dexhorthy-skills-session-context] 装太多时，描述侧还会触碰硬预算：超限后低频 Skill 的触发描述可被静默删到只剩名字，看起来像「失忆」。[^0xlangeai-claude-code-three-pitfalls] 即便写法到位，Skills 仍可能半衰期很短：官方与一线工程侧都劝慎用，有时删掉 skill 输出更好，上一世代模型的规矩常会绑住新模型；前沿模型跃迁后，用来「补模型不会的能力」的 Skill 层也可整片作废，而承载风格与品味的 Skill 仍可用专家反馈循环训练——公开动效/UI 品味包也可把 Agent 易错点直接写成可执行规则。[^shao-meng-felix-not-2024-claude-usage][^dotey-opus-55-agent-video-editing][^shao-meng-three-skills-top-ios]

Skills worth sharing are distilled from tasks an agent already completed well, not invented from general knowledge. The description gates whether the skill is ever loaded; the body stays short, pushes detail into referenced files, hard-codes fragile commands, and records every correction as a gotcha.[^voxyz-agent-skills-writing-rules] Do not put material already in the weights into Skills—you waste time and lock in a specific, potentially suboptimal behavior.[^dexhorthy-skills-session-context] Install too many and the description side can hit a hard budget: over limit, low-frequency Skills’ trigger text may be silently cut to names only—looking like amnesia.[^0xlangeai-claude-code-three-pitfalls] Even well-authored Skills can have a short half-life: official guidance and frontline engineering both urge caution—deleting a skill sometimes improves output, and rules from a prior model generation often bind the next; after a frontier model leap, Skills that only patched missing capability can go obsolete wholesale, while Skills that carry style and taste can still be trained with expert feedback loops—and public motion/UI taste packs can encode agent failure modes directly as executable rules.[^shao-meng-felix-not-2024-claude-usage][^dotey-opus-55-agent-video-editing][^shao-meng-three-skills-top-ios]

## 综合分析 / Synthesis

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) 在标准转入基金会治理之后，从官方技能创建指南抽出六条规则：先和智能体一起做完任务，只留下真正奏效的部分；删掉任何不改变结果的行；把描述写成「在……时使用此技能」且不超过 1,024 字符；`SKILL.md` 控制在 500 行、5,000 tokens 以内，细节放 `references/`；硬编码脆弱命令并选定一个默认值；把 gotchas 列表当作最高价值段落。同帖还附带一个 Claude Code 提示，把刚完成的重复任务做成带评估的技能。[^voxyz-agent-skills-writing-rules]

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) pulls six rules from the official skill-creation guide after the standard moved under foundation governance: do the task with the agent first and keep only what worked; drop any line that would not change the outcome; write the description as "use this skill when..." under 1,024 characters; keep `SKILL.md` under 500 lines and 5,000 tokens with `references/` for detail; hard-code fragile commands and pick one default; treat the gotchas list as the highest-value section. The same post includes a Claude Code prompt to turn a just-finished repeated task into a skill with evals.[^voxyz-agent-skills-writing-rules]

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 补上生命周期与默认态度：Skills 半衰期极短；官方与他个人都劝慎用；有时删掉 skill 输出更好。这不否定「从真实跑通提炼、写瘦 description」的写法，但把 Skills 从「默认该堆」改成「可删、须复查、勿绑死下一代模型」的资产。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) adds lifetime and default stance: Skills have a very short half-life; official guidance and his own advice say be careful; deleting a skill sometimes improves output. That does not cancel “distill from real runs, lean descriptions,” but reframes Skills from “stack by default” to assets you may delete, must revisit, and must not freeze onto the next model.[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>.

[Dex Horthy 谈同会话叠 Skills 与上下文污染](../sources/articles/dexhorthy-skills-session-context.md) 从会话与注意力侧补「写什么、怎么加载」：好的 skills 常混合权重外信息、流程步骤与一般转向/行为——偏流程宜串开，偏信息大概可合并进一条用户消息，行为规则在长会话会衰减，重要者应跨步骤重复或用 hooks。约五步同会话通常够用；需 skills **叠加**或约 200 个独立 skills 同时活跃时，才换新鲜上下文、子 Agent 或预合并（并点出把 memory snippets 做成 skills 在当今 harness 里多半是反模式）。他恳求勿塞权重已有内容。[^dexhorthy-skills-session-context] 原帖 <https://x.com/dexhorthy/status/2114408588991222156>。何时用子 Agent / 新鲜窗与主循环默认的衔接见 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)。

[Dex Horthy on stacking skills in one session and context dirtying](../sources/articles/dexhorthy-skills-session-context.md) adds the session-and-attention cut on what to write and how to load: good skills often mix out-of-weight information, process steps, and general steering/behavior—string process out, information can often merge into one user message, and behavior adherence decays over long sessions so important rules want repetition across steps or hooks. About five steps in one session are usually fine; only when skills must **stack** or ~200 separate skills stay active at once do you want fresh context, subagents, or precombine (and framing memory snippets as skills is probably an antipattern in today’s harnesses). He begs people not to stuff weight-already-known material in.[^dexhorthy-skills-session-context] Post: <https://x.com/dexhorthy/status/2114408588991222156>. For how that meets the main-loop default on subagents / fresh windows, see [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md).

[宝玉谈 Opus 5.5 后 Agent 剪辑像 Claude Code 刚出](../sources/articles/dotey-opus-55-agent-video-editing.md) 从剪辑域给出「模型吃掉 Skill 层」的实测：Opus 5.5 前做的剪辑 Skill 发布后大半不需要；同片只给 ASR/TTS、不用 Skill 反而更好——与「勿塞权重已有 / 旧规矩绑新模型」同向，并落到整类中间层作废。同帖转述的 Alex 做法则仍要按风格拆小 Skill，用参考片与资深剪辑师重剪点评、录屏口述隐性判断来训练——那是品味与可重复性，不是补模型不会剪。剪辑能力形态见 [智能体视频剪辑](./agentic-video-editing.md)。[^dotey-opus-55-agent-video-editing] 原帖 <https://x.com/dotey/status/2115282464935473225>。

[Dotey on agent video editing after Opus 5.5](../sources/articles/dotey-opus-55-agent-video-editing.md) supplies a measured “model eats the Skill layer” case from editing: most pre–Opus 5.5 editing Skills became unnecessary; the same clip with only ASR/TTS and no Skills beat the Skill run—aligned with “don’t stuff weight-known material / prior rules bind new models,” and landing as whole mid-layer obsolescence. The same post’s Alex playbook still splits small Skills by style and trains them with references, senior re-cut critique, and recorded tacit judgment—that is taste and repeatability, not patching “the model can’t edit.” For editing capability shape, see [Agentic video editing](./agentic-video-editing.md).[^dotey-opus-55-agent-video-editing] Post: <https://x.com/dotey/status/2115282464935473225>.

[邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md) 给出公司级「品味 Skill」样板与同向的 Bitter Lesson：把设计师判断写入 skills / wiki / 代码门禁——原则、反 AI 俗套护栏、反馈背后的推理；可度量项进 Gate，主观项由设计师拍板后入 skill。早期为弱模型堆约 115 个硬编码 UI/动效组件后版式重复；Opus 5.5 跃升后删掉大部分补丁、只留原则与高层指引，多样性上来——与「补能力的 Skill 会被吃掉、品味层仍值得写」同向。另有慢环 `learn_from_job`：最多 5 条有证据教训挂到 skill，后续打分、每周合入 skill/wiki，是「从真实跑通提炼」的制度化版本。[^shao-meng-langchain-content-studio] 原帖 <https://x.com/shao__meng/status/2115345069570212202>。

[Meng Shao on four months of LangChain Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) supplies a company-scale “taste Skill” playbook and the same Bitter Lesson: encode designer judgment in skills / wiki / code gates—principles, anti–AI-slop rails, and the reasoning behind feedback; measurable rules become Gates, subjective calls are designer-owned then written into skills. Early ~115 hard-coded UI/motion components for weaker models made layouts repetitive; after the Opus 5.5 leap they deleted most patches, kept principles and high-level guidance, and diversity rose—same direction as “capability-patch Skills get eaten; taste layers still repay writing.” A slow `learn_from_job` loop (up to five evidenced lessons onto skills, later scoring, weekly merge into skill/wiki) institutionalizes “distill from real runs.”[^shao-meng-langchain-content-studio] Post: <https://x.com/shao__meng/status/2115345069570212202>.

[邵萌谈三套 Skills 复刻顶级 iOS](../sources/articles/shao-meng-three-skills-top-ios.md) 给出公开的品味 Skill 标本与「可叠用」边界：Emil Kowalski Skills 的核心论点是 Agent 缺品味（进场错用 ease-in、实色边框代半透明阴影等），把易错点写成可执行规则（`emil-design-eng`、`animate` / `animate-expo`、严格评审等），星标高于同帖另两套——与「品味层仍值得写」同向，且是可安装的第三方包而非公司内设计师反馈环。同帖把 Appllama（学谁/长什么样）+ Expo 官方工程 Skills + Emil 动效品味收成复刻栈，载体是 skills.sh，不是 IPA 逆向；产品复刻分工见 [用 Skills 组合复刻原生感 App](./skills-stack-native-app-recreation.md)。[^shao-meng-three-skills-top-ios] 原帖 <https://x.com/shao__meng/status/2115332272152826248>。

[Meng Shao on three Skills packs to recreate top iOS apps](../sources/articles/shao-meng-three-skills-top-ios.md) supplies a public taste-Skill specimen and a “safe to stack” bound: Emil Kowalski Skills’ core claim is that agents lack taste (wrong ease-in on enter, solid borders instead of translucent shadows, etc.) and encodes failure modes as executable rules (`emil-design-eng`, `animate` / `animate-expo`, strict review, and peers), with stars above the other two packs in the same post—same direction as “taste layers still repay writing,” as an installable third-party pack rather than an in-house designer feedback loop. The same post folds Appllama (who/look) + Expo official engineering Skills + Emil motion taste into a recreation stack on skills.sh, not IPA reverse engineering; for the product-recreation division of labor, see [Compose Skills to recreate native-feel apps](./skills-stack-native-app-recreation.md).[^shao-meng-three-skills-top-ios] Post: <https://x.com/shao__meng/status/2115332272152826248>.

[小墨谈 Grok Bot 从 0 到 1 长文](../sources/articles/xiaomovps-grok-bot-zero-to-one-guide.md) 从 Grok Bot 侧补「先不空想 Skill」：首周优先官方模板市场（56 例）与社区索引，从改模板学提示词；具体流程封装成 Skill，长期偏好放记忆，且同一条规则只维护一处——与 Vox「从跑通提炼」同向，但入口是 **import 他人 Bot/Skill** 而非从零写 `SKILL.md`。记忆大扫除时只改有问题行、删不掉则覆盖新条目，与 Felix「须复查、勿绑死」一致。[^xiaomovps-grok-bot-zero-to-one-guide] 原帖 <https://x.com/xiaomovps/status/2115738442181333337>。

[Xiaomo’s Grok Bot zero-to-one guide](../sources/articles/xiaomovps-grok-bot-zero-to-one-guide.md) adds the Grok Bot side of “don’t invent Skills in a vacuum”: week one prefers the official marketplace (56 cases) and community indexes, learning prompts by adapting templates; put concrete flows in Skills, long-term prefs in memory, one place per rule—aligned with Vox’s “distill from runs,” but entry is **import others’ bots/skills** rather than authoring `SKILL.md` from scratch. Memory cleanup edits only bad lines and overwrites when delete fails—consistent with Felix’s “revisit, don’t freeze.”[^xiaomovps-grok-bot-zero-to-one-guide] Post: <https://x.com/xiaomovps/status/2115738442181333337>.

[小墨暴论 Grok Bot 是 Hermes Agent 上位替代](../sources/articles/xiaomovps-grok-bot-over-hermes-hot-take.md) 从 **跨宿主迁移** 补 Skill/MCP 实务：个人助手需求含通过 Skill 或 MCP 连软件做自动化（含飞书 CLI 文档流）；Hermes 上已做好常用 Skill 与授权，迁到 Grok Bot 时主张用类似方法重装/接 MCP，并 **做好授权与配置备份还原**——不是重写 Skill 标准，而是同一套「流程进 Skill、接 MCP/CLI」在 Linux 云机上复用；与长文「模板市场入门」互补：本帖假设已在 Hermes 跑通，迁移时保留投资而非从零空想。[^xiaomovps-grok-bot-over-hermes-hot-take] 原帖 <https://x.com/xiaomovps/status/2115743740577157595>。

[Xiaomo’s hot take that Grok Bot supersedes Hermes Agent](../sources/articles/xiaomovps-grok-bot-over-hermes-hot-take.md) adds a **cross-host migration** cut for Skill/MCP practice: personal-assistant needs include Skill or MCP automation (including Feishu CLI document flows); on Hermes he already had Skills and auth working, and on Grok Bot argues similar wiring plus **auth and config backup/restore**—not a new Skill standard, but the same “flows in Skills, wire MCP/CLI” pattern on a Linux host; complements the long guide’s marketplace onboarding: this post assumes Hermes runs already and preserves that investment rather than inventing from scratch.[^xiaomovps-grok-bot-over-hermes-hot-take] Post: <https://x.com/xiaomovps/status/2115743740577157595>.

[铁柱AGI谈任意 Agent 可指挥 Grok Bot](../sources/articles/cgnot996-any-agent-command-grok-bot.md) 给出 **Skill + 配套 CLI** 的跨宿主编排切口：[@cgnot996](https://x.com/cgnot996) 把「外部 Agent 指挥 Grok Bot」封装成一个 skill 与 CLI，Codex 与 Claude Code 均可列出账号下 Bot、逐 Bot 派活并回收——Skill 侧负责在 coding harness 里触发与说明，CLI 侧负责与 Grok Bot 的实际派活协议（帖文未展开文件布局或命令面）。与 [baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md) 把重活推出 Skill 外的本地 CLI 同向：别让 `SKILL.md` 吞掉全部运行时，但这里 CLI 是跨产品调度 Grok 而非导出 PPTX。[^cgnot996-any-agent-command-grok-bot] 原帖 <https://x.com/cgnot996/status/2115722202712789476>。内测阶段，开源未定。

[cgnot996 on any agent commanding Grok Bot](../sources/articles/cgnot996-any-agent-command-grok-bot.md) gives a **Skill plus companion CLI** cross-host orchestration cut: [@cgnot996](https://x.com/cgnot996) packages “external agents command Grok Bot” as one skill and CLI so Codex and Claude Code can list bots under the account, dispatch per bot, and collect results—the skill triggers and instructs inside the coding harness, the CLI carries the actual Grok dispatch protocol (post does not detail file layout or command surface). Aligns with [baoyu-design open-source repository](../sources/articles/jimliu-baoyu-design.md) pushing heavy work out of the skill into local CLI—do not bloat `SKILL.md` with all runtime—here the CLI cross-calls Grok rather than exporting PPTX.[^cgnot996-any-agent-command-grok-bot] Post: <https://x.com/cgnot996/status/2115722202712789476>. Private beta; open source TBD.

[向阳乔木谈用 DSH 插件复刻 Landing Page](../sources/articles/vista8-dsh-landing-page-clone.md) 从 Web Landing 表面补「不必默认上 Skill」：前端 Skill「可以」，但更简单可靠是选优质站复刻，经 DSH 插件 `qiaomu-ui-learn-dsh` 把提示词交给 Agent——与 Felix「有时删/慎用 Skill」同向，但落地是参照站驱动路径而非删掉已有 skill；产品切面见 [Landing Page：选站复刻优于专用 Skill](./landing-page-site-clone-over-skill.md)。[^vista8-dsh-landing-page-clone] 原帖 <https://x.com/vista8/status/2115293920955605424>。

[vista8 on cloning Landing Pages with a DSH plugin](../sources/articles/vista8-dsh-landing-page-clone.md) adds a web-Landing cut of “don’t default to a Skill”: a frontend Skill “can work,” but picking a quality site to clone is simpler and more reliable, via DSH plugin `qiaomu-ui-learn-dsh` with the prompt copied to an Agent—same direction as Felix’s “sometimes delete / use Skills carefully,” but landing as a reference-site path rather than deleting an existing skill; product cut under [Landing Pages — clone a reference site over a dedicated Skill](./landing-page-site-clone-over-skill.md).[^vista8-dsh-landing-page-clone] Post: <https://x.com/vista8/status/2115293920955605424>.

[蓝哥AI谈 Claude Code「变笨」三隐形坑](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) 从 Claude Code 描述预算侧补「装太多」的静默失败：描述预算只占上下文约 1%，超限会自动砍掉低频 Skill 的触发描述、只留名字，表现为失忆；治本是跑 `skill-doctor` 关掉不用的 Skill——与 Vox「精瘦 description」同向，并把失败从「写得太胖」扩到「总数触碰预算后触发文本被静默删掉」。[^0xlangeai-claude-code-three-pitfalls] 原帖 <https://x.com/0xlangeai/status/2115300040701096272>。指令文件加载与订阅凭据另见 [项目指令与 Token 效率](./agents-md-token-efficiency.md) 与 [高端 AI 订阅价值](./premium-ai-subscription-value.md)。

[0xlangeai on three silent Claude Code pitfalls](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) adds a Claude Code description-budget cut of “install too many”: the description budget is only about 1% of context; over limit, low-frequency Skills lose trigger descriptions and keep only names—looking like amnesia; the real fix is running `skill-doctor` to disable unused Skills—same direction as Vox’s lean descriptions, widening failure from “wrote too fat” to “count hits the budget and trigger text is silently stripped.”[^0xlangeai-claude-code-three-pitfalls] Post: <https://x.com/0xlangeai/status/2115300040701096272>. Instruction-file loading and subscription credentials: [Project instructions and token efficiency](./agents-md-token-efficiency.md) and [Premium AI subscription value](./premium-ai-subscription-value.md).

[宝玉发布 baoyu-design v2 开源](../sources/articles/dotey-baoyu-design-v2-opensource.md) 代表与「个人精瘦 gotcha Skill」不同的**平台面移植包**：多 Skill 仓库把 Claude Design / Slides / Dashboard 与本地编辑器、双向文件同步、导出管线一起打包，目标是复刻 claude.ai 体验而非只补模型短板；宝玉称任意 Agent/模型可跑、不再依赖 Artifacts。它与 Vox 的 500 行/`references/` 精瘦写法**不同类**——体积大是因为要带宿主外编辑器与 Artifact 类型文件格式，不是把权重已有通识写进一条 Skill；仍须警惕「装太多」的描述预算（见 [蓝哥AI](../sources/articles/0xlangeai-claude-code-three-pitfalls.md)），与 Felix「有时删 skill」不矛盾：删的是过期补丁，不是整包设计基础设施。[^dotey-baoyu-design-v2-opensource] 原帖 <https://x.com/dotey/status/2115667965328977920>。跨宿主标准语境见 [Agent Skills 开放标准](./agent-skills-open-standard.md)。

[Dotey announces baoyu-design v2 open source](../sources/articles/dotey-baoyu-design-v2-opensource.md) is a **platform-surface port pack**, not a lean personal gotcha Skill: a multi-skill repo bundles Claude Design / Slides / Dashboard with local editors, bidirectional file sync, and export pipelines to replay the claude.ai experience rather than patch model gaps; Dotey claims any agent/model and no Artifacts. It is a **different class** from Vox’s 500-line/`references/` lean authoring—bulk comes from out-of-host editors and Artifact-type file formats, not stuffing weight-known trivia into one Skill; the description-budget “install too many” caution still applies (see [0xlangeai](../sources/articles/0xlangeai-claude-code-three-pitfalls.md)), and Felix’s “sometimes delete a skill” still holds: delete stale patches, not the whole design infra bundle.[^dotey-baoyu-design-v2-opensource] Post: <https://x.com/dotey/status/2115667965328977920>. Cross-host standard context: [Agent Skills open standard](./agent-skills-open-standard.md).

[baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md) 细化「大 Skill 包」的可维护切分：`SKILL.md` + `system-prompt.md` 保持工艺与 harness 无关；`references/cursor.md` 等只在检测到宿主时加载；`built-in-skills/` 按任务按需拉专项提示——接近 Vox「细节进 references/、正文编排」但规模是为整产品设计面服务。安装侧 README 明确 **`npx skills add … --skill`** 只装子集，与 [蓝哥AI](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) 描述预算下「别一次装满五个触发描述」同向；PPTX 等重导出走 Skill 外本地 CLI（`gen-pptx` + Playwright），避免把运行时塞进 `SKILL.md` 正文。[^jimliu-baoyu-design]

[baoyu-design open-source repository](../sources/articles/jimliu-baoyu-design.md) details how the large pack stays maintainable: `SKILL.md` plus `system-prompt.md` keep craft harness-independent; `references/cursor.md` and peers load only when the host is detected; `built-in-skills/` pulls specialized prompts on demand—close to Vox’s “detail in references/, body orchestrates” but sized for a whole product surface. The README’s **`npx skills add … --skill`** partial installs align with [0xlangeai](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) description-budget advice not to enable all five trigger descriptions at once; heavy exports such as PPTX use out-of-skill local CLI (`gen-pptx` + Playwright) instead of bloating `SKILL.md`.[^jimliu-baoyu-design]

[邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) 给出「从真实日常跑通提炼」的公司 harness 样板：MiniMax Code 开源 **MCode Stack**，把何时拆子 Agent、长命令/长会话、工具与每轮 token、评审与热修等写成 **`SKILL.md`、Checklist、Workflow** 三类；Ronny stack 15 个 skill（如 `subagent-split-check`、`tool-budget-audit`、`long-session-check`），六条 `engineering-*` 改编自 Google Engineering Practices（CC-BY 3.0 改编部分），其余 MIT；**MCode Engineering Notes** 讲道理、技能可执行，Ronny 的 `WORKFLOW.md` 仍标 Coming soon、帖文称先以 skills 为准——与 Vox「先跑通再写」同向，但切面是**编码 Agent 治理**而非设计 Artifact 或品味包；与 Felix「半衰期短、敢删」不冲突，仓库仍收社区 stack 模板。[^shao-meng-minimax-mcode-stack] 原帖 <https://x.com/shao__meng/status/2115428696672866729>；仓库 <https://github.com/MiniMax-AI/mcode-stack>。子 Agent 默认见 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)。

[Meng Shao on MiniMax open-sourcing the MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) supplies a company-harness specimen of “distill from real daily runs”: MiniMax Code open-sourced the **MCode Stack**, encoding when to split sub-agents, long commands/sessions, tool and per-turn token budgets, review, and hotfixes as three artifact types—**`SKILL.md`, checklists, workflows**; Ronny’s stack has 15 skills (e.g. `subagent-split-check`, `tool-budget-audit`, `long-session-check`), six `engineering-*` skills adapted from Google Engineering Practices (adapted portions CC-BY 3.0), rest MIT; **MCode Engineering Notes** explain while skills execute, Ronny’s `WORKFLOW.md` still marked Coming soon and the post says to treat skills as authoritative for now—same direction as Vox’s “run first, then write,” but the cut is **coding-agent governance**, not design Artifacts or taste packs; compatible with Felix’s short half-life and “dare to delete,” while the repo still welcomes community stack templates.[^shao-meng-minimax-mcode-stack] Post: <https://x.com/shao__meng/status/2115428696672866729>; repo: <https://github.com/MiniMax-AI/mcode-stack>. Sub-agent defaults: [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md).

[MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md) 从 README 强化「从真实日常提炼」而非写 prompt 百科：明确**不是**最佳实践清单；Checklist 与 Skill 同构（Agent 逐项过项目）；团队称 harness engineering 靠实验推进、仓库**会持续改**——与 Felix 半衰期同向，但这里是**敢改敢 fork** 的开源 craft，而非个人 gotcha 单文件；贡献侧 PR 暂限协作者，外人 stack 走 `community/` 模板并跑 `scripts/check.mjs`。[^minimax-mcode-stack]

[MiniMax MCode Stack open-source repository](../sources/articles/minimax-mcode-stack-repo.md) README reinforces “distill from real daily use,” not a prompt encyclopedia: explicitly **not** a best-practices list; checklists share the Skill shape (agent walks items); the team calls harness engineering experiment-driven and the repo **will keep changing**—same direction as Felix’s half-life, but as open **craft you may fork**, not only personal gotcha files; contributing PRs are collaborator-only for now, outside stacks via `community/` template plus `scripts/check.mjs`.[^minimax-mcode-stack]

[蓝哥AI谈 Ayi 用 Opus 5.5 开源「情商外挂」](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md) 给出 **Skill 规则 → 固定网页产品** 的短周期样板：Ayi 先把《非暴力沟通》写成 GitHub 180+ Star 的开源 Skill，再用 Opus 5.5 约两小时把同一套人际/措辞规则收成零依赖本地页——标刺耳词、温和/坚定/直接三档、坚定不缩水——与 Vox「从跑通提炼」同向，但交付物是 **可分享的 localhost 工具** 而非只在 harness 里按需加载的 `SKILL.md`；规则层仍是权重外的行为与措辞约束（品味/沟通类），不是补模型不会的能力。[^0xlangeai-qingshang-waigua-nvc-skill] 原帖 <https://x.com/0xlangeai/status/2115754265180574033>。

[0xlangeai on Ayi’s Opus 5.5 open-source “EQ plug-in” from an NVC Skill](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md) supplies a short **Skill rules → fixed web product** specimen: Ayi authored an open NVC Skill (180+ GitHub stars), then used Opus 5.5 for about two hours to ship the same interpersonal wording rules as a zero-dependency local page—flag harsh words, gentle/firm/direct tiers, firm without watering down—same direction as Vox’s “distill from runs,” but the artifact is a **shareable localhost tool**, not only a `SKILL.md` loaded on demand in a harness; the rule layer is out-of-weight behavior and phrasing (communication/taste class), not patching missing model capability.[^0xlangeai-qingshang-waigua-nvc-skill] Post: <https://x.com/0xlangeai/status/2115754265180574033>.

[情商外挂开源仓库](../sources/articles/ayi-qingshang-waigua.md) 从 README 把同一类产品 **落地成可 fork 的规则文件**：人际/措辞约束写在 `app.py` 的 `WHO`、`TONE` 与 `SYSTEM_PROMPT`（README 写明改规矩直接改这三处），NVC 四要素是方法说明而非权重补洞；运行期是 localhost 上的固定改写，不是 harness 里按需加载的 `SKILL.md`。与转述帖不同，仓库正文**未写**构建用了哪版模型、耗时或 Star 数——只描述两文件零依赖产品与 MIT 许可。[^ayi-qingshang-waigua] 仓库 <https://github.com/ayi-ai/qingshang-waigua>。构建叙事见 [蓝哥AI谈 Ayi 用 Opus 5.5 开源「情商外挂」](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md)。

[qingshang-waigua open-source repository](../sources/articles/ayi-qingshang-waigua.md) README lands the same product class as **forkable rule source**: interpersonal wording lives in `app.py` as `WHO`, `TONE`, and `SYSTEM_PROMPT` (the README says edit those to change rules); NVC’s four components are methodology, not weight patching; runtime is a fixed localhost rewrite, not on-demand `SKILL.md` in a harness. Unlike the relay post, the repo body **does not** name which model built it, build time, or star count—only the two-file zero-dependency product and MIT license.[^ayi-qingshang-waigua] Repository: <https://github.com/ayi-ai/qingshang-waigua>. Build narrative: [0xlangeai on Ayi’s Opus 5.5 open-source “EQ plug-in” from an NVC Skill](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md).

## 矛盾与变化 / Contradictions

本页主线（Vox / 官方指南）教人如何写出耐用 Skills；[邵萌转述 Felix](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 强调即便官方也劝慎用，半衰期短、旧规矩绑新模型、有时删 skill 更好。两者切面不同——前者是**怎么写**，后者是**何时保留与何时丢弃**——合在一起是「写对了仍要敢删」，而不是互相取消。[^voxyz-agent-skills-writing-rules][^shao-meng-felix-not-2024-claude-usage]

This page’s main line (Vox / official guide) teaches how to author durable Skills; [Meng Shao relaying Felix](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) stresses that even official advice urges caution—short half-life, prior-generation rules binding new models, and sometimes better output after deletion. Different cuts—**how to write** versus **when to keep or drop**—together mean “write them well and still dare to delete,” not a cancellation.[^voxyz-agent-skills-writing-rules][^shao-meng-felix-not-2024-claude-usage]

[Dex Horthy](../sources/articles/dexhorthy-skills-session-context.md) 的「勿塞权重已有知识」与「旧规矩会绑住新模型」同向：把模型已会的东西固化进 skill，既浪费上下文，也锁死可能次优行为；与「可删、须复查」一致，而不是另开一套写法。[^dexhorthy-skills-session-context][^shao-meng-felix-not-2024-claude-usage]

[Dex Horthy](../sources/articles/dexhorthy-skills-session-context.md)’s “don’t put weight-already-known material in” aligns with “prior-generation rules bind new models”: freezing what the model already knows into a skill wastes context and locks potentially suboptimal behavior—consistent with “delete and revisit,” not a rival authoring school.[^dexhorthy-skills-session-context][^shao-meng-felix-not-2024-claude-usage]

[宝玉](../sources/articles/dotey-opus-55-agent-video-editing.md) 的实测把「敢删」推到整层：补能力的剪辑 Skill 在 Opus 5.5 后大半作废且无 Skill 更好；同帖 Alex 的风格 Skill 训练则说明「删中间层」不等于「永不写 Skill」——承载品味与品牌一致性的 Skill 仍值得用专家反馈写。与 Felix 的半衰期劝诫同向，并把删/留标准从「是否绑死模型」扩到「是否只是在补已被权重吃掉的能力」。[^dotey-opus-55-agent-video-editing][^shao-meng-felix-not-2024-claude-usage]

[Dotey](../sources/articles/dotey-opus-55-agent-video-editing.md)’s measurement pushes “dare to delete” to the whole layer: capability-patching editing Skills mostly died after Opus 5.5 and no-Skill won; the same post’s Alex style-Skill training shows deleting mid-layers is not “never write Skills”—taste and brand-consistency Skills still repay expert-feedback authoring. Same direction as Felix’s half-life caution, widening keep/drop from “does it freeze the model” to “is it only patching capability the weights already ate.”[^dotey-opus-55-agent-video-editing][^shao-meng-felix-not-2024-claude-usage]

[邵萌转述 Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) 把同一删/留标准落到开源公司 harness：约 115 个补模型短板的组件细则过期后该删；原则、护栏与反馈推理、以及设计师拍板的品味 skill 留下，并用 `learn_from_job` 持续合入——与宝玉/Alex 同向，证据从剪辑个人实测扩到营销物料量产 harness。[^shao-meng-langchain-content-studio][^dotey-opus-55-agent-video-editing]

[Meng Shao relaying Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) lands the same keep/drop standard on an open company harness: ~115 component rules that patched model gaps should go after they stale; principles, guardrails, feedback reasoning, and designer-owned taste skills stay, with `learn_from_job` merging onward—same direction as Dotey/Alex, widening evidence from personal editing measurement to a production marketing-asset harness.[^shao-meng-langchain-content-studio][^dotey-opus-55-agent-video-editing]

[邵萌谈三套 Skills](../sources/articles/shao-meng-three-skills-top-ios.md) 与 Content Studio / Alex 同向强调品味层，但形态不同：前者是可公开安装的第三方动效/UI 规则包（外加设计库与框架官方包叠用），后者是公司内设计师反馈与专家重剪训练——都支撑「品味仍值得写」，并不互相取消；叠用三包时仍须守 Dex 的会话/注意力边界，勿把权重已有通识再塞进 skill。[^shao-meng-three-skills-top-ios][^shao-meng-langchain-content-studio][^dexhorthy-skills-session-context]

[Meng Shao on three Skills packs](../sources/articles/shao-meng-three-skills-top-ios.md) aligns with Content Studio / Alex on keeping a taste layer, but in a different shape: a publicly installable third-party motion/UI rules pack (stacked with a design library and framework-official packs) versus in-house designer feedback and expert re-cut training—both support “taste still repays writing” and do not cancel each other; when stacking the three packs, Dex’s session/attention bounds still apply—do not restuff weight-already-known generalities into skills.[^shao-meng-three-skills-top-ios][^shao-meng-langchain-content-studio][^dexhorthy-skills-session-context]

[向阳乔木](../sources/articles/vista8-dsh-landing-page-clone.md) 的 Landing 取舍与「有时不写/不默认 Skill」同向：承认前端 Skill 可用，但主张选站复刻更简单可靠——是另选路径，不是与品味 Skill 标本对打；与邵萌三套 Skills 复刻 iOS 的表面也不同，见 [Landing Page：选站复刻优于专用 Skill](./landing-page-site-clone-over-skill.md)。[^vista8-dsh-landing-page-clone][^shao-meng-three-skills-top-ios]

[vista8](../sources/articles/vista8-dsh-landing-page-clone.md)’s Landing tradeoff aligns with “sometimes don’t write / don’t default to a Skill”: frontend Skill is usable, but site-clone is simpler and more reliable—an alternate path, not a bake-off against taste-Skill specimens; also a different surface from Meng Shao’s three-pack iOS recreation—see [Landing Pages — clone a reference site over a dedicated Skill](./landing-page-site-clone-over-skill.md).[^vista8-dsh-landing-page-clone][^shao-meng-three-skills-top-ios]

[蓝哥AI](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) 的描述预算静默砍触发文，与 Dex「约 200 个独立 skills 同时活跃才换窗」同属「装太多」摩擦，但机制不同：一边是 Claude Code 描述预算约 1% 后触发描述被删，一边是会话注意力与是否须叠加——互补而非互否；治本仍落在关掉不用的 Skill（`skill-doctor`），与 Felix「有时删更好」同向。[^0xlangeai-claude-code-three-pitfalls][^dexhorthy-skills-session-context][^shao-meng-felix-not-2024-claude-usage]

[0xlangeai](../sources/articles/0xlangeai-claude-code-three-pitfalls.md)’s silent description-budget strip of trigger text and Dex’s “~200 separate skills active before a fresh window” are both “install too many” frictions with different mechanisms: Claude Code’s ~1% description budget cutting trigger text versus session attention and whether skills must stack—complementary, not canceling; the durable fix still lands on disabling unused Skills (`skill-doctor`), same direction as Felix’s “sometimes better after deletion.”[^0xlangeai-claude-code-three-pitfalls][^dexhorthy-skills-session-context][^shao-meng-felix-not-2024-claude-usage]

[宝玉](../sources/articles/dotey-baoyu-design-v2-opensource.md) 的 baoyu-design v2 与「一律写瘦 Skill」形成**品类对照**：官方指南/Vox 针对从单次跑通提炼的可删改 Skill；baoyu 则是 deliberately 大型的多 Skill 产品移植（本地编辑器 + 文件格式 + 导出），不应被误读为鼓励把任意工作流都写成同等体积——装整套仍可能触碰描述预算，宜按需只启用子 Skill。[^dotey-baoyu-design-v2-opensource][^voxyz-agent-skills-writing-rules][^0xlangeai-claude-code-three-pitfalls]

[Dotey](../sources/articles/dotey-baoyu-design-v2-opensource.md)’s baoyu-design v2 **contrasts by category** with “always write lean Skills”: official guide/Vox target distill-from-a-run, revisable Skills; baoyu is a deliberately large multi-skill product port (local editors + file formats + export)—not a license to inflate every workflow to that size—installing the whole bundle can still hit description budgets; enable sub-skills on demand.[^dotey-baoyu-design-v2-opensource][^voxyz-agent-skills-writing-rules][^0xlangeai-claude-code-three-pitfalls]

[baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md) README 把「按需只装子 Skill」写成一等安装路径（`--skill` / `--list`），与上句 operational 化一致，并展示 `references/` + `built-in-skills/` 分层而非单文件堆五套产品说明。[^jimliu-baoyu-design]

[baoyu-design open-source repository](../sources/articles/jimliu-baoyu-design.md) README makes partial installs a first-class path (`--skill` / `--list`), operationalizing that advice, and shows `references/` plus `built-in-skills/` layering instead of one file carrying five product manuals.[^jimliu-baoyu-design]

[蓝哥AI](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md) 转述 Ayi 用 Opus 5.5 约两小时、Skill 仓库 180+ Star；[情商外挂开源仓库](../sources/articles/ayi-qingshang-waigua.md) 正文只描述已发布的 `app.py`/`index.html` 产品与 `WHO`/`TONE`/`SYSTEM_PROMPT` 规则位，**未重复**构建模型、耗时或 Star——写 Skill→产品样板时应分清 **社区转述** 与 **作者仓库自述**，勿把转述数字写进 canonical Source。[^0xlangeai-qingshang-waigua-nvc-skill][^ayi-qingshang-waigua]

[0xlangeai](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md) relays Opus 5.5, ~two hours, and 180+ stars on the Skill repo; [qingshang-waigua open-source repository](../sources/articles/ayi-qingshang-waigua.md) only describes the shipped `app.py`/`index.html` product and `WHO`/`TONE`/`SYSTEM_PROMPT` rule slots—**not** build model, duration, or stars—when authoring Skill→product specimens, separate **community relay** from **author repo copy** and do not paste relay numbers into the canonical Source.[^0xlangeai-qingshang-waigua-nvc-skill][^ayi-qingshang-waigua]

## 相关 / Related

- 来源 / Source: [Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md)
- 来源 / Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- 来源 / Source: [Dex Horthy 谈同会话叠 Skills 与上下文污染](../sources/articles/dexhorthy-skills-session-context.md)
- 来源 / Source: [宝玉谈 Opus 5.5 后 Agent 剪辑像 Claude Code 刚出](../sources/articles/dotey-opus-55-agent-video-editing.md)
- 来源 / Source: [邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md)
- 来源 / Source: [邵萌谈三套 Skills 复刻顶级 iOS](../sources/articles/shao-meng-three-skills-top-ios.md)
- 来源 / Source: [向阳乔木谈用 DSH 插件复刻 Landing Page](../sources/articles/vista8-dsh-landing-page-clone.md)
- 来源 / Source: [蓝哥AI谈 Claude Code「变笨」三隐形坑](../sources/articles/0xlangeai-claude-code-three-pitfalls.md)
- 来源 / Source: [宝玉发布 baoyu-design v2 开源](../sources/articles/dotey-baoyu-design-v2-opensource.md)
- 来源 / Source: [baoyu-design 开源仓库](../sources/articles/jimliu-baoyu-design.md)
- 来源 / Source: [邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md)
- 来源 / Source: [MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md)
- 来源 / Source: [小墨谈 Grok Bot 从 0 到 1 长文](../sources/articles/xiaomovps-grok-bot-zero-to-one-guide.md)
- 来源 / Source: [小墨暴论 Grok Bot 是 Hermes Agent 上位替代](../sources/articles/xiaomovps-grok-bot-over-hermes-hot-take.md)
- 来源 / Source: [铁柱AGI谈任意 Agent 可指挥 Grok Bot](../sources/articles/cgnot996-any-agent-command-grok-bot.md)
- 来源 / Source: [蓝哥AI谈 Ayi 用 Opus 5.5 开源「情商外挂」](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md)
- 来源 / Source: [情商外挂开源仓库](../sources/articles/ayi-qingshang-waigua.md)
- 主题 / Topic: [Agent Skills open standard](./agent-skills-open-standard.md)
- 主题 / Topic: [用 Skills 组合复刻原生感 App](./skills-stack-native-app-recreation.md)
- 主题 / Topic: [Landing Page：选站复刻优于专用 Skill](./landing-page-site-clone-over-skill.md)
- 主题 / Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- 主题 / Topic: [高端 AI 订阅价值](./premium-ai-subscription-value.md)
- 主题 / Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)
- 主题 / Topic: [智能体视频剪辑](./agentic-video-editing.md)
- 主题 / Topic: [公司级 Agent Harness 五原语](./company-agent-harness.md)

[^voxyz-agent-skills-writing-rules]: Vox on Agent Skills writing rules
[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
[^dexhorthy-skills-session-context]: Dex Horthy on stacking skills in one session and context dirtying
[^dotey-opus-55-agent-video-editing]: Dotey on agent video editing after Opus 5.5
[^shao-meng-langchain-content-studio]: Meng Shao on four months of LangChain Content Studio
[^shao-meng-three-skills-top-ios]: Meng Shao on three Skills packs to recreate top iOS apps
[^vista8-dsh-landing-page-clone]: vista8 on cloning Landing Pages with a DSH plugin
[^0xlangeai-claude-code-three-pitfalls]: 蓝哥AI on three silent Claude Code pitfalls
[^dotey-baoyu-design-v2-opensource]: Dotey announces baoyu-design v2 open source
[^jimliu-baoyu-design]: baoyu-design open-source repository
[^shao-meng-minimax-mcode-stack]: Meng Shao on MiniMax open-sourcing the MCode Stack
[^minimax-mcode-stack]: MiniMax MCode Stack open-source repository
[^xiaomovps-grok-bot-zero-to-one-guide]: Xiaomo’s Grok Bot zero-to-one guide
[^xiaomovps-grok-bot-over-hermes-hot-take]: Xiaomo’s hot take that Grok Bot supersedes Hermes Agent
[^cgnot996-any-agent-command-grok-bot]: cgnot996 on any agent commanding Grok Bot
[^0xlangeai-qingshang-waigua-nvc-skill]: 0xlangeai on Ayi’s Opus 5.5 open-source EQ plug-in from an NVC Skill
[^ayi-qingshang-waigua]: qingshang-waigua open-source repository
