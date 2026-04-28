// Determine a ordem das mensagens no console, considerando os tempos de espera

const msg = (texto, tempo) => new Promise(res => setTimeout(() => {
    console.log(texto);
    res();
}, tempo));

const fluxo = async () => {
    msg("Tarefa 1", 2000);
    await msg("Tarefa 2", 1000);
    console.log("Fim");
};

fluxo(); 
