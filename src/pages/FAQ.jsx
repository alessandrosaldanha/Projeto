import { useState } from 'react';

const CATEGORIAS = [
  {
    cat: 'Sobre a Igreja',
    perguntas: [
      { q: 'O que é uma igreja batista reformada?', a: 'Uma igreja batista reformada é uma congregação que une a herança batista histórica (batismo de crentes, autonomia local, separação igreja-estado) com a teologia reformada (soberania de Deus, graça irresistível, perseverança dos santos). Adotamos a Confissão de Fé Batista de Londres de 1689 como nossa confissão doutrinária.' },
      { q: 'A IBR Maragogi é aberta a visitantes?', a: 'Sim! Todos os nossos cultos são abertos ao público. Você é bem-vindo para visitar sem nenhum compromisso. Venha no domingo às 09h para o culto matutino ou às 19h30 na quarta-feira para o culto de oração.' },
      { q: 'Como posso me tornar membro?', a: 'O processo de membresia envolve: uma conversa com o pastor sobre sua fé e vida cristã, participação na classe de membresia onde apresentamos nossa doutrina e prática, e a aprovação pelo conselho da igreja. Entre em contato para agendar.' },
      { q: 'A igreja realiza batismo de crianças?', a: 'Não. Seguindo as Escrituras e a Confissão de 1689, praticamos somente o batismo de professantes — aqueles que professam pessoalmente fé em Cristo são batizados por imersão. Crianças de famílias membros são acompanhadas e instruídas na fé.' },
    ],
  },
  {
    cat: 'Comunhão e Igrejas Irmãs',
    perguntas: [
      { q: 'De qual comunhão a IBR Maragogi faz parte?', a: 'Fazemos parte da Comunhão Batista do Nordeste (CBN), uma associação de igrejas batistas reformadas no nordeste do Brasil, comprometidas com a sã doutrina e a cooperação missionária na região.' },
      { q: 'Quais são nossas igrejas irmãs?', a: 'Temos comunhão com igrejas batistas reformadas em todo o nordeste: IBR Fortaleza (CE), IBR Recife (PE), IBR Salvador (BA), IBR Natal (RN), IBR João Pessoa (PB) e IBR Aracaju (SE), entre outras.' },
      { q: 'O que é a Comunhão Batista do Nordeste?', a: 'A CBN é uma associação voluntária de igrejas batistas reformadas do nordeste brasileiro, fundada para promover a cooperação entre igrejas irmãs, o envio de missionários, a capacitação pastoral e a plantação de novas igrejas na região.' },
    ],
  },
  {
    cat: 'Cultos e Participação',
    perguntas: [
      { q: 'Quais são os horários dos cultos?', a: 'Domingo: Culto Matutino às 09h00 e Escola Bíblica Dominical às 10h30. Quarta-feira: Culto de Oração e Estudo às 19h30. Todos os cultos acontecem em nossa sede em Maragogi, AL.' },
      { q: 'Posso participar da Ceia do Senhor como visitante?', a: 'A Ceia do Senhor é celebrada pelos membros da igreja e por cristãos batizados de igrejas irmãs que estejam em boa comunhão com sua congregação local. Visitantes e não-membros são bem-vindos a assistir ao culto, mas convidamos a aguardar a membresia para participar da Ceia.' },
      { q: 'Os cultos têm programação para crianças?', a: 'Sim. Durante a Escola Bíblica Dominical às 10h30, oferecemos turmas por faixa etária para crianças e adolescentes, com ensino bíblico adaptado à idade. No culto matutino, as crianças participam junto com a família.' },
    ],
  },
  {
    cat: 'Localização e Contato',
    perguntas: [
      { q: 'Onde fica a IBR Maragogi?', a: 'Estamos localizados na Av. Beira Mar, 320 — Centro, Maragogi, Alagoas, CEP 57955-000. Maragogi fica a 130km ao norte de Maceió pela AL-101. Clique em "Ver no mapa" no rodapé para abrir o Google Maps.' },
      { q: 'Como entro em contato com o pastor?', a: 'Você pode entrar em contato pelo email contato@ibrmaragogi.org.br, pelo WhatsApp (82) 99999-9999 ou pessoalmente após qualquer culto. O pastor está disponível para visitas pastorais, aconselhamento e esclarecimento de dúvidas.' },
      { q: 'Como contribuir financeiramente?', a: 'Você pode contribuir via PIX (CNPJ: 12.345.678/0001-90) ou transferência bancária (Banco do Brasil, Ag. 1234-5, CC 67890-1). Acesse a página Início para mais detalhes. Toda contribuição é usada para a manutenção da igreja e obras missionárias.' },
    ],
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState(null); // chave global "ci-pi"
  const alternar = (chave) => setAberto((prev) => (prev === chave ? null : chave));

  return (
    <>
      {/* 1. Header */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <span className="eyebrow">Perguntas Frequentes</span>
        <h1 className="sect-title">Como podemos ajudar?</h1>
        <p className="lead">
          Respostas às dúvidas mais comuns de visitantes e novos membros da IBR Maragogi.
        </p>
      </section>

      {/* 2. Acordeão por categoria */}
      <section className="section" style={{ paddingTop: 32 }}>
        {CATEGORIAS.map(({ cat, perguntas }, ci) => (
          <div className="faq-cat" key={cat}>
            <h3 className="faq-cat-title">{cat}</h3>
            <div className="accordion">
              {perguntas.map(({ q, a }, pi) => {
                const chave = `${ci}-${pi}`;
                const isOpen = aberto === chave;
                return (
                  <div className="acc-item" data-open={isOpen ? 'true' : undefined} key={chave}>
                    <button className="acc-trigger acc-q" onClick={() => alternar(chave)} aria-expanded={isOpen}>
                      <span>{q}</span>
                      <i className="ti ti-chevron-down acc-chevron" aria-hidden="true" />
                    </button>
                    <div className="acc-body">
                      <div className="acc-inner">
                        <p className="acc-text" style={{ fontSize: 14 }}>{a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* 3. CTA final */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="faq-cta">
          <h2>Não encontrou sua resposta?</h2>
          <p>Fale diretamente com a gente</p>
          <div className="faq-cta-actions">
            <a className="btn btn-gold" href="https://wa.me/5582999999999">
              <i className="ti ti-brand-whatsapp" aria-hidden="true" />Falar no WhatsApp
            </a>
            <a className="btn btn-outline-light" href="mailto:contato@ibrmaragogi.org.br">
              <i className="ti ti-mail" aria-hidden="true" />Enviar Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
