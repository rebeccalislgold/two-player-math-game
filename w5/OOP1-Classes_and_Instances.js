class Pizza {

    constructor(size, crust, shape) {
      this._size = size;
      this.crust = crust;
      this.shape = shape;
      this.toppings = ["cheese"];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }

    get price() {
      const basePrice = 10;
      const toppingPrice = 2;
      return basePrice + this.toppings.length * toppingPrice;
    }
  
    set size(size) {
      if (size === 's' || size === 'm' || size === 'l') {
        this._size = size;
      }
    }

    get size() {
      return this._size;
    }
  
  }
  

// let pizza1 = new Pizza('large', 'thin', 'square');
// console.log(pizza1.toppings); // ["cheese"]
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

// // let pizza2 = new Pizza();
// // console.log(pizza2.toppings); // ["cheese"]
// // pizza2.addTopping("more cheese");
// // console.log(pizza2.toppings); // ["cheese", "more cheese"];

// console.log("PIZZA1:", pizza1);
// console.log("PIZZA2:", pizza2);

// let pizza = new Pizza('SUPER L', 'stuffed-crust', 'square');
// pizza.setSize('s');

// // console.log(pizza);
// console.log(pizza.getSize());

let pizza = new Pizza();

pizza.price;      // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)

console.log(`PRICE: ${pizza.price}, SIZE: ${pizza.size}`);
console.log(`PIZZA TOPPINGS: ${pizza.toppings}`);