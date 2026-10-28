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
generated:
  by: cursor-agent/composer
  at: 2026-10-28T22:45:00+08:00
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

[向阳乔木谈用 DSH 插件复刻 Landing Page](../sources/articles/vista8-dsh-landing-page-clone.md) 从 Web Landing 表面补「不必默认上 Skill」：前端 Skill「可以」，但更简单可靠是选优质站复刻，经 DSH 插件 `qiaomu-ui-learn-dsh` 把提示词交给 Agent——与 Felix「有时删/慎用 Skill」同向，但落地是参照站驱动路径而非删掉已有 skill；产品切面见 [Landing Page：选站复刻优于专用 Skill](./landing-page-site-clone-over-skill.md)。[^vista8-dsh-landing-page-clone] 原帖 <https://x.com/vista8/status/2115293920955605424>。

[vista8 on cloning Landing Pages with a DSH plugin](../sources/articles/vista8-dsh-landing-page-clone.md) adds a web-Landing cut of “don’t default to a Skill”: a frontend Skill “can work,” but picking a quality site to clone is simpler and more reliable, via DSH plugin `qiaomu-ui-learn-dsh` with the prompt copied to an Agent—same direction as Felix’s “sometimes delete / use Skills carefully,” but landing as a reference-site path rather than deleting an existing skill; product cut under [Landing Pages — clone a reference site over a dedicated Skill](./landing-page-site-clone-over-skill.md).[^vista8-dsh-landing-page-clone] Post: <https://x.com/vista8/status/2115293920955605424>.

[蓝哥AI谈 Claude Code「变笨」三隐形坑](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) 从 Claude Code 描述预算侧补「装太多」的静默失败：描述预算只占上下文约 1%，超限会自动砍掉低频 Skill 的触发描述、只留名字，表现为失忆；治本是跑 `skill-doctor` 关掉不用的 Skill——与 Vox「精瘦 description」同向，并把失败从「写得太胖」扩到「总数触碰预算后触发文本被静默删掉」。[^0xlangeai-claude-code-three-pitfalls] 原帖 <https://x.com/0xlangeai/status/2115300040701096272>。指令文件加载与订阅凭据另见 [项目指令与 Token 效率](./agents-md-token-efficiency.md) 与 [高端 AI 订阅价值](./premium-ai-subscription-value.md)。

[0xlangeai on three silent Claude Code pitfalls](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) adds a Claude Code description-budget cut of “install too many”: the description budget is only about 1% of context; over limit, low-frequency Skills lose trigger descriptions and keep only names—looking like amnesia; the real fix is running `skill-doctor` to disable unused Skills—same direction as Vox’s lean descriptions, widening failure from “wrote too fat” to “count hits the budget and trigger text is silently stripped.”[^0xlangeai-claude-code-three-pitfalls] Post: <https://x.com/0xlangeai/status/2115300040701096272>. Instruction-file loading and subscription credentials: [Project instructions and token efficiency](./agents-md-token-efficiency.md) and [Premium AI subscription value](./premium-ai-subscription-value.md).

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

## 相关 / Related

- 来源 / Source: [Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md)
- 来源 / Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- 来源 / Source: [Dex Horthy 谈同会话叠 Skills 与上下文污染](../sources/articles/dexhorthy-skills-session-context.md)
- 来源 / Source: [宝玉谈 Opus 5.5 后 Agent 剪辑像 Claude Code 刚出](../sources/articles/dotey-opus-55-agent-video-editing.md)
- 来源 / Source: [邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md)
- 来源 / Source: [邵萌谈三套 Skills 复刻顶级 iOS](../sources/articles/shao-meng-three-skills-top-ios.md)
- 来源 / Source: [向阳乔木谈用 DSH 插件复刻 Landing Page](../sources/articles/vista8-dsh-landing-page-clone.md)
- 来源 / Source: [蓝哥AI谈 Claude Code「变笨」三隐形坑](../sources/articles/0xlangeai-claude-code-three-pitfalls.md)
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
