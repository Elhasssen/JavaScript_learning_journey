function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
function Cat(name) {
    this.name = name;
  }
Cat.prototype = {
    constructor: Cat
  };
  
let puss = new Cat('nnn')