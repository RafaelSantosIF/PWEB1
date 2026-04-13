class Tarefa {
    constructor(id, title, description, done = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
    }
    
    marcarConcluida() {
        this.done = true;
    }
    
    desmarcar() {
        this.done = false;
    }
    
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            done: this.done
        };
    }
}

module.exports = Tarefa;
