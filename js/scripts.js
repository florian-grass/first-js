/* Pokedex */

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

  // Functions Add Item and Button to Pokedex

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    function showDetails(pokemon) {
      console.log(pokemon);
    }

  // Event Listener on click of a button
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    })
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

}();

pokemonRepository.add({
  name: "Pikachu", height: 0.3, types: ['electric']
});

pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);
});



/*
let pokemonList = pokemonRepository.getAll();


  pokemonList.forEach(function(pokemon) {

    if (pokemon.height > 4) {
        document.write(pokemon.name + "<br >" + "height: " + pokemon.height + " inch" + " - Wow, that's big! , " + "<br >" + pokemon.types + "<br >");
    } else {document.write(pokemon.name +  "<br >" + "height: " + pokemon.height + " inch" + "<br >" + pokemon.types + ", " + "<br >");
        }
  });
*/
