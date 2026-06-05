export interface FinancialYear {
  year: number; revenue: number; cost: number; grossProfit: number;
  operatingProfit: number; netProfit: number; totalAssets: number;
  totalLiabilities: number; equity: number; operatingCF: number;
  investingCF: number; financingCF: number; rndExpense: number;
  sgExpense: number; adminExpense: number; inventory: number;
  accountsReceivable: number; accountsPayable: number; cashEquivalents: number;
  fixedAssets: number; goodwill: number;
}
export interface RatioData {
  year: number; grossMargin: number; netMargin: number; roe: number; roa: number;
  currentRatio: number; quickRatio: number; debtRatio: number; assetTurnover: number;
  inventoryTurnover: number; daysReceivable: number; revenueGrowth: number;
  profitGrowth: number; eps: number; bvps: number;
}
export const financialData: FinancialYear[] = [
  { year:2019, revenue:130.03, cost:94.56, grossProfit:35.47, operatingProfit:10.79, netProfit:8.93, totalAssets:248.65, totalLiabilities:156.74, equity:85.41, operatingCF:6.79, investingCF:-12.16, financingCF:5.51, rndExpense:5.16, sgExpense:11.08, adminExpense:3.95, inventory:37.52, accountsReceivable:95.89, accountsPayable:55.73, cashEquivalents:40.47, fixedAssets:31.64, goodwill:2.88 },
  { year:2020, revenue:192.86, cost:136.23, grossProfit:56.63, operatingProfit:22.73, netProfit:19.53, totalAssets:321.86, totalLiabilities:185.26, equity:129.70, operatingCF:30.91, investingCF:-32.80, financingCF:3.90, rndExpense:7.89, sgExpense:15.18, adminExpense:5.36, inventory:48.50, accountsReceivable:107.38, accountsPayable:68.12, cashEquivalents:68.18, fixedAssets:37.28, goodwill:3.42 },
  { year:2021, revenue:241.37, cost:175.81, grossProfit:65.56, operatingProfit:17.93, netProfit:15.29, totalAssets:451.30, totalLiabilities:278.41, equity:165.69, operatingCF:3.24, investingCF:-14.06, financingCF:43.66, rndExpense:11.62, sgExpense:16.02, adminExpense:7.58, inventory:87.51, accountsReceivable:136.11, accountsPayable:90.88, cashEquivalents:87.76, fixedAssets:39.38, goodwill:2.70 },
  { year:2022, revenue:400.54, cost:283.57, grossProfit:116.97, operatingProfit:41.51, netProfit:35.93, totalAssets:675.82, totalLiabilities:420.76, equity:247.08, operatingCF:13.38, investingCF:-55.96, financingCF:36.28, rndExpense:16.30, sgExpense:23.79, adminExpense:10.99, inventory:145.44, accountsReceivable:167.70, accountsPayable:189.51, cashEquivalents:112.43, fixedAssets:56.64, goodwill:2.52 },
  { year:2023, revenue:722.51, cost:491.05, grossProfit:231.46, operatingProfit:107.67, netProfit:94.40, totalAssets:1102.09, totalLiabilities:656.92, equity:435.49, operatingCF:66.82, investingCF:-157.82, financingCF:89.19, rndExpense:24.47, sgExpense:48.10, adminExpense:19.01, inventory:276.15, accountsReceivable:252.12, accountsPayable:299.87, cashEquivalents:148.81, fixedAssets:90.63, goodwill:3.15 },
];
export const ratioData: RatioData[] = financialData.map(d => ({
  year:d.year, grossMargin:+(d.grossProfit/d.revenue*100).toFixed(2), netMargin:+(d.netProfit/d.revenue*100).toFixed(2), roe:+(d.netProfit/d.equity*100).toFixed(2), roa:+(d.netProfit/d.totalAssets*100).toFixed(2), currentRatio:+((d.cashEquivalents+d.accountsReceivable+d.inventory)/d.totalLiabilities).toFixed(2), quickRatio:+((d.cashEquivalents+d.accountsReceivable)/d.totalLiabilities).toFixed(2), debtRatio:+(d.totalLiabilities/d.totalAssets*100).toFixed(2), assetTurnover:+(d.revenue/d.totalAssets).toFixed(2), inventoryTurnover:+(d.cost/d.inventory).toFixed(2), daysReceivable:+((d.accountsReceivable/d.revenue)*365).toFixed(1), revenueGrowth:0, profitGrowth:0, eps:0, bvps:+(d.equity/14.85).toFixed(2),
}));
for (let i=ratioData.length-1; i>0; i--) {
  ratioData[i].revenueGrowth = +((financialData[i].revenue/financialData[i-1].revenue-1)*100).toFixed(2);
  ratioData[i].profitGrowth = +((financialData[i].netProfit/financialData[i-1].netProfit-1)*100).toFixed(2);
  ratioData[i].eps = +(financialData[i].netProfit/14.85).toFixed(2);
}
ratioData[0].eps = +(financialData[0].netProfit/14.85).toFixed(2);
export const peerComparison = [
  { name:'阳光电源', code:'300274.SZ', revenue:722.51, netProfit:94.40, grossMargin:32.04, netMargin:13.07, roe:21.68, debtRatio:59.61, revenueGrowth:80.39, marketCap:1580, pe:16.74 },
  { name:'锦浪科技', code:'300763.SZ', revenue:61.01, netProfit:8.79, grossMargin:33.54, netMargin:14.41, roe:18.56, debtRatio:44.72, revenueGrowth:23.48, marketCap:256, pe:29.12 },
  { name:'固德威', code:'688390.SH', revenue:73.53, netProfit:7.15, grossMargin:31.25, netMargin:9.72, roe:14.83, debtRatio:52.14, revenueGrowth:45.67, marketCap:178, pe:24.90 },
  { name:'上能电气', code:'300827.SZ', revenue:49.33, netProfit:3.21, grossMargin:21.87, netMargin:6.51, roe:12.45, debtRatio:58.97, revenueGrowth:65.31, marketCap:89, pe:27.72 },
  { name:'德业股份', code:'605117.SH', revenue:78.79, netProfit:17.86, grossMargin:36.12, netMargin:22.67, roe:32.41, debtRatio:38.26, revenueGrowth:56.78, marketCap:412, pe:23.07 },
  { name:'禾迈股份', code:'688032.SH', revenue:20.36, netProfit:6.12, grossMargin:45.62, netMargin:30.06, roe:12.87, debtRatio:14.53, revenueGrowth:33.45, marketCap:198, pe:32.35 },
];
export const newsData = [
  { date:'2026-05-28', title:'阳光电源发布新一代储能系统PowerStack 300', summary:'公司推出面向大型储能场景的新一代液冷储能系统，能量密度提升25%，系统效率达91.5%。', category:'公司新闻' },
  { date:'2026-05-15', title:'工信部发布《光伏制造行业规范条件(2026年本)》', summary:'新规进一步提高光伏制造环节准入门槛，引导行业高质量发展，利好龙头企业。', category:'政策解读' },
  { date:'2026-05-08', title:'阳光电源中标沙特2.6GWh储能项目', summary:'公司在中东市场再获重大突破，中标沙特阿拉伯NEOM新城2.6GWh储能系统订单。', category:'公司新闻' },
  { date:'2026-04-22', title:'2026年一季度全球逆变器出货量排名发布', summary:'阳光电源继续稳居全球光伏逆变器出货量第一，市场份额约25%。', category:'行业动态' },
  { date:'2026-04-10', title:'阳光电源2025年报：营收首次突破千亿大关', summary:'公司2025年全年营收达1058亿元，同比增长46.4%，归母净利润136.7亿元。', category:'研究报告' },
  { date:'2026-03-28', title:'欧盟CBAM碳边境调节机制对中国光伏出口影响分析', summary:'分析欧盟碳关税政策对中国光伏组件及逆变器出口的潜在影响。', category:'政策解读' },
  { date:'2026-03-15', title:'阳光电源与宁德时代签署战略合作协议', summary:'双方将在储能电池、光储一体化等领域开展深度合作，共同开拓全球市场。', category:'公司新闻' },
  { date:'2026-03-01', title:'国内储能市场2025年装机规模超100GWh', summary:'2025年国内新型储能新增装机约115GWh，同比增长85%，储能市场持续高速增长。', category:'行业动态' },
  { date:'2026-02-15', title:'阳光电源研发投入连续三年增长超40%', summary:'公司持续加大技术创新投入，研发人员占比突破30%，累计专利超6000项。', category:'研究报告' },
  { date:'2026-01-20', title:'国家能源局印发《新型储能发展规划(2026-2030)》', summary:'规划提出到2030年新型储能装机规模达到200GW以上，较2025年增长约3倍。', category:'政策解读' },
];
