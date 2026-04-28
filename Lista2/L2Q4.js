// Contexto: Você deve criar um resolvedor de equações de segundo grau que só processa se os dados forem válidos.

const calculardelta = (a, b, c) => b ** 2 - 4 * a * c;

const resolverBhaskara = async (a, b, c) => {
    
    if (a === 0) {
        console.log("Coeficiente 'a' não pode ser zero em uma equação de segundo grau.");
        return;
    }

    const delta = await calculardelta(a, b, c);
    
    if (delta < 0) {
        console.log("Sem raízes reais.");
    } else {
        const raiz = Math.sqrt(delta);
        const x1 = (-b + raiz) / (2 * a);
        const x2 = (-b - raiz) / (2 * a);
        console.log(`Raízes: ${x1}, ${x2}`);
    }
};

resolverBhaskara(1, -3, 2); // Exemplo: x^2 - 3x + 2 = 0, raízes são 1 e 2