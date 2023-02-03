var usuarios =[
    {nome:'igor',
    idade:22
},
{
    nome:'joao',
    idade:23
},
{
    nome:'maria',
    idade:25
}
];
var usuario = {
    posicao:0,
    get atual(){ //para usar uma função como uma simples propriedade, usamos o 'get' sem ter a necessidade de passar os parametros apenas retorna o resultado

        return usuarios[this.posicao]
    },
    set atual(posicao){// quando tentar atribuir valor na chamada da funcao, usará o 'set', se for sem parametros usará o 'get', assim sendo possivel usar 2 funcoes diferentes com o mesmo nome
        this.posicao = posicao;
    },
    proximo(){
        ++this.posicao;
    },
    anterior(){
        --this.posicao;
    }
}
console.log(usuario.atual);
usuario.proximo();

console.log(usuario.atual);
usuario.proximo();

console.log(usuario.atual);
usuario.anterior();

console.log(usuario.atual);

usuario.atual= 0 ;
console.log(usuario.atual);
