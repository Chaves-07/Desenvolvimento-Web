const express = require("express");
const app = express();

app.use(express.json());

const usuarios = [];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {

    if (!req.body.nome || !req.body.idade) {
        return res.status(400).json({ erro: "Nome e idade são obrigatórios" });
    }

    const usuario = req.body;

    usuarios.push(usuario);

    res.status(201).json(usuario);

});

app.listen(3000, () => {
    console.log("Servidor Rodando");
});