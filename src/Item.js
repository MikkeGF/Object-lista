export default class Item {
  name = '';
  price = 0;
  amount = 0;

  constructor(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}