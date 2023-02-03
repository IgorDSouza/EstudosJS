// importando as funcoes do arquivo 'funcoes-auxiliares'
const funcoes = require('./funcoes-auxiliares');

const {gets} = funcoes; //definindo uma variavel c o valor funcoes.gets()

const {print} = funcoes;//definindo uma variavel c o valor funcoes.print()

// ou  const {gets,print} = require('./funcoes-auxiliares'); ja define as variaveis automaticamente

print('ola');

print(gets());