const http = require('http');

const servidor = http.createServer((req, res) => {

    if(req.method === "GET"){
        res.end("Nome: Elon Muskn\nNome: Chaves\nNome: Douglas pinolas\nNome: Milly lo puuny");
    }

    else if(req.method === "POST"){
        res.end("Usuário criado");
    }

});

servidor.listen(3000);