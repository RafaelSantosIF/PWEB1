// Título: Contar Caracteres e Vogais em uma Frase
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVogals(str) {
    const vogals = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vogals.includes(char)) {
            count++;
        }
    }
    return count;
}

rl.question("Digite uma frase: ", (word) => {
    console.log(`Número de Caracteres: ${word.length}`);
    vogalCount = countVogals(word);
    console.log(`Número de vogais: ${vogalCount}`);
    rl.close();
});