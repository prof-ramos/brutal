# ⚙️ Configuração do Ambiente de Desenvolvimento

Este guia detalha como configurar o ambiente de desenvolvimento para o site "Psicóloga em Outra Dimensão" e como acessar e usar o painel administrativo após o deploy no Vercel.

## 📋 Pré-requisitos

- Node.js (versão 18.x ou superior)
- pnpm (recomendado) ou npm
- Conta no Vercel
- Conta no Sanity
- Editor de código (VS Code recomendado)

## 🚀 Configuração Inicial

### 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd brutal
```

### 2. Instalar Dependências

```bash
pnpm install
# ou
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Sanity
SANITY_STUDIO_PROJECT_ID=seu_project_id
SANITY_STUDIO_DATASET=production
SANITY_API_READ_TOKEN=seu_token_de_leitura

# Vercel (automático após deploy)
NEXT_PUBLIC_URL=https://seu-projeto.vercel.app
```

## 🔧 Configuração do Sanity Studio

O Sanity Studio é o painel administrativo usado para gerenciar conteúdo. Ele está configurado em `sanity.config.ts`.

### Rodando localmente:

```bash
pnpm sanity:dev
```

O studio estará disponível em `http://localhost:3333`

## 🌐 Deploy no Vercel

### 1. Instalação do CLI do Vercel

```bash
npm install -g vercel
```

### 2. Login

```bash
vercel login
```

### 3. Deploy

```bash
vercel
```

Siga as instruções para configurar seu projeto e fazer o deploy.

## 💡 Observações Importantes

- O Sanity Studio deve ser implantado separadamente do site frontend
- As permissões de acesso ao Sanity Studio precisam ser configuradas para os administradores
- Certifique-se de proteger adequadamente os tokens de API do Sanity
- O ambiente de produção deve usar o dataset `production` no Sanity