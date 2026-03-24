// Título: Calcular Idade e Classificar Faixa Etária
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ano de nascimento: ", (ano) => {
    const idade = new Date().getFullYear() - ano;
    console.log(`Idade: ${idade} anos`);
    rl.close();
});

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 18 && idade < 65) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
   