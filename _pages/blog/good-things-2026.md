---
layout: blog
title: 好东西分享2026
description: 分享一些让我反复受益的好东西。
permalink: /blog/good-things-2026/
author_profile: false
blog_entry: true
topics: 工具 · 学习 · 科研
updated: "2026-11"
updated_label: 2026 年 11 月
toc:
  - title: 工具类
    id: tools
  - title: 基础知识
    id: foundations
  - title: 前沿跟踪
    id: frontier
  - title: Space AI
    id: space-ai
---

<!-- 内容维护于此 Markdown 文件；本地预览：bundle exec jekyll serve。 -->

<h2 id="tools">工具类</h2>

### 命令行与终端

- **历史命令补全**：Oh My Zsh + 插件。
- **分屏终端**
    - Windows：还没用到分屏终端，暂时用 PowerShell。
    - Linux：Terminator。
    - macOS：iTerm2。
- **远程 SSH 终端**：MobaXterm，在 Windows 上使用。

### VS Code 与 AI 编程助手

**Codex：将选中文本或文件添加到当前会话**

在首选项的键盘快捷方式中，为以下命令设置快捷键：

| 操作 | 命令 | 我的快捷键配置 |
| --- | --- | --- |
| 添加文件到 ChatGPT | `chatgpt.addFileToThread` | `Ctrl + P` |
| 添加选中文本到 ChatGPT | `chatgpt.addToThread` | `Ctrl + T` |

**其他常用快捷键**

- Claude：选中文件后，按 `Alt + K`。
- 自动换行：按 `Alt + Z`，让过长内容自动换行。

### GPU 使用情况

| 使用场景 | 工具 |
| --- | --- |
| 服务器 | `nvtop` |
| Jetson 板卡 | `jtop` |

### 远程工具

- **网易 UU 远程**：Linux 版本据说已经创建了文件夹，继续关注。

---

<h2 id="foundations">基础知识</h2>

### 数学与算法

- **图宾根大学 · 最小数学需求**  
  [课程视频](https://www.youtube.com/playlist?list=PL05umP7R6ij0bo4UtMdzEJ6TiLOqj4ZCm) · [Slides](https://drive.google.com/file/d/1SecJqkwk8RXzIiUWO_kiAKl1mWLyILGN/view)  
  学习时可以尝试做一份 PyTorch 实现。

- **漫士沉思录 · 无痛线代**  
  [特征值究竟体现了矩阵的什么特征](https://www.bilibili.com/video/BV1TH4y1L7PV/)

- **[Hello 算法](https://www.hello-algo.com/)**

### AI 与 CV 入门

- **黑马程序员**  
  Python 面向对象编程、C++ 编程。

- **[小土堆 · PyTorch 入门教程](https://www.bilibili.com/video/BV1hE411t7RN/)**  
  可能是最好的 PyTorch 入门教程。最大的收获是学会**看文档和调试**。  
  前置学习：可以先看黑马程序员的 Python 面向对象编程。

- **[Hucci 写代码 · Python 高级特性](https://space.bilibili.com/1318868/lists/2943140?type=season)**

- **[计算机教育中缺失的一课](https://missing-semester-cn.github.io/)**  
  很重要的一些日常工具。

- **李宏毅老师的系列课程**  
  前沿 + 基础，深入浅出。  
  [2025 年课程](https://speech.ee.ntu.edu.tw/~hylee/GenAI-ML/2025-fall.php) · [2026 年课程](https://speech.ee.ntu.edu.tw/~hylee/ml/2026-spring.php)

- **[deep_thoughts](https://space.bilibili.com/373596439)**  
  使用 PyTorch 实现经典算法，包括 Transformer 等，讲得很好。一行行写代码，能力非常强，擅长通过最小实现讲解原理。

- **[SY_007 · NeRF、Diffusion、3DGS 较真系列](https://space.bilibili.com/644569334)**  
  持续更新中。两个人讲解，逻辑框架清晰，通俗易懂。

- **[申抒含 · 计算机视觉定位重建](https://www.bilibili.com/video/BV1rD4y187Za/)**  
  研一可以选他的课。

### 具身智能入门

- **[穆尧_YaoMarkMu · 严肃反思第二弹：具身科研入门保姆级指南](https://www.xiaohongshu.com/discovery/item/6ad495d5000000002601dedd?source=webshare&xhsshare=pc_web&xsec_token=ABxON7I9tRIl84KXhACqFc3K9Y_ZiS28stVUmtp_H3iCI=&xsec_source=pc_share)**
- **[RLinf / RPent](https://github.com/RLinf/RPent)**：理解清楚这个项目里的组件。

### 学术论文写作与科研逻辑

> **强烈推荐：任何一个项目都可以从这里开始。**

- **[彭思达 · 完成一篇论文的科研历程与经验](https://www.bilibili.com/video/BV1DA4m1V7D3/)**
- **[Learning Research](https://github.com/pengsida/learning_research)**
- **[论文写作模板](https://pengsida.notion.site/c1a22465a0fa4b15a12985223916048e)**

---

<h2 id="frontier">前沿跟踪</h2>

- **[飞天闪客](https://space.bilibili.com/325864133)**  
  科普类前沿内容，深入浅出。

- **[hu-po](https://www.youtube.com/@hu-po/streams)**  
  通过论文串讲了解新研究。

- **[Dave Ebbelaar](https://www.youtube.com/@daveebbelaar)**  
  通过代码学习 AI 前沿，质量非常高。  
  推荐：[MCP Crash Course: What Python Developers Need to Know](https://www.youtube.com/watch?v=5xqFjh56AwM)。

- **[VALSE 线上](https://space.bilibili.com/562085182)**

- **[Lumina 具身智能社区](https://space.bilibili.com/3493117093218822)**

---

<h2 id="space-ai">Space AI 课题组与机构</h2>

| 国家 / 地区 | 高校 / 机构 | 课题组或相关入口 |
| --- | --- | --- |
| 美国 | 斯坦福大学 | [SLAB](https://slab.stanford.edu/) |
| 欧洲 · 卢森堡 | 卢森堡大学 | [Zero-G Lab](https://www.uni.lu/snt-en/facilities/zero-g-lab/) |
| 澳大利亚 | 阿德莱德 | [Sentient Satellites Lab](https://www.ai4space.group/home) |
| 美国 | 麻省理工学院（MIT） | [相关学者的 Google Scholar 主页](https://scholar.google.com/citations?user=aYKGTXoAAAAJ&hl=zh-CN) |
| 美国 | 加州理工学院 | [自主机器人与控制实验室](https://aerospacerobotics.caltech.edu/aerospacerobotics) |
| 美国 | 卡内基梅隆大学 | [机器人研究所](https://www.ri.cmu.edu/) |
| — | Astrobotic | [航天智能公司](https://www.astrobotic.com/) |
| 美国 | 佛罗里达理工学院 | [ORION Lab](https://community.rti.com/project/orion-spacecraft-robotics-lab-florida-institute-technology) |
