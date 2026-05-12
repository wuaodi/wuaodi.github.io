<span class='anchor' id='featured'></span>

# 代表性工作

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">IAA-SPAICE 2025 / Acta（在审）</div>
    <img src="images/paper/spacemind-pipeline.png" alt="SpaceMind 框架">
  </div>
  <div class="paper-box-text" markdown="1">
#### [SpaceMind：面向在轨服务的模块化自演化具身 VLM 智能体](https://arxiv.org/abs/2604.14399)

**武奥迪**, 韩浩东, 雒勖博, 王睿索, 何山, 万雪.

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

**武奥迪**, 左健宏, 赵泽渊, 雒勖博, 王睿索, 万雪.

<div class="paper-links">
  <a href="https://arxiv.org/abs/2603.09320">论文</a>
  <a href="https://github.com/wuaodi/SpaceSense-Bench">代码</a>
  <a href="https://wuaodi.github.io/SpaceSense-Bench/">项目主页</a>
  <a href="https://huggingface.co/datasets/Alvin16/SpaceSense-Bench/tree/main/raw">数据集</a>
  <a href="https://www.youtube.com/watch?v=_iqLCblyW5A">YouTube</a>
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

**武奥迪**, 雒勖博. *IROS 2025 RoboSense Challenge 技术报告.*

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
  <a href="https://openaccess.thecvf.com/content/CVPR2024W/AI4Space/papers/Zuo_CroSpace6D_Leveraging_Geometric_and_Motion_Cues_for_High-Precision_Cross-Domain_6DoF_CVPRW_2024_paper.pdf">论文</a>
  <a href="https://cvi2.uni.lu/spark2024/">挑战赛主页</a>
</div>

- 位姿估计赛道：获得第 1 名（**队员**）。
- 部件分割赛道：获得第 4 名（**队长**）。
- 在 SPARK 2024 数据集上集成多分割算法与深度估计，融合绝对定位与相对定位。

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">硕士工作 / 在轨验证</div>
    <img src="images/paper/Davinci.png" alt="达芬奇卫星工作">
  </div>
  <div class="paper-box-text" markdown="1">
#### 达芬奇空间在轨服务卫星——相机控制、视觉感知与单目导航

负责相机曝光对焦控制、视觉感知与单目导航，从算法研发到软硬件集成与发射保障。

<div class="paper-links">
  <a href="https://github.com/wuaodi/cross-domain_spacecraft_segmentation">ICDIP 2025 项目</a>
  <a href="https://ieeexplore.ieee.org/abstract/document/10137152">ICoSR 2022 论文</a>
  <span>专利 CN 2023102948012</span>
</div>

- 基于边缘一致性生成网络的跨域航天器部件分割，缓解仿真到真实的域差。
- 空间相机在轨智能曝光与对焦控制方法，已获国家发明专利授权（2023）。
- 非合作目标单目相对导航，200 m–10 m 范围内 5.16% 平均误差，NVIDIA TX2 上 10 FPS，已应用于在轨任务。

</div>
</div>
