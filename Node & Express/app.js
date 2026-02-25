const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.listen(3000);