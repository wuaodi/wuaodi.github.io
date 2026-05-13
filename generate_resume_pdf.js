// Usage: node generate_resume_pdf.js
// Output: 武奥迪_博士后申请简历.html and 武奥迪_博士后申请简历.pdf
// Style: updated from 原始资料/武奥迪研究生简历_未更新版.pdf for postdoc applications.
// Optional visual debug: set RESUME_PREVIEW=1 to also write 武奥迪_博士后申请简历.preview.png.

const fs = require("fs");
const os = require("os");
const path = require("path");
const { createRequire } = require("module");

const rootDir = __dirname;
const htmlPath = path.join(rootDir, "武奥迪_博士后申请简历.html");
const pdfPath = path.join(rootDir, "武奥迪_博士后申请简历.pdf");
const avatarPath = path.join(rootDir, "images", "wuaodi-512x512.png");
const previewPath = path.join(rootDir, "武奥迪_博士后申请简历.preview.png");
const shouldWritePreview = process.env.RESUME_PREVIEW === "1";

function loadPlaywright() {
  try {
    return require("playwright");
  } catch (localError) {
    const bundledNodeModules = path.join(
      os.homedir(),
      ".cache",
      "codex-runtimes",
      "codex-primary-runtime",
      "dependencies",
      "node",
      "node_modules"
    );

    return createRequire(path.join(bundledNodeModules, "require-playwright.js"))("playwright");
  }
}

function findSystemBrowser() {
  const candidates = [
    path.join(process.env.ProgramFiles || "", "Google", "Chrome", "Application", "chrome.exe"),
    path.join(process.env["ProgramFiles(x86)"] || "", "Google", "Chrome", "Application", "chrome.exe"),
    path.join(process.env.ProgramFiles || "", "Microsoft", "Edge", "Application", "msedge.exe"),
    path.join(process.env["ProgramFiles(x86)"] || "", "Microsoft", "Edge", "Application", "msedge.exe"),
  ];

  return candidates.find((candidate) => candidate && fs.existsSync(candidate));
}

async function launchBrowser(chromium) {
  try {
    return await chromium.launch();
  } catch (error) {
    const executablePath = findSystemBrowser();
    if (!executablePath) throw error;
    return chromium.launch({ executablePath });
  }
}

function esc(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fileToDataUri(filePath, mimeType) {
  return `data:${mimeType};base64,${fs.readFileSync(filePath).toString("base64")}`;
}

function lines(items) {
  return items.map((item) => `<p>${item}</p>`).join("");
}

function bullets(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function section(title, body) {
  return `
    <section>
      <h2><span>${esc(title)}</span></h2>
      ${body}
    </section>
  `;
}

function educationItem(school, degree, time, city, details) {
  return `
    <div class="edu item">
      <div class="item-head">
        <strong>${esc(school)}</strong>
        <span>${esc(time)}</span>
      </div>
      <div class="item-sub">
        <span>${esc(degree)}</span>
        <span>${esc(city)}</span>
      </div>
      <p>${esc(details)}</p>
    </div>
  `;
}

function expItem(title, time, points) {
  return `
    <div class="item">
      <div class="item-head">
        <strong>${esc(title)}</strong>
        ${time ? `<span>${esc(time)}</span>` : ""}
      </div>
      ${bullets(points.map(esc))}
    </div>
  `;
}

function twoColRows(rows) {
  return `
    <div class="two-col-list">
      ${rows
        .map(
          ([left, right]) => `
            <div>${esc(left)}</div>
            <div>${esc(right)}</div>
          `
        )
        .join("")}
    </div>
  `;
}

const avatar = fileToDataUri(avatarPath, "image/png");

const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>武奥迪 - 博士后申请简历</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #e7e7e7;
      color: #111;
      font-family: "Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", SimSun, sans-serif;
      line-height: 1.5;
    }
    .sheet {
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      padding: 14mm 13mm 12mm;
      background: #fff;
      page-break-after: always;
    }
    .sheet:last-child { page-break-after: auto; }
    .top {
      display: grid;
      grid-template-columns: 1fr 24mm;
      gap: 9mm;
      align-items: start;
      margin-bottom: 7.5mm;
    }
    h1 {
      margin: 0 0 3mm;
      font-size: 25px;
      line-height: 1.15;
      font-weight: 900;
      letter-spacing: 0;
    }
    .apply {
      margin-left: 3mm;
      font-size: 17px;
      font-weight: 800;
    }
    .contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.8mm 8mm;
      max-width: 142mm;
      font-size: 10.2px;
    }
    .contact div {
      display: grid;
      grid-template-columns: 17mm 1fr;
      min-width: 0;
      white-space: normal;
      word-break: break-all;
    }
    .contact strong {
      display: inline-block;
      color: #111;
      font-weight: 800;
      white-space: nowrap;
    }
    .contact strong::after { content: "："; }
    .avatar {
      width: 24mm;
      height: 30mm;
      object-fit: cover;
    }
    section { margin-top: 6.2mm; }
    h2 {
      display: flex;
      align-items: center;
      margin: 0 0 3mm;
      height: 8mm;
      background: #f0f0f0;
      font-size: 15px;
      font-weight: 900;
      line-height: 8mm;
    }
    h2::before {
      content: "";
      display: inline-block;
      width: 1.2mm;
      height: 8mm;
      margin-right: 5mm;
      background: #111;
    }
    h2 span { display: inline-block; }
    .item { margin: 3mm 0; }
    .item-head {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 5mm;
      align-items: baseline;
      font-size: 11.6px;
    }
    .item-head strong {
      font-size: 12px;
      font-weight: 900;
    }
    .item-head span {
      font-size: 10.8px;
      white-space: nowrap;
    }
    .item-sub {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 5mm;
      margin-top: .8mm;
      font-size: 10.7px;
    }
    p {
      margin: 1.4mm 0;
      font-size: 10.6px;
      text-align: justify;
    }
    ul {
      margin: 1.2mm 0 0;
      padding-left: 5mm;
    }
    li {
      margin: 1.25mm 0;
      padding-left: .7mm;
      font-size: 10.5px;
      text-align: justify;
    }
    .dense li { margin: .9mm 0; }
    .two-col-list {
      display: grid;
      grid-template-columns: 1fr 30mm;
      gap: 1.4mm 8mm;
      align-items: baseline;
      font-size: 10.7px;
    }
    .two-col-list div:nth-child(2n) {
      text-align: right;
      white-space: nowrap;
    }
    .skills p {
      margin: 1.7mm 0;
      text-align: left;
    }
    .skills strong {
      display: inline-block;
      min-width: 18mm;
      font-weight: 900;
    }
    .summary {
      padding-left: 5mm;
    }
    @media screen {
      .sheet { box-shadow: 0 6px 28px rgba(0, 0, 0, .16); }
      .sheet + .sheet { margin-top: 8mm; }
    }
  </style>
</head>
<body>
  <main class="sheet">
    <header class="top">
      <div>
        <h1>武奥迪<span class="apply">博士后申请简历</span></h1>
        <div class="contact">
          <div><strong>电话</strong><span>18937531481</span></div>
          <div><strong>邮箱</strong><span>wuaodi20@mails.ucas.ac.cn</span></div>
          <div><strong>主页</strong><span>https://wuaodi.github.io/</span></div>
          <div><strong>GitHub</strong><span>https://github.com/wuaodi</span></div>
          <div><strong>方向</strong><span>空间智能、具身智能、多模态感知</span></div>
          <div><strong>位置</strong><span>北京 / 中国科学院大学</span></div>
        </div>
      </div>
      <img class="avatar" src="${avatar}" alt="武奥迪">
    </header>

    ${section(
      "关于我",
      `<div class="summary">${lines([
        "中国科学院大学计算机应用技术博士生，依托中科院空间应用工程与技术中心开展研究，导师为万雪研究员。",
        "研究方向聚焦面向自主在轨服务的可靠 AI 系统，特别关注具身视觉语言智能体、多模态航天器感知、相对导航与仿真到真实闭环验证。博士后阶段希望继续围绕空间机器人与自主在轨服务开展研究，推动空间智能系统从算法验证走向可复现、可迁移、可部署的任务闭环。",
      ])}</div>`
    )}

    ${section(
      "教育经历",
      educationItem(
        "中国科学院大学",
        "计算机应用技术 博士 · 中科院空间应用工程与技术中心 · 导师：万雪 研究员",
        "2023年09月 - 至今",
        "北京",
        "研究方向：空间在轨服务、具身智能、卫星智能体、多传感器融合感知。"
      ) +
        educationItem(
          "中国科学院大学",
          "计算机应用技术 硕士 · 中科院空间应用工程与技术中心 · 导师：万雪 研究员",
          "2020年09月 - 2023年06月",
          "北京",
          "研究方向：空间在轨服务、跨域目标感知、相对导航、空间相机智能曝光对焦调节；GPA：3.78/4.0。"
        ) +
        educationItem(
          "南京航空航天大学",
          "探测制导与控制技术 本科 · 自动化学院",
          "2016年09月 - 2020年06月",
          "南京",
          "GPA：4.0/5.0，平均分 90，排名前 10%；获研究生推免资格，担任班级团支书。"
        )
    )}

    ${section(
      "代表性工作",
      expItem("SpaceMind：面向在轨服务的模块化自演化具身 VLM 智能体", "", [
        "提出面向空间机器人的 embodied VLM agent framework，将 LVM 大脑、MCP 工具库、专用小模型与技能模块解耦，支持 Standard / ReAct / Prospective 三种推理模式。",
        "构建技能自演化机制，使智能体能够将失败经验沉淀为可复用技能；在 5 颗卫星、3 类任务、2 个环境下完成 192 次闭环运行。",
        "UE5 仿真与真实机器人实验室使用同一份代码完成迁移验证，物理平台迁移成功率 100%。会议论文被 IAA-SPAICE 2025 接收，期刊扩展版投稿 Acta Astronautica。"
      ]) +
        expItem("SpaceSense-Bench：航天器感知与位姿估计大规模多模态基准", "", [
          "构建包含 136 颗卫星、约 70 GB 时间同步 RGB 图像、深度图、256 线 LiDAR 点云的数据集，提供部件语义标注与高精度 6-DoF 位姿真值。",
          "支持 2D/3D 检测、2D/3D 分割、点云分割、深度估计、6-DoF 位姿估计和多模态融合等任务；数据集、代码和工具箱已开源。",
          "论文投稿 IROS 2026；项目在 arXiv、HuggingFace 与项目主页发布，HuggingFace 下载量 2700+。"
        ]) +
        expItem("基于任务专属提示与空间推理的自动驾驶 VLM 增强方案", "", [
          "作为队长参加 IROS 2025 RoboSense Challenge，提出 Mixture-of-Prompts 路由与显式多视图坐标系建模，缓解任务间提示干扰和后视相机方位混淆。",
          "基于 Qwen2.5-VL-72B，Phase-1 干净数据 70.87%，Phase-2 受扰数据 72.85%，最终获得亚军与创新解决方案奖。"
        ])
    )}
  </main>

  <main class="sheet">
    ${section(
      "代表性工作（续）",
        expItem("基于边缘一致性生成网络的跨域航天器部件分割", "", [
          "面向仿真数据与真实在轨数据之间的域差异问题，构建光学-红外跨域空间目标部件感知数据，并研究跨域分割算法。",
          "利用风格迁移网络减小源域与目标域的分布差异，提出边缘一致性训练策略，在下游分割任务中提升精度 5.1%。论文被 ICDIP 2025 接收。"
        ]) +
        expItem("CVPR 2024 SPARK 挑战赛：非合作航天器感知", "", [
          "面向仿真与真实卫星图像的航天器位姿估计与部件分割任务，参与集成多分割算法、深度估计、绝对定位与相对定位方法。",
          "位姿估计赛道获得冠军（队员），部件分割赛道获得第 4 名（队长）。"
        ]) +
        expItem("基于空间目标检测的相机控制与单目相对导航", "", [
          "面向在轨服务中光照变化剧烈、前景背景对比度大等问题，提出面向目标星的智能曝光与对焦控制算法，可在 3 帧内实现目标区域清晰成像。",
          "提出基于单目相机的非合作航天器相对导航方法，在 200 m-10 m 范围内平均误差 5.16%，NVIDIA TX2 上达到 10 FPS；相关专利已授权，论文发表于 ICoSR 2022。"
        ])
    )}

    ${section(
      "项目经历",
      expItem("中科院创新十六号卫星空间在轨服务演示验证（已发射）", "2021年09月 - 2022年12月", [
        "负责基于深度学习的在轨目标检测与相对导航算法开发及部署，采用多卫星预训练与目标星微调策略提升检测鲁棒性，并部署于 NVIDIA TX2 边缘计算设备。",
        "负责空间目标相机智能曝光与对焦算法，实现基于目标检测的局部曝光对焦、检测失败时的自适应阈值局部曝光、以及基于激光雷达测距信息的对焦策略。",
        "参与软硬件调试、数据在回路验证、载荷在回路验证、发射前流程测试和发射后遥测数据解析判读。"
      ]) +
        expItem("月球车原型系统自主导航算法地面验证", "2023年05月 - 2023年10月", [
          "负责自主导航坐标系统建立，包含月固系、导航系、小车本体系、载荷系等，并参与建图、定位、规划与控制一体化自主导航架构讨论。",
          "负责导航相机验收与内参标定，参与地面导航算法部署联调和地面验证。"
        ]) +
        expItem("中科院在轨服务地面验证任务", "2024年02月 - 2024年09月", [
          "提出目标检测与跟踪融合方法，实现目标星中心点的稳定识别与跟踪，输出平滑中心点用于控制。",
          "负责感知模块算法工程化与地面测试，使用 Docker 隔离算法模块，并完成无人机悬挂目标星由远及近飞行的抵近测试。"
        ])
    )}

    ${section(
      "竞赛获奖",
      twoColRows([
        ["中国科学院大学研究生论坛“航空宇航分论坛”第一名", "2025年11月"],
        ["IROS 2025 RoboSense Challenge 亚军 + 创新解决方案奖（队长）", "2025年10月"],
        ["CVPR 2024 SPARK 航天器位姿估计冠军（队员）", "2024年03月"],
        ["CVPR 2024 SPARK 航天器部件语义分割第四名（队长）", "2024年03月"],
        ["江苏省电子电路设计竞赛二等奖、南航校电赛一等奖", "本科阶段"],
      ])
    )}

    ${section(
      "专业技能",
      `<div class="skills">
        <p><strong>编程语言：</strong>Python、C++、MATLAB，熟悉 PyTorch 模型训练与实验分析。</p>
        <p><strong>空间智能：</strong>目标检测/分割、深度估计、6-DoF 位姿估计、相对导航、空间相机曝光对焦控制。</p>
        <p><strong>具身智能：</strong>VLM Agent、MCP 工具调用、ReAct / Prospective 推理、技能自演化、任务闭环验证。</p>
        <p><strong>平台工具：</strong>UE5、Airsim、Blender、ROS、Docker、Redis、GitHub、Jetson TX2 / Orin、空间相机、激光雷达。</p>
        <p><strong>语言能力：</strong>CET-6。</p>
      </div>`
    )}
  </main>
</body>
</html>`;

async function main() {
  fs.writeFileSync(htmlPath, html, "utf8");

  const { chromium } = loadPlaywright();
  const browser = await launchBrowser(chromium);
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 }, deviceScaleFactor: 1 });
  await page.goto(`file://${htmlPath.replaceAll("\\", "/")}`, { waitUntil: "load" });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    preferCSSPageSize: true,
  });
  if (shouldWritePreview) {
    await page.screenshot({ path: previewPath, fullPage: true });
  }
  await browser.close();

  console.log(`HTML: ${htmlPath}`);
  console.log(`PDF: ${pdfPath}`);
  if (shouldWritePreview) {
    console.log(`Preview: ${previewPath}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
