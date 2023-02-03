var novoUsuario = {
    nome:'igor',
    idade : 23,
    pais:'brasil'
};
//------------ atribuição padrão de dados de um objeto-----------------------

var nome = novoUsuario.nome;
var idade = novoUsuario.idade;

//console.log(nome);
//console.log(idade);

//------------ maneira mais rapida e simples de fazer o mesmo, digite os nomes das propriedades de um objeto entre as as chaves que serão criadas automaticamente as variaveis extraindo os dados do obj-----------

var {idade,nome,pais}=novoUsuario;
//console.log(nome);
//console.log(idade);
//console.log(pais);

// ----------para armazenar o valor em uma variavel c outro nome------------------

var {nome:primeiroNome}=novoUsuario;
//console.log(primeiroNome)

// ----fazendo o mesmo com objs aninhados---------

var novoUsuario2 = {
    nome:{
        primeiro:'jose',
        ultimo:'rodrigues'
    }
};
// -------jeito padrão---------------

//  var primeiro = novoUsuario2.nome.primeiro
//  console.log(primeiro);

 //------- pratico----------------

//  var{nome:{primeiro}} = novoUsuario2;
//  console.log(primeiro)

 // ------definindo valores default caso não seja passado--------------------------- 

// var {nome:{segundo = 'souza'}} = novoUsuario2;
// console.log(segundo);
// console.log(novoUsuario2.nome);

//------- Usando o destruct como parametro de funcao --------

// function imprimeUsuario(usuario){
//     console.log(usuario.nome);
//     console.log(usuario.idade);
//     console.log(usuario.sexo);
// }

var usuarioImpresso= {
    nome:'mario',
    idade:45,
    sexo:'masc'
}

// imprimeUsuario(usuarioImpresso);

// -------------imprimindo as chaves e os valores de um obj-----------

// console.log(Object.keys(usuarioImpresso));
// console.log(Object.values(usuarioImpresso));

// -------iterar elementos do objeto-----

var props = Object.keys(usuarioImpresso);
console.log(props); // retorna um array

for(var i=0; i < props.length ; i++){
console.log(props[i]+ '='); // retorna os elementos
console.log(usuarioImpresso[props[i]]) // retorna o conteudo dos elementos;
}


// fazendo o mesmo com for of e for in

for( var prop of props){
    console.log('usuarioFunction2', usuarioImpresso[prop]);
}

for(var prop2 in usuarioImpresso){
    console.log(prop2 + ':', usuarioImpresso[prop2]);
}

//----------metodo hasOwnProperty para usar propriedades definidas diretamente no objeto, eliminando as vindas como herança de terceiros-------

for(var prop2 in usuarioImpresso){
    if(usuarioImpresso.hasOwnProperty(prop2)){
        console.log(prop2 + ':', usuarioImpresso[prop2]);
    };
    
};