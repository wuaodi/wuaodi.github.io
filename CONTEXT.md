# Context

## 原始资料
原始资料文件夹放着个人相关的各种资料

## 查看效果
如果想要查看编译后的效果，可以先推送到github，过几分钟等在线编译完成后，访问`https://wuaodi.github.io`即可。


## Project Summary
基于 Jekyll 的个人学术主页（[wuaodi.github.io](https://wuaodi.github.io)），由 `acad-homepage.github.io` 模板改造而来。主人公为武奥迪（Aodi Wu），中国科学院大学计算机应用技术博士生，研究方向是空间 AI、在轨服务、多模态航天器感知与具身智能。当前主页用英文写就，主体内容由若干 markdown 片段拼装，正在新增"一键中英切换"能力。

## Structure
- `_config.yml`: Jekyll 站点配置（标题、作者信息、SEO、Sass、permalink 等），描述里包含主页 SEO 摘要。
- `_data/navigation.yml`: 顶部导航项（About / News / Publications / Projects / Honors / Education）。
- `_layouts/default.html`: 唯一布局，组装 head + masthead + sidebar + content + scripts。
- `_includes/`: 通用片段。
  - `masthead.html`: 顶部导航条，遍历 `navigation.yml`。
  - `sidebar.html` + `author-profile.html`: 左侧作者卡片（头像、简介、地点、单位、社交链接）。
  - `head.html`、`head/custom.html`: meta、favicon、自定义 CSS、MathJax。
  - `scripts.html`、`analytics.html`、`fetch_google_scholar_stats.html`、`seo.html`: 脚本与统计、SEO。
- `_pages/about.md`: 站点首页，通过 `include_relative` 拼接 5 个内容片段。
- `_pages/include/`: 各内容区块的 markdown 源文件。
  - `intro.md`: About 段落。
  - `news.md`: News 列表。
  - `pub.md`: Selected Publications + Patent。
  - `honers.md`: Honors and Awards（拼写沿用上游）。
  - `others.md`: Selected Projects + Education + Research Interests + Contact。
- `_sass/`: 模板的 Sass 源（minimal-mistakes 衍生）。
- `assets/css/main.scss`: 主样式入口，编译为 `assets/css/main.css`。
- `assets/js/main.min.js`: 编译后的前端脚本（jQuery、smoothScroll、magnific-popup、stickyfill 等）。
- `assets/js/_main.js`: 主脚本源（sticky sidebar、smooth scroll、image lightbox 等）。
- `images/`: 头像、favicon、项目示意图（如 `projects/spacemind-method.png`）。
- `Gemfile` / `Gemfile.lock`: `github-pages` + `jekyll-feed` + `jekyll-sitemap` + `hawkins`（livereload）。
- `run_server.sh`: 一行 `bundle exec jekyll liveserve`，本地预览入口。
- `docs/`: 模板原始截图与中文 README，构建时被 `_config.yml` 的 `exclude` 排除。
- `.github/`: GitHub Pages 构建工作流。

## Key Files
- `_config.yml`: 改 SEO、社交链接、作者信息的唯一入口；改后需重启 Jekyll。
- `_pages/about.md`: 控制首页结构，调整 section 顺序在这里。
- `_pages/include/*.md`: 主要内容编辑区，对应导航锚点（`#about` / `#news` / `#publications` / `#projects` / `#honors` / `#education`）。
- `_includes/masthead.html`: 顶部菜单和"Homepage"按钮所在位置，是新增语言切换按钮的合适位置。
- `_includes/author-profile.html`: 侧边栏个人卡片，bio / location / employer 字段来自 `_config.yml`。
- `_includes/head/custom.html`: 自定义 CSS 注入位置。
- `_includes/scripts.html`: 自定义 JS 注入位置。

## Entry Points And Commands
- 主入口页：`/_pages/about.md` → 首页 `/`。
- 本地预览：`bash run_server.sh`（实际执行 `bundle exec jekyll liveserve`），首次需 `bundle install`。
- 部署：推送到 GitHub `main` 分支，GitHub Pages 自动构建。
- Google Scholar 引用统计：`.github/` 中的 action 在 `google-scholar-stats` 分支生成 `gs_data.json`。

## Current Constraints Or Risks
- 使用 GitHub Pages 安全模式，插件白名单限定为 `_config.yml` 中 `whitelist` 列出的项。
- `assets/js/main.min.js` 是预编译压缩版；修改 `_main.js` 后不会自动生效，需要走构建流程或直接在页面里追加新脚本。
- 内容文件目前为纯英文，添加中文版本时需要保持 anchor `<span class='anchor' id='...'></span>` 与导航锚点一致。
- `markdown_ext` 限制只识别 markdown 后缀，新建中文片段建议沿用 `.md`。

## Notes For Future Sessions
- 中英切换实现思路：每段内容准备 EN/ZH 两份 include；在 `about.md` 用 `<div data-lang="en">` / `<div data-lang="zh">` 包裹；侧边栏与导航通过 `_config.yml`、`navigation.yml` 增加 `*_zh` 字段，模板里输出 `data-i18n-en` / `data-i18n-zh` 两段文本；JS 监听切换按钮，写入 `localStorage` 的 `site-lang`，按 `<html lang>` 切换可见区块。
- 切换按钮加在 `_includes/masthead.html`，自定义样式与逻辑放在 `_includes/head/custom.html`（CSS）和 `_includes/scripts.html`（JS）。
- 修改 `_config.yml` 后 `jekyll liveserve` 不会热重载，需要 Ctrl+C 重启。

## 待你补充的素材（占位符）
- `_pages/include/demos.md` 和 `demos-zh.md` 里 `YOUTUBE_ID_SPACEMIND` / `YOUTUBE_ID_SPACESENSE` 两处占位需要替换为真实 YouTube 视频 ID（不是完整 URL，只要 `https://www.youtube.com/watch?v=XXXXXXX` 里的 `XXXXXXX` 部分）。两个文件里每个 ID 各出现两次（src 中 + loop 用的 playlist 参数），grep+替换即可。
- `_pages/include/featured.md` 和 `featured-zh.md` 中 CVPR SPARK 卡片暂用 `images/500x300.png` 占位，可以把比赛 leaderboard 截图或方法图放到 `images/paper/spark-cvpr2024.png` 后替换。

## 主页结构（2026.05 更新后）
1. About（双语精炼简介 + 关键词）
2. News（最近一年动态）
3. Featured Demos（并排 2 个 YouTube iframe + Bilibili 兜底链接）
4. Selected Work（5 张 paper-box 卡：SpaceMind / SpaceSense-Bench / 达芬奇卫星硕士整合卡 / IROS RoboSense / CVPR SPARK）
5. Publications（含专利的紧凑列表）
6. Honors and Awards
7. Education / Research Interests / Contact

