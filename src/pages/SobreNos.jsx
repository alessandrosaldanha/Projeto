const MARCOS = [
  { ano: '2015', texto: 'Primeiros cultos em residência' },
  { ano: '2017', texto: 'Constituição formal da igreja' },
  { ano: '2020', texto: 'Sede própria inaugurada' },
  { ano: '2024', texto: 'Filiação à Comunhão Batista do Nordeste' },
];

const LIDERES = [
  { nome: 'Pr. João Silva',  cargo: 'Pastor Titular', verso: 'Apascenta o rebanho de Deus' },
  { nome: 'Carlos Souza',    cargo: 'Ancião',         verso: 'Que o ancião seja irrepreensível' },
  { nome: 'Marcos Lima',     cargo: 'Ancião',         verso: 'Apto para ensinar' },
  { nome: 'Pedro Santos',    cargo: 'Diácono',        verso: 'Servindo com fidelidade' },
];

const CULTOS = [
  { icon: 'ti-sun',    dia: 'Domingo Manhã', nome: 'Culto Matutino',           hora: '09h00', desc: 'Pregação expositiva' },
  { icon: 'ti-school', dia: 'Domingo EBD',   nome: 'Escola Bíblica Dominical', hora: '10h30', desc: 'Estudo em grupo' },
  { icon: 'ti-moon',   dia: 'Quarta-feira',  nome: 'Culto de Oração',          hora: '19h30', desc: 'Oração e estudo' },
];

const IRMAS = [
  { nome: 'IBR Fortaleza',   cidade: 'Fortaleza, CE' },
  { nome: 'IBR Recife',      cidade: 'Recife, PE' },
  { nome: 'IBR Salvador',    cidade: 'Salvador, BA' },
  { nome: 'IBR Natal',       cidade: 'Natal, RN' },
  { nome: 'IBR João Pessoa', cidade: 'João Pessoa, PB' },
  { nome: 'IBR Aracaju',     cidade: 'Aracaju, SE' },
];

const inicial = (nome) => nome.replace(/^(Pr\.|Pb\.|Dc\.)\s*/, '').charAt(0);

export default function SobreNos() {
  return (
    <>
      {/* 1. Header */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <span className="eyebrow">Sobre Nós</span>
        <h1 className="sect-title">Nossa História</h1>
        <p className="lead">
          Conheça a trajetória da Igreja Batista Reformada de Maragogi, sua fundação
          e caminhada no litoral de Alagoas.
        </p>
      </section>

      {/* 2. História da Igreja */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="about-history">
          <div className="about-history-text">
            <p>
              A Igreja Batista Reformada de Maragogi foi fundada com o propósito de
              proclamar o evangelho bíblico no litoral alagoano. Desde sua fundação, a
              igreja tem sido um farol da sã doutrina reformada, comprometida com a
              pregação expositiva, a adoração regrada pela Palavra e o discipulado fiel
              dos seus membros.
            </p>
          </div>
          <div className="about-img">
            <img
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop"
              alt="Templo da Igreja Batista Reformada de Maragogi"
              loading="lazy"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {MARCOS.map(({ ano, texto }) => (
            <div className="tl-item" key={ano}>
              <div className="tl-year">{ano}</div>
              <div className="tl-track">
                <div className="tl-dot" />
                <div className="tl-line" />
              </div>
              <div className="tl-body">{texto}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Nossa Liderança */}
      <section className="section-alt">
        <div className="section">
          <span className="eyebrow">Liderança</span>
          <h2 className="sect-title">Pastor e Oficiais</h2>
          <div className="grid-auto grid-4">
            {LIDERES.map(({ nome, cargo, verso }) => (
              <div className="card about-leader" key={nome}>
                <div className="about-leader-avatar" aria-hidden="true">{inicial(nome)}</div>
                <div className="about-leader-name">{nome}</div>
                <div className="about-leader-role">{cargo}</div>
                <p className="about-leader-verse">“{verso}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Grade de Cultos */}
      <section className="section">
        <span className="eyebrow">Cultos</span>
        <h2 className="sect-title">Horários e Programação</h2>
        <div className="grid-auto grid-3">
          {CULTOS.map(({ icon, dia, nome, hora, desc }) => (
            <div className="card culto-card" key={nome}>
              <div className="culto-icon"><i className={`ti ${icon}`} aria-hidden="true" /></div>
              <div className="culto-day">{dia}</div>
              <div className="culto-name">{nome}</div>
              <div className="culto-time"><b>{hora}</b> — {desc}</div>
            </div>
          ))}
        </div>
        <div className="culto-note">
          <i className="ti ti-map-pin" aria-hidden="true" />
          Todos os cultos são abertos ao público. Venha nos visitar em Maragogi, AL.
        </div>
      </section>

      {/* 5. Nossa Comunhão */}
      <section className="section-alt">
        <div className="section">
          <span className="eyebrow">Comunhão</span>
          <h2 className="sect-title">Igrejas Irmãs</h2>
          <p className="lead">
            Fazemos parte da Comunhão Batista do Nordeste (CBN), uma associação de
            igrejas batistas reformadas comprometidas com a sã doutrina no nordeste do Brasil.
          </p>
          <div className="grid-auto grid-min250">
            {IRMAS.map(({ nome, cidade }) => (
              <div className="card sister-card" key={nome}>
                <div className="sister-icon"><i className="ti ti-building-church" aria-hidden="true" /></div>
                <div>
                  <div className="sister-name">{nome}</div>
                  <div className="sister-city">{cidade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
