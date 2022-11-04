// let is a better alternative to var if we don't 
// want to update the variable, let was introduced to 
// in ES6

// var is easily overriden


// naming variables that we don't want to ressign 
// using const


// declaring a constans with uppercase is btter somehow



// numbers

// incremmentaio of variabl using i++
//decrementing using i--


// remainder operator 
// % example : 
// 7 % 2 = 1

// quoitient
// math.floor(5/2) = 2 


// everything to the right of the equals sign is
// evaluated first
// myVar = myVar + 1


// compound assignment 
// a += 1 means a = a + 1
// a -= 1 means a = a - 1
// a *= 1 means a = a * 1
// a /= 1 means a = a / 1


// Use Bracket Notation to Find the First Character in a String

// const firstName = "Charles";
// const firstLetter = fistName[0];


// Understanding String Immutability
// string values in JS are immutable; which means
// they can not be altered once created

// let myStr = "Bob";
// myStr[0] = "J";
// let myStr = "Bob";
// myStr = "Job";


// Use Bracket Notation to Find the Nth Character in a String

// const firstName = "Ada";
// const secondLetterOfFirstName = firstName[1];

// Use Bracket Notation to Find the Last Character in a String
// const firstName ="Ada";
// lastLetter = firstName[firstName.length - 1]


// Use Bracket Notation to Find the Nth-to-Last Character in a String
// const firstName = "Augusta";
// thisrdToLastLetter = firstName[firstName.length - 3]

//Store multiple values in one variabl using javaScript Arrays
// const sandwich = ["peanut butter","jelly","bread"]

// Nest one Array within Another Array
// const myArray = [["Bulls", 25],["Chickens", 12]]

// Access Array Data with Indexes
// we can access data with indexes

// const array = [50, 60 ,70];
// console.log(array[0]);
// const data = array[1];


// Access Array Data with Indexes
// Unlike strings, arrays are mutable and can be 
// changed freely.
// const ourArray = [50, 40, 90];
// ourArray[0] = 15


// Access Multi-Dimensional Arrays With Indexes
//  a multi-dimensional array, is as an array of arrays

// const arr = [
//     [1, 2 ,3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14]
// ];

// const subarray = arr[3];
// const nestedSubarray = arr[3][0];
// const element = arr[3][0][1];

// Manipulate arrays with push()

// const arr1 = [1, 2, 3];
// arr1.push(4);

// const arr2 =["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);

// arr1 now has the value [1, 2, 3, 4] and 
// arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

// Manipulate Arrays With pop()

// const threeArr = [1, 2, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);

// The first console.log will display the value 6, 
// and the second will display the value [1, 4].


// Manpipulate Arrays with shift()
// it takes the first element of an array
// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();

// removedFromOurArray would have a value of the 
// string Stimpson, and ourArray would 
// have ["J", ["cat"]].


// Manipulate Arrays With unshift()
// unshift adds an element at the begining of the array

// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");

// After the shift, ourArray would have the value 
// ["J", "cat"]. After the unshift, ourArray would 
// have the value ["Happy", "J", "cat"].


// write reusable JavaScript with function

// function functionName() {
//     console.log("Hello World");
//   }
// this function is reusable :
// functionName();

// Passing Values to functions with arguments
// parameters are variable that act placeholders for the values 

// function testFun(param1, param2) {
//     console.log(param1, param2);
//   }

// Return a Value from a Function with Return
// function plusThree(num) {
//     return num + 3;
//   }

// const answer = plusThree(5);

// global scope and functions

// const myGlobal = 10;

// function fun1() {
//     oopsGlobal = 5;
  
//   }
  
//   // Only change code above this line
  
//   function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//       output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//       output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
//   }

// Variables declared Globally (outside any function)
//  have Global Scope.
// Global variables can be accessed from anywhere 
// in a JavaScript program.

// Local Scope and Functions
// Variables which are declared within a function, 
// as well as the function parameters, have local 
// scope. That means they are only visible within 
// that function.

// function myTest() {
//     const loc = "foo";
//     console.log(loc);
//   }
  
//   myTest();
//   console.log(loc);

// myTest() will output foo 
// but console.log(loc) will raise an error


// Global vs. Local Scope in Functions

// It is possible to have both local and global 
// variables with the same name. When you do this,
//  the local variable takes precedence over 
//  the global variable.


// const someVar = "Hat";

// function myFun() {
//   const someVar = "Head";
//   return someVar;
// }

// The function myFun will return the string Head 
// because the local version of the variable is present.


// Understanding Undefined Value returned from a 
// Function

// A function can include the return statement but it 
// does not have to. In the case that the function 
// doesn't have a return statement, when you call it, 
// the function processes the inner code but the 
// returned value is undefined.

// let sum = 0;

// function addSum(num) {
//   sum = sum + num;
// }

// addSum(3);

// addSum is a function without a return statement
// . The function will change the global sum variable
//  but the returned value of the function is undefined.


// Assignment with a Returned Value

// If you'll recall from our discussion about Storing 
// Values with the Assignment Operator, everything to 
// the right of the equal sign is resolved before the 
// value is assigned. This means we can take the 
// return value of a function and assign it to a 
// variable.

// ourSum = sum(5, 12);
// the function will return 17 to the ourSum variable 
// and store it there

