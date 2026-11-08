# rea-video

[#rea-video](#rea-video)

Reverse-engineer any video.

Shot by shot: was it filmed, AI-generated or coded, and how to remake it.

[中文](/JuneYaooo/rea-video/blob/main/i18n/README_zh.md) | English | [Русский](/JuneYaooo/rea-video/blob/main/i18n/README_ru.md) | [日本語](/JuneYaooo/rea-video/blob/main/i18n/README_ja.md) | [한국어](/JuneYaooo/rea-video/blob/main/i18n/README_ko.md) | [Español](/JuneYaooo/rea-video/blob/main/i18n/README_es.md) | [Português](/JuneYaooo/rea-video/blob/main/i18n/README_pt.md) | [Français](/JuneYaooo/rea-video/blob/main/i18n/README_fr.md) | [Deutsch](/JuneYaooo/rea-video/blob/main/i18n/README_de.md)

[https://github.com/JuneYaooo/rea-video/stargazers](https://github.com/JuneYaooo/rea-video/stargazers)
[https://camo.githubusercontent.com/88633392db3277f0a73eee507421bda0431efa8b5c544862bd87e5c787343569/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d254532253839254135332e31302d626c7565](https://camo.githubusercontent.com/88633392db3277f0a73eee507421bda0431efa8b5c544862bd87e5c787343569/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d254532253839254135332e31302d626c7565)
[https://camo.githubusercontent.com/89c2807ce58c247e90edefb5933687837ad65e6c98157d2829f660be4ccf3d1d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72756e73253230696e2d436c61756465253230436f6465253230253743253230436f6465782d384132424532](https://camo.githubusercontent.com/89c2807ce58c247e90edefb5933687837ad65e6c98157d2829f660be4ccf3d1d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72756e73253230696e2d436c61756465253230436f6465253230253743253230436f6465782d384132424532)

[https://discord.gg/dZj8D3GqWT](https://discord.gg/dZj8D3GqWT) [https://x.com/yao_june12106](https://x.com/yao_june12106)

⭐ Help more people find rea-video. Star this repo!

[/JuneYaooo/rea-video/blob/main/docs/cases/demo.gif](/JuneYaooo/rea-video/blob/main/docs/cases/demo.gif)

Left: a TikTok ad shot on a phone. Right: an AI remake with another product. rea-video's verdict: the left is all live footage, one set and two camera positions; the right is all AI, 8 shots across 3 generations.

## Quick start

[#quick-start](#quick-start)

rea-video is built for AI agents. In Claude Code, Codex or any agent that can run commands, say:

```
Install https://github.com/JuneYaooo/rea-video, then break down this video: /path/to/video.mp4
```

The agent installs the CLI, learns the workflow and runs the whole thing. You need ffmpeg and Python 3.10+.

Install by hand

```
brew install ffmpeg            <span class="pl-c"><span class="pl-c">#</span> or: sudo apt install ffmpeg</span>
git clone https://github.com/JuneYaooo/rea-video <span class="pl-k">&&</span> <span class="pl-c1">cd</span> rea-video
bash scripts/install_skill.sh  <span class="pl-c"><span class="pl-c">#</span> installs the CLI (pip, or pipx / a local .venv if pip is blocked) and links the skill into ~/.claude, ~/.codex, ~/.agents</span>
rea-video --help
```

You get:

- a one-line summary, e.g. "41% AI video + 59% code UI, 8 s of real screen recording, library music at 122 BPM"

- a remake plan, split into what to film, what to generate and what to code

- a full report.html with per-shot frames, evidence, prompts, camera and lighting notes, and the audio breakdown

You can also hook up a video-capable model (Gemini or Doubao both work) by giving the agent its endpoint and key. That makes the live/AI/3D calls more accurate and adds a reverse-engineered prompt for every shot. It works fine without one; if your agent can see images, it checks the uncertain shots itself.

>

Reports are written in whichever language you ask in (Chinese or English). The example reports below are in English.

## What it can break down

[#what-it-can-break-down](#what-it-can-break-down)

Video type
Examples
What you get

Live footage

Talking-head, tabletop, handheld product demo, vlog, store visit

Setups and camera positions, framing, camera moves, lighting (12 setups with gear lists), color grade

AI video

Text/image-to-video, AI short drama, AI music video

Evidence, a reverse-engineered prompt per shot, how to batch into generations and which model to use

Avatar

A portrait driven by audio, lip-sync

Which shots are avatar shots, what portrait and audio you need

3D / animation

Blender / C4D explainers, product animation, 2D animation, stop-motion

Whether to generate with a video model or render from 3D code

Code / template

Kinetic type, UI demos, charts, slide-style cards

Text, layout and motion timing, ready to rebuild as a Remotion project

Screen recording

Software tutorials, web demos

Which parts are real material you'll need to record yourself

Mixed / edits

AI characters + code UI + real screen capture; live footage with AI edits

Each shot judged separately, then reassembled on the original timeline

Besides how the visuals were made, every breakdown also covers:

- Captions and styled text: start and end of each line (exports to SRT / ASS), plus color, outline and how the text comes in

- Stickers, emoji, picture-in-picture: where they sit and how long they stay

- Editing: where the cuts are, how fast, whether they hit the beat

- Audio: human or AI voice, AI or library music and its BPM, where each sound effect lands

- Material you'll need to supply yourself: screen recordings, screenshots, product photos

## Examples

[#examples](#examples)

The sample videos in docs/cases/videos/ are re-compressed to keep the repo small, which strips the TikTok / Douyin platform tags. So if you run them yourself, you'll get different results from the reports below, especially without a vision model. To reproduce them, use the original downloads from the platform.

[/JuneYaooo/rea-video/blob/main/docs/cases.md#2-混合片ai-人物对话--代码界面--真实录屏](/JuneYaooo/rea-video/blob/main/docs/cases.md#2-混合片ai-人物对话--代码界面--真实录屏)

Mixed-media clip · 19 s · 10 shots

AI characters talking + code-built UI + 8 s of real screen recording. The 5 dialogue shots are broken up by UI segments but share one set, so a single generation covers all of them.

[Video](/JuneYaooo/rea-video/blob/main/docs/cases/videos/dual_role.mp4) · [Report](/JuneYaooo/rea-video/blob/main/docs/cases/dual_role/report_en.md)

[/JuneYaooo/rea-video/blob/main/docs/cases.md#3-3d-科普片咸鸭蛋为什么会流油](/JuneYaooo/rea-video/blob/main/docs/cases.md#3-3d-科普片咸鸭蛋为什么会流油)

3D explainer · 67 s · 21 shots

All 3D, AI narration. You can do it in 10 video generations, or have an LLM write Blender / Three.js code.

[Video](/JuneYaooo/rea-video/blob/main/docs/cases/videos/salted_egg.mp4) · [Report](/JuneYaooo/rea-video/blob/main/docs/cases/salted_egg/report_en.md)

[/JuneYaooo/rea-video/blob/main/docs/cases.md#4-代码-ui-动效产品宣传片](/JuneYaooo/rea-video/blob/main/docs/cases.md#4-代码-ui-动效产品宣传片)

Product promo · 70 s · 12 shots

83% code-driven motion graphics, 12% screen recording. No video model needed; one Remotion project does it.

[Video](/JuneYaooo/rea-video/blob/main/docs/cases/videos/v10_oiioii_gen_coding_first.mp4) · [Report](/JuneYaooo/rea-video/blob/main/docs/cases/v10/report_en.md)

[/JuneYaooo/rea-video/blob/main/docs/cases.md#5-ai-音乐-mv歌是-ai-写的还是曲库的](/JuneYaooo/rea-video/blob/main/docs/cases.md#5-ai-音乐-mv歌是-ai-写的还是曲库的)

AI music video · 165 s · 86 shots

Correctly flags the song as AI-generated (it was made with Suno). The vision model called some shots "live-action drama"; the agent spotted fake Chinese characters on a scroll and ruled them AI.

[Video](/JuneYaooo/rea-video/blob/main/docs/cases/videos/qing_mv.mp4) · [Report](/JuneYaooo/rea-video/blob/main/docs/cases/qing_mv/report_en.md)

[/JuneYaooo/rea-video/blob/main/docs/cases.md#6-实拍带货沉浸式开箱](/JuneYaooo/rea-video/blob/main/docs/cases.md#6-实拍带货沉浸式开箱)

Live-action unboxing · 72 s · 29 shots

All real footage: an overhead phone rig, one rug, one camera position, no voice-over, room sound plus library BGM. After platform transcoding, the offline tools called 35% of it AI; after agent review it came out 97% live-action.

[Video](/JuneYaooo/rea-video/blob/main/docs/cases/videos/unboxing.mp4) · [Report](/JuneYaooo/rea-video/blob/main/docs/cases/unboxing/report_en.md)

[/JuneYaooo/rea-video/blob/main/docs/cases.md#7-ai-与真人混合用自己的出镜视频生成带货片](/JuneYaooo/rea-video/blob/main/docs/cases.md#7-ai-与真人混合用自己的出镜视频生成带货片)

AI + real person hybrid · 58 s · 21 shots

75% real (talking head + filming a phone screen) and 25% AI: the creator fed her own on-camera clip and two product photos to Jimeng to generate a "real-person" product segment. The AI part gave itself away with the Jimeng watermark and garbled text on the gift box.

[Video](/JuneYaooo/rea-video/blob/main/docs/cases/videos/ai_daihuo.mp4) · [Report](/JuneYaooo/rea-video/blob/main/docs/cases/ai_daihuo/report_en.md)

## Remakes

[#remakes](#remakes)

After rea-video breaks a video down, the remake recipe in [capsule-cinema](https://github.com/JuneYaooo/capsule-cinema) generates a new version that keeps the original's camera, motion, pacing and transitions and swaps only the elements you pick.
These were made with a self-hosted MiniMax H3, using the original shot as the motion reference and keyframes with the swapped elements (gpt-image-2) for the look.
Below are three remakes OiiOii showed in its WeChat articles. We made two versions of each: one with the same swap as OiiOii, and one that also swaps the subject, setting and props.
Each GIF plays four versions in sync: the original, OiiOii's remake, our remake and the element-swap version.

Overhead outfit change · 12 s

Same swap: woman → man, three outfits → matching menswear. Element swap: a girl in three historical Hanfu outfits in a Chinese study; the remote becomes a round fan.

[/JuneYaooo/rea-video/blob/main/docs/cases/remake/outfit.gif](/JuneYaooo/rea-video/blob/main/docs/cases/remake/outfit.gif)

[HD comparison video (with audio)](/JuneYaooo/rea-video/blob/main/docs/cases/remake/outfit_compare.mp4) · [same-moment stills](/JuneYaooo/rea-video/blob/main/docs/cases/remake/outfit_sheet.jpg)

Paper-craft / watercolor animation · 30 s

Same swap: new clay girl as the lead. Element swap: a fox; forest → coral reef, clouds → starry sky, sunset → aurora.

[/JuneYaooo/rea-video/blob/main/docs/cases/remake/paper.gif](/JuneYaooo/rea-video/blob/main/docs/cases/remake/paper.gif)

[HD comparison video (with audio)](/JuneYaooo/rea-video/blob/main/docs/cases/remake/paper_compare.mp4) · [same-moment stills](/JuneYaooo/rea-video/blob/main/docs/cases/remake/paper_sheet.jpg)

Handheld product video · 21 s · 11 shots

Same swap: an original new product, English sticker → Chinese caption. Element swap: pink product, kitchen → camping table, new ingredients.

[/JuneYaooo/rea-video/blob/main/docs/cases/remake/juicer.gif](/JuneYaooo/rea-video/blob/main/docs/cases/remake/juicer.gif)

[HD comparison video (with audio)](/JuneYaooo/rea-video/blob/main/docs/cases/remake/juicer_compare.mp4) · [same-moment stills](/JuneYaooo/rea-video/blob/main/docs/cases/remake/juicer_sheet.jpg)

The HD comparison videos use the original audio. The originals and OiiOii versions come from the articles and are shown for comparison only.

## Accuracy

[#accuracy](#accuracy)

Accuracy of the how-it-was-made call, weighted by shot duration:

Tuning set (15)
Holdout (16)
Re-encoded WeChat videos (10)

Tools only (offline, free)

98.3%

99.6% / 98.9%

88.6%

+ vision model (Gemini)

—

99.6% / 99.8%

99.6%

+ agent visual review

—

99.6% / 99.8%

100%

The Holdout column shows two numbers: holdout (9 videos) and holdout2 (7 videos).

On original files, the tools alone are usually enough. Videos downloaded from platforms have been recompressed, which wipes out the noise evidence, so you need a visual check to get back above 99%.

Real-asset detection is 97–99%, and shot boundaries are all correct. Numbers and how to reproduce them: [eval/RESULTS.md](/JuneYaooo/rea-video/blob/main/eval/RESULTS.md).

## How it works

[#how-it-works](#how-it-works)

[/JuneYaooo/rea-video/blob/main/docs/rea-flow_en.svg](/JuneYaooo/rea-video/blob/main/docs/rea-flow_en.svg)

- Split: cut the video into shots and split the audio into voice, music and effects.

- Gather evidence: measure (frame cadence, sensor noise, whether the whole image moves as one flat plane, AIGC tags in the metadata), look (hands, text, physics) and listen (BPM, key, singing vs speech).

- Decide: hard evidence like AIGC tags and frame cadence beats "looks like". Conflicts get flagged for the agent to check visually.

- Plan the remake: batch shots according to what the target video model can actually do, such as max clip length, multi-shot support and how many reference images it takes.

## Star History

[#star-history](#star-history)

[https://star-history.com/#JuneYaooo/rea-video&Date](https://star-history.com/#JuneYaooo/rea-video&Date)

## FAQ

[#faq](#faq)

How is this different from one-click remake tools like Hypit?

[Hypit](https://github.com/hypit-ai/hypit) takes a reference video and makes a new one: the agent reads frame grids to understand the original, generates footage with the models it supports (Seedance, PixVerse, MiniMax, Wan and others), and renders captions and motion graphics in HTML.

It doesn't ask how the original was made. A live-action source goes through the same pipeline; it won't tell you how many cameras were used or how it was lit. What AI video it can match depends on the models it supports: no Kling or Veo, no dedicated avatar or 3D path, and no AI music (you bring your own). It's strongest on talking-head, podcast and interview videos that follow a script, and weaker on music-driven edits, product motion graphics and cinematic shorts.

rea-video doesn't render a video. It works out shot by shot whether something was filmed, AI-generated or built in code, then gives a shooting plan, prompts or a code approach for each. For a quick lookalike, Hypit is faster. To understand how the original was made and remake it cheaply, use rea-video. They work fine together.

Do I need a video-capable model? What does it cost?

No. Tools-only mode is offline and free, and already accurate on original files. For recompressed platform downloads, add a video-capable model (Gemini or Doubao both work) or use an agent that can see images; you pay whatever that service charges. Automatic video generation (capsule-cinema) does a free dry run first and only calls paid models after you confirm.

Can it remake the whole video automatically?

Partly. With [capsule-cinema](https://github.com/JuneYaooo/capsule-cinema) installed, AI shots are generated and placed back on the original timeline automatically. You film the live shots from the shooting plan, and the agent writes the code shots as a Remotion project. See [docs/replicate.md](/JuneYaooo/rea-video/blob/main/docs/replicate.md).

Can I just repost someone else's video?

No. rea-video is for learning a video's structure, pacing and techniques, then remaking it with material you have the rights to. Don't reuse other people's footage, music, characters or likeness. Follow platform rules and local AI-content labeling requirements when you publish.

## Docs

[#docs](#docs)

- [docs/what-it-detects.md](/JuneYaooo/rea-video/blob/main/docs/what-it-detects.md): everything it detects (10 visual types, camera, lighting, grade, audio)

- [docs/replicate.md](/JuneYaooo/rea-video/blob/main/docs/replicate.md): how to remake from the report

- [docs/cases.md](/JuneYaooo/rea-video/blob/main/docs/cases.md): details on each example

- [docs/decompose.md](/JuneYaooo/rea-video/blob/main/docs/decompose.md): detection rules

- [docs/cli.md](/JuneYaooo/rea-video/blob/main/docs/cli.md): CLI usage and capsule-cinema integration

- [rea_video/capabilities/](/JuneYaooo/rea-video/blob/main/rea_video/capabilities/README.md): capability tables for video / image / audio models, used to pick models for the remake plan

- [eval/RESULTS.md](/JuneYaooo/rea-video/blob/main/eval/RESULTS.md): eval results

The docs are in Chinese for now.

## Community

[#community](#community)

Questions, breakdowns and remake ideas: [GitHub Discussions](https://github.com/JuneYaooo/rea-video/discussions). Chat with us on [Discord](https://discord.gg/dZj8D3GqWT). Chinese speakers can also find us on [linux.do](https://linux.do/).

Want a video broken down? Open a [request issue](https://github.com/JuneYaooo/rea-video/issues/new?template=request_breakdown.yml) with the link and we'll publish the result as a case.

## Credits

[#credits](#credits)

Inspired by [REA (Reverse Engineer Anything)](https://github.com/morluto/rea): work back from what you see to how it was made, back every claim with evidence, and verify by measuring.
