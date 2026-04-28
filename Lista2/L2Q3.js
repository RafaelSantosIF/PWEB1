// Contexto: Um sistema de monitoramento de servidor precisa verificar a carga da CPU

const obterCargaCPU = () => {
    return new Promise((res) => {
        setTimeout(() => {
            const carga = Math.floor(Math.random() * 101);
            res(carga);
        }, 1000);
    });
};

const analisarCPU = async () => {
    console.log("Obtendo carga da CPU...");
    const carga = await obterCargaCPU();
    
    if (carga > 80) {
        console.log(`Alerta: Carga da CPU alta (${carga}%)`);
    } else {
        console.log(`Sistema Estável: ${carga}%`);
    }
};

analisarCPU();