import { useState } from "react";
import { pixQrUrl, PIX_IBR } from "../lib/pix.js";

const LIDERANCA = [
  { name: "Pr. João Andrade", role: "Pastor Titular" },
  { name: "Pb. Carlos Lima", role: "Presbítero" },
  { name: "Pb. Rafael Souza", role: "Presbítero" },
  { name: "Dc. Tiago Melo", role: "Diácono" },
];

const MINISTERIOS = [
  {
    icon: "ti-school",
    title: "Escola Bíblica Dominical",
    desc: "Estudo sistemático das Escrituras para todas as idades, aos domingos pela manhã.",
  },
  {
    icon: "ti-music",
    title: "Ministério de Louvor",
    desc: "Adoração reverente que conduz a congregação à exaltação de Deus em verdade.",
  },
  {
    icon: "ti-users",
    title: "Discipulado",
    desc: "Acompanhamento individual para crescimento na fé e na maturidade cristã.",
  },
  {
    icon: "ti-heart-handshake",
    title: "Ação Social",
    desc: "Cuidado prático às famílias e comunidades carentes do litoral de Maragogi.",
  },
  {
    icon: "ti-book-2",
    title: "Estudos Bíblicos",
    desc: "Encontros semanais de aprofundamento doutrinário e oração às quartas-feiras.",
  },
  {
    icon: "ti-baby-carriage",
    title: "Ministério Infantil",
    desc: "Ensino bíblico apropriado à idade, formando as crianças no temor do Senhor.",
  },
];

export default function Inicio() {
  const [copied, setCopied] = useState(false);
  const pixKey = "12.345.678/0001-90";

  const copyPix = () => {
    if (navigator.clipboard)
      navigator.clipboard.writeText(pixKey).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-watermark">
          <i className="ti ti-building-church" aria-hidden="true" />
        </div>
        <div className="hero-rule" />
        <div className="hero-inner">
          <span className="eyebrow">
            Igreja Batista Reformada · Maragogi/AL
          </span>
          <h1 className="hero-title">
            Pregando Cristo,
            <br />
            Edificando Vidas
          </h1>
          <p className="hero-lead">
            Uma comunidade ancorada nas Escrituras e na tradição reformada,
            comprometida com o evangelho de Cristo no litoral norte de Alagoas.
          </p>
          <div className="hero-cta">
            <a className="btn btn-gold" href="#quem-somos">
              <i className="ti ti-info-circle" aria-hidden="true" />
              Conheça a Igreja
            </a>
            <a className="btn btn-outline-light" href="#localizacao">
              <i className="ti ti-clock" aria-hidden="true" />
              Horários de Culto
            </a>
          </div>
        </div>
      </section>

      {/* ===== QUEM SOMOS ===== */}
      <section id="quem-somos" className="section">
        <span className="eyebrow">Quem Somos</span>
        <h2 className="sect-title">Fundamentados na Palavra</h2>
        <p className="lead">
          Nossa identidade se expressa em três pilares que orientam tudo o que
          somos e fazemos como corpo de Cristo.
        </p>
        <div className="grid-auto grid-3">
          <div className="card card-hover">
            <div className="card-icon">
              <i className="ti ti-target-arrow" aria-hidden="true" />
            </div>
            <h3 className="card-h3">Missão</h3>
            <p className="card-p">
              Glorificar a Deus proclamando o evangelho de Cristo e fazendo
              discípulos comprometidos com a Palavra em Maragogi e além.
            </p>
          </div>
          <div className="card card-hover">
            <div className="card-icon">
              <i className="ti ti-eye" aria-hidden="true" />
            </div>
            <h3 className="card-h3">Visão</h3>
            <p className="card-p">
              Ser uma igreja reformada, saudável e multiplicadora, que reflete a
              glória de Deus em adoração reverente e amor ao próximo.
            </p>
          </div>
          <div className="card card-hover">
            <div className="card-icon">
              <i className="ti ti-diamond" aria-hidden="true" />
            </div>
            <h3 className="card-h3">Valores</h3>
            <p className="card-p">
              Soli Deo Gloria. Centralidade das Escrituras, oração, comunhão,
              ensino sólido e serviço à cidade com integridade.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO ===== */}
      <section id="localizacao" className="section-alt">
        <div className="section loc-grid">
          <div>
            <span className="eyebrow">Onde Estamos</span>
            <h2 className="sect-title">Venha nos visitar</h2>
            <div className="info-list">
              <div className="info-row">
                <div className="card-icon" style={{ margin: 0 }}>
                  <i className="ti ti-map-pin" aria-hidden="true" />
                </div>
                <div>
                  <div className="info-title">Endereço</div>
                  <p className="info-text">
                    Av. Beira Mar, 320 · Centro
                    <br />
                    Maragogi — AL · CEP 57955-000
                  </p>
                  <a
                    className="info-link"
                    href="https://maps.app.goo.gl/hwNn79DzdxtDH4Jo6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir no Google Maps{" "}
                    <i className="ti ti-external-link" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="info-row">
                <div className="card-icon" style={{ margin: 0 }}>
                  <i className="ti ti-clock" aria-hidden="true" />
                </div>
                <div>
                  <div className="info-title">Horários de Culto</div>
                  <div className="schedule">
                    <div className="schedule-row">
                      <span>Domingo · EBD</span>
                      <b>09h00</b>
                    </div>
                    <div className="schedule-row">
                      <span>Domingo · Culto Noturno</span>
                      <b>18h00</b>
                    </div>
                    <div className="schedule-row">
                      <span>Quarta · Estudo Bíblico</span>
                      <b>19h30</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-ph">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.28434729880718!2d-35.22393158838092!3d-9.013528342542818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700f5513da32d4b%3A0x245633c593f0bc41!2sIgreja%20Batista%20Reformada%20de%20Maragogi!5e0!3m2!1spt-BR!2sbr!4v1782660207631!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Igreja Batista Reformada de Maragogi"
            />
          </div>
        </div>
      </section>

      {/* ===== LIDERANÇA ===== */}
      <section className="section">
        <span className="eyebrow">Liderança</span>
        <h2 className="sect-title">Pastores e oficiais</h2>
        <p className="lead">
          Homens chamados ao serviço do rebanho, dedicados ao ensino da Palavra
          e ao cuidado pastoral da congregação.
        </p>
        <div className="grid-auto grid-4">
          {LIDERANCA.map(({ name, role }) => (
            <div key={name} className="card card-hover leader">
              <div className="leader-avatar">
                <i className="ti ti-user" aria-hidden="true" />
              </div>
              <div className="leader-name">{name}</div>
              <div className="badge badge-gold" style={{ marginTop: 8 }}>
                {role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MINISTÉRIOS ===== */}
      <section className="section-alt">
        <div className="section">
          <span className="eyebrow">Projetos e Ministérios</span>
          <h2 className="sect-title">Servindo a igreja e a cidade</h2>
          <div className="grid-auto grid-min250">
            {MINISTERIOS.map(({ icon, title, desc }) => (
              <div key={title} className="card card-hover">
                <div className="card-icon">
                  <i className={`ti ${icon}`} aria-hidden="true" />
                </div>
                <h3 className="card-h3-ui">{title}</h3>
                <p className="card-p">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTRIBUIÇÃO ===== */}
      <section id="contribuicao" className="section">
        <span className="eyebrow">Contribuição</span>
        <h2 className="sect-title">Participe da obra</h2>
        <p className="lead">
          "Cada um contribua segundo propôs no seu coração, não com tristeza ou
          por necessidade." — 2 Coríntios 9:7
        </p>
        <div className="grid-auto grid-2">
          {/* PIX */}
          <div className="pix-card">
            <div className="pix-head">
              <div className="pix-badge">
                <i className="ti ti-brand-cashapp" aria-hidden="true" />
              </div>
              <div>
                <div className="pix-title">Contribua via PIX</div>
                <div className="pix-sub">Chave do tipo CNPJ</div>
              </div>
            </div>
            <div className="pix-qr">
              <img
                src={pixQrUrl(PIX_IBR)}
                alt="QR Code PIX da IBR Maragogi"
                width="116"
                height="116"
              />
              <div className="pix-qr-text">
                <div className="t">Doação pix Qr Code</div>
                <div className="d">
                  Abra o app do seu banco, escolha PIX e aponte a câmera para o
                  código.
                </div>
              </div>
            </div>
            <div className="pix-key-box">
              <span className="pix-key">{pixKey}</span>
            </div>
            <button
              className="btn btn-gold"
              onClick={copyPix}
              style={{ width: "100%", justifyContent: "center", marginTop: 14 }}
            >
              <i
                className={`ti ${copied ? "ti-check" : "ti-copy"}`}
                aria-hidden="true"
              />
              {copied ? "Chave copiada!" : "Copiar Chave"}
            </button>
          </div>
          {/* Transferência bancária */}
          <div className="card">
            <div className="bank-head">
              <div className="card-icon" style={{ margin: 0 }}>
                <i className="ti ti-building-bank" aria-hidden="true" />
              </div>
              <div className="bank-title">Transferência Bancária</div>
            </div>
            <div className="bank-row">
              <span>Banco</span>
              <span>001 · Banco do Brasil</span>
            </div>
            <div className="bank-row">
              <span>Agência</span>
              <span>1234-5</span>
            </div>
            <div className="bank-row">
              <span>Conta Corrente</span>
              <span>67890-1</span>
            </div>
            <div className="bank-row">
              <span>CNPJ</span>
              <span>12.345.678/0001-90</span>
            </div>
            <p
              style={{
                margin: "14px 0 0",
                fontSize: 12,
                color: "var(--ibr-muted)",
                lineHeight: 1.6,
              }}
            >
              Titular: Igreja Batista Reformada de Maragogi. Em caso de dúvidas,
              fale com a tesouraria.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
