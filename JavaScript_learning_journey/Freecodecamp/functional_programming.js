// Learn About Functional Programming
// Functional programming is a style of programming where solutions are simple, isolated functions, 
// without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT
// Functional programming is about:
// Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
// Pure functions - the same input always gives the same output
// Functions with limited side effects - any changes, or mutations, to the state of the program 
// outside the function are carefully controlled
// ---------------------------------------------------------------
// Understand Functional Programming Terminology
// Callbacks are the functions that are slipped or passed into another function to decide the invocation of that 
// function. You may have seen them passed to other methods, for example in filter, the callback function tells 
// JavaScript the criteria for how to filter an array.

// Functions that can be assigned to a variable, passed into another function, or returned from another 
// function just like any other normal value, are called first class functions. In JavaScript, all 
// functions are first class functions.

// The functions that take a function as an argument, or return a function as a return value, are 
// called higher order functions.

// When functions are passed in to or returned from another function, then those functions which 
// were passed in or returned can be called a lambda.
// ----------------------------------------------
// Understand the Hazards of Using Imperative Code
// Functional programming is a good habit. It keeps your code easy to manage, and saves you from 
// sneaky bugs. But before we get there, let's look at an imperative approach to programming 
// to highlight where you may have issues.
//-----------------------------------------------------------------------
// Avoid Mutations and Side Effects Using Functional Programming
// Recall that in functional programming, changing or altering things is called mutation, and the 
// outcome is called a side effect. A function, ideally, should be a pure function, meaning that it 
// does not cause any side effects.
// Avoid Mutations and Side Effects Using Functional Programming
// function depends on a variable or object being present, then pass that variable or object 
// directly into the function as an argument.
//------------------------------------------
// Refactor Global Variables Out of Functions
// Don't alter a variable or object - create new variables and objects and return them if need be from 
// a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply 
// create a reference to the existing variable and not a copy. So changing a value in newArr would 
// change the value in arrVar.

// Declare function parameters - any computation inside a function depends only on the arguments 
// passed to the function, and not on any global object or variable.
// ----------------------------------------------------------------
// Use the map Method to Extract Data from an Array
// The map method iterates over each item in an array and returns a new array containing the results of 
// calling the callback function on each element. It does this without mutating the original array.
// const watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     }];
// const ratings = watchList.map(user => ({
//         title: user["Title"],
//         rating: user["imdbRating"]
//       }));// Only change code above this line
      
// console.log(JSON.stringify(ratings)); 
// this will return an array with ojects of two pairs 
// -----------------------------------------------------
// Implement map on a Prototype
// Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not 
// use the built-in map method. The Array instance can be accessed in the myMap method using this.
// Array.prototype.myMap = function(callback) {
//     const newArray = [];
//     // Only change code below this line
//      for (let i = 0; i < this.length; i++) {
//       newArray.push(callback(this[i], i, this));
//     }
//     // Only change code above this line
//     return newArray;
//   };
//-------------------------------------------------------------
// Use the filter Method to Extract Data from an Array
// filter calls a function on each element of an array and returns a new array containing only the 
// elements for which that function returns a truthy value - that is, a value which returns true 
// if passed to the Boolean() constructor. In other words, it filters the array, based on the function 
// passed to it. Like map, it does this without needing to modify the original array.
// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
//   ];
  
//   const usersUnder30 = users.filter(user => user.age < 30);
//   console.log(usersUnder30); 
// The console would display the value [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].
//-------------------------------------------------------------------
// Implement the filter Method on a Prototype
// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
// You should not use the built-in filter method. The Array instance can be accessed in the myFilter 
// method using this.
// Array.prototype.myFilter = function(callback) {
//     const newArray = [];
//       // Only change code below this line
//         for (let i = 0; i < this.length; i++) {
//       if (callback(this[i], i, this) == true) {
//         newArray.push(this[i]);
//       }
//     }
//       // Only change code above this line
//       return newArray;
//   };
// -------------------------------------------------------
// Return Part of an Array Using the slice Method
// function sliceArray(anim, beginSlice, endSlice) {
//     // Only change code below this line
//     return anim.slice(beginSlice, endSlice)
//     // Only change code above this line
//   }
  
//   const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//   sliceArray(inputAnim, 1, 3);
// ----------------------------------------------------
// Combine Two Arrays Using the concat Method
// function nonMutatingConcat(original, attach) {
//     // Only change code below this line
  
//     return original.concat(attach);
//     // Only change code above this line
//   }
  
//   const first = [1, 2, 3];
//   const second = [4, 5];
//   nonMutatingConcat(first, second);
// ---------------------------------------------------
//Add Elements to the End of an Array Using concat Instead of push.
// Functional programming is all about creating and using non-mutating functions.
// The last challenge introduced the concat method as a way to merge arrays into a new array without
// mutating the original arrays. Compare concat to the push method. push adds items to the end of 
// the same array it is called on, which mutates that array.
// ----------------------------------------
// Use the reduce Method to Analyze Data
// The reduce method allows for more general forms of array processing, and it's possible to show 
// that both filter and map can be derived as special applications of reduce. The reduce method 
// iterates over each item in an array and returns a single value (i.e. string, number, object, array). 
// This is achieved via a callback function that is called on each iteration.
// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
//   ];
  
//   const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
//   console.log(sumOfAges);
//   The callback function accepts four arguments. The first argument is known as the accumulator, 
//   which gets assigned the return value of the callback function from the previous iteration, the 
//   second is the current element being processed, the third is the index of that element and the 
//   fourth is the array upon which reduce is called.
//   reduce has an additional parameter which takes an initial value for the accumulator. If this 
//   second parameter is not used, then the first iteration is skipped and the second iteration 
//   gets passed the first element of the array as the accumulator.
// -------------------------------------------------
// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// const squareList = arr => {
//     let newArr = arr.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
//     // Only change code below this line
//     return newArr;
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);
/// or using reduce 
// const squareList = arr => {
//     let newArr = arr.filter(num => Number.isInteger(num) && num > 0).reduce((a,b) => a.concat(b*b),[]);
//     // Only change code below this line
//     return newArr;
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);
// ------------------------------
// Sort an Array Alphabetically using the sort Method
// function ascendingOrder(arr) {
//     return arr.sort(function(a, b) {
//       return a - b;
//     });
//   }
  
// ascendingOrder([1, 5, 2, 3, 4]);
// JavaScript's default sorting method is by string Unicode point value, which may return 
// unexpected results. Therefore, it is encouraged to provide a callback function to specify 
// how to sort the array items.
// ----------------------------------------
// Return a Sorted Array Without Changing the Original Array
// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Only change code below this line
//   let arr2 = [...arr];
//   return arr2.sort(function (a,b){
//     return a-b>0 ? 1: a-b<0 ? -1 : 0
//   })
//   // Only change code above this line
// }

// console.log(nonMutatingSort(globalArray))
// // -- or using the concat method 
// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Add your code below this line
//   return [].concat(arr).sort(function(a, b) {
//     return a - b;
//   });
//   // Add your code above this line
// }
// nonMutatingSort(globalArray);
// Split a String into an Array Using the split Method
// The split method splits a string into an array of strings. It takes an argument for the delimiter, 
// which can be a character to use to break up the string or a regular expression.
// function splitify(str) {
//     // Only change code below this line
//     return str.split(/\W/)
  
//     // Only change code above this line
//   }
  
// console.log(splitify("Hello World,I-am code"));