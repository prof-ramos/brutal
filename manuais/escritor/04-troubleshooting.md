# 🔧 Solução de Problemas Comuns

Este manual lista os problemas mais frequentes que você pode encontrar e suas soluções práticas.

## 🚨 PROBLEMAS URGENTES

### Site Fora do Ar
**Sintomas:** Site não carrega, erro 500/502
**Verificações:**
1. **Status da Vercel:** https://status.vercel.com
2. **GitHub Status:** https://status.github.com
3. **Seu navegador:** Teste em modo incógnito

**Soluções:**
```bash
# Se foi seu último push que causou:
git revert HEAD
git push origin main
```

### Build Falhando Constantemente
**Sintomas:** Deploy falha mesmo com correções
**Solução:**
1. **Limpe o cache da Vercel:**
   - Vá ao dashboard Vercel
   - Settings > Functions
   - Clear cache

2. **Force push limpo:**
```bash
git reset --hard HEAD~1
# Refaça as mudanças
git add .
git commit -m "Correção de build"
git push --force origin main
```

## 📝 PROBLEMAS DE CONTEÚDO

### Post Não Aparece no Site

**Causa 1: Draft ativado**
```markdown
---
title: "Meu Post"
draft: true  ← PROBLEMA
---
```
**Solução:** Mude para `draft: false`

**Causa 2: Data futura**
```markdown
---
pubDate: "2025-12-31"  ← PROBLEMA
---
```
**Solução:** Use data atual ou passada

**Causa 3: Front matter quebrado**
```markdown
---
title: Sem aspas  ← PROBLEMA
description: "Descrição"
--  ← PROBLEMA: falta um hífen
```
**Solução:** Corrija a sintaxe YAML

### Formatação Estranha no Post

**Problema:** Texto aparece mal formatado
**Verificações:**
```markdown
# Títulos corretos?
# H1 - Use apenas um por post
## H2 - Seções principais
### H3 - Subseções

# Listas corretas?
- Item 1
- Item 2

1. Item numerado
2. Outro item

# Links corretos?
[Texto do link](https://exemplo.com)
```

### Imagens Não Carregam

**Verificação de caminho:**
```
Arquivo: public/images/posts/meu-post/hero.jpg
Referência: /images/posts/meu-post/hero.jpg
              ↑ Barra inicial obrigatória
```

**Verificação de commit:**
```bash
git status
# Imagens devem aparecer como "new file" ou "modified"

git add public/images/
git commit -m "Adicionar imagens do post"
```

**Nomes de arquivo seguros:**
- ✅ `hero.jpg`, `tecnica-respiracao.png`
- ❌ `Hero Image.jpg`, `técnica-respiração.png`

## 🔧 PROBLEMAS TÉCNICOS

### Git: "Nothing to Commit"
**Sintomas:** `git status` mostra "clean working tree"
**Possíveis causas:**
1. **Arquivo não salvo** - Pressione Ctrl+S
2. **Arquivo em pasta errada** - Verifique localização
3. **Arquivo ignorado** - Verifique .gitignore

### Git: Push Rejeitado
**Erro:**
```
! [rejected] main -> main (non-fast-forward)
```

**Solução:**
```bash
git pull origin main
git push origin main
```

**Se houver conflitos:**
```bash
git pull origin main
# Resolve conflitos manualmente
git add .
git commit -m "Resolver conflitos"
git push origin main
```

### VS Code: Preview Não Funciona
**Problema:** Ctrl+Shift+V não mostra preview

**Soluções:**
1. **Instale extensão:**
   - Ctrl+Shift+X
   - Procure "Markdown All in One"
   - Install

2. **Arquivo com extensão correta:**
   - Deve terminar em `.md`
   - Não pode ser `.txt` ou `.markdown`

### Corretor Ortográfico Não Funciona
**Soluções:**
1. **Instale extensão:**
   - "Portuguese - Code Spell Checker"
   - Reinicie VS Code

2. **Configure idioma:**
   ```json
   "cSpell.language": "pt,en"
   ```

## 🌐 PROBLEMAS DE DEPLOY

### Deploy Demora Muito (>10 min)
**Possíveis causas:**
- Imagens muito grandes (>2MB cada)
- Muitos arquivos novos de uma vez
- Problemas na Vercel (verifique status)

**Soluções:**
- Otimize imagens antes do upload
- Faça commits menores
- Use ferramentas como TinyPNG

### Deploy Bem-sucedido Mas Site Não Atualiza
**Causa:** Cache do CDN ou navegador

**Soluções:**
1. **Hard refresh:** Ctrl+F5
2. **Modo incógnito**
3. **Aguarde 10 minutos** para CDN global
4. **Teste em outro dispositivo**

### Erro 404 em Páginas Novas
**Problema:** Nova página retorna 404

**Verificações:**
```
Arquivo: src/pages/sobre.astro
URL: https://site.com/sobre/
```

**Estrutura correta:**
```
src/pages/
├── index.astro          → /
├── sobre.astro          → /sobre/
├── contato.astro        → /contato/
└── blog/
    └── index.astro      → /blog/
```

## 📱 PROBLEMAS MOBILE

### Site Não Responsivo
**Verificações:**
1. **Meta viewport** presente (já configurado)
2. **CSS quebrado** - teste no navegador dev tools
3. **Imagens muito grandes** - optimize para mobile

### Navegação Mobile Quebrada
**Sintomas:** Menu não funciona em mobile
**Verificação:** JavaScript pode estar com erro
**Solução:** Verifique console do navegador (F12)

## 🔍 FERRAMENTAS DE DIAGNÓSTICO

### Debug Local
```bash
# Teste local
npm run dev

# Build local
npm run build

# Preview da build
npm run preview
```

### Logs da Vercel
1. Acesse https://vercel.com/dashboard
2. Clique no projeto
3. Vá em "Functions" ou "Deployments"
4. Clique no deploy com erro
5. Veja logs detalhados

### Teste de Performance
- **PageSpeed Insights:** https://pagespeed.web.dev
- **GTMetrix:** https://gtmetrix.com
- **WebPageTest:** https://webpagetest.org

## 📋 CHECKLIST DE PROBLEMAS

### Quando algo não funciona:

#### ✅ Verificações Básicas
- [ ] Arquivo salvo (Ctrl+S)
- [ ] Sintaxe correta do front matter
- [ ] Extensão .md no arquivo
- [ ] Imagens na pasta correta
- [ ] Git commit realizado
- [ ] Git push executado

#### ✅ Verificações de Deploy
- [ ] Build passou na Vercel
- [ ] Aguardou tempo suficiente (5 min)
- [ ] Cache do navegador limpo
- [ ] Status da Vercel OK

#### ✅ Verificações de Conteúdo
- [ ] `draft: false` no front matter
- [ ] Data válida e passada
- [ ] Títulos sem caracteres especiais
- [ ] Links funcionando

## 🆘 QUANDO PEDIR AJUDA

### Informações para fornecer:
1. **O que você estava fazendo** quando o erro ocorreu
2. **Mensagem de erro** exata (print screen)
3. **URL** que não está funcionando
4. **Dispositivo** (Windows/Mac, Chrome/Firefox)
5. **Últimas mudanças** que você fez

### Onde buscar ajuda:
1. **Documentação do Astro:** https://docs.astro.build
2. **Suporte Vercel:** https://vercel.com/support
3. **Stack Overflow** com tag "astro"
4. **Administrador do sistema**

### Logs úteis para compartilhar:
```bash
# Logs locais
npm run build

# Status do Git
git status
git log --oneline -5

# Informações do sistema
node --version
npm --version
```

## 🛠️ COMANDOS DE EMERGÊNCIA

### Reset Total (Use com cuidado!)
```bash
# Descartar TODAS as mudanças locais
git reset --hard HEAD
git clean -fd

# Voltar ao último commit funcionando
git revert HEAD
```

### Backup Antes de Mudanças Grandes
```bash
# Criar branch de backup
git checkout -b backup-antes-mudanca
git checkout main

# Fazer suas mudanças...
```

### Verificar Histórico de Mudanças
```bash
# Ver últimos commits
git log --oneline -10

# Ver diferenças
git diff HEAD~1

# Ver arquivos alterados
git show --name-only HEAD
```

---

**Este troubleshooting cobre 95% dos problemas comuns. Para casos específicos, consulte a documentação oficial ou entre em contato com suporte técnico.**

---

**Anterior:** [← Configuração Vercel](03-configuracao-vercel.md) | **Início:** [Manual do Escritor](01-como-publicar.md)