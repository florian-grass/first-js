'use strict'

let pokemonRepository = (function () {
  const pokemonList = [];
  const APIURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150%22';

  // add a single pokemon to the list
  function add(pokemon) {
    // make sure the new pokemon has these properties
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsURL' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.error('pokemon is not correct'); // eslint-disable-line no-console
    }
  }

  // return the pokemonList array
  function getAll() {
    return pokemonList;
  }

  // Functions addListItem adds a list element to the unordered list already present inside the DOM
  // The list item will contain a button which text is the pokemon name passed as first argument
  function addListItem(pokemon){

    // selecting the unordered list
    const pokemonList = document.querySelector('.pokemon-list');

    // creating bullet list
    const listItem = document.createElement('li');
    listItem.classList.add('group-list-item');

    // creating a button
    const pokemonButton = document.createElement('button');

    // writing pokemon's name on the button
    pokemonButton.innerText = pokemon.name;

    // creating class for the list as pokemon-class
    pokemonButton.classList.add('pokemon-button', 'btn', 'btn-primary');

    // custom attribute for the button element to refer to the modal
    pokemonButton.setAttribute('data-target', '#pokemonModal');
    pokemonButton.setAttribute('data-toggle', 'modal');

    // append the button to the bullet list
    listItem.appendChild(pokemonButton);

    // append the bullet list to the unordered list
    pokemonList.appendChild(listItem);

  // Event Listener on click of a button
    pokemonButton.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }



  // Load list & Promise with JSON conversion
  function loadList() {
    return fetch(APIURL)
      .then(function (response) {
        return response.json();   // this returns the promise
    }).then(function (json) {
      json.results.forEach(function (item) {
        // get pokemon's name and details url when resolved
        let pokemon = {
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
          detailsURL: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e); // eslint-disable-line no-console
    });
  }

  // load Details for each pokemon with detailsURL property
  function loadDetails(item) {
    let url = item.detailsURL;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details){
      // Now we add the details to the Item
      item.imageURLFront = details.sprites.front_default;
      item.imageURLBack = details.sprites.back_default;
      item.height = details.height;
      item.weight = details.weight;
      // item.types = details.type;
      // item.abilities = details.abilities;
    }).catch(function (e) {
      console.error(e); // eslint-disable-line no-console
    });
  }

  // showing the information of the selected pokemon on console log
  // !!!!!!! may have to change the item for pokemon in all 3 lines
  // ==============================================================
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // Modal Container function
  // ============================
  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    // let modalHeader = $('.modal-header');

    // clear all existing modal content
    modalTitle.empty();
    modalBody.empty();

    // creating the modal
    let nameElement = $('<h1>' +  pokemon.name + '</h1>');

    // creating pokemon images
    let imageElementFront = $('<img class="modal-image" style="width:25%">');
    imageElementFront.attr('src', pokemon.imageURLFront); 
    let imageElementBack = $('<img class="modal-image" style="width:25%">');
    imageElementBack.attr('src', pokemon.imageURLBack);

    // Creating element for height in modal content
    let heightElement = $('<p>' + 'Height : ' + pokemon.height + ' Meter' + '</p>');

    // creating element for  weight in modal content
    let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + ' Kg' + '</p>');

    // creating types element for modal content
    // let typesElement = $("<p>" + "Type : " + pokemon.types + "</p>");

    // creating abilities element for modal content
    // let abilitiesElement = $("<p>" + "Abilities : " + pokemon.abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    // modalBody.append(typesElement);
    // modalBody.append(abilitiesElement);

  }
  // Modal - end
  // =======================

  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    showDetails,
    showModal,
  };
})();

// writing the content from pokemon Repository using forEach() function
pokemonRepository.loadList().then(function() {
  // now the data is loaded
  pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
