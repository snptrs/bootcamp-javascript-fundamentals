const Candy = require("./12-ch-candy.js");
const ShoppingBasket = require("./12-ch-shopping.js");

const marsBar = new Candy("Mars", 1.25);
const snickers = new Candy("Snickers", 1.5);
const basket = new ShoppingBasket();
basket.addItem(marsBar);
basket.addItem(snickers);
console.log(basket.getTotalPrice());
