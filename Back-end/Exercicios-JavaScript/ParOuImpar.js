const entrada = require("readline-sync")

let Numero = entrada.question("DIGITE UM NUMERO: ")

if (Numero % 2 == 0) {
    console.log("Numero par: " + Numero)
} else {
    console.log("Numero negativo: " + Numero)
}