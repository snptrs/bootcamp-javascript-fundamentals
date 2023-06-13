const ShoppingBasket = require("./shoppingBasket");

describe("mocking tests", () => {
  it("gets the price for one mocked candy", () => {
    const CandyDouble = { getName: () => "fake", getPrice: () => 9.99 };
    const new_basket = new ShoppingBasket();
    new_basket.addItem(CandyDouble);
    expect(new_basket.getTotalPrice()).toBe(9.99);
  });

  it("gets the total price for two mocked candies", () => {
    const CandyDouble = { getName: () => "fake", getPrice: () => 10.0 };
    const CandyDouble2 = { getName: () => "fake2", getPrice: () => 10.0 };
    const new_basket = new ShoppingBasket();
    new_basket.addItem(CandyDouble);
    new_basket.addItem(CandyDouble2);
    expect(new_basket.getTotalPrice()).toBe(20);
  });
});
