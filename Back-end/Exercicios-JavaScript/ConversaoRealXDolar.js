const entrada = require("readline-sync")

let ValorReais = entrada.question("Digite valor que deseja visualizar a conversao: ")
let Dolar = 5.15

console.log("Valor (REAL): "  + ValorReais * Dolar)
console.log("Valor (DOLAR): " + ValorReais / Dolar)