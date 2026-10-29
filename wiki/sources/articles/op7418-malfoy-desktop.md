---
type: Source
title: 马尔福桌面开源仓库
title_en: Malfoy Desktop open-source repository
description: op7418 开源的马尔福桌面——与马尔福小姐同住的斯莱特林休息室互动桌宠：即梦生成画面与配音、Suno 配乐，HyperFrames 与 Three.js 做转场，Electron / Wallpaper Engine 交付；含好感换装、点击互动与冥想盆回看。
description_en: op7418’s open Malfoy Desktop—an interactive Slytherin common-room desk companion with Miss Malfoy; Jimeng for visuals and voiced dialogue, Suno for music, HyperFrames and Three.js for transitions, shipped via Electron and Wallpaper Engine; affection, outfits, click interaction, and a Pensieve replay.
resource: https://github.com/op7418/malfoy-desktop
tags: [desktop, malfoy, jimeng, suno, hyperframes, electron, desk-pet, op7418, fan-project]
sources:
  - id: op7418-malfoy-desktop
    resource: https://github.com/op7418/malfoy-desktop
    title: Malfoy Desktop open-source repository
    author: human:op7418
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:30:00+08:00
date: 2026-10-29
---

# 马尔福桌面开源仓库

*Malfoy Desktop open-source repository*

[Malfoy Desktop（马尔福桌面）](https://github.com/op7418/malfoy-desktop) 是与马尔福小姐（Miss Malfoy）同住的斯莱特林公共休息室**互动短剧 + AI 女友式桌面 Demo**：你扮演刚转进斯莱特林的转学生，午夜禁书区遇见她；第一章结束后她常驻桌面——待机时看书、翻页、伸懒腰、晚十一点后睡着；点击互动、好感度升高会改变称呼并解锁居家装扮与 Y2K 风 CCD 相册；「冥想盆」可回看已看过的剧情。画面、角色与对白配音由**即梦 AI 短剧工作室**生成，音乐由 **Suno** 生成；剪辑、魔法转场（Three.js：飞路火焰、冥想盆、荧光闪烁、银墨书写、斯莱特林法阵等）与桌面程序为代码实现（**HyperFrames**、GSAP、**Electron**；Windows 经 **Wallpaper Engine** 创意工坊订阅）。[^op7418-malfoy-desktop]

[Malfoy Desktop (马尔福桌面)](https://github.com/op7418/malfoy-desktop) is an **interactive short drama plus AI desktop-companion demo** in the Slytherin common room with Miss Malfoy: you play a new Slytherin transfer who meets her in the Restricted Section at night; after Chapter One she stays on the desktop—idle reading, page turns, stretches, sleep after 11 PM; clicks for replies, rising affection changes how she addresses you and unlocks a home outfit plus a six-shot Y2K digicam album; a **Pensieve** replays memories you have already seen. Footage, characters, and voiced dialogue come from **Jimeng AI Short Drama Studio**; music from **Suno**; editing, magic transitions (Three.js: Floo flames, Pensieve swirl, Lumos flare, silver ink, Slytherin sigil, and peers), and the desktop shell are code (**HyperFrames**, GSAP, **Electron**; Windows via **Wallpaper Engine** Workshop subscribe).[^op7418-malfoy-desktop]

## 摘要 / Summary

- **交付**：macOS 仅 Apple Silicon——[Releases](https://github.com/op7418/malfoy-desktop/releases) 下载 `Miss-Malfoy-mac-arm64.dmg`（未签名，需右键打开或系统设置「仍要打开」）；菜单栏 🐍 →「和她互动…」，Esc 回壁纸模式。Windows 需 Steam **Wallpaper Engine**，订阅[官方创意工坊页](https://steamcommunity.com/sharedfiles/filedetails/?id=3828922581)，开启鼠标输入与壁纸声音方可互动。[^op7418-malfoy-desktop]
- **Ship paths**: macOS Apple Silicon only—[Releases](https://github.com/op7418/malfoy-desktop/releases) `Miss-Malfoy-mac-arm64.dmg` (unsigned; right-click Open or System Settings → Open Anyway); menu-bar 🐍 → interact mode, Esc back to wallpaper. Windows needs Steam **Wallpaper Engine**, subscribe the [official Workshop item](https://steamcommunity.com/sharedfiles/filedetails/?id=3828922581), enable mouse input and wallpaper sound to interact.[^op7418-malfoy-desktop]
- **剧情与系统**：第一章「禁书区」含分支选择；好感度、点击对话、待机循环与冥想盆回看均在 `桌面程序/app/` 网页核心里实现。[^op7418-malfoy-desktop]
- **Story and systems**: Chapter One in the Restricted Section branches on your choice; affection, click dialogue, idle loops, and Pensieve replay live in the `桌面程序/app/` web core.[^op7418-malfoy-desktop]
- **仓库边界**：GitHub **只公开代码**；视频、图片、音乐、剧本与文章不随仓发布，安装包已含运行素材；从源码运行需按 `MEDIA.md` 自备媒体。共享 `lib/magic.js`（Three.js 特效）、HyperFrames 工程（`剪辑/`、`宣传片/`）、Electron mac 壳与 `wallpaper-engine/` 工程；依赖含 Node 22、ffmpeg 8、HyperFrames CLI 0.8.210、Electron 33.2.1、three.js 0.160.0 等。[^op7418-malfoy-desktop]
- **Repo boundary**: GitHub ships **code only**; videos, images, music, script, and article stay private while installers bundle runtime media; source runs need local media per `MEDIA.md`. Shared `lib/magic.js` (Three.js FX), HyperFrames projects (`剪辑/`, `宣传片/`), Electron mac shell, and `wallpaper-engine/`; deps include Node 22, ffmpeg 8, HyperFrames CLI 0.8.210, Electron 33.2.1, three.js 0.160.0, and peers.[^op7418-malfoy-desktop]
- **许可与声明**：代码 **PolyForm Noncommercial 1.0.0**（可学习与非商用修改分发，商用需联系作者）；安装包内素材仅个人体验；非商业同人，与华纳/原作无关联，勿商用或重新上架商店/创意工坊（Windows 官方版仅作者工坊页）。[^op7418-malfoy-desktop]
- **License and disclaimer**: Code under **PolyForm Noncommercial 1.0.0** (study and noncommercial share; commercial needs author contact); installer media personal use only; noncommercial fan work, not affiliated with Warner/original IP—no commercial use or repackaging for stores/Workshop (official Windows only on the author’s Workshop page).[^op7418-malfoy-desktop]

## 相关 / Related

- Source: [歸藏谈桌面性转马尔福换装](./op7418-desktop-malfoy-outfits.md)
- Topic: [桌面换装角色伴侣](../../topics/desktop-outfit-character-companions.md)
- Topic: [智能体视频剪辑](../../topics/agentic-video-editing.md)

[^op7418-malfoy-desktop]: Malfoy Desktop open-source repository
