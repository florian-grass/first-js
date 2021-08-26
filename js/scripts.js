/* Pokedex */
// Task 1.2 - Object Array
let pokemonList [
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


let text = ""; //initialize the text
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i]);}


  /*
    if (pokemonList.height < 1) {
        text = "A small pokemon!"; // text when the pokemonList.height is less than 1 m
    } else if (pokemonList.height > 1 && pokemonList.height <= 4){
        text = "Average sized pokemon."; // text when the pokemonList.height is between 1 and 4 m
    } else {
        text = "What a giant!"; // text when the pokemonList.height is higher than 4 m
      }
    document.write(
        pokemonList.name + "height: " + pokemonList.height +  " "  + text +. );
}
*/
/*
let poke = ();

for (let i = 0; i = pokemonList.length; i++) {
  document.write(pokemonList[i]);
  document.write(
      pokemonList.name + ' (height: ' + pokemonList.height + ') - ' + poke +''<br>');
}
*/
