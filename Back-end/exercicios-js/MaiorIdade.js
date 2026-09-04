const entrada = require("readline-sync")

console.log("APRENDENDO JAVASCRIPT")
let Idade = entrada.question("------: Digite sua idade ------: ")
let Emancipado = entrada.question("------ Voce é Emancipado: (S/N) ")

if (Idade >= 18) {
    console.log("MAIOR DE IDADE")
} else if (Idade < 18 && (Emancipado.includes("N") || Emancipado.includes("n"))) {
    console.log("MENOR DE IDADE")
} else if (Idade < 18 && (Emancipado.includes("S") || Emancipado.includes("s"))) {
    console.log("EMANCIPADO")
} else {
    console.log("IDADE NÃO CORRESPONDENTE AOS HUMANOS")
}