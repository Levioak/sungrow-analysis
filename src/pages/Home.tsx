import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { financialData, ratioData } from '../data/financialData';
echarts.use([BarChart, LineChart, PieChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent, CanvasRenderer]);

const roeOption = {
  tooltip: { trigger: 'axis' as const },
  legend: { data: ['ROE(%)', 'ROA(%)'] },
  grid: { left: '8%', right: '8%', bottom: '10%' },
  xAxis: { type: 'category' as const, data: financialData.map(d => d.year) },
  yAxis: { type: 'value' as const, name: '%' },
  series: [
    { name: 'ROE(%)', type: 'line' as const, data: ratioData.map(d => d.roe), smooth: true, lineStyle: { color: '#1a6b3c', width: 3 }, itemStyle: { color: '#1a6b3c' }, symbolSize: 8, areaStyle: { color: 'rgba(26,107,60,0.1)' } },
    { name: 'ROA(%)', type: 'line' as const, data: ratioData.map(d => d.roa), smooth: true, lineStyle: { color: '#d97706', width: 3 }, itemStyle: { color: '#d97706' }, symbolSize: 8, areaStyle: { color: 'rgba(217,119,6,0.1)' } },
  ],
};

const marginOption = {
  tooltip: { trigger: 'axis' as const },
  legend: { data: ['毛利率(%)', '净利率(%)'] },
  grid: { left: '8%', right: '8%', bottom: '10%' },
  xAxis: { type: 'category' as const, data: financialData.map(d => d.year) },
  yAxis: { type: 'value' as const, name: '%' },
  series: [
    { name: '毛利率(%)', type: 'line' as const, data: ratioData.map(d => d.grossMargin), smooth: true, lineStyle: { color: '#1a6b3c', width: 3 }, itemStyle: { color: '#1a6b3c' }, symbolSize: 8 },
    { name: '净利率(%)', type: 'line' as const, data: ratioData.map(d => d.netMargin), smooth: true, lineStyle: { color: '#d97706', width: 3 }, itemStyle: { color: '#d97706' }, symbolSize: 8 },
  ],
};

const debtOpt = {
  tooltip: { trigger: 'axis' as const },
  grid: { left: '8%', right: '8%', bottom: '10%' },
  xAxis: { type: 'category' as const, data: financialData.map(d => d.year) },
  yAxis: { type: 'value' as const, name: '%', max: 100 },
  series: [
    { name: '资产负债率(%)', type: 'line' as const, data: ratioData.map(d => d.debtRatio), smooth: true, lineStyle: { color: '#ef4444', width: 3 }, itemStyle: { color: '#ef4444' }, symbolSize: 8, areaStyle: { color: 'rgba(239,68,68,0.1)' } },
  ],
};

export default function Ratios() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <p className="page-eyebrow">Financial Ratios</p>
        <h1 className="page-title">财务指标分析</h1>
        <p className="page-desc">关键财务比率指标，全面评估公司的盈利能力、偿债能力和运营效率。</p>
      </div>

      <div className="card-grid">
        {[{
          t: '毛利率 2023', v: `${ratioData[4].grossMargin}%`, s: '较去年提升',
          c: 'up' as const
        }, {
          t: '净利率 2023', v: `${ratioData[4].netMargin}%`, s: '持续改善',
          c: 'up' as const
        }, {
          t: '资产负债率', v: `${ratioData[4].debtRatio}%`, s: '处于行业合理水平',
          c: 'down' as const
        }, {
          t: '每股收益 2023', v: `${ratioData[4].eps}元`, s: '同比增长显著',
          c: 'up' as const
        }].map((item, i) => (
          <div key={i} className="card">
            <div className="card-title">{item.t}</div>
            <div className={`card-value ${item.c}`}>{item.v}</div>
            <div className="card-sub">{item.s}</div>
          </div>
        ))}
      </div>

      <div className="chart-container"><h3 className="chart-title">ROE与ROA趋势</h3><ReactEChartsCore echarts={echarts} option={roeOption} style={{ height: 340 }} notMerge /></div>
      <div className="chart-container"><h3 className="chart-title">毛利率与净利率趋势</h3><ReactEChartsCore echarts={echarts} option={marginOption} style={{ height: 340 }} notMerge /></div>
      <div className="chart-container"><h3 className="chart-title">资产负债率趋势</h3><ReactEChartsCore echarts={echarts} option={debtOpt} style={{ height: 320 }} notMerge /></div>

      <div className="table-container">
        <h3 className="chart-title">详细比率数据</h3>
        <table className="data-table">
          <thead><tr><th>指标</th>{ratioData.map(d => <th key={d.year}>{d.year}</th>)}</tr></thead>
          <tbody>
            {[
              { l: '毛利率(%)', d: ratioData.map(d => d.grossMargin) },
              { l: '净利率(%)', d: ratioData.map(d => d.netMargin) },
              { l: 'ROE(%)', d: ratioData.map(d => d.roe) },
              { l: 'ROA(%)', d: ratioData.map(d => d.roa) },
              { l: '流动比率', d: ratioData.map(d => d.currentRatio) },
              { l: '速动比率', d: ratioData.map(d => d.quickRatio) },
              { l: '资产负债率(%)', d: ratioData.map(d => d.debtRatio) },
              { l: '总资产周转率', d: ratioData.map(d => d.assetTurnover) },
              { l: '存货周转率', d: ratioData.map(d => d.inventoryTurnover) },
              { l: '应收账款周转天数', d: ratioData.map(d => d.daysReceivable) },
              { l: '营收增长率(%)', d: ratioData.map(d => d.revenueGrowth) },
              { l: '净利润增长率(%)', d: ratioData.map(d => d.profitGrowth) },
              { l: '每股收益(元)', d: ratioData.map(d => d.eps) },
              { l: '每股净资产(元)', d: ratioData.map(d => d.bvps) },
            ].map(row => (
              <tr key={row.l}><td>{row.l}</td>{row.d.map((v, i) => <td key={i}>{v}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
