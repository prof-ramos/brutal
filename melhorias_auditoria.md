# Checklist de Melhorias da Auditoria Técnica

Este arquivo resume as ações recomendadas após a auditoria técnica do projeto.

###  критический (Prioridade Alta)

- [x] **Corrigir Vulnerabilidades de Dependências:** Atualizar as dependências do projeto para corrigir as 25 vulnerabilidades encontradas. (Reduzido para 1 vulnerabilidade moderada).
  - **Ação:** Executar `pnpm up` e verificar se as vulnerabilidades de alto e médio risco foram resolvidas com `pnpm audit`.

- [x] **Implementar Headers de Segurança:** Adicionar headers de segurança essenciais no arquivo `astro.config.ts` para proteger a aplicação contra ataques web comuns.
  - **Ação:** Configurar no mínimo `Content-Security-Policy`, `X-Frame-Options`, e `X-Content-Type-Options`.

- [x] **Adicionar Validação no Servidor:** Implementar validação de dados robusta no lado do servidor (server-side) para a API que recebe os dados do formulário "Mapa Astral".
  - **Ação:** Utilizar uma biblioteca de validação de esquema como `Zod` para validar todos os campos recebidos pela API.

### Otimização (Prioridade Média)

- [x] **Otimizar Animações CSS:** Refatorar a propriedade `transition` nas animações CSS para ser específica (ex: `transition: transform 0.2s, filter 0.2s;`) em vez de usar `transition: all;`.
  - **Ação:** Revisar o arquivo `src/styles/global.css` e classes como `.brutal-card` e `.brutal-button`.

- [ ] **Analisar o Bundle de Produção:** Investigar o tamanho final do bundle para identificar possíveis otimizações e garantir o *code splitting* adequado.
  - **Ação:** Executar o comando `pnpm build && npx astro-visualizer` para gerar um mapa visual do build.

### Acessibilidade (Teste Manual)

- [ ] **Validar Acessibilidade Manualmente:** Realizar testes manuais para garantir a conformidade total com as diretrizes WCAG.
  - **Ação:** Testar a navegação completa do site utilizando apenas o teclado e usar uma ferramenta (como a extensão aXe DevTools) para verificar o contraste de cores em todas as páginas.
