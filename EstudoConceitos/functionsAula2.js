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

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.soma(3,4));

