# 📝 Como Editar Páginas do Site

Este manual ensina como editar as páginas principais do site (Home, Sobre, Contato) e fazer deploy das mudanças.

## 📍 Localização das Páginas Principais

```
brutal/src/pages/
├── index.astro           ← PÁGINA INICIAL (HOME)
├── sobre.astro           ← PÁGINA SOBRE (se existir)
├── contato.astro         ← PÁGINA CONTATO (se existir)
└── blog/
    └── index.astro       ← PÁGINA DO BLOG
```

```
brutal/src/components/
├── layout/
│   ├── BaseNavigation.astro  ← MENU DE NAVEGAÇÃO
│   └── BaseFooter.astro      ← RODAPÉ
└── home/
    └── MobileSocials.astro   ← REDES SOCIAIS
```

## 🏠 Editando a Página Inicial

### Arquivo: `src/pages/index.astro`

**O que você pode alterar:**

#### 1. Serviços Oferecidos
```javascript
const services = [
  { name: 'Terapia Individual', description: 'Acompanhamento personalizado' },
  { name: 'Terapia de Casal', description: 'Fortaleça seu relacionamento' },
  { name: 'Terapia Familiar', description: 'Harmonia familiar' },
  { name: 'Orientação Profissional', description: 'Descubra seu caminho' },
  { name: 'Mindfulness', description: 'Prática da atenção plena' },
  { name: 'Coaching', description: 'Alcance seus objetivos' },
];
```

**Para adicionar/remover serviços:**
1. Adicione ou remova linhas da lista
2. Mantenha o formato: `{ name: 'Nome', description: 'Descrição' }`
3. Não esqueça das vírgulas entre itens

#### 2. Texto Principal
```html
<h1 class='outfit text-3xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-none'>
  PSICÓLOGA EM
  <span class='block text-secondary text-stroke'>OUTRA DIMENSÃO</span>
</h1>
<p class='outfit text-lg md:text-2xl lg:text-4xl text-white font-bold mb-8 max-w-4xl'>
  TRANSFORMANDO VIDAS ATRAVÉS DA PSICOLOGIA HUMANISTA
</p>
```

#### 3. Seção "Minha Abordagem"
```html
<p class='poppins text-black font-semibold text-sm md:text-base leading-relaxed'>
  Trabalho com uma abordagem humanista e integrativa, focada no
  desenvolvimento pessoal e no bem-estar emocional. Cada sessão é
  um espaço seguro para explorar suas emoções e encontrar soluções.
</p>
```

## 🧭 Editando o Menu de Navegação

### Arquivo: `src/components/layout/BaseNavigation.astro`

#### 1. Itens do Menu
```javascript
const navigationItems = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog/' },
];
```

**Para adicionar novas páginas:**
```javascript
const navigationItems = [
  { name: 'Home', url: '/' },
  { name: 'Sobre', url: '/sobre/' },
  { name: 'Serviços', url: '/servicos/' },
  { name: 'Blog', url: '/blog/' },
  { name: 'Contato', url: '/contato/' },
];
```

#### 2. Redes Sociais
```javascript
const socialIcons = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/psicologaemoutradimensao',
    icon: 'i-uil-instagram',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5511999999999',
    icon: 'i-uil-whatsapp',
  },
  { name: 'RSS', url: '/feed.xml', icon: 'i-uil-rss' },
];
```

**Para alterar links:**
1. Mude a URL do Instagram: `url: 'https://instagram.com/seuusuario'`
2. Mude o WhatsApp: `url: 'https://wa.me/5511999999999'`
3. Adicione outros como LinkedIn, Facebook, etc.

## 📞 Editando Informações de Contato

### Arquivo: `src/components/layout/BaseFooter.astro`

```html
<div class='brutal-pill bg-tertiary border-4 border-black p-6'>
  <h3 class='font-black text-black text-xl mb-3 uppercase'>CONTATO</h3>
  <p class='text-black font-semibold'>contato@psicologaemoutradimensao.com</p>
  <p class='text-black font-semibold'>+55 11 99999-9999</p>
</div>
<div class='brutal-pill bg-accent border-4 border-black p-6'>
  <h3 class='font-black text-black text-xl mb-3 uppercase'>LOCALIZAÇÃO</h3>
  <p class='text-black font-semibold'>São Paulo - SP</p>
  <p class='text-black font-semibold'>Atendimento Online e Presencial</p>
</div>
<div class='brutal-pill bg-primary border-4 border-black p-6'>
  <h3 class='font-black text-black text-xl mb-3 uppercase'>HORÁRIOS</h3>
  <p class='text-black font-semibold'>Segunda a Sexta: 8h - 18h</p>
  <p class='text-black font-semibold'>Sábados: 8h - 12h</p>
</div>
```

**Para alterar:**
1. **Email:** Troque `contato@psicologaemoutradimensao.com`
2. **Telefone:** Troque `+55 11 99999-9999`
3. **Localização:** Troque `São Paulo - SP`
4. **Horários:** Ajuste conforme sua agenda

## 🎨 Alterando Cores do Site

### Arquivo: `uno.config.ts`

```typescript
theme: {
  colors: {
    primary: "#4CA6DF",    // Azul confiável/calmante
    secondary: "#BFFF00",  // Verde esperança/crescimento
    accent: "#FF6B00",     // Laranja energia/motivação
    tertiary: "#EE99B8",   // Rosa empatia/conexão
    deep: "#5E18EB",       // Roxo profundidade/inconsciente
  },
}
```

**Para mudar cores:**
1. Substitua os códigos hexadecimais (#4CA6DF)
2. Use uma ferramenta como [coolors.co](https://coolors.co) para gerar paletas
3. Mantenha contraste adequado para acessibilidade

## 📄 Criando Novas Páginas

### Exemplo: Criar Página "Sobre"

1. **Crie o arquivo:** `src/pages/sobre.astro`
2. **Use este template:**

```astro
---
import Layout from '@layouts/Default.astro';
---

<Layout
  title='Sobre'
  description='Conheça a trajetória e abordagem da Psicóloga em Outra Dimensão'
  pageTitle='Sobre - Psicóloga em Outra Dimensão'
>
  <main class='bg-primary p-6 min-h-screen'>
    <div class='brutal-card bg-secondary border-8 border-accent p-8 mb-8 transform -rotate-1'>
      <h1 class='outfit text-4xl md:text-6xl lg:text-8xl font-black text-white mb-4'>
        SOBRE MIM
      </h1>
      <p class='poppins text-white font-bold text-lg md:text-2xl'>
        Minha jornada na psicologia humanista
      </p>
    </div>

    <div class='grid md:grid-cols-2 gap-8'>
      <div class='brutal-card bg-deep border-8 border-tertiary p-8'>
        <h2 class='text-2xl md:text-4xl mb-6 dm-serif text-white font-black'>
          FORMAÇÃO
        </h2>
        <p class='poppins text-white'>
          Sua formação acadêmica e especializações...
        </p>
      </div>

      <div class='brutal-card bg-accent border-8 border-deep p-8'>
        <h2 class='text-2xl md:text-4xl mb-6 dm-serif text-black font-black'>
          ABORDAGEM
        </h2>
        <p class='poppins text-black font-semibold'>
          Sua metodologia e filosofia de trabalho...
        </p>
      </div>
    </div>
  </main>
</Layout>
```

## 🚀 Deploy das Alterações

### Passo a Passo
1. **Salve todos os arquivos** modificados
2. **Abra o terminal** na pasta do projeto
3. **Execute os comandos:**

```bash
# Adicionar mudanças
git add .

# Criar commit
git commit -m "Atualização das páginas principais: contato e navegação"

# Enviar para GitHub
git push origin main
```

4. **Aguarde 2-3 minutos** para o deploy automático
5. **Verifique no site** se as mudanças apareceram

## 🔧 Configurações Importantes

### SEO e Metadados
Cada página tem estas configurações no topo:

```astro
<Layout
  title='Título da Página'
  description='Descrição que aparece no Google'
  pageTitle='Título que aparece na aba do navegador'
>
```

### Imagens do Site
**Pasta:** `public/images/`
- `favicon.svg` - Ícone que aparece na aba
- `og-image.jpg` - Imagem para compartilhamento social
- Logo e outras imagens gerais

## ⚠️ Cuidados Importantes

### ❌ NÃO Altere Estes Arquivos (a menos que saiba o que está fazendo):
- `astro.config.mjs` - Configuração principal
- `package.json` - Dependências do projeto
- Arquivos em `src/layouts/` - Templates base
- `.vercel/` - Configurações de deploy

### ✅ PODE Alterar Com Segurança:
- Conteúdo das páginas em `src/pages/`
- Componentes em `src/components/`
- Imagens em `public/images/`
- Cores em `uno.config.ts`
- Posts em `src/content/blog/`

### 🔧 Teste Local Antes do Deploy

```bash
# Instalar dependências (só na primeira vez)
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Testar build de produção
npm run build
```

Acesse `http://localhost:4321` para ver as mudanças localmente.

## 📋 Checklist de Deploy

- [ ] Todas as alterações salvas
- [ ] Teste local funcionando (se possível)
- [ ] Links internos funcionando
- [ ] Informações de contato corretas
- [ ] Imagens carregando
- [ ] Texto sem erros ortográficos
- [ ] Git add, commit e push executados
- [ ] Verificação no site após 3-5 minutos

---

**Anterior:** [← Como Publicar Posts](01-como-publicar.md) | **Próximo:** [Configurações Avançadas →](03-configuracoes.md)