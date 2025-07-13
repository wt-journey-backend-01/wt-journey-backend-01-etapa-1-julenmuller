const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/sugestao', (req, res) => {
  const { nome, ingredientes } = req.query;

  res.status(200).send(`
    <h1>Obrigado pela sugestão, ${nome}!</h1>
    <p>Recebemos sua ideia de lanche com os ingredientes: <strong>${ingredientes}</strong></p>
    <a href="/">Voltar para a página inicial</a>
  `.trim());
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.post('/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Mensagem Recebida</title>
      <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
      <h1>Mensagem recebida!</h1>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${assunto}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
      <a href="/">Voltar à página inicial</a>
    </body>
    </html>
  `);
});

app.get('/cardapio', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cardapio.html'));
});

app.get('/api/lanches', (req, res) => {
  const dataPath = path.join(__dirname, 'public', 'data', 'lanches.json');

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao ler os lanches' });
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor da DevBurger em http://localhost:${PORT}`);
});