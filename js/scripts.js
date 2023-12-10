let pokemonRepository = (function () {
let pokemonList = [
    {name: 'Torchic', height: 40, type: ['fire']},
    {name: 'Cumbusken', height: 90, type: ['fire', 'fighting']},
    {name: 'Blaziken', height: 190, type: ['fire', 'fighting']}
  ];

//returns all objects in the pokemonList array.
return {
    getAll: function() {
        return pokemonList;
    },
// Adds a pokemon objec to the pokemonList array.
    add: function(pokemon) {
        if (typeof pokemon != "object") {
            document.write("Argument must be an object");            
        }else if (Object.keys(pokemon)[0] != "name" || Object.keys(pokemon)[1] != "height" || Object.keys(pokemon)[2] != "type") {
            document.write(Object.keys(pokemon));
        }else {
            pokemonList.push(pokemon); 
        };
    },

    addListItem: function(pokemon){
        let unorderedList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button');
        button.addEventListener('click', function() {
            pokemonRepository.showDetails(pokemon)
        })
        listItem.appendChild(button);
        unorderedList.appendChild(listItem);
    },

    showDetails: function(pokemon) {
        console.log(pokemon);
    }

};
})();


//Prints pokemon list 
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});

