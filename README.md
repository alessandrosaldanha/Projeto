# IBR Maragogi — Site Institucional

Site da **Igreja Batista Reformada de Maragogi**, desenvolvido com Vite + React.

## Stack

- **React 19** — UI
- **React Router v7** — roteamento client-side (SPA)
- **Vite 8** — bundler e dev server
- **Tabler Icons** — ícones via webfont CDN
- **CSS customizado** — design system próprio (`src/styles.css`)
- **Oxlint** — linting

## Estrutura

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Configuração de rotas
├── styles.css            # Design system (variáveis, layout, componentes)
├── components/
│   ├── Layout.jsx        # Sidebar + topbar mobile + footer
│   └── Sidebar.jsx       # Navegação lateral com NavLink
├── pages/
│   ├── Inicio.jsx        # Home — hero, missão, liderança, ministérios, contribuição (PIX)
│   ├── SobreNos.jsx      # Sobre — linha do tempo, liderança, horários, igrejas irmãs
│   ├── OQueCremos.jsx    # Doutrina — 5 Solas, Confissão de 1689, elementos litúrgicos
│   ├── EBD.jsx           # Escola Bíblica — estudos com filtros por grupo/tag e busca
│   └── FAQ.jsx           # Perguntas frequentes com acordeão por categoria
└── lib/
    └── pix.js            # Gerador de payload PIX (BR Code / EMV) e URL de QR Code
```

## Rotas

| Path            | Página        |
|-----------------|---------------|
| `/`             | Início        |
| `/sobre`        | Sobre Nós     |
| `/o-que-cremos` | O Que Cremos  |
| `/ebd`          | EBD           |
| `/faq`          | FAQ           |

## Comandos

```bash
npm install      # Instalar dependências
npm run dev      # Dev server (http://localhost:5173)
npm run build    # Build de produção (saída em dist/)
npm run preview  # Preview do build de produção
npm run lint     # Linting com Oxlint
```

## Design System

Paleta definida em `src/styles.css` via variáveis CSS:

| Variável          | Valor     | Uso                   |
|-------------------|-----------|-----------------------|
| `--ibr-navy`      | `#1A2B4A` | Cor primária / sidebar |
| `--ibr-gold`      | `#C9A84C` | Destaque / botões      |
| `--ibr-off-white` | `#F8F6F1` | Fundo geral            |
| `--ibr-text`      | `#2E2E2E` | Texto principal        |
| `--ibr-muted`     | `#6B7280` | Texto secundário       |

Tipografia: **Playfair Display** (títulos) + **Inter** (corpo).

## PIX

`src/lib/pix.js` implementa o padrão EMV BR Code do Banco Central, gerando o payload "Copia e Cola" e a URL de QR Code via `api.qrserver.com`. As credenciais da igreja estão em `PIX_IBR` no mesmo arquivo.
