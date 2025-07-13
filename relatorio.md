<sup>Esse é um feedback gerado por IA, ele pode conter erros.</sup>

Você tem 8 créditos restantes para usar o sistema de feedback AI.

# Feedback para julenmuller:

Nota final: **49.4/100**

Olá, julenmuller! 🚀 Primeiramente, parabéns pelo seu esforço e dedicação nesse desafio! Receber uma nota de **49.4/100** é uma ótima base para construir e aprimorar seu conhecimento. Vamos juntos entender o que podemos melhorar? 💪

### Celebrações 🎉
Infelizmente, não houve conquistas bônus nesta tarefa, mas isso não diminui o seu esforço! Cada linha de código escrita é uma oportunidade de aprendizado. Continue assim! 

### Análise dos Requisitos que Precisam de Atenção 🔍

1. **Rota `/` e Formulários**: Um dos requisitos é que a rota `/` deve conter pelo menos um formulário. No seu código, percebi que a rota está implementada, mas não há um formulário na página `index.html`. É fundamental incluir um `<form>` para coletar as sugestões! Algo como:
   ```html
   <form action="/sugestao" method="GET">
       <input type="text" name="nome" placeholder="Seu nome" required>
       <input type="text" name="ingredientes" placeholder="Ingredientes" required>
       <button type="submit">Enviar Sugestão</button>
   </form>
   ```
   Isso vai atender aos requisitos de ter dois campos de texto e um botão de submit. 

2. **Rota `/contato` (GET)**: Aqui, você já implementou a rota, mas precisamos garantir que a página `contato.html` contenha todos os campos necessários. Os requisitos mencionam que devem existir os campos `nome`, `email`, `assunto` e `mensagem`. Vamos adicionar campos como este:
   ```html
   <form action="/contato" method="POST">
       <input type="text" name="nome" placeholder="Seu nome" required>
       <input type="email" name="email" placeholder="Seu email" required>
       <input type="text" name="assunto" placeholder="Assunto" required>
       <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
       <button type="submit">Enviar</button>
   </form>
   ```
   Não se esqueça de incluir uma âncora que leve de volta à página inicial! 

3. **Rota `/contato` (POST)**: A resposta da rota `/contato` precisa exibir o "assunto" enviado no formulário. Você já capturou os dados, então apenas adicione uma linha para mostrar o `assunto` na resposta:
   ```javascript
   <p><strong>Assunto:</strong> ${assunto}</p>
   ```

4. **Rota `/api/lanches`**: Para essa rota, você precisa retornar um array de lanches. Verifique se o arquivo `lanches.json` possui pelo menos 3 lanches com os atributos corretos (id, nome, ingredientes). O retorno deve ser algo como:
   ```json
   [
       { "id": 1, "nome": "Lanche 1", "ingredientes": ["pão", "carne", "queijo"] },
       { "id": 2, "nome": "Lanche 2", "ingredientes": ["pão", "frango", "salada"] },
       { "id": 3, "nome": "Lanche 3", "ingredientes": ["pão", "vegetais", "molho"] }
   ]
   ```

### Problemas que Geraram Descontos ⚠️

Os principais problemas foram em relação aos atributos `name` dos inputs nos formulários da `index.html` e `contato.html`. É crucial que cada campo tenha o atributo `name` correto para que os dados sejam enviados corretamente. Quando você implementa o formulário, lembre-se de que cada campo deve ter um `name` que corresponda ao que você espera no `req.body` ou `req.query`.

### Considerações Finais 🌟
Julenmuller, você está no caminho certo! Lembre-se de que cada erro é uma oportunidade para aprender e crescer. Continue praticando e revisando o que você aprendeu. As melhorias que você precisa fazer são bem específicas e com um pouco de atenção, você pode facilmente alcançar uma nota ainda melhor na próxima vez! Estou aqui para ajudar, então não hesite em perguntar se tiver dúvidas. Vamos continuar nessa jornada de aprendizado juntos! 💡🚀