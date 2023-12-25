let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let modalContainer = document.querySelector('#modal-container');

//returns all objects in the pokemonList array.
return {
    getAll: function() {
        return pokemonList;
    },

// Adds a pokemon objec to the pokemonList array.
    add: function(pokemon) {
          if (
            typeof pokemon === "object" &&
            "name" in pokemon
          ) {
            pokemonList.push(pokemon);
          } else {
            console.log("pokemon is not correct");
          }
        },

    addListItem: function(pokemon){

        let unorderedList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('div');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button');
        button.addEventListener('click', () => {
            pokemonRepository.showDetails(pokemon);
        });
        listItem.classList.add('grid-item')
        listItem.appendChild(button);
        unorderedList.appendChild(listItem);
        pokemonRepository.loadDetails(pokemon).then(function() {     

          // Add class based on pokemon's first type     
          if (pokemon.types[0].type.name === 'water') {
            button.classList.add('water');
          }
          if (pokemon.types[0].type.name === 'grass') {
            button.classList.add('grass');
          }
          if (pokemon.types[0].type.name === 'fire') {
            button.classList.add('fire');
          }
          if (pokemon.types[0].type.name === 'bug') {
            button.classList.add('bug');
          }
          if (pokemon.types[0].type.name === 'dark') {
            button.classList.add('dark');
          }
          if (pokemon.types[0].type.name === 'dragon') {
            button.classList.add('dragon');
          }
          if (pokemon.types[0].type.name === 'electric') {
            button.classList.add('electric');
          }
          if (pokemon.types[0].type.name === 'fairy') {
            button.classList.add('fairy');
          }
          if (pokemon.types[0].type.name === 'fighting') {
            button.classList.add('fighting');
          }
          if (pokemon.types[0].type.name === 'flying') {
            button.classList.add('flying');
          }
          if (pokemon.types[0].type.name === 'ghost') {
            button.classList.add('ghost');
          }
          if (pokemon.types[0].type.name === 'ground') {
            button.classList.add('ground');
          }
          if (pokemon.types[0].type.name === 'ice') {
            button.classList.add('ice');
          }
          if (pokemon.types[0].type.name === 'normal') {
            button.classList.add('normal');
          }
          if (pokemon.types[0].type.name === 'poison') {
            button.classList.add('poison');
          }
          if (pokemon.types[0].type.name === 'psychic') {
            button.classList.add('psychic');
          }
          if (pokemon.types[0].type.name === 'rock') {
            button.classList.add('rock');
          }
          if (pokemon.types[0].type.name === 'steel') {
            button.classList.add('steel');
          }
          

          //Add class based on pokemon's second type
          if (pokemon.types[1].type.name === 'poison') {
            button.classList.add('poison2');
          }else if (pokemon.types[1].type.name === 'water') {
            button.classList.add('water2');
          }else if (pokemon.types[1].type.name === 'grass') {
            button.classList.add('grass2');
          }else if (pokemon.types[1].type.name === 'fire') {
            button.classList.add('fire2');
          }else if (pokemon.types[1].type.name === 'bug') {
            button.classList.add('bug2');
          }else if (pokemon.types[1].type.name === 'dark') {
            button.classList.add('dark2');
          }else if (pokemon.types[1].type.name === 'dragon') {
            button.classList.add('dragon2');
          }else if (pokemon.types[1].type.name === 'electric') {
            button.classList.add('electric2');
          }else if (pokemon.types[1].type.name === 'fairy') {
            button.classList.add('fairy2');
          }else if (pokemon.types[1].type.name === 'fighting') {
            button.classList.add('fighting2');
          }else if (pokemon.types[1].type.name === 'ghost') {
            button.classList.add('ghost2');
          }else if (pokemon.types[1].type.name === 'ground') {
            button.classList.add('ground2');
          }else if (pokemon.types[1].type.name === 'ice') {
            button.classList.add('ice2');
          }else if (pokemon.types[1].type.name === 'normal') {
            button.classList.add('normal2');
          }else if (pokemon.types[1].type.name === 'psychic') {
            button.classList.add('psychic2');
          }else if (pokemon.types[1].type.name === 'rock') {
            button.classList.add('rock2');
          }else if (pokemon.types[1].type.name === 'steel') {
            button.classList.add('steel2');
          }else if (pokemon.types[1].type.name === 'flying') {
            button.classList.add('flying2');
          }



          

          
      });
    },

    showDetails: function(pokemon) {

        pokemonRepository.loadDetails(pokemon).then(function() {
            let dialogPromiseReject;

            let typesArray = pokemon.types;
            //Clear modal-container and add modal element within
            modalContainer.innerText = '';                            
            let modal = document.createElement('div');
            modal.classList.add('modal');

            //Create content to be added to the Modal -> Pokemon name, height, and image as well as close button
            let pokemonName = document.createElement('h1');
            pokemonName.innerText = pokemon.name;

            let pokemonHeight = document.createElement('p');
            pokemonHeight.innerText = `Height: ${pokemon.height}`;

            let pokemonImage = document.createElement('img');
            pokemonImage.src = pokemon.imageUrl;

            let pokemonType1 = document.createElement('p');
            pokemonType1.innerText = pokemon.types[0].type.name;

            let pokemonType2 = document.createElement('p');
            if (typesArray.length === 2) {
              pokemonType2.innerText = pokemon.types[1].type.name;
            } 

            let closeButtonElement = document.createElement('button');  //Add button with text "close" that when clicked will hide modal
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', pokemonRepository.hideDetails); 

            //Add created content to modal through appendChild() and add modal to modal-container
            modal.appendChild(pokemonName);
            modal.appendChild(pokemonImage);
            modal.appendChild(pokemonHeight);
            modal.appendChild(pokemonType1);
            modal.appendChild(pokemonType2);
            modal.appendChild(closeButtonElement);
            modalContainer.appendChild(modal); 

            //Make modal-container and contents within visible
            modalContainer.classList.add('is-visible');

            //Remove modal by clicking outside of modal
            modalContainer.addEventListener('click', (e) => {
                let target = e.target;
                if (target === modalContainer) {
                  pokemonRepository.hideDetails();
                }
              });
              
              //Remove modal by hitting the escape key
              window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                  pokemonRepository.hideDetails();  
                }
              });
        });
    },

    hideDetails: function() {
        modalContainer.classList.remove('is-visible');
      },

    loadList: function() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            pokemonRepository.add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      },

      loadDetails: function(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      },

};
})();


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

document.querySelector('#search-bar').addEventListener('input', function () {
  let searchTerm = this.value.toLowerCase();
  let filteredPokemonList = pokemonRepository.getAll().filter(function (pokemon) {
      return pokemon.name.toLowerCase().includes(searchTerm);
  });

  // Clear existing list
  document.querySelector('.pokemon-list').innerHTML = '';

  // Display the filtered Pokémon list
  filteredPokemonList.forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
  });
});

