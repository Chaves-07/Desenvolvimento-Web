import chalk from "chalk"
import generateStupidName from "sillyname"

let sillyname = generateStupidName();
let Sillyname = generateStupidName();
let sillyName = generateStupidName();

console.log (chalk.red (sillyname));
console.log (chalk.blue (Sillyname));
console.log (chalk.green (sillyName));