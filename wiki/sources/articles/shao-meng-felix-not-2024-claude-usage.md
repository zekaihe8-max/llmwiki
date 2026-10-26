---
type: Source
title: 邵萌转述 Felix：别再用 2024 方式用 Claude
title_en: Meng Shao relays Felix—stop using Claude the 2024 way
description: 邵萌转述 Felix Rieseberg 访谈：少当传话筒，给全量数据与工具；少堆角色 Agent；用对抗评审与外部证据约束输出；Skills 慎用、半衰期短。
description_en: meng shao relays Felix Rieseberg’s interview—stop being a messenger, give full data and tools; skip stacking role Agents; constrain outputs with adversarial review and external evidence; use Skills sparingly given short half-life.
resource: https://x.com/shao__meng/status/2113970197161988276
tags: [claude, felix-rieseberg, agents, skills, adversarial-review, shao-meng, anthropic]
sources:
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
    author: human:shao__meng
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:10:00+08:00
date: 2026-10-25
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 邵萌转述 Felix：别再用 2024 方式用 Claude

*Meng Shao relays Felix—stop using Claude the 2024 way*

[@shao__meng](https://x.com/shao__meng) 转述 [@felixrieseberg](https://x.com/felixrieseberg) 接受 [@siliconvalleymm](https://x.com/siliconvalleymm) 的访谈（观点与其文章一致）：核心不是再造更多角色 Agent，而是把崩溃数据、业务工具与电脑交给模型，用对抗评审与外部证据约束输出，并从「人当传送带」升级为「模型自己挑问题、自己用工具」。[^shao-meng-felix-not-2024-claude-usage] 帖文见 <https://x.com/shao__meng/status/2113970197161988276>；访谈视频 <https://www.youtube.com/watch?v=D-SVFneJ_Nk>。

[@shao__meng](https://x.com/shao__meng) relays [@felixrieseberg](https://x.com/felixrieseberg)’s interview with [@siliconvalleymm](https://x.com/siliconvalleymm) (aligned with his article): the point is not more role-play Agents, but handing crash data, business tools, and a computer to the model, constraining outputs with adversarial review and external evidence, and upgrading from “human as conveyor belt” to “the model picks problems and uses tools itself.”[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>; video: <https://www.youtube.com/watch?v=D-SVFneJ_Nk>.

## 摘要 / Summary

- Felix 现任 Claude 工程负责人，自称「Claude 的传送带」；团队约一周半做出 Claude Cowork。过去是挑一条崩溃丢给模型修；正确做法是让模型直接摸全部崩溃数据，自己决定修什么、不修什么。早晨有 agent 简报；日常多在原型——睡几天掂量想法 → 让 Claude 做多版 → 人做 critique；能做一千个原型，人一天大概只能认真看一个；好产品信号是少数人上手就「点亮」、能做以前做不到的事，按钮宜少不宜多。[^shao-meng-felix-not-2024-claude-usage]
- Felix is Claude engineering lead and calls himself “Claude’s conveyor belt”; the team shipped Claude Cowork in about a week and a half. The old habit was picking one crash for the model to fix; the right move is letting the model see all crash data and decide what to fix or skip. Mornings start with an agent briefing; days are mostly prototypes—sit on an idea for a few days → have Claude make many versions → humans critique; you can make a thousand prototypes, but a person can seriously review about one a day; a good product signal is a few people lighting up on first use and doing what they could not before, with few buttons.[^shao-meng-felix-not-2024-claude-usage]
- 自动化砍烦人、贵、耗时的活，眼下经济价值最清楚；他更在意增强——补技能/方法/知识，让人做成以前做不到的事。真正拉开差距的往往是改工作流与定义好坏，而不只是工具本身。评「好」时过程与可验证性优先于「看起来对」（天气瞎猜碰巧对 = 不及格；差半度但路径靠谱更好）；写作应学优秀作者流程（放大论点、找最强反驳），而不是「Claude 把这段写好」；动效/3D 的 Unlock 常是让 Claude 用专业人士同款工具（如 Blender）。[^shao-meng-felix-not-2024-claude-usage]
- Automation cuts annoying, expensive, slow work and has the clearest near-term economic value; he cares more about augmentation—adding skill, method, and knowledge so people do what they could not before. What often separates outcomes is changing workflows and definitions of quality, not only the tool. Judging “good” favors process and verifiability over “looks right” (lucky weather guesses fail; being half a degree off with a sound path is better); writing should follow strong-author process (amplify the thesis, find the strongest rebuttal), not “Claude, write this better”; unlocks in motion/3D often mean giving Claude the same tools pros use (e.g. Blender).[^shao-meng-felix-not-2024-claude-usage]
- 防幻觉实用招：同一产出开多条线程专攻「证明你错了」（事实、逻辑、误解），再开一条做 judge 筛哪些批评成立；成立的反馈可回原会话。找茬往往比创造容易，对抗侧有时可用略弱模型。自己完全不懂好坏 → 多砸 token/多轮 AI；自己能当「甲方」判观感 → 观感即可。更不信同一会话自评当法官；尽量找外部信号（另一会话、真实指标）。事实核查一类他敢信单线程（找一手来源、验来源质量）。也可在 Slack/GitHub 等处给工具权限，让模型汇集反馈 → 压成原则 → 再挖「你以为信、实际未必信」的原则。[^shao-meng-felix-not-2024-claude-usage]
- Practical anti-hallucination move: for one artifact, open threads whose job is “prove you wrong” (facts, logic, misunderstanding), then a judge thread that keeps only valid critiques; feed those back to the original session. Critique is often easier than creation, so the adversarial side can use a slightly weaker model. When you cannot judge quality at all → spend more tokens / more AI rounds; when you can act as the client on feel → feel is enough. He distrusts the same session judging its own work; prefer external signals (another session, real metrics). For fact-checking he trusts a single thread that finds primary sources and checks source quality. He also grants tool access in Slack/GitHub so the model gathers feedback → compresses principles → digs for principles you think you believe but may not.[^shao-meng-felix-not-2024-claude-usage]
- 行业对「Agent 角色扮演」过转；模型是强通才，硬套「你是数据科学家」常限制用法，他多数任务不设人设。与其给每个 agent 切一小片数据，不如给全景业务视图 + 文档清楚的工具（需要业务数据就调业务工具，不必整库灌进上下文）。Skills：官方与他个人都劝慎用；半衰期极短，有时删掉 skill 输出更好；上一世代模型的规矩常会绑住新模型。换位成「模型体验」：你会要原始数据、一台电脑、装软件的权限、少被别人先下结论，而不是只听人转述。[^shao-meng-felix-not-2024-claude-usage]
- The industry over-rotated on Agent role-play; models are strong generalists, and forcing “you are a data scientist” often limits use—he skips personas on most tasks. Prefer a panoramic business view plus well-documented tools over slicing a small data shard per agent (call a business tool when you need data; do not dump the whole DB into context). On Skills: official guidance and his own advice say be careful; half-life is very short, deleting a skill sometimes improves output, and rules from a prior model generation often bind the next. From the model’s seat you would want raw data, a computer, install rights, and fewer pre-conclusions—not only human paraphrase.[^shao-meng-felix-not-2024-claude-usage]
- 一人/两人团队做大公司更可行，但秘诀仍是共情与真价值。会消失的是「勉强凑合」的烂软件；真正好用的产品多数人仍不会自己想出来。能力过剩（capability overhang）：顶尖智能 vs 多数人还在问「法国首都是哪」；个人层少做「帮我润色邮件」，多把真正想要的结果交给模型直到撞上当前天花板，才吃得到下一代模型红利。工程师价值看用户是否愿为结果付钱，不是背完整 React API；招人看做过什么、是否在赢的团队上。五年后形态会大变；他自己的建议也可能十周后就要改一版。[^shao-meng-felix-not-2024-claude-usage]
- One- or two-person teams doing large-company work is more feasible, but the secret is still empathy and real value. What vanishes is barely-tolerable software people had no choice about; most people still will not invent truly great products themselves. Capability overhang: frontier intelligence versus people still asking what the capital of France is; at the personal layer, skip “polish this email” and hand the model the outcome you actually want until you hit today’s ceiling—that is how you capture the next model’s upside. Engineer value is whether users pay for outcomes, not memorizing the full React API; hiring favors what people shipped and whether they were on winning teams. In five years product shape will change a lot; his own advice may need a rewrite in ten weeks.[^shao-meng-felix-not-2024-claude-usage]

## 相关 / Related

- Topic: [对抗评审与外部证据](../../topics/adversarial-review-external-evidence.md)
- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)
- Topic: [智能体规模化工程](../../topics/agent-scaled-engineering.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)

[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
