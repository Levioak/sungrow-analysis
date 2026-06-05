import { financialData, ratioData } from '../data/financialData';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { useState } from 'react';
echarts.use([BarChart, LineChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent, CanvasRenderer]);

export default function Valuation() {
  const [wacc, setWacc] = useState(9);
  const [growthRate, setGrowthRate] = useState(15);
  const [terminalGrowth, setTerminalGrowth] = useState(3);

  const latestProfit = financialData[4].netProfit;
  const years_proj = [1,2,3,4,5];
  const fcf = years_proj.map(y => latestProfit * Math.pow(1 + growthRate/100, y));
  const pv = fcf.map((f, i) => f / Math.pow(1 + wacc/100, i + 1));
  const terminal = fcf[4] * (1 + terminalGrowth/100) / ((wacc - terminalGrowth)/100);
  const terminalPv = terminal / Math.pow(1 + wacc/100, 5);
  const enterpriseValue = pv.reduce((a,b) => a+b, 0) + terminalPv;
  const equityValue = enterpriseValue;
  const shares = 14.85;
  const targetPrice = equityValue / shares;

  const dcFOption = {
    tooltip: { trigger: 'axis' as const },
    legend: { data: ['预测自由现金流(亿元)', '折现值(亿元)'] },
    grid: { left: '8%', right: '8%', bottom: '10%' },
    xAxis: { type: 'category' as const, data: ['第1年','第2年','第3年','第4年','第5年'] },
    yAxis: { type: 'value' as const, name: '亿元' },
    series: [
      { name: '预测自由现金流(亿元)', type: 'bar' as const, data: fcf.map(v => +v.toFixed(1)), itemStyle: { color: '#1a6b3c' } },
      { name: '折现值(亿元)', type: 'bar' as const, data: pv.map(v => +v.toFixed(1)), itemStyle: { color: '#d97706' } },
    ],
  };

  return (
    <div className="page-shell">
      <div className="page-header">
        <p className="page-eyebrow">Valuation Analysis</p>
        <h1 className="page-title">估值分析</h1>
        <p className="page-desc">基于 DCF 模型的估值分析，可调节参数进行敏感性分析。</p>
      </div>

      <div className="card-grid">
        <div className="card"><div className="card-title">💰 当前市值</div><div className="card-value">~1,580亿</div><div className="card-sub">2024年6月</div></div>
        <div className="card"><div className="card-title">📊 市盈率 PE-TTM</div><div className="card-value">16.74</div><div className="card-sub">低于行业平均 (25x)</div></div>
        <div className="card"><div className="card-title">📈 市净率 PB</div><div className="card-value">3.63</div><div className="card-sub">基于最新每股净资产</div></div>
        <div className="card"><div className="card-title">🏆 PEG 比率</div><div className="card-value">0.52</div><div className="card-sub">&lt;1，可能被低估</div></div>
      </div>

      <div className="chart-container">
        <h3 className="chart-title">DCF 估值模型</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
          <div><label style={{ fontSize: 13, display: 'block', marginBottom: 4 }}>折现率 WACC: {wacc}%</label><input type="range" min={5} max={15} step={0.5} value={wacc} onChange={e => setWacc(+e.target.value)} style={{ width: 140 }} /></div>
          <div><label style={{ fontSize: 13, display: 'block', marginBottom: 4 }}>预测增长率: {growthRate}%</label><input type="range" min={5} max={30} step={1} value={growthRate} onChange={e => setGrowthRate(+e.target.value)} style={{ width: 140 }} /></div>
          <div><label style={{ fontSize: 13, display: 'block', marginBottom: 4 }}>永续增长率: {terminalGrowth}%</label><input type="range" min={1} max={5} step={0.5} value={terminalGrowth} onChange={e => setTerminalGrowth(+e.target.value)} style={{ width: 140 }} /></div>
        </div>
        <ReactEChartsCore echarts={echarts} option={dcFOption} style={{ height: 340 }} notMerge />
      </div>

      <div className="card-grid">
        <div className="card" style={{ background: 'linear-gradient(135deg, #0d4d2a, #1a6b3c)', color: 'white' }}>
          <div className="card-title" style={{ color: 'rgba(255,255,255,0.8)' }}>🎯 DCF 目标股价</div>
          <div className="card-value" style={{ color: '#fbbf24', fontSize: 36 }}>¥{targetPrice.toFixed(2)}</div>
          <div className="card-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>基于当前参数估算</div>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', color: 'white' }}>
          <div className="card-title" style={{ color: 'rgba(255,255,255,0.8)' }}>🏢 预测企业价值</div>
          <div className="card-value" style={{ color: '#93c5fd', fontSize: 36 }}>¥{enterpriseValue.toFixed(0)}亿</div>
          <div className="card-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>当前市值约 ¥1,580亿</div>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #5b1f3e, #a21c54)', color: 'white' }}>
          <div className="card-title" style={{ color: 'rgba(255,255,255,0.8)' }}>📈 上行空间</div>
          <div className="card-value" style={{ color: '#fbcfe8', fontSize: 36 }}>{((targetPrice * shares / 1580 - 1) * 100).toFixed(1)}%</div>
          <div className="card-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>对比当前市值</div>
        </div>
      </div>

      <div className="table-container">
        <h3 className="chart-title">DCF 模型详细计算</h3>
        <table className="data-table">
          <thead><tr><th>项目</th><th>第1年</th><th>第2年</th><th>第3年</th><th>第4年</th><th>第5年</th></tr></thead>
          <tbody>
            <tr><td>预测净利润(亿元)</td>{fcf.map((v,i) => <td key={i}>{v.toFixed(1)}</td>)}</tr>
            <tr><td>折现因子</td>{years_proj.map(y => <td key={y}>{(1/Math.pow(1+wacc/100,y)).toFixed(4)}</td>)}</tr>
            <tr><td>折现值(亿元)</td>{pv.map(v => <td key={v}>{v.toFixed(1)}</td>)}</tr>
          </tbody>
        </table>
        <div style={{ marginTop: 12, padding: 12, background: '#f0fdf4', borderRadius: 6 }}>
          <strong>终值计算：</strong> 永续增长率 {terminalGrowth}%，终值 = {fcf[4].toFixed(1)} &times; (1 + {terminalGrowth}%) / ({wacc}% - {terminalGrowth}%) = {terminal.toFixed(0)}亿
          <br />
          <strong>终值折现：</strong> {terminal.toFixed(0)} / (1 + {wacc}%)&#8304; = {terminalPv.toFixed(0)}亿
          <br />
          <strong>企业价值：</strong> 预测期折现值之和 ({pv.reduce((a,b)=>a+b,0).toFixed(0)}亿) + 终值折现 ({terminalPv.toFixed(0)}亿) = {enterpriseValue.toFixed(0)}亿
        </div>
      </div>
    </div>
  );
}
