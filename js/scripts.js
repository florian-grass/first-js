/* Pokedex */
// Task 1.5 - Object Array

let pokemonRepository = function () {
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

}();

let pokemonList = pokemonRepository.getAll();


  pokemonList.forEach(function(pokemon) {

    if (pokemon.height > 4) {
        document.write(pokemon.name + " (height: " + pokemon.height + " inch)" + " - Wow, that's big! , " + "<br >");
    } else {document.write(pokemon.name + " (height: " + pokemon.height + " inch)" + ", " + "<br >");
        }
  });
