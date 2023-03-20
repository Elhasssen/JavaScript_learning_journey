// Compare scopes of the var and let keywords
// when you declare a variable with the var keyword, it is declared globally
// or locally if declared inside a function
// the let keyword behaves similarly, but with some extra features, when 
// you declare a variable with let keyword inside a block, statement or expression
// its scope is limited to that bloc, statement, or expression.
// for example : 
// var numArray = [];
// for (var i=0; i < 3; i++){
//     numArray.push(i);
// }
// console.log(numArray);
// console.log(i);
// Here the console will display the values [0,1.2] and 3
//--------------------------------------------------------
// compare scopes of the vat and let keywords
// When you declare a variable with the let keyword inside a block, statement, 
// or expression, its scope is limited to that block, statement, or expression.
// ---------------------------
// mutate and array decalred with const
// ----------------- 
// it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration 
// only prevents reassignment of the variable identifier.
// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;
//   // Using s = [2, 5, 7] would be invalid

//   // Only change code above this line
// }
// editInPlace();
// --------------------
// prevent objects mutation 
// 
// 
// let obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };
// Object.freeze(obj);
// obj.review = "bad";
// obj.newProp = "Test";
// console.log(obj); 
// Object.freeze will prevent mutation
// -------------------------
// When there is no function body, and only a return value, arrow function 
// syntax allows you to omit the keyword return as well as the brackets 
// surrounding the code. This helps simplify smaller functions into one-line 
// statements:
// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }
// thjis can be written to this 
// const myFunc = () => "Value" ;
// ------------------------------------
// Set Default Parameters for Your Functions
// const greeting = (name = "Anonymous") => "Hello " + name;

// console.log(greeting("John"));
// console.log(greeting());
// he default parameter kicks in when the argument is not specified (it is undefined).
//-------------------------------------------
// Use the Rest Parameter with Function Parameters
// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));
// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..
// -----------------------------------------------------------------
// Use the Spread Operator to Evaluate Arrays In-Place
//...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place,
// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr);
// New ways to extract values from objects 
// using the destucturing assignment
// const user = {name = "hassen", age = 24};
// const  {name, age} = user;
// -----------------------------------------------------------------
// Destructuring allows you to assign a new variable name when extracting values. You can do this by 
// putting the new name after a colon when assigning the value.
// const user = { name: 'John Doe', age: 34 };
// const { name: userName, age: userAge } = user;
// --------------------------------------------------------
// Use Destructuring Assignment to Assign Variables from Nested Objects
// const user = {
//   johnDoe: { 
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com'
//   }
// };
// to : 
// const { johnDoe: { age, email }} = user;
// or with diffrent names 
// const {johnDoe : {age : userAge, email : UserEmail}} = user;
//---------------------------------------
// Use Destructuring Assignment to Assign Variables from Arrays
// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);
// Destructuring via rest elements
// The result is similar to Array.prototype.slice(), as shown below:
// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);
//-------------------------------------------
// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;

// }
// to :
// This effectively destructures the object sent into the function. This 
// can also be done in-place:
// const profileUpdate = ({ name, age, nationality, location }) => { }
// ----------------------------------
// Create Strings using Template Literals
// A new feature of ES6 is the template literal. This 
// is a special type of string that makes creating complex strings easier.
// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;
//-----------------------------------------
// rite Concise Object Literal Declarations Using Object Property Shorthand
// const getMousePosition = (x, y) => ({
//     x: x,
//     y: y
//   });
// to this fd
// const getMousePosition = (x, y) => ({ x, y });
// ---------------------------------------
// using class ystax to define a constructor function 
// In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

// In ES6, a class declaration has a constructor method that is invoked with the new keyword. 
// If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.
// // Explicit constructor
// class SpaceShuttle {
//     constructor(targetPlanet) {
//       this.targetPlanet = targetPlanet;
//     }
//     takeOff() {
//       console.log("To " + this.targetPlanet + "!");
//     }
//   }
  
//   // Implicit constructor 
//   class Rocket {
//     launch() {
//       console.log("To the moon!");
//     }
//   }
// ------------------------------ 
// Use getters and setter to control access to an object
// Getter functions are meant to simply return (get) the value of an object's private variable
// to the user without the user directly accessing the private variable.
//Setter functions are meant to modify (set) the value of an object's private variable based on 
// the value passed into the setter function. This change could involve calculations, or even 
//overwriting the previous value completely.
// example:
// class Thermostat{
//     constructor(temperature){
//       this._temperature = temperature;
//     }
//     get temperature(){
//       return (this._temperature - 32) * 5/9;
//     }
//     set temperature(newTemperature){
//       this._temperature = (newTemperature * 9) / 5 + 32; 
//     }
//   }
//   // Only change code above this line
  
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   let temp = thermos.temperature; // 24.44 in Celsius
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in Celsius
//----------------------------------------------------
// Exporting to share a code block
// const uppercaseString = (string) => {
//   return string.toUpperCase();
// }

// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }
// export {uppercaseString,lowercaseString};
//----------------------------------------
// Reuse JavaScript Code Using import
// import { uppercaseString, lowercaseString} from './string_functions.js'
// Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");
// ---------------------
// Use * to Import Everything from a File
// import * as stringFunctions from './string_functions.js';
// Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");
// Create an Export Fallback with export default
// export default function subtract(x, y) {
//   return x - y;
// }
//------------------------
// Import a Default Export
// import subtract from "./math_functions.js"  
// // Only change code above this line

// subtract(7,4);
//----------------------
// JavaScript Promise
// A promise in JavaScript is exactly what it sounds like - you use it to make a promise 
// to do something, usually asynchronously. When the task completes, you either fulfill 
// your promise or fail to do so. Promise is a constructor function, so you need to use 
// the new keyword to create one.
// const myPromise = new Promise((resolve, reject) => {

// });
// ---------------------------
// Complete a Promise with resolve and reject
//const myPromise = new Promise((resolve, reject) => {
    // if(condition here) {
    //     resolve("Promise was fulfilled");
    //   } else {
    //     reject("Promise was rejected");
    //   }
    // });
//----------------------------------
// Handle a Fulfilled Promise with then
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to true to represent a successful response from a server
//     let responseFromServer = true;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result => {
//     console.log(result)
//   });

