# Psicóloga em Outra Dimensão - Site Brutalista

Um site moderno e impactante para serviços de psicologia, construído com [Astro](https://astro.build/) e estilo neobrutralista. O design combina uma abordagem visual ousada com uma paleta de cores cuidadosamente selecionada para transmitir confiança e acolhimento.

## 🎨 Características do Design

### Estilo Brutalista Aprimorado
- **Tipografia Impactante**: Fontes Space Grotesk e Inter com pesos bold
- **Bordas Grossas**: Bordas de 8px em cores contrastantes
- **Sombras Dramáticas**: Drop shadows de 12px com efeitos interativos
- **Layouts Assimétricos**: Cards rotacionados que se alinham no hover
- **Cores Vibrantes**: Paleta psicológica com azul, verde-limão, laranja, rosa e roxo

### Recursos de Acessibilidade
- Estados de foco visíveis para navegação por teclado
- Suporte a preferências de movimento reduzido
- Alto contraste para melhor legibilidade
- Design responsivo otimizado para mobile

## 🚀 Como Usar

### Pré-requisitos
- Node.js (versão 18+)
- PNPM, NPM ou Yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/prof-ramos/brutal.git
cd brutal

# Instale as dependências
pnpm install
```

### Comandos Disponíveis

| Comando             | Ação                                               |
| :------------------ | :------------------------------------------------- |
| `pnpm install`      | Instala as dependências                            |
| `pnpm dev`          | Inicia o servidor de desenvolvimento em `localhost:4321` |
| `pnpm build`        | Constrói o site para produção em `./dist/`        |
| `pnpm preview`      | Visualiza a versão construída localmente           |
| `pnpm astro ...`    | Executa comandos CLI como `astro add`              |

## 🛠️ Tecnologias Utilizadas

### Framework e Build
- **Astro**: Framework moderno para sites rápidos
- **UnoCSS**: Framework CSS utility-first compatível com TailwindCSS
- **TypeScript**: Para desenvolvimento type-safe

### Integrações Automáticas
- **Sitemap**: Gerado automaticamente durante o build
- **RSS Feed**: Feed XML para posts do blog
- **Otimização de Imagens**: Processamento automático de imagens
- **SEO**: Meta tags e structured data otimizados

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── blog/           # Componentes específicos do blog
│   ├── generic/        # Componentes genéricos
│   ├── home/           # Componentes da página inicial
│   └── layout/         # Layout e navegação
├── content/            # Conteúdo markdown (posts do blog)
├── layouts/            # Templates de layout
├── pages/              # Páginas do site
└── styles/             # Estilos globais CSS
```

## 🎯 Recursos Específicos para Psicologia

### Paleta de Cores Terapêutica
- **Azul Primário** (`#4CA6DF`): Confiança e calma
- **Verde Esperança** (`#BFFF00`): Crescimento e renovação
- **Laranja Energia** (`#FF6B00`): Motivação e vitalidade
- **Rosa Empatia** (`#EE99B8`): Conexão e cuidado
- **Roxo Profundidade** (`#5E18EB`): Introspecção e sabedoria

### Seções Especializadas
- **Serviços Oferecidos**: Cards interativos com diferentes especialidades
- **Abordagem Terapêutica**: Descrição da metodologia humanista
- **Blog Profissional**: Artigos sobre psicologia e bem-estar
- **Informações de Contato**: Footer com dados para agendamento

## 🎨 Personalização

### Cores
As cores podem ser modificadas no arquivo `uno.config.ts`:

```typescript
theme: {
  colors: {
    primary: "#4CA6DF",    // Azul confiável
    secondary: "#BFFF00",  // Verde esperança
    accent: "#FF6B00",     // Laranja energia
    tertiary: "#EE99B8",   // Rosa empatia
    deep: "#5E18EB",       // Roxo profundidade
  },
}
```

### Estilos Brutalistas
Os estilos podem ser ajustados em `src/styles/global.css`:

```css
.brutal-card {
  filter: drop-shadow(12px 12px 0 rgb(0 0 0 / 1));
  border-style: solid;
}
```

## 📱 Responsividade

O site é totalmente responsivo com:
- Breakpoints otimizados para mobile, tablet e desktop
- Sombras reduzidas em telas menores para melhor performance
- Typography scaling apropriado para cada dispositivo
- Touch targets de tamanho adequado

## 🔧 Configuração de Produção

### Sitemap
Configure seu domínio em `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://psicologaemoutradimensao.com',
});
```

### RSS Feed
O feed RSS é gerado automaticamente em `/feed.xml` a partir dos posts do blog.

## 📄 Licença

Este projeto é baseado no tema Brutal original e foi customizado para atender às necessidades específicas de profissionais da psicologia.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Abrir issues para bugs ou sugestões
- Enviar pull requests com melhorias
- Compartilhar feedback sobre a experiência do usuário

---

💚 Desenvolvido com paixão para profissionais da psicologia que querem causar impacto visual e emocional.