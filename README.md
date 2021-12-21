# Phil's Rad Pizza Parlor

#### By: Phil Curran / pecurran@hotmail.com

#### A pizza ordering page that updates the total based on options chosen.

## Technologies Used

* HTML & CSS
* Vanilla Js
* Bulma CSS

## Description

A simple ordering page for pizza!  Choose your size, meats, cheeses, and veggies; the page calculates your subtotal, tax, and grand total.

## Setup / Installation Requirements

* Get the repo: git clone
* Install packages: npm install
* Start liveserver: npm start

## Known Bugs

* Text field for 'special instructions' not wired up yet.

## License

Find a bug?  Want to make this app even more rad?  Fork and tweak to your heart's content!  Then let me know what you did.  

## Contact Me

Copyright (c) 20DEC2021 Phil Curran / pecurran@hotmail.com

Describe: Pizza()

Test: "Should create a new Pizza object when called"
Code: let pizza = new Pizza(); pizza();
Expected Output: Pizza {size: undefined, meats: Array(0), cheeses: Array(0), veggies: Array(0)}

Test: "Should return pizza.size when a size option in form is selected"
Code: Size selected = Small
Expected Output: pizza.size = 1;

Test: "Should return array of selected meats when form changes."
Code: Select pepperoni, sausage
Expected Output: pizza.meats = ["Pepperoni", "Sausage"];

Test: "Should return array of selected cheeses when form changes."
Code: Select mozzarella, parmesan
Expected Output: pizza.cheeses = ["Mozzarella", "Parmesan"];

Test: "Should return array of selected veggies when form changes."
Code: Select tomatoes, mushrooms
Expected Output: pizza.veggies = ["Tomatoes", "Mushrooms"];