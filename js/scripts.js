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
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button');
        button.addEventListener('click', () => {
            pokemonRepository.showDetails(pokemon);
        });
        listItem.appendChild(button);
        unorderedList.appendChild(listItem);
    },

    showDetails: function(pokemon) {

        pokemonRepository.loadDetails(pokemon).then(function() {
            let dialogPromiseReject;

            //Clear modal-container and add modal element within
            modalContainer.innerText = '';                            
            let modal = document.createElement('div');
            modal.classList.add('modal');

            //Create content to be added to the Modal -> Pokemon name, height, and image as well as close button
            let pokemonName = document.createElement('h1');
            pokemonName.innerText = pokemon.name;
            let pokemonHeight = document.createElement('p');
            pokemonHeight.innerText = `Height: ${pokemon.height}`;
            let pokemonImage = document.createElement('img')
            pokemonImage.src = pokemon.imageUrl;
            let closeButtonElement = document.createElement('button');  //Add button with text "close" that when clicked will hide modal
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', pokemonRepository.hideDetails); 

            //Add created content to modal through appendChild() and add modal to modal-container
            modal.appendChild(pokemonName);
            modal.appendChild(pokemonHeight);
            modal.appendChild(pokemonImage);
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
      }
      








};
})();


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

