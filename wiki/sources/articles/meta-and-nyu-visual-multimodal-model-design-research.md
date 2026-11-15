---
type: Source
title: "Meta 与纽约大学视觉多模态模型设计研究"
title_en: "Meta and NYU Visual Multimodal Model Design Research"
description: "帖文称 Meta 与纽约大学研究显示，视觉编码器可随主模型从零训练，视觉专属参数嵌入前八层效果最佳。"
description_en: "The post cites Meta and NYU research showing visual encoders can be trained from scratch with the main model, with vision-specific parameters most effective in the first eight layers."
resource: https://x.com/Gorden_Sun/status/2121806966062485776
tags: [ai, vision, multimodal, model-design]
sources:
  - id: meta-nyu-visual-multimodal-design
    resource: https://x.com/Gorden_Sun/status/2121806966062485776
    title: "Meta and NYU Visual Multimodal Model Design Research"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:07:47+08:00
---

# Meta 与纽约大学视觉多模态模型设计研究

*Meta and NYU Visual Multimodal Model Design Research*

帖文称，来自 Meta 和纽约大学的研究总结了 AI 视觉模型的核心设计结论：视觉编码器无需提前单独训练，可与主模型从零联合训练并在看图问答中持平；必须保留专门处理图像的独立参数，否则需三倍算力才能追平；将视觉专属参数嵌入语言模型前八层效果最佳，且能将 1.7B 模型在 H200 上的首字响应从 64 毫秒缩短至 37 毫秒。[^meta-nyu-visual-multimodal-design]

The post summarizes Meta and NYU research on core AI visual model design, claiming visual encoders need not be pretrained separately and can be trained from scratch with the main model while matching pretrained versions in visual question answering; dedicated vision parameters must be retained or catching up requires about three times the compute; embedding them in the first eight layers of a language model matches external encoders and cuts first-token response time on a 1.7B model/H200 setup from 64 ms to 37 ms.[^meta-nyu-visual-multimodal-design]

## 摘要 / Summary

- 视觉编码器不用提前单独训练，跟着主模型从零一起训练，最终看图问答准确率完全不输预先单独训练的版本，而且能省下大笔算力预算。[^meta-nyu-visual-multimodal-design]
- Visual encoders need not be pretrained separately; training from scratch with the main model yields visual question answering accuracy on par with pretrained versions while saving substantial compute budget.[^meta-nyu-visual-multimodal-design]
- 必须保留专门处理图像的独立参数；若直接删掉视觉部件、让图片和文字共用参数，看图能力会大幅掉队，需要多花3倍算力才能追平。[^meta-nyu-visual-multimodal-design]
- Dedicated vision parameters must be retained; removing vision components and sharing parameters between image and text causes vision capability to lag significantly, requiring about three times the compute to catch up.[^meta-nyu-visual-multimodal-design]
- 视觉专属参数放进主模型前八层最有效；直接嵌进语言模型前八层内部，识别文字和图表效果与外挂编码器打平，放进中后层则会拖后腿。[^meta-nyu-visual-multimodal-design]
- Vision-specific parameters are most effective in the first eight layers of the main model; embedding them there matches external encoders for text and chart recognition, while placement in middle or later layers hurts performance.[^meta-nyu-visual-multimodal-design]
- 嵌入式设计省去图片在外挂模块排队处理，1.7B 规模模型在 H200 显卡上的首字响应时间从 64 毫秒缩短到 37 毫秒。[^meta-nyu-visual-multimodal-design]
- Embedded design removes external-module queuing; on a 1.7B model running on H200 GPUs, first-token response time drops from 64 ms to 37 ms.[^meta-nyu-visual-multimodal-design]
- 项目地址为 unbundling.github.io。[^meta-nyu-visual-multimodal-design]
- Project address is unbundling.github.io.[^meta-nyu-visual-multimodal-design]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2121806966062485776)。 / Original: [link](https://x.com/Gorden_Sun/status/2121806966062485776).
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [工具产品自建模型抢话语权 / Tool products building own models for discourse power](../../topics/tools-building-own-models.md)

[^meta-nyu-visual-multimodal-design]: Meta and NYU Visual Multimodal Model Design Research
