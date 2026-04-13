const readline = require('readline');
const TarefaService = require('../services/TarefaService');

class App {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.tarefaService = new TarefaService();
    }
    
    question(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }
    
    logInterface(message) {
        console.log("\x1b[36m%s\x1b[0m", message);
    }
    
    logSucesso(message) {
        console.log("\x1b[32m%s\x1b[0m", message);
    }
    
    logErro(message) {
        console.log("\x1b[31m%s\x1b[0m", message);
    }
    
    async mostrarMenu() {
        console.log("\n=== SISTEMA DE GERENCIAMENTO DE TAREFAS ===");
        this.logInterface("1. Adicionar | 2. Listar | 3. Sair");
        const opcao = await this.question("Escolha: ");
        
        switch (opcao) {
            case '1':
                await this.adicionarTarefa();
                break;
            case '2':
                await this.listarTarefas();
                break;
            case '3':
                this.logInterface("Até logo!");
                this.rl.close();
                break;
            default:
                this.logErro("Opção inválida.");
                await this.mostrarMenu();
        }
    }
    
    async adicionarTarefa() {
        const title = await this.question("Título da tarefa: ");
        const description = await this.question("Descrição da tarefa: ");

        try {
            const tarefa = await this.tarefaService.criar(title, description);
            this.logSucesso(`Tarefa "${tarefa.title}" adicionada com sucesso!`);
        } catch (erro) {
            this.logErro(`Erro: ${erro.message}`);
        }

        await this.mostrarMenu();
    }

    async editarTarefa(id) {
        try {
            const tarefa = await this.tarefaService.obterPorId(id);
            const title = await this.question(`Novo título (atual: ${tarefa.title}): `);
            const description = await this.question(`Nova descrição (atual: ${tarefa.description}): `);
            await this.tarefaService.atualizar(id, title, description);
            this.logSucesso(`Tarefa "${tarefa.title}" atualizada com sucesso!`);
        } catch (erro) {
            this.logErro(`Erro: ${erro.message}`);
        }

        await this.mostrarMenu();
    }

    async listarTarefas() {
        try {
            const tarefas = await this.tarefaService.listarTodas();

            if (tarefas.length === 0) {
                console.log("Nenhuma tarefa cadastrada.");
                await this.mostrarMenu();
                return;
            }

            console.log("\n=== LISTA DE TAREFAS ===");
            tarefas.forEach(tarefa => {
                const status = tarefa.done ? "✓ Concluída" : "✗ Pendente";
                console.log(`ID: ${tarefa.id} | Título: ${tarefa.title} | Status: ${status}`);
            });

            const id = await this.question("\nDigite o ID da tarefa para ver detalhes ou '0' para voltar: ");
            const tarefaId = parseInt(id);

            if (tarefaId === 0) {
                await this.mostrarMenu();
                return;
            }

            await this.exibirDetalhes(tarefaId);
        } catch (erro) {
            this.logErro(`Erro: ${erro.message}`);
            await this.mostrarMenu();
        }
    }
    
    async exibirDetalhes(tarefaId) {
        try {
            const tarefa = await this.tarefaService.obterPorId(tarefaId);

            console.log(`\n=== DETALHES DA TAREFA ===`);
            console.log(`Título: ${tarefa.title}`);
            console.log(`Descrição: ${tarefa.description}`);
            console.log(`Status: ${tarefa.done ? "Concluída" : "Pendente"}`);

            if (!tarefa.done) {
                const opcao = await this.question("\n1. Marcar como concluída | 2. Deletar | 3. Editar | 4. Voltar: ");
                if (opcao === '1') {
                    await this.tarefaService.marcarConcluida(tarefa.id);
                    this.logSucesso(`Tarefa "${tarefa.title}" marcada como concluída.`);
                    await this.listarTarefas();
                } else if (opcao === '2') {
                    await this.tarefaService.deletar(tarefa.id);
                    this.logSucesso(`Tarefa "${tarefa.title}" deletada.`);
                    await this.listarTarefas();
                } else if (opcao === '3') {
                    await this.editarTarefa(tarefa.id);
                } else {
                    await this.mostrarMenu();
                }
            } else {
                const opcao = await this.question("\n1. Desmarcar | 2. Deletar | 3. Editar | 4. Voltar: ");
                if (opcao === '1') {
                    await this.tarefaService.desmarcar(tarefa.id);
                    this.logSucesso(`Tarefa "${tarefa.title}" desmarcada.`);
                    await this.listarTarefas();
                } else if (opcao === '2') {
                    await this.tarefaService.deletar(tarefa.id);
                    this.logSucesso(`Tarefa "${tarefa.title}" deletada.`);
                    await this.listarTarefas();
                } else if (opcao === '3') {
                    await this.editarTarefa(tarefa.id);
                } else {
                    await this.mostrarMenu();
                }
            }
        } catch (erro) {
            this.logErro(`Erro: ${erro.message}`);
            await this.mostrarMenu();
        }
    }
    
    async iniciar() {
        console.log("Carregando aplicação...\n");
        await this.mostrarMenu();
    }
}

module.exports = App;
