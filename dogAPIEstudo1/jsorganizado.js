//Maneira correta e mais legível de construir arquivos js, criar constantes que recebam funções responsáveis por apenas uma coisa e depois organiza-las nos .thens e .catchs;


const url = 'https://dog.ceo/api/breeds/image/random';
const dogImg = document.querySelector('[data-js="imgDog"]')

const validateHTTPstatus= dogData => {

    if(!dogData.ok){
        throw new Error(`http error, status ${dogData.status}`)
    }
    return dogData.json() 
}

const setDogImg = ({message}) => { 
    dogImg.setAttribute('src', message)
}

const errorRequest =error => {
    console.log(error.message)}

    
fetch(url)
    .then(validateHTTPstatus)
    .then(setDogImg)
    .catch(errorRequest)


