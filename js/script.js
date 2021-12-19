const basePrice = 10;
const taxRate = 1.1;

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

let meat = Array.from(document.getElementsByClassName("meat"));

let meatCount = 0;

let a = () => {
  meat.forEach((option) => {
    if (option.checked) {
      meatCount += 1.5;
    }
  });
};

let cheese = Array.from(document.getElementsByClassName("cheese"));

let cheeseCount = 0;

let b = () => {
  cheese.forEach((option) => {
    if (option.checked) {
      cheeseCount += 1;
    }
  });
};

var form = document.querySelector("form");
form.addEventListener("change", function () {
  console.log("form change");
  a();
  console.log(meatCount);
  b();
  console.log(cheeseCount);
});

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
