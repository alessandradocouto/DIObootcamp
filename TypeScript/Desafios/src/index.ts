// // Como podemos melhorar o esse código usando TS? 

// Desafio 1

interface EmployeeI {
    code: number,
    name: string
};

let employee: EmployeeI  = {
    code: 10,
    name: 'John'
};

// console.log( employee.code, employee.name );


// Desafio 2

enum Trabalho {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Trabalho
};

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
};


let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}


// Desafio 3
// O código abaixo tem alguns erros e não funciona como deveria. 
// Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let total = 0;


function somarAoSaldo(soma: number) {
    if(campoSaldo){
        total += soma;
        campoSaldo.innerHTML = total.toString();
        limparSoma();
    } 
}

function limparSoma() {
    soma.value = '';
}


function limparSaldo() {
    if(campoSaldo) {
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(parseFloat(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */