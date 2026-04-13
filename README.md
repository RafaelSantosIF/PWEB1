# Programação Web - Listas de Atividades

Este repositório foi criado para armazenar as listas de atividades da disciplina de **Programação Web**, incluindo exercícios prático e projetos.

## Estrutura do repositório

```
PWEB/
├── README.md
├── Lista1/                          # Primeira lista de exercícios
│   ├── L1Q1.js
│   ├── L1Q2.js
│   ├── L1Q3.js
│   ├── L1Q4.js
│   ├── L1Q5.js
│   ├── L1Q6.js
│   ├── L1Q7.js
│   ├── L1Q8.js
│   └── L1Q9.js
└── DesafioTecnico/                 # Projetos práticos
    └── SGT/                        # Sistema de Gerenciamento de Tarefas
        └── src/
            ├── index.js            # Ponto de entrada da aplicação
            ├── app/
            │   └── App.js          # Classe principal da aplicação
            ├── models/
            │   └── Tarefa.js       # Modelo de dados (Tarefa)
            ├── repositories/
            │   └── TarefaRepository.js  # Camada de persistência
            └── services/
                └── TarefaService.js     # Lógica de negócio
```

## Projetos

### 📋 Lista1 - Exercícios Fundamentais
Conjunto de 9 exercícios que cobrem conceitos fundamentais de programação:
- Lógica de programação
- Manipulação de variáveis e tipos de dados
- Estruturas de controle
- Funções

### 🎯 DesafioTecnico - Sistema de Gerenciamento de Tarefas (SGT)
Um projeto prático que implementa um sistema de gerenciamento de tarefas com as seguintes características:

**Arquitetura MVC + Services:**
- **Models**: Definição da estrutura de dados (Tarefa)
- **Views**: Camada de apresentação (se aplicável)
- **Controllers/Services**: Lógica de negócio (TarefaService)
- **Repositories**: Camada de acesso a dados (TarefaRepository)

**Tecnologias utilizadas:**
- Node.js
- Promises para operações assíncronas
- setTimeout para simulação de operações de banco de dados
- async/await para manipulação de código assíncrono
- Padrão de Repository para abstração de dados

**Funcionalidades:**
- CRUD (Create, Read, Update, Delete) de tarefas
- Operações assíncronas simuladas
- Persistência de dados

## Como usar

### Para rodar a Lista1:
```bash
cd Lista1
node L1Q1.js    # Execute o exercício desejado (L1Q1 até L1Q9)
```

### Para rodar o SGT:
```bash
cd DesafioTecnico/SGT
node src/index.js
```

## Objetivo

Centralizar o código das listas e projetos em um único local organizado para facilitar:
- Estudo e revisão de conceitos
- Entrega de atividades
- Prática de padrões de arquitetura e boas práticas

## Padrões Utilizados

- **MVC Pattern**: Separação de responsabilidades
- **Repository Pattern**: Abstração da camada de dados
- **Service Layer**: Encapsulamento de lógica de negócio
- **Asynchronous Operations**: Promises e async/await

---

Feito para apoiar o aprendizado de lógica e técnicas de programação aplicadas ao desenvolvimento web.