let pokemonlist = [
    {name: 'Torchic', height: 40, type: ['fire']},
    {name: 'Cumbusken', height: 90, type: ['fire', 'fighting']},
    {name: 'Blaziken', height: 190, type: ['fire', 'fighting']}
  ]
// Print each pokemon and height
  for (let i = 0; i <= 2; i++) {
    document.write(pokemonlist[i].name, " (height: ", pokemonlist[i].height, ")\n")
    if (pokemonlist[i].height > 100) {
// Print "Wow, that's big" after pokemon with height over 100
        document.write(" - Wow, that's big!")
    };
  }