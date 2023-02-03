const {gets,print} = require('./funcoes-auxiliares');

let maiorValor = 0;

let cont = gets();

for(let i = 0; i<cont ; i++){
    const numeroSorteado= gets();

    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);


