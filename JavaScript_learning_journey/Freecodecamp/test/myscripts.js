function Animal() {
  this.name = 'hello';
 }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Bird() { 
  this.name = 'hello2'
}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
Bird.prototype.constructor = Bird;
duck.constructor