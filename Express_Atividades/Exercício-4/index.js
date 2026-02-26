const express = require('express');
const app = express();
const produtos = [
    {id: 1, nome: "Leite", preco: 24},
    {id: 2, nome: "Queijo", preco: 30},
    {id: 3, nome: "Presunto", preco: 10},
];

app.use(express.json());

app.get('/', (req, res) => {
  res.json("Api funcionando");
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produtos){
    return res.status(404).send("Produto não encontrado");
}
  
    res.json(produto);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});