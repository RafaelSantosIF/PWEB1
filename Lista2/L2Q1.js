// Analise o fluxo de execução abaixo e escreva a saída exata do console:

const calcular = (x) => x * 2;

const iniciar = async () => {
    console.log("Passo A");
    const resultado = await Promise.resolve(calcular(10));
    console.log("Resultado: " + resultado);
    console.log("Passo B");
};

iniciar();
