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
// 