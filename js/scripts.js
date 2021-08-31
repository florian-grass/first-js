/* Pokedex */
// Task 1.5 - Object Array

//let pokemonRepository = function () {
  let pokemonList = [
    { name: 'Gloom',
      height: 2.07,
      types: ['Grass', 'Poison']
    },

    { name: 'Parasect',
      height: 3.03,
      types: ['Bug', 'Grass']
    },

    { name: 'Persian',
      height: 3.03,
      types: ['Normal']
    },

    { name: 'Primeape',
      height: 3.03,
      types: ['Fighting']
    },

    { name: 'Poliwrath',
      height: 4.03,
      types: ['Water', 'Fighting']
    },
    { name: 'Bulbasaur',
      height: 0.7,
      types: ['Grass', 'Poison']
    }
  ];

// returning pokemonList first try
/*
  return {
    pokemonRepository.getAll(){
      return pokemonList;
    }
    pokemonRepository.add(item) {
      return pokemonList;
    },
  }
*/
// returning pokemonList second try
/*
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll
  };
*/


  pokemonList.forEach(function(pokemon) {


    if (pokemon.height > 4) {
        document.write(pokemon.name + " (height: " + pokemon.height + " inch)" + " - Wow, that's big! , " + "<br >");
    } else {document.write(pokemon.name + " (height: " + pokemon.height + " inch)" + ", " + "<br >");
        }
  })
  
//})();
/*
for (let i = 0; i < pokemonList.length; i++) {

  if (pokemonList[i].height > 4) {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " inch)" + " - Wow, that's big! , " + "<br >");
  } else {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " inch)" + ", " + "<br >");
      }
}


*/
