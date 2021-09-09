/* Pokedex */

let pokemonRepository = function () {
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
      // "detailsURL" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
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
    });
  }



  // Load list & Promise with JSON conversion
  function loadList() {
    return fetch(apiURL).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsURL: item.apiURL
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // load Details with detailsURL property
  function loadDetails(item) {
    let url = item.detailsURL;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details){
      // Now we add the details to the Item
      item.imageURL = details.sprites.font_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }


  function showDetails(item) {
    loadDetails(item).then(function () {
      console.log(item);
    });
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
}();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
  });
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
