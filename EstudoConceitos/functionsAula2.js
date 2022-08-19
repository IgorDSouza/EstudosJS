//----Escopo Dinamico-----------

// usando 'this' pra criar um objeto que representa uma funcao

function Usuario(){
    this.nome='igor';
    this.idade= 23;
    this.soma = function (a,b){
        return a+b;
    }
}
var usuario = new Usuario(); // usamos o operador new para criar o objeto com as propriedades passadas pelo this

// console.log(usuario.nome);
// console.log(usuario.idade);
// console.log(usuario.soma(3,4));

// -------- metodo call usado para alterar o valor de this direto na chamada da funcao atraves dos parametros------

function Personagem(p1,p2,p3){
    console.log(this);
    console.log(p1,p2,p3);
}
var personagemThis = {
    nome:'igor'
}
// Personagem.call(personagemThis,'igor',123,6)// 1 parametro aponta o this, do segundo para frente são parametros 

// ----- metodo apply parecido com o call, só muda o estilo de passar os parametros-----------

// Personagem.apply(personagemThis,['igor',123,7]);

//--------- metodo bind parecido com o call tbm, a diferença é que ele define os parametros da funcao mas não invoca a funcao imediatamente, apenas define os valores-----------------------

var pers = Personagem.bind(personagemThis, 'igor',123,9)

//pers()

//--------Arrow Functions -------------
var soma = (a,b) => {
    return a+b;
}
console.log(soma(10,10));
 // forma mais curta quando a funcao apenas tem um retorno, sem muitas logicas internas

 var soma2 = (a,b) => a+b;

 console.log(soma(10,10));

 // tambem pode ser colocado em parenteses em casos de obj por exemplo
 // Podemos usar parametros tambem na arrowfunction

 var retornaUsuario = (cidade) => ({nome:'igor', idade:23 , cidade })

 console.log(retornaUsuario('sumare'));


// ------ This não pode ser alterado pelas arrowfunctions ---


