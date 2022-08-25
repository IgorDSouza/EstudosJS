// Somando todos os valores de uma array
let numeros=[1,2,3,4,5,6]
let soma = 0;

for(let i =0 ; i<numeros.length; i++){
    soma= soma+numeros[i];
}

console.log('soma normal = ', soma);

// o mesmo com reduce "var.reduce(função(){}, valor inicial) "

const somaRed = numeros.reduce( function(valorAcumulador,valorArray){
    return valorAcumulador+valorArray;
},0)

console.log('Soma reduce',somaRed);