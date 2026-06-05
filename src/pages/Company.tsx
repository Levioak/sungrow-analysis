export default function Company() {
  return (
    <div className="page-shell">
      <div className="page-header">
        <p className="page-eyebrow">Company Overview</p>
        <h1 className="page-title">公司概况</h1>
        <p className="page-desc">阳光电源股份有限公司的基本信息、业务架构和核心竞争力。</p>
      </div>

      <div className="info-section">
        <h3 className="section-title">基本信息</h3>
        <div className="table-container" style={{ padding: 0, border: 'none', boxShadow: 'none', background: 'transparent' }}>
          <table className="data-table">
            <tbody>
              <tr><td style={{ fontWeight: 600, width: 160 }}>公司全称</td><td>阳光电源股份有限公司</td></tr>
              <tr><td style={{ fontWeight: 600 }}>英文名称</td><td>Sungrow Power Supply Co., Ltd.</td></tr>
              <tr><td style={{ fontWeight: 600 }}>股票代码</td><td>300274.SZ (深圳证券交易所)</td></tr>
              <tr><td style={{ fontWeight: 600 }}>成立日期</td><td>1997年11月28日</td></tr>
              <tr><td style={{ fontWeight: 600 }}>上市日期</td><td>2011年11月2日</td></tr>
              <tr><td style={{ fontWeight: 600 }}>注册资本</td><td>约14.85亿元</td></tr>
              <tr><td style={{ fontWeight: 600 }}>法定代表人</td><td>曹仁贤</td></tr>
              <tr><td style={{ fontWeight: 600 }}>注册地址</td><td>安徽省合肥市高新区习友路1699号</td></tr>
              <tr><td style={{ fontWeight: 600 }}>所属行业</td><td>电力设备 — 光伏设备</td></tr>
              <tr><td style={{ fontWeight: 600 }}>官方网站</td><td><a href="https://www.sungrowpower.com" target="_blank">www.sungrowpower.com</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="info-section">
        <h3 className="section-title">主营业务</h3>
        <div className="card-grid">
          <div className="card"><div className="card-title">☀️ 光伏逆变器</div><div className="card-value" style={{ fontSize: 18 }}>全球市占率第一</div><div className="card-sub">涵盖户用、工商业、大型地面电站全场景。2023年全球出货量超130GW，连续多年蝉联全球第一。</div></div>
          <div className="card"><div className="card-title">🔋 储能系统</div><div className="card-value" style={{ fontSize: 18 }}>快速增长的第二曲线</div><div className="card-sub">提供储能变流器、储能系统集成及运维服务。2023年储能业务收入同比大增，已成为公司核心增长引擎。</div></div>
          <div className="card"><div className="card-title">🌊 新能源投资开发</div><div className="card-value" style={{ fontSize: 18 }}>全产业链布局</div><div className="card-sub">涉及光伏电站、风力发电的投资、开发、建设与运营。实现从设备制造到电站运营的全产业链覆盖。</div></div>
          <div className="card"><div className="card-title">⚡ 电动汽车充电</div><div className="card-value" style={{ fontSize: 18 }}>光储充一体化</div><div className="card-sub">充电桩及充电运营平台，结合光伏+储能优势，打造绿色出行解决方案。</div></div>
        </div>
      </div>

      <div className="info-section">
        <h3 className="section-title">核心竞争力</h3>
        <div className="card-grid">
          <div className="card"><div className="card-title">🔬 研发创新</div><div className="card-value" style={{ fontSize: 18 }}>累计专利 &gt;6000项</div><div className="card-sub">研发人员占比超30%，2023年研发投入24.47亿元。拥有全球领先的逆变器及储能技术。</div></div>
          <div className="card"><div className="card-title">🌍 全球化布局</div><div className="card-value" style={{ fontSize: 18 }}>产品销往150+国家</div><div className="card-sub">在海外设有20+分支机构，全球服务网络完善。在欧洲、美洲、亚太、中东等主要市场均占据领先地位。</div></div>
          <div className="card"><div className="card-title">🏭 规模优势</div><div className="card-value" style={{ fontSize: 18 }}>年产能超150GW</div><div className="card-sub">全球最大的逆变器制造商，规模效应显著，成本控制能力强。合肥、南京等多个生产基地。</div></div>
          <div className="card"><div className="card-title">🤝 品牌与客户</div><div className="card-value" style={{ fontSize: 18 }}>全球知名合作伙伴</div><div className="card-sub">与三峡、华能、国家电投等大型能源企业深度合作。连续多年入选彭博新能源财经Tier 1榜单。</div></div>
        </div>
      </div>

      <div className="info-section">
        <h3 className="section-title">发展历程</h3>
        <div className="table-container">
          <table className="data-table">
            <thead><tr><th>时间</th><th>里程碑</th></tr></thead>
            <tbody>
              <tr><td>1997年</td><td>曹仁贤创立阳光电源，专注于光伏逆变器研发</td></tr>
              <tr><td>2003年</td><td>推出中国首台具有自主知识产权的光伏并网逆变器</td></tr>
              <tr><td>2011年</td><td>在深圳证券交易所创业板上市 (300274.SZ)</td></tr>
              <tr><td>2015年</td><td>光伏逆变器出货量首次跃居全球第一</td></tr>
              <tr><td>2018年</td><td>储能逆变器出货量全球领先</td></tr>
              <tr><td>2021年</td><td>成立阳光新能源，加速新能源投资开发</td></tr>
              <tr><td>2023年</td><td>营收突破700亿元，归母净利润超94亿元，市值站上1500亿</td></tr>
              <tr><td>2024年</td><td>全球逆变器出货量累计突破300GW</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
