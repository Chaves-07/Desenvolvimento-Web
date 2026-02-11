function somar(a,b){
    return a + b;
}

function subtrair(a,b){
    return a - b;
}

module.exports = {
    somar,
    subtrair
}

const somar = require("./calculadora");

console.log(calc.somar(5,2));
console.log(calc.subtrair(5,2));