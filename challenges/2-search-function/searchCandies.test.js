const search = require("./searchCandies");

describe("searchCandies", () => {
  it("returns two candies", () => {
    expect(search("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it("returns one candy", () => {
    expect(search("Ma", 2)).toEqual(["Mars"]);
  });

  it("returns three candies", () => {
    expect(search("S", 10)).toEqual(["Skitties", "Skittles", "Starburst"]);
  });

  it("returns three candies", () => {
    expect(search("S", 4)).toEqual(["Skitties", "Skittles"]);
  });

  it("also works with lower case search string", () => {
    expect(search("s", 4)).toEqual(["Skitties", "Skittles"]);
  });
});
