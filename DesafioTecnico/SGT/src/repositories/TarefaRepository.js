const Tarefa = require('../models/Tarefa');

class TarefaRepository {
    constructor() {
        this.dataBase = [
            new Tarefa(1, "Beber água", "Beba 2 litros de água por dia para manter-se hidratado.", false),
            new Tarefa(2, "Academia", "Vá para a academia hoje. Treino: Costas e Bíceps.", false),
        ];
    }
   
    salvar(tarefas) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.dataBase = tarefas.map(t => 
                    t instanceof Tarefa ? t : new Tarefa(t.id, t.title, t.description, t.done)
                );
                console.log("Tarefas salvas com sucesso!");
                resolve();
            }, 500);
        });
    }
    
    carregar() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Tarefas carregadas com sucesso!");
                resolve([...this.dataBase]);
            }, 500);
        });
    }
    
    async obterTodas() {
        return await this.carregar();
    }
    
    async obterPorId(id) {
        const tarefas = await this.carregar();
        return tarefas.find(t => t.id === id);
    }
    
    async criar(title, description) {
        const tarefas = await this.carregar();
        const id = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;
        const novaTarefa = new Tarefa(id, title, description, false);
        tarefas.push(novaTarefa);
        await this.salvar(tarefas);
        return novaTarefa;
    }
    
    async atualizar(tarefa) {
        const tarefas = await this.carregar();
        const index = tarefas.findIndex(t => t.id === tarefa.id);
        if (index === -1) {
            throw new Error("Tarefa não encontrada");
        }
        tarefas[index] = tarefa;
        await this.salvar(tarefas);
    }
    
    async deletar(id) {
        const tarefas = await this.carregar();
        const tarefasFiltradas = tarefas.filter(t => t.id !== id);
        if (tarefasFiltradas.length === tarefas.length) {
            throw new Error("Tarefa não encontrada");
        }
        await this.salvar(tarefasFiltradas);
    }
}

module.exports = TarefaRepository;
