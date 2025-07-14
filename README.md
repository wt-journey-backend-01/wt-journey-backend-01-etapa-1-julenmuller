
Bem-vindo(a) ao desafio de desenvolvimento do protótipo de um cardápio digital para a nossa nova hamburgueria gourmet, a "DevBurger"!

<div align="center">
  <h1 align="center">
    DevBuguer
    <br/>
    <br/>
      <img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/2cf4de2d-de20-4774-89ed-b9447109707a" />
    </a>
  </h1>
</div>

O objetivo é criar uma aplicação web simples e funcional utilizando Node.js e Express. Nesta primeira fase, não nos preocuparemos com bancos de dados; toda a lógica de exibição e recebimento de dados será gerenciada diretamente pelo servidor.

## Visão Geral do Projeto

Este projeto consiste em um pequeno servidor web que apresenta o cardápio da hamburgueria e permite que os clientes enviem sugestões de novos lanches. É uma excelente oportunidade para praticar conceitos fundamentais de back-end com Node.js, como a criação de servidores, o gerenciamento de rotas e o tratamento de formulários.

## Estrutura de Arquivos

```bash
devburger/
├── public/
│   ├── css/
│   │   └── cardapio.css
│   │   └── style.css
│   ├── images/
│   │    └── logo.png
│   ├── data
│   │     └── lanches.json
│   └── 404.html
│
├── views/
│   ├── cardapio.html
│   ├── index.html
│   └── contato.html        
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

- **`public/`**: Contém todos os arquivos estáticos que serão servidos diretamente ao cliente, como folhas de estilo (CSS), imagens, arquivos JSON e scripts do lado do cliente.
- **`views/`**: Contém os arquivos HTML estáticos que serão servidos por cada endpoint.
- **`server.js`**: O coração da nossa aplicação, onde o servidor Express será configurado e todas as rotas serão definidas.
- **`package.json`**: Arquivo de manifesto do projeto Node.js, que inclui as dependências (como o Express).
- **`README.md`**: Este arquivo, com a documentação do projeto.
