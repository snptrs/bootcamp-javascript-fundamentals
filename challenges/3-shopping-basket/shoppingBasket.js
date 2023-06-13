class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  getTotalPrice() {
    const prices = this.basket.map((candy) => candy.getPrice());
    return prices.reduce((total, price) => total + price, 0);
  }

  addItem(candy) {
    this.basket.push(candy);
  }
}

module.exports = ShoppingBasket;
