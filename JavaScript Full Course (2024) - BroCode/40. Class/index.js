/**
 * Class = (ES6 feature) provide a more structured and cleaner way to work with objects compared to traditional constructor functions 
           ex. static keyword, encapsulation, inheritance
 
 */

// CONSTRUCTOR

// function Product(name, price) {
//   this.name = name;
//   this.price = price;

//   this.displayProduct = function () {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ${this.price.toFixed(2)}`);
//   };

//   this.calculateTotal = function (salesTax) {
//     return this.price + this.price * salesTax;
//   };
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// product1.displayProduct();
// const calc = product1.calculateTotal();
// console.log(calc);

// CLASS
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * this.salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
product1.displayProduct();

const product2 = new Product("Short", 20.99);
product2.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(total.toFixed(2));
