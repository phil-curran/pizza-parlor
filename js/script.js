const basePrice = 10;

const sizes = {
  small: 1,
  medium: 1.5,
  large: 2,
};

const meats = {
  pepperoni: 1.5,
  sausage: 1.5,
  salami: 1.5,
  proscuitto: 1.5,
};

const cheeses = {
  mozarella: 1,
  parmesan: 1,
  asiago: 1,
};

const veggies = {
  mushrooms: 1,
  onions: 1,
  olives: 1,
  broccoli: 1,
  mushrooms: 1,
  garlic: 1,
  basil: 1,
};
function Pizza(size) {
  this.size = size;
  this.meats = [];
  this.cheeses = [];
  this.veggies = [];
}

Pizza.prototype.addMeat = function (meat) {
  // this.meats = [];
  this.meats.push(meat);
};

Pizza.prototype.addCheese = function (cheese) {
  // this.cheese = [];
  this.cheeses.push(cheese);
};

Pizza.prototype.addVeggies = function (veggies) {
  let temp = Array.from(veggies.split(" "));
  console.log(temp);
  this.veggies.push(temp);
};
