
# 🍔 DevBurger - Protótipo de Cardápio Digital
Bem-vindo(a) ao desafio **DevBurger**!



<div align="center">
  <h1 align="center">
    DevBuguer
    <br/>
    <br/>
      <img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/2cf4de2d-de20-4774-89ed-b9447109707a" />
    </a>
  </h1>
</div>

## Visão Geral do Projeto

Este projeto consiste em um pequeno servidor web que apresenta o cardápio da hamburgueria e permite que os clientes enviem sugestões de novos lanches. É uma excelente oportunidade para praticar conceitos fundamentais de back-end com Node.js, como a criação de servidores, o gerenciamento de rotas e o tratamento de formulários.


## Objetivos

- Praticar a criação de servidores com Node.js e Express.
- Implementar rotas GET e POST.
- Trabalhar com dados enviados via formulário.
- Simular uma API com dados em formato JSON.
- Servir arquivos estáticos e páginas HTML.


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


## ⚙️ Como Rodar o Projeto


1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/devburger.git
cd devburger
```

2. Inicialize o projeto

```bash
Copiar
Editar
npm init -y
```
3. Instale as dependências

```bash
Copiar
Editar
npm install express
```
4. Inicie o servidor

```bash
Copiar
Editar
npm start
```

O servidor estará disponível em: http://localhost:3000

```
🌐 Rotas Implementadas
Rota	Método	Descrição	Status
/GET	Página inicial com cardápio e formulário de sugestão	200
/sugestao	GET	Exibe mensagem de agradecimento com dados da sugestão via query string	200
/contato	GET	Página de contato com formulário	200
/contato	POST	Processa os dados do formulário e redireciona para /contato-recebido	200
/api/lanches	GET	Retorna os dados de lanches em formato JSON	200
* -	Página de erro 404 personalizada (opcional)	404
````
````
📝 Exemplo de Requisições
* Query String (GET /sugestao)
/sugestao?nome=Banh+mi&ingredientes=pao,vegetais,frango
````
```
* Payload (POST /contato)

{
  "nome": "Tram Anh Nguyen",
  "email": "tramanh@gmail.com",
  "assunto": "Sugestão de Evento",
  "mensagem": "Gostaria de sugerir que vocês organizassem um evento de degustação de novos lanches!"
}
```
```
* JSON (GET /api/lanches)

[
  {
    "id": 1,
    "nome": "DevBurger Clássico",
    "ingredientes": "Pão brioche, Carne 150g, Queijo cheddar, Alface americana, Tomate fresco, Molho especial"
  },
  {
    "id": 2,
    "nome": "Burger de Bacon",
    "ingredientes": "Pão australiano, Carne 180g, Queijo prato, Bacon crocante, Cebola caramelizada, Molho barbecue"
  },
  {
    "id": 3,
    "nome": "Commit Veggie",
    "ingredientes": "Pão integral, Burger de grão de bico, Queijo vegano, Rúcula, Tomate seco, Maionese de ervas"
  }
]
```
```
🧾 Views Recomendadas

index.html -	Formulário com campos nome e ingredientes, links para /contato e /api/lanches
Página de agradecimento -	Mostra os dados da sugestão recebidos via URL
contato.html -	Formulário com campos nome, email, assunto, mensagem
Página de contato recebido -	Exibe os dados do formulário pós-POST
404.html - Página para rotas não existentes
```
```
⚠️ Extras Implementados
-> Padrão PRG (Post/Redirect/Get): Após um POST, o usuário é redirecionado via GET.

❌ Página 404 personalizada: Middleware de fallback para rotas não existentes.
```
```
📌 Observações
Nenhuma dependência além do Express deve ser utilizada.
Não utilize template engines.
```
Não há armazenamento em banco de dados (uso apenas de arquivos JSON e parâmetros em memória).
O foco é didático, com ênfase em back-end puro com Express.

👨‍💻 Autor:

Desenvolvido como parte de um desafio educacional.
Sinta-se livre para contribuir!
