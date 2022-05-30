// Questao 5 - Contagem de partidas no torneio

var numberOfMatches = 0;
let n = 7;
let totalMatches = 0;
while(n>1){
    if(     n % 2 === 1         ){
        numberOfMatches = (n - 1) / 2;
        n = numberOfMatches + 1;
    }else{
        numberOfMatches = n / 2;
        n = numberOfMatches;
    }
    totalMatches += numberOfMatches;
}

console.log(totalMatches);