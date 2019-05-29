class Pizza {

    constructor(size, crust, shape) {
      this.size = size;
      this.crust = crust;
      this.shape = shape;
      this.toppings = ["cheese"];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
  }

let pizza1 = new Pizza('large', 'thin', 'square');
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

// let pizza2 = new Pizza();
// console.log(pizza2.toppings); // ["cheese"]
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings); // ["cheese", "more cheese"];

console.log("PIZZA1:", pizza1);
// console.log("PIZZA2:", pizza2);