const Pokedex = require("./api.js");
const poke = new Pokedex();
poke.fetchPokemon("ditto").then((response) => console.log(response));
