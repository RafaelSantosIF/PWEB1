// Título: Demonstrar Escopo de Variáveis (var vs let)

// Explique qual será a saída do console e por quê:

let bonus = 50;
function calcularSalario(base) {
    if (base > 2000) {
        var bonus = 100;
        let gratificacao = 200;
    }
    console.log(bonus);
    console.log(gratificacao);
}
calcularSalario(2500);

// A saída do console será:
// 100
// ReferenceError: gratificacao is not defined

// Explicação:
// O uso do'let' em gratificação limita seu escopo ao bloco onde foi declarado, ou seja, dentro do 'if'.
// Por isso retorna um erro de referência, pois o console.log(gratificacao) não está no mesmo escopo onde a variável foi declarada.
// Já o uso do 'var' em bonus faz com que ele seja hoisted (elevado) para o topo da função, o que significa que ele é declarado e inicializado com 'undefined' no início da função. 
// Quando o código dentro do 'if' é executado, a variável 'bonus' é reatribuída para 100, e é isso que é impresso no console.