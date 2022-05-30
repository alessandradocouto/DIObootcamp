
// Questao 2 - Soma de números naturais
// A soma dos números naturais no intervalo [2, 5] é 14 = (2+3+4+5).


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const A = parseInt(gets());
const B = parseInt(gets());
const total =     soma() + B       ;
print(total);

//Escreva o seu código no espaço em branco

function soma () {
  let total = 0;
  for(i = A; i < B; i++){
    total += i;
  }
  return total;
}