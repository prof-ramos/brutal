<div align="center">

# Brutal Astro Theme - Astrology Edition

![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro)
![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![UnoCSS](https://img.shields.io/badge/UnoCSS-333333?style=for-the-badge&logo=unocss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)

</div>

Um site moderno e impactante com tema de astrologia, construído com [Astro](https://astro.build/), um ousado estilo neobrutralista e gerenciado com [Sanity.io](https://www.sanity.io/).

## 🎨 Características do Design

- **Tipografia Impactante**: Fontes Space Grotesk e Inter.
- **Bordas Grossas**: Bordas de 8px em cores contrastantes.
- **Sombras Dramáticas**: Efeitos de `drop-shadow` interativos.
- **Layouts Assimétricos**: Cards rotacionados que se alinham no hover.
- **Cores Vibrantes**: Paleta de cores temática e personalizável.

## 🔒 Segurança Aprimorada

Este projeto passou por uma auditoria de segurança e recebeu melhorias significativas:

- **Headers de Segurança**: Implementação de `Content-Security-Policy`, `X-Frame-Options`, e outros headers HTTP no `astro.config.ts` para proteção contra ataques como XSS e Clickjacking.
- **Validação de API (Server-Side)**: A rota da API do "Mapa Astral" agora possui validação de dados robusta no lado do servidor usando **Zod**, prevenindo a submissão de dados maliciosos ou malformados.
- **Auditoria de Dependências**: As dependências foram atualizadas, **reduzindo 25 vulnerabilidades** (incluindo 8 de alto risco) para apenas 1 de risco moderado.

## ⚡ Otimização de Performance

- **Animações CSS Otimizadas**: As transições CSS foram refatoradas para animar apenas propriedades performáticas (`transform`, `filter`), evitando o uso custoso de `transition: all`.
- **Geração On-Demand**: O UnoCSS garante que apenas o CSS utilizado na aplicação seja incluído no bundle final.

## 🚀 Como Usar

### Pré-requisitos
- Node.js (versão 18+)
- pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/prof-ramos/brutal.git
cd brutal

# Instale as dependências
pnpm install
```

### Configuração do Sanity

Para conectar o projeto ao Sanity CMS, você precisa de um `projectId` e um `dataset`.

1.  Crie um arquivo `.env.local` na raiz do projeto.
2.  Adicione as seguintes variáveis, substituindo pelos seus próprios valores:

    ```
    # Usado pelo Astro para buscar dados
    PUBLIC_SANITY_PROJECT_ID="seu-project-id"
    PUBLIC_SANITY_DATASET="production"

    # Usado pelo Sanity Studio (painel admin)
    SANITY_STUDIO_PROJECT_ID="seu-project-id"
    SANITY_STUDIO_DATASET="production"
    ```
    Você pode encontrar seu `projectId` no painel de controle do [sanity.io/manage](https://sanity.io/manage).

### Comandos Disponíveis

| Comando             | Ação                                               |
| :------------------ | :------------------------------------------------- |
| `pnpm dev`          | Inicia o servidor de desenvolvimento em `localhost:4321` |
| `pnpm sanity:dev`   | Inicia o Sanity Studio em `localhost:3333`         |
| `pnpm build`        | Constrói o site para produção em `./dist/`        |
| `pnpm preview`      | Visualiza a versão construída localmente           |

## 🛠️ Stack Tecnológica

- **Astro 5.14.1**
- **Sanity.io** (CMS)
- **TypeScript**
- **Vite**
- **UnoCSS 0.57.7**
- **Brutal UI 0.2.6**
- **Zod** (para validação de schema)
- **PNPM 8.6.0**
- **ESLint + Prettier**
- **Sharp** e **Satori** (para geração de imagens)
- **Iconify**

## 📁 Estrutura do Projeto

```
src/
├── components/
├── content/      # Conteúdo local (Markdown)
├── layouts/
├── pages/
│   ├── api/
│   │   └── mapa-astral.ts
│   └── mapa-astral.astro
└── styles/
sanity/
├── schemaTypes/  # Definições de schema do Sanity
└── ...
sanity.config.ts  # Configuração do Sanity Studio
```

## 🎯 Recursos Temáticos de Astrologia

- **Blog de Astrologia**: Artigos com humor sobre signos, compatibilidade e mais, gerenciados via Sanity.
- **Mapa Astral**: Formulário neo-brutalista para coleta de dados. A rota da API em `/api/mapa-astral` agora valida os dados de forma segura no servidor.
- **Ícones e Emojis**: Uso consistente de ícones para representar signos, níveis de humor e outros elementos temáticos.

## 📄 Licença

Este projeto utiliza a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.