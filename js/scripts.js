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
// // Attempts to use filter() to search pokemon by name
//     filtered: function(pokemonName) {
//         let result = pokemonList.filter(function checkName(value) {
//     if (value.name == pokemonName) {
//         return value;
//     }
// };)
//     }
};
})();



pokemonRepository.add({name: "Pikachu", height: 30, type: ['electric']});
document.write(filtered(torchic));

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name, " (height: ", pokemon.height, ") ")
    if (pokemon.height > 100) {
// Print "Wow, that's big" after pokemon with height over 100
        document.write(" - Wow, that's big! ")
    };
});


