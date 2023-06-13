const sum = (prices) => {
  return prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(item) {
    this.basket.push(item);
  }

  getTotalPrice() {
    const prices = this.basket.map((item) => item.getPrice());

    return sum(prices);
  }
}

module.exports = ShoppingBasket;
