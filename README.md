# 阳光电源财务分析平台 ☀️

> 专业的财务数据分析与可视化平台，面向阳光电源 (300274.SZ) 的深度财务分析工具。

## 功能模块

| 模块 | 说明 |
|------|------|
| 📊 首页 | 公司总览、关键指标、营收利润趋势图、最新动态 |
| 🏢 公司概况 | 基本信息、主营业务、核心竞争力、发展历程 |
| 📋 财报分析 | 利润表、资产负债表、现金流量表、三项费用趋势、现金流结构分析 |
| 📈 财务指标 | 毛利率、净利率、ROE/ROA、资产负债率、流动比率等14个关键指标 |
| 💰 估值分析 | DCF估值模型（含交互式参数调节）、PE/PB/PEG估值 |
| 🔍 行业对比 | 与锦浪科技、固德威、上能电气、德业股份、禾迈股份的全面对比 |
| 📄 研究报告 | 新闻动态、行业政策、券商研报汇总 |

## 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite 8
- **路由**: React Router 7
- **图表**: Apache ECharts 5 + echarts-for-react
- **部署**: Cloudflare Pages

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## Cloudflare Pages 部署

### 方式一：通过 Wrangler CLI 部署

```bash
# 1. 安装 Wrangler
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 构建项目
npm run build

# 4. 部署到 Cloudflare Pages
wrangler pages deploy dist --project-name=sungrow-analysis
```

### 方式二：通过 Git + Cloudflare Dashboard 部署

1. 将代码推送到 GitHub/GitLab 仓库
2. 登录 Cloudflare Dashboard → Workers & Pages → Pages
3. 选择 "连接到 Git"
4. 导入本仓库
5. 构建设置:
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
   - **Node.js 版本**: 18 (或更高)
6. 点击 "部署"

### 方式三：通过 Cloudflare Dashboard 直接上传

1. 构建项目: `npm run build`
2. 登录 Cloudflare Dashboard → Workers & Pages → Pages
3. 点击 "上传资产"
4. 上传 `dist/` 文件夹内容

## 项目结构

```
sungrow-analysis/
├── public/
│   ├── 404.html               # SPA 回退页面
│   └── _routes.json            # Cloudflare 路由配置
├── src/
│   ├── components/
│   │   ├── Layout.tsx          # 页面布局
│   │   ├── Navbar.tsx          # 导航栏
│   │   └── Footer.tsx          # 页脚
│   ├── pages/
│   │   ├── Home.tsx            # 首页
│   │   ├── Company.tsx         # 公司概况
│   │   ├── Financials.tsx      # 财报分析
│   │   ├── Ratios.tsx          # 财务指标
│   │   ├── Valuation.tsx       # 估值分析
│   │   ├── Comparison.tsx      # 行业对比
│   │   └── Reports.tsx         # 研究报告
│   ├── data/
│   │   └── financialData.ts    # 财务数据与类型定义
│   ├── App.tsx                 # 路由配置
│   ├── main.tsx                # 应用入口
│   ├── index.css               # 全局样式
│   └── vite-env.d.ts           # TypeScript 声明
├── cloudflare.toml             # Cloudflare Pages 配置
├── vite.config.ts              # Vite 配置
├── tsconfig.json
├── package.json
└── README.md
```

## 数据说明

财务数据来源于阳光电源 (300274.SZ) 2019-2023 年年度报告，主要数据包括：
- 营业收入、营业成本、毛利润
- 归母净利润、营业利润
- 总资产、总负债、归母权益
- 经营活动现金流、投资活动现金流、筹资活动现金流
- 研发费用、销售费用、管理费用
- 存货、应收账款、应付账款、货币资金、固定资产

## 免责声明

本平台数据仅供参考和学习研究使用，**不构成任何投资建议**。投资有风险，入市需谨慎。
