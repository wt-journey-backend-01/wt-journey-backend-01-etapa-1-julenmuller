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

    res.send(`
        <h1>Obrigado pela sugestão, ${nome}!</h1>
        <p>Recebemos sua ideia de lanche com os ingredientes: <strong>${ingredientes}</strong></p>
        <a href="/">Voltar para a página inicial</a>
    `);
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.post('/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;

    res.send(`
        <h1>Contato recebido!</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
        <a href="/contato">Voltar</a>    
    `);
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

app.listen(PORT, () => {
    console.log(`Servidor da DevBurguer em http://localhost:${PORT}`);
});
