// Biz Logic

// get size from form
let getSize = document.getElementsByClassName("size");
// get meat selections from form
let selectedMeats = Array.from(document.getElementsByClassName("meat"));
// get cheese selections from form
let selectedCheeses = Array.from(document.getElementsByClassName("cheese"));
// get veggies selections from form
let selectedVeggies = Array.from(document.getElementsByClassName("veggie"));

// main Pizza object
function Pizza() {
  this.size = undefined;
  this.meats = [];
  this.cheeses = [];
  this.veggies = [];
}

// Prototype for updating size
Pizza.prototype.setSize = () => {
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
Pizza.prototype.updateMeats = (selectedMeats) => {
  this.meats = [];
  selectedMeats.forEach((option) => {
    if (option.checked) {
      this.meats.push(option.value);
    }
  });
};

//   Pizza.prototype.addMeats() {
//     meat.forEach((option) => {
//       if (option.checked) {
//         meatCount += 1.5;
//       }
//     });
//   };

//   Pizza.prototype.addCheeses() {
//     cheese.forEach((option) => {
//       if (option.checked) {
//         cheeseCount += 1;
//       }
//     });
//   };

//   Pizza.prototype.addVeggies() {
//     cheese.forEach((option) => {
//       if (option.checked) {
//         cheeseCount += 1;
//       }
//     });
//   };

//   Pizza.prototype.getSubtotal() {

//   };

let pizza = new Pizza();

// // UI Logic

// get form as a variable
var form = document.querySelector("form");

// set event listener for form to track changes
form.addEventListener("change", () => {
  console.log("form change");
  console.log(pizza.setSize());
  // console.log(`Size selected: ${pizza.size}`);
});

// const basePrice = 10;
// const taxRate = 1.1;
