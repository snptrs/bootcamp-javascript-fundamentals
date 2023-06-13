const multiply = require("./multiply.js");

describe("multiply", () => {
  it("multiplies 2 by 3", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("multiplies 3 by 6", () => {
    expect(multiply(3, 6)).toBe(18);
  });
});
