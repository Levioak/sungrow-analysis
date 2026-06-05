export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>阳光电源财务分析平台</h4>
            <p>专业的财务数据可视化与分析工具，助力投资决策。</p>
          </div>
          <div className="footer-col">
            <h4>数据来源</h4>
            <ul>
              <li>公司年报 (2019-2023)</li>
              <li>Wind 金融终端</li>
              <li>东方财富 Choice</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>相关链接</h4>
            <ul>
              <li><a href="https://www.sungrowpower.com" target="_blank">阳光电源官网</a></li>
              <li><a href="http://www.cninfo.com.cn" target="_blank">巨潮资讯网</a></li>
              <li><a href="https://quote.eastmoney.com/sz300274.html" target="_blank">东方财富行情</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>免责声明</h4>
            <p>本平台数据仅供参考，不构成投资建议。投资有风险，入市需谨慎。</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 阳光电源财务分析平台 | 300274.SZ</p>
        </div>
      </div>
    </footer>
  );
}
