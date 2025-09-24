# 🚀 Como Publicar Posts no Site

Este manual ensina **exatamente** como publicar novos posts no site da Psicóloga em Outra Dimensão, desde a criação até aparecer online na Vercel.

## 📁 Estrutura do Site (O que Você Precisa Saber)

```
brutal/
├── src/content/blog/     ← AQUI VOCÊ ADICIONA POSTS
│   ├── post-1.md
│   ├── post-2.md
│   └── seu-novo-post.md  ← SEU POST VAI AQUI
├── public/images/        ← AQUI VOCÊ ADICIONA IMAGENS
│   ├── posts/
│   │   └── seu-post/
│   │       └── hero.jpg
└── ...
```

## 🎯 Passo a Passo Completo

### 1. Criar o Arquivo do Post

1. **Abra a pasta do projeto** no seu computador
2. **Navegue até:** `src/content/blog/`
3. **Crie um novo arquivo** com nome descritivo:
   - ✅ `ansiedade-no-trabalho.md`
   - ✅ `tecnicas-relaxamento.md`
   - ❌ `post novo.md` (evite espaços)
   - ❌ `Post-1.md` (evite maiúsculas)

### 2. Estrutura Obrigatória do Post

**Cole este template e preencha:**

```markdown
---
title: "Título Completo do Seu Post"
description: "Descrição breve que aparece no Google (150-160 caracteres)"
pubDate: "2024-01-15"
heroImage: "/images/posts/nome-do-post/hero.jpg"
tags: ["psicologia", "ansiedade", "bem-estar"]
author: "Dra. Maria Silva"
draft: false
---

# Título do Post

Aqui você escreve o conteúdo do post em Markdown...

## Seção 1

Conteúdo da seção...

## Seção 2

Mais conteúdo...

## Conclusão

Conclusão do post...
```

**⚠️ IMPORTANTE:** A parte entre `---` no topo é obrigatória e controla como o post aparece no site.

### 3. Adicionar Imagem Principal

1. **Crie uma pasta** em `public/images/posts/` com o nome do seu post:
   ```
   public/images/posts/ansiedade-trabalho/
   ```

2. **Adicione a imagem principal** com nome `hero.jpg`:
   ```
   public/images/posts/ansiedade-trabalho/hero.jpg
   ```

3. **Tamanhos recomendados:**
   - **Largura:** 1200px
   - **Altura:** 630px (proporção 16:9)
   - **Formato:** JPG ou PNG
   - **Tamanho:** Máximo 500KB

### 4. Testar Localmente (Opcional)

Se você tem Node.js instalado:

```bash
# No terminal, dentro da pasta do projeto:
npm run dev
```

Acesse `http://localhost:4321` para ver como ficou.

### 5. Fazer Deploy (Publicar Online)

#### Método 1: Git + GitHub (Automático)

1. **Abra o terminal** na pasta do projeto
2. **Execute os comandos:**

```bash
# Adicionar todos os arquivos novos
git add .

# Criar commit com descrição
git commit -m "Novo post: [Nome do Post]"

# Enviar para GitHub
git push origin main
```

**🎉 Pronto!** A Vercel detecta automaticamente e faz o deploy em 2-3 minutos.

#### Método 2: GitHub Desktop (Interface Visual)

1. **Abra GitHub Desktop**
2. **Veja suas mudanças** na aba "Changes"
3. **Escreva uma descrição** no campo "Summary":
   ```
   Novo post: Como lidar com ansiedade no trabalho
   ```
4. **Clique em "Commit to main"**
5. **Clique em "Push origin"**

**🎉 Pronto!** Deploy automático acontece em poucos minutos.

### 6. Verificar se Publicou

1. **Aguarde 2-3 minutos** após o push
2. **Acesse o site:** `https://seu-site.vercel.app`
3. **Verifique se o post aparece** na lista
4. **Teste se abre corretamente**

## 📝 Template Rápido para Posts

**Copie e cole este template:**

```markdown
---
title: "SEU TÍTULO AQUI (máximo 60 caracteres)"
description: "Sua descrição para SEO aqui (máximo 160 caracteres)"
pubDate: "2024-01-15"
heroImage: "/images/posts/nome-da-pasta/hero.jpg"
tags: ["psicologia", "tag2", "tag3"]
author: "Seu Nome Profissional"
draft: false
---

# SEU TÍTULO AQUI

**Introdução:** Comece com uma frase que prenda a atenção do leitor...

## Por que Este Tema é Importante?

Contextualize o problema ou situação...

## Estratégias Práticas

### 1. Primeira Técnica
Explicação detalhada...

### 2. Segunda Técnica
Mais detalhes...

### 3. Terceira Técnica
Continue desenvolvendo...

## Como Implementar

Passos práticos para aplicar as técnicas...

## Quando Buscar Ajuda Profissional

Orientações sobre quando procurar um psicólogo...

## Conclusão

Resumo dos pontos principais e call-to-action...

**Precisa de ajuda personalizada?** Entre em contato conosco para agendar uma consulta.
```

## 🎨 Dicas de Formatação Markdown

### Títulos
```markdown
# Título Principal (H1) - Use apenas 1 por post
## Seção (H2) - Use para divisões principais
### Subseção (H3) - Use para subdivisões
```

### Texto
```markdown
**Negrito** para destacar pontos importantes
*Itálico* para ênfase suave
> Citação em bloco
```

### Listas
```markdown
- Item de lista
- Outro item
- Mais um item

1. Item numerado
2. Segundo item
3. Terceiro item
```

### Links
```markdown
[Texto do link](https://exemplo.com)
```

### Imagens
```markdown
![Texto alternativo](/images/posts/meu-post/imagem.jpg)
```

## ⚠️ Problemas Comuns e Soluções

### "Meu post não aparece no site"
**Possíveis causas:**
- [ ] `draft: true` no front matter → Mude para `draft: false`
- [ ] Erro na sintaxe do front matter → Verifique os `---`
- [ ] Não fez push para o GitHub → Execute `git push origin main`
- [ ] Build falhou → Verifique no GitHub Actions

### "A imagem não aparece"
**Possíveis causas:**
- [ ] Imagem não está em `public/images/posts/`
- [ ] Caminho errado no `heroImage`
- [ ] Nome do arquivo com espaços ou caracteres especiais

### "Deploy não acontece"
**Possíveis causas:**
- [ ] Não conectou GitHub com Vercel
- [ ] Build com erro → Verifique logs na Vercel
- [ ] Branch errada → Use sempre `main`

### "Post com formatação estranha"
**Possíveis causas:**
- [ ] Erro na sintaxe Markdown
- [ ] Front matter incompleto
- [ ] Caracteres especiais não escapados

## 📋 Checklist Antes de Publicar

### Conteúdo
- [ ] Título atrativo (máximo 60 caracteres)
- [ ] Descrição SEO (máximo 160 caracteres)
- [ ] Data correta no formato YYYY-MM-DD
- [ ] Tags apropriadas (3-6 tags)
- [ ] Conteúdo entre 800-2000 palavras
- [ ] Linguagem acessível e profissional
- [ ] Call-to-action no final

### Imagens
- [ ] Imagem hero em `public/images/posts/nome-post/hero.jpg`
- [ ] Tamanho 1200x630px
- [ ] Arquivo otimizado (máximo 500KB)
- [ ] Caminho correto no front matter

### Técnico
- [ ] Front matter completo e correto
- [ ] `draft: false` para publicar
- [ ] Sintaxe Markdown válida
- [ ] Arquivo salvo com extensão `.md`

### Deploy
- [ ] Arquivos adicionados ao Git
- [ ] Commit feito com mensagem descritiva
- [ ] Push realizado para origin/main
- [ ] Verificação no site após 3-5 minutos

## 🚀 Deploy Automático - Como Funciona

1. **Você faz push** para o repositório GitHub
2. **GitHub avisa a Vercel** que há mudanças
3. **Vercel baixa** as mudanças automaticamente
4. **Vercel executa** o build do site (npm run build)
5. **Vercel publica** a nova versão online
6. **Site atualizado** fica disponível em poucos minutos

**🎯 Resultado:** Você só precisa fazer push, o resto é automático!

---

**Próximo:** [Como Editar Páginas Existentes →](02-editar-paginas.md)