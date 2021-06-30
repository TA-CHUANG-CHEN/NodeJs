const products = [];

module.exports = class Product {
  constructor(w) {
    this.title = w;
  }
  save() {
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
};
