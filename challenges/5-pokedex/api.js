class Pokedex {
  constructor() {
    this.pokedex = [];
  }
  fetchPokemon = (name) => {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const types = data.types.map((item) => item.type.name);
        return {
          name: data.name,
          id: data.id,
          height: data.height,
          weight: data.weight,
          types: types,
        };
      });
  };

  catch(name) {
    return this.fetchPokemon(name).then((pokemon) => this.pokedex.push(pokemon));
  }

  all() {
    return this.pokedex;
  }
}

module.exports = Pokedex;
