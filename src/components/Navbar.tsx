import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: '首页', icon: '📊' },
  { path: '/company', label: '公司概况', icon: '🏢' },
  { path: '/financials', label: '财报分析', icon: '📋' },
  { path: '/ratios', label: '财务指标', icon: '📈' },
  { path: '/valuation', label: '估值分析', icon: '💰' },
  { path: '/comparison', label: '行业对比', icon: '🔍' },
  { path: '/reports', label: '研究报告', icon: '📄' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">☀️</span>
          <span className="brand-text">阳光电源财务分析</span>
        </Link>
        <div className="nav-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-link-icon">{item.icon}</span>
              <span className="nav-link-text">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
