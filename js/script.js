// Biz Logic

// main Pizza object
function Pizza() {
  this.size = undefined;
  this.meats = [];
  this.cheeses = [];
  this.veggies = [];
  this.basePrice = 10;
  this.subTotal = 0;
}

// Prototype for updating size
Pizza.prototype.setSize = function (getSize) {
  if (getSize[0].checked) {
    this.size = 1;
  } else if (getSize[1].checked) {
    this.size = 1.5;
  } else if (getSize[2].checked) {
    this.size = 2;
  }
  return this.size;
};

// Prototype for updating selected meats
Pizza.prototype.updateMeats = function (selectedMeats) {
  this.meats = [];
  selectedMeats.forEach((option) => {
    if (option.checked) {
      this.meats.push(option.value);
    }
  });
  return this.meats;
};

// Prototype for updating selected cheeses
Pizza.prototype.updateCheeses = function (selectedCheeses) {
  this.cheeses = [];
  selectedCheeses.forEach((option) => {
    if (option.checked) {
      this.cheeses.push(option.value);
    }
  });
  return this.cheeses;
};

// Prototype for updating selected veggies
Pizza.prototype.updateVeggies = function (selectedVeggies) {
  this.veggies = [];
  selectedVeggies.forEach((option) => {
    if (option.checked) {
      this.veggies.push(option.value);
    }
  });
  return this.veggies;
};

// Prototype for calculating price
Pizza.prototype.calculatePrice = function (basePrice) {
  this.subTotal =
    this.basePrice * this.size +
    this.meats.length * 1.5 * this.size +
    this.cheeses.length * 1 * this.size +
    this.veggies.length * 1 * this.size;
  return this.subTotal;
};

// Utilities

function roundMe(number) {
  return Math.round(number * 100) / 100;
}

// // UI Logic

// get form as a variable
var form = document.querySelector("form");

// set event listener for form to track changes
form.addEventListener("change", () => {
  let pizza = new Pizza();

  // let basePrice = 10;

  // get form fields
  // get size
  let getSize = document.getElementsByClassName("size");
  // get meat selections
  let selectedMeats = Array.from(document.getElementsByClassName("meat"));
  // get cheese selections
  let selectedCheeses = Array.from(document.getElementsByClassName("cheese"));
  // get veggies selections
  let selectedVeggies = Array.from(document.getElementsByClassName("veggie"));

  // get subTotal
  let subTotal = document.getElementById("subTotal");
  // get tax
  let tax = document.getElementById("tax");
  // get grandTotal
  let grandTotal = document.getElementById("grandTotal");

  // get updated values from form on form.change
  pizza.setSize(getSize);
  pizza.updateMeats(selectedMeats);
  pizza.updateCheeses(selectedCheeses);
  pizza.updateVeggies(selectedVeggies);
  pizza.calculatePrice();

  console.log(pizza);

  // calculate price & update form fields
  subTotal.innerHTML = `$ ${pizza.subTotal}`;
  tax.innerHTML = `$ ${roundMe(pizza.subTotal * 1.1 - pizza.subTotal)}`;
  grandTotal.innerHTML = `$ ${roundMe(pizza.subTotal * 1.1)}`;
});
