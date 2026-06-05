import { newsData } from '../data/financialData';
import { useState } from 'react';

const categories = ['全部', '公司新闻', '行业动态', '政策解读', '研究报告'] as const;

export default function Reports() {
  const [activeCat, setActiveCat] = useState<string>('全部');
  const filtered = activeCat === '全部' ? newsData : newsData.filter(n => n.category === activeCat);

  return (
    <div className="page-shell">
      <div className="page-header">
        <p className="page-eyebrow">Research & Reports</p>
        <h1 className="page-title">研究报告与动态</h1>
        <p className="page-desc">最新的公司新闻、行业动态、政策解读和研究报告。</p>
      </div>

      <div className="section-nav">
        {categories.map(c => (
          <button key={c} className={`section-nav-btn ${activeCat === c ? 'active' : ''}`} onClick={() => setActiveCat(c)}>{c}</button>
        ))}
      </div>

      <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="card" style={{ background: 'linear-gradient(135deg, #0d4d2a, #1a6b3c)', color: 'white' }}>
          <div className="card-title" style={{ color: 'rgba(255,255,255,0.8)' }}>📄 券商覆盖</div>
          <div className="card-value" style={{ fontSize: 28, color: '#fbbf24' }}>35+ 家</div>
          <div className="card-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>主流券商覆盖推荐</div>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', color: 'white' }}>
          <div className="card-title" style={{ color: 'rgba(255,255,255,0.8)' }}>⭐ 评级分布</div>
          <div className="card-value" style={{ fontSize: 28, color: '#93c5fd' }}>92% 买入/增持</div>
          <div className="card-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>近3个月券商评级</div>
        </div>
      </div>

      <div className="info-section">
        <h3 className="section-title">{activeCat === '全部' ? '全部动态' : activeCat} ({filtered.length}条)</h3>
        <div className="news-list">
          {filtered.map((item, i) => (
            <div key={i} className="news-item">
              <span className="news-date">{item.date}</span>
              <div className="news-content">
                <div className="news-title">
                  {item.title}
                  <span className={`badge badge-${item.category} news-category`}>{item.category}</span>
                </div>
                <p className="news-summary">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-section">
        <h3 className="section-title">报告订阅</h3>
        <div className="card">
          <p style={{ marginBottom: 12, color: 'var(--text-light)' }}>如需获取完整版深度研究报告，请联系我们。</p>
          <div className="info-grid">
            <div className="info-item"><span className="info-label">📧 邮箱</span><span className="info-value">research@sungrow-analysis.cn</span></div>
            <div className="info-item"><span className="info-label">📱 微信</span><span className="info-value">SungrowAnalysis</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
