import { useState } from 'react';

const SOLAS = [
  { latin: 'Sola Scriptura',  pt: 'Somente a Escritura',       desc: 'A Bíblia é a única autoridade infalível para fé e prática.',          icon: 'ti-book' },
  { latin: 'Sola Gratia',     pt: 'Somente a Graça',           desc: 'A salvação é inteiramente obra da graça soberana de Deus.',          icon: 'ti-heart' },
  { latin: 'Sola Fide',       pt: 'Somente pela Fé',           desc: 'Somos justificados somente pela fé em Cristo Jesus.',                icon: 'ti-shield' },
  { latin: 'Solus Christus',  pt: 'Somente Cristo',            desc: 'Cristo é o único mediador entre Deus e os homens.',                  icon: 'ti-cross' },
  { latin: 'Soli Deo Gloria', pt: 'Somente a Glória de Deus',  desc: 'Tudo existe para a glória de Deus, fim último de todas as coisas.',   icon: 'ti-crown' },
];

const CAPITULOS = [
  { cap: 'Cap. 1',  titulo: 'Das Sagradas Escrituras',         texto: 'A Bíblia é a Palavra de Deus escrita, regra infalível de fé e prática, suficiente e final em toda questão de doutrina.', refs: '2Tm 3.16-17 · 2Pe 1.20-21' },
  { cap: 'Cap. 2',  titulo: 'De Deus e da Santíssima Trindade', texto: 'Há um único Deus vivo e verdadeiro, subsistindo em três pessoas: Pai, Filho e Espírito Santo, da mesma essência e poder.', refs: 'Dt 6.4 · Mt 28.19 · 2Co 13.14' },
  { cap: 'Cap. 3',  titulo: 'Do Decreto Divino',                texto: 'Deus desde a eternidade decretou, por sua própria vontade, tudo o que acontece, para sua própria glória.', refs: 'Ef 1.11 · Rm 11.33' },
  { cap: 'Cap. 8',  titulo: 'De Cristo o Mediador',             texto: 'O Filho de Deus encarnou-se, sendo verdadeiro Deus e verdadeiro homem, único mediador entre Deus e os homens.', refs: 'Jo 1.14 · 1Tm 2.5' },
  { cap: 'Cap. 10', titulo: 'Do Chamado Eficaz',                texto: 'Todos os eleitos são chamados eficazmente pelo Espírito, regenerados e dados a crer em Cristo para salvação.', refs: 'Rm 8.30 · Jo 6.44' },
  { cap: 'Cap. 11', titulo: 'Da Justificação',                  texto: 'Os chamados eficazmente são justificados gratuitamente, não por obras, mas pela imputação da justiça de Cristo.', refs: 'Rm 3.24 · Fp 3.9' },
  { cap: 'Cap. 17', titulo: 'Da Perseverança dos Santos',       texto: 'Os eleitos de Deus, uma vez regenerados, não podem perder totalmente a graça salvadora — perseveram até o fim.', refs: 'Jo 10.28-29 · Fp 1.6' },
  { cap: 'Cap. 26', titulo: 'Da Igreja',                        texto: 'A Igreja universal é composta por todos os eleitos; as igrejas locais são congregações de crentes batizados.', refs: 'Ef 1.22-23 · Mt 18.17' },
  { cap: 'Cap. 29', titulo: 'Do Batismo',                       texto: 'O batismo é ordenança do NT, administrado somente a crentes, por imersão em água, em nome da Trindade.', refs: 'Mt 28.19 · Rm 6.3-4' },
  { cap: 'Cap. 30', titulo: 'Da Ceia do Senhor',                texto: 'A Ceia do Senhor é memorial da morte de Cristo, celebrada com pão e vinho pelos membros da igreja.', refs: '1Co 11.23-26 · Lc 22.19-20' },
];

const LITURGIA = [
  { nome: 'Pregação',    desc: 'Exposição fiel e aplicada das Escrituras',  icon: 'ti-speakerphone' },
  { nome: 'Oração',      desc: 'Comunhão com Deus Pai em nome de Cristo',   icon: 'ti-hand-stop' },
  { nome: 'Cânticos',    desc: 'Salmos e hinos que exaltam a Deus',         icon: 'ti-music' },
  { nome: 'Sacramentos', desc: 'Batismo e Ceia do Senhor',                  icon: 'ti-droplet' },
];

export default function OQueCremos() {
  const [aberto, setAberto] = useState(0);
  const alternar = (i) => setAberto((prev) => (prev === i ? -1 : i));

  return (
    <>
      {/* 1. Header */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <span className="eyebrow">O Que Cremos</span>
        <h1 className="sect-title">Nossa Confissão de Fé</h1>
        <p className="lead">
          Nossas doutrinas estão fundamentadas nas Sagradas Escrituras. Adotamos a
          Confissão de Fé Batista de Londres de 1689 como nossa confissão subordinada
          à Bíblia Sagrada.
        </p>
      </section>

      {/* 2. As Cinco Solas */}
      <section className="section">
        <span className="eyebrow">Fundamentos</span>
        <h2 className="sect-title">As Cinco Solas da Reforma</h2>
        <div className="grid-auto grid-3">
          {SOLAS.map(({ latin, pt, desc, icon }) => (
            <div className="card card-hover sola-card" key={latin}>
              <div className="card-icon"><i className={`ti ${icon}`} aria-hidden="true" /></div>
              <div className="sola-latin">{latin}</div>
              <div className="sola-pt">{pt}</div>
              <p className="sola-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Confissão de Londres 1689 */}
      <section className="section-alt">
        <div className="section">
          <span className="eyebrow">Confissão de Fé</span>
          <h2 className="sect-title">Artigos da Confissão de Londres (1689)</h2>
          <div className="accordion">
            {CAPITULOS.map(({ cap, titulo, texto, refs }, i) => (
              <div className="acc-item" data-open={aberto === i ? 'true' : undefined} key={cap}>
                <button
                  className="acc-trigger"
                  onClick={() => alternar(i)}
                  aria-expanded={aberto === i}
                >
                  <span>{cap} — {titulo}</span>
                  <i className="ti ti-chevron-down acc-chevron" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-inner">
                    <p className="acc-text">{texto}</p>
                    <span className="acc-refs"><i className="ti ti-book-2" aria-hidden="true" />{refs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sobre a Liturgia */}
      <section className="section">
        <span className="eyebrow">Adoração</span>
        <h2 className="sect-title">Como Adoramos</h2>
        <p className="lead">
          Seguimos o Princípio Regulador do Culto: adoramos a Deus somente como Ele
          mesmo prescreveu em Sua Palavra.
        </p>
        <div className="grid-auto grid-4">
          {LITURGIA.map(({ nome, desc, icon }) => (
            <div className="card liturgy-card" key={nome}>
              <div className="liturgy-icon"><i className={`ti ${icon}`} aria-hidden="true" /></div>
              <div className="liturgy-name">{nome}</div>
              <p className="liturgy-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
