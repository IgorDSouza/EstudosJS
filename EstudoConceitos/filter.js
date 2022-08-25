
// Filtrando os multiplos de dois 
let numeros=[1,2,4,6,8,12]
let mult2=[];
 for(let i=0; i<numeros.length ; i++){
    if(numeros[i] % 2 ===0){
        mult2.push (numeros[i]);
    }
 }
 console.log(mult2);

 //------Fazendo o mesmo com filter -----
 const numFiltrado= numeros.filter(function (numero){
    return numero % 2 === 0;
 });

 console.log('Pares com filter',numFiltrado);

 // ----- Fazendo com arrow function ---- 
 const numFiltradoArrow = numeros.filter (numero => numero % 2 ==0);

 console.log('Pares com filter + arrow',numFiltradoArrow);

 // ----- Usando map e filter ----

 const paresMult2 = numFiltradoArrow.map(numero => numero * 2 );
 
 console.log('Multiplos de 2 dos pares',paresMult2);