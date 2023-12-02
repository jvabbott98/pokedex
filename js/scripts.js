let pokemonlist = [
    {name: 'Torchic', height: 40, type: ['fire']},
    {name: 'Cumbusken', height: 90, type: ['fire', 'fighting']},
    {name: 'Blaziken', height: 190, type: ['fire', 'fighting']}
  ]

  for (let i = 0; i <= 2; i++) {
    document.write(pokemonlist[i].name, " (height: ", pokemonlist[i].height, ")\n")
    if (pokemonlist[i].height > 100) {
        document.write(" - Wow, that's big!")
    };
  }