const basePrice = 10;
const taxRate = 1.1;

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

let getSize = document.getElementsByClassName("size");

let sizeMultiplier = () => {
  if (getSize[0].checked) {
    return 1;
  } else if (getSize[1].checked) {
    return 1.5;
  } else if (getSize[2].checked) {
    return 2;
  } else {
    console.log("no size selected");
  }
};

function Pizza(size) {
  this.size = size;
  this.basePrice = size * basePrice;
  this.meats = [];
  this.cheeses = [];
  this.veggies = [];
}

// Pizza.prototype.addMeat = function (meat) {
//   // this.meats = [];
//   this.meats.push(meat);
// };

// Pizza.prototype.addCheese = function (cheese) {
//   // this.cheese = [];
//   this.cheeses.push(cheese);
// };

// Pizza.prototype.addVeggies = function (veggies) {
//   let temp = Array.from(veggies.split(" "));
//   console.log(temp);
//   this.veggies.push(temp);
// };
