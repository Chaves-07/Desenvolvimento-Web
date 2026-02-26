const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/sobre', (req, res) => {
    res.send("Sistema: Express\nAutor: Chaves");
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});