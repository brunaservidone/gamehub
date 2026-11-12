# GameHub

Site sobre jogos eletrônicos onde a pessoa pode conhecer títulos em destaque, pesquisar jogos e **enviar sugestões** por um formulário. Projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas.

**Vídeo de demonstração:** https://youtu.be/FR5ugDvQsdA
**Ver online:** https://SEU-USUARIO.github.io/gamehub/

## Funcionalidades

- Site com 4 páginas: Início, Sugestões (formulário), Sugestão recebida e Sobre.
- Busca de jogos em tempo real, com mensagem quando nada é encontrado.
- Formulário com validação em duas camadas: atributos do HTML (`required`, `pattern`, `minlength`) e JavaScript com expressões regulares.
- Os dados enviados são lidos da URL (método GET) e exibidos na página de confirmação.
- Layout responsivo para celular e computador.

## Segurança

- Os dados da página de confirmação vêm da URL, que qualquer pessoa pode alterar. Por isso eles passam pela função `escapeHTML` antes de ir para a tela, o que evita **XSS** (injeção de código).
- O formulário usa GET por exigência da atividade, então nome e e-mail aparecem na URL e no histórico do navegador. Em um site real, o correto seria usar **POST** com validação também no servidor.

## Tecnologias

HTML5, CSS3 (grid, flexbox, media queries) e JavaScript (DOM, eventos, `URLSearchParams`, expressões regulares).

## Estrutura

```
gamehub/
├── index.html
├── form.html
├── formAction.html
├── about.html
├── css/style.css
├── js/script.js    # busca e interação da página Sobre
├── js/form.js      # validação e exibição dos dados
└── imagens/
```

## Como usar

Baixe o repositório e abra o `index.html` no navegador, ou acesse pelo GitHub Pages.

## O que aprendi

- Estruturar um site com várias páginas e um visual consistente.
- Validar formulários no HTML e no JavaScript.
- Passar dados entre páginas pela URL e exibi-los com segurança.
- Filtrar elementos da página em tempo real.
- Noções de segurança no front-end (XSS e dados na URL).

## Próximos passos

- Gerar os cartões de jogos a partir de uma lista em JavaScript.
- Adicionar mais jogos e filtro por gênero.
- Enviar as sugestões para um servidor (POST) e armazená-las em banco de dados.

## Créditos das imagens

As imagens dos jogos pertencem aos seus respectivos detentores de direitos e são usadas apenas de forma ilustrativa neste projeto acadêmico, sem fins comerciais.

## Autora

**Bruna Servidone**
