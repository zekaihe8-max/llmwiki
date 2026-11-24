---
type: Source
title: "Gemini API 推出原生文件分片控制"
title_en: "Introducing file slicing controls in the Gemini API"
description: "Gemini API 新增原生文件分片控制，支持按页面、单元格区间和媒体片段按需加载，降低大文件 Token 成本。"
description_en: "Gemini API adds native file slicing controls to load targeted pages, cell ranges, and media segments on demand, reducing token costs for large files."
resource: https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls
tags: [gemini-api, file-slicing, token-optimization, google-ai]
sources:
  - id: gemini-api-file-slicing-controls
    resource: https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls
    title: "Introducing file slicing controls in the Gemini API"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:24:35+08:00
---

# Gemini API 推出原生文件分片控制

*Introducing file slicing controls in the Gemini API*

帖文称，Gemini API 现已推出原生文件分片控制，开发者可在 Google AI Studio 和 Vertex AI 中指定 PDF 页面、Office 电子表格区间以及音视频片段，仅对模型实际检查的内容计费，并同步推出对 Microsoft Office 与 OpenDocument 格式的原生上传支持。[^gemini-api-file-slicing-controls]

The post says the Gemini API now launches native file slicing controls, letting developers specify PDF pages, Office spreadsheet ranges, and audio/video segments in Google AI Studio and Vertex AI, billing only for the content the model actually inspects, alongside native upload support for Microsoft Office and OpenDocument formats.[^gemini-api-file-slicing-controls]

## 摘要 / Summary

- Gemini API 支持对文档与幻灯片、电子表格、视频和音频进行服务端分片，可按页面范围、工作表与单元格、时间区间、分辨率、帧率和内容图层进行控制。[^gemini-api-file-slicing-controls]
- The Gemini API supports server-side slicing for documents and slides, spreadsheets, video, and audio, controllable by page range, worksheet and cell range, time interval, resolution, frame rate, and content layers.[^gemini-api-file-slicing-controls]
- 开发者可通过 Files API 一次上传文件并复用其 URI，在多轮对话或函数响应中指定要检查的文件部分，无需在本地运行 PDF 渲染器、LibreOffice 或 ffmpeg。[^gemini-api-file-slicing-controls]
- Developers can upload a file once via the Files API and reuse its URI across multi-turn conversations or function responses to specify which parts to inspect, without running PDF renderers, LibreOffice, or ffmpeg locally.[^gemini-api-file-slicing-controls]
- 原生分片适用于所有 Gemini 4 模型，未指定处理选项时，文档和幻灯片默认使用布局保留的页面图片，电子表格默认包含所有标签页的评估值、公式和标签页名称。[^gemini-api-file-slicing-controls]
- Native slicing applies to all Gemini 4 models; when processing options are omitted, documents and slides default to layout-preserving page images, and spreadsheets include evaluated values, formulas, and sheet names across all tabs.[^gemini-api-file-slicing-controls]
- 已上传文件的原有大小和页数限制仍然适用，功能当天通过 API 在 Google AI Studio 和 Gemini 平台提供。[^gemini-api-file-slicing-controls]
- Existing file size and page limits still apply to uploaded files, and the feature is available via the API on launch day in Google AI Studio and the Gemini platform.[^gemini-api-file-slicing-controls]

## 相关 / Related

- 原文：[链接](https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls)。 / Original: [link](https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^gemini-api-file-slicing-controls]: Introducing file slicing controls in the Gemini API
