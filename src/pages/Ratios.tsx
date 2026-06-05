import { peerComparison } from '../data/financialData';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart, RadarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent, RadarComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, RadarChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent, RadarComponent, CanvasRenderer]);

const sorted = [...peerComparison].sort((a,b) => b.revenue - a.revenue);

const barOpt = {
  tooltip: { trigger: 'axis' as const },
  legend: { data: ['营业收入(亿元)', '归母净利润(亿元)'] },
  grid: { left: '8%', right: '8%', bottom: '15%' },
  xAxis: { type: 'category' as const, data: sorted.map(d => d.name), axisLabel: { rotate: 30, fontSize: 11 } },
  yAxis: [{ type: 'value' as const, name: '亿元' }],
  series: [
    { name: '营业收入(亿元)', type: 'bar' as const, data: sorted.map(d => d.revenue), itemStyle: { color: '#1a6b3c' }, barWidth: '28%' },
    { name: '归母净利润(亿元)', type: 'bar' as const, data: sorted.map(d => d.netProfit), itemStyle: { color: '#d97706' }, barWidth: '28%' },
  ],
};

const marginOpt = {
  tooltip: { trigger: 'axis' as const },
  legend: { data: ['毛利率(%)', '净利率(%)'] },
  grid: { left: '8%', right: '8%', bottom: '15%' },
  xAxis: { type: 'category' as const, data: sorted.map(d => d.name), axisLabel: { rotate: 30, fontSize: 11 } },
  yAxis: { type: 'value' as const, name: '%' },
  series: [
    { name: '毛利率(%)', type: 'bar' as const, data: sorted.map(d => d.grossMargin), itemStyle: { color: '#22c55e' }, barWidth: '28%' },
    { name: '净利率(%)', type: 'bar' as const, data: sorted.map(d => d.netMargin), itemStyle: { color: '#3b82f6' }, barWidth: '28%' },
  ],
};

export default function Comparison() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <p className="page-eyebrow">Industry Comparison</p>
        <h1 className="page-title">行业对比分析</h1>
        <p className="page-desc">与国内主要光伏逆变器上市公司的关键财务指标对比。</p>
      </div>

      <div className="chart-container">
        <h3 className="chart-title">营业收入与净利润对比 (2023年)</h3>
        <ReactEChartsCore echarts={echarts} option={barOpt} style={{ height: 380 }} notMerge />
      </div>
      <div className="chart-container">
        <h3 className="chart-title">毛利率与净利率对比</h3>
        <ReactEChartsCore echarts={echarts} option={marginOpt} style={{ height: 360 }} notMerge />
      </div>

      <div className="table-container">
        <h3 className="chart-title">同行上市公司对比表</h3>
        <table className="data-table">
          <thead>
            <tr><th>公司名称</th><th>代码</th><th>营收(亿)</th><th>净利润(亿)</th><th>毛利率%</th><th>净利率%</th><th>ROE%</th><th>资产负债率%</th><th>营收增速%</th><th>市值(亿)</th><th>PE</th></tr>
          </thead>
          <tbody>
            {sorted.map((p, i) => (
              <tr key={i} style={p.name === '阳光电源' ? { background: '#f0fdf4' } : {}}>
                <td style={{ fontWeight: p.name === '阳光电源' ? 700 : 400 }}>{p.name}</td>
                <td>{p.code}</td>
                <td>{p.revenue.toFixed(1)}</td>
                <td>{p.netProfit.toFixed(1)}</td>
                <td>{p.grossMargin.toFixed(1)}</td>
                <td>{p.netMargin.toFixed(1)}</td>
                <td>{p.roe.toFixed(1)}</td>
                <td>{p.debtRatio.toFixed(1)}</td>
                <td>{p.revenueGrowth.toFixed(1)}</td>
                <td>{p.marketCap}</td>
                <td>{p.pe.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-grid">
        <div className="card">
          <div className="card-title">🥇 营收规模</div>
          <div className="card-value up">行业第一</div>
          <div className="card-sub">远超同行，是第二名的 11.8 倍</div>
        </div>
        <div className="card">
          <div className="card-title">🥇 净利润规模</div>
          <div className="card-value up">行业第一</div>
          <div className="card-sub">是第二名的 5.3 倍</div>
        </div>
        <div className="card">
          <div className="card-title">📊 营收增速</div>
          <div className="card-value up">80.4%</div>
          <div className="card-sub">行业增速最高，龙头地位稳固</div>
        </div>
        <div className="card">
          <div className="card-title">⚖️ 估值水平</div>
          <div className="card-value down">PE 16.7x</div>
          <div className="card-sub">估值低于行业平均，价值凸显</div>
        </div>
      </div>
    </div>
  );
}
