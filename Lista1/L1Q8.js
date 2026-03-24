// Título: Converter Reais para Dólar e Euro
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("R$: ", (num) => {
    const conversor = {
        dolar: num * 5,
        euro: num * 5.5
    }
    console.log(conversor);    
    rl.close();
});