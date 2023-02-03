// usando closures para criar funcoes privadas
function minhaBiblioteca(){
    function auxiliar(valor){
        return 10+valor
    }

    return {
        add5(){
            return auxiliar(5)
        },
        add7(){
            return auxiliar(7)
        }
    }
}
 var biblioteca = minhaBiblioteca();
 console.log(biblioteca)
 console.log(biblioteca.add5())
 console.log(biblioteca.add7())

 // as funcoes add memorizam a funçao auxiliar, mesmo estando em outro escopo podendo ser chamadas em qualquer outro escopo

 