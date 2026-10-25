---
type: Topic
title: 纯语音全双工与情绪可听
title_en: Pure-speech full-duplex and audible emotion
description: 仅从人类语音训练的 speech-to-speech 全双工模型，可保留语气与情绪线索，避免「语音→文本→LLM」压掉非文本信息；并被框成能力上升时「听不见痛苦还继续聊」的安全补丁。
description_en: Speech-to-speech full-duplex models trained only on human voice can keep tone and emotion cues that voice→text→LLM stacks crush; they are also framed as a safety step against chatting on while deaf to pain as capability rises.
tags: [speech-to-speech, full-duplex, voice, emotion, dessa, block, safety]
sources:
  - id: shao-meng-block-dessa-full-duplex
    resource: https://x.com/shao__meng/status/2114217554948333812
    title: Meng Shao on Block Dessa—pure-speech full-duplex
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:14:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 纯语音全双工与情绪可听

*Pure-speech full-duplex and audible emotion*

把声音压成文字再喂给 LLM，会丢掉语气、讽刺、叹息、哽咽等文本带不走的信息；纯语音进、纯语音出的全双工模型被提出作为替代——边听边说、带情绪与自然节奏，并明确把「听不见你怎么感觉」写成体验与安全双重缺口。[^shao-meng-block-dessa-full-duplex]

Crushing voice into text before an LLM drops tone, sarcasm, sighs, catch-in-throat, and other cues text cannot carry; pure audio-in/audio-out full-duplex models are offered as an alternative—listen-and-speak with emotion and natural cadence—and frame “cannot hear how you feel” as both a UX and a safety gap.[^shao-meng-block-dessa-full-duplex]

## 综合分析 / Synthesis

[邵萌谈 Block Dessa 纯语音全双工](../sources/articles/shao-meng-block-dessa-full-duplex.md) 转述 Block（Jack 创办）发布的 Dessa：小团队从零、只用人类对话声音训练，无文本、无预训练底座；全双工、可插话与 backchannel；声称推理快于实时，可在 MacBook Pro M4 Max 及以上本地跑；整模型据称在一台 NVIDIA GB200 NVL72 上训成。[^shao-meng-block-dessa-full-duplex] 原帖 <https://x.com/shao__meng/status/2114217554948333812>；产品页 <https://block.xyz/dessa>；Jack 原帖 <https://x.com/jack/status/2113697902916751661>。

[Meng Shao on Block Dessa—pure-speech full-duplex](../sources/articles/shao-meng-block-dessa-full-duplex.md) relays Block’s (Jack’s) Dessa: a small team trained from scratch on human conversational audio only—no text, no pretrained base; full-duplex with interruption and backchannel; claimed faster-than-real-time inference, local on MacBook Pro M4 Max and up; the whole model said to be trained on one NVIDIA GB200 NVL72.[^shao-meng-block-dessa-full-duplex] Post: <https://x.com/shao__meng/status/2114217554948333812>; product: <https://block.xyz/dessa>; Jack: <https://x.com/jack/status/2113697902916751661>.

论点分三层：（1）交互——目标是像人一样带情绪、停顿与节奏，而不是管道式 ASR→LLM→TTS；（2）训练叙事——相对 LLM「词量」少数百倍，但语音几乎永不重复、重音可改语义、字节量远高于文本；（3）安全——能力与自主性上升时对情绪「耳聋」是风险，人在剧痛时系统仍继续应答；Dessa 被写成朝「听得见情绪」迈的一步，而非通用对齐方案。本页只收录该产品叙事下的纯语音全双工主张，不把 Jack 的营销表述当成已验证基准。

Three layers of claim: (1) interaction—aim for human-like emotion, pause, and cadence rather than a pipelined ASR→LLM→TTS stack; (2) training narrative—“word count” a few hundred times smaller than LLMs, yet speech almost never repeats, stress can flip meaning, and bytes per word dwarf text; (3) safety—as capability and autonomy rise, being “deaf” to emotion is a risk, and systems that keep answering through severe pain are the hazard; Dessa is cast as a step toward hearing emotion, not a general alignment fix. This page records the pure-speech full-duplex claim under that product narrative and does not treat Jack’s marketing as a verified benchmark.

站内 [技术滥用关切的连续性](./tech-misuse-concern-continuity.md) 谈的是个人对战争/AI 滥用关切的时间线；本页谈的是交互栈是否保留可听情绪线索及其安全动机，证据与论点都不重叠。[个人 Agent 热潮与 Coding Agent 熟悉度差](./personal-agent-hype-familiarity-gap.md) 谈产品热潮体感，亦不覆盖 speech-to-speech 技术路径。

In-wiki [Continuity of technology-misuse concern](./tech-misuse-concern-continuity.md) tracks personal continuity of war/AI-misuse concern; this page is about whether the interaction stack keeps audible emotion cues and the safety motive for that—different evidence and claim. [Personal-agent hype vs coding-agent familiarity](./personal-agent-hype-familiarity-gap.md) covers craze reception, not the speech-to-speech path.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [邵萌谈 Block Dessa 纯语音全双工](../sources/articles/shao-meng-block-dessa-full-duplex.md)
- Topic: [技术滥用关切的连续性](./tech-misuse-concern-continuity.md)
- Topic: [个人 Agent 热潮与 Coding Agent 熟悉度差](./personal-agent-hype-familiarity-gap.md)

[^shao-meng-block-dessa-full-duplex]: Meng Shao on Block Dessa—pure-speech full-duplex
