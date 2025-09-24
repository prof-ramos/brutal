# ⚡ Como Funciona o Deploy na Vercel

Este manual explica **exatamente** como o site é publicado online e como você pode verificar se tudo está funcionando.

## 🌐 O que é a Vercel?

A **Vercel** é a plataforma que hospeda nosso site. É como um "computador na nuvem" que:
- Recebe as atualizações do GitHub automaticamente
- Constrói o site a partir do código
- Publica online em poucos minutos
- Mantém o site rápido e disponível 24/7

**URL do site:** https://brutal-nu-one.vercel.app

## 🔄 Como Funciona o Deploy Automático

### Fluxo Completo
```
Você edita arquivo → Salva → Git commit → Git push → GitHub → Vercel → Site online
```

**⏰ Tempo total:** 2-5 minutos

### Passo a Passo Detalhado

#### 1. Você Faz Mudanças
- Cria novo post em `src/content/blog/`
- Edita página em `src/pages/`
- Adiciona imagens em `public/images/`

#### 2. Git Detecta Mudanças
```bash
git status
# Mostra arquivos modificados em vermelho
```

#### 3. Você Faz Commit
```bash
git add .
git commit -m "Novo post sobre ansiedade"
```

#### 4. Você Faz Push
```bash
git push origin main
```

#### 5. GitHub Recebe e Avisa Vercel
- GitHub detecta mudanças na branch `main`
- Envia webhook para Vercel
- Vercel inicia build automaticamente

#### 6. Vercel Faz o Build
```bash
# Vercel executa automaticamente:
npm install          # Instala dependências
npm run build        # Gera site estático
```

#### 7. Site Fica Online
- Build completo vai para CDN
- Site atualizado em https://brutal-nu-one.vercel.app
- Cache global é atualizado

## 📊 Como Monitorar o Deploy

### 1. GitHub Actions (Opcional)
Se configurado, você pode ver o status em:
`https://github.com/SEU-USUARIO/brutal/actions`

### 2. Vercel Dashboard
Acesse: https://vercel.com/dashboard
- Veja builds em andamento
- Histórico de deploys
- Logs de erro (se houver)

### 3. Verificação Manual
Após push, aguarde 3-5 minutos e:
1. Acesse o site
2. Verifique se as mudanças apareceram
3. Teste navegação
4. Confira imagens

## ⚠️ Problemas Comuns e Soluções

### "Deploy falhou - Build Error"

**Sintomas:**
- Site não atualiza após push
- Erro visível no dashboard da Vercel

**Causas possíveis:**
```bash
# Erro de sintaxe no Markdown
---
title: "Título sem aspas fechadas
description: "Descrição"
---

# Imagem inexistente referenciada
![Alt text](/images/que-nao-existe.jpg)

# Estrutura de arquivo incorreta
src/content/blog/post sem extensão
```

**Como resolver:**
1. **Verifique os logs** na Vercel
2. **Teste localmente** com `npm run build`
3. **Corrija o erro** identificado
4. **Faça novo push**

### "Site não atualiza mesmo com build success"

**Possível causa:** Cache do navegador

**Soluções:**
1. **Ctrl+F5** (hard refresh)
2. **Modo incógnito** para testar
3. **Aguarde 5-10 minutos** para CDN atualizar

### "Imagens não aparecem"

**Verificações:**
```bash
# Caminho correto?
public/images/posts/meu-post/hero.jpg

# Referência correta no post?
heroImage: "/images/posts/meu-post/hero.jpg"

# Arquivo commitado?
git status
git add public/images/
```

### "Push rejeitado"

**Erro comum:**
```
! [rejected] main -> main (fetch first)
```

**Solução:**
```bash
git pull origin main
git push origin main
```

## 🚀 Otimizações de Deploy

### 1. Build Time (Velocidade)
**Atual:** ~2-3 minutos
**Como melhorar:**
- Otimizar imagens antes de adicionar
- Evitar dependências desnecessárias
- Usar cache do Git LFS para arquivos grandes

### 2. Prevenção de Erros
**Checklist antes do push:**
```bash
# Teste local
npm run dev

# Teste build
npm run build

# Verifique arquivos
git status
git diff --staged
```

### 3. Deploy Preview
A Vercel cria **preview URLs** para branches:
- Branch `main` → https://brutal-nu-one.vercel.app
- Branch `nova-feature` → https://brutal-nu-one-git-nova-feature-usuario.vercel.app

## 📁 Estrutura de Build

### Input (Seu Código)
```
src/
├── content/blog/     # Posts em Markdown
├── pages/           # Páginas do site
├── components/      # Componentes reutilizáveis
└── styles/         # CSS global

public/
├── images/         # Imagens estáticas
└── favicon.svg     # Ícone do site
```

### Output (Site Gerado)
```
dist/                # Pasta gerada pela Vercel
├── index.html      # Homepage
├── blog/
│   ├── index.html  # Lista de posts
│   └── post-1/
│       └── index.html  # Post individual
├── _astro/         # Assets otimizados
└── images/         # Imagens processadas
```

## 🔧 Configurações da Vercel

### Build Settings
```javascript
// vercel.json (se necessário)
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### Environment Variables
Se precisar de variáveis de ambiente:
1. Acesse Vercel Dashboard
2. Vá em Settings > Environment Variables
3. Adicione chaves/valores necessários

### Custom Domain (Futuro)
Para usar domínio próprio:
1. Compre domínio (ex: gayaliz.com)
2. Configure DNS
3. Adicione na Vercel
4. SSL automático

## 📊 Métricas e Analytics

### Core Web Vitals
A Vercel monitora automaticamente:
- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### Analytics da Vercel
Acesse em: `vercel.com/analytics`
- Pageviews
- Unique visitors
- Top pages
- Countries

## 🎯 Checklist de Deploy Perfeito

### Antes de Editar
- [ ] Git status limpo
- [ ] Branch `main` atualizada
- [ ] Backup local (se necessário)

### Durante a Edição
- [ ] Teste local funcionando
- [ ] Imagens otimizadas
- [ ] Links verificados
- [ ] Corretor ortográfico

### Antes do Push
- [ ] `git status` para ver mudanças
- [ ] `git diff` para revisar alterações
- [ ] Commit message descritivo
- [ ] Teste final local

### Após o Push
- [ ] Aguardar 3-5 minutos
- [ ] Verificar site online
- [ ] Testar navegação
- [ ] Confirmar imagens

### Se Algo Deu Errado
- [ ] Verificar logs na Vercel
- [ ] Teste `npm run build` local
- [ ] Corrigir erro identificado
- [ ] Novo push com correção

## 🆘 Contatos de Emergência

### Se o Site Sair do Ar
1. **Verifique Vercel Dashboard**
2. **Status da Vercel:** status.vercel.com
3. **GitHub Status:** status.github.com
4. **Contate administrador** se persistir

### Se Build Continua Falhando
1. **Reverta última mudança:**
   ```bash
   git revert HEAD
   git push origin main
   ```
2. **Investigue localmente**
3. **Corrija e reaplique**

---

**Anterior:** [← Como Editar Páginas](02-editar-paginas.md) | **Próximo:** [Troubleshooting →](04-troubleshooting.md)