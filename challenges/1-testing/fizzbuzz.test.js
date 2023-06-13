const fizzBuzz = require("./fizzbuzz.js");

describe("fizzBuzz", () => {
  it("returns Fizzbuzz if the number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("returns Fizz if the number is divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("returns Buzz if the number is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("returns the number if the number is not divisible by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});
