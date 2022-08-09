
const pickPokemon= () =>{
    const id = document.querySelector('[name="fname"').value

     fetchPokemon(id)


}
    

const fetchPokemon= (id) => {

    const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}` // const recebe id como parametro
    
    const pokemonPromises=[]
    
    
      
        pokemonPromises.push(fetch(getUrl(id)) .then( response =>{

            if(!response.ok){
            throw new Error(`http error, status parametro invalido`)
        }
        return  response.json()
    }))
    
        Promise.all(pokemonPromises) //recebe o array de promisse e quando todas elas forem recebidas, retornara uma promise podendo usar o then    
        .then( pokemons =>{
    
            const lisPokemons = pokemons.reduce((accumulator,pokemon)=>{// o reduce foi usado para transformar todas as arrays devolvidas pela api em uma unica string
                const types = pokemon.types.map(typeInfo => typeInfo.type.name) //o map foi usado para selecionar o tipo do pokemon que estava dentro de outra array e  retorna-lo em string
    
    
                accumulator+= `
                <li id="${pokemon.name}" >
                <img class=" ${types[0]}" alt="${pokemon.name}" src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
                <h1>${pokemon.id} . ${pokemon.name}</h1>
                <p> ${types.join(' | ')}</p>     
                </li>`
                return accumulator // o acumulator verifica cada pokemon que foi passado pelo parametro, trata como o html acima e concatena, tornando uma grande string de pokemons
                
            },'') 
            console.log(lisPokemons)
            const ol = document.querySelector('[data-js="pokedex"]')

            ol.innerHTML =lisPokemons   
        })
    
    }
    

    
    