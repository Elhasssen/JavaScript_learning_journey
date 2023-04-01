function Animal(name) {
  this.name = name;
 }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype);; // Change this line
let beagle = Object.create(Animal.prototype);;
let cat = new Animal('meaw');