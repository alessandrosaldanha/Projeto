import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/',             icon: 'ti-home',         label: 'Início',       end: true },
  { to: '/sobre',        icon: 'ti-info-circle',  label: 'Sobre Nós' },
  { to: '/o-que-cremos', icon: 'ti-book',         label: 'O Que Cremos' },
  { to: '/ebd',          icon: 'ti-school',       label: 'EBD' },
  { to: '/faq',          icon: 'ti-help-circle',  label: 'FAQ' },
];

export default function Sidebar({ open, onNavigate }) {
  return (
    <aside id="ibrSidebar" data-open={open ? 'true' : undefined}>
      {/* Topo — marca */}
      <div className="sidebar-brand">
        <div className="brand-mark">
          <i className="ti ti-cross" aria-hidden="true" />
        </div>
        <div id="ibrBrandText" className="brand-text">
          <span className="brand-name">IBR Maragogi</span>
          <span className="brand-sub">Igreja Batista Reformada</span>
        </div>
      </div>

      {/* Navegação — NavLink por rota */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(({ to, icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
          >
            <i className={`ti ${icon}`} aria-hidden="true" />
            <span className="nav-label">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Rodapé da sidebar */}
      <div className="sidebar-foot">
        <div id="ibrSocialRow" className="soc-row">
          <a className="soc-btn" href="https://facebook.com" aria-label="Facebook"><i className="ti ti-brand-facebook" aria-hidden="true" /></a>
          <a className="soc-btn" href="https://instagram.com" aria-label="Instagram"><i className="ti ti-brand-instagram" aria-hidden="true" /></a>
          <a className="soc-btn" href="https://youtube.com" aria-label="YouTube"><i className="ti ti-brand-youtube" aria-hidden="true" /></a>
        </div>
        <a className="btn btn-gold" href="/#contribuicao" onClick={onNavigate} style={{ width: '100%', justifyContent: 'center' }}>
          <i className="ti ti-heart" aria-hidden="true" />
          <span className="btn-text">Contribuir</span>
        </a>
      </div>
    </aside>
  );
}
