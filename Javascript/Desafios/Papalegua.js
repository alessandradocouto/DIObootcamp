// Questao 3 - Papalegua
// você deve imprimir um número real contendo o tempo da tentativa mais rápida de cada treino.


/*
2           9.71
9.81       
9.71
3           9.72
9.82
9.72
9.92

*/


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets()

let qtdEntradas = parseInt(input)
let melhor = 999

for(let i = 0; i < qtdEntradas; i++){
    
    input = gets()
    let tempo = parseFloat(input)
    if (  tempo < melhor   ) melhor = tempo
        	
}
console.log(melhor);