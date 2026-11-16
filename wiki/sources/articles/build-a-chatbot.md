---
type: Source
title: "构建聊天机器人"
title_en: "Build a Chatbot"
description: "使用 DeepSeek API 的联网搜索、文件输入、安全审查等能力构建自定义聊天机器人。"
description_en: "Build a custom chatbot using DeepSeek API capabilities such as web search, file input, and safety review."
resource: https://api-docs.deepseek.com/guides/build_a_chatbot
tags: [deepseek, chatbot, api, agents]
sources:
  - id: build-a-chatbot
    resource: https://api-docs.deepseek.com/guides/build_a_chatbot
    title: "Build a Chatbot"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T08:22:17+08:00
---

# 构建聊天机器人

*Build a Chatbot*

本文介绍如何使用 DeepSeek API 构建聊天机器人，涵盖网页搜索、深度思考搜索、文件输入、URL 读取、模型内容安全、用户元数据标记、对话标题、语音合成与语音输入等功能，并提供 Messages、Responses 与 Chat Completions 三种协议的快速示例。[^build-a-chatbot]

This article explains how to build a chatbot with the DeepSeek API, covering web search, deep thinking search, file input, URL reading, model content safety, user metadata markers, conversation titles, text-to-speech, and speech-to-text, with quick examples for the Messages, Responses, and Chat Completions protocols.[^build-a-chatbot]

## 摘要 / Summary

- DeepSeek API 提供与网页版和 App 相同的对话功能，包括网页搜索、深度思考搜索、文件输入和 URL 读取，并附带基础模型内容安全风控。[^build-a-chatbot]
- The DeepSeek API provides the same conversation features as DeepSeek Chat on the web and in the app, including web search, deep thinking search, file input, and URL reading, plus basic model content safety risk control.[^build-a-chatbot]
- 客户端仅需展示返回的内容块，并在下一轮中原样传回，搜索与 URL 读取由服务端执行。[^build-a-chatbot]
- The client only needs to display the returned content blocks and pass them back unchanged in the next round; the service performs searches and URL reading.[^build-a-chatbot]
- 支持三种协议：Messages、Responses 和 Chat Completions，推荐使用 deepseek-flash 模型。[^build-a-chatbot]
- It supports three protocols: Messages, Responses, and Chat Completions, and recommends using the deepseek-flash model.[^build-a-chatbot]
- 开源演示客户端可在 https://cdn.deepseek.com/chat-demo 试用，源代码托管于 https://github.com/deepseek-ai/chat-demo，API 密钥和对话仅存储在浏览器中。[^build-a-chatbot]
- An open-source demo chat client is available at https://cdn.deepseek.com/chat-demo, with source code at https://github.com/deepseek-ai/chat-demo; API keys and conversations are stored only in the browser.[^build-a-chatbot]
- 启用安全检查参数后，模型输入和输出会被审查，发现风险时返回拒绝标记，面向公众的服务应启用该参数并履行内容安全审查、大模型备案和 AI 标注等义务。[^build-a-chatbot]
- With the safety check parameter enabled, model input and output are reviewed and a refusal marker is returned when a risk is found; public-facing services should enable this parameter and fulfill obligations such as content safety review, large model registration, and AI labeling.[^build-a-chatbot]
- 功能还包括用户元数据标记（日期、地点、语言）、对话标题生成、文本转语音和语音转文本，可让回答更贴合用户情境。[^build-a-chatbot]
- Additional features include user metadata markers (date, location, language), conversation title generation, text-to-speech, and speech-to-text to make answers fit the user's situation.[^build-a-chatbot]

## 相关 / Related

- 原文：[链接](https://api-docs.deepseek.com/guides/build_a_chatbot)。 / Original: [link](https://api-docs.deepseek.com/guides/build_a_chatbot).
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [DeepSeek 自营推理相对聚合平台 / DeepSeek first-party inference vs aggregators](../../topics/deepseek-inference-vs-aggregators.md)
- Topic: [语音输入的口头转述与文书整理 / Oral transcript vs document polish in voice input](../../topics/voice-input-oral-vs-document-for-agents.md)

[^build-a-chatbot]: Build a Chatbot
