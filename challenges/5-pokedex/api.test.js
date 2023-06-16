const Pokedex = require("./api.js");

describe("Pokedex", () => {
  it("Can fetch the name for Ditto", (done) => {
    const pokedex = new Pokedex();
    pokedex.fetchPokemon("ditto").then((pokemon) => {
      expect(pokemon.name).toEqual("ditto");
      done();
    });
  });

  it("Can fetch the id for Ditto", () => {
    const pokedex = new Pokedex();
    pokedex.fetchPokemon("ditto").then((pokemon) => {
      expect(pokemon.id).toEqual(132);
    });
  });

  it("Can fetch the height for Ditto", () => {
    const pokedex = new Pokedex();
    pokedex.fetchPokemon("ditto").then((pokemon) => {
      expect(pokemon.weight).toEqual(40);
    });
  });

  it("Can fetch the height for Ditto", (done) => {
    const pokedex = new Pokedex();
    pokedex.catch('ditto').then((result) => {
      expect(pokedex.all()[0].name).toContain('ditto');
    });
    done();
  });
});
