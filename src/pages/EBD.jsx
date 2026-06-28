import { useState, useMemo } from 'react';

const ESTUDOS = [
  { id: 1,  titulo: 'As Cinco Solas da Reforma', descricao: 'Fundamentos teológicos que definiram a Reforma Protestante do século XVI e sua relevância para a igreja hoje.', grupo: 'Historia', tag: 'Historia da Igreja', autor: 'Pr. Exemplo Silva', data: 'Mar 2025', capa: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 2,  titulo: 'Soteriologia — A Doutrina da Salvação', descricao: 'Estudo completo sobre eleição, chamado eficaz, justificação, adoção e glorificação conforme as Escrituras.', grupo: 'Teologia', tag: 'Soteriologia', autor: 'Pr. Exemplo Silva', data: 'Fev 2025', capa: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 3,  titulo: 'A Doutrina da Trindade', descricao: 'Quem é Deus Pai, Filho e Espírito Santo — unidade de essência e distinção de pessoas na Trindade.', grupo: 'Teologia', tag: 'Teologia Propria', autor: 'Pr. Exemplo Silva', data: 'Jan 2025', capa: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 4,  titulo: 'Epístola aos Romanos — caps. 1 a 8', descricao: 'Série expositiva sobre a carta de Paulo aos Romanos, a maior exposição do evangelho no Novo Testamento.', grupo: 'Biblico', tag: 'Livros Biblicos', autor: 'Pr. Exemplo Silva', data: 'Dez 2024', capa: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 5,  titulo: 'Como Interpretar a Bíblia', descricao: 'Princípios de hermenêutica bíblica: contexto, gênero literário, analogia da fé e aplicação prática.', grupo: 'Biblico', tag: 'Hermeneutica', autor: 'Pr. Exemplo Silva', data: 'Nov 2024', capa: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 6,  titulo: 'Eclesiologia — A Doutrina da Igreja', descricao: 'O que é a igreja, seus elementos essenciais, governo, disciplina e os sacramentos do batismo e ceia.', grupo: 'Teologia', tag: 'Eclesiologia', autor: 'Pr. Exemplo Silva', data: 'Out 2024', capa: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 7,  titulo: 'Escatologia Reformada', descricao: 'As últimas coisas: morte, estado intermediário, segunda vinda de Cristo, ressurreição e juízo final.', grupo: 'Teologia', tag: 'Escatologia', autor: 'Pr. Exemplo Silva', data: 'Set 2024', capa: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 8,  titulo: 'Apologética Pressuposicional', descricao: 'Como defender a fé cristã partindo das pressuposições bíblicas, com foco em Cornelius Van Til.', grupo: 'Especiais', tag: 'Apologetica', autor: 'Pr. Exemplo Silva', data: 'Ago 2024', capa: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 9,  titulo: 'A Confissão de Fé de Londres 1689', descricao: 'Estudo artigo por artigo da LCBF 1689, nossa confissão subordinada às Escrituras Sagradas.', grupo: 'Historia', tag: 'Confissoes de Fe', autor: 'Pr. Exemplo Silva', data: 'Jul 2024', capa: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 10, titulo: 'Vida de Oração', descricao: 'A oração na vida do cristão — fundamentos bíblicos, o Pai Nosso como modelo e oração em comunidade.', grupo: 'Pratica', tag: 'Vida Crista', autor: 'Pr. Exemplo Silva', data: 'Jun 2024', capa: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 11, titulo: 'Cristologia — Pessoa e Obra de Cristo', descricao: 'Quem é Jesus Cristo: sua natureza divina e humana, encarnação, expiação e exaltação.', grupo: 'Teologia', tag: 'Cristologia', autor: 'Pr. Exemplo Silva', data: 'Mai 2024', capa: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=280&fit=crop', arquivo: '#' },
  { id: 12, titulo: 'Família segundo a Bíblia', descricao: 'Casamento, papéis do homem e da mulher, criação dos filhos e o lar como reflexo da aliança de Deus.', grupo: 'Pratica', tag: 'Etica', autor: 'Pr. Exemplo Silva', data: 'Abr 2024', capa: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=400&h=280&fit=crop', arquivo: '#' },
];

const GRUPOS = [
  { id: 'todos',     label: 'Todos' },
  { id: 'Teologia',  label: 'Teologia' },
  { id: 'Biblico',   label: 'Estudo Bíblico' },
  { id: 'Pratica',   label: 'Vida Cristã' },
  { id: 'Historia',  label: 'História' },
  { id: 'Especiais', label: 'Especiais' },
];

const SUBTAGS = {
  Teologia:  ['Teologia Propria', 'Cristologia', 'Soteriologia', 'Pneumatologia', 'Eclesiologia', 'Escatologia'],
  Biblico:   ['Livros Biblicos', 'Hermeneutica'],
  Pratica:   ['Vida Crista', 'Etica', 'Missoes'],
  Historia:  ['Historia da Igreja', 'Confissoes de Fe'],
  Especiais: ['Apologetica'],
};

export default function EBD() {
  const [grupoAtivo, setGrupoAtivo] = useState('todos');
  const [tagAtiva, setTagAtiva] = useState(null);
  const [busca, setBusca] = useState('');

  // Trocar de grupo reseta a subtag automaticamente
  const selecionarGrupo = (id) => {
    setGrupoAtivo(id);
    setTagAtiva(null);
  };
  const alternarTag = (t) => setTagAtiva((prev) => (prev === t ? null : t));

  const estudosFiltrados = useMemo(() => {
    return ESTUDOS.filter((e) => {
      const matchGrupo = grupoAtivo === 'todos' || e.grupo === grupoAtivo;
      const matchTag = !tagAtiva || e.tag === tagAtiva;
      const matchBusca = e.titulo.toLowerCase().includes(busca.toLowerCase());
      return matchGrupo && matchTag && matchBusca;
    });
  }, [grupoAtivo, tagAtiva, busca]);

  const subtagsAtuais = SUBTAGS[grupoAtivo] || [];

  return (
    <section className="section">
      {/* Header */}
      <div className="ebd-head">
        <div>
          <span className="eyebrow">Escola Bíblica Dominical</span>
          <h1 className="sect-title">Estudos e Materiais</h1>
          <p className="lead">Aprofunde-se na Palavra de Deus com nossos materiais de estudo.</p>
        </div>
        <div className="ebd-count">{estudosFiltrados.length} estudos encontrados</div>
      </div>

      {/* Busca */}
      <div className="search-wrap">
        <i className="ti ti-search search-icon" aria-hidden="true" />
        <input
          className="search-input"
          type="text"
          placeholder="Buscar por título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          aria-label="Buscar estudos por título"
        />
      </div>

      {/* Nível 1 — Grupos */}
      <div className="filter-groups">
        {GRUPOS.map((g) => (
          <button
            key={g.id}
            className={'pill pill-group' + (grupoAtivo === g.id ? ' active' : '')}
            onClick={() => selecionarGrupo(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Nível 2 — Subtags */}
      {grupoAtivo !== 'todos' && subtagsAtuais.length > 0 && (
        <div className="filter-subs">
          {subtagsAtuais.map((t) => (
            <button
              key={t}
              className={'pill pill-sub' + (tagAtiva === t ? ' active' : '')}
              onClick={() => alternarTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Grid de cards (key força fade-in ao refiltrar) */}
      {estudosFiltrados.length > 0 ? (
        <div className="ebd-grid" key={`${grupoAtivo}-${tagAtiva}-${busca}`}>
          {estudosFiltrados.map((e) => (
            <article className="study-card" key={e.id}>
              <div className="study-cover">
                <img src={e.capa} alt={e.titulo} loading="lazy" />
              </div>
              <div className="study-body">
                <div className="badge badge-gold study-tag">{e.tag}</div>
                <h3 className="study-title">{e.titulo}</h3>
                <p className="study-desc">{e.descricao}</p>
                <div className="study-foot">
                  <div className="study-meta">
                    <span className="author"><i className="ti ti-user" aria-hidden="true" />{e.autor}</span>
                    <span>{e.data}</span>
                  </div>
                  <a className="btn btn-outline btn-sm" href={e.arquivo}>
                    <i className="ti ti-download" aria-hidden="true" />PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="page-stub">
          <i className="ti ti-search-off" aria-hidden="true" />
          <p>Nenhum estudo encontrado para os filtros selecionados.</p>
        </div>
      )}
    </section>
  );
}
