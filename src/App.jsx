import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import SobreNos from './pages/SobreNos.jsx';
import OQueCremos from './pages/OQueCremos.jsx';
import EBD from './pages/EBD.jsx';
import FAQ from './pages/FAQ.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout compartilhado: Sidebar + <Outlet> + Footer */}
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<SobreNos />} />
          <Route path="o-que-cremos" element={<OQueCremos />} />
          <Route path="ebd" element={<EBD />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
