const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const produtos = [
    {id: 1, nome: "Notebook", preco: 320},
    {id: 2, nome: "Mouse", preco: 60},
    {id: 3, nome: "Monitor", preco: 89}
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 