# Deploy no Vercel com Integração Sanity

## Visão Geral

Este guia detalha o processo de deploy do projeto Astro com integração ao Sanity CMS no Vercel, incluindo as configurações necessárias e práticas recomendadas.

## Configurações Necessárias no Vercel

### 1. Variáveis de Ambiente

Antes de fazer o deploy, configure as seguintes variáveis de ambiente no Vercel Dashboard:

```
# Variáveis para o frontend Astro
NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id
NEXT_PUBLIC_SANITY_DATASET=seu-dataset
NEXT_PUBLIC_SANITY_API_VERSION=2022-03-07

# Variáveis para o Sanity Studio (se hospedado no mesmo domínio)
SANITY_STUDIO_PROJECT_ID=seu-project-id
SANITY_STUDIO_DATASET=seu-dataset
SANITY_STUDIO_API_VERSION=2022-03-07

# Token de leitura (opcional, mas recomendado para segurança)
NEXT_PUBLIC_SANITY_READ_TOKEN=seu-read-token
```

### 2. Configuração do Build

O Vercel automaticamente detectará e configurará o build para um projeto Astro. As configurações padrão geralmente funcionam, mas você pode personalizar:

- **Build Command:** `npm run build` ou `pnpm run build`
- **Output Directory:** `dist`

## Processo de Deploy

### 1. Via CLI

Se você tem o Vercel CLI instalado (como no comando mencionado):

```bash
# Fazer login (se necessário)
vercel login

# Deploy para staging
vercel

# Deploy para produção
vercel --prod
```

### 2. Via Git Integration

O método mais comum é conectar seu repositório Git ao Vercel:

1. Conecte seu repositório GitHub, GitLab ou Bitbucket
2. O Vercel detectará automaticamente que é um projeto Astro
3. Adicione as variáveis de ambiente necessárias
4. O deploy será acionado automaticamente a cada push na branch configurada

## Integração com Sanity

### 1. Configuração do Cliente Sanity

No seu projeto Astro, o cliente Sanity deve estar configurado para usar as variáveis de ambiente:

```js
// Exemplo de configuração
export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN em produção
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-03-07'
}
```

### 2. CORS Origins

No painel do Sanity, adicione os seguintes domínios aos CORS Origins:

- `https://<seu-projeto>.vercel.app` (domínio de staging do Vercel)
- `https://<seu-domínio-personalizado>.com` (se você tiver um domínio personalizado)
- `http://localhost:3000` (para desenvolvimento local)

### 3. Webhooks (Opcional mas recomendado)

Configure webhooks no Sanity para acionar novos deploys no Vercel quando o conteúdo for atualizado:

1. Acesse o painel do Sanity
2. Vá para Settings > Webhooks
3. Crie um novo webhook com a URL de deployment hook do Vercel
4. Selecione os eventos que acionarão o webhook (por exemplo, criação, atualização ou exclusão de documentos)

## Verificação Pós-Deploy

Após cada deploy, realize as seguintes verificações:

### 1. Funcionalidade do Site

- Verifique se todas as páginas carregam corretamente
- Confirme que o conteúdo do Sanity é exibido como esperado
- Teste todos os componentes que utilizam dados do CMS

### 2. Verificação via DevTools

- Acesse o Console e verifique por erros de conteúdo do Sanity
- Na aba Network, confirme que as requisições para o Sanity estão retornando status 200
- Verifique se os dados do Sanity estão corretamente carregados

### 3. Acesso ao Studio

- Confirme que o Sanity Studio está acessível (normalmente em `/studio`)
- Teste o login e a criação/editação de conteúdo

## Performance e Otimização

### 1. CDN do Sanity

Use a CDN do Sanity em produção para melhorar o tempo de carregamento de conteúdo:

```js
const config = {
  // ... outras configurações
  useCdn: process.env.NODE_ENV === 'production'
}
```

### 2. Imagens Otimizadas

O Sanity oferece otimização automática de imagens. Verifique se as URLs de imagem estão sendo corretamente processadas:

```
https://cdn.sanity.io/images/projectId/dataset/image-filename.jpg?w=300&h=200&q=80
```

### 3. Cache do Vercel

Aproveite o cache global do Vercel para páginas estáticas que utilizam conteúdo do Sanity:

- As páginas são geradas no momento do build (SSG)
- Atualizações no conteúdo do Sanity podem acionar novos builds (se webhooks estiverem configurados)

## Solução de Problemas Comuns

### 1. Conteúdo do Sanity não aparece

- Verifique se as variáveis de ambiente estão configuradas corretamente
- Confirme que o dataset está correto
- Verifique as permissões do projeto Sanity

### 2. Erros CORS

- Adicione o domínio Vercel ao CORS Origins no Sanity
- Verifique se o domínio foi digitado corretamente (com ou sem www, http/https)

### 3. Deploy falhando

- Confirme que todas as dependências estão corretamente listadas no `package.json`
- Verifique os logs de build no dashboard do Vercel
- Assegure-se de que os comandos de build estão corretos

## Melhores Práticas

1. **Ambientes Separados**: Use datasets diferentes para staging e production no Sanity
2. **Token de Leitura**: Use tokens de API com permissões mínimas necessárias
3. **Webhooks**: Configure webhooks para atualizações automáticas após mudanças de conteúdo
4. **Monitoramento**: Verifique regularmente o desempenho e erros após deploys
5. **Rollback**: O Vercel permite fácil rollback para versões anteriores em caso de problemas

## Recursos Adicionais

- [Documentação Oficial do Vercel](https://vercel.com/docs)
- [Guia de Deploy do Astro no Vercel](https://vercel.com/guides/deploying-astro)
- [Documentação do Sanity](https://www.sanity.io/docs)
- [Integração Astro + Sanity](https://www.sanity.io/docs/astro)

---

Dica: Sempre realize testes completos em um ambiente de staging antes de fazer deploy para produção para garantir que o conteúdo do Sanity esteja sendo exibido corretamente.