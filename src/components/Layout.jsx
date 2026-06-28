import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Coluna 1 — marca */}
        <div>
          <div className="footer-brand">
            <div className="brand-mark"><i className="ti ti-cross" aria-hidden="true" /></div>
            <span>IBR Maragogi</span>
          </div>
          <p>Igreja Batista Reformada, pregando Cristo e edificando vidas no litoral de Alagoas.</p>
          <p className="cnpj">CNPJ 12.345.678/0001-90</p>
        </div>

        {/* Coluna 2 — endereço */}
        <div>
          <div className="footer-col-title">Endereço</div>
          <p>Av. Beira Mar, 320 · Centro<br />Maragogi — AL · 57955-000</p>
          <a className="footer-link" href="https://maps.google.com" style={{ marginTop: 8, color: '#fff' }}>
            <i className="ti ti-map-pin" aria-hidden="true" />Ver no mapa
          </a>
        </div>

        {/* Coluna 3 — contato */}
        <div>
          <div className="footer-col-title">Contato</div>
          <div className="footer-contact">
            <a href="mailto:contato@ibrmaragogi.org.br"><i className="ti ti-mail" aria-hidden="true" />contato@ibrmaragogi.org.br</a>
            <a href="tel:+5582999999999"><i className="ti ti-phone" aria-hidden="true" />(82) 99999-9999</a>
            <a href="https://wa.me/5582999999999"><i className="ti ti-brand-whatsapp" aria-hidden="true" />Falar no WhatsApp</a>
          </div>
        </div>

        {/* Coluna 4 — redes sociais */}
        <div>
          <div className="footer-col-title">Redes Sociais</div>
          <div className="soc-row" style={{ marginTop: 14 }}>
            <a className="soc-btn" href="https://facebook.com" aria-label="Facebook"><i className="ti ti-brand-facebook" aria-hidden="true" /></a>
            <a className="soc-btn" href="https://instagram.com" aria-label="Instagram"><i className="ti ti-brand-instagram" aria-hidden="true" /></a>
            <a className="soc-btn" href="https://youtube.com" aria-label="YouTube"><i className="ti ti-brand-youtube" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2025 IBR Maragogi · Todos os direitos reservados · Soli Deo Gloria</div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="app">
      <Sidebar open={drawerOpen} onNavigate={closeDrawer} />

      {/* Backdrop do drawer mobile */}
      <div
        id="ibrBackdrop"
        data-open={drawerOpen ? 'true' : undefined}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Content area — flex column para empurrar o footer ao rodapé */}
      <div id="ibrContent">
        {/* Topbar mobile com hamburger */}
        <header id="ibrTopbar">
          <div className="topbar-brand">
            <div className="topbar-mark"><i className="ti ti-cross" aria-hidden="true" /></div>
            <span className="topbar-name">IBR Maragogi</span>
          </div>
          <button className="hamburger" onClick={() => setDrawerOpen(true)} aria-label="Abrir menu">
            <i className="ti ti-menu-2" aria-hidden="true" />
          </button>
        </header>

        {/* Conteúdo da rota ativa — flex:1 ocupa o espaço restante */}
        <main id="ibrMain">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
