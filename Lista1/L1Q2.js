// Título: Converter Temperatura entre Celsius e Fahrenheit
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Temperatura: ", (temp) => {
    rl.question("Unidade (C/F): ", (unit) => {
        let convertedTemp;

        if (unit.toUpperCase() === 'F') {
            convertedTemp = (temp * 1.8) + 32;
            console.log(`${temp}°C é igual a ${convertedTemp}°F`);
        } else if (unit.toUpperCase() === 'C') {
            convertedTemp = (temp - 32) / 1.8;
            console.log(`${temp}°F é igual a ${convertedTemp}°C`);
        } else {
            console.log("Unidade inválida! Use 'C' para Celsius ou 'F' para Fahrenheit.");
        }
        rl.close();
    });
});