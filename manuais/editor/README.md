# 🎨 Manual do Editor - Psicóloga em Outra Dimensão

**Para:** Editores, revisores e gestores de conteúdo
**Objetivo:** Gestão estratégica e revisão de conteúdo do blog

## 📋 Responsabilidades do Editor

### ✅ Gestão de Conteúdo
- Revisar posts antes da publicação
- Manter calendário editorial
- Gerenciar fluxo de aprovação
- Otimizar para SEO e engajamento

### 📊 Analytics e Performance
- Monitorar métricas de engajamento
- Analisar performance dos posts
- Identificar oportunidades de melhoria
- Reportar insights para stakeholders

### 🎯 Estratégia Editorial
- Definir linha editorial
- Planejar temas sazonais
- Coordenar com escritores
- Manter qualidade consistente

## 🚀 Fluxo de Trabalho Editorial

### 1. Recebimento de Post
```
Escritor → Commit → Notificação → Editor → Revisão → Aprovação/Correção
```

### 2. Revisão de Qualidade
**Checklist de Aprovação:**
- [ ] **Conteúdo:** Relevante e bem estruturado
- [ ] **SEO:** Título, descrição e tags otimizados
- [ ] **Formato:** Front matter correto, Markdown válido
- [ ] **Imagens:** Presentes e otimizadas
- [ ] **Estilo:** Alinhado com linha editorial

### 3. Processo de Correção
```bash
# Criar branch para correções
git checkout -b review/nome-do-post

# Fazer correções
# Commit das mudanças
git add .
git commit -m "Revisão editorial: [nome do post]"

# Merge para main
git checkout main
git merge review/nome-do-post
git push origin main
```

## 📊 Monitoramento de Performance

### Métricas Chave
- **Page Views** por post
- **Tempo de leitura** médio
- **Taxa de rejeição** por página
- **Compartilhamentos** sociais
- **Comentários** e engajamento

### Ferramentas Recomendadas
- **Google Analytics 4**
- **Google Search Console**
- **Vercel Analytics**
- **Social Media Insights**

### Relatório Semanal Sugerido
```markdown
## Relatório Semanal - [Data]

### Posts Publicados
- Post 1: [Título] - [Views] views
- Post 2: [Título] - [Views] views

### Performance Geral
- Total de views: X
- Crescimento vs. semana anterior: +X%
- Post mais popular: [Título]
- Média de tempo na página: X min

### Insights e Oportunidades
- [Insight 1]
- [Insight 2]

### Ações para Próxima Semana
- [Ação 1]
- [Ação 2]
```

## 🎯 Calendário Editorial

### Planejamento Mensal
**Template de Planning:**

```markdown
# Calendário Editorial - [Mês/Ano]

## Semana 1
- [ ] Post 1: [Tema] - [Autor] - [Data]
- [ ] Post 2: [Tema] - [Autor] - [Data]

## Semana 2
- [ ] Post 3: [Tema] - [Autor] - [Data]
- [ ] Post 4: [Tema] - [Autor] - [Data]

## Temas Sazonais
- [ ] [Data especial]: [Tema relacionado]
- [ ] [Evento]: [Conteúdo específico]

## Metas do Mês
- X posts publicados
- Y% de crescimento em views
- Z temas novos explorados
```

### Datas Importantes para Conteúdo
```markdown
## Datas Anuais Relevantes
- Janeiro: Novos começos, resoluções
- Fevereiro: Relacionamentos (Dia dos Namorados)
- Março: Mulheres (Dia Internacional da Mulher)
- Abril: Páscoa, renovação
- Maio: Mães (Dia das Mães)
- Junho: Meio do ano, balanços
- Julho: Férias, descanso
- Agosto: Pais (Dia dos Pais)
- Setembro: Primavera, novos ciclos
- Outubro: Saúde Mental (Outubro Rosa)
- Novembro: Gratidão, reflexões
- Dezembro: Balanço anual, festa
```

## ✏️ Guia de Estilo Editorial

### Tom de Voz
- **Acolhedor** mas **profissional**
- **Inspirador** e **esperançoso**
- **Acessível** sem ser infantil
- **Empático** e **compreensivo**

### Estrutura de Posts Ideal
```markdown
1. **Hook** (primeira frase cativante)
2. **Contexto** (por que este tema importa)
3. **Desenvolvimento** (3-5 pontos principais)
4. **Exemplos práticos** (sempre que possível)
5. **Call-to-action** (engajamento)
6. **Conclusão** (síntese e esperança)
```

### Otimização SEO
```markdown
## Checklist SEO
- [ ] Título: 50-60 caracteres
- [ ] Meta descrição: 150-160 caracteres
- [ ] H1 único por página
- [ ] H2/H3 estruturados logicamente
- [ ] Imagem alt text descritivo
- [ ] URL limpa e descritiva
- [ ] Links internos relevantes
- [ ] Palavras-chave naturalmente integradas
```

## 🔧 Ferramentas do Editor

### Software Essencial
- **VS Code** - Editor principal
- **Grammarly** - Correção gramatical
- **Hemingway** - Simplificação de texto
- **Canva** - Criação de imagens
- **TinyPNG** - Otimização de imagens

### Extensões VS Code
```json
{
  "recommendations": [
    "ms-vscode.vscode-markdown",
    "yzhang.markdown-all-in-one",
    "streetsidesoftware.code-spell-checker",
    "streetsidesoftware.code-spell-checker-portuguese",
    "esbenp.prettier-vscode"
  ]
}
```

### Comandos Git Úteis para Editores
```bash
# Ver histórico de mudanças
git log --oneline -10

# Ver diferenças específicas
git diff HEAD~1 -- src/content/blog/

# Buscar por autor
git log --author="nome-do-escritor"

# Ver estatísticas de contribuição
git shortlog -sn
```

## 🎨 Gestão Visual

### Diretrizes de Imagem
- **Tamanho padrão:** 1200x630px (hero images)
- **Formato:** JPG para fotos, PNG para gráficos
- **Otimização:** Máximo 500KB por imagem
- **Estilo:** Consistente com identidade brutalista

### Biblioteca de Assets
```
public/images/
├── posts/          # Imagens específicas por post
├── templates/      # Templates reutilizáveis
├── social/         # Para compartilhamento
└── brand/          # Logo, cores, elementos
```

### Paleta de Cores Aprovada
```css
:root {
  --primary: #4CA6DF;    /* Azul confiança */
  --secondary: #BFFF00;  /* Verde esperança */
  --accent: #FF6B00;     /* Laranja energia */
  --tertiary: #EE99B8;   /* Rosa empatia */
  --deep: #5E18EB;       /* Roxo profundidade */
}
```

## 📈 Crescimento e Otimização

### Estratégias de Crescimento
1. **Conteúdo evergreen** - Posts atemporais
2. **SEO local** - Otimização geográfica
3. **Guest posts** - Parcerias estratégicas
4. **Repurposing** - Reaproveitar conteúdo
5. **Social proof** - Depoimentos e cases

### A/B Testing
```markdown
## Elementos para Testar
- [ ] Títulos de posts
- [ ] Call-to-actions
- [ ] Imagens hero
- [ ] Meta descrições
- [ ] Estrutura de posts
```

### Otimização de Conversão
- **Newsletter signup** no final dos posts
- **Botões de compartilhamento** visíveis
- **Related posts** inteligentes
- **Tempo de leitura** estimado
- **Progress bar** durante leitura

## 📞 Comunicação com Escritores

### Feedback Construtivo
**Template de Revisão:**
```markdown
## Revisão: [Título do Post]

### ✅ Pontos Fortes
- [Aspecto positivo 1]
- [Aspecto positivo 2]

### 📝 Sugestões de Melhoria
- [Sugestão específica 1]
- [Sugestão específica 2]

### 🚀 Para o Próximo Post
- [Dica para evolução]
- [Recurso para estudo]

**Status:** Aprovado / Revisar / Reescrever
```

### Briefings para Escritores
```markdown
## Brief: [Tema do Post]

### Objetivo
[O que queremos alcançar com este post]

### Público-alvo
[Para quem estamos escrevendo]

### Pontos principais
- [Ponto 1]
- [Ponto 2]
- [Ponto 3]

### Palavras-chave SEO
- Primária: [palavra-chave]
- Secundárias: [palavra], [palavra]

### Referências
- [Link 1]
- [Link 2]

### Deadline
[Data de entrega]
```

## 🆘 Situações de Crise

### Conteúdo Controverso
1. **Pausar publicação** imediatamente
2. **Avaliar implicações** legais e éticas
3. **Consultar stakeholders**
4. **Decidir:** editar, adiar ou cancelar

### Erro Após Publicação
```bash
# Correção rápida
git add arquivo-corrigido.md
git commit -m "Correção urgente: [descrição]"
git push origin main
# Site atualiza em 2-3 minutos
```

### Problemas Técnicos
1. **Verificar status** da Vercel
2. **Revisar logs** de deploy
3. **Contactar suporte técnico**
4. **Comunicar** delay aos stakeholders

---

**Este manual evolui constantemente. Contribua com suas experiências e insights!**

*Versão 1.0 - Janeiro 2024*