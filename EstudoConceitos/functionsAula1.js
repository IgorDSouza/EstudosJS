function somatudo(numeros){
   var result = 0
   var n = numeros.length;

    for(let i=0; i < n; i++){
        result = result + numeros[i]  
    }
    return result;
}
var arrayNumeros=[3,5,7,10,9,12];
var resultado = somatudo(arrayNumeros);
console.log(resultado);


// -----------For of-------------------
function somatudo(numeros){
    var result = 0 
     for(var num of numeros){
         result = result + num ;
     }
     return result;
 }
 var arrayNumeros=[3,5,7,10,9,12];
 var resultado = somatudo(arrayNumeros);
 console.log(resultado);

 // --------função anonima -------------------

 var funcao = function anonimaFunc(a,b){
    return a + b;
 } // padrão de var recebe função como valor
  funcao(1+2);

  var funcao = function (a,b){
    return a + b;
 } // funciona da mesma forma , função interna fica sem nome pois seu nome não é utilizado


 //------funcao callback-----------------

 function somaCallback(a ,b , fncallback){
    return fncallback(a + b);
 }

 console.log(somaCallback(10,3, 
    function(total){
    return total*2;
    } ) );

// ou 

var multiplica = function (total){
    return total*2;
}

console.log(somaCallback(10 , 3 ,multiplica));

//---------- valores default na func----------

function escreveNome( nome ='igor' , idade='26') // se nao for passado nenhum parametro para a função, esses valores serão mostrados
{
    console.log(nome);
    console.log(idade);
}
escreveNome();
