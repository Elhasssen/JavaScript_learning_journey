// let is a better alternative to var if we don't 
// want to update the variable, let was introduced to 
// in ES6
// ---------------------------------------
// var is easily overriden
// ---------------------------------------
// naming variables that we don't want to ressign 
// using const
// ---------------------------------------
// declaring a constans with uppercase is btter somehow
// ---------------------------------------
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

// ---------------------------------------
// Use Bracket Notation to Find the First Character in a String

// const firstName = "Charles";
// const firstLetter = fistName[0];

// ---------------------------------------
// Understanding String Immutability
// string values in JS are immutable; which means
// they can not be altered once created
// ---------------------------------------
// let myStr = "Bob";
// myStr[0] = "J";
// let myStr = "Bob";
// myStr = "Job";

// ---------------------------------------
// Use Bracket Notation to Find the Nth Character in a String

// const firstName = "Ada";
// const secondLetterOfFirstName = firstName[1];
// ---------------------------------------
// Use Bracket Notation to Find the Last Character in a String
// const firstName ="Ada";
// lastLetter = firstName[firstName.length - 1]
// ---------------------------------------

// Use Bracket Notation to Find the Nth-to-Last Character in a String
// const firstName = "Augusta";
// thisrdToLastLetter = firstName[firstName.length - 3]
// ---------------------------------------
//Store multiple values in one variabl using javaScript Arrays
// const sandwich = ["peanut butter","jelly","bread"]
// ---------------------------------------
// Nest one Array within Another Array
// const myArray = [["Bulls", 25],["Chickens", 12]]
// ---------------------------------------
// Access Array Data with Indexes
// we can access data with indexes

// const array = [50, 60 ,70];
// console.log(array[0]);
// const data = array[1];

// ---------------------------------------
// Access Array Data with Indexes
// Unlike strings, arrays are mutable and can be 
// changed freely.
// const ourArray = [50, 40, 90];
// ourArray[0] = 15
// ---------------------------------------

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
// ---------------------------------------
// Manipulate arrays with push()

// const arr1 = [1, 2, 3];
// arr1.push(4);

// const arr2 =["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);

// arr1 now has the value [1, 2, 3, 4] and 
// arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
// ---------------------------------------
// Manipulate Arrays With pop()

// const threeArr = [1, 2, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);

// The first console.log will display the value 6, 
// and the second will display the value [1, 4].
// ---------------------------------------

// Manpipulate Arrays with shift()
// it takes the first element of an array
// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();

// removedFromOurArray would have a value of the 
// string Stimpson, and ourArray would 
// have ["J", ["cat"]].

// ---------------------------------------
// Manipulate Arrays With unshift()
// unshift adds an element at the begining of the array

// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");

// After the shift, ourArray would have the value 
// ["J", "cat"]. After the unshift, ourArray would 
// have the value ["Happy", "J", "cat"].
// ---------------------------------------

// write reusable JavaScript with function

// function functionName() {
//     console.log("Hello World");
//   }
// this function is reusable :
// functionName();
// ---------------------------------------
// Passing Values to functions with arguments
// parameters are variable that act placeholders for the values 

// function testFun(param1, param2) {
//     console.log(param1, param2);
//   }
// ---------------------------------------
// Return a Value from a Function with Return
// function plusThree(num) {
//     return num + 3;
//   }

// const answer = plusThree(5);
// ---------------------------------------
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
// ---------------------------------------
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
// ---------------------------------------

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

// ---------------------------------------
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
// ---------------------------------------

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
// ---------------------------------------
// Stand in line 
// Write a function nextInLine which takes an array 
// (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove
//  the first element of the array.

// The nextInLine function should then return the 
// element that was removed.
// --------------------------------------
// function nextInLine(arr, item) {
//     // Only change code below this line
//     if (arr.length == 0){
//       return item;
//     }
//     const item2 = arr.shift();
//     arr.push(item);
//     return item2;
//     // Only change code above this line
//   }
  
//   // Setup
//   let testArr = [1, 2, 3, 4, 5];
  
//   // Display code
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));
//   ----------------------------------------------

// Understanding boolean Values

// Note: Boolean values are never written with quotes.
// The strings "true" and "false" are not Boolean and
// have no special meaning in JavaScript.

// --------------------------------------------------

// Use conditional Logic with if statements
// if (condition is true) {
//     statement is executed
//   }
//---------------------------------------------
// Comparison with the Equality Operator
// The most basic operator is the equality operator
// ==. The equality operator compares two values 
// and returns true if they're equivalent or false 
// if they are not. Note that equality is different 
// from assignment (=), which assigns the value on 
// the right of the operator to a variable on the 
// left.

// function equalityTest(myVal) {
//     if (myVal == 10) {
//       return "Equal";
//     }
//     return "Not Equal";
//   }

// --------------------------------
// Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the 
// equality operator (==). However, unlike the equality 
// operator, which attempts to convert both values 
// being compared to a common type, the strict 
// equality operator does not perform a type 
// conversion.

// If the values being compared have different types,
//  they are considered unequal, and the strict 
//  equality operator will return false.
// 3 ===  3  // true
// 3 === '3' // false
// --------------------------------------

// If the values being compared are not of the same 
// type, the equality operator will perform a type 
// conversion, and then evaluate the values. However,
//  the strict equality operator will compare both 
//  the data type and value as-is, without converting 
//  one type to the other.
// ----------------------------------------
// Comparison with the Inequality Operator:
// The inequality operator (!=) is the opposite of 
// the equality operator. It means not equal and
// returns false where equality would return true
// and vice versa. Like the equality operator, 
// the inequality operator will convert data 
// types of values while comparing.
// -----------------------------------------
// Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of 
// the equality operator. It means not equal and 
// returns false where equality would return true 
// and vice versa. Like the equality operator, the 
// inequality operator will convert data types of 
// values while comparing.
// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false
// ------------------------------------------
// Comparison with the Strict Inequality Operator
// The strict inequality operator (!==) is the logical
//  opposite of the strict equality operator. It 
//  means "Strictly Not Equal" and returns false 
//  where strict equality would return true and 
//  vice versa. The strict inequality operator will 
//  not convert data types.
// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true
// ------------------------------------------
// Comparison with the Greater Than Operator
// The greater than operator (>) compares the values 
// of two numbers. If the number to the left is
// greater than the number to the right, it returns 
// true. Otherwise, it returns false.

// Like the equality operator, the greater than
// operator will convert data types of values 
// while comparing.
// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false
// same goes for greater or equal, smaller or equal
// ------------------------------------------
// Comparisons with the Logical And Operator
// Sometimes you will need to test more than one 
// thing at a time. The logical and operator (&&) 
// returns true if and only if the operands to the 
// left and right of it are true
// --- from 
// if (num > 5) {
//     if (num < 10) {
//       return "Yes";
//     }
//   }
//   return "No";
// ---- to
// if (num > 5 && num < 10) {
//     return "Yes";
//   }
//   return "No";
// --------------------------------------------
// Comparisons with the logical Or operator 
// The logical or operator (||) returns true if 
// either of the operands is true. Otherwise, 
// it returns false.
// The logical or operator is composed of two 
// pipe symbols: (||). This can typically be 
// found between your Backspace and Enter keys.
// --- From 
// if (num > 10) {
//     return "No";
//   }
//   if (num < 5) {
//     return "No";
//   }
//   return "Yes";
// --- To
// if (num > 10 || num < 5) {
//     return "No";
//   }
//   return "Yes";
// ----------------------------------------------
// Introducing else statements 
// When a condition for an if statement is true, the
// block of code following it is executed. What about
// when that condition is false? Normally nothing 
// would happen. With an else statement, an 
// alternate block of code can be executed.
// if (num > 10) {
//     return "Bigger than 10";
//   } else {
//     return "10 or Less";
//   }
// ---------------------------------------------
// Introducing else if statements 
// If you have multiple conditions that need to 
// be addressed, you can chain if statements 
// together with else if statements.
// if (num > 15) {
//     return "Bigger than 15";
//   } else if (num < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 15";
//   }
// -------------------------------------------
// Logical order in if else statements
// Order is important in if, else if statements.

// The function is executed from top to bottom so you will
//  want to be careful of what statement comes first.
// --------------------
// function foo(x) {
//     if (x < 1) {
//       return "Less than one";
//     } else if (x < 2) {
//       return "Less than two";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }
// -----------------------
// function foo(x) {
//     if (x < 1) {
//       return "Less than one";
//     } else if (x < 2) {
//       return "Less than two";
//     } else {
//       return "Greater than or equal to two";
//     }
//   }
// ----------------------------
// foo(0)
// bar(0)
// --------------------------
// foo(0) will return the string Less than one, and bar(0) 
// will return the string Less than two.
// ------------------------------------------
// if/else statements can be chained together for complex logic.
// Here is pseudocode of multiple chained if / else if 
// statements:
// if (condition1) {
//     statement1
//   } else if (condition2) {
//     statement2
//   } else if (condition3) {
//     statement3
//   . . .
//   } else {
//     statementN
//   }
// -------------------------------
// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }

//   return "Change Me";
//   // Only change code above this line
// }

// golfScore(5, 4);
// -----------------------------
// Selecting from many options with switch statements 
// If you have many options to choose from, use a switch 
// statement. A switch statement tests a value and can 
// have many case statements which define various possible 
// values. Statements are executed from the first matched 
// case value until a break is encountered.
// switch (lowercaseLetter) {
//     case "a":
//       console.log("A");
//       break;
//     case "b":
//       console.log("B");
//       break;
//   }
// notes : case values are tested with strict equality (===).
//  The break tells JavaScript to stop executing statements. 
//  If the break is omitted, the next statement will be executed.
// ------------------------------
// Adding default option in switch statements
// In a switch statement you may not be able to specify all 
// possible values as case statements. Instead, you can add 
// the default statement which will be executed if no matching 
// case statements are found. Think of it like the final else 
// statement in an if/else chain.
// switch (num) {
//     case value1:
//       statement1;
//       break;
//     case value2:
//       statement2;
//       break;
//   ...
//     default:
//       defaultStatement;
//       break;
//   }
// ----------------------------------
// multiple indetical options in switch statements
// If the break statement is omitted from a switch statement's
// case, the following case statement(s) are executed until a
// break is encountered. If you have multiple inputs with the
// same output, you can represent them in a switch statement 
// like this:
// let result = "";
// switch (val) {
//   case 1:
//   case 2:
//   case 3:
//     result = "1, 2, or 3";
//     break;
//   case 4:
//     result = "4 alone";
// }
// ---------------------------
// Replacing if else chains with switch
// If you have many options to choose from, a switch statement 
// can be easier to write than many chained if/else if 
// statements. The following:
// if (val === 1) {
//     answer = "a";
//   } else if (val === 2) {
//     answer = "b";
//   } else {
//     answer = "c";
//   }
// to : 
// switch (val) {
//     case 1:
//       answer = "a";
//       break;
//     case 2:
//       answer = "b";
//       break;
//     default:
//       answer = "c";
//   }
// --------------------------------
// Returning boolean values from Functions 
// You may recall from comparison with the equality operator
// that all campatison operator return a boolearn true or 
// false value 
// Sometimes people use an if/else statements to do a compatison
// like this :
// function isEqual(a,b) {
//     if (a === b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// or this can be made in another way : 
// function isEqual(a,b) {
//     return a ===b;
// }
// ---------------------------------
// Return early Pattern for functions 
// when a return statement is reached, the execution of the current 
// function stops and control returns to the calling functions
// example :
// function myFun() {
//     console.log("Hello");
//     return "World";
//     console.log("byebye");
// }
// myFun();