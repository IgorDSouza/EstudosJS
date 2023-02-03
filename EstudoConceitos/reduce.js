// Somando todos os valores de uma array
let numeros=[1,2,3,4,5,6]
let soma = 0;

for(let i =0 ; i<numeros.length; i++){
    soma= soma+numeros[i];
}

console.log('soma normal = ', soma);

// o mesmo com reduce

// sintaxe " var.reduce(funçãocallback(acumulador(inicia c o valor inicial), valor da array sendo iterada){}, valor inicial(pode ser string " ", obj { }, array[], numero 0)) "

const somaRed = numeros.reduce( function(valorAcumulador,valorArray){
    return valorAcumulador+valorArray;
},0);

console.log('Soma reduce',somaRed);

// mesmo com arrow function

const somaRedArrow= numeros.reduce(
    (valorAcumulador,valorArray)=> valorAcumulador+valorArray,0);
    console.log('soma reduce arrow', somaRedArrow);


    // reduce dividindo maiores e menores de idade

const pessoas = [
    {
        nome:'igor',
        idade:23
    },
    {
        nome:'joao',
        idade:13
    },
    {
        nome:'maria',
        idade:19
    },
    {
        nome:'joana',
        idade:12
    },
    {
        nome:'mario',
        idade:25
    },
    {
        nome:'josefina',
        idade:10
    }
]

const maioresEmenores = pessoas.reduce( function (acummulator, valorArray){
    if(valorArray.idade < 18){
       acummulator.menores.push(valorArray);
    }else{
        acummulator.maiores.push(valorArray);
    } 
    
    return acummulator;

} 
   
     , {maiores:[], menores:[]});

     console.log(maioresEmenores);