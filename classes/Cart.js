class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }

  removeProduct(product) {
    if (product >= 0 && product < this.products.length) {
      const removedProduct = this.products.splice(product, 1)[0];
      this.total -= removedProduct.price;
    }
  }
}

module.exports = Cart;
