let pokemonRepository = (function () {
let pokemonList = [
    {name: 'Torchic', height: 40, type: ['fire']},
    {name: 'Cumbusken', height: 90, type: ['fire', 'fighting']},
    {name: 'Blaziken', height: 190, type: ['fire', 'fighting']}
  ];

return {
    getAll: function() {
        return pokemonList;
    },
    add: function(pokemon) {
        pokemonList.push(pokemon);
    }
};
})();


pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name, " (height: ", pokemon.height, ") ")
    if (pokemon.height > 100) {
// Print "Wow, that's big" after pokemon with height over 100
        document.write(" - Wow, that's big!")
    };
});

 
