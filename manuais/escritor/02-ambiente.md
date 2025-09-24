# 💻 Manual do Escritor - Ambiente de Trabalho

Neste capítulo, você vai aprender a configurar todas as ferramentas necessárias para escrever posts de forma eficiente e profissional.

## 🛠️ Ferramentas Necessárias

### 1. Editor de Texto (Escolha UMA)

#### 🥇 **Recomendado: Visual Studio Code** (Gratuito)
**Por que usar:** Interface amigável, suporte completo ao Markdown, extensões úteis

**Como instalar:**
1. Acesse [code.visualstudio.com](https://code.visualstudio.com/)
2. Baixe e instale a versão para seu sistema operacional
3. Abra o VS Code

**Extensões obrigatórias:**
- `Markdown All in One` - Para formatação Markdown
- `Portuguese - Code Spell Checker` - Corretor ortográfico
- `Prettier` - Formatação automática
- `Live Preview` - Visualização em tempo real

**Como instalar extensões:**
1. Pressione `Ctrl+Shift+X` (Windows) ou `Cmd+Shift+X` (Mac)
2. Pesquise pelo nome da extensão
3. Clique em "Install"

#### 🥈 **Alternativa: Typora** (Pago, ~$15)
**Por que usar:** Editor WYSIWYG, muito intuitivo para iniciantes

#### 🥉 **Alternativa: Notion** (Gratuito)
**Por que usar:** Familiar para muitos usuários, tem exportação Markdown

### 2. Git e GitHub (Obrigatório)

**O que é:** Sistema de controle de versão que permite colaboração

**Como configurar:**
1. Crie uma conta no [GitHub](https://github.com)
2. Baixe o [GitHub Desktop](https://desktop.github.com/) (interface gráfica)
3. Faça login com sua conta GitHub
4. Clone o repositório do site (será fornecido pelo administrador)

### 3. Navegador Web
**Recomendado:** Chrome ou Firefox com extensões:
- `Grammarly` - Correção de texto
- `LanguageTool` - Correção em português

## 📁 Estrutura de Pastas

Depois de clonar o repositório, você verá esta estrutura:

```
brutal/
├── src/
│   ├── content/
│   │   └── blog/          ← SEUS POSTS FICAM AQUI
│   │       ├── post-1.md
│   │       ├── post-2.md
│   │       └── ...
│   └── ...
├── public/
│   └── images/            ← SUAS IMAGENS FICAM AQUI
│       ├── posts/
│       └── ...
└── manuais/               ← VOCÊ ESTÁ AQUI
```

### Pasta de Posts: `src/content/blog/`
- **Aqui ficam todos os seus artigos**
- **Formato:** Arquivos `.md` (Markdown)
- **Nomenclatura:** Use nomes descritivos, ex: `ansiedade-tecnicas-relaxamento.md`

### Pasta de Imagens: `public/images/posts/`
- **Aqui ficam as imagens dos posts**
- **Organize** por pasta do post ou data
- **Formatos aceitos:** JPG, PNG, WebP, SVG

## 🖥️ Configuração do VS Code

### Tema Recomendado
1. Abra VS Code
2. Pressione `Ctrl+Shift+P` (Windows) ou `Cmd+Shift+P` (Mac)
3. Digite "theme" e selecione "Preferences: Color Theme"
4. Escolha um tema claro como "Light+" para melhor legibilidade

### Configurações Importantes

**Arquivo > Preferências > Configurações**, procure e configure:

```json
{
  "editor.wordWrap": "on",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5,
  "files.autoSave": "onDelay",
  "files.autoSaveDelay": 1000,
  "markdown.preview.fontSize": 14,
  "cSpell.language": "pt,en"
}
```

### Atalhos Úteis

| Ação | Windows/Linux | Mac |
|------|---------------|-----|
| Abrir preview do Markdown | `Ctrl+Shift+V` | `Cmd+Shift+V` |
| Abrir preview lado a lado | `Ctrl+K V` | `Cmd+K V` |
| Salvar arquivo | `Ctrl+S` | `Cmd+S` |
| Buscar no arquivo | `Ctrl+F` | `Cmd+F` |
| Buscar e substituir | `Ctrl+H` | `Cmd+H` |

## 📝 Fluxo de Trabalho Recomendado

### 1. Planejamento (Antes de Escrever)
- **Brainstorm:** Liste ideias de temas
- **Pesquisa:** Colete referências e dados
- **Outline:** Faça um esboço da estrutura
- **Palavras-chave:** Defina termos SEO importantes

### 2. Escrita (Durante)
- **Escreva primeiro, revise depois**
- **Use o preview do Markdown** para ver como fica
- **Salve frequentemente** (ou use auto-save)
- **Faça commits** a cada seção importante

### 3. Revisão (Depois)
- **Leia em voz alta** para verificar fluidez
- **Use corretor ortográfico**
- **Verifique links** e referências
- **Teste no preview** como ficará no site

### 4. Publicação
- **Commit final** com mensagem descritiva
- **Push** para o repositório
- **Avise o editor** que está pronto para revisão

## 🔄 Usando o Git (Versão Simples)

### GitHub Desktop (Recomendado para Iniciantes)

**Fazendo alterações:**
1. Abra o GitHub Desktop
2. Veja suas mudanças na aba "Changes"
3. Escreva um resumo da mudança (ex: "Adicionado post sobre ansiedade")
4. Clique em "Commit to main"
5. Clique em "Push origin" para enviar

**Sincronizando com o servidor:**
- Sempre clique em "Fetch origin" antes de começar a trabalhar
- Isso baixa atualizações de outros colaboradores

### Comandos Básicos (Para Usuários Avançados)

```bash
# Atualizar seu repositório local
git pull origin main

# Adicionar arquivos novos/modificados
git add .

# Fazer commit das mudanças
git commit -m "Adicionado post sobre técnicas de relaxamento"

# Enviar para o servidor
git push origin main
```

## 📋 Checklist de Configuração

### ✅ Antes de Começar
- [ ] VS Code instalado e configurado
- [ ] Extensões do Markdown instaladas
- [ ] Conta GitHub criada
- [ ] GitHub Desktop instalado
- [ ] Repositório clonado na sua máquina
- [ ] Corretor ortográfico configurado

### ✅ Para Cada Post
- [ ] Arquivo criado na pasta correta (`src/content/blog/`)
- [ ] Nome do arquivo descritivo
- [ ] Imagens organizadas em `public/images/posts/`
- [ ] Preview testado no VS Code
- [ ] Corretor ortográfico executado
- [ ] Commit realizado com mensagem clara

## 🆘 Problemas Comuns

### "Não consigo ver o preview do Markdown"
**Solução:** Pressione `Ctrl+Shift+V` ou instale a extensão "Markdown All in One"

### "Minhas imagens não aparecem"
**Solução:** Verifique se as imagens estão em `public/images/` e o caminho está correto

### "GitHub Desktop não reconhece mudanças"
**Solução:** Verifique se você está na pasta correta do repositório

### "Corretor ortográfico não funciona"
**Solução:** Instale "Portuguese - Code Spell Checker" e reinicie o VS Code

## 🚀 Dicas de Produtividade

### Snippets Úteis
Configure snippets para estruturas recorrentes:

1. Vá em `Arquivo > Preferências > Configure User Snippets`
2. Selecione "markdown"
3. Adicione templates para posts

### Organização
- **Mantenha** uma pasta local para rascunhos
- **Use** nomes consistentes para arquivos
- **Faça backup** do seu trabalho regularmente
- **Mantenha** um calendário editorial

---

**Anterior:** [← 01. Introdução](01-introducao.md) | **Próximo:** [03. Primeiro Post →](03-primeiro-post.md)