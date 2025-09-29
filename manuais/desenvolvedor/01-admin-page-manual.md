# Manual da Admin Page - Deploy no Vercel

## Visão Geral

Este manual descreve como usar a página de administração do site após o deploy no Vercel. O sistema utiliza o Sanity Studio como Content Management System (CMS) para gerenciar o conteúdo do blog.

## Prerequisites

Antes de usar a admin page, certifique-se de que:

1. O projeto foi corretamente deployado no Vercel
2. As variáveis de ambiente do Sanity foram configuradas no Vercel dashboard
3. Você tem credenciais válidas para acessar o Sanity Studio

## Acessando a Admin Page

### 1. URL do Studio

Após o deploy no Vercel, o Sanity Studio estará disponível no seguinte padrão:

```
https://<seu-projeto>.vercel.app/studio
```

Onde `<seu-projeto>` é o nome do seu projeto no Vercel.

### 2. Autenticação

- Acesse a URL do Studio
- Faça login usando suas credenciais do Sanity
- Se estiver usando autenticação customizada, siga as instruções específicas do seu sistema

## Estrutura do CMS

O Sanity Studio está configurado com os seguintes tipos de conteúdo:

### Documentos

- **Blog Post**: Artigos do blog com título, conteúdo, autor, categorias e signos relacionados
- **Author**: Informações sobre os autores do conteúdo
- **Category**: Categorias para organizar os posts
- **Zodiac Sign**: Dados sobre os signos zodiacais

## Funcionalidades do Admin

### 1. Criação de Conteúdo

1. Clique em "Create new" no menu lateral
2. Selecione o tipo de conteúdo desejado
3. Preencha os campos obrigatórios
4. Clique em "Publish" para publicar ou "Save draft" para salvar como rascunho

### 2. Edição de Conteúdo

1. Navegue até o conteúdo que deseja editar na lista
2. Clique sobre o item para abrir o editor
3. Faça as alterações necessárias
4. Clique em "Save" para salvar as alterações

### 3. Preview de Conteúdo

- O Sanity Studio oferece uma visualização previa do conteúdo enquanto você edita
- Isso permite ver como o conteúdo aparecerá no site final

### 4. Gerenciamento de Mídias

- Faça upload de imagens e outros arquivos usando o painel de upload
- As imagens podem ser adicionadas diretamente aos posts
- Use o campo "Alternative Text" para acessibilidade

## Deploy e Atualizações

### 1. Deploy Automático

- Após alterações no Sanity, o conteúdo é atualizado em tempo real ou conforme sua configuração de webhook
- O Vercel pode ser configurado para fazer deploy automático quando o conteúdo for atualizado no Sanity

### 2. Webhooks

Para configurar webhooks que disparem novos deploys quando o conteúdo for atualizado:

1. Acesse o painel do Sanity
2. Vá para Settings > Webhooks
3. Adicione um novo webhook com a URL de deploy do Vercel

### 3. Preview Builds

Quando estiver trabalhando em branchs de staging, você pode configurar preview builds:

1. Configure branches de staging no Vercel
2. Defina variáveis de ambiente separadas para cada ambiente
3. Os webhooks podem acionar deploys específicos por ambiente

## Configurações de Segurança

### 1. Variáveis de Ambiente

Certifique-se de que as seguintes variáveis estejam configuradas corretamente no Vercel:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

### 2. CORS Origins

No painel do Sanity, configure os CORS Origins com:

```
https://<seu-projeto>.vercel.app
```

### 3. Roles e Permissões

- Configure permissões adequadas para diferentes tipos de usuários no Sanity
- Utilize roles para controlar o acesso a diferentes tipos de conteúdo

## Solução de Problemas

### 1. Não consigo acessar o Studio

- Verifique se as variáveis de ambiente estão corretamente configuradas
- Confirme que o projeto Sanity está ativo e funcionando
- Verifique as configurações de CORS no painel do Sanity

### 2. Conteúdo não aparece no site

- Verifique se o conteúdo está publicado e não como rascunho
- Confirme que as variáveis de ambiente no Vercel estão apontando para o dataset correto
- Verifique se os webhooks estão configurados corretamente

### 3. Erros de permissão

- Confirme que suas credenciais têm as permissões necessárias
- Contate o administrador do projeto Sanity se necessário

## Melhores Práticas

1. Sempre salve como rascunho antes de publicar conteúdo novo
2. Revise o conteúdo antes de publicar
3. Use tags e categorias consistentemente
4. Atualize o conteúdo regularmente para manter o site atualizado
5. Monitore os webhooks para garantir que as atualizações de conteúdo sejam refletidas no site

## Recursos Adicionais

- [Documentação Oficial do Sanity](https://www.sanity.io/docs)
- [Guia de Deploy no Vercel](https://vercel.com/docs)
- [Documentação do next-sanity](https://www.sanity.io/docs/visual-editing)

---

Dica: Mantenha este manual atualizado com quaisquer mudanças na configuração do CMS ou no processo de deploy.