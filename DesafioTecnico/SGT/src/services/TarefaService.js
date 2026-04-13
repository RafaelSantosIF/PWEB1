const TarefaRepository = require('../repositories/TarefaRepository');

class TarefaService {
    constructor() {
        this.repository = new TarefaRepository();
    }
    
    async listarTodas() {
        return await this.repository.obterTodas();
    }
    
    async obterPorId(id) {
        const tarefa = await this.repository.obterPorId(id);
        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }
        return tarefa;
    }
    
    async criar(title, description) {
        if (!title || !description) {
            throw new Error("Título e descrição são obrigatórios");
        }
        return await this.repository.criar(title, description);
    }
    
    async marcarConcluida(id) {
        const tarefa = await this.obterPorId(id);
        tarefa.marcarConcluida();
        await this.repository.atualizar(tarefa);
    }
    
    async desmarcar(id) {
        const tarefa = await this.obterPorId(id);
        tarefa.desmarcar();
        await this.repository.atualizar(tarefa);
    }
    
    async deletar(id) {
        await this.repository.deletar(id);
    }

    async atualizar(id, title, description) {
        const tarefa = await this.obterPorId(id);
        if (title) tarefa.title = title;
        if (description) tarefa.description = description;
        await this.repository.atualizar(tarefa);
    }
    
    async obterEstatisticas() {
        const tarefas = await this.listarTodas();
        const total = tarefas.length;
        const concluidas = tarefas.filter(t => t.done).length;
        const pendentes = total - concluidas;

        return {
            total,
            concluidas,
            pendentes,
            percentualConcluido: total > 0 ? ((concluidas / total) * 100).toFixed(2) : 0
        };
    }
}

module.exports = TarefaService;
