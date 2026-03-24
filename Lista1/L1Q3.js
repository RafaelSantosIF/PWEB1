// Título: Gerenciar Carrinho de Produtos (Adicionar/Remover/Filtrar)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let carrinho = [];

function adicionarProduto() {
    rl.question("Nome do produto: ", (nome) => {
        carrinho.push(nome);
        console.log(`Produto "${nome}" adicionado ao carrinho.`);
    });
}

function removerUltimo(){
    if (carrinho.length > 0) {
        const produtoRemovido = carrinho.pop();
        console.log(`Produto "${produtoRemovido}" removido do carrinho.`);
    } else {
        console.log("O carrinho está vazio. Não há produtos para remover.");
    }
}

function filtrarProduto() {
    rl.question("Digite o nome do produto para filtrar: ", (filtro) => {
        const produtosFiltrados = carrinho.filter(produto => produto.toLowerCase().includes(filtro.toLowerCase()));
        if (produtosFiltrados.length > 0) {
            console.log("Produtos encontrados:");
            produtosFiltrados.forEach(produto => console.log(`- ${produto}`));
        } else {
            console.log("Nenhum produto encontrado com esse filtro.");
        }
    });
}
