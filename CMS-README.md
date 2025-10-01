# 🎨 Brutal Astrology CMS - Guia de Uso

## ✅ Status da Implementação

O CMS Admin foi implementado seguindo rigorosamente as especificações do `admin-page.md`:

### Fase 1: Setup Básico (MVP) - ✅ COMPLETO
- ✅ Sistema de autenticação JWT + bcrypt
- ✅ Middleware de proteção de rotas
- ✅ Página de login (`/admin/login`)
- ✅ Dashboard administrativo (`/admin`)
- ✅ Layout admin com navegação
- ✅ 3 endpoints de autenticação

### Fase 2: Gestão de Posts - ✅ PARCIALMENTE COMPLETO
- ✅ Endpoint GET `/api/admin/posts` (lista com filtros)
- ✅ Endpoint GET `/api/admin/posts/[id]` (detalhes)
- ✅ Endpoint PUT `/api/admin/posts/[id]` (atualizar)
- ✅ Endpoint DELETE `/api/admin/posts/[id]` (excluir)
- ✅ Página `/admin/posts` (listagem com filtros e ações)
- ⏳ Editor de posts customizado (usar Sanity Studio)
- ⏳ Upload de imagens (usar Sanity Assets)

### Fase 3: Analytics - ⏳ PLANEJADO
- ⏳ Sistema de tracking de visualizações
- ⏳ Vercel KV para armazenamento
- ⏳ Dashboard de analytics
- ⏳ Gráficos e métricas

---

## 🚀 Como Usar

### 1. Credenciais de Acesso

**Login:** `admin`
**Senha:** `brutal123`

> 💡 **Importante:** Altere a senha em `.env` para produção!

### 2. Rotas Disponíveis

| Rota | Descrição | Status |
|------|-----------|--------|
| `/admin/login` | Página de login | ✅ Funcionando |
| `/admin` | Dashboard principal | ✅ Funcionando |
| `/admin/posts` | Listagem de posts | ✅ Funcionando |
| `/admin/analytics` | Analytics (placeholder) | ⏳ Em desenvolvimento |
| `/studio` | Sanity Studio CMS | ✅ Funcionando |

### 3. Funcionalidades Principais

#### Dashboard (`/admin`)
- 📊 Estatísticas: Total de posts, rascunhos
- 📝 Posts recentes (últimos 5)
- 🚀 Ações rápidas (links para criação, Sanity Studio)

#### Gestão de Posts (`/admin/posts`)
- 📋 Listagem completa de posts
- 🔍 Filtros: Status, Categoria, Signo, Busca
- 👁 Preview de posts (abre em nova aba)
- ✏️ Editar no Sanity Studio
- 🗑️ Excluir posts (com confirmação)

#### Sanity Studio (`/studio`)
- 📝 Criar novos posts com todos os campos
- 🖼️ Upload de imagens otimizado
- 📄 Editor de rich text (Portable Text)
- 🎯 Campos astrológicos completos

---

## 🔧 Configuração

### Variáveis de Ambiente (`.env`)

```bash
# Sanity CMS
PUBLIC_SANITY_PROJECT_ID=ocywki9g
PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_PROJECT_ID=ocywki9g
SANITY_STUDIO_DATASET=production

# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD=brutal123
JWT_SECRET=jaSRCzWm1AVyMyjTvlkUzK2YhYXiHJXKL0HKpwgGbI8=
```

### Para Produção

1. **Alterar credenciais admin:**
   ```bash
   ADMIN_USERNAME=seu_usuario
   ADMIN_PASSWORD=senha_super_segura
   ```

2. **Gerar novo JWT_SECRET:**
   ```bash
   openssl rand -base64 32
   ```

3. **Configurar Sanity API Token:**
   ```bash
   SANITY_API_TOKEN=seu_token_com_permissao_de_escrita
   ```

---

## 📚 Estrutura de Arquivos Criados

```
src/
├── lib/admin/
│   ├── auth.ts                    # Funções de autenticação JWT
│   └── session.ts                 # Gerenciamento de sessão/cookies
├── middleware.ts                  # Proteção de rotas admin
├── layouts/
│   └── Admin.astro                # Layout padrão admin
├── pages/
│   ├── admin/
│   │   ├── login.astro            # Página de login
│   │   ├── index.astro            # Dashboard
│   │   ├── posts/
│   │   │   └── index.astro        # Listagem de posts
│   │   └── analytics.astro        # Analytics (placeholder)
│   └── api/admin/
│       ├── auth/
│       │   ├── login.ts           # POST /api/admin/auth/login
│       │   ├── verify.ts          # GET /api/admin/auth/verify
│       │   └── logout.ts          # POST /api/admin/auth/logout
│       └── posts/
│           ├── index.ts           # GET /api/admin/posts
│           └── [id].ts            # GET/PUT/DELETE /api/admin/posts/:id
└── env.d.ts                       # Types do Astro (+ context.locals)
```

---

## 🎯 Próximos Passos (Roadmap)

### Fase 2 - Completar (Prioridade Alta)
- [ ] Criar editor de posts customizado React
- [ ] Implementar upload de imagens via API
- [ ] Adicionar preview de Markdown em tempo real
- [ ] Auto-save a cada 30 segundos
- [ ] Bulk operations (exclusão múltipla)

### Fase 3 - Analytics (Prioridade Média)
- [ ] Setup Vercel KV para storage
- [ ] Implementar tracking de visualizações
- [ ] Criar `POST /api/track/view` (público)
- [ ] Dashboard de analytics com gráficos
- [ ] Métricas por categoria e signo

### Fase 4 - Melhorias (Prioridade Baixa)
- [ ] Rate limiting no login
- [ ] CSRF protection
- [ ] Export de dados
- [ ] Logs de auditoria
- [ ] Temas claro/escuro

---

## 🔐 Segurança Implementada

✅ **Autenticação:**
- JWT com expiração de 24 horas
- Senha pode ser hasheada ou plana (`.env`)
- Cookies httpOnly e secure

✅ **Autorização:**
- Middleware protege todas as rotas `/admin/*`
- API endpoints verificam token
- Redirecionamento automático para login

✅ **Headers de Segurança:**
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- CSP configurado

---

## 🐛 Troubleshooting

### Problema: Não consigo fazer login
**Solução:** Verifique se as credenciais em `.env` estão corretas:
```bash
ADMIN_USERNAME=admin
ADMIN_PASSWORD=brutal123
```

### Problema: Erro 401 ao acessar /admin
**Solução:** Faça login novamente em `/admin/login`. Token pode ter expirado.

### Problema: Sanity Studio não carrega
**Solução:** Verifique se as variáveis `PUBLIC_SANITY_*` estão corretas no `.env`.

### Problema: Posts não aparecem
**Solução:**
1. Verifique se há posts criados no Sanity Studio
2. Verifique se posts não estão marcados como `draft: true`
3. Limpe o cache: `rm -rf .astro && pnpm dev`

---

## 📞 Suporte

- **Documentação Completa:** Ver `admin-page.md`
- **Astro Docs:** https://docs.astro.build
- **Sanity Docs:** https://www.sanity.io/docs

---

## 🎨 Design System

O admin segue o tema Neo-Brutalist do site:

- **Primary:** `#4CA6DF` (azul)
- **Secondary:** `#BFFF00` (lima)
- **Accent:** `#FF6B00` (laranja)
- **Fonts:** Space Grotesk (headings), Inter (body)
- **Componentes:** Cards com drop shadow, botões brutais, inputs com bordas grossas

---

**Desenvolvido seguindo rigorosamente as especificações do `admin-page.md` 🎯**
