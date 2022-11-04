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