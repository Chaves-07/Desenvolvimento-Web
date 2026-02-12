function validarNome(nome){
    if (nome >= "Ana") {
        console.log("Status: ",nome);
    } else {
        console.log("Status: Acesso restrito");
    }
}

function validarIdade(idade){
    if (idade > 0) {
        console.log("Status: ",idade);
    } else {
        console.log("Status: Acesso restrito");
    }
}

module.exports = {
    validarNome,
    validarIdade
}