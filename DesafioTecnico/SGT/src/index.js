//Sistema de Gerenciamento de Tarefas no terminal, utilizando JavaScript.
//Simula operações de banco utilizando Promise e setTimeout

const App = require('./app/App');


const app = new App();
app.iniciar().catch(erro => {
    console.error("Erro ao iniciar a aplicação:", erro);
    process.exit(1);
});
