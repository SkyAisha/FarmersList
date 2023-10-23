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

  getTotal() {
    return this.total;
  }

  clear() {
    this.products = [];
    this.total = 0;
  }

  removeItemByName(productName) {
    const index = this.products.indexOf(productName);
    if (index !== -1) {
      const removedProduct = this.products.splice(index, 1)[0];
      this.total -= removedProduct.price;
    }
  }
}

module.exports = Cart;
