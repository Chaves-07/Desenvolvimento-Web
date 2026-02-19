import chalk from "chalk"
import generateStupidName from "sillyname"

let sillyname = generateStupidName();
let Sillyname = generateStupidName();
let sillyName = generateStupidName();

console.log (chalk.red (sillyname));
console.log (chalk.red ("Personagem Criado Com Sucesso\n"));

console.log (chalk.blue (Sillyname));
console.log (chalk.blue ("Personagem Criado Com Sucesson\n"));

console.log (chalk.green (sillyName));
console.log (chalk.green ("Personagem Criado Com Sucesso"));