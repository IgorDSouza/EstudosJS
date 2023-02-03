const numeros = [2,3,6,5,10];
var novoArrayNumeros=[];

for(let i=0; i < numeros.length; i++){
    novoArrayNumeros.push(numeros[i]*2);
}

console.log(novoArrayNumeros);

 //-------- fazendo o mesmo com map()------

const novoArrayMap = numeros.map(function(numero){
    return numero * 2;
})
console.log('Array com map', novoArrayMap);
 
// ------ o mesmo com a arrow function-------

const arrayMapArrow = numeros.map(numero => numero*2);
console.log('Array com map arrow function',arrayMapArrow);
