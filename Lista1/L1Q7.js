// Título: Gerar Tabuada de um Número
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Tabuada do: ", (num) => {    
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    rl.close();
});