/* Pokedex */

let pokemonRepository = function () {
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // add a single pokemon to the list
  function add(pokemon) {
    // make sure the new pokemon has these properties
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

  // return all pokemon from pokemonList
  function getAll() {
    return pokemonList;
  }

  // Functions Add Item and Button to Pokedex
  function addListItem(pokemon){

    // selecting the unordered list
    let pokemonList = document.querySelector('.pokemon-list');

    // creating bullet list
    let listItem = document.createElement('li');

    // creating a button
    let button = document.createElement('button');

    // writing pokemon's name on the button
    button.innerText = pokemon.name;

    // creating class for the list as pokemon-class
    button.classList.add("button-class");

    // append the button to the bullet list
    listItem.appendChild(button);

    // append the bullet list to the unordered list
    pokemonList.appendChild(listItem);

  // Event Listener on click of a button
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  // activating teh loading image
  function showLoadingImage() {
    let loading = document.querySelector('#loading');
    window.addEventListener('load', function() {
      loading.style.visibility = 'visible';
    });
  }

  // turn the visibility of loading image back to hidden, add 0.5sec before hidden
  function hideLoadingImage() {
    let loading = document.querySelector('#loading');
    setTimeout(function() {
      loading.style.visibility = 'hidden';
    }, 500);
  }



  // Load list & Promise with JSON conversion
  function loadList() {
    showLoadingImage();
    return fetch(apiURL).then(function (response) {
      return response.json();   // this returns the promise
    }).then(function (json) {
      hideLoadingImage();
      json.results.forEach(function (item) {
        // get pokemon's name and details url when resolved
        let pokemon = {
          name: item.name,
          detailsURL: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      hideLoadingImage();
      console.error(e);
    })
  }

  // load Details for each pokemon with detailsURL property
  function loadDetails(item) {
    showLoadingImage();
    let url = item.detailsURL;
    return fetch(url).then(function (response) {
      hideLoadingImage();
      return response.json();
    }).then(function (details){
      // Now we add the details to the Item
      item.imageURL = details.sprites.front_default;
      item.height = details.height;
      item.type = details.types;
      item.ability = details.abilities;
    }).catch(function (e) {
      hideLoadingImage();
      console.error(e);
    });
  }

  // showing the information of the selected pokemon on console log
  // !!!!!!! may have to change the item for pokemon in all 3 lines
  // ==============================================================
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);
    });
  }

  // Modal Container function
  // ============================
  let modalContainer = document.querySelector('#modal-container');

  function showModal(pokemon) {

    // clear all existing modal content
    modalContainer.innerHTML = '';

    // creating the modal
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Add modal Button
    let closeButtonElement = document.createElement('modal-button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';

    // close modal when 'Close' button is pressed
    closeButtonElement.addEventListener('click', hideModal);

    // assign elements for modal text
    let nameElement = document.createElement('h3');
    nameElement.innerText = pokemon.name.toUpperCase();
    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + pokemon.height + ' inch';  // inch
    // let typesElement = [];
    // nameElement.innerText = pokemon.types;

    // adding pokemon front image
    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', pokemon.imageURL);
    imageElement.setAttribute('alt', 'Front view of' + pokemon.name);

    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(heightElement);
    // modal.appendChild(typesElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    // show the modal
    modalContainer.classList.add('is-visible');
  }

  // hide modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  // hide with escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // hide Modal when clicking outside of modal
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  // Modal - end
  // =======================

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showLoadingImage: showLoadingImage,
    hideLoadingImage:hideLoadingImage,
    showModal: showModal,
    hideModal: hideModal
  };
}();

// writing the content from pokemon Repository using forEach() function
pokemonRepository.loadList().then(function() {
  // now the data is loaded
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
