// Título: Aplicar Desconto Progressivo em Produto
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Valor do Produto: ", (num) => {
    let desconto;
    console.log(`Valor original: R$${num}`);
    if (num <= 150) {
        desconto = num * 0.05;
        console.log(`Desconto de 5%: R$${desconto.toFixed(2)}`);
        console.log(`Valor final: R$${(num - desconto).toFixed(2)}`);
    } else if (num > 150 && num <= 400) {
        desconto = num * 0.1;
        console.log(`Desconto de 10%: R$${desconto.toFixed(2)}`);
        console.log(`Valor final: R$${(num - desconto).toFixed(2)}`);
    } else {
        desconto = num * 0.15;
        console.log(`Desconto de 15%: R$${desconto.toFixed(2)}`);
        console.log(`Valor final: R$${(num - desconto).toFixed(2)}`);
    }
    rl.close();
});
