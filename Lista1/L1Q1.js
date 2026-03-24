// Título: Calcular Média Ponderada
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Primeira Nota: ", (n1) => {
    rl.question("Segunda Nota: ", (n2) => {
        let media = ((n1 * 2) + (n2 * 3)) / 5;

        if (media >= 7) {
            console.log("Aprovado! Média: " + media);
        } else if (media < 3) {
            console.log("Reprovado! Média: " + media);
        } else {
            console.log("Avaliação Final! Média: " + media);
            console.log("Nota necessária para aprovação: " + (10 - media));
        }
        rl.close();
    });
});