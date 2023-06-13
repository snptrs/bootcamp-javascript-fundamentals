const add = require("./add.js");

describe("add", () => {
  it("adds 2 and 2", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("adds 3 and 5", () => {
    expect(add(3, 5)).toBe(8);
  });
});
