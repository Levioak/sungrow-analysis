import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Company from './pages/Company';
import Financials from './pages/Financials';
import Ratios from './pages/Ratios';
import Valuation from './pages/Valuation';
import Comparison from './pages/Comparison';
import Reports from './pages/Reports';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="financials" element={<Financials />} />
          <Route path="ratios" element={<Ratios />} />
          <Route path="valuation" element={<Valuation />} />
          <Route path="comparison" element={<Comparison />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
