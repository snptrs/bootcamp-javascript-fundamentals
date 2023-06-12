class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(item) {
    this.basket.push(item);
  }

  getTotalPrice() {
    const prices = this.basket.map((item) => item.getPrice());

    const initialValue = 0;
    const sumWithInitial = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    return sumWithInitial;
  }
}

module.exports = ShoppingBasket;
