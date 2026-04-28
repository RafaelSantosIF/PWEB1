// Você deve criar um pequeno script que receba as notas e informe a situação do estudante.

const salvarNoSistema = async () => new Promise(res => setTimeout(() => {
    console.log("Notas Salvas!");
    res();
}, 2000));

const calcularResultado = async (n1, n2) => {
    let media = (n1 * 2 + n2 * 3) / 5;
    await salvarNoSistema();

    if (media >= 7) {
        console.log(`Aprovado com média ${media.toFixed(2)}`);
    } else if (media >= 3 && media < 7) {
        console.log(`Prova Final com média ${media.toFixed(2)}`);
    } else {
        console.log(`Reprovado com média ${media.toFixed(2)}`);
    }
};

await calcularResultado(6, 8); // Exemplo: média 7.20, aprovado
await calcularResultado(5, 5); // Exemplo: média 5.00, prova final
await calcularResultado(2, 3); // Exemplo: média 2.80, reprovado