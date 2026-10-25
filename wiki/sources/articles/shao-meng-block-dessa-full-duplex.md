---
type: Source
title: 邵萌谈 Block Dessa 纯语音全双工
title_en: Meng Shao on Block Dessa—pure-speech full-duplex
description: 邵萌转述 Jack 创办的 Block 发布 Dessa：纯人类语音训练的 speech-to-speech 全双工模型，听得见情绪，可在 MacBook Pro M4 Max 及以上本地实时跑；动机含「听不见痛苦还继续聊」的安全风险。
description_en: meng shao relays that Jack’s Block shipped Dessa—a speech-to-speech full-duplex model trained only on human voice that hears emotion and runs locally in real time on MacBook Pro M4 Max and up; motives include the safety risk of chatting on while deaf to pain.
resource: https://x.com/shao__meng/status/2114217554948333812
tags: [dessa, block, speech-to-speech, full-duplex, voice, emotion, shao-meng, jack]
sources:
  - id: shao-meng-block-dessa-full-duplex
    resource: https://x.com/shao__meng/status/2114217554948333812
    title: Meng Shao on Block Dessa—pure-speech full-duplex
    author: human:shao__meng
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:14:00+08:00
date: 2026-10-25
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 邵萌谈 Block Dessa 纯语音全双工

*Meng Shao on Block Dessa—pure-speech full-duplex*

[@shao__meng](https://x.com/shao__meng) 转述 Twitter 联创 Jack 创办的 Block 发布 Dessa：小团队从零用纯人类语音训练的 speech-to-speech 全双工模型——无文本、无预训练底座，边听边说，声称推理快于实时，可在 MacBook Pro M4 Max 及以上本地跑；动机是自然交互、理解情绪，以及「听不见痛苦还继续聊」的安全风险。[^shao-meng-block-dessa-full-duplex] 帖文见 <https://x.com/shao__meng/status/2114217554948333812>；产品页 <https://block.xyz/dessa>；并引用 [@jack](https://x.com/jack) 原帖 <https://x.com/jack/status/2113697902916751661>。

[@shao__meng](https://x.com/shao__meng) relays that Block, founded by Twitter co-founder Jack, shipped Dessa: a small-team speech-to-speech full-duplex model trained from scratch on pure human voice—no text, no pretrained base—listen-and-speak at once, claimed faster-than-real-time inference, runnable locally on MacBook Pro M4 Max and up; motives are natural interaction, understanding emotion, and the safety risk of chatting on while deaf to pain.[^shao-meng-block-dessa-full-duplex] Post: <https://x.com/shao__meng/status/2114217554948333812>; product: <https://block.xyz/dessa>; quotes [@jack](https://x.com/jack) at <https://x.com/jack/status/2113697902916751661>.

## 摘要 / Summary

- 定位：据称目前首个仅从人类语音学会真实实时对话的 AI；交互目标是带情绪、停顿、自然节奏，像跟人说话。技术形态为音频进、音频出、全双工；会插话与 backchannel（yeah / got it / ooh）；音色与个性由模型自选；演示为真人与 Dessa 的现场录音（字幕后加），无人实时操控。[^shao-meng-block-dessa-full-duplex]
- Positioning: claimed as the first AI that learned real-time conversation from human speech alone; interaction aims for emotion, pauses, and natural cadence like talking to a person. Form is audio-in/audio-out full-duplex; it interrupts and backchannels (yeah / got it / ooh); voice and personality are model-chosen; demos are live recordings of a person with Dessa (subtitles added later), with no human puppeteering in real time.[^shao-meng-block-dessa-full-duplex]
- 演示侧重：句中即笑、被要求大声就变大、接上对方想不起的电影名、惊喜时压低嗓音「oh my god」、共情式建议，甚至与第三方 GPT-Live-1 互聊（双方均为 AI 声，GPT-Live-1 开发方与 Block 无关）。[^shao-meng-block-dessa-full-duplex]
- Demo focus: laughing mid-sentence, getting louder when asked, filling in a forgotten movie title, dropping to “oh my god” in surprise, empathic advice, and even chatting with third-party GPT-Live-1 (both AI voices; GPT-Live-1’s maker is unrelated to Block).[^shao-meng-block-dessa-full-duplex]
- 为何不做「语音→文本→LLM」：现行语音 AI 常把声音压成文字，丢掉语气、讽刺、叹息、哽咽等文本带不走的信息；最强模型也「听不见你怎么感觉」。团队认为这既损体验，也有安全隐患——人在剧痛时系统毫无察觉仍继续应答。[^shao-meng-block-dessa-full-duplex]
- Why not voice→text→LLM: common voice AI crushes sound into text and loses tone, sarcasm, sighs, catch-in-throat, and other cues text cannot carry; even the strongest models “cannot hear how you feel.” The team sees both a UX loss and a safety hazard—keeping answering while someone is in severe pain with no awareness.[^shao-meng-block-dessa-full-duplex]
- 训练与算力：从零、只靠对话声音学习；相对 LLM，用的「词量」少数百倍（文中亦写 LLM 还要学 C++、Angular 等）。难点含口音、停顿、呼吸、讽刺、重音改变语义、语音几乎永不重复、一词字节量远高于文本；声称整模型在一台 NVIDIA GB200 NVL72 上训成。[^shao-meng-block-dessa-full-duplex]
- Training and compute: learned from scratch on conversational audio only; relative to LLMs, “word count” is said to be a few hundred times smaller (the piece also notes LLMs still learn C++, Angular, etc.). Hard parts include accent, pause, breath, sarcasm, stress that flips meaning, near-never-repeating speech, and far more bytes per word than text; the whole model is claimed trained on one NVIDIA GB200 NVL72.[^shao-meng-block-dessa-full-duplex]
- 为何做（Wait but why）：好奇婴儿不识字也能学说话，模型能否同样；语音是最自然界面，现有方案浪费它；能力与自主性上升时对情绪几乎「耳聋」是风险，Dessa 是朝「听得见情绪」迈的一步。Jack 原帖：相信语音是与智能交互最自然的方式，Dessa 是迄今最真实的全双工语音模型，交谈像跟人说话——充满情绪、细微差别、停顿与自然节奏。[^shao-meng-block-dessa-full-duplex]
- Why (Wait but why): curiosity whether a model can learn speech as infants do without literacy; voice is the most natural interface and current stacks waste it; as capability and autonomy rise, being nearly “deaf” to emotion is a risk, and Dessa is a step toward hearing emotion. Jack’s post: voice is the most natural way to interact with intelligence; Dessa is the most authentic full-duplex speech model built, feeling like talking with a person—full of emotion, nuance, pauses, and natural cadence.[^shao-meng-block-dessa-full-duplex]

## 相关 / Related

- Topic: [纯语音全双工与情绪可听](../../topics/pure-speech-full-duplex.md)

[^shao-meng-block-dessa-full-duplex]: Meng Shao on Block Dessa—pure-speech full-duplex
