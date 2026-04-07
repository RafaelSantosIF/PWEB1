//Sistema de Gerenciamento de Tarefas no terminal, utilizando JavaScript.
//Simula  operações de banco utilizando Promise e setTimeout

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

function logInterface(message) {
    console.log("\x1b[36m%s\x1b[0m", message);
}


const task = {
    id: 0,
    title: "",
    description: "",
    done: false
}

let taskList = [];

let dataBase = [
    {id: 1, title: "Beber água", 
    description: "Beba 2 litros de água por dia para manter-se hidratado.", 
    done: false},
    {id: 2, title: "Academia", 
    description: "Vá para a academia hoje. Treino: Costas e Bíceps.", 
    done: false},
];

function saveTasks(tasks) {
    return new Promise((resolve) => {
        setTimeout(() => {
            dataBase = [...tasks];
            console.log("Tarefas salvas com sucesso!");
            resolve();
        }, 500);
    });
}

function loadTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarefas carregadas com sucesso!");
            resolve([...dataBase]);
        }, 500);
    });
}

async function addTask() {
    const title = await questionAsync("Título da tarefa: ");
    const description = await questionAsync("Descrição da tarefa: ");
    const id = taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1;
    const newTask = {
        id,
        title,
        description,
        done: false
    };
    taskList.push(newTask);

    await saveTasks(taskList); 
    console.log(`Tarefa "${newTask.title}" adicionada com sucesso!`);
    await showMenu(); 
}

async function listTasks() {
    taskList = await loadTasks();  
    if (taskList.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        await showMenu();
        return;
    }

    console.log("\nLista de Tarefas:");
    taskList.forEach(task => {
        console.log(`ID: ${task.id} | Título: ${task.title} | Concluída: ${task.done ? "Sim" : "Não"}`);
    });

    const id = await questionAsync("\nDigite o ID da tarefa para ver detalhes ou '0' para voltar ao menu: ");
    const taskId = parseInt(id);
    if (taskId === 0) {
        await showMenu();
        return;
    }
    const selectedTask = taskList.find(task => task.id === taskId);
    if (!selectedTask) {
        console.log("Tarefa não encontrada.");
        await showMenu();
        return;
    }
    console.log(`\nDetalhes: Título: ${selectedTask.title} \nDescrição: ${selectedTask.description} \nConcluída: ${selectedTask.done ? "Sim" : "Não"}`);
        
    if (!selectedTask.done) {
        const answer = await questionAsync("1. Marcar como concluída | 2. Deletar | 3. Voltar: ");
        if (answer === '1') {
            selectedTask.done = true;
            await saveTasks(taskList);
            console.log(`Tarefa "${selectedTask.title}" marcada como concluída.`);
            await listTasks(); 
        } else if (answer === '2') {
            taskList = taskList.filter(task => task.id !== selectedTask.id);
            await saveTasks(taskList);
            console.log(`Tarefa "${selectedTask.title}" deletada.`);
            await listTasks(); 
        } else {
            await showMenu();
        }
    } else {
        const answer = await questionAsync("1. Desmarcar | 2. Deletar | 3. Voltar: ");
        if (answer === '1') {
            selectedTask.done = false;
            await saveTasks(taskList);
            console.log(`Tarefa "${selectedTask.title}" desmarcada.`);
            await listTasks();
        } else if (answer === '2') {
            taskList = taskList.filter(task => task.id !== selectedTask.id);
            await saveTasks(taskList);
            console.log(`Tarefa "${selectedTask.title}" deletada.`);
            await listTasks();
        } else {
            await showMenu();
        }
    }
}

async function showMenu() {
    console.log("\nMenu: 1. Adicionar | 2. Listar | 3. Sair");
    const option = await questionAsync("Escolha: ");
    switch (option) {
        case '1': await addTask(); break;
        case '2': await listTasks(); break;
        case '3': rl.close(); break;
        default: console.log("Opção inválida."); await showMenu();
    }
} 

// Inicialização
(async () => {
    taskList = await loadTasks(); 
    await showMenu();
})();