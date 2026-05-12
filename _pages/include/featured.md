<span class='anchor' id='featured'></span>

# Selected Work

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">IAA-SPAICE 2025 / Acta (under review)</div>
    <img src="images/paper/spacemind-pipeline.png" alt="SpaceMind pipeline">
  </div>
  <div class="paper-box-text" markdown="1">
#### [SpaceMind: A Modular and Self-Evolving Embodied VLM Agent for Autonomous On-orbit Servicing](https://arxiv.org/abs/2604.14399)

**Aodi Wu**, Haodong Han, Xubo Luo, Ruisuo Wang, Shan He, Xue Wan.

<div class="paper-links">
  <a href="https://arxiv.org/abs/2604.14399">Paper</a>
  <a href="https://github.com/wuaodi/SpaceMind">Code</a>
  <a href="https://wuaodi.github.io/SpaceMind/">Project Page</a>
  <a href="https://www.youtube.com/watch?v=X8vZvZIe82U">YouTube</a>
  <a href="https://www.bilibili.com/video/BV1VfdzBrEpc/">Bilibili</a>
</div>

- Modular VLM-agent framework that decomposes skills, MCP tools, and reasoning into three independently extensible dimensions.
- Three switchable reasoning modes (Standard / ReAct / Prospective) with skill self-evolution that turns failed episodes into reusable skills.
- 192 closed-loop runs across 5 satellites, 3 task types, 2 environments; the identical codebase transfers from UE5 simulation to a physical robot lab with 100% rendezvous success.

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">IROS 2026 (under review)</div>
    <img src="images/paper/spacesense-bench.png" alt="SpaceSense-Bench overview">
  </div>
  <div class="paper-box-text" markdown="1">
#### [SpaceSense-Bench: A Large-Scale Multi-Modal Benchmark for Spacecraft Perception and Pose Estimation](https://arxiv.org/abs/2603.09320)

**Aodi Wu**.

<div class="paper-links">
  <a href="https://arxiv.org/abs/2603.09320">Paper</a>
  <a href="https://github.com/wuaodi/SpaceSense-Bench">Code</a>
  <a href="https://wuaodi.github.io/SpaceSense-Bench/">Project Page</a>
  <a href="https://huggingface.co/datasets/Alvin16/SpaceSense-Bench/tree/main/raw">Dataset</a>
  <a href="https://www.youtube.com/watch?v=_iqLCblyW5A">YouTube</a>
  <a href="https://www.bilibili.com/video/BV1Y9coziEMZ/">Bilibili</a>
</div>

- 136 satellite models with around 70 GB of time-synchronized RGB (1024x1024), depth, and 256-beam LiDAR data built in Unreal Engine 5.
- Dense 7-class part-level semantic labels at both pixel and point level, plus accurate 6-DoF pose ground truth.
- Supports six tasks: 2D / 3D detection, 2D / 3D segmentation, depth estimation, 6-DoF pose, multi-modal fusion. HuggingFace downloads 2700+.

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">IROS 2025 / 2nd Place + Innovation Award</div>
    <img src="images/paper/robosense-method.png" alt="RoboSense method">
  </div>
  <div class="paper-box-text" markdown="1">
#### [Enhancing Vision-Language Models for Autonomous Driving through Task-Specific Prompting and Spatial Reasoning](https://github.com/wuaodi/UCAS-CSU-phase2)

**Aodi Wu**, Xubo Luo et al. *IROS 2025 RoboSense Challenge Technical Report.*

<div class="paper-links">
  <a href="https://github.com/wuaodi/UCAS-CSU-phase2">Code</a>
  <a href="https://github.com/wuaodi/UCAS-CSU-phase2">Report</a>
</div>

- Mixture-of-Prompts router that dispatches each question to a task-specific expert prompt, eliminating cross-task interference.
- Explicit multi-view coordinate grounding plus Chain-of-Thought / Tree-of-Thought reasoning to fix BACK-camera and left-right confusion.
- 70.87% on Phase-1 clean data and 72.85% on Phase-2 corrupted data with Qwen2.5-VL-72B; 2nd place overall and Innovation Solution Award.

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">CVPR 2024 / Pose 1st + Seg 4th</div>
    <img src="images/paper/CVPR-challenge.png" alt="CVPR SPARK challenge">
  </div>
  <div class="paper-box-text" markdown="1">
#### [CVPR 2024 SPARK Challenge — Non-cooperative Spacecraft Perception](https://cvi2.uni.lu/spark2024/)

Spacecraft pose estimation and part segmentation on synthetic and real satellite imagery.

<div class="paper-links">
  <a href="https://openaccess.thecvf.com/content/CVPR2024W/AI4Space/papers/Zuo_CroSpace6D_Leveraging_Geometric_and_Motion_Cues_for_High-Precision_Cross-Domain_6DoF_CVPRW_2024_paper.pdf">Paper</a>
  <a href="https://cvi2.uni.lu/spark2024/">Challenge Page</a>
</div>

- Pose estimation track — 1st place (**team member**).
- Part segmentation track — 4th place (**team leader**).
- Integrated multiple segmentation algorithms with depth estimation, and fused absolute and relative localization on the SPARK 2024 dataset.

</div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">Master's Thesis / In-orbit Verified</div>
    <img src="images/paper/Davinci.png" alt="DaVinci satellite work">
  </div>
  <div class="paper-box-text" markdown="1">
#### DaVinci On-orbit Servicing Satellite — Camera Control, Visual Perception, and Monocular Navigation

Led camera exposure/focus control, visual perception, and monocular navigation, from algorithm research to software-hardware integration and launch support.

<div class="paper-links">
  <a href="https://github.com/wuaodi/cross-domain_spacecraft_segmentation">ICDIP 2025 Project</a>
  <a href="https://ieeexplore.ieee.org/abstract/document/10137152">ICoSR 2022 Paper</a>
  <span>Patent CN 2023102948012</span>
</div>

- Cross-domain spacecraft component segmentation with edge-consistency generative networks, robust to synthetic-to-real domain gap.
- Intelligent on-orbit exposure and focus control for space cameras, granted as an authorized invention patent (2023).
- Monocular relative navigation for non-cooperative spacecraft over 200 m to 10 m, 5.16% mean error at 10 FPS on NVIDIA TX2, deployed on-orbit.

</div>
</div>
