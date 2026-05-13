// Usage: node generate_resume_pdf.js
// Output: 武奥迪_计算机_博士在读简历.html and 武奥迪_计算机_博士在读简历.pdf
// Style: updated from 原始资料/武奥迪研究生简历_未更新版.pdf, organized by the personal homepage structure.
// Optional visual debug: set RESUME_PREVIEW=1 to also write 武奥迪_计算机_博士在读简历.preview.png.

const fs = require("fs");
const os = require("os");
const path = require("path");
const { createRequire } = require("module");

const rootDir = __dirname;
const htmlPath = path.join(rootDir, "武奥迪_计算机_博士在读简历.html");
const pdfPath = path.join(rootDir, "武奥迪_计算机_博士在读简历.pdf");
const legacyHtmlPath = path.join(rootDir, "武奥迪_博士后申请简历.html");
const legacyPdfPath = path.join(rootDir, "武奥迪_博士后申请简历.pdf");
const publicResumeDir = path.join(rootDir, "files");
const publicHtmlPath = path.join(publicResumeDir, "cv.html");
const publicPdfPath = path.join(publicResumeDir, "cv.pdf");
const avatarPath = path.join(rootDir, "images", "wuaodi-512x512.png");
const previewPath = path.join(rootDir, "武奥迪_计算机_博士在读简历.preview.png");
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

function anchor(href, label = href) {
  return `<a href="${esc(href)}">${esc(label)}</a>`;
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
  <title>武奥迪 - 计算机 - 博士在读</title>
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
    a {
      color: #111;
      text-decoration: none;
    }
    .sheet {
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      padding: 10mm 12mm 9mm;
      background: #fff;
      page-break-after: always;
    }
    .sheet:last-child { page-break-after: auto; }
    .top {
      display: grid;
      grid-template-columns: 1fr 24mm;
      gap: 9mm;
      align-items: start;
      margin-bottom: 6mm;
    }
    h1 {
      margin: 0 0 2.4mm;
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
      gap: 1.4mm 8mm;
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
    section { margin-top: 5mm; }
    h2 {
      display: flex;
      align-items: center;
      margin: 0 0 3mm;
      height: 7.2mm;
      background: #f0f0f0;
      font-size: 15px;
      font-weight: 900;
      line-height: 7.2mm;
    }
    h2::before {
      content: "";
      display: inline-block;
      width: 1.2mm;
      height: 7.2mm;
      margin-right: 4mm;
      background: #111;
    }
    h2 span { display: inline-block; }
    .item { margin: 2.1mm 0; }
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
      margin: 1.1mm 0;
      font-size: 10.6px;
      text-align: justify;
    }
    ul {
      margin: .8mm 0 0;
      padding-left: 5mm;
    }
    li {
      margin: .7mm 0;
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
        <h1>武奥迪<span class="apply">计算机 · 博士在读</span></h1>
        <div class="contact">
          <div><strong>微信</strong><span>18937531481</span></div>
          <div><strong>邮箱</strong><span>wuaodi20@mails.ucas.ac.cn</span></div>
          <div><strong>主页</strong><span>${anchor("https://wuaodi.github.io/")}</span></div>
          <div><strong>GitHub</strong><span>${anchor("https://github.com/wuaodi")}</span></div>
          <div><strong>方向</strong><span>具身智能体、多模态感知、太空机器人</span></div>
          <div><strong>位置</strong><span>北京 / 中国科学院大学</span></div>
        </div>
      </div>
      <img class="avatar" src="${avatar}" alt="武奥迪">
    </header>

    ${section(
      "关于我",
      `<div class="summary">${lines([
        "我是中国科学院大学计算机应用技术博士生，导师为万雪研究员，在中科院空间应用工程与技术中心开展研究。",
        "我的研究面向空间具身智能，关注具身智能体、视觉感知与导航、仿真到真机验证。过去的工作把 VLM Agent、多模态感知、相对导航和真实机器人/在轨平台连接起来，形成从数据构建、模型训练推理、算法部署到闭环验证的完整链条。"
      ])}</div>`
    )}

    ${section(
      "教育经历",
      educationItem(
        "中国科学院大学",
        "计算机应用技术 博士 · 中科院空间应用工程与技术中心 · 导师：万雪 研究员",
        "2023年09月 - 至今（预计2026年12月毕业）",
        "北京",
        "研究方向：LVM具身智能体、多模态视觉感知、太空机器人。"
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
          "GPA：4.0/5.0，平均分 90，排名前 10%；获研究生推免资格，担任班级团支书；获江苏省电赛二等奖（无线充电小车爬坡）、南航校电赛一等奖（单片机编程）。"
        )
    )}

    ${section(
      "代表性工作",
      expItem("SpaceMind：面向太空机器人的模块化自进化具身 VLM 智能体", "2025年 - 2026年", [
        "提出面向空间机器人的 embodied VLM agent framework，将 LVM 大脑、MCP 工具库、专用小模型与技能模块解耦，支持 Standard / ReAct / Prospective 三种推理模式。",
        "构建技能自进化机制，使智能体能够将失败经验沉淀为可复用技能；在 5 颗卫星、3 类任务、2 个环境下完成 192 次闭环运行。",
        "UE5 仿真与真实机器人实验室使用同一份代码完成迁移验证，物理平台迁移成功率 100%。该工作对应机器人任务规划、工具调用、技能沉淀和 sim-to-real 闭环验证能力；会议论文被 IAA-SPAICE 2025 接收，期刊扩展版投稿 Acta Astronautica。"
      ]) +
        expItem("SpaceSense-Bench：航天器感知与位姿估计大规模多模态基准", "2025年 - 2026年", [
          "构建包含 136 颗卫星、约 70 GB 时间同步 RGB 图像、深度图、256 线 LiDAR 点云的数据集，提供部件语义标注与高精度 6-DoF 位姿真值。",
          "支持 2D/3D 检测、2D/3D 分割、点云分割、深度估计、6-DoF 位姿估计和多模态融合等任务；数据集、代码和工具箱已开源。",
          "论文投稿 IROS 2026；项目在 arXiv、HuggingFace 与项目主页发布，HuggingFace 下载量 2700+。"
        ]) +
        expItem("基于动态路由与空间推理的自动驾驶 VLM 增强方案", "2025年", [
          "作为队长参加 IROS 2025 RoboSense Challenge，提出动态路由模块，将不同问题分发给对应专家提示，并结合显式多视图坐标系建模，缓解任务间提示干扰和后视相机方位混淆。",
          "基于 Qwen2.5-VL-72B，Phase-1 干净数据 70.87%，Phase-2 受扰数据 72.85%，最终获得亚军与创新解决方案奖，可迁移到机器人多视角感知、空间关系理解和 VLM 决策评估。"
        ]) +
        expItem("CVPR 2024 SPARK 挑战赛：非合作航天器感知", "2024年", [
          "面向仿真与真实卫星图像的航天器位姿估计与部件分割任务，参与集成多分割算法、深度估计、绝对定位与相对定位方法。",
          "位姿估计赛道获得冠军（队员），部件分割赛道获得第 4 名（队长）。"
        ]) +
        expItem("硕士期间代表工作：达芬奇在轨服务卫星视觉感知与单目导航", "2020年 - 2023年", [
          "围绕达芬奇空间在轨服务卫星，开展相机控制、视觉感知与单目相对导航研究，工作从算法研发、软硬件集成推进到在轨任务验证，已完成工程落地。",
          "提出空间相机智能曝光与对焦控制方法，相关发明专利 CN 2023102948012 已授权；非合作航天器单目相对导航算法完成在轨验证，论文发表于 ICoSR 2022。",
          "研究跨域航天器部件分割，提出边缘一致性训练策略，在下游分割任务中提升精度 5.1%，相关论文被 ICDIP 2025 接收；整体工作体现了视觉感知算法从训练、部署到真实任务验证的工程闭环能力。"
        ])
    )}
  </main>

  <main class="sheet">
    ${section(
      "项目经历",
      expItem("中科院创新十六号卫星空间视觉导航演示验证（已发射）", "2021年09月 - 2022年12月", [
        "负责在轨目标检测、相对导航与相机控制算法部署，并参与软硬件调试、数据/载荷在回路验证、发射前测试和发射后遥测判读。",
        "算法部署于 NVIDIA TX2 边缘计算设备，支撑在轨服务演示验证，并将实验室算法适配到受算力、时延与可靠性约束的工程环境。"
      ]) +
        expItem("月球车原型系统自主导航算法地面验证", "2023年05月 - 2023年10月", [
          "负责自主导航坐标系统建立，参与建图、定位、规划与控制一体化架构讨论，并完成导航相机验收、内参标定和地面联调。",
          "参与地面导航算法部署验证，支撑月面自主导航原型系统的闭环测试。"
        ]) +
        expItem("中科院在轨服务地面验证任务", "2024年02月 - 2024年09月", [
          "提出目标检测与跟踪融合方法，负责感知模块工程化与地面测试，使用 Docker 隔离算法模块并完成抵近测试。",
          "在无人机悬挂目标星由远及近飞行场景下验证感知输出稳定性，为控制模块提供平滑目标中心点。"
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
        <p><strong>视觉感知：</strong>目标检测/分割、深度估计、6-DoF 位姿估计、相对导航、多模态融合。</p>
        <p><strong>具身智能：</strong>VLM Agent、MCP 工具调用、ReAct / Prospective 推理、技能自进化、任务闭环验证。</p>
        <p><strong>仿真验证：</strong>UE5/Airsim 空间环境搭建，多传感器数据采集，仿真到真实迁移，真实机器人闭环实验。</p>
        <p><strong>平台工具：</strong>Blender、ROS、Docker、Redis、GitHub、Jetson TX2 / Orin、空间相机、激光雷达。</p>
        <p><strong>语言能力：</strong>CET-6。</p>
      </div>`
    )}

    ${section(
      "研究兴趣",
      `<div class="skills">
        <p><strong>具身智能体：</strong>面向可泛化场景的感知、推理、工具调用与行动闭环。</p>
        <p><strong>多模态感知：</strong>RGB / 深度 / LiDAR 航天器感知、部件理解、位姿估计与跨域泛化。</p>
        <p><strong>系统验证：</strong>从 UE5/Airsim 仿真、多源数据构建到真实机器人平台迁移验证。</p>
      </div>`
    )}
  </main>
</body>
</html>`;

async function main() {
  fs.mkdirSync(publicResumeDir, { recursive: true });
  fs.writeFileSync(htmlPath, html, "utf8");
  fs.writeFileSync(legacyHtmlPath, html, "utf8");
  fs.writeFileSync(publicHtmlPath, html, "utf8");

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
  fs.copyFileSync(pdfPath, legacyPdfPath);
  fs.copyFileSync(pdfPath, publicPdfPath);

  console.log(`HTML: ${htmlPath}`);
  console.log(`PDF: ${pdfPath}`);
  console.log(`Compatibility HTML: ${legacyHtmlPath}`);
  console.log(`Compatibility PDF: ${legacyPdfPath}`);
  console.log(`Public HTML: ${publicHtmlPath}`);
  console.log(`Public PDF: ${publicPdfPath}`);
  if (shouldWritePreview) {
    console.log(`Preview: ${previewPath}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
