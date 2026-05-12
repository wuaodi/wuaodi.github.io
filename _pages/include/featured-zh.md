<span class='anchor' id='featured'></span>

# 代表性工作

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">IAA-SPAICE 2025 / Acta（在审）</div>
    <img src="images/paper/spacemind-pipeline.png" alt="SpaceMind 框架">
  </div>
  <div class="paper-box-text" markdown="1">
#### [SpaceMind：面向在轨服务的模块化自演化具身 VLM 智能体](https://arxiv.org/abs/2604.14399)

**吴傲迪**, 韩昊东, 罗旭波, 王锐烁, 何山, 万雪.

<div class="paper-links">
  <a href="https://arxiv.org/abs/2604.14399">论文</a>
  <a href="https://github.com/wuaodi/SpaceMind">代码</a>
  <a href="https://wuaodi.github.io/SpaceMind/">项目主页</a>
  <a href="https://www.youtube.com/watch?v=X8vZvZIe82U">YouTube</a>
  <a href="https://www.bilibili.com/video/BV1VfdzBrEpc/">Bilibili</a>
</div>

- 模块化 VLM 智能体框架，将技能、MCP 工具与推理三维度解耦，可独立扩展。
- 三种可切换推理模式（Standard / ReAct / Prospective）+ 技能自演化机制，把失败经验沉淀为可复用技能。
- 在 5 颗卫星、3 类任务、2 个环境下完成 192 次闭环；UE5 仿真与真实机器人实验室共享同一份代码，物理迁移 100% 成功。

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">IROS 2026（在审）</div>
    <img src="images/paper/spacesense-bench.png" alt="SpaceSense-Bench 概览">
  </div>
  <div class="paper-box-text" markdown="1">
#### [SpaceSense-Bench：面向航天器感知与位姿估计的大规模多模态基准](https://arxiv.org/abs/2603.09320)

**吴傲迪** 等.

<div class="paper-links">
  <a href="https://arxiv.org/abs/2603.09320">论文</a>
  <a href="https://github.com/wuaodi/SpaceSense-Bench">代码</a>
  <a href="https://wuaodi.github.io/SpaceSense-Bench/">项目主页</a>
  <a href="https://huggingface.co/datasets/Alvin16/SpaceSense-Bench/tree/main/raw">数据集</a>
  <a href="https://www.bilibili.com/video/BV1Y9coziEMZ/">Bilibili</a>
</div>

- 基于 UE5 构建的 136 颗卫星、约 70 GB 时间同步 RGB（1024×1024）/ 深度 / 256 线 LiDAR 数据。
- 像素级与点云级 7 类部件语义标注，附带高精度 6-DoF 位姿真值。
- 支持 2D/3D 检测、2D/3D 分割、深度估计、6-DoF 位姿、多模态融合 6 类任务；HuggingFace 下载量 2700+。

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">IROS 2025 / 亚军 + 创新解决方案奖</div>
    <img src="images/paper/robosense-method.png" alt="RoboSense 方法">
  </div>
  <div class="paper-box-text" markdown="1">
#### [基于任务专属提示与空间推理的自动驾驶 VLM 增强方案](https://github.com/wuaodi/UCAS-CSU-phase2)

**吴傲迪**, 罗旭波. *IROS 2025 RoboSense Challenge 技术报告.*

<div class="paper-links">
  <a href="https://github.com/wuaodi/UCAS-CSU-phase2">代码</a>
  <a href="https://github.com/wuaodi/UCAS-CSU-phase2">报告</a>
</div>

- Mixture-of-Prompts 路由：把每类问题分发到对应专家提示，消除任务间提示干扰。
- 显式多视图坐标系建模 + Chain-of-Thought / Tree-of-Thought 推理，修正后视相机与左右方位混淆问题。
- 基于 Qwen2.5-VL-72B，Phase-1 干净数据 70.87%，Phase-2 受扰数据 72.85%，最终总成绩亚军，并获创新解决方案奖。

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">CVPR 2024 / 位姿冠军 + 分割第 4</div>
    <img src="images/paper/CVPR-challenge.png" alt="CVPR SPARK 挑战赛">
  </div>
  <div class="paper-box-text" markdown="1">
#### [CVPR 2024 SPARK 挑战赛 —— 非合作航天器感知](https://cvi2.uni.lu/spark2024/)

面向仿真与真实卫星图像的航天器位姿估计与部件分割。

<div class="paper-links">
  <a href="https://cvi2.uni.lu/spark2024/">挑战赛主页</a>
</div>

- 位姿估计赛道：所有参赛队伍中获得第 1 名（队员身份）。
- 部件分割赛道：获得第 4 名（队长身份）。
- 在 SPARK 2024 数据集上设计了检测 + 单目深度线索 + 朝向回归的多阶段方案。

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">硕士工作 / 在轨验证</div>
    <img src="images/paper/Davinci.png" alt="达芬奇卫星工作">
  </div>
  <div class="paper-box-text" markdown="1">
#### 达芬奇空间在轨服务卫星——从算法到在轨的视觉感知栈

完整负责视觉感知栈：从算法研发到工程化集成，最终随卫星发射完成在轨验证。

<div class="paper-links">
  <a href="https://github.com/wuaodi/cross-domain_spacecraft_segmentation">ICDIP 2025</a>
  <a href="#publications">ICoSR 2022</a>
  <a href="#publications">专利 CN 2023102948012</a>
</div>

- 基于边缘一致性生成网络的跨域航天器部件分割，缓解仿真到真实的域差。
- 空间相机在轨智能曝光与对焦控制方法，已获国家发明专利授权（2023）。
- 非合作目标单目相对导航，200 m–10 m 范围内 5.16% 平均误差，NVIDIA TX2 上 10 FPS，已应用于在轨任务。

</div>
</div>
