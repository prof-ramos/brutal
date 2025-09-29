# Verificação do CMS e Sanity com DevTools

## Visão Geral

Este guia descreve como verificar se o CMS (Sanity) está ativo e funcionando corretamente após o deploy no Vercel. A utilização das DevTools do navegador é essencial para diagnosticar problemas e confirmar o funcionamento adequado do sistema de conteúdo.

## Verificação do Sanity CMS

### 1. Verificação via URL do Studio

1. Acesse a URL do Sanity Studio: `https://<seu-projeto>.vercel.app/studio`
2. Se a página carregar corretamente, o Sanity Studio está configurado e ativo
3. Tente fazer login para verificar o acesso

### 2. Verificação por DevTools do Navegador

#### A. Console
1. Abra as DevTools no navegador (F12 ou Ctrl+Shift+I / Cmd+Option+I)
2. Acesse a aba "Console"
3. Carregue qualquer página do site
4. Verifique se há erros relacionados ao Sanity (ex: "Sanity client error", "CORS error")
5. A ausência de erros importantes indica que a conexão com o Sanity está funcionando

#### B. Rede (Network)
1. Na DevTools, vá até a aba "Network"
2. Recarregue a página
3. Observe as requisições feitas para o Sanity:
   - URLs contendo `api.sanity.io` ou o seu projeto Sanity
   - Status 200 para requisições bem-sucedidas
   - Verifique o tamanho e tempo de resposta das requisições
4. Procure por requisições do tipo:
   - `GET` para busca de conteúdo
   - `POST` para atualizações (no Studio)

#### C. Armazenamento (Storage)
1. Na DevTools, vá até a aba "Application" (no Chrome) ou "Storage" (no Firefox)
2. Verifique se há dados armazenados do Sanity (em LocalStorage, IndexedDB, etc.)
3. Isso confirma que o frontend está se comunicando com o Sanity

### 3. Verificação de Dados do Conteúdo

1. Acesse uma página do site que exibe conteúdo do Sanity
2. No DevTools, vá à aba "Console"
3. Execute comandos como `window.sanityClient` ou `window.__SANITY_STUDIO__` para verificar se o cliente Sanity está carregado
4. Verifique também se os dados do CMS estão sendo carregados corretamente

### 4. Teste de Atualização de Conteúdo

1. Acesse o Sanity Studio
2. Faça uma pequena alteração em um documento (ex: um post do blog)
3. Salve e publique
4. Volte ao site e atualize a página correspondente
5. A alteração deve ser visível, confirmando que o fluxo de atualização está funcionando

## Verificação de Configurações Importantes

### 1. CORS Origins

1. No Console das DevTools, procure por mensagens de erro de CORS
2. Erros como "CORS policy blocked" indicam configuração incorreta
3. Verifique se o domínio do Vercel está adicionado aos CORS Origins no painel do Sanity

### 2. Variáveis de Ambiente

1. Verifique se as variáveis de ambiente do Sanity estão corretamente configuradas no Vercel:
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

### 3. Webhooks

1. No painel do Sanity, verifique se os webhooks estão configurados corretamente
2. Verifique o histórico de webhooks para confirmar que estão sendo acionados
3. Isso assegura que as atualizações no CMS sejam refletidas no site após o deploy

## Ferramentas Adicionais

### 1. Sanity CLI

Execute no terminal para verificar o status do projeto Sanity:

```bash
sanity debug
```

### 2. Verificação no Vercel Dashboard

1. Acesse o dashboard do Vercel
2. Verifique o status de deploy
3. Confirme que as variáveis de ambiente estão corretas
4. Verifique logs de deploy em busca de erros relacionados ao Sanity

## Erros Comuns e Soluções

### 1. Erro de CORS

**Sintoma:** Mensagens de "Cross-Origin Request Blocked" no Console
**Solução:** Adicione o domínio do Vercel aos CORS Origins no painel do Sanity

### 2. Conteúdo não carrega

**Sintoma:** Páginas aparecem sem conteúdo ou com placeholders
**Solução:** Verifique as requisições na aba Network e erros no Console

### 3. Erro de autenticação no Studio

**Sintoma:** Não é possível acessar o Sanity Studio
**Solução:** Verifique credenciais e configurações de projeto

## Conclusão

A verificação regular do funcionamento do Sanity através das DevTools é essencial para manter a integridade do sistema de gerenciamento de conteúdo. Use as abas Console, Network e Application para diagnosticar e resolver problemas rapidamente, garantindo que o CMS esteja sempre ativo e atualizado após deploys no Vercel.

---

Lembrete: Sempre verifique o funcionamento do CMS após cada deploy importante para garantir que o conteúdo continue sendo exibido corretamente para os usuários.