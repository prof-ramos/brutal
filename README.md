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

Para conectar o projeto ao Sanity CMS, você precisa de um `projectId` e um `dataset` ativos.

1. Crie um arquivo `.env.local` na raiz (ou use `.env` se preferir versionar localmente).
2. Preencha as variáveis abaixo com os valores do seu projeto em [sanity.io/manage](https://sanity.io/manage):

    ```
    # Usado pelo Astro em produção e preview
    PUBLIC_SANITY_PROJECT_ID="seu-project-id"
    PUBLIC_SANITY_DATASET="production"

    # Usado pelo Sanity Studio e CLI
    SANITY_STUDIO_PROJECT_ID="seu-project-id"
    SANITY_STUDIO_DATASET="production"

    # Caso o site precise escrever no CMS, crie um token em Manage → API → Tokens
    # SANITY_API_TOKEN="token-com-permissoes"
    ```

3. Faça login e vincule o projeto local ao Sanity (apenas na primeira vez):

    ```bash
    pnpm sanity login
    pnpm sanity init   # selecione o projeto existente e confirme o dataset
    ```

4. Quando alterar schemas em `sanity/schemaTypes` ou `src/content/content.config.ts`, rode:

    ```bash
    npx astro sync
    ```

5. Inicie o Studio local para validar conteúdos e schemas:

    ```bash
    pnpm sanity dev
    ```

O arquivo `sanity.cli.ts` já carrega essas variáveis e registra o `appId` de deploy, evitando prompts adicionais no CLI.

### Deploy do Sanity Studio

Use o serviço hospedado pela Sanity para disponibilizar o painel para a equipe:

```bash
pnpm sanity deploy
```

- A primeira vez será solicitado um hostname (`<nome>.sanity.studio`).
- O CLI reutiliza o `appId` salvo em `sanity.cli.ts`, então deploys futuros são comandos de uma linha.
- O Studio atual está publicado em `https://psicologaemoutradimensao.sanity.studio/` (ajuste se definir outro hostname).

### Configuração na Vercel

1. Acesse o projeto na [Vercel](https://vercel.com/).
2. Vá em *Settings → Environment Variables* e replique para Production, Preview e Development:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET`
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`
   - (`SANITY_API_TOKEN` se o site precisar escrever dados)
3. Salve e clique em **Redeploy** para aplicar as mudanças.
4. Após cada alteração de schema, rode `pnpm sanity deploy` e depois inicie um novo deploy na Vercel para garantir que o front-end consuma o conteúdo atualizado.

> Dica: revise os componentes em `src/components` que ainda usam `astro:content`. Substitua gradualmente por chamadas ao cliente Sanity (`src/lib/sanity.ts`) para servir o conteúdo diretamente do CMS.

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
