let log = console.log

function Dog(name) {
    this.name = name;
  }
  
let beagle = new Dog("Snoopy");
  
log(Dog.prototype.isPrototypeOf(beagle))