const url = 'https://dog.ceo/api/breeds/image/random';
const dogImg = document.querySelector('[data-js="imgDog"]')

console.log(dogImg)

fetch(url)// faz requisiçao http da url passada gerando uma promisse
.then( dogData => { // se a requisição acontecer, o if abaixo verifica se os dados estão certos, se sim nada acontece, se não, uma msg de erro é criada e enviada ao console

    if(!dogData.ok){
        throw new Error(`http error, status ${dogData.status}`)
    }
    //console.log(dogData) // se tudo ocorrer bem, será retornado um obj response no console* apenas para teste,desnecessario para funcionamento

    return dogData.json() // transforma os dados recebidos para json gerando outra promisse
})
.then(({message}) => { // .then recebe a propriedade message da API que nesse caso retornara uma url de uma img

    //console.log(message)// mostra a url da imagem no console* apenas para teste,desnecessario para funcionamento
    
    dogImg.setAttribute('src', message)
})

.catch(error => {
    console.log(error.message)
})




